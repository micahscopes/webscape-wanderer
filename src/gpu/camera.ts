import createCamera from 'inertial-turntable-camera'
import interactionEvents from 'normalized-interaction-events'
import { getPicoApp } from './rendering'
import moize from 'moize'
import PicoGL, { UniformBuffer } from 'picogl'
import { proxy } from 'comlink'
import { throttle } from 'lodash-es'

import { UniformsGroup, Uniform, Matrix4 } from 'three'

export const getCamerasUniformBuffer = moize.infinite(() => {
  const app = getPicoApp();
  const buffer = app.createUniformBuffer([
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.FLOAT_MAT4,
    PicoGL.UNSIGNED_INT
  ]);
  return buffer;
});


const getCamerasUniforms = moize.infinite(() => {
  return {
    globalPerspective:  new Uniform(new Matrix4()),
    globalView:         new Uniform(new Matrix4()),
    zoomedProjection:   new Uniform(new Matrix4()),
    zoomedView:         new Uniform(new Matrix4()),
    fixedPerspective:   new Uniform(new Matrix4()),
    fixedView:          new Uniform(new Matrix4()),
  }
})

export const getCamerasUniformsGroup = moize.infinite(() => {
  const group = new UniformsGroup();
  group.setName('cameras')
  const uniforms = getCamerasUniforms();

  Object.values(uniforms).forEach((uniform) => {
    group.add(uniform);
  });
  
  return group
})

// const clamp = (value: number, min: number, max: number) => {
//   return Math.min(Math.max(value, min), max);
// }

export const updateCamerasUniformsGroup = proxy(
  // throttle to prevent backpressure
  throttle((
    globalPerspective,
    globalView,
    zoomedProjection,
    zoomedView,
    fixedPerspective,
    fixedView,
  ) => {
    // console.log('updating cameras', globalPerspective, globalView, zoomedProjection, zoomedView, fixedPerspective, fixedView)
    const uniforms = getCamerasUniforms()
    uniforms.globalPerspective.value.fromArray(globalPerspective)
    uniforms.globalView.value.fromArray(globalView)
    uniforms.zoomedProjection.value.fromArray(zoomedProjection)
    uniforms.zoomedView.value.fromArray(zoomedView)
    uniforms.fixedPerspective.value.fromArray(fixedPerspective)
    uniforms.fixedView.value.fromArray(fixedView)
  }, 1)
)

// export const updateCameraUniforms = proxy(
//   // throttle to prevent backpressure
//   throttle((
//     globalPerspective,
//     globalView,
//     zoomedProjection,
//     zoomedView,
//     fixedPerspective,
//     fixedView,
//   ) => {
//     // console.log('updating cameras', globalPerspective, globalView, zoomedProjection, zoomedView, fixedPerspective, fixedView)    
//     getCamerasUniformBuffer()
//       .set(0, globalPerspective)
//       .set(1, globalView)
//       .set(2, zoomedProjection)
//       .set(3, zoomedView)
//       .set(4, fixedPerspective)
//       .set(5, fixedView)
//       .update()
//     }, 1)
// )