import moize from "moize";
import { getCanvasAndGLContext } from "./rendering";
import { renderRGBProgram } from "gpu-io/dist/types/Programs";
import {
  float,
  FloatType,
  Fn,
  InstancedBufferAttribute,
  instanceIndex,
  storage,
  StorageInstancedBufferAttribute,
  Texture,
  vec3,
} from "three/webgpu";
import { getNodeVisualizerMesh, getThreeSetup } from "./graph-viz";
import { graphBuffers } from "../data";

export const interpolator = moize(
  (ctx, ...layers) => {
    // console.debug("executing interpolation setup for layers", layers);
    const interpolatorFn = Fn((layers) => {
      let result = float(0);
      for (const { current, target } of layers) {
        // console.debug("setting up interpolatoin for", current, target);
        let currentElement = current.element(instanceIndex);
        let targetElement = target.element(instanceIndex);
        currentElement.assign(
          // targetElement.mul(0.05),
          currentElement.add(targetElement.sub(currentElement).mul(0.05)),
        );

        result = result
          .mul(currentElement.length())
          .mul(targetElement.length());
      }
      return result;
    });

    const size = layers[0]?.target.value.count;
    return interpolatorFn(layers).compute(size);
  },
  {
    maxSize: 50,
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
      // console.debug("transforming key", newArgs);
      // const newArgs = [buffers.getNodeCount(), buffers.getEdgeCount()];
      return newArgs;
    },
    dispose: () => {
      const { renderer } = getThreeSetup(ctx);
      renderer.dispose();
    },
  },
);

export const interpolate = (ctx, layers) => {
  const { renderer } = getThreeSetup(ctx);
  const interp = interpolator(ctx, ...layers);
  // interp.needsUpdate = true;
  const { edgeVisualizerMesh, nodeVisualizerMesh, nodePickerMesh } =
    getThreeSetup(ctx);

  return renderer.compute(interp);
  //   .then((output) => {
  //   nodeVisualizerMesh.material.vertexNode.needsUpdate = true;
  //   nodePickerMesh.material.vertexNode.needsUpdate = true;
  //   edgeVisualizerMesh.material.vertexNode.needsUpdate = true;
  //   nodeVisualizerMesh.material.needsUpdate = true;
  //   nodePickerMesh.material.needsUpdate = true;
  //   edgeVisualizerMesh.material.needsUpdate = true;

  //   layers.forEach(({ current, target }) => {
  //     current.needsUpdate = true;
  //     target.needsUpdate = true;
  //   });
  //   interp.needsUpdate = true;
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
      current: buffers.getNodeProperties("emphasisInitial"),
      target: buffers.getNodeProperties("emphasisTarget"),
    },
  ]);
  interpolate(ctx, [
    {
      current: buffers.getNodeProperties("colorInitial"),
      target: buffers.getNodeProperties("colorTarget"),
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
  interpolate(ctx, [
    {
      current: buffers.getEdgePairs("emphasisInitial").source,
      target: buffers.getEdgePairs("emphasisTarget").source,
    },
    {
      current: buffers.getEdgePairs("emphasisInitial").target,
      target: buffers.getEdgePairs("emphasisTarget").target,
    },
  ]);
};
