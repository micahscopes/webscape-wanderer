import init, { ForceGraphSimulator } from "../lib/fdg-wasm/fdg-wasm.js";

import { prepareVisualizerData } from "./data";

import SwissGL from "../lib/swissgl.js";

const loadForceGraph = async (fdg: ForceGraphSimulator, graphData) => {
  graphData.nodes.map((node) => fdg.addNode(node.project, 1));
  graphData.links.map((link) => fdg.addEdge(link.source, link.target, 0.01));

  console.log(fdg.graph.edges);

  fdg.resetNodePlacement();
};

window.onload = async () => {
  await init();
  let sim = new ForceGraphSimulator();
  sim.setDimensions(3);
  await loadForceGraph(sim, await prepareVisualizerData());
  await sim.resetNodePlacement();

  console.log(sim.graph);

  console.log(sim.nodes);

  // add a fullscreen canvas to the app div
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.getElementById("app")?.appendChild(canvas);

  // create a new instance of SwissGL
  const glsl = SwissGL(canvas);

  // draw the nodes as points
  //   glsl({t: 0, data: sim.nodes.map(({location}) => location), Aspect:'fit'}, `
  //   varying vec3 color;
  //   //VERT
  //   vec4 vertex() {
  //       color = hash(ID.xyx);
  //       vec2 pos = (vec2(ID)+0.5+XY*(0.5-0.5/vec2(Mesh+1)));
  //       pos += sin(UV*TAU+t).yx*0.1;
  //       return vec4(2.0*pos/vec2(Grid)-1.0, 0.0, 1.0);
  //   }
  //   //FRAG
  //   void fragment() {
  //       vec2 m = UV*vec2(Mesh);
  //       float iso = isoline(m.x)+isoline(m.y);
  //       out0 = vec4(mix(color, vec3(1.0), iso), 1.0);
  //   }`);
  //
  const n = sim.nodes.length;
  const buffer = new Float32Array(n * 4);
  //   const buffer = new SharedArrayBuffer(n * Float32Array.BYTES_PER_ELEMENT);

  const animate = () => {
    sim.update(0.05);

    const points = sim.nodes.flatMap(({ location }) => [...location, 0]);
    // fill the buffer with random values
    for (let i = 0; i < n * 4; i++) {
      // buffer[i] = Math.random();
      buffer[i] = points[i];
    }
    const nodes = glsl({
      size: [n, 1],
      format: "rgba32f",
      data: buffer,
      tag: "nodes",
    });

    const viewParams = {viewR: 1000, scaleU: 0.25, cameraAngles:[0.0, 0.7],
        DepthTest: 1, Perspective: 0.5, Aspect:'fit'};
    const viewInc = `
    uniform vec2 cameraAngles;
    vec4 wld2view(vec4 pos) {
      pos.xyz *= 1.3;
      pos.xy *= rot2(cameraAngles.x);
      pos.yz *= rot2(cameraAngles.y);
      return pos;
    }`;

    glsl({state:nodes, Grid:nodes.size, Mesh: [4,4],
        ...viewParams}, viewInc+`
  varying vec3 normal;
  //VERT
  vec4 vertex() {
      vec4 pos = vec4(state(ID).xyz, 1.0);
      pos.xyz /= viewR;
    //   pos.z = fieldU(pos.xy*0.5+0.5).x*scaleU;
      normal = uv2sphere(UV);
      pos.xyz += normal*0.015;
      return wld2view(pos);
  }
  //FRAG
  void fragment() {
      float a = normal.z*0.7+0.3;
      out0 = vec4(vec3(1.0-a*a*0.75), 1.0);
  }`);


    // console.log(sim.nodes.flatMap(n => n.location))

    requestAnimationFrame(animate);
  };

  animate();
};
