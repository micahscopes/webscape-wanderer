import moize from "moize";
import { getColorBuffers, getEmphasisBuffers, getRadiusBuffers } from "./gpu/animation";
import { doQuery, getGraphData, getNodePosition } from "./data";
import { identity } from "lodash-es";
import { html, render } from 'lit-html';
import { downstreamDependentsDependenciesQuery } from "./query-helpers";
import { proxy } from "comlink";
import { deselectedZoom, selectedZoom, setCameraCenter, setCameraDistance } from "./interaction";

// export const getCurrentSelection = moize.infinite(() => new Set());

// export const applySelectionVisuals = async () => {
//   const {nodes, links} = await getGraphData();
//   const colors = getColorBuffers();
//   const sizes = getRadiusBuffers();
// }

const defaultColorMap = ({ color }) => color;
export const getDefaultColors = moize.infinite(async (fn = identity) => {
  const { nodes, links } = await getGraphData();
  return new Float32Array(nodes.map(defaultColorMap).flatMap(fn));
})

const defaultSizeMap = ({ size }) => Math.sqrt(size) / 40;
export const getDefaultSizes = moize.infinite(async (fn = identity) => {
  const { nodes, links } = await getGraphData();
  return new Float32Array(nodes.map(defaultSizeMap).map(fn));
})

export const applyVisuals = async ({
  colorMap = identity,
  sizeMap = identity,
  immediate = false,
} = {}) => {
  const colors = getColorBuffers();
  const sizes = getRadiusBuffers();
  const emphasis = getEmphasisBuffers();
  const colorData = await getDefaultColors(colorMap)
  const sizeData = await getDefaultSizes(sizeMap)
  colors.targetData(colorData, { immediate });
  sizes.targetData(sizeData, { immediate });
  emphasis.targetData(new Float32Array(emphasis.target.numItems).fill(0), { immediate })
}

export const applyVisualsToNode = async (node, {
  colorMap = identity,
  sizeMap = identity,
  emphasis = 0,
  immediate = false
} = {}) => {
  const color = new Float32Array(colorMap(defaultColorMap(node)));
  const size = new Float32Array([sizeMap(defaultSizeMap(node))]);
  const epmhasis = new Float32Array([emphasis]);

  const colorBuffers = getColorBuffers();
  const sizeBuffers = getRadiusBuffers();
  const emphasisBuffers = getEmphasisBuffers();

  // console.log('applying visuals to node', node, color, size, node.index)
  colorBuffers.targetData(color, { offset: node.index, immediate });
  sizeBuffers.targetData(size, { offset: node.index, immediate });
  emphasisBuffers.targetData(epmhasis, { offset: node.index, immediate });
}

export const initializationVisualMaps = {
  colorMap: color => {
    const mean = color.slice(0, 3).reduce((a, b) => a + b, 0) / 3;
    return [...color.slice(0, 3).map(x => mean), 0.5]
  },
  sizeMap: size => size * 0.5,
}

export const initializeSelectionVisuals = async (immediate = false) => {
  // console.log('initializeSelectionVisuals')
  await applyVisuals({
    ...initializationVisualMaps,
    immediate
  });
}

const onImgErrorHandler = "this.parentNode.style.display='none'"
const onImgSuccessHandler = "this.parentNode.style.display='initial'"
// const onImgErrorHandler = (e) => {}
const selectionInfo = (node) => html`
  <div class="project">
    <h3><a target="_blank" href="${node.data?.homepage}">${node.data.name}</a></h3>
    <div class="description">${node.data.description}</div>
    <div class="links">
      <span class="owner">
        <div class="owner-name-container">
          ${
            node.ownerData.html_url ? 
              html`<a target="_blank" href="${node.ownerData.html_url}">${node.ownerData.name}</a>` :
              html`<span>${node.ownerData.name}</span>`
          }
        </div>
        <div class="avatar-container">
          <img class="avatar-stroke" src="${node.ownerData?.avatar_url}" onerror=${onImgErrorHandler} onload=${onImgSuccessHandler} alt="">
          <img class="avatar" src="${node.ownerData?.avatar_url}" onerror=${onImgErrorHandler} onload=${onImgSuccessHandler} alt="${node.ownerData?.name}">
        </div>
      </span>
      <span><a target="_blank" href="${node.project}">NPM</a></span>
      ${node.data?.repository ? html`<span><a target="_blank" href="${node.data.repository}">Git</a></span>` : html``}
      ${node.data?.bugs ? html`<span><a target="_blank" href="${node.data.bugs}">Issues</a></span>` : html``}
      <!-- <a href="${node.ownerData.html_url}">Owner Profile</a> -->
    </div>
  </div>

`;


export const showSelectionInfo = selectedNode => {
  const selectionInfoElement = document.getElementById('selection-info');
  if (selectedNode) {
    const result = selectionInfo(selectedNode);
    // console.log(result)
    render(result, selectionInfoElement!);
  } else {
    render(html``, selectionInfoElement!);
  }
}


export const selectNodeAndDownstreamDependents = async (node, zoom=true) => {
  const doubleNodeSize = (size) => size * 2;
  // @ts-ignore
  if (node) {
    setSelectedIndex(node.index);
    const nodePosition = getNodePosition(node);
    const query = downstreamDependentsDependenciesQuery(node.project);
    console.log("selected node:", node);
    const { nodesByProject, links } = await getGraphData();
    initializeSelectionVisuals().then(() => {
      applyVisualsToNode(node, { sizeMap: doubleNodeSize, emphasis: 1 });
      doQuery(
        query,
        // proxy(data => {}),
        proxy((data, get) => {
          // if (node !== selectedNode) return;
          get(["dependent", "dependency"]).then(
            ({ dependent, dependency }) => {
              // console.log("query result:", dependent.value, dependency.value);
              applyVisualsToNode(nodesByProject[dependent.value], {
                sizeMap: doubleNodeSize,
                emphasis: 1,
              });
              applyVisualsToNode(nodesByProject[dependency.value], {
                sizeMap: doubleNodeSize,
                emphasis: 1,
              });
            }
          );
        }),
        proxy(() => {
          console.log("query ended:", query);
        })
      );
      // console.log(nodePosition, 'setting camera center')
      zoom && setCameraCenter(nodePosition);
      zoom && setCameraDistance(selectedZoom || 75);
    });
  } else {
    console.log("no selection");
    zoom && setCameraDistance(deselectedZoom || 1500);
    zoom && setCameraCenter([0, 0, 0], 4000);
    applyVisuals();
  }

  showSelectionInfo(node);
}

export const selectNothingAndZoomOut = () => {
  selectNodeAndDownstreamDependents(null);
}

window.initializeSelectionVisuals = initializeSelectionVisuals;

let selectedIndex = -1;
export const getSelectedIndex = () => selectedIndex;
export const setSelectedIndex = (index) => {
  selectedIndex = index
}