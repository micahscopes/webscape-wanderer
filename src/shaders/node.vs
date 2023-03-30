#version 300 es
precision highp float;
precision highp int;

// a shader that visualizes nodes as spheres with position, color and radius

layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeSize;

layout(location=3) in vec3 vertexPosition;
layout(location=4) in vec3 vertexNormal;

uniform vec2 mousePosition;

// camera matrices
uniform mat4 view;
uniform mat4 projection;
uniform mat4 localView;
uniform mat4 localProjection;
uniform int selectedIndex;

flat out vec4 color;
out vec3 position;
out vec3 normal;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  // position = nodePosition + vertexPosition*nodeSize;
  // apply the camera matrices
  // vec4 clipPosition = localProjection * view * vec4(nodePosition + vertexPosition*nodeSize, 1.0);
  // vec4 clipPosition =
  //   vec4(0)
  //   + localProjection * localView * vec4(vertexPosition, 1.0)
  //   + projection * view * vec4(nodePosition, 1.0);

  vec4 globalClipPosition = projection * view * vec4(nodePosition, 1.0);
  vec3 globalNDC = globalClipPosition.xyz / globalClipPosition.w;

  // compute the nearness of the node to the mouse position
  float distance = length(globalNDC.xy - mousePosition);
  float nearness = bump(distance, 2.0, 1.0);

  float scale = nodeSize/50.0; //*(1.0 - 0.5*nearness);
  vec4 localClipPosition = localProjection * localView * vec4(vertexPosition*scale, 1.0);
  vec3 localNDC = localClipPosition.xyz / localClipPosition.w;
  
  // here's the trick, we combine the local and global NDCs in xy and z separately
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 1.0)*0.5 );
  vec4 orthographicClipPosition = vec4(orthographicNDC * globalClipPosition.w, globalClipPosition.w);

  vec4 perspectiveClipPosition = projection * view * vec4(nodePosition + vertexPosition*nodeSize, 1.0);
  vec3 perspectiveNDC = perspectiveClipPosition.xyz / perspectiveClipPosition.w;

  // vec3 finalNDC = mix(orthographicNDC, perspectiveNDC, nearness);
  // vec4 finalClipPosition = vec4(finalNDC * globalClipPosition.w, globalClipPosition.w);
  // vec4 clipPosition = mix(orthographicClipPosition, perspectiveClipPosition, nearness);
  
  vec4 clipPosition = orthographicClipPosition;
  
  vec4 selectedColor = vec4(1.0, 1.0, 1.0, 1.0);
  color = mix(nodeColor, selectedColor, float(gl_InstanceID == selectedIndex));
  // color.xyz = normalize(color.xyz);

  // apply the camera matrices to the normal
  normal = mat3(localView) * vertexNormal;

  gl_Position = clipPosition;

  // color.a *= nearness;
  // gl_PointSize = nodeSize + 20.0*nearness; // * bump(length(mousePosition - nodePosition.xy));
  // gl_PointSize = nodeSize;
}
