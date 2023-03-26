import { getColorBuffers, getPositionBuffers, getRadiusBuffers } from "./gpu/animation";
import { animateGraph, getPicoApp } from './gpu/rendering';
import { setEdgeIndices } from "./gpu/graph-visualization";
import { prepareVisualizerData, prepareGraphLayoutWorker, randomGraph, randomTrees, graphLayoutWorker } from "./data";
import { trackFPS } from "./fps";
import ColorHash from "color-hash";

const app = getPicoApp();
app.clear();

let graphData
// graphData = await prepareVisualizerData();
// graphData = randomGraph(100000, 100000);
graphData = randomTrees(50, 3, 5,10, 30000)
const { nodes, linkIndices } = graphData;

const layoutSim = await prepareGraphLayoutWorker(graphData,
    // graphLayoutWorker.useNgraphForceSimulator
    graphLayoutWorker.useFDGSimulator
);
// console.log(layoutSim)

setEdgeIndices(linkIndices);

const nodeColors = new Float32Array(nodes.length * 4);
// use node colors
for (let i = 0; i < nodes.length; i+=4) {
    nodeColors[i] = nodes[i].color[0];
    nodeColors[i+1] = nodes[i].color[1];
    nodeColors[i+2] = nodes[i].color[2];
    nodeColors[i+3] = nodes[i].color[3];
}

// console.log(nodeColors)

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

