import GUI from "lil-gui";
import { state } from "./state";
import { getComponent } from "./context";
import moize from "moize";

export const defaultProperties = {
  globalScale: 1.0,
  nodeScale: 1.0,
  edgeFog: 1.0,
  nodeFog: 1.0,
  edgeScale: 1.0,
  edgeOvershoot: 1.25,
  edgeFrequency: 2.0,
  edgePulseSpeed: 1.0,
  edgeWaveSpeed: 1.0,
  focus: -1,
  selected: -1,
  defaultFogVisibility: 0.3,
  defaultFogBoundaryClipZ: 700.0,
  focusedZoom: 100,
  unfocusedZoom: 500,
  zoomBoundary: 200,
};

export const getPropertyKeys = (ctx) =>
  Object.keys(getComponent(ctx).constructor.properties);

export const getProperties = moize.infinite((ctx) => {
  const component = getComponent(ctx);
  return Object.fromEntries(
    getPropertyKeys(ctx).map((key) => [key, component[key]]),
  );
});

const getGui = (ctx) =>
  state(ctx, "gui", () => {
    const controls = document.createElement("div")!;
    const gui = new GUI({ container: controls, title: "Webscape Wanderer" });
    const nodes = gui.addFolder("Nodes");
    const edges = gui.addFolder("Edges");

    const attrs = getProperties(ctx);
    gui.add(attrs, "globalScale", 0.1, 10.0, 0.1);
    gui.add(attrs, "defaultFogVisibility", 0.0, 1.0, 0.1);
    gui.add(attrs, "defaultFogBoundaryClipZ", 0.0, 1000.0, 10.0);

    nodes.add(attrs, "nodeScale", 0.1, 10.0, 0.1);
    edges.add(attrs, "edgeFog", 0.0, 1.0, 0.1);
    nodes.add(attrs, "nodeFog", 0.0, 1.0, 0.1);
    edges.add(attrs, "edgeScale", 0.1, 10.0, 0.1);
    edges.add(attrs, "edgeOvershoot", 0.1, 2.0, 0.1);
    edges.add(attrs, "edgeFrequency", 0.1, 2.0, 0.1);
    edges.add(attrs, "edgePulseSpeed", 0.1, 20.0, 0.1);
    edges.add(attrs, "edgeWaveSpeed", 0.1, 100.0, 0.1);
    return gui;
  });

export default getGui;
