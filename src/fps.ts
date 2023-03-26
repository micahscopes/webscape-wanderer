const fpsIndicator = document.createElement('div');
document.body.appendChild(fpsIndicator);
fpsIndicator.id = 'fps-indicator';
fpsIndicator.innerHTML = `
<p class="value">FPS: 0</p>
<canvas width="100" height="50" class="graph"></canvas>
`
fpsIndicator.style.position = 'absolute';
fpsIndicator.style.top = '0px';
fpsIndicator.style.left = '0px';
fpsIndicator.style.color = 'white';

const fpsValue = document.querySelector('#fps-indicator .value') as HTMLParagraphElement;
const fpsCanvas = document.querySelector('#fps-indicator .graph') as HTMLCanvasElement;
const fpsCanvasCtx = fpsCanvas.getContext('2d');

// use `performance.now()` instead of `Date.now()` for more accurate results
let lastTime = performance.now();
let lastIndicatorUpdate = performance.now();
let frames = 0;
let fpsHistory: number[] = [];
const smaWindow = 5

export const getFPS = () => fpsHistory.slice(0,smaWindow).reduce((a, b) => a + b, 0) / smaWindow;

// use a simple moving average to smooth out the FPS
export const trackFPS = () => {
  const fps = getFPS();
  const now = performance.now();
  frames++;
  if (now > lastTime + 100) {

    fpsHistory = [Math.round((frames * 1000) / (now - lastTime)/2), ...fpsHistory].slice(0, 1000);
    
    // draw the fps history graph
    fpsCanvasCtx?.clearRect(0, 0, fpsCanvas.width, fpsCanvas.height);
    fpsCanvasCtx?.beginPath();
    fpsCanvasCtx?.moveTo(0, fpsCanvas.height);
    fpsHistory.forEach((fps, i) => {
      fpsCanvasCtx?.lineTo(i, fpsCanvas.height - fps);
    });
    fpsCanvasCtx?.lineTo(fpsHistory.length, fpsCanvas.height);
    fpsCanvasCtx!.fillStyle = 'rgba(255, 255, 255, 0.5)';
    fpsCanvasCtx?.fill();
    fpsCanvasCtx?.stroke();
    

    lastTime = now;
    frames = 0;
  }

  if (now > lastIndicatorUpdate + 1000) {
    lastIndicatorUpdate = now;
    fpsValue.innerText = `FPS: ${fps}`;
  }

  requestAnimationFrame(trackFPS);
}
trackFPS();
