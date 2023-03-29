#version 300 es
precision lowp float;

// a shader that visualizes nodes as spheres with position, color and radius

layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeSize;

layout(location=3) in vec3 vertexPosition;
layout(location=4) in vec3 vertexNormal;

// uniform vec2 mousePosition;
uniform mat4 view;
uniform mat4 projection;

flat out vec4 pickerColor;

vec4 instanceIdToColor() {
  int instanceId = gl_InstanceID+1;
  float r = float(instanceId & 0x0000FF) / 255.0;
  float g = float((instanceId & 0x00FF00) >> 8) / 255.0;
  float b = float((instanceId & 0xFF0000) >> 16) / 255.0;

  return vec4(r, g, b, 1.0);
}

void main() {
  pickerColor = instanceIdToColor();

  // vec4 pickerColor = vec4(1.0, 0.0, 0.0, 1.0);
  vec3 position = nodePosition + vertexPosition*nodeSize;
  vec4 clipPosition = projection * view * vec4(position, 1.0);
  gl_Position = clipPosition;
}
