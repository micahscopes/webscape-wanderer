import PicoGL from "picogl";
import moize from "moize";

import edgeVs from "../shaders/edge.vs";
import edgeFs from "../shaders/edge.fs";

import nodeVs from "../shaders/node.vs";
import nodeFs from "../shaders/node.fs";

import { getPicoApp } from "./rendering";
import { getColorBuffers, getPositionBuffers, getRadiusBuffers } from "./node-state";

const getNodeVisualizerProgram = moize(() => {
  return getPicoApp().createProgram(nodeVs, nodeFs)
});

const getNodeIndexBuffer = moize.infinite((data) =>
  getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_SHORT, data)
);
const getNodeVertexArray = moize.infinite(() => {

  const cubeBuffer = getPicoApp().createVertexBuffer(PicoGL.FLOAT, 3, new Float32Array([
    -1, -1, -1,
    1, -1, -1,
    1, 1, -1,
    -1, 1, -1,
    -1, -1, 1,
    1, -1, 1,
  ]));
  
  const cubeIndexBuffer = getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_SHORT, new Uint16Array([
    0, 1, 2, 0, 2, 3,
    1, 5, 6, 1, 6, 2,
    5, 4, 7, 5, 7, 6,
    4, 0, 3, 4, 3, 7,
    3, 2, 6, 3, 6, 7,
  ]))

  return getPicoApp().createVertexArray()
    .vertexAttributeBuffer(3, cubeBuffer)
    // .indexBuffer(cubeIndexBuffer)
});

const loadNodeVertexArray = () => {
  const vertexArray = getNodeVertexArray();
  const positionBuffer = getPositionBuffers().current;
  const colorBuffer = getColorBuffers().current;
  const radiusBuffer = getRadiusBuffers().current;

  return vertexArray
    .vertexAttributeBuffer(0, positionBuffer)
    .vertexAttributeBuffer(1, colorBuffer)
    .vertexAttributeBuffer(2, radiusBuffer)
    // .instanceAttributeBuffer(0, positionBuffer)
    // .instanceAttributeBuffer(1, colorBuffer)
    // .instanceAttributeBuffer(2, radiusBuffer)
};

export const getNodeVisualizerDrawCall = moize.infinite((data?: number | ArrayBufferView) => {
  const program = getNodeVisualizerProgram();

  const vertexArray = loadNodeVertexArray()
    // .indexBuffer(getNodeIndexBuffer(data));

  return getPicoApp().createDrawCall(program, vertexArray)
    .primitive(PicoGL.POINTS)
});

const getEdgeVisualizerProgram = moize(() =>
  getPicoApp().createProgram(edgeVs, edgeFs)
);

const getEdgeIndexBuffer = moize.infinite((data) =>
  getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_SHORT, data)
);
const getEdgeVertexArray = moize.infinite(() =>
  getPicoApp().createVertexArray()
);

const loadEdgeVertexArray = (data: ArrayBufferView) => {
  const vertexArray = getEdgeVertexArray();
  const indexBuffer = getEdgeIndexBuffer(data);
  return vertexArray
    .vertexAttributeBuffer(0, getPositionBuffers().current)
    .vertexAttributeBuffer(1, getColorBuffers().current)
    .vertexAttributeBuffer(2, getRadiusBuffers().current)
    .indexBuffer(indexBuffer)
};

export const getEdgeVisualizerDrawCall = moize.infinite((data: ArrayBufferView) => {
  const program = getEdgeVisualizerProgram();
  const vertexArray = loadEdgeVertexArray(data);
  return getPicoApp().createDrawCall(program, vertexArray)
    .primitive(PicoGL.LINES)
});