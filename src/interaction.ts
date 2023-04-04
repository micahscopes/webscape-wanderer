import interactionEvents from "normalized-interaction-events";
import { getPicoApp } from "./gpu/rendering";
import {
  getNodePickerDrawCall,
  getNodePickerSwappableBuffer,
} from "./gpu/graph-visualization";
import PicoGL from "picogl";
import { getCamerasUniformBuffer } from "./gpu/camera";
import {
  datEcosystemData,
  doQuery,
  getGraphData,
  getNodePosition,
} from "./data";
import { Tweenable, tween } from "shifty";
import moize from "moize";
import AnimationWorker from "./animation-worker?worker";
import { Remote, proxy, wrap } from "comlink";
import { downstreamDependentsDependenciesQuery } from "./query-helpers";
import {
  applyVisualsToNode,
  applyVisuals,
  initializeSelectionVisuals,
  showSelectionInfo,
} from "./selection";
import { throttle } from "lodash-es";

// convert event coordinates to normalized coordinates
const normalizedEventCoordinates = (ev: any) => {
  const app = getPicoApp();
  const canvas = app.canvas;
  const rect = canvas.getBoundingClientRect();
  const x = (ev.clientX - rect.left) / rect.width;
  const y = (ev.clientY - rect.top) / rect.height;
  return { x: x * 2 - 1, y: -(y * 2 - 1) };
};

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
} = wrap(new AnimationWorker()) as Remote<any>;

export { globalCamera, updateCameras, setCameraCenter };

const pointerPositionInfo: any = {};

const pickedColor = new Uint8Array(4);
let lastOverIndex = -1;
let selectedIndex = -1;
let dragging = false;
let countLastDragEvents = 0;
let cumulativeDragDistance = 0;

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

const collectPointerPositionInfo = ({ x, y }) => {
  // console.log('collectPointerPositionInfo', ev)
  const app = getPicoApp();
  pointerPositionInfo.x = x;
  pointerPositionInfo.y = y;

  // we'll need to convert from the normalized coordinates to the canvas coordinates
  pointerPositionInfo.canvasX = ((x + 1) / 2) * app.width;
  pointerPositionInfo.canvasY = ((y + 1) / 2) * app.height;

  const deviceRatio = window.devicePixelRatio || 1;

  pointerPositionInfo.pickerX = Math.floor(
    pointerPositionInfo.canvasX / deviceRatio
  );
  pointerPositionInfo.pickerY = Math.floor(
    pointerPositionInfo.canvasY / deviceRatio
  );

  // console.log("pointerPositionInfo", pointerPositionInfo, ev.originalEvent.clientX, ev.originalEvent.clientY)
};

export const setupSelection = moize.infinite(() => {
  const app = getPicoApp();
  const canvas = app.canvas;

  interactionEvents(canvas)
    .on("touchmove", collectPointerPositionInfo)
    .on("mousemove", collectPointerPositionInfo);

  interactionEvents(canvas)
    .on("touchmove", incrementDragEvents)
    .on("pinchmove", incrementDragEvents)
    .on("mousemove", incrementDragEvents);

  canvas.addEventListener("pointerdown", (ev) => {
    console.log("pointerdown");
    collectPointerPositionInfo(normalizedEventCoordinates(ev));
    dragging = true;
    countLastDragEvents = 0;
    cumulativeDragDistance = 0;
  });

  canvas.addEventListener("pointerup", () => {
    const wasDrag = cumulativeDragDistance > 0.03 || countLastDragEvents > 5;
    console.log(
      "was drag",
      wasDrag,
      cumulativeDragDistance,
      countLastDragEvents
    );
    dragging = false;

    if (!wasDrag) {
      pickerTime = true;
      setTimeout(() => {
        selectedIndex = lastOverIndex;
        getSelectedInfo().then((info) => {
          canvas.dispatchEvent(
            new CustomEvent("selected", { detail: { selectedIndex, info } })
          );
        });
        canvas.dispatchEvent(
          new CustomEvent("tap", { detail: { selectedIndex } })
        );
      }, 50);
    }
  });

  canvas.addEventListener("selected", async (ev) => {
    const selectedSizeMap = (size) => size * 2;
    // @ts-ignore
    const node = ev.detail.info;
    if (node) {
      const nodePosition = getNodePosition(node);
      const query = downstreamDependentsDependenciesQuery(node.project);
      console.log("the node", node);
      const { nodesByProject, links } = await getGraphData();
      initializeSelectionVisuals().then(() => {
        applyVisualsToNode(node, { sizeMap: selectedSizeMap, emphasis: 1 });
        doQuery(
          query,
          // proxy(data => {}),
          proxy((data, get) => {
            // if (node !== selectedNode) return;
            get(["dependent", "dependency"]).then(
              ({ dependent, dependency }) => {
                // console.log("query result:", dependent.value, dependency.value);
                applyVisualsToNode(nodesByProject[dependent.value], {
                  sizeMap: selectedSizeMap,
                  emphasis: 1,
                });
                applyVisualsToNode(nodesByProject[dependency.value], {
                  sizeMap: selectedSizeMap,
                  emphasis: 1,
                });
              }
            );
          }),
          proxy(() => {
            console.log("query ended:", query);
          })
        );
        // console.log(nodePosition, 'setting camera center')
        setCameraCenter(nodePosition);
      });
      
      showSelectionInfo(node);
    } else {
      console.log("no selection");
      applyVisuals();
    }
    
  });
});

const radiansPerHalfScreenWidth = Math.PI / 3;

export const setupCameraInteraction = () => {
  const app = getPicoApp();
  const canvas = app.canvas;

  //@ts-ignore
  canvas.addEventListener(
    "wheel",
    throttle((ev) => {
      const scrollVector =
        Math.exp((ev.deltaY / canvas.clientHeight) * 2) - 1.0;
      const scrollDirection = Math.sign(scrollVector);
      // console.log(scrollVector, scrollDirection, 'zooming')

      zoomGlobalCamera(
        0,
        0,
        scrollDirection * Math.min(Math.abs(scrollVector), 0.06)
      );
      ev.preventDefault();
    }, 1000 / 60),
    { passive: false }
  );

  interactionEvents(canvas)
    .on("mousemove", function (ev) {
      if (!ev.active || ev.buttons !== 1) return;

      cumulativeDragDistance += Math.sqrt(
        Math.pow(ev.dx, 2) + Math.pow(ev.dy, 2)
      );

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
    .on("touchmove", function (ev) {
      collectPointerPositionInfo(ev);
      if (!ev.active) return;
      cumulativeDragDistance += Math.sqrt(
        Math.pow(ev.dx, 2) + Math.pow(ev.dy, 2)
      );
      globalCamera.rotate(
        -ev.dx * radiansPerHalfScreenWidth,
        -ev.dy * radiansPerHalfScreenWidth
      );
      // ev.originalEvent.preventDefault();
    })
    .on("pinchmove", function (ev) {
      if (!ev.active) return;
      dragging = true;
      startPanning();
      startZooming();
      zoomGlobalCamera(0, 0, 1 - ev.zoomx);
      panGlobalCamera(ev.dx, ev.dy);
    })
    .on("touchstart", (ev) => ev.originalEvent.preventDefault())
    .on("pinchstart", (ev) => ev.originalEvent.preventDefault())
    .on("pinchend", () => {
      stopPanning();
      stopZooming();
    });
};

// let pickerFrame = 0;
// let pickerSkip = 3;
let pickerTime = false;

export const getNodeIndexFromPickerColor = (color: Uint8Array) => {
  const nodeIndex = color[0] + color[1] * 256 + color[2] * 256 * 256;
  // the offset makes it so the default selection is nothing
  return nodeIndex - 1;
};

export const drawPickerBuffer = () => {
  const app = getPicoApp();
  const pickerBuffers = getNodePickerSwappableBuffer();
  const area = 100;
  const scissorRegion: [number, number, number, number] = [
    getPointerPositionCanvas()[0] - area / 2,
    getPointerPositionCanvas()[1] - area / 2,
    area,
    area,
  ];
  app
    .drawFramebuffer(pickerBuffers.current.resize(app.width, app.height))
    .enable(PicoGL.SCISSOR_TEST)
    .scissor(...scissorRegion);

  const pickerDrawCall = getNodePickerDrawCall()
    .uniformBlock("cameras", getCamerasUniformBuffer())
    .uniform("mousePosition", getPointerPositionClip())
    .uniform("selectedIndex", getSelectedIndex());

  app.defaultViewport().clear();
  pickerDrawCall.draw();

  if (pickerTime) {
    app
      .readFramebuffer(pickerBuffers.current)
      .readPixel(...getPointerPositionCanvas(), pickedColor);

    lastOverIndex = getNodeIndexFromPickerColor(pickedColor);
    pickerBuffers.swap();
    pickerTime = false;
  }
};

export const getSelectedIndex = () => selectedIndex;
export const getSelectedInfo = async () => {
  const { nodes } = await getGraphData();
  return nodes[selectedIndex];
};
