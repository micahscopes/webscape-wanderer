import moize from "moize";
import { cameraUniformsGroupUpdater, updateCamerasUniformsGroup } from "./camera";
import {
  deviceHasMouse,
  getCurrentlyHoveringNode,
  getPointerPositionCanvas,
  globalCamera,
  hoveredCursor,
  hoveredTooltip,
  selectedCursor,
  updateCameras,
  updatePickerColor,
  updatePickerColorThrottled,
} from "../interaction";
import { colord } from "colord";
import { getSelectedNode } from "../selection";
import { FLOAT, GPUComposer, copyProgram } from "gpu-io";
import {
  getColorLayers,
  getEmphasisLayers,
  getInterpolationProgram,
  getPositionLayers,
  getSizeLayers,
  hasEnoughFramebufferAttachments,
} from "./interpolation";
import { renderAmplitudeProgram, renderRGBProgram } from "gpu-io";
import {
  getNodeDepthRenderTarget,
  getNodeVisualizerMesh,
  getPickerRenderTarget,
  getThreeSetup,
  initializeEdgeVisualizerUniforms,
  initializeNodeVisualizerUniforms,
  updateEdgeVisualizerUniforms,
  updateNodeVisualizerUniforms,
} from "./graph-viz";
import { updateNodePositionTargets } from "../data";
import { state } from "../state";
import { getComponent } from "../context";

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
    ({ r, g, b, a }) => [r, g, b, a].map((x) => x / 255)
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

  return { width: actualWidth, height: actualHeight, clientWidth, clientHeight };
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
  // setCanvas(ctx);

  const canvas = state(ctx, "canvas").get();

  // const canvas = document.createElement('canvas')
  // document.body.appendChild(canvas);

  const gl = canvas.getContext("webgl2", {
    powerPreference: "high-performance",
  });
  if (gl) console.log("WebGL2 initialized");
  else console.error("WebGL2 failed to initialize");

  return { canvas, gl };
});

export const getGPUComposer = moize.infinite((ctx) => {
  const { renderer } = getThreeSetup(ctx);

  return GPUComposer.initWithThreeRenderer(renderer);
});

export const fillCanvasToWindow = (ctx) => {
  // const app = getPicoApp();
  const { canvas } = getCanvasAndGLContext(ctx);
  const { renderer } = getThreeSetup(ctx);
  const { width, height, clientWidth, clientHeight } = getWidthAndHeight(ctx);
  const component = getComponent(ctx);
  
  // console.log('resizing canvas to', width, height, 'px')
  renderer.setSize(clientWidth, clientHeight);
  getPickerRenderTarget(ctx).setSize(clientWidth, clientHeight);
  getNodeDepthRenderTarget(ctx).setSize(width, height);
  globalCamera(ctx).resize(width / height);
  // canvas.style.position = "absolute";
  // canvas.style.top = "0px";
  // canvas.style.left = "0px";
  // canvas.style.width = "100%";
  // canvas.style.height = "100%";
};

function checkWebGLError(gl) {
  const error = gl.getError();
  if (error !== gl.NO_ERROR) {
    const activeProgram = gl.getParameter(gl.CURRENT_PROGRAM);
    console.warn(
      `WebGL Error: ${error}, Shader Program: ${
        activeProgram ? activeProgram.id : "unknown"
      }`
    );
  }
}

// const debugPositions = renderRGBProgram(getGPUComposer(), {
//     name: 'renderPositions',
//     type: FLOAT,
//   })

// const debugNoise = renderAmplitudeProgram(getGPUComposer(), {
//     name: 'renderNoise',
//     type: FLOAT,
//     components: 'x',
//   })

// fillCanvasToWindow();

// const copy = copyProgram(getGPUComposer(), {
//   name: 'copy',
//   type: FLOAT,
// })

export const initializeRenderer = (ctx) => {
  initializeNodeVisualizerUniforms(ctx);
  initializeEdgeVisualizerUniforms(ctx);
};

// const {gl} = getCanvasAndGLContext();

const interpolate = (ctx) => {
  const gpuComposer = getGPUComposer(ctx);
  gpuComposer.undoThreeState();

  const interpolationLayers = [
    getPositionLayers(ctx),
    getColorLayers(ctx),
    getSizeLayers(ctx),
    getEmphasisLayers(ctx),
  ];
  const interpolationProgram = getInterpolationProgram(ctx);

  gpuComposer.step({
    program: interpolationProgram,
    input: interpolationLayers.flatMap((layer) => [
      layer.target,
      layer.current,
    ]),
    output: interpolationLayers.flatMap((layer) => [layer.current, layer.view]),
  });

  gpuComposer.resetThreeState();
};

//   updateCameras(
//     updateCamerasUniformsGroup,
//     window.innerWidth,
//     window.innerHeight,
//   );

// no need to get the picker pixel every frame
export const animateGraph = (ctx) => {
  // clear the width/height cache
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
  updateCameras(
    ctx,
    cameraUniformsGroupUpdater(ctx),
    width,
    height
  );

  const { gl } = getCanvasAndGLContext(ctx);

  if (hasEnoughFramebufferAttachments(ctx)) {
    interpolate(ctx);
  }

  fillCanvasToWindow(ctx);

  const {
    renderer,
    scene,
    camera,
    nodeVisualizerMesh,
    nodePickerMesh,
    edgeVisualizerMesh,
  } = getThreeSetup(ctx);

  updateNodeVisualizerUniforms(ctx);
  updateEdgeVisualizerUniforms(ctx);

  if (nodeVisualizerMesh.material.depthTest) {
    renderer.setRenderTarget(getNodeDepthRenderTarget(ctx));
    renderer.render(nodeVisualizerMesh, camera);
  }

  renderer.setRenderTarget(null);
  renderer.render(scene, camera);

  renderer.setRenderTarget(getPickerRenderTarget(ctx));
  renderer.render(nodePickerMesh, camera);

  if (deviceHasMouse()) updatePickerColorThrottled(ctx);

  requestAnimationFrame(() => animateGraph(ctx));
};
