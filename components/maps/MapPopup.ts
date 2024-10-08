import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Extend the google.maps.OverlayView class to create a custom popup for the map.
 * This class will create the container div for the popup and align it to the correct
 * position on the map.
 *
 * Due to the need for google maps to be loaded prior to this class being instantiated,
 * most of the time this will probably need to be dynamically imported with an async import.
 */
export class MapPopup extends google.maps.OverlayView {
  position: google.maps.LatLng;
  containerDiv: HTMLDivElement;
  reactRoot: any;

  constructor(position: google.maps.LatLng, content: React.ReactNode) {
    super();
    this.position = position;

    this.containerDiv = document.createElement("div");
    this.containerDiv.classList.add("popup-container");
    this.containerDiv.style.visibility = "hidden";
    this.reactRoot = createRoot(this.containerDiv);
    this.reactRoot.render(content);

    // Optionally stop clicks, etc., from bubbling up to the map.
    MapPopup.preventMapHitsAndGesturesFrom(this.containerDiv);
  }

  /** Called when the popup is added to the map. */
  onAdd() {
    this.getPanes()!.floatPane.appendChild(this.containerDiv);
  }

  /** Called when the popup is removed from the map. */
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

  /** Called each frame when the popup needs to draw itself. */
  draw() {
    const divPosition = this.getProjection().fromLatLngToDivPixel(this.position)!;

    // Hide the popup when it is far out of view.
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
