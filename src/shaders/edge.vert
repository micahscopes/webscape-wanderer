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
flat out float isAnySelected;
flat out vec2 sourcePosition2D;
flat out vec2 targetPosition2D;
out float isSource;
out float isTarget;
out float emphasis;
out float selected;
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

uniform vec2 viewport;

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
  selected = float(selectedIndex == edgeIndices.x || selectedIndex == edgeIndices.y);
  isAnySelected = float(selectedIndex > -1);

  
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
  size *= mix(0.4, 0.1, emphasis);

  // let's throw out non-selected edges below a certain emphasis threshold if there is any selected node
  size *= float(emphasis > 0.1 || isAnySelected < 0.5);

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

  mat4 viewFromTexture = mat4(
    texelFetch(viewMatrixTexture, ivec2(0, 0), 0),
    texelFetch(viewMatrixTexture, ivec2(1, 0), 0),
    texelFetch(viewMatrixTexture, ivec2(0, 1), 0),
    texelFetch(viewMatrixTexture, ivec2(1, 1), 0)
  );

  position = edgeGeometry(
    nodePosition,
    vertexOffset,
    edgeDirection,
    size,
    mix(0.4, 1.0, emphasis),
    CameraMatrices(
      projection,
      viewFromTexture,
      orthoFixedProjection,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );

  // apply a slight z offset to push edges back a bit
  position.z += 0.01 * position.w * bump(vertexOffset.x, 4.0, 0.125);
  
  // push back non-selected edges if there is any selected node, otherwise do nothing
  // position.z += 0.1 * position.w * isAnySelected * (1.0-pow(emphasis, 4.0)); //float(emphasis < 0.1);

  // colors
  vec4 sourceColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0);
  sourceColor = mix(sourceColor, selectedColor, float(selectedIndex == edgeIndices.x));
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0);
  targetColor = mix(targetColor, selectedColor, float(selectedIndex == edgeIndices.y));
  color += sourceColor*isSource;
  color += targetColor*isTarget;

  // desaturate the color if the emphasis is low
  color.rgb = desaturate(color.rgb, mix(1.0, 0.4, emphasis));
  color.a *= mix(0.7, 1.0, emphasis);
  

  // add fog using the NDC z coordinate
  // color.a *= 1.0 - clamp(position.z/position.w, 0.0, 1.0);

  gl_Position = position;
  y = vertexOffset.y;
  v = segmentPosition.y;

  // float distance = length(mousePosition - position.xy);
  // float nearness = bump(distance, 100.0, 20.0);
}
