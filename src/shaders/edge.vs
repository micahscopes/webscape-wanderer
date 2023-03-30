#version 300 es
precision highp float;
precision highp int;

layout(location=0) in ivec2 edgeIndices;
layout(location=1) in vec3 segmentOffset;
layout(location=2) in lowp uint segmentParameter;

out vec4 color;
out float radius;

uniform vec2 mousePosition;
// uniform vec2[6] segmentOffset;

// camera matrices
uniform mat4 view;
uniform mat4 projection;
uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform ivec2 textureDimensions;

// given an index, return the corresponding position
ivec2 getTextureIndex(int index) {
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
  vec3 position;
  vec3 sourcePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.x), 0).xyz;
  vec3 targetPosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.y), 0).xyz;

  vec4 sourceColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.x), 0);
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y), 0);
  
  position = segmentOffset*5.0;

  float isSource = float(segmentParameter);
  float isTarget = float(uint(1) - segmentParameter);

  position += sourcePosition*isSource;
  position += targetPosition*isTarget;

  color += sourceColor*isSource;
  color += targetColor*isTarget;

  vec4 clipPosition = projection * view * vec4(position, 1.0);
  gl_Position = clipPosition;

  float distance = length(mousePosition - clipPosition.xy);
  float nearness = bump(distance, 100.0, 20.0);

  // color = nodeColor;
  // color.xyz = normalize(color.xyz);
  // color.a *= nearness * 0.4;
  // color = nodeColor;
  // radius = nodeSize;
  // color = vec4(0.5, 0.0, float(gl_InstanceID)/5.0, 1.0);
  radius = 1.0;
  // gl_Position = vec4(segmentOffset[gl_VertexID % 5]/10.0, 0.0, 1.0);

  
  // debug the source positions in clip space
  // vec4 debugPosition = vec4(sourcePosition+0.1*segmentOffset, 1.0);
  // gl_Position = debugPosition;
}
