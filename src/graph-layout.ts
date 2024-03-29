import requestAnimationFrame from 'raf';
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
} from "d3-force-3d";

import forceLayout from "ngraph.forcelayout";
import createGraph from "ngraph.graph";

export interface GraphLayoutSimulator {
  start: () => void;
  stop: () => void;
  getPositions: (callback: (positions: Float32Array) => void) => void;
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
}

class D3ForceLayout extends GraphLayoutSim {
  layoutEngine: any;

  constructor(graphData) {
    super(graphData);
    this.layoutEngine = forceSimulation(graphData.nodes, 3)
      .force(
        "charge",
        forceManyBody()
          // .distanceMax(0.3)
      )
      .force(
        "link",
        forceLink(graphData.links).id((d) => d.id)
          // .distance(10)
      )
      .force("center", forceCenter());

    this.layoutEngine.on("tick", () => {
      const newPositions = this.graphData.nodes.flatMap(({ x, y, z }) =>
        [x, y, z].map((co) => co)
      );
      this.positions = new Float32Array(newPositions);
    });
  }

  start() {
    this.layoutEngine.restart();
  }

  stop() {
    this.layoutEngine.stop();
  }
}

class NgraphForceLayout extends GraphLayoutSim {
  layoutEngine: any;

  constructor(graphData) {
    super(graphData);
    const ngraph = createGraph();
    graphData.nodes.forEach((node) => {
      ngraph.addNode(node.id, node);
    });
    graphData.links.forEach((link) => {
      ngraph.addLink(link.source, link.target);
    });

    this.layoutEngine = forceLayout(ngraph, {
      dimensions: 3,
      // springLength: 10,
      // springCoefficient: 0.1,
      // dragCoefficient: 0.01,
      // gravity: -0.1,
      // theta: 0.8,
      // timeStep: 0.01
    });

    for (let node of graphData.nodes) {
      this.layoutEngine.setNodePosition(node.id, node.x, node.y, node.z);
    }
    this.layoutEngine.on("step", () => {
      const newPositions = graphData.nodes.flatMap(({ id }) => {
        const { x, y, z } = this.layoutEngine.getNodePosition(id);
        return [x, y, z].map((co) => co);
      });
      this.positions = new Float32Array(newPositions);
    });
  }

  start() {
    const simulate = () => {
      this.layoutEngine.step();
      
      if (using === this.layoutEngine) requestAnimationFrame(simulate);
    };
  
    simulate();
  }

  stop() {
    this.layoutEngine.dispose();
  }
}

export {
  NgraphForceLayout,
  D3ForceLayout,
}
