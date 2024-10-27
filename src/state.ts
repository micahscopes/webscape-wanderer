import moize from "moize";
import { debounce } from "lodash-es";

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
  | "int"
  | "ivec2"
  | "ivec3"
  | "ivec4";

interface PropertyData {
  type: PropertyType;
  data: Float32Array | Int32Array;
}

function getTypeInfo(type: PropertyType): {
  itemSize: number;
  arrayType: Float32ArrayConstructor | Int32ArrayConstructor;
} {
  const itemSizes = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
  };
  const arrayTypes = {
    float: Float32Array,
    vec2: Float32Array,
    vec3: Float32Array,
    vec4: Float32Array,
    int: Int32Array,
    ivec2: Int32Array,
    ivec3: Int32Array,
    ivec4: Int32Array,
  };
  return { itemSize: itemSizes[type], arrayType: arrayTypes[type] };
}

export const graphBufferState = moize.maxArgs(2)((ctx, graphId?) => {
  let edgesVersion = 0;
  const propVersions: Record<string, number> = {};
  let nodeCount = 1; // Initialize with at least one node
  const bufferState = {
    edges: null as number[][] | null,
    nodeProps: {} as Record<string, PropertyData>,
    buffers: {} as Record<string, StorageBufferNode>,
  };
  const updateSet = new Set<string>();

  const createBuffer = (
    key: string,
    data: Float32Array | Int32Array,
    type: PropertyType,
  ) => {
    const { itemSize } = getTypeInfo(type);
    const attribute = new StorageInstancedBufferAttribute(data, itemSize);
    return storage(attribute, type, Math.max(data.length / itemSize, 1));
  };

  const updateOrCreateBuffer = (
    key: string,
    data: Float32Array | Int32Array,
    type: PropertyType,
  ) => {
    const isEdgeBuffer =
      key.startsWith("edgeSource_") ||
      key.startsWith("edgeTarget_") ||
      key === "edgeIndices";
    const count = Math.max(
      isEdgeBuffer ? bufferState.edges?.length || 1 : nodeCount,
      1,
    );

    if (bufferState.buffers[key]) {
      // Update existing StorageBufferNode with new data
      const existingBuffer = bufferState.buffers[key];
      existingBuffer.value.array = data;
      existingBuffer.value.count = count;
      updateSet.add(key);
    } else {
      // Create new StorageBufferNode if it doesn't exist
      const { itemSize } = getTypeInfo(type);
      const attribute = new StorageInstancedBufferAttribute(data, itemSize);
      bufferState.buffers[key] = storage(
        attribute,
        type,
        Math.max(data.length / itemSize, count),
      );
    }
  };

  const initializeBuffer = (key: string, type: PropertyType) => {
    const { itemSize, arrayType } = getTypeInfo(type);
    const emptyData = new arrayType(itemSize * Math.max(1000, nodeCount)); // Ensure at least 1000 or nodeCount, whichever is larger
    const attribute = new StorageInstancedBufferAttribute(emptyData, itemSize);
    bufferState.buffers[key] = storage(
      attribute,
      type,
      Math.max(1000, nodeCount),
    );
  };

  const getBuffer = moize.maxSize(Infinity)(
    (key: string) => {
      if (!bufferState.buffers[key]) {
        // Initialize with an empty buffer if not exists
        if (key.startsWith("edgeSource_") || key.startsWith("edgeTarget_")) {
          const propKey = key.slice(11);
          const type = bufferState.nodeProps[propKey]?.type || "float";
          initializeBuffer(key, type);
        } else if (key === "edgeIndices") {
          initializeBuffer(key, "ivec2");
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
      const sourceResult = new arrayType(
        Math.max(bufferState.edges!.length, 1) * itemSize,
      );
      const targetResult = new arrayType(
        Math.max(bufferState.edges!.length, 1) * itemSize,
      );

      for (let i = 0; i < Math.max(bufferState.edges!.length, 1); i++) {
        const [fromIdx, toIdx] = bufferState.edges![i] || [0, 0];
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

  const debouncedUpdateBuffers = debounce(() => {
    updateSet.forEach((key) => {
      if (bufferState.buffers[key]) {
        bufferState.buffers[key].value.needsUpdate = true;
      }
    });
    updateSet.clear();
  }, 8); // Debounce for approximately one frame (assuming 60fps)

  return {
    _state: bufferState,
    setNodeCount: (count: number) => {
      nodeCount = Math.max(count, 1);
    },

    setEdges: (edges: number[][]) => {
      bufferState.edges = edges.length > 0 ? edges : [[0, 0]]; // Ensure at least one edge
      edgesVersion++;
      updateOrCreateBuffer(
        "edgeIndices",
        new Int32Array(bufferState.edges.flat()),
        "ivec2",
      );

      console.log("set edges", getBuffer("edgeIndices"));
      updateEdgePairBuffers();
      debouncedUpdateBuffers();
    },

    setNodeProperties: (
      key: string,
      type: PropertyType,
      data: Float32Array | Int32Array,
    ) => {
      const { itemSize, arrayType } = getTypeInfo(type);
      if (data.length < nodeCount * itemSize) {
        // Pad the data if it's smaller than required
        const paddedData = new arrayType(nodeCount * itemSize);
        paddedData.set(data);
        data = paddedData;
      }
      bufferState.nodeProps[key] = { type, data: data.slice() };
      propVersions[key] = (propVersions[key] || 0) + 1;
      updateOrCreateBuffer(`nodeProps_${key}`, data, type);
      updateEdgePairBuffers();
      debouncedUpdateBuffers();
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
        // Expand the buffer if necessary
        const newData = new (propData.data.constructor as any)(
          Math.max(propData.data.length * 2, dataIndex + itemSize),
        );
        newData.set(propData.data);
        propData.data = newData;
      }
      propData.data.set(valueArray, dataIndex);
      propVersions[key] = (propVersions[key] || 0) + 1;
      updateOrCreateBuffer(`nodeProps_${key}`, propData.data, propData.type);
      updateEdgePairBuffers();
      debouncedUpdateBuffers();
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
