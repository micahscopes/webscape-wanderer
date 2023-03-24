import PicoGL from "picogl";
import { getColorBuffers, getInterpolationDrawCall, getInterpolationProgram, getPositionBuffers, getRadiusBuffers, loadInterpolationInputVertexArray, swapInterpolationBuffers } from "./gpu/animation";
import { animateGraph, fillCanvasToWindow, getPicoApp } from './gpu/rendering';
import WebGP from '../lib/webgp'
import { getEdgeVisualizerDrawCall, getMostRecentEdgeVertexArray, getNodeVisualizerDrawCall, loadEdgeVertexArray, setEdgeIndices } from "./gpu/graph-visualization";

const app = getPicoApp();
app.clearColor(0.5, 0.5, 0.5, 1.0);
app.clear();

const gl = app.gl

const N = 20000
const E = 10000

let positionTargets = new Float32Array(3*N)
getPositionBuffers().targetData(positionTargets, { immediate: true })

let colorTargets = new Float32Array(4*N)
getColorBuffers().targetData(colorTargets, { immediate: true })

let radiusTargets = new Float32Array(1*N)
getRadiusBuffers().targetData(radiusTargets, { immediate: true })



let edgeIndices = new Uint16Array(E).map(() => Math.floor(Math.random()*(N-1)))
setEdgeIndices(edgeIndices)

// edgeIndices = edgeIndices.map((_,i) => (i%2)*Math.floor(Math.random()*(N-1)))
// edgeIndices = edgeIndices.map((idx, j) => j%2 ? idx : edgeIndices[j-1])



const scrambleColors = (immediate = false) => {
    const newColors = colorTargets.map((_,i) => i%4 === 3 ? Math.random() : Math.random())
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
    getRadiusBuffers().targetData(radiusTargets.map(() => Math.random()*5), { immediate });
}

const scramble = (immediate = false) => {
    scrambleColors(immediate);
    scramblePositions(immediate);
    scrambleRadii(immediate);
}

randomizePositions();
scramble(true);

setInterval(scramble, 100)

animateGraph();