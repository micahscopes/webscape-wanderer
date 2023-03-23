import PicoGL from 'picogl'
import { VertexBuffer } from 'picogl'
import moize from 'moize'

import interpolationVs from './shaders/interpolation.vs'
import interpolationFs from './shaders/interpolation.fs'
import { getPicoApp } from './rendering'

class InterpolationBuffers {
  protected positionSwap = false

  protected _currentA: VertexBuffer
  protected _currentB: VertexBuffer
  protected _target: VertexBuffer
  
  protected _itemSize: number
  protected _type: GLenum

  constructor(type: GLenum, itemSize: number, data: ArrayBufferView | number) {
    this._type = type
    this._itemSize = itemSize
    this.targetData(data);
  }

  // this will only rebuild the buffers if the length changes
  makeBuffer = moize((numItems, tag: string) => {
    const app = getPicoApp()
    return app.createVertexBuffer(this._type, this._itemSize, numItems)
  })
  
  // set target data, rebuilding buffers if necessary
  targetData = (data: ArrayBufferView | number, {
    offset = 0, // offset for modifying existing data
    immediate = false, // whether to update the current buffer immediately
  } = {}) => {
    let length
    if (offset > 0) {
      // if the user provides an offset, use the existing buffer (which is memoized by length)
      length = this._target.numItems 
    } else {
      // otherwise, we need to figure out if the length has changed
      length = ArrayBuffer.isView(data) ? data.byteLength / this._itemSize : data
    }
    this._currentA = this.makeBuffer(length, 'currentA')
    this._currentB = this.makeBuffer(length, 'currentB')
    this._target = this.makeBuffer(length, 'target')
    
    if (ArrayBuffer.isView(data)) {
      this._target.data(data)
      if (immediate) {
        this._currentA.data(data)
        this._currentB.data(data)
      }
    }
  }

  swap() {
    this.positionSwap = !this.positionSwap
  }
  
  get current() {
    return this.positionSwap ? this._currentA : this._currentB
  }

  get updated() {
    return this.positionSwap ? this._currentB : this._currentA
  }

  get target() {
    return this._target
  }
}

export const getPositionBuffers = moize.infinite(() => new InterpolationBuffers(PicoGL.FLOAT, 3, 1))
export const getColorBuffers = moize.infinite(() => new InterpolationBuffers(PicoGL.FLOAT, 4, 1))
export const getRadiusBuffers = moize.infinite(() => new InterpolationBuffers(PicoGL.FLOAT, 1, 1))

export const swapInterpolationBuffers = () => {
  getPositionBuffers().swap()
  getRadiusBuffers().swap()
  getColorBuffers().swap()
}

export const setInterpolationTargets = (positions: ArrayBufferView, colors: ArrayBufferView, radii: ArrayBufferView, opts : {
  offset?: number,
  immediate?: boolean,
}) => {
  getPositionBuffers().targetData(positions, opts)
  getColorBuffers().targetData(colors, opts)
  getRadiusBuffers().targetData(radii, opts)
}

export const getInterpolationProgram = moize.infinite(() => {
  const app = getPicoApp()
  return app.createProgram(
    interpolationVs,
    interpolationFs,
    {
      transformFeedbackVaryings: ['vUpdatedPositions', 'vUpdatedColors', 'vUpdatedRadii']
    }
  )
})

const getInterpolationInputVertexArray = moize.infinite(() => {
  const app = getPicoApp()
  return app.createVertexArray()
})

export const loadInterpolationInputVertexArray = () => {
  return getInterpolationInputVertexArray()
    .vertexAttributeBuffer(0, getPositionBuffers().current)
    .vertexAttributeBuffer(1, getColorBuffers().current)
    .vertexAttributeBuffer(2, getRadiusBuffers().current)
    .vertexAttributeBuffer(3, getPositionBuffers().target)
    .vertexAttributeBuffer(4, getColorBuffers().target)
    .vertexAttributeBuffer(5, getRadiusBuffers().target)
}

const getInterpolationOutputTransformFeedback = moize.infinite(() => {
  const app = getPicoApp()
  return app.createTransformFeedback()
})

export const loadInterpolationOutputTransformFeedback = () => {
  return getInterpolationOutputTransformFeedback()
    .feedbackBuffer(0, getPositionBuffers().updated)
    .feedbackBuffer(1, getColorBuffers().updated)
    .feedbackBuffer(2, getRadiusBuffers().updated)
}

export const getInterpolationDrawCall = moize.infinite(() => {
  const app = getPicoApp()
  const program = getInterpolationProgram()
  const inputVertexArray = loadInterpolationInputVertexArray()
  const outputTransformFeedback = loadInterpolationOutputTransformFeedback()
  console.log(
    inputVertexArray,
    outputTransformFeedback,
  )
  return app.createDrawCall(program, inputVertexArray).transformFeedback(outputTransformFeedback)
})
