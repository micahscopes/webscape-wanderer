import moize from "moize";
import { graphLayout, graphDb } from "./get-workers";
import { proxy } from "comlink";
import { fromPairs, uniqWith } from "lodash-es";
import ColorHash from "color-hash";
import {
  getColorLayers,
  getEmphasisLayers,
  getPositionLayers,
  getSizeLayers,
  hasEnoughFramebufferAttachments,
  setAllLayerSizes,
} from "./gpu/interpolation";
import { GraphLayoutSimulator } from "./graph-layout-simulator";

// console.log(graphLayout, 'graphLayout???')

const colorHash = new ColorHash({ saturation: 0.7, lightness: 0.6 });

const projectId = (project) => project.replace(/^git\+/, "");

import { transform } from "lodash-es";
import { attrs } from "./attributes";

const cleanData = ({ valueNetworkData, projectsData, organizationsData }) => {
  // we need to remove `git+` from all project ids
  valueNetworkData = transform(
    valueNetworkData,
    (result, value, key) => {
      value.dependencies = value.dependencies
        ? value.dependencies.map(projectId)
        : [];
      value.dependents = value.dependents
        ? value.dependents.map(projectId)
        : [];
      value.owner = value.owner ? projectId(value.owner) : null;
      result[projectId(key)] = value;
    },
    {}
  );
  projectsData = transform(
    projectsData,
    (result, value, key) => {
      result[projectId(key)] = value;
    },
    {}
  );
  organizationsData = transform(
    organizationsData,
    (result, value, key) => {
      result[projectId(key)] = value;
    },
    {}
  );

  return { valueNetworkData, projectsData, organizationsData };
};

import valueNetworkData from "../data/valuenetwork.json";
import projectsData from "../data/projects.json";
import organizationsData from "../data/organizations.json";
import { loadEdgeVertexArray, loadNodeVertexArray } from "./gpu/graph-viz";
import { asyncState, state } from "./state";

const fetchData = async () => {
  // const DAT_GARDEN_BASE_URL = "https://dat-ecosystem.org/dat-garden-rake/"
  // const dataIndex = await fetch(`${DAT_GARDEN_BASE_URL}index.json`).then(x => x.json())
  // const LATEST_DATA_BASE_URL = `${DAT_GARDEN_BASE_URL}${dataIndex.latest}`
  // const [valueNetworkData, projectsData, organizationsData] = await Promise.all([
  //   fetch(LATEST_DATA_BASE_URL + '/../valuenetwork.json').then(x => x.json()),
  //   fetch(LATEST_DATA_BASE_URL + '/../projects.json').then(x => x.json()),
  //   fetch(LATEST_DATA_BASE_URL + '/../organizations.json').then(x => x.json())
  // ])

  return cleanData({ valueNetworkData, projectsData, organizationsData });
};

export const datEcosystemData = moize.promise(fetchData);

export const nodeScaleFn = (dependents) =>
  Math.max(4 * Math.log(2 * (dependents?.length || 1.0) ** 1.2), 2);

export const makeNavId = (project) => {
  const id = project
    // remove base url portion matching any site, including leading slash
    .replace(/^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z0-9-]+/i, "")
    // remove trailing slash
    .replace(/\/$/, "")
    // remove leading slash
    .replace(/^\//, "")
    // convert non-url friendly characters to dashes
    .replace(/[^A-Za-z0-9\.]/gi, "-")
    // remove duplicate dashes
    .replace(/-+/g, "-")
    // replace leading "package"
    .replace(/^package-/, "")
    // remove "v-" from version numbers
    .replace(/-v-/, "-");

  return id; //.split('-').reverse().join('-')
};

export const setGraphData = async (ctx, data) => {
  // check if the promise has already been resolved
  let { set: setter } = asyncState(ctx, 'graphData');
  setter(data);

  const { nodes, linkIndexPairs } = data;

  prepareGraphDBWorker(ctx, data);
  loadEdgeVertexArray(ctx, linkIndexPairs);
  loadNodeVertexArray(ctx, nodes.length);

  setAllLayerSizes(ctx, nodes.length);

  // use node colors
  const colors = new Float32Array(nodes.flatMap(({ color }) => color));
  getColorLayers(ctx).target.setFromArray(colors);
  getColorLayers(ctx).current.setFromArray(colors);

  // sizes from node sizes
  const nodeSizes = new Float32Array(nodes.length);
  for (let i = 0; i < nodeSizes.length; i++) {
    nodeSizes[i] = Math.sqrt(nodes[i].size) / 40;
  }
  getSizeLayers(ctx).target.setFromArray(nodeSizes);
  getSizeLayers(ctx).current.setFromArray(nodeSizes);

  // initialize random node positions
  const scale = 40;
  const randomPoint = () => [
    Math.random() * scale - 1,
    Math.random() * scale - 1,
    Math.random() * scale - 1,
  ];
  // const initialNodePositions = new Float32Array(nodes.flatMap(n => [n.x, n.y, n.z]))
  const initialNodePositions = new Float32Array(nodes.flatMap(randomPoint));
  getPositionLayers(ctx).target.setFromArray(initialNodePositions);
  getPositionLayers(ctx).current.setFromArray(initialNodePositions);

  getEmphasisLayers(ctx).target.setFromArray(
    new Float32Array(nodes.length).fill(0)
  );
  getEmphasisLayers(ctx).current.setFromArray(
    new Float32Array(nodes.length).fill(0)
  );
};

export const getGraphData = async (context) => {
  return asyncState(context, 'graphData').get();
};

export const randomGraphData = (numNodes, numEdges) => {
  const nodes = [...Array(numNodes).keys()].map((index) => ({
    index,
    id: `node://${index}`,
    size: 10,
    color: [...colorHash.rgb(String(index)).map((x) => x / 255), 1],
    navId: makeNavId(`node-${index}`),
  }));

  const links = [...Array(numEdges).keys()].map(() => {
    const sourceIndex = Math.floor(Math.random() * numNodes);
    const targetIndex = Math.floor(Math.random() * numNodes);
    return {
      sourceIndex,
      targetIndex,
      source: nodes[sourceIndex],
      target: nodes[targetIndex],
    };
  });

  const linkIndexPairs = links.map(({ sourceIndex, targetIndex }) => [
    sourceIndex,
    targetIndex,
  ]);

  // const nodeFromIndex = fromPairs(nodes.map(node => [node.index, node]))
  // const nodesByProject = fromPairs(nodes.map(node => [node.project, node]))
  // const nodesByProjectName = fromPairs(nodes.map(node => [node.data?.name, node]))
  const nodesByNavId = fromPairs(nodes.map((node) => [node.navId, node]));
  const nodesById = fromPairs(nodes.map((node) => [node.id, node]));
  return { nodes, links, linkIndexPairs, nodesByNavId, nodesById };
};

export const randomTreesData = (
  trunks,
  numLevels,
  minChildren,
  maxChildren,
  maxNodes
) => {
  const nodes = [];
  const links = [];
  const linkIndexPairs = [];

  const addNode = (parentIndex, level, offset = [0, 0, 0]) => {
    const index = nodes.length;
    const size = 1;
    const [x, y, z] = [Math.random(), Math.random(), Math.random()]
      .map((x) => x / 3)
      .map((x, i) => x + offset[i]);
    nodes.push({
      index,
      size,
      x,
      y,
      z,
      color: [...colorHash.rgb(String(index)).map((x) => x / 255), 1],
      id: `node://${index}.xyz`,
      navId: makeNavId(`node://${index}.xyz`),
    });
    if (parentIndex !== undefined) {
      links.push({
        sourceIndex: parentIndex,
        targetIndex: index,
        source: nodes[parentIndex],
        target: nodes[index],
      });
      linkIndexPairs.push([parentIndex, index]);
    }
    if (level < numLevels && nodes.length < maxNodes) {
      const numChildren =
        Math.floor(Math.random() * (maxChildren - minChildren)) + minChildren;
      for (let i = 0; i < numChildren; i++) {
        addNode(index, level + 1, [x, y, z]);
      }
    }
  };

  for (let i = 0; i < trunks; i++) {
    addNode(
      undefined,
      0,
      [Math.random(), Math.random(), Math.random()].map((x) => x * 2 - 1)
    );
  }

  const nodesByNavId = fromPairs(nodes.map((node) => [node.navId, node]));
  const nodesById = fromPairs(nodes.map((node) => [node.id, node]));
  return { nodes, links, linkIndexPairs, nodesByNavId, nodesById };
};

export const prepareGraphDBWorker = async (ctx, data) => {
  // const data = await datEcosystemData()
  return await graphDb(ctx).buildGraph(data);
};

let engine: GraphLayoutSimulator;

export const getLayoutSimulator = moize.infinite(
  async (context, graphData) => {
    const D3ForceLayout = (await graphLayout(context)).D3ForceLayout
    engine = await new D3ForceLayout(graphData);
    engine.start();
    return engine;
  },
  {
    onExpire: () => {
      engine.stop();
    },
  }
);

export const getLatestTargetPositions = moize((ctx) => {
  return state(ctx, "latestTargetPositions").get();
  // let latestTargetPositions;
  // return latestTargetPositions;
});

export const updateNodePositionTargets = async (context) => {
  const data = await getGraphData(context);
  const sim = await getLayoutSimulator(context, data);
  sim.getPositions(
    proxy((positions) => {
      if (positions.length > 0) {
        state(context, "latestTargetPositions").set(positions);
        if (hasEnoughFramebufferAttachments(context)) {
          getPositionLayers(context).target.setFromArray(positions);
        } else {
          getPositionLayers(context).view.setFromArray(positions);
        }
      }
    })
  );
};

export const getNodePosition = (ctx, node) => {
  const positions = getLatestTargetPositions(ctx)
    ? getLatestTargetPositions(ctx)
    : [];
  const index = node.index;
  return [
    positions[index * 3],
    positions[index * 3 + 1],
    positions[index * 3 + 2],
  ]; //.map(x => x * params.globalScale)
};

// const doQuery = (ctx) => {
//   graphDb(ctx).doQuery;
// }

// const buildGraph = (ctx) => {
//   graphDb(ctx).buildGraph;
// }

// export const { doQuery, buildGraph } = graphDb;
// export { graphDb as graphWorker, graphLayout as graphLayoutWorker };
