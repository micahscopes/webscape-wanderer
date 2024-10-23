import { clamp, pow, exp, Fn, oneMinus } from "three/webgpu";

export const bump = (x, q, w) => {
  const clamped_x = clamp(x.div(w), -0.5, 0.5);
  const inner = oneMinus(pow(oneMinus(pow(clamped_x.mul(2), 2)), -1));
  const y = pow(exp(inner), q);
  return y;
};
