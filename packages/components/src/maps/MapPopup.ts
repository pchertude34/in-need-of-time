import React from "react";
import { createRoot } from "react-dom/client";

export function createMapPopup(position: google.maps.LatLng, content: React.ReactNode) {
  if (typeof window === "undefined" || !window.google?.maps?.OverlayView) {
    throw new Error("Google Maps API is not loaded. Call createMapPopup only after maps initialization.");
  }

  class MapPopupInstance extends window.google.maps.OverlayView {
    position: google.maps.LatLng;
    containerDiv: HTMLDivElement;
    reactRoot: any;

    constructor() {
      super();

      this.position = position;

      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.style.visibility = "hidden";
      this.reactRoot = createRoot(this.containerDiv);
      this.reactRoot.render(content);

      if ("preventMapHitsAndGesturesFrom" in MapPopupInstance) {
        MapPopupInstance.preventMapHitsAndGesturesFrom(this.containerDiv);
      }
    }

    onAdd() {
      this.getPanes()!.floatPane.appendChild(this.containerDiv);
    }

    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    }

    show() {
      if (this.containerDiv) {
        this.containerDiv.style.visibility = "visible";
      }
    }

    hide() {
      if (this.containerDiv) {
        this.containerDiv.style.visibility = "hidden";
      }
    }

    toggle() {
      if (this.containerDiv) {
        if (this.containerDiv.style.visibility === "hidden") {
          this.show();
        } else {
          this.hide();
        }
      }
    }

    draw() {
      const divPosition = this.getProjection().fromLatLngToDivPixel(this.position)!;
      const display = Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ? "block" : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }

  return new MapPopupInstance();
}

export type MapPopup = ReturnType<typeof createMapPopup>;
