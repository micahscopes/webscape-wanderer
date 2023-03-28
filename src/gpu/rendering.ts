import PicoGL from 'picogl';
import moize from 'moize';
import { getColorBuffers, getEdgeBakeDrawCall, getEdgePositionTexture, getInterpolationDrawCall, getInterpolationFramebuffer, getPositionBuffers, getRadiusBuffers, loadEdgeFramebuffer, loadInterpolationFramebuffer, swapInterpolationBuffers } from './animation';
import { getEdgeIndexBuffer, getEdgeIndices, getEdgeVisualizerDrawCall, getMostRecentEdgeVertexArray, getNodePickerBuffer, getNodePickerDrawCall, getNodeVisualizerDrawCall } from './graph-visualization';
import { getCamera } from './camera';
import { getPointerPositionCanvas, getPointerPositionClip, getPointerPositionInfo, getPointerPositionPicker } from '../interaction';

export const PRIMITIVE_RESTART_INDEX = 65535;
const getWidthAndHeight = () => {
  // Calculate the device pixel ratio
  const devicePixelRatio = window.devicePixelRatio || 1;

  // Get the desired display size (in CSS pixels)
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;

  // Calculate the actual size (in device pixels)
  const actualWidth = Math.floor(displayWidth * devicePixelRatio);
  const actualHeight = Math.floor(displayHeight * devicePixelRatio);
  
  return {width: actualWidth, height: actualHeight}
}

export const getPicoApp = moize.infinite(() => {
  const canvas = document.createElement('canvas');
  canvas.getContext('webgl2')
  document.body.appendChild(canvas);
  const {width, height} = getWidthAndHeight();

  return PicoGL.createApp(canvas,
    { 
      antialias: false,
      extensions: ['OES_texture_float', 'EXT_color_buffer_float'],
    }
  )
    .viewport(0, 0, width, height)
    .enable(PicoGL.DEPTH_TEST)
    .enable(PicoGL.BLEND)
    .blendFunc(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA)
    .clearColor(0.1, 0.1, 0.1, 1.0)
});

const getNodeIndexFromPickerColor = (color: Uint8Array) => {
  const nodeIndex = color[0] + color[1] * 256 + color[2] * 256 * 256;
  return nodeIndex;
}

export const fillCanvasToWindow = () => {
  const app = getPicoApp();
  const {width, height} = getWidthAndHeight();
  app.resize(width, height);
  getCamera().resize(width / height);
  const canvas = app.canvas as HTMLCanvasElement;
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.left = '0px';
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  const camera = getCamera();
}


// a basic debug renderer for the edge bake texture
const getEdgeBakeDebugProgram = moize(() =>
  getPicoApp().createProgram(
    `#version 300 es
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    in vec2 position;
    out vec2 uv;
    void main() {
      uv = position+0.5; // * 0.5 + 1.0;
      uv.y = -uv.y;
      gl_Position = vec4(position, 0.0, 1.0);
    }
    `,
    `#version 300 es
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    in vec2 uv;
    out vec4 fragColor;
    uniform sampler2D tex;
    void main() {
      fragColor = vec4(texture(tex, uv).xyz, 1.0);
      // fragColor = vec4(1.0, 0.0, 0.0, 1.0);
      // fragColor = texture(tex, uv);
    }
    `
  )
);

const generateGradientTexture = (width: number, height: number) => {
  const app = getPicoApp();
  const texture = app.createTexture2D(width, height, {
    internalFormat: PicoGL.RGBA32F,
    type: PicoGL.FLOAT,
  });
  const buffer = new Float32Array(width * height * 4);
  // the texture should be a gradient blending between black on the upper left to red,
  // green, and blue on the remaining corners
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const index = (i + j * width) * 4;
      buffer[index] = i / width;
      buffer[index + 1] = j / height;
      buffer[index + 2] = 0;
      buffer[index + 3] = 1;
    }
  }

  texture.data(buffer)
  return texture;
}

const randomTexure = generateGradientTexture(32,32);

const getEdgeBakeDebugDrawCall = moize.infinite(() => {
  const app = getPicoApp();
  const program = getEdgeBakeDebugProgram();
  const edgeBakeTexture = getEdgePositionTexture(getEdgeIndices().length);
  const edgeBakeVertexArray = app.createVertexArray()
  // full screen triangle to view the texture
  edgeBakeVertexArray
    .vertexAttributeBuffer(0, app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array([-1, -1, 3, -1, -1, 3])))
    .indexBuffer(app.createIndexBuffer(PicoGL.UNSIGNED_SHORT, 3, new Uint16Array([0, 1, 2])));
  return app.createDrawCall(program, edgeBakeVertexArray)
});


// no need to get the picker pixel every frame
let pickerFrame = 0;
let pickerSkip = 3;


const getEdgeBakeLocalBuffer = moize.infinite((width, height) => {
  const buffer = new Float32Array(width * height * 4);
  return buffer;
});

const pickedColor = new Uint8Array(4);
export const animateGraph = () => {
  const camera = getCamera();
  camera.resize(window.innerWidth / window.innerHeight);
  camera.tick({
    near: camera.params.distance * 0.01,
    far: camera.params.distance * 2 + 2000,
  })

  const app = getPicoApp();
  // app.clear();
  fillCanvasToWindow();

  const interpolationFramebuffer = loadInterpolationFramebuffer()
  app
    .drawFramebuffer(interpolationFramebuffer)
    .viewport(0, 0, interpolationFramebuffer.width, interpolationFramebuffer.height)
    .clearColor(1,1,1,1)
    .clear()

  const interpolation = getInterpolationDrawCall()
    .uniform('uMixRatio', 0.05)
  interpolation.draw();
  swapInterpolationBuffers()

  app.defaultDrawFramebuffer().defaultViewport().clearColor(0,0,0,1).clear();

  
  if (pickerFrame === 0) {
    const pickerBuffer = getNodePickerBuffer();
    app.drawFramebuffer(pickerBuffer)
      .enable(PicoGL.SCISSOR_TEST)
      .scissor(...getPointerPositionCanvas(), 1, 1)
      .clear();

    getNodePickerDrawCall()
      .uniform('projection', camera.state.projection)
      .uniform('view', camera.state.view)
      .draw();
    
    app
      .disable(PicoGL.SCISSOR_TEST)
      .defaultDrawFramebuffer()
      .readFramebuffer(pickerBuffer)
      .readPixel(...getPointerPositionCanvas(), pickedColor) 
    
    // console.log(pickedColor, getNodeIndexFromPickerColor(pickedColor), getPointerPositionCanvas());
  }


  // getMostRecentEdgeVertexArray();
  app.defaultDrawFramebuffer().clear();
  
  getEdgeVisualizerDrawCall()
    .texture('positionTexture', loadEdgeFramebuffer().colorAttachments[0])
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('projection', camera.state.projection)
    .uniform('view', camera.state.view)
    .draw();

  getNodeVisualizerDrawCall()
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('projection', camera.state.projection)
    .uniform('view', camera.state.view)
    .uniform('selectedIndex', getNodeIndexFromPickerColor(pickedColor))
    .draw();


  getEdgeBakeDebugDrawCall()
    // .texture('tex', getColorBuffers().texture)
    // .texture('tex', randomTexure)
    // .texture('tex', getNodePickerBuffer().colorAttachments[0])
    // .draw();
  
  pickerFrame = (pickerFrame + 1) % pickerSkip;
  requestAnimationFrame(animateGraph);
}