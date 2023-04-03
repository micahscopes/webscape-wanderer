#version 300 es
precision lowp float;

// a shader that visualizes nodes as spheres with position, color and radius
vec4 instanceIdToColor() {
  int instanceId = gl_InstanceID+1;
  float r = float(instanceId & 0x0000FF) / 255.0;
  float g = float((instanceId & 0x00FF00) >> 8) / 255.0;
  float b = float((instanceId & 0xFF0000) >> 16) / 255.0;

  return vec4(r, g, b, 1.0);
}

#define PICKER
#include "node-common.glsl"