import {
  Scene,
  PerspectiveCamera,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  RawShaderMaterial,
  Mesh,
  BoxGeometry,
  WebGLRenderTarget,
  CylinderGeometry,
  DepthTexture,
  LessEqualDepth,
  Object3D,
  TorusKnotGeometry,
  TorusGeometry,
  ObjectLoader,
  GLSL3,
  WebGPURenderer,
  vec4,
  InstancedMesh,
  PointLight,
  DirectionalLight,
  Light,
} from "three/webgpu";

// import nodeVs from "../shaders/node-vert.tsl";
// import nodeFs from "../shaders/node-frag.tsl";

// import nodePickerVs from "../shaders/node-picker-vert.tsl";
// import nodePickerFs from "../shaders/node-picker-frag.tsl";

// import edgeVs from "../shaders/edge-vert.tsl";
// import edgeFs from "../shaders/edge-frag.tsl";

import { getCanvasAndGLContext } from "./rendering";
import {
  deviceHasMouse,
  getCurrentlyHoveringIndex,
  getPointerPositionClip,
} from "../interaction";
import moize from "moize";
import { OBJLoader } from "three-obj-loader";
import heartObjString from "../../data/heart.obj?raw";

export const getNodeVisualizerMesh = moize.infinite((ctx, shape = "box") => {
  let geo;

  if (shape === "box") {
    geo = new BoxGeometry(1, 1, 1);
  } else if (shape === "heart") {
    const objLoader = new OBJLoader();
    const heart = objLoader.parse(heartObjString);
    const heartGeometry = heart.children[0].geometry;
    if (!heartGeometry.index) {
      const indices = [];
      const position = heartGeometry.attributes.position;
      for (let i = 0; i < position.count; i += 3) {
        indices.push(i, i + 1, i + 2);
      }
      heartGeometry.setIndex(indices);
    }
    let scaleFactor = 0.25;
    heartGeometry.scale(scaleFactor, scaleFactor, scaleFactor);
    console.log(heartGeometry);
    geo = heartGeometry;
    // const positions = heartGeometry.attributes.position.array;
    // for (let i = 0; i < positions.length; i++) {
    //   positions[i] *= 1.0; // Scale down by a factor of 10
    // }
    // heartGeometry.attributes.position.needsUpdate = true;
    // heartGeometry.computeBoundingSphere();

    let forComparison = new TorusKnotGeometry(1, 0.3, 128, 64, 3, 5);
    console.log(forComparison);
    // geo = forComparison;
  } else if (shape === "brain") {
    geo = new TorusKnotGeometry(1, 0.3, 128, 64, 3, 5);
  }

  // let geo = heart.children[0].

  // geo = new TorusKnotGeometry(1, 0.3, 128, 64, 2, 4);
  // geo = new TorusGeometry();
  // console.log(geo)

  const geometry = new InstancedBufferGeometry();

  geometry.setAttribute("position", geo.attributes.position);
  geometry.setAttribute("normal", geo.attributes.normal);

  geometry.setIndex(geo.index);
  geometry.setAttribute(
    "index",
    new InstancedBufferAttribute(new Int32Array([]), 1),
  );

  geometry.setAttribute(
    "index",
    new InstancedBufferAttribute(new Int32Array([1, 2, 3, 4]), 1),
  );

  const { graphNodeMaterial, graphNodePickerMaterial } =
    graphNodeMaterials(ctx);

  const mesh = new Mesh(geometry, graphNodeMaterial);
  const pickerMesh = new Mesh(geometry, graphNodePickerMaterial);
  return { mesh, pickerMesh };
});

// export const getNodeIndexArray = moize.infinite((ctx, size) => {
//   const nodeIndices = new Int32Array(size);
//   for (let i = 0; i < size; i++) {
//     nodeIndices[i] = i;
//   }
//   return new InstancedBufferAttribute(nodeIndices, 1);
// });

export const loadNodeVertexArray = (ctx, size) => {
  console.log("loading node vertex array", size);
  const { mesh, pickerMesh } = getNodeVisualizerMesh(ctx);
  mesh.geometry.instanceCount = size;
  pickerMesh.geometry.instanceCount = size;
  // const indexBuffer = getNodeIndexArray(ctx, 10000);
  // mesh.geometry.setAttribute("index", indexBuffer);
  // mesh.geometry.setDrawRange(0, size);
  // pickerMesh.geometry.setAttribute("index", indexBuffer);
  // pickerMesh.geometry.setDrawRange(0, size);
};

export const getEdgeVisualizerMesh = moize.infinite((ctx) => {
  const segmentOffsetGeo = new CylinderGeometry(0.5, 0.5, 1, 4, 4, true);

  const geometry = new InstancedBufferGeometry();

  geometry.setAttribute("segmentOffset", segmentOffsetGeo.attributes.position);
  geometry.setIndex(segmentOffsetGeo.index);

  geometry.setAttribute(
    "edgeIndices",
    new InstancedBufferAttribute(new Int32Array([1, 2, 3]), 2),
  );

  return new Mesh(geometry, graphEdgeMaterial(ctx));
});

// export const getEdgeIndexBuffer = moize.infinite((ctx, linkIndexPairs) => {
//   // const edgePairIndices = new Int32Array(linkIndexPairs.flat());
//   const edgePairIndices = new Int32Array(10000);
//   edgePairIndices.set(linkIndexPairs.flat());
//   return new InstancedBufferAttribute(edgePairIndices, 2);
// });

// export const loadEdgeVertexArray = (ctx) => {
//   const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
//   // maybe this is unnecessary now...
//   // let edgeIndexBuffer = graphBuffers(ctx).getEdgeIndices();
//   // edgeVisualizerMesh.geometry.setAttribute("edgeIndices", edgeIndexBuffer);
//   edgeVisualizerMesh.geometry.instanceCount = edgeData.length;
// };

import { getAttributes } from "../attributes";
import { getGraphData } from "../data";
import {
  MeshBasicNodeMaterial,
  MeshStandardNodeMaterial,
  NodeMaterial,
  uniform,
  Vector2,
} from "three/webgpu";
import { graphNodeMaterials } from "../shaders/graph-node.tsl";

import { graphEdgeMaterial } from "../shaders/graph-edge.tsl";
import { graphBufferState } from "../state";
// Initialize Three.js scene, camera and renderer
export const getThreeSetup = moize.infinite((ctx) => {
  const { canvas, gl } = getCanvasAndGLContext(ctx);
  const scene = new Scene();
  const depthScene = new Scene();
  const pickerScene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.5,
    1000,
  );
  camera.position.z = 10;
  const light = new DirectionalLight(0xffffff, 2);
  scene.add(light);

  const renderer = new WebGPURenderer({
    canvas,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Visible scene
  const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
  scene.add(edgeVisualizerMesh);

  const nodeVisualizerMesh = getNodeVisualizerMesh(ctx).mesh;
  scene.add(nodeVisualizerMesh);

  // Picker scene
  const nodePickerMesh = getNodeVisualizerMesh(ctx).pickerMesh;
  pickerScene.add(nodePickerMesh);

  return {
    scene,
    depthScene,
    pickerScene,
    camera,
    renderer,
    nodeVisualizerMesh,
    edgeVisualizerMesh,
    nodePickerMesh,
  };
});

export const getPickerRenderTarget = moize.infinite((ctx) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const pickerRenderTarget = new WebGLRenderTarget(
    canvas.width,
    canvas.height,
    {
      stencilBuffer: false,
    },
  );
  return pickerRenderTarget;
});

export const getNodeDepthRenderTarget = moize.infinite((ctx) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const nodeDepthRenderTarget = new WebGLRenderTarget(
    canvas.width,
    canvas.height,
    {
      depthTexture: new DepthTexture(canvas.width, canvas.height),
      depthBuffer: true,
      stencilBuffer: false,
    },
  );
  return nodeDepthRenderTarget;
});
