import PicoGL, { Framebuffer } from 'picogl'
import { VertexBuffer, Texture } from 'picogl'
import moize from 'moize'

import interpolationVs from '../shaders/interpolation.vs'
import interpolationFs from '../shaders/interpolation.fs'
import { getPicoApp } from './rendering'
import { getPointerPositionClip } from '../interaction'
import { getEdgeIndexBuffer, getEdgeIndexVertexBuffer, getEdgeIndices, getEdgeVertexArray } from './graph-visualization'


const getTextureFormatFromTypeAndItemSize = (type: GLenum, itemSize: number) => {
  let internalFormat;

    switch (`${type}${itemSize}`) {
      case `${PicoGL.FLOAT}${4}`:
        internalFormat = PicoGL.RGBA32F
        break
      case `${PicoGL.FLOAT}${3}`:
        internalFormat = PicoGL.RGBA32F
        break
      case `${PicoGL.FLOAT}${2}`:
        internalFormat = PicoGL.RG32F
        break
      case `${PicoGL.FLOAT}${1}`:
        internalFormat = PicoGL.R32F
        break
      case `${PicoGL.UNSIGNED_BYTE}${3}`:
        internalFormat = PicoGL.RGB8
        break
      case `${PicoGL.UNSIGNED_BYTE}${4}`:
        internalFormat = PicoGL.RGBA8
        break
      case `${PicoGL.UNSIGNED_SHORT}${3}`:
        internalFormat = PicoGL.RGB16UI
        break
      case `${PicoGL.UNSIGNED_SHORT}${4}`:
        internalFormat = PicoGL.RGBA16UI
        break
      case `${PicoGL.UNSIGNED_INT}${3}`:
        internalFormat = PicoGL.RGB32UI
        break
      case `${PicoGL.UNSIGNED_INT}${4}`:
        internalFormat = PicoGL.RGBA32UI
        break
    }
    
    return internalFormat
  }

class InterpolationBuffers {
  protected positionSwap = false

  protected _mostRecentData: ArrayBufferView

  protected _currentA: VertexBuffer
  // protected _currentATexture: Texture
  protected _currentB: VertexBuffer
  // protected _currentBTexture: Texture
  protected _target: VertexBuffer
  // protected _targetTexture: Texture
  
  protected _texture: Texture
  protected _texturePixelPositions: VertexBuffer

  protected _itemSize: number
  protected _type: GLenum
  protected _uniformType: GLenum

  constructor(type: GLenum, itemSize: number, data: ArrayBufferView | number) {
    this._type = type
    this._itemSize = itemSize
    this.targetData(data);
  }

  // this will only rebuild the buffers if the length changes
  makeBuffer = moize.infinite((numItems, tag: string) => {
    // console.log('making buffer', tag, numItems, this._itemSize)
    const app = getPicoApp()
    return app.createVertexBuffer(this._type, this._itemSize, numItems * this._itemSize)
  })

  makeTexture = moize.infinite((numItems) => {
    const app = getPicoApp()
    const size = Math.ceil(Math.sqrt(numItems+1))
    const opts = {
        // internalFormat: PicoGL.RGBA32F,
        width: size,
        height: size,
        internalFormat: getTextureFormatFromTypeAndItemSize(this._type, this._itemSize),
        type: this._type,
        flipY: true,
        minFilter: PicoGL.NEAREST,
        magFilter: PicoGL.NEAREST,
        premultiplyAlpha: true,    
        wrapY: PicoGL.CLAMP_TO_EDGE,
        wrapX: PicoGL.CLAMP_TO_EDGE,
      }
      
    // console.log('making texture', Math.pow(size, 2), opts, this._type)    
    return app.createTexture2D(
      size, size,
      opts
    )
  })

  makeTextureIndicesVertexBuffer = moize.infinite((numItems) => {
    const app = getPicoApp()
    const indices = new Uint32Array(numItems).map((_, i) => i)
    // console.log('made texture indices', indices)
    return app.createVertexBuffer(PicoGL.UNSIGNED_INT, 1, indices)
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
      // console.log('using existing buffer', length, this._itemSize)
    } else {
      // otherwise, we need to figure out if the length has changed
      length = ArrayBuffer.isView(data) ? data.byteLength / this._itemSize / 4 : data
    }
    this._currentA = this.makeBuffer(length, 'currentA')
    this._currentB = this.makeBuffer(length, 'currentB')
    this._target = this.makeBuffer(length, 'target')

    this._texture = this.makeTexture(length)
    this._texturePixelPositions = this.makeTextureIndicesVertexBuffer(length)

    if (ArrayBuffer.isView(data)) {
      this._target.data(data)
      this._mostRecentData = data
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
  
  get texture() {
    return this._texture
  }
  
  get texturePixelPositions() {
    return this._texturePixelPositions
  }

  get updated() {
    return this.positionSwap ? this._currentB : this._currentA
  }

  get target() {
    return this._target
  }
  
  get mostRecentData() {
    return this._mostRecentData
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

export const getInterpolationFramebuffer = moize.infinite(() => {
  const app = getPicoApp()
  return app.createFramebuffer()
})

export const getDepthTarget = moize.infinite((size) => {
  const app = getPicoApp()
  return app.createTexture2D(size, size, {
    internalFormat: PicoGL.DEPTH_COMPONENT32F,
    // format: PicoGL.DEPTH_COMPONENT,
    // type: PicoGL.FLOAT,
  })
})

export const loadInterpolationFramebuffer = () => {
  const app = getPicoApp()
  const framebuffer = getInterpolationFramebuffer()
  const positionTexture = getPositionBuffers().texture
  const colorTexture = getColorBuffers().texture
  const radiusTexture = getRadiusBuffers().texture
  
  // console.log('resizing framebuffer', positionTexture.width, positionTexture.height)

  framebuffer.colorTarget(1, positionTexture)
  framebuffer.colorTarget(2, colorTexture)
  framebuffer.colorTarget(3, radiusTexture)
  // .depthTarget(getDepthTarget(positionTexture.width))
  
  return framebuffer
}

export const setInterpolationTargets = (positions: ArrayBufferView, colors: ArrayBufferView, sizes: ArrayBufferView, opts: {
  offset?: number,
  immediate?: boolean,
}) => {
  getPositionBuffers().targetData(positions, opts)
  getColorBuffers().targetData(colors, opts)
  getRadiusBuffers().targetData(sizes, opts)
}

export const getInterpolationProgram = moize.infinite(() => {
  const app = getPicoApp()
  return app.createProgram(
    interpolationVs,
    interpolationFs,
    {
      transformFeedbackVaryings: ['vUpdatedPosition', 'vUpdatedColor', 'vUpdatedSize'],
      transformFeedbackMode: PicoGL.SEPARATE_ATTRIBS,
    }
  )
})

const getInterpolationInputVertexArray = moize.infinite(() => {
  const app = getPicoApp()
  return app.createVertexArray()
})

export const loadInterpolationInputVertexArray = () => {
  const app = getPicoApp()
  return getInterpolationInputVertexArray()
    .vertexAttributeBuffer(0, getPositionBuffers().current)
    .vertexAttributeBuffer(1, getColorBuffers().current)
    .vertexAttributeBuffer(2, getRadiusBuffers().current)
    .vertexAttributeBuffer(3, getPositionBuffers().target)
    .vertexAttributeBuffer(4, getColorBuffers().target)
    .vertexAttributeBuffer(5, getRadiusBuffers().target)
    .vertexAttributeBuffer(6, getPositionBuffers().texturePixelPositions)
}

const getInterpolationOutputTransformFeedback = moize.infinite(() => {
  const app = getPicoApp()
  return app.createTransformFeedback()
})

export const loadInterpolationOutputTransformFeedback = () => {
  // console.log('loading output transform feedback')
  return getInterpolationOutputTransformFeedback()
    .feedbackBuffer(0, getPositionBuffers().updated)
    .feedbackBuffer(1, getColorBuffers().updated)
    .feedbackBuffer(2, getRadiusBuffers().updated)
}

export const getInterpolationDrawCall = () => {
  const app = getPicoApp()
  const program = getInterpolationProgram()
  const inputVertexArray = loadInterpolationInputVertexArray()
  const outputTransformFeedback = loadInterpolationOutputTransformFeedback()
  const drawCall = app.createDrawCall(program, inputVertexArray)
    .primitive(PicoGL.POINTS)
    .transformFeedback(outputTransformFeedback)
    .uniform('mousePosition', getPointerPositionClip())
    .uniform('bufferDimensions', [getInterpolationFramebuffer().width, getInterpolationFramebuffer().height])
  return drawCall
}
