#version 300 es
precision highp float;
precision highp int;

in vec3 vUpdatedPosition;
in vec3 vTargetPosition;
in vec4 vUpdatedColor;
in float vUpdatedSize;

flat in int vertexID;

// output to framebuffers
layout(location = 1) out vec4 position;
layout(location = 2) out vec4 color;
layout(location = 3) out vec4 size;

uniform vec2 bufferDimensions;

void main() {
  position = vec4(vUpdatedPosition, 1.0);
  
  // if (vertexID == 0 || vertexID == int(bufferDimensions.x*bufferDimensions.x)-9) {
  //   position = vec4(0,0.5,0.5,1);
  // }

  color = vUpdatedColor;
  size = vec4(vUpdatedSize,0,0,1);
}
