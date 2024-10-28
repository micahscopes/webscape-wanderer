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
  (...layers) => {
    console.log("executing interpolation setup for layers", layers);
    const interpolatorFn = Fn(() => {
      for (const { current, target } of layers) {
        console.log("setting up interpolatoin for", current, target);
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
    transformArgs: (args = []) => {
      // args.map((layer) => layer.target.value.count);
      let newArgs = args;
      newArgs = args.flatMap((x) => [
        x?.target?.value?.count,
        x?.target?.uuid,
        x?.current?.value?.count,
        x?.current?.uuid,
      ]);
      // console.log("transforming key", args, newArgs);
      return newArgs;
    },
  },
);

export const interpolate = (ctx, layers) => {
  const { renderer } = getThreeSetup(ctx);
  renderer.compute(interpolator(...layers));
  // layers.forEach(({ current, target }) => {
  //   // console.log("attempting to interpolate", current, target);
  //   // current.needsUpdate = true;
  //   // target.needsUpdate = true;
  // });
};
