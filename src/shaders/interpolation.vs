#version 300 es

layout(location=0) in vec3 currentPositions;
layout(location=1) in vec4 currentColors;
layout(location=2) in float currentRadii;
layout(location=3) in vec3 targetPositions;
layout(location=4) in vec4 targetColors;
layout(location=5) in float targetRadii;

out vec3 vUpdatedPositions;
out vec4 vUpdatedColors;
out float vUpdatedRadii;

void main() {
  vUpdatedRadii = mix(currentRadii, targetRadii, 0.5);
  vUpdatedPositions = mix(currentPositions, targetPositions, 0.5);
  vUpdatedColors = mix(currentColors, targetColors, 0.5);
}
