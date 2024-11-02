import {
  Scene,
  PerspectiveCamera,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  Mesh,
  BoxGeometry,
  WebGLRenderTarget,
  CylinderGeometry,
  DepthTexture,
  TorusKnotGeometry,
  WebGPURenderer,
  DirectionalLight,
  InstancedMesh,
  BufferGeometry,
  Color,
  IcosahedronGeometry,
  Sphere,
  Vector3,
  SphereGeometry,
  ConeGeometry,
} from "three/webgpu";

// import nodeVs from "../shaders/node-vert.tsl";
// import nodeFs from "../shaders/node-frag.tsl";

// import nodePickerVs from "../shaders/node-picker-vert.tsl";
// import nodePickerFs from "../shaders/node-picker-frag.tsl";

// import edgeVs from "../shaders/edge-vert.tsl";
// import edgeFs from "../shaders/edge-frag.tsl";

import { getCanvasAndGLContext } from "./rendering";
import moize from "moize";
import memoize from "memoizee";
import { OBJLoader } from "../../lib/OBJLoader";
// import heartObjString from "../../data/heart.obj?raw";
import heartUrl from "../../data/heart.obj";
import dandelionUrl from "../../data/dandelion3.obj";

export const getNodeMesh = memoize((meshGeoBuffer, graphNodeMaterial) => {
  const meshGeometry = new InstancedBufferGeometry();
  const mesh = new Mesh(meshGeometry, graphNodeMaterial);
  setNodeGeometry(meshGeoBuffer, mesh);
  return mesh;
});

export const getNodeVisualizerMesh = memoize(
  (ctx) => {
    const { graphNodeMaterial, graphNodePickerMaterial } =
      graphNodeMaterials(ctx);

    const meshGeometry = new InstancedBufferGeometry();
    const mesh = new Mesh(meshGeometry, graphNodeMaterial);
    const meshGeoBuffer =
      getComponent(ctx)._nodeGeometryBuffer || getShapeGeo("box");
    setNodeGeometry(meshGeoBuffer, mesh);

    // const pickerGeometry = new InstancedBufferGeometry();
    const pickerMesh = new Mesh(meshGeometry, graphNodePickerMaterial);
    // const pickerGeoBuffer = getShapeGeo("box");
    // setNodeGeometry(ctx, pickerGeoBuffer, pickerMesh);

    return { mesh, pickerMesh };
  },
  {
    dispose: function (x, y, z) {
      console.log("dispose node visualizer mesh", x);
      const { mesh, pickerMesh } = x;
      // requestAnimationFrame(() => {
      //   mesh.material.dispose();
      //   pickerMesh.material.dispose();
      // });
    },
  },
);

export const getShapeGeo = (shape) => {
  let geo;
  try {
    if (shape == "sphere") {
      geo = new SphereGeometry(1, 32, 32);
    } else if (shape == "cone") {
      geo = new ConeGeometry(1, 2, 128);
    } else if (shape == "icosahedron") {
      geo = new IcosahedronGeometry(1.5, 0);
    } else if (shape === "box") {
      geo = new BoxGeometry(1, 1, 1);
    } else if (shape === "torusKnot") {
      geo = new TorusKnotGeometry(1, 0.3, 128, 64, 2, 3);
    }
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    return geo;
  } catch (error) {
    console.warn("Error setting node geometry:", error);
    return null;
  }
};

const setNodeGeometry = (geo, mesh) => {
  mesh.geometry.setAttribute("position", geo.attributes.position);
  mesh.geometry.setAttribute("normal", geo.attributes.normal);
  mesh.geometry.setIndex(geo.index);
  mesh.material.needsUpdate = true;
};

export const updateAllNodeMeshVertexArrays = (ctx, size) => {
  const { scene, nodePickerMesh } = getThreeSetup(ctx);
  scene.nodeMeshes.forEach((mesh) => {
    updateNodeMeshVertexArray(size, mesh);
  });
  updateNodeMeshVertexArray(size, nodePickerMesh);
};

export const updateNodeMeshVertexArray = (size, mesh) => {
  mesh.geometry.instanceCount = size;
};

export const getEdgeVisualizerMesh = moize.infinite((ctx) => {
  const segmentOffsetGeo = new CylinderGeometry(0.5, 0.5, 1, 4, 4, true);

  const geometry = new InstancedBufferGeometry();

  geometry.setAttribute("segmentOffset", segmentOffsetGeo.attributes.position);
  geometry.setIndex(segmentOffsetGeo.index);

  return new Mesh(geometry, graphEdgeMaterial(ctx));
});

export const loadEdgeVertexArray = (ctx, size) => {
  const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
  edgeVisualizerMesh.geometry.instanceCount = size;
};

const getBiggestPickerMesh = (
  nodeMeshes: Set<Mesh>,
): IcosahedronGeometry | undefined => {
  const largestRadius = Array.from(nodeMeshes).reduce((maxRadius, mesh) => {
    const boundingSphere = mesh.geometry.boundingSphere;
    if (boundingSphere && boundingSphere.radius > maxRadius) {
      return boundingSphere.radius;
    }
    return maxRadius;
  }, 0);

  if (largestRadius > 0) {
    return new IcosahedronGeometry(largestRadius, 0);
  }
};

export const initializeNodeGeometry = memoize(async (ctx) => {
  // node update
  const { nodes } = await getGraphData(ctx);
  const { scene, pickerScene, renderer, camera } = getThreeSetup(ctx);
  const { graphNodeMaterial, graphNodePickerMaterial } =
    graphNodeMaterials(ctx);

  // Get existing node mesh and remove it
  // TODO: manage multiple layers
  const geo = getComponent(ctx)._nodeGeometryBuffer || getShapeGeo("box");
  const mesh = getNodeMesh(geo, graphNodeMaterial);
  updateNodeMeshVertexArray(nodes.length, mesh);
  mesh.material.needsUpdate = true;
  const previousMeshes = Array.from(scene.nodeMeshes);
  await renderer.compileAsync(scene, camera, mesh);
  scene.nodeMeshes.add(mesh);
  scene.add(mesh);
  previousMeshes.forEach((prevMesh) => {
    scene.remove(prevMesh);
    scene.nodeMeshes.delete(prevMesh);
  });

  // picker update
  while (pickerScene.children.length > 0) {
    pickerScene.remove(pickerScene.children[0]);
  }
  mesh.geometry.computeBoundingSphere();
  const pickerGeo = new IcosahedronGeometry(
    mesh.geometry.boundingSphere.radius,
    1,
  );
  const pickerMesh = new Mesh(
    new InstancedBufferGeometry(),
    graphNodePickerMaterial,
  );
  setNodeGeometry(pickerGeo, pickerMesh);
  pickerMesh.material.needsUpdate = true;
  updateNodeMeshVertexArray(nodes.length, pickerMesh);
  await renderer.compileAsync(pickerMesh, camera);
  await pickerScene.add(pickerMesh);

  // graphPickerMaterial.compile();
});

import { graphNodeMaterials } from "../shaders/graph-node.tsl";
import { graphEdgeMaterial } from "../shaders/graph-edge.tsl";
import { getGraphData, graphBuffers } from "../data";
import { getComponent } from "../context";

const getRenderer = moize.infinite((ctx) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const renderer = new WebGPURenderer({
    canvas,
    forceWebGL: true,
  });
  renderer.setClearColor(new Color("#000000"), 0);

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
});

// Initialize Three.js scene, camera and renderer
export const getThreeSetup = memoize(
  (ctx) => {
    const scene = new Scene();
    const depthScene = new Scene();
    const pickerScene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      1000,
    );
    camera.position.z = 10;
    const light = new DirectionalLight(0xffffff, 2);
    scene.add(light);

    const renderer = getRenderer(ctx);

    // Visible scene
    const edgeVisualizerMesh = getEdgeVisualizerMesh(ctx);
    scene.add(edgeVisualizerMesh);

    const nodeVisualizerMesh = getNodeVisualizerMesh(ctx).mesh;
    scene.add(nodeVisualizerMesh);
    scene.nodeMeshes = new Set([nodeVisualizerMesh]);
    // setNodeGeometry(ctx, "sphere");

    // Picker scene
    const nodePickerMesh = getNodeVisualizerMesh(ctx).pickerMesh;
    pickerScene.add(nodePickerMesh);

    return {
      scene,
      depthScene,
      pickerScene,
      camera,
      renderer,
      nodeVisualizerMesh,
      edgeVisualizerMesh,
      nodePickerMesh,
    };
  },
  {
    // dispose: (x) => {
    //   console.log("Disposing Three.js setup");
    //   x.scene.traverse((object) => {
    //     if (object instanceof Mesh) {
    //       object.geometry.dispose();
    //       object.material.dispose();
    //     }
    //   });
    //   x.renderer.dispose();
    //   x.scene.clear();
    //   x.depthScene.clear();
    //   x.pickerScene.clear();
    //   if (x.nodeVisualizerMesh) x.nodeVisualizerMesh.geometry.dispose();
    //   if (x.edgeVisualizerMesh) x.edgeVisualizerMesh.geometry.dispose();
    //   if (x.nodePickerMesh) x.nodePickerMesh.geometry.dispose();
    //   requestAnimationFrame(() => {
    //     x.renderer.forceContextLoss();
    //     x.renderer.domElement.remove();
    //   });
    // },
  },
);

export const refreshNodeGeometry = (ctx) => {
  initializeNodeGeometry.delete(ctx);
};

export const getPickerRenderTarget = moize.infinite((ctx) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const pickerRenderTarget = new WebGLRenderTarget(
    canvas.width,
    canvas.height,
    {
      stencilBuffer: false,
    },
  );
  return pickerRenderTarget;
});

export const getNodeDepthRenderTarget = moize.infinite((ctx) => {
  const { canvas } = getCanvasAndGLContext(ctx);
  const nodeDepthRenderTarget = new WebGLRenderTarget(
    canvas.width,
    canvas.height,
    {
      depthTexture: new DepthTexture(canvas.width, canvas.height),
      depthBuffer: true,
      stencilBuffer: false,
    },
  );
  return nodeDepthRenderTarget;
});
