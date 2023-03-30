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

uniform cameras {
  mat4 projection;
  mat4 view;
};

uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform sampler2D radiusTexture;
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
  vec4 position = vec4(0);
  vec3 sourcePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).xyz;
  vec3 targetPosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).xyz;
  
  vec4 targetPositionClip = projection * view * vec4(targetPosition, 1.0);
  vec4 sourcePositionClip = projection * view * vec4(sourcePosition, 1.0);
  
  vec2 edgeDirectionClip = normalize(targetPositionClip.xy - sourcePositionClip.xy);
  vec2 edgePerpendicularClip = vec2(-edgeDirectionClip.y, edgeDirectionClip.x);

  vec4 sourceColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0);
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0);

  float isSource = float(segmentParameter);
  float isTarget = float(uint(1) - segmentParameter);
  
  // position = vec4(segmentOffset.y*10.0*edgePerpendicularClip, 0.0, 1.0);
  // position /= (targetPositionClip.w*isTarget + sourcePositionClip.w*isSource);

  position += sourcePositionClip*isSource;
  position += targetPositionClip*isTarget;
  
  vec4 positionNDC = position / position.w;
  
  vec4 positionFixedStrokeNDC = vec4(segmentOffset.y*0.002 * edgePerpendicularClip, 0.0, 0.0);
  vec4 positionFixedStrokeClip = positionFixedStrokeNDC * position.w;
  
  vec4 positionClip = vec4(position.xy + segmentOffset.y*1.0 * edgePerpendicularClip, position.zw);

  position = mix(positionFixedStrokeClip, positionClip, 0.8);
  // position.x = max(position.x, positionFixedStrokeClip.x);
  // position.y = max(position.x, positionFixedStrokeClip.y);
   

  color += sourceColor*isSource;
  color += targetColor*isTarget;
  // color.a *= 0.5;

  gl_Position = position;

  float distance = length(mousePosition - position.xy);
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
