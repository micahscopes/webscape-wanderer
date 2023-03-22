// rendering setup

import PicoGL from 'picogl'
import moize from 'moize'

export const getApp = moize.infinite(() => {
  const canvas = document.createElement('canvas')
  document.appendChild(canvas)
  return PicoGL.createApp(canvas)
})

import updatePositionsFs from './shaders/updatePositions.fs.glsl'
import updatePositionsVs from './shaders/updatePositions.vs.glsl'

export const updatePositionsProgram = moize.infinite(() => {
  const app = getApp()
  return app.createProgram(
    updatePositionsVs,
    updatePositionsFs
  )
})