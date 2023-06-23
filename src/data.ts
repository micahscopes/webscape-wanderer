import moize from 'moize'
import { graphLayout, graphDb} from './get-workers'
import { proxy } from 'comlink'
import { fromPairs, uniqWith } from 'lodash-es';
import ColorHash from 'color-hash'
import { getPositionLayers, hasEnoughFramebufferAttachments } from './gpu/interpolation'
import { GraphLayoutSimulator } from './graph-layout-simulator';

// console.log(graphLayout, 'graphLayout???')

const colorHash = new ColorHash({ saturation: 0.7, lightness: 0.6 });

const projectId = (project) => project.replace(/^git\+/, '')

import { transform } from 'lodash-es'
import { params } from './parameters';

const cleanData = ({ valueNetworkData, projectsData, organizationsData }) => {
  // we need to remove `git+` from all project ids
  valueNetworkData = transform(valueNetworkData, (result, value, key) => {
    value.dependencies = value.dependencies ? value.dependencies.map(projectId) : []
    value.dependents = value.dependents ? value.dependents.map(projectId) : []
    value.owner = value.owner ? projectId(value.owner) : null
    result[projectId(key)] = value
  }, {})
  projectsData = transform(projectsData, (result, value, key) => {
    result[projectId(key)] = value
  }, {})
  organizationsData = transform(organizationsData, (result, value, key) => {
    result[projectId(key)] = value
  }, {})

  return { valueNetworkData, projectsData, organizationsData }
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
    

    return cleanData({ valueNetworkData, projectsData, organizationsData })
  }
  
export const datEcosystemData = moize.promise(fetchData)

export const nodeScaleFn = (dependents) => Math.max(4*Math.log(2*(dependents?.length || 1.0)**1.2), 2)

export const makeNavId = (project) => {
  const id = project
    // remove base url portion matching any site, including leading slash
    .replace(/^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z0-9-]+/i, '')
    // remove trailing slash
    .replace(/\/$/, '')
    // remove leading slash
    .replace(/^\//, '')
    // convert non-url friendly characters to dashes
    .replace(/[^A-Za-z0-9\.]/gi, '-')
    // remove duplicate dashes
    .replace(/-+/g, '-')
    // replace leading "package"
    .replace(/^package-/, '')
    // remove "v-" from version numbers
    .replace(/-v-/, '-')
  
    return id //.split('-').reverse().join('-')  
}

export const getGraphData = moize.promise(async () => {
  // return randomGraphData(10000,30000);
  // return randomTreesData(20, 4, 5,8, 8000);

  const { valueNetworkData, projectsData, organizationsData } = await datEcosystemData()
  // console.log(await datEcosystemData())
  const nodes = Object.entries(valueNetworkData).map(([project, {dependents: dependents, owner, dependencies}], index) => ({
    index,
    project,
    id: project,
    data: projectsData[project],
    // make a url friendly id
    navId: makeNavId(project),
    owner,
    ownerData: organizationsData[owner] || {},
    color: [...colorHash.rgb(owner || project || String(index)).map(x => x/255), 1],
    size: nodeScaleFn(dependents),
    dependents,
    dependencies,
  }))
  
  const nodeFromIndex = fromPairs(nodes.map(node => [node.index, node]))
  const nodesByProject = fromPairs(nodes.map(node => [node.project, node]))
  const nodesByProjectName = fromPairs(nodes.map(node => [node.data?.name, node]))
  const nodesByNavId = fromPairs(nodes.map(node => [node.navId, node]))

  let links = Object.entries(valueNetworkData).flatMap(([project, { dependents, dependencies }]) =>
    (dependents || []).map(dependent => ({
      source: dependent,
      sourceNode: nodesByProject[dependent],
      sourceIndex: nodes.find(node => node.project === dependent).index,
      target: project,
      targetNode: nodesByProject[project],
      targetIndex: nodes.find(node => node.project === project).index,
    }))
    .concat((dependencies || []).map(dependency => ({
      source: project,
      sourceNode: nodesByProject[project],
      sourceIndex: nodes.find(node => node.project === project).index,
      target: dependency,
      targetNode: nodesByProject[dependency],
      targetIndex: nodes.find(node => node.project === dependency).index,
    })))
  ).filter(edge => edge)
  
  links = uniqWith(links, (a, b) => a.sourceIndex === b.sourceIndex && a.targetIndex === b.targetIndex)
  
  const linkIndexPairs = links.map(({ sourceIndex, targetIndex }) => [sourceIndex, targetIndex])
  // console.log('link count', links.length)
  
  const edgeIndexFromLinkIndices = fromPairs(linkIndexPairs.map(([sourceIndex, targetIndex], index) => [`${sourceIndex}-${targetIndex}`, index]))
  const edgeFromLinkIndices = fromPairs(linkIndexPairs.map(([sourceIndex, targetIndex], index) => [`${sourceIndex}-${targetIndex}`, links[index]]))
  
  return { nodes, links, linkIndexPairs, nodesByNavId, nodesByProject, nodesByProjectName }
})

export const randomGraphData = (numNodes, numEdges) => {
  const nodes = [...Array(numNodes).keys()].map(index => ({
    index,
    id: `node://${index}.xyz`,
    size: 1,
    color: [...colorHash.rgb(String(index)).map(x => x/255), 1],
    navId: makeNavId(`node://${index}.xyz`),
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
  

  // const nodeFromIndex = fromPairs(nodes.map(node => [node.index, node]))
  // const nodesByProject = fromPairs(nodes.map(node => [node.project, node]))
  // const nodesByProjectName = fromPairs(nodes.map(node => [node.data?.name, node]))
  const nodesByNavId = fromPairs(nodes.map(node => [node.navId, node]))
  return { nodes, links, linkIndexPairs, nodesByNavId }
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
    nodes.push({ index, size, x,y,z,
      color: [...colorHash.rgb(String(index)).map(x => x/255), 1],
      id: `node://${index}.xyz`,
      navId: makeNavId(`node://${index}.xyz`),
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
  
  
  const nodesByNavId = fromPairs(nodes.map(node => [node.navId, node]))
  return { nodes, links, linkIndexPairs, nodesByNavId }
}


export const prepareGraphDBWorker = async () => {
  const data = await datEcosystemData()
  return await graphDb.buildGraph(data)
}

const { NgraphForceLayout, D3ForceLayout } = graphLayout

export const getLayoutSimulator = moize.infinite(async () => {
  const engine: GraphLayoutSimulator = await new D3ForceLayout(await getGraphData());
  engine.start()
  return engine
})

let latestTargetPositions;
export const getLatestTargetPositions = () => latestTargetPositions

export const updateNodePositionTargets = async () => {
  const sim = await getLayoutSimulator()
  sim.getPositions(proxy(
    positions => {
      if (positions.length > 0) {
        latestTargetPositions = positions
        if (hasEnoughFramebufferAttachments()) {
          getPositionLayers().target.setFromArray(positions)
        } else {
          getPositionLayers().view.setFromArray(positions)
        }
      }
    }
  ))
}

export const getNodePosition = (node) => {
  const positions = getLatestTargetPositions() ? getLatestTargetPositions() : []
  const index = node.index
  return [positions[index*3], positions[index*3+1], positions[index*3+2]] //.map(x => x * params.globalScale)
}

export const { doQuery, buildGraph } = graphDb
export { graphDb as graphWorker, graphLayout as graphLayoutWorker }
