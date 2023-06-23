import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from 'vite'
// import { nodePolyfills } from 'vite-plugin-node-polyfills'
import glsl from 'vite-plugin-glsl';
import wasm from "vite-plugin-wasm";
// import ObjFileImport from 'unplugin-obj/vite';

const plugins = [
  topLevelAwait({
    promiseExportName: "__tla",
    promiseImportName: i => `__tla_${i}`
  }),
  glsl(),
  wasm(), 
  // ObjFileImport(),
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
  base: "/webscape-wanderer/",
  assetsInclude: [
    '**/*.obj'
  ],
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis',
        },
    },
    include: [
      // necessary because gpu-io only builds a UMD module
      "gpu-io"
    ]
},
  server: {
    fs: {
      allow: ['../router', '../gpu-io', '.'],
    },
  },

  //base: "./", // this relies on `import.meta`, which doesn't work in workers on firefox/webkit
});
