import interactionEvents from "normalized-interaction-events";
import { getCanvasAndGLContext } from "./gpu/rendering";
import { getGraphData, getNodePosition } from "./data";
import moize from "moize";
import { setSelectedIndex, getSelectedIndex } from "./selection";
import { throttle, debounce, curry } from "lodash-es";
import { render, html, TemplateResult } from "lit-html";
import { getPickerRenderTarget, getThreeSetup } from "./gpu/graph-viz";
import { graphCameraAnimation } from "./get-workers";
import { state } from "./state";
import { getComponent } from "./context";
// convert event coordinates to normalized coordinates
const normalizedEventCoordinates = (ctx, ev: any) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const rect = canvas.getBoundingClientRect();
  const x = (ev.clientX - rect.left) / rect.width;
  const y = (ev.clientY - rect.top) / rect.height;
  return { x: x * 2 - 1, y: -(y * 2 - 1) };
};

// const {
//   globalCamera,
//   updateCameras,
//   getGlobalCameraParams,
//   setCameraCenter,
//   setCameraDistance,
//   zoomGlobalCamera,
//   panGlobalCamera,
//   startZooming,
//   stopZooming,
//   startPanning,
//   stopPanning,
//   computeScreenPosition,
//   startCameraAnimation,
// } = graphCameraAnimation

const globalCamera = (ctx, ...args) =>
  graphCameraAnimation(ctx).getGlobalCamera(ctx, ...args);
const updateCameras = (ctx, ...args) =>
  graphCameraAnimation(ctx).updateCameras(ctx, ...args);
const getGlobalCameraParams = (ctx, ...args) =>
  graphCameraAnimation(ctx).getGlobalCameraParams(ctx, ...args);
const setCameraCenter = (ctx, ...args) =>
  graphCameraAnimation(ctx).setCameraCenter(ctx, ...args);
const setCameraDistance = (ctx, ...args) =>
  graphCameraAnimation(ctx).setCameraDistance(ctx, ...args);
const zoomGlobalCamera = (ctx, ...args) =>
  graphCameraAnimation(ctx).zoomGlobalCamera(ctx, ...args);
const panGlobalCamera = (ctx, ...args) =>
  graphCameraAnimation(ctx).panGlobalCamera(ctx, ...args);
const startZooming = (ctx, ...args) =>
  graphCameraAnimation(ctx).startZooming(ctx, ...args);
const stopZooming = (ctx, ...args) =>
  graphCameraAnimation(ctx).stopZooming(ctx, ...args);
const startPanning = (ctx, ...args) =>
  graphCameraAnimation(ctx).startPanning(ctx, ...args);
const stopPanning = (ctx, ...args) =>
  graphCameraAnimation(ctx).stopPanning(ctx, ...args);
const computeScreenPosition = (ctx, ...args) =>
  graphCameraAnimation(ctx).computeScreenPosition(ctx, ...args);
const startCameraAnimation = (ctx, ...args) =>
  graphCameraAnimation(ctx).startCameraAnimation(ctx, ...args);

export {
  globalCamera,
  updateCameras,
  setCameraCenter,
  setCameraDistance,
  startCameraAnimation,
};

export const deviceHasMouse = () => {
  return window.matchMedia("(pointer:fine)").matches;
};

// export let selectedZoom: number;
// export let deselectedZoom: number;
// const maxSelectedZoom = 250;
// const minUnselectedZoom = maxSelectedZoom;

const zoomingStopped = async (ctx) => {
  const component = getComponent(ctx);
  stopZooming(ctx);
  const selected = getSelectedIndex(ctx);
  const distance = (await getGlobalCameraParams(ctx)).distance;
  if (selected > -1) {
    component.focusedZoom = Math.min(distance, component.zoomBoundary);
    console.debug("setting selected zoom", component.focusedZoom);
  } else {
    component.unfocusedZoom = Math.max(distance, component.zoomBoundary);
    console.debug("setting deselected zoom", component.unfocusedZoom);
  }
};

const getPointerPositionInfo: (ctx) => {
  x: number;
  y: number;
  canvasX: number;
  canvasY: number;
  pickerX: number;
  pickerY: number;
} = (ctx) =>
  state(ctx, "pointerPositionInfo", () => ({
    x: 0,
    y: 0,
    canvasX: 0,
    canvasY: 0,
    pickerX: 0,
    pickerY: 0,
  })).get();

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
};

let countLastDragEvents = 0;
let cumulativeDragDistance = 0;
const incrementDragEvents = () => {
  countLastDragEvents++;
};

const notifyTapped = async (ctx, tappedIndex) => {
  const { nodes } = await getGraphData(ctx);
  const tappedNode = nodes[tappedIndex];
  getComponent(ctx).dispatchEvent(
    new CustomEvent("tap", {
      detail: { tappedIndex, info: tappedNode },
    }),
  );
};

export const getPointerPositionCanvas: (ctx) => [number, number] = (ctx) =>
  [
    getPointerPositionInfo(ctx).canvasX,
    getPointerPositionInfo(ctx).canvasY,
  ] as [number, number];

export const getPointerPositionClip: (ctx) => [number, number] = (ctx) => [
  getPointerPositionInfo(ctx).x,
  getPointerPositionInfo(ctx).y,
];
export const getPointerPositionPicker: (ctx) => [number, number] = (ctx) => [
  getPointerPositionInfo(ctx).pickerX,
  getPointerPositionInfo(ctx).pickerY,
];

const collectPointerPositionInfo = curry((ctx, { x, y }) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const pointerPositionInfo = getPointerPositionInfo(ctx);
  pointerPositionInfo.x = x;
  pointerPositionInfo.y = y;

  // we'll need to convert from the normalized coordinates to the canvas coordinates
  pointerPositionInfo.canvasX = ((x + 1) / 2) * canvas.width;
  pointerPositionInfo.canvasY = ((y + 1) / 2) * canvas.height;

  const deviceRatio = window.devicePixelRatio || 1;

  pointerPositionInfo.pickerX = Math.floor(
    pointerPositionInfo.canvasX / deviceRatio,
  );
  pointerPositionInfo.pickerY = Math.floor(
    pointerPositionInfo.canvasY / deviceRatio,
  );

  // console.debug('collectPointerPositionInfo', x,y,
  // "canvas", pointerPositionInfo.canvasX, pointerPositionInfo.canvasY,
  // "picker", pointerPositionInfo.pickerX, pointerPositionInfo.pickerY)
});

export const getCurrentlyHoveringIndex = (ctx) => {
  return state(ctx, "currentlyHoveringIndex", () => -1).get();
};

export const getCurrentlyHoveringNode = async (ctx) => {
  const { nodes } = await getGraphData(ctx);
  const currentlyHoveringIndex = getCurrentlyHoveringIndex(ctx);
  // console.debug(
  //   "getCurrentlyHoveringNode",
  //   currentlyHoveringIndex,
  //   nodes[currentlyHoveringIndex],
  // );
  return nodes[currentlyHoveringIndex];
};

export const setupSelection = moize.infinite((component) => {
  const ctx = component.context;
  const { canvas } = getCanvasAndGLContext(ctx);

  interactionEvents(canvas)
    .on("touchmove", collectPointerPositionInfo(ctx))
    .on("mousemove", collectPointerPositionInfo(ctx));

  interactionEvents(canvas).on("mousemove", () => {
    // console.debug("preparing to callupdatePickerColorDebounced");
    !dragging && updatePickerColorDebounced(ctx)();
  });

  interactionEvents(canvas)
    .on("touchmove", incrementDragEvents)
    .on("pinchmove", incrementDragEvents)
    .on("mousemove", incrementDragEvents);

  canvas.addEventListener("pointerdown", async (ev) => {
    console.debug("pointer down");
    const clickHandler = async ([pointerUpResult, hoverUpdateResult]) => {
      console.debug("pointer clickHandler", pointerUpResult, hoverUpdateResult);
      const wasDrag = cumulativeDragDistance > 0.03 || countLastDragEvents > 5;
      console.debug(
        "was drag",
        wasDrag,
        cumulativeDragDistance,
        countLastDragEvents,
      );
      dragging = false;

      if (!wasDrag) {
        const tappedIndex = getCurrentlyHoveringIndex(ctx);
        notifyTapped(ctx, tappedIndex)
          // .then(() => {
          //   console.debug("Tapped notification completed");
          // })
          .catch((error) => {
            console.error("Error in notifyTapped:", error);
          });
        // getComponent(ctx).dispatchEvent(
        //   new CustomEvent("tapped", {
        //     detail: { tappedIndex: tappedIndex, info },
        //   }),
        // );
        // setSelectedIndex(ctx, tappedIndex);
        // console.debug("selected index set to", tappedIndex);

        // getSelectedInfo(ctx).then((info) => {
        //   getComponent(ctx).dispatchEvent(
        //     new CustomEvent("selected", {
        //       detail: { selectedIndex: tappedIndex, info },
        //     }),
        //   );
        // });
        // getComponent(ctx).dispatchEvent(
        //   new CustomEvent("tap", { detail: { selectedIndex: tappedIndex } }),
        // );
        // }
        // , 150);
      }
    };

    // canvas.addEventListener("pointerup", pointerUpHandler, { once: true });
    const pointerUp = new Promise((resolve, reject) => {
      canvas.addEventListener("pointerup", resolve, { once: true });
      setTimeout(() => reject("pointer event timed out after 100ms"), 200);
    });

    dragging = true;
    countLastDragEvents = 0;
    cumulativeDragDistance = 0;

    const waitForClick = [pointerUp, getNextHoverOnUpdate(ctx)];
    // if (deviceHasMouse()) {
    //   waitForClick.push(getNextHoverOnUpdate(ctx));
    // }

    Promise.all(waitForClick)
      .then(clickHandler)
      .catch((e) => console.debug(e));
    setTimeout(() => {
      const wasDrag = cumulativeDragDistance > 0.03 || countLastDragEvents > 5;
      if (!wasDrag) {
        updatePickerColor(ctx)();
      }
    }, 2); // ugh.... but at least it works.
    collectPointerPositionInfo(ctx, normalizedEventCoordinates(ctx, ev));
  });

  canvas.addEventListener("selected", (ev) => {
    //@ts-ignore
    // const node = ev.detail.info;
    // console.debug("preparing to navigate:", node, this);
    // component.setAttribute("focus", node?.navId);
  });

  canvas.addEventListener("hover", async (ev) => {
    // console.debug("got a hover!");
    const { nodes } = await getGraphData(ctx);
    //@ts-ignore
    const wasHoveredIndex = ev.detail.wasHoveredIndex;
    const wasHoveredNode = wasHoveredIndex > -1 ? nodes[wasHoveredIndex] : null;
    //@ts-ignore
    const nowHoveredIndex = ev.detail.nowHoveredIndex;
    const nowHoveredNode = nowHoveredIndex > -1 ? nodes[nowHoveredIndex] : null;
    const selectedNode =
      getSelectedIndex(ctx) > -1 ? nodes[getSelectedIndex(ctx)] : null;

    if (nowHoveredNode) {
      // currentlyHoveringIndex = nowHoveredNode?.index || -1
      state(ctx, "currentlyHoveringIndex").set(
        nowHoveredNode?.index != null ? nowHoveredNode.index : -1,
      );
    } else {
      state(ctx, "currentlyHoveringIndex").set(-1);
    }
  });
});

const radiansPerHalfScreenWidth = Math.PI / 3;

export const setupCameraInteraction = (ctx) => {
  // const app = getPicoApp();
  const { canvas } = getCanvasAndGLContext(ctx);

  //@ts-ignore
  canvas.addEventListener(
    "wheel",
    (ev) => {
      const scrollVector =
        Math.exp((ev.deltaY / canvas.clientHeight) * 2) - 1.0;
      const scrollDirection = Math.sign(scrollVector);

      // console.debug(scrollVector, scrollDirection, 'zooming')
      startZooming(ctx);
      zoomGlobalCamera(
        ctx,
        0,
        0,
        scrollDirection * Math.min(Math.abs(scrollVector), 0.06),
      );
      ev.preventDefault();
      zoomingStopped(ctx);
    },
    { passive: false },
  );

  interactionEvents(canvas)
    .on("mousemove", function (ev) {
      lastMouseMoveTime = Date.now();
      if (!ev.active || ev.buttons !== 1) return;

      cumulativeDragDistance += Math.sqrt(
        Math.pow(ev.dx, 2) + Math.pow(ev.dy, 2),
      );

      if (ev.mods.shift) {
        // globalCamera.pan(ev.dx, ev.dy);
        startPanning(ctx);
        panGlobalCamera(ctx, ev.dx, ev.dy);
      } else if (ev.mods.meta) {
        globalCamera(ctx).pivot(ev.dx, ev.dy);
      } else {
        globalCamera(ctx).rotate(
          -ev.dx * radiansPerHalfScreenWidth,
          -ev.dy * radiansPerHalfScreenWidth,
        );

        stopPanning(ctx);
      }
      ev.originalEvent.preventDefault();
    })
    .on("touchmove", function (ev) {
      collectPointerPositionInfo(ev);
      if (!ev.active) return;
      cumulativeDragDistance += Math.sqrt(
        Math.pow(ev.dx, 2) + Math.pow(ev.dy, 2),
      );
      globalCamera(ctx).rotate(
        -ev.dx * radiansPerHalfScreenWidth,
        -ev.dy * radiansPerHalfScreenWidth,
      );
      // ev.originalEvent.preventDefault();
    })
    .on("pinchmove", function (ev) {
      if (!ev.active) return;
      dragging = true;
      startPanning(ctx);
      startZooming(ctx);
      zoomGlobalCamera(ctx, 0, 0, 1 - ev.zoomx);
      panGlobalCamera(ctx, ev.dx, ev.dy);
    })
    .on("touchstart", (ev) => ev.originalEvent.preventDefault())
    .on("pinchstart", (ev) => ev.originalEvent.preventDefault())
    .on("pinchend", () => {
      stopPanning(ctx);
      zoomingStopped(ctx);
    });
};

const pickerState: (ctx) => {
  lastOverIndex: number;
  pickerTime: number;
  pickerSync: WebGLSync | null;
  pickerFailures: number;
  pickerGuardFailed: boolean;
} = moize.infinite((ctx) => ({
  lastOverIndex: -1,
  pickerTime: 0,
  pickerSync: null,
  pickerFailures: 0,
  pickerGuardFailed: false,
}));

export const getNodeIndexFromPickerColor = (color: Uint8Array) => {
  const nodeIndex = color[0] + color[1] * 256 + color[2] * 256 * 256;
  // the offset makes it so the default selection is nothing
  return nodeIndex - 1;
};

export const checkPickerSync = (ctx) => {
  // check if the fence sync is finished and make a new one if necessary
  const p = pickerState(ctx);
  const gl = getCanvasAndGLContext(ctx).gl as WebGL2RenderingContext;
  const makeSync = () => gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
  if (!p.pickerSync) {
    p.pickerSync = makeSync();
    return false;
  } else {
    const status = gl?.clientWaitSync(p.pickerSync, 0, 0);
    if (status === gl?.CONDITION_SATISFIED) {
      gl.deleteSync(p.pickerSync);
      p.pickerSync = makeSync();
      return true;
    } else {
      return false;
    }
  }
};

export const updatePickerColor = moize.infinite((ctx) => async () => {
  // return;
  // console.debug("updating picker color");
  // return
  const p = pickerState(ctx);
  const pickerReady = checkPickerSync(ctx);
  const { canvas } = getCanvasAndGLContext(ctx);
  const gl = getCanvasAndGLContext(ctx).gl as WebGL2RenderingContext;
  if (p.pickerFailures > 10) {
    p.pickerGuardFailed = true;
    console.warn("picker guard failed");
  }
  if (!pickerReady && !p.pickerGuardFailed) {
    // TODO: fix this, it's not working on FireFox
    console.debug("not ready to read picker pixel yet");
    p.pickerFailures += 1;
  } else {
    p.pickerFailures = 0;
    // console.debug("reading pixel");
    const { renderer } = getThreeSetup(ctx);
    const pointerPosition = getPointerPositionPicker(ctx);

    const pickerRenderTarget = getPickerRenderTarget(ctx);
    if (
      pointerPosition[0] >= 0 &&
      pointerPosition[0] < pickerRenderTarget.width &&
      pointerPosition[1] >= 0 &&
      pointerPosition[1] < pickerRenderTarget.height
    ) {
      await renderer
        .readRenderTargetPixelsAsync(
          pickerRenderTarget,
          ...pointerPosition,
          1,
          1,
        )
        .then((newPickedColor) => {
          gl.flush();
          for (let i = 0; i < 4; i++) {
            pickedColor[i] = newPickedColor[i];
          }
          const overIndex = getNodeIndexFromPickerColor(pickedColor);
          // if (lastOverIndex !== overIndex) {
          setTimeout(() => {
            canvas.dispatchEvent(
              new CustomEvent("hover", {
                detail: {
                  wasHoveredIndex: lastOverIndex,
                  nowHoveredIndex: overIndex,
                },
              }),
            );
          }, 1);

          if (overIndex > -1) {
            setTimeout(() => {
              canvas.dispatchEvent(
                new CustomEvent("hoveron", {
                  detail: {
                    wasHoveredIndex: lastOverIndex,
                    nowHoveredIndex: overIndex,
                  },
                }),
              );
            }, 10);
          }

          // }
          lastOverIndex = overIndex;
        });
    }
  }
});

export const updatePickerColorThrottled = (ctx) =>
  throttle(updatePickerColor(ctx), 1000);
export const updatePickerColorDebounced = (ctx) =>
  debounce(updatePickerColor(ctx), 300);

export const getNextHoverOnUpdate = async (ctx) => {
  console.debug("waiting for hover event");
  return new Promise((resolve) => {
    const canvas = getCanvasAndGLContext(ctx).canvas!;
    const listener = (ev: CustomEvent) => {
      console.debug("got hover event", ev.detail);
      resolve(ev.detail);
    };
    canvas.addEventListener("hover", listener, { once: true });
  });
};

export const getSelectedInfo = async (ctx) => {
  const { nodes } = await getGraphData(ctx);
  return nodes[getSelectedIndex(ctx)];
};

type cursorOptions = {
  htmlTemplate?: (node: any) => TemplateResult;
  classes?: string[];
  applyScreenPositionStyle?: (screenPosition, element) => void;
};
const makeCursor = moize.deep(
  (
    ctx,
    { classes, htmlTemplate, applyScreenPositionStyle }: cursorOptions = {},
  ) => {
    const host = getComponent(ctx);
    applyScreenPositionStyle =
      applyScreenPositionStyle ||
      ((screenPosition, element) => {
        element.style.left = `${screenPosition[0]}vw`;
        element.style.bottom = `${screenPosition[1]}vh`;
      });
    const element = document.createElement("div");
    element?.classList.add("cursor");
    classes?.forEach((c) => element?.classList.add(c));
    // element.style.width = "5vw";
    // element.style.height = "5vw";
    host?.shadowRoot?.appendChild(element);

    const alignToScreenPosition = (screenPosition) => {
      applyScreenPositionStyle!(screenPosition, element);
    };

    const alignToNDCPosition = (screenPositionNDC) => {
      // convert from normalized device coordinates to window coordinates
      const screenPosition = [
        ((screenPositionNDC[0] + 1) / 2) * 100,
        ((screenPositionNDC[1] + 1) / 2) * 100,
      ];

      alignToScreenPosition(screenPosition);
    };

    const alignToNode = throttle(async (node) => {
      const nodePosition = getNodePosition(ctx, node);
      const screenPositionNDC = await computeScreenPosition(ctx, nodePosition);
      alignToNDCPosition(screenPositionNDC);
    }, 1000 / 10);

    const highlightNode = throttle(async (node) => {
      if (node) {
        await alignToNode(node);
        element.classList.add("focused");
      } else {
        element.classList.remove("focused");
      }
      node && htmlTemplate && render(htmlTemplate(node), element);
    }, 50);

    return {
      element,
      alignToScreenPosition,
      alignToNDCPosition,
      alignToNode,
      highlightNode,
      destroy: () => element.remove(),
    };
  },
);

export const selectedCursor = moize.infinite((ctx) =>
  makeCursor(ctx, {
    classes: ["selected-cursor"],
  }),
);
export const hoveredTooltip = moize.infinite((ctx) =>
  makeCursor(ctx, {
    classes: ["hovered-tooltip"],
    htmlTemplate: (node) => html`
      <div class="node-name">${node.data?.name}</div>
    `,
    applyScreenPositionStyle(screenPosition, element) {
      element.style.left = `calc(min(${screenPosition[0]}vw, calc(100vw - 15em)))`;
      element.style.bottom = `${screenPosition[1]}vh`;
    },
  }),
);
export const hoveredCursor = moize.infinite((ctx) =>
  makeCursor(ctx, {
    classes: ["hovered-cursor"],
  }),
);
