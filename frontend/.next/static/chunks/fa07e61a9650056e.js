(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  27117,
  (i) => {
    "use strict";
    var t = i.i(928449);
    class e extends google.maps.OverlayView {
      position;
      containerDiv;
      reactRoot;
      constructor(i, n) {
        (super(),
          (this.position = i),
          (this.containerDiv = document.createElement("div")),
          this.containerDiv.classList.add("popup-container"),
          (this.containerDiv.style.visibility = "hidden"),
          (this.reactRoot = (0, t.createRoot)(this.containerDiv)),
          this.reactRoot.render(n),
          e.preventMapHitsAndGesturesFrom(this.containerDiv));
      }
      onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
      }
      onRemove() {
        this.containerDiv.parentElement && this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
      show() {
        this.containerDiv && (this.containerDiv.style.visibility = "visible");
      }
      hide() {
        this.containerDiv && (this.containerDiv.style.visibility = "hidden");
      }
      toggle() {
        this.containerDiv && ("hidden" === this.containerDiv.style.visibility ? this.show() : this.hide());
      }
      draw() {
        let i = this.getProjection().fromLatLngToDivPixel(this.position),
          t = 4e3 > Math.abs(i.x) && 4e3 > Math.abs(i.y) ? "block" : "none";
        ("block" === t && ((this.containerDiv.style.left = i.x + "px"), (this.containerDiv.style.top = i.y + "px")),
          this.containerDiv.style.display !== t && (this.containerDiv.style.display = t));
      }
    }
    i.s(["MapPopup", () => e]);
  },
]);
