#version 300 es
precision lowp float;

layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeRadius;

out vec4 color;
out float radius;

uniform vec2 mousePosition;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  float nearness = bump(length(mousePosition - nodePosition.xy), 100.0, 20.0);
  color = nodeColor;
  color.xyz = normalize(color.xyz);
  color.a *= nearness;
  // color = nodeColor;
  radius = nodeRadius;
  gl_Position = vec4(nodePosition, 1.0);
}
