import moize from "moize";
import { getCanvasAndGLContext } from "./rendering";
import { App } from "picogl";
import { renderRGBProgram } from "gpu-io/dist/types/Programs";
import {
  FloatType,
  Fn,
  InstancedBufferAttribute,
  instanceIndex,
  storage,
  StorageInstancedBufferAttribute,
  Texture,
  vec3,
} from "three/webgpu";
import { getThreeSetup } from "./graph-viz";

export const hasEnoughFramebufferAttachments = moize((ctx) => {
  const { gl } = getCanvasAndGLContext(ctx);
  const maxColorAttachments = gl.getParameter(gl.MAX_COLOR_ATTACHMENTS);
  return maxColorAttachments >= 8;
});

export const getLayers = (
  ctx,
  name,
  { numComponents = 1, dimensions = 32 } = {},
) => {
  const current = storage(
    new StorageInstancedBufferAttribute(
      new Float32Array(numComponents * dimensions),
      numComponents,
    ),
    floatNumToVecType(numComponents),
    dimensions,
  );
  const target = storage(
    new StorageInstancedBufferAttribute(
      new Float32Array(numComponents * dimensions),
      numComponents,
    ),
    floatNumToVecType(numComponents),
    dimensions,
  );

  console.log(name, current, target);

  return { current, target };
};

export const getPositionLayers = moize.infinite((ctx) =>
  getLayers(ctx, "position", { numComponents: 3 }),
);
export const getColorLayers = moize.infinite((ctx) =>
  getLayers(ctx, "color", { numComponents: 4 }),
);
export const getSizeLayers = moize.infinite((ctx) =>
  getLayers(ctx, "size", { numComponents: 1 }),
);
export const getEmphasisLayers = moize.infinite((ctx) =>
  getLayers(ctx, "emphasis", { numComponents: 1 }),
);

const floatNumToVecType = (size) => {
  switch (size) {
    case 1:
      return "float";
    case 2:
      return "vec2";
    case 3:
      return "vec3";
    case 4:
      return "vec4";
  }
};

export const setAllLayerSizes = (ctx, size) => {
  console.log("setting layer sizes to", size);
  const layers = [
    getPositionLayers(ctx),
    getColorLayers(ctx),
    getSizeLayers(ctx),
    getEmphasisLayers(ctx),
  ];

  layers.forEach(({ current, target }) => {
    for (const layer of [current, target]) {
      const oldArray = layer.value.array;
      const newArray = new Float32Array(size * layer.itemSize);
      const copyLength = Math.min(oldArray.length, newArray.length);
      newArray.set(oldArray.subarray(0, copyLength));
      layer.value.array = newArray;
      layer.count = size;
      layer.value.needsUpdate = true;
    }
  });
};

export const interpolator = moize.infinite((...layers) => {
  console.log("executing interpolation setup");
  const interpolatorFn = Fn(() => {
    for (const { current, target } of layers) {
      let currentElement = current.element(instanceIndex);
      let targetElement = target.element(instanceIndex);
      currentElement.addAssign(
        // targetElement.mul(0.05),
        targetElement.sub(currentElement).mul(0.05),
      );
    }
  });

  const size = layers[0]?.target.count;
  return interpolatorFn().compute(size);
});

export const interpolate = (ctx, layers) => {
  const { renderer } = getThreeSetup(ctx);
  renderer.compute(interpolator(...layers));
};

// export const interpolator =
//
// moize.infinite(
//   //
//   (...layers) => {
//     // const interpolationLayers = [
//     //   getPositionLayers(ctx),
//     //   getColorLayers(ctx),
//     //   // getSizeLayers(ctx),
//     //   // getEmphasisLayers(ctx),
//     // ];

//     const size = interpolationLayers[0]?.target.count;
//     // console.log("preparing interpolation", size, interpolationLayers);
//     return interpolationFn(interpolationLayers)().compute(size);
//   },
//
// );
