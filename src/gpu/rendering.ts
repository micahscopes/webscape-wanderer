import PicoGL from 'picogl';
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
import { getEdgeVisualizerDrawCall, getNodePickerSwappableBuffer, getNodeVisualizerDrawCall } from './graph-visualization';
import { getCamerasUniformBuffer, updateCameraUniforms } from './camera';
import { drawPickerBuffer, getPointerPositionClip, globalCamera, updateCameras } from '../interaction';
import { debugTexture } from './debug-texture';
import { colord } from 'colord'
import { getSelectedIndex } from '../selection';

let drawEdges= true;
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
  .flatMap(({r,g,b,a}) => [r,g,b,a].map(x => x/255)) as [number,number,number,number]

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

export const getPicoApp = moize.infinite(() => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  const gl = canvas.getContext('webgl2');
  if (gl) console.log('WebGL2 initialized')
  else console.error('WebGL2 failed to initialize')

  const { width, height } = getWidthAndHeight();
  return PicoGL.createApp(canvas,
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
  app.resize(width, height);
  globalCamera.resize(width / height);
  const canvas = app.canvas as HTMLCanvasElement;
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.left = '0px';
  // canvas.style.width = "100vw";
  canvas.style.height = "100vh";
}

// const randomTexure = generateGradientTexture(32, 32);

// no need to get the picker pixel every frame
export const animateGraph = () => {
  updateCameras(
    updateCameraUniforms,
    window.innerWidth,
    window.innerHeight,
  );

  const app = getPicoApp();
  fillCanvasToWindow();

  const interpolationFramebuffer = loadInterpolationFramebuffer()
  app
    .drawFramebuffer(interpolationFramebuffer)
    .scissor(0, 0, interpolationFramebuffer.width, interpolationFramebuffer.height)
    .enable(PicoGL.SCISSOR_TEST)
    .viewport(0, 0, interpolationFramebuffer.width, interpolationFramebuffer.height)
    .clearColor(0, 0, 0, 1)
    
  const interpolation = getInterpolationDrawCall()
    .uniform('uMixRatio', 0.05)

  interpolation.draw();
  
  drawPickerBuffer();

  app.defaultDrawFramebuffer().defaultViewport().clearColor(...getClearColor()).disable(PicoGL.SCISSOR_TEST)
    
  const nodeDrawCall = getNodeVisualizerDrawCall()
    .uniformBlock('cameras', getCamerasUniformBuffer())
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('selectedIndex', getSelectedIndex())
    .uniform('time', performance.now() / 1000)

  const edgeDrawCall = getEdgeVisualizerDrawCall()
    .uniformBlock('cameras', getCamerasUniformBuffer())
    .texture('positionTexture', getPositionBuffers().texture)
    .texture('colorTexture', getColorBuffers().texture)
    .texture('sizeTexture', getRadiusBuffers().texture)
    .texture('emphasisTexture', getEmphasisBuffers().texture)
    .uniform('textureDimensions', [interpolationFramebuffer.width, interpolationFramebuffer.height])
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('selectedIndex', getSelectedIndex())
    .uniform('time', performance.now() / 1000)

    
  app.clear();
  drawNodes && nodeDrawCall.draw();
  drawEdges && edgeDrawCall.draw();

  // debug stuff
  window.lolDrawThatThing = (thatThing: string) => {
    if (thatThing === 'color') {
      window.lolDrawThat = getColorBuffers().texture;
    }
    if (thatThing === 'position') {
      window.lolDrawThat = getPositionBuffers().texture;
    }
    if (thatThing === 'size') {
      window.lolDrawThat = getRadiusBuffers().texture;
    }
    if (thatThing === 'picker') {
      window.lolDrawThat = getNodePickerSwappableBuffer().current.colorAttachments[0];
    }
    else {
      window.lolDrawThat = null;
    }
  }
  if (window.lolDrawThat) {
    debugTexture(window.lolDrawThat)
  }

  swapInterpolationBuffers()

  requestAnimationFrame(animateGraph);
}