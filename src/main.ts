import PicoGL from "picogl";
import { getColorBuffers, getInterpolationDrawCall, getInterpolationProgram, getPositionBuffers, getRadiusBuffers, loadInterpolationInputVertexArray, swapInterpolationBuffers } from "./gpu/node-state";
import { getPicoApp } from './gpu/rendering';
import WebGP from '../lib/webgp'
import { getEdgeVisualizerDrawCall, getMostRecentEdgeVertexArray, getNodeVisualizerDrawCall, loadEdgeVertexArray } from "./gpu/graph";

const app = getPicoApp();
app.clearColor(0.1, 0.1, 0.2, 1.0);
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

const N = 5000
const E = 200

let positionTargets = new Float32Array(3*N)
getPositionBuffers().targetData(positionTargets, { immediate: true })

let colorTargets = new Float32Array(4*N)
getColorBuffers().targetData(colorTargets, { immediate: true })

let radiusTargets = new Float32Array(1*N)
getRadiusBuffers().targetData(radiusTargets, { immediate: true })


const nodeVisualizer = getNodeVisualizerDrawCall();

let edgeIndices = new Uint16Array(E).map(() => Math.floor(Math.random()*(N-1)))

// edgeIndices = edgeIndices.map((_,i) => (i%2)*Math.floor(Math.random()*(N-1)))
// edgeIndices = edgeIndices.map((idx, j) => j%2 ? idx : edgeIndices[j-1])

const edgeVisualizer = getEdgeVisualizerDrawCall(edgeIndices);

const animate = () => {
    app.clear();
    fillCanvasToWindow();

    const interpolation = getInterpolationDrawCall().uniform('uMixRatio', 0.02)
    interpolation.draw();
    swapInterpolationBuffers();
    
    app.clear();
    getMostRecentEdgeVertexArray(edgeIndices);
    edgeVisualizer.draw();
    nodeVisualizer.draw();
    requestAnimationFrame(animate);
}

const scrambleColors = (immediate = false) => {
    const newColors = colorTargets.map((_,i) => i%4 === 3 ? 1 : Math.random())
    getColorBuffers().targetData(newColors, { immediate });
}

const randomizePositions = (immediate = true) => {
    positionTargets = positionTargets.map(() => 1.5*(Math.random()-0.5))
    getPositionBuffers().targetData(positionTargets, { immediate });
}

const scramblePositions = (immediate = false) => {
    positionTargets = positionTargets.map((x) => {
    // ensure that the positions are within the clipping volume
        const d = 0.4*(Math.random()-0.5)
        return Math.abs(x + d) > 1.0 ? x - d : x + d
    })
    getPositionBuffers().targetData(positionTargets, { immediate });
}

const scrambleRadii = (immediate = false) => {
    getRadiusBuffers().targetData(radiusTargets.map(() => Math.random()*50), { immediate });
}

const scramble = (immediate = false) => {
    scrambleColors(immediate);
    scramblePositions(immediate);
    scrambleRadii(immediate);
}

randomizePositions();
scramble(true);

setInterval(scramble, 4000)

animate();