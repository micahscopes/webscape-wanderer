import PicoGL from 'picogl';
import moize from 'moize';

export const getPicoApp = moize.infinite(() => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  return PicoGL.createApp(canvas);
});
