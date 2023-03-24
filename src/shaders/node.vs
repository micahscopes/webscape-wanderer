#version 300 es
precision lowp float;

// a shader that visualizes nodes as spheres with position, color and radius

layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeRadius;

layout(location=3) in vec3 vertexPosition;

flat out vec4 color;

void main() {
  color = nodeColor;
  gl_PointSize = nodeRadius;
  gl_Position = vec4(nodePosition+vertexPosition, 1.0);
}
