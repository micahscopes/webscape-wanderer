import PicoGL, { Texture } from 'picogl';
import moize from 'moize';
import {
  getColorBuffers,
  getEmphasisBuffers,
  getInterpolationDrawCall,
  getPositionBuffers,
  getRadiusBuffers,
  loadInterpolationFramebuffer,
  swapInterpolationBuffers,
} from './animation';
import { getEdgeVisualizerDrawCall, getMostRecentEdgeVertexArray, getNodePickerSwappableBuffer, getNodeVisualizerDrawCall, loadEdgeVertexArray } from './graph-visualization';
import { getCamerasUniformBuffer, updateCameraUniforms } from './camera';
import { drawPickerBuffer, getCurrentlyHoveringIndex, getCurrentlyHoveringNode, getLastOverIndex, getPointerPositionClip, globalCamera, hoveredCursor, hoveredTooltip, selectedCursor, updateCameras } from '../interaction';
import { debugTexture } from './debug-texture';
import { colord } from 'colord'
import { getSelectedColor, getSelectedIndex, getSelectedNode } from '../selection';
import { FLOAT, GPUComposer, GPULayer, NEAREST, REPEAT } from 'gpu-io';
import { getColorLayers, getEmphasisLayers, getInterpolationProgram, getPositionLayers, getSizeLayers, shimPicoTexture } from './interpolation';
import { renderAmplitudeProgram, renderRGBProgram } from 'gpu-io';

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
  const { canvas, gl } = getCanvasAndGLContext();
  getPicoApp();
  return new GPUComposer({
    context: gl!, canvas,
    // contextAttributes: { preserveDrawingBuffer: true },
  });
})


export const getPicoApp = moize.infinite(() => {
  const { width, height } = getWidthAndHeight();
  return PicoGL.createApp(getCanvasAndGLContext().canvas,
    {
      antialias: true,
      extensions: ['OES_texture_float', 'EXT_color_buffer_float', 'ANGLE_instanced_arrays'],
    }
  )
    .viewport(0, 0, width, height)
    .enable(PicoGL.BLEND)
    .blendFunc(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA)
    .enable(PicoGL.DEPTH_TEST)
    .depthFunc(PicoGL.LEQUAL)
    .clearColor(...getClearColor())
});

export const fillCanvasToWindow = () => {
  const app = getPicoApp();
  const { width, height } = getWidthAndHeight();
  console.log('resizing canvas to', width, height, 'px')
  app.resize(width, height);
  globalCamera.resize(width / height);
  const canvas = app.canvas as HTMLCanvasElement;
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
    console.error(`WebGL Error: ${error}, Shader Program: ${activeProgram ? activeProgram.id : 'unknown'}`);
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


const canvas = getPicoApp().canvas as HTMLCanvasElement;
fillCanvasToWindow();

const noise = new Float32Array(canvas.width * canvas.height);
noise.forEach((el, i) => noise[i] = Math.random());

// console.log(noise)
const noiseLayer = new GPULayer(getGPUComposer(), {
  name: 'state',
  dimensions: [canvas.width, canvas.height],
  numComponents: 1, // Scalar state has one component.
  type: FLOAT,
  filter: NEAREST,
  // Use 2 buffers so we can toggle read/write
  // from one to the other.
  numBuffers: 2,
  wrapX: REPEAT,
  wrapY: REPEAT,
  array: noise,
});

// no need to get the picker pixel every frame
export const animateGraph = () => {
  // getSelectedNode().then(node => {
  //   // console.log('highlighting node ...', node)
  //   selectedCursor.highlightNode(node)
  // })

  // getCurrentlyHoveringNode().then(node => {
  //   hoveredTooltip.highlightNode(node)
  //   hoveredCursor.highlightNode(node)
  // })

  // interpolation.draw();
  const app = getPicoApp();  
  const gpuComposer = getGPUComposer();
  const gl = app.gl
  // app.clearColor(0.5,0.5,0.5,0).clear();
  
  // const width = getPositionLayers().current.width
  // const height = getPositionLayers().current.height
  // app
  //   // .drawFramebuffer(interpolationFramebuffer)
  //   .scissor(0, 0, width, height)
  //   .enable(PicoGL.SCISSOR_TEST)
  //   .viewport(0, 0, width, height)
  //   .clearColor(0, 0, 0, 1)
  app.disable(PicoGL.BLEND)
  app.clearColor(0,0,0,0).clear();
  
  const interpolationLayers = [getPositionLayers(), getColorLayers(), getSizeLayers(), getEmphasisLayers()]
  const interpolationProgram = getInterpolationProgram()
  Object.values(interpolationProgram._programs).forEach(program => {
    program.id = "interpolation"
  })
  interpolationProgram.setUniform('uMixRatio', 0.05);
  gpuComposer.step({
    program: interpolationProgram,
    input: interpolationLayers.flatMap(layer => [layer.target, layer.current]),
    output: interpolationLayers.flatMap(layer => [layer.current]),
  })
  gpuComposer.step({
    program: interpolationProgram,
    input: interpolationLayers.flatMap(layer => [layer.target, layer.current]),
    output: interpolationLayers.flatMap(layer => [layer.current]),
  })
  // gpuComposer.step({
  //   program: debugNoise,
  //   input: noiseLayer,
  // })
  
  // gpuComposer.step({
  //   program: debugPositions,
  //   input: getPositionLayers().current,
  // })
  

  // Reset scissor test
  gl.disable(gl.SCISSOR_TEST);

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  drawPickerBuffer();

  app.enable(PicoGL.BLEND)
  app.enable(PicoGL.DEPTH_TEST)
  app.clearColor(...getClearColor()).disable(PicoGL.SCISSOR_TEST)
  // app.clearColor(0,0,0,1);
  // app.clear();
  app.defaultViewport().defaultDrawFramebuffer()
  fillCanvasToWindow();
  updateCameras(
    updateCameraUniforms,
    window.innerWidth,
    window.innerHeight,
  );

  // console.log(app.state)

  const nodeDrawCall = getNodeVisualizerDrawCall()
    .uniformBlock('cameras', getCamerasUniformBuffer())
    .uniform('textureDimensions', [getColorLayers().current.width, getColorLayers().current.height])
    // @ts-ignore
    .texture('positionTexture', shimPicoTexture(getPositionLayers().current.lastState.texture))
    // @ts-ignore
    .texture('colorTexture', shimPicoTexture(getColorLayers().current.lastState.texture))
    // @ts-ignore
    .texture('sizeTexture', shimPicoTexture(getSizeLayers().current.lastState.texture))
    // @ts-ignore
    .texture('emphasisTexture', shimPicoTexture(getEmphasisLayers().current.lastState.texture))
    .uniform('mousePosition', getPointerPositionClip())
    .uniform("selectedIndex", getSelectedIndex())
    .uniform("selectedColor", getSelectedColor())
    .uniform("hoveringIndex", getCurrentlyHoveringIndex())
    .uniform('time', performance.now() / 1000)

  const edgeDrawCall = getEdgeVisualizerDrawCall()
    .uniformBlock('cameras', getCamerasUniformBuffer())
    .uniform('textureDimensions', [getColorLayers().current.width, getColorLayers().current.height])
    // @ts-ignore
    .texture('positionTexture', shimPicoTexture(getPositionLayers().current.lastState.texture))
    // @ts-ignore
    .texture('colorTexture', shimPicoTexture(getColorLayers().current.lastState.texture))
    // @ts-ignore
    .texture('sizeTexture', shimPicoTexture(getSizeLayers().current.lastState.texture))
    // @ts-ignore
    .texture('emphasisTexture', shimPicoTexture(getEmphasisLayers().current.lastState.texture))
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('selectedIndex', getSelectedIndex())
    .uniform('time', performance.now() / 1000)

    
    // console.log(getColorLayers().current.width, getColorLayers().current.height)
  
  getMostRecentEdgeVertexArray()

  drawNodes && nodeDrawCall.draw();
  drawEdges && edgeDrawCall.draw();
  
  // checkWebGLError(app.gl);

  // // debug stuff
  // window.lolDrawThatThing = (thatThing: string) => {
  //   if (thatThing === 'color') {
  //     window.lolDrawThat = getColorBuffers().texture;
  //   }
  //   if (thatThing === 'position') {
  //     window.lolDrawThat = getPositionBuffers().texture;
  //   }
  //   if (thatThing === 'size') {
  //     window.lolDrawThat = getRadiusBuffers().texture;
  //   }
  //   if (thatThing === 'picker') {
  //     window.lolDrawThat = getNodePickerSwappableBuffer().current.colorAttachments[0];
  //   }
  //   else {
  //     window.lolDrawThat = null;
  //   }
  // }
  // if (window.lolDrawThat) {
  //   debugTexture(window.lolDrawThat)
  // }

  // swapInterpolationBuffers()

  requestAnimationFrame(animateGraph);
}