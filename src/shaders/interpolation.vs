#version 300 es
precision lowp float;

layout(location=0) in vec3 currentPositions;
layout(location=1) in vec4 currentColors;
layout(location=2) in float currentSizes;
layout(location=3) in vec3 targetPositions;
layout(location=4) in vec4 targetColors;
layout(location=5) in float targetSizes;

out vec3 vUpdatedPositions;
out vec4 vUpdatedColors;
out float vUpdatedSizes;

uniform float uMixRatio;
uniform vec2 mousePosition;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  float nearness = bump(length(mousePosition - currentPositions.xy), 100.0, 20.0);
  float mixRatio = uMixRatio;
  vUpdatedSizes = mix(currentSizes, targetSizes, mixRatio);

  // increment the position toward the target by a constant amount
  vec3 delta = targetPositions - currentPositions;
  float distance = length(delta);

  vUpdatedPositions = currentPositions + normalize(delta)*min(0.005, distance/200.0);
  vUpdatedPositions = mix(currentPositions, targetPositions, mixRatio);
  // vUpdatedColors = mix(currentColors, targetColors, mixRatio);
  vUpdatedColors = targetColors;
}
