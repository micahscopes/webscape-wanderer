import moize from "moize";
import {
  getColorBuffers,
  getEmphasisBuffers,
  getRadiusBuffers,
} from "./gpu/animation";
import { getGraphData, getNodePosition, graphBuffers } from "./data";
import { identity, debounce } from "lodash-es";
import { html, render } from "lit-html";
import {
  directUpstreamQuery,
  directDownstreamQuery,
  downstreamDependentsDependenciesQuery,
  upstreamDependentsDependenciesQuery,
} from "./query-helpers";
import { proxy } from "comlink";
import {
  deselectedZoom,
  selectedZoom,
  setCameraCenter,
  setCameraDistance,
  startCameraAnimation,
} from "./interaction";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { hue, normal } from "color-blend/unit";

const defaultColorMap = ({ color }) => color;
export const getDefaultColors = moize.infinite(
  async (graphData, fn = identity) => {
    const { nodes, links } = graphData;
    return new Float32Array(nodes.map(defaultColorMap).flatMap(fn));
  },
);

const defaultSizeMap = ({ size }) => size;
export const getDefaultSizes = moize.infinite(
  async (graphData, fn = identity) => {
    const { nodes, links } = graphData;
    return new Float32Array(nodes.map(defaultSizeMap).map(fn));
  },
);

export const applyVisuals = async (
  ctx,
  { colorMap = identity, sizeMap = identity, immediate = false } = {},
) => {
  // immediate = !hasEnoughFramebufferAttachments(ctx) || immediate;
  // const colors = getColorBuffers();
  // const sizes = getRadiusBuffers();
  // const emphasis = getEmphasisBuffers();
  const colorData = await getDefaultColors(await getGraphData(ctx), colorMap);
  const sizeData = await getDefaultSizes(await getGraphData(ctx), sizeMap);

  const buffers = graphBuffers(ctx);

  buffers.setNodeProperties("colorTarget", "vec4", colorData);
  buffers.setNodeProperties("sizeTarget", "float", sizeData);
  buffers.setNodeProperties(
    "emphasisTarget",
    "float",
    new Float32Array(sizeData.length).fill(0),
  );

  if (immediate) {
    buffers.setNodeProperties("colorInitial", "vec4", colorData);
    buffers.setNodeProperties("sizeInitial", "float", sizeData);
    buffers.setNodeProperties(
      "emphasisInitial",
      "float",
      new Float32Array(sizeData.length).fill(0),
    );
  }
};

export const applyVisualsToNode = async (
  ctx,
  node,
  {
    colorMap = identity,
    sizeMap = identity,
    emphasis = 0,
    immediate = false,
  } = {},
) => {
  // immediate = !hasEnoughFramebufferAttachments(ctx) || immediate;

  const color = colorMap(defaultColorMap(node));
  const size = sizeMap(defaultSizeMap(node));

  const buffers = graphBuffers(ctx);

  buffers.setNodeProperty("colorTarget", node.index, color);
  buffers.setNodeProperty("sizeTarget", node.index, size);
  buffers.setNodeProperty("emphasisTarget", node.index, emphasis);

  if (immediate) {
    buffers.setNodeProperty("colorInitial", node.index, color);
    buffers.setNodeProperty("sizeInitial", node.index, size);
    buffers.setNodeProperty("emphasisInitial", node.index, emphasis);
  }
};

export const initializationVisualMaps = {
  colorMap: (color) => {
    const mean = color.slice(0, 3).reduce((a, b) => a + b, 0) / 3;
    return [...color.slice(0, 3).map((x) => mean), 0.5];
  },
  sizeMap: (size) => size,
};

export const initializeSelectionVisuals = async (ctx, immediate = false) => {
  // console.log('initializeSelectionVisuals')
  try {
    await applyVisuals(ctx, {
      ...initializationVisualMaps,
      immediate,
    });
  } catch (e) {
    console.error(e);
  }
  // await applyVisuals({
  //   ...initializationVisualMaps,
  //   immediate
  // });
};

const onImgErrorHandler = "this.parentNode.style.display='none'";
const onImgSuccessHandler = "this.parentNode.style.display='initial'";
// const onImgErrorHandler = (e) => {}

export const selectNodeAndDownstreamDependents = async (
  ctx,
  node,
  zoom = true,
) => {
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
    const resultHandler =
      ({ sizeMap = identity, emphasis = 1, colorMap = identity }) =>
      (data, get) => {
        // if (node !== selectedNode) return;
        get(["upstream", "downstream"]).then(({ upstream, downstream }) => {
          // console.log("query result:", upstream, downstream);
          const nodeId = upstream?.value || downstream?.value;
          const node = nodesById[nodeId];
          applyVisualsToNode(ctx, node, {
            sizeMap,
            emphasis,
            colorMap,
          });
        });
      };
    // initializeSelectionVisuals(ctx).then(() => {
    initializeSelectionVisuals(ctx).then(() => {
      graphDb(ctx).doQuery(
        downstreamQuery,
        proxy(
          resultHandler({
            sizeMap: (size) => size * 1.5,
            colorMap: (color) => {
              const c = { r: color[0], g: color[1], b: color[2], a: color[3] };
              const green = { r: 57 / 255, g: 179 / 255, b: 83 / 255, a: 0.8 };
              const result = hue(c, green);
              return [result.r, result.g, result.b, result.a];
            },
          }),
        ),
        // proxy(() => {console.log('downstream query done')})
      );
      applyVisualsToNode(ctx, node, {
        sizeMap: (size) => size * 2,
        emphasis: 1,
      });
      graphDb(ctx).doQuery(
        upstreamQuery,
        proxy(
          resultHandler({
            sizeMap: (size) => size * 1.5,
            colorMap: (color) => {
              const c = { r: color[0], g: color[1], b: color[2], a: color[3] };
              const blue = { r: 0, g: 102 / 255, b: 209 / 255, a: 0.8 };
              const result = hue(c, blue);
              return [result.r, result.g, result.b, result.a];
            },
          }),
        ),
        // proxy(() => {console.log('upstream query done')})
      );
      // console.log(nodePosition, "setting camera center");
      // zoom && setCameraCenter(ctx, nodePosition);
      // zoom && setCameraDistance(ctx, selectedZoom || 500);
    });
  } else {
    console.log("no selection, setting disatnce to", deselectedZoom || 1500);
    // zoom && setCameraDistance(ctx, deselectedZoom || 1500);
    // zoom && setCameraCenter(ctx, [0, 0, 0], 4000);
    applyVisuals(ctx);
    setSelectedIndex(ctx, -1);
  }
};

export const doFocus = async (ctx) => {
  const { nodesByNavId } = await getGraphData(ctx);
  const component = getComponent(ctx);
  const focused = component.focus;
  const node = nodesByNavId[focused];
  if (node) {
    const nodePosition = getNodePosition(ctx, node);
    setCameraCenter(ctx, nodePosition);
    // console.log("setting camera center", nodePosition);
  }
};

export const selectNothingAndZoomOut = (ctx) => {
  selectNodeAndDownstreamDependents(ctx, null);
};

window.initializeSelectionVisuals = initializeSelectionVisuals;

export const getSelectedIndex = (ctx) => {
  return state(ctx, "selectedIndex", () => -1).get();
};
export const setSelectedIndex = (ctx, index) => {
  state(ctx, "selectedIndex").set(index);
};

export const getSelectedNode = async (ctx) => {
  const index = getSelectedIndex(ctx);
  const { nodes } = await getGraphData(ctx);
  return nodes[index];
};

import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import {
  // getColorLayers,
  // getEmphasisLayers,
  // getSizeLayers,
  hasEnoughFramebufferAttachments,
} from "./gpu/interpolation";
import { getCanvasAndGLContext } from "./gpu/rendering";
import { graphBufferState, state } from "./state";
import { getComponent } from "./context";
import { graphDb } from "./get-workers";
import { Vector4 } from "three";
import { startPanning } from "./camera-animation";

extend([namesPlugin]);

let initSelectedColor = () => colord("deeppink").toRgb();
export const setSelectedColor = (ctx, color) => {
  state(ctx, "selectedColor").set(colord(color).toRgb());
};

export const getSelectedColor = (ctx) => {
  // get the link color from the document style :root `--selected-color` variable
  // const host = document.documentElement.shadowRoot?.host!;

  // const color = colord(getComputedStyle(host).getPropertyValue('--selected-color')).toRgb();
  // console.log('selected color:', color)
  const color = state(ctx, "selectedColor", initSelectedColor).get();
  // console.log("setting selected color to", color);
  return [color.r / 255.0, color.g / 255.0, color.b / 255.0, 1.0];
};
