import { animateGraph } from './gpu/rendering';
import { getGraphData, prepareGraphDBWorker } from "./data";
import { trackFPS } from "./fps";
import { setupCameraInteraction, setupSelection } from "./interaction";
import navigation from "./navigation";
import { getColorLayers, getEmphasisLayers, getPositionLayers, getSizeLayers, setAllLayerSizes } from "./gpu/interpolation";
import { getThreeSetup, loadNodeVertexArray, loadEdgeVertexArray } from "./gpu/graph-viz";

import './parameters'
// const app = getPicoApp();
// app.clear();

const { scene, camera, renderer } = getThreeSetup();

setupCameraInteraction();
setupSelection();

document.querySelector('html')?.classList.add('loading')

let graphData;
graphData = await getGraphData();

prepareGraphDBWorker();
const { nodes, linkIndexPairs } = graphData;


// let positions
// setTimeout(async () => {
//     await layout.getPositions(proxy(p => positions = p));
//     console.log(positions)
// }, 100)
// layout.getPositions(proxy(console.log))

// await pickRandomVisualizer();

// try out different visualizers:
// setInterval(pickRandomVisualizer, 10000)

// setEdgeIndices(linkIndexPairs)
// setEdgeIndices(linkIndexPairs.slice(0, 1000))

loadEdgeVertexArray(linkIndexPairs);
loadNodeVertexArray(nodes.length);

setAllLayerSizes(nodes.length);

// use node colors
const colors = new Float32Array(nodes.flatMap(({ color }) => color));
getColorLayers().target.setFromArray(colors)
getColorLayers().current.setFromArray(colors)

// sizes from node sizes
const nodeSizes = new Float32Array(nodes.length);
for (let i = 0; i < nodeSizes.length; i++) {
    nodeSizes[i] = Math.sqrt(nodes[i].size)/40;
}
getSizeLayers().target.setFromArray(nodeSizes)
getSizeLayers().current.setFromArray(nodeSizes)

// initialize random node positions
const scale = 40;
const randomPoint = () => [Math.random() * scale - 1, Math.random() * scale - 1, Math.random() * scale - 1];
// const initialNodePositions = new Float32Array(nodes.flatMap(n => [n.x, n.y, n.z]))
const initialNodePositions = new Float32Array(nodes.flatMap(randomPoint))
getPositionLayers().target.setFromArray(initialNodePositions);
getPositionLayers().current.setFromArray(initialNodePositions);

getEmphasisLayers().target.setFromArray(new Float32Array(nodes.length).fill(0));
getEmphasisLayers().current.setFromArray(new Float32Array(nodes.length).fill(0));

// display the graph stats in a panel
const controlsPanel = document.querySelector('#controls')!;
controlsPanel.classList.add('overlay');
controlsPanel.classList.add('debug');
controlsPanel.style.top = '0';
controlsPanel.style.right = '0';

document.body.appendChild(controlsPanel);

const nodesCount = document.createElement('div');
nodesCount.innerHTML = `Nodes: ${nodes.length}`;
controlsPanel.appendChild(nodesCount);

const edgesCount = document.createElement('div');
edgesCount.innerHTML = `Edges: ${linkIndexPairs.length}`;
controlsPanel.appendChild(edgesCount);

const debugMessage = document.createElement('div');
debugMessage.id = 'debug-message';
controlsPanel.appendChild(debugMessage);

document.querySelector('html')!.classList.remove('loading')

import { controls } from './parameters'
controlsPanel.appendChild(controls)

animateGraph();
trackFPS();

navigation.start()

// toggle debug panel
window.addEventListener('keydown', (e) => {
    const showing = document.querySelector('html')!.classList.contains('debug')
    if (e.key === 'd') {
        document.querySelector('html')!.classList.toggle('debug', !showing)
    }
})

import queuedThrottle from 'throttled-queue'
const debugMessageQueue = queuedThrottle(1, 1000)
export const logDebugMessage = message => debugMessageQueue(() => {
    const debugMessageArea = document.querySelector('#debug-message')
    if(debugMessageArea){
        debugMessageArea.innerHTML = message
    }
    console.log(message)
})

// detect a quadruple tap to enable debugging on mobile
let lastTap = 0;
let tapCount = 0;
document.addEventListener('pointerup', (e) => {
    const now = Date.now();
    if (now - lastTap < 300) {
        tapCount++;
    } else {
        tapCount = 1;
    }
    lastTap = now;
    if (tapCount === 4) {
        tapCount = 0;
        document.querySelector('html')!.classList.toggle('debug')
    }
})