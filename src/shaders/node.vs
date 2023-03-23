#version 300 es

// a shader that visualizes nodes as spheres with position, color and radius

layout(location=0) in vec3 currentPositions;
layout(location=1) in vec4 currentColors;
layout(location=2) in float currentRadii;

void main() {
  gl_Position = vec4(currentPositions, 1.0);
}
