import { LessEqualDepth, MeshMatcapNodeMaterial, vec4 } from "three/webgpu";

export const graphEdgeMaterial = (ctx) => {
  return new MeshMatcapNodeMaterial({
    colorNode: vec4(1, 0, 0, 1),
    depthTest: false,
    depthWrite: true,
    depthFunc: LessEqualDepth,
    transparent: true,
    colorNode: vec4(1, 1, 0, 1),
  });
};
