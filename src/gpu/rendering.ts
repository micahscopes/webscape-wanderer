import PicoGL from 'picogl';
import moize from 'moize';
import { getInterpolationDrawCall, swapInterpolationBuffers } from './animation';
import { getEdgeVisualizerDrawCall, getMostRecentEdgeVertexArray, getNodeVisualizerDrawCall } from './graph-visualization';
import { getCamera } from './camera';

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
    // { antialias: false }
  )
    .viewport(0, 0, width, height)
    .enable(PicoGL.DEPTH_TEST)
    .enable(PicoGL.BLEND)
    .blendFunc(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA)
    .clearColor(0.1, 0.1, 0.1, 1.0)
});

const mousePosition = { x: 0, y: 0 }
export const getMousePosition = () => [mousePosition.x, mousePosition.y];

getPicoApp().canvas.addEventListener('mousemove', (e) => {
  // convert mouse position to clip space
  mousePosition.x = 2 * e.clientX / getPicoApp().canvas.clientWidth - 1;
  mousePosition.y = 1 - 2 * e.clientY / getPicoApp().canvas.clientHeight;
})

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

  app.clear();
  getMostRecentEdgeVertexArray();
  getEdgeVisualizerDrawCall()
    .uniform('mousePosition', getMousePosition())
    .uniform('projection', camera.state.projection)
    .uniform('view', camera.state.view)
    .draw();
  getNodeVisualizerDrawCall()
    .uniform('mousePosition', getMousePosition())
    .uniform('projection', camera.state.projection)
    .uniform('view', camera.state.view)
    .draw();
  requestAnimationFrame(animateGraph);
}