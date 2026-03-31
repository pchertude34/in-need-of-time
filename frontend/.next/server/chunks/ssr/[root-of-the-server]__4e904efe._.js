module.exports = [
  918622,
  (a, b, c) => {
    b.exports = a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js", () =>
      require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
    );
  },
  194640,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(918622);
  },
  13795,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(194640).vendored["react-ssr"].ReactJsxRuntime;
  },
  805485,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(194640).vendored["react-ssr"].React;
  },
  496297,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(194640).vendored["react-ssr"].ReactDOM;
  },
  468731,
  (a) => {
    "use strict";
    var b = a.i(13795);
    let c = {
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "auto",
      },
      d = ({ children: a }) =>
        (0, b.jsx)("div", { id: "sanity", "data-ui": "NextStudioLayout", style: c, children: a }),
      e = { position: "absolute", top: 0, right: 0, left: 0, bottom: 0, background: "#fff", zIndex: 1 },
      f = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontFamily: "helvetica, arial, sans-serif",
      },
      g = () =>
        (0, b.jsx)("noscript", {
          children: (0, b.jsx)("div", {
            style: e,
            children: (0, b.jsxs)("div", {
              style: f,
              children: [
                (0, b.jsx)("h1", { children: "JavaScript disabled" }),
                (0, b.jsxs)("p", {
                  children: [
                    "Please ",
                    (0, b.jsx)("a", { href: "https://www.enable-javascript.com/", children: "enable JavaScript" }),
                    " in your browser and reload the page to proceed.",
                  ],
                }),
              ],
            }),
          }),
        });
    a.s(["n", () => d, "t", () => g]);
  },
  99938,
  (a) => {
    "use strict";
    a.i(13795);
    a.i(468731);
    var b = a.i(496297),
      c = a.i(805485);
    (0, c.lazy)(() => a.A(713349));
    let d = Error("Cannot find module '@/studio/sanity.config'");
    throw ((d.code = "MODULE_NOT_FOUND"), d);
  },
  713349,
  (a) => {
    a.v((b) =>
      Promise.all(
        [
          "server/chunks/ssr/433da_984da326._.js",
          "server/chunks/ssr/433da_next_dist_compiled_f7ab101a._.js",
          "server/chunks/ssr/[root-of-the-server]__91973864._.js",
          "server/chunks/ssr/433da_f1101542._.js",
          "server/chunks/ssr/[root-of-the-server]__06c310bb._.js",
          "server/chunks/ssr/433da_react-refractor_dist_index_b60d9d4f.js",
          "server/chunks/ssr/433da_@floating-ui_react-dom_dist_floating-ui_react-dom_mjs_fa147924._.js",
        ].map((b) => a.l(b)),
      ).then(() => b(468666)),
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e904efe._.js.map
