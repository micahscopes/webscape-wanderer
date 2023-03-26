import PicoGL from 'picogl';
import moize from 'moize';
import { getInterpolationDrawCall, swapInterpolationBuffers } from './animation';
import { getEdgeVisualizerDrawCall, getMostRecentEdgeVertexArray, getNodeVisualizerDrawCall } from './graph-visualization';

export const getPicoApp = moize.infinite(() => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  return PicoGL.createApp(canvas, 
    {antialias: false}
  )
    .enable(PicoGL.DEPTH_TEST)
    .enable(PicoGL.BLEND)
    .blendFunc(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA)
    .clearColor(0.1, 0.1, 0.1, 1.0)
});

const mousePosition = {x: 0, y: 0}
export const getMousePosition = () => [mousePosition.x, mousePosition.y];

getPicoApp().canvas.addEventListener('mousemove', (e) => {
  mousePosition.x = 2*e.clientX/getPicoApp().canvas.clientWidth - 1;
  mousePosition.y = 1-2*e.clientY/getPicoApp().canvas.clientHeight;
})

export const fillCanvasToWindow = () => {
    const app = getPicoApp();
    app.resize(window.innerWidth, window.innerHeight)
    const canvas = app.canvas as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
}

export const animateGraph = () => {
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
      .draw();
    getNodeVisualizerDrawCall()
      // get mouse position from the canvas
      .uniform('mousePosition', getMousePosition())
      .draw();
    requestAnimationFrame(animateGraph);
}