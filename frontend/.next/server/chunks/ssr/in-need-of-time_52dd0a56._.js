module.exports = [
  618711,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(229296);
    a.n(d("[project]/in-need-of-time/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
  },
  956408,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(229296);
    a.n(d("[project]/in-need-of-time/node_modules/next/dist/client/app-dir/link.js"));
  },
  713169,
  (a) => {
    "use strict";
    a.i(618711);
    var b = a.i(956408);
    a.n(b);
  },
  550594,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return i;
      },
      useLinkStatus: function () {
        return h.useLinkStatus;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(614597),
      g = a.r(798616),
      h = f._(a.r(713169));
    function i(a) {
      let b = a.legacyBehavior,
        c = "string" == typeof a.children || "number" == typeof a.children || "string" == typeof a.children?.type,
        d = a.children?.type?.$$typeof === Symbol.for("react.client.reference");
      return (
        !b ||
          c ||
          d ||
          (a.children?.type?.$$typeof === Symbol.for("react.lazy")
            ? console.error(
                "Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag.",
              )
            : console.error(
                "Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.",
              )),
        (0, g.jsx)(h.default, { ...a })
      );
    }
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  987471,
  (a) => {
    "use strict";
    let b, c;
    var d = a.i(798616),
      e = a.i(780402);
    function f(a, b) {
      if ("function" == typeof a) return a(b);
      null != a && (a.current = b);
    }
    var g = Symbol.for("react.lazy"),
      h = e[" use ".trim().toString()];
    function i(a) {
      var b;
      return (
        null != a &&
        "object" == typeof a &&
        "$$typeof" in a &&
        a.$$typeof === g &&
        "_payload" in a &&
        "object" == typeof (b = a._payload) &&
        null !== b &&
        "then" in b
      );
    }
    (((c = e.forwardRef((a, b) => {
      let { children: c, ...d } = a;
      if ((i(c) && "function" == typeof h && (c = h(c._payload)), e.isValidElement(c))) {
        var g;
        let a,
          h,
          i =
            ((g = c),
            (h =
              (a = Object.getOwnPropertyDescriptor(g.props, "ref")?.get) && "isReactWarning" in a && a.isReactWarning)
              ? g.ref
              : (h = (a = Object.getOwnPropertyDescriptor(g, "ref")?.get) && "isReactWarning" in a && a.isReactWarning)
                ? g.props.ref
                : g.props.ref || g.ref),
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
        return (
          c.type !== e.Fragment &&
            (j.ref = b
              ? (function (...a) {
                  return (b) => {
                    let c = !1,
                      d = a.map((a) => {
                        let d = f(a, b);
                        return (c || "function" != typeof d || (c = !0), d);
                      });
                    if (c)
                      return () => {
                        for (let b = 0; b < d.length; b++) {
                          let c = d[b];
                          "function" == typeof c ? c() : f(a[b], null);
                        }
                      };
                  };
                })(b, i)
              : i),
          e.cloneElement(c, j)
        );
      }
      return e.Children.count(c) > 1 ? e.Children.only(null) : null;
    })).displayName = "Slot.SlotClone"),
      ((b = e.forwardRef((a, b) => {
        let { children: f, ...g } = a;
        i(f) && "function" == typeof h && (f = h(f._payload));
        let j = e.Children.toArray(f),
          l = j.find(k);
        if (l) {
          let a = l.props.children,
            f = j.map((b) =>
              b !== l
                ? b
                : e.Children.count(a) > 1
                  ? e.Children.only(null)
                  : e.isValidElement(a)
                    ? a.props.children
                    : null,
            );
          return (0, d.jsx)(c, { ...g, ref: b, children: e.isValidElement(a) ? e.cloneElement(a, void 0, f) : null });
        }
        return (0, d.jsx)(c, { ...g, ref: b, children: f });
      })).displayName = "Slot.Slot"));
    var j = Symbol("radix.slottable");
    function k(a) {
      return e.isValidElement(a) && "function" == typeof a.type && "__radixId" in a.type && a.type.__radixId === j;
    }
    let l = Error("Cannot find module '@/lib/utils'");
    throw ((l.code = "MODULE_NOT_FOUND"), l);
  },
  256890,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "warnOnce", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
    let d = (a) => {};
  },
  920712,
  (a, b, c) => {
    "use strict";
    function d({ widthInt: a, heightInt: b, blurWidth: c, blurHeight: d, blurDataURL: e, objectFit: f }) {
      let g = c ? 40 * c : a,
        h = d ? 40 * d : b,
        i = g && h ? `viewBox='0 0 ${g} ${h}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i ? "none" : "contain" === f ? "xMidYMid" : "cover" === f ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
  },
  68906,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      VALID_LOADERS: function () {
        return f;
      },
      imageConfigDefault: function () {
        return g;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = ["default", "imgix", "cloudinary", "akamai", "custom"],
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  910647,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "getImgProps", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      a.r(256890));
    let d = a.r(920712),
      e = a.r(68906),
      f = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function g(a) {
      return void 0 !== a.default;
    }
    function h(a) {
      return void 0 === a
        ? a
        : "number" == typeof a
          ? Number.isFinite(a)
            ? a
            : NaN
          : "string" == typeof a && /^[0-9]+$/.test(a)
            ? parseInt(a, 10)
            : NaN;
    }
    function i(
      {
        src: a,
        sizes: b,
        unoptimized: c = !1,
        priority: i = !1,
        preload: j = !1,
        loading: k,
        className: l,
        quality: m,
        width: n,
        height: o,
        fill: p = !1,
        style: q,
        overrideSrc: r,
        onLoad: s,
        onLoadingComplete: t,
        placeholder: u = "empty",
        blurDataURL: v,
        fetchPriority: w,
        decoding: x = "async",
        layout: y,
        objectFit: z,
        objectPosition: A,
        lazyBoundary: B,
        lazyRoot: C,
        ...D
      },
      E,
    ) {
      var F;
      let G,
        H,
        I,
        { imgConf: J, showAltText: K, blurComplete: L, defaultLoader: M } = E,
        N = J || e.imageConfigDefault;
      if ("allSizes" in N) G = N;
      else {
        let a = [...N.deviceSizes, ...N.imageSizes].sort((a, b) => a - b),
          b = N.deviceSizes.sort((a, b) => a - b),
          c = N.qualities?.sort((a, b) => a - b);
        G = { ...N, allSizes: a, deviceSizes: b, qualities: c };
      }
      if (void 0 === M)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let O = D.loader || M;
      (delete D.loader, delete D.srcSet);
      let P = "__next_img_default" in O;
      if (P) {
        if ("custom" === G.loader)
          throw Object.defineProperty(
            Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let a = O;
        O = (b) => {
          let { config: c, ...d } = b;
          return a(d);
        };
      }
      if (y) {
        "fill" === y && (p = !0);
        let a = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[y];
        a && (q = { ...q, ...a });
        let c = { responsive: "100vw", fill: "100vw" }[y];
        c && !b && (b = c);
      }
      let Q = "",
        R = h(n),
        S = h(o);
      if ((F = a) && "object" == typeof F && (g(F) || void 0 !== F.src)) {
        let b = g(a) ? a.default : a;
        if (!b.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!b.height || !b.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (((H = b.blurWidth), (I = b.blurHeight), (v = v || b.blurDataURL), (Q = b.src), !p))
          if (R || S) {
            if (R && !S) {
              let a = R / b.width;
              S = Math.round(b.height * a);
            } else if (!R && S) {
              let a = S / b.height;
              R = Math.round(b.width * a);
            }
          } else ((R = b.width), (S = b.height));
      }
      let T = !i && !j && ("lazy" === k || void 0 === k);
      ((!(a = "string" == typeof a ? a : Q) || a.startsWith("data:") || a.startsWith("blob:")) && ((c = !0), (T = !1)),
        G.unoptimized && (c = !0),
        P && !G.dangerouslyAllowSVG && a.split("?", 1)[0].endsWith(".svg") && (c = !0));
      let U = h(m),
        V = Object.assign(
          p
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: z,
                objectPosition: A,
              }
            : {},
          K ? {} : { color: "transparent" },
          q,
        ),
        W =
          L || "empty" === u
            ? null
            : "blur" === u
              ? `url("data:image/svg+xml;charset=utf-8,${(0, d.getImageBlurSvg)({ widthInt: R, heightInt: S, blurWidth: H, blurHeight: I, blurDataURL: v || "", objectFit: V.objectFit })}")`
              : `url("${u}")`,
        X = f.includes(V.objectFit) ? ("fill" === V.objectFit ? "100% 100%" : "cover") : V.objectFit,
        Y = W
          ? {
              backgroundSize: X,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: W,
            }
          : {},
        Z = (function ({ config: a, src: b, unoptimized: c, width: d, quality: e, sizes: f, loader: g }) {
          if (c) return { src: b, srcSet: void 0, sizes: void 0 };
          let { widths: h, kind: i } = (function ({ deviceSizes: a, allSizes: b }, c, d) {
              if (d) {
                let c = /(^|\s)(1?\d?\d)vw/g,
                  e = [];
                for (let a; (a = c.exec(d)); ) e.push(parseInt(a[2]));
                if (e.length) {
                  let c = 0.01 * Math.min(...e);
                  return { widths: b.filter((b) => b >= a[0] * c), kind: "w" };
                }
                return { widths: b, kind: "w" };
              }
              return "number" != typeof c
                ? { widths: a, kind: "w" }
                : { widths: [...new Set([c, 2 * c].map((a) => b.find((b) => b >= a) || b[b.length - 1]))], kind: "x" };
            })(a, d, f),
            j = h.length - 1;
          return {
            sizes: f || "w" !== i ? f : "100vw",
            srcSet: h
              .map((c, d) => `${g({ config: a, src: b, quality: e, width: c })} ${"w" === i ? c : d + 1}${i}`)
              .join(", "),
            src: g({ config: a, src: b, quality: e, width: h[j] }),
          };
        })({ config: G, src: a, unoptimized: c, width: R, quality: U, sizes: b, loader: O }),
        $ = T ? "lazy" : k;
      return {
        props: {
          ...D,
          loading: $,
          fetchPriority: w,
          width: R,
          height: S,
          decoding: x,
          className: l,
          style: { ...V, ...Y },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: r || Z.src,
        },
        meta: { unoptimized: c, preload: j || i, placeholder: u, fill: p },
      };
    }
  },
  20740,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(229296);
    a.n(d("[project]/in-need-of-time/node_modules/next/dist/client/image-component.js <module evaluation>"));
  },
  881521,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(229296);
    a.n(d("[project]/in-need-of-time/node_modules/next/dist/client/image-component.js"));
  },
  771953,
  (a) => {
    "use strict";
    a.i(20740);
    var b = a.i(881521);
    a.n(b);
  },
  301089,
  (a, b, c) => {
    "use strict";
    function d(a, b) {
      let c = a || 75;
      return b?.qualities?.length ? b.qualities.reduce((a, b) => (Math.abs(b - c) < Math.abs(a - c) ? b : a), 0) : c;
    }
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
  },
  511483,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "default", {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    let d = a.r(301089);
    function e({ config: a, src: b, width: c, quality: e }) {
      if (
        b.startsWith("/") &&
        b.includes("?") &&
        a.localPatterns?.length === 1 &&
        "**" === a.localPatterns[0].pathname &&
        "" === a.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let f = (0, d.findClosestQuality)(e, a);
      return `${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${f}${(b.startsWith("/_next/static/media/"), "")}`;
    }
    e.__next_img_default = !0;
    let f = e;
  },
  30734,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return k;
      },
      getImageProps: function () {
        return j;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(24192),
      g = a.r(910647),
      h = a.r(771953),
      i = f._(a.r(511483));
    function j(a) {
      let { props: b } = (0, g.getImgProps)(a, {
        defaultLoader: i.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [a, c] of Object.entries(b)) void 0 === c && delete b[a];
      return { props: b };
    }
    let k = h.Image;
  },
  22100,
  (a, b, c) => {
    b.exports = a.r(30734);
  },
  595021,
  (a) => {
    "use strict";
    var b = a.i(798616),
      c = a.i(550594),
      d = a.i(22100);
    function e() {
      return (0, b.jsxs)("div", {
        className: "container flex flex-col gap-8 px-6 py-8 md:flex-row md:p-16",
        children: [
          (0, b.jsxs)("div", {
            className: "flex flex-1 flex-col space-y-4 text-sm text-slate-900",
            children: [
              (0, b.jsx)("span", {
                className: "w-24",
                children: (0, b.jsx)(c.default, {
                  href: "/",
                  children: (0, b.jsx)(d.default, {
                    src: "/logo.svg",
                    alt: "In Time of Need",
                    height: 68,
                    width: 96,
                    className: "h-auto",
                  }),
                }),
              }),
              (0, b.jsx)("p", { children: "© 2024 In Time of Need" }),
              (0, b.jsx)("p", { children: "Privacy Policy / Cookie Policy" }),
            ],
          }),
          (0, b.jsxs)("div", {
            className: "flex flex-1 justify-between md:ml-auto",
            children: [
              (0, b.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, b.jsx)("p", {
                    className: "mb-4 text-sm font-bold uppercase text-slate-900",
                    children: "Main Menu",
                  }),
                  (0, b.jsxs)("div", {
                    className: "flex flex-col space-y-2 text-sm text-slate-500",
                    children: [
                      (0, b.jsx)(c.default, { href: "/", children: "Home" }),
                      (0, b.jsx)(c.default, { href: "/search", children: "Provider Search" }),
                      (0, b.jsx)(c.default, { href: "/about", children: "About" }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "",
                children: [
                  (0, b.jsx)("p", {
                    className: "mb-4 text-sm font-bold uppercase text-slate-900",
                    children: "Contact Us",
                  }),
                  (0, b.jsxs)("div", {
                    className: " flex flex-col space-y-2 text-sm text-slate-900",
                    children: [
                      (0, b.jsx)(c.default, { href: "tel:+1234567890", children: "+1 (123) 456-7890" }),
                      (0, b.jsx)(c.default, { href: "mailto:email@domain.com", children: "email@domain.com" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    a.s(["Footer", () => e]);
  },
];

//# sourceMappingURL=in-need-of-time_52dd0a56._.js.map
