import { expose, proxy, transfer } from 'comlink'
import createCamera from 'inertial-turntable-camera'
import moize from 'moize'
import { UniformBuffer } from 'picogl'
import tweenFactory from '@tsdotnet/tween-factory';
import cubic from '@tsdotnet/tween-factory/src/easing/cubic';

export const getGlobalCamera = moize.infinite(() => {
  const camera = createCamera({
    // phi: 0.5,
    // theta: 1,
    distance: 2000,  
    // center: [0, 4, 0],
    // fovY: (5 / 360) * (Math.PI/2),
  })
  return camera
})


// an orthographic camera for the local node projection
export const getOrthographicCamera = moize.infinite((tag) => {
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

const zoomGlobalCamera = (...args) => {
  globalCamera.zoom(...args)
}

export const updateCameras = (setCameraUniformBuffers, width, height) => {
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
    fovY: Math.PI/2,
    ...clippingDistances
  });
  // console.log(globalCamera.params.distance)
  
  const orthoCameraZoomed = getOrthographicCamera('zoomed');
  orthoCameraZoomed.params.distance = globalCamera.params.distance;
  orthoCameraZoomed.resize(width/height);
  orthoCameraZoomed.tick(clippingDistances);
  
  const orthoCameraFixed = getOrthographicCamera('fixed');
  orthoCameraFixed.resize(width/height);
  orthoCameraFixed.tick({
    near: orthoCameraFixed.params.distance*0.1,
    far: orthoCameraFixed.params.distance*10000, 
  })

  // camerasUniformBuffer
  //   .set(0, transfer(globalCamera.state.projection, [globalCamera.state.projection.buffer]))
  //   .set(1, transfer(globalCamera.state.view, [globalCamera.state.view.buffer]))
  //   .set(2, transfer(orthoCameraZoomed.state.projection, [orthoCameraZoomed.state.projection.buffer]))
  //   .set(3, transfer(orthoCameraZoomed.state.view, [orthoCameraZoomed.state.view.buffer]))
  //   .set(4, transfer(orthoCameraFixed.state.projection, [orthoCameraFixed.state.projection.buffer]))
  //   .set(5, transfer(orthoCameraFixed.state.view, [orthoCameraFixed.state.view.buffer]))
  //   .update();

  // copy them instead of transfering them
  
  // manually copy the matrices here
  const globalProjection = new Float32Array(globalCamera.state.projection);
  const globalView = new Float32Array(globalCamera.state.view);
  const orthoProjectionZoomed = new Float32Array(orthoCameraZoomed.state.projection);
  const orthoViewZoomed = new Float32Array(orthoCameraZoomed.state.view);
  const orthoProjectionFixed = new Float32Array(orthoCameraFixed.state.projection);
  const orthoViewFixed = new Float32Array(orthoCameraFixed.state.view);
  
  setCameraUniformBuffers(
    transfer(globalProjection, [globalProjection.buffer]),
    transfer(globalView, [globalView.buffer]),
    transfer(orthoProjectionZoomed, [orthoProjectionZoomed.buffer]),
    transfer(orthoViewZoomed, [orthoViewZoomed.buffer]),
    transfer(orthoProjectionFixed, [orthoProjectionFixed.buffer]),
    transfer(orthoViewFixed, [orthoViewFixed.buffer]),
  )
}


const tween = tweenFactory().updateOnAnimationFrame().easing(cubic.easeInOut);

const setCameraCenter = (center, duration=3000) => {
  const newCenter = JSON.parse(JSON.stringify(center));
  tween.duration(duration).tween(globalCamera.params.center, newCenter)
  globalCamera.params.rotationCenter = newCenter;

}

expose({
  globalCamera,
  updateCameras,
  setCameraCenter,
  zoomGlobalCamera
})