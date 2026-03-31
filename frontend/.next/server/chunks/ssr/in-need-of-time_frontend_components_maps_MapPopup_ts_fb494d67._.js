module.exports = [
  189524,
  (a) => {
    "use strict";
    var b = a.i(379976);
    class c extends google.maps.OverlayView {
      position;
      containerDiv;
      reactRoot;
      constructor(a, d) {
        (super(),
          (this.position = a),
          (this.containerDiv = document.createElement("div")),
          this.containerDiv.classList.add("popup-container"),
          (this.containerDiv.style.visibility = "hidden"),
          (this.reactRoot = (0, b.createRoot)(this.containerDiv)),
          this.reactRoot.render(d),
          c.preventMapHitsAndGesturesFrom(this.containerDiv));
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
        let a = this.getProjection().fromLatLngToDivPixel(this.position),
          b = 4e3 > Math.abs(a.x) && 4e3 > Math.abs(a.y) ? "block" : "none";
        ("block" === b && ((this.containerDiv.style.left = a.x + "px"), (this.containerDiv.style.top = a.y + "px")),
          this.containerDiv.style.display !== b && (this.containerDiv.style.display = b));
      }
    }
    a.s(["MapPopup", () => c]);
  },
];

//# sourceMappingURL=in-need-of-time_frontend_components_maps_MapPopup_ts_fb494d67._.js.map
