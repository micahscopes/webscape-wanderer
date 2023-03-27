import PicoGL from "picogl";
import moize from "moize";

import edgeVs from "../shaders/edge.vs";
import edgeFs from "../shaders/edge.fs";

import nodeVs from "../shaders/node.vs";
import nodeFs from "../shaders/node.fs";

import nodePickerVs from "../shaders/node-picker.vs";
import nodePickerFs from "../shaders/node-picker.fs";

import { getPicoApp } from "./rendering";
import { getColorBuffers, getPositionBuffers, getRadiusBuffers } from "./animation";

import bunny from 'bunny'
import angleNormals from 'angle-normals'

const getNodeVisualizerProgram = moize(() => {
  return getPicoApp().createProgram(nodeVs, nodeFs)
});

const getNodePickerProgram = moize(() => {
  return getPicoApp().createProgram(nodePickerVs, nodePickerFs)
});

const getNodeIndexBuffer = moize.infinite((data) =>
  getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_INT, data)
);
const getNodeVertexArray = moize.infinite(() => {
  const bunnyBuffer = getPicoApp().createVertexBuffer(PicoGL.FLOAT, 3, new Float32Array(bunny.positions.flat()))
  const bunnyIndexBuffer = getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_SHORT, new Uint16Array(bunny.cells.flat()))
  // console.log(angleNormals(bunny.cells, bunny.positions))
  const bunnyNormals = getPicoApp().createVertexBuffer(PicoGL.FLOAT, 3, new Float32Array(angleNormals(bunny.cells, bunny.positions).flat()))

  return getPicoApp().createVertexArray()
    // .vertexAttributeBuffer(0, pointVertexBuffer)
    .vertexAttributeBuffer(3, bunnyBuffer)
    .vertexAttributeBuffer(4, bunnyNormals)
    .indexBuffer(bunnyIndexBuffer)
});

const loadNodeVertexArray = () => {
  const vertexArray = getNodeVertexArray();
  const positionBuffer = getPositionBuffers().current;
  const colorBuffer = getColorBuffers().current;
  const radiusBuffer = getRadiusBuffers().current;

  return vertexArray
    .instanceAttributeBuffer(0, positionBuffer)
    .instanceAttributeBuffer(1, colorBuffer)
    .instanceAttributeBuffer(2, radiusBuffer)
};


export const getNodePickerBuffer = moize.infinite(() => {
  const app = getPicoApp();
  // get device pixel ratio: 
  // const devicePixelRatio = window.devicePixelRatio || 1;
  // const width = app.width/devicePixelRatio;
  // const height = app.height/devicePixelRatio;
  const width = app.width;
  const height = app.height;
  let pickColorTarget = app.createTexture2D(width, height);
  let pickDepthTarget = app.createRenderbuffer(width, height, PicoGL.DEPTH_COMPONENT16);

  return app.createFramebuffer().colorTarget(0, pickColorTarget).depthTarget(pickDepthTarget);
})

export const getNodePickerDrawCall = moize.infinite(() => {
  const program = getNodePickerProgram();

  const vertexArray = loadNodeVertexArray()

  return getPicoApp().createDrawCall(program, vertexArray)
    .primitive(PicoGL.TRIANGLES)
})

export const getNodeVisualizerDrawCall = moize.infinite(() => {
  const program = getNodeVisualizerProgram();

  const vertexArray = loadNodeVertexArray()

  return getPicoApp().createDrawCall(program, vertexArray)
    .primitive(PicoGL.TRIANGLES)
});

const getEdgeVisualizerProgram = moize(() =>
  getPicoApp().createProgram(edgeVs, edgeFs)
);

const getEdgeIndexBuffer = moize.infinite((data) =>
  getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_INT, data)
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

let edgeData: Uint32Array = new Uint32Array([]);
export const setEdgeIndices = (indices: Uint32Array) => {
  edgeData = indices;
}

export const getMostRecentEdgeVertexArray = () => {
  const positionBuffers = getPositionBuffers().current;
  const colorBuffers = getColorBuffers().current;
  const radiusBuffers = getRadiusBuffers().current;
  return loadEdgeVertexArray(edgeData, positionBuffers, colorBuffers, radiusBuffers);
}

export const getEdgeVisualizerDrawCall = moize.infinite(() => {
  const program = getEdgeVisualizerProgram();
  const vertexArray = getMostRecentEdgeVertexArray();
  return getPicoApp().createDrawCall(program, vertexArray)
    .primitive(PicoGL.LINES)
});
