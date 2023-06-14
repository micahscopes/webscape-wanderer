# Webscape Wanderer

### An interactive visualization of the Dat community open source project ecosystem
With data is provided by https://github.com/dat-ecosystem/dat-garden-rake.

This visualization engine decouples layout, querying, rendering and animation for smooth performance!

_However:_ funny enough at the moment the code is completely coupled to the Dat Ecosystem data.

The goal is to make it useful for interactively visualizing any old graph data.  Check the [project goals](#features--project-goals) for more details.


### Architecture
In order to get smooth performance on mobile devices this tool uses web workers for just about everything except for rendering and uploading stuff to the GPU.  Web workers are used for:
  - running SPARQL queries on the graph data using [quadstore](https://github.com/belayeng/quadstore) and [quadstore-comunica](https://github.com/belayeng/quadstore-comunica)
  - animating the camera
  - computing the graph layout and sending it back to the main thread using `ArrayBuffer.transfer`

This means that even if the layout engine is taking five seconds for every frame, it's still possible to interact with the graph and visualize query results.

Additionally, data such as node positions and colors are smoothly interpolated on the GPU using the amazing [gpu-io](https://github.com/amandaghassaei/gpu-io) library.

Rendering happens with THREE.js via `InstancedBufferGeometry` and `RawShaderMaterial`.  Due to the custom camera it's not currently straightforward to use other THREE.js stuff with this, but maybe someday it will be!  Originally rendering was done with PicoGL but there were some difficult issues with WebGL state management.  Since GPU-IO cooperates well with THREE.js, it was easier to switch to THREE.js.

## Features & Project Goals
- [x] Basic instanced graph rendering
- [x] Hash-route based interaction and navigation
- [x] SPARQL query worker
- [x] Graph layout worker
- [x] Camera animation worker
- [x] GPU interpolation of graph data
- [ ] General purpose features and API
  - [ ] More formalized modularization of the architecture to support better pluggability.
  - [ ] Support generic graph data
  - [ ] Customization of node/edge rendering, geometry and animation
  - [ ] Dynamic graph data modification (add/remove nodes/edges)
  - [ ] Encapsulation to support multiple instances on the same page
  - [ ] Web component based interface
    - [ ] CSS styling interface
  - [ ] Friendlier node property modification API
  - [ ] Friendlier SPARQL query API and helpers
  - [ ] Expose hooks for query-driven interaction
  - [ ] Dynamic graph layout interface, i.e. for animating between different layouts and layout engines
  - [ ] Support 2D layouts
  - [ ] GPU-based layout engine for very large graphs?
  - [ ] Further modularize architecture to support pluggability with other graph visualization libraries
  - [ ] Cooperation with other THREE.js stuff?
    - [ ] Support for small graphs and non-instanced rendering
- [ ] Examples and documentation
- [ ] GPU rendered cursors and UI feedback widgets (currently these are rendered as HTML element overlays)
- [ ] Implement PBO based picker pixel download for potentially better picker performance
- [ ] Less jittery camera (using AudioWorklet or GPU?)
  - [x] tried GPU interpolation and found that texture lookups for camera parameters were expensive
  - [ ] try using pixel buffer
- [ ] Investigate reading interpolated graph data from GPU-IO framebuffer to pixel buffers to reduce texture lookups in node and edge shaders
- [ ] Pin camera center to nodes or clusters of nodes
  - (potentially moving more of the camera stuff to the GPU)
- [ ] Investigate performance bottlenecks with the query worker
  - Currently it's not efficient to use the query worker to get lots of data, so we keep a copy of the graph data in the main thread for simple lookups
- [ ] Better edge rendering performance?
  - switching to from PicoGL to THREE.js gave a performance hit that seems to be related to edge rendering
- [ ] Support very large graphs
  - currently layout engines _seems_ to be the biggest bottleneck for large graphs
- [ ] better iOS/WebKit support: is it worth it?

### Building and deploying to GitHub Pages
First set up a git worktree for the `gh-pages` branch.  This only needs to be done once:
```
rm -rf dist
git worktree add -B gh-pages dist origin/gh-pages
```
Build the static files to the `dist` directory:
```
npm run build
```
Now push to the `gh-pages` branch:
```
cd dist
git add -A
git commit
git push
```

### Running the visualization
To run the visualization in development mode:
```
npm install
npm run dev
```
Then open the URL given in your browser (usually http://localhost:8888/)
