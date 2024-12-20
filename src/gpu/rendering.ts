import moize from "moize";
import {
  cameraUniformsGroupUpdater,
  // updateCamerasUniformsGroup,
} from "./camera";
import {
  deviceHasMouse,
  getCurrentlyHoveringNode,
  globalCamera,
  hoveredCursor,
  hoveredTooltip,
  selectedCursor,
  updateCameras,
  updatePickerColorThrottled,
} from "../interaction";
import { colord } from "colord";
import { doFocus, getSelectedNode } from "../selection";

import {
  getNodeDepthRenderTarget,
  getPickerRenderTarget,
  getThreeSetup,
  initializeNodeGeometry,
} from "./graph-viz";
import { graphBuffers, updateNodePositionTargets } from "../data";
import { state } from "../state";
import { getComponent } from "../context";
import { getUniforms, updateUniforms } from "./uniforms";
import { doInterpolation, interpolate } from "./interpolation";
import { togglePickerDebug } from "../debug";

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

export const getWidthAndHeight = moize.infinite((ctx) => {
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
  if (gl) console.debug("WebGL2 initialized");
  else console.error("WebGL2 failed to initialize");

  return { canvas, gl };
});

export const fillCanvasToWindow = (ctx) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const { renderer, camera } = getThreeSetup(ctx);
  const { width, height, clientWidth, clientHeight } = getWidthAndHeight(ctx);
  const component = getComponent(ctx);

  renderer.setSize(clientWidth, clientHeight);
  camera.aspect = clientWidth / clientHeight;
  const pickerTarget = getPickerRenderTarget(ctx);
  pickerTarget.setSize(clientWidth, clientHeight);
  getNodeDepthRenderTarget(ctx).setSize(clientWidth, clientHeight);
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
export const animateGraph = async (ctx) => {
  if (state(ctx, "visible").get()) {
    updateUniforms(ctx);

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

    const {
      renderer,
      scene,
      camera,
      // nodeVisualizerMesh,
      // nodePickerMesh,
      pickerScene,
      // edgeVisualizerMesh,
      debugPickerScene,
    } = getThreeSetup(ctx);

    doFocus(ctx);
    doInterpolation(ctx);

    const debugPicker = togglePickerDebug(ctx).get();
    renderer.setRenderTarget(null);

    if (debugPicker) {
      renderer.render(debugPickerScene, camera);
    } else {
      renderer.render(scene, camera);
    }

    renderer.setRenderTarget(getPickerRenderTarget(ctx));
    renderer.render(pickerScene, camera);

    initializeNodeGeometry(ctx);

    if (deviceHasMouse()) await updatePickerColorThrottled(ctx)();
    // await updatePickerColorThrottled(ctx)();
  }
  requestAnimationFrame(() => animateGraph(ctx));
};
