import { MemoryLevel } from "memory-level";
import { DataFactory } from "rdf-data-factory";
import { Quadstore } from "quadstore";
import { Engine } from "quadstore-comunica";
import { proxy } from "comlink";

import { DOWNSTREAM_FROM } from "./query-helpers";
import { fromPairs } from "lodash-es";

const backend = new MemoryLevel();
const df = new DataFactory();
const store = new Quadstore({ backend, dataFactory: df });
const engine = new Engine(store);

async function buildGraph(data) {
  console.debug("BUILDING GRAPH", data);
  const { nodes, links } = data;
  const linkQuads = links.map(({ source, target }) =>
    df.quad(
      df.namedNode(target.id),
      df.namedNode(DOWNSTREAM_FROM),
      df.namedNode(source.id),
      df.defaultGraph(),
    ),
  );

  // const nodeQuads = nodes.map(({ id }) =>
  //     Object.entries(info).flatMap(([key, value]) =>
  //       value && df.quad(df.namedNode(org), df.namedNode(key), df.literal(value))
  //     ).filter(x => x)
  //   )

  const entries = [...linkQuads];

  console.debug("putting entries", entries);

  await store.open();
  await store.clear();
  await store.multiPut(entries);
  console.debug("inserted", entries.length, "entries");
}

const getProps = (data) =>
  (async (props) => {
    return fromPairs([props].flat().map((prop) => [prop, data.get(prop)]));
  }).bind(data);

// Execute a query and the provided callbacks for each result in the stream.
const doQuery = async (query, onData, onEnd, onError) => {
  await engine.queryBindings(query).then(($) => {
    onData && $.on("data", (data) => onData(data, proxy(getProps(data))));
    onEnd &&
      $.on("end", (data) => onEnd(data, data && proxy(data.get.bind(data))));
    onError &&
      $.on("error", (data) =>
        onError(data, data && proxy(data.get.bind(data))),
      );
  });
};

export { buildGraph, doQuery };
