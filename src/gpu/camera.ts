import createCamera from 'inertial-turntable-camera'
import interactionEvents from 'normalized-interaction-events'
import { getPicoApp } from './rendering'
import moize from 'moize'
import PicoGL, { UniformBuffer } from 'picogl'
import { proxy } from 'comlink'
import { throttle } from 'lodash-es'

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

export const updateCameraUniforms = proxy(
  // throttle to prevent backpressure
  throttle((
    globalPerspective,
    globalView,
    zoomedProjection,
    zoomedView,
    fixedPerspective,
    fixedView    
  ) => {
    // console.log('updating cameras', globalPerspective, globalView, zoomedProjection, zoomedView, fixedPerspective, fixedView)    
    getCamerasUniformBuffer()
      .set(0, globalPerspective)
      .set(1, globalView)
      .set(2, zoomedProjection)
      .set(3, zoomedView)
      .set(4, fixedPerspective)
      .set(5, fixedView)
      .update()
    }, 1)
  )