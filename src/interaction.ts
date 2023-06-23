import interactionEvents from "normalized-interaction-events";
import { getCanvasAndGLContext } from "./gpu/rendering";
import { getGraphData, getNodePosition } from "./data";
import moize from "moize";
import { setSelectedIndex, getSelectedIndex } from "./selection";
import { throttle, debounce} from "lodash-es";
import navigation from "./navigation";
import { render, html, TemplateResult } from "lit-html";
import { getPickerRenderTarget, getThreeSetup } from "./gpu/graph-viz";
import { graphCameraAnimation } from "./get-workers";
// convert event coordinates to normalized coordinates
const normalizedEventCoordinates = (ev: any) => {
  const { canvas } = getCanvasAndGLContext();
  const rect = canvas.getBoundingClientRect();
  const x = (ev.clientX - rect.left) / rect.width;
  const y = (ev.clientY - rect.top) / rect.height;
  return { x: x * 2 - 1, y: -(y * 2 - 1) };
};

const {
  globalCamera,
  updateCameras,
  getGlobalCameraParams,
  setCameraCenter,
  setCameraDistance,
  zoomGlobalCamera,
  panGlobalCamera,
  startZooming,
  startPanning,
  stopPanning,
  computeScreenPosition
} = graphCameraAnimation

export { globalCamera, updateCameras, setCameraCenter, setCameraDistance };

export const deviceHasMouse = moize.infinite(() => {
  return window.matchMedia('(pointer:fine)').matches;
})

export let selectedZoom: number;
export let deselectedZoom: number;
const maxSelectedZoom = 500;
const minUnselectedZoom = maxSelectedZoom;

const stopZooming = async () => {
  // stopZooming();
  const selected = getSelectedIndex();
  const distance = (await getGlobalCameraParams()).distance;
  if (selected > -1) {
    selectedZoom = Math.min(distance, maxSelectedZoom);
    // console.log('setting selected zoom', selectedZoom)
  } else {
    deselectedZoom = Math.max(distance, minUnselectedZoom);
    // console.log('setting deselected zoom', deselectedZoom)
  }
};

const pointerPositionInfo: any = {};

const pickedColor = new Uint8Array(4).fill(0);
let lastOverIndex = -1;
export const getLastOverIndex = () => lastOverIndex;
let dragging = false;
let lastMouseMoveTime = 0;
const activelyWanderingMouse = () => {
  if (dragging) return false;
  const now = Date.now();
  const result = now - lastMouseMoveTime < 200;
  return result;
}

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
  const { canvas } = getCanvasAndGLContext();
  pointerPositionInfo.x = x;
  pointerPositionInfo.y = y;
  
  // we'll need to convert from the normalized coordinates to the canvas coordinates
  pointerPositionInfo.canvasX = ((x + 1) / 2) * canvas.width;
  pointerPositionInfo.canvasY = ((y + 1) / 2) * canvas.height;

  const deviceRatio = window.devicePixelRatio || 1;

  pointerPositionInfo.pickerX = Math.floor(
    pointerPositionInfo.canvasX / deviceRatio
  );
  pointerPositionInfo.pickerY = Math.floor(
    pointerPositionInfo.canvasY / deviceRatio
  );

  // console.log('collectPointerPositionInfo', x,y,
  // "canvas", pointerPositionInfo.canvasX, pointerPositionInfo.canvasY,
  // "picker", pointerPositionInfo.pickerX, pointerPositionInfo.pickerY)
};

let currentlyHoveringIndex = -1;
export const getCurrentlyHoveringIndex = () => currentlyHoveringIndex

export const getCurrentlyHoveringNode = async () => {
  const { nodes } = await getGraphData();
  return nodes[currentlyHoveringIndex];
}

export const setupSelection = moize.infinite(() => {
  const { canvas } = getCanvasAndGLContext();

  interactionEvents(canvas)
    .on("touchmove", collectPointerPositionInfo)
    .on("mousemove", collectPointerPositionInfo)
    
  interactionEvents(canvas)
    .on("mousemove", () => {
      !dragging && updatePickerColorDebounced();
    });

  interactionEvents(canvas)
    .on("touchmove", incrementDragEvents)
    .on("pinchmove", incrementDragEvents)
    .on("mousemove", incrementDragEvents);

  canvas.addEventListener("pointerdown", async (ev) => {
    const clickHandler = async ([pointerUpResult, hoverUpdateResult]) => {
      // console.log('pointer clickHandler', pointerUpResult, hoverUpdateResult)
      const wasDrag = cumulativeDragDistance > 0.03 || countLastDragEvents > 5;
      // console.log(
      //   "was drag",
      //   wasDrag,
      //   cumulativeDragDistance,
      //   countLastDragEvents
      // );
      dragging = false;

      if (!wasDrag) {
        const selectedIndex = getCurrentlyHoveringIndex();
        setSelectedIndex(selectedIndex);

        getSelectedInfo().then((info) => {
          canvas.dispatchEvent(
            new CustomEvent("selected", { detail: { selectedIndex, info } })
          );
        });
        canvas.dispatchEvent(
          new CustomEvent("tap", { detail: { selectedIndex } })
        );
        // }
        // , 150);
      }
    };
    
    // canvas.addEventListener("pointerup", pointerUpHandler, { once: true });
    const pointerUp = new Promise((resolve, reject) => {
      canvas.addEventListener("pointerup", resolve, { once: true });
      setTimeout(() => reject('pointer event timed out after 100ms'), 200);
    });
    
    dragging = true;
    countLastDragEvents = 0;
    cumulativeDragDistance = 0;

    Promise.all([pointerUp, getNextHoverOnUpdate()]).then(clickHandler).catch(() =>{});
    setTimeout(() => {
      const wasDrag = cumulativeDragDistance > 0.03 || countLastDragEvents > 5;
      if (!wasDrag) {
        updatePickerColor()
      }
    }, 2); // ugh.... but at least it works.
    collectPointerPositionInfo(normalizedEventCoordinates(ev));
  });


  canvas.addEventListener("selected", (ev) => {
    //@ts-ignore
    const node = ev.detail.info;
    console.log('preparing to navigate:', node)
    navigation.push(
      node ? `#project/${node?.navId}` : '#-'
    );
  });
  
  canvas.addEventListener("hover", async (ev) => {
    const { nodes } = await getGraphData();
    //@ts-ignore
    const wasHoveredIndex = ev.detail.wasHoveredIndex;
    const wasHoveredNode = wasHoveredIndex > -1 ? nodes[wasHoveredIndex] : null;
    //@ts-ignore
    const nowHoveredIndex = ev.detail.nowHoveredIndex;
    const nowHoveredNode = nowHoveredIndex > -1 ? nodes[nowHoveredIndex] : null;
    const selectedNode = getSelectedIndex() > -1 ? nodes[getSelectedIndex()] : null;
    
    if (nowHoveredNode) {
      currentlyHoveringIndex = nowHoveredNode?.index || -1
    } else {
      currentlyHoveringIndex = -1
    }
  })
});

const radiansPerHalfScreenWidth = Math.PI / 3;

export const setupCameraInteraction = () => {
  // const app = getPicoApp();
  const { canvas } = getCanvasAndGLContext();

  //@ts-ignore
  canvas.addEventListener(
    "wheel",
    (ev) => {
      const scrollVector =
        Math.exp((ev.deltaY / canvas.clientHeight) * 2) - 1.0;
      const scrollDirection = Math.sign(scrollVector);
      
      // console.log(scrollVector, scrollDirection, 'zooming')
      startZooming();
      zoomGlobalCamera(
        0,
        0,
        scrollDirection * Math.min(Math.abs(scrollVector), 0.06)
      );
      ev.preventDefault();
      stopZooming();
    },
    { passive: false }
  );

  interactionEvents(canvas)
    .on("mousemove", function (ev) {
      lastMouseMoveTime = Date.now();
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
let pickerTime = true;

export const getNodeIndexFromPickerColor = (color: Uint8Array) => {
  const nodeIndex = color[0] + color[1] * 256 + color[2] * 256 * 256;
  // the offset makes it so the default selection is nothing
  return nodeIndex - 1;
};

export let pickerSync: WebGLSync | null = null;
export const checkPickerSync = () => {
  // check if the fence sync is finished and make a new one if necessary
  const gl = getCanvasAndGLContext().gl as WebGL2RenderingContext;
  const makeSync = () => gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
  if (!pickerSync) {
    pickerSync = makeSync();
    return false
  } else {
    const status = gl?.clientWaitSync(pickerSync, 0, 0)
    if (status === gl?.CONDITION_SATISFIED) {
      gl.deleteSync(pickerSync);
      pickerSync = makeSync();
      return true;
    } else {
      return false;
    }
  }
}

let pickerFailures = 0
let pickerGuardFailed = false
export const updatePickerColor = () => {
  // return
  const pickerReady = checkPickerSync();
  const { canvas } = getCanvasAndGLContext();
  const gl = getCanvasAndGLContext().gl as WebGL2RenderingContext;
  if (pickerFailures > 10) {
    pickerGuardFailed = true
    console.warn('picker guard failed')
  }
  if (!pickerReady && !pickerGuardFailed) { // TODO: fix this, it's not working on FireFox
    console.log('not ready to read picker pixel yet')
    pickerFailures += 1
  } else {
    pickerFailures = 0;
    // console.log('reading pixel')
    const { renderer } = getThreeSetup();
    const pointerPosition = getPointerPositionPicker();

    const pickerRenderTarget = getPickerRenderTarget();
    renderer.readRenderTargetPixels(
      pickerRenderTarget,
      ...pointerPosition,
      1,
      1,
      pickedColor
    );
    gl.flush();
    const overIndex = getNodeIndexFromPickerColor(pickedColor);
    // if (lastOverIndex !== overIndex) {
      setTimeout(() => {
        canvas.dispatchEvent(
          new CustomEvent("hover", { detail: { wasHoveredIndex: lastOverIndex, nowHoveredIndex: overIndex } }
          )
        );
      }, 1);
      
      if (overIndex > -1) {
        setTimeout(() => {
          canvas.dispatchEvent(
            new CustomEvent("hoveron", { detail: { wasHoveredIndex: lastOverIndex, nowHoveredIndex: overIndex } }
            )
          );
        }, 1);
      }
        
    // }
    lastOverIndex = overIndex;
  }
};

export const updatePickerColorThrottled = throttle(updatePickerColor, 1000);
export const updatePickerColorDebounced = debounce(updatePickerColor, 300);

export const getNextHoverOnUpdate = async () => {
  // wait for the next 'hover' event
  return new Promise((resolve) => {
    const canvas = getCanvasAndGLContext().canvas!;
    const listener = (ev: CustomEvent) => {
      // console.log('got hover event', ev.detail)
      resolve(ev.detail);
    };
    canvas.addEventListener("hover", listener, { once: true });
  });
};


export const getSelectedInfo = async () => {
  const { nodes } = await getGraphData();
  return nodes[getSelectedIndex()];
};

type cursorOptions = {
  htmlTemplate?: (node: any) => TemplateResult;
  classes?: string[];
  applyScreenPositionStyle?: (screenPosition, element) => void;
}
const makeCursor = ({classes, htmlTemplate, applyScreenPositionStyle} : cursorOptions = {}) => {
  applyScreenPositionStyle = applyScreenPositionStyle || 
    ((screenPosition, element) => {
      element.style.left = `${screenPosition[0]}vw`;
      element.style.bottom = `${screenPosition[1]}vh`;
    });
  const element = document.createElement("div");
  element.classList.add("cursor");
  classes?.forEach((c) => element.classList.add(c));
  // element.style.width = "5vw";
  // element.style.height = "5vw";
  document.body.appendChild(element);
  
  const alignToScreenPosition = (screenPosition) => {
    applyScreenPositionStyle!(screenPosition, element);
  }
  
  const alignToNDCPosition = (screenPositionNDC) => {
    // convert from normalized device coordinates to window coordinates
    const screenPosition = [
      (screenPositionNDC[0] + 1) / 2 * 100,
      (screenPositionNDC[1] + 1) / 2 * 100,
    ];
  
    alignToScreenPosition(screenPosition);
  }
  
  const alignToNode = throttle(async (node) => {
    const nodePosition = getNodePosition(node);
    const screenPositionNDC = await computeScreenPosition(nodePosition);
    alignToNDCPosition(screenPositionNDC);
  }, 1000/10)

  const highlightNode = throttle(async (node) => {
    if (node) {
      await alignToNode(node);
      element.classList.add("focused")
    } else {
      element.classList.remove("focused")
    }
    node && htmlTemplate && render(htmlTemplate(node), element);
  }, 50);


  return {element, alignToScreenPosition, alignToNDCPosition, alignToNode, highlightNode, destroy: () => element.remove()};
}

export const selectedCursor = makeCursor({
  classes: ["selected-cursor"],
});
export const hoveredTooltip = makeCursor({
  classes: ["hovered-tooltip"],
  htmlTemplate: node => html`
    <div class="node-name">${node.data?.name}</div>
  `,
  applyScreenPositionStyle(screenPosition, element) {
    element.style.left = `calc(min(${screenPosition[0]}vw, calc(100vw - 15em)))`;
    element.style.bottom = `${screenPosition[1]}vh`;
  },
});
export const hoveredCursor = makeCursor({
  classes: ["hovered-cursor"],
});
