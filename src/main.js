import "../style.css";
import ForceGraph3D from "3d-force-graph";
import * as THREE from "three";
import * as d3 from "d3";
import ColorHash from "color-hash";
import { animate } from "popmotion";

// a function that takes two values and interpolates between them based on a third value
const interpolate = (a, b, t) => a + (b - a) * t;

document.querySelector("#app").innerHTML = `
  <div id='graph-viz'></div>
`;
const colorHash = new ColorHash({ lightness: [0.35, 0.5, 0.65] });

import { prepareGraphDBWorker, doQuery, prepareVisualizerData } from "./data";

const makeLinkIndex = ({ source, target }) => `${source.project || source}--${target.project || target}`;

// highlighting transition animations for each node and link:
const nodeGeometries = {};
const nodeAnimations = {};
const linkGeometries = {};
const linkAnimations = {};

window.nodeAnimations = nodeAnimations;

const animateNodeToState = (id, { selected, highlighted }) => {
  if (!nodeGeometries[id]) return;
  const currentAnimation = nodeAnimations[id];
  const state = currentAnimation?.state || {};
  nodeAnimations[id] = animate({
    from: state.latest || 0,
    to: selected || highlighted ? 1 : 0,
    duration: 500,
    onUpdate: (t) => {
      // console.log('animating node', id, t, state.latest)
      const mesh = nodeGeometries[id];
      state.latest = t;
      // the target scale should go from 1 to highlightedSizeFactor
      const targetSize = 1 + (highlightedSizeFactor - 1) * t;
      mesh?.scale.set(targetSize, targetSize, targetSize);
      mesh?.material.color.set(
        selected
          ? nodeSelectedColor
          : highlighted
          ? nodeHighlightColor
          : projectOrgColor({ owner: id })
      );
    },
    onStart: () => {
      if (currentAnimation) currentAnimation.stop();
      const mesh = nodeGeometries[id];
      mesh?.material.color.set(
        selected
          ? nodeSelectedColor
          : highlighted
          ? nodeHighlightColor
          : projectOrgColor({ owner: id })
      );
    },
  });
  nodeAnimations[id].state = state;
};

const animateLinkToState = (id, { highlighted }) => {
  if (!linkGeometries[id]) return;
  const currentAnimation = linkAnimations[id];
  const state = currentAnimation?.state || {};
  linkAnimations[id] = animate({
    from: state.latest || 0,
    to: highlighted ? 1 : 0,
    duration: 500,
    onUpdate: (t) => {
      // console.log('animating link', id, t, state.latest)
      const mesh = linkGeometries[id];
      state.latest = t;
      // the target scale should go from 1 to highlightedSizeFactor
      const targetSize = interpolate(1, highlightedSizeFactor, t)
      mesh?.scale.set(targetSize, targetSize, 1);
      // mesh?.material.color.set(
      //   highlighted ? linkHighlightColor : "rgba(255,255,255)"
      // );
      
      mesh.material.opacity = interpolate(0.1, 1, t)
    },
    onStart: () => {
      if (currentAnimation) currentAnimation.stop();
      const mesh = linkGeometries[id];
      // mesh?.material.color.set(
      //   highlighted ? linkHighlightColor : "rgba(255,255,255)"
      // );
      // mesh?.material.opacity.set(
      //   highlighted ? 1 : 0.1
      // );
      // mesh?.material.transparent.set(
      //   false
      // );
    },
  });
  linkAnimations[id].state = state;
};

// graph config
const nodeBaseSize = 1;
const highlightedSizeFactor = 2;
const highlightNodes = new Set();
const highlightLinks = new Set();
let nodeSelectedColor = null
let nodeHighlightColor = null;
let linkHighlightColor = null;
let selectedNode = null;

const graph = ForceGraph3D()
  // .d3Force('collision', d3.forceCollide(node => Math.cbrt(node.size) * nodeBaseSize))
  .backgroundColor("#101020")
  .nodeRelSize(nodeBaseSize)
  .nodeId("project")
  .nodeVal((node) =>
    highlightNodes.has(node.project) || node === selectedNode
      ? node.size * highlightedSizeFactor
      : node.size
  )
  .nodeColor((node) =>
    highlightNodes.has(node.project)
      ? node === selectedNode
        ? nodeSelectedColor
        : nodeHighlightColor
      : projectOrgColor(node)
  )
  .nodeLabel("project")
  .nodeOpacity(0.9)
  .nodeThreeObject((node) => {
    // custom node geometry
    // const geometry = new THREE.TorusKnotGeometry(2, 0.3, 64, 8);
    const geometry = new THREE.SphereGeometry(node.size, 32, 32);
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshPhongMaterial({ color: projectOrgColor(node) })
    );

    // save a reference to the node geometry
    nodeGeometries[node.project] = mesh;
    mesh.tSelected = 0;
    // console.log('saving node geometry', node.project, mesh)

    mesh.node = node;

    return mesh;
  })
  // custom link geometries
  .linkThreeObject((link) => {
    // let's add a cube to the middle of the link
    // const geometry = new THREE.CylinderGeometry(0.5, 1, 1, 4);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: "rgb(255,255,255)",
      opacity: 0.1,
      transparent: true
    });
    const mesh = new THREE.Mesh(geometry, material);
    // save a reference to the link geometry
    linkGeometries[makeLinkIndex(link)] = mesh;
    return mesh;
  })
  .linkColor(() => "rgba(255,255,255,0.2)")
  .linkWidth((link) => (highlightLinks.has(link) ? 4 : 1))
  .d3VelocityDecay(0.3);

// Decrease repel intensity
// graph.d3Force('charge').strength(-15);

function projectOrgColor(node) {
  return colorHash.hex(node.owner || "");
}

// import { queryBindings} from './data'

graph.onNodeClick((node) => {
  // no state change
  if ((!node && !highlightNodes.size) || (node && selectedNode === node))
    return;

  highlightNodes.clear();
  highlightLinks.clear();
  // highlightColor = projectOrgColor(node);
  nodeSelectedColor = "deeppink";
  nodeHighlightColor = "teal";
  linkHighlightColor = "aquamarine";
  if (node) {
    highlightNodes.add(node);
    const query = downstreamDependentsDependenciesQuery(node.project);
    Object.entries(nodeGeometries).forEach(([id, geometry]) => {
      animateNodeToState(id, {
        selected: id === node.project,
        highlighted: false,
      });
    });
    Object.entries(linkGeometries).forEach(([id, geometry]) => {
      animateLinkToState(id, { highlighted: false });
    });
    doQuery(
      query,
      // proxy(data => {}),
      proxy((data, get) => {
        if (node !== selectedNode) return;
        get(["dependent", "dependency"]).then(({ dependent, dependency }) => {
          const linkId = makeLinkIndex({ source: dependent.value, target: dependency.value })
          highlightNodes.add(dependency.value);
          highlightLinks.add(linkId);
          animateNodeToState(dependent.value, {
            selected: dependent.value === node.project,
            highlighted: true,
          });
          animateNodeToState(dependency.value, {
            selected: dependency.value === node.project,
            highlighted: true,
          });
          animateLinkToState(
            linkId,
            { highlighted: true }
          );
        });
      }),
      proxy(() => {
        console.log("query ended:", query);
      })
    );
  }

  selectedNode = node || null;
});

import { downstreamDependentsDependenciesQuery } from "./query-helpers";
import { proxy } from "comlink";
import { debounce } from "lodash-es";

prepareGraphDBWorker();

graph(document.getElementById("graph-viz")).graphData(
  await prepareVisualizerData()
);
