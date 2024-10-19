import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import glsl from "vite-plugin-glsl";
import wasm from "vite-plugin-wasm";
import { resolve } from "path";
// const fs = require("fs");
// const path = require("path");
import fs from "fs";
import path from "path";

// Define your plugins once to reuse them
const plugins = [
  topLevelAwait({
    promiseExportName: "__tla",
    promiseImportName: (i) => `__tla_${i}`,
  }),
  glsl(),
  wasm(),
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
      include: ["gpu-io"],
    },
    server: {
      fs: {
        allow: ["../router", "../gpu-io", "."],
      },
    },
  };

  if (mode === "lib") {
    // Configuration for building the library
    return {
      ...commonConfig,
      build: {
        sourcemap: true,
        lib: {
          entry: resolve(__dirname, "src/main.ts"),
          name: "WebscapeWanderer",
          fileName: "webscape-wanderer",
        },
      },
    };
  } else {
    // Configuration for building the examples
    return {
      ...commonConfig,
      build: {
        rollupOptions: {
          input: {
            // Automatically include all HTML files in the ./examples directory
            ...getExampleInputs(),
          },
        },
      },
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
