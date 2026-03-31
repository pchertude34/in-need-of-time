(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  269467,
  767500,
  52057,
  708625,
  421221,
  (t) => {
    "use strict";
    function e(t, e) {
      if (null == t) return {};
      var o = {};
      for (var n in t)
        if ({}.hasOwnProperty.call(t, n)) {
          if (-1 !== e.indexOf(n)) continue;
          o[n] = t[n];
        }
      return o;
    }
    function o() {
      return (o = Object.assign.bind()).apply(null, arguments);
    }
    function n(t, e) {
      return (n = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function l(t, e) {
      ((t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), n(t, e));
    }
    (t.s(["default", () => e], 269467),
      t.s(["default", () => o], 767500),
      t.s(["default", () => n], 52057),
      t.s(["default", () => l], 708625));
    let r = (t) => "object" == typeof t && null != t && 1 === t.nodeType,
      i = (t, e) => (!e || "hidden" !== t) && "visible" !== t && "clip" !== t,
      d = (t, e) => {
        if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
          let o,
            n = getComputedStyle(t, null);
          return (
            i(n.overflowY, e) ||
            i(n.overflowX, e) ||
            (!!(o = ((t) => {
              if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
              try {
                return t.ownerDocument.defaultView.frameElement;
              } catch (t) {
                return null;
              }
            })(t)) &&
              (o.clientHeight < t.scrollHeight || o.clientWidth < t.scrollWidth))
          );
        }
        return !1;
      },
      u = (t, e, o, n, l, r, i, d) =>
        (r < t && i > e) || (r > t && i < e)
          ? 0
          : (r <= t && d <= o) || (i >= e && d >= o)
            ? r - t - n
            : (i > e && d < o) || (r < t && d > o)
              ? i - e + l
              : 0,
      s = (t) => {
        let e = t.parentElement;
        return null == e ? t.getRootNode().host || null : e;
      },
      f = (t, e) => {
        var o, n, l, i;
        let f;
        if ("undefined" == typeof document) return [];
        let { scrollMode: c, block: h, inline: a, boundary: p, skipOverflowHiddenElements: g } = e,
          m = "function" == typeof p ? p : (t) => t !== p;
        if (!r(t)) throw TypeError("Invalid target");
        let b = document.scrollingElement || document.documentElement,
          w = [],
          y = t;
        for (; r(y) && m(y); ) {
          if ((y = s(y)) === b) {
            w.push(y);
            break;
          }
          (null != y && y === document.body && d(y) && !d(document.documentElement)) ||
            (null != y && d(y, g) && w.push(y));
        }
        let W = null != (n = null == (o = window.visualViewport) ? void 0 : o.width) ? n : innerWidth,
          O = null != (i = null == (l = window.visualViewport) ? void 0 : l.height) ? i : innerHeight,
          { scrollX: v, scrollY: H } = window,
          { height: M, width: T, top: E, right: C, bottom: R, left: j } = t.getBoundingClientRect(),
          {
            top: B,
            right: _,
            bottom: x,
            left: D,
          } = {
            top: parseFloat((f = window.getComputedStyle(t)).scrollMarginTop) || 0,
            right: parseFloat(f.scrollMarginRight) || 0,
            bottom: parseFloat(f.scrollMarginBottom) || 0,
            left: parseFloat(f.scrollMarginLeft) || 0,
          },
          F = "start" === h || "nearest" === h ? E - B : "end" === h ? R + x : E + M / 2 - B + x,
          I = "center" === a ? j + T / 2 - D + _ : "end" === a ? C + _ : j - D,
          P = [];
        for (let t = 0; t < w.length; t++) {
          let e = w[t],
            { height: o, width: n, top: l, right: r, bottom: i, left: s } = e.getBoundingClientRect();
          if (
            "if-needed" === c &&
            E >= 0 &&
            j >= 0 &&
            R <= O &&
            C <= W &&
            ((e === b && !d(e)) || (E >= l && R <= i && j >= s && C <= r))
          )
            break;
          let f = getComputedStyle(e),
            p = parseInt(f.borderLeftWidth, 10),
            g = parseInt(f.borderTopWidth, 10),
            m = parseInt(f.borderRightWidth, 10),
            y = parseInt(f.borderBottomWidth, 10),
            B = 0,
            _ = 0,
            x = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - p - m : 0,
            D = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - g - y : 0,
            k = "offsetWidth" in e ? (0 === e.offsetWidth ? 0 : n / e.offsetWidth) : 0,
            L = "offsetHeight" in e ? (0 === e.offsetHeight ? 0 : o / e.offsetHeight) : 0;
          if (b === e)
            ((B =
              "start" === h
                ? F
                : "end" === h
                  ? F - O
                  : "nearest" === h
                    ? u(H, H + O, O, g, y, H + F, H + F + M, M)
                    : F - O / 2),
              (_ =
                "start" === a
                  ? I
                  : "center" === a
                    ? I - W / 2
                    : "end" === a
                      ? I - W
                      : u(v, v + W, W, p, m, v + I, v + I + T, T)),
              (B = Math.max(0, B + H)),
              (_ = Math.max(0, _ + v)));
          else {
            ((B =
              "start" === h
                ? F - l - g
                : "end" === h
                  ? F - i + y + D
                  : "nearest" === h
                    ? u(l, i, o, g, y + D, F, F + M, M)
                    : F - (l + o / 2) + D / 2),
              (_ =
                "start" === a
                  ? I - s - p
                  : "center" === a
                    ? I - (s + n / 2) + x / 2
                    : "end" === a
                      ? I - r + m + x
                      : u(s, r, n, p, m + x, I, I + T, T)));
            let { scrollLeft: t, scrollTop: d } = e;
            ((B = 0 === L ? 0 : Math.max(0, Math.min(d + B / L, e.scrollHeight - o / L + D))),
              (_ = 0 === k ? 0 : Math.max(0, Math.min(t + _ / k, e.scrollWidth - n / k + x))),
              (F += d - B),
              (I += t - _));
          }
          P.push({ el: e, top: B, left: _ });
        }
        return P;
      };
    t.s(["compute", () => f], 421221);
  },
  525003,
  (t) => {
    "use strict";
    (t.i(802252), t.i(770572), t.i(537023), t.i(105585), t.i(930943));
    let e = Error("Cannot find module '@/lib/utils'");
    throw ((e.code = "MODULE_NOT_FOUND"), e);
  },
]);
