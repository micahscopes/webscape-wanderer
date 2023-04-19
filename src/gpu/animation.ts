import PicoGL, { Framebuffer } from 'picogl'
import { VertexBuffer, Texture } from 'picogl'
import moize from 'moize'

import interpolationVs from '../shaders/interpolation.vert'
import interpolationFs from '../shaders/interpolation.frag'
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

