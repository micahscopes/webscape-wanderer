#version 300 es
precision highp float;

in vec3 v_position;
// in vec4 v_color;
// in float v_size;

layout(location = 0) out vec3 position;
// layout(location = 1) out vec4 color;
// layout(location = 2) out float size;

void main() {
  position = v_position;
  // position = vec4(1.0);
  // color = v_color;
  // size = v_size;
}
