import init, { ForceGraphSimulator } from 'https://unpkg.com/fdg-wasm@0.1.1/fdg-wasm.js';

import { prepareVisualizerData } from "./data";

import SwissGL from "./swissgl.js";

const loadForceGraph = async (fdg: ForceGraphSimulator, graphData) => {
  graphData.nodes.map((node) => fdg.addNode(node.project));
  graphData.links
  .filter(
    // ensure source and target are both defined and are both in the graph
    (link) => link.source && link.target && graphData.nodes.find((node) => node.project === link.source) && graphData.nodes.find((node) => node.project === link.target)
  )
  .map((link) => fdg.addEdge(link.source, link.target, 0.01));
  
  console.log(fdg.graph.edges)

  fdg.resetNodePlacement();
}

window.onload = async () => {
  await init();
  let sim = new ForceGraphSimulator();
  sim.setDimensions(3);
  await loadForceGraph(sim, await prepareVisualizerData());
  await sim.resetNodePlacement();
  
  console.log(sim.graph);
  
  console.log(sim.nodes)

  
  // add a fullscreen canvas to the app div
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.getElementById("app")?.appendChild(canvas);

  // create a new instance of SwissGL
  const glsl = SwissGL(canvas);
  
  // glsl({data: sim.getNodes().map(({})), type: "points", size: 5, color: [0.5, 0.5, 0.5, 1.0]}, `
  //   void 
  // `);
  
  const animate = () => {
    sim.update(0.0001);
    
    console.log(sim.nodes[0].location)
    
    requestAnimationFrame(animate);
  }

  animate();
};