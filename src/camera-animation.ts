import { transfer } from "./transfer-but-not-on-webkit";
import createCamera from "inertial-turntable-camera";
import moize from "moize";

const getGlobalCamera = moize.infinite((ctx) => {
  const camera = createCamera({
    // phi: 0.5,
    // theta: 1,
    panDecayTime: 200,
    zoomDecayTime: 200,
    rotationDecayTime: 500,
    distance: 2000,
    // center: [0, 4, 0],
    // fovY: (5 / 360) * (Math.PI/2),
  });
  return camera;
});

// an orthographic camera for the local node projection
const getOrthographicCamera = moize.infinite((ctx, tag) => {
  const distance = 200;
  const camera = createCamera({
    phi: Math.PI / 4,
    theta: Math.PI / 4,
    distance,
    center: [0, 0, 0],
    fovY: (5 / 360) * (Math.PI / 2),
    near: distance * 0.01,
    far: distance * 2,
  });

  return camera;
});

// const globalCamera = getGlobalCamera()

const updateCameras = (ctx, setCameraUniformBuffers, width, height) => {
  const globalCamera = getGlobalCamera(ctx);
  const clippingDistances = {
    // near: clamp(globalCamera.params.distance*0.1, 10, 50),
    // far: globalCamera.params.distance+10000,
    // near: clamp(globalCamera.params.distance*0.01, 0, 50),
    near: globalCamera.params.distance * 0.1,
    far: globalCamera.params.distance * 50000,
  };
  globalCamera.resize(width / height);
  globalCamera.tick({
    fovY: Math.PI / 3,
    ...clippingDistances,
  });
  // console.debug(globalCamera.params.distance, globalCamera.state.view[0]+globalCamera.state.view[5])
  // console.debug(globalCamera.params)

  const orthoCameraZoomed = getOrthographicCamera(ctx, "zoomed");
  orthoCameraZoomed.params.distance = globalCamera.params.distance;
  orthoCameraZoomed.params.center = [0, 0, 0];
  orthoCameraZoomed.resize(width / height);
  orthoCameraZoomed.tick(clippingDistances);

  const orthoCameraFixed = getOrthographicCamera(ctx, "fixed");
  orthoCameraFixed.resize(width / height);
  orthoCameraFixed.tick({
    near: orthoCameraFixed.params.distance * 0.1,
    far: orthoCameraFixed.params.distance * 10000,
  });

  // manually copy the matrices here
  const globalProjection = new Float32Array(globalCamera.state.projection);
  const globalView = new Float32Array(globalCamera.state.view);
  const orthoProjectionZoomed = new Float32Array(
    orthoCameraZoomed.state.projection,
  );
  const orthoViewZoomed = new Float32Array(orthoCameraZoomed.state.view);
  const orthoProjectionFixed = new Float32Array(
    orthoCameraFixed.state.projection,
  );
  const orthoViewFixed = new Float32Array(orthoCameraFixed.state.view);

  const packedCameraParams = new Float32Array([
    globalCamera.params.distance,
    globalCamera.params.rotationCenter[0],
    globalCamera.params.rotationCenter[1],
    globalCamera.params.rotationCenter[2],
    globalCamera.params.center[0],
    globalCamera.params.center[1],
    globalCamera.params.center[2],
    globalCamera.params.phi,
    globalCamera.params.theta,
  ]);

  setCameraUniformBuffers(
    transfer(globalProjection, [globalProjection.buffer]),
    transfer(globalView, [globalView.buffer]),
    transfer(orthoProjectionZoomed, [orthoProjectionZoomed.buffer]),
    transfer(orthoViewZoomed, [orthoViewZoomed.buffer]),
    transfer(orthoProjectionFixed, [orthoProjectionFixed.buffer]),
    transfer(orthoViewFixed, [orthoViewFixed.buffer]),
    transfer(packedCameraParams, [packedCameraParams.buffer]),
  );
};

// const c = globalCamera.params.center
const getCenterSpringDamper = (ctx) =>
  state(
    ctx,
    "centerSpringDamper",
    () => new SpringDamper(getGlobalCamera(ctx).params.center),
  ).get();

const centerUpdate = curry((ctx, newCenter) => {
  const globalCamera = getGlobalCamera(ctx);
  globalCamera.params.center = newCenter;
  // console.debug("setCameraCenter", newCenter);
  // zoomedOrthographicCamera.params.center = newCenter;
});

const startCenterSpring = debounce(
  (ctx) => {
    // console.debug("starting center spring for", ctx);
    // centerSpringDamper.updateTarget(globalCamera.params.center)
    const globalCamera = getGlobalCamera(ctx);
    const centerSpringDamper = getCenterSpringDamper(ctx);
    centerSpringDamper.updateInitialValues(globalCamera.params.center);
    centerSpringDamper.animate(centerUpdate(ctx));
  },
  2,
  {
    maxWait: 2,
    trailing: true,
  },
);

const setCameraCenter = debounce(
  (ctx, newCenter) => {
    // console.debug("setCameraCenter, updating target", [...newCenter]);
    const globalCamera = getGlobalCamera(ctx);
    const centerSpringDamper = getCenterSpringDamper(ctx);
    globalCamera.params.rotationCenter = newCenter;
    centerSpringDamper.updateTarget(newCenter);
    startCenterSpring(ctx);
  },
  7,
  {
    maxWait: 16,
  },
);

// const distanceSpringDamper = new SpringDamper(globalCamera.params.distance);
const getDistanceSpringDamper = (ctx) =>
  state(
    ctx,
    "distanceSpringDamper",
    () => new SpringDamper(getGlobalCamera(ctx).params.distance),
  ).get();

const distanceUpdate = (ctx) => (newDistance) => {
  // console.debug("animating camera distance", newDistance);
  const globalCamera = getGlobalCamera(ctx);
  globalCamera.params.distance = newDistance;
  // zoomedOrthographicCamera.params.distance = newDistance;
};

const startDistanceSpring = debounce(
  (ctx) => {
    const globalCamera = getGlobalCamera(ctx);
    const distanceSpringDamper = getDistanceSpringDamper(ctx);
    distanceSpringDamper.updateTarget(globalCamera.params.distance);
    distanceSpringDamper.updateInitialValues(globalCamera.params.distance);
    distanceSpringDamper.animate(distanceUpdate(ctx));
  },
  100,
  {
    // maxWait: 16,
    leading: true,
  },
);

const setCameraDistance = (ctx, distance, duration = 5000) => {
  console.debug("setCameraDistance", distance);
  const distanceSpringDamper = getDistanceSpringDamper(ctx);
  distanceSpringDamper.updateTarget(distance);
};

const startCameraAnimation = (ctx) => {
  startCenterSpring(ctx);
  startDistanceSpring(ctx);
};

// let panning = false;
// let zooming = false;

const getCameraAnimationState = (ctx) =>
  state(ctx, "cameraAnimationState", () => ({
    panning: false,
    zooming: false,
  })).get();

const startPanning = (ctx) => {
  const cameraAnimationState = getCameraAnimationState(ctx);
  cameraAnimationState.panning = true;
  console.debug("quitting pan");
  getComponent(ctx).focus = null;
  getCenterSpringDamper(ctx).stop();
  // const centerSpringDamper = getCenterSpringDamper(ctx);
  // centerSpringDamper.stop();
};

const stopPanning = (ctx) => {
  const cameraAnimationState = getCameraAnimationState(ctx);
  cameraAnimationState.panning = false;
};

const startZooming = (ctx) => {
  const cameraAnimationState = getCameraAnimationState(ctx);
  cameraAnimationState.zooming = true;
  const distanceSpringDamper = getDistanceSpringDamper(ctx);
  distanceSpringDamper.stop();
};

const stopZooming = (ctx) => {
  const cameraAnimationState = getCameraAnimationState(ctx);
  cameraAnimationState.zooming = false;
  startDistanceSpring(ctx);
};

const zoomGlobalCamera = (ctx, x, y, delta) => {
  const globalCamera = getGlobalCamera(ctx);
  if (globalCamera.params.distance > 25 || delta > 0) {
    globalCamera.zoom(x, y, delta);
  }
};

const panGlobalCamera = (ctx, ...args) => {
  const globalCamera = getGlobalCamera(ctx);
  globalCamera.pan(...args);
};

const getGlobalCameraParams = (ctx) => {
  const globalCamera = getGlobalCamera(ctx);
  return globalCamera.params;
};

import { mat4, vec4 } from "gl-matrix";
import SpringDamper from "./spring-damper";
import { curry, debounce, throttle } from "lodash-es";
import { state } from "./state";
import { getComponent } from "./context";

const computeScreenPosition = (ctx, [x, y, z]) => {
  const { projection, view } = getGlobalCamera(ctx).state;
  const positionWorld = vec4.fromValues(x, y, z, 1);
  const positionClip = vec4.create();
  const positionNDC = vec4.create();

  // @ts-ignore
  const projectionMatrix = mat4.fromValues(...projection);
  // @ts-ignore
  const viewMatrix = mat4.fromValues(...view);

  const modelViewProjectionMatrix = mat4.create();
  mat4.multiply(modelViewProjectionMatrix, projectionMatrix, viewMatrix);

  vec4.transformMat4(positionClip, positionWorld, modelViewProjectionMatrix);
  vec4.scale(positionNDC, positionClip, 1 / positionClip[3]);

  return [positionNDC[0], positionNDC[1], positionNDC[2]];
};

export {
  startCameraAnimation,
  startPanning,
  stopPanning,
  startZooming,
  stopZooming,
  getGlobalCamera,
  getGlobalCameraParams,
  updateCameras,
  setCameraCenter,
  setCameraDistance,
  zoomGlobalCamera,
  panGlobalCamera,
  computeScreenPosition,
};
