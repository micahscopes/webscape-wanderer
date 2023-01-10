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

export const DEPENDS_ON = 'http://dat-ecosystem.org#dependson'
export const OWNS = 'http://dat-ecosystem.org#owns'

import { MemoryLevel } from 'memory-level';
import { DataFactory } from 'rdf-data-factory';
import { Quadstore } from 'quadstore';
import { Engine } from 'quadstore-comunica';

const backend = new MemoryLevel();
const df = new DataFactory();
const store = new Quadstore({ backend, dataFactory: df });
const engine = new Engine(store);

await store.open();

export async function buildGraph() {
  // await store.open();
  const {valueNetworkData, projectsData, organizationsData} = await fetchData()
  
  const valueNetworkQuads = Object.entries(valueNetworkData)
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

    const organizationsQuads = [...Object.entries(organizationsData).flatMap(([org, info]) =>
        Object.entries(info).flatMap(([key, value]) =>
          value && df.quad(df.namedNode(org), df.namedNode(key), df.literal(value))
        ).filter(x => x)
      )]
    const projectsQuads = [...Object.entries(projectsData).flatMap(([org, info]) =>
        Object.entries(info).flatMap(([key, value]) =>
          value && df.quad(df.namedNode(org), df.namedNode(key), df.literal(value))
        ).filter(x => x)
      )]
    
  const entries = [...valueNetworkQuads, ...organizationsQuads, ...projectsQuads]
  
  await store.multiPut(entries)
  console.log('inserted', entries)
}

export async function getGraphDataDirect() {
  return await store.get({predicate: df.namedNode(DEPENDS_ON)})
}

export async function getGraphData() {
  let results = []
  return engine.queryBindings(`
    SELECT ?subject ?object
    WHERE {
        ?subject <http://dat-ecosystem.org#dependson> ?object .
    }
  `).then(bindings => {
      bindings.on('data', data => {
        // console.log(data.get('subject'))
        results.push({
            subject: data.get('subject').value,
            object: data.get('object').value
        });
      });
      bindings.on('end', () => console.log('done', results));
  });
}


export const downstreamDependentsQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent WHERE {
    <${startProject}> dependson:* ?dependent .
  }
`
export const directDependentsQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent
  WHERE {
      <${startProject}> dependson: ?dependent
  }
`

// looking good
export async function getDownstreamDependents(startProject) {
  const query = downstreamDependentsQuery(startProject)
  let results = []
  let bindings = await engine.queryBindings(query)
  return new Promise((resolve, reject) => {
      bindings.on('data', data => {
          results.push(data.get('dependent').value);
      });
      bindings.on('end', () => resolve(results));
      bindings.on('error', (error) => reject(error))
  });
}

export async function getDirectDependents(startProject) {
  const query = directDependentsQuery(startProject)
  let results = []
  let bindings = await engine.queryBindings(query)
  return new Promise((resolve, reject) => {
      bindings.on('data', data => {
          results.push({
              directDependents: data.get('dependent').value
          });
      });
      bindings.on('end', () => resolve(results));
      bindings.on('error', (error) => reject(error))
  });
}
window.getDirectDependents = getDirectDependents

window.getGraphData = getGraphData
window.getGraphDataDirect = getGraphDataDirect
window.getDownstreamDependents = getDownstreamDependents
window.store = store
window.df = df
window.OWNS = OWNS
window.DEPENDS_ON = DEPENDS_ON
export { backend, store, df, engine }