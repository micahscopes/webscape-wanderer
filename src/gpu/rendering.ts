import moize from 'moize';
import { updateCamerasUniformsGroup } from './camera';
import {
  getCurrentlyHoveringNode,
  globalCamera,
  hoveredCursor,
  hoveredTooltip,
  selectedCursor,
  updateCameras,
  updatePickerColor,
} from '../interaction';
import { colord } from 'colord'
import { getSelectedNode } from '../selection';
import { FLOAT, GPUComposer, copyProgram } from 'gpu-io';
import {
  getColorLayers,
  getEmphasisLayers,
  getInterpolationProgram,
  getPositionLayers,
  getSizeLayers,
} from './interpolation';
import { renderAmplitudeProgram, renderRGBProgram } from 'gpu-io';
import { getPickerRenderTarget, getThreeSetup, initializeEdgeVisualizerUniforms, initializeNodeVisualizerUniforms, updateEdgeVisualizerUniforms, updateNodeVisualizerUniforms } from './graph-viz';

let drawEdges = true;
let drawNodes = true;

// toggle edges with keyboard
window.addEventListener('keydown', (e) => {
  if (e.key === 'e') {
    drawEdges = !drawEdges;
  }
  if (e.key === 'n') {
    drawNodes = !drawNodes;
  }
})



export const PRIMITIVE_RESTART_INDEX = 65535;
// export const CLEAR_COLOR : [number,number,number,number] = [0.1,0.1,0.1, 1.0];

const getClearColor = () =>
  [colord(document.body.style.backgroundColor).toRgb()]
    .flatMap(({ r, g, b, a }) => [r, g, b, a].map(x => x / 255)) as [number, number, number, number]

const getWidthAndHeight = () => {
  // Calculate the device pixel ratio
  const devicePixelRatio = window.devicePixelRatio || 1;

  // Get the desired display size (in CSS pixels)
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;

  // Calculate the actual size (in device pixels)
  const actualWidth = Math.floor(displayWidth * devicePixelRatio);
  const actualHeight = Math.floor(displayHeight * devicePixelRatio);

  return { width: actualWidth, height: actualHeight }
}

export const getCanvasAndGLContext = moize.infinite(() => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  const gl = canvas.getContext('webgl2');
  if (gl) console.log('WebGL2 initialized')
  else console.error('WebGL2 failed to initialize')
  
  return { canvas, gl }
})

export const getGPUComposer = moize.infinite(() => {
  const { renderer } = getThreeSetup()

  return GPUComposer.initWithThreeRenderer(renderer)
})

export const fillCanvasToWindow = () => {
  // const app = getPicoApp();
  const { canvas } = getCanvasAndGLContext();
  const { renderer } = getThreeSetup()
  const { width, height } = getWidthAndHeight();
  // console.log('resizing canvas to', width, height, 'px')
  renderer.setSize(window.innerWidth, window.innerHeight);
  getPickerRenderTarget().setSize(window.innerWidth, window.innerHeight);
  globalCamera.resize(width / height);
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.left = '0px';
  // canvas.style.width = "100vw";
  canvas.style.height = "100vh";
}

function checkWebGLError(gl) {
  const error = gl.getError();
  if (error !== gl.NO_ERROR) {
    const activeProgram = gl.getParameter(gl.CURRENT_PROGRAM);
    console.warn(`WebGL Error: ${error}, Shader Program: ${activeProgram ? activeProgram.id : 'unknown'}`);
  }
}

const debugPositions = renderRGBProgram(getGPUComposer(), {
    name: 'renderPositions',
    type: FLOAT,
  })

const debugNoise = renderAmplitudeProgram(getGPUComposer(), {
    name: 'renderNoise',
    type: FLOAT,
    components: 'x',
  })


fillCanvasToWindow();


const copy = copyProgram(getGPUComposer(), {
  name: 'copy',
  type: FLOAT,
})

initializeNodeVisualizerUniforms();
initializeEdgeVisualizerUniforms();

// no need to get the picker pixel every frame
export const animateGraph = () => {
  getSelectedNode().then(node => {
    // console.log('highlighting node ...', node)
    selectedCursor.highlightNode(node)
  })

  getCurrentlyHoveringNode().then(node => {
    hoveredTooltip.highlightNode(node)
    hoveredCursor.highlightNode(node)
  })

  fillCanvasToWindow();
  updateCameras(
    updateCamerasUniformsGroup,
    window.innerWidth,
    window.innerHeight,
  );


  const gpuComposer = getGPUComposer();
  gpuComposer.undoThreeState();
  
  const interpolationLayers = [getPositionLayers(), getColorLayers(), getSizeLayers(), getEmphasisLayers()]
  const interpolationProgram = getInterpolationProgram()

  gpuComposer.step({
    program: interpolationProgram,
    input: interpolationLayers.flatMap(layer => [layer.target, layer.current]),
    output: interpolationLayers.flatMap(layer => [layer.current, layer.view]),
  })
    
  gpuComposer.resetThreeState();
  // initializeNodeVisualizerUniforms();
  // initializeEdgeVisualizerUniforms();
  updateNodeVisualizerUniforms();
  updateEdgeVisualizerUniforms();

  const { renderer, scene, camera, pickerScene } = getThreeSetup();
  
  renderer.setRenderTarget(null);
  renderer.render(scene, camera);
  
  renderer.setRenderTarget(getPickerRenderTarget());
  renderer.render(pickerScene, camera);
  
  updatePickerColor();

  requestAnimationFrame(animateGraph);
}