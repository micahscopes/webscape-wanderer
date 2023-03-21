import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import wasm from "vite-plugin-wasm";

export default defineConfig({
  plugins: [
    wasm(), 
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  worker: {
    format: "es",
  },
  base: "/dat-garden-visualization/",
  esbuild:{
    target:"es2018"
  }
});
