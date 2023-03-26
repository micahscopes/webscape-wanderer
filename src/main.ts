import { getColorBuffers, getPositionBuffers, getRadiusBuffers } from "./gpu/animation";
import { animateGraph, getPicoApp } from './gpu/rendering';
import { setEdgeIndices } from "./gpu/graph-visualization";
import { prepareVisualizerData, prepareGraphLayoutWorker, randomGraph, randomTrees } from "./data";
import { trackFPS } from "./fps";

const app = getPicoApp();
app.clear();

const graphData = await prepareVisualizerData();
// const graphData = randomGraph(100000, 1000);
// const graphData = randomTrees(1, 10, 5,10, 50000)
const { nodes, linkIndices } = graphData;

const layoutSim = await prepareGraphLayoutWorker(graphData);
console.log(layoutSim)

setEdgeIndices(linkIndices);

const nodeColors = new Float32Array(nodes.length * 4);
// fill with random colors
for (let i = 0; i < nodeColors.length; i += 4) {
    nodeColors[i] = Math.random();
    nodeColors[i + 1] = Math.random();
    nodeColors[i + 2] = Math.random();
    nodeColors[i + 3] = 1;
}

getColorBuffers().targetData(nodeColors)

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

