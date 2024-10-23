import { wrap } from "comlink";

import Worker from "./worker.js?worker&inline";
import * as notWorker from "./worker";
import { detect } from "detect-browser";
import moize from "moize";

const agent = detect(navigator.userAgent);
const useWorkers = agent?.name !== "safari" && agent?.os !== "iOS";

if (useWorkers) {
  console.log("Using workers");
} else {
  console.warn(
    "Not using workers due to an awful memory leak that makes WebKit crash if you use workers",
  );
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
