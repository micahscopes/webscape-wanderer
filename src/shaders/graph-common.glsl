// camera matrices
uniform cameras {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

struct CameraMatrices {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

// Cameras cameras = Cameras(
//   projection,
//   view,
//   orthoFixedProjection,
//   orthoFixedView,
//   orthoZoomedProjection,
//   orthoZoomedView
// );

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
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.2 );
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

vec4 edgeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  in vec2 edgeDirection,
  float scale,
  in CameraMatrices cam
) {
  vec2 edgePerpendicular = vec2(-edgeDirection.y, edgeDirection.x) * scale;
  vec4 position = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec4 positionNDC = position / position.w;

  vec4 positionClip = vec4(position.xy + vertexPosition.y*1.0 * edgePerpendicular, position.zw);

  vec4 positionFixedStrokeNDC = positionNDC + vec4(vertexPosition.y * edgePerpendicular, 0.0, 0.0);
  vec4 positionFixedStrokeClip = positionFixedStrokeNDC * position.w;

  // return positionFixedStrokeClip;
  return mix(positionFixedStrokeClip, positionClip, 0.5);
}