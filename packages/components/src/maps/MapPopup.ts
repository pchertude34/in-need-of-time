import React from "react";
import { createRoot, type Root } from "react-dom/client";

export type MapPopup = google.maps.OverlayView & {
  position: google.maps.LatLng;
  containerDiv: HTMLDivElement;
  reactRoot: Root;
  show(): void;
  hide(): void;
  toggle(): void;
};

type MapPopupConstructor = new (position: google.maps.LatLng, content: React.ReactNode) => MapPopup;

let MapPopupClass: MapPopupConstructor | undefined;

/**
 * Create a custom popup for the map, extending google.maps.OverlayView. The popup
 * creates its own container div and aligns it to the correct position on the map.
 *
 * The class is defined lazily on first call, because google.maps.OverlayView only
 * exists once the Google Maps script has loaded — resolving it at module evaluation
 * time would extend an empty class instead.
 */
export function createMapPopup(position: google.maps.LatLng, content: React.ReactNode): MapPopup {
  if (typeof window === "undefined" || !window.google?.maps?.OverlayView) {
    throw new Error("Google Maps API is not loaded. Create MapPopup only after maps initialization.");
  }

  MapPopupClass ??= defineMapPopupClass(window.google.maps.OverlayView);
  return new MapPopupClass(position, content);
}

function defineMapPopupClass(OverlayView: typeof google.maps.OverlayView): MapPopupConstructor {
  return class extends OverlayView implements MapPopup {
    position: google.maps.LatLng;
    containerDiv: HTMLDivElement;
    reactRoot: Root;

    constructor(position: google.maps.LatLng, content: React.ReactNode) {
      super();

      this.position = position;

      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.style.visibility = "hidden";
      this.reactRoot = createRoot(this.containerDiv);
      this.reactRoot.render(content);

      OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
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
      this.containerDiv.style.visibility = "visible";
    }

    hide() {
      this.containerDiv.style.visibility = "hidden";
    }

    toggle() {
      if (this.containerDiv.style.visibility === "hidden") {
        this.show();
      } else {
        this.hide();
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
  };
}
