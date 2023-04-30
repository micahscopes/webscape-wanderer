// camera matrices
uniform cameras {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
  float distance;
  vec3 center;
  vec3 rotationCenter;
};

uniform int selectedIndex;
uniform vec4 selectedColor;
#include "bump.glsl"

float defaultFogVisibility = 0.3;
float defaultFogBoundaryClipZ = 1000.0;

// preliminary fog, needs organization
float computeFog(float positionClipZ, float fogBoundaryClipZ) {
  float fogLevel = 1.0 - bump(positionClipZ, 1.0, fogBoundaryClipZ);
  fogLevel = mix(
    fogLevel, 
    0.0,
    smoothstep(400.0, 800.0, distance)
  );
  
  return fogLevel;
}

struct CameraMatrices {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

struct NodeGeometryBundle {
  vec3 globalNDC;
  vec4 globalClipPosition;
  vec4 orthoFixedClipPosition;
  vec4 orthoZoomedClipPosition;
  vec4 orthographicClipPosition;
};

NodeGeometryBundle nodeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  float scale,
  in CameraMatrices cam
) {
  vec4 globalClipPosition = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec3 globalNDC = globalClipPosition.xyz / globalClipPosition.w;

  vec4 orthoFixedClipPosition = cam.orthoFixedProjection * cam.orthoFixedView * vec4(vertexPosition*scale, 1.0);
  vec3 orthoFixedNDC = orthoFixedClipPosition.xyz / orthoFixedClipPosition.w;
  
  vec4 orthoZoomedClipPosition = cam.orthoZoomedProjection * cam.orthoZoomedView * vec4(vertexPosition*scale, 1.0)*0.5;
  vec3 orthoZoomedNDC = orthoZoomedClipPosition.xyz / orthoZoomedClipPosition.w;

  vec3 localNDC = mix(orthoZoomedNDC, orthoFixedNDC, 0.5);

  // here's the trick, combine in NDC space in a way that preserves depth
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.0001 );
  // then convert back to clip space
  vec4 orthographicClipPosition = vec4(orthographicNDC * globalClipPosition.w, globalClipPosition.w);
  
  return NodeGeometryBundle(
    globalNDC,
    globalClipPosition,
    orthoFixedClipPosition,
    orthoZoomedClipPosition,
    orthographicClipPosition
  );
}

// given an index, return the corresponding position
ivec2 getTextureIndex(int index, ivec2 textureDimensions) {
  int textureLength = textureDimensions.x * textureDimensions.y;
  // index = textureLength - index;

  // get the x and y coordinates of the pixel
  int x = index % textureDimensions.x;
  int y = index / textureDimensions.x;

  return ivec2(x,y);
}
