import './style.css'
// import * as dat from 'dat.gui';
import ForceGraph3D from '3d-force-graph'
import * as d3 from 'd3'
import ColorHash from 'color-hash'

document.querySelector('#app').innerHTML = `
  <div id='graph-viz'></div>
`
const colorHash = new ColorHash({lightness: [0.35, 0.5, 0.65]});

// graph config
const NODE_REL_SIZE = 1;
const graph = ForceGraph3D()
  // .dagMode('td')
  // .dagLevelDistance(200)
  .backgroundColor('#101020')
  .linkColor(() => 'rgba(255,255,255,0.2)')
  .nodeRelSize(NODE_REL_SIZE)
  .nodeId('project')
  .nodeVal('size')
  .nodeColor(({owner}) => colorHash.hex(owner || ''))
  .nodeLabel('project')
  .nodeOpacity(0.9)
  .linkDirectionalParticles(2)
  .linkDirectionalParticleWidth(0.8)
  .linkDirectionalParticleSpeed(0.006)
  .d3Force('collision', d3.forceCollide(node => Math.cbrt(node.size) * NODE_REL_SIZE))
  .d3VelocityDecay(0.3);

// Decrease repel intensity
graph.d3Force('charge').strength(-15);

const {valueNetworkData, projectsData, organizationsData} = await fetchData()
console.log('valueNetworkData', valueNetworkData, 'projectsData', projectsData, 'organizationsData', organizationsData)

const nodes = Object.entries(valueNetworkData).map(([project, {dependents, dependencies, owner}]) => ({
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


// import './data'
import { buildGraph, engine, fetchData, getGraphData } from './data'
console.log(engine)
// console.log()
await buildGraph()
await getGraphData()


console.log(nodes, "dependencies", dependencyLinks, "dependents", dependentLinks)

graph(document.getElementById('graph-viz'))
  .graphData({ nodes, links: dependentLinks });
