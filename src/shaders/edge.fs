#version 300 es
precision highp float;
in vec4 color;
in float radius;
out vec4 fragColor;

void main() {
  fragColor = color;
}