import {
  animateGraph,
  fillCanvasToWindow,
  getWidthAndHeight,
  initializeRenderer,
  setCanvas,
} from "./gpu/rendering";
import { getGraphData, randomGraphData, setGraphData } from "./data";
import { setupCameraInteraction, setupSelection } from "./interaction";
import navigation from "./navigation";
import { LitElement, PropertyValues } from "lit-element";

import {
  defaultProperties,
  defaultProperties,
  defaultProperties,
  getProperties,
} from "./attributes";

import {
  // getEdgeIndexBuffer,
  getEdgeVisualizerMesh,
  // getNodeIndexArray,
  getNodeVisualizerMesh,
  getThreeSetup,
  // initializeEdgeVisualizerUniforms,
  // initializeNodeVisualizerUniforms,
  // loadEdgeVertexArray,
  // loadNodeVertexArray,
} from "./gpu/graph-viz";
import { camelCase, kebabCase, snakeCase } from "lodash-es";
import { getComponent, setComponent } from "./context";
import { selectNodeAndDownstreamDependents } from "./selection";
import { startCameraAnimation } from "./camera-animation";

// import "./parameters";

export {
  randomGraphData,
  addRandomNodes,
  addRandomEdges,
  makeNavId,
} from "./data";

class WebscapeWanderer extends LitElement {
  // static observedAttributes = Object.keys(defaultProperties).map(kebabCase);
  private context;
  private canvas;
  private resizeObserver;
  private onTapHandler: (node: any) => void;

  static get properties() {
    return {
      globalScale: { type: Number, attribute: "global-scale" },
      nodeScale: { type: Number, attribute: "node-scale" },
      edgeFog: { type: Number, attribute: "edge-fog" },
      nodeFog: { type: Number, attribute: "node-fog" },
      edgeScale: { type: Number, attribute: "edge-scale" },
      edgeOvershoot: { type: Number, attribute: "edge-overshoot" },
      edgeFrequency: { type: Number, attribute: "edge-frequency" },
      edgePulseSpeed: { type: Number, attribute: "edge-pulse-speed" },
      edgeWaveSpeed: { type: Number, attribute: "edge-wave-speed" },
      selected: { type: String },
      defaultFogVisibility: {
        type: Number,
        attribute: "default-fog-visibility",
      },
      defaultFogBoundaryClipZ: {
        type: Number,
        attribute: "default-fog-boundary-clip-z",
      },
    };
  }

  constructor() {
    super();
    for (const [key, value] of Object.entries(defaultProperties)) {
      this[key] = defaultProperties[key];
    }

    this.context = Symbol();
    setComponent(this.context, this);
    if (getComponent(this.context) !== this) {
      throw new Error("What the heck");
    }

    this.resizeObserver = new ResizeObserver((entries) => {
      getWidthAndHeight.clear(this.context);
      fillCanvasToWindow(this.context);
    });

    // Default onTap handler
    this.onTapHandler = (evt) => {
      this.setAttribute("selected", evt.detail?.info?.navId);
      this.focus = evt.detail?.info?.navId;
    };
  }

  set graphData(data) {
    setGraphData(this.context, data);
  }

  get graphData() {
    return getGraphData(this.context);
  }

  onTap(handler: (event: CustomEvent) => void) {
    this.onTapHandler = handler;
  }

  connectedCallback() {
    super.connectedCallback();
    const ctx = this.context;

    // console.debug("Custom element added to page.");
    const shadow = this.shadowRoot!;
    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        min-width: 100%;
        min-height: 99vh;
        max-height: 100vh;
      }
    `;
    shadow.appendChild(style);

    const canvas: HTMLCanvasElement = document.createElement("canvas");
    shadow.appendChild(canvas);
    setCanvas(ctx, canvas);
    console.debug("Canvas created and set");

    initializeRenderer(ctx);
    console.debug("Renderer initialized");
    getThreeSetup(ctx);
    console.debug("Three.js setup complete");
    setupCameraInteraction(ctx);
    console.debug("Camera interaction set up");
    setupSelection(this);
    console.debug("Selection setup complete");

    document.querySelector("html")?.classList.add("loading");
    console.debug("Added loading class to HTML");

    getGraphData(this.context).then((data) => {
      console.debug("Graph data retrieved", data);
      document.querySelector("html")!.classList.remove("loading");
      console.debug("Removed loading class from HTML");
      animateGraph(this.context);
      console.debug("Graph animation started");
      navigation.start();
      console.debug("Navigation started");
    });

    startCameraAnimation(this.context);

    this.resizeObserver.observe(this);

    // Setup tap event listener
    this.addEventListener("tap", (event) => {
      if (event) {
        this.onTapHandler(event);
      }
    });
  }

  disconnectedCallback() {
    this.resizeObserver.unobserve(this);
    // console.debug("Custom element removed from page.");
  }

  adoptedCallback() {
    // console.debug("Custom element moved to new page.");
  }

  protected firstUpdated(changedProperties: PropertyValues): void {
    for (const [key, oldvalue] of changedProperties) {
      if (key == "selected") {
        const value = this[key];
        getGraphData(this.context).then(({ nodesByNavId }) => {
          const node = nodesByNavId[value];
          selectNodeAndDownstreamDependents(this.context, node, true);
        });
      }
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    for (const [key, oldvalue] of changedProperties) {
      if (key == "selected") {
        const value = this[key];
        getGraphData(this.context).then(({ nodesByNavId }) => {
          const node = nodesByNavId[value];
          selectNodeAndDownstreamDependents(this.context, node, true);
        });
      }
    }
  }

  private getNodeFromEvent(event: MouseEvent): any {
    // Implementation of getting node from event
    // This is a placeholder and should be replaced with actual logic
    return null;
  }
}

export function startWebscapeWanderer(tagName = "webscape-wanderer") {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, WebscapeWanderer);
  }
}
