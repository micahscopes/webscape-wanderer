layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeSize;

layout(location=3) in vec3 vertexPosition;
layout(location=4) in vec3 vertexNormal;

uniform vec2 mousePosition;

// camera matrices
uniform cameras {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

uniform int selectedIndex;

#ifdef PICKER
  flat out vec4 color;
#else
  out vec4 color;
#endif

out vec3 position;
out vec3 normal;

#include "bump.glsl"

void main() {
  vec4 globalClipPosition = projection * view * vec4(nodePosition, 1.0);
  vec3 globalNDC = globalClipPosition.xyz / globalClipPosition.w;

  // compute the nearness of the node to the mouse position
  float distance = length(globalNDC.xy - mousePosition);
  float nearness = bump(distance, 2.0, 1.0);

  float scale = nodeSize/50.0;
  vec4 orthoFixedClipPosition = orthoFixedProjection * orthoFixedView * vec4(vertexPosition*scale, 1.0);
  vec3 orthoFixedNDC = orthoFixedClipPosition.xyz / orthoFixedClipPosition.w;
  
  vec4 orthoZoomedClipPosition = orthoZoomedProjection * orthoZoomedView * vec4(vertexPosition*scale, 1.0);
  vec3 orthoZoomedNDC = orthoZoomedClipPosition.xyz / orthoZoomedClipPosition.w;

  vec3 localNDC = mix(orthoZoomedNDC, orthoFixedNDC, 1.0-nearness);

  // here's the trick, combine in NDC space in a way that preserves depth
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.2 );
  // then convert back to clip space
  vec4 orthographicClipPosition = vec4(orthographicNDC * globalClipPosition.w, globalClipPosition.w);

  vec4 clipPosition = orthographicClipPosition;
  
  vec4 selectedColor = vec4(1.0, 1.0, 1.0, 1.0);
  
  #ifdef PICKER
    color = instanceIdToColor();
  #else
    color = mix(nodeColor, selectedColor, float(gl_InstanceID == selectedIndex));
  #endif

  normal = mat3(orthoFixedView) * vertexNormal;
  gl_Position = clipPosition;
}
