#version 300 es
precision highp float;
precision highp int;

in vec3 segmentOffset;
in ivec2 edgeIndices;

out vec4 color;
// flat out vec4 sourceColor;
// flat out vec4 targetColor;
out vec4 position;
out float size;
flat out vec2 edgeDirection;
flat out float edgeLength;
flat out float edgeLength2D;
out float isSource;
out float isTarget;
out float emphasis;
out float v;
out float y;

uniform vec2 mousePosition;
// uniform vec2[6] segmentOffset;

// camera matrices
#include "graph-common.glsl"

uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform sampler2D sizeTexture;
uniform sampler2D emphasisTexture;
uniform ivec2 textureDimensions;

uniform bool selected;
uniform bool hovered;
uniform vec4 selectedColor;
uniform int selectedIndex;

// a function to desaturate a color
vec3 desaturate(vec3 color, float amount) {
  float average = (color.r + color.g + color.b) / 3.0;
  return mix(color, vec3(average), amount);
}

vec4 edgeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  in vec2 edgeDirection,
  float scale,
  float flatness,
  in CameraMatrices cam
) {
  vec2 edgePerpendicular = vec2(-edgeDirection.y, edgeDirection.x)*scale/3.0;
  vec4 position = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec4 positionNDC = position / position.w;
  // let's clamp the position in the near z direction to deal with precision loss near z = -1
  // positionNDC.z = clamp(positionNDC.z, 0.5, 1.0);

  vec4 positionClip = vec4(position.xy + vertexPosition.y*1.0 * edgePerpendicular, position.zw);

  vec4 positionFixedStrokeNDC = positionNDC + vec4(vertexPosition.y * edgePerpendicular, 0.0, 0.0);
  vec4 positionFixedStrokeClip = positionFixedStrokeNDC * position.w;

  // return positionFixedStrokeClip;
  return mix(positionFixedStrokeClip, positionClip, 1.0-flatness);
}

#include "bump.glsl"

void main() {
  vec3 segmentPosition = segmentOffset.yxz + vec3(0.5, 0.0, 0.0);
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
  
  float sourceSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  float targetSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;

  size = sourceSize*isSource + targetSize*isTarget;
  size *= mix(0.5, 0.125, emphasis);
  
  vec4 targetPositionClip = projection * view * vec4(targetNodePosition, 1.0);
  vec4 sourcePositionClip = projection * view * vec4(sourceNodePosition, 1.0);
  
  edgeDirection = normalize(targetPositionClip.xyz/targetPositionClip.w - sourcePositionClip.xyz/sourcePositionClip.w).xy;
  edgeLength = length(targetNodePosition.xyz - sourceNodePosition.xyz);
  edgeLength2D = length((targetPositionClip.xy/targetPositionClip.w - sourcePositionClip.xy/sourcePositionClip.w));

  position = edgeGeometry(
    nodePosition,
    vertexOffset,
    edgeDirection,
    size,
    mix(0.4, 1.0, emphasis),
    CameraMatrices(
      projection,
      view,
      orthoFixedProjection,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );

  // apply a slight z offset to push edges back a bit
  position.z += 0.01 * position.w * bump(vertexOffset.x, 4.0, 0.125);

  vec4 sourceColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0);
  sourceColor = mix(sourceColor, selectedColor, float(selectedIndex == edgeIndices.x));
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0);
  targetColor = mix(targetColor, selectedColor, float(selectedIndex == edgeIndices.y));
  color += sourceColor*isSource;
  color += targetColor*isTarget;
  
  // desaturate the color if the emphasis is low
  color.rgb = desaturate(color.rgb, 1.0-emphasis);
  color.a *= mix(0.25, 1.0, emphasis);

  // color = mix(sourceColor, targetColor, segmentOffset.x*(-1.0*isSource));
  
  // color = smoothstep(sourceColor, targetColor, vec4(vertexOffset.x)); 
  

  // add fog using the NDC z coordinate
  // color.a *= 1.0 - clamp(position.z/position.w, 0.0, 1.0);

  gl_Position = position;
  y = vertexOffset.y;
  v = segmentPosition.y;

  float distance = length(mousePosition - position.xy);
  // float nearness = bump(distance, 100.0, 20.0);
}
