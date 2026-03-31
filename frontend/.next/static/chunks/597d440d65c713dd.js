(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  189496,
  (t) => {
    "use strict";
    var e = t.i(802252);
    let i = {
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "auto",
      },
      a = ({ children: t }) =>
        (0, e.jsx)("div", { id: "sanity", "data-ui": "NextStudioLayout", style: i, children: t }),
      s = { position: "absolute", top: 0, right: 0, left: 0, bottom: 0, background: "#fff", zIndex: 1 },
      o = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontFamily: "helvetica, arial, sans-serif",
      },
      n = () =>
        (0, e.jsx)("noscript", {
          children: (0, e.jsx)("div", {
            style: s,
            children: (0, e.jsxs)("div", {
              style: o,
              children: [
                (0, e.jsx)("h1", { children: "JavaScript disabled" }),
                (0, e.jsxs)("p", {
                  children: [
                    "Please ",
                    (0, e.jsx)("a", { href: "https://www.enable-javascript.com/", children: "enable JavaScript" }),
                    " in your browser and reload the page to proceed.",
                  ],
                }),
              ],
            }),
          }),
        });
    t.s(["n", () => a, "t", () => n]);
  },
  544514,
  (t) => {
    "use strict";
    t.i(802252);
    t.i(189496);
    var e = t.i(614840),
      i = t.i(770572);
    (0, i.lazy)(() => t.A(23857));
    let a = Error("Cannot find module '@/studio/sanity.config'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  },
  23857,
  (t) => {
    t.v((e) =>
      Promise.all(
        [
          "static/chunks/eac00b76db97b2de.js",
          "static/chunks/e70e12a5c532041a.js",
          "static/chunks/871f16657055dafa.js",
          "static/chunks/099f6dafb994fcb6.js",
          "static/chunks/0f3458de61a45234.js",
        ].map((e) => t.l(e)),
      ).then(() => e(102671)),
    );
  },
]);
