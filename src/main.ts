import { animateGraph, initializeRenderer, setCanvas } from "./gpu/rendering";
import { getGraphData, randomGraphData, setGraphData } from "./data";
import { setupCameraInteraction, setupSelection } from "./interaction";
import navigation from "./navigation";

import { defaultAttributes, getAttributes } from "./attributes";

import { getThreeSetup } from "./gpu/graph-viz";
import { camelCase, kebabCase, snakeCase } from "lodash-es";
import { getComponent, setComponent } from "./context";

// import "./parameters";

export { randomGraphData };

class WebscapeWanderer extends HTMLElement {
  static observedAttributes = Object.keys(defaultAttributes).map(kebabCase);
  private context;
  private canvas;

  constructor() {
    super();
    this.context = Symbol()
    setComponent(this.context, this);
    if(getComponent(this.context) !== this) {
      throw new Error("What the heck")
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
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        width: 800px;
        height: 600px;
        // min-width: 100%;
        // min-height: 99vh;
        max-height: 100vh;
      }
    `;
    shadow.appendChild(style);

    const canvas: HTMLCanvasElement = document.createElement("canvas");
    shadow.appendChild(canvas);
    setCanvas(ctx, canvas);

    initializeRenderer(ctx);
    const { scene, camera, renderer } = getThreeSetup(ctx);
    setupCameraInteraction(ctx);
    setupSelection(ctx);

    document.querySelector("html")?.classList.add("loading");

    getGraphData(this.context).then((data) => {
      document.querySelector("html")!.classList.remove("loading");
      animateGraph(this.context);
      navigation.start();
    });
  }

  disconnectedCallback() {
    // console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    // console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(`Attribute ${name} has changed.`);
    const attrs = getAttributes(this.context);
    attrs[camelCase(name)] = newValue;
  }
}

customElements.define("webscape-wanderer", WebscapeWanderer);
