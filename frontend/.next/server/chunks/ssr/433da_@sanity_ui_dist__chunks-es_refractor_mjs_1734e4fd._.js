module.exports = [
  866015,
  (a) => {
    "use strict";
    var b = a.i(13795),
      c = a.i(813394),
      d = a.i(864035);
    function e(a) {
      let e,
        f,
        g,
        h,
        i = (0, c.c)(13),
        { language: j, value: k } = a,
        l = "string" == typeof j ? j : void 0;
      i[0] !== l ? ((e = !!l && (0, d.hasLanguage)(l)), (i[0] = l), (i[1] = e)) : (e = i[1]);
      let m = e;
      return (
        i[2] !== l || i[3] !== m || i[4] !== k
          ? ((f = !(l && m) && (0, b.jsx)("code", { children: k })), (i[2] = l), (i[3] = m), (i[4] = k), (i[5] = f))
          : (f = i[5]),
        i[6] !== l || i[7] !== m || i[8] !== k
          ? ((g = l && m && (0, b.jsx)(d.Refractor, { inline: !0, language: l, value: String(k) })),
            (i[6] = l),
            (i[7] = m),
            (i[8] = k),
            (i[9] = g))
          : (g = i[9]),
        i[10] !== f || i[11] !== g
          ? ((h = (0, b.jsxs)(b.Fragment, { children: [f, g] })), (i[10] = f), (i[11] = g), (i[12] = h))
          : (h = i[12]),
        h
      );
    }
    ((e.displayName = "LazyRefractor"), a.s(["default", () => e]));
  },
];

//# sourceMappingURL=433da_%40sanity_ui_dist__chunks-es_refractor_mjs_1734e4fd._.js.map
