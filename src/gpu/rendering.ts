import PicoGL from 'picogl';
import moize from 'moize';
import {
  getColorBuffers,
  getInterpolationDrawCall,
  getPositionBuffers,
  loadInterpolationFramebuffer,
  swapInterpolationBuffers,
} from './animation';
import { getEdgeIndices, getEdgeVisualizerDrawCall, getNodePickerBuffer, getNodePickerDrawCall, getNodePickerSwappableBuffer, getNodeVisualizerDrawCall } from './graph-visualization';
import { getGlobalCamera, getLocalCamera } from './camera';
import { getPointerPositionCanvas, getPointerPositionClip } from '../interaction';
import { debugTexture, generateGradientTexture } from './debug-texture';

export const PRIMITIVE_RESTART_INDEX = 65535;
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
    .disable(PicoGL.CULL_FACE)
    .depthFunc(PicoGL.LEQUAL)
    .clearColor(0.1, 0.1, 0.1, 1.0)
});

const getNodeIndexFromPickerColor = (color: Uint8Array) => {
  const nodeIndex = color[0] + color[1] * 256 + color[2] * 256 * 256;
  // the offset makes it so the default selection is nothing
  return nodeIndex-1;
}

export const fillCanvasToWindow = () => {
  const app = getPicoApp();
  const { width, height } = getWidthAndHeight();
  app.resize(width, height);
  getGlobalCamera().resize(width / height);
  const canvas = app.canvas as HTMLCanvasElement;
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.left = '0px';
  // canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  const camera = getGlobalCamera();
}


const randomTexure = generateGradientTexture(32, 32);

// no need to get the picker pixel every frame
let pickerFrame = 0;
let pickerSkip = 3;

const pickedColor = new Uint8Array(4);
let lastSelectedIndex = -1;

export const animateGraph = () => {
  const globalCamera = getGlobalCamera();
  globalCamera.resize(window.innerWidth / window.innerHeight);
  globalCamera.tick({
    near: Math.min(globalCamera.params.distance*0.1, 100),
    far: globalCamera.params.distance+10000,
  });

  console.log(globalCamera.params.distance)
  
  const localCamera = getLocalCamera();
  localCamera.resize(window.innerWidth / window.innerHeight);
  localCamera.tick({
    near: globalCamera.params.near,
    far: globalCamera.params.far,
  });

  const app = getPicoApp();
  // app.clear();
  fillCanvasToWindow();

  const interpolationFramebuffer = loadInterpolationFramebuffer()
  app
    .drawFramebuffer(interpolationFramebuffer)
    .scissor(0, 0, interpolationFramebuffer.width, interpolationFramebuffer.height)
    .enable(PicoGL.SCISSOR_TEST)
    .viewport(0, 0, interpolationFramebuffer.width, interpolationFramebuffer.height)
    .clearColor(0, 0, 0, 1)
    
  const interpolation = getInterpolationDrawCall()
    .uniform('uMixRatio', 0.005)

  interpolation.draw();
  

    const pickerBuffers = getNodePickerSwappableBuffer();
    const area = 100;
    const scissorRegion : [number, number, number, number] = [getPointerPositionCanvas()[0] - area / 2, getPointerPositionCanvas()[1] - area / 2, area, area];
    app.drawFramebuffer(pickerBuffers.current)
      .enable(PicoGL.SCISSOR_TEST)
      .scissor(...scissorRegion)

    const pickerDrawCall = getNodePickerDrawCall()
      .uniform('projection', globalCamera.state.projection)
      .uniform('view', globalCamera.state.view)
      .uniform('localProjection', getLocalCamera().state.projection)
      .uniform('localView', getLocalCamera().state.view)
      .draw();
    
      app.defaultViewport().clear();
      pickerDrawCall.draw();

    if (pickerFrame === 0 || true) {
        app.readFramebuffer(pickerBuffers.current)
          .readPixel(...getPointerPositionCanvas(), pickedColor)
        lastSelectedIndex = getNodeIndexFromPickerColor(pickedColor);
        pickerBuffers.swap();
    }

  app.defaultDrawFramebuffer().defaultViewport().clearColor(0, 0, 0, 1).disable(PicoGL.SCISSOR_TEST)

  const nodeDrawCall = getNodeVisualizerDrawCall()
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('projection', globalCamera.state.projection)
    .uniform('view', globalCamera.state.view)
    .uniform('localProjection', getLocalCamera().state.projection)
    .uniform('localView', getLocalCamera().state.view)
    .uniform('selectedIndex', lastSelectedIndex)

  const edgeDrawCall = getEdgeVisualizerDrawCall()
    .texture('positionTexture', getPositionBuffers().texture)
    .texture('colorTexture', getColorBuffers().texture)
    .uniform('textureDimensions', [interpolationFramebuffer.width, interpolationFramebuffer.height])
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('projection', globalCamera.state.projection)
    .uniform('view', globalCamera.state.view)
    
  app.clear();
  nodeDrawCall.draw();
  edgeDrawCall.draw();

  window.lolDrawThatThing = (thatThing: string) => {
    if (thatThing === 'color') {
      window.lolDrawThat = getColorBuffers().texture;
    }
    if (thatThing === 'position') {
      window.lolDrawThat = getPositionBuffers().texture;
    }
    if (thatThing === 'picker') {
      window.lolDrawThat = getNodePickerSwappableBuffer().other.colorAttachments[0];
    }
    else {
      window.lolDrawThat = null;
    }
  }
  if (window.lolDrawThat) {
    debugTexture(window.lolDrawThat)
  }

  pickerFrame = (pickerFrame + 1) % pickerSkip;
  swapInterpolationBuffers()

  requestAnimationFrame(animateGraph);
}