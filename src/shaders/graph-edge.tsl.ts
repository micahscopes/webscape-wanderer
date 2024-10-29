import {
  screenSize,
  attribute,
  clamp,
  dot,
  equal,
  float,
  greaterThan,
  instanceIndex,
  length,
  max,
  MeshBasicNodeMaterial,
  mix,
  normalize,
  oneMinus,
  or,
  positionGeometry,
  pow,
  screenCoordinate,
  sin,
  smoothstep,
  varying,
  vec2,
  vec3,
  vec4,
  screenUV,
  viewportSize,
  viewportCoordinate,
  viewportUV,
  uv,
  distance,
  bool,
  int,
} from "three/webgpu";
import { getCamerasUniforms } from "../gpu/camera";
import { getUniforms } from "../gpu/uniforms";
import { graphBuffers } from "../data";
import { bump } from "./bump.tsl";
import { desaturate } from "./desaturate.tsl";
import { scaleAdjustment } from "./graph-common.tsl";

const getEdgeAttributes = (ctx) => {
  const buffers = graphBuffers(ctx);
  const id = instanceIndex;
  const positionsInitial = buffers.getEdgePairs("positionInitial");
  const positionsTarget = buffers.getEdgePairs("positionTarget");
  const sizesInitial = buffers.getEdgePairs("sizeInitial");
  const sizesTarget = buffers.getEdgePairs("sizeTarget");
  const colorsInitial = buffers.getEdgePairs("colorInitial");
  const colorsTarget = buffers.getEdgePairs("colorTarget");
  const emphasesInitial = buffers.getEdgePairs("emphasisInitial");
  const emphasesTarget = buffers.getEdgePairs("emphasisTarget");

  return {
    sourcePosition: positionsInitial.source
      .element(id)
      .add(positionsTarget.source.element(id).mul(0))
      .toVar("srcPosition"),
    targetPosition: positionsInitial.target
      .element(id)
      .add(positionsTarget.target.element(id).mul(0))
      .toVar("tgtPosition"),
    sourceColor: colorsInitial.source
      .element(id)
      .sub(colorsTarget.source.element(id).mul(0))
      .toVar("srcColor"),
    targetColor: colorsInitial.target
      .element(id)
      .sub(colorsTarget.target.element(id).mul(0))
      .toVar("tgtColor"),
    sourceSize: sizesInitial.source
      .element(id)
      .sub(sizesTarget.source.element(id).mul(0))
      .mul(scaleAdjustment)
      .toVar("srcSize"),
    targetSize: sizesInitial.target
      .element(id)
      .sub(sizesTarget.target.element(id).mul(0))
      .mul(scaleAdjustment)
      .toVar("tgtSize"),
    sourceEmphasis: emphasesTarget.source
      .element(id)
      // .sub(emphasesTarget.source.element(id).mul(0))
      .x.toVar("srcEmphasis"),
    targetEmphasis: emphasesTarget.target
      .element(id)
      // .sub(emphasesTarget.target.element(id).mul(0))
      .y.toVar("tgtEmphasis"),
    edgeIndices: buffers.getEdgeIndices().element(id).toVar("edgeIndices"),
  };
};

const edgeGeometry = ({
  nodePosition,
  vertexPosition,
  edgeDirection,
  scale,
  flatness,
  globalView,
  globalProjection,
  globalScale,
  edgeScale,
}) => {
  const normalizedEdgeDirection = normalize(edgeDirection);
  const edgePerpendicular = vec2(
    normalizedEdgeDirection.y.negate(),
    normalizedEdgeDirection.x,
  )
    .toVar("edgePerpendicular")
    .mul(scale)
    .mul(globalScale)
    .mul(edgeScale)
    .div(3.0);

  const position = globalProjection
    .toVar("projection")
    .mul(globalView.toVar("view"))
    .mul(vec4(nodePosition, 1.0))
    .toVar("position");
  const positionNDC = position.div(position.w);

  const positionClip = vec4(
    position.xy.add(vertexPosition.y.mul(edgePerpendicular)),
    position.zw,
  );

  const positionFixedStrokeNDC = positionNDC.add(
    vec4(vertexPosition.y.mul(edgePerpendicular), 0.0, 0.0),
  );
  const positionFixedStrokeClip = positionFixedStrokeNDC.mul(position.w);

  return mix(positionClip, positionFixedStrokeClip, flatness);
};

const nodeClipPosition = ({ nodePosition, globalView, globalProjection }) => {
  return globalProjection
    .toVar("projection")
    .mul(globalView.toVar("view"))
    .mul(vec4(nodePosition, 1.0));
};
export const graphEdgeMaterial = (ctx) => {
  const {
    globalProjection,
    globalView,
    distance: camDistance,
  } = getCamerasUniforms(ctx);

  const {
    selectedIndex,
    selectedColor,
    mousePosition,
    hoveringIndex,
    edgeFrequency,
    edgePulseSpeed,
    edgeWaveSpeed,
    time,
    devicePixelRatio,
    nodeDepthTexture,
    globalScale,
    edgeScale,
    edgeOvershoot,
    defaultFogBoundaryClipZ,
    edgeFog,
    selectedEdgeColor,
  } = getUniforms(ctx);

  const segmentOffset = attribute("segmentOffset", "vec3");

  let {
    sourcePosition,
    targetPosition,
    sourceColor,
    targetColor,
    sourceSize,
    targetSize,
    sourceEmphasis,
    targetEmphasis,
    edgeIndices,
  } = getEdgeAttributes(ctx);

  // Create offset (matching GLSL version more closely)
  const offset = vec3(
    segmentOffset.y.mul(edgeOvershoot),
    segmentOffset.x,
    segmentOffset.z,
  );

  // Create segmentPosition (matching GLSL version)
  const segmentPosition = offset
    .add(vec3(edgeOvershoot.mul(0.5), 0, 0))
    .toVar("segmentPosition");

  // Calculate isSource and isTarget
  const isSource = segmentPosition.x.toVar("isSource");
  const isTarget = oneMinus(isSource).toVar("isTarget");

  // Create vertexOffset
  const vertexOffset = segmentPosition.toVar("vertexOffset");

  const nodePosition = sourcePosition
    .mul(isSource)
    .add(targetPosition.mul(isTarget))
    .toVar("nodePosition");

  // Calculate edge direction accounting for perspective division
  const sourcePositionClip = globalProjection
    .toVar("projection")
    .mul(globalView.toVar("view"))
    .mul(vec4(sourcePosition, 1.0))
    .toVar("sourcePositionClip");
  const targetPositionClip = globalProjection
    .toVar("projection")
    .mul(globalView.toVar("view"))
    .mul(vec4(targetPosition, 1.0))
    .toVar("targetPositionClip");

  const edgeDirection = normalize(
    targetPositionClip.xyz
      .div(targetPositionClip.w)
      .sub(sourcePositionClip.xyz.div(sourcePositionClip.w)),
  ).xy.toVar("edgeDirection");

  const size = sourceSize
    .mul(isSource)
    .add(targetSize.mul(isTarget))
    .mul(0.4)
    .toVar("size");

  const flatness = float(1.0).toVar("flatness");

  const positionClip = edgeGeometry({
    nodePosition,
    vertexPosition: vertexOffset,
    edgeDirection,
    scale: size,
    flatness,
    globalView,
    globalProjection,
    globalScale,
    edgeScale,
  }).toVar("positionClip");

  // Color calculation
  let edgeColor = sourceColor
    .mul(isSource)
    .add(targetColor.mul(isTarget))
    .toVar("color");

  // edgeIndices = edgeIndices.toVar("edgeIndices");
  const sourceIndex = edgeIndices.x;
  const targetIndex = edgeIndices.y;

  const sourceSelected = equal(selectedIndex, sourceIndex).toFloat();
  const targetSelected = equal(selectedIndex, targetIndex).toFloat();

  const selected = sourceSelected
    .mul(isSource)
    .add(targetSelected.mul(isTarget));

  const eitherSelected = max(sourceSelected, targetSelected).toFloat();

  // const selected = equal(selectedIndex, sourceIndex)
  //   .or(equal(selectedIndex, targetIndex))
  //   .toInt();
  // const selected = float(1);
  // let selected =
  // .toFloat()
  // .toVar("selected"),

  // selected = varying(selected.toFloat());
  // or(
  // equal(selectedIndex, edgeIndices).toFloat();
  // equal(selectedIndex, edgeIndices.y),
  // ).toFloat(),
  // const selected = float(1);

  // const hovering = float(
  //   or(
  //     equal(hoveringIndex, edgeIndices.x.toFloat()),
  // equal(hoveringIndex, edgeIndices.y.toFloat()),
  //   ),
  // ).toVar("hovering");

  const isAnySelected = float(greaterThan(selectedIndex, -1)).toVar(
    "isAnySelected",
  );

  const emphasis = max(sourceEmphasis, targetEmphasis).toVar("emphasis");

  const vSelected = selected;

  // Desaturate color based on emphasis
  let rgb = edgeColor.xyz;
  // let rgb = desaturate(
  //   edgeColor.xyz,
  //   mix(1.0, oneMinus(eitherSelected), emphasis),
  // );
  let alpha = float(1);
  // alpha = edgeColor.w.mul(
  //   mix(0.2, 1.0, mix(1.0, oneMinus(emphasis), isAnySelected)),
  // );
  alpha = alpha.mul(mix(0.4, 1.0, mix(1.0, emphasis, isAnySelected)));

  // Dim edges for larger distances
  alpha = alpha.mul(
    mix(1.0, mix(0.3, 1.0, emphasis), smoothstep(400.0, 1200.0, camDistance)),
  );

  edgeColor = vec4(rgb, alpha);

  // Fog calculation
  const fog = computeFog(
    positionClip.z,
    defaultFogBoundaryClipZ.div(2.0),
  ).toVar("fog");

  // Create varying nodes
  const vColor = varying(edgeColor);
  const vFog = varying(fog);
  const vEmphasis = varying(emphasis);
  const vSize = varying(size);
  const vIsTarget = varying(isTarget);

  const sourcePosition2DNDC = varying(
    sourcePositionClip.xy
      .div(sourcePositionClip.w)
      .toVar("sourcePosition2DNDC"),
  );
  const targetPosition2DNDC = targetPositionClip.xy
    .div(targetPositionClip.w)
    .toVar("targetPosition2DNDC");

  const sourcePosition2D = varying(
    sourcePosition2DNDC
      .reflect(vec2(0, 1))
      .add(vec2(1, 1))
      .mul(0.5)
      .mul(viewportSize),
  );
  const targetPosition2D = varying(
    targetPosition2DNDC
      .reflect(vec2(0, 1))
      .add(vec2(1, 1))
      .mul(0.5)
      .mul(viewportSize),
  );
  const edgeLength = varying(length(targetPosition.sub(sourcePosition)));
  const edgeLength2D = varying(length(targetPosition2D.sub(sourcePosition2D)));

  const vY = varying(vertexOffset.y);
  const vV = varying(segmentPosition.y);
  const colorNode = () => {
    const u_2D = distance(sourcePosition2D, screenCoordinate).div(edgeLength2D);
    const u_3D = isTarget;

    // Softness
    let color = vColor;
    let alpha = color.w.mul(
      mix(bump(vV, float(2).mul(oneMinus(fog)), 1.0), 1.0, fog),
    );

    const { sourceSize } = getEdgeAttributes(ctx);
    // Waves
    const frequency = edgeLength2D.mul(edgeFrequency).mul(0.1);
    const waveSpeed = float(4.0).mul(edgeWaveSpeed).div(edgeLength2D);
    const waves = wave(u_2D.sub(time.mul(waveSpeed)), frequency);

    // Wave packets
    const highFrequency = edgeLength.div(4.0).mul(edgeFrequency);
    const pulseSpeed = float(20.0).div(edgeLength).mul(edgePulseSpeed);
    const pulse = clamp(
      pow(wave(u_2D.sub(time.mul(pulseSpeed)), 1.0), edgeLength2D.div(5.0)),
      0.0,
      1.0,
    );
    // const pulse = clamp(
    //   pow(wave(u_2D.sub(time.mul(pulseSpeed)), 1.0), edgeLength2D.div(5.0)),
    //   0.0,
    //   1.0,
    // );

    // Golden pulse
    let rgb = color.xyz;
    rgb = mix(color.xyz, vec3(1.0, 1.0, 0.0), mix(0.0, pulse, 0.1));

    // Dashed lines
    alpha = color.w.mul(mix(1.0, waves, oneMinus(pulse)));

    // Add bumps
    alpha = alpha.mul(
      bump(
        vV,
        1.0,
        pulse
          .mul(mix(0.2, 0.4, emphasis))
          .mul(wave(u_3D, highFrequency))
          .add(0.6),
      ),
    );

    // Emphasize selected edges
    // alpha = alpha.mul(mix(0.4, 1.0, selected));
    // alpha = mix(alpha.mul(0.2), 1.0, vEmphasis);
    alpha = alpha.mul(mix(0.4, 1.0, vSelected));

    // Fade ends of edges
    alpha = alpha.mul(bump(u_3D.sub(0.5), 2.0, edgeOvershoot));

    // Check the depth of the nodes at this same fragment coordinate
    // const nodeDepth = texture(nodeDepthTexture, fragCoord.div(viewport)).r;

    // return vec4(rgb, alpha);

    // Check proximity to sourcePosition2D
    const proximity = distance(screenCoordinate, sourcePosition2D);
    const proximityThreshold = float(100.0); // Adjust this value as needed
    const redFactor = smoothstep(proximityThreshold, float(0.0), proximity);

    // Mix red color based on proximity
    rgb = mix(rgb, selectedColor.xyz, selected);

    return vec4(rgb, alpha);
  };

  return new MeshBasicNodeMaterial({
    vertexNode: positionClip,
    colorNode: colorNode(),
    depthTest: false,
    // depthWrite: true,
    transparent: true,
  });
};

const computeFog = (z, fogBoundary) => {
  return smoothstep(0.0, 1.0, z.sub(fogBoundary).div(fogBoundary));
};

// Fragment shader function

// Helper functions for the fragment shader
const wave = (t, freq) => pow(sin(t.mul(freq).mul(Math.PI)), 2.0);
