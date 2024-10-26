import moize from "moize";
import { proxy } from "comlink";

import { Matrix4, Vector3 } from "three/webgpu";
import { uniform } from "three/webgpu";

// TODO: maybe this needs a serializable context id argument?
// for when we have multiple contexts on the same thread
export const getCamerasUniforms = moize.infinite((ctx) => {
  return {
    globalProjection: uniform(new Matrix4()),
    globalView: uniform(new Matrix4()),
    zoomedProjection: uniform(new Matrix4()),
    zoomedView: uniform(new Matrix4()),
    fixedProjection: uniform(new Matrix4()),
    fixedView: uniform(new Matrix4()),
    distance: uniform(0),
    center: uniform(new Vector3(0, 0, 0)),
    rotationCenter: uniform(new Vector3(0, 0, 0)),
  };
});

export const cameraUniformsGroupUpdater = (ctx) =>
  moize(
    proxy(
      (
        globalProjection,
        globalView,
        zoomedProjection,
        zoomedView,
        fixedProjection,
        fixedView,
        packedCameraParams,
      ) => {
        const uniforms = getCamerasUniforms(ctx);
        uniforms.globalProjection.value.fromArray(globalProjection);
        uniforms.globalView.value.fromArray(globalView);
        uniforms.zoomedProjection.value.fromArray(zoomedProjection);
        uniforms.zoomedView.value.fromArray(zoomedView);
        uniforms.fixedProjection.value.fromArray(fixedProjection);
        uniforms.fixedView.value.fromArray(fixedView);
        uniforms.distance.value = packedCameraParams[0];
        uniforms.center.value.fromArray(packedCameraParams.slice(1, 4));
        uniforms.rotationCenter.value.fromArray(packedCameraParams.slice(4, 7));
      },
    ),
  );
