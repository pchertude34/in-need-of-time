import React from "react";
import { createRoot } from "react-dom/client";

const OverlayViewBase =
  typeof window !== "undefined" && window.google?.maps?.OverlayView
    ? window.google.maps.OverlayView
    : (class {} as typeof google.maps.OverlayView);

/**
 * Extend the google.maps.OverlayView class to create a custom popup for the map.
 * This class will create the container div for the popup and align it to the correct
 * position on the map.
 *
 * Due to the need for google maps to be loaded prior to this class being instantiated,
 * most of the time this will probably need to be dynamically imported with an async import.
 */
export class MapPopup extends OverlayViewBase {
  position: google.maps.LatLng;
  containerDiv: HTMLDivElement;
  reactRoot: any;

  constructor(position: google.maps.LatLng, content: React.ReactNode) {
    super();

    if (typeof window === "undefined" || !window.google?.maps?.OverlayView) {
      throw new Error("Google Maps API is not loaded. Create MapPopup only after maps initialization.");
    }

    this.position = position;

    this.containerDiv = document.createElement("div");
    this.containerDiv.classList.add("popup-container");
    this.containerDiv.style.visibility = "hidden";
    this.reactRoot = createRoot(this.containerDiv);
    this.reactRoot.render(content);

    if ("preventMapHitsAndGesturesFrom" in MapPopup) {
      MapPopup.preventMapHitsAndGesturesFrom(this.containerDiv);
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
