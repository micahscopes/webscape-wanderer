export interface GraphLayoutSimulator {
  start: () => void;
  stop: () => void;
  getPositions: (callback: (positions: Float32Array) => void) => void;
}