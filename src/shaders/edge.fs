#version 300 es
precision lowp float;
in vec4 color;
out vec4 fragColor;

void main() {
  fragColor = color;
  // fragColor.a = 1.0; 
}