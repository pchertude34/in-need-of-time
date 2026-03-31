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
      s = (t, e, o, n, l, r, i, d) =>
        (r < t && i > e) || (r > t && i < e)
          ? 0
          : (r <= t && d <= o) || (i >= e && d >= o)
            ? r - t - n
            : (i > e && d < o) || (r < t && d > o)
              ? i - e + l
              : 0,
      u = (t) => {
        let e = t.parentElement;
        return null == e ? t.getRootNode().host || null : e;
      },
      c = (t, e) => {
        var o, n, l, i;
        let c;
        if ("undefined" == typeof document) return [];
        let { scrollMode: f, block: a, inline: h, boundary: p, skipOverflowHiddenElements: g } = e,
          m = "function" == typeof p ? p : (t) => t !== p;
        if (!r(t)) throw TypeError("Invalid target");
        let b = document.scrollingElement || document.documentElement,
          w = [],
          y = t;
        for (; r(y) && m(y); ) {
          if ((y = u(y)) === b) {
            w.push(y);
            break;
          }
          (null != y && y === document.body && d(y) && !d(document.documentElement)) ||
            (null != y && d(y, g) && w.push(y));
        }
        let W = null != (n = null == (o = window.visualViewport) ? void 0 : o.width) ? n : innerWidth,
          v = null != (i = null == (l = window.visualViewport) ? void 0 : l.height) ? i : innerHeight,
          { scrollX: O, scrollY: H } = window,
          { height: M, width: T, top: E, right: C, bottom: j, left: R } = t.getBoundingClientRect(),
          {
            top: B,
            right: P,
            bottom: _,
            left: k,
          } = {
            top: parseFloat((c = window.getComputedStyle(t)).scrollMarginTop) || 0,
            right: parseFloat(c.scrollMarginRight) || 0,
            bottom: parseFloat(c.scrollMarginBottom) || 0,
            left: parseFloat(c.scrollMarginLeft) || 0,
          },
          x = "start" === a || "nearest" === a ? E - B : "end" === a ? j + _ : E + M / 2 - B + _,
          D = "center" === h ? R + T / 2 - k + P : "end" === h ? C + P : R - k,
          F = [];
        for (let t = 0; t < w.length; t++) {
          let e = w[t],
            { height: o, width: n, top: l, right: r, bottom: i, left: u } = e.getBoundingClientRect();
          if (
            "if-needed" === f &&
            E >= 0 &&
            R >= 0 &&
            j <= v &&
            C <= W &&
            ((e === b && !d(e)) || (E >= l && j <= i && R >= u && C <= r))
          )
            break;
          let c = getComputedStyle(e),
            p = parseInt(c.borderLeftWidth, 10),
            g = parseInt(c.borderTopWidth, 10),
            m = parseInt(c.borderRightWidth, 10),
            y = parseInt(c.borderBottomWidth, 10),
            B = 0,
            P = 0,
            _ = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - p - m : 0,
            k = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - g - y : 0,
            I = "offsetWidth" in e ? (0 === e.offsetWidth ? 0 : n / e.offsetWidth) : 0,
            L = "offsetHeight" in e ? (0 === e.offsetHeight ? 0 : o / e.offsetHeight) : 0;
          if (b === e)
            ((B =
              "start" === a
                ? x
                : "end" === a
                  ? x - v
                  : "nearest" === a
                    ? s(H, H + v, v, g, y, H + x, H + x + M, M)
                    : x - v / 2),
              (P =
                "start" === h
                  ? D
                  : "center" === h
                    ? D - W / 2
                    : "end" === h
                      ? D - W
                      : s(O, O + W, W, p, m, O + D, O + D + T, T)),
              (B = Math.max(0, B + H)),
              (P = Math.max(0, P + O)));
          else {
            ((B =
              "start" === a
                ? x - l - g
                : "end" === a
                  ? x - i + y + k
                  : "nearest" === a
                    ? s(l, i, o, g, y + k, x, x + M, M)
                    : x - (l + o / 2) + k / 2),
              (P =
                "start" === h
                  ? D - u - p
                  : "center" === h
                    ? D - (u + n / 2) + _ / 2
                    : "end" === h
                      ? D - r + m + _
                      : s(u, r, n, p, m + _, D, D + T, T)));
            let { scrollLeft: t, scrollTop: d } = e;
            ((B = 0 === L ? 0 : Math.max(0, Math.min(d + B / L, e.scrollHeight - o / L + k))),
              (P = 0 === I ? 0 : Math.max(0, Math.min(t + P / I, e.scrollWidth - n / I + _))),
              (x += d - B),
              (D += t - P));
          }
          F.push({ el: e, top: B, left: P });
        }
        return F;
      };
    t.s(["compute", () => c], 421221);
  },
  137210,
  (t) => {
    "use strict";
    (t.i(802252), t.i(770572));
    let e = Error("Cannot find module '@/env'");
    throw ((e.code = "MODULE_NOT_FOUND"), e);
  },
  65678,
  (t) => {
    t.v((e) => Promise.all(["static/chunks/fa07e61a9650056e.js"].map((e) => t.l(e))).then(() => e(27117)));
  },
]);
