import createCamera from 'inertial-turntable-camera'
import interactionEvents from 'normalized-interaction-events'
import { getPicoApp } from './rendering'
import moize from 'moize'

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
export const getLocalCamera = moize.infinite(() => {
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
