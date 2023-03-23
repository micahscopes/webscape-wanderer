import PicoGL from "picogl";
import { getInterpolationDrawCall, getInterpolationProgram, loadInterpolationInputVertexArray, swapInterpolationBuffers } from "./gpu/node-state";
import { getPicoApp } from './gpu/rendering';
import WebGP from '../lib/webgp'
import { getNodeVisualizerDrawCall } from "./gpu/graph";

const app = getPicoApp();
app.clearColor(0, 0, 0, 1);
app.clear();

const interpolation = getInterpolationDrawCall()
window.interpolation = interpolation
// interpolation.draw()

// const nodeVisualizer = getNodeVisualizerDrawCall(1000);
// nodeVisualizer.draw();
