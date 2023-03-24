import PicoGL from "picogl";
import moize from "moize";

import edgeVs from "../shaders/edge.vs";
import edgeFs from "../shaders/edge.fs";

import nodeVs from "../shaders/node.vs";
import nodeFs from "../shaders/node.fs";

import { getPicoApp } from "./rendering";
import { getColorBuffers, getPositionBuffers, getRadiusBuffers } from "./animation";

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
  
  const pointVertexBuffer = getPicoApp().createVertexBuffer(PicoGL.FLOAT, 3, new Float32Array([0,0,0]));

  return getPicoApp().createVertexArray()
    .vertexAttributeBuffer(0, pointVertexBuffer)
    // .vertexAttributeBuffer(3, cubeBuffer)
    // .indexBuffer(cubeIndexBuffer)
});

const loadNodeVertexArray = () => {
  const vertexArray = getNodeVertexArray();
  const positionBuffer = getPositionBuffers().current;
  const colorBuffer = getColorBuffers().current;
  const radiusBuffer = getRadiusBuffers().current;

  return vertexArray
    // .vertexAttributeBuffer(0, positionBuffer)
    // .vertexAttributeBuffer(1, colorBuffer)
    // .vertexAttributeBuffer(2, radiusBuffer)
    .instanceAttributeBuffer(0, positionBuffer)
    .instanceAttributeBuffer(1, colorBuffer)
    .instanceAttributeBuffer(2, radiusBuffer)
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

export const loadEdgeVertexArray = moize.infinite((
  edgeData: ArrayBufferView,
  positionBuffers,
  colorBuffers,
  radiusBuffers,
) => {
  const vertexArray = getEdgeVertexArray();
  const indexBuffer = getEdgeIndexBuffer(edgeData);
  return vertexArray
    .vertexAttributeBuffer(0, positionBuffers)
    .vertexAttributeBuffer(1, colorBuffers)
    .vertexAttributeBuffer(2, radiusBuffers)
    .indexBuffer(indexBuffer)
});

export const getMostRecentEdgeVertexArray = (edgeData) => {
  const positionBuffers = getPositionBuffers().current;
  const colorBuffers = getColorBuffers().current;
  const radiusBuffers = getRadiusBuffers().current;
  return loadEdgeVertexArray(edgeData, positionBuffers, colorBuffers, radiusBuffers);
}

export const getEdgeVisualizerDrawCall = moize.infinite((data: ArrayBufferView) => {
  const program = getEdgeVisualizerProgram();
  const vertexArray = getMostRecentEdgeVertexArray(data);
  return getPicoApp().createDrawCall(program, vertexArray)
    .primitive(PicoGL.LINES)
});