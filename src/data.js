import moize from 'moize'
// import GraphDbWorker from './graph-db-worker.js?worker'
import { wrap } from 'comlink'
import work from 'webworkify'

const grab = async url => JSON.parse(localStorage[url] || (localStorage[url] = await (await fetch(url)).text()))

const fetchData = async (BASE_URL = "https://dat-ecosystem.org/dat-garden-rake/") => {
  const index_url = `${BASE_URL}index.json`
  const dataIndex = await grab(index_url)
  const LATEST_DATA_BASE_URL = `${BASE_URL}${dataIndex.latest}`
  const [valueNetworkData, projectsData, organizationsData] = await Promise.all([
    grab(LATEST_DATA_BASE_URL + '/../valuenetwork.json'),
    grab(LATEST_DATA_BASE_URL + '/../projects.json'),
    grab(LATEST_DATA_BASE_URL + '/../organizations.json'),
  ])
  return { valueNetworkData, projectsData, organizationsData }
}

export const graphData = moize.promise(fetchData)


var GraphDbWorker = work(require('./graph-db-worker.js'));

export const graphWorker = wrap(GraphDbWorker)

export const nodeScaleFn = (dependents) => Math.max(4*Math.log(2*dependents?.length**1.2), 2)

export const prepareVisualizerData = async (base_url) => {
  const { valueNetworkData } = await graphData(base_url)
  const nodes = Object.entries(valueNetworkData).map(([project, {dependents: dependents, owner, dependencies}]) => ({
    project,
    owner,
    size: nodeScaleFn(dependents),
  }))

  const links = Object.entries(valueNetworkData).flatMap(([project, { dependents }]) =>
    dependents?.map(dependent => ({
      source: dependent,
      target: project
    }))
  ).filter(edge => edge)

  return { nodes, links }
}

export const prepareGraphDBWorker = async (BASE_URL) => {
  const data = await graphData(BASE_URL)
  return await graphWorker.buildGraph(data)
}

export const { doQuery, buildGraph } = graphWorker