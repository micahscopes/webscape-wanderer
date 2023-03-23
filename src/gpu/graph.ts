import PicoGL from "picogl";
import moize from "moize";

import edgeVs from "./shaders/edge.vs";
import edgeFs from "./shaders/edge.fs";

import nodeVs from "./shaders/node.vs";
import nodeFs from "./shaders/node.fs";

import { getPicoApp } from "./rendering";
import { getColorBuffers, getPositionBuffers } from "./node-state";

const getNodeVisualizerProgram = moize(() => {
  return getPicoApp().createProgram(nodeVs, nodeFs);
});

const getNodeIndexBuffer = moize.infinite((numNodes) =>
  getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_INT, 1, numNodes)
);
const getNodeVertexArray = moize.infinite(() =>
  getPicoApp().createVertexArray()
);

const loadNodeVertexArray = (numNodes: number) => {
  const vertexArray = getNodeVertexArray();
  const indexBuffer = getNodeIndexBuffer(numNodes);
  return vertexArray
    .indexBuffer(indexBuffer)
    .vertexAttributeBuffer(0, getPositionBuffers().current)
    .vertexAttributeBuffer(1, getColorBuffers().current)
    .vertexAttributeBuffer(2, getPositionBuffers().updated);
};

export const getNodeVisualizerDrawCall = moize.infinite((numNodes: number) => {
  const program = getNodeVisualizerProgram();
  const vertexArray = loadNodeVertexArray(numNodes);
  return getPicoApp().createDrawCall(program, vertexArray);
});

const getEdgeVisualizerProgram = moize(() =>
  getPicoApp().createProgram(edgeVs, edgeFs)
);

const getEdgeIndexBuffer = moize.infinite((numEdges) =>
  getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_INT, 2, numEdges)
);
const getEdgeVertexArray = moize.infinite(() =>
  getPicoApp().createVertexArray()
);

const loadEdgeVertexArray = (numEdges: number) => {
  const vertexArray = getEdgeVertexArray();
  const indexBuffer = getEdgeIndexBuffer(numEdges);
  return vertexArray
    .indexBuffer(indexBuffer)
    .vertexAttributeBuffer(0, getPositionBuffers().current)
    .vertexAttributeBuffer(1, getColorBuffers().current)
    .vertexAttributeBuffer(2, getPositionBuffers().updated);
};
