import GUI from "lil-gui"
import { state } from "./state";
import moize from "moize";

export const defaultAttributes = {
  globalScale: 1.0,
  nodeScale: 1.0,
  edgeScale: 1.0,
  edgeOvershoot: 1.25,
  edgeFog: 1.0,
  nodeFog: 1.0,
  edgeFrequency: 2.0,
  edgePulseSpeed: 1.0,
  edgeWaveSpeed: 1.0,
}

export const getAttributes = ctx => state(ctx, "attributes", () => structuredClone(defaultAttributes)).get();

const getGui = ctx => state(ctx, 'gui', () => {
  const controls = document.createElement('div')!
  const gui = new GUI({ container: controls, title: 'Webscape Wanderer' })
  const nodes = gui.addFolder('Nodes')
  const edges = gui.addFolder('Edges')

  const attrs = getAttributes(ctx)
  nodes.add(attrs, 'nodeScale', 0.1, 10.0, 0.1)
  edges.add(attrs, 'edgeScale', 0.1, 10.0, 0.1)
  edges.add(attrs, 'edgeOvershoot', 0.1, 2.0, 0.1)
  edges.add(attrs, 'edgeFog', 0.0, 1.0, 0.1)
  nodes.add(attrs, 'nodeFog', 0.0, 1.0, 0.1)
  edges.add(attrs, 'edgeFrequency', 0.1, 2.0, 0.1)
  edges.add(attrs, 'edgePulseSpeed', 0.1, 20.0, 0.1)
  edges.add(attrs, 'edgeWaveSpeed', 0.1, 100.0, 0.1);

  return gui
})

export default getGui;