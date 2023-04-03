import moize from "moize";
import { getColorBuffers, getRadiusBuffers } from "./gpu/animation";
import { getGraphData } from "./data";
import { identity } from "lodash-es";


// export const getCurrentSelection = moize.infinite(() => new Set());

// export const applySelectionVisuals = async () => {
//   const {nodes, links} = await getGraphData();
//   const colors = getColorBuffers();
//   const sizes = getRadiusBuffers();
// }

const defaultColorMap = ({color}) => color; 
export const getDefaultColors = moize.infinite(async (fn = identity) => {
  const {nodes, links} = await getGraphData();
  return new Float32Array(nodes.map(defaultColorMap).flatMap(fn));
})

const defaultSizeMap = ({size}) => Math.sqrt(size)/40;
export const getDefaultSizes = moize.infinite(async (fn = identity) => {
  const {nodes, links} = await getGraphData();
  return new Float32Array(nodes.map(defaultSizeMap).map(fn));
})

export const applyVisuals = async ({
    colorMap = identity,
    sizeMap = identity,
    immediate = false,
  } = {}) => {
  const colors = getColorBuffers();
  const sizes = getRadiusBuffers();
  const colorData = await getDefaultColors(colorMap)
  const sizeData = await getDefaultSizes(sizeMap)
  // console.log('colorData for visuals', colorData)
  // console.log('sizeData for visuals', sizeData)
  colors.targetData(colorData, { immediate });
  sizes.targetData(sizeData, { immediate });
}

export const applyVisualsToNode = async (node, {
    colorMap = identity,
    sizeMap = identity,
    immediate = false
  } = {}) => {
  const color = new Float32Array(colorMap(defaultColorMap(node)));
  const size = new Float32Array([sizeMap(defaultSizeMap(node))]);
  
  const colors = getColorBuffers();
  const sizes = getRadiusBuffers();

  // console.log('applying visuals to node', node, color, size, node.index)
  colors.targetData(color, { offset: node.index, immediate });
  sizes.targetData(size, { offset: node.index, immediate });
}

export const initializeSelectionVisuals = async (immediate = false) => {
  // console.log('initializeSelectionVisuals')
  await applyVisuals({
    colorMap: color => {
      const mean = color.slice(0,3).reduce((a,b) => a+b, 0)/3;
      return [...color.slice(0,3).map(x => mean), 0.5]
    },
    sizeMap: size => size*0.5,
    immediate
  });
}

window.initializeSelectionVisuals = initializeSelectionVisuals;
