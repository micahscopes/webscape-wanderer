import moize from "moize";
import { getColorBuffers, getEmphasisBuffers, getRadiusBuffers } from "./gpu/animation";
import { getGraphData, getNodePosition } from "./data";
import { identity, debounce } from "lodash-es";
import { html, render } from 'lit-html';
import { directUpstreamQuery, directDownstreamQuery, downstreamDependentsDependenciesQuery, upstreamDependentsDependenciesQuery } from "./query-helpers";
import { proxy } from "comlink";
import { deselectedZoom, selectedZoom, setCameraCenter, setCameraDistance } from "./interaction";
import { marked } from "marked";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

import { hue, normal } from 'color-blend/unit'

// export const getCurrentSelection = moize.infinite(() => new Set());

// export const applySelectionVisuals = async () => {
//   const {nodes, links} = await getGraphData();
//   const colors = getColorBuffers();
//   const sizes = getRadiusBuffers();
// }

const defaultColorMap = ({ color }) => color;
export const getDefaultColors = moize.infinite(async (graphData, fn = identity) => {
  const { nodes, links } = graphData;
  return new Float32Array(nodes.map(defaultColorMap).flatMap(fn));
})

const defaultSizeMap = ({ size }) => Math.sqrt(size) / 40;
export const getDefaultSizes = moize.infinite(async (graphData, fn = identity) => {
  const { nodes, links } = graphData;
  return new Float32Array(nodes.map(defaultSizeMap).map(fn));
})

export const applyVisuals = async (ctx, {
  colorMap = identity,
  sizeMap = identity,
  immediate = false,
} = {}) => {
  immediate = !hasEnoughFramebufferAttachments(ctx) || immediate
  // const colors = getColorBuffers();
  // const sizes = getRadiusBuffers();
  // const emphasis = getEmphasisBuffers();
  const colorData = await getDefaultColors(await getGraphData(ctx), colorMap)
  const sizeData = await getDefaultSizes(await getGraphData(ctx), sizeMap)
  const colorsTargetLayer = getColorLayers(ctx);
  const sizesLayer = getSizeLayers(ctx);
  const emphasisLayer = getEmphasisLayers(ctx);
  
  console.log(getDefaultSizes(sizeMap))
  
  colorsTargetLayer.target.setFromArray(colorData);
  sizesLayer.target.setFromArray(sizeData);
  emphasisLayer.target.setFromArray(new Float32Array(sizeData.length).fill(0));
  
  if (immediate) {
    colorsTargetLayer.current.setFromArray(colorData);
    sizesLayer.current.setFromArray(sizeData);
    emphasisLayer.current.setFromArray(new Float32Array(sizeData.length).fill(0));
    colorsTargetLayer.view.setFromArray(colorData);
    sizesLayer.view.setFromArray(sizeData);
    emphasisLayer.view.setFromArray(new Float32Array(sizeData.length).fill(0));
  }

  // colors.targetData(colorData, { immediate });
  // sizes.targetData(sizeData, { immediate });
  // emphasis.targetData(new Float32Array(emphasis.target.numItems).fill(0), { immediate })
}

export const applyVisualsToNode = async (ctx, node, {
  colorMap = identity,
  sizeMap = identity,
  emphasis = 0,
  immediate = false
} = {}) => {
  immediate = !hasEnoughFramebufferAttachments(ctx) || immediate

  const color = new Float32Array(colorMap(defaultColorMap(node)));
  const size = new Float32Array([sizeMap(defaultSizeMap(node))]);
  const epmhasis = new Float32Array([emphasis]);

  // const colorBuffers = getColorBuffers();
  // const sizeBuffers = getRadiusBuffers();
  // const emphasisBuffers = getEmphasisBuffers();

  // console.log('applying visuals to node', node, color, size, node.index)
  // colorBuffers.targetData(color, { offset: node.index, immediate });
  // sizeBuffers.targetData(size, { offset: node.index, immediate });
  // emphasisBuffers.targetData(epmhasis, { offset: node.index, immediate });
  
  const colorsTargetLayer = getColorLayers(ctx);
  const sizesLayer = getSizeLayers(ctx);
  const emphasisLayer = getEmphasisLayers(ctx);

  colorsTargetLayer.target.setAtIndex1D(node.index, color);
  sizesLayer.target.setAtIndex1D(node.index, size);
  emphasisLayer.target.setAtIndex1D(node.index, epmhasis);

  if (immediate) {
    colorsTargetLayer.current.setAtIndex1D(node.index, color);
    sizesLayer.current.setAtIndex1D(node.index, size);
    emphasisLayer.current.setAtIndex1D(node.index, epmhasis);
    colorsTargetLayer.view.setAtIndex1D(node.index, color);
    sizesLayer.view.setAtIndex1D(node.index, size);
    emphasisLayer.view.setAtIndex1D(node.index, epmhasis);
  }
}

export const initializationVisualMaps = {
  colorMap: color => {
    const mean = color.slice(0, 3).reduce((a, b) => a + b, 0) / 3;
    return [...color.slice(0, 3).map(x => mean), 0.5]
  },
  sizeMap: size => size * 0.5,
}

export const initializeSelectionVisuals = async (ctx, immediate = false) => {
  // console.log('initializeSelectionVisuals')
  try {
    await applyVisuals(ctx, {
      ...initializationVisualMaps,
      immediate
    });
  } catch (e) {
    console.error(e);
  }
  // await applyVisuals({
  //   ...initializationVisualMaps,
  //   immediate
  // });
}

const onImgErrorHandler = "this.parentNode.style.display='none'"
const onImgSuccessHandler = "this.parentNode.style.display='initial'"
// const onImgErrorHandler = (e) => {}
const selectionInfo = (node) => html`
  <div class="project">
    <h3><a target="_blank" href="${node.data?.homepage}">${node.data?.name}</a></h3>
    <div class="description">${node.data?.description && unsafeHTML(marked.parse(node.data?.description))}</div>
    <div class="links">
      <span class="owner">
        <div class="owner-name-container">
          ${
            node.ownerData?.html_url ? 
              html`<a target="_blank" href="${node.ownerData?.html_url}">${node.ownerData?.name}</a>` :
              html`<span>${node.ownerData?.name}</span>`
          }
        </div>
        <div class="avatar-container">
          <img class="avatar-stroke" src="${node.ownerData?.avatar_url}" onerror=${onImgErrorHandler} onload=${onImgSuccessHandler} alt="">
          <img class="avatar" src="${node.ownerData?.avatar_url}" onerror=${onImgErrorHandler} onload=${onImgSuccessHandler} alt="${node.ownerData?.name}">
        </div>
      </span>
      <span><a target="_blank" href="${node.navId}">NPM</a></span>
      ${node.data?.repository ? html`<span><a target="_blank" href="${node.data?.repository}">Git</a></span>` : html``}
      ${node.data?.bugs ? html`<span><a target="_blank" href="${node.data?.bugs}">Issues</a></span>` : html``}
      <!-- <a href="${node.ownerData?.html_url}">Owner Profile</a> -->
    </div>
  </div>

`;


export const showSelectionInfo = debounce((ctx, selectedNode) => {
  const component = getComponent(ctx);
  const selectionInfoElement = component?.shadowRoot?.getElementById('selection-info');
  if (selectedNode) {
    const result = selectionInfo(selectedNode);
    // console.log(result)
    selectionInfoElement && render(result, selectionInfoElement!);
  } else {
    selectionInfoElement && render(html``, selectionInfoElement!);
  }
}, 0)

export const selectNodeAndDownstreamDependents = async (ctx, node, zoom=true) => {
  // @ts-ignore
  if (node) {
    setSelectedIndex(ctx, node.index);
    const nodePosition = getNodePosition(ctx, node);
    // const downstreamQuery = downstreamDependentsDependenciesQuery(node.project);
    // const upstreamQuery = upstreamDependentsDependenciesQuery(node.project);
    const downstreamQuery = directDownstreamQuery(node.id);
    const upstreamQuery = directUpstreamQuery(node.id);
    // console.log("selected node:", node);
    const { nodesById, links } = await getGraphData(ctx);
    const resultHandler = ({sizeMap=identity, emphasis=1, colorMap=identity}) => (data, get) => {
      // if (node !== selectedNode) return;
      get(["upstream", "downstream"]).then(({upstream, downstream}) => {
      //  console.log("query result:", data);
       applyVisualsToNode(nodesById[upstream?.value || node.id], {
           sizeMap,
           emphasis,
           colorMap
       });
       applyVisualsToNode(nodesById[downstream?.value || node.id], {
           sizeMap,
           emphasis,
           colorMap
       });
      });
    }
    initializeSelectionVisuals(ctx).then(() => {
      graphDb(ctx).doQuery(
        downstreamQuery,
        proxy(resultHandler({
          sizeMap: size => size*2,
          colorMap: color => {
            const c = {r: color[0], g: color[1], b: color[2], a: color[3]}
            const green = {r: 57/255, g: 179/255, b: 83/255, a: 0.8}
            const result = hue(c, green)
            return [result.r, result.g, result.b, result.a]
          }
        })),
        // proxy(() => {console.log('downstream query done')})
      );
      applyVisualsToNode(ctx, node, { sizeMap: size => size*4, emphasis: 1 });
      graphDb(ctx).doQuery(
        upstreamQuery,
        proxy(resultHandler({
          sizeMap: size => size*2,
          colorMap: color => {
            const c = {r: color[0], g: color[1], b: color[2], a: color[3]}
            const blue = {r: 0, g: 102/255, b: 209/255, a: 0.8}
            const result = hue(c, blue)
            return [result.r, result.g, result.b, result.a]
          }
        })),
        // proxy(() => {console.log('upstream query done')})
      );
      // console.log(nodePosition, 'setting camera center')
      zoom && setCameraCenter(nodePosition);
      zoom && setCameraDistance(selectedZoom || 75);
    });
  } else {
    // console.log("no selection");
    zoom && setCameraDistance(deselectedZoom || 1500);
    zoom && setCameraCenter([0, 0, 0], 4000);
    applyVisuals(ctx);
    setSelectedIndex(ctx, -1);
  }

  showSelectionInfo(node);
}

export const selectNothingAndZoomOut = (ctx) => {
  selectNodeAndDownstreamDependents(ctx, null);
}

window.initializeSelectionVisuals = initializeSelectionVisuals;

export const getSelectedIndex = (ctx) => {
  return state(ctx, "selectedIndex", () => -1).get();
}
export const setSelectedIndex = (ctx, index) => {
  state(ctx, "selectedIndex").set(index);
}

export const getSelectedNode = async (ctx) => {
  const index = getSelectedIndex(ctx);
  const { nodes } = await getGraphData(ctx);
  return nodes[index];
}

import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import { getColorLayers, getEmphasisLayers, getSizeLayers, hasEnoughFramebufferAttachments } from "./gpu/interpolation";
import { getCanvasAndGLContext } from "./gpu/rendering";
import { state } from "./state";
import { getComponent } from "./context";
import { graphDb } from "./get-workers";

extend([namesPlugin]);

let initSelectedColor = () => colord("deeppink").toRgb();
export const setSelectedColor = (ctx, color) => {
  state(ctx, "selectedColor").set(
    colord(color).toRgb()
  );
}

export const getSelectedColor = (ctx) => {
  // get the link color from the document style :root `--selected-color` variable
  // const host = document.documentElement.shadowRoot?.host!;

  // const color = colord(getComputedStyle(host).getPropertyValue('--selected-color')).toRgb();
  // console.log('selected color:', color)
  const color = state(ctx, "selectedColor", initSelectedColor).get();
  return new Float32Array([color.r/255.0, color.g/255.0, color.b/255.0, 1.0])
}
