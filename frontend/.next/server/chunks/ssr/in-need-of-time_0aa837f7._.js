module.exports = [
  17553,
  385448,
  554751,
  635204,
  206554,
  (a) => {
    "use strict";
    function b(a, b) {
      if (null == a) return {};
      var c = {};
      for (var d in a)
        if ({}.hasOwnProperty.call(a, d)) {
          if (-1 !== b.indexOf(d)) continue;
          c[d] = a[d];
        }
      return c;
    }
    function c() {
      return (c = Object.assign.bind()).apply(null, arguments);
    }
    function d(a, b) {
      return (d = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (a, b) {
            return ((a.__proto__ = b), a);
          })(a, b);
    }
    function e(a, b) {
      ((a.prototype = Object.create(b.prototype)), (a.prototype.constructor = a), d(a, b));
    }
    (a.s(["default", () => b], 17553),
      a.s(["default", () => c], 385448),
      a.s(["default", () => d], 554751),
      a.s(["default", () => e], 635204));
    let f = (a) => "object" == typeof a && null != a && 1 === a.nodeType,
      g = (a, b) => (!b || "hidden" !== a) && "visible" !== a && "clip" !== a,
      h = (a, b) => {
        if (a.clientHeight < a.scrollHeight || a.clientWidth < a.scrollWidth) {
          let c,
            d = getComputedStyle(a, null);
          return (
            g(d.overflowY, b) ||
            g(d.overflowX, b) ||
            (!!(c = ((a) => {
              if (!a.ownerDocument || !a.ownerDocument.defaultView) return null;
              try {
                return a.ownerDocument.defaultView.frameElement;
              } catch (a) {
                return null;
              }
            })(a)) &&
              (c.clientHeight < a.scrollHeight || c.clientWidth < a.scrollWidth))
          );
        }
        return !1;
      },
      i = (a, b, c, d, e, f, g, h) =>
        (f < a && g > b) || (f > a && g < b)
          ? 0
          : (f <= a && h <= c) || (g >= b && h >= c)
            ? f - a - d
            : (g > b && h < c) || (f < a && h > c)
              ? g - b + e
              : 0,
      j = (a) => {
        let b = a.parentElement;
        return null == b ? a.getRootNode().host || null : b;
      },
      k = (a, b) => {
        var c, d, e, g;
        let k;
        if ("undefined" == typeof document) return [];
        let { scrollMode: l, block: m, inline: n, boundary: o, skipOverflowHiddenElements: p } = b,
          q = "function" == typeof o ? o : (a) => a !== o;
        if (!f(a)) throw TypeError("Invalid target");
        let r = document.scrollingElement || document.documentElement,
          s = [],
          t = a;
        for (; f(t) && q(t); ) {
          if ((t = j(t)) === r) {
            s.push(t);
            break;
          }
          (null != t && t === document.body && h(t) && !h(document.documentElement)) ||
            (null != t && h(t, p) && s.push(t));
        }
        let u = null != (d = null == (c = window.visualViewport) ? void 0 : c.width) ? d : innerWidth,
          v = null != (g = null == (e = window.visualViewport) ? void 0 : e.height) ? g : innerHeight,
          { scrollX: w, scrollY: x } = window,
          { height: y, width: z, top: A, right: B, bottom: C, left: D } = a.getBoundingClientRect(),
          {
            top: E,
            right: F,
            bottom: G,
            left: H,
          } = {
            top: parseFloat((k = window.getComputedStyle(a)).scrollMarginTop) || 0,
            right: parseFloat(k.scrollMarginRight) || 0,
            bottom: parseFloat(k.scrollMarginBottom) || 0,
            left: parseFloat(k.scrollMarginLeft) || 0,
          },
          I = "start" === m || "nearest" === m ? A - E : "end" === m ? C + G : A + y / 2 - E + G,
          J = "center" === n ? D + z / 2 - H + F : "end" === n ? B + F : D - H,
          K = [];
        for (let a = 0; a < s.length; a++) {
          let b = s[a],
            { height: c, width: d, top: e, right: f, bottom: g, left: j } = b.getBoundingClientRect();
          if (
            "if-needed" === l &&
            A >= 0 &&
            D >= 0 &&
            C <= v &&
            B <= u &&
            ((b === r && !h(b)) || (A >= e && C <= g && D >= j && B <= f))
          )
            break;
          let k = getComputedStyle(b),
            o = parseInt(k.borderLeftWidth, 10),
            p = parseInt(k.borderTopWidth, 10),
            q = parseInt(k.borderRightWidth, 10),
            t = parseInt(k.borderBottomWidth, 10),
            E = 0,
            F = 0,
            G = "offsetWidth" in b ? b.offsetWidth - b.clientWidth - o - q : 0,
            H = "offsetHeight" in b ? b.offsetHeight - b.clientHeight - p - t : 0,
            L = "offsetWidth" in b ? (0 === b.offsetWidth ? 0 : d / b.offsetWidth) : 0,
            M = "offsetHeight" in b ? (0 === b.offsetHeight ? 0 : c / b.offsetHeight) : 0;
          if (r === b)
            ((E =
              "start" === m
                ? I
                : "end" === m
                  ? I - v
                  : "nearest" === m
                    ? i(x, x + v, v, p, t, x + I, x + I + y, y)
                    : I - v / 2),
              (F =
                "start" === n
                  ? J
                  : "center" === n
                    ? J - u / 2
                    : "end" === n
                      ? J - u
                      : i(w, w + u, u, o, q, w + J, w + J + z, z)),
              (E = Math.max(0, E + x)),
              (F = Math.max(0, F + w)));
          else {
            ((E =
              "start" === m
                ? I - e - p
                : "end" === m
                  ? I - g + t + H
                  : "nearest" === m
                    ? i(e, g, c, p, t + H, I, I + y, y)
                    : I - (e + c / 2) + H / 2),
              (F =
                "start" === n
                  ? J - j - o
                  : "center" === n
                    ? J - (j + d / 2) + G / 2
                    : "end" === n
                      ? J - f + q + G
                      : i(j, f, d, o, q + G, J, J + z, z)));
            let { scrollLeft: a, scrollTop: h } = b;
            ((E = 0 === M ? 0 : Math.max(0, Math.min(h + E / M, b.scrollHeight - c / M + H))),
              (F = 0 === L ? 0 : Math.max(0, Math.min(a + F / L, b.scrollWidth - d / L + G))),
              (I += h - E),
              (J += a - F));
          }
          K.push({ el: b, top: E, left: F });
        }
        return K;
      };
    a.s(["compute", () => k], 206554);
  },
  184431,
  (a) => {
    "use strict";
    (a.i(13795), a.i(805485), a.i(703498), a.i(999803), a.i(930586));
    let b = Error("Cannot find module '@/lib/utils'");
    throw ((b.code = "MODULE_NOT_FOUND"), b);
  },
];

//# sourceMappingURL=in-need-of-time_0aa837f7._.js.map
