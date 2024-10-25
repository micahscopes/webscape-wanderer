import { animateGraph, initializeRenderer, setCanvas } from "./gpu/rendering";
import { getGraphData, randomGraphData, setGraphData } from "./data";
import { setupCameraInteraction, setupSelection } from "./interaction";
import navigation from "./navigation";

import { defaultAttributes, getAttributes } from "./attributes";

import {
  getEdgeIndexBuffer,
  getEdgeVisualizerMesh,
  getNodeIndexArray,
  getNodeVisualizerMesh,
  getThreeSetup,
  initializeEdgeVisualizerUniforms,
  initializeNodeVisualizerUniforms,
  loadEdgeVertexArray,
  loadNodeVertexArray,
} from "./gpu/graph-viz";
import { camelCase, kebabCase, snakeCase } from "lodash-es";
import { getComponent, setComponent } from "./context";
import { selectNodeAndDownstreamDependents } from "./selection";

// import "./parameters";

export { randomGraphData, makeNavId } from "./data";

class WebscapeWanderer extends HTMLElement {
  static observedAttributes = Object.keys(defaultAttributes).map(kebabCase);
  private context;
  private canvas;

  constructor() {
    super();
    this.context = Symbol();
    setComponent(this.context, this);
    if (getComponent(this.context) !== this) {
      throw new Error("What the heck");
    }
  }

  set graphData(data) {
    setGraphData(this.context, data);
  }

  get graphData() {
    return getGraphData(this.context);
  }

  connectedCallback() {
    const ctx = this.context;
    // console.log("Custom element added to page.");
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        // width: 800px;
        // height: 600px;
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
  }

  disconnectedCallback() {
    // console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    // console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const ctx = this.context;
    const attrs = getAttributes(this.context);
    attrs[camelCase(name)] = newValue || defaultAttributes[camelCase(name)];

    if (name == "focus") {
      getGraphData(ctx).then(({ nodesByNavId }) => {
        const node = nodesByNavId[newValue];
        selectNodeAndDownstreamDependents(ctx, node, true);
      });
    }
  }
}

customElements.define("webscape-wanderer", WebscapeWanderer);
