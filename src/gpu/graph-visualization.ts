import PicoGL from "picogl";
import moize from "moize";

import edgeVs from "../shaders/edge.vs";
import edgeFs from "../shaders/edge.fs";

import nodeVs from "../shaders/node.vs";
import nodeFs from "../shaders/node.fs";

import nodePickerVs from "../shaders/node-picker.vs";
import nodePickerFs from "../shaders/node-picker.fs";

import { getPicoApp } from "./rendering";
import {
  getColorBuffers,
  getPositionBuffers,
  getRadiusBuffers,
  // loadEdgeFramebuffer,
} from "./animation";

import bunny from "bunny";
import icosphere from 'primitive-icosphere'
import cube from 'primitive-cube'
import simplify from 'mesh-simplify'
import {vertexNormals} from "normals";

const getNodeVisualizerProgram = moize(() => {
  return getPicoApp().createProgram(nodeVs, nodeFs);
});

const getNodePickerProgram = moize(() => {
  return getPicoApp().createProgram(nodePickerVs, nodePickerFs);
});

const getNodeVertexArray = moize.infinite(() => {
  // let geo = icosphere(1, { subdivisions: 2 })
  // geo = simplify(geo.cells, geo.positions)(100)
  const geo = cube(1)
  // const geo = bunny
  console.log(geo.positions.length, "bunny tris")
  const positions = geo.positions
  const cells = geo.cells
  // console.log(positions, cells)
  const normals = vertexNormals(cells, positions)

  const geoBuffer = getPicoApp().createVertexBuffer(
    PicoGL.FLOAT,
    3,
    new Float32Array(positions.flat())
  );
  const geoIndexBuffer = getPicoApp().createIndexBuffer(
    PicoGL.UNSIGNED_SHORT,
    new Uint16Array(cells.flat())
  );
  
  // console.log(angleNormals(bunny.cells, bunny.positions))
  const geoNormals = getPicoApp().createVertexBuffer(
    PicoGL.FLOAT,
    3,
    new Float32Array(normals.flat())
  );

  return (
    getPicoApp()
      .createVertexArray()
      .vertexAttributeBuffer(3, geoBuffer)
      .vertexAttributeBuffer(4, geoNormals)
      .indexBuffer(geoIndexBuffer)
  );
});

const loadNodeVertexArray = () => {
  const vertexArray = getNodeVertexArray();
  const positionBuffer = getPositionBuffers().current;
  const colorBuffer = getColorBuffers().current;
  const radiusBuffer = getRadiusBuffers().current;

  return vertexArray
    .instanceAttributeBuffer(0, positionBuffer)
    .instanceAttributeBuffer(1, colorBuffer)
    .instanceAttributeBuffer(2, radiusBuffer);
};

export const getNodePickerBuffer = moize.infinite((tag) => {
  const app = getPicoApp();
  // get device pixel ratio:
  // const devicePixelRatio = window.devicePixelRatio || 1;
  // const width = app.width/devicePixelRatio;
  // const height = app.height/devicePixelRatio;
  const width = app.width;
  const height = app.height;
  let pickColorTarget = app.createTexture2D(width, height, {
    internalFormat: PicoGL.RGBA8,
    minFilter: PicoGL.NEAREST,
    magFilter: PicoGL.NEAREST
  });
  let pickDepthTarget = app.createRenderbuffer(
    width,
    height,
    PicoGL.DEPTH_COMPONENT16
  );

  return app
    .createFramebuffer()
    .colorTarget(0, pickColorTarget)
    .depthTarget(pickDepthTarget);
});

class SwappableBuffer {
  A; B; _current;

  constructor(A, B) {
    this.A = A;
    this.B = B;
    this._current = A;
  }

  swap() {
    this._current = this.current === this.A ? this.B : this.A;
  }
  
  get current() {
    return this._current;
  }
  
  get other() {
    return this._current === this.A ? this.B : this.A;
  }
}

export const getNodePickerSwappableBuffer = moize.infinite(() => {
  const app = getPicoApp();
  const bufferA = getNodePickerBuffer("A");
  const bufferB = getNodePickerBuffer("B");

  return new SwappableBuffer(bufferA, bufferB);
});

export const getNodePickerDrawCall = moize.infinite(() => {
  const program = getNodePickerProgram();

  const vertexArray = loadNodeVertexArray();

  return getPicoApp()
    .createDrawCall(program, vertexArray)
    .primitive(PicoGL.TRIANGLES)
});

export const getNodeVisualizerDrawCall = moize.infinite(() => {
  const program = getNodeVisualizerProgram();

  const vertexArray = loadNodeVertexArray();

  return getPicoApp()
    .createDrawCall(program, vertexArray)
    .primitive(PicoGL.TRIANGLES)
    // .drawRanges([[0, 200, 2]])
});

const getEdgeVisualizerProgram = moize(() =>
  getPicoApp().createProgram(edgeVs, edgeFs)
);

// const segmentOffsetGeometry = [
//   [0, -0.5],
//   [0.5, 0.5],
//   [0, 0.5],
//   [0, -0.5],
//   [0.5, -0.5],
//   [0.5, 0.5],
//   // again but shifted over by x+0.5
//   [0.5, -0.5],
//   [1, 0.5],
//   [0.5, 0.5],
//   [0.5, -0.5],
//   [1, -0.5],
//   [1, 0.5],
// ]

import grid from 'grid-mesh'

const segX = 100;
const segY = 1;
const segmentOffsetGeometry = grid(segX, segY);
segmentOffsetGeometry.positions = segmentOffsetGeometry.positions.map(([x,y]) => [x/segX, y/segY])

export const getEdgeIndexBuffer = moize.infinite((linkIndexPairs) => {
  const edgePairIndices = new Uint32Array(linkIndexPairs.flat());
  return getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_INT, edgePairIndices);
})

export const getEdgeIndexVertexBuffer = moize.infinite((linkIndexPairs) => {
  const edgePairIndices = new Int32Array(linkIndexPairs.flat());
  return getPicoApp().createVertexBuffer(PicoGL.INT, 2, edgePairIndices);
})

const getSegmentOffsetBuffer = moize.infinite(() => {
  const segmentOffsetBuffer = getPicoApp().createVertexBuffer(
    PicoGL.FLOAT,
    2,
    new Float32Array(segmentOffsetGeometry.positions.flat())
  );
  console.log(segmentOffsetGeometry)
  return segmentOffsetBuffer;
});

const getSegmentOffsetIndexBuffer = moize.infinite(() => {
  const segmentOffsetIndexBuffer = getPicoApp().createIndexBuffer(
    PicoGL.UNSIGNED_SHORT,
    new Uint16Array(segmentOffsetGeometry.cells.flat())
  );
  return segmentOffsetIndexBuffer;
});

export const getEdgeVertexArray = moize.infinite(() => 
  getPicoApp()
    .createVertexArray()
)

export const loadEdgeVertexArray = moize.infinite(
  (edgeData: ArrayBufferView) => {
    const vertexArray = getEdgeVertexArray();
    const indexBuffer = getEdgeIndexVertexBuffer(edgeData);
    const segmentOffsetBuffer = getSegmentOffsetBuffer();
    const segmentOffsetIndexBuffer = getSegmentOffsetIndexBuffer();
    return vertexArray
      .instanceAttributeBuffer(0, indexBuffer)
      .vertexAttributeBuffer(1, segmentOffsetBuffer)
      .indexBuffer(segmentOffsetIndexBuffer)
  }
);

// let edgeData: Uint32Array = new Uint32Array([]);
let edgeData
export const setEdgeIndices = (indices: Uint32Array) => {
  edgeData = indices;
};

export const getEdgeIndices = () => edgeData;

export const getMostRecentEdgeVertexArray = () => {
  return loadEdgeVertexArray(
    edgeData,
  );
};

export const getEdgeVisualizerDrawCall = moize.infinite(() => {
  const program = getEdgeVisualizerProgram();
  const vertexArray = getMostRecentEdgeVertexArray();
  return getPicoApp()
    .createDrawCall(program, vertexArray)
    .primitive(PicoGL.TRIANGLES)

});
