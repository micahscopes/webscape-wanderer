import { expose } from 'comlink'
import { transfer } from './transfer-but-not-on-webkit'
import createCamera from 'inertial-turntable-camera'
import moize from 'moize'
import * as TWEEN from '@tweenjs/tween.js'
import requestAnimationFrame from 'raf'

const getGlobalCamera = moize.infinite(() => {
  const camera = createCamera({
    // phi: 0.5,
    // theta: 1,
    panDecayTime: 200,
    zoomDecayTime: 200,
    rotationDecayTime: 500,
    distance: 2000,
    // center: [0, 4, 0],
    // fovY: (5 / 360) * (Math.PI/2),
  })
  return camera
})


// an orthographic camera for the local node projection
const getOrthographicCamera = moize.infinite((tag) => {
  const distance = 200
  const camera = createCamera({
    phi: Math.PI/4,
    theta: Math.PI/4,
    distance,
    center: [0, 0, 0],
    fovY: (5 / 360) * (Math.PI/2),
    near: distance * 0.01,
    far: distance * 2,
  })
  
  return camera
})

const globalCamera = getGlobalCamera()
const zoomedOrthographicCamera = getOrthographicCamera('zoomed')

const updateCameras = (setCameraUniformBuffers, width, height) => {
  const globalCamera = getGlobalCamera();
  const clippingDistances = {
    // near: clamp(globalCamera.params.distance*0.1, 10, 50),
    // far: globalCamera.params.distance+10000,
    // near: clamp(globalCamera.params.distance*0.01, 0, 50),
    near: globalCamera.params.distance*0.1,
    far: globalCamera.params.distance*50000,
  }
  globalCamera.resize(width/height);
  globalCamera.tick({
    fovY: Math.PI/3,
    ...clippingDistances
  });
  // console.log(globalCamera.params.distance, globalCamera.state.view[0]+globalCamera.state.view[5])
  // console.log(globalCamera.params)
  
  const orthoCameraZoomed = getOrthographicCamera('zoomed');
  orthoCameraZoomed.params.distance = globalCamera.params.distance;
  orthoCameraZoomed.params.center = [0,0,0];
  orthoCameraZoomed.resize(width/height);
  orthoCameraZoomed.tick(clippingDistances);
  
  const orthoCameraFixed = getOrthographicCamera('fixed');
  orthoCameraFixed.resize(width/height);
  orthoCameraFixed.tick({
    near: orthoCameraFixed.params.distance*0.1,
    far: orthoCameraFixed.params.distance*10000, 
  })

  // manually copy the matrices here
  const globalProjection = new Float32Array(globalCamera.state.projection);
  const globalView = new Float32Array(globalCamera.state.view);
  const orthoProjectionZoomed = new Float32Array(orthoCameraZoomed.state.projection);
  const orthoViewZoomed = new Float32Array(orthoCameraZoomed.state.view);
  const orthoProjectionFixed = new Float32Array(orthoCameraFixed.state.projection);
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
  ])
  
  setCameraUniformBuffers(
    transfer(globalProjection, [globalProjection.buffer]),
    transfer(globalView, [globalView.buffer]),
    transfer(orthoProjectionZoomed, [orthoProjectionZoomed.buffer]),
    transfer(orthoViewZoomed, [orthoViewZoomed.buffer]),
    transfer(orthoProjectionFixed, [orthoProjectionFixed.buffer]),
    transfer(orthoViewFixed, [orthoViewFixed.buffer]),
    transfer(packedCameraParams, [packedCameraParams.buffer]),
  )
}


// const tween = tweenFactory().updateOnAnimationFrame();
let centerTween : TWEEN.Tween<any>;
let distanceTween : TWEEN.Tween<any>;

const c = globalCamera.params.center
const centerSpringDamper = new SpringDamper(c)
const centerUpdate = (newCenter) => {
  // console.log('setCameraCenter', newCenter)
  globalCamera.params.center = newCenter;
  // zoomedOrthographicCamera.params.center = newCenter;
} 

const startCenterSpring = debounce(() => {
  // centerSpringDamper.updateTarget(globalCamera.params.center)
  centerSpringDamper.updateInitialValues(globalCamera.params.center)
  centerSpringDamper.animate(centerUpdate)
}, 100)

const setCameraCenter = (newCenter, duration=3000) => {
  // console.log('setCameraCenter, updating target', [...newCenter])
  globalCamera.params.rotationCenter = newCenter;
  centerSpringDamper.updateTarget(newCenter)
  startCenterSpring()
}

const distanceSpringDamper = new SpringDamper(globalCamera.params.distance)
const distanceUpdate = (newDistance) => {
  // console.log('setCameraDistance', newDistance)
  globalCamera.params.distance = newDistance;
  // zoomedOrthographicCamera.params.distance = newDistance;
} 

const startDistanceSpring = debounce(() => {
  distanceSpringDamper.updateTarget(globalCamera.params.distance)
  distanceSpringDamper.updateInitialValues(globalCamera.params.distance)
  distanceSpringDamper.animate(distanceUpdate)
}, 100)

const setCameraDistance = (distance, duration=5000) => {
  // console.log('setCameraDistance', distance)
  distanceSpringDamper.updateTarget(distance)
}

// startCenterSpring()
// startDistanceSpring()

const startCameraAnimation = () => {
  startCenterSpring()
  startDistanceSpring()
}

let panning = false
let zooming = false

const startPanning = () => {
  panning = true
  // centerTween?.stop()
  centerSpringDamper.stop()
}

const stopPanning = () => {
  panning = false
  // startCenterSpring()
}

const startZooming = () => {
  zooming = true
  // distanceTween?.stop()
  distanceSpringDamper.stop()
}

const stopZooming = () => {
  zooming = false
  startDistanceSpring()
}

const zoomGlobalCamera = (x,y,delta) => {
  // limit zooming in
  if (globalCamera.params.distance > 25 || delta > 0) {
    globalCamera.zoom(x,y,delta)
  }
}

const panGlobalCamera = (...args) => {
  globalCamera.pan(...args)
}

const getGlobalCameraParams = () => {
  return globalCamera.params
}

import { mat4, vec4, vec2 } from 'gl-matrix';
import SpringDamper from './spring-damper'
import { debounce } from 'lodash-es'

const computeScreenPosition = ([x,y,z]) => {
  const {projection, view} = getGlobalCamera().state;
  const positionWorld = vec4.fromValues(x,y,z,1);
  const positionClip = vec4.create();
  const positionNDC = vec4.create();
  
  // @ts-ignore
  const projectionMatrix = mat4.fromValues(...projection);
  // @ts-ignore
  const viewMatrix = mat4.fromValues(...view);
  
  const modelViewProjectionMatrix = mat4.create();
  mat4.multiply(modelViewProjectionMatrix, projectionMatrix, viewMatrix);

  vec4.transformMat4(positionClip, positionWorld, modelViewProjectionMatrix);
  vec4.scale(positionNDC, positionClip, 1/positionClip[3]);

  return [positionNDC[0], positionNDC[1], positionNDC[2]];
}


export {
  startCameraAnimation,
  startPanning,
  stopPanning,
  startZooming,
  stopZooming,
  globalCamera,
  getGlobalCameraParams,
  updateCameras,
  setCameraCenter,
  setCameraDistance,
  zoomGlobalCamera,
  panGlobalCamera,
  computeScreenPosition,
}
