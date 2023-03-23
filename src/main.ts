import PicoGL from "picogl";
import { getColorBuffers, getInterpolationDrawCall, getInterpolationProgram, getPositionBuffers, getRadiusBuffers, loadInterpolationInputVertexArray, swapInterpolationBuffers } from "./gpu/node-state";
import { getPicoApp } from './gpu/rendering';
import WebGP from '../lib/webgp'
import { getEdgeVisualizerDrawCall, getNodeVisualizerDrawCall } from "./gpu/graph";

const app = getPicoApp();
app.clearColor(0, 0, 0, 1);
app.clear();

const fillCanvasToWindow = () => {
    app.resize(window.innerWidth, window.innerHeight)
    const canvas = app.canvas as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
}

const gl = app.gl
console.log(gl.getParameter(gl.MAX_TEXTURE_SIZE))

const N = 2000
const E = N/4

const positionTargets = new Float32Array(3*N)
getPositionBuffers().targetData(positionTargets, { immediate: true })

const colorTargets = new Float32Array(4*N)
getColorBuffers().targetData(colorTargets, { immediate: true })

const radiusTargets = new Float32Array(1*N)
getRadiusBuffers().targetData(radiusTargets, { immediate: true })


const nodeVisualizer = getNodeVisualizerDrawCall();

let edgeIndices = new Uint16Array(E)

edgeIndices = edgeIndices.map((_,i) => Math.floor(Math.random()*N))

const edgeVisualizer = getEdgeVisualizerDrawCall(edgeIndices);

const animate = () => {
    app.clear();
    fillCanvasToWindow();

    const interpolation = getInterpolationDrawCall().uniform('uMixRatio', 0.02)
    interpolation.draw();
    swapInterpolationBuffers();
    
    nodeVisualizer.draw();
    edgeVisualizer.draw();
    requestAnimationFrame(animate);
}

const scrambleColors = (immediate = false) => {
    const newColors = colorTargets.map((_,i) => i%4 === 3 ? 1 : Math.random())
    getColorBuffers().targetData(newColors, { immediate });
}

const scramblePositions = (immediate = false) => {
    getPositionBuffers().targetData(positionTargets.map(() => 2*(Math.random()-0.5)), { immediate });
}

const scrambleRadii = (immediate = false) => {
    getRadiusBuffers().targetData(radiusTargets.map(() => Math.random()*20), { immediate });
}
const scramble = (immediate = false) => {
    scrambleColors(immediate);
    scramblePositions(immediate);
    scrambleRadii(immediate);
}

scramble(true);

setInterval(scramble, 2000)

animate();