#version 300 es
precision highp float;
precision highp int;

layout(location=0) in vec3 currentPosition;
layout(location=1) in vec4 currentColor;
layout(location=2) in float currentSize;
layout(location=3) in float currentEmphasis;
layout(location=4) in vec3 targetPosition;
layout(location=5) in vec4 targetColor;
layout(location=6) in float targetSize;
layout(location=7) in float targetEmphasis;

layout(location=8) in uint vertexPosition;

out vec3 vTargetPosition;
out vec3 vUpdatedPosition;
out vec4 vUpdatedColor;
out float vUpdatedSize;
out float vUpdatedEmphasis;

uniform float uMixRatio;
uniform vec2 mousePosition;
uniform vec2 bufferDimensions;

flat out int vertexID;
flat out vec2 uv;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  vTargetPosition = targetPosition;
  float nearness = bump(length(mousePosition - currentPosition.xy), 100.0, 20.0);
  float mixRatio = uMixRatio;
  vUpdatedSize = mix(currentSize, targetSize, mixRatio);

  // increment the position toward the target by a constant amount
  vec3 delta = targetPosition - currentPosition;
  float distance = length(delta);

  vUpdatedPosition = currentPosition + normalize(delta)*min(0.005, distance/200.0);
  vUpdatedPosition = mix(currentPosition, targetPosition, mixRatio);
  vUpdatedColor = mix(currentColor, targetColor, mixRatio);
  vUpdatedEmphasis = mix(currentEmphasis, targetEmphasis, mixRatio);

  uint v = uint(gl_VertexID);
  // uint v = vertexPosition;
  vertexID = int(v);
  
  uv = vec2(
    float(int(v) % int(bufferDimensions.x)),
    float(int(v) / int(bufferDimensions.x))
  );
  
  uv = uv / float(bufferDimensions);
  uv += vec2(0.5/bufferDimensions.x, 0.5/bufferDimensions.y);
  
  // flip the y axis
  // uv.y = 1.0 - uv.y;
  
  gl_Position = vec4(uv*2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = 1.0;
  
}
