import { mix, float } from "three/webgpu";

export const desaturate = /*@__PURE__*/ (color, amount) => {
  const average = color.r.add(color.g).add(color.b).div(3.0);
  return mix(color, average.toVec3(), amount);
};

// export default desaturate;
