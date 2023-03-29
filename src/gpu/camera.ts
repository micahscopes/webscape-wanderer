import createCamera from 'inertial-turntable-camera'
import interactionEvents from 'normalized-interaction-events'
import { getPicoApp } from './rendering'
import moize from 'moize'

export const getCamera = moize.infinite(() => {
  const camera = createCamera({
    phi: 0.5,
    theta: 1,
    distance: 2000,  
    center: [0, 4, 0],
  })
  return camera
})

const radiansPerHalfScreenWidth = Math.PI * 0.5;

export const setupCameraInteraction = () => {
  const app = getPicoApp()
  const camera = getCamera()
  const canvas = app.canvas

  interactionEvents(canvas)
    .on('wheel', function (ev) {
      camera.zoom(ev.x, ev.y, Math.exp(-ev.dy) - 1.0);
      ev.originalEvent.preventDefault();
    })
    .on('mousemove', function (ev) {
      if (!ev.active || ev.buttons !== 1) return;

      if (ev.mods.shift) {
        camera.pan(ev.dx, ev.dy);
      } else if (ev.mods.meta) {
        camera.pivot(ev.dx, ev.dy);
      } else {
        camera.rotate(
          -ev.dx * radiansPerHalfScreenWidth,
          -ev.dy * radiansPerHalfScreenWidth
        );
      }
      ev.originalEvent.preventDefault();
    })
    .on('touchmove', function (ev) {
      if (!ev.active) return;
      camera.rotate(
        -ev.dx * radiansPerHalfScreenWidth,
        -ev.dy * radiansPerHalfScreenWidth
      );
      ev.originalEvent.preventDefault();
    })
    .on('pinchmove', function (ev) {
      if (!ev.active) return;
      camera.zoom(ev.x, ev.y, 1 - ev.zoomx);
      camera.pan(ev.dx, ev.dy);
    })
    .on('touchstart', ev => ev.originalEvent.preventDefault())
    .on('pinchstart', ev => ev.originalEvent.preventDefault())

}
