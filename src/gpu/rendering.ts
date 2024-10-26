import moize from "moize";
import {
  cameraUniformsGroupUpdater,
  // updateCamerasUniformsGroup,
} from "./camera";
import {
  deviceHasMouse,
  getCurrentlyHoveringNode, globalCamera,
  hoveredCursor,
  hoveredTooltip,
  selectedCursor,
  updateCameras, updatePickerColorThrottled
} from "../interaction";
import { colord } from "colord";
import { getSelectedNode } from "../selection";

import {
  getNodeDepthRenderTarget, getPickerRenderTarget,
  getThreeSetup
} from "./graph-viz";
import { graphBuffers, updateNodePositionTargets } from "../data";
import { state } from "../state";
import { getComponent } from "../context";
import { getUniforms, updateUniforms } from "./uniforms";

let drawEdges = true;
let drawNodes = true;

// toggle edges with keyboard
window.addEventListener("keydown", (e) => {
  if (e.key === "e") {
    drawEdges = !drawEdges;
  }
  if (e.key === "n") {
    drawNodes = !drawNodes;
  }
});

export const PRIMITIVE_RESTART_INDEX = 65535;
// export const CLEAR_COLOR : [number,number,number,number] = [0.1,0.1,0.1, 1.0];

const getClearColor = () =>
  [colord(document.body.style.backgroundColor).toRgb()].flatMap(
    ({ r, g, b, a }) => [r, g, b, a].map((x) => x / 255),
  ) as [number, number, number, number];

const getWidthAndHeight = moize((ctx) => {
  const host = getComponent(ctx);
  // Calculate the device pixel ratio
  const devicePixelRatio = window.devicePixelRatio || 1;
  // const devicePixelRatio = 1;
  // Get the desired display size (in CSS pixels)
  const clientWidth = host.clientWidth;
  const clientHeight = host.clientHeight;

  // Calculate the actual size (in device pixels)
  const actualWidth = Math.floor(clientWidth * devicePixelRatio);
  const actualHeight = Math.floor(clientHeight * devicePixelRatio);

  return {
    width: actualWidth,
    height: actualHeight,
    clientWidth,
    clientHeight,
  };
});

let canvas: HTMLCanvasElement;

export const setCanvas = (ctx, newCanvas: HTMLCanvasElement | null = null) => {
  // check if the promise has already been resolved
  const { set: setter, get: getter } = state(ctx, "canvas");
  const canvas = getter();
  if (newCanvas) {
    setter(canvas || newCanvas);
  } else {
    setter(canvas || document.createElement("canvas"));
  }
};

export const getCanvasAndGLContext = moize.infinite((ctx) => {
  const canvas = state(ctx, "canvas").get();

  const gl = canvas.getContext("webgl2", {
    powerPreference: "high-performance",
  });
  if (gl) console.log("WebGL2 initialized");
  else console.error("WebGL2 failed to initialize");

  const ext = gl.getExtension("WEBGL_color_buffer_float");
  if (!ext) {
    console.warn("WEBGL_color_buffer_float is not supported :(");
  }
  return { canvas, gl };
});

export const fillCanvasToWindow = (ctx) => {
  // const app = getPicoApp();
  const { canvas } = getCanvasAndGLContext(ctx);
  const { renderer } = getThreeSetup(ctx);
  const { width, height, clientWidth, clientHeight } = getWidthAndHeight(ctx);
  const component = getComponent(ctx);

  renderer.setSize(clientWidth, clientHeight);
  getPickerRenderTarget(ctx).setSize(clientWidth, clientHeight);
  getNodeDepthRenderTarget(ctx).setSize(width, height);
  globalCamera(ctx).resize(width / height);
};

function checkWebGLError(gl) {
  const error = gl.getError();
  if (error !== gl.NO_ERROR) {
    const activeProgram = gl.getParameter(gl.CURRENT_PROGRAM);
    console.warn(
      `WebGL Error: ${error}, Shader Program: ${
        activeProgram ? activeProgram.id : "unknown"
      }`,
    );
  }
}
export const initializeRenderer = (ctx) => {
  getUniforms(ctx);
  // graphBuffers(ctx);
};

// no need to get the picker pixel every frame
export const animateGraph = (ctx) => {
  // clear the width/height cache
  updateUniforms(ctx);
  getWidthAndHeight.remove(ctx);

  updateNodePositionTargets(ctx);
  getSelectedNode(ctx).then((node) => {
    selectedCursor(ctx).highlightNode(node);
  });

  deviceHasMouse() &&
    getCurrentlyHoveringNode(ctx).then((node) => {
      hoveredTooltip(ctx).highlightNode(node);
      hoveredCursor(ctx).highlightNode(node);
    });

  const { width, height } = getWidthAndHeight(ctx);
  updateCameras(ctx, cameraUniformsGroupUpdater(ctx), width, height);

  const { gl } = getCanvasAndGLContext(ctx);

  fillCanvasToWindow(ctx);

  const {
    renderer,
    scene,
    camera,
    nodeVisualizerMesh,
    nodePickerMesh,
    edgeVisualizerMesh,
  } = getThreeSetup(ctx);

  renderer.setRenderTarget(null);
  renderer.render(scene, camera);

  renderer.setRenderTarget(getPickerRenderTarget(ctx));
  renderer.render(nodePickerMesh, camera);

  if (deviceHasMouse()) updatePickerColorThrottled(ctx)();

  requestAnimationFrame(() => animateGraph(ctx));
};
