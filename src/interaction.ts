import interactionEvents from "normalized-interaction-events";
import { getPicoApp } from "./gpu/rendering";
import { getNodePickerDrawCall, getNodePickerSwappableBuffer } from "./gpu/graph-visualization";
import PicoGL from "picogl";
import { getCamerasUniformBuffer } from "./gpu/camera";
import { datEcosystemData, doQuery, getGraphData, getNodePosition } from "./data";
  import { Tweenable, tween } from "shifty";
import moize from "moize";
import AnimationWorker from "./animation-worker?worker";
import {Remote, proxy, wrap} from 'comlink'
import { downstreamDependentsDependenciesQuery } from "./query-helpers";
import { applyVisualsToNode, applyVisuals, initializeSelectionVisuals } from "./selection";

// window.animationWorker = wrap(new AnimationWorker())
const {
  globalCamera,
  updateCameras,
  setCameraCenter,
  zoomGlobalCamera,
  panGlobalCamera,
  startPanning,
  stopPanning,
  startZooming,
  stopZooming,
} = wrap(new AnimationWorker()) as Remote<any>

export {
  globalCamera,
  updateCameras,
  setCameraCenter,
}

const pointerPositionInfo: any = {};

const pickedColor = new Uint8Array(4);
let lastOverIndex = -1;
let selectedIndex = -1;
let dragging = false;
let countLastDragEvents = 0;

const incrementDragEvents = () => {
  countLastDragEvents++;
};

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

export const setupSelection = moize.infinite(() => {
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
    .on("mousemove", collectPointerPositionInfo)
    
  interactionEvents(canvas)
    .on("touchmove", incrementDragEvents)
    .on("pinchmove", incrementDragEvents)
    .on("mousemove", incrementDragEvents)
    
  canvas.addEventListener("pointerdown", () => {
    dragging = true;
    countLastDragEvents = 0;
  })
    
  canvas.addEventListener("pointerup", () => {
    const wasDrag = countLastDragEvents > 5;
    dragging = false;

    if (!wasDrag) {
      pickerTime = true;
      setTimeout(() => {
        selectedIndex = lastOverIndex;
        getSelectedInfo().then((info) => {
          canvas.dispatchEvent(new CustomEvent("selected", { detail: { selectedIndex, info } }));
        });
        canvas.dispatchEvent(new CustomEvent("tap", { detail: { selectedIndex } }));
      }, 50)
    }
  })
  
  canvas.addEventListener("selected", async (ev) => {
    console.log(ev)
    // @ts-ignore
    const node = ev.detail.info
    if (node) {
      const nodePosition = getNodePosition(node);
      const query = downstreamDependentsDependenciesQuery(node.project)
      console.log('the node', node)
      const {nodesByProject, links} = await getGraphData()
      initializeSelectionVisuals().then(
      () => {
          doQuery(
            query,
            // proxy(data => {}),
            proxy((data, get) => {
              // if (node !== selectedNode) return;
              get(["dependent", "dependency"]).then(({ dependent, dependency }) => {
                // console.log("query result:", dependent.value, dependency.value);
                applyVisualsToNode(nodesByProject[dependent.value], { immediate: false })
                applyVisualsToNode(nodesByProject[dependency.value], { immediate: false })
              });
            }),
            proxy(() => {
              console.log("query ended:", query);
            })
          )
          // console.log(nodePosition, 'setting camera center')
          setCameraCenter(nodePosition);
        })
      } else {
        console.log("no selection")
        applyVisuals({
          immediate: true
        })
      }
    });
      }
    )

const radiansPerHalfScreenWidth = Math.PI * 0.5;

export const setupCameraInteraction = () => {
  const app = getPicoApp()
  const canvas = app.canvas

  interactionEvents(canvas)
    .on('wheel', function (ev) {
      // const [x,y] = globalCamera.params.center
      zoomGlobalCamera(0,0, Math.exp(-ev.dy) - 1.0);
      ev.originalEvent.preventDefault();
    })
    .on('mousemove', function (ev) {
      if (!ev.active || ev.buttons !== 1) return;

      if (ev.mods.shift) {
        // globalCamera.pan(ev.dx, ev.dy);
        startPanning();
        panGlobalCamera(ev.dx, ev.dy);
      } else if (ev.mods.meta) {
        globalCamera.pivot(ev.dx, ev.dy);
      } else {
        globalCamera.rotate(
          -ev.dx * radiansPerHalfScreenWidth,
          -ev.dy * radiansPerHalfScreenWidth
        );
        
        stopPanning();
      }
      ev.originalEvent.preventDefault();
    })
    .on('touchmove', function (ev) {
      if (!ev.active) return;
      globalCamera.rotate(
        -ev.dx * radiansPerHalfScreenWidth,
        -ev.dy * radiansPerHalfScreenWidth
      );
      ev.originalEvent.preventDefault();
    })
    .on('pinchmove', function (ev) {
      if (!ev.active) return;
      startPanning();
      startZooming();
      zoomGlobalCamera(0,0, 1 - ev.zoomx);
      panGlobalCamera(ev.dx, ev.dy);
    })
    .on('touchstart', ev => ev.originalEvent.preventDefault())
    .on('pinchstart', ev => ev.originalEvent.preventDefault())
    .on('pinchend', () => {
      stopPanning();
      stopZooming();
    })
}

// let pickerFrame = 0;
// let pickerSkip = 3;
let pickerTime = false;

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
  app.drawFramebuffer(pickerBuffers.current.resize(app.width, app.height))
    .enable(PicoGL.SCISSOR_TEST)
    .scissor(...scissorRegion)

  const pickerDrawCall = getNodePickerDrawCall()
    .uniformBlock('cameras', getCamerasUniformBuffer())
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('selectedIndex', getSelectedIndex())
  
    app.defaultViewport().clear();
    pickerDrawCall.draw();

  if (pickerTime) {
      app.readFramebuffer(pickerBuffers.current)
        .readPixel(...getPointerPositionCanvas(), pickedColor)
        
      lastOverIndex = getNodeIndexFromPickerColor(pickedColor);
      pickerBuffers.swap();
      pickerTime = false;
  }
}

export const getSelectedIndex = () => selectedIndex;
export const getSelectedInfo = async () => {
  const {nodes} = await getGraphData();
  return nodes[selectedIndex];
}