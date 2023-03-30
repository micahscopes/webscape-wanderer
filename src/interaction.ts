import interactionEvents from "normalized-interaction-events";
import { getPicoApp } from "./gpu/rendering";
import { getNodePickerDrawCall, getNodePickerSwappableBuffer } from "./gpu/graph-visualization";
import PicoGL from "picogl";
import { getCamerasUniformBuffer } from "./gpu/camera";

const pointerPositionInfo: any = {};

export const getPointerPositionInfo = () => {
  return pointerPositionInfo;
};

export const getPointerPositionCanvas: () => [number, number] = () => [
  pointerPositionInfo.canvasX,
  pointerPositionInfo.canvasY,
];
export const getPointerPositionClip: () => [number, number] = () => [
  pointerPositionInfo.x,
  pointerPositionInfo.y,
];
export const getPointerPositionPicker: () => [number, number] = () => [
  pointerPositionInfo.pickerX,
  pointerPositionInfo.pickerY,
];

export const setupSelection = () => {
  const app = getPicoApp();
  const canvas = app.canvas;

  const collectPointerPositionInfo = (ev: any) => {
    pointerPositionInfo.x = ev.x;
    pointerPositionInfo.y = ev.y;
    
    // we'll need to convert from the normalized coordinates to the canvas coordinates
    pointerPositionInfo.canvasX = (ev.x + 1)/2 * app.width;
    pointerPositionInfo.canvasY = (ev.y + 1)/2 * app.height;
    
    const deviceRatio = window.devicePixelRatio || 1;

    pointerPositionInfo.pickerX = Math.floor(pointerPositionInfo.canvasX / deviceRatio);
    pointerPositionInfo.pickerY = Math.floor(pointerPositionInfo.canvasY / deviceRatio);

    // console.log("pointerPositionInfo", pointerPositionInfo, ev.originalEvent.clientX, ev.originalEvent.clientY)
  };

  interactionEvents(canvas)
    .on("touchmove", collectPointerPositionInfo)
    .on("mousemove", collectPointerPositionInfo);
};

let pickerFrame = 0;
let pickerSkip = 3;

const pickedColor = new Uint8Array(4);
let lastSelectedIndex = -1;

export const getNodeIndexFromPickerColor = (color: Uint8Array) => {
  const nodeIndex = color[0] + color[1] * 256 + color[2] * 256 * 256;
  // the offset makes it so the default selection is nothing
  return nodeIndex-1;
}

export const drawPickerBuffer = () => {
  const app = getPicoApp();
  const pickerBuffers = getNodePickerSwappableBuffer();
  const area = 100;
  const scissorRegion : [number, number, number, number] = [getPointerPositionCanvas()[0] - area / 2, getPointerPositionCanvas()[1] - area / 2, area, area];
  app.drawFramebuffer(pickerBuffers.current)
    .enable(PicoGL.SCISSOR_TEST)
    .scissor(...scissorRegion)

  const pickerDrawCall = getNodePickerDrawCall()
    .uniformBlock('cameras', getCamerasUniformBuffer())
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('selectedIndex', getSelectedIndex())
    .draw();
  
    app.defaultViewport().clear();
    pickerDrawCall.draw();

  if (pickerFrame === 0 || true) {
      app.readFramebuffer(pickerBuffers.current)
        .readPixel(...getPointerPositionCanvas(), pickedColor)
      lastSelectedIndex = getNodeIndexFromPickerColor(pickedColor);
      pickerBuffers.swap();
  }

  pickerFrame = (pickerFrame + 1) % pickerSkip;
}

export const getSelectedIndex = () => lastSelectedIndex;