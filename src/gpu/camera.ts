import moize from 'moize'
import { proxy } from 'comlink'
import { throttle } from 'lodash-es'

import { UniformsGroup, Uniform, Matrix4 } from 'three'
import { getViewMatrixLayers } from './interpolation'

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
    getViewMatrixLayers().target.setFromArray(globalView)

    const uniforms = getCamerasUniforms()
    uniforms.globalPerspective.value.fromArray(globalPerspective)
    uniforms.globalView.value.fromArray(globalView)
    uniforms.zoomedProjection.value.fromArray(zoomedProjection)
    uniforms.zoomedView.value.fromArray(zoomedView)
    uniforms.fixedPerspective.value.fromArray(fixedPerspective)
    uniforms.fixedView.value.fromArray(fixedView)
  }, 1000/120)
)