#version 300 es
precision lowp float;
flat in vec4 color;
out vec4 fragColor;

void main() {
  fragColor = vec4(0,1,0,0.05);
}