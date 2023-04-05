import { expose, transfer } from "comlink";
// import init, { ForceGraphSimulator } from "../lib/fdg-wasm/fdg-wasm.js";
import requestAnimationFrame from 'raf';

import moize from "moize";

let positions;
let updatePositions;

let using;

const compareGraphData = (a, b) => {
  if (a.nodes.length === b.nodes.length && a.links.length === b.links.length) return true;
  console.log(a,b, 'fdg-wasm layout not cached')
};
const moizeArgs = {
  matchesArg: compareGraphData,
  onCacheMiss: () => console.log('using cached fdg-wasm layout')
}

// const setupFDGSimulator = moize.infinite(async (graphData) => {
//   console.log('setting up fdg-wasm layout again')
//   const wasm = await init();
//   const fdgSim = new ForceGraphSimulator();

//   fdgSim.setDimensions(3);

//   const factor = 1;

//   graphData.nodes.forEach((node, i) => {
//     const id = String(node.index);
//     fdgSim.addNode(id, 1000);
//     fdgSim.setNodeLocation(
//       id,
//       node.x * factor,
//       node.y * factor,
//       node.z * factor
//     );
//   });
//   graphData.links.forEach((link) => {
//     const source = String(link.sourceIndex);
//     const target = String(link.targetIndex);
//     fdgSim.addEdge(source, target, link.strength || 0.01);
//   });

//   positions = new Float32Array(graphData.nodes.length * 3);

//   fdgSim.resetNodePlacement();

//   const simulate = () => {
//     if (fdgSim) {
//       fdgSim.update(0.05);
//       positions = new Float32Array(fdgSim.nodes.length * 3);
//       positions?.set(
//         fdgSim.nodes.flatMap((node) => node.location.map((x) => x))
//       );
//       updatePositions &&
//         positions &&
//         updatePositions(transfer(positions, [positions.buffer]));
//     }

//     if (using === fdgSim) requestAnimationFrame(simulate);
//   };
//   simulate();

//   return () => {
//     using = fdgSim
//     simulate()
//   };
// }, moizeArgs);

// const useFDGSimulator = async (graphData, updatePositionsCallback) => {
//   console.log('using fdg-wasm layout')
//   updatePositions = updatePositionsCallback;
//   const start = await setupFDGSimulator(graphData);
//   start()
// }


import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
} from "d3-force-3d";
const setupD3ForceSimulator = moize.infinite(async (graphData) => {
  // updatePositions = updatePositionsCallback;
  const d3Simulation = forceSimulation(graphData.nodes, 3)
    .force(
      "charge",
      forceManyBody()
        // .distanceMax(0.3)
    )
    .force(
      "link",
      forceLink(graphData.links).id((d) => d.id)
        // .distance(10)
    )
    .force("center", forceCenter());

  d3Simulation.on("tick", () => {
    const newPositions = graphData.nodes.flatMap(({ x, y, z }) =>
      [x, y, z].map((co) => co)
    );
    positions = new Float32Array(newPositions);
    updatePositions &&
      positions &&
      updatePositions(transfer(positions, [positions.buffer]));

    if (using !== d3Simulation) {
      d3Simulation.stop();
    }
  });

  return () => {
    using = d3Simulation;
    d3Simulation.restart()
  };
}, moizeArgs);

const useD3ForceSimulator = async (graphData, updatePositionsCallback) => {
  console.log('using d3-force layout')
  updatePositions = updatePositionsCallback;
  const start = await setupD3ForceSimulator(graphData);
  start();
}

import forceLayout from "ngraph.forcelayout";
import createGraph from "ngraph.graph";

const setupNgraphForceSimulator = moize.infinite(async (graphData) => {
  // console.log('setting up ngraph layout again')
  const ngraph = createGraph();
  graphData.nodes.forEach((node) => {
    ngraph.addNode(node.id, node);
  });
  graphData.links.forEach((link) => {
    ngraph.addLink(link.source, link.target);
  });

  const layout = forceLayout(ngraph, {
    dimensions: 3,
    // springLength: 10,
    // springCoefficient: 0.1,
    // dragCoefficient: 0.01,
    // gravity: -0.1,
    // theta: 0.8,
    // timeStep: 0.01
  });

  for (let node of graphData.nodes) {
    layout.setNodePosition(node.id, node.x, node.y, node.z);
  }
  layout.on("step", () => {
    const newPositions = graphData.nodes.flatMap(({ id }) => {
      const { x, y, z } = layout.getNodePosition(id);
      return [x, y, z].map((co) => co);
    });
    positions = new Float32Array(newPositions);
    // console.log('ngraph sim', using === layout, updatePositions && positions)
    updatePositions &&
      positions &&
      updatePositions(transfer(positions, [positions.buffer]));
  });

  const simulate = () => {
    layout.step();
    
    if (using === layout) requestAnimationFrame(simulate);
  };

  simulate();
  
  return () => {
    using = layout;
    simulate();
  };
}, moizeArgs);

const useNgraphForceSimulator = async (graphData, updatePositionsCallback) => {
  console.log('using ngraph layout')
  updatePositions = updatePositionsCallback
  const start = await setupNgraphForceSimulator(graphData);
  start()
}

expose({
  // useFDGSimulator,
  useD3ForceSimulator,
  useNgraphForceSimulator,
});
