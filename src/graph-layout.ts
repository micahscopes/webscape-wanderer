import requestAnimationFrame from "raf";
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
} from "d3-force-3d";

// import forceLayout from "ngraph.forcelayout";
// import createGraph from "ngraph.graph";

export interface GraphLayoutSimulator {
  start: () => void;
  stop: () => void;
  getPositions: (callback: (positions: Float32Array) => void) => void;
  setData: (graphData: any) => void;
}

class GraphLayoutSim implements GraphLayoutSimulator {
  positions: Float32Array = new Float32Array(0);
  graphData: any;

  constructor(graphData) {
    this.graphData = graphData;
  }

  private get positionsBuffer() {
    return new Float32Array(this.positions);
  }

  start() {
    throw new Error("not implemented");
  }

  stop() {
    throw new Error("not implemented");
  }

  getPositions(callback) {
    const positions = this.positionsBuffer;
    callback(positions);
  }

  setData(graphData: any) {
    this.graphData = graphData;
  }
}

import { debounce } from "lodash-es";

class D3ForceLayout extends GraphLayoutSim {
  layoutEngine: any;

  constructor(graphData) {
    super(graphData);
    this.initializeLayoutEngine();
    this.debouncedUpdate = debounce(this.updatePositions.bind(this), 20, {
      maxWait: 150,
    }); // 100ms debounce
  }

  private initializeLayoutEngine() {
    this.layoutEngine = forceSimulation(this.graphData.nodes, 3)
      .force(
        "charge",
        forceManyBody(),
        // .distanceMax(0.3)
      )
      .force(
        "link",
        forceLink(this.graphData.links).id((d) => d.id),
        // .distance(10)
      )
      .force("center", forceCenter());

    this.layoutEngine.on("tick", () => {
      if (this.layoutEngine.alpha() > 0.01) {
        // Adjust this threshold as needed
        this.debouncedUpdate();
      } else {
        this.updatePositions();
      }
    });
  }

  private updatePositions() {
    const newPositions = this.graphData.nodes.flatMap(({ x, y, z }) =>
      [x, y, z].map((co) => (isNaN(co) || !isFinite(co) ? 0 : co)),
    );
    this.positions = new Float32Array(newPositions);
  }

  start() {
    this.layoutEngine.restart();
  }

  stop() {
    this.layoutEngine.stop();
  }

  setData(graphData: any) {
    super.setData(graphData);
    this.layoutEngine.nodes(this.graphData.nodes);
    this.layoutEngine.force("link").links(this.graphData.links);
    // this.layoutEngine.alpha(0.4).restart();
    this.layoutEngine
      .alpha(0.5)
      // .alphaMin(0.1)
      // .alphaDecay(0.03)
      // .alpha(Math.min(0.2, this.layoutEngine.alpha() + 0.2))
      .restart();
  }

  // getPositions(callback) {
  //   if (this.layoutEngine.alpha() < 0.5) {
  //     const positions = this.positions;
  //     callback(positions);
  //   }
  // }
}

// class NgraphForceLayout extends GraphLayoutSim {
//   layoutEngine: any;

//   constructor(graphData) {
//     super(graphData);
//     const ngraph = createGraph();
//     graphData.nodes.forEach((node) => {
//       ngraph.addNode(node.id, node);
//     });
//     graphData.links.forEach((link) => {
//       ngraph.addLink(link.source, link.target);
//     });

//     this.layoutEngine = forceLayout(ngraph, {
//       dimensions: 3,
//       // springLength: 10,
//       // springCoefficient: 0.1,
//       // dragCoefficient: 0.01,
//       // gravity: -0.1,
//       // theta: 0.8,
//       // timeStep: 0.01
//     });

//     for (let node of graphData.nodes) {
//       this.layoutEngine.setNodePosition(node.id, node.x, node.y, node.z);
//     }
//     this.layoutEngine.on("step", () => {
//       const newPositions = graphData.nodes.flatMap(({ id }) => {
//         const { x, y, z } = this.layoutEngine.getNodePosition(id);
//         return [x, y, z].map((co) => co);
//       });
//       this.positions = new Float32Array(newPositions);
//     });
//   }

//   start() {
//     const simulate = () => {
//       this.layoutEngine.step();

//       if (using === this.layoutEngine) requestAnimationFrame(simulate);
//     };

//     simulate();
//   }

//   stop() {
//     this.layoutEngine.dispose();
//   }
// }

export {
  // NgraphForceLayout,
  D3ForceLayout,
};
