#version 300 es
precision highp float;
precision highp int;

layout(location=0) in ivec2 edgeIndices;
layout(location=1) in vec3 segmentOffset;
layout(location=2) in lowp uint segmentParameter;


out vec4 color;
flat out vec4 sourceColor;
flat out vec4 targetColor;
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

// given an index, return the corresponding position
ivec2 getTextureIndex(int index, ivec2 textureDimensions) {
  int textureLength = textureDimensions.x * textureDimensions.y;
  // index = textureLength - index;

  // get the x and y coordinates of the pixel
  int x = index % textureDimensions.x;
  int y = index / textureDimensions.x;

  return ivec2(x,y);
}

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  isSource = segmentOffset.x;
  isTarget = 1.0-segmentOffset.x;
  
  position = vec4(0);
  vec3 vertexOffset = segmentOffset + vec3(0.0, -0.5, 0.0);

  vec3 sourceNodePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).xyz;
  vec3 targetNodePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).xyz;
  vec3 nodePosition = sourceNodePosition*isSource + targetNodePosition*isTarget;
  
  float sourceSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  float targetSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;

  size = sourceSize*isSource + targetSize*isTarget;
  size *= 0.1;
  
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
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0);
  color += sourceColor*isSource;
  color += targetColor*isTarget;
  
  float sourceEmphasis = texelFetch(emphasisTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  float targetEmphasis = texelFetch(emphasisTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;

  emphasis = sourceEmphasis*isSource + targetEmphasis*isTarget;

  // color = mix(sourceColor, targetColor, segmentOffset.x*(-1.0*isSource));
  
  // color = smoothstep(sourceColor, targetColor, vec4(vertexOffset.x)); 
  

  // add fog using the NDC z coordinate
  // color.a *= 1.0 - clamp(position.z/position.w, 0.0, 1.0);

  gl_Position = position;
  y = vertexOffset.y;
  v = segmentOffset.y;

  float distance = length(mousePosition - position.xy);
  // float nearness = bump(distance, 100.0, 20.0);
}
