import { getColorBuffers, getPositionBuffers, getRadiusBuffers } from "./gpu/animation";
import { animateGraph, getPicoApp } from './gpu/rendering';
import { setEdgeIndices } from "./gpu/graph-visualization";
import { prepareVisualizerData, prepareGraphLayoutWorker, randomGraph, randomTrees, graphLayoutWorker, useD3ForceSimulator, useNgraphForceSimulator, useFDGSimulator } from "./data";
import { trackFPS } from "./fps";
import ColorHash from "color-hash";
import { setupCameraInteraction } from "./gpu/camera";
import { proxy } from "comlink";

const app = getPicoApp();
app.clear();

setupCameraInteraction();

let graphData
graphData = await prepareVisualizerData();
// graphData = randomGraph(100000, 100000);
// graphData = randomTrees(50, 3, 5,10, 300)
const { nodes, linkIndices } = graphData;

const visualizers = [useD3ForceSimulator, useNgraphForceSimulator, useFDGSimulator]

const pickRandomVisualizer = async () => {
    // pick a random visualizer
    const visualizer = visualizers[Math.floor(Math.random() * visualizers.length)];
    await visualizer();
}

await pickRandomVisualizer();

setInterval(pickRandomVisualizer, 10000)

setEdgeIndices(linkIndices);

// use node colors
const colors = new Float32Array(nodes.flatMap(({ color }) => color));
getColorBuffers().targetData(colors)

const nodeRadii = new Float32Array(nodes.length);
// fill with random radii
// for (let i = 0; i < nodeRadii.length; i++) {
//     nodeRadii[i] = Math.random() * 100;
// }
// radii from node sizes
for (let i = 0; i < nodeRadii.length; i++) {
    nodeRadii[i] = Math.sqrt(nodes[i].size) * 10;
}
getRadiusBuffers().targetData(nodeRadii)

// initialize random node positions
const randomPoint = () => [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1].map(x => x * 0.001);
// const initialNodePositions = new Float32Array(nodes.flatMap(n => [n.x, n.y, n.z]))
const initialNodePositions = new Float32Array(nodes.flatMap(randomPoint))
getPositionBuffers().targetData(initialNodePositions);

// display the graph stats in a panel
const statsPanel = document.createElement('div');
statsPanel.style.position = 'absolute';
statsPanel.style.top = '0';
statsPanel.style.right = '0';
statsPanel.style.color = 'white';

document.body.appendChild(statsPanel);

statsPanel.innerHTML = `
    <div>Nodes: ${nodes.length}</div>
    <div>Edges: ${linkIndices.length}</div>
`;

animateGraph();
trackFPS();

