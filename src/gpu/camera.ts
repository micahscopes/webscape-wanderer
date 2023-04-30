import moize from 'moize'
import { proxy } from 'comlink'
import { throttle } from 'lodash-es'

import { UniformsGroup, Uniform, Matrix4, Vector3 } from 'three'
import { getCameraParametersLayers, getFixedViewMatrixLayers, getViewMatrixLayers } from './interpolation'

const getCamerasUniforms = moize.infinite(() => {
  return {
    globalPerspective:  new Uniform(new Matrix4()),
    globalView:         new Uniform(new Matrix4()),
    zoomedProjection:   new Uniform(new Matrix4()),
    zoomedView:         new Uniform(new Matrix4()),
    fixedPerspective:   new Uniform(new Matrix4()),
    fixedView:          new Uniform(new Matrix4()),
    distance:           new Uniform(0),
    center:             new Uniform(new Vector3(0, 0, 0)),
    rotationCenter:     new Uniform(new Vector3(0, 0, 0)),
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
  (
    globalPerspective,
    globalView,
    zoomedProjection,
    zoomedView,
    fixedPerspective,
    fixedView,
    packedCameraParams
  ) => {
    const uniforms = getCamerasUniforms()
    uniforms.globalPerspective.value.fromArray(globalPerspective)
    uniforms.globalView.value.fromArray(globalView)
    uniforms.zoomedProjection.value.fromArray(zoomedProjection)
    uniforms.zoomedView.value.fromArray(zoomedView)
    uniforms.fixedPerspective.value.fromArray(fixedPerspective)
    uniforms.fixedView.value.fromArray(fixedView)
    uniforms.distance.value = packedCameraParams[0]
    uniforms.center.value.fromArray(packedCameraParams.slice(1, 4))
    uniforms.rotationCenter.value.fromArray(packedCameraParams.slice(4, 7))

  }
)