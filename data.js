async function fetchData() {
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

import GraphDbWorker from './graph-db-worker.js?worker'
import { wrap } from 'comlink'

export const graphWorker = wrap(new GraphDbWorker())

export const buildGraphDb = async () => {
  const data = await fetchData()
  await graphWorker.buildGraph(data)
  return data
}

export const { getGraphData, getDownstreamDependents, getDirectDependents, doQuery } = graphWorker