import PicoGL from 'picogl';
import moize from 'moize';
import { getInterpolationDrawCall, swapInterpolationBuffers } from './animation';
import { getEdgeVisualizerDrawCall, getMostRecentEdgeVertexArray, getNodePickerBuffer, getNodePickerDrawCall, getNodeVisualizerDrawCall } from './graph-visualization';
import { getCamera } from './camera';
import { getPointerPositionCanvas, getPointerPositionClip, getPointerPositionInfo, getPointerPositionPicker } from '../interaction';

const getWidthAndHeight = () => {
  // Calculate the device pixel ratio
  const devicePixelRatio = window.devicePixelRatio || 1;

  // Get the desired display size (in CSS pixels)
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;

  // Calculate the actual size (in device pixels)
  const actualWidth = Math.floor(displayWidth * devicePixelRatio);
  const actualHeight = Math.floor(displayHeight * devicePixelRatio);
  
  return {width: actualWidth, height: actualHeight}
}

export const getPicoApp = moize.infinite(() => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  const {width, height} = getWidthAndHeight();

  return PicoGL.createApp(canvas,
    { antialias: false }
  )
    .viewport(0, 0, width, height)
    .enable(PicoGL.DEPTH_TEST)
    .enable(PicoGL.BLEND)
    .blendFunc(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA)
    .clearColor(0.1, 0.1, 0.1, 1.0)
});

const getNodeIndexFromPickerColor = (color: Uint8Array) => {
  const nodeIndex = color[0] + color[1] * 256 + color[2] * 256 * 256;
  return nodeIndex;
}

export const fillCanvasToWindow = () => {
  const app = getPicoApp();
  const {width, height} = getWidthAndHeight();
  app.resize(width, height);
  getCamera().resize(width / height);
  const canvas = app.canvas as HTMLCanvasElement;
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.left = '0px';
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  const camera = getCamera();
}


// no need to get the picker pixel every frame
let pickerFrame = 0;
let pickerSkip = 10;

const pickedColor = new Uint8Array(4);
export const animateGraph = () => {
  const camera = getCamera();
  camera.resize(window.innerWidth / window.innerHeight);
  camera.tick({
    near: camera.params.distance * 0.01,
    far: camera.params.distance * 2 + 2000,
  })

  const app = getPicoApp();
  app.clear();
  fillCanvasToWindow();

  const interpolation = getInterpolationDrawCall()
    .uniform('uMixRatio', 0.05)
  interpolation.draw();
  swapInterpolationBuffers();
  
  
  // const [mouseX, mouseY] = getPointerPositionPicker();
  // app
  //   .enable(PicoGL.SCISSOR_TEST)
  //   .scissor(mouseX, mouseY, 1, 1)
  //   .viewport(mouseX, mouseY, 1, 1);

  if (pickerFrame === 0) {
    const pickerBuffer = getNodePickerBuffer().resize();
    app
      .enable(PicoGL.SCISSOR_TEST)
      .scissor(...getPointerPositionCanvas(), 1, 1)
      .drawFramebuffer(pickerBuffer).clear();
    getNodePickerDrawCall()
      .uniform('projection', camera.state.projection)
      .uniform('view', camera.state.view)
      .draw();
    
    app
      .defaultDrawFramebuffer()
      .readFramebuffer(pickerBuffer)
      .readPixel(...getPointerPositionCanvas(), pickedColor) 
      .disable(PicoGL.SCISSOR_TEST);
  }
    
  // app.disable(PicoGL.SCISSOR_TEST)
  //   .scissor(0, 0, app.width, app.height)
  //   .viewport(0, 0, app.width, app.height);

  // console.log(getNodeIndexFromPickerColor(pickedColor), ...getPointerPositionPicker());

  app.clear();
  getMostRecentEdgeVertexArray();
  getEdgeVisualizerDrawCall()
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('projection', camera.state.projection)
    .uniform('view', camera.state.view)
    .draw();
  getNodeVisualizerDrawCall()
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('projection', camera.state.projection)
    .uniform('view', camera.state.view)
    .uniform('selectedIndex', getNodeIndexFromPickerColor(pickedColor))
    .draw();

  pickerFrame = (pickerFrame + 1) % pickerSkip;
  requestAnimationFrame(animateGraph);
}