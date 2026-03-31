module.exports = [
  740020,
  372352,
  (a) => {
    "use strict";
    let b = ["top", "right", "bottom", "left"],
      c = b.reduce((a, b) => a.concat(b, b + "-start", b + "-end"), []),
      d = Math.min,
      e = Math.max,
      f = Math.round,
      g = Math.floor,
      h = (a) => ({ x: a, y: a }),
      i = { left: "right", right: "left", bottom: "top", top: "bottom" },
      j = { start: "end", end: "start" };
    function k(a, b) {
      return "function" == typeof a ? a(b) : a;
    }
    function l(a) {
      return a.split("-")[0];
    }
    function m(a) {
      return a.split("-")[1];
    }
    function n(a) {
      return "x" === a ? "y" : "x";
    }
    function o(a) {
      return "y" === a ? "height" : "width";
    }
    let p = new Set(["top", "bottom"]);
    function q(a) {
      return p.has(l(a)) ? "y" : "x";
    }
    function r(a, b, c) {
      void 0 === c && (c = !1);
      let d = m(a),
        e = n(q(a)),
        f = o(e),
        g = "x" === e ? (d === (c ? "end" : "start") ? "right" : "left") : "start" === d ? "bottom" : "top";
      return (b.reference[f] > b.floating[f] && (g = x(g)), [g, x(g)]);
    }
    function s(a) {
      return a.replace(/start|end/g, (a) => j[a]);
    }
    let t = ["left", "right"],
      u = ["right", "left"],
      v = ["top", "bottom"],
      w = ["bottom", "top"];
    function x(a) {
      return a.replace(/left|right|bottom|top/g, (a) => i[a]);
    }
    function y(a) {
      return "number" != typeof a
        ? { top: 0, right: 0, bottom: 0, left: 0, ...a }
        : { top: a, right: a, bottom: a, left: a };
    }
    function z(a) {
      let { x: b, y: c, width: d, height: e } = a;
      return { width: d, height: e, top: c, left: b, right: b + d, bottom: c + e, x: b, y: c };
    }
    function A(a, b, c) {
      let d,
        { reference: e, floating: f } = a,
        g = q(b),
        h = n(q(b)),
        i = o(h),
        j = l(b),
        k = "y" === g,
        p = e.x + e.width / 2 - f.width / 2,
        r = e.y + e.height / 2 - f.height / 2,
        s = e[i] / 2 - f[i] / 2;
      switch (j) {
        case "top":
          d = { x: p, y: e.y - f.height };
          break;
        case "bottom":
          d = { x: p, y: e.y + e.height };
          break;
        case "right":
          d = { x: e.x + e.width, y: r };
          break;
        case "left":
          d = { x: e.x - f.width, y: r };
          break;
        default:
          d = { x: e.x, y: e.y };
      }
      switch (m(b)) {
        case "start":
          d[h] -= s * (c && k ? -1 : 1);
          break;
        case "end":
          d[h] += s * (c && k ? -1 : 1);
      }
      return d;
    }
    let B = async (a, b, c) => {
      let { placement: d = "bottom", strategy: e = "absolute", middleware: f = [], platform: g } = c,
        h = f.filter(Boolean),
        i = await (null == g.isRTL ? void 0 : g.isRTL(b)),
        j = await g.getElementRects({ reference: a, floating: b, strategy: e }),
        { x: k, y: l } = A(j, d, i),
        m = d,
        n = {},
        o = 0;
      for (let c = 0; c < h.length; c++) {
        let { name: f, fn: p } = h[c],
          {
            x: q,
            y: r,
            data: s,
            reset: t,
          } = await p({
            x: k,
            y: l,
            initialPlacement: d,
            placement: m,
            strategy: e,
            middlewareData: n,
            rects: j,
            platform: g,
            elements: { reference: a, floating: b },
          });
        ((k = null != q ? q : k),
          (l = null != r ? r : l),
          (n = { ...n, [f]: { ...n[f], ...s } }),
          t &&
            o <= 50 &&
            (o++,
            "object" == typeof t &&
              (t.placement && (m = t.placement),
              t.rects &&
                (j = !0 === t.rects ? await g.getElementRects({ reference: a, floating: b, strategy: e }) : t.rects),
              ({ x: k, y: l } = A(j, m, i))),
            (c = -1)));
      }
      return { x: k, y: l, placement: m, strategy: e, middlewareData: n };
    };
    async function C(a, b) {
      var c;
      void 0 === b && (b = {});
      let { x: d, y: e, platform: f, rects: g, elements: h, strategy: i } = a,
        {
          boundary: j = "clippingAncestors",
          rootBoundary: l = "viewport",
          elementContext: m = "floating",
          altBoundary: n = !1,
          padding: o = 0,
        } = k(b, a),
        p = y(o),
        q = h[n ? ("floating" === m ? "reference" : "floating") : m],
        r = z(
          await f.getClippingRect({
            element:
              null == (c = await (null == f.isElement ? void 0 : f.isElement(q))) || c
                ? q
                : q.contextElement ||
                  (await (null == f.getDocumentElement ? void 0 : f.getDocumentElement(h.floating))),
            boundary: j,
            rootBoundary: l,
            strategy: i,
          }),
        ),
        s = "floating" === m ? { x: d, y: e, width: g.floating.width, height: g.floating.height } : g.reference,
        t = await (null == f.getOffsetParent ? void 0 : f.getOffsetParent(h.floating)),
        u = ((await (null == f.isElement ? void 0 : f.isElement(t))) &&
          (await (null == f.getScale ? void 0 : f.getScale(t)))) || { x: 1, y: 1 },
        v = z(
          f.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: h,
                rect: s,
                offsetParent: t,
                strategy: i,
              })
            : s,
        );
      return {
        top: (r.top - v.top + p.top) / u.y,
        bottom: (v.bottom - r.bottom + p.bottom) / u.y,
        left: (r.left - v.left + p.left) / u.x,
        right: (v.right - r.right + p.right) / u.x,
      };
    }
    function D(a, b) {
      return { top: a.top - b.height, right: a.right - b.width, bottom: a.bottom - b.height, left: a.left - b.width };
    }
    function E(a) {
      return b.some((b) => a[b] >= 0);
    }
    function F(a) {
      let b = d(...a.map((a) => a.left)),
        c = d(...a.map((a) => a.top));
      return { x: b, y: c, width: e(...a.map((a) => a.right)) - b, height: e(...a.map((a) => a.bottom)) - c };
    }
    let G = new Set(["left", "top"]);
    async function H(a, b) {
      let { placement: c, platform: d, elements: e } = a,
        f = await (null == d.isRTL ? void 0 : d.isRTL(e.floating)),
        g = l(c),
        h = m(c),
        i = "y" === q(c),
        j = G.has(g) ? -1 : 1,
        n = f && i ? -1 : 1,
        o = k(b, a),
        {
          mainAxis: p,
          crossAxis: r,
          alignmentAxis: s,
        } = "number" == typeof o
          ? { mainAxis: o, crossAxis: 0, alignmentAxis: null }
          : { mainAxis: o.mainAxis || 0, crossAxis: o.crossAxis || 0, alignmentAxis: o.alignmentAxis };
      return (
        h && "number" == typeof s && (r = "end" === h ? -1 * s : s),
        i ? { x: r * n, y: p * j } : { x: p * j, y: r * n }
      );
    }
    function I(a) {
      return (function (a) {
        return !1;
      })(a)
        ? (a.nodeName || "").toLowerCase()
        : "#document";
    }
    function J(a) {
      var b;
      return (null == a || null == (b = a.ownerDocument) ? void 0 : b.defaultView) || window;
    }
    function K(a) {
      var b;
      return null ==
        (b =
          ((function (a) {
            return !1;
          })(a)
            ? a.ownerDocument
            : a.document) || window.document)
        ? void 0
        : b.documentElement;
    }
    function L(a) {
      return !1;
    }
    let M = new Set(["inline", "contents"]);
    function N(a) {
      let { overflow: b, overflowX: c, overflowY: d, display: e } = Y(a);
      return /auto|scroll|overlay|hidden|clip/.test(b + d + c) && !M.has(e);
    }
    let O = new Set(["table", "td", "th"]),
      P = [":popover-open", ":modal"];
    function Q(a) {
      return P.some((b) => {
        try {
          return a.matches(b);
        } catch (a) {
          return !1;
        }
      });
    }
    let R = ["transform", "translate", "scale", "rotate", "perspective"],
      S = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
      T = ["paint", "layout", "strict", "content"];
    function U(a) {
      let b = V(),
        c = a;
      return (
        R.some((a) => !!c[a] && "none" !== c[a]) ||
        (!!c.containerType && "normal" !== c.containerType) ||
        (!b && !!c.backdropFilter && "none" !== c.backdropFilter) ||
        (!b && !!c.filter && "none" !== c.filter) ||
        S.some((a) => (c.willChange || "").includes(a)) ||
        T.some((a) => (c.contain || "").includes(a))
      );
    }
    function V() {
      return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
    }
    let W = new Set(["html", "body", "#document"]);
    function X(a) {
      return W.has(I(a));
    }
    function Y(a) {
      return J(a).getComputedStyle(a);
    }
    function Z(a) {
      return { scrollLeft: a.scrollX, scrollTop: a.scrollY };
    }
    function $(a) {
      if ("html" === I(a)) return a;
      let b = a.assignedSlot || a.parentNode || !1 || K(a);
      return b;
    }
    function _(a, b, c) {
      var d;
      (void 0 === b && (b = []), void 0 === c && (c = !0));
      let e = (function a(b) {
          let c = $(b);
          return X(c) ? (b.ownerDocument ? b.ownerDocument.body : b.body) : a(c);
        })(a),
        f = e === (null == (d = a.ownerDocument) ? void 0 : d.body),
        g = J(e);
      if (f) {
        let a = aa(g);
        return b.concat(g, g.visualViewport || [], N(e) ? e : [], a && c ? _(a) : []);
      }
      return b.concat(e, _(e, [], c));
    }
    function aa(a) {
      return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
    }
    function ab(a) {
      let b = Y(a),
        c = parseFloat(b.width) || 0,
        d = parseFloat(b.height) || 0,
        e = !1,
        g = e ? a.offsetWidth : c,
        h = e ? a.offsetHeight : d,
        i = f(c) !== g || f(d) !== h;
      return (i && ((c = g), (d = h)), { width: c, height: d, $: i });
    }
    function ac(a) {
      return (0, a.contextElement);
    }
    function ad(a) {
      let b = ac(a);
      1;
      return h(1);
    }
    let ae = h(0);
    function af(a) {
      let b = J(a);
      return V() && b.visualViewport ? { x: b.visualViewport.offsetLeft, y: b.visualViewport.offsetTop } : ae;
    }
    function ag(a, b, c, d) {
      var e;
      (void 0 === b && (b = !1), void 0 === c && (c = !1));
      let f = a.getBoundingClientRect(),
        g = ac(a),
        i = h(1);
      b && (d || (i = ad(a)));
      let j = (void 0 === (e = c) && (e = !1), d && (!e || d === J(g)) && e) ? af(g) : h(0),
        k = (f.left + j.x) / i.x,
        l = (f.top + j.y) / i.y,
        m = f.width / i.x,
        n = f.height / i.y;
      if (g) {
        let a = J(g),
          b = d,
          c = a,
          e = aa(c);
        for (; e && d && b !== c; ) {
          let a = ad(e),
            b = e.getBoundingClientRect(),
            d = Y(e),
            f = b.left + (e.clientLeft + parseFloat(d.paddingLeft)) * a.x,
            g = b.top + (e.clientTop + parseFloat(d.paddingTop)) * a.y;
          ((k *= a.x), (l *= a.y), (m *= a.x), (n *= a.y), (k += f), (l += g), (e = aa((c = J(e)))));
        }
      }
      return z({ width: m, height: n, x: k, y: l });
    }
    function ah(a, b) {
      let c = Z(a).scrollLeft;
      return b ? b.left + c : ag(K(a)).left + c;
    }
    function ai(a, b) {
      let c = a.getBoundingClientRect();
      return { x: c.left + b.scrollLeft - ah(a, c), y: c.top + b.scrollTop };
    }
    function aj(a, b, c) {
      var d;
      let f;
      if ("viewport" === b)
        f = (function (a, b) {
          let c = J(a),
            d = K(a),
            e = c.visualViewport,
            f = d.clientWidth,
            g = d.clientHeight,
            h = 0,
            i = 0;
          if (e) {
            ((f = e.width), (g = e.height));
            let a = V();
            (!a || (a && "fixed" === b)) && ((h = e.offsetLeft), (i = e.offsetTop));
          }
          let j = ah(d);
          if (j <= 0) {
            let a = d.ownerDocument,
              b = a.body,
              c = getComputedStyle(b),
              e = ("CSS1Compat" === a.compatMode && parseFloat(c.marginLeft) + parseFloat(c.marginRight)) || 0,
              g = Math.abs(d.clientWidth - b.clientWidth - e);
            g <= 25 && (f -= g);
          } else j <= 25 && (f += j);
          return { width: f, height: g, x: h, y: i };
        })(a, c);
      else if ("document" === b) {
        let b, c, g, h, i, j, k;
        ((d = K(a)),
          (b = K(d)),
          (c = Z(d)),
          (g = d.ownerDocument.body),
          (h = e(b.scrollWidth, b.clientWidth, g.scrollWidth, g.clientWidth)),
          (i = e(b.scrollHeight, b.clientHeight, g.scrollHeight, g.clientHeight)),
          (j = -c.scrollLeft + ah(d)),
          (k = -c.scrollTop),
          "rtl" === Y(g).direction && (j += e(b.clientWidth, g.clientWidth) - h),
          (f = { width: h, height: i, x: j, y: k }));
      } else {
        1;
        {
          let c = af(a);
          f = { x: b.x - c.x, y: b.y - c.y, width: b.width, height: b.height };
        }
      }
      return z(f);
    }
    function ak(a) {
      return "static" === Y(a).position;
    }
    function al(a, b) {
      1;
      return null;
    }
    function am(a, b) {
      var c;
      let d = J(a);
      if (Q(a)) return d;
      1;
      {
        let b = $(a);
        for (; b && !X(b); ) {
          0;
          b = $(b);
        }
        return d;
      }
    }
    let an = async function (a) {
        let b = this.getOffsetParent || am,
          c = this.getDimensions,
          d = await c(a.floating);
        return {
          reference: (function (a, b, c) {
            var d;
            let e = ((d = 0), !1),
              f = K(b),
              g = "fixed" === c,
              i = ag(a, !0, g, b),
              j = { scrollLeft: 0, scrollTop: 0 },
              k = h(0);
            if (e || (!e && !g))
              if ((("body" !== I(b) || N(f)) && (j = Z(b)), e)) {
                let a = ag(b, !0, g, b);
                ((k.x = a.x + b.clientLeft), (k.y = a.y + b.clientTop));
              } else f && (k.x = ah(f));
            g && !e && f && (k.x = ah(f));
            let l = !f || e || g ? h(0) : ai(f, j);
            return {
              x: i.left + j.scrollLeft - k.x - l.x,
              y: i.top + j.scrollTop - k.y - l.y,
              width: i.width,
              height: i.height,
            };
          })(a.reference, await b(a.floating), a.strategy),
          floating: { x: 0, y: 0, width: d.width, height: d.height },
        };
      },
      ao = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (a) {
          var b, c;
          let { elements: d, rect: e, offsetParent: f, strategy: g } = a,
            i = "fixed" === g,
            j = K(f),
            k = !!d && Q(d.floating);
          if (f === j || (k && i)) return e;
          let l = { scrollLeft: 0, scrollTop: 0 },
            m = h(1),
            n = h(0),
            o = ((b = 0), !1);
          (o || (!o && !i)) && (("body" !== I(f) || N(j)) && (l = Z(f)), (c = 0), 0);
          let p = !j || o || i ? h(0) : ai(j, l);
          return {
            width: e.width * m.x,
            height: e.height * m.y,
            x: e.x * m.x - l.scrollLeft * m.x + n.x + p.x,
            y: e.y * m.y - l.scrollTop * m.y + n.y + p.y,
          };
        },
        getDocumentElement: K,
        getClippingRect: function (a) {
          let { element: b, boundary: c, rootBoundary: f, strategy: g } = a,
            h = [
              ...("clippingAncestors" === c
                ? Q(b)
                  ? []
                  : (function (a, b) {
                      var c;
                      let d = b.get(a);
                      if (d) return d;
                      let e = _(a, [], !1).filter((a) => {
                          var b;
                          return ((b = 0), !1);
                        }),
                        f = "fixed" === Y(a).position,
                        g = f ? $(a) : a;
                      return ((c = 0), b.set(a, e), e);
                    })(b, this._c)
                : [].concat(c)),
              f,
            ],
            i = h[0],
            j = h.reduce(
              (a, c) => {
                let f = aj(b, c, g);
                return (
                  (a.top = e(f.top, a.top)),
                  (a.right = d(f.right, a.right)),
                  (a.bottom = d(f.bottom, a.bottom)),
                  (a.left = e(f.left, a.left)),
                  a
                );
              },
              aj(b, i, g),
            );
          return { width: j.right - j.left, height: j.bottom - j.top, x: j.left, y: j.top };
        },
        getOffsetParent: am,
        getElementRects: an,
        getClientRects: function (a) {
          return Array.from(a.getClientRects());
        },
        getDimensions: function (a) {
          let { width: b, height: c } = ab(a);
          return { width: b, height: c };
        },
        getScale: ad,
        isElement: L,
        isRTL: function (a) {
          return "rtl" === Y(a).direction;
        },
      };
    function ap(a, b) {
      return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
    }
    function aq(a, b, c, f) {
      let h;
      void 0 === f && (f = {});
      let {
          ancestorScroll: i = !0,
          ancestorResize: j = !0,
          elementResize: k = "function" == typeof ResizeObserver,
          layoutShift: l = "function" == typeof IntersectionObserver,
          animationFrame: m = !1,
        } = f,
        n = ac(a),
        o = i || j ? [...(n ? _(n) : []), ..._(b)] : [];
      o.forEach((a) => {
        (i && a.addEventListener("scroll", c, { passive: !0 }), j && a.addEventListener("resize", c));
      });
      let p =
          n && l
            ? (function (a, b) {
                let c,
                  f = null,
                  h = K(a);
                function i() {
                  var a;
                  (clearTimeout(c), null == (a = f) || a.disconnect(), (f = null));
                }
                return (
                  !(function j(k, l) {
                    (void 0 === k && (k = !1), void 0 === l && (l = 1), i());
                    let m = a.getBoundingClientRect(),
                      { left: n, top: o, width: p, height: q } = m;
                    if ((k || b(), !p || !q)) return;
                    let r = {
                        rootMargin:
                          -g(o) +
                          "px " +
                          -g(h.clientWidth - (n + p)) +
                          "px " +
                          -g(h.clientHeight - (o + q)) +
                          "px " +
                          -g(n) +
                          "px",
                        threshold: e(0, d(1, l)) || 1,
                      },
                      s = !0;
                    function t(b) {
                      let d = b[0].intersectionRatio;
                      if (d !== l) {
                        if (!s) return j();
                        d
                          ? j(!1, d)
                          : (c = setTimeout(() => {
                              j(!1, 1e-7);
                            }, 1e3));
                      }
                      (1 !== d || ap(m, a.getBoundingClientRect()) || j(), (s = !1));
                    }
                    try {
                      f = new IntersectionObserver(t, { ...r, root: h.ownerDocument });
                    } catch (a) {
                      f = new IntersectionObserver(t, r);
                    }
                    f.observe(a);
                  })(!0),
                  i
                );
              })(n, c)
            : null,
        q = -1,
        r = null;
      k &&
        ((r = new ResizeObserver((a) => {
          let [d] = a;
          (d &&
            d.target === n &&
            r &&
            (r.unobserve(b),
            cancelAnimationFrame(q),
            (q = requestAnimationFrame(() => {
              var a;
              null == (a = r) || a.observe(b);
            }))),
            c());
        })),
        n && !m && r.observe(n),
        r.observe(b));
      let s = m ? ag(a) : null;
      return (
        m &&
          (function b() {
            let d = ag(a);
            (s && !ap(s, d) && c(), (s = d), (h = requestAnimationFrame(b)));
          })(),
        c(),
        () => {
          var a;
          (o.forEach((a) => {
            (i && a.removeEventListener("scroll", c), j && a.removeEventListener("resize", c));
          }),
            null == p || p(),
            null == (a = r) || a.disconnect(),
            (r = null),
            m && cancelAnimationFrame(h));
        }
      );
    }
    let ar = function (a) {
        return (
          void 0 === a && (a = 0),
          {
            name: "offset",
            options: a,
            async fn(b) {
              var c, d;
              let { x: e, y: f, placement: g, middlewareData: h } = b,
                i = await H(b, a);
              return g === (null == (c = h.offset) ? void 0 : c.placement) && null != (d = h.arrow) && d.alignmentOffset
                ? {}
                : { x: e + i.x, y: f + i.y, data: { ...i, placement: g } };
            },
          }
        );
      },
      as = function (a) {
        return (
          void 0 === a && (a = {}),
          {
            name: "autoPlacement",
            options: a,
            async fn(b) {
              var d, e, f, g;
              let { rects: h, middlewareData: i, placement: j, platform: n, elements: o } = b,
                { crossAxis: p = !1, alignment: q, allowedPlacements: t = c, autoAlignment: u = !0, ...v } = k(a, b),
                w =
                  void 0 !== q || t === c
                    ? ((g = q || null)
                        ? [...t.filter((a) => m(a) === g), ...t.filter((a) => m(a) !== g)]
                        : t.filter((a) => l(a) === a)
                      ).filter((a) => !g || m(a) === g || (!!u && s(a) !== a))
                    : t,
                x = await C(b, v),
                y = (null == (d = i.autoPlacement) ? void 0 : d.index) || 0,
                z = w[y];
              if (null == z) return {};
              let A = r(z, h, await (null == n.isRTL ? void 0 : n.isRTL(o.floating)));
              if (j !== z) return { reset: { placement: w[0] } };
              let B = [x[l(z)], x[A[0]], x[A[1]]],
                D = [...((null == (e = i.autoPlacement) ? void 0 : e.overflows) || []), { placement: z, overflows: B }],
                E = w[y + 1];
              if (E) return { data: { index: y + 1, overflows: D }, reset: { placement: E } };
              let F = D.map((a) => {
                  let b = m(a.placement);
                  return [
                    a.placement,
                    b && p ? a.overflows.slice(0, 2).reduce((a, b) => a + b, 0) : a.overflows[0],
                    a.overflows,
                  ];
                }).sort((a, b) => a[1] - b[1]),
                G =
                  (null == (f = F.filter((a) => a[2].slice(0, m(a[0]) ? 2 : 3).every((a) => a <= 0))[0])
                    ? void 0
                    : f[0]) || F[0][0];
              return G !== j ? { data: { index: y + 1, overflows: D }, reset: { placement: G } } : {};
            },
          }
        );
      },
      at = function (a) {
        return (
          void 0 === a && (a = {}),
          {
            name: "shift",
            options: a,
            async fn(b) {
              let { x: c, y: f, placement: g } = b,
                {
                  mainAxis: h = !0,
                  crossAxis: i = !1,
                  limiter: j = {
                    fn: (a) => {
                      let { x: b, y: c } = a;
                      return { x: b, y: c };
                    },
                  },
                  ...m
                } = k(a, b),
                o = { x: c, y: f },
                p = await C(b, m),
                r = q(l(g)),
                s = n(r),
                t = o[s],
                u = o[r];
              if (h) {
                let a = "y" === s ? "top" : "left",
                  b = "y" === s ? "bottom" : "right",
                  c = t + p[a],
                  f = t - p[b];
                t = e(c, d(t, f));
              }
              if (i) {
                let a = "y" === r ? "top" : "left",
                  b = "y" === r ? "bottom" : "right",
                  c = u + p[a],
                  f = u - p[b];
                u = e(c, d(u, f));
              }
              let v = j.fn({ ...b, [s]: t, [r]: u });
              return { ...v, data: { x: v.x - c, y: v.y - f, enabled: { [s]: h, [r]: i } } };
            },
          }
        );
      },
      au = function (a) {
        return (
          void 0 === a && (a = {}),
          {
            name: "flip",
            options: a,
            async fn(b) {
              var c, d, e, f, g;
              let h,
                i,
                j,
                { placement: n, middlewareData: o, rects: p, initialPlacement: y, platform: z, elements: A } = b,
                {
                  mainAxis: B = !0,
                  crossAxis: D = !0,
                  fallbackPlacements: E,
                  fallbackStrategy: F = "bestFit",
                  fallbackAxisSideDirection: G = "none",
                  flipAlignment: H = !0,
                  ...I
                } = k(a, b);
              if (null != (c = o.arrow) && c.alignmentOffset) return {};
              let J = l(n),
                K = q(y),
                L = l(y) === y,
                M = await (null == z.isRTL ? void 0 : z.isRTL(A.floating)),
                N = E || (L || !H ? [x(y)] : ((h = x(y)), [s(y), h, s(h)])),
                O = "none" !== G;
              !E &&
                O &&
                N.push(
                  ...((i = m(y)),
                  (j = (function (a, b, c) {
                    switch (a) {
                      case "top":
                      case "bottom":
                        if (c) return b ? u : t;
                        return b ? t : u;
                      case "left":
                      case "right":
                        return b ? v : w;
                      default:
                        return [];
                    }
                  })(l(y), "start" === G, M)),
                  i && ((j = j.map((a) => a + "-" + i)), H && (j = j.concat(j.map(s)))),
                  j),
                );
              let P = [y, ...N],
                Q = await C(b, I),
                R = [],
                S = (null == (d = o.flip) ? void 0 : d.overflows) || [];
              if ((B && R.push(Q[J]), D)) {
                let a = r(n, p, M);
                R.push(Q[a[0]], Q[a[1]]);
              }
              if (((S = [...S, { placement: n, overflows: R }]), !R.every((a) => a <= 0))) {
                let a = ((null == (e = o.flip) ? void 0 : e.index) || 0) + 1,
                  b = P[a];
                if (
                  b &&
                  ("alignment" !== D || K === q(b) || S.every((a) => q(a.placement) !== K || a.overflows[0] > 0))
                )
                  return { data: { index: a, overflows: S }, reset: { placement: b } };
                let c =
                  null == (f = S.filter((a) => a.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0])
                    ? void 0
                    : f.placement;
                if (!c)
                  switch (F) {
                    case "bestFit": {
                      let a =
                        null ==
                        (g = S.filter((a) => {
                          if (O) {
                            let b = q(a.placement);
                            return b === K || "y" === b;
                          }
                          return !0;
                        })
                          .map((a) => [a.placement, a.overflows.filter((a) => a > 0).reduce((a, b) => a + b, 0)])
                          .sort((a, b) => a[1] - b[1])[0])
                          ? void 0
                          : g[0];
                      a && (c = a);
                      break;
                    }
                    case "initialPlacement":
                      c = y;
                  }
                if (n !== c) return { reset: { placement: c } };
              }
              return {};
            },
          }
        );
      },
      av = function (a) {
        return (
          void 0 === a && (a = {}),
          {
            name: "size",
            options: a,
            async fn(b) {
              var c, f;
              let g,
                h,
                { placement: i, rects: j, platform: n, elements: o } = b,
                { apply: p = () => {}, ...r } = k(a, b),
                s = await C(b, r),
                t = l(i),
                u = m(i),
                v = "y" === q(i),
                { width: w, height: x } = j.floating;
              "top" === t || "bottom" === t
                ? ((g = t),
                  (h =
                    u === ((await (null == n.isRTL ? void 0 : n.isRTL(o.floating))) ? "start" : "end")
                      ? "left"
                      : "right"))
                : ((h = t), (g = "end" === u ? "top" : "bottom"));
              let y = x - s.top - s.bottom,
                z = w - s.left - s.right,
                A = d(x - s[g], y),
                B = d(w - s[h], z),
                D = !b.middlewareData.shift,
                E = A,
                F = B;
              if (
                (null != (c = b.middlewareData.shift) && c.enabled.x && (F = z),
                null != (f = b.middlewareData.shift) && f.enabled.y && (E = y),
                D && !u)
              ) {
                let a = e(s.left, 0),
                  b = e(s.right, 0),
                  c = e(s.top, 0),
                  d = e(s.bottom, 0);
                v
                  ? (F = w - 2 * (0 !== a || 0 !== b ? a + b : e(s.left, s.right)))
                  : (E = x - 2 * (0 !== c || 0 !== d ? c + d : e(s.top, s.bottom)));
              }
              await p({ ...b, availableWidth: F, availableHeight: E });
              let G = await n.getDimensions(o.floating);
              return w !== G.width || x !== G.height ? { reset: { rects: !0 } } : {};
            },
          }
        );
      },
      aw = function (a) {
        return (
          void 0 === a && (a = {}),
          {
            name: "hide",
            options: a,
            async fn(b) {
              let { rects: c } = b,
                { strategy: d = "referenceHidden", ...e } = k(a, b);
              switch (d) {
                case "referenceHidden": {
                  let a = D(await C(b, { ...e, elementContext: "reference" }), c.reference);
                  return { data: { referenceHiddenOffsets: a, referenceHidden: E(a) } };
                }
                case "escaped": {
                  let a = D(await C(b, { ...e, altBoundary: !0 }), c.floating);
                  return { data: { escapedOffsets: a, escaped: E(a) } };
                }
                default:
                  return {};
              }
            },
          }
        );
      },
      ax = (a) => ({
        name: "arrow",
        options: a,
        async fn(b) {
          let { x: c, y: f, placement: g, rects: h, platform: i, elements: j, middlewareData: l } = b,
            { element: p, padding: r = 0 } = k(a, b) || {};
          if (null == p) return {};
          let s = y(r),
            t = { x: c, y: f },
            u = n(q(g)),
            v = o(u),
            w = await i.getDimensions(p),
            x = "y" === u,
            z = x ? "clientHeight" : "clientWidth",
            A = h.reference[v] + h.reference[u] - t[u] - h.floating[v],
            B = t[u] - h.reference[u],
            C = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(p)),
            D = C ? C[z] : 0;
          (D && (await (null == i.isElement ? void 0 : i.isElement(C)))) || (D = j.floating[z] || h.floating[v]);
          let E = D / 2 - w[v] / 2 - 1,
            F = d(s[x ? "top" : "left"], E),
            G = d(s[x ? "bottom" : "right"], E),
            H = D - w[v] - G,
            I = D / 2 - w[v] / 2 + (A / 2 - B / 2),
            J = e(F, d(I, H)),
            K = !l.arrow && null != m(g) && I !== J && h.reference[v] / 2 - (I < F ? F : G) - w[v] / 2 < 0,
            L = K ? (I < F ? I - F : I - H) : 0;
          return {
            [u]: t[u] + L,
            data: { [u]: J, centerOffset: I - J - L, ...(K && { alignmentOffset: L }) },
            reset: K,
          };
        },
      }),
      ay = function (a) {
        return (
          void 0 === a && (a = {}),
          {
            name: "inline",
            options: a,
            async fn(b) {
              let { placement: c, elements: f, rects: g, platform: h, strategy: i } = b,
                { padding: j = 2, x: m, y: n } = k(a, b),
                o = Array.from((await (null == h.getClientRects ? void 0 : h.getClientRects(f.reference))) || []),
                p = (function (a) {
                  let b = a.slice().sort((a, b) => a.y - b.y),
                    c = [],
                    d = null;
                  for (let a = 0; a < b.length; a++) {
                    let e = b[a];
                    (!d || e.y - d.y > d.height / 2 ? c.push([e]) : c[c.length - 1].push(e), (d = e));
                  }
                  return c.map((a) => z(F(a)));
                })(o),
                r = z(F(o)),
                s = y(j),
                t = await h.getElementRects({
                  reference: {
                    getBoundingClientRect: function () {
                      if (2 === p.length && p[0].left > p[1].right && null != m && null != n)
                        return (
                          p.find(
                            (a) =>
                              m > a.left - s.left &&
                              m < a.right + s.right &&
                              n > a.top - s.top &&
                              n < a.bottom + s.bottom,
                          ) || r
                        );
                      if (p.length >= 2) {
                        if ("y" === q(c)) {
                          let a = p[0],
                            b = p[p.length - 1],
                            d = "top" === l(c),
                            e = a.top,
                            f = b.bottom,
                            g = d ? a.left : b.left,
                            h = d ? a.right : b.right;
                          return { top: e, bottom: f, left: g, right: h, width: h - g, height: f - e, x: g, y: e };
                        }
                        let a = "left" === l(c),
                          b = e(...p.map((a) => a.right)),
                          f = d(...p.map((a) => a.left)),
                          g = p.filter((c) => (a ? c.left === f : c.right === b)),
                          h = g[0].top,
                          i = g[g.length - 1].bottom;
                        return { top: h, bottom: i, left: f, right: b, width: b - f, height: i - h, x: f, y: h };
                      }
                      return r;
                    },
                  },
                  floating: f.floating,
                  strategy: i,
                });
              return g.reference.x !== t.reference.x ||
                g.reference.y !== t.reference.y ||
                g.reference.width !== t.reference.width ||
                g.reference.height !== t.reference.height
                ? { reset: { rects: t } }
                : {};
            },
          }
        );
      },
      az = function (a) {
        return (
          void 0 === a && (a = {}),
          {
            options: a,
            fn(b) {
              let { x: c, y: d, placement: e, rects: f, middlewareData: g } = b,
                { offset: h = 0, mainAxis: i = !0, crossAxis: j = !0 } = k(a, b),
                m = { x: c, y: d },
                o = q(e),
                p = n(o),
                r = m[p],
                s = m[o],
                t = k(h, b),
                u = "number" == typeof t ? { mainAxis: t, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...t };
              if (i) {
                let a = "y" === p ? "height" : "width",
                  b = f.reference[p] - f.floating[a] + u.mainAxis,
                  c = f.reference[p] + f.reference[a] - u.mainAxis;
                r < b ? (r = b) : r > c && (r = c);
              }
              if (j) {
                var v, w;
                let a = "y" === p ? "width" : "height",
                  b = G.has(l(e)),
                  c =
                    f.reference[o] -
                    f.floating[a] +
                    ((b && (null == (v = g.offset) ? void 0 : v[o])) || 0) +
                    (b ? 0 : u.crossAxis),
                  d =
                    f.reference[o] +
                    f.reference[a] +
                    (b ? 0 : (null == (w = g.offset) ? void 0 : w[o]) || 0) -
                    (b ? u.crossAxis : 0);
                s < c ? (s = c) : s > d && (s = d);
              }
              return { [p]: r, [o]: s };
            },
          }
        );
      },
      aA = (a, b, c) => {
        let d = new Map(),
          e = { platform: ao, ...c },
          f = { ...e.platform, _c: d };
        return B(a, b, { ...e, platform: f });
      };
    a.s(
      [
        "arrow",
        () => ax,
        "autoPlacement",
        () => as,
        "autoUpdate",
        () => aq,
        "computePosition",
        () => aA,
        "detectOverflow",
        () => C,
        "flip",
        () => au,
        "hide",
        () => aw,
        "inline",
        () => ay,
        "limitShift",
        () => az,
        "offset",
        () => ar,
        "shift",
        () => at,
        "size",
        () => av,
      ],
      372352,
    );
    var aB = a.i(805485),
      aC = a.i(496297),
      aD = "undefined" != typeof document ? aB.useLayoutEffect : function () {};
    function aE(a, b) {
      let c, d, e;
      if (a === b) return !0;
      if (typeof a != typeof b) return !1;
      if ("function" == typeof a && a.toString() === b.toString()) return !0;
      if (a && b && "object" == typeof a) {
        if (Array.isArray(a)) {
          if ((c = a.length) !== b.length) return !1;
          for (d = c; 0 != d--; ) if (!aE(a[d], b[d])) return !1;
          return !0;
        }
        if ((c = (e = Object.keys(a)).length) !== Object.keys(b).length) return !1;
        for (d = c; 0 != d--; ) if (!{}.hasOwnProperty.call(b, e[d])) return !1;
        for (d = c; 0 != d--; ) {
          let c = e[d];
          if (("_owner" !== c || !a.$$typeof) && !aE(a[c], b[c])) return !1;
        }
        return !0;
      }
      return a != a && b != b;
    }
    function aF(a, b) {
      let c = 1;
      return Math.round(b * c) / c;
    }
    function aG(a) {
      let b = aB.useRef(a);
      return (
        aD(() => {
          b.current = a;
        }),
        b
      );
    }
    function aH(a) {
      void 0 === a && (a = {});
      let {
          placement: b = "bottom",
          strategy: c = "absolute",
          middleware: d = [],
          platform: e,
          elements: { reference: f, floating: g } = {},
          transform: h = !0,
          whileElementsMounted: i,
          open: j,
        } = a,
        [k, l] = aB.useState({ x: 0, y: 0, strategy: c, placement: b, middlewareData: {}, isPositioned: !1 }),
        [m, n] = aB.useState(d);
      aE(m, d) || n(d);
      let [o, p] = aB.useState(null),
        [q, r] = aB.useState(null),
        s = aB.useCallback((a) => {
          a !== w.current && ((w.current = a), p(a));
        }, []),
        t = aB.useCallback((a) => {
          a !== x.current && ((x.current = a), r(a));
        }, []),
        u = f || o,
        v = g || q,
        w = aB.useRef(null),
        x = aB.useRef(null),
        y = aB.useRef(k),
        z = null != i,
        A = aG(i),
        B = aG(e),
        C = aG(j),
        D = aB.useCallback(() => {
          if (!w.current || !x.current) return;
          let a = { placement: b, strategy: c, middleware: m };
          (B.current && (a.platform = B.current),
            aA(w.current, x.current, a).then((a) => {
              let b = { ...a, isPositioned: !1 !== C.current };
              E.current &&
                !aE(y.current, b) &&
                ((y.current = b),
                aC.flushSync(() => {
                  l(b);
                }));
            }));
        }, [m, b, c, B, C]);
      aD(() => {
        !1 === j && y.current.isPositioned && ((y.current.isPositioned = !1), l((a) => ({ ...a, isPositioned: !1 })));
      }, [j]);
      let E = aB.useRef(!1);
      (aD(
        () => (
          (E.current = !0),
          () => {
            E.current = !1;
          }
        ),
        [],
      ),
        aD(() => {
          if ((u && (w.current = u), v && (x.current = v), u && v)) {
            if (A.current) return A.current(u, v, D);
            D();
          }
        }, [u, v, D, A, z]));
      let F = aB.useMemo(() => ({ reference: w, floating: x, setReference: s, setFloating: t }), [s, t]),
        G = aB.useMemo(() => ({ reference: u, floating: v }), [u, v]),
        H = aB.useMemo(() => {
          let a = { position: c, left: 0, top: 0 };
          if (!G.floating) return a;
          let b = aF(G.floating, k.x),
            d = aF(G.floating, k.y);
          if (h) return { ...a, transform: "translate(" + b + "px, " + d + "px)", ...(G.floating, false) };
          return { position: c, left: b, top: d };
        }, [c, h, G.floating, k.x, k.y]);
      return aB.useMemo(() => ({ ...k, update: D, refs: F, elements: G, floatingStyles: H }), [k, D, F, G, H]);
    }
    let aI = (a, b) => ({ ...ar(a), options: [a, b] }),
      aJ = (a, b) => ({ ...at(a), options: [a, b] }),
      aK = (a, b) => ({ ...az(a), options: [a, b] }),
      aL = (a, b) => ({ ...au(a), options: [a, b] }),
      aM = (a, b) => ({ ...av(a), options: [a, b] }),
      aN = (a, b) => ({ ...as(a), options: [a, b] }),
      aO = (a, b) => ({ ...aw(a), options: [a, b] }),
      aP = (a, b) => ({
        name: "arrow",
        options: a,
        fn(b) {
          let { element: c, padding: d } = "function" == typeof a ? a(b) : a;
          return c && {}.hasOwnProperty.call(c, "current")
            ? null != c.current
              ? ax({ element: c.current, padding: d }).fn(b)
              : {}
            : c
              ? ax({ element: c, padding: d }).fn(b)
              : {};
        },
        options: [a, b],
      });
    a.s(
      [
        "arrow",
        () => aP,
        "autoPlacement",
        () => aN,
        "flip",
        () => aL,
        "hide",
        () => aO,
        "limitShift",
        () => aK,
        "offset",
        () => aI,
        "shift",
        () => aJ,
        "size",
        () => aM,
        "useFloating",
        () => aH,
      ],
      740020,
    );
  },
];

//# sourceMappingURL=433da_%40floating-ui_react-dom_dist_floating-ui_react-dom_mjs_fa147924._.js.map
