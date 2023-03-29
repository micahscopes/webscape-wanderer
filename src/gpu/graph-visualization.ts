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
import {vertexNormals} from "normals";

const getNodeVisualizerProgram = moize(() => {
  return getPicoApp().createProgram(nodeVs, nodeFs);
});

const getNodePickerProgram = moize(() => {
  return getPicoApp().createProgram(nodePickerVs, nodePickerFs);
});

const getNodeVertexArray = moize.infinite(() => {
  // const geo = simplify(bunny.cells, bunny.positions)(1000)
  // const geo = bunny
  const geo = icosphere(1, { subdivisions: 2 })
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

const segmentOffsetGeometry = [
  [0, -0.5],
  [1, -0.5],
  [1, 0.5],
  [0, -0.5],
  [1, 0.5],
  [0, 0.5],
]

const RESTART_INDEX = 65535;
const linkSegmentStrip = linkIndexPairs => 
  linkIndexPairs.flatMap(([a, b]) => [
    a, a-2, b,
    b-2, a-2, a,
    // a,
    // Math.max(0, b-2),
    RESTART_INDEX
    // a-2, b-2, a-2
  ].map(i => i === -1 ? RESTART_INDEX : i))

export const getEdgeIndexBuffer = moize.infinite((linkIndexPairs) => {
  const edgePairIndices = new Uint32Array(linkIndexPairs.flat());
  // const edgePairIndices = new Uint16Array(linkSegmentStrip(linkIndexPairs).flat());
  // console.log(edgePairIndices)
  return getPicoApp().createIndexBuffer(PicoGL.UNSIGNED_INT, edgePairIndices);
})

export const getEdgeIndexVertexBuffer = moize.infinite((linkIndexPairs) => {
  const edgePairIndices = new Int32Array(linkIndexPairs.flat());
  return getPicoApp().createVertexBuffer(PicoGL.INT, 2, edgePairIndices);
})

const getEdgeSegmentIndexBuffer = moize.infinite((linkIndexPairs) => {
  const edgeSegmentIndices = new Uint16Array(linkSegmentStrip(linkIndexPairs));
  // console.log('edgeSegmentIndices', edgeSegmentIndices)
  return getPicoApp().createIndexBuffer(PicoGL.INT_VEC2, edgeSegmentIndices);
})
  

const getSegmentOffsetBuffer = moize.infinite(() => {
  const segmentOffsetBuffer = getPicoApp().createVertexBuffer(
    PicoGL.FLOAT,
    2,
    new Float32Array(segmentOffsetGeometry.flat())
  );
  return segmentOffsetBuffer;
});

const getSegmentOffsetInterpolationBuffer = moize.infinite(() => {
  const segmentOffsetInterpolationBuffer = getPicoApp().createVertexBuffer(
    PicoGL.FLOAT,
    1,
    new Float32Array([0, 1, 1, 0, 1, 0])
  );
  return segmentOffsetInterpolationBuffer;
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
    const segmentInterpolationBuffer = getSegmentOffsetInterpolationBuffer();
    return vertexArray
      .instanceAttributeBuffer(0, indexBuffer)
      .vertexAttributeBuffer(1, segmentOffsetBuffer)
      .vertexAttributeBuffer(2, segmentInterpolationBuffer)
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
