(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  261992,
  (e) => {
    "use strict";
    var t = e.i(770572);
    let n = t.forwardRef(function ({ title: e, titleId: n, ...r }, a) {
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
            "aria-labelledby": n,
          },
          r,
        ),
        e ? t.createElement("title", { id: n }, e) : null,
        t.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
        }),
      );
    });
    e.s(["MagnifyingGlassIcon", 0, n], 261992);
  },
  941695,
  (e) => {
    "use strict";
    let t, n, r, a;
    var o = e.i(770572),
      i = e.i(462406),
      l = e.i(164265),
      u = e.i(205020),
      d = e.i(286002),
      s = e.i(696731),
      c = e.i(408200),
      f = e.i(7764),
      p = e.i(264874),
      m = e.i(763743),
      g = e.i(940188),
      v = e.i(653975),
      h = e.i(351143),
      w = e.i(454905),
      y = e.i(802252),
      b = Symbol("radix.slottable");
    function x(e) {
      return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === b;
    }
    var R = "Dialog",
      [E, C] = (0, u.createContextScope)(R),
      [D, T] = E(R),
      P = (e) => {
        let { __scopeDialog: t, children: n, open: r, defaultOpen: a, onOpenChange: i, modal: l = !0 } = e,
          u = o.useRef(null),
          c = o.useRef(null),
          [f, p] = (0, s.useControllableState)({ prop: r, defaultProp: a ?? !1, onChange: i, caller: R });
        return (0, y.jsx)(D, {
          scope: t,
          triggerRef: u,
          contentRef: c,
          contentId: (0, d.useId)(),
          titleId: (0, d.useId)(),
          descriptionId: (0, d.useId)(),
          open: f,
          onOpenChange: p,
          onOpenToggle: o.useCallback(() => p((e) => !e), [p]),
          modal: l,
          children: n,
        });
      };
    P.displayName = R;
    var O = "DialogTrigger",
      $ = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          a = T(O, n),
          o = (0, l.useComposedRefs)(t, a.triggerRef);
        return (0, y.jsx)(g.Primitive.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": a.open,
          "aria-controls": a.contentId,
          "data-state": K(a.open),
          ...r,
          ref: o,
          onClick: (0, i.composeEventHandlers)(e.onClick, a.onOpenToggle),
        });
      });
    $.displayName = O;
    var M = "DialogPortal",
      [j, F] = E(M, { forceMount: void 0 }),
      k = (e) => {
        let { __scopeDialog: t, forceMount: n, children: r, container: a } = e,
          i = T(M, t);
        return (0, y.jsx)(j, {
          scope: t,
          forceMount: n,
          children: o.Children.map(r, (e) =>
            (0, y.jsx)(m.Presence, {
              present: n || i.open,
              children: (0, y.jsx)(p.Portal, { asChild: !0, container: a, children: e }),
            }),
          ),
        });
      };
    k.displayName = M;
    var N = "DialogOverlay",
      S = o.forwardRef((e, t) => {
        let n = F(N, e.__scopeDialog),
          { forceMount: r = n.forceMount, ...a } = e,
          o = T(N, e.__scopeDialog);
        return o.modal
          ? (0, y.jsx)(m.Presence, { present: r || o.open, children: (0, y.jsx)(B, { ...a, ref: t }) })
          : null;
      });
    S.displayName = N;
    var I =
        (((a = o.forwardRef((e, t) => {
          let { children: n, ...r } = e;
          if (o.isValidElement(n)) {
            var a;
            let e,
              i,
              u =
                ((a = n),
                (i =
                  (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) &&
                  "isReactWarning" in e &&
                  e.isReactWarning)
                  ? a.ref
                  : (i =
                        (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? a.props.ref
                    : a.props.ref || a.ref),
              d = (function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let a = e[r],
                    o = t[r];
                  /^on[A-Z]/.test(r)
                    ? a && o
                      ? (n[r] = (...e) => {
                          let t = o(...e);
                          return (a(...e), t);
                        })
                      : a && (n[r] = a)
                    : "style" === r
                      ? (n[r] = { ...a, ...o })
                      : "className" === r && (n[r] = [a, o].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props);
            return (n.type !== o.Fragment && (d.ref = t ? (0, l.composeRefs)(t, u) : u), o.cloneElement(n, d));
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null;
        })).displayName = "DialogOverlay.RemoveScroll.SlotClone"),
        (n = a),
        ((r = o.forwardRef((e, t) => {
          let { children: r, ...a } = e,
            i = o.Children.toArray(r),
            l = i.find(x);
          if (l) {
            let e = l.props.children,
              r = i.map((t) =>
                t !== l
                  ? t
                  : o.Children.count(e) > 1
                    ? o.Children.only(null)
                    : o.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, y.jsx)(n, { ...a, ref: t, children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null });
          }
          return (0, y.jsx)(n, { ...a, ref: t, children: r });
        })).displayName = "DialogOverlay.RemoveScroll.Slot"),
        r),
      B = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          a = T(N, n);
        return (0, y.jsx)(h.RemoveScroll, {
          as: I,
          allowPinchZoom: !0,
          shards: [a.contentRef],
          children: (0, y.jsx)(g.Primitive.div, {
            "data-state": K(a.open),
            ...r,
            ref: t,
            style: { pointerEvents: "auto", ...r.style },
          }),
        });
      }),
      A = "DialogContent",
      L = o.forwardRef((e, t) => {
        let n = F(A, e.__scopeDialog),
          { forceMount: r = n.forceMount, ...a } = e,
          o = T(A, e.__scopeDialog);
        return (0, y.jsx)(m.Presence, {
          present: r || o.open,
          children: o.modal ? (0, y.jsx)(W, { ...a, ref: t }) : (0, y.jsx)(H, { ...a, ref: t }),
        });
      });
    L.displayName = A;
    var W = o.forwardRef((e, t) => {
        let n = T(A, e.__scopeDialog),
          r = o.useRef(null),
          a = (0, l.useComposedRefs)(t, n.contentRef, r);
        return (
          o.useEffect(() => {
            let e = r.current;
            if (e) return (0, w.hideOthers)(e);
          }, []),
          (0, y.jsx)(z, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, i.composeEventHandlers)(e.onCloseAutoFocus, (e) => {
              (e.preventDefault(), n.triggerRef.current?.focus());
            }),
            onPointerDownOutside: (0, i.composeEventHandlers)(e.onPointerDownOutside, (e) => {
              let t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault();
            }),
            onFocusOutside: (0, i.composeEventHandlers)(e.onFocusOutside, (e) => e.preventDefault()),
          })
        );
      }),
      H = o.forwardRef((e, t) => {
        let n = T(A, e.__scopeDialog),
          r = o.useRef(!1),
          a = o.useRef(!1);
        return (0, y.jsx)(z, {
          ...e,
          ref: t,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          onCloseAutoFocus: (t) => {
            (e.onCloseAutoFocus?.(t),
              t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
              (r.current = !1),
              (a.current = !1));
          },
          onInteractOutside: (t) => {
            (e.onInteractOutside?.(t),
              t.defaultPrevented ||
                ((r.current = !0), "pointerdown" === t.detail.originalEvent.type && (a.current = !0)));
            let o = t.target;
            (n.triggerRef.current?.contains(o) && t.preventDefault(),
              "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault());
          },
        });
      }),
      z = o.forwardRef((e, t) => {
        let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, ...u } = e,
          d = T(A, n),
          s = o.useRef(null),
          p = (0, l.useComposedRefs)(t, s);
        return (
          (0, v.useFocusGuards)(),
          (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)(f.FocusScope, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: a,
                onUnmountAutoFocus: i,
                children: (0, y.jsx)(c.DismissableLayer, {
                  role: "dialog",
                  id: d.contentId,
                  "aria-describedby": d.descriptionId,
                  "aria-labelledby": d.titleId,
                  "data-state": K(d.open),
                  ...u,
                  ref: p,
                  onDismiss: () => d.onOpenChange(!1),
                }),
              }),
              (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(Q, { titleId: d.titleId }),
                  (0, y.jsx)(ee, { contentRef: s, descriptionId: d.descriptionId }),
                ],
              }),
            ],
          })
        );
      }),
      _ = "DialogTitle",
      q = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          a = T(_, n);
        return (0, y.jsx)(g.Primitive.h2, { id: a.titleId, ...r, ref: t });
      });
    q.displayName = _;
    var Y = "DialogDescription",
      U = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          a = T(Y, n);
        return (0, y.jsx)(g.Primitive.p, { id: a.descriptionId, ...r, ref: t });
      });
    U.displayName = Y;
    var V = "DialogClose",
      X = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          a = T(V, n);
        return (0, y.jsx)(g.Primitive.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: (0, i.composeEventHandlers)(e.onClick, () => a.onOpenChange(!1)),
        });
      });
    function K(e) {
      return e ? "open" : "closed";
    }
    X.displayName = V;
    var Z = "DialogTitleWarning",
      [G, J] = (0, u.createContext)(Z, { contentName: A, titleName: _, docsSlug: "dialog" }),
      Q = ({ titleId: e }) => {
        let t = J(Z),
          n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return (
          o.useEffect(() => {
            e && (document.getElementById(e) || console.error(n));
          }, [n, e]),
          null
        );
      },
      ee = ({ contentRef: e, descriptionId: t }) => {
        let n = J("DialogDescriptionWarning"),
          r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
        return (
          o.useEffect(() => {
            let n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r));
          }, [r, e, t]),
          null
        );
      };
    let et = o.default.createContext({
        drawerRef: { current: null },
        overlayRef: { current: null },
        onPress: () => {},
        onRelease: () => {},
        onDrag: () => {},
        onNestedDrag: () => {},
        onNestedOpenChange: () => {},
        onNestedRelease: () => {},
        openProp: void 0,
        dismissible: !1,
        isOpen: !1,
        isDragging: !1,
        keyboardIsOpen: { current: !1 },
        snapPointsOffset: null,
        snapPoints: null,
        handleOnly: !1,
        modal: !1,
        shouldFade: !1,
        activeSnapPoint: null,
        onOpenChange: () => {},
        setActiveSnapPoint: () => {},
        closeDrawer: () => {},
        direction: "bottom",
        shouldAnimate: { current: !0 },
        shouldScaleBackground: !1,
        setBackgroundColorOnScale: !0,
        noBodyStyles: !1,
        container: null,
        autoFocus: !1,
      }),
      en = () => {
        let e = o.default.useContext(et);
        if (!e) throw Error("useDrawerContext must be used within a Drawer.Root");
        return e;
      };
    function er() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    function ea() {
      return eo(/^iPhone/) || eo(/^iPad/) || (eo(/^Mac/) && navigator.maxTouchPoints > 1);
    }
    function eo(e) {
      return "undefined" != typeof window && null != window.navigator ? e.test(window.navigator.platform) : void 0;
    }
    !(function (e) {
      if (!e || "undefined" == typeof document) return;
      let t = document.head || document.getElementsByTagName("head")[0],
        n = document.createElement("style");
      ((n.type = "text/css"),
        t.appendChild(n),
        n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)));
    })(
      "[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}",
    );
    let ei = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
    function el(...e) {
      return (...t) => {
        for (let n of e) "function" == typeof n && n(...t);
      };
    }
    let eu = "undefined" != typeof document && window.visualViewport;
    function ed(e) {
      let t = window.getComputedStyle(e);
      return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
    }
    function es(e) {
      for (ed(e) && (e = e.parentElement); e && !ed(e); ) e = e.parentElement;
      return e || document.scrollingElement || document.documentElement;
    }
    let ec = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
      ef = 0;
    function ep(e, t, n, r) {
      return (
        e.addEventListener(t, n, r),
        () => {
          e.removeEventListener(t, n, r);
        }
      );
    }
    function em(e) {
      let t = document.scrollingElement || document.documentElement;
      for (; e && e !== t; ) {
        let t = es(e);
        if (t !== document.documentElement && t !== document.body && t !== e) {
          let n = t.getBoundingClientRect().top,
            r = e.getBoundingClientRect().top;
          e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + 24 && (t.scrollTop += r - n);
        }
        e = t.parentElement;
      }
    }
    function eg(e) {
      return (
        (e instanceof HTMLInputElement && !ec.has(e.type)) ||
        e instanceof HTMLTextAreaElement ||
        (e instanceof HTMLElement && e.isContentEditable)
      );
    }
    function ev(...e) {
      return o.useCallback(
        (function (...e) {
          return (t) =>
            e.forEach((e) => {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            });
        })(...e),
        e,
      );
    }
    let eh = new WeakMap();
    function ew(e, t, n = !1) {
      if (!e || !(e instanceof HTMLElement)) return;
      let r = {};
      (Object.entries(t).forEach(([t, n]) => {
        t.startsWith("--") ? e.style.setProperty(t, n) : ((r[t] = e.style[t]), (e.style[t] = n));
      }),
        n || eh.set(e, r));
    }
    let ey = (e) => {
      switch (e) {
        case "top":
        case "bottom":
          return !0;
        case "left":
        case "right":
          return !1;
        default:
          return e;
      }
    };
    function eb(e, t) {
      if (!e) return null;
      let n = window.getComputedStyle(e),
        r = n.transform || n.webkitTransform || n.mozTransform,
        a = r.match(/^matrix3d\((.+)\)$/);
      return a
        ? parseFloat(a[1].split(", ")[ey(t) ? 13 : 12])
        : (a = r.match(/^matrix\((.+)\)$/))
          ? parseFloat(a[1].split(", ")[ey(t) ? 5 : 4])
          : null;
    }
    function ex(e, t) {
      if (!e) return () => {};
      let n = e.style.cssText;
      return (
        Object.assign(e.style, t),
        () => {
          e.style.cssText = n;
        }
      );
    }
    let eR = [0.32, 0.72, 0, 1],
      eE = "vaul-dragging";
    function eC(e) {
      let t = o.default.useRef(e);
      return (
        o.default.useEffect(() => {
          t.current = e;
        }),
        o.default.useMemo(
          () =>
            (...e) =>
              null == t.current ? void 0 : t.current.call(t, ...e),
          [],
        )
      );
    }
    function eD({ prop: e, defaultProp: t, onChange: n = () => {} }) {
      let [r, a] = (function ({ defaultProp: e, onChange: t }) {
          let n = o.default.useState(e),
            [r] = n,
            a = o.default.useRef(r),
            i = eC(t);
          return (
            o.default.useEffect(() => {
              a.current !== r && (i(r), (a.current = r));
            }, [r, a, i]),
            n
          );
        })({ defaultProp: t, onChange: n }),
        i = void 0 !== e,
        l = i ? e : r,
        u = eC(n);
      return [
        l,
        o.default.useCallback(
          (t) => {
            if (i) {
              let n = "function" == typeof t ? t(e) : t;
              n !== e && u(n);
            } else a(t);
          },
          [i, e, a, u],
        ),
      ];
    }
    let eT = () => () => {},
      eP = null;
    function eO({
      open: e,
      onOpenChange: n,
      children: r,
      onDrag: a,
      onRelease: i,
      snapPoints: l,
      shouldScaleBackground: u = !1,
      setBackgroundColorOnScale: d = !0,
      closeThreshold: s = 0.25,
      scrollLockTimeout: c = 100,
      dismissible: f = !0,
      handleOnly: p = !1,
      fadeFromIndex: m = l && l.length - 1,
      activeSnapPoint: g,
      setActiveSnapPoint: v,
      fixed: h,
      modal: w = !0,
      onClose: y,
      nested: b,
      noBodyStyles: x = !1,
      direction: R = "bottom",
      defaultOpen: E = !1,
      disablePreventScroll: C = !0,
      snapToSequentialPoint: D = !1,
      preventScrollRestoration: T = !1,
      repositionInputs: O = !0,
      onAnimationEnd: $,
      container: M,
      autoFocus: j = !1,
    }) {
      var F, k;
      let [N = !1, S] = eD({
          defaultProp: E,
          prop: e,
          onChange: (e) => {
            (null == n || n(e),
              e || b || ej(),
              setTimeout(() => {
                null == $ || $(e);
              }, 500),
              e &&
                !w &&
                "undefined" != typeof window &&
                window.requestAnimationFrame(() => {
                  document.body.style.pointerEvents = "auto";
                }),
              e || (document.body.style.pointerEvents = "auto"));
          },
        }),
        [I, B] = o.default.useState(!1),
        [A, L] = o.default.useState(!1),
        [W, H] = o.default.useState(!1),
        z = o.default.useRef(null),
        _ = o.default.useRef(null),
        q = o.default.useRef(null),
        Y = o.default.useRef(null),
        U = o.default.useRef(null),
        V = o.default.useRef(!1),
        X = o.default.useRef(null),
        K = o.default.useRef(0),
        Z = o.default.useRef(!1),
        G = o.default.useRef(!E),
        J = o.default.useRef(0),
        Q = o.default.useRef(null),
        ee = o.default.useRef((null == (F = Q.current) ? void 0 : F.getBoundingClientRect().height) || 0),
        en = o.default.useRef((null == (k = Q.current) ? void 0 : k.getBoundingClientRect().width) || 0),
        eo = o.default.useRef(0),
        ed = o.default.useCallback((e) => {
          l && e === eT.length - 1 && (_.current = new Date());
        }, []),
        {
          activeSnapPoint: ec,
          activeSnapPointIndex: ev,
          setActiveSnapPoint: ex,
          onRelease: eC,
          snapPointsOffset: eT,
          onDrag: eO,
          shouldFade: e$,
          getPercentageDragged: eM,
        } = (function ({
          activeSnapPointProp: e,
          setActiveSnapPointProp: t,
          snapPoints: n,
          drawerRef: r,
          overlayRef: a,
          fadeFromIndex: i,
          onSnapPointChange: l,
          direction: u = "bottom",
          container: d,
          snapToSequentialPoint: s,
        }) {
          let [c, f] = eD({ prop: e, defaultProp: null == n ? void 0 : n[0], onChange: t }),
            [p, m] = o.default.useState(
              "undefined" != typeof window
                ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight }
                : void 0,
            );
          o.default.useEffect(() => {
            function e() {
              m({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
            }
            return (window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
          }, []);
          let g = o.default.useMemo(() => c === (null == n ? void 0 : n[n.length - 1]) || null, [n, c]),
            v = o.default.useMemo(() => {
              var e;
              return null != (e = null == n ? void 0 : n.findIndex((e) => e === c)) ? e : null;
            }, [n, c]),
            h = (n && n.length > 0 && (i || 0 === i) && !Number.isNaN(i) && n[i] === c) || !n,
            w = o.default.useMemo(() => {
              var e;
              let t = d
                ? { width: d.getBoundingClientRect().width, height: d.getBoundingClientRect().height }
                : "undefined" != typeof window
                  ? { width: window.innerWidth, height: window.innerHeight }
                  : { width: 0, height: 0 };
              return null !=
                (e =
                  null == n
                    ? void 0
                    : n.map((e) => {
                        let n = "string" == typeof e,
                          r = 0;
                        if ((n && (r = parseInt(e, 10)), ey(u))) {
                          let a = n ? r : p ? e * t.height : 0;
                          return p ? ("bottom" === u ? t.height - a : -t.height + a) : a;
                        }
                        let a = n ? r : p ? e * t.width : 0;
                        return p ? ("right" === u ? t.width - a : -t.width + a) : a;
                      }))
                ? e
                : [];
            }, [n, p, d]),
            y = o.default.useMemo(() => (null !== v ? (null == w ? void 0 : w[v]) : null), [w, v]),
            b = o.default.useCallback(
              (e) => {
                var t;
                let o = null != (t = null == w ? void 0 : w.findIndex((t) => t === e)) ? t : null;
                (l(o),
                  ew(r.current, {
                    transition: `transform 0.5s cubic-bezier(${eR.join(",")})`,
                    transform: ey(u) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`,
                  }),
                  w && o !== w.length - 1 && void 0 !== i && o !== i && o < i
                    ? ew(a.current, { transition: `opacity 0.5s cubic-bezier(${eR.join(",")})`, opacity: "0" })
                    : ew(a.current, { transition: `opacity 0.5s cubic-bezier(${eR.join(",")})`, opacity: "1" }),
                  f(null == n ? void 0 : n[Math.max(o, 0)]));
              },
              [r.current, n, w, i, a, f],
            );
          return (
            o.default.useEffect(() => {
              if (c || e) {
                var t;
                let r = null != (t = null == n ? void 0 : n.findIndex((t) => t === e || t === c)) ? t : -1;
                w && -1 !== r && "number" == typeof w[r] && b(w[r]);
              }
            }, [c, e, n, w, b]),
            {
              isLastSnapPoint: g,
              activeSnapPoint: c,
              shouldFade: h,
              getPercentageDragged: function (e, t) {
                if (!n || "number" != typeof v || !w || void 0 === i) return null;
                let r = v === i - 1;
                if (v >= i && t) return 0;
                if (r && !t) return 1;
                if (!h && !r) return null;
                let a = r ? v + 1 : v - 1,
                  o = e / Math.abs(r ? w[a] - w[a - 1] : w[a + 1] - w[a]);
                return r ? 1 - o : o;
              },
              setActiveSnapPoint: f,
              activeSnapPointIndex: v,
              onRelease: function ({ draggedDistance: e, closeDrawer: t, velocity: r, dismissible: o }) {
                if (void 0 === i) return;
                let l = "bottom" === u || "right" === u ? (null != y ? y : 0) - e : (null != y ? y : 0) + e,
                  d = v === i - 1,
                  c = 0 === v,
                  f = e > 0;
                if (
                  (d && ew(a.current, { transition: `opacity 0.5s cubic-bezier(${eR.join(",")})` }), !s && r > 2 && !f)
                )
                  return void (o ? t() : b(w[0]));
                if (!s && r > 2 && f && w && n) return void b(w[n.length - 1]);
                let p =
                    null == w
                      ? void 0
                      : w.reduce((e, t) =>
                          "number" != typeof e || "number" != typeof t ? e : Math.abs(t - l) < Math.abs(e - l) ? t : e,
                        ),
                  m = ey(u) ? window.innerHeight : window.innerWidth;
                if (r > 0.4 && Math.abs(e) < 0.4 * m) {
                  let e = f ? 1 : -1;
                  return e > 0 && g && n
                    ? void b(w[n.length - 1])
                    : void (c && e < 0 && o && t(), null === v || b(w[v + e]));
                }
                b(p);
              },
              onDrag: function ({ draggedDistance: e }) {
                if (null === y) return;
                let t = "bottom" === u || "right" === u ? y - e : y + e;
                (("bottom" === u || "right" === u) && t < w[w.length - 1]) ||
                  (("top" === u || "left" === u) && t > w[w.length - 1]) ||
                  ew(r.current, { transform: ey(u) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
              },
              snapPointsOffset: w,
            }
          );
        })({
          snapPoints: l,
          activeSnapPointProp: g,
          setActiveSnapPointProp: v,
          drawerRef: Q,
          fadeFromIndex: m,
          overlayRef: z,
          onSnapPointChange: ed,
          direction: R,
          container: M,
          snapToSequentialPoint: D,
        });
      !(function (e = {}) {
        let { isDisabled: n } = e;
        ei(() => {
          if (!n) {
            var e, r, a;
            let n, o, i, l, u, d, s;
            return (
              1 == ++ef &&
                ea() &&
                ((i = 0),
                (l = window.pageXOffset),
                (u = window.pageYOffset),
                (d = el(
                  ((e = document.documentElement),
                  (r = "paddingRight"),
                  (a = `${window.innerWidth - document.documentElement.clientWidth}px`),
                  (n = e.style[r]),
                  (e.style[r] = a),
                  () => {
                    e.style[r] = n;
                  }),
                )),
                window.scrollTo(0, 0),
                (s = el(
                  ep(
                    document,
                    "touchstart",
                    (e) => {
                      ((o = es(e.target)) !== document.documentElement || o !== document.body) &&
                        (i = e.changedTouches[0].pageY);
                    },
                    { passive: !1, capture: !0 },
                  ),
                  ep(
                    document,
                    "touchmove",
                    (e) => {
                      if (!o || o === document.documentElement || o === document.body) return void e.preventDefault();
                      let t = e.changedTouches[0].pageY,
                        n = o.scrollTop,
                        r = o.scrollHeight - o.clientHeight;
                      0 !== r && (((n <= 0 && t > i) || (n >= r && t < i)) && e.preventDefault(), (i = t));
                    },
                    { passive: !1, capture: !0 },
                  ),
                  ep(
                    document,
                    "touchend",
                    (e) => {
                      let t = e.target;
                      eg(t) &&
                        t !== document.activeElement &&
                        (e.preventDefault(),
                        (t.style.transform = "translateY(-2000px)"),
                        t.focus(),
                        requestAnimationFrame(() => {
                          t.style.transform = "";
                        }));
                    },
                    { passive: !1, capture: !0 },
                  ),
                  ep(
                    document,
                    "focus",
                    (e) => {
                      let t = e.target;
                      eg(t) &&
                        ((t.style.transform = "translateY(-2000px)"),
                        requestAnimationFrame(() => {
                          ((t.style.transform = ""),
                            eu &&
                              (eu.height < window.innerHeight
                                ? requestAnimationFrame(() => {
                                    em(t);
                                  })
                                : eu.addEventListener("resize", () => em(t), { once: !0 })));
                        }));
                    },
                    !0,
                  ),
                  ep(window, "scroll", () => {
                    window.scrollTo(0, 0);
                  }),
                )),
                (t = () => {
                  (d(), s(), window.scrollTo(l, u));
                })),
              () => {
                0 == --ef && (null == t || t());
              }
            );
          }
        }, [n]);
      })({ isDisabled: !N || A || !w || W || !I || !O || !C });
      let { restorePositionSetting: ej } = (function ({
        isOpen: e,
        modal: t,
        nested: n,
        hasBeenOpened: r,
        preventScrollRestoration: a,
        noBodyStyles: i,
      }) {
        let [l, u] = o.default.useState(() => ("undefined" != typeof window ? window.location.href : "")),
          d = o.default.useRef(0),
          s = o.default.useCallback(() => {
            if (er() && null === eP && e && !i) {
              eP = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left,
                height: document.body.style.height,
                right: "unset",
              };
              let { scrollX: e, innerHeight: t } = window;
              (document.body.style.setProperty("position", "fixed", "important"),
                Object.assign(document.body.style, {
                  top: `${-d.current}px`,
                  left: `${-e}px`,
                  right: "0px",
                  height: "auto",
                }),
                window.setTimeout(
                  () =>
                    window.requestAnimationFrame(() => {
                      let e = t - window.innerHeight;
                      e && d.current >= t && (document.body.style.top = `${-(d.current + e)}px`);
                    }),
                  300,
                ));
            }
          }, [e]),
          c = o.default.useCallback(() => {
            if (er() && null !== eP && !i) {
              let e = -parseInt(document.body.style.top, 10),
                t = -parseInt(document.body.style.left, 10);
              (Object.assign(document.body.style, eP),
                window.requestAnimationFrame(() => {
                  a && l !== window.location.href ? u(window.location.href) : window.scrollTo(t, e);
                }),
                (eP = null));
            }
          }, [l]);
        return (
          o.default.useEffect(() => {
            function e() {
              d.current = window.scrollY;
            }
            return (
              e(),
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, []),
          o.default.useEffect(() => {
            if (t)
              return () => {
                "undefined" == typeof document || document.querySelector("[data-vaul-drawer]") || c();
              };
          }, [t, c]),
          o.default.useEffect(() => {
            !n &&
              r &&
              (e
                ? (window.matchMedia("(display-mode: standalone)").matches || s(),
                  t ||
                    window.setTimeout(() => {
                      c();
                    }, 500))
                : c());
          }, [e, r, l, t, n, s, c]),
          { restorePositionSetting: c }
        );
      })({
        isOpen: N,
        modal: w,
        nested: null != b && b,
        hasBeenOpened: I,
        preventScrollRestoration: T,
        noBodyStyles: x,
      });
      function eF() {
        return (window.innerWidth - 26) / window.innerWidth;
      }
      function ek(e, t) {
        var n;
        let r = e,
          a = null == (n = window.getSelection()) ? void 0 : n.toString(),
          o = Q.current ? eb(Q.current, R) : null,
          i = new Date();
        if ("SELECT" === r.tagName || r.hasAttribute("data-vaul-no-drag") || r.closest("[data-vaul-no-drag]"))
          return !1;
        if ("right" === R || "left" === R) return !0;
        if (_.current && i.getTime() - _.current.getTime() < 500) return !1;
        if (null !== o && ("bottom" === R ? o > 0 : o < 0)) return !0;
        if (a && a.length > 0) return !1;
        if ((U.current && i.getTime() - U.current.getTime() < c && 0 === o) || t) return ((U.current = i), !1);
        for (; r; ) {
          if (r.scrollHeight > r.clientHeight) {
            if (0 !== r.scrollTop) return ((U.current = new Date()), !1);
            if ("dialog" === r.getAttribute("role")) break;
          }
          r = r.parentNode;
        }
        return !0;
      }
      function eN(e) {
        (A && Q.current && (Q.current.classList.remove(eE), (V.current = !1), L(!1), (Y.current = new Date())),
          null == y || y(),
          e || S(!1),
          setTimeout(() => {
            l && ex(l[0]);
          }, 500));
      }
      function eS() {
        if (!Q.current) return;
        let e = document.querySelector("[data-vaul-drawer-wrapper]"),
          t = eb(Q.current, R);
        (ew(Q.current, {
          transform: "translate3d(0, 0, 0)",
          transition: `transform 0.5s cubic-bezier(${eR.join(",")})`,
        }),
          ew(z.current, { transition: `opacity 0.5s cubic-bezier(${eR.join(",")})`, opacity: "1" }),
          u &&
            t &&
            t > 0 &&
            N &&
            ew(
              e,
              {
                borderRadius: "8px",
                overflow: "hidden",
                ...(ey(R)
                  ? {
                      transform: `scale(${eF()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                      transformOrigin: "top",
                    }
                  : {
                      transform: `scale(${eF()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                      transformOrigin: "left",
                    }),
                transitionProperty: "transform, border-radius",
                transitionDuration: "0.5s",
                transitionTimingFunction: `cubic-bezier(${eR.join(",")})`,
              },
              !0,
            ));
      }
      return (
        o.default.useEffect(() => {
          window.requestAnimationFrame(() => {
            G.current = !0;
          });
        }, []),
        o.default.useEffect(() => {
          var e;
          function t() {
            if (Q.current && O && (eg(document.activeElement) || Z.current)) {
              var e;
              let t = (null == (e = window.visualViewport) ? void 0 : e.height) || 0,
                n = window.innerHeight,
                r = n - t,
                a = Q.current.getBoundingClientRect().height || 0;
              eo.current || (eo.current = a);
              let o = Q.current.getBoundingClientRect().top;
              if (
                (Math.abs(J.current - r) > 60 && (Z.current = !Z.current),
                l && l.length > 0 && eT && ev && (r += eT[ev] || 0),
                (J.current = r),
                a > t || Z.current)
              ) {
                let e = Q.current.getBoundingClientRect().height,
                  i = e;
                (e > t && (i = t - (a > 0.8 * n ? o : 26)),
                  h
                    ? (Q.current.style.height = `${e - Math.max(r, 0)}px`)
                    : (Q.current.style.height = `${Math.max(i, t - o)}px`));
              } else {
                let e;
                ((e = navigator.userAgent),
                  ("undefined" != typeof window && ((/Firefox/.test(e) && /Mobile/.test(e)) || /FxiOS/.test(e))) ||
                    (Q.current.style.height = `${eo.current}px`));
              }
              l && l.length > 0 && !Z.current
                ? (Q.current.style.bottom = "0px")
                : (Q.current.style.bottom = `${Math.max(r, 0)}px`);
            }
          }
          return (
            null == (e = window.visualViewport) || e.addEventListener("resize", t),
            () => {
              var e;
              return null == (e = window.visualViewport) ? void 0 : e.removeEventListener("resize", t);
            }
          );
        }, [ev, l, eT]),
        o.default.useEffect(
          () => (
            N && (ew(document.documentElement, { scrollBehavior: "auto" }), (_.current = new Date())),
            () => {
              !(function (e, t) {
                if (!e || !(e instanceof HTMLElement)) return;
                let n = eh.get(e);
                n && (e.style[t] = n[t]);
              })(document.documentElement, "scrollBehavior");
            }
          ),
          [N],
        ),
        o.default.useEffect(() => {
          w ||
            window.requestAnimationFrame(() => {
              document.body.style.pointerEvents = "auto";
            });
        }, [w]),
        o.default.createElement(
          P,
          {
            defaultOpen: E,
            onOpenChange: (e) => {
              (f || e) && (e ? B(!0) : eN(!0), S(e));
            },
            open: N,
          },
          o.default.createElement(
            et.Provider,
            {
              value: {
                activeSnapPoint: ec,
                snapPoints: l,
                setActiveSnapPoint: ex,
                drawerRef: Q,
                overlayRef: z,
                onOpenChange: n,
                onPress: function (e) {
                  var t, n;
                  (!f && !l) ||
                    ((!Q.current || Q.current.contains(e.target)) &&
                      ((ee.current = (null == (t = Q.current) ? void 0 : t.getBoundingClientRect().height) || 0),
                      (en.current = (null == (n = Q.current) ? void 0 : n.getBoundingClientRect().width) || 0),
                      L(!0),
                      (q.current = new Date()),
                      ea() && window.addEventListener("touchend", () => (V.current = !1), { once: !0 }),
                      e.target.setPointerCapture(e.pointerId),
                      (K.current = ey(R) ? e.pageY : e.pageX)));
                },
                onRelease: function (e) {
                  var t, n;
                  if (!A || !Q.current) return;
                  (Q.current.classList.remove(eE), (V.current = !1), L(!1), (Y.current = new Date()));
                  let r = eb(Q.current, R);
                  if (!e || !ek(e.target, !1) || !r || Number.isNaN(r) || null === q.current) return;
                  let a = Y.current.getTime() - q.current.getTime(),
                    o = K.current - (ey(R) ? e.pageY : e.pageX),
                    u = Math.abs(o) / a;
                  if (
                    (u > 0.05 &&
                      (H(!0),
                      setTimeout(() => {
                        H(!1);
                      }, 200)),
                    l)
                  ) {
                    (eC({
                      draggedDistance: o * ("bottom" === R || "right" === R ? 1 : -1),
                      closeDrawer: eN,
                      velocity: u,
                      dismissible: f,
                    }),
                      null == i || i(e, !0));
                    return;
                  }
                  if ("bottom" === R || "right" === R ? o > 0 : o < 0) {
                    (eS(), null == i || i(e, !0));
                    return;
                  }
                  if (u > 0.4) {
                    (eN(), null == i || i(e, !1));
                    return;
                  }
                  let d = Math.min(null != (t = Q.current.getBoundingClientRect().height) ? t : 0, window.innerHeight),
                    c = Math.min(null != (n = Q.current.getBoundingClientRect().width) ? n : 0, window.innerWidth);
                  if (Math.abs(r) >= ("left" === R || "right" === R ? c : d) * s) {
                    (eN(), null == i || i(e, !1));
                    return;
                  }
                  (null == i || i(e, !0), eS());
                },
                onDrag: function (e) {
                  if (Q.current && A) {
                    let t = "bottom" === R || "right" === R ? 1 : -1,
                      n = (K.current - (ey(R) ? e.pageY : e.pageX)) * t,
                      r = n > 0,
                      o = l && !f && !r;
                    if (o && 0 === ev) return;
                    let i = Math.abs(n),
                      d = document.querySelector("[data-vaul-drawer-wrapper]"),
                      s = i / ("bottom" === R || "top" === R ? ee.current : en.current),
                      c = eM(i, r);
                    if ((null !== c && (s = c), (o && s >= 1) || (!V.current && !ek(e.target, r)))) return;
                    if (
                      (Q.current.classList.add(eE),
                      (V.current = !0),
                      ew(Q.current, { transition: "none" }),
                      ew(z.current, { transition: "none" }),
                      l && eO({ draggedDistance: n }),
                      r && !l)
                    ) {
                      let e = Math.min(-(8 * (Math.log(n + 1) - 2) * 1), 0) * t;
                      ew(Q.current, { transform: ey(R) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
                      return;
                    }
                    let p = 1 - s;
                    if (
                      ((e$ || (m && ev === m - 1)) &&
                        (null == a || a(e, s), ew(z.current, { opacity: `${p}`, transition: "none" }, !0)),
                      d && z.current && u)
                    ) {
                      let e = Math.min(eF() + s * (1 - eF()), 1),
                        t = 8 - 8 * s,
                        n = Math.max(0, 14 - 14 * s);
                      ew(
                        d,
                        {
                          borderRadius: `${t}px`,
                          transform: ey(R)
                            ? `scale(${e}) translate3d(0, ${n}px, 0)`
                            : `scale(${e}) translate3d(${n}px, 0, 0)`,
                          transition: "none",
                        },
                        !0,
                      );
                    }
                    if (!l) {
                      let e = i * t;
                      ew(Q.current, { transform: ey(R) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
                    }
                  }
                },
                dismissible: f,
                shouldAnimate: G,
                handleOnly: p,
                isOpen: N,
                isDragging: A,
                shouldFade: e$,
                closeDrawer: eN,
                onNestedDrag: function (e, t) {
                  if (t < 0) return;
                  let n = (window.innerWidth - 16) / window.innerWidth,
                    r = n + t * (1 - n),
                    a = -16 + 16 * t;
                  ew(Q.current, {
                    transform: ey(R)
                      ? `scale(${r}) translate3d(0, ${a}px, 0)`
                      : `scale(${r}) translate3d(${a}px, 0, 0)`,
                    transition: "none",
                  });
                },
                onNestedOpenChange: function (e) {
                  let t = e ? (window.innerWidth - 16) / window.innerWidth : 1,
                    n = e ? -16 : 0;
                  (X.current && window.clearTimeout(X.current),
                    ew(Q.current, {
                      transition: `transform 0.5s cubic-bezier(${eR.join(",")})`,
                      transform: ey(R)
                        ? `scale(${t}) translate3d(0, ${n}px, 0)`
                        : `scale(${t}) translate3d(${n}px, 0, 0)`,
                    }),
                    !e &&
                      Q.current &&
                      (X.current = setTimeout(() => {
                        let e = eb(Q.current, R);
                        ew(Q.current, {
                          transition: "none",
                          transform: ey(R) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`,
                        });
                      }, 500)));
                },
                onNestedRelease: function (e, t) {
                  let n = ey(R) ? window.innerHeight : window.innerWidth,
                    r = t ? (n - 16) / n : 1,
                    a = t ? -16 : 0;
                  t &&
                    ew(Q.current, {
                      transition: `transform 0.5s cubic-bezier(${eR.join(",")})`,
                      transform: ey(R)
                        ? `scale(${r}) translate3d(0, ${a}px, 0)`
                        : `scale(${r}) translate3d(${a}px, 0, 0)`,
                    });
                },
                keyboardIsOpen: Z,
                modal: w,
                snapPointsOffset: eT,
                activeSnapPointIndex: ev,
                direction: R,
                shouldScaleBackground: u,
                setBackgroundColorOnScale: d,
                noBodyStyles: x,
                container: M,
                autoFocus: j,
              },
            },
            r,
          ),
        )
      );
    }
    let e$ = o.default.forwardRef(function ({ ...e }, t) {
      let { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: i, isOpen: l, modal: u, shouldAnimate: d } = en(),
        s = ev(t, n),
        c = r && r.length > 0;
      if (!u) return null;
      let f = o.default.useCallback((e) => a(e), [a]);
      return o.default.createElement(S, {
        onMouseUp: f,
        ref: s,
        "data-vaul-overlay": "",
        "data-vaul-snap-points": l && c ? "true" : "false",
        "data-vaul-snap-points-overlay": l && i ? "true" : "false",
        "data-vaul-animate": (null == d ? void 0 : d.current) ? "true" : "false",
        ...e,
      });
    });
    e$.displayName = "Drawer.Overlay";
    let eM = o.default.forwardRef(function ({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
      let {
          drawerRef: i,
          onPress: l,
          onRelease: u,
          onDrag: d,
          keyboardIsOpen: s,
          snapPointsOffset: c,
          activeSnapPointIndex: f,
          modal: p,
          isOpen: m,
          direction: g,
          snapPoints: v,
          container: h,
          handleOnly: w,
          shouldAnimate: y,
          autoFocus: b,
        } = en(),
        [x, R] = o.default.useState(!1),
        E = ev(a, i),
        C = o.default.useRef(null),
        D = o.default.useRef(null),
        T = o.default.useRef(!1),
        P = v && v.length > 0;
      function O(e) {
        ((C.current = null), (T.current = !1), u(e));
      }
      return (
        !(function () {
          let {
              direction: e,
              isOpen: t,
              shouldScaleBackground: n,
              setBackgroundColorOnScale: r,
              noBodyStyles: a,
            } = en(),
            i = o.default.useRef(null),
            l = (0, o.useMemo)(() => document.body.style.backgroundColor, []);
          function u() {
            return (window.innerWidth - 26) / window.innerWidth;
          }
          o.default.useEffect(() => {
            if (t && n) {
              i.current && clearTimeout(i.current);
              let t =
                document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
              if (!t) return;
              !(function (...e) {})(
                r && !a ? ex(document.body, { background: "black" }) : eT,
                ex(t, {
                  transformOrigin: ey(e) ? "top" : "left",
                  transitionProperty: "transform, border-radius",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: `cubic-bezier(${eR.join(",")})`,
                }),
              );
              let n = ex(t, {
                borderRadius: "8px",
                overflow: "hidden",
                ...(ey(e)
                  ? { transform: `scale(${u()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` }
                  : { transform: `scale(${u()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }),
              });
              return () => {
                (n(),
                  (i.current = window.setTimeout(() => {
                    l ? (document.body.style.background = l) : document.body.style.removeProperty("background");
                  }, 500)));
              };
            }
          }, [t, n, l]);
        })(),
        o.default.useEffect(() => {
          P &&
            window.requestAnimationFrame(() => {
              R(!0);
            });
        }, []),
        o.default.createElement(L, {
          "data-vaul-drawer-direction": g,
          "data-vaul-drawer": "",
          "data-vaul-delayed-snap-points": x ? "true" : "false",
          "data-vaul-snap-points": m && P ? "true" : "false",
          "data-vaul-custom-container": h ? "true" : "false",
          "data-vaul-animate": (null == y ? void 0 : y.current) ? "true" : "false",
          ...r,
          ref: E,
          style: c && c.length > 0 ? { "--snap-point-height": `${c[null != f ? f : 0]}px`, ...t } : t,
          onPointerDown: (e) => {
            w ||
              (null == r.onPointerDown || r.onPointerDown.call(r, e), (C.current = { x: e.pageX, y: e.pageY }), l(e));
          },
          onOpenAutoFocus: (e) => {
            (null == n || n(e), b || e.preventDefault());
          },
          onPointerDownOutside: (t) => {
            (null == e || e(t), !p || t.defaultPrevented) ? t.preventDefault() : s.current && (s.current = !1);
          },
          onFocusOutside: (e) => {
            if (!p) return void e.preventDefault();
          },
          onPointerMove: (e) => {
            if (((D.current = e), w || (null == r.onPointerMove || r.onPointerMove.call(r, e), !C.current))) return;
            let t = e.pageY - C.current.y,
              n = e.pageX - C.current.x,
              a = "touch" === e.pointerType ? 10 : 2;
            ((e, t, n = 0) => {
              if (T.current) return !0;
              let r = Math.abs(e.y),
                a = Math.abs(e.x),
                o = a > r,
                i = ["bottom", "right"].includes(t) ? 1 : -1;
              if ("left" === t || "right" === t) {
                if (!(e.x * i < 0) && a >= 0 && a <= n) return o;
              } else if (!(e.y * i < 0) && r >= 0 && r <= n) return !o;
              return ((T.current = !0), !0);
            })({ x: n, y: t }, g, a)
              ? d(e)
              : (Math.abs(n) > a || Math.abs(t) > a) && (C.current = null);
          },
          onPointerUp: (e) => {
            (null == r.onPointerUp || r.onPointerUp.call(r, e), (C.current = null), (T.current = !1), u(e));
          },
          onPointerOut: (e) => {
            (null == r.onPointerOut || r.onPointerOut.call(r, e), O(D.current));
          },
          onContextMenu: (e) => {
            (null == r.onContextMenu || r.onContextMenu.call(r, e), D.current && O(D.current));
          },
        })
      );
    });
    eM.displayName = "Drawer.Content";
    let ej = o.default.forwardRef(function ({ preventCycle: e = !1, children: t, ...n }, r) {
      let {
          closeDrawer: a,
          isDragging: i,
          snapPoints: l,
          activeSnapPoint: u,
          setActiveSnapPoint: d,
          dismissible: s,
          handleOnly: c,
          isOpen: f,
          onPress: p,
          onDrag: m,
        } = en(),
        g = o.default.useRef(null),
        v = o.default.useRef(!1);
      function h() {
        (g.current && window.clearTimeout(g.current), (v.current = !1));
      }
      return o.default.createElement(
        "div",
        {
          onClick: function () {
            v.current
              ? h()
              : window.setTimeout(() => {
                  !(function () {
                    if (i || e || v.current) return h();
                    if ((h(), !l || 0 === l.length)) {
                      s || a();
                      return;
                    }
                    if (u === l[l.length - 1] && s) return a();
                    let t = l.findIndex((e) => e === u);
                    -1 === t || d(l[t + 1]);
                  })();
                }, 120);
          },
          onPointerCancel: h,
          onPointerDown: (e) => {
            (c && p(e),
              (g.current = window.setTimeout(() => {
                v.current = !0;
              }, 250)));
          },
          onPointerMove: (e) => {
            c && m(e);
          },
          ref: r,
          "data-vaul-drawer-visible": f ? "true" : "false",
          "data-vaul-handle": "",
          "aria-hidden": "true",
          ...n,
        },
        o.default.createElement("span", { "data-vaul-handle-hitarea": "", "aria-hidden": "true" }, t),
      );
    });
    ej.displayName = "Drawer.Handle";
    let eF = {
      Root: eO,
      NestedRoot: function ({ onDrag: e, onOpenChange: t, open: n, ...r }) {
        let { onNestedDrag: a, onNestedOpenChange: i, onNestedRelease: l } = en();
        if (!a) throw Error("Drawer.NestedRoot must be placed in another drawer");
        return o.default.createElement(eO, {
          nested: !0,
          open: n,
          onClose: () => {
            i(!1);
          },
          onDrag: (t, n) => {
            (a(t, n), null == e || e(t, n));
          },
          onOpenChange: (e) => {
            (e && i(e), null == t || t(e));
          },
          onRelease: l,
          ...r,
        });
      },
      Content: eM,
      Overlay: e$,
      Trigger: $,
      Portal: function (e) {
        let t = en(),
          { container: n = t.container, ...r } = e;
        return o.default.createElement(k, { container: n, ...r });
      },
      Handle: ej,
      Close: X,
      Title: q,
      Description: U,
    };
    e.s(["Drawer", () => eF], 941695);
  },
  299846,
  (e) => {
    "use strict";
    (e.i(802252), e.i(770572), e.i(941695), e.i(266356));
    let t = Error("Cannot find module '@/lib/utils'");
    throw ((t.code = "MODULE_NOT_FOUND"), t);
  },
]);
