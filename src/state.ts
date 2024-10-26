import moize from "moize";

export const asyncState = moize(
  (ctx, key) => {
    let hasBeenSet = false;
    let resolver;
    let state = new Promise((resolve) => {
      resolver = resolve;
    });
    const set = (data) => {
      if (hasBeenSet) {
        state = data;
      } else {
        hasBeenSet = true;
        resolver(data);
      }
    };
    const get = () => state;
    return { set, get };
  },
  {
    maxSize: Infinity,
  },
);

export const state = moize.maxArgs(2)(
  (ctx, key, initFn = () => undefined) => {
    let state;
    const get = () => {
      if (state === undefined) {
        state = initFn();
      }
      return state;
    };
    const set = (positions) => {
      state = positions;
    };
    return { set, get };
  },
  {
    maxSize: Infinity,
  },
);

// import * as THREE from 'three';
import {
  storage,
  StorageBufferNode,
  StorageInstancedBufferAttribute,
} from "three/webgpu";

type PropertyType =
  | "float"
  | "vec2"
  | "vec3"
  | "vec4"
  | "uint"
  | "uvec2"
  | "uvec3"
  | "uvec4";

interface PropertyData {
  type: PropertyType;
  data: Float32Array | Uint32Array;
}

function getTypeInfo(type: PropertyType): {
  itemSize: number;
  arrayType: Float32ArrayConstructor | Uint32ArrayConstructor;
} {
  const itemSizes = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    uint: 1,
    uvec2: 2,
    uvec3: 3,
    uvec4: 4,
  };
  const arrayTypes = {
    float: Float32Array,
    vec2: Float32Array,
    vec3: Float32Array,
    vec4: Float32Array,
    uint: Uint32Array,
    uvec2: Uint32Array,
    uvec3: Uint32Array,
    uvec4: Uint32Array,
  };
  return { itemSize: itemSizes[type], arrayType: arrayTypes[type] };
}

export const graphBufferState = moize.maxArgs(2)((ctx, graphId?) => {
  let edgesVersion = 0;
  const propVersions: Record<string, number> = {};
  let nodeCount = 0;
  const bufferState = {
    edges: null as number[][] | null,
    nodeProps: {} as Record<string, PropertyData>,
    buffers: {} as Record<string, StorageBufferNode>,
  };

  const createBuffer = (
    key: string,
    data: Float32Array | Uint32Array,
    type: PropertyType,
  ) => {
    const { itemSize } = getTypeInfo(type);
    const attribute = new StorageInstancedBufferAttribute(data, itemSize);
    return storage(attribute, type, Math.max(data.length / itemSize, 1));
  };

  const updateOrCreateBuffer = (
    key: string,
    data: Float32Array | Uint32Array,
    type: PropertyType,
  ) => {
    if (bufferState.buffers[key]) {
      // Update existing StorageBufferNode with new data
      const existingBuffer = bufferState.buffers[key];
      existingBuffer.value.array = data;
      existingBuffer.value.count = nodeCount;
      existingBuffer.value.needsUpdate = true;
    } else {
      // Create new StorageBufferNode if it doesn't exist
      bufferState.buffers[key] = createBuffer(key, data, type);
    }
  };

  const initializeBuffer = (key: string, type: PropertyType) => {
    const { itemSize, arrayType } = getTypeInfo(type);
    const emptyData = new arrayType(itemSize); // Create a minimal buffer
    const attribute = new StorageInstancedBufferAttribute(emptyData, itemSize);
    bufferState.buffers[key] = storage(attribute, type, 1000);
  };

  const getBuffer = moize.maxSize(Infinity)(
    (key: string) => {
      if (!bufferState.buffers[key]) {
        // Initialize with an empty buffer if not exists
        if (key.startsWith("edgeSource_") || key.startsWith("edgeTarget_")) {
          const propKey = key.slice(11);
          const type = bufferState.nodeProps[propKey]?.type || "float";
          initializeBuffer(key, type);
        } else {
          const type = key.startsWith("nodeProps_")
            ? bufferState.nodeProps[key.slice(10)]?.type || "float"
            : "float";
          initializeBuffer(key, type);
        }
      }
      return bufferState.buffers[key];
    },
    {
      maxArgs: 2,
      transformArgs: ([key]) => {
        if (key === "edgeIndices") return [key, edgesVersion];
        if (key.startsWith("nodeProps_"))
          return [key, propVersions[key.slice(10)] || 0];
        if (key.startsWith("edgeSource_") || key.startsWith("edgeTarget_")) {
          const propKey = key.slice(11);
          return [key, edgesVersion, propVersions[propKey] || 0];
        }
        return [key, edgesVersion]; // fallback
      },
    },
  );

  const updateEdgePairBuffers = () => {
    if (!bufferState.edges) return;

    Object.keys(bufferState.nodeProps).forEach((propertyKey) => {
      const propData = bufferState.nodeProps[propertyKey];
      const { type, data } = propData;
      const { itemSize, arrayType } = getTypeInfo(type);
      const sourceResult = new arrayType(bufferState.edges!.length * itemSize);
      const targetResult = new arrayType(bufferState.edges!.length * itemSize);

      for (let i = 0; i < bufferState.edges!.length; i++) {
        const [fromIdx, toIdx] = bufferState.edges![i];
        sourceResult.set(
          data.subarray(fromIdx * itemSize, (fromIdx + 1) * itemSize),
          i * itemSize,
        );
        targetResult.set(
          data.subarray(toIdx * itemSize, (toIdx + 1) * itemSize),
          i * itemSize,
        );
      }

      updateOrCreateBuffer(`edgeSource_${propertyKey}`, sourceResult, type);
      updateOrCreateBuffer(`edgeTarget_${propertyKey}`, targetResult, type);
    });
  };

  return {
    _state: bufferState,
    setNodeCount: (count: number) => {
      nodeCount = count;
    },

    setEdges: (edges: number[][]) => {
      bufferState.edges = edges;
      edgesVersion++;
      updateOrCreateBuffer(
        "edgeIndices",
        new Uint32Array(edges.flat()),
        "uvec2",
      );
      updateEdgePairBuffers();
    },

    setNodeProperties: (
      key: string,
      type: PropertyType,
      data: Float32Array | Uint32Array,
    ) => {
      const { itemSize, arrayType } = getTypeInfo(type);
      if (data.length !== nodeCount * itemSize) {
        throw new Error(
          "Data length does not match node count and components per node",
        );
      }
      bufferState.nodeProps[key] = { type, data: data.slice() };
      propVersions[key] = (propVersions[key] || 0) + 1;
      updateOrCreateBuffer(`nodeProps_${key}`, data, type);
      updateEdgePairBuffers();
    },

    setNodeProperty: (key: string, index: number, value: number | number[]) => {
      const propData = bufferState.nodeProps[key];
      if (!propData) {
        throw new Error(`Property ${key} does not exist`);
      }
      const { itemSize } = getTypeInfo(propData.type);
      const valueArray = Array.isArray(value) ? value : [value];
      if (valueArray.length !== itemSize) {
        throw new Error(
          `Value length does not match itemSize for property ${key}`,
        );
      }
      const dataIndex = index * itemSize;
      if (dataIndex + itemSize > propData.data.length) {
        throw new Error(`Node index out of bounds for property ${key}`);
      }
      propData.data.set(valueArray, dataIndex);
      propVersions[key] = (propVersions[key] || 0) + 1;
      updateOrCreateBuffer(`nodeProps_${key}`, propData.data, propData.type);
      updateEdgePairBuffers();
    },

    getNodeProperties: (key: string) => {
      return getBuffer(`nodeProps_${key}`);
    },

    getEdgePairs: moize.maxSize(Infinity)(
      (propertyKey: string) => {
        return {
          source: getBuffer(`edgeSource_${propertyKey}`),
          target: getBuffer(`edgeTarget_${propertyKey}`),
        };
      },
      {
        maxArgs: 3,
        transformArgs: ([propertyKey]) => [
          propertyKey,
          edgesVersion,
          propVersions[propertyKey] || 0,
        ],
      },
    ),
    getEdgeIndices: () => getBuffer("edgeIndices"),
    getBuffer,

    dispose: () => {
      // Object.values(state.buffers).forEach((buffer) => buffer.value.dispose());
      // state.buffers = {};
    },
  };
}, {});
