#version 300 es
precision lowp float;

flat in vec4 pickerColor;
out vec4 fragColor;

void main() {
  fragColor = pickerColor;
  // fragColor = vec4(1.0, 0.0, 0.0, 1.0);
}