import moize from "moize";
import { getPicoApp } from "./rendering";
import PicoGL from "picogl";

const vertexShaderSource = `#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUV;

void main() {
    vUV = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShaderSource = `#version 300 es
precision mediump float;
in vec2 vUV;
uniform sampler2D uTexture;
out vec4 fragColor;

void main() {
    fragColor = texture(uTexture, vUV);
}`;

const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

const uvs = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);

const getDebugDrawCall = moize.infinite(() => {
  const app = getPicoApp();

  const vertexArray = app
    .createVertexArray()
    .vertexAttributeBuffer(
      0,
      app.createVertexBuffer(PicoGL.FLOAT, 2, positions)
    )
    .vertexAttributeBuffer(1, app.createVertexBuffer(PicoGL.FLOAT, 2, uvs))
    .indexBuffer(
      app.createIndexBuffer(
        PicoGL.UNSIGNED_SHORT,
        3,
        new Uint16Array([0, 1, 2, 2, 1, 3])
      )
    );

  const program = app.createProgram(vertexShaderSource, fragmentShaderSource);
  return app.createDrawCall(program, vertexArray);
});

export const debugTexture = (texture) => {
  getDebugDrawCall().texture("uTexture", texture).draw();
};

export const generateGradientTexture = (width, height) => {
  const app = getPicoApp();
  const texture = app.createTexture2D(width, height, {
    internalFormat: PicoGL.RGBA32F,
    type: PicoGL.FLOAT,
  });

  const buffer = new Float32Array(width * height * 4);

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const index = (i + j * width) * 4;
      buffer[index] = i / width;
      buffer[index + 1] = j / height;
      buffer[index + 2] = 0;
      buffer[index + 3] = 1;
    }
  }

  texture.data(buffer);
  return texture;
};
