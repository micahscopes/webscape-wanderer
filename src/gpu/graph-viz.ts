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
} from 'three';

import nodeVs from '../shaders/node.vert';
import nodeFs from '../shaders/node.frag';

import nodePickerVs from '../shaders/node-picker.vert';
import nodePickerFs from '../shaders/node-picker.frag';

import edgeVs from '../shaders/edge.vert';
import edgeFs from '../shaders/edge.frag';

import { getCanvasAndGLContext } from './rendering';
import { getCamerasUniformsGroup } from './camera';
import { deviceHasMouse, getCurrentlyHoveringIndex, getPointerPositionClip } from '../interaction';
import { getSelectedColor, getSelectedIndex } from '../selection';
import { getColorLayers, getEmphasisLayers, getPositionLayers, getSizeLayers } from './interpolation';
import moize from 'moize';


export const getNodeVisualizerMesh = moize.infinite(() => {
  let geo = new BoxGeometry(1, 1, 1);
  // geo = new TorusKnotGeometry(1, 0.3, 128, 64);
  // geo = new TorusGeometry();
  // console.log(geo)

  const geometry = new InstancedBufferGeometry();

  geometry.setAttribute(
    'vertexPosition',
    geo.attributes.position
  );
  geometry.setAttribute(
    'vertexNormal',
    geo.attributes.normal
  );
  // geometry.setIndex(cells.flat());
  geometry.setIndex(geo.index);
  geometry.setAttribute('index',
    new InstancedBufferAttribute(new Int32Array([]), 1)
  )

  const material = new RawShaderMaterial({
    vertexShader: nodeVs,
    fragmentShader: nodeFs,
  });
  
  const pickerMaterial = new RawShaderMaterial({
    vertexShader: nodePickerVs,
    fragmentShader: nodePickerFs,
    depthWrite: true,
  });

  geometry.setAttribute('index',
    new InstancedBufferAttribute(new Int32Array([1,2,3,4]), 1)
  )
  
  material.uniformsGroups = [getCamerasUniformsGroup()];

  const mesh = new Mesh(geometry, material);
  const pickerMesh = new Mesh(geometry, pickerMaterial);
  return { mesh, pickerMesh };
});

export const initializeNodeVisualizerUniforms = () => {
  const { mesh, pickerMesh } = getNodeVisualizerMesh();
  mesh.material.uniforms = {
    globalScale: { value: params.globalScale },
    nodeScale: { value: params.nodeScale },
    edgeScale: { value: params.edgeScale },
    positionTexture: { value: getPositionLayers().viewTexture },
    colorTexture: { value: getColorLayers().viewTexture },
    sizeTexture: { value: getSizeLayers().viewTexture },
    emphasisTexture: { value: getEmphasisLayers().viewTexture },
    textureDimensions: { value: [getColorLayers().view.width, getColorLayers().view.height] },
    mousePosition: { value: getPointerPositionClip() },
    selectedIndex: { value: -1 },
    selectedColor: { value: getSelectedColor() },
    hoveringIndex: { value: getCurrentlyHoveringIndex() },
    time: { value: performance.now() / 1000 },
  }
  // console.log('setting uniforms', mesh.material.uniforms)
  pickerMesh.material.uniforms = mesh.material.uniforms;

  mesh.material.needsUpdate = true;
  pickerMesh.material.needsUpdate = true;
};

export const updateNodeVisualizerUniforms = () => {
  const { mesh, pickerMesh } = getNodeVisualizerMesh();
  for (const uniforms of [mesh.material.uniforms, pickerMesh.material.uniforms]) {
    uniforms.globalScale.value = params.globalScale;
    uniforms.nodeScale.value = params.nodeScale;
    uniforms.edgeScale.value = params.edgeScale;
    uniforms.positionTexture.value = getPositionLayers().viewTexture;
    uniforms.colorTexture.value = getColorLayers().viewTexture;
    uniforms.sizeTexture.value = getSizeLayers().viewTexture;
    uniforms.emphasisTexture.value = getEmphasisLayers().viewTexture;
    uniforms.textureDimensions.value = [getColorLayers().view.width, getColorLayers().view.height];
    uniforms.mousePosition.value = getPointerPositionClip();
    uniforms.selectedIndex.value = getSelectedIndex();
    uniforms.selectedColor.value = getSelectedColor();
    uniforms.hoveringIndex.value = getCurrentlyHoveringIndex();
    uniforms.time.value = performance.now() / 1000;
  }
};

const getNodeIndexArray = moize.infinite((size) => {
  const nodeIndices = new Int32Array(size);
  for (let i = 0; i < size; i++) {
    nodeIndices[i] = i;
  }
  return new InstancedBufferAttribute(nodeIndices, 1);
});

export const loadNodeVertexArray = (size) => {
  console.log('loading node vertex array', size)
  const {mesh, pickerMesh} = getNodeVisualizerMesh();
  const indexBuffer = getNodeIndexArray(size);
  mesh.geometry.setAttribute('index', indexBuffer);
  pickerMesh.geometry.setAttribute('index', indexBuffer);
}

const getEdgeVisualizerMesh = moize.infinite(() => {
  // const segX = 5;
  // const segY = 1;
  // const segmentOffsetGeometry = grid(segX, segY);
  // segmentOffsetGeometry.positions = segmentOffsetGeometry.positions.map(
  //   ([x, y]) => [x / segX, y / segY]
  // );
  // console.log('segmentOffsetGeometry', segmentOffsetGeometry)
  const segmentOffsetGeo = new CylinderGeometry(
    0.5,
    0.5,
    1,
    4,
    4,
    true,
  )


  const geometry = new InstancedBufferGeometry();

  geometry.setAttribute(
    'segmentOffset',
    segmentOffsetGeo.attributes.position
  );
  geometry.setIndex(segmentOffsetGeo.index);

  geometry.setAttribute('edgeIndices', new InstancedBufferAttribute(new Int32Array([1,2,3]), 2))
  
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
  });

  return new Mesh(geometry, material);
});

export const getEdgeIndexBuffer = moize.infinite((linkIndexPairs) => {
  const edgePairIndices = new Int32Array(linkIndexPairs.flat());
  return new InstancedBufferAttribute(edgePairIndices, 2);
});

export const loadEdgeVertexArray = (
  (edgeData: ArrayBufferView) => {
    // console.log('loading edge vertex array', edgeData)
    const edgeVisualizerMesh = getEdgeVisualizerMesh();
    const indexBuffer = getEdgeIndexBuffer(edgeData);
    edgeVisualizerMesh.geometry.setAttribute('edgeIndices', indexBuffer);
  }
)

export const initializeEdgeVisualizerUniforms = () => {
  const edgeVisualizerMesh = getEdgeVisualizerMesh();
  edgeVisualizerMesh.material.uniforms = {
    globalScale: { value: params.globalScale },
    nodeScale: { value: params.nodeScale },
    edgeScale: { value: params.edgeScale },
    positionTexture: { value: getPositionLayers().viewTexture },
    colorTexture: { value: getColorLayers().viewTexture },
    sizeTexture: { value: getSizeLayers().viewTexture },
    nodeDepthTexture: { value: getNodeDepthRenderTarget().depthTexture },
    emphasisTexture: { value: getEmphasisLayers().viewTexture },
    textureDimensions: { value: [getColorLayers().current.width, getColorLayers().current.height] },
    mousePosition: { value: getPointerPositionClip() },
    selectedIndex: { value: getSelectedIndex() },
    selectedColor: { value: getSelectedColor() },
    hoveringIndex: { value: getCurrentlyHoveringIndex() },
    time: { value: performance.now() / 1000 },
    viewport: { value: [0, 0] },
    devicePixelRatio: { value: window.devicePixelRatio },
  }
  edgeVisualizerMesh.material.uniformsGroups = [getCamerasUniformsGroup()];
  edgeVisualizerMesh.material.needsUpdate = true;
}

import { Vector2 } from 'three';
import { params } from '../parameters';
const viewport = new Vector2();

export const updateEdgeVisualizerUniforms = () => {
  const { renderer } = getThreeSetup();
  renderer.getSize(viewport);
  const edgeVisualizerMesh = getEdgeVisualizerMesh();
  for (const uniforms of [edgeVisualizerMesh.material.uniforms]) {
    uniforms.globalScale.value = params.globalScale;
    uniforms.nodeScale.value = params.nodeScale;
    uniforms.edgeScale.value = params.edgeScale;
    uniforms.positionTexture.value = getPositionLayers().viewTexture;
    uniforms.colorTexture.value = getColorLayers().viewTexture;
    uniforms.sizeTexture.value = getSizeLayers().viewTexture;
    uniforms.emphasisTexture.value = getEmphasisLayers().viewTexture;
    uniforms.textureDimensions.value = [getColorLayers().view.width, getColorLayers().view.height];
    uniforms.nodeDepthTexture.value = getNodeDepthRenderTarget().depthTexture;
    uniforms.mousePosition.value = getPointerPositionClip();
    uniforms.selectedIndex.value = getSelectedIndex();
    uniforms.selectedColor.value = getSelectedColor();
    uniforms.hoveringIndex.value = getCurrentlyHoveringIndex();
    uniforms.time.value = performance.now() / 1000;
    uniforms.viewport.value = viewport.toArray();
  }
}

// Initialize Three.js scene, camera and renderer

export const getThreeSetup = moize.infinite(() => {
  const { canvas, gl } = getCanvasAndGLContext();
  const scene = new Scene();
  const depthScene = new Scene();
  const pickerScene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
  camera.position.z = 50;

  const renderer = new WebGLRenderer({
    canvas,
    context: gl!,
  })
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Visible scene
  const edgeVisualizerMesh = getEdgeVisualizerMesh();
  scene.add(edgeVisualizerMesh);
  
  const nodeVisualizerMesh = getNodeVisualizerMesh().mesh;
  scene.add(nodeVisualizerMesh);

  // Picker scene
  const nodePickerMesh = getNodeVisualizerMesh().pickerMesh;
  pickerScene.add(nodePickerMesh);
  
  return {
    scene,
    depthScene,
    pickerScene,
    camera,
    renderer,
    nodeVisualizerMesh,
    edgeVisualizerMesh,
    nodePickerMesh
  }
})

export const getPickerRenderTarget = moize.infinite(() => {
  const { canvas } = getCanvasAndGLContext();
  const pickerRenderTarget = new WebGLRenderTarget(canvas.width, canvas.height, {
    stencilBuffer: false,
  });
  return pickerRenderTarget;
})

export const getNodeDepthRenderTarget = moize.infinite(() => {
  const { canvas } = getCanvasAndGLContext();
  const nodeDepthRenderTarget = new WebGLRenderTarget(canvas.width, canvas.height, {
    depthTexture: new DepthTexture(canvas.width, canvas.height),
    depthBuffer: true,
    stencilBuffer: false,
  });
  return nodeDepthRenderTarget;
});