import './style.css'
import ForceGraph3D from '3d-force-graph-vr'
import * as d3 from 'd3'
import ColorHash from 'color-hash'

document.querySelector('#app').innerHTML = `
  <div id='graph-viz'></div>
`
const colorHash = new ColorHash({lightness: [0.35, 0.5, 0.65]});

import { buildGraphDb, doQuery  } from './data'

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
  // trigger update of highlighted objects in scene
  graph
    .nodeColor(graph.nodeColor())
    // .linkWidth(graph.linkWidth())
    // .linkDirectionalParticles(graph.linkDirectionalParticles());
}
, 5)

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
    doQuery(
      downstreamDependentsQuery(node.project),
      // proxy(data => {}),
      proxy((data, get) => {
        // console.log('data', data)
        if (node !== selectedNode) return;
        get('dependent').then(dependent => {
          console.log('dependent', dependent)
          highlightNodes.add(dependent.value)
          updateHighlight();
        })
      }),
      proxy(() => {
        console.log('query ended')
      })
      // onEnd: proxy(() => {
      // })
    )
    // queryBindings(downstreamDependentsQuery(node.project)).then($ => {
    //   $.on('data', data => {
    //     if (node !== selectedNode) $.destroy();
    //     const dependent = data.get('dependent').value
    //     highlightNodes.add(dependent)
    //     updateHighlight();
    //   })
    //   console.log('clicked on', node)
    //   $.on('end', () => {
    //     // updateHighlight();
    //     // console.log(highlightNodes)
    //   })
    // })
    // node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
    // node.links.forEach(link => highlightLinks.add(link));
  }

  selectedNode = node || null;

})

import { downstreamDependentsQuery } from './query-helpers'
import { proxy } from 'comlink'
import { debounce } from 'lodash-es'
const {valueNetworkData, projectsData, organizationsData} = await buildGraphDb()
console.log('valueNetworkData', valueNetworkData, 'projectsData', projectsData, 'organizationsData', organizationsData)

const nodes = Object.entries(valueNetworkData).map(([project, {dependents: dependents, dependencies, owner}]) => ({
  project,
  owner,
  size: (2*dependents?.length)**2
}))

const dependencyLinks = Object.entries(valueNetworkData).flatMap(([project, { dependencies }]) =>
  dependencies.map(dependency => ({
    source: project,
    target: dependency
  }))
)

const dependentLinks = Object.entries(valueNetworkData).flatMap(([project, { dependents }]) =>
  dependents?.map(dependent => ({
    source: project,
    target: dependent
  }))
).filter(edge => edge)


graph(document.getElementById('graph-viz'))
  .graphData({ nodes, links: dependentLinks });