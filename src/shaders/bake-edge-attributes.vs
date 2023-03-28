#version 300 es
precision highp float;

layout(location=0) in vec3 nodePositions;
// in vec4 nodeColors;
// in float nodeSizes;

out vec3 v_position;
// out vec4 v_color;
// out float v_size;

void main() {
  v_position = nodePositions;
  // v_color = nodeColors;
  // v_size = nodeSizes;

  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 1.0;
}
