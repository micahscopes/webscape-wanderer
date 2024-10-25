import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
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
} from "three";

import nodeVs from "../shaders/node.vert";
import nodeFs from "../shaders/node.frag";

import nodePickerVs from "../shaders/node-picker.vert";
import nodePickerFs from "../shaders/node-picker.frag";

import edgeVs from "../shaders/edge.vert";
import edgeFs from "../shaders/edge.frag";

import { getCanvasAndGLContext } from "./rendering";
import { getCamerasUniformsGroup } from "./camera";
import {
  deviceHasMouse,
  getCurrentlyHoveringIndex,
  getPointerPositionClip,
} from "../interaction";
import { getSelectedColor, getSelectedIndex } from "../selection";
import {
  getColorLayers,
  getEmphasisLayers,
  getPositionLayers,
  getSizeLayers,
} from "./interpolation";
import moize from "moize";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import heartObjUrl from "../../data/heart.obj";
import heartObjString from "../../data/heart.obj?raw";
import flowerObjString from "../../data/dandelion3.obj?raw";

// heartGeometry.scale(0.1, 0.1, 0.1);
// const loadHeart = () => new Promise((resolve, reject) => {});
// const heart = await objLoader.loadAsync(heartObjUrl);
// let geo = (heart.children[0] as Mesh).geometry;
// console.log(geo);

export const getNodeVisualizerMesh = moize.infinite((ctx, shape = "flower") => {
  let geo;

  if (shape === "box") {
    geo = new BoxGeometry(1, 1, 1);
  } else if (shape === "flower") {
    const objLoader = new OBJLoader();
    const heart = objLoader.parse(flowerObjString);
    const heartGeometry = heart.children[0].geometry;
    if (!heartGeometry.index) {
      const indices = [];
      const position = heartGeometry.attributes.position;
      for (let i = 0; i < position.count; i += 3) {
        indices.push(i, i + 1, i + 2);
      }
      heartGeometry.setIndex(indices);
    }
    let scaleFactor = 1;
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

  geometry.setAttribute("vertexPosition", geo.attributes.position);
  geometry.setAttribute("vertexNormal", geo.attributes.normal);

  // geometry.setIndex(cells.flat());
  geometry.setIndex(geo.index);
  geometry.setAttribute(
    "index",
    new InstancedBufferAttribute(new Int32Array([]), 1),
  );

  const material = new RawShaderMaterial({
    vertexShader: nodeVs,
    fragmentShader: nodeFs,
    glslVersion: GLSL3,
  });

  const pickerMaterial = new RawShaderMaterial({
    vertexShader: nodePickerVs,
    fragmentShader: nodePickerFs,
    depthWrite: true,
    glslVersion: GLSL3,
  });

  geometry.setAttribute(
    "index",
    new InstancedBufferAttribute(new Int32Array([1, 2, 3, 4]), 1),
  );

  material.uniformsGroups = [getCamerasUniformsGroup(ctx)];

  const mesh = new Mesh(geometry, material);
  const pickerMesh = new Mesh(geometry, pickerMaterial);
  return { mesh, pickerMesh };
});

export const initializeNodeVisualizerUniforms = (ctx) => {
  const { mesh, pickerMesh } = getNodeVisualizerMesh(ctx);
  mesh.material.uniforms = {
    positionTexture: { value: getPositionLayers(ctx).viewTexture },
    colorTexture: { value: getColorLayers(ctx).viewTexture },
    sizeTexture: { value: getSizeLayers(ctx).viewTexture },
    emphasisTexture: { value: getEmphasisLayers(ctx).viewTexture },
    textureDimensions: {
      value: [getColorLayers(ctx).view.width, getColorLayers(ctx).view.height],
    },
    mousePosition: { value: getPointerPositionClip(ctx) },
    selectedIndex: { value: -1 },
    selectedColor: { value: getSelectedColor(ctx) },
    hoveringIndex: { value: getCurrentlyHoveringIndex(ctx) },
    time: { value: performance.now() / 1000 },
  };

  const attrs = getAttributes(ctx);
  Object.entries(attrs).forEach(([key, value]) => {
    mesh.material.uniforms[key] = { value };
  });

  pickerMesh.material.uniforms = mesh.material.uniforms;

  mesh.material.needsUpdate = true;
  pickerMesh.material.needsUpdate = true;
};

export const updateNodeVisualizerUniforms = (ctx) => {
  const { mesh, pickerMesh } = getNodeVisualizerMesh(ctx);
  const attrs = getAttributes(ctx);
  for (const uniforms of [
    mesh.material.uniforms,
    pickerMesh.material.uniforms,
  ]) {
    uniforms.globalScale.value = attrs.globalScale;
    uniforms.nodeScale.value = attrs.nodeScale;
    uniforms.edgeScale.value = attrs.edgeScale;
    uniforms.edgeFrequency.value = attrs.edgeFrequency;
    uniforms.edgePulseSpeed.value = attrs.edgePulseSpeed;
    uniforms.positionTexture.value = getPositionLayers(ctx).viewTexture;
    uniforms.colorTexture.value = getColorLayers(ctx).viewTexture;
    uniforms.sizeTexture.value = getSizeLayers(ctx).viewTexture;
    uniforms.emphasisTexture.value = getEmphasisLayers(ctx).viewTexture;
    uniforms.textureDimensions.value = [
      getColorLayers(ctx).view.width,
      getColorLayers(ctx).view.height,
    ];
    uniforms.mousePosition.value = getPointerPositionClip(ctx);
    uniforms.selectedIndex.value = getSelectedIndex(ctx);
    uniforms.selectedColor.value = getSelectedColor(ctx);
    uniforms.hoveringIndex.value = getCurrentlyHoveringIndex(ctx);
    uniforms.time.value = performance.now() / 1000;
  }

  Object.entries(attrs).forEach(([key, value]) => {
    mesh.material.uniforms[key].value = value;
    pickerMesh.material.uniforms[key].value = value;
  });
};

export const getNodeIndexArray = moize.infinite((ctx, size) => {
  const nodeIndices = new Int32Array(size);
  for (let i = 0; i < size; i++) {
    nodeIndices[i] = i;
  }
  return new InstancedBufferAttribute(nodeIndices, 1);
});

export const loadNodeVertexArray = (ctx, size) => {
  console.log("loading node vertex array", size);
  const { mesh, pickerMesh } = getNodeVisualizerMesh(ctx);
  const indexBuffer = getNodeIndexArray(ctx, 10000);

  mesh.geometry.setAttribute("index", indexBuffer);
  // mesh.geometry.setDrawRange(0, size);
  mesh.geometry.instanceCount = size;
  pickerMesh.geometry.setAttribute("index", indexBuffer);
  // pickerMesh.geometry.setDrawRange(0, size);
  pickerMesh.geometry.instanceCount = size;
};

export const getEdgeVisualizerMesh = moize.infinite((ctx) => {
  // const segX = 5;
  // const segY = 1;
  // const segmentOffsetGeometry = grid(segX, segY);
  // segmentOffsetGeometry.positions = segmentOffsetGeometry.positions.map(
  //   ([x, y]) => [x / segX, y / segY]
  // );
  // console.log('segmentOffsetGeometry', segmentOffsetGeometry)
  const segmentOffsetGeo = new CylinderGeometry(0.5, 0.5, 1, 4, 4, true);

  const geometry = new InstancedBufferGeometry();

  geometry.setAttribute("segmentOffset", segmentOffsetGeo.attributes.position);
  geometry.setIndex(segmentOffsetGeo.index);

  geometry.setAttribute(
    "edgeIndices",
    new InstancedBufferAttribute(new Int32Array([1, 2, 3]), 2),
  );

  // console.log('segmentOffsetGeometry', segmentOffsetGeometry)

  const material = new RawShaderMaterial({
    vertexShader: edgeVs,
    fragmentShader: edgeFs,
    uniforms: {},
    depthTest: false, // deviceHasMouse() ? true : false,
    depthWrite: true,
    depthFunc: LessEqualDepth,
    transparent: true,
    // side: DoubleSide,
    glslVersion: GLSL3,
  });

  return new Mesh(geometry, material);
});

export const getEdgeIndexBuffer = moize.infinite((ctx, linkIndexPairs) => {
  // const edgePairIndices = new Int32Array(linkIndexPairs.flat());
  const edgePairIndices = new Int32Array(10000);
  edgePairIndices.set(linkIndexPairs.flat());
  return new InstancedBufferAttribute(edgePairIndices, 2);
});

export const loadEdgeVertexArray = (ctx, edgeData) => {
  console.log("loading edge vertex array", edgeData);
  const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
  const indexBuffer = getEdgeIndexBuffer(ctx, edgeData);
  edgeVisualizerMesh.geometry.setAttribute("edgeIndices", indexBuffer);
  edgeVisualizerMesh.geometry.instanceCount = edgeData.length;
};

export const initializeEdgeVisualizerUniforms = (ctx) => {
  const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
  edgeVisualizerMesh.material.uniforms = {
    positionTexture: { value: getPositionLayers(ctx).viewTexture },
    colorTexture: { value: getColorLayers(ctx).viewTexture },
    sizeTexture: { value: getSizeLayers(ctx).viewTexture },
    nodeDepthTexture: { value: getNodeDepthRenderTarget(ctx).depthTexture },
    emphasisTexture: { value: getEmphasisLayers(ctx).viewTexture },
    textureDimensions: {
      value: [
        getColorLayers(ctx).current.width,
        getColorLayers(ctx).current.height,
      ],
    },
    mousePosition: { value: getPointerPositionClip(ctx) },
    selectedIndex: { value: getSelectedIndex(ctx) },
    selectedColor: { value: getSelectedColor(ctx) },
    hoveringIndex: { value: getCurrentlyHoveringIndex(ctx) },
    time: { value: performance.now() / 1000 },
    viewport: { value: [0, 0] },
    devicePixelRatio: { value: window.devicePixelRatio },
  };

  const attrs = getAttributes(ctx);
  Object.entries(attrs).forEach(([key, value]) => {
    edgeVisualizerMesh.material.uniforms[key] = { value };
  });

  edgeVisualizerMesh.material.uniformsGroups = [getCamerasUniformsGroup(ctx)];
  edgeVisualizerMesh.material.needsUpdate = true;
};

import { Vector2 } from "three";
import { getAttributes } from "../attributes";
import { getGraphData } from "../data";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";
const viewport = new Vector2();

export const updateEdgeVisualizerUniforms = (ctx) => {
  const { renderer } = getThreeSetup(ctx);
  renderer.getSize(viewport);
  const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
  for (const uniforms of [edgeVisualizerMesh.material.uniforms]) {
    uniforms.positionTexture.value = getPositionLayers(ctx).viewTexture;
    uniforms.colorTexture.value = getColorLayers(ctx).viewTexture;
    uniforms.sizeTexture.value = getSizeLayers(ctx).viewTexture;
    uniforms.emphasisTexture.value = getEmphasisLayers(ctx).viewTexture;
    uniforms.textureDimensions.value = [
      getColorLayers(ctx).view.width,
      getColorLayers(ctx).view.height,
    ];
    uniforms.nodeDepthTexture.value =
      getNodeDepthRenderTarget(ctx).depthTexture;
    uniforms.mousePosition.value = getPointerPositionClip(ctx);
    uniforms.selectedIndex.value = getSelectedIndex(ctx);
    uniforms.selectedColor.value = getSelectedColor(ctx);
    uniforms.hoveringIndex.value = getCurrentlyHoveringIndex(ctx);
    uniforms.time.value = performance.now() / 1000;
    uniforms.viewport.value = viewport.toArray();
  }

  const attrs = getAttributes(ctx);
  Object.entries(attrs).forEach(([key, value]) => {
    edgeVisualizerMesh.material.uniforms[key].value = value;
  });
};

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
  camera.position.z = 50;

  const renderer = new WebGLRenderer({
    canvas,
    context: gl!,
  });

  // const renderer = new WebGPURenderer({
  //   canvas,
  // });

  // renderer.debug.onShaderError(console.log);

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
