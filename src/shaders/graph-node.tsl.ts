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
  texture,
  TextureLoader,
} from "three/webgpu";
import matcapUrl from "../../data/vibes-512px.png";
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

  const positionsInitial = buffers.getNodeProperties("positionInitial");
  const positionsTarget = buffers.getNodeProperties("positionTarget");
  const positionCurrent = positionsInitial
    .element(id)
    .sub(positionsTarget.element(id).mul(0));

  const colorsInitial = buffers.getNodeProperties("colorInitial");
  const colorsTarget = buffers.getNodeProperties("colorTarget");
  const colorCurrent = colorsTarget
    .element(id)
    .sub(colorsTarget.element(id).mul(0));

  const sizesInitial = buffers.getNodeProperties("sizeInitial");
  const sizesTarget = buffers.getNodeProperties("sizeTarget");
  const sizeCurrent = sizesInitial
    .element(id)
    .sub(sizesTarget.element(id).mul(0));

  const emphasesInitial = buffers.getNodeProperties("emphasisInitial");
  const emphasesTarget = buffers.getNodeProperties("emphasisTarget");
  const emphasisCurrent = emphasesInitial
    .element(id)
    .sub(emphasesTarget.element(id).mul(0));
  const anythingSelected = selectedIndex.greaterThan(-1);

  const emphasis = anythingSelected
    .not()
    .cond(oneMinus(emphasisCurrent), emphasisCurrent);

  const colors = buffers.getNodeProperties("colorTarget");

  const isSelected = id.equal(selectedIndex);
  const scale = sizeCurrent
    .mul(scaleAdjustment)
    .mul(mix(0.5, 1, emphasisCurrent));
  const scalePicker = max(scale, 0.05);

  const geo = graphNodeGeometryComputerFn(ctx, {
    nodePosition: positionCurrent,
    scale,
    // scale: float(1),
  });

  const geoPicker = graphNodeGeometryComputerFn(ctx, {
    nodePosition: positionCurrent,
    scale: scalePicker,
  });
  let normal = fixedView.mul(fixedProjection).mul(normalLocal).normalize();

  let color = colors.element(id);
  const selectedNodePosition = positionsInitial.element(selectedIndex);
  const selectedDistance = length(positionsInitial.element(id));

  let fog = min(
    computeFog({
      positionClipZ: geo.globalClipPosition.z,
      fogBoundaryClipZ: defaultFogBoundaryClipZ,
      distance,
    }),
    oneMinus(isSelected.toFloat()),
  );
  fog = min(fog, oneMinus(emphasis));
  fog = mix(0.0, fog, nodeFog);

  let alpha = color.w;
  alpha = mix(0.1, 1.0, emphasis);
  let newRgb = color.xyz.mul(mix(1.0, 0.5, fog));
  newRgb = desaturate(newRgb, max(oneMinus(0.2).mul(fog), oneMinus(emphasis)));

  color = vec4(newRgb, alpha);

  const colorNode = mix(color, selectedColor, isSelected.toFloat());

  const matcap = new TextureLoader().load(matcapUrl);

  return {
    graphNodeMaterial: new MeshMatcapNodeMaterial({
      vertexNode: geo.orthographicClipPosition,
      matcap,
      colorNode: colorNode,
      transparent: true,
      // depthTest: false,
    }),
    graphNodePickerMaterial: new MeshBasicNodeMaterial({
      vertexNode: geoPicker.orthographicClipPosition,
      colorNode: instanceIdToColor(id),
      depthWrite: true,
    }),
  };
};
