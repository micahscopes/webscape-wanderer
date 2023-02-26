import init, { ForceGraphSimulator } from "../lib/fdg-wasm/fdg-wasm.js";

import { graphData, prepareVisualizerData } from "./data";

import THREERoot from "./three-root.js";
import * as THREE from "three";

import NodeVisualizer from "./node-visualizer";
import EdgeVisualizer from "./edge-visualizer.js";
import SimpleEdgeVisualizer from "./simple-edge-visualizer.js";

const makeForceGraphSimulator = async () => {
  await init();
  let forceGraphSimulator = new ForceGraphSimulator();
  forceGraphSimulator.setDimensions(3);
  const graphData = await prepareVisualizerData();
  const nodeIndices = {};
  graphData.nodes.map((node) => forceGraphSimulator.addNode(node.project, 1000));
  graphData.links.map((link) =>
    forceGraphSimulator.addEdge(link.source, link.target, 0.01)
  );
  
  graphData.nodes.forEach((node, i) => {
    nodeIndices[node.project] = i;
  });

  console.log(forceGraphSimulator.nodes, forceGraphSimulator.edges);

  forceGraphSimulator.resetNodePlacement();
  return { forceGraphSimulator, graphData, nodeIndices };
};

window.onload = async () => {
  const root = new THREERoot({
    container: '#app',
    createCameraControls: true,
    antialias: window.devicePixelRatio === 1,
    fov: 60,
  });

  root.renderer.setClearColor(0x888888);
  root.camera.position.set(0, 0, 400);

  const { forceGraphSimulator, graphData, nodeIndices } = await makeForceGraphSimulator();
  
  // add lights
  var light = new THREE.DirectionalLight(0xff00ff);
  root.add(light);

  light = new THREE.DirectionalLight(0x00ffff);
  light.position.y = -1;
  root.add(light);

  // Animation extends THREE.Mesh
  var nodeVisualizer = new NodeVisualizer(forceGraphSimulator.nodes);
  var edgeVisualizer = new SimpleEdgeVisualizer(forceGraphSimulator.edges);
  root.add(nodeVisualizer.mesh);
  edgeVisualizer.addToScene(root.scene);
  
  root.scene.fog = new THREE.Fog(0x2244aa, 100, 1000);
  
  nodeVisualizer.duration = 0.5;

  const animate = () => {
    forceGraphSimulator.update(0.015);
    
    const nodeLocations = forceGraphSimulator.nodes.map((node) => node.location)
    // console.log(positions[0])
    nodeVisualizer.updatePositions(nodeLocations);

    const sourceLocations = graphData.links.map((link) => nodeLocations[nodeIndices[link.source]])
    const targetLocations = graphData.links.map((link) => nodeLocations[nodeIndices[link.target]])
    edgeVisualizer.updatePositions(sourceLocations, targetLocations);

    requestAnimationFrame(animate);
  };

  animate();
};
