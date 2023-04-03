import moize from 'moize'
import GraphDbWorker from './graph-db-worker.js?worker'
import GraphLayoutWorker from './graph-layout-worker.js?worker'
import { wrap, proxy } from 'comlink'
import { fromPairs, throttle, uniqWith } from 'lodash-es'
import init, { ForceGraphSimulator } from "../lib/fdg-wasm/fdg-wasm.js";
import { getPositionBuffers } from './gpu/animation'
import ColorHash from 'color-hash'

const colorHash = new ColorHash({ lightness: [0.35, 0.5, 0.65] });

function projectOrgColor(node) {
  return colorHash.rgb(node.owner || "");
}

const fetchData =
  async () => {
    const DAT_GARDEN_BASE_URL = "https://dat-ecosystem.org/dat-garden-rake/"
    const dataIndex = await fetch(`${DAT_GARDEN_BASE_URL}index.json`).then(x => x.json())
    const LATEST_DATA_BASE_URL = `${DAT_GARDEN_BASE_URL}${dataIndex.latest}`
    const [valueNetworkData, projectsData, organizationsData] = await Promise.all([
      fetch(LATEST_DATA_BASE_URL + '/../valuenetwork.json').then(x => x.json()),
      fetch(LATEST_DATA_BASE_URL + '/../projects.json').then(x => x.json()),
      fetch(LATEST_DATA_BASE_URL + '/../organizations.json').then(x => x.json())
    ])

    return { valueNetworkData, projectsData, organizationsData }
  }

export const datEcosystemData = moize.promise(fetchData)
export const graphWorker = wrap(new GraphDbWorker())
export const graphLayoutWorker = wrap(new GraphLayoutWorker())

export const nodeScaleFn = (dependents) => Math.max(4*Math.log(2*(dependents?.length || 1.0)**1.2), 2)

export const getGraphData = moize.promise(async () => {
  const { valueNetworkData } = await datEcosystemData()
  const nodes = Object.entries(valueNetworkData).map(([project, {dependents: dependents, owner, dependencies}], index) => ({
    index,
    project,
    id: project,
    owner,
    // color: [...colorHash.rgb(project || String(index)).map(x => x/255), 1],
    color: [...colorHash.rgb(owner || project || String(index)).map(x => x/255), 1],
    // color: [1,0,0,1],
    size: nodeScaleFn(dependents),
    dependents,
    dependencies,
  }))
  
  const nodeFromIndex = fromPairs(nodes.map(node => [node.index, node]))
  const nodeFromProject = fromPairs(nodes.map(node => [node.project, node]))

  let links = Object.entries(valueNetworkData).flatMap(([project, { dependents, dependencies }]) =>
    (dependents || []).map(dependent => ({
      source: dependent,
      sourceNode: nodeFromProject[dependent],
      sourceIndex: nodes.find(node => node.project === dependent).index,
      target: project,
      targetNode: nodeFromProject[project],
      targetIndex: nodes.find(node => node.project === project).index,
    }))
    .concat((dependencies || []).map(dependency => ({
      source: project,
      sourceNode: nodeFromProject[project],
      sourceIndex: nodes.find(node => node.project === project).index,
      target: dependency,
      targetNode: nodeFromProject[dependency],
      targetIndex: nodes.find(node => node.project === dependency).index,
    })))
  ).filter(edge => edge)
  
  links = uniqWith(links, (a, b) => a.sourceIndex === b.sourceIndex && a.targetIndex === b.targetIndex)
  
  const linkIndexPairs = links.map(({ sourceIndex, targetIndex }) => [sourceIndex, targetIndex])
  console.log('link count', links.length)
  
  const edgeIndexFromLinkIndices = fromPairs(linkIndexPairs.map(([sourceIndex, targetIndex], index) => [`${sourceIndex}-${targetIndex}`, index]))
  const edgeFromLinkIndices = fromPairs(linkIndexPairs.map(([sourceIndex, targetIndex], index) => [`${sourceIndex}-${targetIndex}`, links[index]]))
  
  return { nodes, links, linkIndexPairs, nodesByProject: nodeFromProject }
})

export const randomGraphData = (numNodes, numEdges) => {
  const nodes = [...Array(numNodes).keys()].map(index => ({
    index,
    id: String(index),
    size: 1,
    color: [...colorHash.rgb(String(index)).map(x => x/255), 1],
  }))
  
  const links = [...Array(numEdges).keys()].map(() => {
    const sourceIndex = Math.floor(Math.random() * numNodes)
    const targetIndex = Math.floor(Math.random() * numNodes)
    return {
      sourceIndex,
      targetIndex,
      source: nodes[sourceIndex],
      target: nodes[targetIndex],
    }
  })
  
  const linkIndexPairs = links.map(({ sourceIndex, targetIndex }) => [sourceIndex, targetIndex])
  
  return { nodes, links, linkIndexPairs }
}

export const randomTreesData = (trunks, numLevels, minChildren, maxChildren, maxNodes) => {
  const nodes = []
  const links = []
  const linkIndexPairs = []

  const addNode = (parentIndex, level, offset=[0,0,0]) => {
    const index = nodes.length
    const size = 1
    const [x,y,z] = [
      Math.random(),
      Math.random(), 
      Math.random(),
    ]
    .map(x => x/3)
    .map((x, i) => x + offset[i])
    nodes.push({ index, size, id: String(index), x,y,z,
      color: [...colorHash.rgb(String(index)).map(x => x/255), 1],
    })
    if (parentIndex !== undefined) {
      links.push({
        sourceIndex: parentIndex,
        targetIndex: index,
        source: nodes[parentIndex],
        target: nodes[index],
      });
      linkIndexPairs.push([parentIndex, index])
    }
    if (level < numLevels && nodes.length < maxNodes) {
      const numChildren = Math.floor(Math.random() * (maxChildren - minChildren)) + minChildren
      for (let i = 0; i < numChildren; i++) {
        addNode(index, level + 1, [x,y,z])
      }
    }
  }

  for (let i = 0; i < trunks; i++) {
    addNode(undefined, 0, [Math.random(), Math.random(), Math.random()].map(x => x * 2 - 1))
  }
  
  // console.log(nodes)
  return { nodes, links, linkIndexPairs }
}


export const prepareGraphDBWorker = async () => {
  const data = await datEcosystemData()
  return await graphWorker.buildGraph(data)
}

export const prepareGraphLayoutWorker = async (data, sim=graphLayoutWorker.useD3ForceSimulator) => {
  return await sim(
    data, 
    proxy(
      // let's not backlog the main thread with layout updates
      throttle(positions => getPositionBuffers()?.targetData(positions), 1000/60)
  ))
}

export const getNodePosition = (node) => {
  const positions = getPositionBuffers().mostRecentData
  const index = node.index
  return [positions[index*3], positions[index*3+1], positions[index*3+2]]
}

export const useD3ForceSimulator = async (data) => await prepareGraphLayoutWorker(data || await prepareVisualizerData(), graphLayoutWorker.useD3ForceSimulator)
export const useFDGSimulator = async (data) => await prepareGraphLayoutWorker(data || await prepareVisualizerData(), graphLayoutWorker.useFDGSimulator)
export const useNgraphForceSimulator = async (data) => await prepareGraphLayoutWorker(data || await prepareVisualizerData(), graphLayoutWorker.useNgraphForceSimulator)

export const { doQuery, buildGraph } = graphWorker