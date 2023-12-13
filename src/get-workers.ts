import { wrap } from "comlink";

import Worker from "./worker.js?worker&inline";
import * as notWorker from "./worker";
import { detect } from "detect-browser";

const useWorkers = detect(navigator.userAgent)?.name !== "safari";
if (useWorkers) {
  console.log("Using workers");
} else {
  console.log("Not using workers");
}

export const graphDb = useWorkers 
  ? wrap(new Worker())
  : notWorker.db;

export const graphLayout = useWorkers 
  ? wrap(new Worker())
  : notWorker.layout;
  
export const graphCameraAnimation = false
  ? wrap(new Worker())
  : notWorker.cameraAnimation;
