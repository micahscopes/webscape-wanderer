#version 300 es
precision highp float;
precision highp int;

in vec3 segmentOffset;
in ivec2 edgeIndices;

out vec4 color;
out vec4 position;
out float size;
flat out vec2 edgeDirection;
flat out float edgeLength;
flat out float edgeLength2D;
flat out float isAnySelected;
flat out vec2 sourcePosition2D;
flat out vec2 targetPosition2D;
flat out float sourceSize;
flat out float targetSize;
out float isSource;
out float isTarget;
out float emphasis;
out float selected;
out float hovering; 
out float v;
out float y;
out float fog;

out float offsetRadius2D;

uniform vec2 mousePosition;

// camera matrices
#include "graph-common.glsl"

uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform sampler2D sizeTexture;
uniform sampler2D emphasisTexture;
uniform ivec2 textureDimensions;

uniform vec2 viewport;

uniform int hoveringIndex;
uniform float edgeOvershoot;


vec4 edgeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  in vec2 edgeDirection,
  float scale,
  float flatness,
  in CameraMatrices cam
) {
  vec2 normalizedEdgeDirection = normalize(edgeDirection);
  vec2 edgePerpendicular = vec2(-normalizedEdgeDirection.y, normalizedEdgeDirection.x)*scale*globalScale*edgeScale/3.0;
  vec4 position = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec4 positionNDC = position / position.w;

  vec4 positionClip = vec4(position.xy + vertexPosition.y*1.0 * edgePerpendicular, position.zw);

  vec4 positionFixedStrokeNDC = positionNDC + vec4(vertexPosition.y * edgePerpendicular, 0.0, 0.0);
  vec4 positionFixedStrokeClip = positionFixedStrokeNDC * position.w;

  return mix(positionClip, positionFixedStrokeClip, flatness);
}

#include "desaturate.glsl"

void main() {
  selected = float(selectedIndex == edgeIndices.x || selectedIndex == edgeIndices.y);
  hovering = float(hoveringIndex == edgeIndices.x || hoveringIndex == edgeIndices.y);
  isAnySelected = float(selectedIndex > -1);

  vec3 offset = segmentOffset;
  offset.y *= edgeOvershoot;
  
  vec3 segmentPosition = offset.yxz + vec3(0.5*edgeOvershoot, 0.0, 0.0);

  // map the segment range from [0,1] to [-0.5, 1.5]


  isSource = segmentPosition.x;
  isTarget = 1.0-segmentPosition.x;
  
  float sourceEmphasis = texelFetch(emphasisTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  float targetEmphasis = texelFetch(emphasisTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;

  emphasis = max(sourceEmphasis, targetEmphasis);
  
  position = vec4(0);
  vec3 vertexOffset = segmentPosition + vec3(0.0, 0, 0.0);

  vec3 sourceNodePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).xyz;
  vec3 targetNodePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).xyz;
  
  vec3 nodePosition = sourceNodePosition*isSource + targetNodePosition*isTarget;
  
  // let's throw out non-selected edges below a certain emphasis threshold if there is any selected node
  // size *= float(emphasis > 0.1 || isAnySelected < 0.5);

  // push back non-selected edges if there is any selected node, otherwise do nothing
  // position.z += 0.1 * position.w * isAnySelected * (1.0-pow(emphasis, 4.0)); //float(emphasis < 0.1);
  
  vec4 sourcePositionClip = projection * view * vec4(sourceNodePosition, 1.0);
  vec4 targetPositionClip = projection * view * vec4(targetNodePosition, 1.0);
  
  vec2 sourcePosition2DNDC = sourcePositionClip.xy/sourcePositionClip.w;
  vec2 targetPosition2DNDC = targetPositionClip.xy/targetPositionClip.w;
  
  // in window space (i.e. gl_FragCoord)
  sourcePosition2D = (sourcePosition2DNDC + 1.0) * 0.5 * viewport;
  targetPosition2D = (targetPosition2DNDC + 1.0) * 0.5 * viewport;
  edgeLength2D = length(targetPosition2D - sourcePosition2D);

  edgeDirection = normalize(targetPositionClip.xyz/targetPositionClip.w - sourcePositionClip.xyz/sourcePositionClip.w).xy;
  edgeLength = length(targetNodePosition.xyz - sourceNodePosition.xyz);

  sourceSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  targetSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;

  size = sourceSize*isSource + targetSize*isTarget;
  
  // size *= 2.0;
  // size *= mix(0.1, 0.1, emphasis);
  size *= 0.4;

  position = edgeGeometry(
    nodePosition,
    vertexOffset,
    edgeDirection,
    size,
    1.0,
    // mix(0.95, 0.95, emphasis),
    CameraMatrices(
      projection,
      // viewFromTexture,
      view,
      orthoFixedProjection,
      // orthoFixedViewFromTexture,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );

  // colors
  vec4 sourceColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0);
  sourceColor = mix(sourceColor, selectedColor, float(selectedIndex == edgeIndices.x));
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0);
  targetColor = mix(targetColor, selectedColor, float(selectedIndex == edgeIndices.y));
  color += sourceColor*isSource;
  color += targetColor*isTarget;

  // desaturate the color if the emphasis is low
  color.rgb = desaturate(color.rgb, mix(1.0, 0.2, emphasis));
  color.a *= mix(0.2, 1.0, mix(1.0, emphasis, isAnySelected));
  color.a *= mix(0.4, 1.0, mix(1.0, selected, isAnySelected));
  
  // dim edges for larger values of `cameras.distance` 
  color.a *= mix(1.0, mix(0.3, 1.0, selected), smoothstep(400.0, 1200.0, distance));
  
  fog = computeFog(position.z, defaultFogBoundaryClipZ/2.0);
  fog = min(fog, 1.0 - selected);
  fog = min(fog, 1.0 - emphasis);
  fog = mix(0.0, fog, edgeFog);
  color.a *= mix(1.0, 0.1, fog);
  
  // color.a = 1.0*hovering;
  
  gl_Position = position;
  y = vertexOffset.y;
  v = segmentPosition.y;


  // not satisfied with the fog attempts yet

  // z distance from selected node
  // vec3 selectedNodePosition = texelFetch(positionTexture, getTextureIndex(selectedIndex, textureDimensions), 0).xyz;
  // float selectedNodeDistance = length(selectedNodePosition - nodePosition);
  // // fog if we're far from the selected node and there's a node selected
  // color.a *= 1.0 - clamp(selectedNodeDistance/1000.0, 0.8, 1.0) * isAnySelected;

  // add fog using the NDC z coordinate
  // color.a *= 1.0 - clamp(position.z/position.w, 0.0, 1.0);
  // float distance = length(mousePosition - position.xy);
  // float nearness = bump(distance, 100.0, 20.0);
}
