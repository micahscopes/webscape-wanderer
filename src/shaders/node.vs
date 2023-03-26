#version 300 es
precision lowp float;

// a shader that visualizes nodes as spheres with position, color and radius

layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeRadius;

layout(location=3) in vec3 vertexPosition;

uniform vec2 mousePosition;

flat out vec4 color;
flat out vec3 position;

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
  position = nodePosition;
  // gl_PointSize = nodeRadius + 20.0*nearness; // * bump(length(mousePosition - nodePosition.xy));
  gl_PointSize = nodeRadius;
  gl_Position = vec4(nodePosition+vertexPosition, 1.0);
}
