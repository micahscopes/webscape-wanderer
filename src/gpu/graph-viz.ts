import {
  Scene,
  PerspectiveCamera,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  Mesh,
  BoxGeometry,
  WebGLRenderTarget,
  CylinderGeometry,
  DepthTexture,
  TorusKnotGeometry,
  WebGPURenderer,
  DirectionalLight,
  InstancedMesh,
  BufferGeometry,
  Color,
  IcosahedronGeometry,
  Sphere,
  Vector3,
  SphereGeometry,
  ConeGeometry,
} from "three/webgpu";

// import nodeVs from "../shaders/node-vert.tsl";
// import nodeFs from "../shaders/node-frag.tsl";

// import nodePickerVs from "../shaders/node-picker-vert.tsl";
// import nodePickerFs from "../shaders/node-picker-frag.tsl";

// import edgeVs from "../shaders/edge-vert.tsl";
// import edgeFs from "../shaders/edge-frag.tsl";

import { getCanvasAndGLContext } from "./rendering";
import moize from "moize";
import { OBJLoader } from "../../lib/OBJLoader";
// import heartObjString from "../../data/heart.obj?raw";
import heartUrl from "../../data/heart.obj";
import dandelionUrl from "../../data/dandelion3.obj";

export const getNodeVisualizerMesh = moize.infinite((ctx) => {
  const { graphNodeMaterial, graphNodePickerMaterial } =
    graphNodeMaterials(ctx);

  const meshGeometry = new InstancedBufferGeometry();
  const mesh = new Mesh(meshGeometry, graphNodeMaterial);
  const meshGeoBuffer =
    getComponent(ctx)._nodeGeometryBuffer || getShapeGeo("box");
  setNodeGeometry(ctx, meshGeoBuffer, mesh);

  // const pickerGeometry = new InstancedBufferGeometry();
  const pickerMesh = new Mesh(meshGeometry, graphNodePickerMaterial);
  // const pickerGeoBuffer = getShapeGeo("box");
  // setNodeGeometry(ctx, pickerGeoBuffer, pickerMesh);

  return { mesh, pickerMesh };
});

export const getShapeGeo = (shape) => {
  let geo;
  try {
    if (shape == "sphere") {
      geo = new SphereGeometry(1, 32, 32);
    } else if (shape == "cone") {
      geo = new ConeGeometry(1, 2, 128);
    } else if (shape == "icosohedron") {
      geo = new IcosahedronGeometry(1.5, 0);
    } else if (shape === "box") {
      geo = new BoxGeometry(1, 1, 1);
    } else if (shape === "torusKnot") {
      geo = new TorusKnotGeometry(1, 0.3, 128, 64, 2, 3);
    }
    geo.computeVertexNormals();
    return geo;
  } catch (error) {
    console.warn("Error setting node geometry:", error);
    return null;
  }
};

const setNodeGeometry = (ctx, geo, mesh) => {
  mesh.geometry.setAttribute("position", geo.attributes.position);
  mesh.geometry.setAttribute("normal", geo.attributes.normal);
  mesh.geometry.setIndex(geo.index);
  mesh.material.needsUpdate = true;
};

export const loadNodeVertexArray = (ctx, size) => {
  console.debug("loading node vertex array", size);
  const { mesh, pickerMesh } = getNodeVisualizerMesh(ctx);
  mesh.geometry.instanceCount = size;
  pickerMesh.geometry.instanceCount = size;
};

export const getEdgeVisualizerMesh = moize.infinite((ctx) => {
  const segmentOffsetGeo = new CylinderGeometry(0.5, 0.5, 1, 4, 4, true);

  const geometry = new InstancedBufferGeometry();

  geometry.setAttribute("segmentOffset", segmentOffsetGeo.attributes.position);
  geometry.setIndex(segmentOffsetGeo.index);

  // geometry.setAttribute(
  //   "edgeIndices",
  //   new InstancedBufferAttribute(new Int32Array([1, 2, 3]), 2),
  // );

  return new Mesh(geometry, graphEdgeMaterial(ctx));
});

// export const getEdgeIndexBuffer = moize.infinite((ctx, linkIndexPairs) => {
//   // const edgePairIndices = new Int32Array(linkIndexPairs.flat());
//   const edgePairIndices = new Int32Array(10000);
//   edgePairIndices.set(linkIndexPairs.flat());
//   return new InstancedBufferAttribute(edgePairIndices, 2);
// });

export const loadEdgeVertexArray = (ctx, size) => {
  const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
  // maybe this is unnecessary now...
  // let edgeIndexBuffer = graphBuffers(ctx).getEdgeIndices();
  // edgeVisualizerMesh.geometry.setAttribute("edgeIndices", edgeIndexBuffer);
  edgeVisualizerMesh.geometry.instanceCount = size;
};

export const resetNodeGeometry = async (ctx) => {
  const { nodes, linkIndexPairs } = await getGraphData(ctx);

  getNodeVisualizerMesh.clear();
  getThreeSetup.clear();
  const { mesh, pickerMesh } = getNodeVisualizerMesh(ctx);
  mesh.material.needsUpdate = true;
  pickerMesh.material.needsUpdate = true;
  loadNodeVertexArray(ctx, nodes.length);
  getEdgeVisualizerMesh(ctx).geometry.instanceCount = linkIndexPairs.length;
};

import { graphNodeMaterials } from "../shaders/graph-node.tsl";
import { graphEdgeMaterial } from "../shaders/graph-edge.tsl";
import { getGraphData, graphBuffers } from "../data";
import { getComponent } from "../context";

const getRenderer = moize.infinite((ctx) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const renderer = new WebGPURenderer({
    canvas,
    forceWebGL: true,
  });
  renderer.setClearColor(new Color("#000000"), 0);

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
});

// Initialize Three.js scene, camera and renderer
export const getThreeSetup = moize.infinite((ctx) => {
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

  const renderer = getRenderer(ctx);

  // Visible scene
  const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
  scene.add(edgeVisualizerMesh);

  const nodeVisualizerMesh = getNodeVisualizerMesh(ctx).mesh;
  scene.add(nodeVisualizerMesh);
  // setNodeGeometry(ctx, "sphere");

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
