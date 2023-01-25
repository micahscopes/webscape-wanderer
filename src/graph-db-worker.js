import { fromPairs } from 'lodash-es';
import { MemoryLevel } from 'memory-level';
import { DataFactory } from 'rdf-data-factory';
import { Quadstore } from 'quadstore';
import { Engine } from 'quadstore-comunica';
import { expose, proxy } from 'comlink'
// import { downstreamDependentsQuery, directDependentsQuery } from './query-helpers';
import { OWNS, DEPENDS_ON} from './query-helpers';

const backend = new MemoryLevel();
const df = new DataFactory();
const store = new Quadstore({ backend, dataFactory: df });
const engine = new Engine(store);

const promise = store.open();

export default () => expose({ buildGraph, doQuery })


async function buildGraph(data) {
  await promise // store.open();
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
            df.namedNode(dependent),
            df.namedNode(DEPENDS_ON),
            df.namedNode(project),
            df.defaultGraph()
          )
        ),
      ...(dependencies || [])
        .filter((x) => x)
        .map((dependency) =>
          df.quad(
            df.namedNode(project),
            df.namedNode(DEPENDS_ON),
            df.namedNode(dependency),
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
  console.log('inserted', entries.length, 'entries')
}

const getProps = data => (props => {
  return fromPairs([props].flat().map(prop => [prop, data.get(prop)]))
}).bind(data)

// Execute a query and the provided callbacks for each result in the stream.
const doQuery = async (
  query, onData, onEnd, onError
) => {
  await engine.queryBindings(query).then($ => {
    onData && $.on('data', data => onData(data, proxy(getProps(data))))
    onEnd && $.on('end', data => onEnd(data, data && proxy(data.get.bind(data))))
    onError && $.on('error', data => onError(data, data && proxy(data.get.bind(data))))
  })
}
