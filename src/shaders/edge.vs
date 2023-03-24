#version 300 es
precision lowp float;

// a shader that visualizes nodes as spheres with position, color and radius

layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeRadius;

// layout(location=3) in vec3 vertexPosition;

out vec4 color;
out float radius;



void main() {
  color = nodeColor;
  radius = nodeRadius;
  // gl_PointSize = nodeRadius;
  gl_Position = vec4(nodePosition, 1.0);
}
