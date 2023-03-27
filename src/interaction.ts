import interactionEvents from "normalized-interaction-events";
import { getPicoApp } from "./gpu/rendering";

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
