in vec3 vertexPosition;
in vec3 vertexNormal;
in int index;

#include "graph-common.glsl"

uniform vec2 mousePosition;

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

#include "desaturate.glsl"

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
    scale = max(scale, 0.05);
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
  // float distance = length(geo.globalNDC.xy - mousePosition);
  // float nearness = bump(distance, 2.0, 1.0);
  

  vec4 clipPosition = geo.orthographicClipPosition;
  
  #ifdef PICKER
    color = instanceIdToColor();
  #else
    color = mix(nodeColor, selectedColor*1.4, float(index == selectedIndex));

    // distance to selected node
    vec3 selectedNodePosition = texelFetch(positionTexture, getTextureIndex(selectedIndex, textureDimensions), 0).xyz;

    float fogVisibility = 0.2;

    // if a node is selected, we want to emphasize the nodes that are close to it
    float selectedDistance = length(nodePosition - selectedNodePosition);
    float anythingSelected = float(selectedIndex > -1);
    // color.rgb *= mix(fogVisibility, 1.0, bump(selectedDistance*anythingSelected, 1.0, 1000.0));
    
    float fog = min(computeFog(geo.globalClipPosition.z, defaultFogBoundaryClipZ), 1.0-isSelected);
    fog = min(fog, 1.0-nodeEmphasis);
    color.rgb *= mix(1.0, 0.5, fog);
    color.rgb = desaturate(color.rgb, (1.0-fogVisibility)*fog);
    
    
  #endif

  normal = mat3(orthoFixedView) * vertexNormal;
  gl_Position = clipPosition;
}
