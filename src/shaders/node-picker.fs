#version 300 es
precision lowp float;

flat in vec4 color;
out vec4 fragColor;

void main() {
  fragColor = color;
}