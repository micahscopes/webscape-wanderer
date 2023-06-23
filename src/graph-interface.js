export const graphInterfaceDefault = {
    getNodeId: (node) => node,
    getEdgeSource: (edge) => edge.source,
    getEdgeTarget: (edge) => edge.target,
    makeEdge: (source, target, getNodeId) => ({
      source: getNodeId(source),
      target: getNodeId(target),
      edgeDistance,
    }),
  };
  
  export default graphInterfaceDefault;
  
  export const graphInterfaceD3 = {
    ...graphInterfaceDefault,
  };
  
  export const graphInterfaceVisJS = {
    ...graphInterfaceDefault,
    getEdgeSource: (edge) => edge.from,
    getEdgeTarget: (edge) => edge.to,
    makeEdge: (source, target, edgeDistance, getNodeId) => ({
      from: getNodeId(source),
      to: getNodeId(target),
      edgeDistance,
    }),
  };
  
  export const graphInterfaceCytoscapeJS = {
    getNodeId: (node) => node.data?.id,
    getEdgeSource: (edge) => edge.data.source,
    getEdgeTarget: (edge) => edge.data.target,
    makeEdge: (source, target, edgeDistance, getNodeId) => ({
      data: {
        source: getNodeId(source),
        target: getNodeId(target),
        edgeDistance,
      },
    }),
  };
  