import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from 'vite'
// import { nodePolyfills } from 'vite-plugin-node-polyfills'
import glsl from 'vite-plugin-glsl';
import wasm from "vite-plugin-wasm";

const plugins = [
  topLevelAwait({
    promiseExportName: "__tla",
    promiseImportName: i => `__tla_${i}`
  }),
  glsl(),
  wasm(), 
  //nodePolyfills({
  //  protocolImports: true,
  //}),
]

export default defineConfig({
  target: "es6",
  plugins,
  worker: {
    format: "es",
    plugins
  },
  base: "/dat-garden-visualization/",
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis',
        },
    },
},
  server: {
    fs: {
      allow: ['../router', '.'],
    },
  },

  //base: "./", // this relies on `import.meta`, which doesn't work in workers on firefox/webkit
});