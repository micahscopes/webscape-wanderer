import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  RawShaderMaterial,
  Mesh,
  BoxGeometry,
  DoubleSide,
  WebGLRenderTarget,
  CylinderGeometry,
} from 'three';

import nodeVs from '../shaders/node.vert';
import nodeFs from '../shaders/node.frag';

import nodePickerVs from '../shaders/node-picker.vert';
import nodePickerFs from '../shaders/node-picker.frag';

import edgeVs from '../shaders/edge.vert';
import edgeFs from '../shaders/edge.frag';

import { getCanvasAndGLContext } from './rendering';
import grid from 'grid-mesh';
import { getCamerasUniformsGroup } from './camera';
import { getCurrentlyHoveringIndex, getPointerPositionClip } from '../interaction';
import { getSelectedColor, getSelectedIndex } from '../selection';
import { getColorLayers, getEmphasisLayers, getPositionLayers, getSizeLayers } from './interpolation';
import moize from 'moize';


export const getNodeVisualizerMesh = moize.infinite(() => {
  let geo = new BoxGeometry(1, 1, 1);
  // geo = new TorusKnotGeometry(1, 0.3, 20, 8);
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
    0.3,
    0.3,
    1,
    4,
    2,
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
    // cameras: { value: getCamerasUniformBuffer() },
    positionTexture: { value: getPositionLayers().viewTexture },
    colorTexture: { value: getColorLayers().viewTexture },
    sizeTexture: { value: getSizeLayers().viewTexture },
    emphasisTexture: { value: getEmphasisLayers().viewTexture },
    textureDimensions: { value: [getColorLayers().current.width, getColorLayers().current.height] },
    mousePosition: { value: getPointerPositionClip() },
    selectedIndex: { value: getSelectedIndex() },
    selectedColor: { value: getSelectedColor() },
    time: { value: performance.now() / 1000 },
  }
  edgeVisualizerMesh.material.uniformsGroups = [getCamerasUniformsGroup()];
  edgeVisualizerMesh.material.needsUpdate = true;
}

export const updateEdgeVisualizerUniforms = () => {
  const edgeVisualizerMesh = getEdgeVisualizerMesh();
  for (const uniforms of [edgeVisualizerMesh.material.uniforms]) {
    uniforms.positionTexture.value = getPositionLayers().viewTexture;
    uniforms.colorTexture.value = getColorLayers().viewTexture;
    uniforms.sizeTexture.value = getSizeLayers().viewTexture;
    uniforms.emphasisTexture.value = getEmphasisLayers().viewTexture;
    uniforms.textureDimensions.value = [getColorLayers().view.width, getColorLayers().view.height];
    uniforms.mousePosition.value = getPointerPositionClip();
    uniforms.selectedIndex.value = getSelectedIndex();
    uniforms.selectedColor.value = getSelectedColor();
    uniforms.time.value = performance.now() / 1000;
  }
}

// Initialize Three.js scene, camera and renderer

export const getThreeSetup = moize.infinite(() => {
  const { canvas, gl } = getCanvasAndGLContext();
  const scene = new Scene();
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
  const nodeVisualizerMesh = getNodeVisualizerMesh().mesh;
  scene.add(nodeVisualizerMesh);

  const edgeVisualizerMesh = getEdgeVisualizerMesh();
  scene.add(edgeVisualizerMesh);
  
  // Picker scene
  const nodePickerMesh = getNodeVisualizerMesh().pickerMesh;
  pickerScene.add(nodePickerMesh);
  
  return {
    scene,
    pickerScene,
    camera,
    renderer,
  }
})

export const getPickerRenderTarget = moize.infinite(() => {
  const { canvas } = getCanvasAndGLContext();
  const pickerRenderTarget = new WebGLRenderTarget(canvas.width, canvas.height);
  return pickerRenderTarget;
})
