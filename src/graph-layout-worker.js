import { expose, transfer } from 'comlink'
import init, { ForceGraphSimulator } from "../lib/fdg-wasm/fdg-wasm.js";

let positions
let forceGraphSimulator
let updatePositions

export const useFDGSimulator = async (graphData, updatePositionsCallback) => {
  updatePositions = updatePositionsCallback
  const wasm = await init();
  
  if (forceGraphSimulator) {
    forceGraphSimulator.destroy();
  }

  forceGraphSimulator = new ForceGraphSimulator();
  console.log("forceGraphSimulator", forceGraphSimulator)
  forceGraphSimulator.setDimensions(3);

  const factor = 10;

  graphData.nodes.forEach((node, i) => {
    const id = String(node.index);
    forceGraphSimulator.addNode(id, 1000);
    forceGraphSimulator.setNodeLocation(id, node.x*factor, node.y*factor, node.z*factor)
  })
  // console.log(forceGraphSimulator.nodes[0])
  graphData.links.forEach((link) => {
    const source = String(link.sourceIndex);
    const target = String(link.targetIndex);
    forceGraphSimulator.addEdge(source, target, link.strength || 0.0001)
  });
  
  positions = new Float32Array(graphData.nodes.length * 3);

  forceGraphSimulator.resetNodePlacement();

  const simulate = () => {
      if(forceGraphSimulator) {
          forceGraphSimulator.update(0.05);
          positions = new Float32Array(forceGraphSimulator.nodes.length * 3);
          positions?.set(forceGraphSimulator.nodes.flatMap((node) => node.location.map(x => x/5000)))
          updatePositions && positions && updatePositions(transfer(positions, [positions.buffer]));
      }
      
      requestAnimationFrame(simulate);
  }
  simulate();

  return forceGraphSimulator;
};

import {forceSimulation, forceManyBody, forceLink, forceCenter} from 'd3-force-3d'
const useD3ForceSimulator = async (graphData, updatePositionsCallback) => {
  updatePositions = updatePositionsCallback
  console.log("useD3ForceSimulator", graphData)
  const simulation = forceSimulation(graphData.nodes, 3)
    .force('charge',
      forceManyBody().strength(-0.001)
        // .distanceMax(0.005).distanceMin(0.000000)
    )
    .force('link', forceLink(graphData.links).id(d => d.id).strength(1).distance(0.00001))
    .force('center', forceCenter())
    .on('tick', () => {
      const newPositions = graphData.nodes.flatMap(({x,y,z}) => [x,y,z].map(co => co/10))
      positions = new Float32Array(newPositions)
      updatePositions && positions && updatePositions(transfer(positions, [positions.buffer]));
    })
  
  // return simulation;
}


import forceLayout from 'ngraph.forcelayout'
import createGraph from 'ngraph.graph'

const useNgraphForceSimulator = async (graphData, updatePositionsCallback) => {
  updatePositions = updatePositionsCallback
  console.log("useNgraphForceSimulator", graphData)
  const ngraph = createGraph()
  graphData.nodes.forEach((node) => {
    ngraph.addNode(node.id, node)
  })
  graphData.links.forEach((link) => {
    ngraph.addLink(link.source, link.target)
  })
  const layout = forceLayout(ngraph, {
    dimensions: 3, 
    // springLength: 0.00001,
    // springCoefficient: 0.0001,
    // dragCoefficient: 0.01,
    // gravity: -0.001,
    // theta: 0.8,
    // timeStep: 0.01
  })
  for (let node of graphData.nodes) {
    layout.setNodePosition(node.id, node.x, node.y, node.z)
  }
  layout.on('step', () => {
    const newPositions = graphData.nodes.flatMap(({id}) => {
      const {x,y,z} = layout.getNodePosition(id)
      return [x,y,z].map(co => co/10)
    })
    positions = new Float32Array(newPositions)
    updatePositions && positions && updatePositions(transfer(positions, [positions.buffer]));
  })
  
  const simulate = () => {
    layout.step()
    console.log("layout.step")
    requestAnimationFrame(simulate);
  }
  
  simulate()

  // return layout
}

expose({
  useFDGSimulator,
  useD3ForceSimulator,
  useNgraphForceSimulator
})