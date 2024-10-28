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
import { LitElement } from "lit-element";

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

export { randomGraphData, makeNavId } from "./data";

class WebscapeWanderer extends LitElement {
  // static observedAttributes = Object.keys(defaultProperties).map(kebabCase);
  private context;
  private canvas;
  private resizeObserver;
  private onTapHandler: (node: any) => void;

  static get properties() {
    return {
      globalScale: { type: Number },
      nodeScale: { type: Number },
      edgeFog: { type: Number },
      nodeFog: { type: Number },
      edgeScale: { type: Number },
      edgeOvershoot: { type: Number },
      edgeFrequency: { type: Number },
      edgePulseSpeed: { type: Number },
      edgeWaveSpeed: { type: Number },
      selected: { type: String },
      // focus: { type: String },
      defaultFogVisibility: { type: Number },
      defaultFogBoundaryClipZ: { type: Number },
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
    const ctx = this.context;
    // console.log("Custom element added to page.");
    const shadow = this.attachShadow({ mode: "open" });
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
    console.log("Canvas created and set");

    initializeRenderer(ctx);
    console.log("Renderer initialized");
    getThreeSetup(ctx);
    console.log("Three.js setup complete");
    setupCameraInteraction(ctx);
    console.log("Camera interaction set up");
    setupSelection(this);
    console.log("Selection setup complete");

    document.querySelector("html")?.classList.add("loading");
    console.log("Added loading class to HTML");

    getGraphData(this.context).then((data) => {
      console.log("Graph data retrieved", data);
      document.querySelector("html")!.classList.remove("loading");
      console.log("Removed loading class from HTML");
      animateGraph(this.context);
      console.log("Graph animation started");
      navigation.start();
      console.log("Navigation started");
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
    // console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    // console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // const ctx = this.context;
    // const attrs = getProperties(this.context);
    // attrs[camelCase(name)] = parseFloat(
    //   newValue || defaultProperties[camelCase(name)],
    // );

    if (name == "selected") {
      getGraphData(this.context).then(({ nodesByNavId }) => {
        const node = nodesByNavId[newValue];
        selectNodeAndDownstreamDependents(this.context, node, true);
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
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
