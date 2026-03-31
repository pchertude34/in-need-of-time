module.exports = [
  369471,
  (a) => {
    "use strict";
    var b = a.i(805485);
    let c = b.forwardRef(function ({ title: a, titleId: c, ...d }, e) {
      return b.createElement(
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
            ref: e,
            "aria-labelledby": c,
          },
          d,
        ),
        a ? b.createElement("title", { id: c }, a) : null,
        b.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
        }),
      );
    });
    a.s(["MagnifyingGlassIcon", 0, c], 369471);
  },
  886792,
  (a) => {
    "use strict";
    let b, c, d, e;
    var f = a.i(805485),
      g = a.i(571993),
      h = a.i(298506),
      i = a.i(28390),
      j = a.i(380482),
      k = a.i(468359),
      l = a.i(412633),
      m = a.i(700975),
      n = a.i(160962),
      o = a.i(309986),
      p = a.i(222717),
      q = a.i(45618),
      r = a.i(693928),
      s = a.i(127814),
      t = a.i(13795),
      u = Symbol("radix.slottable");
    function v(a) {
      return f.isValidElement(a) && "function" == typeof a.type && "__radixId" in a.type && a.type.__radixId === u;
    }
    var w = "Dialog",
      [x, y] = (0, i.createContextScope)(w),
      [z, A] = x(w),
      B = (a) => {
        let { __scopeDialog: b, children: c, open: d, defaultOpen: e, onOpenChange: g, modal: h = !0 } = a,
          i = f.useRef(null),
          l = f.useRef(null),
          [m, n] = (0, k.useControllableState)({ prop: d, defaultProp: e ?? !1, onChange: g, caller: w });
        return (0, t.jsx)(z, {
          scope: b,
          triggerRef: i,
          contentRef: l,
          contentId: (0, j.useId)(),
          titleId: (0, j.useId)(),
          descriptionId: (0, j.useId)(),
          open: m,
          onOpenChange: n,
          onOpenToggle: f.useCallback(() => n((a) => !a), [n]),
          modal: h,
          children: c,
        });
      };
    B.displayName = w;
    var C = "DialogTrigger",
      D = f.forwardRef((a, b) => {
        let { __scopeDialog: c, ...d } = a,
          e = A(C, c),
          f = (0, h.useComposedRefs)(b, e.triggerRef);
        return (0, t.jsx)(p.Primitive.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": e.open,
          "aria-controls": e.contentId,
          "data-state": X(e.open),
          ...d,
          ref: f,
          onClick: (0, g.composeEventHandlers)(a.onClick, e.onOpenToggle),
        });
      });
    D.displayName = C;
    var E = "DialogPortal",
      [F, G] = x(E, { forceMount: void 0 }),
      H = (a) => {
        let { __scopeDialog: b, forceMount: c, children: d, container: e } = a,
          g = A(E, b);
        return (0, t.jsx)(F, {
          scope: b,
          forceMount: c,
          children: f.Children.map(d, (a) =>
            (0, t.jsx)(o.Presence, {
              present: c || g.open,
              children: (0, t.jsx)(n.Portal, { asChild: !0, container: e, children: a }),
            }),
          ),
        });
      };
    H.displayName = E;
    var I = "DialogOverlay",
      J = f.forwardRef((a, b) => {
        let c = G(I, a.__scopeDialog),
          { forceMount: d = c.forceMount, ...e } = a,
          f = A(I, a.__scopeDialog);
        return f.modal
          ? (0, t.jsx)(o.Presence, { present: d || f.open, children: (0, t.jsx)(L, { ...e, ref: b }) })
          : null;
      });
    J.displayName = I;
    var K =
        (((e = f.forwardRef((a, b) => {
          let { children: c, ...d } = a;
          if (f.isValidElement(c)) {
            var e;
            let a,
              g,
              i =
                ((e = c),
                (g =
                  (a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get) &&
                  "isReactWarning" in a &&
                  a.isReactWarning)
                  ? e.ref
                  : (g =
                        (a = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                        "isReactWarning" in a &&
                        a.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref),
              j = (function (a, b) {
                let c = { ...b };
                for (let d in b) {
                  let e = a[d],
                    f = b[d];
                  /^on[A-Z]/.test(d)
                    ? e && f
                      ? (c[d] = (...a) => {
                          let b = f(...a);
                          return (e(...a), b);
                        })
                      : e && (c[d] = e)
                    : "style" === d
                      ? (c[d] = { ...e, ...f })
                      : "className" === d && (c[d] = [e, f].filter(Boolean).join(" "));
                }
                return { ...a, ...c };
              })(d, c.props);
            return (c.type !== f.Fragment && (j.ref = b ? (0, h.composeRefs)(b, i) : i), f.cloneElement(c, j));
          }
          return f.Children.count(c) > 1 ? f.Children.only(null) : null;
        })).displayName = "DialogOverlay.RemoveScroll.SlotClone"),
        (c = e),
        ((d = f.forwardRef((a, b) => {
          let { children: d, ...e } = a,
            g = f.Children.toArray(d),
            h = g.find(v);
          if (h) {
            let a = h.props.children,
              d = g.map((b) =>
                b !== h
                  ? b
                  : f.Children.count(a) > 1
                    ? f.Children.only(null)
                    : f.isValidElement(a)
                      ? a.props.children
                      : null,
              );
            return (0, t.jsx)(c, { ...e, ref: b, children: f.isValidElement(a) ? f.cloneElement(a, void 0, d) : null });
          }
          return (0, t.jsx)(c, { ...e, ref: b, children: d });
        })).displayName = "DialogOverlay.RemoveScroll.Slot"),
        d),
      L = f.forwardRef((a, b) => {
        let { __scopeDialog: c, ...d } = a,
          e = A(I, c);
        return (0, t.jsx)(r.RemoveScroll, {
          as: K,
          allowPinchZoom: !0,
          shards: [e.contentRef],
          children: (0, t.jsx)(p.Primitive.div, {
            "data-state": X(e.open),
            ...d,
            ref: b,
            style: { pointerEvents: "auto", ...d.style },
          }),
        });
      }),
      M = "DialogContent",
      N = f.forwardRef((a, b) => {
        let c = G(M, a.__scopeDialog),
          { forceMount: d = c.forceMount, ...e } = a,
          f = A(M, a.__scopeDialog);
        return (0, t.jsx)(o.Presence, {
          present: d || f.open,
          children: f.modal ? (0, t.jsx)(O, { ...e, ref: b }) : (0, t.jsx)(P, { ...e, ref: b }),
        });
      });
    N.displayName = M;
    var O = f.forwardRef((a, b) => {
        let c = A(M, a.__scopeDialog),
          d = f.useRef(null),
          e = (0, h.useComposedRefs)(b, c.contentRef, d);
        return (
          f.useEffect(() => {
            let a = d.current;
            if (a) return (0, s.hideOthers)(a);
          }, []),
          (0, t.jsx)(Q, {
            ...a,
            ref: e,
            trapFocus: c.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, g.composeEventHandlers)(a.onCloseAutoFocus, (a) => {
              (a.preventDefault(), c.triggerRef.current?.focus());
            }),
            onPointerDownOutside: (0, g.composeEventHandlers)(a.onPointerDownOutside, (a) => {
              let b = a.detail.originalEvent,
                c = 0 === b.button && !0 === b.ctrlKey;
              (2 === b.button || c) && a.preventDefault();
            }),
            onFocusOutside: (0, g.composeEventHandlers)(a.onFocusOutside, (a) => a.preventDefault()),
          })
        );
      }),
      P = f.forwardRef((a, b) => {
        let c = A(M, a.__scopeDialog),
          d = f.useRef(!1),
          e = f.useRef(!1);
        return (0, t.jsx)(Q, {
          ...a,
          ref: b,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          onCloseAutoFocus: (b) => {
            (a.onCloseAutoFocus?.(b),
              b.defaultPrevented || (d.current || c.triggerRef.current?.focus(), b.preventDefault()),
              (d.current = !1),
              (e.current = !1));
          },
          onInteractOutside: (b) => {
            (a.onInteractOutside?.(b),
              b.defaultPrevented ||
                ((d.current = !0), "pointerdown" === b.detail.originalEvent.type && (e.current = !0)));
            let f = b.target;
            (c.triggerRef.current?.contains(f) && b.preventDefault(),
              "focusin" === b.detail.originalEvent.type && e.current && b.preventDefault());
          },
        });
      }),
      Q = f.forwardRef((a, b) => {
        let { __scopeDialog: c, trapFocus: d, onOpenAutoFocus: e, onCloseAutoFocus: g, ...i } = a,
          j = A(M, c),
          k = f.useRef(null),
          n = (0, h.useComposedRefs)(b, k);
        return (
          (0, q.useFocusGuards)(),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(m.FocusScope, {
                asChild: !0,
                loop: !0,
                trapped: d,
                onMountAutoFocus: e,
                onUnmountAutoFocus: g,
                children: (0, t.jsx)(l.DismissableLayer, {
                  role: "dialog",
                  id: j.contentId,
                  "aria-describedby": j.descriptionId,
                  "aria-labelledby": j.titleId,
                  "data-state": X(j.open),
                  ...i,
                  ref: n,
                  onDismiss: () => j.onOpenChange(!1),
                }),
              }),
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(_, { titleId: j.titleId }),
                  (0, t.jsx)(aa, { contentRef: k, descriptionId: j.descriptionId }),
                ],
              }),
            ],
          })
        );
      }),
      R = "DialogTitle",
      S = f.forwardRef((a, b) => {
        let { __scopeDialog: c, ...d } = a,
          e = A(R, c);
        return (0, t.jsx)(p.Primitive.h2, { id: e.titleId, ...d, ref: b });
      });
    S.displayName = R;
    var T = "DialogDescription",
      U = f.forwardRef((a, b) => {
        let { __scopeDialog: c, ...d } = a,
          e = A(T, c);
        return (0, t.jsx)(p.Primitive.p, { id: e.descriptionId, ...d, ref: b });
      });
    U.displayName = T;
    var V = "DialogClose",
      W = f.forwardRef((a, b) => {
        let { __scopeDialog: c, ...d } = a,
          e = A(V, c);
        return (0, t.jsx)(p.Primitive.button, {
          type: "button",
          ...d,
          ref: b,
          onClick: (0, g.composeEventHandlers)(a.onClick, () => e.onOpenChange(!1)),
        });
      });
    function X(a) {
      return a ? "open" : "closed";
    }
    W.displayName = V;
    var Y = "DialogTitleWarning",
      [Z, $] = (0, i.createContext)(Y, { contentName: M, titleName: R, docsSlug: "dialog" }),
      _ = ({ titleId: a }) => {
        let b = $(Y),
          c = `\`${b.contentName}\` requires a \`${b.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${b.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${b.docsSlug}`;
        return (
          f.useEffect(() => {
            a && (document.getElementById(a) || console.error(c));
          }, [c, a]),
          null
        );
      },
      aa = ({ contentRef: a, descriptionId: b }) => {
        let c = $("DialogDescriptionWarning"),
          d = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${c.contentName}}.`;
        return (
          f.useEffect(() => {
            let c = a.current?.getAttribute("aria-describedby");
            b && c && (document.getElementById(b) || console.warn(d));
          }, [d, a, b]),
          null
        );
      };
    let ab = f.default.createContext({
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
      ac = () => {
        let a = f.default.useContext(ab);
        if (!a) throw Error("useDrawerContext must be used within a Drawer.Root");
        return a;
      };
    function ad() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    function ae() {
      return af(/^iPhone/) || af(/^iPad/) || (af(/^Mac/) && navigator.maxTouchPoints > 1);
    }
    function af(a) {}
    !(function (a) {
      if (!a || "undefined" == typeof document) return;
      let b = document.head || document.getElementsByTagName("head")[0],
        c = document.createElement("style");
      ((c.type = "text/css"),
        b.appendChild(c),
        c.styleSheet ? (c.styleSheet.cssText = a) : c.appendChild(document.createTextNode(a)));
    })(
      "[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}",
    );
    let ag = f.useEffect;
    "undefined" != typeof document && window.visualViewport;
    let ah = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
      ai = 0;
    function aj(...a) {
      return f.useCallback(
        (function (...a) {
          return (b) =>
            a.forEach((a) => {
              "function" == typeof a ? a(b) : null != a && (a.current = b);
            });
        })(...a),
        a,
      );
    }
    let ak = new WeakMap();
    function al(a, b, c = !1) {
      if (!a || !(a instanceof HTMLElement)) return;
      let d = {};
      (Object.entries(b).forEach(([b, c]) => {
        b.startsWith("--") ? a.style.setProperty(b, c) : ((d[b] = a.style[b]), (a.style[b] = c));
      }),
        c || ak.set(a, d));
    }
    let am = (a) => {
      switch (a) {
        case "top":
        case "bottom":
          return !0;
        case "left":
        case "right":
          return !1;
        default:
          return a;
      }
    };
    function an(a, b) {
      if (!a) return null;
      let c = window.getComputedStyle(a),
        d = c.transform || c.webkitTransform || c.mozTransform,
        e = d.match(/^matrix3d\((.+)\)$/);
      return e
        ? parseFloat(e[1].split(", ")[am(b) ? 13 : 12])
        : (e = d.match(/^matrix\((.+)\)$/))
          ? parseFloat(e[1].split(", ")[am(b) ? 5 : 4])
          : null;
    }
    function ao(a, b) {
      if (!a) return () => {};
      let c = a.style.cssText;
      return (
        Object.assign(a.style, b),
        () => {
          a.style.cssText = c;
        }
      );
    }
    let ap = [0.32, 0.72, 0, 1],
      aq = "vaul-dragging";
    function ar(a) {
      let b = f.default.useRef(a);
      return (
        f.default.useEffect(() => {
          b.current = a;
        }),
        f.default.useMemo(
          () =>
            (...a) =>
              null == b.current ? void 0 : b.current.call(b, ...a),
          [],
        )
      );
    }
    function as({ prop: a, defaultProp: b, onChange: c = () => {} }) {
      let [d, e] = (function ({ defaultProp: a, onChange: b }) {
          let c = f.default.useState(a),
            [d] = c,
            e = f.default.useRef(d),
            g = ar(b);
          return (
            f.default.useEffect(() => {
              e.current !== d && (g(d), (e.current = d));
            }, [d, e, g]),
            c
          );
        })({ defaultProp: b, onChange: c }),
        g = void 0 !== a,
        h = g ? a : d,
        i = ar(c);
      return [
        h,
        f.default.useCallback(
          (b) => {
            if (g) {
              let c = "function" == typeof b ? b(a) : b;
              c !== a && i(c);
            } else e(b);
          },
          [g, a, e, i],
        ),
      ];
    }
    let at = () => () => {},
      au = null;
    function av({
      open: a,
      onOpenChange: c,
      children: d,
      onDrag: e,
      onRelease: g,
      snapPoints: h,
      shouldScaleBackground: i = !1,
      setBackgroundColorOnScale: j = !0,
      closeThreshold: k = 0.25,
      scrollLockTimeout: l = 100,
      dismissible: m = !0,
      handleOnly: n = !1,
      fadeFromIndex: o = h && h.length - 1,
      activeSnapPoint: p,
      setActiveSnapPoint: q,
      fixed: r,
      modal: s = !0,
      onClose: t,
      nested: u,
      noBodyStyles: v = !1,
      direction: w = "bottom",
      defaultOpen: x = !1,
      disablePreventScroll: y = !0,
      snapToSequentialPoint: z = !1,
      preventScrollRestoration: A = !1,
      repositionInputs: C = !0,
      onAnimationEnd: D,
      container: E,
      autoFocus: F = !1,
    }) {
      var G, H;
      let [I = !1, J] = as({
          defaultProp: x,
          prop: a,
          onChange: (a) => {
            (null == c || c(a),
              a || u || aA(),
              setTimeout(() => {
                null == D || D(a);
              }, 500),
              a || (document.body.style.pointerEvents = "auto"));
          },
        }),
        [K, L] = f.default.useState(!1),
        [M, N] = f.default.useState(!1),
        [O, P] = f.default.useState(!1),
        Q = f.default.useRef(null),
        R = f.default.useRef(null),
        S = f.default.useRef(null),
        T = f.default.useRef(null),
        U = f.default.useRef(null),
        V = f.default.useRef(!1),
        W = f.default.useRef(null),
        X = f.default.useRef(0),
        Y = f.default.useRef(!1),
        Z = f.default.useRef(!x),
        $ = f.default.useRef(0),
        _ = f.default.useRef(null),
        aa = f.default.useRef((null == (G = _.current) ? void 0 : G.getBoundingClientRect().height) || 0),
        ac = f.default.useRef((null == (H = _.current) ? void 0 : H.getBoundingClientRect().width) || 0),
        af = f.default.useRef(0),
        aj = f.default.useCallback((a) => {
          h && a === aw.length - 1 && (R.current = new Date());
        }, []),
        {
          activeSnapPoint: ao,
          activeSnapPointIndex: ar,
          setActiveSnapPoint: at,
          onRelease: av,
          snapPointsOffset: aw,
          onDrag: ax,
          shouldFade: ay,
          getPercentageDragged: az,
        } = (function ({
          activeSnapPointProp: a,
          setActiveSnapPointProp: b,
          snapPoints: c,
          drawerRef: d,
          overlayRef: e,
          fadeFromIndex: g,
          onSnapPointChange: h,
          direction: i = "bottom",
          container: j,
          snapToSequentialPoint: k,
        }) {
          let [l, m] = as({ prop: a, defaultProp: null == c ? void 0 : c[0], onChange: b }),
            [n, o] = f.default.useState(void 0);
          f.default.useEffect(() => {
            function a() {
              o({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
            }
            return (window.addEventListener("resize", a), () => window.removeEventListener("resize", a));
          }, []);
          let p = f.default.useMemo(() => l === (null == c ? void 0 : c[c.length - 1]) || null, [c, l]),
            q = f.default.useMemo(() => {
              var a;
              return null != (a = null == c ? void 0 : c.findIndex((a) => a === l)) ? a : null;
            }, [c, l]),
            r = (c && c.length > 0 && (g || 0 === g) && !Number.isNaN(g) && c[g] === l) || !c,
            s = f.default.useMemo(() => {
              var a;
              let b = j
                ? { width: j.getBoundingClientRect().width, height: j.getBoundingClientRect().height }
                : { width: 0, height: 0 };
              return null !=
                (a =
                  null == c
                    ? void 0
                    : c.map((a) => {
                        let c = "string" == typeof a,
                          d = 0;
                        if ((c && (d = parseInt(a, 10)), am(i))) {
                          let e = c ? d : n ? a * b.height : 0;
                          return n ? ("bottom" === i ? b.height - e : -b.height + e) : e;
                        }
                        let e = c ? d : n ? a * b.width : 0;
                        return n ? ("right" === i ? b.width - e : -b.width + e) : e;
                      }))
                ? a
                : [];
            }, [c, n, j]),
            t = f.default.useMemo(() => (null !== q ? (null == s ? void 0 : s[q]) : null), [s, q]),
            u = f.default.useCallback(
              (a) => {
                var b;
                let f = null != (b = null == s ? void 0 : s.findIndex((b) => b === a)) ? b : null;
                (h(f),
                  al(d.current, {
                    transition: `transform 0.5s cubic-bezier(${ap.join(",")})`,
                    transform: am(i) ? `translate3d(0, ${a}px, 0)` : `translate3d(${a}px, 0, 0)`,
                  }),
                  s && f !== s.length - 1 && void 0 !== g && f !== g && f < g
                    ? al(e.current, { transition: `opacity 0.5s cubic-bezier(${ap.join(",")})`, opacity: "0" })
                    : al(e.current, { transition: `opacity 0.5s cubic-bezier(${ap.join(",")})`, opacity: "1" }),
                  m(null == c ? void 0 : c[Math.max(f, 0)]));
              },
              [d.current, c, s, g, e, m],
            );
          return (
            f.default.useEffect(() => {
              if (l || a) {
                var b;
                let d = null != (b = null == c ? void 0 : c.findIndex((b) => b === a || b === l)) ? b : -1;
                s && -1 !== d && "number" == typeof s[d] && u(s[d]);
              }
            }, [l, a, c, s, u]),
            {
              isLastSnapPoint: p,
              activeSnapPoint: l,
              shouldFade: r,
              getPercentageDragged: function (a, b) {
                if (!c || "number" != typeof q || !s || void 0 === g) return null;
                let d = q === g - 1;
                if (q >= g && b) return 0;
                if (d && !b) return 1;
                if (!r && !d) return null;
                let e = d ? q + 1 : q - 1,
                  f = a / Math.abs(d ? s[e] - s[e - 1] : s[e + 1] - s[e]);
                return d ? 1 - f : f;
              },
              setActiveSnapPoint: m,
              activeSnapPointIndex: q,
              onRelease: function ({ draggedDistance: a, closeDrawer: b, velocity: d, dismissible: f }) {
                if (void 0 === g) return;
                let h = "bottom" === i || "right" === i ? (null != t ? t : 0) - a : (null != t ? t : 0) + a,
                  j = q === g - 1,
                  l = 0 === q,
                  m = a > 0;
                if (
                  (j && al(e.current, { transition: `opacity 0.5s cubic-bezier(${ap.join(",")})` }), !k && d > 2 && !m)
                )
                  return void (f ? b() : u(s[0]));
                if (!k && d > 2 && m && s && c) return void u(s[c.length - 1]);
                let n =
                    null == s
                      ? void 0
                      : s.reduce((a, b) =>
                          "number" != typeof a || "number" != typeof b ? a : Math.abs(b - h) < Math.abs(a - h) ? b : a,
                        ),
                  o = am(i) ? window.innerHeight : window.innerWidth;
                if (d > 0.4 && Math.abs(a) < 0.4 * o) {
                  let a = m ? 1 : -1;
                  return a > 0 && p && c
                    ? void u(s[c.length - 1])
                    : void (l && a < 0 && f && b(), null === q || u(s[q + a]));
                }
                u(n);
              },
              onDrag: function ({ draggedDistance: a }) {
                if (null === t) return;
                let b = "bottom" === i || "right" === i ? t - a : t + a;
                (("bottom" === i || "right" === i) && b < s[s.length - 1]) ||
                  (("top" === i || "left" === i) && b > s[s.length - 1]) ||
                  al(d.current, { transform: am(i) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)` });
              },
              snapPointsOffset: s,
            }
          );
        })({
          snapPoints: h,
          activeSnapPointProp: p,
          setActiveSnapPointProp: q,
          drawerRef: _,
          fadeFromIndex: o,
          overlayRef: Q,
          onSnapPointChange: aj,
          direction: w,
          container: E,
          snapToSequentialPoint: z,
        });
      !(function (a = {}) {
        let { isDisabled: c } = a;
        ag(() => {
          if (!c)
            return (
              1 == ++ai && ae(),
              () => {
                0 == --ai && (null == b || b());
              }
            );
        }, [c]);
      })({ isDisabled: !I || M || !s || O || !K || !C || !y });
      let { restorePositionSetting: aA } = (function ({
        isOpen: a,
        modal: b,
        nested: c,
        hasBeenOpened: d,
        preventScrollRestoration: e,
        noBodyStyles: g,
      }) {
        let [h, i] = f.default.useState(() => ""),
          j = f.default.useRef(0),
          k = f.default.useCallback(() => {
            if (ad() && null === au && a && !g) {
              au = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left,
                height: document.body.style.height,
                right: "unset",
              };
              let { scrollX: a, innerHeight: b } = window;
              (document.body.style.setProperty("position", "fixed", "important"),
                Object.assign(document.body.style, {
                  top: `${-j.current}px`,
                  left: `${-a}px`,
                  right: "0px",
                  height: "auto",
                }),
                window.setTimeout(
                  () =>
                    window.requestAnimationFrame(() => {
                      let a = b - window.innerHeight;
                      a && j.current >= b && (document.body.style.top = `${-(j.current + a)}px`);
                    }),
                  300,
                ));
            }
          }, [a]),
          l = f.default.useCallback(() => {
            if (ad() && null !== au && !g) {
              let a = -parseInt(document.body.style.top, 10),
                b = -parseInt(document.body.style.left, 10);
              (Object.assign(document.body.style, au),
                window.requestAnimationFrame(() => {
                  e && h !== window.location.href ? i(window.location.href) : window.scrollTo(b, a);
                }),
                (au = null));
            }
          }, [h]);
        return (
          f.default.useEffect(() => {
            function a() {
              j.current = window.scrollY;
            }
            return (
              a(),
              window.addEventListener("scroll", a),
              () => {
                window.removeEventListener("scroll", a);
              }
            );
          }, []),
          f.default.useEffect(() => {
            if (b)
              return () => {
                "undefined" == typeof document || document.querySelector("[data-vaul-drawer]") || l();
              };
          }, [b, l]),
          f.default.useEffect(() => {
            !c &&
              d &&
              (a
                ? (window.matchMedia("(display-mode: standalone)").matches || k(),
                  b ||
                    window.setTimeout(() => {
                      l();
                    }, 500))
                : l());
          }, [a, d, h, b, c, k, l]),
          { restorePositionSetting: l }
        );
      })({
        isOpen: I,
        modal: s,
        nested: null != u && u,
        hasBeenOpened: K,
        preventScrollRestoration: A,
        noBodyStyles: v,
      });
      function aB() {
        return (window.innerWidth - 26) / window.innerWidth;
      }
      function aC(a, b) {
        var c;
        let d = a,
          e = null == (c = window.getSelection()) ? void 0 : c.toString(),
          f = _.current ? an(_.current, w) : null,
          g = new Date();
        if ("SELECT" === d.tagName || d.hasAttribute("data-vaul-no-drag") || d.closest("[data-vaul-no-drag]"))
          return !1;
        if ("right" === w || "left" === w) return !0;
        if (R.current && g.getTime() - R.current.getTime() < 500) return !1;
        if (null !== f && ("bottom" === w ? f > 0 : f < 0)) return !0;
        if (e && e.length > 0) return !1;
        if ((U.current && g.getTime() - U.current.getTime() < l && 0 === f) || b) return ((U.current = g), !1);
        for (; d; ) {
          if (d.scrollHeight > d.clientHeight) {
            if (0 !== d.scrollTop) return ((U.current = new Date()), !1);
            if ("dialog" === d.getAttribute("role")) break;
          }
          d = d.parentNode;
        }
        return !0;
      }
      function aD(a) {
        (M && _.current && (_.current.classList.remove(aq), (V.current = !1), N(!1), (T.current = new Date())),
          null == t || t(),
          a || J(!1),
          setTimeout(() => {
            h && at(h[0]);
          }, 500));
      }
      function aE() {
        if (!_.current) return;
        let a = document.querySelector("[data-vaul-drawer-wrapper]"),
          b = an(_.current, w);
        (al(_.current, {
          transform: "translate3d(0, 0, 0)",
          transition: `transform 0.5s cubic-bezier(${ap.join(",")})`,
        }),
          al(Q.current, { transition: `opacity 0.5s cubic-bezier(${ap.join(",")})`, opacity: "1" }),
          i &&
            b &&
            b > 0 &&
            I &&
            al(
              a,
              {
                borderRadius: "8px",
                overflow: "hidden",
                ...(am(w)
                  ? {
                      transform: `scale(${aB()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                      transformOrigin: "top",
                    }
                  : {
                      transform: `scale(${aB()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                      transformOrigin: "left",
                    }),
                transitionProperty: "transform, border-radius",
                transitionDuration: "0.5s",
                transitionTimingFunction: `cubic-bezier(${ap.join(",")})`,
              },
              !0,
            ));
      }
      return (
        f.default.useEffect(() => {
          window.requestAnimationFrame(() => {
            Z.current = !0;
          });
        }, []),
        f.default.useEffect(() => {
          var a;
          function b() {
            var a, b;
            if (
              _.current &&
              C &&
              (((a = document.activeElement) instanceof HTMLInputElement && !ah.has(a.type)) ||
                a instanceof HTMLTextAreaElement ||
                (a instanceof HTMLElement && a.isContentEditable) ||
                Y.current)
            ) {
              let a = (null == (b = window.visualViewport) ? void 0 : b.height) || 0,
                c = window.innerHeight,
                d = c - a,
                e = _.current.getBoundingClientRect().height || 0;
              af.current || (af.current = e);
              let f = _.current.getBoundingClientRect().top;
              if (
                (Math.abs($.current - d) > 60 && (Y.current = !Y.current),
                h && h.length > 0 && aw && ar && (d += aw[ar] || 0),
                ($.current = d),
                e > a || Y.current)
              ) {
                let b = _.current.getBoundingClientRect().height,
                  g = b;
                (b > a && (g = a - (e > 0.8 * c ? f : 26)),
                  r
                    ? (_.current.style.height = `${b - Math.max(d, 0)}px`)
                    : (_.current.style.height = `${Math.max(g, a - f)}px`));
              } else (navigator.userAgent, (_.current.style.height = `${af.current}px`));
              h && h.length > 0 && !Y.current
                ? (_.current.style.bottom = "0px")
                : (_.current.style.bottom = `${Math.max(d, 0)}px`);
            }
          }
          return (
            null == (a = window.visualViewport) || a.addEventListener("resize", b),
            () => {
              var a;
              return null == (a = window.visualViewport) ? void 0 : a.removeEventListener("resize", b);
            }
          );
        }, [ar, h, aw]),
        f.default.useEffect(
          () => (
            I && (al(document.documentElement, { scrollBehavior: "auto" }), (R.current = new Date())),
            () => {
              !(function (a, b) {
                if (!a || !(a instanceof HTMLElement)) return;
                let c = ak.get(a);
                c && (a.style[b] = c[b]);
              })(document.documentElement, "scrollBehavior");
            }
          ),
          [I],
        ),
        f.default.useEffect(() => {
          s ||
            window.requestAnimationFrame(() => {
              document.body.style.pointerEvents = "auto";
            });
        }, [s]),
        f.default.createElement(
          B,
          {
            defaultOpen: x,
            onOpenChange: (a) => {
              (m || a) && (a ? L(!0) : aD(!0), J(a));
            },
            open: I,
          },
          f.default.createElement(
            ab.Provider,
            {
              value: {
                activeSnapPoint: ao,
                snapPoints: h,
                setActiveSnapPoint: at,
                drawerRef: _,
                overlayRef: Q,
                onOpenChange: c,
                onPress: function (a) {
                  var b, c;
                  (!m && !h) ||
                    ((!_.current || _.current.contains(a.target)) &&
                      ((aa.current = (null == (b = _.current) ? void 0 : b.getBoundingClientRect().height) || 0),
                      (ac.current = (null == (c = _.current) ? void 0 : c.getBoundingClientRect().width) || 0),
                      N(!0),
                      (S.current = new Date()),
                      ae(),
                      a.target.setPointerCapture(a.pointerId),
                      (X.current = am(w) ? a.pageY : a.pageX)));
                },
                onRelease: function (a) {
                  var b, c;
                  if (!M || !_.current) return;
                  (_.current.classList.remove(aq), (V.current = !1), N(!1), (T.current = new Date()));
                  let d = an(_.current, w);
                  if (!a || !aC(a.target, !1) || !d || Number.isNaN(d) || null === S.current) return;
                  let e = T.current.getTime() - S.current.getTime(),
                    f = X.current - (am(w) ? a.pageY : a.pageX),
                    i = Math.abs(f) / e;
                  if (
                    (i > 0.05 &&
                      (P(!0),
                      setTimeout(() => {
                        P(!1);
                      }, 200)),
                    h)
                  ) {
                    (av({
                      draggedDistance: f * ("bottom" === w || "right" === w ? 1 : -1),
                      closeDrawer: aD,
                      velocity: i,
                      dismissible: m,
                    }),
                      null == g || g(a, !0));
                    return;
                  }
                  if ("bottom" === w || "right" === w ? f > 0 : f < 0) {
                    (aE(), null == g || g(a, !0));
                    return;
                  }
                  if (i > 0.4) {
                    (aD(), null == g || g(a, !1));
                    return;
                  }
                  let j = Math.min(null != (b = _.current.getBoundingClientRect().height) ? b : 0, window.innerHeight),
                    l = Math.min(null != (c = _.current.getBoundingClientRect().width) ? c : 0, window.innerWidth);
                  if (Math.abs(d) >= ("left" === w || "right" === w ? l : j) * k) {
                    (aD(), null == g || g(a, !1));
                    return;
                  }
                  (null == g || g(a, !0), aE());
                },
                onDrag: function (a) {
                  if (_.current && M) {
                    let b = "bottom" === w || "right" === w ? 1 : -1,
                      c = (X.current - (am(w) ? a.pageY : a.pageX)) * b,
                      d = c > 0,
                      f = h && !m && !d;
                    if (f && 0 === ar) return;
                    let g = Math.abs(c),
                      j = document.querySelector("[data-vaul-drawer-wrapper]"),
                      k = g / ("bottom" === w || "top" === w ? aa.current : ac.current),
                      l = az(g, d);
                    if ((null !== l && (k = l), (f && k >= 1) || (!V.current && !aC(a.target, d)))) return;
                    if (
                      (_.current.classList.add(aq),
                      (V.current = !0),
                      al(_.current, { transition: "none" }),
                      al(Q.current, { transition: "none" }),
                      h && ax({ draggedDistance: c }),
                      d && !h)
                    ) {
                      let a = Math.min(-(8 * (Math.log(c + 1) - 2) * 1), 0) * b;
                      al(_.current, { transform: am(w) ? `translate3d(0, ${a}px, 0)` : `translate3d(${a}px, 0, 0)` });
                      return;
                    }
                    let n = 1 - k;
                    if (
                      ((ay || (o && ar === o - 1)) &&
                        (null == e || e(a, k), al(Q.current, { opacity: `${n}`, transition: "none" }, !0)),
                      j && Q.current && i)
                    ) {
                      let a = Math.min(aB() + k * (1 - aB()), 1),
                        b = 8 - 8 * k,
                        c = Math.max(0, 14 - 14 * k);
                      al(
                        j,
                        {
                          borderRadius: `${b}px`,
                          transform: am(w)
                            ? `scale(${a}) translate3d(0, ${c}px, 0)`
                            : `scale(${a}) translate3d(${c}px, 0, 0)`,
                          transition: "none",
                        },
                        !0,
                      );
                    }
                    if (!h) {
                      let a = g * b;
                      al(_.current, { transform: am(w) ? `translate3d(0, ${a}px, 0)` : `translate3d(${a}px, 0, 0)` });
                    }
                  }
                },
                dismissible: m,
                shouldAnimate: Z,
                handleOnly: n,
                isOpen: I,
                isDragging: M,
                shouldFade: ay,
                closeDrawer: aD,
                onNestedDrag: function (a, b) {
                  if (b < 0) return;
                  let c = (window.innerWidth - 16) / window.innerWidth,
                    d = c + b * (1 - c),
                    e = -16 + 16 * b;
                  al(_.current, {
                    transform: am(w)
                      ? `scale(${d}) translate3d(0, ${e}px, 0)`
                      : `scale(${d}) translate3d(${e}px, 0, 0)`,
                    transition: "none",
                  });
                },
                onNestedOpenChange: function (a) {
                  let b = a ? (window.innerWidth - 16) / window.innerWidth : 1,
                    c = a ? -16 : 0;
                  (W.current && window.clearTimeout(W.current),
                    al(_.current, {
                      transition: `transform 0.5s cubic-bezier(${ap.join(",")})`,
                      transform: am(w)
                        ? `scale(${b}) translate3d(0, ${c}px, 0)`
                        : `scale(${b}) translate3d(${c}px, 0, 0)`,
                    }),
                    !a &&
                      _.current &&
                      (W.current = setTimeout(() => {
                        let a = an(_.current, w);
                        al(_.current, {
                          transition: "none",
                          transform: am(w) ? `translate3d(0, ${a}px, 0)` : `translate3d(${a}px, 0, 0)`,
                        });
                      }, 500)));
                },
                onNestedRelease: function (a, b) {
                  let c = am(w) ? window.innerHeight : window.innerWidth,
                    d = b ? (c - 16) / c : 1,
                    e = b ? -16 : 0;
                  b &&
                    al(_.current, {
                      transition: `transform 0.5s cubic-bezier(${ap.join(",")})`,
                      transform: am(w)
                        ? `scale(${d}) translate3d(0, ${e}px, 0)`
                        : `scale(${d}) translate3d(${e}px, 0, 0)`,
                    });
                },
                keyboardIsOpen: Y,
                modal: s,
                snapPointsOffset: aw,
                activeSnapPointIndex: ar,
                direction: w,
                shouldScaleBackground: i,
                setBackgroundColorOnScale: j,
                noBodyStyles: v,
                container: E,
                autoFocus: F,
              },
            },
            d,
          ),
        )
      );
    }
    let aw = f.default.forwardRef(function ({ ...a }, b) {
      let { overlayRef: c, snapPoints: d, onRelease: e, shouldFade: g, isOpen: h, modal: i, shouldAnimate: j } = ac(),
        k = aj(b, c),
        l = d && d.length > 0;
      if (!i) return null;
      let m = f.default.useCallback((a) => e(a), [e]);
      return f.default.createElement(J, {
        onMouseUp: m,
        ref: k,
        "data-vaul-overlay": "",
        "data-vaul-snap-points": h && l ? "true" : "false",
        "data-vaul-snap-points-overlay": h && g ? "true" : "false",
        "data-vaul-animate": (null == j ? void 0 : j.current) ? "true" : "false",
        ...a,
      });
    });
    aw.displayName = "Drawer.Overlay";
    let ax = f.default.forwardRef(function ({ onPointerDownOutside: a, style: b, onOpenAutoFocus: c, ...d }, e) {
      let {
          drawerRef: g,
          onPress: h,
          onRelease: i,
          onDrag: j,
          keyboardIsOpen: k,
          snapPointsOffset: l,
          activeSnapPointIndex: m,
          modal: n,
          isOpen: o,
          direction: p,
          snapPoints: q,
          container: r,
          handleOnly: s,
          shouldAnimate: t,
          autoFocus: u,
        } = ac(),
        [v, w] = f.default.useState(!1),
        x = aj(e, g),
        y = f.default.useRef(null),
        z = f.default.useRef(null),
        A = f.default.useRef(!1),
        B = q && q.length > 0;
      function C(a) {
        ((y.current = null), (A.current = !1), i(a));
      }
      return (
        !(function () {
          let {
              direction: a,
              isOpen: b,
              shouldScaleBackground: c,
              setBackgroundColorOnScale: d,
              noBodyStyles: e,
            } = ac(),
            g = f.default.useRef(null),
            h = (0, f.useMemo)(() => document.body.style.backgroundColor, []);
          function i() {
            return (window.innerWidth - 26) / window.innerWidth;
          }
          f.default.useEffect(() => {
            if (b && c) {
              g.current && clearTimeout(g.current);
              let b =
                document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
              if (!b) return;
              !(function (...a) {})(
                d && !e ? ao(document.body, { background: "black" }) : at,
                ao(b, {
                  transformOrigin: am(a) ? "top" : "left",
                  transitionProperty: "transform, border-radius",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: `cubic-bezier(${ap.join(",")})`,
                }),
              );
              let c = ao(b, {
                borderRadius: "8px",
                overflow: "hidden",
                ...(am(a)
                  ? { transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` }
                  : { transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }),
              });
              return () => {
                (c(),
                  (g.current = window.setTimeout(() => {
                    h ? (document.body.style.background = h) : document.body.style.removeProperty("background");
                  }, 500)));
              };
            }
          }, [b, c, h]);
        })(),
        f.default.useEffect(() => {
          B &&
            window.requestAnimationFrame(() => {
              w(!0);
            });
        }, []),
        f.default.createElement(N, {
          "data-vaul-drawer-direction": p,
          "data-vaul-drawer": "",
          "data-vaul-delayed-snap-points": v ? "true" : "false",
          "data-vaul-snap-points": o && B ? "true" : "false",
          "data-vaul-custom-container": r ? "true" : "false",
          "data-vaul-animate": (null == t ? void 0 : t.current) ? "true" : "false",
          ...d,
          ref: x,
          style: l && l.length > 0 ? { "--snap-point-height": `${l[null != m ? m : 0]}px`, ...b } : b,
          onPointerDown: (a) => {
            s ||
              (null == d.onPointerDown || d.onPointerDown.call(d, a), (y.current = { x: a.pageX, y: a.pageY }), h(a));
          },
          onOpenAutoFocus: (a) => {
            (null == c || c(a), u || a.preventDefault());
          },
          onPointerDownOutside: (b) => {
            (null == a || a(b), !n || b.defaultPrevented) ? b.preventDefault() : k.current && (k.current = !1);
          },
          onFocusOutside: (a) => {
            if (!n) return void a.preventDefault();
          },
          onPointerMove: (a) => {
            if (((z.current = a), s || (null == d.onPointerMove || d.onPointerMove.call(d, a), !y.current))) return;
            let b = a.pageY - y.current.y,
              c = a.pageX - y.current.x,
              e = "touch" === a.pointerType ? 10 : 2;
            ((a, b, c = 0) => {
              if (A.current) return !0;
              let d = Math.abs(a.y),
                e = Math.abs(a.x),
                f = e > d,
                g = ["bottom", "right"].includes(b) ? 1 : -1;
              if ("left" === b || "right" === b) {
                if (!(a.x * g < 0) && e >= 0 && e <= c) return f;
              } else if (!(a.y * g < 0) && d >= 0 && d <= c) return !f;
              return ((A.current = !0), !0);
            })({ x: c, y: b }, p, e)
              ? j(a)
              : (Math.abs(c) > e || Math.abs(b) > e) && (y.current = null);
          },
          onPointerUp: (a) => {
            (null == d.onPointerUp || d.onPointerUp.call(d, a), (y.current = null), (A.current = !1), i(a));
          },
          onPointerOut: (a) => {
            (null == d.onPointerOut || d.onPointerOut.call(d, a), C(z.current));
          },
          onContextMenu: (a) => {
            (null == d.onContextMenu || d.onContextMenu.call(d, a), z.current && C(z.current));
          },
        })
      );
    });
    ax.displayName = "Drawer.Content";
    let ay = f.default.forwardRef(function ({ preventCycle: a = !1, children: b, ...c }, d) {
      let {
          closeDrawer: e,
          isDragging: g,
          snapPoints: h,
          activeSnapPoint: i,
          setActiveSnapPoint: j,
          dismissible: k,
          handleOnly: l,
          isOpen: m,
          onPress: n,
          onDrag: o,
        } = ac(),
        p = f.default.useRef(null),
        q = f.default.useRef(!1);
      function r() {
        (p.current && window.clearTimeout(p.current), (q.current = !1));
      }
      return f.default.createElement(
        "div",
        {
          onClick: function () {
            q.current
              ? r()
              : window.setTimeout(() => {
                  !(function () {
                    if (g || a || q.current) return r();
                    if ((r(), !h || 0 === h.length)) {
                      k || e();
                      return;
                    }
                    if (i === h[h.length - 1] && k) return e();
                    let b = h.findIndex((a) => a === i);
                    -1 === b || j(h[b + 1]);
                  })();
                }, 120);
          },
          onPointerCancel: r,
          onPointerDown: (a) => {
            (l && n(a),
              (p.current = window.setTimeout(() => {
                q.current = !0;
              }, 250)));
          },
          onPointerMove: (a) => {
            l && o(a);
          },
          ref: d,
          "data-vaul-drawer-visible": m ? "true" : "false",
          "data-vaul-handle": "",
          "aria-hidden": "true",
          ...c,
        },
        f.default.createElement("span", { "data-vaul-handle-hitarea": "", "aria-hidden": "true" }, b),
      );
    });
    ay.displayName = "Drawer.Handle";
    let az = {
      Root: av,
      NestedRoot: function ({ onDrag: a, onOpenChange: b, open: c, ...d }) {
        let { onNestedDrag: e, onNestedOpenChange: g, onNestedRelease: h } = ac();
        if (!e) throw Error("Drawer.NestedRoot must be placed in another drawer");
        return f.default.createElement(av, {
          nested: !0,
          open: c,
          onClose: () => {
            g(!1);
          },
          onDrag: (b, c) => {
            (e(b, c), null == a || a(b, c));
          },
          onOpenChange: (a) => {
            (a && g(a), null == b || b(a));
          },
          onRelease: h,
          ...d,
        });
      },
      Content: ax,
      Overlay: aw,
      Trigger: D,
      Portal: function (a) {
        let b = ac(),
          { container: c = b.container, ...d } = a;
        return f.default.createElement(H, { container: c, ...d });
      },
      Handle: ay,
      Close: W,
      Title: S,
      Description: U,
    };
    a.s(["Drawer", () => az], 886792);
  },
  859347,
  (a) => {
    "use strict";
    (a.i(13795), a.i(805485), a.i(886792), a.i(309173));
    let b = Error("Cannot find module '@/lib/utils'");
    throw ((b.code = "MODULE_NOT_FOUND"), b);
  },
];

//# sourceMappingURL=in-need-of-time_5a04fa21._.js.map
