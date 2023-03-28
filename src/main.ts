import { getColorBuffers, getPositionBuffers, getRadiusBuffers } from "./gpu/animation";
import { animateGraph, getPicoApp } from './gpu/rendering';
import { setEdgeIndices } from "./gpu/graph-visualization";
import { prepareVisualizerData, prepareGraphLayoutWorker, randomGraph, randomTrees, graphLayoutWorker, useD3ForceSimulator, useNgraphForceSimulator, useFDGSimulator } from "./data";
import { trackFPS } from "./fps";
import { setupCameraInteraction } from "./gpu/camera";
import { setupSelection } from "./interaction";

const app = getPicoApp();
app.clear();

setupCameraInteraction();
setupSelection();

let graphData
graphData = await prepareVisualizerData();
// graphData = randomGraph(5000, 100);
// graphData = randomTrees(1, 10, 2,2, 1000)
const { nodes, linkIndexPairs } = graphData;
console.log('nodes', nodes)

const visualizers = [
    useD3ForceSimulator,
    // useNgraphForceSimulator,
    // useFDGSimulator
]

const pickRandomVisualizer = async () => {
    // pick a random visualizer
    const visualizer = visualizers[Math.floor(Math.random() * visualizers.length)];
    await visualizer(graphData);
}

await pickRandomVisualizer();

// try out different visualizers:
// setInterval(pickRandomVisualizer, 10000)

setEdgeIndices(linkIndexPairs.slice(0, 1000))

// use node colors
const colors = new Float32Array(nodes.flatMap(({ color }) => color));
getColorBuffers().targetData(colors)

const nodeSizes = new Float32Array(nodes.length);
// fill with random sizes
// for (let i = 0; i < nodeSizes.length; i++) {
//     nodeSizes[i] = Math.random() * 100;
// }
// sizes from node sizes
for (let i = 0; i < nodeSizes.length; i++) {
    nodeSizes[i] = Math.sqrt(nodes[i].size) * 10;
}
getRadiusBuffers().targetData(nodeSizes)

// initialize random node positions
const scale = 40;
const randomPoint = () => [Math.random() * scale - 1, Math.random() * scale - 1, Math.random() * scale - 1];
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
    <div>Edges: ${linkIndexPairs.length}</div>
`;

animateGraph();
trackFPS();

