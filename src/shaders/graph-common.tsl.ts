import {
  Fn,
  mat4,
  vec3,
  vec4,
  mix,
  float,
  ShaderNodeObject,
  Vector3,
  Vector3Like,
  Vector4Like,
  Vector4,
  Node,
  positionGeometry,
  smoothstep,
} from "three/webgpu";

import moize from "moize";
import { getCamerasUniforms } from "../gpu/camera";
import { getUniforms } from "../gpu/uniforms";
import { bump } from "./bump.tsl";
// import { getNodeVisualizerUniforms } from "../gpu/graph-viz";

/**
 * Computes the geometry bundle for a node.
 *
 * @param nodePosition - The position of the node.
 * @param vertexPosition - The position of the vertex.
 * @param scale - The scaling factor.
 * @returns A NodeGeometryBundle containing various computed positions.
 */
export const graphNodeGeometryComputerFn = (ctx, { nodePosition, scale }) => {
  const {
    globalProjection,
    globalView,
    zoomedProjection,
    zoomedView,
    fixedProjection,
    fixedView,
    distance,
    center,
    rotationCenter,
  } = getCamerasUniforms(ctx);

  const { globalScale, nodeScale } = getUniforms(ctx);

  // Compute global clip position and NDC
  const globalClipPosition = globalProjection
    .mul(globalView)
    .mul(vec4(nodePosition, float(1.0)));
  const globalNDC = globalClipPosition.xyz.div(globalClipPosition.w);

  // Scaled vertex position
  const scaledVertexPosition = positionGeometry
    .mul(scale)
    .mul(globalScale.value)
    .mul(nodeScale.value);

  // Compute ortho fixed clip position and NDC
  const orthoFixedClipPosition = fixedProjection.mul(
    fixedView.mul(vec4(scaledVertexPosition, float(1.0))),
  );
  const orthoFixedNDC = orthoFixedClipPosition.xyz.div(
    orthoFixedClipPosition.w,
  );

  // Compute ortho zoomed clip position and NDC
  const orthoZoomedClipPosition = zoomedProjection
    .mul(zoomedView.mul(vec4(scaledVertexPosition, float(1.0))))
    .mul(float(0.5));
  const orthoZoomedNDC = orthoZoomedClipPosition.xyz.div(
    orthoZoomedClipPosition.w,
  );

  // Mix NDCs
  const localNDC = mix(orthoZoomedNDC, orthoFixedNDC, float(0.5));

  // Combine in NDC space to preserve depth
  const orthographicNDC = vec3(
    localNDC.x.add(globalNDC.x),
    localNDC.y.add(globalNDC.y),
    globalNDC.z.add(localNDC.z.sub(float(0.99)).mul(float(0.1))),
  );

  // Convert back to clip space
  const orthographicClipPosition = vec4(
    orthographicNDC.mul(globalClipPosition.w),
    globalClipPosition.w,
  );

  return {
    globalNDC,
    globalClipPosition,
    orthoFixedClipPosition,
    orthoZoomedClipPosition,
    orthographicClipPosition,
  };
};

export const computeFog = ({ positionClipZ, fogBoundaryClipZ, distance }) => {
  const fogLevel = float(1.0).sub(
    bump(positionClipZ, float(1.0), fogBoundaryClipZ),
  );
  return mix(
    fogLevel,
    float(0.0),
    smoothstep(float(400.0), float(800.0), distance),
  );
};
