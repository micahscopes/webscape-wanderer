import moize from "moize";
import { getGPUComposer, getPicoApp } from "./rendering";
import { FLOAT, GPULayer, GPULayerType, GPULayerNumComponents, GPUProgram, INT } from "gpu-io";
import { App } from "picogl";
import { renderRGBProgram } from "gpu-io/dist/types/Programs";

export const shimPicoTexture = (glTexture, picoApp: App = getPicoApp()) => ({
  texture: glTexture,
  bind(unit) {
    // console.log('binding', unit, this.texture)
    let currentTexture = picoApp.state.textures[unit];

    // if (picoApp.state.activeTexture !== unit) {
        picoApp.gl.activeTexture(picoApp.gl.TEXTURE0 + unit);
    //     picoApp.state.activeTexture = unit;
    // }

    // if (currentTexture !== this) {
        // if (currentTexture) {
        //     currentTexture.currentUnit = -1;
        // }

        // if (this.currentUnit !== -1) {
        //     picoApp.state.textures[this.currentUnit] = null;
        // }

        picoApp.gl.bindTexture(picoApp.gl.TEXTURE_2D, this.texture);

        picoApp.state.textures[unit] = this;
        // this.currentUnit = unit;
    // }

    return this;
  }
})

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
  })
  
  return { current, target }
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

  layers.forEach(({ current, target }) => {
    current.resize(size)
    target.resize(size)
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

      
      layout (location = 0) out vec3 outPositions;
      layout (location = 1) out vec4 outColors;
      layout (location = 2) out float outSizes;
      layout (location = 3) out float outEmphasis;

      void main() {
        vec3 targetPosition = texture(uTargetPositions, v_uv).xyz;
        vec3 currentPosition = texture(uCurrentPositions, v_uv).xyz;
        outPositions = mix(currentPosition, targetPosition, uMixRatio);

        vec4 targetColor = texture(uTargetColors, v_uv);
        vec4 currentColor = texture(uCurrentColors, v_uv);
        outColors = mix(currentColor, targetColor, uMixRatio);

        float targetSize = texture(uTargetSizes, v_uv).r;
        float currentSize = texture(uCurrentSizes, v_uv).r;
        outSizes = mix(currentSize, targetSize, uMixRatio);

        float targetEmphasis = texture(uTargetEmphasis, v_uv).r;
        float currentEmphasis = texture(uCurrentEmphasis, v_uv).r;
        outEmphasis = mix(currentEmphasis, targetEmphasis, uMixRatio);
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
        value: 0.5,
      },
    ]
  })
})

// export const debugLayer = moize.infinite((layer) => {
//   const gpuComposer = getGPUComposer();
  
//   return renderRGBProgram(gpuComposer)
// })