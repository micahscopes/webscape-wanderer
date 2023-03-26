import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import glsl from 'vite-plugin-glsl';
import wasm from "vite-plugin-wasm";

export default defineConfig({
  plugins: [
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
    glsl(),
    wasm(), 
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  worker: {
    format: "es",
  },
  base: "/dat-garden-visualization/",
});
