import { MemoryLevel } from 'memory-level';
import { DataFactory } from 'rdf-data-factory';
import { Quadstore } from 'quadstore';
import { Engine } from 'quadstore-comunica';
import { expose, proxy } from 'comlink'
import { downstreamDependentsQuery, directDependentsQuery } from './query-helpers';

import { OWNS, DEPENDS_ON} from './query-helpers';

const backend = new MemoryLevel();
const df = new DataFactory();
const store = new Quadstore({ backend, dataFactory: df });
const engine = new Engine(store);

await store.open();

async function buildGraph(data) {
  // await store.open();
  const {valueNetworkData, projectsData, organizationsData} = data
  
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


// export async function getGraphDataDirect() {
//   return await store.get({predicate: df.namedNode(DEPENDS_ON)})
// }

async function getGraphData() {
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


// looking good
async function getDownstreamDependents(startProject) {
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

async function getDirectDependents(startProject) {
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

const doQuery = async (
  query, onData, onEnd, onError
) => {
  await engine.queryBindings(query).then($ => {
    onData && $.on('data', data => onData(data, proxy(data.get.bind(data))))
    onEnd && $.on('end', data => onEnd(data, data && proxy(data.get.bind(data))))
    onError && $.on('error', data => onError(data, data && proxy(data.get.bind(data))))
  })
}

expose({
  buildGraph,
  getGraphData,
  getDownstreamDependents,
  getDirectDependents,
  doQuery,
})