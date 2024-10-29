import moize from "moize";
import { graphLayout, graphDb } from "./get-workers";
import { proxy } from "comlink";
import { fromPairs } from "lodash-es";
import ColorHash from "color-hash";
import { GraphLayoutSimulator } from "./graph-layout-simulator";

// console.log(graphLayout, 'graphLayout???')

const colorHash = new ColorHash({ saturation: 0.7, lightness: 0.6 });

const projectId = (project) => project.replace(/^git\+/, "");

import { transform } from "lodash-es";

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
    {},
  );
  projectsData = transform(
    projectsData,
    (result, value, key) => {
      result[projectId(key)] = value;
    },
    {},
  );
  organizationsData = transform(
    organizationsData,
    (result, value, key) => {
      result[projectId(key)] = value;
    },
    {},
  );

  return { valueNetworkData, projectsData, organizationsData };
};

// import valueNetworkData from "../data/valuenetwork.json";
// import projectsData from "../data/projects.json";
// import organizationsData from "../data/organizations.json";
import {
  getEdgeVisualizerMesh,
  loadEdgeVertexArray,
  loadNodeVertexArray,
} from "./gpu/graph-viz";
import { asyncState, state } from "./state";

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

import { graphBufferState } from "./state";

export const graphBuffers = moize.infinite((ctx) => {
  const bufferState = graphBufferState(ctx);
  window.bufferState = bufferState;
  // Initialize blank graph properties
  const properties = [
    { name: "position", type: "vec3" },
    { name: "color", type: "vec4" },
    { name: "emphasis", type: "float" },
    { name: "size", type: "float" },
  ];

  properties.forEach(({ name, type }) => {
    const initialArray = new Float32Array(0);
    const targetArray = new Float32Array(0);

    bufferState.setNodeProperties(`${name}Initial`, type, initialArray);
    bufferState.setNodeProperties(`${name}Target`, type, targetArray);
  });

  return bufferState;
});

export const setGraphData = async (ctx, data, conserveProperties = true) => {
  const { set: setter } = asyncState(ctx, "graphData");
  setter(data);
  const layoutSimulator = await getLayoutSimulator(ctx, data);
  layoutSimulator.setData(data);

  const { nodes, linkIndexPairs } = data;
  const bufferState = graphBuffers(ctx);
  const existingNodeCount = conserveProperties ? bufferState.getNodeCount() : 0;
  const existingEdgeCount = conserveProperties ? bufferState.getEdgeCount() : 0;

  // Set node count
  bufferState.setNodeCount(nodes.length);
  // Set edges
  bufferState.setEdges(linkIndexPairs);

  // Set positions (initial random positions)
  const scale = 40;
  const randomPoint = () => [
    Math.random() * scale - scale / 2,
    Math.random() * scale - scale / 2,
    Math.random() * scale - scale / 2,
  ];
  const initialPositions = new Float32Array(nodes.length * 3);
  if (conserveProperties) {
    const existingPositions = bufferState.getNodeProperties(
      "positionTarget",
      "vec3",
    ).value.array;
    initialPositions.set(existingPositions.subarray(0, existingNodeCount * 3));
    for (let i = existingNodeCount; i < nodes.length; i++) {
      const randomPos = randomPoint();
      initialPositions.set(randomPos, i * 3);
    }
  } else {
    for (let i = 0; i < nodes.length; i++) {
      const randomPos = randomPoint();
      initialPositions.set(randomPos, i * 3);
    }
  }
  bufferState.setNodeProperties("positionInitial", "vec3", initialPositions);
  bufferState.setNodeProperties("positionTarget", "vec3", initialPositions);

  // Set colors
  const colors = new Float32Array(nodes.length * 4);
  if (conserveProperties) {
    const existingColors = bufferState.getNodeProperties("colorTarget", "vec4")
      .value.array;
    colors.set(existingColors.subarray(0, existingNodeCount * 4));
    for (let i = existingNodeCount; i < nodes.length; i++) {
      colors.set(nodes[i].color, i * 4);
    }
  } else {
    for (let i = 0; i < nodes.length; i++) {
      colors.set(nodes[i].color, i * 4);
    }
  }
  bufferState.setNodeProperties("colorInitial", "vec4", colors);
  bufferState.setNodeProperties("colorTarget", "vec4", colors);

  // Set sizes
  const sizes = new Float32Array(nodes.length);
  if (conserveProperties) {
    const existingSizes = bufferState.getNodeProperties("sizeTarget", "float")
      .value.array;
    sizes.set(existingSizes.subarray(0, existingNodeCount));
    for (let i = existingNodeCount; i < nodes.length; i++) {
      sizes[i] = nodes[i].size;
    }
  } else {
    for (let i = 0; i < nodes.length; i++) {
      sizes[i] = nodes[i].size;
    }
  }
  bufferState.setNodeProperties("sizeInitial", "float", sizes);
  bufferState.setNodeProperties("sizeTarget", "float", sizes);

  // Set emphasis
  const emphasis = new Float32Array(nodes.length);
  if (conserveProperties) {
    const existingEmphasis = bufferState.getNodeProperties(
      "emphasisTarget",
      "float",
    ).value.array;
    emphasis.set(existingEmphasis.subarray(0, existingNodeCount));
    emphasis.fill(0, existingNodeCount);
  } else {
    emphasis.fill(0);
  }
  // bufferState.setNodeProperties("emphasisInitial", "float", emphasis);
  bufferState.setNodeProperties("emphasisTarget", "float", emphasis);

  // Load vertex arrays (if still needed)
  loadNodeVertexArray(ctx, nodes.length);

  getEdgeVisualizerMesh(ctx).geometry.instanceCount = linkIndexPairs.length;

  // Prepare graph DB worker (if still needed)
  prepareGraphDBWorker(ctx, data);
};

export const getGraphData = async (context) => {
  return await asyncState(context, "graphData").get();
};

export const randomNode = (index) => ({
  index,
  id: `node://${index}`,
  size: 1,
  color: [...colorHash.rgb(String(index)).map((x) => x / 255), 1],
  navId: makeNavId(`node-${index}`),
});

export const randomEdge = (nodes) => () => {
  const sourceIndex = Math.floor(Math.random() * nodes.length);
  const targetIndex = Math.floor(Math.random() * nodes.length);
  return {
    sourceIndex,
    targetIndex,
    source: nodes[sourceIndex],
    target: nodes[targetIndex],
  };
};

export const randomGraphData = (numNodes, numEdges, startingIndex = 0) => {
  const nodes = [...Array(numNodes).keys()]
    .map((index) => index + startingIndex)
    .map(randomNode);

  const links = [...Array(numEdges).keys()].map(randomEdge(nodes));

  const linkIndexPairs = links.map(({ sourceIndex, targetIndex }) => [
    sourceIndex,
    targetIndex,
  ]);

  const nodesByNavId = fromPairs(nodes.map((node) => [node.navId, node]));
  const nodesById = fromPairs(nodes.map((node) => [node.id, node]));
  return { nodes, links, linkIndexPairs, nodesByNavId, nodesById };
};

export const addRandomNodes = (n, { nodes, nodesByNavId, nodesById }) => {
  const startIndex = nodes.length;
  const newNodes = [...Array(n).keys()]
    .map((index) => index + startIndex)
    .map(randomNode);
  nodes.push(...newNodes);

  // Update nodesByNavId and nodesById
  newNodes.forEach((node) => {
    nodesByNavId[node.navId] = node;
    nodesById[node.id] = node;
  });
};

export const addRandomEdges = (n, { nodes, links, linkIndexPairs }) => {
  const newEdges = [...Array(n).keys()].map(randomEdge(nodes));
  links.push(...newEdges);
  linkIndexPairs.push(
    ...newEdges.map(({ sourceIndex, targetIndex }) => [
      sourceIndex,
      targetIndex,
    ]),
  );
};
// TODO: provide RDF data interfaces
export const dataFromGraph = ({ nodes: simpleNodes, links: simpleLinks }) => {
  const nodes = simpleNodes.map(({ id }, index) => ({
    index,
    id: `node://${id}`,
    size: 1,
    color: [...colorHash.rgb(String(id)).map((x) => x / 255), 1],
    navId: makeNavId(`node-${id}`),
  }));

  const links = simpleLinks.map((link) => {
    const sourceIndex = nodes.findIndex(
      (node) => node.id === `node://${link.source}`,
    );
    const targetIndex = nodes.findIndex(
      (node) => node.id === `node://${link.target}`,
    );
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

  const nodesByNavId = fromPairs(nodes.map((node) => [node.navId, node]));
  const nodesById = fromPairs(nodes.map((node) => [node.id, node]));
  return { nodes, links, linkIndexPairs, nodesByNavId, nodesById };
};

export const randomTreesData = (
  trunks: number,
  numLevels: number,
  minChildren: number,
  maxChildren: number,
  maxNodes: number,
) => {
  const nodes: any[] = [];
  const links: any[] = [];
  const linkIndexPairs: number[][] = [];
  const nodesByNavId: { [key: string]: any } = {};
  const nodesById: { [key: string]: any } = {};

  const addNode = (
    parentIndex: number | undefined,
    level: number,
    offset: number[] = [0, 0, 0],
  ) => {
    const index = nodes.length;
    const size = 1;
    const [x, y, z] = [Math.random(), Math.random(), Math.random()]
      .map((x) => x / 3)
      .map((x, i) => x + offset[i]);
    const newNode = {
      index,
      size,
      x,
      y,
      z,
      color: [...colorHash.rgb(String(index)).map((x: number) => x / 255), 1],
      id: `node://${index}.xyz`,
      navId: makeNavId(`node://${index}.xyz`),
    };
    nodes.push(newNode);
    nodesByNavId[newNode.navId] = newNode;
    nodesById[newNode.id] = newNode;
    if (parentIndex !== undefined) {
      links.push({
        sourceIndex: parentIndex,
        targetIndex: index,
        source: nodes[parentIndex],
        target: newNode,
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
      [Math.random(), Math.random(), Math.random()].map((x) => x * 2 - 1),
    );
  }

  return { nodes, links, linkIndexPairs, nodesByNavId, nodesById };
};

export const prepareGraphDBWorker = async (ctx, data) => {
  // const data = await datEcosystemData()
  return await graphDb(ctx).buildGraph(data);
};

let engine: GraphLayoutSimulator;

export const getLayoutSimulator = moize.infinite(
  async (context, graphData) => {
    const D3ForceLayout = (await graphLayout(context)).D3ForceLayout;
    engine = await new D3ForceLayout(graphData);
    engine.start();
    return engine;
  },
  {
    onExpire: () => {
      engine.stop();
    },
    transformArgs: ([context, graphData]) => [
      context,
      // graphData.nodes.length,
      // graphData.links.length,
    ],
  },
);

export const getLatestTargetPositions = (ctx) => {
  const buffers = graphBuffers(ctx);
  return buffers.getNodeProperties("positionTarget", "vec3").value.array;
};

export const updateNodePositionTargets = async (context) => {
  const data = await getGraphData(context);
  const sim = await getLayoutSimulator(context, data);
  sim.getPositions(
    proxy((positions) => {
      if (positions.length > 0) {
        let buffers = graphBuffers(context);
        buffers.setNodeProperties("positionTarget", "vec3", positions);
      }
    }),
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
