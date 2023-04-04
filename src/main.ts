import { getColorBuffers, getEmphasisBuffers, getPositionBuffers, getRadiusBuffers } from "./gpu/animation";
import { animateGraph, getPicoApp } from './gpu/rendering';
import { setEdgeIndices } from "./gpu/graph-visualization";
import { prepareGraphLayoutWorker, randomGraphData, randomTreesData, graphLayoutWorker, useD3ForceSimulator, useNgraphForceSimulator, useFDGSimulator, getGraphData, prepareGraphDBWorker } from "./data";
import { trackFPS } from "./fps";
import { setupCameraInteraction, setupSelection } from "./interaction";
import navigation from "./navigation";


const app = getPicoApp();
app.clear();

setupCameraInteraction();
setupSelection();

let graphData
graphData = await getGraphData();
await prepareGraphDBWorker();

// graphData = randomGraphData(2000,2000);
// graphData = randomTreesData(1, 7, 5,8, 10000)
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

setEdgeIndices(linkIndexPairs)
// setEdgeIndices(linkIndexPairs.slice(0, 1000))

// use node colors
const colors = new Float32Array(nodes.flatMap(({ color }) => color));
getColorBuffers().targetData(colors)

// sizes from node sizes
const nodeSizes = new Float32Array(nodes.length);
for (let i = 0; i < nodeSizes.length; i++) {
    nodeSizes[i] = Math.sqrt(nodes[i].size)/40;
}
getRadiusBuffers().targetData(nodeSizes)

// initialize random node positions
const scale = 40;
const randomPoint = () => [Math.random() * scale - 1, Math.random() * scale - 1, Math.random() * scale - 1];
// const initialNodePositions = new Float32Array(nodes.flatMap(n => [n.x, n.y, n.z]))
const initialNodePositions = new Float32Array(nodes.flatMap(randomPoint))
getPositionBuffers().targetData(initialNodePositions);

getEmphasisBuffers().targetData(new Float32Array(nodes.length).fill(0));

// display the graph stats in a panel
const statsPanel = document.createElement('div');
statsPanel.classList.add('overlay');
statsPanel.classList.add('debug');
statsPanel.style.top = '0';
statsPanel.style.right = '0';

document.body.appendChild(statsPanel);

statsPanel.innerHTML = `
    <div>Nodes: ${nodes.length}</div>
    <div>Edges: ${linkIndexPairs.length}</div>
`;

animateGraph();
trackFPS();

navigation.start()

// debugging stuff
window.setNodePositions = (positionsFn) => {
    getPositionBuffers().targetData(new Float32Array(new Array(nodes.length*3).fill(0).flatMap(positionsFn)));
}
window.setNodeColors = (colorFn) => {
    getColorBuffers().targetData(new Float32Array(new Array(nodes.length*4).fill(0).flatMap(colorFn)));
}
window.setNodeSizes = (sizeFn) => {
    getRadiusBuffers().targetData(new Float32Array(new Array(nodes.length).fill(0).flatMap(sizeFn)));
}
window.graphData = graphData

// toggle debug panel
window.addEventListener('keydown', (e) => {
    const debugStylesheet = (document.querySelector('#debug-style') as HTMLStyleElement).sheet!;
    // @ts-ignore
    const showing = debugStylesheet.cssRules[0]!.styleMap.get('display').value !== 'none'

    // console.log(debugStylesheet, showing, debugStylesheet.cssRules[0]!.styleMap.get('display'))

    if (e.key === 'd') {
        // @ts-ignore
        debugStylesheet.cssRules[0]!.styleMap.set('display', showing ? 'none' : 'block')
    }
})