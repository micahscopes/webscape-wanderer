import './style.css'
import ForceGraph3D from '3d-force-graph-vr'
import * as d3 from 'd3'
import ColorHash from 'color-hash'

document.querySelector('#app').innerHTML = `
  <div id='graph-viz'></div>
`
const colorHash = new ColorHash({lightness: [0.35, 0.5, 0.65]});

import { prepareGraphDBWorker, doQuery, prepareVisualizerData  } from './data'

// graph config
const nodeBaseSize = 1;
const highlightedSizeFactor = 10;
const highlightNodes = new Set();
const highlightLinks = new Set();
let highlightColor = null;
let selectedNode = null;

const graph = ForceGraph3D()
  // .d3Force('collision', d3.forceCollide(node => Math.cbrt(node.size) * nodeBaseSize))
  .backgroundColor('#101020')
  .nodeRelSize(nodeBaseSize)
  .nodeId('project')
  .nodeVal(node => highlightNodes.has(node.project) || node === selectedNode ? node.size * highlightedSizeFactor : node.size)
  .nodeColor(node => highlightNodes.has(node.project) ? node === selectedNode ? 'rgb(255,0,0,1)' : highlightColor : projectOrgColor(node))
  .nodeLabel('project')
  .nodeOpacity(0.9)
  .linkColor(() => 'rgba(255,255,255,0.2)')
  .linkWidth(link => highlightLinks.has(link) ? 4 : 1)
  .linkDirectionalParticles(2)
  .linkDirectionalParticleWidth(0.8)
  .linkDirectionalParticleSpeed(0.006)
  .d3VelocityDecay(0.3);

// Decrease repel intensity
// graph.d3Force('charge').strength(-15);

function projectOrgColor(node) {
  return colorHash.hex(node.owner || '')
}


const updateHighlight = 
debounce(
  () => {
    graph
      .nodeColor(graph.nodeColor())
  }
, 20)

// import { queryBindings} from './data'

graph.onNodeClick(node => {
  // no state change
  if ((!node && !highlightNodes.size) || (node && selectedNode === node)) return;

  highlightNodes.clear();
  highlightLinks.clear();
  // highlightColor = projectOrgColor(node);
  highlightColor = 'yellow';
  if (node) {
    highlightNodes.add(node);
    const query = downstreamDependentsQuery(node.project) 
    doQuery(
      query,
      // proxy(data => {}),
      proxy((data, get) => {
        // console.log('data', data)
        if (node !== selectedNode) return;
        get('dependent').then(dependent => {
          // console.log('dependent', dependent)
          highlightNodes.add(dependent.value)
          updateHighlight();
        })
      }),
      proxy(() => {
        console.log('query ended:', query)
      })
    )
  }

  selectedNode = node || null;

})

import { downstreamDependentsQuery } from './query-helpers'
import { proxy } from 'comlink'
import { debounce } from 'lodash-es'

prepareGraphDBWorker()


graph(document.getElementById('graph-viz'))
  .graphData(await prepareVisualizerData());
