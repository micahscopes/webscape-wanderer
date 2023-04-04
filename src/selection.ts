import moize from "moize";
import { getColorBuffers, getEmphasisBuffers, getRadiusBuffers } from "./gpu/animation";
import { getGraphData } from "./data";
import { identity } from "lodash-es";
import {html, render} from 'lit-html'; 

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
  const emphasis = getEmphasisBuffers();
  const colorData = await getDefaultColors(colorMap)
  const sizeData = await getDefaultSizes(sizeMap)
  colors.targetData(colorData, { immediate });
  sizes.targetData(sizeData, { immediate });
  emphasis.targetData(new Float32Array(emphasis.target.numItems).fill(0), { immediate })
}

export const applyVisualsToNode = async (node, {
    colorMap = identity,
    sizeMap = identity,
    emphasis = 0,
    immediate = false
  } = {}) => {
  const color = new Float32Array(colorMap(defaultColorMap(node)));
  const size = new Float32Array([sizeMap(defaultSizeMap(node))]);
  const epmhasis = new Float32Array([emphasis]);
  
  const colorBuffers = getColorBuffers();
  const sizeBuffers = getRadiusBuffers();
  const emphasisBuffers = getEmphasisBuffers();

  // console.log('applying visuals to node', node, color, size, node.index)
  colorBuffers.targetData(color, { offset: node.index, immediate });
  sizeBuffers.targetData(size, { offset: node.index, immediate });
  emphasisBuffers.targetData(epmhasis, { offset: node.index, immediate });
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

const selectionInfo = (node) => html`
  <h3>${node.data.name}</h3>
  <p>${node.data.description}</p>
  <p>${node.data.version}</p>
`


export const showSelectionInfo = selectedNode => {
  const selectionInfoElement = document.getElementById('selection-info');
  const result = selectionInfo(selectedNode);
  console.log(result)
  render(result, selectionInfoElement!);
}

window.initializeSelectionVisuals = initializeSelectionVisuals;
