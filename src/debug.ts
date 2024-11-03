import { state } from "./state";
export const togglePickerDebug = (ctx) =>
  state(ctx, "togglePickerDebug", () => false);
export const enablePickerDebug = (ctx) => {
  window.addEventListener("keypress", (e) => {
    if (e.key == "p") {
      console.log(e, "toggling picker debugging");
      const { get, set } = togglePickerDebug(ctx);
      set(get() ? false : true);
    }
  });
};
// import queuedThrottle from "throttled-queue";
// import { controls } from "./attributes";
// import { getGraphData } from "./data";
// import { trackFPS } from "./fps";
// export const setupDebugStuff = async () => {
//   const graphData = await getGraphData();
//   const { nodes, links, linkIndexPairs } = graphData;

//   // display the graph stats in a panel
//   const controlsPanel = document.querySelector("#controls")!;
//   controlsPanel.classList.add("overlay");
//   controlsPanel.classList.add("debug");
//   controlsPanel.style.top = "0";
//   controlsPanel.style.right = "0";

//   document.body.appendChild(controlsPanel);

//   const nodesCount = document.createElement("div");
//   nodesCount.innerHTML = `Nodes: ${nodes.length}`;
//   controlsPanel.appendChild(nodesCount);

//   const edgesCount = document.createElement("div");
//   edgesCount.innerHTML = `Edges: ${linkIndexPairs.length}`;
//   controlsPanel.appendChild(edgesCount);

//   const debugMessage = document.createElement("div");
//   debugMessage.id = "debug-message";
//   controlsPanel.appendChild(debugMessage);

//   controlsPanel.appendChild(controls);

//   trackFPS();
//   // toggle debug panel
//   window.addEventListener("keydown", (e) => {
//     const showing = document.querySelector("html")!.classList.contains("debug");
//     if (e.key === "d") {
//       document.querySelector("html")!.classList.toggle("debug", !showing);
//     }
//   });

//   // detect a quadruple tap to enable debugging on mobile
//   let lastTap = 0;
//   let tapCount = 0;
//   document.addEventListener("pointerup", (e) => {
//     const now = Date.now();
//     if (now - lastTap < 300) {
//       tapCount++;
//     } else {
//       tapCount = 1;
//     }
//     lastTap = now;
//     if (tapCount === 4) {
//       tapCount = 0;
//       document.querySelector("html")!.classList.toggle("debug");
//     }
//   });
// };

// const debugMessageQueue = queuedThrottle(1, 1000);
// export const logDebugMessage = (message) =>
//   debugMessageQueue(() => {
//     const debugMessageArea = document.querySelector("#debug-message");
//     if (debugMessageArea) {
//       debugMessageArea.innerHTML = message;
//     }
//     console.log(message);
//   });
