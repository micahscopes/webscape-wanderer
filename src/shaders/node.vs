#version 300 es
precision lowp float;

// a shader that visualizes nodes as spheres with position, color and radius

layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeRadius;

layout(location=3) in vec3 vertexPosition;
layout(location=4) in vec3 vertexNormal;

uniform vec2 mousePosition;

// camera matrices
uniform mat4 view;
uniform mat4 projection;

flat out vec4 color;
out vec3 position;
out vec3 normal;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  position = nodePosition + vertexPosition/20.0*nodeRadius;
  // apply the camera matrices
  vec4 clipPosition = projection * view * vec4(position, 1.0);
  
  float distance = length(clipPosition.xy - mousePosition);

  // compute the nearness of the node to the mouse position
  float nearness = bump(distance, 100.0, 20.0);
  color = nodeColor;
  // color.xyz = normalize(color.xyz);

  // apply the camera matrices to the normal
  normal = mat3(view) * vertexNormal;

  gl_Position = clipPosition;

  // color.a *= nearness;
  // gl_PointSize = nodeRadius + 20.0*nearness; // * bump(length(mousePosition - nodePosition.xy));
  // gl_PointSize = nodeRadius;
}
