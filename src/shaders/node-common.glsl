in vec3 vertexPosition;
in vec3 vertexNormal;
in int index;

#include "graph-common.glsl"

uniform vec2 mousePosition;

uniform int selectedIndex;
uniform vec4 selectedColor;

uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform sampler2D sizeTexture;
uniform sampler2D emphasisTexture;

uniform ivec2 textureDimensions;

#ifdef PICKER
  flat out vec4 color;
#else
  out vec4 color;
#endif

out vec3 position;
out vec3 normal;


#include "bump.glsl"

void main() {
  int id = int(index);
  
  vec3 nodePosition = texelFetch(positionTexture, getTextureIndex(id, textureDimensions), 0).xyz;
  vec4 nodeColor = texelFetch(colorTexture, getTextureIndex(id, textureDimensions), 0);
  float nodeSize = texelFetch(sizeTexture, getTextureIndex(id, textureDimensions), 0).r;
  float nodeEmphasis = texelFetch(emphasisTexture, getTextureIndex(id, textureDimensions), 0).r;

  float scale = nodeSize;
  float isSelected = float(index == selectedIndex);
  scale *= mix(1.0, 1.1, isSelected);
  
  #ifdef PICKER
    scale *= 1.3;
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
  
  #ifdef PICKER
    color = instanceIdToColor();
  #else
    color = mix(nodeColor, selectedColor, float(index == selectedIndex));
  #endif

  normal = mat3(orthoFixedView) * vertexNormal;
  gl_Position = clipPosition;
}
