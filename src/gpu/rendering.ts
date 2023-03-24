import PicoGL from 'picogl';
import moize from 'moize';

export const getPicoApp = moize.infinite(() => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  return PicoGL.createApp(canvas, 
    {antialias: false}
  )
    .enable(PicoGL.DEPTH_TEST)
    .enable(PicoGL.BLEND)
    .blendFunc(PicoGL.SRC_ALPHA, PicoGL.ONE_MINUS_SRC_ALPHA)
    // .disable(PicoGL.CULL_FACE)
});
