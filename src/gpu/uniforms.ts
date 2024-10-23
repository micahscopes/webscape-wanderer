import {
  Scene,
  PerspectiveCamera,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  RawShaderMaterial,
  Mesh,
  BoxGeometry,
  WebGLRenderTarget,
  CylinderGeometry,
  DepthTexture,
  LessEqualDepth,
  Object3D,
  TorusKnotGeometry,
  TorusGeometry,
  ObjectLoader,
  GLSL3,
  WebGPURenderer,
  uniform,
  vec4,
  Vector4,
} from "three/webgpu";

// import nodeVs from "../shaders/node-vert.tsl";
// import nodeFs from "../shaders/node-frag.tsl";

// import nodePickerVs from "../shaders/node-picker-vert.tsl";
// import nodePickerFs from "../shaders/node-picker-frag.tsl";

// import edgeVs from "../shaders/edge-vert.tsl";
// import edgeFs from "../shaders/edge-frag.tsl";

import { getCanvasAndGLContext } from "./rendering";
import {
  deviceHasMouse,
  getCurrentlyHoveringIndex,
  getPointerPositionClip,
} from "../interaction";
import { getSelectedColor, getSelectedIndex } from "../selection";
import {
  getColorLayers,
  getEmphasisLayers,
  getPositionLayers,
  getSizeLayers,
} from "./interpolation";
import moize from "moize";
import { getAttributes } from "../attributes";
import { getThreeSetup } from "./graph-viz";
import { Vector2 } from "three/webgpu";

export const getUniforms = moize.infinite((ctx) => {
  const uniforms = {
    mousePosition: uniform(new Vector2(...getPointerPositionClip(ctx))),
    selectedIndex: uniform(-1),
    selectedColor: uniform(new Vector4(...getSelectedColor(ctx))),
    hoveringIndex: uniform(getCurrentlyHoveringIndex(ctx)),
    viewport: uniform(new Vector2(0, 0)),
    devicePixelRatio: uniform(window.devicePixelRatio),
    time: uniform(performance.now() / 1000),
  };

  const attrs = getAttributes(ctx);
  Object.entries(attrs).forEach(([key, value]) => {
    uniforms[key] = uniform(value);
  });
  console.log("initialized uniforms", uniforms);
  return uniforms;
});

const viewport = new Vector2();
export const updateUniforms = (ctx) => {
  const { renderer } = getThreeSetup(ctx);
  renderer.getSize(viewport);
  let uniforms = getUniforms(ctx);
  // uniforms.nodeDepthTexture.value = getNodeDepthRenderTarget(ctx).depthTexture;
  uniforms.mousePosition.value = new Vector2(...getPointerPositionClip(ctx));
  uniforms.selectedIndex.value = getSelectedIndex(ctx);
  uniforms.selectedColor.value = new Vector4(...getSelectedColor(ctx));
  uniforms.hoveringIndex.value = getCurrentlyHoveringIndex(ctx);
  uniforms.time.value = performance.now() / 1000;
  uniforms.viewport.value = viewport.toArray();

  const attrs = getAttributes(ctx);
  Object.entries(attrs).forEach(([key, value]) => {
    uniforms[key].value = value;
  });
};
