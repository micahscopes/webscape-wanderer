import GUI from "lil-gui"

export const params = {
  globalScale: 1.0,
  nodeScale: 1.0,
  edgeScale: 8.0,
  edgeOvershoot: 1.5,
  edgeFog: 1.0,
  nodeFog: 1.0,
  edgeFrequency: 1.0,
  edgePulseSpeed: 1.0,
}

export const controls = document.createElement('div')!
const gui = new GUI({ container: controls, title: 'Webscape Wanderer' })
gui.close()

gui.add(params, 'globalScale', 0.1, 10.0, 0.1)

const nodes = gui.addFolder('Nodes')
// nodes.close()
const edges = gui.addFolder('Edges')
// edges.close()

nodes.add(params, 'nodeScale', 0.1, 10.0, 0.1)
edges.add(params, 'edgeScale', 0.1, 10.0, 0.1)
edges.add(params, 'edgeOvershoot', 0.1, 2.0, 0.1)
edges.add(params, 'edgeFog', 0.1, 10.0, 0.1)
nodes.add(params, 'nodeFog', 0.1, 10.0, 0.1)
edges.add(params, 'edgeFrequency', 0.1, 2.0, 0.1)
edges.add(params, 'edgePulseSpeed', 0.1, 10.0, 0.1)

export default gui;