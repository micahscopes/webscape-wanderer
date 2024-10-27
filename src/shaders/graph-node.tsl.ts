import {
  vec4,
  instanceIndex,
  storage,
  MeshBasicNodeMaterial,
  vec3,
  PointsNodeMaterial,
  MeshStandardNodeMaterial,
  positionLocal,
  positionWorld,
  positionGeometry,
  normalGeometry,
  normalLocal,
  min,
  mix,
  max,
  distance,
  length,
  oneMinus,
  attribute,
  MeshPhongNodeMaterial,
  MeshMatcapNodeMaterial,
  Fn,
  float,
} from "three/webgpu";
import moize from "moize";
import { getCamerasUniforms } from "../gpu/camera";
import { getUniforms } from "../gpu/uniforms";
import {
  computeFog,
  graphNodeGeometryComputerFn,
  scaleAdjustment,
} from "./graph-common.tsl";
import { desaturate } from "./desaturate.tsl";
// import { graphBufferState } from "../state";
import { graphBuffers } from "../data";

const instanceIdToColor = (instanceId) => {
  const r = instanceId.add(1).bitAnd(0x0000ff).toFloat().div(255);
  const g = instanceId.add(1).bitAnd(0x00ff00).shiftRight(8).toFloat().div(255);
  const b = instanceId
    .add(1)
    .bitAnd(0xff0000)
    .shiftRight(16)
    .toFloat()
    .div(255);

  return vec4(r, g, b, 1.0);
};

export const graphNodeMaterials = (ctx) => {
  const id = instanceIndex;
  // const id = attribute("index");

  const { fixedProjection, fixedView, distance } = getCamerasUniforms(ctx);
  const { selectedIndex, selectedColor, defaultFogBoundaryClipZ, nodeFog } =
    getUniforms(ctx);

  const buffers = graphBuffers(ctx);

  const positions = buffers.getNodeProperties("positionTarget");
  // const positions = buffers.getEdgePairs("positionTarget").source;

  const targetPosition = buffers
    .getNodeProperties("positionTarget")
    .element(id);
  const currentPosition = buffers
    .getNodeProperties("positionCurrent")
    .element(id);

  // currentPosition.addAssign(targetPosition.sub(currentPosition).mul(0.01));

  const colors = buffers.getNodeProperties("colorTarget");
  const emphases = buffers.getNodeProperties("emphasisTarget");

  const isSelected = id.equal(selectedIndex);
  const anythingSelected = selectedIndex.greaterThan(-1);
  const scale = buffers
    .getNodeProperties("sizeTarget")
    .element(id)
    .mul(scaleAdjustment);
  const scalePicker = max(scale, 0.05);

  const geo = graphNodeGeometryComputerFn(ctx, {
    nodePosition: positions.element(id),
    scale,
    // scale: float(1),
  });

  const geoPicker = graphNodeGeometryComputerFn(ctx, {
    nodePosition: positions.element(id),
    scale: scalePicker,
  });
  let normal = fixedView.mul(fixedProjection).mul(normalLocal).normalize();

  let color = colors.element(id);
  const selectedNodePosition = positions.element(selectedIndex);
  const selectedDistance = length(positions.element(id));

  let fog = min(
    computeFog({
      positionClipZ: geo.globalClipPosition.z,
      fogBoundaryClipZ: defaultFogBoundaryClipZ,
      distance,
    }),
    oneMinus(isSelected.toFloat()),
  );
  fog = min(fog, oneMinus(emphases.element(id)));
  fog = mix(0.0, fog, nodeFog);

  let newRgb = color.xyz.mul(mix(1.0, 0.5, fog));
  newRgb = desaturate(newRgb, oneMinus(0.2).mul(fog));
  color = vec4(newRgb, color.w);

  const colorNode = mix(color, selectedColor, isSelected.toFloat());

  return {
    graphNodeMaterial: new MeshMatcapNodeMaterial({
      vertexNode: geo.orthographicClipPosition,
      colorNode: colorNode,
    }),
    graphNodePickerMaterial: new MeshBasicNodeMaterial({
      vertexNode: geoPicker.orthographicClipPosition,
      colorNode: instanceIdToColor(id),
      depthWrite: true,
    }),
  };
};
