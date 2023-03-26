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

  graphData.nodes.forEach((node) => {
    const id = String(node.index);
    forceGraphSimulator.addNode(id, 1000);
  })
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
          positions?.set(forceGraphSimulator.nodes.flatMap((node) => node.location.map(x => x/1000)))
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
      forceManyBody().strength(-0.01)
        // .distanceMax(0.005).distanceMin(0.000000)
    )
    .force('link', forceLink(graphData.links).id(d => d.id).strength(1).distance(0.001))
    .force('center', forceCenter())
    .on('tick', () => {
      const newPositions = graphData.nodes.flatMap(({x,y,z}) => [x,y,z].map(co => co/10))
      positions = new Float32Array(newPositions)
      updatePositions && positions && updatePositions(transfer(positions, [positions.buffer]));
    })
  
  // return simulation;
}


expose({
  useFDGSimulator,
  useD3ForceSimulator,
})