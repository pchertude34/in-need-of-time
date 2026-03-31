(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  393513,
  (e, t, r) => {
    t.exports = e.r(77457);
  },
  930943,
  (e) => {
    "use strict";
    var t = e.i(770572);
    let r = t.forwardRef(function ({ title: e, titleId: r, ...n }, a) {
      return t.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: a,
            "aria-labelledby": r,
          },
          n,
        ),
        e ? t.createElement("title", { id: r }, e) : null,
        t.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
        }),
      );
    });
    e.s(["ArrowRightIcon", 0, r], 930943);
  },
  462406,
  (e) => {
    "use strict";
    function t(e, r, { checkForDefaultPrevented: n = !0 } = {}) {
      return function (t) {
        if ((e?.(t), !1 === n || !t.defaultPrevented)) return r?.(t);
      };
    }
    ("undefined" != typeof window && window.document && window.document.createElement,
      e.s(["composeEventHandlers", () => t]));
  },
  164265,
  (e) => {
    "use strict";
    var t = e.i(770572);
    function r(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    function n(...e) {
      return (t) => {
        let n = !1,
          a = e.map((e) => {
            let a = r(e, t);
            return (n || "function" != typeof a || (n = !0), a);
          });
        if (n)
          return () => {
            for (let t = 0; t < a.length; t++) {
              let n = a[t];
              "function" == typeof n ? n() : r(e[t], null);
            }
          };
      };
    }
    function a(...e) {
      return t.useCallback(n(...e), e);
    }
    e.s(["composeRefs", () => n, "useComposedRefs", () => a]);
  },
  205020,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = e.i(802252);
    function n(e, n) {
      let a = t.createContext(n),
        o = (e) => {
          let { children: n, ...o } = e,
            i = t.useMemo(() => o, Object.values(o));
          return (0, r.jsx)(a.Provider, { value: i, children: n });
        };
      return (
        (o.displayName = e + "Provider"),
        [
          o,
          function (r) {
            let o = t.useContext(a);
            if (o) return o;
            if (void 0 !== n) return n;
            throw Error(`\`${r}\` must be used within \`${e}\``);
          },
        ]
      );
    }
    function a(e, n = []) {
      let o = [],
        i = () => {
          let r = o.map((e) => t.createContext(e));
          return function (n) {
            let a = n?.[e] || r;
            return t.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: a } }), [n, a]);
          };
        };
      return (
        (i.scopeName = e),
        [
          function (n, a) {
            let i = t.createContext(a),
              s = o.length;
            o = [...o, a];
            let l = (n) => {
              let { scope: a, children: o, ...l } = n,
                d = a?.[e]?.[s] || i,
                u = t.useMemo(() => l, Object.values(l));
              return (0, r.jsx)(d.Provider, { value: u, children: o });
            };
            return (
              (l.displayName = n + "Provider"),
              [
                l,
                function (r, o) {
                  let l = o?.[e]?.[s] || i,
                    d = t.useContext(l);
                  if (d) return d;
                  if (void 0 !== a) return a;
                  throw Error(`\`${r}\` must be used within \`${n}\``);
                },
              ]
            );
          },
          (function (...e) {
            let r = e[0];
            if (1 === e.length) return r;
            let n = () => {
              let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
              return function (e) {
                let a = n.reduce((t, { useScope: r, scopeName: n }) => {
                  let a = r(e)[`__scope${n}`];
                  return { ...t, ...a };
                }, {});
                return t.useMemo(() => ({ [`__scope${r.scopeName}`]: a }), [a]);
              };
            };
            return ((n.scopeName = r.scopeName), n);
          })(i, ...n),
        ]
      );
    }
    e.s(["createContext", () => n, "createContextScope", () => a]);
  },
  296915,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = globalThis?.document ? t.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", () => r]);
  },
  286002,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = e.i(296915),
      n = t[" useId ".trim().toString()] || (() => void 0),
      a = 0;
    function o(e) {
      let [o, i] = t.useState(n());
      return (
        (0, r.useLayoutEffect)(() => {
          e || i((e) => e ?? String(a++));
        }, [e]),
        e || (o ? `radix-${o}` : "")
      );
    }
    e.s(["useId", () => o]);
  },
  696731,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = e.i(296915);
    (t[" useEffectEvent ".trim().toString()], t[" useInsertionEffect ".trim().toString()]);
    var n = t[" useInsertionEffect ".trim().toString()] || r.useLayoutEffect;
    function a({ prop: e, defaultProp: r, onChange: a = () => {}, caller: o }) {
      let [i, s, l] = (function ({ defaultProp: e, onChange: r }) {
          let [a, o] = t.useState(e),
            i = t.useRef(a),
            s = t.useRef(r);
          return (
            n(() => {
              s.current = r;
            }, [r]),
            t.useEffect(() => {
              i.current !== a && (s.current?.(a), (i.current = a));
            }, [a, i]),
            [a, o, s]
          );
        })({ defaultProp: r, onChange: a }),
        d = void 0 !== e,
        u = d ? e : i;
      {
        let r = t.useRef(void 0 !== e);
        t.useEffect(() => {
          let e = r.current;
          if (e !== d) {
            let t = d ? "controlled" : "uncontrolled";
            console.warn(
              `${o} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
            );
          }
          r.current = d;
        }, [d, o]);
      }
      return [
        u,
        t.useCallback(
          (t) => {
            if (d) {
              let r = "function" == typeof t ? t(e) : t;
              r !== e && l.current?.(r);
            } else s(t);
          },
          [d, e, s, l],
        ),
      ];
    }
    (Symbol("RADIX:SYNC_STATE"), e.s(["useControllableState", () => a], 696731));
  },
  940188,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = e.i(614840),
      n = e.i(164265),
      a = e.i(802252),
      o = Symbol("radix.slottable");
    function i(e) {
      return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === o;
    }
    var s = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "select",
      "span",
      "svg",
      "ul",
    ].reduce((e, r) => {
      var o, s;
      let l,
        d,
        u,
        c =
          ((s = o = `Primitive.${r}`),
          ((l = t.forwardRef((e, r) => {
            let { children: a, ...o } = e;
            if (t.isValidElement(a)) {
              var i;
              let e,
                s,
                l =
                  ((i = a),
                  (s =
                    (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? i.ref
                    : (s =
                          (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                          "isReactWarning" in e &&
                          e.isReactWarning)
                      ? i.props.ref
                      : i.props.ref || i.ref),
                d = (function (e, t) {
                  let r = { ...t };
                  for (let n in t) {
                    let a = e[n],
                      o = t[n];
                    /^on[A-Z]/.test(n)
                      ? a && o
                        ? (r[n] = (...e) => {
                            let t = o(...e);
                            return (a(...e), t);
                          })
                        : a && (r[n] = a)
                      : "style" === n
                        ? (r[n] = { ...a, ...o })
                        : "className" === n && (r[n] = [a, o].filter(Boolean).join(" "));
                  }
                  return { ...e, ...r };
                })(o, a.props);
              return (a.type !== t.Fragment && (d.ref = r ? (0, n.composeRefs)(r, l) : l), t.cloneElement(a, d));
            }
            return t.Children.count(a) > 1 ? t.Children.only(null) : null;
          })).displayName = `${s}.SlotClone`),
          (d = l),
          ((u = t.forwardRef((e, r) => {
            let { children: n, ...o } = e,
              s = t.Children.toArray(n),
              l = s.find(i);
            if (l) {
              let e = l.props.children,
                n = s.map((r) =>
                  r !== l
                    ? r
                    : t.Children.count(e) > 1
                      ? t.Children.only(null)
                      : t.isValidElement(e)
                        ? e.props.children
                        : null,
                );
              return (0, a.jsx)(d, {
                ...o,
                ref: r,
                children: t.isValidElement(e) ? t.cloneElement(e, void 0, n) : null,
              });
            }
            return (0, a.jsx)(d, { ...o, ref: r, children: n });
          })).displayName = `${o}.Slot`),
          u),
        f = t.forwardRef((e, t) => {
          let { asChild: n, ...o } = e;
          return (
            "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
            (0, a.jsx)(n ? c : r, { ...o, ref: t })
          );
        });
      return ((f.displayName = `Primitive.${r}`), { ...e, [r]: f });
    }, {});
    function l(e, t) {
      e && r.flushSync(() => e.dispatchEvent(t));
    }
    e.s(["Primitive", () => s, "dispatchDiscreteCustomEvent", () => l], 940188);
  },
  766411,
  (e) => {
    "use strict";
    var t = e.i(770572);
    function r(e) {
      let r = t.useRef(e);
      return (
        t.useEffect(() => {
          r.current = e;
        }),
        t.useMemo(
          () =>
            (...e) =>
              r.current?.(...e),
          [],
        )
      );
    }
    e.s(["useCallbackRef", () => r]);
  },
  7764,
  (e) => {
    "use strict";
    let t;
    var r = e.i(770572),
      n = e.i(164265),
      a = e.i(940188),
      o = e.i(766411),
      i = e.i(802252),
      s = "focusScope.autoFocusOnMount",
      l = "focusScope.autoFocusOnUnmount",
      d = { bubbles: !1, cancelable: !0 },
      u = r.forwardRef((e, t) => {
        let { loop: u = !1, trapped: h = !1, onMountAutoFocus: v, onUnmountAutoFocus: g, ...y } = e,
          [b, w] = r.useState(null),
          x = (0, o.useCallbackRef)(v),
          E = (0, o.useCallbackRef)(g),
          C = r.useRef(null),
          R = (0, n.useComposedRefs)(t, (e) => w(e)),
          k = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0;
            },
            resume() {
              this.paused = !1;
            },
          }).current;
        (r.useEffect(() => {
          if (h) {
            let e = function (e) {
                if (k.paused || !b) return;
                let t = e.target;
                b.contains(t) ? (C.current = t) : p(C.current, { select: !0 });
              },
              t = function (e) {
                if (k.paused || !b) return;
                let t = e.relatedTarget;
                null !== t && (b.contains(t) || p(C.current, { select: !0 }));
              };
            (document.addEventListener("focusin", e), document.addEventListener("focusout", t));
            let r = new MutationObserver(function (e) {
              if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && p(b);
            });
            return (
              b && r.observe(b, { childList: !0, subtree: !0 }),
              () => {
                (document.removeEventListener("focusin", e),
                  document.removeEventListener("focusout", t),
                  r.disconnect());
              }
            );
          }
        }, [h, b, k.paused]),
          r.useEffect(() => {
            if (b) {
              m.add(k);
              let e = document.activeElement;
              if (!b.contains(e)) {
                let t = new CustomEvent(s, d);
                (b.addEventListener(s, x),
                  b.dispatchEvent(t),
                  t.defaultPrevented ||
                    ((function (e, { select: t = !1 } = {}) {
                      let r = document.activeElement;
                      for (let n of e) if ((p(n, { select: t }), document.activeElement !== r)) return;
                    })(
                      c(b).filter((e) => "A" !== e.tagName),
                      { select: !0 },
                    ),
                    document.activeElement === e && p(b)));
              }
              return () => {
                (b.removeEventListener(s, x),
                  setTimeout(() => {
                    let t = new CustomEvent(l, d);
                    (b.addEventListener(l, E),
                      b.dispatchEvent(t),
                      t.defaultPrevented || p(e ?? document.body, { select: !0 }),
                      b.removeEventListener(l, E),
                      m.remove(k));
                  }, 0));
              };
            }
          }, [b, x, E, k]));
        let S = r.useCallback(
          (e) => {
            if ((!u && !h) || k.paused) return;
            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              var n;
              let t,
                a = e.currentTarget,
                [o, i] = [f((t = c((n = a))), n), f(t.reverse(), n)];
              o && i
                ? e.shiftKey || r !== i
                  ? e.shiftKey && r === o && (e.preventDefault(), u && p(i, { select: !0 }))
                  : (e.preventDefault(), u && p(o, { select: !0 }))
                : r === a && e.preventDefault();
            }
          },
          [u, h, k.paused],
        );
        return (0, i.jsx)(a.Primitive.div, { tabIndex: -1, ...y, ref: R, onKeyDown: S });
      });
    function c(e) {
      let t = [],
        r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (e) => {
            let t = "INPUT" === e.tagName && "hidden" === e.type;
            return e.disabled || e.hidden || t
              ? NodeFilter.FILTER_SKIP
              : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
          },
        });
      for (; r.nextNode(); ) t.push(r.currentNode);
      return t;
    }
    function f(e, t) {
      for (let r of e)
        if (
          !(function (e, { upTo: t }) {
            if ("hidden" === getComputedStyle(e).visibility) return !0;
            for (; e && (void 0 === t || e !== t); ) {
              if ("none" === getComputedStyle(e).display) return !0;
              e = e.parentElement;
            }
            return !1;
          })(r, { upTo: t })
        )
          return r;
    }
    function p(e, { select: t = !1 } = {}) {
      if (e && e.focus) {
        var r;
        let n = document.activeElement;
        (e.focus({ preventScroll: !0 }),
          e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select());
      }
    }
    u.displayName = "FocusScope";
    var m =
      ((t = []),
      {
        add(e) {
          let r = t[0];
          (e !== r && r?.pause(), (t = h(t, e)).unshift(e));
        },
        remove(e) {
          ((t = h(t, e)), t[0]?.resume());
        },
      });
    function h(e, t) {
      let r = [...e],
        n = r.indexOf(t);
      return (-1 !== n && r.splice(n, 1), r);
    }
    e.s(["FocusScope", () => u]);
  },
  408200,
  264874,
  (e) => {
    "use strict";
    var t,
      r = e.i(770572),
      n = e.i(462406),
      a = e.i(940188),
      o = e.i(164265),
      i = e.i(766411),
      s = e.i(802252),
      l = "dismissableLayer.update",
      d = r.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      }),
      u = r.forwardRef((e, u) => {
        let {
            disableOutsidePointerEvents: p = !1,
            onEscapeKeyDown: m,
            onPointerDownOutside: h,
            onFocusOutside: v,
            onInteractOutside: g,
            onDismiss: y,
            ...b
          } = e,
          w = r.useContext(d),
          [x, E] = r.useState(null),
          C = x?.ownerDocument ?? globalThis?.document,
          [, R] = r.useState({}),
          k = (0, o.useComposedRefs)(u, (e) => E(e)),
          S = Array.from(w.layers),
          [N] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
          A = S.indexOf(N),
          T = x ? S.indexOf(x) : -1,
          M = w.layersWithOutsidePointerEventsDisabled.size > 0,
          L = T >= A,
          P = (function (e, t = globalThis?.document) {
            let n = (0, i.useCallbackRef)(e),
              a = r.useRef(!1),
              o = r.useRef(() => {});
            return (
              r.useEffect(() => {
                let e = (e) => {
                    if (e.target && !a.current) {
                      let r = function () {
                          f("dismissableLayer.pointerDownOutside", n, a, { discrete: !0 });
                        },
                        a = { originalEvent: e };
                      "touch" === e.pointerType
                        ? (t.removeEventListener("click", o.current),
                          (o.current = r),
                          t.addEventListener("click", o.current, { once: !0 }))
                        : r();
                    } else t.removeEventListener("click", o.current);
                    a.current = !1;
                  },
                  r = window.setTimeout(() => {
                    t.addEventListener("pointerdown", e);
                  }, 0);
                return () => {
                  (window.clearTimeout(r),
                    t.removeEventListener("pointerdown", e),
                    t.removeEventListener("click", o.current));
                };
              }, [t, n]),
              { onPointerDownCapture: () => (a.current = !0) }
            );
          })((e) => {
            let t = e.target,
              r = [...w.branches].some((e) => e.contains(t));
            L && !r && (h?.(e), g?.(e), e.defaultPrevented || y?.());
          }, C),
          j = (function (e, t = globalThis?.document) {
            let n = (0, i.useCallbackRef)(e),
              a = r.useRef(!1);
            return (
              r.useEffect(() => {
                let e = (e) => {
                  e.target &&
                    !a.current &&
                    f("dismissableLayer.focusOutside", n, { originalEvent: e }, { discrete: !1 });
                };
                return (t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e));
              }, [t, n]),
              { onFocusCapture: () => (a.current = !0), onBlurCapture: () => (a.current = !1) }
            );
          })((e) => {
            let t = e.target;
            ![...w.branches].some((e) => e.contains(t)) && (v?.(e), g?.(e), e.defaultPrevented || y?.());
          }, C);
        return (
          !(function (e, t = globalThis?.document) {
            let n = (0, i.useCallbackRef)(e);
            r.useEffect(() => {
              let e = (e) => {
                "Escape" === e.key && n(e);
              };
              return (
                t.addEventListener("keydown", e, { capture: !0 }),
                () => t.removeEventListener("keydown", e, { capture: !0 })
              );
            }, [n, t]);
          })((e) => {
            T === w.layers.size - 1 && (m?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()));
          }, C),
          r.useEffect(() => {
            if (x)
              return (
                p &&
                  (0 === w.layersWithOutsidePointerEventsDisabled.size &&
                    ((t = C.body.style.pointerEvents), (C.body.style.pointerEvents = "none")),
                  w.layersWithOutsidePointerEventsDisabled.add(x)),
                w.layers.add(x),
                c(),
                () => {
                  p && 1 === w.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = t);
                }
              );
          }, [x, C, p, w]),
          r.useEffect(
            () => () => {
              x && (w.layers.delete(x), w.layersWithOutsidePointerEventsDisabled.delete(x), c());
            },
            [x, w],
          ),
          r.useEffect(() => {
            let e = () => R({});
            return (document.addEventListener(l, e), () => document.removeEventListener(l, e));
          }, []),
          (0, s.jsx)(a.Primitive.div, {
            ...b,
            ref: k,
            style: { pointerEvents: M ? (L ? "auto" : "none") : void 0, ...e.style },
            onFocusCapture: (0, n.composeEventHandlers)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, n.composeEventHandlers)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, n.composeEventHandlers)(e.onPointerDownCapture, P.onPointerDownCapture),
          })
        );
      });
    function c() {
      let e = new CustomEvent(l);
      document.dispatchEvent(e);
    }
    function f(e, t, r, { discrete: n }) {
      let o = r.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
      (t && o.addEventListener(e, t, { once: !0 }), n ? (0, a.dispatchDiscreteCustomEvent)(o, i) : o.dispatchEvent(i));
    }
    ((u.displayName = "DismissableLayer"),
      (r.forwardRef((e, t) => {
        let n = r.useContext(d),
          i = r.useRef(null),
          l = (0, o.useComposedRefs)(t, i);
        return (
          r.useEffect(() => {
            let e = i.current;
            if (e)
              return (
                n.branches.add(e),
                () => {
                  n.branches.delete(e);
                }
              );
          }, [n.branches]),
          (0, s.jsx)(a.Primitive.div, { ...e, ref: l })
        );
      }).displayName = "DismissableLayerBranch"),
      e.s(["DismissableLayer", () => u], 408200));
    var p = e.i(614840),
      m = e.i(296915),
      h = r.forwardRef((e, t) => {
        let { container: n, ...o } = e,
          [i, l] = r.useState(!1);
        (0, m.useLayoutEffect)(() => l(!0), []);
        let d = n || (i && globalThis?.document?.body);
        return d ? p.default.createPortal((0, s.jsx)(a.Primitive.div, { ...o, ref: t }), d) : null;
      });
    ((h.displayName = "Portal"), e.s(["Portal", () => h], 264874));
  },
  763743,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = e.i(164265),
      n = e.i(296915),
      a = (e) => {
        var a;
        let i,
          s,
          { present: l, children: d } = e,
          u = (function (e) {
            var r, a;
            let [i, s] = t.useState(),
              l = t.useRef(null),
              d = t.useRef(e),
              u = t.useRef("none"),
              [c, f] =
                ((r = e ? "mounted" : "unmounted"),
                (a = {
                  mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                  unmounted: { MOUNT: "mounted" },
                }),
                t.useReducer((e, t) => a[e][t] ?? e, r));
            return (
              t.useEffect(() => {
                let e = o(l.current);
                u.current = "mounted" === c ? e : "none";
              }, [c]),
              (0, n.useLayoutEffect)(() => {
                let t = l.current,
                  r = d.current;
                if (r !== e) {
                  let n = u.current,
                    a = o(t);
                  (e
                    ? f("MOUNT")
                    : "none" === a || t?.display === "none"
                      ? f("UNMOUNT")
                      : r && n !== a
                        ? f("ANIMATION_OUT")
                        : f("UNMOUNT"),
                    (d.current = e));
                }
              }, [e, f]),
              (0, n.useLayoutEffect)(() => {
                if (i) {
                  let e,
                    t = i.ownerDocument.defaultView ?? window,
                    r = (r) => {
                      let n = o(l.current).includes(CSS.escape(r.animationName));
                      if (r.target === i && n && (f("ANIMATION_END"), !d.current)) {
                        let r = i.style.animationFillMode;
                        ((i.style.animationFillMode = "forwards"),
                          (e = t.setTimeout(() => {
                            "forwards" === i.style.animationFillMode && (i.style.animationFillMode = r);
                          })));
                      }
                    },
                    n = (e) => {
                      e.target === i && (u.current = o(l.current));
                    };
                  return (
                    i.addEventListener("animationstart", n),
                    i.addEventListener("animationcancel", r),
                    i.addEventListener("animationend", r),
                    () => {
                      (t.clearTimeout(e),
                        i.removeEventListener("animationstart", n),
                        i.removeEventListener("animationcancel", r),
                        i.removeEventListener("animationend", r));
                    }
                  );
                }
                f("ANIMATION_END");
              }, [i, f]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(c),
                ref: t.useCallback((e) => {
                  ((l.current = e ? getComputedStyle(e) : null), s(e));
                }, []),
              }
            );
          })(l),
          c = "function" == typeof d ? d({ present: u.isPresent }) : t.Children.only(d),
          f = (0, r.useComposedRefs)(
            u.ref,
            ((a = c),
            (s =
              (i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) && "isReactWarning" in i && i.isReactWarning)
              ? a.ref
              : (s = (i = Object.getOwnPropertyDescriptor(a, "ref")?.get) && "isReactWarning" in i && i.isReactWarning)
                ? a.props.ref
                : a.props.ref || a.ref),
          );
        return "function" == typeof d || u.isPresent ? t.cloneElement(c, { ref: f }) : null;
      };
    function o(e) {
      return e?.animationName || "none";
    }
    ((a.displayName = "Presence"), e.s(["Presence", () => a]));
  },
  653975,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = 0;
    function n() {
      t.useEffect(() => {
        let e = document.querySelectorAll("[data-radix-focus-guard]");
        return (
          document.body.insertAdjacentElement("afterbegin", e[0] ?? a()),
          document.body.insertAdjacentElement("beforeend", e[1] ?? a()),
          r++,
          () => {
            (1 === r && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), r--);
          }
        );
      }, []);
    }
    function a() {
      let e = document.createElement("span");
      return (
        e.setAttribute("data-radix-focus-guard", ""),
        (e.tabIndex = 0),
        (e.style.outline = "none"),
        (e.style.opacity = "0"),
        (e.style.position = "fixed"),
        (e.style.pointerEvents = "none"),
        e
      );
    }
    e.s(["useFocusGuards", () => n]);
  },
  351143,
  (e) => {
    "use strict";
    var t,
      r,
      n = e.i(658965),
      a = e.i(770572),
      o = "right-scroll-bar-position",
      i = "width-before-scroll-bar",
      s = e.i(616943),
      l = (0, e.i(972224).createSidecarMedium)(),
      d = function () {},
      u = a.forwardRef(function (e, t) {
        var r = a.useRef(null),
          o = a.useState({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: d }),
          i = o[0],
          u = o[1],
          c = e.forwardProps,
          f = e.children,
          p = e.className,
          m = e.removeScrollBar,
          h = e.enabled,
          v = e.shards,
          g = e.sideCar,
          y = e.noRelative,
          b = e.noIsolation,
          w = e.inert,
          x = e.allowPinchZoom,
          E = e.as,
          C = e.gapMode,
          R = (0, n.__rest)(e, [
            "forwardProps",
            "children",
            "className",
            "removeScrollBar",
            "enabled",
            "shards",
            "sideCar",
            "noRelative",
            "noIsolation",
            "inert",
            "allowPinchZoom",
            "as",
            "gapMode",
          ]),
          k = (0, s.useMergeRefs)([r, t]),
          S = (0, n.__assign)((0, n.__assign)({}, R), i);
        return a.createElement(
          a.Fragment,
          null,
          h &&
            a.createElement(g, {
              sideCar: l,
              removeScrollBar: m,
              shards: v,
              noRelative: y,
              noIsolation: b,
              inert: w,
              setCallbacks: u,
              allowPinchZoom: !!x,
              lockRef: r,
              gapMode: C,
            }),
          c
            ? a.cloneElement(a.Children.only(f), (0, n.__assign)((0, n.__assign)({}, S), { ref: k }))
            : a.createElement(void 0 === E ? "div" : E, (0, n.__assign)({}, S, { className: p, ref: k }), f),
        );
      });
    ((u.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
      (u.classNames = { fullWidth: i, zeroRight: o }));
    var c = function (e) {
      var t = e.sideCar,
        r = (0, n.__rest)(e, ["sideCar"]);
      if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
      var o = t.read();
      if (!o) throw Error("Sidecar medium not found");
      return a.createElement(o, (0, n.__assign)({}, r));
    };
    c.isSideCarExport = !0;
    var f = function () {
        var e = 0,
          t = null;
        return {
          add: function (n) {
            if (
              0 == e &&
              (t = (function () {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = r || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                return (t && e.setAttribute("nonce", t), e);
              })())
            ) {
              var a, o;
              ((a = t).styleSheet ? (a.styleSheet.cssText = n) : a.appendChild(document.createTextNode(n)),
                (o = t),
                (document.head || document.getElementsByTagName("head")[0]).appendChild(o));
            }
            e++;
          },
          remove: function () {
            --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
          },
        };
      },
      p = function () {
        var e = f();
        return function (t, r) {
          a.useEffect(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && r],
          );
        };
      },
      m = function () {
        var e = p();
        return function (t) {
          return (e(t.styles, t.dynamic), null);
        };
      },
      h = { left: 0, top: 0, right: 0, gap: 0 },
      v = function (e) {
        return parseInt(e || "", 10) || 0;
      },
      g = function (e) {
        var t = window.getComputedStyle(document.body),
          r = t["padding" === e ? "paddingLeft" : "marginLeft"],
          n = t["padding" === e ? "paddingTop" : "marginTop"],
          a = t["padding" === e ? "paddingRight" : "marginRight"];
        return [v(r), v(n), v(a)];
      },
      y = function (e) {
        if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return h;
        var t = g(e),
          r = document.documentElement.clientWidth,
          n = window.innerWidth;
        return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) };
      },
      b = m(),
      w = "data-scroll-locked",
      x = function (e, t, r, n) {
        var a = e.left,
          s = e.top,
          l = e.right,
          d = e.gap;
        return (
          void 0 === r && (r = "margin"),
          "\n  ."
            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
            .concat(n, ";\n   padding-right: ")
            .concat(d, "px ")
            .concat(n, ";\n  }\n  body[")
            .concat(w, "] {\n    overflow: hidden ")
            .concat(n, ";\n    overscroll-behavior: contain;\n    ")
            .concat(
              [
                t && "position: relative ".concat(n, ";"),
                "margin" === r &&
                  "\n    padding-left: "
                    .concat(a, "px;\n    padding-top: ")
                    .concat(s, "px;\n    padding-right: ")
                    .concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
                    .concat(d, "px ")
                    .concat(n, ";\n    "),
                "padding" === r && "padding-right: ".concat(d, "px ").concat(n, ";"),
              ]
                .filter(Boolean)
                .join(""),
              "\n  }\n  \n  .",
            )
            .concat(o, " {\n    right: ")
            .concat(d, "px ")
            .concat(n, ";\n  }\n  \n  .")
            .concat(i, " {\n    margin-right: ")
            .concat(d, "px ")
            .concat(n, ";\n  }\n  \n  .")
            .concat(o, " .")
            .concat(o, " {\n    right: 0 ")
            .concat(n, ";\n  }\n  \n  .")
            .concat(i, " .")
            .concat(i, " {\n    margin-right: 0 ")
            .concat(n, ";\n  }\n  \n  body[")
            .concat(w, "] {\n    ")
            .concat("--removed-body-scroll-bar-size", ": ")
            .concat(d, "px;\n  }\n")
        );
      },
      E = function () {
        var e = parseInt(document.body.getAttribute(w) || "0", 10);
        return isFinite(e) ? e : 0;
      },
      C = function () {
        a.useEffect(function () {
          return (
            document.body.setAttribute(w, (E() + 1).toString()),
            function () {
              var e = E() - 1;
              e <= 0 ? document.body.removeAttribute(w) : document.body.setAttribute(w, e.toString());
            }
          );
        }, []);
      },
      R = function (e) {
        var t = e.noRelative,
          r = e.noImportant,
          n = e.gapMode,
          o = void 0 === n ? "margin" : n;
        C();
        var i = a.useMemo(
          function () {
            return y(o);
          },
          [o],
        );
        return a.createElement(b, { styles: x(i, !t, o, r ? "" : "!important") });
      },
      k = !1;
    if ("undefined" != typeof window)
      try {
        var S = Object.defineProperty({}, "passive", {
          get: function () {
            return ((k = !0), !0);
          },
        });
        (window.addEventListener("test", S, S), window.removeEventListener("test", S, S));
      } catch (e) {
        k = !1;
      }
    var N = !!k && { passive: !1 },
      A = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var r = window.getComputedStyle(e);
        return "hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t]);
      },
      T = function (e, t) {
        var r = t.ownerDocument,
          n = t;
        do {
          if (("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), M(e, n))) {
            var a = L(e, n);
            if (a[1] > a[2]) return !0;
          }
          n = n.parentNode;
        } while (n && n !== r.body);
        return !1;
      },
      M = function (e, t) {
        return "v" === e ? A(t, "overflowY") : A(t, "overflowX");
      },
      L = function (e, t) {
        return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
      },
      P = function (e, t, r, n, a) {
        var o,
          i = ((o = window.getComputedStyle(t).direction), "h" === e && "rtl" === o ? -1 : 1),
          s = i * n,
          l = r.target,
          d = t.contains(l),
          u = !1,
          c = s > 0,
          f = 0,
          p = 0;
        do {
          if (!l) break;
          var m = L(e, l),
            h = m[0],
            v = m[1] - m[2] - i * h;
          (h || v) && M(e, l) && ((f += v), (p += h));
          var g = l.parentNode;
          l = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
        } while ((!d && l !== document.body) || (d && (t.contains(l) || t === l)));
        return (
          c && ((a && 1 > Math.abs(f)) || (!a && s > f))
            ? (u = !0)
            : !c && ((a && 1 > Math.abs(p)) || (!a && -s > p)) && (u = !0),
          u
        );
      },
      j = function (e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
      },
      O = function (e) {
        return [e.deltaX, e.deltaY];
      },
      _ = function (e) {
        return e && "current" in e ? e.current : e;
      },
      D = 0,
      I = [];
    let B =
      ((t = function (e) {
        var t = a.useRef([]),
          r = a.useRef([0, 0]),
          o = a.useRef(),
          i = a.useState(D++)[0],
          s = a.useState(m)[0],
          l = a.useRef(e);
        (a.useEffect(
          function () {
            l.current = e;
          },
          [e],
        ),
          a.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(i));
                var t = (0, n.__spreadArray)([e.lockRef.current], (e.shards || []).map(_), !0).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(i));
                  }),
                  function () {
                    (document.body.classList.remove("block-interactivity-".concat(i)),
                      t.forEach(function (e) {
                        return e.classList.remove("allow-interactivity-".concat(i));
                      }));
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards],
          ));
        var d = a.useCallback(function (e, t) {
            if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey))
              return !l.current.allowPinchZoom;
            var n,
              a = j(e),
              i = r.current,
              s = "deltaX" in e ? e.deltaX : i[0] - a[0],
              d = "deltaY" in e ? e.deltaY : i[1] - a[1],
              u = e.target,
              c = Math.abs(s) > Math.abs(d) ? "h" : "v";
            if ("touches" in e && "h" === c && "range" === u.type) return !1;
            var f = window.getSelection(),
              p = f && f.anchorNode;
            if (p && (p === u || p.contains(u))) return !1;
            var m = T(c, u);
            if (!m) return !0;
            if ((m ? (n = c) : ((n = "v" === c ? "h" : "v"), (m = T(c, u))), !m)) return !1;
            if ((!o.current && "changedTouches" in e && (s || d) && (o.current = n), !n)) return !0;
            var h = o.current || n;
            return P(h, t, e, "h" === h ? s : d, !0);
          }, []),
          u = a.useCallback(function (e) {
            if (I.length && I[I.length - 1] === s) {
              var r = "deltaY" in e ? O(e) : j(e),
                n = t.current.filter(function (t) {
                  var n;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    ((n = t.delta), n[0] === r[0] && n[1] === r[1])
                  );
                })[0];
              if (n && n.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!n) {
                var a = (l.current.shards || [])
                  .map(_)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (a.length > 0 ? d(e, a[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault();
              }
            }
          }, []),
          c = a.useCallback(function (e, r, n, a) {
            var o = {
              name: e,
              delta: r,
              target: n,
              should: a,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
                return t;
              })(n),
            };
            (t.current.push(o),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== o;
                });
              }, 1));
          }, []),
          f = a.useCallback(function (e) {
            ((r.current = j(e)), (o.current = void 0));
          }, []),
          p = a.useCallback(function (t) {
            c(t.type, O(t), t.target, d(t, e.lockRef.current));
          }, []),
          h = a.useCallback(function (t) {
            c(t.type, j(t), t.target, d(t, e.lockRef.current));
          }, []);
        a.useEffect(function () {
          return (
            I.push(s),
            e.setCallbacks({ onScrollCapture: p, onWheelCapture: p, onTouchMoveCapture: h }),
            document.addEventListener("wheel", u, N),
            document.addEventListener("touchmove", u, N),
            document.addEventListener("touchstart", f, N),
            function () {
              ((I = I.filter(function (e) {
                return e !== s;
              })),
                document.removeEventListener("wheel", u, N),
                document.removeEventListener("touchmove", u, N),
                document.removeEventListener("touchstart", f, N));
            }
          );
        }, []);
        var v = e.removeScrollBar,
          g = e.inert;
        return a.createElement(
          a.Fragment,
          null,
          g
            ? a.createElement(s, {
                styles: "\n  .block-interactivity-"
                  .concat(i, " {pointer-events: none;}\n  .allow-interactivity-")
                  .concat(i, " {pointer-events: all;}\n"),
              })
            : null,
          v ? a.createElement(R, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
        );
      }),
      l.useMedium(t),
      c);
    var $ = a.forwardRef(function (e, t) {
      return a.createElement(u, (0, n.__assign)({}, e, { ref: t, sideCar: B }));
    });
    (($.classNames = u.classNames), e.s(["RemoveScroll", 0, $], 351143));
  },
  454905,
  (e) => {
    "use strict";
    var t = new WeakMap(),
      r = new WeakMap(),
      n = {},
      a = 0,
      o = function (e) {
        return e && (e.host || o(e.parentNode));
      },
      i = function (e, i, s, l) {
        var d = (Array.isArray(e) ? e : [e])
          .map(function (e) {
            if (i.contains(e)) return e;
            var t = o(e);
            return t && i.contains(t)
              ? t
              : (console.error("aria-hidden", e, "in not contained inside", i, ". Doing nothing"), null);
          })
          .filter(function (e) {
            return !!e;
          });
        n[s] || (n[s] = new WeakMap());
        var u = n[s],
          c = [],
          f = new Set(),
          p = new Set(d),
          m = function (e) {
            !e || f.has(e) || (f.add(e), m(e.parentNode));
          };
        d.forEach(m);
        var h = function (e) {
          !e ||
            p.has(e) ||
            Array.prototype.forEach.call(e.children, function (e) {
              if (f.has(e)) h(e);
              else
                try {
                  var n = e.getAttribute(l),
                    a = null !== n && "false" !== n,
                    o = (t.get(e) || 0) + 1,
                    i = (u.get(e) || 0) + 1;
                  (t.set(e, o),
                    u.set(e, i),
                    c.push(e),
                    1 === o && a && r.set(e, !0),
                    1 === i && e.setAttribute(s, "true"),
                    a || e.setAttribute(l, "true"));
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t);
                }
            });
        };
        return (
          h(i),
          f.clear(),
          a++,
          function () {
            (c.forEach(function (e) {
              var n = t.get(e) - 1,
                a = u.get(e) - 1;
              (t.set(e, n),
                u.set(e, a),
                n || (r.has(e) || e.removeAttribute(l), r.delete(e)),
                a || e.removeAttribute(s));
            }),
              --a || ((t = new WeakMap()), (t = new WeakMap()), (r = new WeakMap()), (n = {})));
          }
        );
      },
      s = function (e, t, r) {
        void 0 === r && (r = "data-aria-hidden");
        var n = Array.from(Array.isArray(e) ? e : [e]),
          a = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
        return a
          ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live], script"))), i(n, a, r, "aria-hidden"))
          : function () {
              return null;
            };
      };
    e.s(["hideOthers", () => s]);
  },
  266356,
  (e) => {
    "use strict";
    let t = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
      r = function () {
        for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (a && (a += " "), (a += n));
                } else for (n in t) t[n] && (a && (a += " "), (a += n));
              return a;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      };
    e.s(
      [
        "cva",
        0,
        (e, n) => (a) => {
          var o;
          if ((null == n ? void 0 : n.variants) == null)
            return r(e, null == a ? void 0 : a.class, null == a ? void 0 : a.className);
          let { variants: i, defaultVariants: s } = n,
            l = Object.keys(i).map((e) => {
              let r = null == a ? void 0 : a[e],
                n = null == s ? void 0 : s[e];
              if (null === r) return null;
              let o = t(r) || t(n);
              return i[e][o];
            }),
            d =
              a &&
              Object.entries(a).reduce((e, t) => {
                let [r, n] = t;
                return (void 0 === n || (e[r] = n), e);
              }, {});
          return r(
            e,
            l,
            null == n || null == (o = n.compoundVariants)
              ? void 0
              : o.reduce((e, t) => {
                  let { class: r, className: n, ...a } = t;
                  return Object.entries(a).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...s, ...d }[t]) : { ...s, ...d }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == a ? void 0 : a.class,
            null == a ? void 0 : a.className,
          );
        },
      ],
      266356,
    );
  },
  740665,
  (e) => {
    "use strict";
    var t = e.i(770572);
    e.i(802252);
    var r = t.createContext(void 0);
    function n(e) {
      let n = t.useContext(r);
      return e || n || "ltr";
    }
    e.s(["useDirection", () => n]);
  },
  210138,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = e.i(205020),
      n = e.i(164265),
      a = e.i(802252);
    function o(e) {
      var r;
      let o,
        i =
          ((r = e),
          ((o = t.forwardRef((e, r) => {
            let { children: a, ...o } = e;
            if (t.isValidElement(a)) {
              var i;
              let e,
                s,
                l =
                  ((i = a),
                  (s =
                    (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? i.ref
                    : (s =
                          (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                          "isReactWarning" in e &&
                          e.isReactWarning)
                      ? i.props.ref
                      : i.props.ref || i.ref),
                d = (function (e, t) {
                  let r = { ...t };
                  for (let n in t) {
                    let a = e[n],
                      o = t[n];
                    /^on[A-Z]/.test(n)
                      ? a && o
                        ? (r[n] = (...e) => {
                            let t = o(...e);
                            return (a(...e), t);
                          })
                        : a && (r[n] = a)
                      : "style" === n
                        ? (r[n] = { ...a, ...o })
                        : "className" === n && (r[n] = [a, o].filter(Boolean).join(" "));
                  }
                  return { ...e, ...r };
                })(o, a.props);
              return (a.type !== t.Fragment && (d.ref = r ? (0, n.composeRefs)(r, l) : l), t.cloneElement(a, d));
            }
            return t.Children.count(a) > 1 ? t.Children.only(null) : null;
          })).displayName = `${r}.SlotClone`),
          o),
        l = t.forwardRef((e, r) => {
          let { children: n, ...o } = e,
            l = t.Children.toArray(n),
            d = l.find(s);
          if (d) {
            let e = d.props.children,
              n = l.map((r) =>
                r !== d
                  ? r
                  : t.Children.count(e) > 1
                    ? t.Children.only(null)
                    : t.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, a.jsx)(i, { ...o, ref: r, children: t.isValidElement(e) ? t.cloneElement(e, void 0, n) : null });
          }
          return (0, a.jsx)(i, { ...o, ref: r, children: n });
        });
      return ((l.displayName = `${e}.Slot`), l);
    }
    var i = Symbol("radix.slottable");
    function s(e) {
      return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === i;
    }
    function l(e) {
      let i = e + "CollectionProvider",
        [s, l] = (0, r.createContextScope)(i),
        [d, u] = s(i, { collectionRef: { current: null }, itemMap: new Map() }),
        c = (e) => {
          let { scope: r, children: n } = e,
            o = t.default.useRef(null),
            i = t.default.useRef(new Map()).current;
          return (0, a.jsx)(d, { scope: r, itemMap: i, collectionRef: o, children: n });
        };
      c.displayName = i;
      let f = e + "CollectionSlot",
        p = o(f),
        m = t.default.forwardRef((e, t) => {
          let { scope: r, children: o } = e,
            i = u(f, r),
            s = (0, n.useComposedRefs)(t, i.collectionRef);
          return (0, a.jsx)(p, { ref: s, children: o });
        });
      m.displayName = f;
      let h = e + "CollectionItemSlot",
        v = "data-radix-collection-item",
        g = o(h),
        y = t.default.forwardRef((e, r) => {
          let { scope: o, children: i, ...s } = e,
            l = t.default.useRef(null),
            d = (0, n.useComposedRefs)(r, l),
            c = u(h, o);
          return (
            t.default.useEffect(() => (c.itemMap.set(l, { ref: l, ...s }), () => void c.itemMap.delete(l))),
            (0, a.jsx)(g, { ...{ [v]: "" }, ref: d, children: i })
          );
        });
      return (
        (y.displayName = h),
        [
          { Provider: c, Slot: m, ItemSlot: y },
          function (r) {
            let n = u(e + "CollectionConsumer", r);
            return t.default.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${v}]`));
              return Array.from(n.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
            }, [n.collectionRef, n.itemMap]);
          },
          l,
        ]
      );
    }
    var d = new WeakMap();
    function u(e, t) {
      var r, n;
      let a, o, i;
      if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
      let s = ((r = e), (n = t), (a = r.length), (i = (o = c(n)) >= 0 ? o : a + o) < 0 || i >= a ? -1 : i);
      return -1 === s ? void 0 : e[s];
    }
    function c(e) {
      return e != e || 0 === e ? 0 : Math.trunc(e);
    }
    ((class e extends Map {
      #e;
      constructor(e) {
        (super(e), (this.#e = [...super.keys()]), d.set(this, !0));
      }
      set(e, t) {
        return (
          d.get(this) && (this.has(e) ? (this.#e[this.#e.indexOf(e)] = e) : this.#e.push(e)),
          super.set(e, t),
          this
        );
      }
      insert(e, t, r) {
        let n,
          a = this.has(t),
          o = this.#e.length,
          i = c(e),
          s = i >= 0 ? i : o + i,
          l = s < 0 || s >= o ? -1 : s;
        if (l === this.size || (a && l === this.size - 1) || -1 === l) return (this.set(t, r), this);
        let d = this.size + +!a;
        i < 0 && s++;
        let u = [...this.#e],
          f = !1;
        for (let e = s; e < d; e++)
          if (s === e) {
            let o = u[e];
            (u[e] === t && (o = u[e + 1]), a && this.delete(t), (n = this.get(o)), this.set(t, r));
          } else {
            f || u[e - 1] !== t || (f = !0);
            let r = u[f ? e : e - 1],
              a = n;
            ((n = this.get(r)), this.delete(r), this.set(r, a));
          }
        return this;
      }
      with(t, r, n) {
        let a = new e(this);
        return (a.insert(t, r, n), a);
      }
      before(e) {
        let t = this.#e.indexOf(e) - 1;
        if (!(t < 0)) return this.entryAt(t);
      }
      setBefore(e, t, r) {
        let n = this.#e.indexOf(e);
        return -1 === n ? this : this.insert(n, t, r);
      }
      after(e) {
        let t = this.#e.indexOf(e);
        if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t);
      }
      setAfter(e, t, r) {
        let n = this.#e.indexOf(e);
        return -1 === n ? this : this.insert(n + 1, t, r);
      }
      first() {
        return this.entryAt(0);
      }
      last() {
        return this.entryAt(-1);
      }
      clear() {
        return ((this.#e = []), super.clear());
      }
      delete(e) {
        let t = super.delete(e);
        return (t && this.#e.splice(this.#e.indexOf(e), 1), t);
      }
      deleteAt(e) {
        let t = this.keyAt(e);
        return void 0 !== t && this.delete(t);
      }
      at(e) {
        let t = u(this.#e, e);
        if (void 0 !== t) return this.get(t);
      }
      entryAt(e) {
        let t = u(this.#e, e);
        if (void 0 !== t) return [t, this.get(t)];
      }
      indexOf(e) {
        return this.#e.indexOf(e);
      }
      keyAt(e) {
        return u(this.#e, e);
      }
      from(e, t) {
        let r = this.indexOf(e);
        if (-1 === r) return;
        let n = r + t;
        return (n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n));
      }
      keyFrom(e, t) {
        let r = this.indexOf(e);
        if (-1 === r) return;
        let n = r + t;
        return (n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n));
      }
      find(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return n;
          r++;
        }
      }
      findIndex(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return r;
          r++;
        }
        return -1;
      }
      filter(t, r) {
        let n = [],
          a = 0;
        for (let e of this) (Reflect.apply(t, r, [e, a, this]) && n.push(e), a++);
        return new e(n);
      }
      map(t, r) {
        let n = [],
          a = 0;
        for (let e of this) (n.push([e[0], Reflect.apply(t, r, [e, a, this])]), a++);
        return new e(n);
      }
      reduce(...e) {
        let [t, r] = e,
          n = 0,
          a = r ?? this.at(0);
        for (let r of this) ((a = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [a, r, n, this])), n++);
        return a;
      }
      reduceRight(...e) {
        let [t, r] = e,
          n = r ?? this.at(-1);
        for (let r = this.size - 1; r >= 0; r--) {
          let a = this.at(r);
          n = r === this.size - 1 && 1 === e.length ? a : Reflect.apply(t, this, [n, a, r, this]);
        }
        return n;
      }
      toSorted(t) {
        return new e([...this.entries()].sort(t));
      }
      toReversed() {
        let t = new e();
        for (let e = this.size - 1; e >= 0; e--) {
          let r = this.keyAt(e),
            n = this.get(r);
          t.set(r, n);
        }
        return t;
      }
      toSpliced(...t) {
        let r = [...this.entries()];
        return (r.splice(...t), new e(r));
      }
      slice(t, r) {
        let n = new e(),
          a = this.size - 1;
        if (void 0 === t) return n;
        (t < 0 && (t += this.size), void 0 !== r && r > 0 && (a = r - 1));
        for (let e = t; e <= a; e++) {
          let t = this.keyAt(e),
            r = this.get(t);
          n.set(t, r);
        }
        return n;
      }
      every(e, t) {
        let r = 0;
        for (let n of this) {
          if (!Reflect.apply(e, t, [n, r, this])) return !1;
          r++;
        }
        return !0;
      }
      some(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return !0;
          r++;
        }
        return !1;
      }
    }),
      e.s(["createCollection", () => l], 210138));
  },
  319256,
  (e) => {
    "use strict";
    var t = e.i(770572);
    function r(e) {
      let r = t.useRef({ value: e, previous: e });
      return t.useMemo(
        () => (
          r.current.value !== e && ((r.current.previous = r.current.value), (r.current.value = e)),
          r.current.previous
        ),
        [e],
      );
    }
    e.s(["usePrevious", () => r]);
  },
  398849,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = e.i(940188),
      n = e.i(802252),
      a = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      }),
      o = t.forwardRef((e, t) => (0, n.jsx)(r.Primitive.span, { ...e, ref: t, style: { ...a, ...e.style } }));
    ((o.displayName = "VisuallyHidden"), e.s(["Root", () => o, "VISUALLY_HIDDEN_STYLES", () => a]));
  },
  770367,
  (e) => {
    "use strict";
    var t = e.i(770572);
    let r = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => (r ? r.toUpperCase() : t.toLowerCase()));
        return t.charAt(0).toUpperCase() + t.slice(1);
      },
      n = (...e) =>
        e
          .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
          .join(" ")
          .trim();
    var a = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let o = (0, t.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: r = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: i,
            className: s = "",
            children: l,
            iconNode: d,
            ...u
          },
          c,
        ) =>
          (0, t.createElement)(
            "svg",
            {
              ref: c,
              ...a,
              width: r,
              height: r,
              stroke: e,
              strokeWidth: i ? (24 * Number(o)) / Number(r) : o,
              className: n("lucide", s),
              ...(!l &&
                !((e) => {
                  for (let t in e) if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                })(u) && { "aria-hidden": "true" }),
              ...u,
            },
            [...d.map(([e, r]) => (0, t.createElement)(e, r)), ...(Array.isArray(l) ? l : [l])],
          ),
      ),
      i = (e, a) => {
        let i = (0, t.forwardRef)(({ className: i, ...s }, l) =>
          (0, t.createElement)(o, {
            ref: l,
            iconNode: a,
            className: n(
              `lucide-${r(e)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${e}`,
              i,
            ),
            ...s,
          }),
        );
        return ((i.displayName = r(e)), i);
      };
    e.s(["default", () => i], 770367);
  },
  884634,
  (e) => {
    "use strict";
    let t = (0, e.i(770367).default)("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
    e.s(["ChevronDown", () => t], 884634);
  },
  16838,
  310216,
  (e) => {
    "use strict";
    var t = e.i(802252),
      r = e.i(770572),
      n = e.i(164265),
      a = Symbol.for("react.lazy"),
      o = r[" use ".trim().toString()];
    function i(e) {
      var t;
      return (
        null != e &&
        "object" == typeof e &&
        "$$typeof" in e &&
        e.$$typeof === a &&
        "_payload" in e &&
        "object" == typeof (t = e._payload) &&
        null !== t &&
        "then" in t
      );
    }
    function s(e) {
      var a;
      let s,
        l =
          ((a = e),
          ((s = r.forwardRef((e, t) => {
            let { children: a, ...s } = e;
            if ((i(a) && "function" == typeof o && (a = o(a._payload)), r.isValidElement(a))) {
              var l;
              let e,
                o,
                i =
                  ((l = a),
                  (o =
                    (e = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? l.ref
                    : (o =
                          (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) &&
                          "isReactWarning" in e &&
                          e.isReactWarning)
                      ? l.props.ref
                      : l.props.ref || l.ref),
                d = (function (e, t) {
                  let r = { ...t };
                  for (let n in t) {
                    let a = e[n],
                      o = t[n];
                    /^on[A-Z]/.test(n)
                      ? a && o
                        ? (r[n] = (...e) => {
                            let t = o(...e);
                            return (a(...e), t);
                          })
                        : a && (r[n] = a)
                      : "style" === n
                        ? (r[n] = { ...a, ...o })
                        : "className" === n && (r[n] = [a, o].filter(Boolean).join(" "));
                  }
                  return { ...e, ...r };
                })(s, a.props);
              return (a.type !== r.Fragment && (d.ref = t ? (0, n.composeRefs)(t, i) : i), r.cloneElement(a, d));
            }
            return r.Children.count(a) > 1 ? r.Children.only(null) : null;
          })).displayName = `${a}.SlotClone`),
          s),
        d = r.forwardRef((e, n) => {
          let { children: a, ...s } = e;
          i(a) && "function" == typeof o && (a = o(a._payload));
          let d = r.Children.toArray(a),
            c = d.find(u);
          if (c) {
            let e = c.props.children,
              a = d.map((t) =>
                t !== c
                  ? t
                  : r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, t.jsx)(l, { ...s, ref: n, children: r.isValidElement(e) ? r.cloneElement(e, void 0, a) : null });
          }
          return (0, t.jsx)(l, { ...s, ref: n, children: a });
        });
      return ((d.displayName = `${e}.Slot`), d);
    }
    var l = s("Slot"),
      d = Symbol("radix.slottable");
    function u(e) {
      return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d;
    }
    (e.s(["Slot", () => l, "createSlot", () => s], 310216), e.i(266356));
    let c = Error("Cannot find module '@/lib/utils'");
    throw ((c.code = "MODULE_NOT_FOUND"), c);
  },
  451983,
  418655,
  (e) => {
    "use strict";
    let t;
    var r = e.i(802252),
      n = e.i(770572),
      a = e.i(462406),
      o = e.i(164265),
      i = e.i(205020),
      s = e.i(408200),
      l = e.i(286002),
      d = e.i(391778),
      u = e.i(409739),
      c = e.i(940188),
      f = n.forwardRef((e, t) => {
        let { children: n, width: a = 10, height: o = 5, ...i } = e;
        return (0, r.jsx)(c.Primitive.svg, {
          ...i,
          ref: t,
          width: a,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? n : (0, r.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
    f.displayName = "Arrow";
    var p = e.i(766411),
      m = e.i(296915),
      h = "Popper",
      [v, g] = (0, i.createContextScope)(h),
      [y, b] = v(h),
      w = (e) => {
        let { __scopePopper: t, children: a } = e,
          [o, i] = n.useState(null);
        return (0, r.jsx)(y, { scope: t, anchor: o, onAnchorChange: i, children: a });
      };
    w.displayName = h;
    var x = "PopperAnchor",
      E = n.forwardRef((e, t) => {
        let { __scopePopper: a, virtualRef: i, ...s } = e,
          l = b(x, a),
          d = n.useRef(null),
          u = (0, o.useComposedRefs)(t, d),
          f = n.useRef(null);
        return (
          n.useEffect(() => {
            let e = f.current;
            ((f.current = i?.current || d.current), e !== f.current && l.onAnchorChange(f.current));
          }),
          i ? null : (0, r.jsx)(c.Primitive.div, { ...s, ref: u })
        );
      });
    E.displayName = x;
    var C = "PopperContent",
      [R, k] = v(C),
      S = n.forwardRef((e, t) => {
        let {
            __scopePopper: a,
            side: i = "bottom",
            sideOffset: s = 0,
            align: l = "center",
            alignOffset: f = 0,
            arrowPadding: h = 0,
            avoidCollisions: v = !0,
            collisionBoundary: g = [],
            collisionPadding: y = 0,
            sticky: w = "partial",
            hideWhenDetached: x = !1,
            updatePositionStrategy: E = "optimized",
            onPlaced: k,
            ...S
          } = e,
          N = b(C, a),
          [A, T] = n.useState(null),
          j = (0, o.useComposedRefs)(t, (e) => T(e)),
          [O, _] = n.useState(null),
          D = (function (e) {
            let [t, r] = n.useState(void 0);
            return (
              (0, m.useLayoutEffect)(() => {
                if (e) {
                  r({ width: e.offsetWidth, height: e.offsetHeight });
                  let t = new ResizeObserver((t) => {
                    let n, a;
                    if (!Array.isArray(t) || !t.length) return;
                    let o = t[0];
                    if ("borderBoxSize" in o) {
                      let e = o.borderBoxSize,
                        t = Array.isArray(e) ? e[0] : e;
                      ((n = t.inlineSize), (a = t.blockSize));
                    } else ((n = e.offsetWidth), (a = e.offsetHeight));
                    r({ width: n, height: a });
                  });
                  return (t.observe(e, { box: "border-box" }), () => t.unobserve(e));
                }
                r(void 0);
              }, [e]),
              t
            );
          })(O),
          I = D?.width ?? 0,
          B = D?.height ?? 0,
          $ = "number" == typeof y ? y : { top: 0, right: 0, bottom: 0, left: 0, ...y },
          z = Array.isArray(g) ? g : [g],
          W = z.length > 0,
          F = { padding: $, boundary: z.filter(M), altBoundary: W },
          {
            refs: Y,
            floatingStyles: H,
            placement: U,
            isPositioned: V,
            middlewareData: X,
          } = (0, d.useFloating)({
            strategy: "fixed",
            placement: i + ("center" !== l ? "-" + l : ""),
            whileElementsMounted: (...e) => (0, u.autoUpdate)(...e, { animationFrame: "always" === E }),
            elements: { reference: N.anchor },
            middleware: [
              (0, d.offset)({ mainAxis: s + B, alignmentAxis: f }),
              v &&
                (0, d.shift)({
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: "partial" === w ? (0, d.limitShift)() : void 0,
                  ...F,
                }),
              v && (0, d.flip)({ ...F }),
              (0, d.size)({
                ...F,
                apply: ({ elements: e, rects: t, availableWidth: r, availableHeight: n }) => {
                  let { width: a, height: o } = t.reference,
                    i = e.floating.style;
                  (i.setProperty("--radix-popper-available-width", `${r}px`),
                    i.setProperty("--radix-popper-available-height", `${n}px`),
                    i.setProperty("--radix-popper-anchor-width", `${a}px`),
                    i.setProperty("--radix-popper-anchor-height", `${o}px`));
                },
              }),
              O && (0, d.arrow)({ element: O, padding: h }),
              L({ arrowWidth: I, arrowHeight: B }),
              x && (0, d.hide)({ strategy: "referenceHidden", ...F }),
            ],
          }),
          [K, Z] = P(U),
          q = (0, p.useCallbackRef)(k);
        (0, m.useLayoutEffect)(() => {
          V && q?.();
        }, [V, q]);
        let G = X.arrow?.x,
          J = X.arrow?.y,
          Q = X.arrow?.centerOffset !== 0,
          [ee, et] = n.useState();
        return (
          (0, m.useLayoutEffect)(() => {
            A && et(window.getComputedStyle(A).zIndex);
          }, [A]),
          (0, r.jsx)("div", {
            ref: Y.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...H,
              transform: V ? H.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: ee,
              "--radix-popper-transform-origin": [X.transformOrigin?.x, X.transformOrigin?.y].join(" "),
              ...(X.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
            },
            dir: e.dir,
            children: (0, r.jsx)(R, {
              scope: a,
              placedSide: K,
              onArrowChange: _,
              arrowX: G,
              arrowY: J,
              shouldHideArrow: Q,
              children: (0, r.jsx)(c.Primitive.div, {
                "data-side": K,
                "data-align": Z,
                ...S,
                ref: j,
                style: { ...S.style, animation: V ? void 0 : "none" },
              }),
            }),
          })
        );
      });
    S.displayName = C;
    var N = "PopperArrow",
      A = { top: "bottom", right: "left", bottom: "top", left: "right" },
      T = n.forwardRef(function (e, t) {
        let { __scopePopper: n, ...a } = e,
          o = k(N, n),
          i = A[o.placedSide];
        return (0, r.jsx)("span", {
          ref: o.onArrowChange,
          style: {
            position: "absolute",
            left: o.arrowX,
            top: o.arrowY,
            [i]: 0,
            transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)",
            }[o.placedSide],
            visibility: o.shouldHideArrow ? "hidden" : void 0,
          },
          children: (0, r.jsx)(f, { ...a, ref: t, style: { ...a.style, display: "block" } }),
        });
      });
    function M(e) {
      return null !== e;
    }
    T.displayName = N;
    var L = (e) => ({
      name: "transformOrigin",
      options: e,
      fn(t) {
        let { placement: r, rects: n, middlewareData: a } = t,
          o = a.arrow?.centerOffset !== 0,
          i = o ? 0 : e.arrowWidth,
          s = o ? 0 : e.arrowHeight,
          [l, d] = P(r),
          u = { start: "0%", center: "50%", end: "100%" }[d],
          c = (a.arrow?.x ?? 0) + i / 2,
          f = (a.arrow?.y ?? 0) + s / 2,
          p = "",
          m = "";
        return (
          "bottom" === l
            ? ((p = o ? u : `${c}px`), (m = `${-s}px`))
            : "top" === l
              ? ((p = o ? u : `${c}px`), (m = `${n.floating.height + s}px`))
              : "right" === l
                ? ((p = `${-s}px`), (m = o ? u : `${f}px`))
                : "left" === l && ((p = `${n.floating.width + s}px`), (m = o ? u : `${f}px`)),
          { data: { x: p, y: m } }
        );
      },
    });
    function P(e) {
      let [t, r = "center"] = e.split("-");
      return [t, r];
    }
    (e.s(
      ["Anchor", () => E, "Arrow", () => T, "Content", () => S, "Root", () => w, "createPopperScope", () => g],
      418655,
    ),
      e.i(264874));
    var j = e.i(763743),
      O = Symbol("radix.slottable"),
      _ = e.i(696731),
      D = e.i(398849),
      [I, B] = (0, i.createContextScope)("Tooltip", [g]),
      $ = g(),
      z = "TooltipProvider",
      W = "tooltip.open",
      [F, Y] = I(z),
      H = "Tooltip",
      [U, V] = I(H),
      X = "TooltipTrigger";
    n.forwardRef((e, t) => {
      let { __scopeTooltip: i, ...s } = e,
        l = V(X, i),
        d = Y(X, i),
        u = $(i),
        f = n.useRef(null),
        p = (0, o.useComposedRefs)(t, f, l.onTriggerChange),
        m = n.useRef(!1),
        h = n.useRef(!1),
        v = n.useCallback(() => (m.current = !1), []);
      return (
        n.useEffect(() => () => document.removeEventListener("pointerup", v), [v]),
        (0, r.jsx)(E, {
          asChild: !0,
          ...u,
          children: (0, r.jsx)(c.Primitive.button, {
            "aria-describedby": l.open ? l.contentId : void 0,
            "data-state": l.stateAttribute,
            ...s,
            ref: p,
            onPointerMove: (0, a.composeEventHandlers)(e.onPointerMove, (e) => {
              "touch" !== e.pointerType &&
                (h.current || d.isPointerInTransitRef.current || (l.onTriggerEnter(), (h.current = !0)));
            }),
            onPointerLeave: (0, a.composeEventHandlers)(e.onPointerLeave, () => {
              (l.onTriggerLeave(), (h.current = !1));
            }),
            onPointerDown: (0, a.composeEventHandlers)(e.onPointerDown, () => {
              (l.open && l.onClose(), (m.current = !0), document.addEventListener("pointerup", v, { once: !0 }));
            }),
            onFocus: (0, a.composeEventHandlers)(e.onFocus, () => {
              m.current || l.onOpen();
            }),
            onBlur: (0, a.composeEventHandlers)(e.onBlur, l.onClose),
            onClick: (0, a.composeEventHandlers)(e.onClick, l.onClose),
          }),
        })
      );
    }).displayName = X;
    var [K, Z] = I("TooltipPortal", { forceMount: void 0 }),
      q = "TooltipContent",
      G = n.forwardRef((e, t) => {
        let n = Z(q, e.__scopeTooltip),
          { forceMount: a = n.forceMount, side: o = "top", ...i } = e,
          s = V(q, e.__scopeTooltip);
        return (0, r.jsx)(j.Presence, {
          present: a || s.open,
          children: s.disableHoverableContent
            ? (0, r.jsx)(er, { side: o, ...i, ref: t })
            : (0, r.jsx)(J, { side: o, ...i, ref: t }),
        });
      }),
      J = n.forwardRef((e, t) => {
        let a = V(q, e.__scopeTooltip),
          i = Y(q, e.__scopeTooltip),
          s = n.useRef(null),
          l = (0, o.useComposedRefs)(t, s),
          [d, u] = n.useState(null),
          { trigger: c, onClose: f } = a,
          p = s.current,
          { onPointerInTransitChange: m } = i,
          h = n.useCallback(() => {
            (u(null), m(!1));
          }, [m]),
          v = n.useCallback(
            (e, t) => {
              let r,
                n = e.currentTarget,
                a = { x: e.clientX, y: e.clientY },
                o = (function (e, t) {
                  let r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    a = Math.abs(t.right - e.x),
                    o = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, a, o)) {
                    case o:
                      return "left";
                    case a:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw Error("unreachable");
                  }
                })(a, n.getBoundingClientRect());
              (u(
                ((r = [
                  ...(function (e, t, r = 5) {
                    let n = [];
                    switch (t) {
                      case "top":
                        n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
                        break;
                      case "bottom":
                        n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
                        break;
                      case "left":
                        n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
                        break;
                      case "right":
                        n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
                    }
                    return n;
                  })(a, o),
                  ...(function (e) {
                    let { top: t, right: r, bottom: n, left: a } = e;
                    return [
                      { x: a, y: t },
                      { x: r, y: t },
                      { x: r, y: n },
                      { x: a, y: n },
                    ];
                  })(t.getBoundingClientRect()),
                ].slice()).sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y))),
                (function (e) {
                  if (e.length <= 1) return e.slice();
                  let t = [];
                  for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    for (; t.length >= 2; ) {
                      let e = t[t.length - 1],
                        r = t[t.length - 2];
                      if ((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();
                      else break;
                    }
                    t.push(n);
                  }
                  t.pop();
                  let r = [];
                  for (let t = e.length - 1; t >= 0; t--) {
                    let n = e[t];
                    for (; r.length >= 2; ) {
                      let e = r[r.length - 1],
                        t = r[r.length - 2];
                      if ((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x)) r.pop();
                      else break;
                    }
                    r.push(n);
                  }
                  return (r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y)
                    ? t
                    : t.concat(r);
                })(r)),
              ),
                m(!0));
            },
            [m],
          );
        return (
          n.useEffect(() => () => h(), [h]),
          n.useEffect(() => {
            if (c && p) {
              let e = (e) => v(e, p),
                t = (e) => v(e, c);
              return (
                c.addEventListener("pointerleave", e),
                p.addEventListener("pointerleave", t),
                () => {
                  (c.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t));
                }
              );
            }
          }, [c, p, v, h]),
          n.useEffect(() => {
            if (d) {
              let e = (e) => {
                let t = e.target,
                  r = { x: e.clientX, y: e.clientY },
                  n = c?.contains(t) || p?.contains(t),
                  a = !(function (e, t) {
                    let { x: r, y: n } = e,
                      a = !1;
                    for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                      let i = t[e],
                        s = t[o],
                        l = i.x,
                        d = i.y,
                        u = s.x,
                        c = s.y;
                      d > n != c > n && r < ((u - l) * (n - d)) / (c - d) + l && (a = !a);
                    }
                    return a;
                  })(r, d);
                n ? h() : a && (h(), f());
              };
              return (
                document.addEventListener("pointermove", e),
                () => document.removeEventListener("pointermove", e)
              );
            }
          }, [c, p, d, f, h]),
          (0, r.jsx)(er, { ...e, ref: l })
        );
      }),
      [Q, ee] = I(H, { isInside: !1 }),
      et =
        (((t = ({ children: e }) => (0, r.jsx)(r.Fragment, { children: e })).displayName = "TooltipContent.Slottable"),
        (t.__radixId = O),
        t),
      er = n.forwardRef((e, t) => {
        let { __scopeTooltip: a, children: o, "aria-label": i, onEscapeKeyDown: l, onPointerDownOutside: d, ...u } = e,
          c = V(q, a),
          f = $(a),
          { onClose: p } = c;
        return (
          n.useEffect(() => (document.addEventListener(W, p), () => document.removeEventListener(W, p)), [p]),
          n.useEffect(() => {
            if (c.trigger) {
              let e = (e) => {
                let t = e.target;
                t?.contains(c.trigger) && p();
              };
              return (
                window.addEventListener("scroll", e, { capture: !0 }),
                () => window.removeEventListener("scroll", e, { capture: !0 })
              );
            }
          }, [c.trigger, p]),
          (0, r.jsx)(s.DismissableLayer, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: l,
            onPointerDownOutside: d,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: p,
            children: (0, r.jsxs)(S, {
              "data-state": c.stateAttribute,
              ...f,
              ...u,
              ref: t,
              style: {
                ...u.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
              },
              children: [
                (0, r.jsx)(et, { children: o }),
                (0, r.jsx)(Q, {
                  scope: a,
                  isInside: !0,
                  children: (0, r.jsx)(D.Root, { id: c.contentId, role: "tooltip", children: i || o }),
                }),
              ],
            }),
          })
        );
      });
    G.displayName = q;
    var en = "TooltipArrow";
    n.forwardRef((e, t) => {
      let { __scopeTooltip: n, ...a } = e,
        o = $(n);
      return ee(en, n).isInside ? null : (0, r.jsx)(T, { ...o, ...a, ref: t });
    }).displayName = en;
    let ea = Error("Cannot find module '@/lib/utils'");
    throw ((ea.code = "MODULE_NOT_FOUND"), ea);
  },
  624244,
  (e) => {
    "use strict";
    var t = e.i(770572),
      r = e.i(614840);
    let n = Array(12).fill(0),
      a = ({ visible: e, className: r }) =>
        t.default.createElement(
          "div",
          { className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "), "data-visible": e },
          t.default.createElement(
            "div",
            { className: "sonner-spinner" },
            n.map((e, r) =>
              t.default.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` }),
            ),
          ),
        ),
      o = t.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        t.default.createElement("path", {
          fillRule: "evenodd",
          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
          clipRule: "evenodd",
        }),
      ),
      i = t.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        t.default.createElement("path", {
          fillRule: "evenodd",
          d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd",
        }),
      ),
      s = t.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        t.default.createElement("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
          clipRule: "evenodd",
        }),
      ),
      l = t.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        t.default.createElement("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
          clipRule: "evenodd",
        }),
      ),
      d = t.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        t.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        t.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ),
      u = 1,
      c = new (class {
        constructor() {
          ((this.subscribe = (e) => (
            this.subscribers.push(e),
            () => {
              let t = this.subscribers.indexOf(e);
              this.subscribers.splice(t, 1);
            }
          )),
            (this.publish = (e) => {
              this.subscribers.forEach((t) => t(e));
            }),
            (this.addToast = (e) => {
              (this.publish(e), (this.toasts = [...this.toasts, e]));
            }),
            (this.create = (e) => {
              var t;
              let { message: r, ...n } = e,
                a =
                  "number" == typeof (null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0
                    ? e.id
                    : u++,
                o = this.toasts.find((e) => e.id === a),
                i = void 0 === e.dismissible || e.dismissible;
              return (
                this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
                o
                  ? (this.toasts = this.toasts.map((t) =>
                      t.id === a
                        ? (this.publish({ ...t, ...e, id: a, title: r }),
                          { ...t, ...e, id: a, dismissible: i, title: r })
                        : t,
                    ))
                  : this.addToast({ title: r, ...n, dismissible: i, id: a }),
                a
              );
            }),
            (this.dismiss = (e) => (
              e
                ? (this.dismissedToasts.add(e),
                  requestAnimationFrame(() => this.subscribers.forEach((t) => t({ id: e, dismiss: !0 }))))
                : this.toasts.forEach((e) => {
                    this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
                  }),
              e
            )),
            (this.message = (e, t) => this.create({ ...t, message: e })),
            (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
            (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
            (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
            (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
            (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
            (this.promise = (e, r) => {
              let n, a;
              if (!r) return;
              void 0 !== r.loading &&
                (a = this.create({
                  ...r,
                  promise: e,
                  type: "loading",
                  message: r.loading,
                  description: "function" != typeof r.description ? r.description : void 0,
                }));
              let o = Promise.resolve(e instanceof Function ? e() : e),
                i = void 0 !== a,
                s = o
                  .then(async (e) => {
                    if (((n = ["resolve", e]), t.default.isValidElement(e)))
                      ((i = !1), this.create({ id: a, type: "default", message: e }));
                    else if (f(e) && !e.ok) {
                      i = !1;
                      let n = "function" == typeof r.error ? await r.error(`HTTP error! status: ${e.status}`) : r.error,
                        o =
                          "function" == typeof r.description
                            ? await r.description(`HTTP error! status: ${e.status}`)
                            : r.description,
                        s = "object" != typeof n || t.default.isValidElement(n) ? { message: n } : n;
                      this.create({ id: a, type: "error", description: o, ...s });
                    } else if (e instanceof Error) {
                      i = !1;
                      let n = "function" == typeof r.error ? await r.error(e) : r.error,
                        o = "function" == typeof r.description ? await r.description(e) : r.description,
                        s = "object" != typeof n || t.default.isValidElement(n) ? { message: n } : n;
                      this.create({ id: a, type: "error", description: o, ...s });
                    } else if (void 0 !== r.success) {
                      i = !1;
                      let n = "function" == typeof r.success ? await r.success(e) : r.success,
                        o = "function" == typeof r.description ? await r.description(e) : r.description,
                        s = "object" != typeof n || t.default.isValidElement(n) ? { message: n } : n;
                      this.create({ id: a, type: "success", description: o, ...s });
                    }
                  })
                  .catch(async (e) => {
                    if (((n = ["reject", e]), void 0 !== r.error)) {
                      i = !1;
                      let n = "function" == typeof r.error ? await r.error(e) : r.error,
                        o = "function" == typeof r.description ? await r.description(e) : r.description,
                        s = "object" != typeof n || t.default.isValidElement(n) ? { message: n } : n;
                      this.create({ id: a, type: "error", description: o, ...s });
                    }
                  })
                  .finally(() => {
                    (i && (this.dismiss(a), (a = void 0)), null == r.finally || r.finally.call(r));
                  }),
                l = () => new Promise((e, t) => s.then(() => ("reject" === n[0] ? t(n[1]) : e(n[1]))).catch(t));
              return "string" != typeof a && "number" != typeof a ? { unwrap: l } : Object.assign(a, { unwrap: l });
            }),
            (this.custom = (e, t) => {
              let r = (null == t ? void 0 : t.id) || u++;
              return (this.create({ jsx: e(r), id: r, ...t }), r);
            }),
            (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
            (this.subscribers = []),
            (this.toasts = []),
            (this.dismissedToasts = new Set()));
        }
      })(),
      f = (e) =>
        e &&
        "object" == typeof e &&
        "ok" in e &&
        "boolean" == typeof e.ok &&
        "status" in e &&
        "number" == typeof e.status,
      p = Object.assign(
        (e, t) => {
          let r = (null == t ? void 0 : t.id) || u++;
          return (c.addToast({ title: e, ...t, id: r }), r);
        },
        {
          success: c.success,
          info: c.info,
          warning: c.warning,
          error: c.error,
          custom: c.custom,
          message: c.message,
          promise: c.promise,
          dismiss: c.dismiss,
          loading: c.loading,
        },
        { getHistory: () => c.toasts, getToasts: () => c.getActiveToasts() },
      );
    function m(e) {
      return void 0 !== e.label;
    }
    function h(...e) {
      return e.filter(Boolean).join(" ");
    }
    !(function (e) {
      if (!e || "undefined" == typeof document) return;
      let t = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
      ((r.type = "text/css"),
        t.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e)));
    })(
      "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
    );
    let v = (e) => {
      var r, n, u, c, f, p, v, g, y, b, w, x, E;
      let {
          invert: C,
          toast: R,
          unstyled: k,
          interacting: S,
          setHeights: N,
          visibleToasts: A,
          heights: T,
          index: M,
          toasts: L,
          expanded: P,
          removeToast: j,
          defaultRichColors: O,
          closeButton: _,
          style: D,
          cancelButtonStyle: I,
          actionButtonStyle: B,
          className: $ = "",
          descriptionClassName: z = "",
          duration: W,
          position: F,
          gap: Y,
          expandByDefault: H,
          classNames: U,
          icons: V,
          closeButtonAriaLabel: X = "Close toast",
        } = e,
        [K, Z] = t.default.useState(null),
        [q, G] = t.default.useState(null),
        [J, Q] = t.default.useState(!1),
        [ee, et] = t.default.useState(!1),
        [er, en] = t.default.useState(!1),
        [ea, eo] = t.default.useState(!1),
        [ei, es] = t.default.useState(!1),
        [el, ed] = t.default.useState(0),
        [eu, ec] = t.default.useState(0),
        ef = t.default.useRef(R.duration || W || 4e3),
        ep = t.default.useRef(null),
        em = t.default.useRef(null),
        eh = 0 === M,
        ev = M + 1 <= A,
        eg = R.type,
        ey = !1 !== R.dismissible,
        eb = R.className || "",
        ew = R.descriptionClassName || "",
        ex = t.default.useMemo(() => T.findIndex((e) => e.toastId === R.id) || 0, [T, R.id]),
        eE = t.default.useMemo(() => {
          var e;
          return null != (e = R.closeButton) ? e : _;
        }, [R.closeButton, _]),
        eC = t.default.useMemo(() => R.duration || W || 4e3, [R.duration, W]),
        eR = t.default.useRef(0),
        ek = t.default.useRef(0),
        eS = t.default.useRef(0),
        eN = t.default.useRef(null),
        [eA, eT] = F.split("-"),
        eM = t.default.useMemo(() => T.reduce((e, t, r) => (r >= ex ? e : e + t.height), 0), [T, ex]),
        eL = (() => {
          let [e, r] = t.default.useState(document.hidden);
          return (
            t.default.useEffect(() => {
              let e = () => {
                r(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", e),
                () => window.removeEventListener("visibilitychange", e)
              );
            }, []),
            e
          );
        })(),
        eP = R.invert || C,
        ej = "loading" === eg;
      ((ek.current = t.default.useMemo(() => ex * Y + eM, [ex, eM])),
        t.default.useEffect(() => {
          ef.current = eC;
        }, [eC]),
        t.default.useEffect(() => {
          Q(!0);
        }, []),
        t.default.useEffect(() => {
          let e = em.current;
          if (e) {
            let t = e.getBoundingClientRect().height;
            return (
              ec(t),
              N((e) => [{ toastId: R.id, height: t, position: R.position }, ...e]),
              () => N((e) => e.filter((e) => e.toastId !== R.id))
            );
          }
        }, [N, R.id]),
        t.default.useLayoutEffect(() => {
          if (!J) return;
          let e = em.current,
            t = e.style.height;
          e.style.height = "auto";
          let r = e.getBoundingClientRect().height;
          ((e.style.height = t),
            ec(r),
            N((e) =>
              e.find((e) => e.toastId === R.id)
                ? e.map((e) => (e.toastId === R.id ? { ...e, height: r } : e))
                : [{ toastId: R.id, height: r, position: R.position }, ...e],
            ));
        }, [J, R.title, R.description, N, R.id, R.jsx, R.action, R.cancel]));
      let eO = t.default.useCallback(() => {
        (et(!0),
          ed(ek.current),
          N((e) => e.filter((e) => e.toastId !== R.id)),
          setTimeout(() => {
            j(R);
          }, 200));
      }, [R, j, N, ek]);
      (t.default.useEffect(() => {
        let e;
        if ((!R.promise || "loading" !== eg) && R.duration !== 1 / 0 && "loading" !== R.type) {
          if (P || S || eL) {
            if (eS.current < eR.current) {
              let e = new Date().getTime() - eR.current;
              ef.current = ef.current - e;
            }
            eS.current = new Date().getTime();
          } else
            ef.current !== 1 / 0 &&
              ((eR.current = new Date().getTime()),
              (e = setTimeout(() => {
                (null == R.onAutoClose || R.onAutoClose.call(R, R), eO());
              }, ef.current)));
          return () => clearTimeout(e);
        }
      }, [P, S, R, eg, eL, eO]),
        t.default.useEffect(() => {
          R.delete && (eO(), null == R.onDismiss || R.onDismiss.call(R, R));
        }, [eO, R.delete]));
      let e_ =
        R.icon ||
        (null == V ? void 0 : V[eg]) ||
        ((e) => {
          switch (e) {
            case "success":
              return o;
            case "info":
              return s;
            case "warning":
              return i;
            case "error":
              return l;
            default:
              return null;
          }
        })(eg);
      return t.default.createElement(
        "li",
        {
          tabIndex: 0,
          ref: em,
          className: h(
            $,
            eb,
            null == U ? void 0 : U.toast,
            null == R || null == (r = R.classNames) ? void 0 : r.toast,
            null == U ? void 0 : U.default,
            null == U ? void 0 : U[eg],
            null == R || null == (n = R.classNames) ? void 0 : n[eg],
          ),
          "data-sonner-toast": "",
          "data-rich-colors": null != (b = R.richColors) ? b : O,
          "data-styled": !(R.jsx || R.unstyled || k),
          "data-mounted": J,
          "data-promise": !!R.promise,
          "data-swiped": ei,
          "data-removed": ee,
          "data-visible": ev,
          "data-y-position": eA,
          "data-x-position": eT,
          "data-index": M,
          "data-front": eh,
          "data-swiping": er,
          "data-dismissible": ey,
          "data-type": eg,
          "data-invert": eP,
          "data-swipe-out": ea,
          "data-swipe-direction": q,
          "data-expanded": !!(P || (H && J)),
          "data-testid": R.testId,
          style: {
            "--index": M,
            "--toasts-before": M,
            "--z-index": L.length - M,
            "--offset": `${ee ? el : ek.current}px`,
            "--initial-height": H ? "auto" : `${eu}px`,
            ...D,
            ...R.style,
          },
          onDragEnd: () => {
            (en(!1), Z(null), (eN.current = null));
          },
          onPointerDown: (e) => {
            2 === e.button ||
              ej ||
              !ey ||
              ((ep.current = new Date()),
              ed(ek.current),
              e.target.setPointerCapture(e.pointerId),
              "BUTTON" !== e.target.tagName && (en(!0), (eN.current = { x: e.clientX, y: e.clientY })));
          },
          onPointerUp: () => {
            var e, t, r, n, a;
            if (ea || !ey) return;
            eN.current = null;
            let o = Number(
                (null == (e = em.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) ||
                  0,
              ),
              i = Number(
                (null == (t = em.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) ||
                  0,
              ),
              s = new Date().getTime() - (null == (r = ep.current) ? void 0 : r.getTime()),
              l = "x" === K ? o : i,
              d = Math.abs(l) / s;
            if (Math.abs(l) >= 45 || d > 0.11) {
              (ed(ek.current),
                null == R.onDismiss || R.onDismiss.call(R, R),
                "x" === K ? G(o > 0 ? "right" : "left") : G(i > 0 ? "down" : "up"),
                eO(),
                eo(!0));
              return;
            }
            (null == (n = em.current) || n.style.setProperty("--swipe-amount-x", "0px"),
              null == (a = em.current) || a.style.setProperty("--swipe-amount-y", "0px"),
              es(!1),
              en(!1),
              Z(null));
          },
          onPointerMove: (t) => {
            var r, n, a, o;
            if (!eN.current || !ey || (null == (r = window.getSelection()) ? void 0 : r.toString().length) > 0) return;
            let i = t.clientY - eN.current.y,
              s = t.clientX - eN.current.x,
              l =
                null != (o = e.swipeDirections)
                  ? o
                  : (function (e) {
                      let [t, r] = e.split("-"),
                        n = [];
                      return (t && n.push(t), r && n.push(r), n);
                    })(F);
            !K && (Math.abs(s) > 1 || Math.abs(i) > 1) && Z(Math.abs(s) > Math.abs(i) ? "x" : "y");
            let d = { x: 0, y: 0 },
              u = (e) => 1 / (1.5 + Math.abs(e) / 20);
            if ("y" === K) {
              if (l.includes("top") || l.includes("bottom"))
                if ((l.includes("top") && i < 0) || (l.includes("bottom") && i > 0)) d.y = i;
                else {
                  let e = i * u(i);
                  d.y = Math.abs(e) < Math.abs(i) ? e : i;
                }
            } else if ("x" === K && (l.includes("left") || l.includes("right")))
              if ((l.includes("left") && s < 0) || (l.includes("right") && s > 0)) d.x = s;
              else {
                let e = s * u(s);
                d.x = Math.abs(e) < Math.abs(s) ? e : s;
              }
            ((Math.abs(d.x) > 0 || Math.abs(d.y) > 0) && es(!0),
              null == (n = em.current) || n.style.setProperty("--swipe-amount-x", `${d.x}px`),
              null == (a = em.current) || a.style.setProperty("--swipe-amount-y", `${d.y}px`));
          },
        },
        eE && !R.jsx && "loading" !== eg
          ? t.default.createElement(
              "button",
              {
                "aria-label": X,
                "data-disabled": ej,
                "data-close-button": !0,
                onClick:
                  ej || !ey
                    ? () => {}
                    : () => {
                        (eO(), null == R.onDismiss || R.onDismiss.call(R, R));
                      },
                className: h(
                  null == U ? void 0 : U.closeButton,
                  null == R || null == (u = R.classNames) ? void 0 : u.closeButton,
                ),
              },
              null != (w = null == V ? void 0 : V.close) ? w : d,
            )
          : null,
        (eg || R.icon || R.promise) && null !== R.icon && ((null == V ? void 0 : V[eg]) !== null || R.icon)
          ? t.default.createElement(
              "div",
              {
                "data-icon": "",
                className: h(null == U ? void 0 : U.icon, null == R || null == (c = R.classNames) ? void 0 : c.icon),
              },
              R.promise || ("loading" === R.type && !R.icon)
                ? R.icon ||
                    ((null == V ? void 0 : V.loading)
                      ? t.default.createElement(
                          "div",
                          {
                            className: h(
                              null == U ? void 0 : U.loader,
                              null == R || null == (E = R.classNames) ? void 0 : E.loader,
                              "sonner-loader",
                            ),
                            "data-visible": "loading" === eg,
                          },
                          V.loading,
                        )
                      : t.default.createElement(a, {
                          className: h(
                            null == U ? void 0 : U.loader,
                            null == R || null == (x = R.classNames) ? void 0 : x.loader,
                          ),
                          visible: "loading" === eg,
                        }))
                : null,
              "loading" !== R.type ? e_ : null,
            )
          : null,
        t.default.createElement(
          "div",
          {
            "data-content": "",
            className: h(null == U ? void 0 : U.content, null == R || null == (f = R.classNames) ? void 0 : f.content),
          },
          t.default.createElement(
            "div",
            {
              "data-title": "",
              className: h(null == U ? void 0 : U.title, null == R || null == (p = R.classNames) ? void 0 : p.title),
            },
            R.jsx ? R.jsx : "function" == typeof R.title ? R.title() : R.title,
          ),
          R.description
            ? t.default.createElement(
                "div",
                {
                  "data-description": "",
                  className: h(
                    z,
                    ew,
                    null == U ? void 0 : U.description,
                    null == R || null == (v = R.classNames) ? void 0 : v.description,
                  ),
                },
                "function" == typeof R.description ? R.description() : R.description,
              )
            : null,
        ),
        t.default.isValidElement(R.cancel)
          ? R.cancel
          : R.cancel && m(R.cancel)
            ? t.default.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: R.cancelButtonStyle || I,
                  onClick: (e) => {
                    !m(R.cancel) || (ey && (null == R.cancel.onClick || R.cancel.onClick.call(R.cancel, e), eO()));
                  },
                  className: h(
                    null == U ? void 0 : U.cancelButton,
                    null == R || null == (g = R.classNames) ? void 0 : g.cancelButton,
                  ),
                },
                R.cancel.label,
              )
            : null,
        t.default.isValidElement(R.action)
          ? R.action
          : R.action && m(R.action)
            ? t.default.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: R.actionButtonStyle || B,
                  onClick: (e) => {
                    !m(R.action) ||
                      (null == R.action.onClick || R.action.onClick.call(R.action, e), e.defaultPrevented || eO());
                  },
                  className: h(
                    null == U ? void 0 : U.actionButton,
                    null == R || null == (y = R.classNames) ? void 0 : y.actionButton,
                  ),
                },
                R.action.label,
              )
            : null,
      );
    };
    function g() {
      if ("undefined" == typeof window || "undefined" == typeof document) return "ltr";
      let e = document.documentElement.getAttribute("dir");
      return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction;
    }
    let y = t.default.forwardRef(function (e, n) {
      let {
          id: a,
          invert: o,
          position: i = "bottom-right",
          hotkey: s = ["altKey", "KeyT"],
          expand: l,
          closeButton: d,
          className: u,
          offset: f,
          mobileOffset: p,
          theme: m = "light",
          richColors: h,
          duration: y,
          style: b,
          visibleToasts: w = 3,
          toastOptions: x,
          dir: E = g(),
          gap: C = 14,
          icons: R,
          containerAriaLabel: k = "Notifications",
        } = e,
        [S, N] = t.default.useState([]),
        A = t.default.useMemo(() => (a ? S.filter((e) => e.toasterId === a) : S.filter((e) => !e.toasterId)), [S, a]),
        T = t.default.useMemo(
          () => Array.from(new Set([i].concat(A.filter((e) => e.position).map((e) => e.position)))),
          [A, i],
        ),
        [M, L] = t.default.useState([]),
        [P, j] = t.default.useState(!1),
        [O, _] = t.default.useState(!1),
        [D, I] = t.default.useState(
          "system" !== m
            ? m
            : "undefined" != typeof window &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        ),
        B = t.default.useRef(null),
        $ = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        z = t.default.useRef(null),
        W = t.default.useRef(!1),
        F = t.default.useCallback((e) => {
          N((t) => {
            var r;
            return (
              (null == (r = t.find((t) => t.id === e.id)) ? void 0 : r.delete) || c.dismiss(e.id),
              t.filter(({ id: t }) => t !== e.id)
            );
          });
        }, []);
      return (
        t.default.useEffect(
          () =>
            c.subscribe((e) => {
              e.dismiss
                ? requestAnimationFrame(() => {
                    N((t) => t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)));
                  })
                : setTimeout(() => {
                    r.default.flushSync(() => {
                      N((t) => {
                        let r = t.findIndex((t) => t.id === e.id);
                        return -1 !== r ? [...t.slice(0, r), { ...t[r], ...e }, ...t.slice(r + 1)] : [e, ...t];
                      });
                    });
                  });
            }),
          [S],
        ),
        t.default.useEffect(() => {
          if ("system" !== m) return void I(m);
          if (
            ("system" === m &&
              (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? I("dark") : I("light")),
            "undefined" == typeof window)
          )
            return;
          let e = window.matchMedia("(prefers-color-scheme: dark)");
          try {
            e.addEventListener("change", ({ matches: e }) => {
              e ? I("dark") : I("light");
            });
          } catch (t) {
            e.addListener(({ matches: e }) => {
              try {
                e ? I("dark") : I("light");
              } catch (e) {
                console.error(e);
              }
            });
          }
        }, [m]),
        t.default.useEffect(() => {
          S.length <= 1 && j(!1);
        }, [S]),
        t.default.useEffect(() => {
          let e = (e) => {
            var t, r;
            (s.every((t) => e[t] || e.code === t) && (j(!0), null == (r = B.current) || r.focus()),
              "Escape" === e.code &&
                (document.activeElement === B.current ||
                  (null == (t = B.current) ? void 0 : t.contains(document.activeElement))) &&
                j(!1));
          };
          return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        }, [s]),
        t.default.useEffect(() => {
          if (B.current)
            return () => {
              z.current && (z.current.focus({ preventScroll: !0 }), (z.current = null), (W.current = !1));
            };
        }, [B.current]),
        t.default.createElement(
          "section",
          {
            ref: n,
            "aria-label": `${k} ${$}`,
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0,
          },
          T.map((r, n) => {
            var a;
            let i,
              [s, c] = r.split("-");
            return A.length
              ? t.default.createElement(
                  "ol",
                  {
                    key: r,
                    dir: "auto" === E ? g() : E,
                    tabIndex: -1,
                    ref: B,
                    className: u,
                    "data-sonner-toaster": !0,
                    "data-sonner-theme": D,
                    "data-y-position": s,
                    "data-x-position": c,
                    style: {
                      "--front-toast-height": `${(null == (a = M[0]) ? void 0 : a.height) || 0}px`,
                      "--width": "356px",
                      "--gap": `${C}px`,
                      ...b,
                      ...((i = {}),
                      [f, p].forEach((e, t) => {
                        let r = 1 === t,
                          n = r ? "--mobile-offset" : "--offset",
                          a = r ? "16px" : "24px";
                        function o(e) {
                          ["top", "right", "bottom", "left"].forEach((t) => {
                            i[`${n}-${t}`] = "number" == typeof e ? `${e}px` : e;
                          });
                        }
                        "number" == typeof e || "string" == typeof e
                          ? o(e)
                          : "object" == typeof e
                            ? ["top", "right", "bottom", "left"].forEach((t) => {
                                void 0 === e[t]
                                  ? (i[`${n}-${t}`] = a)
                                  : (i[`${n}-${t}`] = "number" == typeof e[t] ? `${e[t]}px` : e[t]);
                              })
                            : o(a);
                      }),
                      i),
                    },
                    onBlur: (e) => {
                      W.current &&
                        !e.currentTarget.contains(e.relatedTarget) &&
                        ((W.current = !1), z.current && (z.current.focus({ preventScroll: !0 }), (z.current = null)));
                    },
                    onFocus: (e) => {
                      !(e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible) &&
                        (W.current || ((W.current = !0), (z.current = e.relatedTarget)));
                    },
                    onMouseEnter: () => j(!0),
                    onMouseMove: () => j(!0),
                    onMouseLeave: () => {
                      O || j(!1);
                    },
                    onDragEnd: () => j(!1),
                    onPointerDown: (e) => {
                      (e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible) || _(!0);
                    },
                    onPointerUp: () => _(!1),
                  },
                  A.filter((e) => (!e.position && 0 === n) || e.position === r).map((n, a) => {
                    var i, s;
                    return t.default.createElement(v, {
                      key: n.id,
                      icons: R,
                      index: a,
                      toast: n,
                      defaultRichColors: h,
                      duration: null != (i = null == x ? void 0 : x.duration) ? i : y,
                      className: null == x ? void 0 : x.className,
                      descriptionClassName: null == x ? void 0 : x.descriptionClassName,
                      invert: o,
                      visibleToasts: w,
                      closeButton: null != (s = null == x ? void 0 : x.closeButton) ? s : d,
                      interacting: O,
                      position: r,
                      style: null == x ? void 0 : x.style,
                      unstyled: null == x ? void 0 : x.unstyled,
                      classNames: null == x ? void 0 : x.classNames,
                      cancelButtonStyle: null == x ? void 0 : x.cancelButtonStyle,
                      actionButtonStyle: null == x ? void 0 : x.actionButtonStyle,
                      closeButtonAriaLabel: null == x ? void 0 : x.closeButtonAriaLabel,
                      removeToast: F,
                      toasts: A.filter((e) => e.position == n.position),
                      heights: M.filter((e) => e.position == n.position),
                      setHeights: L,
                      expandByDefault: l,
                      gap: C,
                      expanded: P,
                      swipeDirections: e.swipeDirections,
                    });
                  }),
                )
              : null;
          }),
        )
      );
    });
    e.s(["Toaster", () => y, "toast", () => p]);
  },
]);
