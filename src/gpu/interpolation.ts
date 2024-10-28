import moize from "moize";
import { getCanvasAndGLContext } from "./rendering";
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
import { graphBuffers } from "../data";

export const interpolator = moize.infinite(
  (ctx, ...layers) => {
    // console.log("executing interpolation setup for layers", layers);
    const interpolatorFn = Fn(() => {
      for (const { current, target } of layers) {
        // console.log("setting up interpolatoin for", current, target);
        let currentElement = current.element(instanceIndex);
        let targetElement = target.element(instanceIndex);
        currentElement.addAssign(
          // targetElement.mul(0.05),
          targetElement.sub(currentElement).mul(0.05),
        );
      }
    });

    const size = layers[0]?.target.value.count;
    return interpolatorFn().compute(size);
  },
  {
    transformArgs: ([ctx, ...layers]) => {
      // args.map((layer) => layer.target.value.count);
      let newArgs = layers;
      const buffers = graphBuffers(ctx);
      newArgs = layers.flatMap((x) => [
        buffers.getNodeCount(),
        x?.target?.uuid,
        buffers.getEdgeCount(),
        x?.current?.uuid,
      ]);
      // console.log("transforming key", newArgs);
      // const newArgs = [buffers.getNodeCount(), buffers.getEdgeCount()];
      return newArgs;
    },
  },
);

export const interpolate = (ctx, layers) => {
  const { renderer } = getThreeSetup(ctx);
  renderer.compute(interpolator(ctx, ...layers));
  // layers.forEach(({ current, target }) => {
  //   // console.log("attempting to interpolate", current, target);
  //   // current.needsUpdate = true;
  //   // target.needsUpdate = true;
  // });
};

export const doInterpolation = (ctx) => {
  const buffers = graphBuffers(ctx);
  interpolate(ctx, [
    {
      current: buffers.getNodeProperties("positionInitial"),
      target: buffers.getNodeProperties("positionTarget"),
    },
    {
      current: buffers.getNodeProperties("sizeInitial"),
      target: buffers.getNodeProperties("sizeTarget"),
    },
  ]);

  interpolate(ctx, [
    {
      current: buffers.getEdgePairs("positionInitial").source,
      target: buffers.getEdgePairs("positionTarget").source,
    },
    {
      current: buffers.getEdgePairs("positionInitial").target,
      target: buffers.getEdgePairs("positionTarget").target,
    },
  ]);

  interpolate(ctx, [
    {
      current: buffers.getEdgePairs("sizeInitial").source,
      target: buffers.getEdgePairs("sizeTarget").source,
    },
    {
      current: buffers.getEdgePairs("sizeInitial").target,
      target: buffers.getEdgePairs("sizeTarget").target,
    },
  ]);

  interpolate(ctx, [
    {
      current: buffers.getEdgePairs("colorInitial").source,
      target: buffers.getEdgePairs("colorTarget").source,
    },
    {
      current: buffers.getEdgePairs("colorInitial").target,
      target: buffers.getEdgePairs("colorTarget").target,
    },
  ]);
};
