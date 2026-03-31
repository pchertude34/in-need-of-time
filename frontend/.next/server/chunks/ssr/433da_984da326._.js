module.exports = [
  468666,
  (a) => {
    "use strict";
    var b = a.i(468731),
      c = a.i(805485),
      d = a.i(13795),
      e = a.i(154038),
      f = a.i(224839);
    let g = () => () => {};
    function h({ children: a, config: h, unstable__noScript: i = !0, scheme: j, history: k, ...l }) {
      let m = (0, c.useSyncExternalStore)(
          g,
          () => !0,
          () => !1,
        ),
        n = (0, c.useMemo)(() => {
          if (l.unstable_history && k)
            throw Error("Cannot use both `unstable_history` and `history` props at the same time");
          if (m && "hash" === k) {
            let a;
            return (
              (a = (0, f.createHashHistory)()),
              {
                get action() {
                  return a.action;
                },
                get location() {
                  return a.location;
                },
                get createHref() {
                  return a.createHref;
                },
                get push() {
                  return a.push;
                },
                get replace() {
                  return a.replace;
                },
                get go() {
                  return a.go;
                },
                get back() {
                  return a.back;
                },
                get forward() {
                  return a.forward;
                },
                get block() {
                  return a.block;
                },
                listen: (b) =>
                  a.listen(({ location: a }) => {
                    b(a);
                  }),
              }
            );
          }
          return l.unstable_history;
        }, [k, m, l.unstable_history]);
      return (0, d.jsxs)(d.Fragment, {
        children: [
          i && (0, d.jsx)(b.t, {}),
          (0, d.jsx)(b.n, {
            children:
              "hash" !== k || m
                ? a ||
                  (0, d.jsx)(e.Studio, { config: h, scheme: j, unstable_globalStyles: !0, ...l, unstable_history: n })
                : null,
          }),
        ],
      });
    }
    a.s(["default", () => h]);
  },
  570367,
  (a) => {
    a.v((b) =>
      Promise.all(
        ["server/chunks/ssr/433da_@sanity_ui_dist__chunks-es_refractor_mjs_1734e4fd._.js"].map((b) => a.l(b)),
      ).then(() => b(866015)),
    );
  },
  503932,
  (a) => {
    a.v((b) =>
      Promise.all(
        ["server/chunks/ssr/433da_@sanity_client_dist__chunks-es_stegaEncodeSourceMap_8c72397b.js"].map((b) => a.l(b)),
      ).then(() => b(720739)),
    );
  },
  20428,
  (a) => {
    a.v((b) => Promise.all(["server/chunks/ssr/433da_78527724._.js"].map((b) => a.l(b))).then(() => b(944915)));
  },
  326330,
  (a) => {
    a.v((b) =>
      Promise.all(["server/chunks/ssr/433da_sanity_lib__chunks-es_resources2_656b4736.js"].map((b) => a.l(b))).then(
        () => b(495851),
      ),
    );
  },
  648420,
  (a) => {
    a.v((b) =>
      Promise.all(["server/chunks/ssr/433da_sanity_lib__chunks-es_resources6_c5a09984.js"].map((b) => a.l(b))).then(
        () => b(848561),
      ),
    );
  },
  865100,
  (a) => {
    a.v((b) =>
      Promise.all(["server/chunks/ssr/433da_sanity_lib__chunks-es_VideoPlayer_0cad3b99.js"].map((b) => a.l(b))).then(
        () => b(980257),
      ),
    );
  },
  339697,
  (a) => {
    a.v((b) =>
      Promise.all(["server/chunks/ssr/433da_sanity_lib__chunks-es_resources4_af92f73c.js"].map((b) => a.l(b))).then(
        () => b(589179),
      ),
    );
  },
  52032,
  (a) => {
    a.v((b) =>
      Promise.all(["server/chunks/ssr/433da_sanity_lib__chunks-es_resources_c9ce3207.js"].map((b) => a.l(b))).then(() =>
        b(393921),
      ),
    );
  },
  605501,
  (a) => {
    a.v((b) =>
      Promise.all(["server/chunks/ssr/433da_sanity_lib__chunks-es_resources5_d8d28f5c.js"].map((b) => a.l(b))).then(
        () => b(218816),
      ),
    );
  },
  226810,
  (a) => {
    a.v((b) =>
      Promise.all(["server/chunks/ssr/433da_sanity_lib__chunks-es_resources3_8a0f4425.js"].map((b) => a.l(b))).then(
        () => b(235359),
      ),
    );
  },
  620456,
  (a) => {
    a.v((b) =>
      Promise.all(
        ["server/chunks/ssr/433da_sanity_lib__chunks-es_ViteDevServerStopped_cdf25980.js"].map((b) => a.l(b)),
      ).then(() => b(197952)),
    );
  },
];

//# sourceMappingURL=433da_984da326._.js.map
