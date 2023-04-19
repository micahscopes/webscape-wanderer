import moize from "moize";
import { getGPUComposer } from "./rendering";
import { FLOAT, GPULayer, GPULayerType, GPULayerNumComponents, GPUProgram, INT } from "gpu-io";
import { App } from "picogl";
import { renderRGBProgram } from "gpu-io/dist/types/Programs";
import { Texture } from "three";

export const getLayers = (name, {
  type = FLOAT as GPULayerType,
  numComponents = 1 as GPULayerNumComponents, 
  dimensions = 1,
} = {}) => {
  const gpuComposer = getGPUComposer();

  const current = new GPULayer(gpuComposer, {
    name: `current_${name}`,
    type, dimensions, numComponents,
    numBuffers: 2,
  })
  
  const target = new GPULayer(gpuComposer, {
    name: `target_${name}`,
    type, dimensions, numComponents,
    numBuffers: 1,
  })

  const targetTexture = new Texture()
  target.attachToThreeTexture(targetTexture)
  
  const view = new GPULayer(gpuComposer, {
    name: `view_${name}`,
    type, dimensions, numComponents,
    numBuffers: 1,
  })
  const viewTexture = new Texture()
  view.attachToThreeTexture(viewTexture)
  
  return { current, target, view, viewTexture, targetTexture }
}

export const getPositionLayers = moize.infinite(() => getLayers('position', { numComponents: 3}));
export const getColorLayers = moize.infinite(() => getLayers('color', { numComponents: 4}));
export const getSizeLayers = moize.infinite(() => getLayers('size', { numComponents: 1}));
export const getEmphasisLayers = moize.infinite(() => getLayers('emphasis', { numComponents: 1}));

export const setAllLayerSizes = (size) => {
  const layers = [
    getPositionLayers(),
    getColorLayers(),
    getSizeLayers(),
    getEmphasisLayers(),
  ]

  layers.forEach(({ current, target, view, viewTexture, targetTexture }) => {
    current.resize(size)
    target.resize(size)
    target.attachToThreeTexture(targetTexture)
    view.resize(size)
    view.attachToThreeTexture(viewTexture)
  })
}

export const getInterpolationProgram = moize.infinite(() => {
  return new GPUProgram(getGPUComposer(), {
    name: 'interpolation',
    fragmentShader: `
      in vec2 v_uv;

      // the current and target textures
      uniform sampler2D uTargetPositions;
      uniform sampler2D uCurrentPositions;
      uniform sampler2D uTargetColors;
      uniform sampler2D uCurrentColors;
      uniform sampler2D uTargetSizes;
      uniform sampler2D uCurrentSizes;
      uniform sampler2D uTargetEmphasis;
      uniform sampler2D uCurrentEmphasis;

      // the interpolation ratio
      uniform float uMixRatio;

      layout(location = 0) out vec3 outPositions;
      layout(location = 1) out vec3 viewPositions;
      layout(location = 2) out vec4 outColors;
      layout(location = 3) out vec4 viewColors;
      layout(location = 4) out float outSizes;
      layout(location = 5) out float viewSizes;
      layout(location = 6) out float outEmphasis;
      layout(location = 7) out float viewEmphasis;

      void main() {
        vec3 targetPosition = texture(uTargetPositions, v_uv).xyz;
        vec3 currentPosition = texture(uCurrentPositions, v_uv).xyz;
        outPositions = mix(currentPosition, targetPosition, uMixRatio);
        viewPositions = outPositions;

        vec4 targetColor = texture(uTargetColors, v_uv);
        vec4 currentColor = texture(uCurrentColors, v_uv);
        outColors = mix(currentColor, targetColor, uMixRatio);
        viewColors = outColors;

        float targetSize = texture(uTargetSizes, v_uv).r;
        float currentSize = texture(uCurrentSizes, v_uv).r;
        outSizes = mix(currentSize, targetSize, uMixRatio);
        viewSizes = outSizes;

        float targetEmphasis = texture(uTargetEmphasis, v_uv).r;
        float currentEmphasis = texture(uCurrentEmphasis, v_uv).r;
        outEmphasis = mix(currentEmphasis, targetEmphasis, uMixRatio);
        viewEmphasis = outEmphasis;
      }
    `,
    uniforms: [
      {
        name: 'uTargetPositions',
        type: INT,
        value: 0,
      },
      {
        name: 'uCurrentPositions',
        type: INT,
        value: 1,
      },
      {
        name: 'uTargetColors',
        type: INT,
        value: 2,
      },
      {
        name: 'uCurrentColors',
        type: INT,
        value: 3,
      },
      {
        name: 'uTargetSizes',
        type: INT,
        value: 4,
      },
      {
        name: 'uCurrentSizes',
        type: INT,
        value: 5,
      },
      {
        name: 'uTargetEmphasis',
        type: INT,
        value: 6,
      },
      {
        name: 'uCurrentEmphasis',
        type: INT,
        value: 7,
      },
      {
        name: 'uMixRatio',
        type: FLOAT,
        value: 0.05,
      },
    ]
  })
})

// export const debugLayer = moize.infinite((layer) => {
//   const gpuComposer = getGPUComposer();
  
//   return renderRGBProgram(gpuComposer)
// })

export const getViewProgram = moize.infinite(() => {
  return new GPUProgram(getGPUComposer(), {
    name: 'interpolation',
    fragmentShader: `
      in vec2 v_uv;

      // the current and target textures
      uniform sampler2D uCurrentPositions;
      uniform sampler2D uCurrentColors;
      uniform sampler2D uCurrentSizes;
      uniform sampler2D uCurrentEmphasis;
      
      layout (location = 0) out vec3 outPositions;
      layout (location = 1) out vec4 outColors;
      layout (location = 2) out float outSizes;
      layout (location = 3) out float outEmphasis;

      void main() {
        vec3 currentPositions = texture(uCurrentPositions, v_uv).xyz;
        outPositions = vec3(currentPositions);

        vec4 currentColors = texture(uCurrentColors, v_uv);
        outColors = vec4(currentColors);

        float currentSizes = texture(uCurrentSizes, v_uv).r;
        outSizes = float(currentSizes);

        float currentEmphasis = texture(uCurrentEmphasis, v_uv).r;
        outEmphasis = float(currentEmphasis);
      }
    `,
    uniforms: [
      {
        name: 'uCurrentPositions',
        type: INT,
        value: 0,
      },
      {
        name: 'uCurrentColors',
        type: INT,
        value: 1,
      },
      {
        name: 'uCurrentSizes',
        type: INT,
        value: 2,
      },
      {
        name: 'uCurrentEmphasis',
        type: INT,
        value: 3,
      },
    ]
  })
})