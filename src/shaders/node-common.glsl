layout(location=0) in vec3 nodePosition;
layout(location=1) in vec4 nodeColor;
layout(location=2) in float nodeSize;

layout(location=3) in vec3 vertexPosition;
layout(location=4) in vec3 vertexNormal;

#include "graph-common.glsl"

uniform vec2 mousePosition;

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
  float scale = nodeSize;
  float isSelected = float(gl_InstanceID == selectedIndex);
  scale *= mix(1.0, 1.1, isSelected);
  
  #ifdef PICKER
    scale *= 1.25;
  #endif

  NodeGeometryBundle geo = nodeGeometry(
    nodePosition,
    vertexPosition,
    scale,
    CameraMatrices(
      projection,
      view,
      orthoFixedProjection,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );
  
  // compute the nearness of the node to the mouse position
  float distance = length(geo.globalNDC.xy - mousePosition);
  float nearness = bump(distance, 2.0, 1.0);

  vec4 clipPosition = geo.orthographicClipPosition;
  
  vec4 selectedColor = vec4(1.0, 1.0, 1.0, 1.0);
  
  #ifdef PICKER
    color = instanceIdToColor();
  #else
    color = mix(nodeColor, selectedColor, float(gl_InstanceID == selectedIndex));
  #endif

  normal = mat3(orthoFixedView) * vertexNormal;
  gl_Position = clipPosition;
}
