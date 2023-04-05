import PicoGL, { Framebuffer } from 'picogl'
import { VertexBuffer, Texture } from 'picogl'
import moize from 'moize'

import interpolationVs from '../shaders/interpolation.vert'
import interpolationFs from '../shaders/interpolation.frag'
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
  
  protected _readbackBuffer: VertexBuffer
  
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
    offset = -1, // offset for modifying existing data
    immediate = false, // whether to update the current buffer immediately
  } = {}) => {
    let length
    if (offset > -1) {
      // if the user provides an offset, use the existing buffer (which is memoized by length)
      length = this._target.numItems
      // console.log('using existing buffer', length, this._itemSize)
    } else {
      // otherwise, we need to figure out if the length has changed
      offset = 0
      length = ArrayBuffer.isView(data) ? data.byteLength / this._itemSize / 4 : data
      this._readbackBuffer = this.makeBuffer(100, 'readback')
    }
    this._currentA = this.makeBuffer(length, 'currentA')
    this._currentB = this.makeBuffer(length, 'currentB')
    this._target = this.makeBuffer(length, 'target')

    this._texture = this.makeTexture(length)
    this._texturePixelPositions = this.makeTextureIndicesVertexBuffer(length)

    if (ArrayBuffer.isView(data)) {
      this._target.data(data, offset * this._itemSize * 4)
      this._mostRecentData = data
      if (immediate) {
        this._currentA.data(data, offset * this._itemSize * 4)
        this._currentB.data(data, offset * this._itemSize * 4)
      }
    }
  }

  swap() {
    this.positionSwap = !this.positionSwap
  }

  readBack(index: number) {
    // console.log('reading back', index)
    const app = getPicoApp();
    const gl = app.gl as WebGL2RenderingContext;

    let target 
    if (this._type === PicoGL.FLOAT) {
      target = new Float32Array(this._itemSize)
    } else if (this._type === PicoGL.UNSIGNED_BYTE) {
      target = new Uint8Array(this._itemSize)
    } else if (this._type === PicoGL.UNSIGNED_SHORT) {
      target = new Uint16Array(this._itemSize)
    } else if (this._type === PicoGL.UNSIGNED_INT) {
      target = new Uint32Array(this._itemSize)
    } else {
      target = new ArrayBuffer(this._itemSize * 4)
    }
    
  
    // unbind all the buffers from transform feedback
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, null);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 2, null);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 3, null);
  
    // Calculate byte offset for the given index
    const byteOffset = index * this._itemSize * 4;
    // console.log ('byte offset', byteOffset, this._itemSize, this._target.numItems)
    
    // check to make sure we're not reading out of bounds
    // if (byteOffset + this._itemSize * 4 > this._target.numItems*this._itemSize*4) {
    //   throw new Error(`Index ${index} is out of bounds for buffer of length ${this._target.byteLength / 4 / this._itemSize}`);
    // }

    // unbind the current buffer from transform feedback
    // gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);
  
    // Bind the updated buffer (source buffer) to the COPY_READ_BUFFER binding point
    gl.bindBuffer(PicoGL.COPY_READ_BUFFER, this.target.buffer);
  
    // Bind the readback buffer (destination buffer) to the COPY_WRITE_BUFFER binding point
    gl.bindBuffer(PicoGL.COPY_WRITE_BUFFER, this._readbackBuffer.buffer);
  
    // Copy the data at the given index from the updated buffer to the readback buffer
    gl.copyBufferSubData(PicoGL.COPY_READ_BUFFER, PicoGL.COPY_WRITE_BUFFER, byteOffset, 0, this._itemSize * 4);
  
    // Create an ArrayBufferView based on the target ArrayBuffer
    const dataArray = new DataView(target.buffer);
  
    // Read the data from the readback buffer into the target
    gl.getBufferSubData(gl.COPY_WRITE_BUFFER, 0, dataArray);
    
    // Release the buffer bindings
    gl.bindBuffer(PicoGL.COPY_READ_BUFFER, null);
    // gl.bindBuffer(PicoGL.COPY_WRITE_BUFFER, null);

    // console.log(target, dataArray);

    // loadInterpolationOutputTransformFeedback()

    return target;
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
export const getEmphasisBuffers = moize.infinite(() => new InterpolationBuffers(PicoGL.FLOAT, 1, 1))

export const swapInterpolationBuffers = () => {
  getPositionBuffers().swap()
  getRadiusBuffers().swap()
  getColorBuffers().swap()
  getEmphasisBuffers().swap()
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
  const emphasisTexture = getEmphasisBuffers().texture
  
  // console.log('resizing framebuffer', positionTexture.width, positionTexture.height)

  framebuffer.colorTarget(1, positionTexture)
  framebuffer.colorTarget(2, colorTexture)
  framebuffer.colorTarget(3, radiusTexture)
  framebuffer.colorTarget(4, emphasisTexture)

  // .depthTarget(getDepthTarget(positionTexture.width))
  
  return framebuffer
}

// export const setInterpolationTargets = (positions: ArrayBufferView, colors: ArrayBufferView, sizes: ArrayBufferView, opts: {
//   offset?: number,
//   immediate?: boolean,
// }) => {
//   getPositionBuffers().targetData(positions, opts)
//   getColorBuffers().targetData(colors, opts)
//   getRadiusBuffers().targetData(sizes, opts)
//   getEmphasisBuffers().targetData(new Float32Array(positions.byteLength / 4), opts)
// }

export const getInterpolationProgram = moize.infinite(() => {
  const app = getPicoApp()
  return app.createProgram(
    interpolationVs,
    interpolationFs,
    {
      transformFeedbackVaryings: ['vUpdatedPosition', 'vUpdatedColor', 'vUpdatedSize', 'vUpdatedEmphasis'],
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
    .vertexAttributeBuffer(3, getEmphasisBuffers().current)
    .vertexAttributeBuffer(4, getPositionBuffers().target)
    .vertexAttributeBuffer(5, getColorBuffers().target)
    .vertexAttributeBuffer(6, getRadiusBuffers().target)
    .vertexAttributeBuffer(7, getEmphasisBuffers().target)
    .vertexAttributeBuffer(8, getPositionBuffers().texturePixelPositions)
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
    .feedbackBuffer(3, getEmphasisBuffers().updated)
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
