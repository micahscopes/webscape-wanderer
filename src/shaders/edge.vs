#version 300 es
precision highp float;
precision highp int;

layout(location=0) in ivec2 edgeIndices;
layout(location=1) in vec3 segmentOffset;
layout(location=2) in lowp uint segmentParameter;


out vec4 color;
out float size;
out vec2 edgeDirection;
out float edgeLength;
out float isSource;
out float isTarget;
out float y;

uniform vec2 mousePosition;
// uniform vec2[6] segmentOffset;

// camera matrices
#include "graph-common.glsl"

uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform sampler2D sizeTexture;
uniform ivec2 textureDimensions;

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
  isSource = float(uint(1)-segmentParameter);
  isTarget = float(segmentParameter);
  
  vec4 position = vec4(0);

  vec3 sourceNodePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).xyz;
  vec3 targetNodePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).xyz;
  vec3 nodePosition = sourceNodePosition*isSource + targetNodePosition*isTarget;
  
  float sourceSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  float targetSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;
  size = sourceSize*isSource + targetSize*isTarget;
  
  vec4 targetPositionClip = projection * view * vec4(targetNodePosition, 1.0);
  vec4 sourcePositionClip = projection * view * vec4(sourceNodePosition, 1.0);
  
  edgeDirection = normalize(targetPositionClip.xy/targetPositionClip.w - sourcePositionClip.xy/sourcePositionClip.w);
  edgeLength = length(targetNodePosition.xyz - sourceNodePosition.xyz);

  position = edgeGeometry(
    nodePosition,
    segmentOffset,
    edgeDirection,
    size/5.0,
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
  position.z += 0.01*position.w;

  vec4 sourceColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0);
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0);
  color += sourceColor*isSource;
  color += targetColor*isTarget;
  // color.a *= 0.5;

  gl_Position = position;
  y = segmentOffset.y;

  float distance = length(mousePosition - position.xy);
  float nearness = bump(distance, 100.0, 20.0);

  // color = nodeColor;
  // color.xyz = normalize(color.xyz);
  // color.a *= nearness * 0.4;
  // color = nodeColor;
  // size = nodeSize;
  // color = vec4(0.5, 0.0, float(gl_InstanceID)/5.0, 1.0);
  // size = 1.0;
  // gl_Position = vec4(segmentOffset[gl_VertexID % 5]/10.0, 0.0, 1.0);

  
  // debug the source positions in clip space
  // vec4 debugPosition = vec4(sourcePosition+0.1*segmentOffset, 1.0);
  // gl_Position = debugPosition;
}
