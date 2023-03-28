#version 300 es
precision highp float;

layout(location=0) in vec3 segmentOffset;
layout(location=1) in ivec2 edgeIndices;
// layout(location=1) in vec4 nodeColor;
// layout(location=2) in float nodeSize;
// layout(location=3) in vec3 vPosition;

out vec4 color;
out float radius;

uniform vec2 mousePosition;
// uniform vec2[6] segmentOffset;

// camera matrices
uniform mat4 view;
uniform mat4 projection;
uniform sampler2D positionTexture;
uniform int[2] textureDimensions;

// given an index, return the corresponding position
vec3 getPosition(int index) {
  // get the x and y coordinates of the pixel
  int x = index % textureDimensions[0];
  int y = index / textureDimensions[1];
  // get the pixel value
  vec4 pixel = texelFetch(positionTexture, ivec2(x, y), 0);
  // vec4 pixel = vec4(0.0, 0.0, 0.0, 0.0);
  // convert to a 3D position
  return pixel.xyz;
  // return vec3(float(x), float(y), 0.0);
}

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  vec3 position;
  // Using gl_VertexID to determine which position attribute to use
  
  // color=vec4(float(gl_VertexID % 3 == 0), float(gl_VertexID % 3 == 1), float(gl_VertexID % 3 == 2), 1.0);
  
  position = segmentOffset*10.0;
  position += getPosition(edgeIndices.x);


  // use `nodePosition` for the first two triangles and `nodePositionShift` for the third
  // vec3 position = mix(nodePosition, nodePositionShift, 1.0 - float(gl_VertexID % 3));
  
  //use `nodePosition` for the first vertex and `nodePositionShift` for the second
  // vec3 position = mix(nodePosition, nodePositionShift, 1.0-float(gl_VertexID % 2));
  
  // vec3 position = nodePositionShift;
  // position = nodePosition;

  // vec3 position = nodePositionShift;
  // vec3 offset = vec3(segmentOffset[gl_VertexID % 3], 0.0);
  vec4 clipPosition = projection * view * vec4(position, 1.0);

  float distance = length(mousePosition - clipPosition.xy);
  float nearness = bump(distance, 100.0, 20.0);

  // color = nodeColor;
  // color.xyz = normalize(color.xyz);
  // color.a *= nearness * 0.4;
  // color = nodeColor;
  // radius = nodeSize;
  color = vec4(1.0, 1.0, 1.0, 1.0);
  radius = 1.0;
  // gl_Position = vec4(segmentOffset[gl_VertexID % 5]/10.0, 0.0, 1.0);
  gl_Position = clipPosition;
  // gl_Position = vec4(nodePosition, 1.0);
}
