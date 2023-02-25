import moize from 'moize'
import GraphDbWorker from './graph-db-worker.js?worker'
import { wrap } from 'comlink'
import { fromPairs } from 'lodash-es'

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

export const graphData = moize.promise(fetchData)
export const graphWorker = wrap(new GraphDbWorker())

export const nodeScaleFn = (dependents) => Math.max(4*Math.log(2*dependents?.length**1.2), 2)

export const prepareVisualizerData = async () => {
  const { valueNetworkData } = await graphData()
  const nodes = Object.entries(valueNetworkData).map(([project, {dependents: dependents, owner, dependencies}], index) => ({
    index,
    project,
    owner,
    size: nodeScaleFn(dependents),
  }))
  
  const nodesByProject = fromPairs(nodes.map(node => [node.project, node]))

  const links = Object.entries(valueNetworkData).flatMap(([project, { dependents }]) =>
    dependents?.map(dependent => ({
      source: dependent,
      sourceNode: nodesByProject[dependent],
      sourceIndex: nodes.findIndex(node => node.project === dependent),
      target: project,
      targetNode: nodesByProject[project],
      targetIndex: nodes.findIndex(node => node.project === project),
    }))
  ).filter(edge => edge)
  
  return { nodes, links, nodesByProject }
}

export const prepareGraphDBWorker = async () => {
  const data = await graphData()
  return await graphWorker.buildGraph(data)
}

export const { doQuery, buildGraph } = graphWorker