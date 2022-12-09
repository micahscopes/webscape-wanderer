export async function fetchData() {
    const DAT_GARDEN_BASE_URL = "https://dat-ecosystem.org/dat-garden-rake/"
    const dataIndex = await fetch(`${DAT_GARDEN_BASE_URL}index.json`).then(x => x.json())
    const LATEST_DATA_BASE_URL = `${DAT_GARDEN_BASE_URL}${dataIndex.latest}`
    const [valueNetworkData, projectsData, organizationsData] = await Promise.all([
      fetch(LATEST_DATA_BASE_URL + '/../valuenetwork.json').then(x => x.json()),
      fetch(LATEST_DATA_BASE_URL + '/../projects.json').then(x => x.json()),
      fetch(LATEST_DATA_BASE_URL + '/../organizations.json').then(x => x.json())
    ])
    
    return {valueNetworkData, projectsData, organizationsData}
}

export const DEPENDS_ON = 'http://localhost#dependson'
export const OWNS = 'http://localhost#owns'

import { MemoryLevel } from 'memory-level';
import { DataFactory } from 'rdf-data-factory';
import { Quadstore } from 'quadstore';
import { Engine } from 'quadstore-comunica';

const backend = new MemoryLevel();
const df = new DataFactory();
const store = new Quadstore({backend, dataFactory: df});
const engine = new Engine(store);

await store.open();

export async function buildGraph() {
  // await store.open();
  const {valueNetworkData, projectsData, organizationsData} = await fetchData()
  
  const quads = Object.entries(valueNetworkData)
    .flatMap(([project, { dependents, dependencies, owner }]) => [
      owner &&
        project &&
        df.quad(
          df.namedNode(owner),
          df.literal(OWNS),
          df.namedNode(project),
          df.defaultGraph()
        ),
      ...(dependents || [])
        .filter((x) => x)
        .map((dependent) =>
          df.quad(
            df.namedNode(project),
            df.namedNode(DEPENDS_ON),
            df.namedNode(dependent),
            df.defaultGraph()
          )
        ),
      ...(dependencies || [])
        .filter((x) => x)
        .map((dependency) =>
          df.quad(
            df.namedNode(dependency),
            df.namedNode(DEPENDS_ON),
            df.namedNode(project),
            df.defaultGraph()
          )
        ),
    ])
    .filter((x) => x);

  const moreQuads = 
      [...Object.entries(organizationsData).flatMap(([org, info]) =>
        Object.entries(info).flatMap(([key, value]) =>
          value && df.quad(df.namedNode(org), df.namedNode(key), df.literal(value))
        ).filter(x => x)
      ),
      ...Object.entries(projectsData).flatMap(([org, info]) =>
        Object.entries(info).flatMap(([key, value]) =>
          value && df.quad(df.namedNode(org), df.namedNode(key), df.literal(value))
        ).filter(x => x)
      )]
    
  await store.multiPut(
    [...quads, ...moreQuads]
  )
}

export function getGraphData(queryParams={}) {
  return store.get(queryParams)
}

window.getGraphData = getGraphData
window.df = df
window.store = store
window.engine = engine
export { backend, df, store, engine }