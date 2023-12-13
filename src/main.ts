import { animateGraph, initializeRenderer, setCanvas } from "./gpu/rendering";
import { getGraphData, randomGraphData, setGraphData } from "./data";
import { setupCameraInteraction, setupSelection } from "./interaction";
import navigation from "./navigation";

import { getThreeSetup } from "./gpu/graph-viz";

// import "./parameters";

class WebscapeWanderer extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    const shadow = this.attachShadow({ mode: "open" });
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    shadow.appendChild(canvas);
    setCanvas(canvas);

    initializeRenderer();
    const { scene, camera, renderer } = getThreeSetup();
    setupCameraInteraction();
    setupSelection();

    document.querySelector("html")?.classList.add("loading");

    setGraphData(randomGraphData(100, 1000));
    setInterval(() => {
      setGraphData(randomGraphData(100, 1000));
    }, 5000);
    getGraphData().then((data) => {
        document.querySelector("html")!.classList.remove("loading");
        animateGraph();
        navigation.start();
    });
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("webscape-wanderer", WebscapeWanderer);
