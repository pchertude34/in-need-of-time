module.exports = [
  197952,
  (a) => {
    "use strict";
    var b = a.i(13795),
      c = a.i(246912),
      d = a.i(518805),
      e = a.i(805485);
    let f = "Dev server stopped";
    class g extends Error {
      constructor() {
        (super(f), (this.name = "ViteDevServerStoppedError"), (this.ViteDevServerStoppedError = !0));
      }
    }
    let h = {
        get url() {
          return `file://${a.P("in-need-of-time/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.js")}`;
        },
      }.hot,
      i = () => {
        let { devServerStopped: a } = (() => {
          let a,
            b,
            d,
            f,
            g = (0, c.c)(5),
            [i, j] = (0, e.useState)(!1);
          g[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = () => j(!0)), (g[0] = a)) : (a = g[0]);
          let k = a;
          return (
            g[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = () => {
                  h && h.on("vite:ws:disconnect", k);
                }),
                (d = [k]),
                (g[1] = b),
                (g[2] = d))
              : ((b = g[1]), (d = g[2])),
            (0, e.useEffect)(b, d),
            g[3] !== i ? ((f = { devServerStopped: i }), (g[3] = i), (g[4] = f)) : (f = g[4]),
            f
          );
        })();
        if (a) throw new g();
        return null;
      },
      j = () => {
        let a,
          d = (0, c.c)(1);
        return (
          d[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = h ? (0, b.jsx)(i, {}) : null), (d[0] = a))
            : (a = d[0]),
          a
        );
      },
      k = () => {
        let a,
          e,
          g,
          h = (0, c.c)(3);
        return (
          h[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = [4, 5, 6, 7]), (h[0] = a)) : (a = h[0]),
          h[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, b.jsx)(d.Heading, { children: f })), (h[1] = e))
            : (e = h[1]),
          h[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = (0, b.jsx)(d.Card, {
                height: "fill",
                overflow: "auto",
                paddingY: a,
                paddingX: 4,
                sizing: "border",
                tone: "critical",
                children: (0, b.jsx)(d.Container, {
                  width: 3,
                  children: (0, b.jsxs)(d.Stack, {
                    space: 4,
                    children: [
                      e,
                      (0, b.jsx)(d.Card, {
                        border: !0,
                        radius: 2,
                        overflow: "auto",
                        padding: 4,
                        tone: "inherit",
                        children: (0, b.jsx)(d.Stack, {
                          space: 4,
                          children: (0, b.jsx)(d.Text, {
                            size: 2,
                            children:
                              "The development server has stopped. You may need to restart it to continue working.",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              })),
              (h[2] = g))
            : (g = h[2]),
          g
        );
      };
    a.s([
      "DetectViteDevServerStopped",
      () => j,
      "DevServerStoppedErrorScreen",
      () => k,
      "ViteDevServerStoppedError",
      () => g,
    ]);
  },
];

//# sourceMappingURL=433da_sanity_lib__chunks-es_ViteDevServerStopped_cdf25980.js.map
