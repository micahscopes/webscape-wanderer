import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import glsl from "vite-plugin-glsl";
import wasm from "vite-plugin-wasm";
import { resolve } from "path";
import fs from "fs";
import path from "path";

// Worker Chunk Plugin
function workerChunkPlugin() {
  return {
    name: "worker-chunk-plugin",
    apply: "build",
    enforce: "pre",
    async resolveId(source, importer, options) {
      if (source.endsWith("?worker")) {
        const resolved = await this.resolve(source.split("?")[0], importer, {
          ...options,
          skipSelf: true,
        });
        return resolved ? "\0" + resolved.id + "?worker-chunk" : null;
      }
    },
    load(id) {
      if (id.startsWith("\0") && id.endsWith("?worker-chunk")) {
        const referenceId = this.emitFile({
          type: "chunk",
          id: id.slice(1).split("?")[0],
          preserveSignature: "strict",
        });
        return `
          export default function WorkerWrapper() {
            return new Worker(
              import.meta.ROLLUP_FILE_URL_${referenceId},
              { type: "module" }
            );
          }
        `;
      }
    },
    outputOptions(options) {
      return {
        ...options,
        sourcemap: true,
        inlineDynamicImports: false,
      };
    },
  };
}

// Define your plugins
const plugins = [
  topLevelAwait({
    promiseExportName: "__tla",
    promiseImportName: (i) => `__tla_${i}`,
  }),
  glsl(),
  wasm(),
  workerChunkPlugin(),
];

// Export a function that returns the configuration based on the mode
export default defineConfig(({ mode }) => {
  // Common configuration shared between builds
  const commonConfig = {
    target: "es6",
    plugins,
    worker: {
      format: "es",
      plugins,
    },
    assetsInclude: ["**/*.obj"],
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
      },
      include: ["gpu-io", "three"],
    },
    server: {
      fs: {
        allow: ["../router", "../gpu-io", "."],
      },
    },
    resolve: {
      alias: {
        "three/webgpu": path.resolve(
          __dirname,
          "node_modules/three/build/three.webgpu",
        ),
        "three-obj-loader": path.resolve(
          __dirname,
          "node_modules/three/examples/jsm/loaders/OBJLoader.js",
        ),
      },
    },
    build: {
      minify: false, // Consider enabling for production
      modulePreload: false,
      sourcemap: true,
      target: "module",
    },
  };

  if (mode === "lib") {
    // Configuration for building the library
    return {
      ...commonConfig,
      build: {
        ...commonConfig.build,
        lib: {
          entry: resolve(__dirname, "src/main.ts"),
          name: "WebscapeWanderer",
          fileName: "webscape-wanderer",
          formats: ["es"],
        },
      },
    };
  } else {
    // Configuration for building the examples
    return {
      ...commonConfig,
      base: "/webscape-wanderer/",
      build: {
        ...commonConfig.build,
        rollupOptions: {
          input: {
            // Automatically include all HTML files in the ./examples directory
            ...getExampleInputs(),
          },
          output: {
            manualChunks(id) {
              // You can define manual chunks here if needed
              // For example, to vendor large dependencies:
              // if (id.includes('node_modules/large-dependency')) {
              //   return 'vendor-large-dependency';
              // }
            },
          },
        },
      },
      publicDir: resolve(__dirname, "assets"),
    };
  }
});

// Helper function to get all HTML files in the ./examples directory
function getExampleInputs() {
  const examplesDir = path.resolve(__dirname, "examples");
  const exampleFiles = fs.readdirSync(examplesDir);

  const inputs = {};

  exampleFiles.forEach((file) => {
    if (file.endsWith(".html")) {
      const name = path.basename(file, ".html");
      inputs[name] = path.resolve(examplesDir, file);
    }
  });

  return inputs;
}
