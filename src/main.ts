import init, { ForceGraphSimulator } from "../lib/fdg-wasm/fdg-wasm.js";

import { graphData, prepareVisualizerData } from "./data";

import THREERoot from "./three-root.js";
import * as THREE from "three";

import NodeVisualizer from "./node-visualizer";
import EdgeVisualizer from "./edge-visualizer.js";
import SimpleEdgeVisualizer from "./simple-edge-visualizer.js";
import { uniq, uniqBy } from "lodash-es";




const makeForceGraphSimulator = async () => {
  const wasm = await init();

  const locationsFromPointer = (ptr, length) => {
    const locations = new Float32Array(wasm.memory.buffer, ptr, length);
    return locations
  }

  let forceGraphSimulator = new ForceGraphSimulator();
  forceGraphSimulator.setDimensions(3);
  const graphData = await prepareVisualizerData();

  graphData.links = graphData.links.slice(0, 5);
  graphData.nodes = uniq(graphData.links.flatMap(({ sourceNode, targetNode }) => ([sourceNode, targetNode])));

  // console.log(graphData)
  const nodeIndices = {};
  graphData.nodes.forEach((node) => 
    forceGraphSimulator.addNode(node.project, 1000));
  graphData.links.forEach((link) =>
    forceGraphSimulator.addEdge(link.source, link.target, 0.01)
  );
  
  graphData.nodes.forEach((node, i) => {
    nodeIndices[node.project] = i;
  });

  // console.log(forceGraphSimulator, forceGraphSimulator.nodes, forceGraphSimulator.edges);

  forceGraphSimulator.resetNodePlacement();
  return { forceGraphSimulator, graphData, nodeIndices, locationsFromPointer };
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

  const { forceGraphSimulator, graphData, nodeIndices, locationsFromPointer } = await makeForceGraphSimulator();
  
  // add lights
  var light = new THREE.DirectionalLight(0xff00ff);
  root.add(light);

  light = new THREE.DirectionalLight(0x00ffff);
  light.position.y = -1;
  root.add(light);

  // Animation extends THREE.Mesh
  var nodeVisualizer = new NodeVisualizer(forceGraphSimulator.nodes);
  root.add(nodeVisualizer.mesh);
  
  var edgeVisualizer = new EdgeVisualizer(forceGraphSimulator.edges);
  root.add(edgeVisualizer.mesh);
  // var edgeVisualizer = new SimpleEdgeVisualizer(forceGraphSimulator.edges);
  // edgeVisualizer.addToScene(root.scene);
  
  root.scene.fog = new THREE.Fog(0x2244aa, 100, 1000);
  
  nodeVisualizer.duration = 0.5;
  
  const links = forceGraphSimulator.edges.map(({source, target}) => ({sourceIndex: nodeIndices[source.name], targetIndex: nodeIndices[target.name]}))

  const animate = () => {
    forceGraphSimulator.update(0.015);
    
    const nodeLocations = forceGraphSimulator.nodes.map((node) => node.location)
    nodeVisualizer.updatePositions(nodeLocations);
    // console.log(positions[0])
    // nodeVisualizer.updatePositionsFromBuffer(locationsFromPointer(forceGraphSimulator.locations_ptr(), forceGraphSimulator.nodes.length * 3));

    // const sourceLocations = graphData.links.map((link) => nodeLocations[nodeIndices[link.source]])
    // const targetLocations = graphData.links.map((link) => nodeLocations[nodeIndices[link.target]])
    const sourceLocations = links.map((link) => nodeLocations[link.sourceIndex])
    const targetLocations = links.map((link) => nodeLocations[link.targetIndex])
    // console.log(sourceLocations, targetLocations)
    edgeVisualizer.updatePositions(sourceLocations, targetLocations);
    
    // console.log(locationsFromPointer(forceGraphSimulator.locations_ptr(), forceGraphSimulator.nodes.length * 3))

    requestAnimationFrame(animate);
  };

  animate();
};
