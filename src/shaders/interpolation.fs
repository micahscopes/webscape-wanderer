#version 300 es
precision highp float;

in vec3 vUpdatedPosition;
in vec4 vUpdatedColor;
in float vUpdatedSize;

in vec2 vertexCoordinates;

// output to framebuffers
layout(location = 1) out vec3 position;
layout(location = 2) out vec4 color;
layout(location = 3) out float size;

uniform vec2 bufferDimensions;

flat in vec2 uv;
flat in int vertexID;

void main() {
  position = vUpdatedPosition;
  color = vUpdatedColor;
  size = vUpdatedSize;
}
