import { state } from "./state";

export const setComponent = (ctx, component) => {
  state(ctx, "component").set(component);
}

export const getComponent = (ctx) => {
  return state(ctx, "component").get();
}