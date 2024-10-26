import { uniform, Vector4 } from "three/webgpu";

import {
  getCurrentlyHoveringIndex,
  getPointerPositionClip,
} from "../interaction";
import { getSelectedColor, getSelectedIndex } from "../selection";
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
