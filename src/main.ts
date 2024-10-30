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

import { defaultProperties } from "./attributes";

import {
  getNodeVisualizerMesh,
  getShapeGeo,
  getThreeSetup,
  resetNodeGeometry,
} from "./gpu/graph-viz";
import { getComponent, setComponent } from "./context";
import { selectNodeAndDownstreamDependents, startFocus } from "./selection";
import { startCameraAnimation } from "./camera-animation";
import { OBJLoader } from "../lib/OBJLoader";
import { state } from "./state";

// import "./parameters";

export {
  randomGraphData,
  addRandomNodes,
  addRandomEdges,
  makeNavId,
  dataFromGraph,
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
      focus: { type: String, attribute: false },
      focusedZoom: { type: Number },
      unfocusedZoom: { type: Number },
      zoomBoundary: { type: Number },
      defaultFogVisibility: {
        type: Number,
        attribute: "default-fog-visibility",
      },
      defaultFogBoundaryClipZ: {
        type: Number,
        attribute: "default-fog-boundary-clip-z",
      },
      nodeShape: {
        type: String,
        attribute: "node-shape",
      },
      nodeGeometryBuffer: {
        attribute: false,
      },
      graphData: {
        attribute: false,
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

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const { set, get } = state(this.context, "visible");
        if (entry.isIntersecting) {
          set(true);
        } else {
          set(false);
        }

        console.log("Intersection observer", get());
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      },
    );

    // Default onTap handler
    this.onTapHandler = (evt) => {
      this.setAttribute("selected", evt.detail?.info?.navId);
      this.focus = evt.detail?.info?.navId;
    };
  }

  // set graphData(data) {
  //   setGraphData(this.context, data);
  // }

  // get graphData() {
  //   return getGraphData(this.context);
  // }

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
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      canvas {
        max-width: 100%;
        max-height: fit-content;
        display: block;
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

    // setNodeGeometry(ctx, "icosohedron");

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
    this.intersectionObserver.observe(this);
    // startFocus(this.context);

    // Setup tap event listener
    this.addEventListener("tap", (event) => {
      if (event) {
        this.onTapHandler(event);
      }
    });
  }

  get visible() {
    return state(this.context, "visible").get() && this.isVisible();
  }

  disconnectedCallback() {
    this.resizeObserver.unobserve(this);
    this.intersectionObserver.unobserve(this);
    // console.debug("Custom element removed from page.");
  }

  adoptedCallback() {
    // console.debug("Custom element moved to new page.");
  }

  private updateCommon(changedProperties: PropertyValues) {
    for (const [key, oldValue] of changedProperties) {
      const value = this[key];
      switch (key) {
        case "graphData":
          setGraphData(this.context, value);
          startFocus(this.context);
          break;
        case "selected":
          getGraphData(this.context).then(({ nodesByNavId }) => {
            const node = nodesByNavId[value];
            selectNodeAndDownstreamDependents(this.context, node, true);
          });
          break;
        case "focus":
          startFocus(this.context);
          break;
        case "nodeShape":
          let geoBuffer = getShapeGeo(this.nodeShape);
          if (geoBuffer) {
            this._nodeGeometryBuffer = geoBuffer;
            resetNodeGeometry(this.context);
          } else {
            try {
              const loader = new OBJLoader();
              loader.load(this.nodeShape, (geometry) => {
                this._nodeGeometryBuffer = geometry?.children[0]?.geometry;
                resetNodeGeometry(this.context);
              });
            } catch (e) {
              console.warn("Failed to load node shape as an obj url", e);
            }
          }
          break;
      }
    }
  }

  protected firstUpdated(changedProperties: PropertyValues): void {
    this.updateCommon(changedProperties);
    // startFocus(this.context);
  }

  protected updated(changedProperties: PropertyValues): void {
    this.updateCommon(changedProperties);
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
