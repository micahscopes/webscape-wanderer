import createCamera from 'inertial-turntable-camera'
import interactionEvents from 'normalized-interaction-events'
import { getPicoApp } from './rendering'
import moize from 'moize'
import PicoGL from 'picogl'

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

const radiansPerHalfScreenWidth = Math.PI * 0.5;

export const setupCameraInteraction = () => {
  const app = getPicoApp()
  const globalCamera = getGlobalCamera()
  const canvas = app.canvas

  interactionEvents(canvas)
    .on('wheel', function (ev) {
      globalCamera.zoom(ev.x, ev.y, Math.exp(-ev.dy) - 1.0);
      ev.originalEvent.preventDefault();
    })
    .on('mousemove', function (ev) {
      if (!ev.active || ev.buttons !== 1) return;

      if (ev.mods.shift) {
        globalCamera.pan(ev.dx, ev.dy);
      } else if (ev.mods.meta) {
        globalCamera.pivot(ev.dx, ev.dy);
      } else {
        globalCamera.rotate(
          -ev.dx * radiansPerHalfScreenWidth,
          -ev.dy * radiansPerHalfScreenWidth
        );
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
      globalCamera.zoom(ev.x, ev.y, 1 - ev.zoomx);
      globalCamera.pan(ev.dx, ev.dy);
    })
    .on('touchstart', ev => ev.originalEvent.preventDefault())
    .on('pinchstart', ev => ev.originalEvent.preventDefault())

}

export const getCamerasUniformBuffer = moize.infinite(() => {
  const app = getPicoApp();
  const buffer = app.createUniformBuffer([
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
  ]);
  return buffer;
});

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
}

export const updateCameras = () => {
  const globalCamera = getGlobalCamera();
  const clippingDistances = {
    near: clamp(globalCamera.params.distance*0.1, 10, 50),
    far: globalCamera.params.distance+10000,
  }
  globalCamera.resize(window.innerWidth / window.innerHeight);
  globalCamera.tick(clippingDistances);
  console.log(globalCamera.params.distance)
  
  const orthoCameraZoomed = getOrthographicCamera('zoomed');
  orthoCameraZoomed.params.distance = globalCamera.params.distance;
  orthoCameraZoomed.resize(window.innerWidth / window.innerHeight);
  orthoCameraZoomed.tick(clippingDistances);
  
  const orthoCameraFixed = getOrthographicCamera('fixed');
  orthoCameraFixed.resize(window.innerWidth / window.innerHeight);
  orthoCameraFixed.tick(clippingDistances)

  const camerasUniformBuffer = getCamerasUniformBuffer()
  camerasUniformBuffer
    .set(0, globalCamera.state.projection)
    .set(1, globalCamera.state.view)
    .set(2, orthoCameraZoomed.state.projection)
    .set(3, orthoCameraZoomed.state.view)
    .set(4, orthoCameraFixed.state.projection)
    .set(5, orthoCameraFixed.state.view)
    .update();
}