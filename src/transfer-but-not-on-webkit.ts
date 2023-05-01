import { transfer as originalTransfer } from "comlink";

export const transfer = (bufferView, buffers) => {
  // tried bypassing comlink transfer but it didn't help
  // return bufferView;
  
  return originalTransfer(bufferView, buffers);
}