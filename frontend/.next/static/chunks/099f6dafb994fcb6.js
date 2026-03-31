(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  566963,
  (e) => {
    "use strict";
    var t,
      r,
      n =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
      o =
        ((t = function (e) {
          return n.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2));
        }),
        (r = Object.create(null)),
        function (e) {
          return (void 0 === r[e] && (r[e] = t(e)), r[e]);
        });
    e.s(["default", () => o], 566963);
  },
  75152,
  (e, t, r) => {
    t.exports = function (e, t, r, n) {
      var o = r ? r.call(n, e, t) : void 0;
      if (void 0 !== o) return !!o;
      if (e === t) return !0;
      if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
      var i = Object.keys(e),
        s = Object.keys(t);
      if (i.length !== s.length) return !1;
      for (var a = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
        var d = i[l];
        if (!a(d)) return !1;
        var c = e[d],
          u = t[d];
        if (!1 === (o = r ? r.call(n, c, u, d) : void 0) || (void 0 === o && c !== u)) return !1;
      }
      return !0;
    };
  },
  482309,
  (e, t, r) => {
    "use strict";
    var n = Symbol.for("react.transitional.element"),
      o = Symbol.for("react.portal"),
      i = Symbol.for("react.fragment"),
      s = Symbol.for("react.strict_mode"),
      a = Symbol.for("react.profiler"),
      l = Symbol.for("react.consumer"),
      d = Symbol.for("react.context"),
      c = Symbol.for("react.forward_ref"),
      u = Symbol.for("react.suspense"),
      h = Symbol.for("react.suspense_list"),
      f = Symbol.for("react.memo"),
      p = Symbol.for("react.lazy"),
      g = Symbol.for("react.view_transition"),
      m = Symbol.for("react.client.reference");
    function w(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case n:
            switch ((e = e.type)) {
              case i:
              case a:
              case s:
              case u:
              case h:
              case g:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case d:
                  case c:
                  case p:
                  case f:
                  case l:
                    return e;
                  default:
                    return t;
                }
            }
          case o:
            return t;
        }
      }
    }
    ((r.ContextConsumer = l),
      (r.ContextProvider = d),
      (r.Element = n),
      (r.ForwardRef = c),
      (r.Fragment = i),
      (r.Lazy = p),
      (r.Memo = f),
      (r.Portal = o),
      (r.Profiler = a),
      (r.StrictMode = s),
      (r.Suspense = u),
      (r.SuspenseList = h),
      (r.isContextConsumer = function (e) {
        return w(e) === l;
      }),
      (r.isContextProvider = function (e) {
        return w(e) === d;
      }),
      (r.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }),
      (r.isForwardRef = function (e) {
        return w(e) === c;
      }),
      (r.isFragment = function (e) {
        return w(e) === i;
      }),
      (r.isLazy = function (e) {
        return w(e) === p;
      }),
      (r.isMemo = function (e) {
        return w(e) === f;
      }),
      (r.isPortal = function (e) {
        return w(e) === o;
      }),
      (r.isProfiler = function (e) {
        return w(e) === a;
      }),
      (r.isStrictMode = function (e) {
        return w(e) === s;
      }),
      (r.isSuspense = function (e) {
        return w(e) === u;
      }),
      (r.isSuspenseList = function (e) {
        return w(e) === h;
      }),
      (r.isValidElementType = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === i ||
          e === a ||
          e === s ||
          e === u ||
          e === h ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === p ||
              e.$$typeof === f ||
              e.$$typeof === d ||
              e.$$typeof === l ||
              e.$$typeof === c ||
              e.$$typeof === m ||
              void 0 !== e.getModuleId)) ||
          !1
        );
      }),
      (r.typeOf = w));
  },
  28609,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(482309);
  },
  421003,
  683117,
  457781,
  503084,
  236431,
  530576,
  86815,
  22194,
  756763,
  400755,
  (e) => {
    "use strict";
    let t,
      r,
      n,
      o,
      i,
      s = ["gray", "blue", "purple", "magenta", "red", "orange", "yellow", "green", "cyan"],
      a = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"],
      l = { title: "Black", hex: "#0d0e12" },
      d = { title: "White", hex: "#ffffff" },
      c = {
        50: { title: "Gray 50", hex: "#f6f6f8" },
        100: { title: "Gray 100", hex: "#eeeef1" },
        200: { title: "Gray 200", hex: "#e3e4e8" },
        300: { title: "Gray 300", hex: "#bbbdc9" },
        400: { title: "Gray 400", hex: "#9499ad" },
        500: { title: "Gray 500", hex: "#727892" },
        600: { title: "Gray 600", hex: "#515870" },
        700: { title: "Gray 700", hex: "#383d51" },
        800: { title: "Gray 800", hex: "#252837" },
        900: { title: "Gray 900", hex: "#1b1d27" },
        950: { title: "Gray 950", hex: "#13141b" },
      },
      u = {
        50: { title: "Blue 50", hex: "#f5f8ff" },
        100: { title: "Blue 100", hex: "#e5edff" },
        200: { title: "Blue 200", hex: "#dbe5ff" },
        300: { title: "Blue 300", hex: "#a8bfff" },
        400: { title: "Blue 400", hex: "#7595ff" },
        500: { title: "Blue 500", hex: "#556bfc" },
        600: { title: "Blue 600", hex: "#4043e7" },
        700: { title: "Blue 700", hex: "#2927aa" },
        800: { title: "Blue 800", hex: "#192457" },
        900: { title: "Blue 900", hex: "#161a41" },
        950: { title: "Blue 950", hex: "#101228" },
      },
      h = {
        50: { title: "Purple 50", hex: "#f8f5ff" },
        100: { title: "Purple 100", hex: "#f1ebff" },
        200: { title: "Purple 200", hex: "#ece1fe" },
        300: { title: "Purple 300", hex: "#ccb1fc" },
        400: { title: "Purple 400", hex: "#b087f7" },
        500: { title: "Purple 500", hex: "#8f57ef" },
        600: { title: "Purple 600", hex: "#721fe5" },
        700: { title: "Purple 700", hex: "#4c1a9e" },
        800: { title: "Purple 800", hex: "#2f1862" },
        900: { title: "Purple 900", hex: "#23173f" },
        950: { title: "Purple 950", hex: "#181128" },
      },
      f = {
        50: { title: "Red 50", hex: "#fff6f5" },
        100: { title: "Red 100", hex: "#ffe7e5" },
        200: { title: "Red 200", hex: "#ffdedc" },
        300: { title: "Red 300", hex: "#fdada5" },
        400: { title: "Red 400", hex: "#f77769" },
        500: { title: "Red 500", hex: "#ef4434" },
        600: { title: "Red 600", hex: "#cc2819" },
        700: { title: "Red 700", hex: "#8b2018" },
        800: { title: "Red 800", hex: "#4d1714" },
        900: { title: "Red 900", hex: "#321615" },
        950: { title: "Red 950", hex: "#1e1011" },
      },
      p = {
        50: { title: "Yellow 50", hex: "#fefae1" },
        100: { title: "Yellow 100", hex: "#fcf3bb" },
        200: { title: "Yellow 200", hex: "#f9e994" },
        300: { title: "Yellow 300", hex: "#f7d455" },
        400: { title: "Yellow 400", hex: "#f9bc15" },
        500: { title: "Yellow 500", hex: "#d28a04" },
        600: { title: "Yellow 600", hex: "#965908" },
        700: { title: "Yellow 700", hex: "#653a0b" },
        800: { title: "Yellow 800", hex: "#3b220c" },
        900: { title: "Yellow 900", hex: "#271a11" },
        950: { title: "Yellow 950", hex: "#181410" },
      },
      g = {
        50: { title: "Green 50", hex: "#e7fef5" },
        100: { title: "Green 100", hex: "#c5fce8" },
        200: { title: "Green 200", hex: "#a9f9dc" },
        300: { title: "Green 300", hex: "#59f3ba" },
        400: { title: "Green 400", hex: "#0ff0a1" },
        500: { title: "Green 500", hex: "#04b97a" },
        600: { title: "Green 600", hex: "#01794f" },
        700: { title: "Green 700", hex: "#015133" },
        800: { title: "Green 800", hex: "#023120" },
        900: { title: "Green 900", hex: "#06231a" },
        950: { title: "Green 950", hex: "#071715" },
      },
      m = {
        gray: c,
        blue: u,
        purple: h,
        magenta: {
          50: { title: "Magenta 50", hex: "#fef6f9" },
          100: { title: "Magenta 100", hex: "#fde8ef" },
          200: { title: "Magenta 200", hex: "#fcdee9" },
          300: { title: "Magenta 300", hex: "#f7abc5" },
          400: { title: "Magenta 400", hex: "#f0709b" },
          500: { title: "Magenta 500", hex: "#e72767" },
          600: { title: "Magenta 600", hex: "#b11651" },
          700: { title: "Magenta 700", hex: "#7c1342" },
          800: { title: "Magenta 800", hex: "#4b1130" },
          900: { title: "Magenta 900", hex: "#341325" },
          950: { title: "Magenta 950", hex: "#1f0f14" },
        },
        red: f,
        orange: {
          50: { title: "Orange 50", hex: "#fff7f0" },
          100: { title: "Orange 100", hex: "#ffeadb" },
          200: { title: "Orange 200", hex: "#ffddc7" },
          300: { title: "Orange 300", hex: "#ffb685" },
          400: { title: "Orange 400", hex: "#ff8e42" },
          500: { title: "Orange 500", hex: "#fa6400" },
          600: { title: "Orange 600", hex: "#b14802" },
          700: { title: "Orange 700", hex: "#7c3404" },
          800: { title: "Orange 800", hex: "#461e07" },
          900: { title: "Orange 900", hex: "#32160b" },
          950: { title: "Orange 950", hex: "#21120d" },
        },
        yellow: p,
        green: g,
        cyan: {
          50: { title: "Cyan 50", hex: "#e7fefe" },
          100: { title: "Cyan 100", hex: "#c5fcfc" },
          200: { title: "Cyan 200", hex: "#96f8f8" },
          300: { title: "Cyan 300", hex: "#62efef" },
          400: { title: "Cyan 400", hex: "#18e2e2" },
          500: { title: "Cyan 500", hex: "#04b8be" },
          600: { title: "Cyan 600", hex: "#037782" },
          700: { title: "Cyan 700", hex: "#024950" },
          800: { title: "Cyan 800", hex: "#042f34" },
          900: { title: "Cyan 900", hex: "#072227" },
          950: { title: "Cyan 950", hex: "#0d181c" },
        },
      },
      w = { black: l, white: d, ...m };
    function v(e, t, r, n, o, i) {
      return {
        enabled: e.selectable({ base: t, dark: r, solid: n, muted: o, state: "enabled", tone: i }),
        hovered: e.selectable({ base: t, dark: r, solid: n, muted: o, state: "hovered", tone: i }),
        pressed: e.selectable({ base: t, dark: r, solid: n, muted: o, state: "pressed", tone: i }),
        selected: e.selectable({ base: t, dark: r, solid: n, muted: o, state: "selected", tone: i }),
        disabled: e.selectable({ base: t, dark: r, solid: n, muted: o, state: "disabled", tone: i }),
      };
    }
    function b(e, t, r, n, o, i) {
      return {
        default: e.button({ base: t, dark: r, solid: n.default, muted: o.default, mode: i }),
        primary: e.button({ base: t, dark: r, solid: n.primary, muted: o.primary, mode: i }),
        positive: e.button({ base: t, dark: r, solid: n.positive, muted: o.positive, mode: i }),
        caution: e.button({ base: t, dark: r, solid: n.caution, muted: o.caution, mode: i }),
        critical: e.button({ base: t, dark: r, solid: n.critical, muted: o.critical, mode: i }),
      };
    }
    e.s(
      [
        "COLOR_HUES",
        () => s,
        "COLOR_TINTS",
        () => a,
        "black",
        () => l,
        "blue",
        () => u,
        "color",
        () => w,
        "gray",
        () => c,
        "green",
        () => g,
        "hues",
        () => m,
        "purple",
        () => h,
        "red",
        () => f,
        "white",
        () => d,
        "yellow",
        () => p,
      ],
      683117,
    );
    let y = "hsl(0, 0%, 0%)",
      x = "hsl(0, 0%, 100%)",
      C = {
        default: {
          lightest: "hsl(0, 0%, 95%)",
          lighter: "hsl(0, 0%, 70%)",
          light: "hsl(0, 0%, 65%)",
          base: "hsl(0, 0%, 50%)",
          dark: "hsl(0, 0%, 35%)",
          darker: "hsl(0, 0%, 20%)",
          darkest: "hsl(0, 0%, 5%)",
        },
        transparent: {
          lightest: "hsl(240, 100%, 95%)",
          lighter: "hsl(240, 100%, 70%)",
          light: "hsl(240, 100%, 65%)",
          base: "hsl(240, 100%, 50%)",
          dark: "hsl(240, 100%, 35%)",
          darker: "hsl(240, 100%, 20%)",
          darkest: "hsl(240, 100%, 5%)",
        },
        primary: {
          lightest: "hsl(240, 100%, 95%)",
          lighter: "hsl(240, 100%, 70%)",
          light: "hsl(240, 100%, 65%)",
          base: "hsl(240, 100%, 50%)",
          dark: "hsl(240, 100%, 35%)",
          darker: "hsl(240, 100%, 20%)",
          darkest: "hsl(240, 100%, 5%)",
        },
        positive: {
          lightest: "hsl(120, 100%, 95%)",
          lighter: "hsl(120, 100%, 70%)",
          light: "hsl(120, 100%, 65%)",
          base: "hsl(120, 100%, 50%)",
          dark: "hsl(120, 100%, 35%)",
          darker: "hsl(120, 100%, 20%)",
          darkest: "hsl(120, 100%, 5%)",
        },
        caution: {
          lightest: "hsl(60, 100%, 95%)",
          lighter: "hsl(60, 100%, 70%)",
          light: "hsl(60, 100%, 65%)",
          base: "hsl(60, 100%, 50%)",
          dark: "hsl(60, 100%, 35%)",
          darker: "hsl(60, 100%, 20%)",
          darkest: "hsl(60, 100%, 5%)",
        },
        critical: {
          lightest: "hsl(0, 100%, 95%)",
          lighter: "hsl(0, 100%, 70%)",
          light: "hsl(0, 100%, 65%)",
          base: "hsl(0, 100%, 50%)",
          dark: "hsl(0, 100%, 35%)",
          darker: "hsl(0, 100%, 20%)",
          darkest: "hsl(0, 100%, 5%)",
        },
      },
      k = {
        gray: "hsl(0, 0%, 50%)",
        red: "hsl(0, 100%, 50%)",
        orange: "hsl(30, 100%, 50%)",
        yellow: "hsl(60, 100%, 50%)",
        green: "hsl(120, 100%, 50%)",
        cyan: "hsl(180, 100%, 50%)",
        blue: "hsl(240, 100%, 50%)",
        purple: "hsl(270, 100%, 50%)",
        magenta: "hsl(300, 100%, 50%)",
      },
      M = {
        transparent: {
          bg: [C.transparent.darkest, C.transparent.lightest],
          fg: [C.transparent.lightest, C.transparent.darkest],
          border: [C.transparent.darker, C.transparent.lighter],
          focusRing: [C.transparent.base, C.transparent.base],
        },
        primary: {
          bg: [C.primary.darkest, C.primary.lightest],
          fg: [C.primary.lightest, C.primary.darkest],
          border: [C.primary.darker, C.primary.lighter],
          focusRing: [C.primary.base, C.primary.base],
        },
        positive: {
          bg: [C.positive.darkest, C.positive.lightest],
          fg: [C.positive.lightest, C.positive.darkest],
          border: [C.positive.darker, C.positive.lighter],
          focusRing: [C.positive.base, C.positive.base],
        },
        caution: {
          bg: [C.caution.darkest, C.caution.lightest],
          fg: [C.caution.lightest, C.caution.darkest],
          border: [C.caution.darker, C.caution.lighter],
          focusRing: [C.caution.base, C.caution.base],
        },
        critical: {
          bg: [C.critical.darkest, C.critical.lightest],
          fg: [C.critical.lightest, C.critical.darkest],
          border: [C.critical.darker, C.critical.lighter],
          focusRing: [C.critical.base, C.critical.base],
        },
      },
      j = {
        base: ({ dark: e, name: t }) =>
          "default" === t
            ? {
                bg: e ? y : x,
                fg: e ? x : y,
                border: e ? C.default.darkest : C.default.lightest,
                focusRing: C.primary.base,
                shadow: { outline: y, umbra: y, penumbra: y, ambient: y },
                skeleton: { from: e ? x : y, to: e ? x : y },
              }
            : {
                bg: M[t].bg[+!e],
                fg: M[t].fg[+!e],
                border: M[t].border[+!e],
                focusRing: M[t].focusRing[+!e],
                shadow: { outline: y, umbra: y, penumbra: y, ambient: y },
                skeleton: { from: e ? x : y, to: e ? x : y },
              },
        solid: ({ base: e, dark: t, state: r, tone: n }) => {
          let o = C[n];
          return "hovered" === r
            ? {
                bg: t ? o.light : o.dark,
                bg2: t ? o.light : o.dark,
                border: t ? o.lighter : o.darker,
                fg: t ? o.darkest : o.lightest,
                icon: t ? o.darkest : o.lightest,
                muted: { fg: y },
                accent: { fg: y },
                link: { fg: y },
                code: { bg: y, fg: y },
                skeleton: e.skeleton,
              }
            : {
                bg: o.base,
                bg2: o.base,
                border: t ? o.light : o.dark,
                fg: t ? o.darkest : o.lightest,
                icon: t ? o.darkest : o.lightest,
                muted: { fg: y },
                accent: { fg: y },
                link: { fg: y },
                code: { bg: y, fg: y },
                skeleton: e.skeleton,
              };
        },
        muted: ({ base: e, dark: t, state: r, tone: n }) => {
          let o = C[n];
          return "hovered" === r
            ? {
                bg: t ? o.darker : o.lighter,
                bg2: t ? o.darker : o.lighter,
                border: t ? o.lighter : o.darker,
                fg: t ? o.lightest : o.darkest,
                icon: t ? o.lightest : o.darkest,
                muted: { fg: y },
                accent: { fg: y },
                link: { fg: y },
                code: { bg: y, fg: y },
                skeleton: e.skeleton,
              }
            : {
                bg: t ? o.darkest : o.lightest,
                bg2: t ? o.darkest : o.lightest,
                border: t ? o.darker : o.lighter,
                fg: t ? o.lighter : o.darker,
                icon: t ? o.lighter : o.darker,
                muted: { fg: y },
                accent: { fg: y },
                link: { fg: y },
                code: { bg: y, fg: y },
                skeleton: e.skeleton,
              };
        },
        button: ({ base: e, mode: t, muted: r, solid: n }) =>
          "bleed" === t
            ? {
                ...r,
                enabled: {
                  bg: "transparent",
                  bg2: "transparent",
                  fg: r.enabled.fg,
                  icon: r.enabled.fg,
                  border: "transparent",
                  muted: { fg: y },
                  accent: { fg: y },
                  link: { fg: y },
                  code: { bg: y, fg: y },
                  skeleton: e.skeleton,
                },
                hovered: {
                  bg: r.enabled.bg,
                  bg2: r.enabled.bg,
                  fg: r.hovered.fg,
                  icon: r.hovered.fg,
                  border: "transparent",
                  muted: { fg: y },
                  accent: { fg: y },
                  link: { fg: y },
                  code: { bg: y, fg: y },
                  skeleton: e.skeleton,
                },
              }
            : "ghost" === t
              ? { ...n, enabled: r.enabled }
              : n,
        card: ({ base: e }) => ({
          bg: y,
          bg2: y,
          fg: y,
          icon: y,
          border: y,
          muted: { fg: y },
          accent: { fg: y },
          link: { fg: y },
          code: { bg: y, fg: y },
          skeleton: e.skeleton,
        }),
        input: () => ({ bg: y, bg2: y, fg: y, border: y, placeholder: y }),
        selectable: ({ muted: e, state: t, tone: r }) => e[r][t],
        spot: ({ key: e }) => k[e],
        syntax: () => ({
          atrule: y,
          attrName: y,
          attrValue: y,
          attribute: y,
          boolean: y,
          builtin: y,
          cdata: y,
          char: y,
          class: y,
          className: y,
          comment: y,
          constant: y,
          deleted: y,
          doctype: y,
          entity: y,
          function: y,
          hexcode: y,
          id: y,
          important: y,
          inserted: y,
          keyword: y,
          number: y,
          operator: y,
          prolog: y,
          property: y,
          pseudoClass: y,
          pseudoElement: y,
          punctuation: y,
          regex: y,
          selector: y,
          string: y,
          symbol: y,
          tag: y,
          unit: y,
          url: y,
          variable: y,
        }),
      };
    function L(e = {}) {
      let t = { ...j, ...e };
      return { light: S(t, !1), dark: S(t, !0) };
    }
    function S(e, t) {
      return {
        default: V(e, t, "default"),
        transparent: V(e, t, "transparent"),
        primary: V(e, t, "primary"),
        positive: V(e, t, "positive"),
        caution: V(e, t, "caution"),
        critical: V(e, t, "critical"),
      };
    }
    function V(e, t, r) {
      let n = e.base({ dark: t, name: r }),
        o = {
          default: {
            enabled: e.solid({ base: n, dark: t, tone: "default", name: r, state: "enabled" }),
            disabled: e.solid({ base: n, dark: t, tone: "default", name: r, state: "disabled" }),
            hovered: e.solid({ base: n, dark: t, tone: "default", name: r, state: "hovered" }),
            pressed: e.solid({ base: n, dark: t, tone: "default", name: r, state: "pressed" }),
            selected: e.solid({ base: n, dark: t, tone: "default", name: r, state: "selected" }),
          },
          transparent: {
            enabled: e.solid({ base: n, dark: t, tone: "transparent", name: r, state: "enabled" }),
            disabled: e.solid({ base: n, dark: t, tone: "transparent", name: r, state: "disabled" }),
            hovered: e.solid({ base: n, dark: t, tone: "transparent", name: r, state: "hovered" }),
            pressed: e.solid({ base: n, dark: t, tone: "transparent", name: r, state: "pressed" }),
            selected: e.solid({ base: n, dark: t, tone: "transparent", name: r, state: "selected" }),
          },
          primary: {
            enabled: e.solid({ base: n, dark: t, tone: "primary", name: r, state: "enabled" }),
            disabled: e.solid({ base: n, dark: t, tone: "primary", name: r, state: "disabled" }),
            hovered: e.solid({ base: n, dark: t, tone: "primary", name: r, state: "hovered" }),
            pressed: e.solid({ base: n, dark: t, tone: "primary", name: r, state: "pressed" }),
            selected: e.solid({ base: n, dark: t, tone: "primary", name: r, state: "selected" }),
          },
          positive: {
            enabled: e.solid({ base: n, dark: t, tone: "positive", name: r, state: "enabled" }),
            disabled: e.solid({ base: n, dark: t, tone: "positive", name: r, state: "disabled" }),
            hovered: e.solid({ base: n, dark: t, tone: "positive", name: r, state: "hovered" }),
            pressed: e.solid({ base: n, dark: t, tone: "positive", name: r, state: "pressed" }),
            selected: e.solid({ base: n, dark: t, tone: "positive", name: r, state: "selected" }),
          },
          caution: {
            enabled: e.solid({ base: n, dark: t, tone: "caution", name: r, state: "enabled" }),
            disabled: e.solid({ base: n, dark: t, tone: "caution", name: r, state: "disabled" }),
            hovered: e.solid({ base: n, dark: t, tone: "caution", name: r, state: "hovered" }),
            pressed: e.solid({ base: n, dark: t, tone: "caution", name: r, state: "pressed" }),
            selected: e.solid({ base: n, dark: t, tone: "caution", name: r, state: "selected" }),
          },
          critical: {
            enabled: e.solid({ base: n, dark: t, tone: "critical", name: r, state: "enabled" }),
            disabled: e.solid({ base: n, dark: t, tone: "critical", name: r, state: "disabled" }),
            hovered: e.solid({ base: n, dark: t, tone: "critical", name: r, state: "hovered" }),
            pressed: e.solid({ base: n, dark: t, tone: "critical", name: r, state: "pressed" }),
            selected: e.solid({ base: n, dark: t, tone: "critical", name: r, state: "selected" }),
          },
        },
        i = {
          default: {
            enabled: e.muted({ base: n, dark: t, tone: "default", name: r, state: "enabled" }),
            disabled: e.muted({ base: n, dark: t, tone: "default", name: r, state: "disabled" }),
            hovered: e.muted({ base: n, dark: t, tone: "default", name: r, state: "hovered" }),
            pressed: e.muted({ base: n, dark: t, tone: "default", name: r, state: "pressed" }),
            selected: e.muted({ base: n, dark: t, tone: "default", name: r, state: "selected" }),
          },
          transparent: {
            enabled: e.muted({ base: n, dark: t, tone: "transparent", name: r, state: "enabled" }),
            disabled: e.muted({ base: n, dark: t, tone: "transparent", name: r, state: "disabled" }),
            hovered: e.muted({ base: n, dark: t, tone: "transparent", name: r, state: "hovered" }),
            pressed: e.muted({ base: n, dark: t, tone: "transparent", name: r, state: "pressed" }),
            selected: e.muted({ base: n, dark: t, tone: "transparent", name: r, state: "selected" }),
          },
          primary: {
            enabled: e.muted({ base: n, dark: t, tone: "primary", name: r, state: "enabled" }),
            disabled: e.muted({ base: n, dark: t, tone: "primary", name: r, state: "disabled" }),
            hovered: e.muted({ base: n, dark: t, tone: "primary", name: r, state: "hovered" }),
            pressed: e.muted({ base: n, dark: t, tone: "primary", name: r, state: "pressed" }),
            selected: e.muted({ base: n, dark: t, tone: "primary", name: r, state: "selected" }),
          },
          positive: {
            enabled: e.muted({ base: n, dark: t, tone: "positive", name: r, state: "enabled" }),
            disabled: e.muted({ base: n, dark: t, tone: "positive", name: r, state: "disabled" }),
            hovered: e.muted({ base: n, dark: t, tone: "positive", name: r, state: "hovered" }),
            pressed: e.muted({ base: n, dark: t, tone: "positive", name: r, state: "pressed" }),
            selected: e.muted({ base: n, dark: t, tone: "positive", name: r, state: "selected" }),
          },
          caution: {
            enabled: e.muted({ base: n, dark: t, tone: "caution", name: r, state: "enabled" }),
            disabled: e.muted({ base: n, dark: t, tone: "caution", name: r, state: "disabled" }),
            hovered: e.muted({ base: n, dark: t, tone: "caution", name: r, state: "hovered" }),
            pressed: e.muted({ base: n, dark: t, tone: "caution", name: r, state: "pressed" }),
            selected: e.muted({ base: n, dark: t, tone: "caution", name: r, state: "selected" }),
          },
          critical: {
            enabled: e.muted({ base: n, dark: t, tone: "critical", name: r, state: "enabled" }),
            disabled: e.muted({ base: n, dark: t, tone: "critical", name: r, state: "disabled" }),
            hovered: e.muted({ base: n, dark: t, tone: "critical", name: r, state: "hovered" }),
            pressed: e.muted({ base: n, dark: t, tone: "critical", name: r, state: "pressed" }),
            selected: e.muted({ base: n, dark: t, tone: "critical", name: r, state: "selected" }),
          },
        };
      return {
        base: n,
        button: {
          default: b(e, n, t, o, i, "default"),
          ghost: b(e, n, t, o, i, "ghost"),
          bleed: b(e, n, t, o, i, "bleed"),
        },
        card: {
          enabled: e.card({ base: n, dark: t, name: r, state: "enabled", solid: o, muted: i }),
          disabled: e.card({ base: n, dark: t, name: r, state: "disabled", solid: o, muted: i }),
          hovered: e.card({ base: n, dark: t, name: r, state: "hovered", solid: o, muted: i }),
          pressed: e.card({ base: n, dark: t, name: r, state: "pressed", solid: o, muted: i }),
          selected: e.card({ base: n, dark: t, name: r, state: "selected", solid: o, muted: i }),
        },
        dark: t,
        input: {
          default: {
            enabled: e.input({
              base: n,
              dark: t,
              mode: "default",
              state: "enabled",
              solid: o.default,
              muted: i.default,
            }),
            disabled: e.input({
              base: n,
              dark: t,
              mode: "default",
              state: "disabled",
              solid: o.default,
              muted: i.default,
            }),
            hovered: e.input({
              base: n,
              dark: t,
              mode: "default",
              state: "hovered",
              solid: o.default,
              muted: i.default,
            }),
            readOnly: e.input({
              base: n,
              dark: t,
              mode: "default",
              state: "readOnly",
              solid: o.default,
              muted: i.default,
            }),
          },
          invalid: {
            enabled: e.input({
              base: n,
              dark: t,
              mode: "invalid",
              state: "enabled",
              solid: o.default,
              muted: i.default,
            }),
            disabled: e.input({
              base: n,
              dark: t,
              mode: "invalid",
              state: "disabled",
              solid: o.default,
              muted: i.default,
            }),
            hovered: e.input({
              base: n,
              dark: t,
              mode: "invalid",
              state: "hovered",
              solid: o.default,
              muted: i.default,
            }),
            readOnly: e.input({
              base: n,
              dark: t,
              mode: "invalid",
              state: "readOnly",
              solid: o.default,
              muted: i.default,
            }),
          },
        },
        selectable: {
          default: v(e, n, t, o, i, "default"),
          primary: v(e, n, t, o, i, "primary"),
          positive: v(e, n, t, o, i, "positive"),
          caution: v(e, n, t, o, i, "caution"),
          critical: v(e, n, t, o, i, "critical"),
        },
        spot: {
          gray: e.spot({ base: n, dark: t, key: "gray" }),
          blue: e.spot({ base: n, dark: t, key: "blue" }),
          purple: e.spot({ base: n, dark: t, key: "purple" }),
          magenta: e.spot({ base: n, dark: t, key: "magenta" }),
          red: e.spot({ base: n, dark: t, key: "red" }),
          orange: e.spot({ base: n, dark: t, key: "orange" }),
          yellow: e.spot({ base: n, dark: t, key: "yellow" }),
          green: e.spot({ base: n, dark: t, key: "green" }),
          cyan: e.spot({ base: n, dark: t, key: "cyan" }),
        },
        syntax: e.syntax({ base: n, dark: t }),
        solid: o,
        muted: i,
      };
    }
    let R = {
        sizes: [
          { distance: -4, size: 19 },
          { distance: -4, size: 25 },
          { distance: -8, size: 33 },
          { distance: -12, size: 49 },
        ],
        focusRing: { offset: 1, width: 1 },
      },
      H = { textWeight: "medium", border: { width: 1 }, focusRing: { offset: -1, width: 1 } },
      $ = { border: { width: 1 }, focusRing: { offset: -1, width: 1 }, shadow: { outline: 0.5 } },
      T = [320, 640, 960, 1280, 1600, 1920],
      E = [360, 600, 900, 1200, 1800, 2400],
      B = { dialog: { zOffset: 600 }, popover: { zOffset: 400 }, tooltip: { zOffset: 200 } },
      P = [0, 1, 3, 6, 9, 12, 21],
      I = [
        null,
        { umbra: [0, 0, 0, 0], penumbra: [0, 0, 0, 0], ambient: [0, 0, 0, 0] },
        { umbra: [0, 3, 5, -2], penumbra: [0, 6, 10, 0], ambient: [0, 1, 18, 1] },
        { umbra: [0, 7, 8, -4], penumbra: [0, 12, 17, 2], ambient: [0, 5, 22, 4] },
        { umbra: [0, 9, 11, -5], penumbra: [0, 18, 28, 2], ambient: [0, 7, 34, 6] },
        { umbra: [0, 11, 15, -7], penumbra: [0, 24, 38, 3], ambient: [0, 9, 46, 8] },
      ],
      A = [0, 4, 8, 12, 20, 32, 52, 84, 136, 220],
      W = {
        border: { width: 1 },
        checkbox: { size: 17, focusRing: { offset: -1, width: 1 } },
        radio: { size: 17, markSize: 9, focusRing: { offset: -1, width: 1 } },
        switch: {
          width: 25,
          height: 17,
          padding: 5,
          transitionDurationMs: 150,
          transitionTimingFunction: "ease-out",
          focusRing: { offset: 1, width: 1 },
        },
        select: { focusRing: { offset: -1, width: 1 } },
        text: { focusRing: { offset: -1, width: 1 } },
      },
      z = { button: { root: { transition: "background-color 100ms,border-color 100ms,color 100ms" } } },
      O = {
        code: {
          family: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
          weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
          sizes: [
            { ascenderHeight: 4, descenderHeight: 4, fontSize: 10, iconSize: 17, lineHeight: 15, letterSpacing: 0 },
            { ascenderHeight: 5, descenderHeight: 5, fontSize: 13, iconSize: 21, lineHeight: 19, letterSpacing: 0 },
            { ascenderHeight: 6, descenderHeight: 6, fontSize: 16, iconSize: 25, lineHeight: 23, letterSpacing: 0 },
            { ascenderHeight: 7, descenderHeight: 7, fontSize: 19, iconSize: 29, lineHeight: 27, letterSpacing: 0 },
            { ascenderHeight: 8, descenderHeight: 8, fontSize: 22, iconSize: 33, lineHeight: 31, letterSpacing: 0 },
          ],
        },
        heading: {
          family:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',
          weights: { regular: 700, medium: 800, semibold: 900, bold: 900 },
          sizes: [
            { ascenderHeight: 5, descenderHeight: 5, fontSize: 13, iconSize: 17, lineHeight: 19, letterSpacing: 0 },
            { ascenderHeight: 6, descenderHeight: 6, fontSize: 16, iconSize: 25, lineHeight: 23, letterSpacing: 0 },
            { ascenderHeight: 7, descenderHeight: 7, fontSize: 21, iconSize: 33, lineHeight: 29, letterSpacing: 0 },
            { ascenderHeight: 8, descenderHeight: 8, fontSize: 27, iconSize: 41, lineHeight: 35, letterSpacing: 0 },
            { ascenderHeight: 9.5, descenderHeight: 8.5, fontSize: 33, iconSize: 49, lineHeight: 41, letterSpacing: 0 },
            {
              ascenderHeight: 10.5,
              descenderHeight: 9.5,
              fontSize: 38,
              iconSize: 53,
              lineHeight: 47,
              letterSpacing: 0,
            },
          ],
        },
        label: {
          family:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", system-ui, sans-serif',
          weights: { regular: 600, medium: 700, semibold: 800, bold: 900 },
          sizes: [
            { ascenderHeight: 2, descenderHeight: 2, fontSize: 8.1, iconSize: 13, lineHeight: 10, letterSpacing: 0.5 },
            { ascenderHeight: 2, descenderHeight: 2, fontSize: 9.5, iconSize: 15, lineHeight: 11, letterSpacing: 0.5 },
            { ascenderHeight: 2, descenderHeight: 2, fontSize: 10.8, iconSize: 17, lineHeight: 12, letterSpacing: 0.5 },
            {
              ascenderHeight: 2,
              descenderHeight: 2,
              fontSize: 12.25,
              iconSize: 19,
              lineHeight: 13,
              letterSpacing: 0.5,
            },
            { ascenderHeight: 2, descenderHeight: 2, fontSize: 13.6, iconSize: 21, lineHeight: 14, letterSpacing: 0.5 },
            { ascenderHeight: 2, descenderHeight: 2, fontSize: 15, iconSize: 23, lineHeight: 15, letterSpacing: 0.5 },
          ],
        },
        text: {
          family:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',
          weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
          sizes: [
            { ascenderHeight: 4, descenderHeight: 4, fontSize: 10, iconSize: 17, lineHeight: 15, letterSpacing: 0 },
            { ascenderHeight: 5, descenderHeight: 5, fontSize: 13, iconSize: 21, lineHeight: 19, letterSpacing: 0 },
            { ascenderHeight: 6, descenderHeight: 6, fontSize: 15, iconSize: 25, lineHeight: 23, letterSpacing: 0 },
            { ascenderHeight: 7, descenderHeight: 7, fontSize: 18, iconSize: 29, lineHeight: 27, letterSpacing: 0 },
            { ascenderHeight: 8, descenderHeight: 8, fontSize: 21, iconSize: 33, lineHeight: 31, letterSpacing: 0 },
          ],
        },
      },
      _ = new WeakMap();
    function Z(e) {
      let t = _.get(e);
      if (t) return t;
      let r = N(e, e.card.enabled),
        n = {
          _blend: e._blend || (e.dark ? "screen" : "multiply"),
          _dark: e.dark,
          accent: r.accent,
          avatar: r.avatar,
          backdrop: e.base.shadow.ambient,
          badge: r.badge,
          bg: e.base.bg,
          border: e.base.border,
          button: { default: D(e, e.button.default), ghost: D(e, e.button.ghost), bleed: D(e, e.button.bleed) },
          code: r.code,
          fg: e.base.fg,
          focusRing: e.base.focusRing,
          icon: r.muted.fg,
          input: { default: F(e.input.default), invalid: F(e.input.invalid) },
          kbd: r.kbd,
          link: r.link,
          muted: { ...r.muted, bg: e.selectable?.default.enabled.bg2 || e.base.bg },
          selectable: D(e, e.selectable || e.muted),
          shadow: e.base.shadow,
          skeleton: { from: e.skeleton?.from || e.base.border, to: e.skeleton?.to || e.base.border },
          syntax: e.syntax,
        };
      return (_.set(e, n), n);
    }
    function D(e, t) {
      return {
        default: {
          enabled: N(e, t.default.enabled),
          hovered: N(e, t.default.hovered),
          pressed: N(e, t.default.pressed),
          selected: N(e, t.default.selected),
          disabled: N(e, t.default.disabled),
        },
        neutral: {
          enabled: N(e, t.default.enabled),
          hovered: N(e, t.default.hovered),
          pressed: N(e, t.default.pressed),
          selected: N(e, t.default.selected),
          disabled: N(e, t.default.disabled),
        },
        primary: {
          enabled: N(e, t.primary.enabled),
          hovered: N(e, t.primary.hovered),
          pressed: N(e, t.primary.pressed),
          selected: N(e, t.primary.selected),
          disabled: N(e, t.primary.disabled),
        },
        suggest: {
          enabled: N(e, t.primary.enabled),
          hovered: N(e, t.primary.hovered),
          pressed: N(e, t.primary.pressed),
          selected: N(e, t.primary.selected),
          disabled: N(e, t.primary.disabled),
        },
        positive: {
          enabled: N(e, t.positive.enabled),
          hovered: N(e, t.positive.hovered),
          pressed: N(e, t.positive.pressed),
          selected: N(e, t.positive.selected),
          disabled: N(e, t.positive.disabled),
        },
        caution: {
          enabled: N(e, t.caution.enabled),
          hovered: N(e, t.caution.hovered),
          pressed: N(e, t.caution.pressed),
          selected: N(e, t.caution.selected),
          disabled: N(e, t.caution.disabled),
        },
        critical: {
          enabled: N(e, t.critical.enabled),
          hovered: N(e, t.critical.hovered),
          pressed: N(e, t.critical.pressed),
          selected: N(e, t.critical.selected),
          disabled: N(e, t.critical.disabled),
        },
      };
    }
    function N(e, t) {
      return {
        ...t,
        avatar: {
          gray: { bg: e.spot.gray, fg: e.base.bg },
          blue: { bg: e.spot.blue, fg: e.base.bg },
          purple: { bg: e.spot.purple, fg: e.base.bg },
          magenta: { bg: e.spot.magenta, fg: e.base.bg },
          red: { bg: e.spot.red, fg: e.base.bg },
          orange: { bg: e.spot.orange, fg: e.base.bg },
          yellow: { bg: e.spot.yellow, fg: e.base.bg },
          green: { bg: e.spot.green, fg: e.base.bg },
          cyan: { bg: e.spot.cyan, fg: e.base.bg },
        },
        badge: {
          default: {
            bg: e.muted.default.enabled.bg,
            fg: e.muted.default.enabled.fg,
            dot: e.muted.default.enabled.muted.fg,
            icon: e.muted.default.enabled.muted.fg,
          },
          neutral: {
            bg: e.muted.transparent.enabled.bg,
            fg: e.muted.transparent.enabled.fg,
            dot: e.muted.transparent.enabled.muted.fg,
            icon: e.muted.transparent.enabled.muted.fg,
          },
          primary: {
            bg: e.muted.primary.enabled.bg,
            fg: e.muted.primary.enabled.fg,
            dot: e.muted.primary.enabled.muted.fg,
            icon: e.muted.primary.enabled.muted.fg,
          },
          suggest: {
            bg: e.muted.primary.enabled.bg,
            fg: e.muted.primary.enabled.fg,
            dot: e.muted.primary.enabled.muted.fg,
            icon: e.muted.primary.enabled.muted.fg,
          },
          positive: {
            bg: e.muted.positive.enabled.bg,
            fg: e.muted.positive.enabled.fg,
            dot: e.muted.positive.enabled.muted.fg,
            icon: e.muted.positive.enabled.muted.fg,
          },
          caution: {
            bg: e.muted.caution.enabled.bg,
            fg: e.muted.caution.enabled.fg,
            dot: e.muted.caution.enabled.muted.fg,
            icon: e.muted.caution.enabled.muted.fg,
          },
          critical: {
            bg: e.muted.critical.enabled.bg,
            fg: e.muted.critical.enabled.fg,
            dot: e.muted.critical.enabled.muted.fg,
            icon: e.muted.critical.enabled.muted.fg,
          },
        },
        kbd: { bg: e.muted.default.enabled.bg, fg: e.muted.default.enabled.fg, border: e.muted.default.enabled.border },
        muted: { ...e.muted.default.enabled.muted, bg: t.bg2 || t.bg },
        skeleton: { from: t.skeleton?.from || t.border, to: t.skeleton?.to || t.border },
      };
    }
    function F(e) {
      return { enabled: U(e.enabled), disabled: U(e.disabled), readOnly: U(e.readOnly), hovered: U(e.hovered) };
    }
    function U(e) {
      return { bg: e.bg, border: e.border, fg: e.fg, muted: { bg: e.bg2 }, placeholder: e.placeholder };
    }
    let G = new WeakMap();
    function Y(e) {
      if (e.sanity.v2?._resolved) return e.sanity.v2;
      let t = G.get(e);
      if (t) return t;
      let r = {
        _version: 2,
        _resolved: !0,
        avatar: { ...R, ...e.sanity.avatar },
        button: { ...H, ...e.sanity.button },
        card: $,
        color: Z(e.sanity.color),
        container: e.sanity.container,
        font: e.sanity.fonts,
        input: {
          ...W,
          ...e.sanity.input,
          checkbox: { ...W.checkbox, ...e.sanity.input.checkbox },
          radio: { ...W.radio, ...e.sanity.input.radio },
          switch: { ...W.switch, ...e.sanity.input.switch },
        },
        layer: e.sanity.layer ?? B,
        media: e.sanity.media,
        radius: e.sanity.radius,
        shadow: e.sanity.shadows,
        space: e.sanity.space,
        style: e.sanity.styles,
      };
      return (G.set(e, r), r);
    }
    function X(e) {
      return 2 === e._version;
    }
    let q = new WeakMap(),
      K = new WeakMap();
    function J(e) {
      let t = K.get(e);
      if (t) return t;
      let {
        avatar: r,
        button: n,
        color: o,
        container: i,
        font: s,
        input: a,
        media: l,
        radius: d,
        shadow: c,
        space: u,
        style: h,
      } = e;
      return {
        _version: 0,
        avatar: r,
        button: n,
        container: i,
        color: {
          light: {
            transparent: Q(o.light.transparent),
            default: Q(o.light.default),
            primary: Q(o.light.primary),
            positive: Q(o.light.positive),
            caution: Q(o.light.caution),
            critical: Q(o.light.critical),
          },
          dark: {
            transparent: Q(o.dark.transparent),
            default: Q(o.dark.default),
            primary: Q(o.dark.primary),
            positive: Q(o.dark.positive),
            caution: Q(o.dark.caution),
            critical: Q(o.dark.critical),
          },
        },
        focusRing: a.text.focusRing,
        fonts: s,
        input: a,
        media: l,
        radius: d,
        shadows: c,
        space: u,
        styles: h,
        v2: e,
      };
    }
    function Q(e) {
      return {
        base: { bg: e.bg, fg: e.fg, border: e.border, focusRing: e.focusRing, shadow: e.shadow },
        button: e.button,
        card: e.selectable.default,
        dark: e._dark,
        input: { default: ee(e.input.default), invalid: ee(e.input.invalid) },
        muted: { ...e.button.ghost, transparent: e.button.ghost.default },
        solid: { ...e.button.default, transparent: e.button.default.default },
        selectable: e.selectable,
        spot: {
          gray: e.avatar.gray.bg,
          blue: e.avatar.blue.bg,
          purple: e.avatar.purple.bg,
          magenta: e.avatar.magenta.bg,
          red: e.avatar.red.bg,
          orange: e.avatar.orange.bg,
          yellow: e.avatar.yellow.bg,
          green: e.avatar.green.bg,
          cyan: e.avatar.cyan.bg,
        },
        syntax: e.syntax,
      };
    }
    function ee(e) {
      return { enabled: et(e.enabled), disabled: et(e.disabled), readOnly: et(e.readOnly), hovered: et(e.hovered) };
    }
    function et(e) {
      return { bg: e.bg, bg2: e.muted.bg, border: e.border, fg: e.fg, placeholder: e.placeholder };
    }
    let er = ["multiply", "screen"],
      en = ["transparent", "default", "neutral", "primary", "suggest", "positive", "caution", "critical"],
      eo = ["default", "neutral", "primary", "suggest", "positive", "caution", "critical"],
      ei = ["enabled", "hovered", "pressed", "selected", "disabled"],
      es = ["default", "ghost", "bleed"],
      ea = ["default", "invalid"],
      el = ["enabled", "hovered", "readOnly", "disabled"];
    function ed(e) {
      return a.includes(e);
    }
    function ec(e) {
      return /^\d+%$/.test(e);
    }
    function eu(e) {
      var t;
      let r = e.split("/"),
        n = r.shift() || "",
        [o, i] = n.split(" ");
      if (ed(o)) {
        let e = r.shift() || "";
        return ec(i)
          ? { type: "color", tint: o, mix: Number(i.slice(0, -1)) / 100 }
          : eh(e)
            ? { type: "color", tint: o, opacity: Number(e) }
            : { type: "color", tint: o };
      }
      if ("black" === (t = o) || "white" === t) {
        let e = r.shift() || "";
        return ec(i)
          ? { type: "color", key: o, mix: Number(i.slice(0, -1)) / 100 }
          : eh(e)
            ? { type: "color", key: o, opacity: Number(e) }
            : { type: "color", key: o };
      }
      if (s.includes(o)) {
        let [e, t] = (n = r.shift() || "").split(" ");
        if (ed(e)) {
          let n = r.shift() || "";
          return ec(t)
            ? { type: "color", hue: o, tint: e, mix: Number(t.slice(0, -1)) / 100 }
            : eh(n)
              ? { type: "color", hue: o, tint: e, opacity: Number(n) }
              : { type: "color", hue: o, tint: e };
        }
        return { type: "hue", value: o };
      }
      if (er.includes(o)) return { type: "blendMode", value: o };
    }
    function eh(e) {
      return "0" === e || /^0\.[0-9]+$/.test(e) || "1" === e;
    }
    ([...s], [...en], [...eo], [...ei], [...ea], [...el]);
    let ef = ["500", "500"];
    function ep(e, t = ef) {
      var r;
      let n,
        { hue: o, scheme: i } = e,
        s = eu(t[+("light" !== i)]);
      if (!s || "color" !== s.type) throw Error(`Invalid color token: ${t[0]}`);
      return (
        (r = { ...s, hue: s.hue || o }),
        (n = ""),
        (n = "black" === r.key || "white" === r.key ? r.key : `${r.hue}/${r.tint}`),
        void 0 !== r.mix ? `${n} ${100 * r.mix}%` : (void 0 !== r.opacity && (n += `/${r.opacity}`), n)
      );
    }
    let eg = {
      base: {
        "*": {
          _blend: ["multiply", "screen"],
          accent: { fg: ["purple/600", "purple/400"] },
          avatar: { "*": { _blend: ["screen", "multiply"], bg: ["500", "400"], fg: ["white", "black"] } },
          backdrop: ["gray/200/0.5", "black/0.5"],
          badge: {
            "*": { bg: ["100", "900"], fg: ["600", "400"], icon: ["500", "500"], dot: ["500", "500"] },
            positive: { bg: ["200 50%", "900"], fg: ["600", "500"] },
            caution: { bg: ["200 50%", "900"], fg: ["600", "500"] },
          },
          bg: ["50", "950"],
          border: ["200", "800"],
          code: { bg: ["50", "950"], fg: ["600", "400"] },
          fg: ["800", "200"],
          focusRing: ["blue/500", "blue/500"],
          icon: ["600", "400"],
          kbd: { bg: ["white", "black"], fg: ["600", "400"], border: ["200", "800"] },
          link: { fg: ["blue/600", "blue/300"] },
          muted: { bg: ["50", "950"], fg: ["700 75%", "300 75%"] },
          shadow: {
            outline: ["500/0.3", "500/0.4"],
            umbra: ["gray/500/0.1", "black/0.2"],
            penumbra: ["gray/500/0.07", "black/0.14"],
            ambient: ["gray/500/0.06", "black/0.12"],
          },
          skeleton: { from: ["100", "900"], to: ["100 50%", "900 50%"] },
        },
        transparent: { bg: ["50", "black"] },
        default: { bg: ["white", "950"], fg: ["800", "200"], muted: { fg: ["600", "400"] } },
        primary: { _hue: "blue" },
        suggest: { _hue: "purple" },
        positive: { _hue: "green", shadow: { outline: ["500/0.4", "500/0.4"] } },
        caution: { _hue: "yellow", shadow: { outline: ["600/0.3", "500/0.4"] } },
        critical: { _hue: "red" },
      },
      button: {
        default: {
          "*": {
            "*": {
              _blend: ["screen", "multiply"],
              accent: { fg: ["purple/300", "purple/700"] },
              avatar: { "*": { _blend: ["screen", "multiply"], bg: ["500", "400"], fg: ["white", "black"] } },
              badge: { "*": { bg: ["900", "100"], fg: ["400", "600"], dot: ["500", "500"], icon: ["500", "500"] } },
              bg: ["500", "400"],
              border: ["500/0", "400/0"],
              code: { bg: ["500 20%", "400 20%"], fg: ["200", "600"] },
              fg: ["white", "black"],
              icon: ["100 70%", "900 70%"],
              kbd: { bg: ["black", "white"], fg: ["200", "600"], border: ["800", "200"] },
              link: { fg: ["blue/200", "blue/600"] },
              muted: { bg: ["950", "50"], fg: ["100 70%", "900 70%"] },
              skeleton: { from: ["900", "100"], to: ["900 50%", "100 50%"] },
            },
            hovered: { bg: ["600", "300"], border: ["700/0", "300/0"] },
            pressed: { bg: ["700", "300"] },
            selected: { bg: ["700", "300"] },
            disabled: {
              _hue: "gray",
              accent: { fg: ["100 70%", "900 70%"] },
              avatar: { "*": { _blend: ["screen", "multiply"], bg: ["gray/500", "gray/400"], fg: ["white", "black"] } },
              badge: {
                "*": {
                  bg: ["gray/700", "gray/300"],
                  fg: ["white", "black"],
                  dot: ["white", "black"],
                  icon: ["white", "black"],
                },
              },
              bg: ["300", "600"],
              code: { bg: ["950", "50"], fg: ["300", "600"] },
              fg: ["300", "600"],
              muted: { bg: ["950", "50"], fg: ["300", "600"] },
              kbd: { bg: ["black", "white"], fg: ["white", "black"], border: ["700", "300"] },
              link: { fg: ["100 70%", "900 70%"] },
            },
          },
          default: {
            "*": {
              avatar: { "*": { _blend: ["screen", "multiply"], bg: ["500", "400"], fg: ["white", "black"] } },
              bg: ["800", "200"],
              muted: { bg: ["950", "50"], fg: ["400", "600"] },
            },
            hovered: { bg: ["900", "100"] },
            pressed: { bg: ["black", "white"] },
            selected: { bg: ["black", "white"] },
          },
        },
        ghost: {
          "*": {
            "*": {
              _blend: ["multiply", "screen"],
              accent: { fg: ["purple/700 60%", "purple/300 70%"] },
              avatar: { "*": { _blend: ["screen", "multiply"], bg: ["500", "400"], fg: ["white", "black"] } },
              badge: { "*": { bg: ["100", "900"], fg: ["600", "400"], dot: ["500", "500"], icon: ["500", "500"] } },
              bg: ["50", "950"],
              border: ["100", "900"],
              code: { bg: ["500 10%", "400 10%"], fg: ["700 60%", "400 60%"] },
              fg: ["600", "400"],
              icon: ["700 60%", "300 60%"],
              kbd: { bg: ["white", "black"], fg: ["600", "400"], border: ["200", "800"] },
              link: { fg: ["blue/700 60%", "blue/300 60%"] },
              muted: { bg: ["100", "950"], fg: ["700 60%", "300 60%"] },
              skeleton: { from: ["100", "900"], to: ["100 50%", "900 50%"] },
            },
            hovered: { bg: ["100", "900"], fg: ["700", "300"] },
            pressed: { bg: ["200", "800"], fg: ["800", "200"] },
            selected: { bg: ["200", "800"], fg: ["800", "200"] },
            disabled: {
              _hue: "gray",
              accent: { fg: ["200", "800"] },
              avatar: { "*": { _blend: ["screen", "multiply"], bg: ["gray/100", "gray/900"], fg: ["white", "black"] } },
              badge: {
                "*": {
                  _hue: "gray",
                  bg: ["50", "950"],
                  fg: ["gray/200", "gray/800"],
                  dot: ["gray/200", "gray/800"],
                  icon: ["gray/200", "gray/800"],
                },
              },
              border: ["100", "900"],
              code: { bg: ["50", "950"], fg: ["200", "800"] },
              fg: ["400", "600"],
              icon: ["300", "700"],
              muted: { fg: ["300", "700"] },
              kbd: { bg: ["white", "black"], fg: ["200", "800"], border: ["100", "900"] },
              link: { fg: ["200", "800"] },
            },
          },
          positive: { "*": { border: ["600 20%", "800"] } },
          caution: { "*": { border: ["600 20%", "800"] } },
        },
        bleed: {
          "*": {
            "*": {
              _blend: ["multiply", "screen"],
              accent: { fg: ["purple/700 70%", "purple/300 70%"] },
              avatar: { "*": { _blend: ["screen", "multiply"], bg: ["500", "400"], fg: ["white", "black"] } },
              badge: { "*": { bg: ["100", "900"], fg: ["600", "400"], dot: ["500", "500"], icon: ["500", "500"] } },
              bg: ["white", "black"],
              border: ["white/0", "black/0"],
              code: { bg: ["50", "950"], fg: ["700 75%", "300 75%"] },
              fg: ["700", "300"],
              icon: ["700 75%", "300 75%"],
              kbd: { bg: ["white", "black"], fg: ["700", "300"], border: ["200", "800"] },
              link: { fg: ["blue/700 70%", "blue/300 70%"] },
              muted: { bg: ["100", "950"], fg: ["700 75%", "300 75%"] },
              skeleton: { from: ["100", "900"], to: ["100 50%", "900 50%"] },
            },
            hovered: { bg: ["50", "900"], fg: ["800", "200"], icon: ["800 70%", "300 70%"] },
            pressed: { bg: ["100", "800"], fg: ["800", "200"], icon: ["800 70%", "200 70%"] },
            selected: { bg: ["100", "900"], fg: ["800", "200"], icon: ["800 60%", "200 60%"] },
            disabled: {
              _hue: "gray",
              accent: { fg: ["200", "800"] },
              avatar: { "*": { _blend: ["screen", "multiply"], bg: ["gray/100", "gray/900"], fg: ["white", "black"] } },
              badge: {
                "*": {
                  _hue: "gray",
                  bg: ["50", "950"],
                  fg: ["gray/200", "gray/800"],
                  dot: ["gray/200", "gray/800"],
                  icon: ["gray/200", "gray/800"],
                },
              },
              code: { bg: ["50", "950"], fg: ["200", "800"] },
              fg: ["400", "600"],
              icon: ["300", "700"],
              muted: { fg: ["400", "600"] },
              kbd: { bg: ["white", "black"], fg: ["200", "800"], border: ["100", "900"] },
              link: { fg: ["200", "800"] },
            },
          },
        },
      },
      input: {
        "*": {
          "*": {
            _blend: ["multiply", "screen"],
            bg: ["white", "black"],
            border: ["200", "700"],
            fg: ["black", "200"],
            muted: { bg: ["50", "950"] },
            placeholder: ["400", "600"],
          },
          hovered: { border: ["300", "700"] },
          readOnly: { bg: ["50", "950"], border: ["200", "800"], fg: ["800", "200"] },
          disabled: { bg: ["50", "950"], fg: ["400", "600"], border: ["100", "900"], placeholder: ["200", "800 50%"] },
        },
        invalid: { "*": { _hue: "red", bg: ["100", "950"] } },
      },
      selectable: {
        "*": {
          "*": {
            _blend: ["multiply", "screen"],
            accent: { fg: ["purple/700 70%", "purple/300 70%"] },
            avatar: { "*": { _blend: ["screen", "multiply"], bg: ["500", "400"], fg: ["white", "black"] } },
            badge: { "*": { bg: ["100", "900"], fg: ["600", "400"], dot: ["500", "500"], icon: ["500", "500"] } },
            bg: ["white", "black"],
            border: ["200", "800"],
            code: { bg: ["50", "950"], fg: ["600", "400"] },
            fg: ["700", "300"],
            icon: ["700 75%", "300 75%"],
            kbd: { bg: ["white", "black"], fg: ["600", "400"], border: ["200", "800"] },
            link: { fg: ["blue/700 70%", "blue/300 70%"] },
            muted: { bg: ["50", "950"], fg: ["700 75%", "300 75%"] },
            skeleton: { from: ["100", "900"], to: ["100 50%", "900 50%"] },
          },
          hovered: { bg: ["50", "950"] },
          pressed: { bg: ["100", "900"] },
          selected: {
            _blend: ["screen", "multiply"],
            accent: { fg: ["purple/300", "purple/700"] },
            avatar: { "*": { _blend: ["multiply", "screen"], bg: ["white", "black"], fg: ["black", "white"] } },
            badge: { "*": { bg: ["900", "100"], fg: ["400", "600"], dot: ["500", "500"], icon: ["500", "500"] } },
            bg: ["500", "400"],
            border: ["500 20%", "400 20%"],
            code: { bg: ["500 20%", "400 20%"], fg: ["200", "600"] },
            fg: ["white", "black"],
            icon: ["100 70%", "900 70%"],
            kbd: { bg: ["black", "white"], fg: ["200", "600"], border: ["800", "200"] },
            link: { fg: ["blue/200", "blue/600"] },
            muted: { bg: ["500 10%", "400 10%"], fg: ["100 70%", "900 70%"] },
            skeleton: { from: ["900", "100"], to: ["900 50%", "100 50%"] },
          },
          disabled: {
            _hue: "gray",
            accent: { fg: ["200", "800"] },
            avatar: { "*": { _blend: ["screen", "multiply"], bg: ["gray/100", "gray/900"], fg: ["white", "black"] } },
            badge: {
              "*": {
                _hue: "gray",
                bg: ["50", "950"],
                fg: ["gray/200", "gray/800"],
                dot: ["gray/200", "gray/800"],
                icon: ["gray/200", "gray/800"],
              },
            },
            border: ["100", "900"],
            code: { bg: ["50", "950"], fg: ["200", "800"] },
            fg: ["200", "800"],
            icon: ["200", "800"],
            kbd: { bg: ["white", "black"], fg: ["200", "800"], border: ["100", "900"] },
            link: { fg: ["200", "800"] },
            muted: { bg: ["50 50%", "950 50%"], fg: ["200", "800"] },
          },
        },
        default: { selected: { _hue: "blue" } },
        critical: { disabled: { bg: ["50 50%", "950 50%"] } },
      },
      syntax: {
        atrule: ["purple/600", "purple/400"],
        attrName: ["green/600", "green/400"],
        attrValue: ["yellow/600", "yellow/400"],
        attribute: ["yellow/600", "yellow/400"],
        boolean: ["purple/600", "purple/400"],
        builtin: ["purple/600", "purple/400"],
        cdata: ["yellow/600", "yellow/400"],
        char: ["yellow/600", "yellow/400"],
        class: ["orange/600", "orange/400"],
        className: ["cyan/600", "cyan/400"],
        comment: ["gray/400", "gray/600"],
        constant: ["purple/600", "purple/400"],
        deleted: ["red/600", "red/400"],
        entity: ["red/600", "red/400"],
        function: ["green/600", "green/400"],
        hexcode: ["blue/600", "blue/400"],
        id: ["purple/600", "purple/400"],
        important: ["purple/600", "purple/400"],
        inserted: ["yellow/600", "yellow/400"],
        keyword: ["magenta/600", "magenta/400"],
        number: ["purple/600", "purple/400"],
        operator: ["magenta/600", "magenta/400"],
        property: ["blue/600", "blue/400"],
        pseudoClass: ["yellow/600", "yellow/400"],
        pseudoElement: ["yellow/600", "yellow/400"],
        punctuation: ["gray/600", "gray/400"],
        regex: ["blue/600", "blue/400"],
        selector: ["red/600", "red/400"],
        string: ["yellow/600", "yellow/400"],
        symbol: ["purple/600", "purple/400"],
        tag: ["red/600", "red/400"],
        unit: ["orange/600", "orange/400"],
        url: ["red/600", "red/400"],
        variable: ["red/600", "red/400"],
      },
    };
    function em(e) {
      return !!(e && "object" == typeof e && !Array.isArray(e));
    }
    function ew(...e) {
      let t = e.filter(Boolean);
      return 0 === t.length ? {} : t.reduce(ev, {});
    }
    function ev(e, t) {
      for (let r of Object.keys(t)) {
        let n = e[r],
          o = t[r];
        em(n) && em(o) ? (e[r] = ew(n, o)) : (e[r] = o);
      }
      return e;
    }
    function eb(e, t) {
      let { scheme: r } = e,
        n = {};
      for (let e of en)
        n[e] = (function (e, t) {
          let { scheme: r, tone: n } = e,
            o = t?.color?.base?.[n],
            i = { hue: o?._hue || "gray", scheme: r };
          return {
            _blend: (o?._blend || ["multiply", "screen"])[+("light" !== r)],
            _dark: "dark" === r,
            accent: { fg: ep(i, o?.accent?.fg) },
            avatar: ey({ scheme: r }, o),
            backdrop: ep(i, o?.backdrop),
            badge: eC(o?.badge, { scheme: r }, t),
            bg: ep(i, o?.bg),
            border: ep(i, o?.border),
            button: (function (e, t) {
              let { scheme: r, tone: n } = e,
                o = {};
              for (let e of es)
                o[e] = (function (e, t) {
                  let { cardTone: r, mode: n, scheme: o } = e,
                    i = {};
                  for (let e of eo)
                    i[e] = (function (e, t) {
                      let { cardTone: r, mode: n, scheme: o, tone: i } = e,
                        s = {};
                      for (let e of ei)
                        s[e] = (function (e, t) {
                          let { cardTone: r, mode: n, tone: o, scheme: i, state: s } = e,
                            a = t?.color?.base?.[r],
                            l = t?.color?.button?.[n]?.[o]?.[s],
                            d = l?._hue || a?._hue || "gray",
                            c = l?._blend || ["screen", "multiply"],
                            u = { hue: d, scheme: i };
                          return {
                            _blend: c[+("light" !== i)],
                            accent: { fg: ep(u, l?.accent?.fg) },
                            avatar: ey({ scheme: i }, l),
                            badge: eC(l?.badge, { scheme: i }, t),
                            bg: ep(u, l?.bg),
                            border: ep(u, l?.border),
                            code: { bg: ep(u, l?.code?.bg), fg: ep(u, l?.code?.fg) },
                            fg: ep(u, l?.fg),
                            icon: ep(u, l?.icon),
                            muted: { bg: ep(u, l?.muted?.bg), fg: ep(u, l?.muted?.fg) },
                            kbd: { bg: ep(u, l?.kbd?.bg), fg: ep(u, l?.kbd?.fg), border: ep(u, l?.kbd?.border) },
                            link: { fg: ep(u, l?.link?.fg) },
                            skeleton: { from: ep(u, l?.skeleton?.from), to: ep(u, l?.skeleton?.to) },
                          };
                        })({ cardTone: r, mode: n, tone: i, scheme: o, state: e }, t);
                      return s;
                    })({ cardTone: r, mode: n, scheme: o, tone: e }, t);
                  return i;
                })({ cardTone: n, scheme: r, mode: e }, t);
              return o;
            })({ scheme: r, tone: n }, t),
            code: { bg: ep(i, o?.code?.bg), fg: ep(i, o?.code?.fg) },
            fg: ep(i, o?.fg),
            focusRing: ep(i, o?.focusRing),
            icon: ep(i, o?.icon),
            input: (function (e, t) {
              let { scheme: r, tone: n } = e;
              return {
                default: ek({ mode: "default", scheme: r, tone: n }, t),
                invalid: ek({ mode: "invalid", scheme: r, tone: n }, t),
              };
            })({ scheme: r, tone: n }, t),
            kbd: { bg: ep(i, o?.kbd?.bg), fg: ep(i, o?.kbd?.fg), border: ep(i, o?.kbd?.border) },
            link: { fg: ep(i, o?.link?.fg) },
            muted: { bg: ep(i, o?.muted?.bg), fg: ep(i, o?.muted?.fg) },
            selectable: (function (e, t) {
              let { scheme: r, tone: n } = e,
                o = {};
              for (let e of eo)
                o[e] = (function (e, t) {
                  let { cardTone: r, scheme: n, tone: o } = e,
                    i = {};
                  for (let e of ei)
                    i[e] = (function (e, t) {
                      let { cardTone: r, scheme: n, state: o, tone: i } = e,
                        s = t?.color?.base?.[r],
                        a = t?.color?.selectable?.[i]?.[o],
                        l = a?._hue || s?._hue || "gray",
                        d = a?._blend || ["screen", "multiply"],
                        c = { hue: l, scheme: n };
                      return {
                        _blend: d[+("light" !== n)],
                        accent: { fg: ep(c, a?.accent?.fg) },
                        avatar: ey({ scheme: n }, a),
                        badge: eC(a?.badge, { scheme: n }, t),
                        bg: ep(c, a?.bg),
                        border: ep(c, a?.border),
                        code: { bg: ep(c, a?.code?.bg), fg: ep(c, a?.code?.fg) },
                        fg: ep(c, a?.fg),
                        icon: ep(c, a?.icon),
                        muted: { bg: ep(c, a?.muted?.bg), fg: ep(c, a?.muted?.fg) },
                        kbd: { bg: ep(c, a?.kbd?.bg), fg: ep(c, a?.kbd?.fg), border: ep(c, a?.kbd?.border) },
                        link: { fg: ep(c, a?.link?.fg) },
                        skeleton: { from: ep(c, a?.skeleton?.from), to: ep(c, a?.skeleton?.to) },
                      };
                    })({ cardTone: r, tone: o, scheme: n, state: e }, t);
                  return i;
                })({ cardTone: n, scheme: r, tone: e }, t);
              return o;
            })({ scheme: r, tone: n }, t),
            shadow: (function (e, t) {
              let { scheme: r, tone: n } = e,
                o = t?.color?.base?.[n],
                i = { hue: o?._hue || "gray", scheme: r };
              return {
                outline: ep(i, o?.shadow?.outline),
                umbra: ep(i, o?.shadow?.umbra),
                penumbra: ep(i, o?.shadow?.penumbra),
                ambient: ep(i, o?.shadow?.ambient),
              };
            })({ scheme: r, tone: n }, t),
            skeleton: { from: ep(i, o?.skeleton?.from), to: ep(i, o?.skeleton?.to) },
            syntax: (function (e, t) {
              let { scheme: r } = e,
                n = t?.color?.syntax,
                o = { hue: "gray", scheme: r };
              return {
                atrule: ep(o, n?.atrule),
                attrName: ep(o, n?.attrName),
                attrValue: ep(o, n?.attrValue),
                attribute: ep(o, n?.attribute),
                boolean: ep(o, n?.boolean),
                builtin: ep(o, n?.builtin),
                cdata: ep(o, n?.cdata),
                char: ep(o, n?.char),
                class: ep(o, n?.class),
                className: ep(o, n?.className),
                comment: ep(o, n?.comment),
                constant: ep(o, n?.constant),
                deleted: ep(o, n?.deleted),
                doctype: ep(o, n?.doctype),
                entity: ep(o, n?.entity),
                function: ep(o, n?.function),
                hexcode: ep(o, n?.hexcode),
                id: ep(o, n?.id),
                important: ep(o, n?.important),
                inserted: ep(o, n?.inserted),
                keyword: ep(o, n?.keyword),
                number: ep(o, n?.number),
                operator: ep(o, n?.operator),
                prolog: ep(o, n?.prolog),
                property: ep(o, n?.property),
                pseudoClass: ep(o, n?.pseudoClass),
                pseudoElement: ep(o, n?.pseudoElement),
                punctuation: ep(o, n?.punctuation),
                regex: ep(o, n?.regex),
                selector: ep(o, n?.selector),
                string: ep(o, n?.string),
                symbol: ep(o, n?.symbol),
                tag: ep(o, n?.tag),
                unit: ep(o, n?.unit),
                url: ep(o, n?.url),
                variable: ep(o, n?.variable),
              };
            })({ scheme: r }, t),
          };
        })({ scheme: r, tone: e }, t);
      return n;
    }
    function ey(e, t) {
      let { scheme: r } = e;
      return {
        gray: ex({ color: "gray", scheme: r }, t),
        blue: ex({ color: "blue", scheme: r }, t),
        purple: ex({ color: "purple", scheme: r }, t),
        magenta: ex({ color: "magenta", scheme: r }, t),
        red: ex({ color: "red", scheme: r }, t),
        orange: ex({ color: "orange", scheme: r }, t),
        yellow: ex({ color: "yellow", scheme: r }, t),
        green: ex({ color: "green", scheme: r }, t),
        cyan: ex({ color: "cyan", scheme: r }, t),
      };
    }
    function ex(e, t) {
      let { color: r, scheme: n } = e,
        o = t?.avatar?.[r],
        i = { hue: o?._hue || "gray", scheme: n };
      return { _blend: (o?._blend || ["screen", "multiply"])[+("light" !== n)], bg: ep(i, o?.bg), fg: ep(i, o?.fg) };
    }
    function eC(e, t, r) {
      let { scheme: n } = t,
        o = {};
      for (let t of eo)
        o[t] = (function (e, t, r) {
          let { scheme: n, tone: o } = t,
            i = e?.[o],
            s = { hue: i?._hue || r?.color?.base?.[o]?._hue || "gray", scheme: n };
          return { bg: ep(s, i?.bg), fg: ep(s, i?.fg), dot: ep(s, i?.dot), icon: ep(s, i?.icon) };
        })(e, { scheme: n, tone: t }, r);
      return o;
    }
    function ek(e, t) {
      let { mode: r, scheme: n, tone: o } = e;
      return {
        enabled: eM({ mode: r, scheme: n, state: "enabled", cardTone: o }, t),
        hovered: eM({ mode: r, scheme: n, state: "hovered", cardTone: o }, t),
        readOnly: eM({ mode: r, scheme: n, state: "readOnly", cardTone: o }, t),
        disabled: eM({ mode: r, scheme: n, state: "disabled", cardTone: o }, t),
      };
    }
    function eM(e, t) {
      let { cardTone: r, mode: n, scheme: o, state: i } = e,
        s = t?.color?.base?.[r],
        a = t?.color?.input?.[n]?.[i],
        l = a?._hue || s?._hue || "gray",
        d = a?._blend || ["screen", "multiply"],
        c = { hue: l, scheme: o };
      return {
        _blend: d[+("light" !== o)],
        bg: ep(c, a?.bg),
        border: ep(c, a?.border),
        fg: ep(c, a?.fg),
        muted: { bg: ep(c, a?.muted?.bg) },
        placeholder: ep(c, a?.placeholder),
      };
    }
    function ej(e, t) {
      return {
        r: 255 * ((e.r / 255) * (t.r / 255)),
        g: 255 * ((e.g / 255) * (t.g / 255)),
        b: 255 * ((e.b / 255) * (t.b / 255)),
      };
    }
    function eL(e, t) {
      var r, n, o, i, s, a;
      return {
        r: 255 * ((r = e.r / 255) + (n = t.r / 255) - r * n),
        g: 255 * ((o = e.g / 255) + (i = t.g / 255) - o * i),
        b: 255 * ((s = e.b / 255) + (a = t.b / 255) - s * a),
      };
    }
    function eS(e, t = 0, r = 1) {
      return Math.min(r, Math.max(t, e));
    }
    function eV(e, t, r, n, o) {
      var i;
      return r * (1 - (i = eS((o - e) / (t - e)))) + n * i;
    }
    function eR(e) {
      return Math.round(e);
    }
    function eH(e) {
      if (4 === e.length) {
        let t = e.slice(1, 2),
          r = e.slice(2, 3),
          n = e.slice(3, 4);
        return { r: parseInt(t + t, 16), g: parseInt(r + r, 16), b: parseInt(n + n, 16) };
      }
      return { r: parseInt(e.slice(1, 3), 16), g: parseInt(e.slice(3, 5), 16), b: parseInt(e.slice(5, 7), 16) };
    }
    function e$(e) {
      let t = eR(eS(Math.round(e.r), 0, 255)),
        r = eR(eS(Math.round(e.g), 0, 255)),
        n = eR(eS(Math.round(e.b), 0, 255));
      return "a" in e
        ? `rgba(${t},${r},${n},${e.a})`
        : "#" + (0x1000000 + (t << 16) + (r << 8) + n).toString(16).slice(1);
    }
    function eT({ r: e, g: t, b: r }) {
      e /= 255;
      let n = Math.min(e, (t /= 255), (r /= 255)),
        o = Math.max(e, t, r),
        i = o - n,
        s = 0,
        a = 0,
        l = 0;
      return (
        (s = Math.round(
          60 * (s = 0 == i ? 0 : o == e ? ((t - r) / i) % 6 : o == t ? (r - e) / i + 2 : (e - t) / i + 4),
        )) < 0 && (s += 360),
        (l = (o + n) / 2),
        {
          h: s,
          s: (a = +(100 * (a = 0 == i ? 0 : i / (1 - Math.abs(2 * l - 1)))).toFixed(1)),
          l: (l = +(100 * l).toFixed(1)),
        }
      );
    }
    function eE(e) {
      let t = e.s / 100,
        r = e.l / 100,
        n = (1 - Math.abs(2 * r - 1)) * t,
        o = n * (1 - Math.abs(((e.h / 60) % 2) - 1)),
        i = r - n / 2,
        s = 0,
        a = 0,
        l = 0;
      return (
        0 <= e.h && e.h < 60
          ? ((s = n), (a = o), (l = 0))
          : 60 <= e.h && e.h < 120
            ? ((s = o), (a = n), (l = 0))
            : 120 <= e.h && e.h < 180
              ? ((s = 0), (a = n), (l = o))
              : 180 <= e.h && e.h < 240
                ? ((s = 0), (a = o), (l = n))
                : 240 <= e.h && e.h < 300
                  ? ((s = o), (a = 0), (l = n))
                  : 300 <= e.h && e.h < 360 && ((s = n), (a = 0), (l = o)),
        { r: Math.round((s + i) * 255), g: Math.round((a + i) * 255), b: Math.round((l + i) * 255) }
      );
    }
    let eB = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;
    function eP(e) {
      if (!e) return { r: 0, g: 0, b: 0 };
      if ("string" != typeof e) throw Error("parseColor: expected a string");
      if (
        "#" === e[0] &&
        (4 === e.length || 7 === e.length) &&
        (function (e) {
          for (let t of e) if (-1 === "0123456789ABCDEFabcdef".indexOf(t)) return !1;
          return !0;
        })(e.slice(1))
      )
        return eH(e);
      if (e.startsWith("hsl("))
        return eE(
          (function (e) {
            let t = eB.exec(e);
            if (!t) throw Error(`parseHsl: string is not a HSL color: "${e}"`);
            return { h: parseInt(t[1]), s: parseFloat(t[3]), l: parseFloat(t[5]) };
          })(e),
        );
      if (e.startsWith("rgba(")) {
        let t;
        return {
          r: parseInt((t = e.replace(/rgba\(|\)/g, "").split(","))[0]),
          g: parseInt(t[1]),
          b: parseInt(t[2]),
          a: parseFloat(t[3]),
        };
      }
      throw Error(`parseColor: unexpected color format: "${e}"`);
    }
    function eI(e, t) {
      let r = eP(e);
      return `rgba(${r.r},${r.g},${r.b},${t})`;
    }
    let eA = [0, 255];
    function eW(e, t) {
      let { bg: r, blendMode: n, colorPalette: o } = t;
      if ("white" === r) throw Error("Cannot blend with white background");
      let i = eu(e);
      if (!i || "color" !== i.type) throw Error(`Invalid color token value: ${e}`);
      let s = "";
      if (
        ("black" === i.key && (s = ez(o.black)),
        "white" === i.key && (s = ez(o.white)),
        i.hue && i.tint && (s = ez(o[i.hue][i.tint])),
        !s)
      )
        throw Error(`Invalid color token value: ${e}`);
      let a = s,
        l = { blendMode: n, bg: r, black: ez(o.black), white: ez(o.white) };
      try {
        if (
          ((s = (function (e, t) {
            let { blendMode: r } = t,
              n = eP(e),
              o = eP(t.black),
              i = eP(t.white),
              s = t.bg ? eP(t.bg) : "multiply" === r ? i : o,
              a = { r: [o.r, i.r], g: [o.g, i.g], b: [o.b, i.b] },
              l = {
                r: eS(eV(...a.r, ...eA, s.r), ...eA),
                g: eS(eV(...a.g, ...eA, s.g), ...eA),
                b: eS(eV(...a.b, ...eA, s.b), ...eA),
              },
              d = {
                r: eS(eV(...a.r, ...eA, n.r), ...eA),
                g: eS(eV(...a.g, ...eA, n.g), ...eA),
                b: eS(eV(...a.b, ...eA, n.b), ...eA),
              },
              c = "multiply" === r ? ej(l, d) : eL(l, d);
            return e$({
              r: eS(eV(...eA, ...a.r, c.r), ...a.r),
              g: eS(eV(...eA, ...a.g, c.g), ...a.g),
              b: eS(eV(...eA, ...a.b, c.b), ...a.b),
            });
          })(s, l)),
          r && void 0 !== i.mix)
        ) {
          var d, c, u, h, f, p, g;
          let e = eH(r),
            t = eH(s);
          s = e$(
            ((d = i.mix),
            {
              r: ((c = e.r), (u = t.r), c + (u - c) * d),
              g: ((h = e.g), (f = t.g), h + (f - h) * d),
              b: ((p = e.b), (g = t.b), p + (g - p) * d),
            }),
          );
        }
      } catch (e) {
        throw (console.warn("could not blend", s, l), e);
      }
      return (
        "#aN" === s && (console.warn(`invalid color token value: ${e}`), (s = a)),
        void 0 !== i.opacity && (s = eI(s, i.opacity)),
        s
      );
    }
    function ez(e) {
      return "string" == typeof e ? e : e.hex;
    }
    function eO(e, t) {
      let r = Object.entries(t),
        [, n] = r.find(([e]) => "transparent" === e),
        [, o] = r.find(([e]) => "default" === e),
        i = e_(n, { colorPalette: e }),
        s = e_(o, { colorPalette: e }),
        a = s.bg;
      if ("white" === a) throw Error("Cannot blend with white background");
      return Object.fromEntries([
        ["transparent", i],
        ["default", s],
        ...r
          .filter(([e]) => "default" !== e && "transparent" !== e)
          .map(([t, r]) => [t, e_(r, { bg: a, colorPalette: e })]),
      ]);
    }
    function e_(e, t) {
      var r, n, o, i;
      let { colorPalette: s, bg: a } = t,
        l = e._blend || "multiply",
        d = eW(e.bg, { colorPalette: s, bg: a, blendMode: l }),
        c = { colorPalette: s, bg: d, blendMode: l },
        u =
          ((r = e.button),
          (n = { baseBg: d, blendMode: l, colorPalette: s }),
          { default: eN(r.default, n), ghost: eN(r.ghost, n), bleed: eN(r.bleed, n) }),
        h = (function (e, t) {
          let r = {};
          for (let i of eo) {
            var n, o;
            r[i] =
              ((n = e[i]),
              (o = t),
              {
                enabled: eF(n.enabled, o),
                hovered: eF(n.hovered, o),
                pressed: eF(n.pressed, o),
                selected: eF(n.selected, o),
                disabled: eF(n.disabled, o),
              });
          }
          return r;
        })(e.selectable, { colorPalette: s, baseBg: d, blendMode: l }),
        f = {
          outline: eW(e.shadow.outline, c),
          umbra: eW(e.shadow.umbra, { ...c, bg: void 0, colorPalette: { ...s, black: "#000000" } }),
          penumbra: eW(e.shadow.penumbra, { ...c, bg: void 0, colorPalette: { ...s, black: "#000000" } }),
          ambient: eW(e.shadow.ambient, { ...c, bg: void 0, colorPalette: { ...s, black: "#000000" } }),
        };
      return {
        _blend: l,
        _dark: e._dark,
        accent: { fg: eW(e.accent.fg, c) },
        avatar: eZ(e.avatar, { baseBg: d, colorPalette: s, blendMode: l }),
        backdrop: eW(e.backdrop, c),
        badge: eD(e.badge, { baseBg: d, colorPalette: s, blendMode: l }),
        bg: d,
        border: eW(e.border, c),
        button: u,
        code: { bg: eW(e.code.bg, c), fg: eW(e.code.fg, c) },
        fg: eW(e.fg, c),
        focusRing: eW(e.focusRing, c),
        icon: eW(e.icon, c),
        input:
          ((o = e.input),
          (i = { baseBg: d, colorPalette: s, blendMode: l }),
          { default: eU(o.default, i), invalid: eU(o.invalid, i) }),
        kbd: (function (e, t) {
          let { baseBg: r, blendMode: n, colorPalette: o } = t,
            i = eW(e.bg, { bg: r, blendMode: n, colorPalette: o }),
            s = { bg: i, blendMode: n, colorPalette: o };
          return { bg: i, fg: eW(e.fg, s), border: eW(e.border, s) };
        })(e.kbd, { baseBg: d, colorPalette: s, blendMode: l }),
        link: { fg: eW(e.link.fg, c) },
        muted: { bg: eW(e.muted.bg, c), fg: eW(e.muted.fg, c) },
        shadow: f,
        skeleton: { from: eW(e.skeleton.from, c), to: eW(e.skeleton.to, c) },
        syntax: (function (e, t) {
          let { colorPalette: r, baseBg: n, blendMode: o } = t,
            i = { colorPalette: r, bg: n, blendMode: o };
          return {
            atrule: eW(e.atrule, i),
            attrName: eW(e.attrName, i),
            attrValue: eW(e.attrValue, i),
            attribute: eW(e.attribute, i),
            boolean: eW(e.boolean, i),
            builtin: eW(e.builtin, i),
            cdata: eW(e.cdata, i),
            char: eW(e.char, i),
            class: eW(e.class, i),
            className: eW(e.className, i),
            comment: eW(e.comment, i),
            constant: eW(e.constant, i),
            deleted: eW(e.deleted, i),
            doctype: eW(e.doctype, i),
            entity: eW(e.entity, i),
            function: eW(e.function, i),
            hexcode: eW(e.hexcode, i),
            id: eW(e.id, i),
            important: eW(e.important, i),
            inserted: eW(e.inserted, i),
            keyword: eW(e.keyword, i),
            number: eW(e.number, i),
            operator: eW(e.operator, i),
            prolog: eW(e.prolog, i),
            property: eW(e.property, i),
            pseudoClass: eW(e.pseudoClass, i),
            pseudoElement: eW(e.pseudoElement, i),
            punctuation: eW(e.punctuation, i),
            regex: eW(e.regex, i),
            selector: eW(e.selector, i),
            string: eW(e.string, i),
            symbol: eW(e.symbol, i),
            tag: eW(e.tag, i),
            unit: eW(e.unit, i),
            url: eW(e.url, i),
            variable: eW(e.variable, i),
          };
        })(e.syntax, { baseBg: d, colorPalette: s, blendMode: l }),
        selectable: h,
      };
    }
    function eZ(e, t) {
      let r = {};
      for (let n of s)
        r[n] = (function (e, t) {
          let { baseBg: r, blendMode: n, colorPalette: o } = t,
            i = e._blend || "multiply",
            s = eW(e.bg, { bg: r, blendMode: n, colorPalette: o });
          return { _blend: i, bg: s, fg: eW(e.fg, { bg: s, blendMode: i, colorPalette: o }) };
        })(e[n], t);
      return r;
    }
    function eD(e, t) {
      let r = {};
      for (let n of eo)
        r[n] = (function (e, t) {
          let { baseBg: r, blendMode: n, colorPalette: o } = t,
            i = eW(e.bg, { bg: r, blendMode: n, colorPalette: o }),
            s = { bg: i, blendMode: n, colorPalette: o };
          return { bg: i, dot: eW(e.dot, s), fg: eW(e.fg, s), icon: eW(e.icon, s) };
        })(e[n], t);
      return r;
    }
    function eN(e, t) {
      let r = {};
      for (let i of eo) {
        var n, o;
        r[i] =
          ((n = e[i]),
          (o = t),
          {
            enabled: eF(n.enabled, o),
            hovered: eF(n.hovered, o),
            pressed: eF(n.pressed, o),
            selected: eF(n.selected, o),
            disabled: eF(n.disabled, o),
          });
      }
      return r;
    }
    function eF(e, t) {
      let { baseBg: r, blendMode: n, colorPalette: o } = t,
        i = e._blend || "multiply",
        s = eW(e.bg, { bg: r, blendMode: n, colorPalette: o }),
        a = { bg: s, blendMode: i, colorPalette: o };
      return {
        _blend: i,
        accent: { fg: eW(e.accent.fg, a) },
        avatar: eZ(e.avatar, { baseBg: s, colorPalette: o, blendMode: i }),
        badge: eD(e.badge, { baseBg: s, colorPalette: o, blendMode: i }),
        bg: s,
        border: eW(e.border, a),
        code: { bg: eW(e.code.bg, a), fg: eW(e.code.fg, a) },
        fg: eW(e.fg, a),
        icon: eW(e.icon, a),
        link: { fg: eW(e.link.fg, a) },
        muted: { bg: eW(e.muted.bg, a), fg: eW(e.muted.fg, a) },
        kbd: { bg: eW(e.kbd.bg, a), fg: eW(e.kbd.fg, a), border: eW(e.kbd.border, a) },
        skeleton: { from: eW(e.skeleton?.from, a), to: eW(e.skeleton?.to, a) },
      };
    }
    function eU(e, t) {
      return {
        enabled: eG(e.enabled, t),
        hovered: eG(e.hovered, t),
        readOnly: eG(e.readOnly, t),
        disabled: eG(e.disabled, t),
      };
    }
    function eG(e, t) {
      let { baseBg: r, blendMode: n, colorPalette: o } = t,
        i = e._blend || "multiply",
        s = eW(e.bg, { colorPalette: o, bg: r, blendMode: n }),
        a = { colorPalette: o, bg: s, blendMode: i };
      return {
        _blend: i,
        bg: s,
        border: eW(e.border, a),
        fg: eW(e.fg, a),
        muted: { bg: eW(e.muted.bg, a) },
        placeholder: eW(e.placeholder, a),
      };
    }
    function eY(e) {
      var t;
      let r,
        n,
        o,
        i =
          ((t = e),
          {
            light: eb(
              { scheme: "light" },
              (n = {
                color: {
                  base: (function (e) {
                    let t = {};
                    for (let r of en)
                      t[r] = (function (e, t) {
                        let r = ew(e?.base?.["*"], e?.base?.[t]),
                          n = r._hue || e?.base?.[t]?._hue || "gray";
                        return {
                          ...r,
                          _hue: n,
                          avatar: s.reduce(
                            (e, t) => ({ ...e, [t]: ew({ _hue: t }, r.avatar?.["*"], r.avatar?.[t]) }),
                            {},
                          ),
                          badge: eo.reduce(
                            (t, o) => ({
                              ...t,
                              [o]: { _hue: e?.base?.[o]?._hue || n, ...r.badge?.["*"], ...r.badge?.[o] },
                            }),
                            {},
                          ),
                        };
                      })(e, r);
                    return t;
                  })((r = ew(eg, t?.color))),
                  button: (function (e) {
                    let t = {};
                    for (let r of es)
                      t[r] = (function (e, t) {
                        let r = {};
                        for (let n of eo)
                          r[n] = (function (e, t, r) {
                            let n = {};
                            for (let o of ei)
                              n[o] = (function (e, t, r, n) {
                                let o = ew(
                                    e?.button?.[r]?.["*"]?.["*"],
                                    e?.button?.[r]?.[t]?.["*"],
                                    e?.button?.[r]?.["*"]?.[n],
                                    e?.button?.[r]?.[t]?.[n],
                                  ),
                                  i = o._hue || e?.base?.[t]?._hue;
                                return {
                                  ...o,
                                  _hue: i,
                                  avatar: s.reduce(
                                    (e, t) => ({ ...e, [t]: ew({ _hue: t }, o.avatar?.["*"], o.avatar?.[t]) }),
                                    {},
                                  ),
                                  badge: eo.reduce(
                                    (t, r) => ({
                                      ...t,
                                      [r]: { _hue: e?.base?.[r]?._hue || i, ...o.badge?.["*"], ...o.badge?.[r] },
                                    }),
                                    {},
                                  ),
                                };
                              })(e, r, t, o);
                            return n;
                          })(e, t, n);
                        return r;
                      })(e, r);
                    return t;
                  })(r),
                  input: (function (e) {
                    let t = {};
                    for (let r of ea)
                      t[r] = (function (e, t) {
                        let r = {};
                        for (let n of el)
                          r[n] = (function (e, t, r) {
                            let n = ew(
                                e?.input?.["*"]?.["*"],
                                e?.input?.[t]?.["*"],
                                e?.input?.["*"]?.[r],
                                e?.input?.[t]?.[r],
                              ),
                              o = n._hue || e?.input?.[t]?._hue;
                            return { ...n, _hue: o };
                          })(e, t, n);
                        return r;
                      })(e, r);
                    return t;
                  })(r),
                  selectable: (function (e) {
                    let t = {};
                    for (let r of eo)
                      t[r] = (function (e, t) {
                        let r = { _hue: e?.selectable?.[t]?._hue || e?.base?.[t]?._hue };
                        for (let n of ei)
                          r[n] = (function (e, t, r) {
                            let n = ew(
                                e?.selectable?.["*"]?.["*"],
                                e?.selectable?.[t]?.["*"],
                                e?.selectable?.["*"]?.[r],
                                e?.selectable?.[t]?.[r],
                              ),
                              o = n._hue || e?.base?.[t]?._hue;
                            return {
                              ...n,
                              _hue: o,
                              avatar: s.reduce(
                                (e, t) => ({ ...e, [t]: ew({ _hue: t }, n.avatar?.["*"], n.avatar?.[t]) }),
                                {},
                              ),
                              badge: eo.reduce(
                                (t, r) => ({
                                  ...t,
                                  [r]: { _hue: e?.base?.[r]?._hue || o, ...n.badge?.["*"], ...n.badge?.[r] },
                                }),
                                {},
                              ),
                            };
                          })(e, t, n);
                        return r;
                      })(e, r);
                    return t;
                  })(r),
                  syntax: r.syntax,
                },
              }),
            ),
            dark: eb({ scheme: "dark" }, n),
          });
      return J({
        _version: 2,
        avatar: e?.avatar ?? R,
        button: e?.button ?? H,
        card: e?.card ?? $,
        color: { light: eO((o = e?.palette ?? w), i.light), dark: eO(o, i.dark) },
        container: e?.container ?? T,
        font: e?.font ?? O,
        input: e?.input ?? W,
        layer: e?.layer ?? B,
        media: e?.media ?? E,
        radius: e?.radius ?? P,
        shadow: e?.shadow ?? I,
        space: e?.space ?? A,
        style: e?.style ?? z,
      });
    }
    let eX = new Map();
    function eq(e, t, r) {
      var n, o, i, s, a;
      let l,
        d = (function (e, t, r) {
          let n = eX.get(t);
          if (!n) return;
          let o = n.get(r);
          if (o) return o.get(e);
        })(e, t, r);
      if (d) return d;
      let c = X(e) ? J(e) : e,
        u = X(e)
          ? e
          : (function (e) {
              if (e.v2) return e.v2;
              let t = q.get(e);
              if (t) return t;
              let {
                  avatar: r,
                  button: n,
                  color: o,
                  container: i,
                  fonts: s,
                  input: a,
                  layer: l,
                  media: d,
                  radius: c,
                  shadows: u,
                  space: h,
                  styles: f,
                } = e,
                p = {
                  _version: 2,
                  avatar: { ...R, ...r },
                  button: { ...H, ...n },
                  card: $,
                  color: {
                    light: {
                      transparent: Z(o.light.transparent),
                      default: Z(o.light.default),
                      neutral: Z(o.light.transparent),
                      primary: Z(o.light.primary),
                      suggest: Z(o.light.primary),
                      positive: Z(o.light.positive),
                      caution: Z(o.light.caution),
                      critical: Z(o.light.critical),
                    },
                    dark: {
                      transparent: Z(o.dark.transparent),
                      default: Z(o.dark.default),
                      neutral: Z(o.dark.transparent),
                      primary: Z(o.dark.primary),
                      suggest: Z(o.dark.primary),
                      positive: Z(o.dark.positive),
                      caution: Z(o.dark.caution),
                      critical: Z(o.dark.critical),
                    },
                  },
                  container: i,
                  font: s,
                  input: {
                    ...W,
                    ...a,
                    checkbox: { ...W.checkbox, ...a.checkbox },
                    radio: { ...W.radio, ...a.radio },
                    switch: { ...W.switch, ...a.switch },
                  },
                  layer: l ?? B,
                  media: d,
                  radius: c,
                  shadow: u,
                  space: h,
                  style: f,
                };
              return (q.set(e, p), p);
            })(e),
        h = c.color[t] || c.color.light,
        f = h[r] || h.default,
        p = c.layer || B,
        g = u.color[t] || u.color.light,
        m =
          "neutral" in (n = g[r] || g.default).badge
            ? n
            : {
                ...n,
                badge: { ...n.badge, neutral: n.badge.default, suggest: n.badge.primary },
                button: {
                  bleed: { ...n.button.bleed, neutral: n.button.bleed.default, suggest: n.button.bleed.primary },
                  default: {
                    ...n.button.default,
                    neutral: n.button.default.default,
                    suggest: n.button.default.primary,
                  },
                  ghost: { ...n.button.ghost, neutral: n.button.ghost.default, suggest: n.button.ghost.primary },
                },
                selectable: { ...n.selectable, neutral: n.selectable.default, suggest: n.selectable.primary },
              },
        w = u.layer || B,
        v = { sanity: { ...c, color: f, layer: p, v2: { ...u, _resolved: !0, color: m, layer: w } } };
      return (
        (o = e),
        (i = t),
        (s = r),
        (a = v),
        eX.has(i) || eX.set(i, new Map()),
        (l = eX.get(i)).has(s) || l.set(s, new WeakMap()),
        l.get(s).set(o, a),
        v
      );
    }
    e.s(
      [
        "buildTheme",
        () => eY,
        "createColorTheme",
        () => L,
        "getScopedTheme",
        () => eq,
        "getTheme_v2",
        () => Y,
        "hexToRgb",
        () => eH,
        "hslToRgb",
        () => eE,
        "multiply",
        () => ej,
        "parseColor",
        () => eP,
        "rgbToHex",
        () => e$,
        "rgbToHsl",
        () => eT,
        "rgba",
        () => eI,
        "screen",
        () => eL,
      ],
      457781,
    );
    var eK,
      eJ,
      eQ,
      e1,
      e0 = e.i(802252),
      e5 = e.i(18347),
      e2 = e.i(770572),
      e6 = e.i(676572),
      e4 = function () {
        return (e4 =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    function e8(e, t, r) {
      if (r || 2 == arguments.length)
        for (var n, o = 0, i = t.length; o < i; o++)
          (!n && o in t) || (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
      return e.concat(n || Array.prototype.slice.call(t));
    }
    ("function" == typeof SuppressedError && SuppressedError, e.i(566963));
    var e9 = e.i(75152),
      e3 = "-ms-",
      e7 = "-moz-",
      te = "-webkit-",
      tt = "comm",
      tr = "rule",
      tn = "decl",
      to = "@keyframes",
      ti = Math.abs,
      ts = String.fromCharCode,
      ta = Object.assign;
    function tl(e, t) {
      return (e = t.exec(e)) ? e[0] : e;
    }
    function td(e, t, r) {
      return e.replace(t, r);
    }
    function tc(e, t, r) {
      return e.indexOf(t, r);
    }
    function tu(e, t) {
      return 0 | e.charCodeAt(t);
    }
    function th(e, t, r) {
      return e.slice(t, r);
    }
    function tf(e) {
      return e.length;
    }
    function tp(e, t) {
      return (t.push(e), e);
    }
    function tg(e, t) {
      return e.filter(function (e) {
        return !tl(e, t);
      });
    }
    var tm = 1,
      tw = 1,
      tv = 0,
      tb = 0,
      ty = 0,
      tx = "";
    function tC(e, t, r, n, o, i, s, a) {
      return {
        value: e,
        root: t,
        parent: r,
        type: n,
        props: o,
        children: i,
        line: tm,
        column: tw,
        length: s,
        return: "",
        siblings: a,
      };
    }
    function tk(e, t) {
      return ta(tC("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
    }
    function tM(e) {
      for (; e.root; ) e = tk(e.root, { children: [e] });
      tp(e, e.siblings);
    }
    function tj() {
      return ((ty = tb < tv ? tu(tx, tb++) : 0), tw++, 10 === ty && ((tw = 1), tm++), ty);
    }
    function tL() {
      return tu(tx, tb);
    }
    function tS(e) {
      switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1;
      }
      return 0;
    }
    function tV(e) {
      var t, r;
      return ((t = tb - 1),
      (r = (function e(t) {
        for (; tj(); )
          switch (ty) {
            case t:
              return tb;
            case 34:
            case 39:
              34 !== t && 39 !== t && e(ty);
              break;
            case 40:
              41 === t && e(t);
              break;
            case 92:
              tj();
          }
        return tb;
      })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
      th(tx, t, r)).trim();
    }
    function tR(e, t) {
      for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
      return r;
    }
    function tH(e, t, r, n) {
      switch (e.type) {
        case "@layer":
          if (e.children.length) break;
        case "@import":
        case tn:
          return (e.return = e.return || e.value);
        case tt:
          return "";
        case to:
          return (e.return = e.value + "{" + tR(e.children, n) + "}");
        case tr:
          if (!tf((e.value = e.props.join(",")))) return "";
      }
      return tf((r = tR(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
    }
    function t$(e, t, r, n) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case tn:
            e.return = (function e(t, r, n) {
              var o;
              switch (
                ((o = r),
                45 ^ tu(t, 0) ? (((((((o << 2) ^ tu(t, 0)) << 2) ^ tu(t, 1)) << 2) ^ tu(t, 2)) << 2) ^ tu(t, 3) : 0)
              ) {
                case 5103:
                  return te + "print-" + t + t;
                case 5737:
                case 4201:
                case 3177:
                case 3433:
                case 1641:
                case 4457:
                case 2921:
                case 5572:
                case 6356:
                case 5844:
                case 3191:
                case 6645:
                case 3005:
                case 6391:
                case 5879:
                case 5623:
                case 6135:
                case 4599:
                case 4855:
                case 4215:
                case 6389:
                case 5109:
                case 5365:
                case 5621:
                case 3829:
                  return te + t + t;
                case 4789:
                  return e7 + t + t;
                case 5349:
                case 4246:
                case 4810:
                case 6968:
                case 2756:
                  return te + t + e7 + t + e3 + t + t;
                case 5936:
                  switch (tu(t, r + 11)) {
                    case 114:
                      return te + t + e3 + td(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                    case 108:
                      return te + t + e3 + td(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                    case 45:
                      return te + t + e3 + td(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
                  }
                case 6828:
                case 4268:
                case 2903:
                  return te + t + e3 + t + t;
                case 6165:
                  return te + t + e3 + "flex-" + t + t;
                case 5187:
                  return te + t + td(t, /(\w+).+(:[^]+)/, te + "box-$1$2" + e3 + "flex-$1$2") + t;
                case 5443:
                  return (
                    te +
                    t +
                    e3 +
                    "flex-item-" +
                    td(t, /flex-|-self/g, "") +
                    (tl(t, /flex-|baseline/) ? "" : e3 + "grid-row-" + td(t, /flex-|-self/g, "")) +
                    t
                  );
                case 4675:
                  return te + t + e3 + "flex-line-pack" + td(t, /align-content|flex-|-self/g, "") + t;
                case 5548:
                  return te + t + e3 + td(t, "shrink", "negative") + t;
                case 5292:
                  return te + t + e3 + td(t, "basis", "preferred-size") + t;
                case 6060:
                  return te + "box-" + td(t, "-grow", "") + te + t + e3 + td(t, "grow", "positive") + t;
                case 4554:
                  return te + td(t, /([^-])(transform)/g, "$1" + te + "$2") + t;
                case 6187:
                  return td(td(td(t, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), t, "") + t;
                case 5495:
                case 3959:
                  return td(t, /(image-set\([^]*)/, te + "$1$`$1");
                case 4968:
                  return (
                    td(td(t, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + e3 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") +
                    te +
                    t +
                    t
                  );
                case 4200:
                  if (!tl(t, /flex-|baseline/)) return e3 + "grid-column-align" + th(t, r) + t;
                  break;
                case 2592:
                case 3360:
                  return e3 + td(t, "template-", "") + t;
                case 4384:
                case 3616:
                  if (
                    n &&
                    n.some(function (e, t) {
                      return ((r = t), tl(e.props, /grid-\w+-end/));
                    })
                  )
                    return ~tc(t + (n = n[r].value), "span", 0)
                      ? t
                      : e3 +
                          td(t, "-start", "") +
                          t +
                          e3 +
                          "grid-row-span:" +
                          (~tc(n, "span", 0) ? tl(n, /\d+/) : tl(n, /\d+/) - tl(t, /\d+/)) +
                          ";";
                  return e3 + td(t, "-start", "") + t;
                case 4896:
                case 4128:
                  return n &&
                    n.some(function (e) {
                      return tl(e.props, /grid-\w+-start/);
                    })
                    ? t
                    : e3 + td(td(t, "-end", "-span"), "span ", "") + t;
                case 4095:
                case 3583:
                case 4068:
                case 2532:
                  return td(t, /(.+)-inline(.+)/, te + "$1$2") + t;
                case 8116:
                case 7059:
                case 5753:
                case 5535:
                case 5445:
                case 5701:
                case 4933:
                case 4677:
                case 5533:
                case 5789:
                case 5021:
                case 4765:
                  if (tf(t) - 1 - r > 6)
                    switch (tu(t, r + 1)) {
                      case 109:
                        if (45 !== tu(t, r + 4)) break;
                      case 102:
                        return (
                          td(
                            t,
                            /(.+:)(.+)-([^]+)/,
                            "$1" + te + "$2-$3$1" + e7 + (108 == tu(t, r + 3) ? "$3" : "$2-$3"),
                          ) + t
                        );
                      case 115:
                        return ~tc(t, "stretch", 0) ? e(td(t, "stretch", "fill-available"), r, n) + t : t;
                    }
                  break;
                case 5152:
                case 5920:
                  return td(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (e, r, n, o, i, s, a) {
                    return e3 + r + ":" + n + a + (o ? e3 + r + "-span:" + (i ? s : s - n) + a : "") + t;
                  });
                case 4949:
                  if (121 === tu(t, r + 6)) return td(t, ":", ":" + te) + t;
                  break;
                case 6444:
                  switch (tu(t, 45 === tu(t, 14) ? 18 : 11)) {
                    case 120:
                      return (
                        td(
                          t,
                          /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                          "$1" + te + (45 === tu(t, 14) ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + e3 + "$2box$3",
                        ) + t
                      );
                    case 100:
                      return td(t, ":", ":" + e3) + t;
                  }
                  break;
                case 5719:
                case 2647:
                case 2135:
                case 3927:
                case 2391:
                  return td(t, "scroll-", "scroll-snap-") + t;
              }
              return t;
            })(e.value, e.length, r);
            return;
          case to:
            return tR([tk(e, { value: td(e.value, "@", "@" + te) })], n);
          case tr:
            if (e.length) {
              var o, i;
              return (
                (o = r = e.props),
                (i = function (t) {
                  switch (tl(t, (n = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      (tM(tk(e, { props: [td(t, /:(read-\w+)/, ":" + e7 + "$1")] })),
                        tM(tk(e, { props: [t] })),
                        ta(e, { props: tg(r, n) }));
                      break;
                    case "::placeholder":
                      (tM(tk(e, { props: [td(t, /:(plac\w+)/, ":" + te + "input-$1")] })),
                        tM(tk(e, { props: [td(t, /:(plac\w+)/, ":" + e7 + "$1")] })),
                        tM(tk(e, { props: [td(t, /:(plac\w+)/, e3 + "input-$1")] })),
                        tM(tk(e, { props: [t] })),
                        ta(e, { props: tg(r, n) }));
                  }
                  return "";
                }),
                o.map(i).join("")
              );
            }
        }
    }
    function tT(e, t, r, n, o, i, s, a, l, d, c, u) {
      for (var h = o - 1, f = 0 === o ? i : [""], p = f.length, g = 0, m = 0, w = 0; g < n; ++g)
        for (var v = 0, b = th(e, h + 1, (h = ti((m = s[g])))), y = e; v < p; ++v)
          (y = (m > 0 ? f[v] + " " + b : td(b, /&\f/g, f[v])).trim()) && (l[w++] = y);
      return tC(e, t, r, 0 === o ? tr : a, l, d, c, u);
    }
    function tE(e, t, r, n, o) {
      return tC(e, t, r, tn, th(e, 0, n), th(e, n + 1, -1), n, o);
    }
    var tB = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      },
      tP =
        (void 0 !== e6.default &&
          void 0 !== e6.default.env &&
          (e6.default.env.REACT_APP_SC_ATTR || e6.default.env.SC_ATTR)) ||
        "data-styled",
      tI = "active",
      tA = "data-styled-version",
      tW = "6.1.19",
      tz = "/*!sc*/\n",
      tO = "undefined" != typeof window && "undefined" != typeof document,
      t_ = !!("boolean" == typeof SC_DISABLE_SPEEDY
        ? SC_DISABLE_SPEEDY
        : void 0 !== e6.default &&
            void 0 !== e6.default.env &&
            void 0 !== e6.default.env.REACT_APP_SC_DISABLE_SPEEDY &&
            "" !== e6.default.env.REACT_APP_SC_DISABLE_SPEEDY
          ? "false" !== e6.default.env.REACT_APP_SC_DISABLE_SPEEDY && e6.default.env.REACT_APP_SC_DISABLE_SPEEDY
          : void 0 !== e6.default &&
            void 0 !== e6.default.env &&
            void 0 !== e6.default.env.SC_DISABLE_SPEEDY &&
            "" !== e6.default.env.SC_DISABLE_SPEEDY &&
            "false" !== e6.default.env.SC_DISABLE_SPEEDY &&
            e6.default.env.SC_DISABLE_SPEEDY),
      tZ = {},
      tD = Object.freeze([]),
      tN = Object.freeze({});
    function tF(e, t, r) {
      return (void 0 === r && (r = tN), (e.theme !== r.theme && e.theme) || t || r.theme);
    }
    var tU = new Set([
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "u",
        "ul",
        "use",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ]),
      tG = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
      tY = /(^-|-$)/g;
    function tX(e) {
      return e.replace(tG, "-").replace(tY, "");
    }
    var tq = /(a)(d)/gi,
      tK = function (e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97));
      };
    function tJ(e) {
      var t,
        r = "";
      for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = tK(t % 52) + r;
      return (tK(t % 52) + r).replace(tq, "$1-$2");
    }
    var tQ,
      t1 = function (e, t) {
        for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
        return e;
      },
      t0 = function (e) {
        return t1(5381, e);
      };
    function t5(e) {
      return tJ(t0(e) >>> 0);
    }
    function t2(e) {
      return "string" == typeof e;
    }
    var t6 = "function" == typeof Symbol && Symbol.for,
      t4 = t6 ? Symbol.for("react.memo") : 60115,
      t8 = t6 ? Symbol.for("react.forward_ref") : 60112,
      t9 = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      t3 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
      t7 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
      re =
        (((tQ = {})[t8] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
        (tQ[t4] = t7),
        tQ);
    function rt(e) {
      return ("type" in e && e.type.$$typeof) === t4 ? t7 : "$$typeof" in e ? re[e.$$typeof] : t9;
    }
    var rr = Object.defineProperty,
      rn = Object.getOwnPropertyNames,
      ro = Object.getOwnPropertySymbols,
      ri = Object.getOwnPropertyDescriptor,
      rs = Object.getPrototypeOf,
      ra = Object.prototype;
    function rl(e) {
      return "function" == typeof e;
    }
    function rd(e) {
      return "object" == typeof e && "styledComponentId" in e;
    }
    function rc(e, t) {
      return e && t ? "".concat(e, " ").concat(t) : e || t || "";
    }
    function ru(e, t) {
      if (0 === e.length) return "";
      for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
      return r;
    }
    function rh(e) {
      return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
    }
    function rf(e, t) {
      Object.defineProperty(e, "toString", { value: t });
    }
    function rp(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      return Error(
        "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
          .concat(e, " for more information.")
          .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
      );
    }
    var rg = (function () {
        function e(e) {
          ((this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e));
        }
        return (
          (e.prototype.indexOfGroup = function (e) {
            for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
            return t;
          }),
          (e.prototype.insertRules = function (e, t) {
            if (e >= this.groupSizes.length) {
              for (var r = this.groupSizes, n = r.length, o = n; e >= o; )
                if ((o <<= 1) < 0) throw rp(16, "".concat(e));
              ((this.groupSizes = new Uint32Array(o)), this.groupSizes.set(r), (this.length = o));
              for (var i = n; i < o; i++) this.groupSizes[i] = 0;
            }
            for (var s = this.indexOfGroup(e + 1), a = ((i = 0), t.length); i < a; i++)
              this.tag.insertRule(s, t[i]) && (this.groupSizes[e]++, s++);
          }),
          (e.prototype.clearGroup = function (e) {
            if (e < this.length) {
              var t = this.groupSizes[e],
                r = this.indexOfGroup(e),
                n = r + t;
              this.groupSizes[e] = 0;
              for (var o = r; o < n; o++) this.tag.deleteRule(r);
            }
          }),
          (e.prototype.getGroup = function (e) {
            var t = "";
            if (e >= this.length || 0 === this.groupSizes[e]) return t;
            for (var r = this.groupSizes[e], n = this.indexOfGroup(e), o = n + r, i = n; i < o; i++)
              t += "".concat(this.tag.getRule(i)).concat(tz);
            return t;
          }),
          e
        );
      })(),
      rm = new Map(),
      rw = new Map(),
      rv = 1,
      rb = function (e) {
        if (rm.has(e)) return rm.get(e);
        for (; rw.has(rv); ) rv++;
        var t = rv++;
        return (rm.set(e, t), rw.set(t, e), t);
      },
      ry = function (e, t) {
        ((rv = t + 1), rm.set(e, t), rw.set(t, e));
      },
      rx = "style[".concat(tP, "][").concat(tA, '="').concat(tW, '"]'),
      rC = new RegExp("^".concat(tP, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
      rk = function (e, t, r) {
        for (var n, o = r.split(","), i = 0, s = o.length; i < s; i++) (n = o[i]) && e.registerName(t, n);
      },
      rM = function (e, t) {
        for (var r, n = (null != (r = t.textContent) ? r : "").split(tz), o = [], i = 0, s = n.length; i < s; i++) {
          var a = n[i].trim();
          if (a) {
            var l = a.match(rC);
            if (l) {
              var d = 0 | parseInt(l[1], 10),
                c = l[2];
              (0 !== d && (ry(c, d), rk(e, c, l[3]), e.getTag().insertRules(d, o)), (o.length = 0));
            } else o.push(a);
          }
        }
      },
      rj = function (e) {
        for (var t = document.querySelectorAll(rx), r = 0, n = t.length; r < n; r++) {
          var o = t[r];
          o && o.getAttribute(tP) !== tI && (rM(e, o), o.parentNode && o.parentNode.removeChild(o));
        }
      };
    function rL() {
      return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
    }
    var rS = function (e) {
        var t,
          r = document.head,
          n = e || r,
          o = document.createElement("style"),
          i = (t = Array.from(n.querySelectorAll("style[".concat(tP, "]"))))[t.length - 1],
          s = void 0 !== i ? i.nextSibling : null;
        (o.setAttribute(tP, tI), o.setAttribute(tA, tW));
        var a = rL();
        return (a && o.setAttribute("nonce", a), n.insertBefore(o, s), o);
      },
      rV = (function () {
        function e(e) {
          ((this.element = rS(e)),
            this.element.appendChild(document.createTextNode("")),
            (this.sheet = (function (e) {
              if (e.sheet) return e.sheet;
              for (var t = document.styleSheets, r = 0, n = t.length; r < n; r++) {
                var o = t[r];
                if (o.ownerNode === e) return o;
              }
              throw rp(17);
            })(this.element)),
            (this.length = 0));
        }
        return (
          (e.prototype.insertRule = function (e, t) {
            try {
              return (this.sheet.insertRule(t, e), this.length++, !0);
            } catch (e) {
              return !1;
            }
          }),
          (e.prototype.deleteRule = function (e) {
            (this.sheet.deleteRule(e), this.length--);
          }),
          (e.prototype.getRule = function (e) {
            var t = this.sheet.cssRules[e];
            return t && t.cssText ? t.cssText : "";
          }),
          e
        );
      })(),
      rR = (function () {
        function e(e) {
          ((this.element = rS(e)), (this.nodes = this.element.childNodes), (this.length = 0));
        }
        return (
          (e.prototype.insertRule = function (e, t) {
            if (e <= this.length && e >= 0) {
              var r = document.createTextNode(t);
              return (this.element.insertBefore(r, this.nodes[e] || null), this.length++, !0);
            }
            return !1;
          }),
          (e.prototype.deleteRule = function (e) {
            (this.element.removeChild(this.nodes[e]), this.length--);
          }),
          (e.prototype.getRule = function (e) {
            return e < this.length ? this.nodes[e].textContent : "";
          }),
          e
        );
      })(),
      rH = (function () {
        function e(e) {
          ((this.rules = []), (this.length = 0));
        }
        return (
          (e.prototype.insertRule = function (e, t) {
            return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
          }),
          (e.prototype.deleteRule = function (e) {
            (this.rules.splice(e, 1), this.length--);
          }),
          (e.prototype.getRule = function (e) {
            return e < this.length ? this.rules[e] : "";
          }),
          e
        );
      })(),
      r$ = tO,
      rT = { isServer: !tO, useCSSOMInjection: !t_ },
      rE = (function () {
        function e(e, t, r) {
          (void 0 === e && (e = tN), void 0 === t && (t = {}));
          var n = this;
          ((this.options = e4(e4({}, rT), e)),
            (this.gs = t),
            (this.names = new Map(r)),
            (this.server = !!e.isServer),
            !this.server && tO && r$ && ((r$ = !1), rj(this)),
            rf(this, function () {
              for (var e = n.getTag(), t = e.length, r = "", o = 0; o < t; o++)
                !(function (t) {
                  var o = rw.get(t);
                  if (void 0 === o) return;
                  var i = n.names.get(o),
                    s = e.getGroup(t);
                  if (void 0 !== i && i.size && 0 !== s.length) {
                    var a = "".concat(tP, ".g").concat(t, '[id="').concat(o, '"]'),
                      l = "";
                    (void 0 !== i &&
                      i.forEach(function (e) {
                        e.length > 0 && (l += "".concat(e, ","));
                      }),
                      (r += "".concat(s).concat(a, '{content:"').concat(l, '"}').concat(tz)));
                  }
                })(o);
              return r;
            }));
        }
        return (
          (e.registerId = function (e) {
            return rb(e);
          }),
          (e.prototype.rehydrate = function () {
            !this.server && tO && rj(this);
          }),
          (e.prototype.reconstructWithOptions = function (t, r) {
            return (void 0 === r && (r = !0), new e(e4(e4({}, this.options), t), this.gs, (r && this.names) || void 0));
          }),
          (e.prototype.allocateGSInstance = function (e) {
            return (this.gs[e] = (this.gs[e] || 0) + 1);
          }),
          (e.prototype.getTag = function () {
            var e, t, r;
            return (
              this.tag ||
              (this.tag =
                ((t = (e = this.options).useCSSOMInjection),
                (r = e.target),
                new rg(e.isServer ? new rH(r) : t ? new rV(r) : new rR(r))))
            );
          }),
          (e.prototype.hasNameForId = function (e, t) {
            return this.names.has(e) && this.names.get(e).has(t);
          }),
          (e.prototype.registerName = function (e, t) {
            if ((rb(e), this.names.has(e))) this.names.get(e).add(t);
            else {
              var r = new Set();
              (r.add(t), this.names.set(e, r));
            }
          }),
          (e.prototype.insertRules = function (e, t, r) {
            (this.registerName(e, t), this.getTag().insertRules(rb(e), r));
          }),
          (e.prototype.clearNames = function (e) {
            this.names.has(e) && this.names.get(e).clear();
          }),
          (e.prototype.clearRules = function (e) {
            (this.getTag().clearGroup(rb(e)), this.clearNames(e));
          }),
          (e.prototype.clearTag = function () {
            this.tag = void 0;
          }),
          e
        );
      })(),
      rB = /&/g,
      rP = /^\s*\/\/.*$/gm;
    function rI(e) {
      var t,
        r,
        n,
        o = void 0 === e ? tN : e,
        i = o.options,
        s = void 0 === i ? tN : i,
        a = o.plugins,
        l = void 0 === a ? tD : a,
        d = function (e, n, o) {
          return o.startsWith(r) && o.endsWith(r) && o.replaceAll(r, "").length > 0 ? ".".concat(t) : e;
        },
        c = l.slice();
      (c.push(function (e) {
        e.type === tr && e.value.includes("&") && (e.props[0] = e.props[0].replace(rB, r).replace(n, d));
      }),
        s.prefix && c.push(t$),
        c.push(tH));
      var u = function (e, o, i, a) {
        (void 0 === o && (o = ""),
          void 0 === i && (i = ""),
          void 0 === a && (a = "&"),
          (t = a),
          (r = o),
          (n = RegExp("\\".concat(r, "\\b"), "g")));
        var l,
          d,
          u,
          h,
          f,
          p,
          g = e.replace(rP, ""),
          m =
            ((f = (function e(t, r, n, o, i, s, a, l, d) {
              for (
                var c,
                  u,
                  h,
                  f,
                  p = 0,
                  g = 0,
                  m = a,
                  w = 0,
                  v = 0,
                  b = 0,
                  y = 1,
                  x = 1,
                  C = 1,
                  k = 0,
                  M = "",
                  j = i,
                  L = s,
                  S = o,
                  V = M;
                x;
              )
                switch (((b = k), (k = tj()))) {
                  case 40:
                    if (108 != b && 58 == tu(V, m - 1)) {
                      -1 != tc((V += td(tV(k), "&", "&\f")), "&\f", ti(p ? l[p - 1] : 0)) && (C = -1);
                      break;
                    }
                  case 34:
                  case 39:
                  case 91:
                    V += tV(k);
                    break;
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    V += (function (e) {
                      for (; (ty = tL()); )
                        if (ty < 33) tj();
                        else break;
                      return tS(e) > 2 || tS(ty) > 3 ? "" : " ";
                    })(b);
                    break;
                  case 92:
                    V += (function (e, t) {
                      for (
                        var r;
                        --t &&
                        tj() &&
                        !(ty < 48) &&
                        !(ty > 102) &&
                        (!(ty > 57) || !(ty < 65)) &&
                        (!(ty > 70) || !(ty < 97));
                      );
                      return ((r = tb + (t < 6 && 32 == tL() && 32 == tj())), th(tx, e, r));
                    })(tb - 1, 7);
                    continue;
                  case 47:
                    switch (tL()) {
                      case 42:
                      case 47:
                        tp(
                          ((c = (function (e, t) {
                            for (; tj(); )
                              if (e + ty === 57) break;
                              else if (e + ty === 84 && 47 === tL()) break;
                            return "/*" + th(tx, t, tb - 1) + "*" + ts(47 === e ? e : tj());
                          })(tj(), tb)),
                          (u = r),
                          (h = n),
                          (f = d),
                          tC(c, u, h, tt, ts(ty), th(c, 2, -2), 0, f)),
                          d,
                        );
                        break;
                      default:
                        V += "/";
                    }
                    break;
                  case 123 * y:
                    l[p++] = tf(V) * C;
                  case 125 * y:
                  case 59:
                  case 0:
                    switch (k) {
                      case 0:
                      case 125:
                        x = 0;
                      case 59 + g:
                        (-1 == C && (V = td(V, /\f/g, "")),
                          v > 0 &&
                            tf(V) - m &&
                            tp(v > 32 ? tE(V + ";", o, n, m - 1, d) : tE(td(V, " ", "") + ";", o, n, m - 2, d), d));
                        break;
                      case 59:
                        V += ";";
                      default:
                        if ((tp((S = tT(V, r, n, p, g, i, l, M, (j = []), (L = []), m, s)), s), 123 === k))
                          if (0 === g) e(V, r, S, S, j, s, m, l, L);
                          else
                            switch (99 === w && 110 === tu(V, 3) ? 100 : w) {
                              case 100:
                              case 108:
                              case 109:
                              case 115:
                                e(
                                  t,
                                  S,
                                  S,
                                  o && tp(tT(t, S, S, 0, 0, i, l, M, i, (j = []), m, L), L),
                                  i,
                                  L,
                                  m,
                                  l,
                                  o ? j : L,
                                );
                                break;
                              default:
                                e(V, S, S, S, [""], L, 0, l, L);
                            }
                    }
                    ((p = g = v = 0), (y = C = 1), (M = V = ""), (m = a));
                    break;
                  case 58:
                    ((m = 1 + tf(V)), (v = b));
                  default:
                    if (y < 1) {
                      if (123 == k) --y;
                      else if (
                        125 == k &&
                        0 == y++ &&
                        125 == ((ty = tb > 0 ? tu(tx, --tb) : 0), tw--, 10 === ty && ((tw = 1), tm--), ty)
                      )
                        continue;
                    }
                    switch (((V += ts(k)), k * y)) {
                      case 38:
                        C = g > 0 ? 1 : ((V += "\f"), -1);
                        break;
                      case 44:
                        ((l[p++] = (tf(V) - 1) * C), (C = 1));
                        break;
                      case 64:
                        (45 === tL() && (V += tV(tj())),
                          (w = tL()),
                          (g = m =
                            tf(
                              (M = V +=
                                (function (e) {
                                  for (; !tS(tL()); ) tj();
                                  return th(tx, e, tb);
                                })(tb)),
                            )),
                          k++);
                        break;
                      case 45:
                        45 === b && 2 == tf(V) && (y = 0);
                    }
                }
              return s;
            })(
              "",
              null,
              null,
              null,
              [""],
              ((h = u = i || o ? "".concat(i, " ").concat(o, " { ").concat(g, " }") : g),
              (tm = tw = 1),
              (tv = tf((tx = h))),
              (tb = 0),
              (u = [])),
              0,
              [0],
              u,
            )),
            (tx = ""),
            f);
        s.namespace &&
          (m = (function e(t, r) {
            return t.map(function (t) {
              return (
                "rule" === t.type &&
                  ((t.value = "".concat(r, " ").concat(t.value)),
                  (t.value = t.value.replaceAll(",", ",".concat(r, " "))),
                  (t.props = t.props.map(function (e) {
                    return "".concat(r, " ").concat(e);
                  }))),
                Array.isArray(t.children) && "@keyframes" !== t.type && (t.children = e(t.children, r)),
                t
              );
            });
          })(m, s.namespace));
        var w = [];
        return (
          tR(
            m,
            ((d = (l = c.concat(
              ((p = function (e) {
                return w.push(e);
              }),
              function (e) {
                !e.root && (e = e.return) && p(e);
              }),
            )).length),
            function (e, t, r, n) {
              for (var o = "", i = 0; i < d; i++) o += l[i](e, t, r, n) || "";
              return o;
            }),
          ),
          w
        );
      };
      return (
        (u.hash = l.length
          ? l
              .reduce(function (e, t) {
                return (t.name || rp(15), t1(e, t.name));
              }, 5381)
              .toString()
          : ""),
        u
      );
    }
    var rA = new rE(),
      rW = rI(),
      rz = e2.default.createContext({ shouldForwardProp: void 0, styleSheet: rA, stylis: rW }),
      rO = (rz.Consumer, e2.default.createContext(void 0));
    function r_() {
      return (0, e2.useContext)(rz);
    }
    function rZ(e) {
      var t = (0, e2.useState)(e.stylisPlugins),
        r = t[0],
        n = t[1],
        o = r_().styleSheet,
        i = (0, e2.useMemo)(
          function () {
            var t = o;
            return (
              e.sheet ? (t = e.sheet) : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)),
              e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
              t
            );
          },
          [e.disableCSSOMInjection, e.sheet, e.target, o],
        ),
        s = (0, e2.useMemo)(
          function () {
            return rI({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
          },
          [e.enableVendorPrefixes, e.namespace, r],
        );
      (0, e2.useEffect)(
        function () {
          (0, e9.default)(r, e.stylisPlugins) || n(e.stylisPlugins);
        },
        [e.stylisPlugins],
      );
      var a = (0, e2.useMemo)(
        function () {
          return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
        },
        [e.shouldForwardProp, i, s],
      );
      return e2.default.createElement(
        rz.Provider,
        { value: a },
        e2.default.createElement(rO.Provider, { value: s }, e.children),
      );
    }
    var rD = (function () {
      function e(e, t) {
        var r = this;
        ((this.inject = function (e, t) {
          void 0 === t && (t = rW);
          var n = r.name + t.hash;
          e.hasNameForId(r.id, n) || e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
        }),
          (this.name = e),
          (this.id = "sc-keyframes-".concat(e)),
          (this.rules = t),
          rf(this, function () {
            throw rp(12, String(r.name));
          }));
      }
      return (
        (e.prototype.getName = function (e) {
          return (void 0 === e && (e = rW), this.name + e.hash);
        }),
        e
      );
    })();
    function rN(e) {
      for (var t = "", r = 0; r < e.length; r++) {
        var n = e[r];
        if (1 === r && "-" === n && "-" === e[0]) return e;
        n >= "A" && n <= "Z" ? (t += "-" + n.toLowerCase()) : (t += n);
      }
      return t.startsWith("ms-") ? "-" + t : t;
    }
    var rF = function (e) {
        return null == e || !1 === e || "" === e;
      },
      rU = function (e) {
        var t = [];
        for (var r in e) {
          var n = e[r];
          e.hasOwnProperty(r) &&
            !rF(n) &&
            ((Array.isArray(n) && n.isCss) || rl(n)
              ? t.push("".concat(rN(r), ":"), n, ";")
              : rh(n)
                ? t.push.apply(t, e8(e8(["".concat(r, " {")], rU(n), !1), ["}"], !1))
                : t.push(
                    ""
                      .concat(rN(r), ": ")
                      .concat(
                        null == n || "boolean" == typeof n || "" === n
                          ? ""
                          : "number" != typeof n || 0 === n || r in tB || r.startsWith("--")
                            ? String(n).trim()
                            : "".concat(n, "px"),
                        ";",
                      ),
                  ));
        }
        return t;
      };
    function rG(e, t, r, n) {
      if (rF(e)) return [];
      if (rd(e)) return [".".concat(e.styledComponentId)];
      if (rl(e)) return !rl(e) || (e.prototype && e.prototype.isReactComponent) || !t ? [e] : rG(e(t), t, r, n);
      return e instanceof rD
        ? r
          ? (e.inject(r, n), [e.getName(n)])
          : [e]
        : rh(e)
          ? rU(e)
          : Array.isArray(e)
            ? Array.prototype.concat.apply(
                tD,
                e.map(function (e) {
                  return rG(e, t, r, n);
                }),
              )
            : [e.toString()];
    }
    function rY(e) {
      for (var t = 0; t < e.length; t += 1) {
        var r = e[t];
        if (rl(r) && !rd(r)) return !1;
      }
      return !0;
    }
    var rX = t0(tW),
      rq = (function () {
        function e(e, t, r) {
          ((this.rules = e),
            (this.staticRulesId = ""),
            (this.isStatic = (void 0 === r || r.isStatic) && rY(e)),
            (this.componentId = t),
            (this.baseHash = t1(rX, t)),
            (this.baseStyle = r),
            rE.registerId(t));
        }
        return (
          (e.prototype.generateAndInjectStyles = function (e, t, r) {
            var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, r) : "";
            if (this.isStatic && !r.hash)
              if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
                n = rc(n, this.staticRulesId);
              else {
                var o = ru(rG(this.rules, e, t, r)),
                  i = tJ(t1(this.baseHash, o) >>> 0);
                if (!t.hasNameForId(this.componentId, i)) {
                  var s = r(o, ".".concat(i), void 0, this.componentId);
                  t.insertRules(this.componentId, i, s);
                }
                ((n = rc(n, i)), (this.staticRulesId = i));
              }
            else {
              for (var a = t1(this.baseHash, r.hash), l = "", d = 0; d < this.rules.length; d++) {
                var c = this.rules[d];
                if ("string" == typeof c) l += c;
                else if (c) {
                  var u = ru(rG(c, e, t, r));
                  ((a = t1(a, u + d)), (l += u));
                }
              }
              if (l) {
                var h = tJ(a >>> 0);
                (t.hasNameForId(this.componentId, h) ||
                  t.insertRules(this.componentId, h, r(l, ".".concat(h), void 0, this.componentId)),
                  (n = rc(n, h)));
              }
            }
            return n;
          }),
          e
        );
      })(),
      rK = e2.default.createContext(void 0);
    function rJ() {
      var e = (0, e2.useContext)(rK);
      if (!e) throw rp(18);
      return e;
    }
    function rQ(e) {
      var t = e2.default.useContext(rK),
        r = (0, e2.useMemo)(
          function () {
            var r = e.theme;
            if (!r) throw rp(14);
            if (rl(r)) return r(t);
            if (Array.isArray(r) || "object" != typeof r) throw rp(8);
            return t ? e4(e4({}, t), r) : r;
          },
          [e.theme, t],
        );
      return e.children ? e2.default.createElement(rK.Provider, { value: r }, e.children) : null;
    }
    rK.Consumer;
    var r1 = {};
    function r0(e, t, r) {
      var n,
        o,
        i,
        s,
        a = rd(e),
        l = !t2(e),
        d = t.attrs,
        c = void 0 === d ? tD : d,
        u = t.componentId,
        h =
          void 0 === u
            ? ((n = t.displayName),
              (o = t.parentComponentId),
              (r1[(i = "string" != typeof n ? "sc" : tX(n))] = (r1[i] || 0) + 1),
              (s = "".concat(i, "-").concat(t5(tW + i + r1[i]))),
              o ? "".concat(o, "-").concat(s) : s)
            : u,
        f = t.displayName,
        p =
          void 0 === f
            ? t2(e)
              ? "styled.".concat(e)
              : "Styled(".concat(e.displayName || e.name || "Component", ")")
            : f,
        g =
          t.displayName && t.componentId ? "".concat(tX(t.displayName), "-").concat(t.componentId) : t.componentId || h,
        m = a && e.attrs ? e.attrs.concat(c).filter(Boolean) : c,
        w = t.shouldForwardProp;
      if (a && e.shouldForwardProp) {
        var v = e.shouldForwardProp;
        if (t.shouldForwardProp) {
          var b = t.shouldForwardProp;
          w = function (e, t) {
            return v(e, t) && b(e, t);
          };
        } else w = v;
      }
      var y = new rq(r, g, a ? e.componentStyle : void 0);
      function x(e, t) {
        return (function (e, t, r) {
          var n,
            o = e.attrs,
            i = e.componentStyle,
            s = e.defaultProps,
            a = e.foldedComponentIds,
            l = e.styledComponentId,
            d = e.target,
            c = e2.default.useContext(rK),
            u = r_(),
            h = e.shouldForwardProp || u.shouldForwardProp,
            f = tF(t, c, s) || tN,
            p = (function (e, t, r) {
              for (var n, o = e4(e4({}, t), { className: void 0, theme: r }), i = 0; i < e.length; i += 1) {
                var s = rl((n = e[i])) ? n(o) : n;
                for (var a in s)
                  o[a] = "className" === a ? rc(o[a], s[a]) : "style" === a ? e4(e4({}, o[a]), s[a]) : s[a];
              }
              return (t.className && (o.className = rc(o.className, t.className)), o);
            })(o, t, f),
            g = p.as || d,
            m = {};
          for (var w in p)
            void 0 === p[w] ||
              "$" === w[0] ||
              "as" === w ||
              ("theme" === w && p.theme === f) ||
              ("forwardedAs" === w ? (m.as = p.forwardedAs) : (h && !h(w, g)) || (m[w] = p[w]));
          var v = ((n = r_()), i.generateAndInjectStyles(p, n.styleSheet, n.stylis)),
            b = rc(a, l);
          return (
            v && (b += " " + v),
            p.className && (b += " " + p.className),
            (m[t2(g) && !tU.has(g) ? "class" : "className"] = b),
            r && (m.ref = r),
            (0, e2.createElement)(g, m)
          );
        })(C, e, t);
      }
      x.displayName = p;
      var C = e2.default.forwardRef(x);
      return (
        (C.attrs = m),
        (C.componentStyle = y),
        (C.displayName = p),
        (C.shouldForwardProp = w),
        (C.foldedComponentIds = a ? rc(e.foldedComponentIds, e.styledComponentId) : ""),
        (C.styledComponentId = g),
        (C.target = a ? e.target : e),
        Object.defineProperty(C, "defaultProps", {
          get: function () {
            return this._foldedDefaultProps;
          },
          set: function (t) {
            this._foldedDefaultProps = a
              ? (function (e) {
                  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                  for (var n = 0; n < t.length; n++)
                    !(function e(t, r, n) {
                      if ((void 0 === n && (n = !1), !n && !rh(t) && !Array.isArray(t))) return r;
                      if (Array.isArray(r)) for (var o = 0; o < r.length; o++) t[o] = e(t[o], r[o]);
                      else if (rh(r)) for (var o in r) t[o] = e(t[o], r[o]);
                      return t;
                    })(e, t[n], !0);
                  return e;
                })({}, e.defaultProps, t)
              : t;
          },
        }),
        rf(C, function () {
          return ".".concat(C.styledComponentId);
        }),
        l &&
          (function e(t, r, n) {
            if ("string" != typeof r) {
              if (ra) {
                var o = rs(r);
                o && o !== ra && e(t, o, n);
              }
              var i = rn(r);
              ro && (i = i.concat(ro(r)));
              for (var s = rt(t), a = rt(r), l = 0; l < i.length; ++l) {
                var d = i[l];
                if (!(d in t3 || (n && n[d]) || (a && d in a) || (s && d in s))) {
                  var c = ri(r, d);
                  try {
                    rr(t, d, c);
                  } catch (e) {}
                }
              }
            }
            return t;
          })(C, e, {
            attrs: !0,
            componentStyle: !0,
            displayName: !0,
            foldedComponentIds: !0,
            shouldForwardProp: !0,
            styledComponentId: !0,
            target: !0,
          }),
        C
      );
    }
    function r5(e, t) {
      for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
      return r;
    }
    var r2 = function (e) {
      return Object.assign(e, { isCss: !0 });
    };
    function r6(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      return rl(e) || rh(e)
        ? r2(rG(r5(tD, e8([e], t, !0))))
        : 0 === t.length && 1 === e.length && "string" == typeof e[0]
          ? rG(e)
          : r2(rG(r5(e, t)));
    }
    var r4 = function (e) {
      return (function e(t, r, n) {
        if ((void 0 === n && (n = tN), !r)) throw rp(1, r);
        var o = function (e) {
          for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
          return t(r, n, r6.apply(void 0, e8([e], o, !1)));
        };
        return (
          (o.attrs = function (o) {
            return e(t, r, e4(e4({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
          }),
          (o.withConfig = function (o) {
            return e(t, r, e4(e4({}, n), o));
          }),
          o
        );
      })(r0, e);
    };
    tU.forEach(function (e) {
      r4[e] = r4(e);
    });
    var r8 = (function () {
      function e(e, t) {
        ((this.rules = e), (this.componentId = t), (this.isStatic = rY(e)), rE.registerId(this.componentId + 1));
      }
      return (
        (e.prototype.createStyles = function (e, t, r, n) {
          var o = n(ru(rG(this.rules, t, r, n)), ""),
            i = this.componentId + e;
          r.insertRules(i, i, o);
        }),
        (e.prototype.removeStyles = function (e, t) {
          t.clearRules(this.componentId + e);
        }),
        (e.prototype.renderStyles = function (e, t, r, n) {
          (e > 2 && rE.registerId(this.componentId + e), this.removeStyles(e, r), this.createStyles(e, t, r, n));
        }),
        e
      );
    })();
    function r9(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      var n = r6.apply(void 0, e8([e], t, !1)),
        o = "sc-global-".concat(t5(JSON.stringify(n))),
        i = new r8(n, o),
        s = function (e) {
          var t = r_(),
            r = e2.default.useContext(rK),
            n = e2.default.useRef(t.styleSheet.allocateGSInstance(o)).current;
          return (
            t.styleSheet.server && a(n, e, t.styleSheet, r, t.stylis),
            e2.default.useLayoutEffect(
              function () {
                if (!t.styleSheet.server)
                  return (
                    a(n, e, t.styleSheet, r, t.stylis),
                    function () {
                      return i.removeStyles(n, t.styleSheet);
                    }
                  );
              },
              [n, e, t.styleSheet, r, t.stylis],
            ),
            null
          );
        };
      function a(e, t, r, n, o) {
        if (i.isStatic) i.renderStyles(e, tZ, r, o);
        else {
          var a = e4(e4({}, t), { theme: tF(t, n, s.defaultProps) });
          i.renderStyles(e, a, r, o);
        }
      }
      return e2.default.memo(s);
    }
    function r3(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      var n = ru(r6.apply(void 0, e8([e], t, !1)));
      return new rD(t5(n), n);
    }
    function r7() {
      var e = this;
      ((this._emitSheetCSS = function () {
        var t = e.instance.toString();
        if (!t) return "";
        var r = rL(),
          n = ru(
            [r && 'nonce="'.concat(r, '"'), "".concat(tP, '="true"'), "".concat(tA, '="').concat(tW, '"')].filter(
              Boolean,
            ),
            " ",
          );
        return "<style ".concat(n, ">").concat(t, "</style>");
      }),
        (this.getStyleTags = function () {
          if (e.sealed) throw rp(2);
          return e._emitSheetCSS();
        }),
        (this.getStyleElement = function () {
          if (e.sealed) throw rp(2);
          var t,
            r = e.instance.toString();
          if (!r) return [];
          var n = (((t = {})[tP] = ""), (t[tA] = tW), (t.dangerouslySetInnerHTML = { __html: r }), t),
            o = rL();
          return (o && (n.nonce = o), [e2.default.createElement("style", e4({}, n, { key: "sc-0-0" }))]);
        }),
        (this.seal = function () {
          e.sealed = !0;
        }),
        (this.instance = new rE({ isServer: !0 })),
        (this.sealed = !1));
    }
    ((r7.prototype.collectStyles = function (e) {
      if (this.sealed) throw rp(2);
      return e2.default.createElement(rZ, { sheet: this.instance }, e);
    }),
      (r7.prototype.interleaveWithNodeStream = function (e) {
        throw rp(3);
      }),
      e.s(
        [
          "ThemeProvider",
          () => rQ,
          "createGlobalStyle",
          () => r9,
          "css",
          () => r6,
          "keyframes",
          () => r3,
          "styled",
          () => r4,
          "useTheme",
          () => rJ,
        ],
        503084,
      ));
    var ne = e.i(28609);
    let nt = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "access-denied",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M18.1568 6.84315C21.281 9.96734 21.281 15.0327 18.1568 18.1569C15.0326 21.281 9.96733 21.281 6.84313 18.1569C3.71894 15.0327 3.71894 9.96734 6.84313 6.84315C9.96733 3.71895 15.0326 3.71895 18.1568 6.84315ZM18.1568 6.84315L6.844 18.156",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nr = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "activity",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M21 15H19L15.5 7L11 18L8 12L6 15H4",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nn = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "add-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8 12.4H17M12.5 8V17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      no = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "add-comment",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M13 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5H9.5V20.5L13.5 16.5H16.5C17.6046 16.5 18.5 15.6046 18.5 14.5V12M15 6.5H22M18.5 10V3",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ni = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "add-document",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 4.5H18.5V12M11.5 4.5L6.5 9.5M11.5 4.5V9.5H6.5M6.5 9.5V19.5H11M20 17.5H16.5M16.5 17.5H13M16.5 17.5V14M16.5 17.5V21",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ns = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "add",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 5V20M5 12.5H20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      na = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "add-user",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M7.17857 15.2368C6.10714 15.7632 4.5 16.8158 4.5 20.5H19.5C19.5 16.8158 18.2589 15.943 16.8214 15.2368C15.75 14.7105 13.6071 14.7105 13.6071 13.1316C13.6071 11.5526 14.6786 10.7632 14.6786 8.65789C14.6786 6.55263 13.6071 5.5 12 5.5C10.3929 5.5 9.32142 6.55263 9.32142 8.65789C9.32142 10.7632 10.3929 11.5526 10.3929 13.1316C10.3929 14.7105 8.25 14.7105 7.17857 15.2368Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M20.5 6V13M17 9.5H24",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nl = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "api",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M5.93047 13.2107L6.66782 10.3728H6.73089L7.45854 13.2107H5.93047ZM8.17164 16H9.66089L7.56041 9H5.93047L3.82999 16H5.20767L5.65396 14.2876H7.73505L8.17164 16Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M10.5389 9V16H11.9166V13.7782H13.0323C14.541 13.7782 15.5015 12.8517 15.5015 11.3964C15.5015 9.92654 14.5701 9 13.1003 9H10.5389ZM11.9166 10.1303H12.751C13.6533 10.1303 14.1044 10.5475 14.1044 11.3867C14.1044 12.2308 13.6533 12.6431 12.751 12.6431H11.9166V10.1303Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M21.1675 16V14.8164H19.717V10.1836H21.1675V9H16.8889V10.1836H18.3393V14.8164H16.8889V16H21.1675Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      nd = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "archive",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.5 10V17M20.5 7.5V20.5H4.5V7.5L7.5 4.5H17.5L20.5 7.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M4.5 7.5H20.5M16 14L12.5 17.5L9 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nc = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "arrow-down",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.5 19.5V5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M18 14L12.5 19.5L7 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nu = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "arrow-left",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M5.5 12.5H20",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M11 18L5.5 12.5L11 7",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nh = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "arrow-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M19.5 12.5H5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M14 7L19.5 12.5L14 18",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nf = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "arrow-top-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M16.5 8.5L7 18",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M9 8.5H16.5V16",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      np = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "arrow-up",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M7 11L12.5 5.5L18 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M12.5 5.5V20",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ng = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "asterisk",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 4V21M16.75 5.13879L8.25 19.8612M19.8612 8.25L5.13878 16.75M4.00002 12.5H21M5.13881 8.25L19.8612 16.75M8.25002 5.13879L16.75 19.8612",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nm = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bar-chart",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5.5 5V19.5H20M8.5 18V13M11.5 18V9M14.5 18V11M17.5 18V7",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nw = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "basket",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8.5 10.5H5L6.5 19.5H18.5L20 10.5H16.5M8.5 10.5L10.2721 5.18377C10.4082 4.77543 10.7903 4.5 11.2208 4.5H13.7792C14.2097 4.5 14.5918 4.77543 14.7279 5.18377L16.5 10.5M8.5 10.5H16.5M8.5 10.5L9.5 19.5M16.5 10.5L15.5 19.5M12.5 10.5V19.5M19.5 13.5H5.5M19 16.5H6",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nv = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bell",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 17.5V18.5C10.5 20 11.5 20.5 12.5 20.5C13.5 20.5 14.5 20 14.5 18.5V17.5M5.5 17.5C6.5 16 6.5 15 6.5 12C6.5 8 8.5 5.5 12.5 5.5C16.5 5.5 18.5 8 18.5 12C18.5 15 18.5 16 19.5 17.5H5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nb = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bill",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M6.50001 5.5C8.50003 5.5 8.50003 8 8.50003 8V9.5M6.50001 5.5C4.5 5.5 4.5 8 4.5 8L4.50001 9.5H8.50003M6.50001 5.5C6.50001 5.5 15.8333 5.5 17.6667 5.5C19.5 5.5 19.5 8.5 19.5 8.5V20L17.6667 19L15.8333 20L14 19L12.1667 20L10.3334 19L8.50003 20V9.5M11 12.5H15M11 9.5H16M11 15.5H16",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ny = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "binary-document",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M9.5 12.5V17.5M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5ZM12.5 12.5V17.5H15.5V12.5H12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinecap: "square",
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nx = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "block-content",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 7.60002L11 7.60003V6.40003L21 6.40002V7.60002Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 11.2667L12.4833 11.2667V10.0667L21 10.0667V11.2667Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 14.9334H13.9254V13.7334L21 13.7334V14.9334Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 18.6002H4V17.4002H21V18.6002Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M9.86438 15.6H11.2L8.27623 7.60003H6.92377L4 15.6H5.29072L6.0371 13.4767H9.12362L9.86438 15.6ZM7.53546 9.05255H7.63086L8.80374 12.4344H6.35698L7.53546 9.05255Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      nC = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "block-element",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5 19.5H20M5 5.5H20M6.5 8.5H18.5V16.5H6.5V8.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nk = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "blockquote",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10 17.5H19M6 7.5H19M10 12.5H17M6.5 12V18",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nM = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bold",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M13.2087 18C15.5322 18 16.9731 16.793 16.9731 14.8844C16.9731 13.4812 15.9245 12.3949 14.4836 12.2892V12.1534C15.6001 11.9875 16.4526 10.9841 16.4526 9.82991C16.4526 8.14761 15.1927 7.11409 13.0804 7.11409H8.32019V18H13.2087ZM10.5985 8.85674H12.4995C13.5859 8.85674 14.212 9.37727 14.212 10.2448C14.212 11.1199 13.5406 11.6254 12.3109 11.6254H10.5985V8.85674ZM10.5985 16.2574V13.1643H12.575C13.9178 13.1643 14.6496 13.6924 14.6496 14.6882C14.6496 15.7066 13.9404 16.2574 12.6278 16.2574H10.5985Z",
            fill: "currentColor",
          }),
        });
      }),
      nj = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bolt",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M18 11.5L9 21L11 13.5H7L16 4L14 11.5H18Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nL = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "book",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M19.5 18V7C19.5 7 18.5 6.5 16.5 6.5C14.5 6.5 12.5 7.5 12.5 7.5M19.5 18V18.5C19.5 18.5 18 18.5 16 18.5C14 18.5 12.5 18.5 12.5 18.5M19.5 18C19.5 18 18.5 17.5 16.5 17.5C14.5 17.5 12.5 18.5 12.5 18.5M5.5 18V7C5.5 7 6.5 6.5 8.5 6.5C10.5 6.5 12.5 7.5 12.5 7.5M5.5 18V18.5C5.5 18.5 7 18.5 9 18.5C11 18.5 12.5 18.5 12.5 18.5M5.5 18C5.5 18 6.5 17.5 8.5 17.5C10.5 17.5 12.5 18.5 12.5 18.5M12.5 18.5V7.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nS = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bookmark-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7.5 6.5V19.5L12.5 14.5L17.5 19.5V6.5C17.5 5.94772 17.0523 5.5 16.5 5.5H8.5C7.94772 5.5 7.5 5.94772 7.5 6.5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nV = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bookmark",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7.5 6.5V19.5L12.5 14.5L17.5 19.5V6.5C17.5 5.94772 17.0523 5.5 16.5 5.5H8.5C7.94772 5.5 7.5 5.94772 7.5 6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nR = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bottle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7.5 17.5L17.5 17.5M17.5 13C17.5 12.087 17.5 11.3518 17.5 11C17.5 8.5 14.5 9 14.5 7.37494L14.5 5.5M17.5 13C17.5 15.1229 17.5 18.7543 17.5 20.5022C17.5 21.0545 17.0523 21.5 16.5 21.5L8.5 21.5C7.94772 21.5 7.5 21.0547 7.5 20.5024C7.5 18.8157 7.5 15.3546 7.5 13M17.5 13L7.5 13M7.5 13C7.5 12.2538 7.5 11.5648 7.5 11C7.5 8.5 10.5 9 10.5 7.37494L10.5 5.5M10.5 5.5L10.5 3.99999C10.5 3.72385 10.7239 3.49999 11 3.49999L14 3.49999C14.2761 3.49999 14.5 3.72385 14.5 3.99999L14.5 5.5M10.5 5.5L14.5 5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nH = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bug",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8.5 9.5V8.9C8.16863 8.9 7.9 9.16863 7.9 9.5H8.5ZM16.5 9.5H17.1C17.1 9.16863 16.8314 8.9 16.5 8.9V9.5ZM8.5 10.1H9.5V8.9H8.5V10.1ZM9.5 10.1H15.5V8.9H9.5V10.1ZM15.5 10.1H16.5V8.9H15.5V10.1ZM15.9 9.5V13.5H17.1V9.5H15.9ZM15.9 13.5C15.9 14.395 15.678 15.0264 15.3758 15.4797C15.0711 15.9367 14.6605 16.2489 14.2317 16.4633C13.8005 16.6789 13.3621 16.7897 13.0264 16.8457C12.8599 16.8734 12.7226 16.887 12.6291 16.8937C12.5825 16.897 12.5472 16.8986 12.5249 16.8994C12.5138 16.8997 12.506 16.8999 12.5018 16.9C12.4997 16.9 12.4984 16.9 12.4981 16.9C12.498 16.9 12.4981 16.9 12.4984 16.9C12.4985 16.9 12.4987 16.9 12.499 16.9C12.4991 16.9 12.4994 16.9 12.4995 16.9C12.4997 16.9 12.5 16.9 12.5 17.5C12.5 18.1 12.5003 18.1 12.5006 18.1C12.5008 18.1 12.5011 18.1 12.5014 18.1C12.5019 18.1 12.5025 18.1 12.5031 18.1C12.5044 18.1 12.5059 18.1 12.5077 18.1C12.5112 18.0999 12.5157 18.0999 12.5212 18.0998C12.532 18.0996 12.5467 18.0993 12.5649 18.0987C12.6013 18.0975 12.6519 18.0951 12.7146 18.0907C12.8399 18.0817 13.0151 18.0641 13.2236 18.0293C13.6379 17.9603 14.1995 17.8211 14.7683 17.5367C15.3395 17.2511 15.9289 16.8133 16.3742 16.1453C16.822 15.4736 17.1 14.605 17.1 13.5H15.9ZM12.5 17.5C12.5 16.9 12.5003 16.9 12.5005 16.9C12.5006 16.9 12.5009 16.9 12.501 16.9C12.5013 16.9 12.5015 16.9 12.5016 16.9C12.5019 16.9 12.502 16.9 12.5019 16.9C12.5016 16.9 12.5003 16.9 12.4982 16.9C12.494 16.8999 12.4862 16.8997 12.4751 16.8994C12.4528 16.8986 12.4175 16.897 12.3709 16.8937C12.2774 16.887 12.1401 16.8734 11.9736 16.8457C11.6379 16.7897 11.1995 16.6789 10.7683 16.4633C10.3395 16.2489 9.92894 15.9367 9.62423 15.4797C9.32203 15.0264 9.1 14.395 9.1 13.5H7.9C7.9 14.605 8.17797 15.4736 8.62577 16.1453C9.07106 16.8133 9.66049 17.2511 10.2317 17.5367C10.8005 17.8211 11.3621 17.9603 11.7764 18.0293C11.9849 18.0641 12.1601 18.0817 12.2854 18.0907C12.3481 18.0951 12.3987 18.0975 12.4351 18.0987C12.4533 18.0993 12.468 18.0996 12.4788 18.0998C12.4843 18.0999 12.4888 18.0999 12.4923 18.1C12.4941 18.1 12.4956 18.1 12.4969 18.1C12.4975 18.1 12.4981 18.1 12.4986 18.1C12.4989 18.1 12.4992 18.1 12.4994 18.1C12.4997 18.1 12.5 18.1 12.5 17.5ZM9.1 13.5V9.5H7.9V13.5H9.1ZM9.5 9.5C10.1 9.5 10.1 9.50028 10.1 9.50055C10.1 9.50063 10.1 9.50089 10.1 9.50104C10.1 9.50134 10.1 9.5016 10.1 9.50182C10.1 9.50225 10.1 9.5025 10.1 9.50259C10.1 9.50276 10.1 9.50224 10.1 9.50107C10.1001 9.49872 10.1002 9.49374 10.1004 9.4863C10.1009 9.4714 10.102 9.44678 10.1043 9.41384C10.1091 9.34776 10.1188 9.24944 10.1387 9.12989C10.179 8.88793 10.2586 8.5745 10.4117 8.26833C10.5636 7.96451 10.782 7.67894 11.0984 7.46798C11.4111 7.25953 11.855 7.1 12.5 7.1V5.9C11.645 5.9 10.9639 6.11547 10.4328 6.46952C9.90549 6.82106 9.56143 7.28549 9.33834 7.73167C9.11643 8.1755 9.00846 8.61207 8.95504 8.93261C8.92809 9.09431 8.91438 9.23036 8.90738 9.32835C8.90388 9.37744 8.90203 9.41727 8.90107 9.44632C8.90058 9.46085 8.90031 9.47272 8.90017 9.48172C8.9001 9.48622 8.90005 9.49001 8.90003 9.49306C8.90002 9.49459 8.90001 9.49593 8.90001 9.49709C8.9 9.49767 8.9 9.4982 8.9 9.49869C8.9 9.49893 8.9 9.49926 8.9 9.49938C8.9 9.4997 8.9 9.5 9.5 9.5ZM12.5 7.1C13.145 7.1 13.5889 7.25953 13.9016 7.46798C14.218 7.67894 14.4364 7.96451 14.5883 8.26833C14.7414 8.5745 14.821 8.88793 14.8613 9.12989C14.8812 9.24944 14.8909 9.34776 14.8957 9.41384C14.898 9.44678 14.8991 9.4714 14.8996 9.4863C14.8998 9.49374 14.8999 9.49872 14.9 9.50107C14.9 9.50224 14.9 9.50276 14.9 9.50259C14.9 9.5025 14.9 9.50225 14.9 9.50182C14.9 9.5016 14.9 9.50134 14.9 9.50104C14.9 9.50089 14.9 9.50063 14.9 9.50055C14.9 9.50028 14.9 9.5 15.5 9.5C16.1 9.5 16.1 9.4997 16.1 9.49938C16.1 9.49926 16.1 9.49893 16.1 9.49869C16.1 9.4982 16.1 9.49767 16.1 9.49709C16.1 9.49593 16.1 9.49459 16.1 9.49306C16.0999 9.49001 16.0999 9.48622 16.0998 9.48172C16.0997 9.47272 16.0994 9.46085 16.0989 9.44632C16.098 9.41727 16.0961 9.37744 16.0926 9.32835C16.0856 9.23036 16.0719 9.09431 16.045 8.93261C15.9915 8.61207 15.8836 8.1755 15.6617 7.73167C15.4386 7.28549 15.0945 6.82106 14.5672 6.46952C14.0361 6.11547 13.355 5.9 12.5 5.9V7.1ZM11.9 9.5V17.5H13.1V9.5H11.9ZM8.5 9.9C7.71525 9.9 7.10887 9.51034 6.67426 9.07574C6.45859 8.86006 6.29547 8.64279 6.18673 8.47968C6.1327 8.39863 6.09302 8.33235 6.06782 8.28825C6.05524 8.26624 6.04634 8.24988 6.04113 8.24011C6.03853 8.23523 6.03685 8.232 6.0361 8.23055C6.03573 8.22983 6.03559 8.22955 6.03568 8.22973C6.03573 8.22982 6.03583 8.23003 6.03599 8.23035C6.03607 8.23051 6.03617 8.2307 6.03628 8.23092C6.03634 8.23103 6.03643 8.23122 6.03646 8.23127C6.03656 8.23147 6.03666 8.23167 5.5 8.5C4.96334 8.76833 4.96345 8.76855 4.96357 8.76877C4.96361 8.76886 4.96372 8.76909 4.96381 8.76926C4.96398 8.7696 4.96417 8.76997 4.96437 8.77038C4.96478 8.77119 4.96525 8.77212 4.96579 8.77317C4.96685 8.77527 4.96818 8.77786 4.96976 8.78092C4.97292 8.78704 4.9771 8.79505 4.98231 8.80481C4.99272 8.82434 5.00726 8.85094 5.02593 8.88362C5.06323 8.9489 5.1173 9.03887 5.18827 9.14532C5.32953 9.35721 5.54141 9.63994 5.82574 9.92426C6.39113 10.4897 7.28475 11.1 8.5 11.1V9.9ZM16.5 11.1C17.7153 11.1 18.6089 10.4897 19.1743 9.92426C19.4586 9.63994 19.6705 9.35721 19.8117 9.14532C19.8827 9.03887 19.9368 8.9489 19.9741 8.88362C19.9927 8.85094 20.0073 8.82434 20.0177 8.80481C20.0229 8.79505 20.0271 8.78704 20.0302 8.78092C20.0318 8.77786 20.0331 8.77527 20.0342 8.77317C20.0347 8.77212 20.0352 8.77119 20.0356 8.77038C20.0358 8.76997 20.036 8.7696 20.0362 8.76926C20.0363 8.76909 20.0364 8.76886 20.0364 8.76877C20.0365 8.76855 20.0367 8.76833 19.5 8.5C18.9633 8.23167 18.9634 8.23147 18.9635 8.23127C18.9636 8.23122 18.9637 8.23103 18.9637 8.23092C18.9638 8.2307 18.9639 8.23051 18.964 8.23035C18.9642 8.23003 18.9643 8.22982 18.9643 8.22973C18.9644 8.22955 18.9643 8.22983 18.9639 8.23055C18.9632 8.232 18.9615 8.23523 18.9589 8.24011C18.9537 8.24988 18.9448 8.26624 18.9322 8.28825C18.907 8.33235 18.8673 8.39863 18.8133 8.47968C18.7045 8.64279 18.5414 8.86006 18.3257 9.07574C17.8911 9.51034 17.2847 9.9 16.5 9.9V11.1ZM16.5 13.1H20V11.9H16.5V13.1ZM16.5 15.1C17.2847 15.1 17.8911 15.4897 18.3257 15.9243C18.5414 16.1399 18.7045 16.3572 18.8133 16.5203C18.8673 16.6014 18.907 16.6676 18.9322 16.7117C18.9448 16.7338 18.9537 16.7501 18.9589 16.7599C18.9615 16.7648 18.9632 16.768 18.9639 16.7694C18.9643 16.7702 18.9644 16.7705 18.9643 16.7703C18.9643 16.7702 18.9642 16.77 18.964 16.7697C18.9639 16.7695 18.9638 16.7693 18.9637 16.7691C18.9637 16.769 18.9636 16.7688 18.9635 16.7687C18.9634 16.7685 18.9633 16.7683 19.5 16.5C20.0367 16.2317 20.0365 16.2315 20.0364 16.2312C20.0364 16.2311 20.0363 16.2309 20.0362 16.2307C20.036 16.2304 20.0358 16.23 20.0356 16.2296C20.0352 16.2288 20.0347 16.2279 20.0342 16.2268C20.0331 16.2247 20.0318 16.2221 20.0302 16.2191C20.0271 16.213 20.0229 16.205 20.0177 16.1952C20.0073 16.1757 19.9927 16.1491 19.9741 16.1164C19.9368 16.0511 19.8827 15.9611 19.8117 15.8547C19.6705 15.6428 19.4586 15.3601 19.1743 15.0757C18.6089 14.5103 17.7153 13.9 16.5 13.9V15.1ZM8.5 13.9C7.28475 13.9 6.39113 14.5103 5.82574 15.0757C5.54141 15.3601 5.32953 15.6428 5.18827 15.8547C5.1173 15.9611 5.06323 16.0511 5.02593 16.1164C5.00726 16.1491 4.99272 16.1757 4.98231 16.1952C4.9771 16.205 4.97292 16.213 4.96976 16.2191C4.96818 16.2221 4.96685 16.2247 4.96579 16.2268C4.96525 16.2279 4.96478 16.2288 4.96437 16.2296C4.96417 16.23 4.96398 16.2304 4.96381 16.2307C4.96372 16.2309 4.96361 16.2311 4.96357 16.2312C4.96345 16.2315 4.96334 16.2317 5.5 16.5C6.03666 16.7683 6.03656 16.7685 6.03646 16.7687C6.03643 16.7688 6.03634 16.769 6.03628 16.7691C6.03617 16.7693 6.03607 16.7695 6.03599 16.7697C6.03583 16.77 6.03573 16.7702 6.03568 16.7703C6.03559 16.7705 6.03573 16.7702 6.0361 16.7694C6.03685 16.768 6.03853 16.7648 6.04113 16.7599C6.04634 16.7501 6.05524 16.7338 6.06782 16.7117C6.09302 16.6676 6.1327 16.6014 6.18673 16.5203C6.29547 16.3572 6.45859 16.1399 6.67426 15.9243C7.10887 15.4897 7.71525 15.1 8.5 15.1V13.9ZM8.5 11.9H5V13.1H8.5V11.9Z",
            fill: "currentColor",
          }),
        });
      }),
      n$ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bulb-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H14V20.5C14 21.0523 13.5523 21.5 13 21.5H12C11.4477 21.5 11 21.0523 11 20.5V19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10C18 11.94 17.3978 12.9767 16.4272 14.3368Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      nT = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "bulb-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 16.5H15.5M11 20V20.5C11 21.0523 11.4477 21.5 12 21.5H13C13.5523 21.5 14 21.0523 14 20.5V20M18 10C18 11.94 17.3978 12.9767 16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      nE = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "calendar",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M5.5 18.5H19.5V6.5H5.5V18.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M16.5 8V4M8.5 8V4M8 12.5H10M8 15.5H10M11.5 12.5H13.5M11.5 15.5H13.5M15 12.5H17M15 15.5H17M12.5 8V4M5.5 9.5H19.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nB = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "case",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9 8.5122V6C9 5.44772 9.44772 5 10 5H15C15.5523 5 16 5.44772 16 6V8.5122M4.5 12V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H19.5C20.0523 19.5 20.5 19.0523 20.5 18.5V12M4.5 12V9.5122C4.5 8.95991 4.94772 8.5122 5.5 8.5122H19.5C20.0523 8.5122 20.5 8.95991 20.5 9.5122V12M4.5 12L11.7978 14.7367C12.2505 14.9064 12.7495 14.9064 13.2022 14.7367L20.5 12",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nP = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "chart-upward",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5.5 5V19.5H20M7.5 16L11.5 11.5L15.5 14L19.5 8.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nI = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "checkmark-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 12.1316L11.7414 14.5L16 10M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nA = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "checkmark",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5.5 11.5L10.5 16.5L19.5 7.60001",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nW = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "chevron-down",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M17 10L12.5 14.5L8 10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nz = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "chevron-left",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M15 17L10.5 12.5L15 8",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nO = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "chevron-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10 8L14.5 12.5L10 17",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      n_ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "chevron-up",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8 15L12.5 10.5L17 15",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nZ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("circle", {
            cx: 12.5,
            cy: 12.5,
            r: 8,
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nD = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "clipboard",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8 5.5H6.5V19.5H18.5V5.5H17M12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nN = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "clipboard-image",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8 5.5H6.5V19.5H10.5M17 5.5H18.5V11.5M10.5 18.5L12.73 15.8983C13.1327 15.4285 13.8613 15.4335 14.2575 15.909L15.299 17.1588C15.6754 17.6105 16.3585 17.6415 16.7743 17.2257L16.9903 17.0097C17.2947 16.7053 17.7597 16.6298 18.1447 16.8223L20.5 18M10.5 11.5H20.5V21.5H10.5V11.5ZM12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nF = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "clock",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 8V12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nU = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "close-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 15.5L12.5 12.5M12.5 12.5L15.5 9.5M12.5 12.5L9.5 9.5M12.5 12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nG = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "close",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M18 7L7 18M7 7L18 18",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nY = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "code-block",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M11 15L8.5 12.5L11 10M14 10L16.5 12.5L14 15M5.5 6.5H19.5V18.5H5.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nX = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "code",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M11 16L7.5 12.5L11 9M14 9L17.5 12.5L14 16",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nq = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "cog",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M14.0666 6.19428L13.719 5.32531C13.5196 4.82685 13.0369 4.5 12.5 4.5C11.9631 4.5 11.4804 4.82685 11.281 5.32531L10.9334 6.19428C10.7984 6.53187 10.5328 6.80068 10.1969 6.93982C9.86098 7.07896 9.48313 7.07666 9.14894 6.93343L8.2887 6.56476C7.79525 6.35328 7.22276 6.46353 6.84315 6.84315C6.46353 7.22276 6.35328 7.79525 6.56476 8.2887L6.93343 9.14894C7.07666 9.48313 7.07896 9.86098 6.93982 10.1969C6.80068 10.5328 6.53187 10.7984 6.19428 10.9334L5.32531 11.281C4.82685 11.4804 4.5 11.9631 4.5 12.5C4.5 13.0369 4.82685 13.5196 5.32531 13.719L6.19428 14.0666C6.53187 14.2016 6.80068 14.4672 6.93982 14.8031C7.07896 15.139 7.07666 15.5169 6.93343 15.8511L6.56476 16.7113C6.35328 17.2048 6.46353 17.7772 6.84315 18.1569C7.22276 18.5365 7.79525 18.6467 8.2887 18.4352L9.14894 18.0666C9.48314 17.9233 9.86099 17.921 10.1969 18.0602C10.5328 18.1993 10.7984 18.4681 10.9334 18.8057L11.281 19.6747C11.4804 20.1732 11.9631 20.5 12.5 20.5C13.0369 20.5 13.5196 20.1731 13.719 19.6747L14.0666 18.8057C14.2016 18.4681 14.4672 18.1993 14.8031 18.0602C15.139 17.921 15.5169 17.9233 15.8511 18.0666L16.7113 18.4352C17.2047 18.6467 17.7772 18.5365 18.1569 18.1569C18.5365 17.7772 18.6467 17.2047 18.4352 16.7113L18.0666 15.8511C17.9233 15.5169 17.921 15.139 18.0602 14.8031C18.1993 14.4672 18.4681 14.2016 18.8057 14.0666L19.6747 13.719C20.1731 13.5196 20.5 13.0369 20.5 12.5C20.5 11.9631 20.1731 11.4804 19.6747 11.281L18.8057 10.9334C18.4681 10.7984 18.1993 10.5328 18.0602 10.1969C17.921 9.86098 17.9233 9.48313 18.0666 9.14894L18.4352 8.2887C18.6467 7.79525 18.5365 7.22276 18.1569 6.84314C17.7772 6.46353 17.2048 6.35328 16.7113 6.56476L15.8511 6.93343C15.5169 7.07666 15.139 7.07896 14.8031 6.93982C14.4672 6.80068 14.2016 6.53187 14.0666 6.19428Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nK = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "collapse",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M6 14.5L10.5 14.5V19M19 10.5H14.5L14.5 6",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M10.5 14.5L6 19M14.5 10.5L19 6",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      nJ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "color-wheel",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.43853 5.10896L11.1606 9.26642M13.8394 15.7336L15.5615 19.891M15.7336 11.1606L19.891 9.43853M9.26642 13.8394L5.10896 15.5615M5.3139 9.52342L9.23359 11.147M15.7664 13.853L19.6861 15.4766M13.853 9.23359L15.4766 5.3139M9.52342 19.6861L11.147 15.7664M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5ZM16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      nQ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "comment",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7.5 16.5H9.5V20.5L13.5 16.5H17.5C18.6046 16.5 19.5 15.6046 19.5 14.5V8.5C19.5 7.39543 18.6046 6.5 17.5 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      n1 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "component",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8.5 8.5L12.5 12.5M12.5 12.5L16.5 16.5M12.5 12.5L16.5 8.5M12.5 12.5L8.5 16.5M12.5 4L21 12.5L12.5 21L4 12.5L12.5 4Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      n0 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "compose",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M17 6L19 8M14 5.5H5.5V19.5H19.5V11M9 16L9.5 13.5L19 4L21 6L11.5 15.5L9 16Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      n5 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "compose-sparkles",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M11 3.5V5M11 5V6.5M11 5H12.5M11 5H9.5M17 9L9.5 16.5L9 19L11.5 18.5L19 11M17 9L19 7L21 9L19 11M17 9L19 11M4.5 10C4.5 10 5.72308 9.87692 6.3 9.3C6.87692 8.72308 7 7.5 7 7.5C7 7.5 7.12308 8.72308 7.7 9.3C8.27692 9.87692 9.5 10 9.5 10C9.5 10 8.27692 10.1231 7.7 10.7C7.12308 11.2769 7 12.5 7 12.5C7 12.5 6.87692 11.2769 6.3 10.7C5.72308 10.1231 4.5 10 4.5 10Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }),
      n2 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "confetti",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M16.5 6.25C16.9142 6.25 17.25 5.91421 17.25 5.5C17.25 5.08579 16.9142 4.75 16.5 4.75C16.0858 4.75 15.75 5.08579 15.75 5.5C15.75 5.91421 16.0858 6.25 16.5 6.25Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M19.5 16.25C19.9142 16.25 20.25 15.9142 20.25 15.5C20.25 15.0858 19.9142 14.75 19.5 14.75C19.0858 14.75 18.75 15.0858 18.75 15.5C18.75 15.9142 19.0858 16.25 19.5 16.25Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M13 4C11 6 14.5 5.5 12.5 7.5M21 12C19 14 19.5 10.5 17.5 12.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M16.066 16.4904C15.3965 17.1598 13.1126 15.9613 10.9647 13.8135C8.81684 11.6656 7.61835 9.38165 8.28782 8.71218M16.066 16.4904C16.7355 15.8209 15.537 13.537 13.3891 11.3891C11.2412 9.2412 8.95729 8.04271 8.28782 8.71218M16.066 16.4904C15.8661 16.6902 15.6277 16.8474 15.3657 16.952L6.99288 20.296C6.26931 20.5849 5.44878 20.4193 4.9038 19.8744C4.35883 19.3294 4.19324 18.5089 4.48221 17.7853L7.82614 9.41242C7.93077 9.15042 8.08793 8.91208 8.28782 8.71218M20 5C20 14 11.5 5.32688 11.5 14.3269",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      n6 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "controls",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M6.5 5V7.5M6.5 7.5C5.39543 7.5 4.5 8.39543 4.5 9.5C4.5 10.6046 5.39543 11.5 6.5 11.5M6.5 7.5C7.60457 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 7.60457 11.5 6.5 11.5M6.5 11.5V20M12.5 5V13.5M12.5 13.5C11.3954 13.5 10.5 14.3954 10.5 15.5C10.5 16.6046 11.3954 17.5 12.5 17.5M12.5 13.5C13.6046 13.5 14.5 14.3954 14.5 15.5C14.5 16.6046 13.6046 17.5 12.5 17.5M12.5 17.5V20M18.5 5V7.5M18.5 7.5C17.3954 7.5 16.5 8.39543 16.5 9.5C16.5 10.6046 17.3954 11.5 18.5 11.5M18.5 7.5C19.6046 7.5 20.5 8.39543 20.5 9.5C20.5 10.6046 19.6046 11.5 18.5 11.5M18.5 11.5V20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      n4 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "copy",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8.5 8.5H5.5V20.5H16.5V16.5M19.5 4.5H8.5V16.5H19.5V4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      n8 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "credit-card",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M20.5 9.5H4.5V11.5H20.5V9.5Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M7 15.5H14M5.5 18.5H19.5C20.0523 18.5 20.5 18.0523 20.5 17.5V7.5C20.5 6.94772 20.0523 6.5 19.5 6.5H5.5C4.94772 6.5 4.5 6.94772 4.5 7.5V17.5C4.5 18.0523 4.94772 18.5 5.5 18.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      n9 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "crop",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 5V15.5H20M5 9.5H15.5V20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      n3 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "cube",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M12.5 22V13M12.5 13L4.5 8M12.5 13L20.5 8",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      n7 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "dashboard",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M14.5 19.5V12.5M10.5 12.5V5.5M5.5 12.5H19.5M5.5 19.5H19.5V5.5H5.5V19.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oe = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "database",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M18.5 7V17.5C18.5 19.0594 16.0504 20.5 12.5 20.5C8.9496 20.5 6.5 19.0594 6.5 17.5V7M18.5 7C18.5 8.45543 15.8137 9.5 12.5 9.5C9.18629 9.5 6.5 8.45543 6.5 7C6.5 5.54457 9.18629 4.5 12.5 4.5C15.8137 4.5 18.5 5.54457 18.5 7Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ot = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "desktop",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M4.5 13.5V15.5C4.5 16.0523 4.94772 16.5 5.5 16.5H12.5M4.5 13.5V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V13.5M4.5 13.5H20.5M20.5 13.5V15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H12.5M12.5 16.5V19.5M12.5 19.5H8M12.5 19.5H17",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      or = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "diamond",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M21 10.5L12.5 21M21 10.5L18 5.5H11M21 10.5H16M12.5 21L4 10.5M12.5 21L9 10.5M12.5 21L16 10.5M4 10.5L7 5.5H11M4 10.5H9M9 10.5H12.5H16M9 10.5L11 5.5M16 10.5L14.5 5.5H11",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      on = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "document",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M18.5 20.5H6.5V9.5L11.5 4.5H18.5V20.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oo = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "document-pdf",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.7127 13.8012L12.7193 13.77C12.8488 13.2366 13.0117 12.5716 12.8845 11.969C12.7997 11.4937 12.4493 11.3084 12.1503 11.295C11.7977 11.2794 11.483 11.4803 11.4049 11.7726C11.2576 12.3082 11.3893 13.0402 11.6303 13.973C11.3268 14.6961 10.8425 15.7472 10.4877 16.3721C9.8271 16.7135 8.94113 17.2402 8.80946 17.9053C8.78268 18.028 8.81392 18.1842 8.88757 18.3248C8.97014 18.481 9.10181 18.6015 9.25579 18.6596C9.32274 18.6841 9.40308 18.7042 9.49681 18.7042C9.88959 18.7042 10.5256 18.3873 11.3736 16.9322C11.5031 16.8898 11.637 16.8452 11.7664 16.8006C12.3734 16.5953 13.0028 16.381 13.5718 16.2851C14.2012 16.622 14.9175 16.8385 15.404 16.8385C15.8861 16.8385 16.0758 16.5529 16.1472 16.381C16.2722 16.0797 16.2119 15.7004 16.0088 15.4973C15.7143 15.2072 14.9979 15.1313 13.882 15.2696C13.3331 14.9349 12.9738 14.4796 12.7127 13.8012ZM10.2645 17.1911C9.95431 17.6419 9.71998 17.8673 9.59278 17.9655C9.7423 17.691 10.0346 17.4009 10.2645 17.1911ZM12.2195 11.9355C12.3355 12.1341 12.3199 12.7345 12.2306 13.038C12.1213 12.5939 12.1056 11.9645 12.1704 11.8909L12.2195 11.9355ZM12.1837 14.6247C12.4225 15.0376 12.7238 15.3924 13.0563 15.6557C12.5743 15.7651 12.1346 15.9458 11.7419 16.1065C11.6481 16.1445 11.5566 16.1824 11.4674 16.2181C11.7642 15.6803 12.0119 15.071 12.1837 14.6247ZM15.6562 16.0864L15.6428 16.1065C15.6428 16.1065 15.4375 16.2315 14.6497 15.9213C15.5558 15.8789 15.6562 16.0864 15.6562 16.0864Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oi = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "document-remove",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M6.5 14V20.5H18.5V14M6.5 11V9.5L11.5 4.5H18.5V11M3 12.5H22",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      os = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "document-sheet",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M10.4 19V16.4M10.4 16.4L10.4 13.4M10.4 16.4H8M10.4 16.4H14.4M10.4 13.4V11M10.4 13.4H8M10.4 13.4H14.4M14.4 19V16.4M14.4 16.4V13.4M14.4 16.4H17M14.4 13.4V11M14.4 13.4H17M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oa = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "documents",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M10.5 4.5V9.5H5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M16.5 7.5H19.5V21.5H8.5V18.5M10.5 4.5H16.5V18.5H5.5V9.5L10.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ol = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "document-text",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M16 13H9M14 16H9M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      od = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "document-video",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.5 16.5V13.5L14 15L11.5 16.5Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oc = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "document-word",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.4699 13.4588H12.5263L13.6328 17H14.5435L16 12H14.9952L14.0656 15.7214H14.0129L12.929 12H12.0672L10.9984 15.7214H10.9419L10.0124 12H9L10.4565 17H11.371L12.4699 13.4588Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ou = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "document-zip",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M15 4.5L13.5 5L15.5 6L13.5 7L15.5 8L13.5 9L15.5 10L13.5 11L14.5 11.5V13M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5ZM13.5 13H15.5L16 17H13L13.5 13Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oh = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "dot",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("circle", {
            cx: 12.5,
            cy: 12.5,
            r: 2.5,
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      of = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "double-chevron-down",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M17 7.5C15.6332 8.86683 12.5 12 12.5 12L8 7.5M17 12.5C15.6332 13.8668 12.5 17 12.5 17L8 12.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      op = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "double-chevron-left",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 17L8 12.5L12.5 8M17.5 17L13 12.5L17.5 8",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      og = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "double-chevron-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 8L17 12.5L12.5 17M7.5 8L12 12.5L7.5 17",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      om = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "double-chevron-up",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8 12.5L12.5 8L17 12.5M8 17.5L12.5 13L17 17.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ow = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "download",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M19.5 17V19.5H5.5V17M12.5 16L12.5 5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M17.5 11L12.5 16L7.5 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ov = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "drag-handle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      ob = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "drop",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M18.5 14.5C18.5 18 16 20.5 12.5 20.5C9 20.5 6.5 18 6.5 14.5C6.5 11 9.5 7.50001 12.5 4.5C15.5 7.5 18.5 11 18.5 14.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oy = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "earth-americas",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M7 13L5.5 9L10 5H15V10L14 9H11L9.5 11L10.5 12H12V13L13 14.5H15.5L18.5 17L15.5 19.5L10.5 20V17L12.5 15L9 13L7 10.5V13Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("circle", {
              cx: 12.5,
              cy: 12.5,
              r: 8,
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ox = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "earth-globe",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M20.5 12.5H4.5M12.5 20.5C12.5 20.5 9.5 17.5 9.5 12.5C9.5 7.5 12.5 4.5 12.5 4.5C12.5 4.5 15.5 7.5 15.5 12.5C15.5 17.5 12.5 20.5 12.5 20.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oC = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "edit",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M15 7L18 10M6 19L7 15L17 5L20 8L10 18L6 19Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ok = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "ellipsis-horizontal",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5C5 11.6716 5.67157 11 6.5 11Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M12.5 11C13.3284 11 14 11.6716 14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M18.5 11C19.3284 11 20 11.6716 20 12.5C20 13.3284 19.3284 14 18.5 14C17.6716 14 17 13.3284 17 12.5C17 11.6716 17.6716 11 18.5 11Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      oM = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "ellipsis-vertical",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M14 6.5C14 7.32843 13.3284 8 12.5 8C11.6716 8 11 7.32843 11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M14 18.5C14 19.3284 13.3284 20 12.5 20C11.6716 20 11 19.3284 11 18.5C11 17.6716 11.6716 17 12.5 17C13.3284 17 14 17.6716 14 18.5Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      oj = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "empty",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 21V19.1111M8.25 19.8614L9.19445 18.2255M5.13878 16.7501L6.77461 15.8057M4 12.5H5.8889M5.13872 8.2499L6.77455 9.19436M8.25004 5.13876L9.19449 6.7746M12.5 5.88891V4M15.8055 6.77465L16.75 5.1388M18.2254 9.19449L19.8612 8.25004M19.1111 12.5001H21M18.2254 15.8056L19.8612 16.7501M15.8056 18.2255L16.75 19.8614",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      oL = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "enter",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M6 14.5H19.5V7",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M10 18.5L6 14.5L10 10.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oS = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "enter-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M19 14.5H5.5V7",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M15 18.5L19 14.5L15 10.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oV = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "envelope",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M20.5 18.5H4.5V6.5H20.5V18.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M20.5 18.5L17.75 15.5L15 12.5M4.5 18.5L10 12.5M20.5 6.5L12.5 15L4.5 6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oR = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "equal",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", { d: "M7.5 4.5H3.5V20.5H7.5", stroke: "currentColor", strokeWidth: 1.2 }),
            (0, e0.jsx)("path", {
              d: "M17.5 20.5L21.5 20.5L21.5 4.5L17.5 4.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
            }),
            (0, e0.jsx)("path", { d: "M9 10.5H16", stroke: "currentColor", strokeWidth: 1.2 }),
            (0, e0.jsx)("path", { d: "M9 14.5H16", stroke: "currentColor", strokeWidth: 1.2 }),
          ],
        });
      }),
      oH = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "error-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5ZM13 14.5V16H12V14.5H13ZM12 9V13H13V9H12Z",
            fill: "currentColor",
          }),
        });
      }),
      o$ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "error-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 16V14.5M12.5 9V13M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oT = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "error-screen",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M10 8.5L15 13.5M15 8.5L10 13.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M12.5 16.5H5.5C4.94772 16.5 4.5 16.0523 4.5 15.5V6.5C4.5 5.94771 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H12.5ZM12.5 16.5V19.5M12.5 19.5H8M12.5 19.5H17",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oE = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "expand",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M14 6.5H18.5V11M11 18.5H6.5V14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M18.5 6.5L14 11M6.5 18.5L11 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oB = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "eye-closed",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7 15.5L5.5 17.5M20.5 12.5C19.8612 13.5647 19.041 14.6294 18.0008 15.501M18.0008 15.501C16.5985 16.676 14.7965 17.5 12.5 17.5M18.0008 15.501L18 15.5M18.0008 15.501L19.5 17.5M12.5 17.5C8.5 17.5 6 15 4.5 12.5M12.5 17.5V20M15.5 17L16.5 19.5M9.5 17L8.5 19.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oP = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "eye-open",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.39999 12.5C9.39999 10.7879 10.7879 9.39999 12.5 9.39999C14.2121 9.39999 15.6 10.7879 15.6 12.5C15.6 14.2121 14.2121 15.6 12.5 15.6C10.7879 15.6 9.39999 14.2121 9.39999 12.5Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M12.5 7.5C8.5 7.5 6 10 4.5 12.5C6 15 8.5 17.5 12.5 17.5C16.5 17.5 19 15 20.5 12.5C19 10 16.5 7.5 12.5 7.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oI = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "face-happy",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 9V12M14.5 9V12M8.5 14C8.5 14 9.50001 16.5 12.5 16.5C15.5 16.5 16.5 14 16.5 14M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oA = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "face-indifferent",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 9V12M14.5 9V12M8.5 15.5C8.5 15.5 9.50001 15.5 12.5 15.5C15.5 15.5 16.5 15.5 16.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oW = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "face-sad",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 9V12M14.5 9V12M8.5 16.5C8.5 16.5 9.50001 14.5 12.5 14.5C15.5 14.5 16.5 16.5 16.5 16.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oz = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "feedback",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", { d: "M10 11.5V12H9.5L9.5 11.5H10Z", fill: "currentColor" }),
            (0, e0.jsx)("path", { d: "M13 11.5V12H12.5V11.5H13Z", fill: "currentColor" }),
            (0, e0.jsx)("path", { d: "M16 11.5V12H15.5V11.5H16Z", fill: "currentColor" }),
            (0, e0.jsx)("path", {
              d: "M10 11.5V12H9.5L9.5 11.5H10Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M13 11.5V12H12.5V11.5H13Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M16 11.5V12H15.5V11.5H16Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M7.5 16.5H9.5V20.5L13.5 16.5H17.5C18.6046 16.5 19.5 15.6046 19.5 14.5V8.5C19.5 7.39543 18.6046 6.5 17.5 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oO = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "filter",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M6 7.5H19M8 12.5H17M10 17.5H15",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      o_ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "folder",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M11.5 8.5H19.5V18.5H5.5V5.5H10.5L11.5 8.5ZM11.5 8.5H5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oZ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "generate",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M9 5.30423C6.33576 6.60253 4.5 9.33688 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5V14.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M16 11L12.5 14.5L9 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      oD = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "github",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.507 4C7.80286 4 4 7.8309 4 12.5702C4 16.3587 6.43663 19.5655 9.81687 20.7005C10.2395 20.7858 10.3943 20.5161 10.3943 20.2892C10.3943 20.0905 10.3804 19.4094 10.3804 18.6999C8.01391 19.2108 7.52112 17.6782 7.52112 17.6782C7.14081 16.685 6.57732 16.4297 6.57732 16.4297C5.80279 15.9047 6.63374 15.9047 6.63374 15.9047C7.49291 15.9615 7.94374 16.7844 7.94374 16.7844C8.70417 18.0897 9.92953 17.7209 10.4225 17.4938C10.4929 16.9404 10.7184 16.5573 10.9578 16.3445C9.07037 16.1459 7.08457 15.4081 7.08457 12.1161C7.08457 11.1796 7.42239 10.4134 7.95767 9.81757C7.87321 9.60478 7.57736 8.72489 8.04229 7.54724C8.04229 7.54724 8.76059 7.32017 10.3802 8.42695C11.0736 8.23935 11.7887 8.14392 12.507 8.14312C13.2253 8.14312 13.9576 8.24255 14.6337 8.42695C16.2535 7.32017 16.9718 7.54724 16.9718 7.54724C17.4367 8.72489 17.1407 9.60478 17.0562 9.81757C17.6056 10.4134 17.9295 11.1796 17.9295 12.1161C17.9295 15.4081 15.9437 16.1316 14.0422 16.3445C14.3521 16.6141 14.6196 17.1248 14.6196 17.9337C14.6196 19.0829 14.6057 20.0053 14.6057 20.289C14.6057 20.5161 14.7606 20.7858 15.1831 20.7006C18.5633 19.5653 21 16.3587 21 12.5702C21.0139 7.8309 17.1971 4 12.507 4Z",
            fill: "currentColor",
          }),
        });
      }),
      oN = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "groq",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", { d: "M13 13H21L13 21L13 13Z", fill: "currentColor" }),
            (0, e0.jsx)("path", { d: "M12 12V4L4 12H12Z", fill: "currentColor" }),
            (0, e0.jsx)("path", { d: "M12 13H4L12 21V13Z", fill: "currentColor" }),
          ],
        });
      }),
      oF = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "hash",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.33894 16.1002H5.44615L5.63077 14.9002H8.52356L9.26202 10.1002H6.36923L6.55384 8.90018H9.44663L9.89281 6H11.1069L10.6608 8.90018H15.4466L15.8928 6H17.1069L16.6608 8.90018H19.5539L19.3693 10.1002H16.4761L15.7377 14.9002H18.6308L18.4462 16.1002H15.5531L15.1069 19H13.8928L14.3389 16.1002H9.55306L9.10693 19H7.89281L8.33894 16.1002ZM10.4761 10.1002L9.73767 14.9002H14.5236L15.262 10.1002H10.4761Z",
            fill: "currentColor",
          }),
        });
      }),
      oU = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "heart-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oG = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "heart",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oY = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "help-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oX = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "highlight",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M17.5311 13.7141L8.02451 8.22547M17.5311 13.7141L20.25 9.00478M17.5311 13.7141L16.5 15.5L13.232 16.134L12 18L11.4142 17.6485M8.02451 8.22547L10.75 3.50479M8.02451 8.22547L6.99999 9.99998L7.99999 13L6.99999 15L7.58576 15.3514M7.58576 15.3514L4.90192 20L10.0566 20L11.4142 17.6485M7.58576 15.3514L11.4142 17.6485M13 20H20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oq = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "home",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M14.5 18.5V12.5H10.5V18.5M5.5 11.5V18.5H19.5V11.5L12.5 5.5L5.5 11.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oK = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "ice-cream",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 13.5L12.5 20.5L15.5 13.5M12.5 8.26389C11.9692 7.78885 11.2684 7.5 10.5 7.5C8.84315 7.5 7.5 8.84315 7.5 10.5C7.5 12.1569 8.84315 13.5 10.5 13.5C11.2684 13.5 11.9692 13.2111 12.5 12.7361M9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5M17.5 10.5C17.5 12.1569 16.1569 13.5 14.5 13.5C12.8431 13.5 11.5 12.1569 11.5 10.5C11.5 8.84315 12.8431 7.5 14.5 7.5C16.1569 7.5 17.5 8.84315 17.5 10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oJ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "image",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5.5 15.5L8.79289 12.2071C9.18342 11.8166 9.81658 11.8166 10.2071 12.2071L12.8867 14.8867C13.2386 15.2386 13.7957 15.2782 14.1938 14.9796L15.1192 14.2856C15.3601 14.1049 15.6696 14.0424 15.9618 14.1154L19.5 15M5.5 6.5H19.5V18.5H5.5V6.5ZM15.5 10.5C15.5 11.0523 15.0523 11.5 14.5 11.5C13.9477 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.9477 9.5 14.5 9.5C15.0523 9.5 15.5 9.94772 15.5 10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      oQ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "image-remove",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5.5 11V6.5H19.5V11M5.5 14V18.5H19.5V14M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      o1 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "images",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M18.5 7.5H20.5V19.5H6.5V17.5M4.5 14.5L7.79289 11.2071C8.18342 10.8166 8.81658 10.8166 9.20711 11.2071L11.8867 13.8867C12.2386 14.2386 12.7957 14.2782 13.1938 13.9796L14.1192 13.2856C14.3601 13.1049 14.6696 13.0424 14.9618 13.1154L18.5 14M4.5 5.5H18.5V17.5H4.5V5.5ZM14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.9477 8.5 13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      o0 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "inbox",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9 8.5H8.17703C7.76813 8.5 7.40042 8.74895 7.24856 9.12861L5.5 13.5M5.5 13.5V17.5C5.5 18.0523 5.94302 18.5 6.4953 18.5C9.00381 18.5 15.5919 18.5 18.504 18.5C19.0563 18.5 19.5 18.0523 19.5 17.5V13.5M5.5 13.5H8.5L10 15.5H15L16.5 13.5H19.5M19.5 13.5L17.7514 9.12861C17.5996 8.74895 17.2319 8.5 16.823 8.5H16M12.5 5V12.5M12.5 12.5L15 10M12.5 12.5L10 10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      o5 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "info-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5ZM12 10.5V9H13V10.5H12ZM13 16V12H12V16H13Z",
            fill: "currentColor",
          }),
        });
      }),
      o2 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "info-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 10.5V9M12.5 12V16M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      o6 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "inline-element",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5.5 5V20M19.5 5V20M8.5 6.5H16.5V18.5H8.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      o4 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "inline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 6.5H19.5V18.5H12.5M12.5 6.5H5.5V18.5H12.5M12.5 6.5V18.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      o8 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "insert-above",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M14.5 10.5556L10.5 10.5556M12.5 12.5L12.5 8.5M18.5 5.5L6.5 5.5M18.5 19.5L6.5 19.5L6.5 15.5L18.5 15.5L18.5 19.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
          }),
        });
      }),
      o9 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "insert-below",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 14.5H14.5M12.5 12.5V16.5M6.5 19.5H18.5M6.5 5.5H18.5V9.5H6.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
          }),
        });
      }),
      o3 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "italic",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.43 18H11.7276L13.4551 9.86763H12.1576L10.43 18ZM13.3042 8.29849C13.8021 8.29849 14.2095 7.89112 14.2095 7.39322C14.2095 6.89532 13.8021 6.48795 13.3042 6.48795C12.8063 6.48795 12.399 6.89532 12.399 7.39322C12.399 7.89112 12.8063 8.29849 13.3042 8.29849Z",
            fill: "currentColor",
          }),
        });
      }),
      o7 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "joystick",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 16V14.5H15.5V16M13.5 10.5V14.5M11.5 10.5V14.5M15.5 7.5C15.5 9.15685 14.1569 10.5 12.5 10.5C10.8431 10.5 9.5 9.15685 9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5ZM18.5 19.5H6.5C5.94772 19.5 5.5 19.0523 5.5 18.5V17.5C5.5 16.9477 5.94772 16.5 6.5 16.5H18.5C19.0523 16.5 19.5 16.9477 19.5 17.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ie = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "json",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M11 5.5H9.5C8.39543 5.5 7.5 6.39543 7.5 7.5V12.5M7.5 12.5H4M7.5 12.5V17.5C7.5 18.6046 8.39543 19.5 9.5 19.5H11M14 5.5H15.5C16.6046 5.5 17.5 6.39543 17.5 7.5V12.5M17.5 12.5H21M17.5 12.5V17.5C17.5 18.6046 16.6046 19.5 15.5 19.5H14",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      it = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "launch",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12 7.5H6.5V18.5H17.5V13M19.5 5.5L10.5 14.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M14 5.5H19.5V11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ir = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "leave",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M14.5 15V18.5H5.5V6.5H14.5V10M9 12.5H21.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M18 9L21.5 12.5L18 16",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      io = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "lemon",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.6569 10.3431L6.41422 14.5858C7.58579 15.7574 9.12132 16.3431 10.6569 16.3431M10.6569 10.3431L14.8995 6.1005C16.0711 7.27208 16.6569 8.80761 16.6569 10.3431M10.6569 10.3431L10.6569 16.3431M10.6569 10.3431L16.6569 10.3431M10.6569 10.3431L14.8995 14.5858M14.8995 14.5858C13.7279 15.7574 12.1924 16.3431 10.6569 16.3431M14.8995 14.5858C16.0711 13.4142 16.6569 11.8787 16.6569 10.3431M16.3137 4.68629C19.4379 7.81049 19.4379 12.8758 16.3137 16C13.1895 19.1242 8.12419 19.1242 5 16L16.3137 4.68629Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ii = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "linkedin",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M20.0249 20H16.9137V15.1278C16.9137 13.9659 16.893 12.4704 15.2956 12.4704C13.6753 12.4704 13.4273 13.7362 13.4273 15.0432V19.9997H10.3162V9.98042H13.3028V11.3496H13.3447C13.6436 10.8386 14.0755 10.4182 14.5944 10.1332C15.1134 9.8482 15.6999 9.7092 16.2915 9.7312C19.4448 9.7312 20.0262 11.8054 20.0262 14.5036L20.0249 20ZM6.80572 8.6109C6.44863 8.6109 6.0996 8.50507 5.80265 8.30683C5.50571 8.10848 5.27427 7.82653 5.13757 7.4967C5.00086 7.16677 4.96502 6.80378 5.03463 6.45356C5.10423 6.10334 5.27613 5.78157 5.52858 5.52903C5.78103 5.2765 6.10271 5.10448 6.45293 5.03476C6.80315 4.96502 7.16614 5.00072 7.49607 5.13731C7.826 5.2739 8.10796 5.50526 8.30641 5.80212C8.50486 6.09894 8.6108 6.44798 8.6109 6.80507C8.6109 7.04216 8.56422 7.277 8.47352 7.49606C8.38283 7.71512 8.24995 7.91422 8.0823 8.08187C7.91466 8.24952 7.71567 8.3826 7.4966 8.4733C7.27765 8.5641 7.04281 8.61079 6.80572 8.6109ZM8.36136 20H5.24695V9.98042H8.36136V20Z",
            fill: "currentColor",
          }),
        });
      }),
      is = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "link",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M11 12.5L12.5 14C13.281 14.781 14.719 14.781 15.5 14L18.5 11C19.281 10.219 19.281 8.78105 18.5 8L18 7.5C17.2189 6.71895 15.781 6.71895 15 7.5L13 9.5M12 15.5L10 17.5C9.21895 18.281 7.78105 18.281 7 17.5L6.5 17C5.71895 16.219 5.71896 14.781 6.5 14L9.50001 11C10.2811 10.219 11.719 10.2189 12.5 11L14 12.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ia = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "link-removed",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M18.5 11C19.281 10.219 19.281 8.78108 18.5 8.00003L18 7.50003C17.2189 6.71898 15.781 6.71898 15 7.50003L13 9.50003M15.5 14C14.7189 14.7811 13.281 14.7811 12.5 14M6.5 14C5.71895 14.7811 5.71894 16.219 6.49999 17L6.99999 17.5C7.78104 18.2811 9.21894 18.2811 9.99999 17.5L12 15.5M12.5 11C11.719 10.219 10.281 10.219 9.5 11M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      il = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "list",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M6 6.5H19M6 14.5H19M6 10.5H19M6 18.5H19",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      id = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "lock",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M15.5 11.5V8.5C15.5 6.5 14 5.5 12.5 5.5C11 5.5 9.5 6.5 9.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ic = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "logo-js",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 5H5V20H20V5ZM12.5254 16.1572C12.5254 17.4189 11.7742 18.1536 10.4792 18.1536C9.24243 18.1536 8.49121 17.4189 8.45801 16.2942V16.261H9.67407V16.2859C9.69897 16.7466 9.9729 17.0703 10.4626 17.0703C10.9939 17.0703 11.272 16.7507 11.272 16.1489V12.011H12.5254V16.1572ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
            fill: "currentColor",
          }),
        });
      }),
      iu = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "logo-ts",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 5H5V20H20V5ZM11.0769 18H9.82349V13.0444H8.02637V12.011H12.874V13.0444H11.0769V18ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
            fill: "currentColor",
          }),
        });
      }),
      ih = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "marker",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 14 15.5 17.5 12.5 20.5C9.5 17.5 6.5 14 6.5 10.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M14 10.5C14 11.3284 13.3284 12 12.5 12C11.6716 12 11 11.3284 11 10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ip = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "marker-removed",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7.39787 14C8.51075 16.2897 10.5054 18.5054 12.5 20.5C14.4946 18.5054 16.4892 16.2897 17.6021 14M6.52009 11C6.50681 10.8334 6.5 10.6667 6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 10.6667 18.4932 10.8334 18.4799 11M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ig = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "master-detail",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 6.5V10.5M9.5 10.5V14.5M9.5 10.5H5.5M9.5 14.5V18.5M9.5 14.5H5.5M5.5 6.5H19.5V18.5H5.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      im = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "menu",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M6 7.5H19M6 17.5H19M6 12.5H19",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iw = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "microphone",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 16.5C15.8137 16.5 18.5 13.8137 18.5 10.5V10M12.5 16.5C9.18629 16.5 6.5 13.8137 6.5 10.5V10M12.5 16.5V20.5M8 20.5H17M15.5 10.5C15.5 12.1569 14.1569 13.5 12.5 13.5C10.8431 13.5 9.5 12.1569 9.5 10.5V7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5V10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      iv = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "microphone-slash",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M17.8162 14.412C18.6231 13.3173 19.1 11.9644 19.1 10.5V10H17.9V10.5C17.9 11.6324 17.5514 12.6834 16.9557 13.5516L17.8162 14.412Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M14.2171 15.6213L15.1446 16.5488C14.5091 16.8271 13.8213 17.0081 13.1 17.0731V19.9H17V21.1H7.99999V19.9H11.9V17.0731C8.53609 16.77 5.89999 13.9429 5.89999 10.5V10H7.09999V10.5C7.09999 13.4824 9.51766 15.9 12.5 15.9C13.1003 15.9 13.6777 15.8021 14.2171 15.6213Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M15.6494 12.2453C15.9365 11.7283 16.1 11.1333 16.1 10.5V7.50002C16.1 5.5118 14.4882 3.90002 12.5 3.90002C11.0945 3.90002 9.87704 4.70551 9.2842 5.88007L10.2038 6.79966C10.5035 5.81583 11.4181 5.10002 12.5 5.10002C13.8255 5.10002 14.9 6.17454 14.9 7.50002V10.5C14.9 10.7968 14.8461 11.0811 14.7476 11.3435L15.6494 12.2453Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M8.89999 10.3042L12.6909 14.0951C12.6277 14.0984 12.564 14.1 12.5 14.1C10.5118 14.1 8.89999 12.4882 8.89999 10.5V10.3042Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", { d: "M19 18L6 5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
          ],
        });
      }),
      ib = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "mobile-device",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M7.5 6.5C7.5 5.39543 8.39543 4.5 9.5 4.5H15.5C16.6046 4.5 17.5 5.39543 17.5 6.5V18.5C17.5 19.6046 16.6046 20.5 15.5 20.5H9.5C8.39543 20.5 7.5 19.6046 7.5 18.5V6.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M13.5 17.5C13.5 18.0523 13.0523 18.5 12.5 18.5C11.9477 18.5 11.5 18.0523 11.5 17.5C11.5 16.9477 11.9477 16.5 12.5 16.5C13.0523 16.5 13.5 16.9477 13.5 17.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iy = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "moon",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ix = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "number",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.0165 17.6336H3.83636V16.4336H21.0165V17.6336Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M7.09808 13.3967V7.508H5.74066L3.83636 8.78241V10.091L5.65277 8.88495H5.74066V13.3967H3.84125V14.5539H8.89984V13.3967H7.09808Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M9.81781 9.63202V9.66132H11.1069V9.62714C11.1069 8.95331 11.5756 8.49432 12.2739 8.49432C12.9575 8.49432 13.4018 8.89471 13.4018 9.50507C13.4018 9.9787 13.1528 10.3498 12.1909 11.3117L9.89594 13.5822V14.5539H14.8618V13.3869H11.7807V13.299L13.1577 11.9855C14.3491 10.843 14.7543 10.1838 14.7543 9.41229C14.7543 8.19159 13.7729 7.36639 12.3178 7.36639C10.8383 7.36639 9.81781 8.28436 9.81781 9.63202Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M17.6694 11.4631H18.5092C19.3198 11.4631 19.8422 11.8683 19.8422 12.4982C19.8422 13.1183 19.3295 13.5139 18.5239 13.5139C17.767 13.5139 17.2592 13.133 17.2104 12.5324H15.9262C15.9897 13.8508 17.0248 14.6955 18.5629 14.6955C20.1401 14.6955 21.2192 13.841 21.2192 12.591C21.2192 11.6584 20.6528 11.0334 19.7006 10.9211V10.8332C20.4721 10.6769 20.9457 10.0666 20.9457 9.23651C20.9457 8.12323 19.9741 7.36639 18.5434 7.36639C17.0541 7.36639 16.1118 8.17694 16.0629 9.50018H17.2983C17.3422 8.88007 17.8061 8.48456 18.4995 8.48456C19.2075 8.48456 19.6567 8.85565 19.6567 9.44159C19.6567 10.0324 19.1977 10.4182 18.4946 10.4182H17.6694V11.4631Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      iC = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "ok-hand",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M15.9957 11.5C14.8197 10.912 11.9957 9 10.4957 9C8.9957 9 5.17825 11.7674 6 13C7 14.5 9.15134 11.7256 10.4957 12C11.8401 12.2744 13 13.5 13 14.5C13 15.5 11.8401 16.939 10.4957 16.5C9.15134 16.061 8.58665 14.3415 7.4957 14C6.21272 13.5984 5.05843 14.6168 5.5 15.5C5.94157 16.3832 7.10688 17.6006 8.4957 19C9.74229 20.2561 11.9957 21.5 14.9957 20C17.9957 18.5 18.5 16.2498 18.5 13C18.5 11.5 13.7332 5.36875 11.9957 4.5C10.9957 4 10 5 10.9957 6.5C11.614 7.43149 13.5 9.27705 14 10.3751M15.5 8C15.5 8 15.3707 7.5 14.9957 6C14.4957 4 15.9957 3.5 16.4957 4.5C17.1281 5.76491 18.2872 10.9147 18.4957 13",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ik = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "olist",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10 7.5H19M10 12.5H19M10 17.5H19M5 18.5H7.5L7 17.5L7.5 16.5H5M5 6.5H6.5V8.5M5 8.5H6.5M6.5 8.5H8M8 13.5H6L7 11.5H5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iM = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "overage",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M18.5 11V6.5H14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M6.5 18.5L9 16L12 13L18.5 6.5M3 13.5H22",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ij = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "package",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iL = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "panel-left",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 6.5H19.5V18.5H10.5M10.5 6.5H5.5V18.5H10.5M10.5 6.5V18.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iS = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "panel-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M14.5 6.5H19.5V18.5H14.5M14.5 6.5H5.5V18.5H14.5M14.5 6.5V18.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iV = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "pause",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", { d: "M10.5 7.5H8.5V17.5H10.5V7.5Z", fill: "currentColor" }),
            (0, e0.jsx)("path", { d: "M16.5 7.5H14.5V17.5H16.5V7.5Z", fill: "currentColor" }),
            (0, e0.jsx)("path", { d: "M10.5 7.5H8.5V17.5H10.5V7.5Z", stroke: "currentColor", strokeWidth: 1.2 }),
            (0, e0.jsx)("path", { d: "M16.5 7.5H14.5V17.5H16.5V7.5Z", stroke: "currentColor", strokeWidth: 1.2 }),
          ],
        });
      }),
      iR = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "pin-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M17 15H8V13.5C8 12 10.5 11 10.5 11V9L8.5 7V6H16.5V7L14.5 9V11C14.5 11 17 12 17 13.5V15Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M12 15L12.5 20L13 15",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iH = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "pin",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12 15L12.5 20L13 15",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M17 15H8V13.5C8 12 10.5 11 10.5 11V9L8.5 7V6H16.5V7L14.5 9V11C14.5 11 17 12 17 13.5V15Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      i$ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "pin-removed",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7.39787 14C8.51075 16.2897 10.5054 18.5054 12.5 20.5C14.4946 18.5054 16.4892 16.2897 17.6021 14M6.52009 11C6.50681 10.8334 6.5 10.6667 6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 10.6667 18.4932 10.8334 18.4799 11M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iT = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "play",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7.5 18.5V6.5L17.5 12.5L7.5 18.5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iE = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "plug",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M13.25 8.5L16.75 5M16.25 11.5L19.75 8M9.25 15.5L5.25 19.5M7.75 14L9.75 12C8.25 10 8.75 9 9.75 8C10.15 7.6 11.25 6.5 11.25 6.5L18.25 13.5C18.25 13.5 17.3825 14.3675 16.75 15C15.75 16 14.75 16.5 12.75 15L10.75 17L7.75 14Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iB = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "presentation",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 18H5.5V8.5H19.5V18H14.5M10.5 18L9 22M10.5 18H14.5M14.5 18L16 22M4.5 8.5H20.5V6.5H4.5V8.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iP = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "progress-50",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M17 12.5C17 14.9853 14.9853 17 12.5 17V8C14.9853 8 17 10.0147 17 12.5Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iI = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "progress-75",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.5 17C14.9853 17 17 14.9853 17 12.5C17 10.0147 14.9853 8 12.5 8V12.5H8C8 14.9853 10.0147 17 12.5 17Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iA = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "projects",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M21 17.5H14M17.5 14V21M5.5 14.5H10.5V19.5H5.5V14.5ZM14.5 5.5H19.5V10.5H14.5V5.5ZM5.5 5.5H10.5V10.5H5.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iW = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "publish",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M4.99997 5.50006H20M12.5 9.00005V20",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M7.5 14L12.5 9.00006L17.5 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iz = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "read-only",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M15 7L18 10M10 12L7 15L6 19L10 18L13 15M12 10L17 5L20 8L15 13M19 19L5 5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iO = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "redo",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M19 9.5L10 9.5C7.51472 9.5 5.5 11.5147 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5H19",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M15 13.5L19 9.5L15 5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      i_ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "refresh",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M19.5 13.5C19.5 17.366 16.366 20.5 12.5 20.5C8.63401 20.5 5.5 17.366 5.5 13.5C5.5 9.63401 8.63401 6.5 12.5 6.5H15.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 10.5L15.5 6.5L11.5 2.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iZ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "remove-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8 12.4H17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iD = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "remove",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5 12.5H20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iN = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "reset",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M7 11L4.56189 13.5L2 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M9.50001 15.5L15.5 9.5M9.5 9.5L15.5 15.5M4.56189 13.5C4.52104 13.1724 4.5 12.8387 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C9.75033 20.5 7.32466 19.1128 5.88468 17",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iF = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "restore",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M5.88468 17C7.32466 19.1128 9.75033 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5V13.5M12.5 8V12.5L15.5 15.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M7 11L4.5 13.5L2 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iU = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "retrieve",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M16 14L12.5 10.5L9 14M5.5 7.5H19.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M12.5 10.5L12.5 17.5M19.5 7.5V19.5H5.5V7.5L7.5 5.5H17.5L19.5 7.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iG = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "retry",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M19 9.5L10 9.5C7.51472 9.5 5.5 11.5147 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5H19",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M15 13.5L19 9.5L15 5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iY = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "revert",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M6 9.5L15 9.5C17.4853 9.5 19.5 11.5147 19.5 14C19.5 16.4853 17.4853 18.5 15 18.5H6",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M10 13.5L6 9.5L10 5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      iX = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "robot",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 15.5V17.5M12.5 8.5V6.5M12.5 6.5C13.3284 6.5 14 5.82843 14 5C14 4.17157 13.3284 3.5 12.5 3.5C11.6716 3.5 11 4.17157 11 5C11 5.82843 11.6716 6.5 12.5 6.5ZM20.5 20.5V19.5C20.5 18.3954 19.6046 17.5 18.5 17.5H6.5C5.39543 17.5 4.5 18.3954 4.5 19.5V20.5H20.5ZM11.5 12C11.5 12.5523 11.0523 13 10.5 13C9.94772 13 9.5 12.5523 9.5 12C9.5 11.4477 9.94772 11 10.5 11C11.0523 11 11.5 11.4477 11.5 12ZM15.5 12C15.5 12.5523 15.0523 13 14.5 13C13.9477 13 13.5 12.5523 13.5 12C13.5 11.4477 13.9477 11 14.5 11C15.0523 11 15.5 11.4477 15.5 12ZM8.5 15.5H16.5C17.6046 15.5 18.5 14.6046 18.5 13.5V10.5C18.5 9.39543 17.6046 8.5 16.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5V13.5C6.5 14.6046 7.39543 15.5 8.5 15.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iq = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "rocket",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 20.5L15.5 14M11 9.49999L4.5 12.5M9 14C9 14 7.54688 14.9531 6.5 16C5.5 17 4.5 20.5 4.5 20.5C4.5 20.5 8 19.5 9 18.5C10 17.5 11 16 11 16M9 14C9 14 10.1 9.9 12.5 7.5C15.5 4.5 20.5 4.5 20.5 4.5C20.5 4.5 20.5 9.5 17.5 12.5C15.7492 14.2508 11 16 11 16L9 14ZM16.5 9.99999C16.5 10.8284 15.8284 11.5 15 11.5C14.1716 11.5 13.5 10.8284 13.5 9.99999C13.5 9.17157 14.1716 8.49999 15 8.49999C15.8284 8.49999 16.5 9.17157 16.5 9.99999Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iK = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "schema",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 9.5V12.5M12.5 12.5H8.5V15.5M12.5 12.5H16.5V15.5M10.5 5.5H14.5V9.5H10.5V5.5ZM6.5 15.5H10.5V19.5H6.5V15.5ZM14.5 15.5H18.5V19.5H14.5V15.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iJ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "search",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M15.0355 15.0355L20 20M16.5 11.5C16.5 14.2614 14.2614 16.5 11.5 16.5C8.73858 16.5 6.5 14.2614 6.5 11.5C6.5 8.73858 8.73858 6.5 11.5 6.5C14.2614 6.5 16.5 8.73858 16.5 11.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      iQ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "select",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M16 15L12.5 18.5L9 15M9 10L12.5 6.5L16 10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      i1 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "share",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M15 10.5H18.5V19.5H6.5L6.5 10.5H10M12.5 16V3.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M9 7L12.5 3.5L16 7",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      i0 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "sort",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8.5 18.5V6M16.5 19V6.5M12 15L8.5 18.5L5 15M13 10L16.5 6.5L20 10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      i5 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "sparkle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 10.5C8.5 12.5 5 12.5 5 12.5C5 12.5 8.5 12.5 10.5 14.5C12.5 16.5 12.5 20 12.5 20C12.5 20 12.5 16.5 14.5 14.5C16.5 12.5 20 12.5 20 12.5C20 12.5 16.5 12.5 14.5 10.5C12.5 8.5 12.5 5 12.5 5C12.5 5 12.5 8.5 10.5 10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      i2 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "sparkles",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M11 3.5V5M11 5V6.5M11 5H12.5M11 5H9.5M9.5 15C9.5 15 12.2308 14.7692 13.5 13.5C14.7692 12.2308 15 9.5 15 9.5C15 9.5 15.2308 12.2308 16.5 13.5C17.7692 14.7692 20.5 15 20.5 15C20.5 15 17.7692 15.2308 16.5 16.5C15.2308 17.7692 15 20.5 15 20.5C15 20.5 14.7692 17.7692 13.5 16.5C12.2308 15.2308 9.5 15 9.5 15ZM4.5 10C4.5 10 5.72308 9.87692 6.3 9.3C6.87692 8.72308 7 7.5 7 7.5C7 7.5 7.12308 8.72308 7.7 9.3C8.27692 9.87692 9.5 10 9.5 10C9.5 10 8.27692 10.1231 7.7 10.7C7.12308 11.2769 7 12.5 7 12.5C7 12.5 6.87692 11.2769 6.3 10.7C5.72308 10.1231 4.5 10 4.5 10Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }),
      i6 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "spinner",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      i4 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "split-horizontal",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M19.5 10.5V20.5H5.5V10.5M19.5 10.5H5.5M19.5 10.5V4.5H5.5V10.5M12.5 13V15.5M12.5 18V15.5M12.5 15.5H15M12.5 15.5H10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      i8 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "split-vertical",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 5.5V19.5M13 12.5H15.5M18 12.5H15.5M15.5 12.5V15M15.5 12.5V10M4.5 5.5H20.5V19.5H4.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      i9 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "square",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("rect", {
            x: 5.5,
            y: 5.5,
            width: 14,
            height: 14,
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      i3 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "stack-compact",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5.5 15.5V18.5H19.5V15.5M5.5 15.5H19.5M5.5 15.5V9.5M19.5 15.5V9.5M5.5 9.5V6.5H19.5V9.5M5.5 9.5H19.5M5.5 12.5H19.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      i7 = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "stack",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5.5 12.5H19.5M5.5 18.5H19.5V6.5H5.5V18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      se = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "star-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 5L14.3956 9.89092L19.6329 10.1824L15.5672 13.4966L16.9084 18.5676L12.5 15.725L8.09161 18.5676L9.43284 13.4966L5.36708 10.1824L10.6044 9.89092L12.5 5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeLinejoin: "round",
          }),
        });
      }),
      st = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "star",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 5L14.3956 9.89092L19.6329 10.1824L15.5672 13.4966L16.9084 18.5676L12.5 15.725L8.09161 18.5676L9.43284 13.4966L5.36708 10.1824L10.6044 9.89092L12.5 5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sr = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "stop",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("rect", {
            x: 7.5,
            y: 7.5,
            width: 10,
            height: 10,
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sn = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "strikethrough",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.5656 7.73438C11.0656 7.73438 10.0734 8.48438 10.0734 9.625C10.0734 10.2317 10.3649 10.6613 11.0519 11H8.90358C8.71703 10.6199 8.62813 10.1801 8.62813 9.67188C8.62813 7.75781 10.2297 6.46094 12.6125 6.46094C14.7922 6.46094 16.4172 7.75781 16.5344 9.57812H15.1203C14.925 8.42188 13.9719 7.73438 12.5656 7.73438Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M12.4875 18.2656C10.0969 18.2656 8.44844 17 8.3 15.0547H9.72188C9.89375 16.2344 11.0188 16.9844 12.6203 16.9844C14.1359 16.9844 15.2531 16.1641 15.2531 15.0469C15.2531 14.6375 15.1255 14.292 14.8589 14H16.5912C16.6638 14.266 16.6984 14.5566 16.6984 14.875C16.6984 16.9453 15.0656 18.2656 12.4875 18.2656Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", { d: "M7 13.1H18V11.9H7V13.1Z", fill: "currentColor" }),
          ],
        });
      }),
      so = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "string",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M11.6748 15.5227H13.1855L9.87842 6.36304H8.34863L5.0415 15.5227H6.50146L7.3457 13.0916H10.8369L11.6748 15.5227ZM9.04053 8.02612H9.14844L10.4751 11.8982H7.70752L9.04053 8.02612Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              d: "M16.8101 14.488C16.0674 14.488 15.5278 14.1262 15.5278 13.5042C15.5278 12.8948 15.9595 12.571 16.9116 12.5076L18.6001 12.3997V12.9773C18.6001 13.8342 17.8384 14.488 16.8101 14.488ZM16.4609 15.637C17.3687 15.637 18.124 15.2434 18.5366 14.5515H18.6445V15.5227H19.9585V10.8C19.9585 9.34009 18.981 8.47681 17.248 8.47681C15.6802 8.47681 14.563 9.23853 14.4233 10.4255H15.7437C15.896 9.93677 16.4229 9.65747 17.1846 9.65747C18.1177 9.65747 18.6001 10.0701 18.6001 10.8V11.3967L16.7275 11.5046C15.0835 11.6062 14.1567 12.3235 14.1567 13.5676C14.1567 14.8308 15.1279 15.637 16.4609 15.637Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19.9585 18.637L5.0415 18.637V17.437L19.9585 17.437V18.637Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      si = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "sun",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M19 12.5H22M3 12.5H6M12.5 6V3M12.5 22V19M17.3891 7.61091L19.5104 5.48959M5.48959 19.5104L7.61091 17.3891M7.61091 7.61091L5.48959 5.48959M19.5104 19.5104L17.3891 17.3891M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ss = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "sync",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M13.5 4.5H12.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 15.6631 6.33576 18.3975 9 19.6958M11.5 20.5H12.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 9.33688 18.6642 6.60253 16 5.30423",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sa = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "tablet-device",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M5.5 5.5C5.5 4.94772 5.94772 4.5 6.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V19.5C19.5 20.0523 19.0523 20.5 18.5 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5V5.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M13 18C13 18.2761 12.7761 18.5 12.5 18.5C12.2239 18.5 12 18.2761 12 18C12 17.7239 12.2239 17.5 12.5 17.5C12.7761 17.5 13 17.7239 13 18Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sl = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "tag",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.5 20L5 20L5 12.5L12.5 5L20 12.5L12.5 20Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sd = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "tags",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.1562 7.93179L13.9717 6.11633L20.3553 12.5L13.9717 18.8836L10.6855 18.8836M11.0283 18.8836L17.4119 12.5L11.0283 6.11633L4.64462 12.5L4.64462 18.8836L11.0283 18.8836ZM9.75153 15.0534C9.75153 15.7585 9.17992 16.3302 8.47481 16.3302C7.76969 16.3302 7.19808 15.7585 7.19808 15.0534C7.19808 14.3483 7.76969 13.7767 8.47481 13.7767C9.17992 13.7767 9.75153 14.3483 9.75153 15.0534Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sc = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "target",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 3V10M22 12.5H15M12.5 22V15M3 12.5H10M19 12.5C19 16.0899 16.0899 19 12.5 19C8.91015 19 6 16.0899 6 12.5C6 8.91015 8.91015 6 12.5 6C16.0899 6 19 8.91015 19 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      su = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "task",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M20.5 10.75V19.75H4.5V10.75M20.5 10.75V5.75H17.5M20.5 10.75H4.5M4.5 10.75V5.75H7.5M7.5 5.75H17.5M7.5 5.75V8.25M7.5 5.75V3.25M17.5 5.75V8.25M17.5 5.75V3.25M9.7002 14.7358L11.7002 16.7358L15.3002 13.1758",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sh = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "terminal",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8.5 9.5L11.5 12.5L8.5 15.5M13 15.5H17M5.5 6.5H19.5V18.5H5.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sf = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "text",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M7.5 9V6.5H17.5V9M12.5 18.5V6.5M10 18.5H15",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sp = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "th-large",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 6.5V12.5M12.5 12.5V18.5M12.5 12.5H19.5M12.5 12.5H5.5M19.5 12.5V6.5H5.5V12.5M19.5 12.5V18.5H5.5V12.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sg = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "th-list",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 6.5V10.5M9.5 10.5V14.5M9.5 10.5H19.5M9.5 10.5H5.5M9.5 14.5V18.5M9.5 14.5H19.5M9.5 14.5H5.5M5.5 6.5H19.5V18.5H5.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sm = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "thumbs-down",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 15C9.5 15 12.5 16.5 12.5 18C12.5 19.5 13.5 19.5 13.5 19.5C13.5 19.5 14.5 19.5 14.5 18C14.5 16.5 14.5 15.5 14.5 15.5H18C18 15.5 18 15.5 18 15.5C18 15.5 19 15.5 19 14.5C19 13.5 19.5 14 19.5 13C19.5 12 19 11.5 19 10.5C19 9.5 18 9.5 18 8.5C18 7.5 17 7.5 16.5 7.5C16 7.5 9.5 7.5 9.5 7.5M9.5 7.5H6.5V15.5H9.5V7.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sw = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "thumbs-up",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 10C9.5 10 12.5 8.5 12.5 7C12.5 5.5 13.5 5.5 13.5 5.5C13.5 5.5 14.5 5.5 14.5 7C14.5 8.5 14.5 9.5 14.5 9.5H18C18 9.5 18 9.5 18 9.5C18 9.5 19 9.5 19 10.5C19 11.5 19.5 11 19.5 12C19.5 13 19 13.5 19 14.5C19 15.5 18 15.5 18 16.5C18 17.5 17 17.5 16.5 17.5C16 17.5 9.5 17.5 9.5 17.5M9.5 17.5H6.5V9.5H9.5V17.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sv = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "tiers",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M16.5 14.5L20.5 16.5L12.5 20.5L4.5 16.5L8.5 14.5M16.5 10.5L20.5 12.5L12.5 16.5L4.5 12.5L8.5 10.5M12.5 12.5L20.5 8.5L12.5 4.5L4.5 8.5L12.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sb = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "timeline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", { d: "M12.5 5V20", stroke: "currentColor", strokeWidth: 1.2 }),
            (0, e0.jsx)("path", {
              d: "M5 8.5H11M7 12.5H11M9 16.5H11M13 16.5H20M13 12.5H18M13 8.5H16",
              stroke: "currentColor",
              strokeWidth: 1.2,
            }),
          ],
        });
      }),
      sy = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "toggle-arrow-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M10.5 16V9L16 12.5L10.5 16Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeLinejoin: "round",
          }),
        });
      }),
      sx = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "token",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M17.5711 12.5C17.5711 15.2614 15.3325 17.5 12.5711 17.5M7.57107 12.5C7.57107 9.73858 9.80964 7.5 12.5711 7.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sC = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "transfer",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M19.5 16.5H6M5.5 8.5L19 8.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M16 13L19.5 16.5L16 20M9 12L5.5 8.5L9 5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sk = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "translate",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.4 5.4H4V6.6H13.2189C13.1612 6.78478 13.0895 6.99578 13.0025 7.22211C12.7032 8.00031 12.2402 8.91125 11.5757 9.57574L10 11.1515L9.42426 10.5757C8.72102 9.8725 8.25297 9.16987 7.96199 8.64611C7.81668 8.38455 7.71617 8.16874 7.65305 8.02146C7.62151 7.94787 7.59937 7.89154 7.5857 7.85534C7.57886 7.83725 7.57415 7.8242 7.57144 7.81657L7.56886 7.80922C7.56886 7.80922 7.56921 7.81026 7 8C6.43079 8.18974 6.43091 8.19009 6.43091 8.19009L6.43133 8.19135L6.43206 8.19351L6.4341 8.19948L6.44052 8.21786C6.44587 8.23292 6.45336 8.25357 6.46313 8.27942C6.48266 8.33112 6.5113 8.40369 6.55008 8.49416C6.62758 8.67501 6.74582 8.92795 6.91301 9.22889C7.24703 9.83013 7.77898 10.6275 8.57574 11.4243L9.15147 12L4.57964 16.5718L4.57655 16.5749L4.57577 16.5757L5.4243 17.4242L5.42688 17.4216L10.0368 12.8117L12.6159 14.9609L13.3841 14.0391L10.8888 11.9597L12.4243 10.4243C13.2598 9.58875 13.7968 8.49969 14.1225 7.65289C14.2818 7.23863 14.395 6.87072 14.4696 6.6H16V5.4H10.6V4H9.4V5.4ZM17.4405 10L21.553 19.7672H20.2509L19.1279 17.1H14.8721L13.7491 19.7672H12.447L16.5595 10H17.4405ZM15.3773 15.9H18.6227L17 12.0462L15.3773 15.9Z",
            fill: "currentColor",
          }),
        });
      }),
      sM = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "trash",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5 6.5H20M10 6.5V4.5C10 3.94772 10.4477 3.5 11 3.5H14C14.5523 3.5 15 3.94772 15 4.5V6.5M12.5 9V17M15.5 9L15 17M9.5 9L10 17M18.5 6.5L17.571 18.5767C17.5309 19.0977 17.0965 19.5 16.574 19.5H8.42603C7.90349 19.5 7.46905 19.0977 7.42898 18.5767L6.5 6.5H18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sj = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "trend-upward",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M4.5 18.5L11.5 10.5L13.5 14.5L20.5 6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M20.5 11V6.5H16",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sL = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "triangle-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M20.5 18.5H4.5L12.5 5.5L20.5 18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sS = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "trolley",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8 17.5L5.81763 6.26772C5.71013 5.81757 5.30779 5.5 4.84498 5.5H3M8 17.5H17M8 17.5C8.82843 17.5 9.5 18.1716 9.5 19C9.5 19.8284 8.82843 20.5 8 20.5C7.17157 20.5 6.5 19.8284 6.5 19C6.5 18.1716 7.17157 17.5 8 17.5ZM17 17.5C17.8284 17.5 18.5 18.1716 18.5 19C18.5 19.8284 17.8284 20.5 17 20.5C16.1716 20.5 15.5 19.8284 15.5 19C15.5 18.1716 16.1716 17.5 17 17.5ZM7.78357 14.5H17.5L19 7.5H6",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sV = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "truncate",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M5 12.5H20M8.5 19.5L12.5 15.5L16.5 19.5M16.5 5.5L12.5 9.5L8.5 5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sR = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "twitter",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M18.8738 6.65751C18.1994 5.9447 17.2445 5.5 16.1857 5.5C14.1423 5.5 12.4857 7.15655 12.4857 9.2C12.4857 9.55263 12.535 9.89374 12.6272 10.2168C7.0826 9.56422 4.55703 6.02857 4.55703 6.02857C4.55703 6.02857 4.02846 9.2 6.14274 11.3143C5.08571 11.3143 4.55703 10.7857 4.55703 10.7857C4.55703 10.7857 4.55703 13.4286 7.19989 14.4857C6.67143 15.0143 5.61417 14.4857 5.61417 14.4857C5.97533 15.9303 7.45606 16.8562 8.82133 17.1358C6.67298 19.1676 3.5 18.7143 3.5 18.7143C5.14562 19.771 7.21334 20.3 9.31429 20.3C16.1214 20.3 19.8162 15.6315 19.8848 9.37762C20.8722 8.58943 22 7.08571 22 7.08571C22 7.08571 21.277 7.45458 19.6913 7.98315C21.277 6.92601 21.4714 5.5 21.4714 5.5C21.4714 5.5 20.4135 6.55789 18.8738 6.65751Z",
            fill: "currentColor",
          }),
        });
      }),
      sH = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "ulist",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M7.10153 17.5C7.10153 17.8322 6.83221 18.1016 6.5 18.1016C6.16778 18.1016 5.89847 17.8322 5.89847 17.5C5.89847 17.1678 6.16778 16.8985 6.5 16.8985C6.83221 16.8985 7.10153 17.1678 7.10153 17.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M7.10153 7.49997C7.10153 7.83218 6.83221 8.1015 6.5 8.1015C6.16778 8.1015 5.89847 7.83218 5.89847 7.49997C5.89847 7.16775 6.16778 6.89844 6.5 6.89844C6.83221 6.89844 7.10153 7.16775 7.10153 7.49997Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M7.10153 12.5C7.10153 12.8322 6.83221 13.1015 6.5 13.1015C6.16778 13.1015 5.89847 12.8322 5.89847 12.5C5.89847 12.1678 6.16778 11.8984 6.5 11.8984C6.83221 11.8984 7.10153 12.1678 7.10153 12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M10 7.5H19M10 17.5H19M10 12.5H19",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      s$ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "unarchive",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.5 10.5V18M20.5 7.5V20.5H4.5V7.5L7.5 4.5H17.5L20.5 7.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M4.5 7.5H20.5M16 14L12.5 10.5L9 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sT = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "underline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M9.52791 7.11407H8.17V14.2582C8.17 16.5817 9.79195 18.2565 12.4927 18.2565C15.1934 18.2565 16.8154 16.5817 16.8154 14.2582V7.11407H15.4574V14.1677C15.4574 15.8122 14.3787 17.0042 12.4927 17.0042C10.6067 17.0042 9.52791 15.8122 9.52791 14.1677V7.11407Z",
              fill: "currentColor",
            }),
            (0, e0.jsx)("path", { d: "M7 20.5H18", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
          ],
        });
      }),
      sE = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "undo",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M6 9.5L15 9.5C17.4853 9.5 19.5 11.5147 19.5 14C19.5 16.4853 17.4853 18.5 15 18.5H6",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M10 13.5L6 9.5L10 5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sB = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "unknown",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M5.5 5.5H19.5V19.5H5.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sP = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "unlink",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M15 13.5L17.5 11C18.281 10.219 18.281 8.78105 17.5 8L17 7.5C16.2189 6.71895 14.781 6.71895 14 7.5L11.5 10M10 11.5L7.5 14C6.71896 14.781 6.71895 16.219 7.5 17L8 17.5C8.78105 18.281 10.2189 18.281 11 17.5L13.5 15M9.5 8V5M8 9.5H5M17 15.5H20M15.5 17V20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sI = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "unlock",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M9.5 11.5V8.5C9.5 6.5 8 5.5 6.5 5.5C5 5.5 3.5 6.5 3.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sA = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "unpublish",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M5 19.5H20M12.5 16V5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M17.5 11L12.5 16L7.5 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sW = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "upload",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M12.5 6V15.5M5.5 15.5H19.5V19.5H5.5V15.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M7.5 11L12.5 6L17.5 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sz = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "user",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M8 14.5C7 15 5.5 16 5.5 19.5H19.5C19.5 16 18.3416 15.1708 17 14.5C16 14 14 14 14 12.5C14 11 15 10.25 15 8.25C15 6.25 14 5.25 12.5 5.25C11 5.25 10 6.25 10 8.25C10 10.25 11 11 11 12.5C11 14 9 14 8 14.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sO = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "users",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M17.5 18.5H21.5C21.5 15 20.8416 14.1708 19.5 13.5C18.5 13 16.5 12.5 16.5 11C16.5 9.5 17.5 9 17.5 7C17.5 5 16.5 4 15 4C13.6628 4 12.723 4.79472 12.5347 6.38415M4.5 20.5C4.5 17 5.5 16 6.5 15.5C7.5 15 9.5 14.5 9.5 13C9.5 11.5 8.5 11 8.5 9C8.5 7 9.5 6 11 6C12.5 6 13.5 7 13.5 9C13.5 11 12.5 11.5 12.5 13C12.5 14.5 14.5 15 15.5 15.5C16.8416 16.1708 17.5 17 17.5 20.5H4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      s_ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "versions",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M10.5 7.5H7.5V17.5H10.5M7.5 9.5H4.5V15.5H7.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M20.5 19.5V5.5H10.5V19.5H20.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sZ = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsxs)("svg", {
          "data-sanity-icon": "video",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: [
            (0, e0.jsx)("path", {
              d: "M19.5 18.5H5.5V6.5H19.5V18.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, e0.jsx)("path", {
              d: "M11.5 14.5V10.5L14.5 12.5L11.5 14.5Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      sD = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "warning-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.741 5.12635C13.7357 3.41736 11.2643 3.41736 10.259 5.12635L3.7558 16.1817C2.73624 17.915 3.98595 20.1 5.99683 20.1H19.0032C21.014 20.1 22.2637 17.915 21.2442 16.1817L14.741 5.12635ZM11.9 8.99998V13H13.1V8.99998H11.9ZM13.1 16V14.5H11.9V16H13.1Z",
            fill: "currentColor",
          }),
        });
      }),
      sN = (0, e2.forwardRef)(function (e, t) {
        return (0, e0.jsx)("svg", {
          "data-sanity-icon": "warning-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          ref: t,
          children: (0, e0.jsx)("path", {
            d: "M12.5 9V13M12.5 16V14.5M14.2239 5.43058L20.727 16.486C21.5113 17.8192 20.55 19.5 19.0032 19.5H5.99683C4.45 19.5 3.48869 17.8192 4.27297 16.486L10.7761 5.43058C11.5494 4.11596 13.4506 4.11596 14.2239 5.43058Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      sF = {
        "access-denied": nt,
        activity: nr,
        "add-circle": nn,
        "add-comment": no,
        "add-document": ni,
        add: ns,
        "add-user": na,
        api: nl,
        archive: nd,
        "arrow-down": nc,
        "arrow-left": nu,
        "arrow-right": nh,
        "arrow-top-right": nf,
        "arrow-up": np,
        asterisk: ng,
        "bar-chart": nm,
        basket: nw,
        bell: nv,
        bill: nb,
        "binary-document": ny,
        "block-content": nx,
        "block-element": nC,
        blockquote: nk,
        bold: nM,
        bolt: nj,
        book: nL,
        "bookmark-filled": nS,
        bookmark: nV,
        bottle: nR,
        bug: nH,
        "bulb-filled": n$,
        "bulb-outline": nT,
        calendar: nE,
        case: nB,
        "chart-upward": nP,
        "checkmark-circle": nI,
        checkmark: nA,
        "chevron-down": nW,
        "chevron-left": nz,
        "chevron-right": nO,
        "chevron-up": n_,
        circle: nZ,
        clipboard: nD,
        "clipboard-image": nN,
        clock: nF,
        "close-circle": nU,
        close: nG,
        "code-block": nY,
        code: nX,
        cog: nq,
        collapse: nK,
        "color-wheel": nJ,
        comment: nQ,
        component: n1,
        compose: n0,
        "compose-sparkles": n5,
        confetti: n2,
        controls: n6,
        copy: n4,
        "credit-card": n8,
        crop: n9,
        cube: n3,
        dashboard: n7,
        database: oe,
        desktop: ot,
        diamond: or,
        document: on,
        "document-pdf": oo,
        "document-remove": oi,
        "document-sheet": os,
        "document-text": ol,
        "document-video": od,
        "document-word": oc,
        "document-zip": ou,
        documents: oa,
        dot: oh,
        "double-chevron-down": of,
        "double-chevron-left": op,
        "double-chevron-right": og,
        "double-chevron-up": om,
        download: ow,
        "drag-handle": ov,
        drop: ob,
        "earth-americas": oy,
        "earth-globe": ox,
        edit: oC,
        "ellipsis-horizontal": ok,
        "ellipsis-vertical": oM,
        empty: oj,
        enter: oL,
        "enter-right": oS,
        envelope: oV,
        equal: oR,
        "error-filled": oH,
        "error-outline": o$,
        "error-screen": oT,
        expand: oE,
        "eye-closed": oB,
        "eye-open": oP,
        "face-happy": oI,
        "face-indifferent": oA,
        "face-sad": oW,
        feedback: oz,
        filter: oO,
        folder: o_,
        generate: oZ,
        github: oD,
        groq: oN,
        hash: oF,
        "heart-filled": oU,
        heart: oG,
        "help-circle": oY,
        highlight: oX,
        home: oq,
        "ice-cream": oK,
        image: oJ,
        "image-remove": oQ,
        images: o1,
        inbox: o0,
        "info-filled": o5,
        "info-outline": o2,
        "inline-element": o6,
        inline: o4,
        "insert-above": o8,
        "insert-below": o9,
        italic: o3,
        joystick: o7,
        json: ie,
        launch: it,
        leave: ir,
        lemon: io,
        link: is,
        "link-removed": ia,
        linkedin: ii,
        list: il,
        lock: id,
        "logo-js": ic,
        "logo-ts": iu,
        marker: ih,
        "marker-removed": ip,
        "master-detail": ig,
        menu: im,
        microphone: iw,
        "microphone-slash": iv,
        "mobile-device": ib,
        moon: iy,
        number: ix,
        "ok-hand": iC,
        olist: ik,
        overage: iM,
        package: ij,
        "panel-left": iL,
        "panel-right": iS,
        pause: iV,
        "pin-filled": iR,
        pin: iH,
        "pin-removed": i$,
        play: iT,
        plug: iE,
        presentation: iB,
        "progress-50": iP,
        "progress-75": iI,
        projects: iA,
        publish: iW,
        "read-only": iz,
        redo: iO,
        refresh: i_,
        "remove-circle": iZ,
        remove: iD,
        reset: iN,
        restore: iF,
        retrieve: iU,
        retry: iG,
        revert: iY,
        robot: iX,
        rocket: iq,
        schema: iK,
        search: iJ,
        select: iQ,
        share: i1,
        sort: i0,
        sparkle: i5,
        sparkles: i2,
        spinner: i6,
        "split-horizontal": i4,
        "split-vertical": i8,
        square: i9,
        "stack-compact": i3,
        stack: i7,
        "star-filled": se,
        star: st,
        stop: sr,
        strikethrough: sn,
        string: so,
        sun: si,
        sync: ss,
        "tablet-device": sa,
        tag: sl,
        tags: sd,
        target: sc,
        task: su,
        terminal: sh,
        text: sf,
        "th-large": sp,
        "th-list": sg,
        "thumbs-down": sm,
        "thumbs-up": sw,
        tiers: sv,
        timeline: sb,
        "toggle-arrow-right": sy,
        token: sx,
        transfer: sC,
        translate: sk,
        trash: sM,
        "trend-upward": sj,
        "triangle-outline": sL,
        trolley: sS,
        truncate: sV,
        twitter: sR,
        ulist: sH,
        unarchive: s$,
        underline: sT,
        undo: sE,
        unknown: sB,
        unlink: sP,
        unlock: sI,
        unpublish: sA,
        upload: sW,
        user: sz,
        users: sO,
        versions: s_,
        video: sZ,
        "warning-filled": sD,
        "warning-outline": sN,
        wrench: (0, e2.forwardRef)(function (e, t) {
          return (0, e0.jsx)("svg", {
            "data-sanity-icon": "wrench",
            width: "1em",
            height: "1em",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            ref: t,
            children: (0, e0.jsx)("path", {
              d: "M17.0407 5.14624L17.4649 5.57051C17.6166 5.41887 17.6758 5.19783 17.6202 4.99071C17.5646 4.78359 17.4027 4.62189 17.1955 4.56656L17.0407 5.14624ZM14.4013 7.7856L13.9771 7.36134C13.8288 7.50959 13.7687 7.72447 13.8185 7.92813L14.4013 7.7856ZM12.8778 6.26211L12.4535 5.83784L12.8778 6.26211ZM11.8309 10.6568L12.2552 11.0811C12.4152 10.9211 12.4716 10.6847 12.401 10.4697L11.8309 10.6568ZM5.63925 16.8485L5.21498 16.4242H5.21498L5.63925 16.8485ZM5.63925 19.935L6.06351 19.5108H6.06351L5.63925 19.935ZM8.72581 19.935L9.15007 20.3593L8.72581 19.935ZM15.1184 13.5425L15.2301 12.953C15.0351 12.916 14.8344 12.9779 14.6941 13.1182L15.1184 13.5425ZM18.9718 12.3561L18.5475 11.9318L18.9718 12.3561ZM20.0877 8.19324L20.6674 8.03843C20.612 7.83124 20.4503 7.66934 20.2432 7.61375C20.0361 7.55816 19.815 7.61734 19.6634 7.76898L20.0877 8.19324ZM17.4483 10.8326L17.3058 11.4154C17.5094 11.4652 17.7243 11.4051 17.8726 11.2569L17.4483 10.8326ZM15 10.2339L14.4172 10.3764C14.4704 10.5938 14.6401 10.7635 14.8575 10.8167L15 10.2339ZM16.6164 4.72198L13.9771 7.36134L14.8256 8.20986L17.4649 5.57051L16.6164 4.72198ZM13.3021 6.68637C14.2723 5.71612 15.6467 5.39501 16.8859 5.72593L17.1955 4.56656C15.5595 4.12966 13.7389 4.55245 12.4535 5.83784L13.3021 6.68637ZM12.401 10.4697C11.9779 9.18109 12.2794 7.70907 13.3021 6.68637L12.4535 5.83784C11.0986 7.19284 10.7021 9.14217 11.2608 10.844L12.401 10.4697ZM11.4066 10.2326L5.21498 16.4242L6.06351 17.2727L12.2552 11.0811L11.4066 10.2326ZM5.21498 16.4242C4.12834 17.5109 4.12834 19.2727 5.21498 20.3593L6.06351 19.5108C5.4455 18.8928 5.4455 17.8908 6.06351 17.2727L5.21498 16.4242ZM5.21498 20.3593C6.30163 21.446 8.06343 21.446 9.15007 20.3593L8.30155 19.5108C7.68353 20.1288 6.68153 20.1288 6.06351 19.5108L5.21498 20.3593ZM9.15007 20.3593L15.5426 13.9668L14.6941 13.1182L8.30155 19.5108L9.15007 20.3593ZM18.5475 11.9318C17.6463 12.8331 16.3968 13.1742 15.2301 12.953L15.0066 14.132C16.5466 14.4239 18.2023 13.9741 19.3961 12.7804L18.5475 11.9318ZM19.508 8.34804C19.8389 9.58721 19.5178 10.9616 18.5475 11.9318L19.3961 12.7804C20.6815 11.495 21.1043 9.67445 20.6674 8.03843L19.508 8.34804ZM17.8726 11.2569L20.5119 8.6175L19.6634 7.76898L17.024 10.4083L17.8726 11.2569ZM14.8575 10.8167L17.3058 11.4154L17.5908 10.2498L15.1426 9.65106L14.8575 10.8167ZM13.8185 7.92813L14.4172 10.3764L15.5829 10.0914L14.9841 7.64307L13.8185 7.92813Z",
              fill: "currentColor",
            }),
          });
        }),
      },
      sU = (0, e2.forwardRef)(function (e, t) {
        let { symbol: r, ...n } = e,
          o = sF[r];
        return o ? (0, e0.jsx)(o, { ...n, ref: t }) : null;
      });
    e.s(
      [
        "AccessDeniedIcon",
        () => nt,
        "AddCircleIcon",
        () => nn,
        "AddCommentIcon",
        () => no,
        "AddDocumentIcon",
        () => ni,
        "AddIcon",
        () => ns,
        "AddUserIcon",
        () => na,
        "ArchiveIcon",
        () => nd,
        "ArrowDownIcon",
        () => nc,
        "ArrowLeftIcon",
        () => nu,
        "ArrowRightIcon",
        () => nh,
        "ArrowUpIcon",
        () => np,
        "BinaryDocumentIcon",
        () => ny,
        "BlockContentIcon",
        () => nx,
        "BlockElementIcon",
        () => nC,
        "BoldIcon",
        () => nM,
        "BoltIcon",
        () => nj,
        "BulbOutlineIcon",
        () => nT,
        "CalendarIcon",
        () => nE,
        "CheckmarkCircleIcon",
        () => nI,
        "CheckmarkIcon",
        () => nA,
        "ChevronDownIcon",
        () => nW,
        "ChevronLeftIcon",
        () => nz,
        "ChevronRightIcon",
        () => nO,
        "ChevronUpIcon",
        () => n_,
        "CircleIcon",
        () => nZ,
        "ClipboardIcon",
        () => nD,
        "ClockIcon",
        () => nF,
        "CloseCircleIcon",
        () => nU,
        "CloseIcon",
        () => nG,
        "CodeIcon",
        () => nX,
        "CogIcon",
        () => nq,
        "CollapseIcon",
        () => nK,
        "CommentIcon",
        () => nQ,
        "ComposeSparklesIcon",
        () => n5,
        "ControlsIcon",
        () => n6,
        "CopyIcon",
        () => n4,
        "CropIcon",
        () => n9,
        "DesktopIcon",
        () => ot,
        "DocumentIcon",
        () => on,
        "DocumentsIcon",
        () => oa,
        "DotIcon",
        () => oh,
        "DoubleChevronRightIcon",
        () => og,
        "DownloadIcon",
        () => ow,
        "DragHandleIcon",
        () => ov,
        "EarthAmericasIcon",
        () => oy,
        "EarthGlobeIcon",
        () => ox,
        "EditIcon",
        () => oC,
        "EllipsisHorizontalIcon",
        () => ok,
        "ErrorOutlineIcon",
        () => o$,
        "ExpandIcon",
        () => oE,
        "EyeClosedIcon",
        () => oB,
        "EyeOpenIcon",
        () => oP,
        "GithubIcon",
        () => oD,
        "HelpCircleIcon",
        () => oY,
        "Icon",
        () => sU,
        "ImageIcon",
        () => oJ,
        "InfoOutlineIcon",
        () => o2,
        "InlineElementIcon",
        () => o6,
        "InsertAboveIcon",
        () => o8,
        "InsertBelowIcon",
        () => o9,
        "ItalicIcon",
        () => o3,
        "LaunchIcon",
        () => it,
        "LeaveIcon",
        () => ir,
        "LinkIcon",
        () => is,
        "LinkRemovedIcon",
        () => ia,
        "LockIcon",
        () => id,
        "MenuIcon",
        () => im,
        "MoonIcon",
        () => iy,
        "NumberIcon",
        () => ix,
        "OlistIcon",
        () => ik,
        "PanelLeftIcon",
        () => iL,
        "PinFilledIcon",
        () => iR,
        "PinIcon",
        () => iH,
        "PublishIcon",
        () => iW,
        "ReadOnlyIcon",
        () => iz,
        "RefreshIcon",
        () => i_,
        "RemoveIcon",
        () => iD,
        "ResetIcon",
        () => iN,
        "RestoreIcon",
        () => iF,
        "RevertIcon",
        () => iY,
        "SearchIcon",
        () => iJ,
        "SelectIcon",
        () => iQ,
        "SortIcon",
        () => i0,
        "SpinnerIcon",
        () => i6,
        "StackCompactIcon",
        () => i3,
        "StrikethroughIcon",
        () => sn,
        "StringIcon",
        () => so,
        "SunIcon",
        () => si,
        "SyncIcon",
        () => ss,
        "TaskIcon",
        () => su,
        "ThLargeIcon",
        () => sp,
        "TimelineIcon",
        () => sb,
        "ToggleArrowRightIcon",
        () => sy,
        "TrashIcon",
        () => sM,
        "UlistIcon",
        () => sH,
        "UnarchiveIcon",
        () => s$,
        "UnderlineIcon",
        () => sT,
        "UndoIcon",
        () => sE,
        "UnknownIcon",
        () => sB,
        "UnlinkIcon",
        () => sP,
        "UnlockIcon",
        () => sI,
        "UnpublishIcon",
        () => sA,
        "UploadIcon",
        () => sW,
        "UserIcon",
        () => sz,
        "UsersIcon",
        () => sO,
        "WarningOutlineIcon",
        () => sN,
      ],
      236431,
    );
    var sG = e.i(409739),
      sY = e.i(391778);
    let sX = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ],
      sq = new Set(sX),
      sK = (e, t, r) => (r > t ? t : r < e ? e : r),
      sJ = { test: (e) => "number" == typeof e, parse: parseFloat, transform: (e) => e },
      sQ = { ...sJ, transform: (e) => sK(0, 1, e) },
      s1 = { ...sJ, default: 1 },
      s0 = (e) => Math.round(1e5 * e) / 1e5,
      s5 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
      s2 =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
      s6 = (e, t) => (r) =>
        !!(
          ("string" == typeof r && s2.test(r) && r.startsWith(e)) ||
          (t && null != r && Object.prototype.hasOwnProperty.call(r, t))
        ),
      s4 = (e, t, r) => (n) => {
        if ("string" != typeof n) return n;
        let [o, i, s, a] = n.match(s5);
        return { [e]: parseFloat(o), [t]: parseFloat(i), [r]: parseFloat(s), alpha: void 0 !== a ? parseFloat(a) : 1 };
      },
      s8 = { ...sJ, transform: (e) => Math.round(sK(0, 255, e)) },
      s9 = {
        test: s6("rgb", "red"),
        parse: s4("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
          "rgba(" +
          s8.transform(e) +
          ", " +
          s8.transform(t) +
          ", " +
          s8.transform(r) +
          ", " +
          s0(sQ.transform(n)) +
          ")",
      },
      s3 = {
        test: s6("#"),
        parse: function (e) {
          let t = "",
            r = "",
            n = "",
            o = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)), (r = e.substring(3, 5)), (n = e.substring(5, 7)), (o = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (r = e.substring(2, 3)),
                (n = e.substring(3, 4)),
                (o = e.substring(4, 5)),
                (t += t),
                (r += r),
                (n += n),
                (o += o)),
            {
              red: parseInt(t, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1,
            }
          );
        },
        transform: s9.transform,
      },
      s7 = (e) => ({
        test: (t) => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      }),
      ae = s7("deg"),
      at = s7("%"),
      ar = s7("px"),
      an = s7("vh"),
      ao = s7("vw"),
      ai = { ...at, parse: (e) => at.parse(e) / 100, transform: (e) => at.transform(100 * e) },
      as = {
        test: s6("hsl", "hue"),
        parse: s4("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          at.transform(s0(t)) +
          ", " +
          at.transform(s0(r)) +
          ", " +
          s0(sQ.transform(n)) +
          ")",
      },
      aa = {
        test: (e) => s9.test(e) || s3.test(e) || as.test(e),
        parse: (e) => (s9.test(e) ? s9.parse(e) : as.test(e) ? as.parse(e) : s3.parse(e)),
        transform: (e) => ("string" == typeof e ? e : e.hasOwnProperty("red") ? s9.transform(e) : as.transform(e)),
        getAnimatableNone: (e) => {
          let t = aa.parse(e);
          return ((t.alpha = 0), aa.transform(t));
        },
      },
      al =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
      ad = "number",
      ac = "color",
      au =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function ah(e) {
      let t = e.toString(),
        r = [],
        n = { color: [], number: [], var: [] },
        o = [],
        i = 0,
        s = t
          .replace(
            au,
            (e) => (
              aa.test(e)
                ? (n.color.push(i), o.push(ac), r.push(aa.parse(e)))
                : e.startsWith("var(")
                  ? (n.var.push(i), o.push("var"), r.push(e))
                  : (n.number.push(i), o.push(ad), r.push(parseFloat(e))),
              ++i,
              "${}"
            ),
          )
          .split("${}");
      return { values: r, split: s, indexes: n, types: o };
    }
    function af(e) {
      return ah(e).values;
    }
    function ap(e) {
      let { split: t, types: r } = ah(e),
        n = t.length;
      return (e) => {
        let o = "";
        for (let i = 0; i < n; i++)
          if (((o += t[i]), void 0 !== e[i])) {
            let t = r[i];
            t === ad ? (o += s0(e[i])) : t === ac ? (o += aa.transform(e[i])) : (o += e[i]);
          }
        return o;
      };
    }
    let ag = (e) => ("number" == typeof e ? 0 : aa.test(e) ? aa.getAnimatableNone(e) : e),
      am = {
        test: function (e) {
          return isNaN(e) && "string" == typeof e && (e.match(s5)?.length || 0) + (e.match(al)?.length || 0) > 0;
        },
        parse: af,
        createTransformer: ap,
        getAnimatableNone: function (e) {
          let t = af(e);
          return ap(e)(t.map(ag));
        },
      },
      aw = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function av(e) {
      let [t, r] = e.slice(0, -1).split("(");
      if ("drop-shadow" === t) return e;
      let [n] = r.match(s5) || [];
      if (!n) return e;
      let o = r.replace(n, ""),
        i = +!!aw.has(t);
      return (n !== r && (i *= 100), t + "(" + i + o + ")");
    }
    let ab = /\b([a-z-]*)\(.*?\)/gu,
      ay = {
        ...am,
        getAnimatableNone: (e) => {
          let t = e.match(ab);
          return t ? t.map(av).join(" ") : e;
        },
      },
      ax = { ...sJ, transform: Math.round },
      aC = {
        borderWidth: ar,
        borderTopWidth: ar,
        borderRightWidth: ar,
        borderBottomWidth: ar,
        borderLeftWidth: ar,
        borderRadius: ar,
        borderTopLeftRadius: ar,
        borderTopRightRadius: ar,
        borderBottomRightRadius: ar,
        borderBottomLeftRadius: ar,
        width: ar,
        maxWidth: ar,
        height: ar,
        maxHeight: ar,
        top: ar,
        right: ar,
        bottom: ar,
        left: ar,
        inset: ar,
        insetBlock: ar,
        insetBlockStart: ar,
        insetBlockEnd: ar,
        insetInline: ar,
        insetInlineStart: ar,
        insetInlineEnd: ar,
        padding: ar,
        paddingTop: ar,
        paddingRight: ar,
        paddingBottom: ar,
        paddingLeft: ar,
        paddingBlock: ar,
        paddingBlockStart: ar,
        paddingBlockEnd: ar,
        paddingInline: ar,
        paddingInlineStart: ar,
        paddingInlineEnd: ar,
        margin: ar,
        marginTop: ar,
        marginRight: ar,
        marginBottom: ar,
        marginLeft: ar,
        marginBlock: ar,
        marginBlockStart: ar,
        marginBlockEnd: ar,
        marginInline: ar,
        marginInlineStart: ar,
        marginInlineEnd: ar,
        fontSize: ar,
        backgroundPositionX: ar,
        backgroundPositionY: ar,
        rotate: ae,
        rotateX: ae,
        rotateY: ae,
        rotateZ: ae,
        scale: s1,
        scaleX: s1,
        scaleY: s1,
        scaleZ: s1,
        skew: ae,
        skewX: ae,
        skewY: ae,
        distance: ar,
        translateX: ar,
        translateY: ar,
        translateZ: ar,
        x: ar,
        y: ar,
        z: ar,
        perspective: ar,
        transformPerspective: ar,
        opacity: sQ,
        originX: ai,
        originY: ai,
        originZ: ar,
        zIndex: ax,
        fillOpacity: sQ,
        strokeOpacity: sQ,
        numOctaves: ax,
      },
      ak = {
        ...aC,
        color: aa,
        backgroundColor: aa,
        outlineColor: aa,
        fill: aa,
        stroke: aa,
        borderColor: aa,
        borderTopColor: aa,
        borderRightColor: aa,
        borderBottomColor: aa,
        borderLeftColor: aa,
        filter: ay,
        WebkitFilter: ay,
      },
      aM = (e) => ak[e],
      aj = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
      aL = () => ({ x: aj(), y: aj() }),
      aS = () => ({ min: 0, max: 0 }),
      aV = () => ({ x: aS(), y: aS() }),
      aR = (e) => !!(e && e.getVelocity),
      aH = new Set(["width", "height", "top", "left", "right", "bottom", ...sX]),
      a$ = (e) => (t) => t.test(e),
      aT = [sJ, ar, at, ae, ao, an, { test: (e) => "auto" === e, parse: (e) => e }],
      aE = (e) => aT.find(a$(e)),
      aB = () => {},
      aP = () => {};
    e6.default;
    let aI = (e) => (t) => "string" == typeof t && t.startsWith(e),
      aA = aI("--"),
      aW = aI("var(--"),
      az = (e) => !!aW(e) && aO.test(e.split("/*")[0].trim()),
      aO = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function a_(e) {
      return "string" == typeof e && e.split("/*")[0].includes("var(--");
    }
    let aZ = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
      aD = (e) => (180 * e) / Math.PI,
      aN = (e) => aU(aD(Math.atan2(e[1], e[0]))),
      aF = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: aN,
        rotateZ: aN,
        skewX: (e) => aD(Math.atan(e[1])),
        skewY: (e) => aD(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      },
      aU = (e) => ((e %= 360) < 0 && (e += 360), e),
      aG = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
      aY = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
      aX = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: aG,
        scaleY: aY,
        scale: (e) => (aG(e) + aY(e)) / 2,
        rotateX: (e) => aU(aD(Math.atan2(e[6], e[5]))),
        rotateY: (e) => aU(aD(Math.atan2(-e[2], e[0]))),
        rotateZ: aN,
        rotate: aN,
        skewX: (e) => aD(Math.atan(e[4])),
        skewY: (e) => aD(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      };
    function aq(e) {
      return +!!e.includes("scale");
    }
    function aK(e, t) {
      let r, n;
      if (!e || "none" === e) return aq(t);
      let o = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
      if (o) ((r = aX), (n = o));
      else {
        let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        ((r = aF), (n = t));
      }
      if (!n) return aq(t);
      let i = r[t],
        s = n[1].split(",").map(aJ);
      return "function" == typeof i ? i(s) : s[i];
    }
    function aJ(e) {
      return parseFloat(e.trim());
    }
    let aQ = (e) => e === sJ || e === ar,
      a1 = new Set(["x", "y", "z"]),
      a0 = sX.filter((e) => !a1.has(e)),
      a5 = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(r),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(r),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: (e, { transform: t }) => aK(t, "x"),
        y: (e, { transform: t }) => aK(t, "y"),
      };
    ((a5.translateX = a5.x), (a5.translateY = a5.y));
    let a2 = (e) => e,
      a6 = {},
      a4 = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
    function a8(e, t) {
      let r = !1,
        n = !0,
        o = { delta: 0, timestamp: 0, isProcessing: !1 },
        i = () => (r = !0),
        s = a4.reduce(
          (e, r) => (
            (e[r] = (function (e, t) {
              let r = new Set(),
                n = new Set(),
                o = !1,
                i = !1,
                s = new WeakSet(),
                a = { delta: 0, timestamp: 0, isProcessing: !1 },
                l = 0;
              function d(t) {
                (s.has(t) && (c.schedule(t), e()), l++, t(a));
              }
              let c = {
                schedule: (e, t = !1, i = !1) => {
                  let a = i && o ? r : n;
                  return (t && s.add(e), a.has(e) || a.add(e), e);
                },
                cancel: (e) => {
                  (n.delete(e), s.delete(e));
                },
                process: (e) => {
                  if (((a = e), o)) {
                    i = !0;
                    return;
                  }
                  ((o = !0),
                    ([r, n] = [n, r]),
                    r.forEach(d),
                    t,
                    (l = 0),
                    r.clear(),
                    (o = !1),
                    i && ((i = !1), c.process(e)));
                },
              };
              return c;
            })(i, t ? r : void 0)),
            e
          ),
          {},
        ),
        { setup: a, read: l, resolveKeyframes: d, preUpdate: c, update: u, preRender: h, render: f, postRender: p } = s,
        g = () => {
          let i = a6.useManualTiming ? o.timestamp : performance.now();
          ((r = !1),
            a6.useManualTiming || (o.delta = n ? 1e3 / 60 : Math.max(Math.min(i - o.timestamp, 40), 1)),
            (o.timestamp = i),
            (o.isProcessing = !0),
            a.process(o),
            l.process(o),
            d.process(o),
            c.process(o),
            u.process(o),
            h.process(o),
            f.process(o),
            p.process(o),
            (o.isProcessing = !1),
            r && t && ((n = !1), e(g)));
        };
      return {
        schedule: a4.reduce((t, i) => {
          let a = s[i];
          return (
            (t[i] = (t, i = !1, s = !1) => (!r && ((r = !0), (n = !0), o.isProcessing || e(g)), a.schedule(t, i, s))),
            t
          );
        }, {}),
        cancel: (e) => {
          for (let t = 0; t < a4.length; t++) s[a4[t]].cancel(e);
        },
        state: o,
        steps: s,
      };
    }
    let {
        schedule: a9,
        cancel: a3,
        state: a7,
        steps: le,
      } = a8("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : a2, !0),
      lt = new Set(),
      lr = !1,
      ln = !1,
      lo = !1;
    function li() {
      if (ln) {
        let e = Array.from(lt).filter((e) => e.needsMeasurement),
          t = new Set(e.map((e) => e.element)),
          r = new Map();
        (t.forEach((e) => {
          let t,
            n =
              ((t = []),
              a0.forEach((r) => {
                let n = e.getValue(r);
                void 0 !== n && (t.push([r, n.get()]), n.set(+!!r.startsWith("scale")));
              }),
              t);
          n.length && (r.set(e, n), e.render());
        }),
          e.forEach((e) => e.measureInitialState()),
          t.forEach((e) => {
            e.render();
            let t = r.get(e);
            t &&
              t.forEach(([t, r]) => {
                e.getValue(t)?.set(r);
              });
          }),
          e.forEach((e) => e.measureEndState()),
          e.forEach((e) => {
            void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY);
          }));
      }
      ((ln = !1), (lr = !1), lt.forEach((e) => e.complete(lo)), lt.clear());
    }
    function ls() {
      lt.forEach((e) => {
        (e.readKeyframes(), e.needsMeasurement && (ln = !0));
      });
    }
    class la {
      constructor(e, t, r, n, o, i = !1) {
        ((this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...e]),
          (this.onComplete = t),
          (this.name = r),
          (this.motionValue = n),
          (this.element = o),
          (this.isAsync = i));
      }
      scheduleResolve() {
        ((this.state = "scheduled"),
          this.isAsync
            ? (lt.add(this), lr || ((lr = !0), a9.read(ls), a9.resolveKeyframes(li)))
            : (this.readKeyframes(), this.complete()));
      }
      readKeyframes() {
        let { unresolvedKeyframes: e, name: t, element: r, motionValue: n } = this;
        if (null === e[0]) {
          let o = n?.get(),
            i = e[e.length - 1];
          if (void 0 !== o) e[0] = o;
          else if (r && t) {
            let n = r.readValue(t, i);
            null != n && (e[0] = n);
          }
          (void 0 === e[0] && (e[0] = i), n && void 0 === o && n.set(e[0]));
        }
        for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete(e = !1) {
        ((this.state = "complete"), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), lt.delete(this));
      }
      cancel() {
        "scheduled" === this.state && (lt.delete(this), (this.state = "pending"));
      }
      resume() {
        "pending" === this.state && this.scheduleResolve();
      }
    }
    function ll(e, t) {
      let r = aM(e);
      return (r !== ay && (r = am), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0);
    }
    let ld = new Set(["auto", "none", "0"]);
    class lc extends la {
      constructor(e, t, r, n, o) {
        super(e, t, r, n, o, !0);
      }
      readKeyframes() {
        let { unresolvedKeyframes: e, element: t, name: r } = this;
        if (!t || !t.current) return;
        super.readKeyframes();
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          if ("string" == typeof n && az((n = n.trim()))) {
            let o = (function e(t, r, n = 1) {
              aP(
                n <= 4,
                `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
                "max-css-var-depth",
              );
              let [o, i] = (function (e) {
                let t = aZ.exec(e);
                if (!t) return [,];
                let [, r, n, o] = t;
                return [`--${r ?? n}`, o];
              })(t);
              if (!o) return;
              let s = window.getComputedStyle(r).getPropertyValue(o);
              if (s) {
                let e = s.trim();
                return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e) ? parseFloat(e) : e;
              }
              return az(i) ? e(i, r, n + 1) : i;
            })(n, t.current);
            (void 0 !== o && (e[r] = o), r === e.length - 1 && (this.finalKeyframe = n));
          }
        }
        if ((this.resolveNoneKeyframes(), !aH.has(r) || 2 !== e.length)) return;
        let [n, o] = e,
          i = aE(n),
          s = aE(o);
        if (a_(n) !== a_(o) && a5[r]) {
          this.needsMeasurement = !0;
          return;
        }
        if (i !== s)
          if (aQ(i) && aQ(s))
            for (let t = 0; t < e.length; t++) {
              let r = e[t];
              "string" == typeof r && (e[t] = parseFloat(r));
            }
          else a5[r] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        let { unresolvedKeyframes: e, name: t } = this,
          r = [];
        for (let t = 0; t < e.length; t++)
          (null === e[t] ||
            (function (e) {
              if ("number" == typeof e) return 0 === e;
              if (null === e) return !0;
              return "none" === e || "0" === e || /^0[^.\s]+$/u.test(e);
            })(e[t])) &&
            r.push(t);
        r.length &&
          (function (e, t, r) {
            let n,
              o = 0;
            for (; o < e.length && !n; ) {
              let t = e[o];
              ("string" == typeof t && !ld.has(t) && ah(t).values.length && (n = e[o]), o++);
            }
            if (n && r) for (let o of t) e[o] = ll(r, n);
          })(e, r, t);
      }
      measureInitialState() {
        let { element: e, unresolvedKeyframes: t, name: r } = this;
        if (!e || !e.current) return;
        ("height" === r && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = a5[r](e.measureViewportBox(), window.getComputedStyle(e.current))),
          (t[0] = this.measuredOrigin));
        let n = t[t.length - 1];
        void 0 !== n && e.getValue(r, n).jump(n, !1);
      }
      measureEndState() {
        let { element: e, name: t, unresolvedKeyframes: r } = this;
        if (!e || !e.current) return;
        let n = e.getValue(t);
        n && n.jump(this.measuredOrigin, !1);
        let o = r.length - 1,
          i = r[o];
        ((r[o] = a5[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
          null !== i && void 0 === this.finalKeyframe && (this.finalKeyframe = i),
          this.removedTransforms?.length &&
            this.removedTransforms.forEach(([t, r]) => {
              e.getValue(t).set(r);
            }),
          this.resolveNoneKeyframes());
      }
    }
    function lu(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function lh(e, t) {
      let r = e.indexOf(t);
      r > -1 && e.splice(r, 1);
    }
    class lf {
      constructor() {
        this.subscriptions = [];
      }
      add(e) {
        return (lu(this.subscriptions, e), () => lh(this.subscriptions, e));
      }
      notify(e, t, r) {
        let n = this.subscriptions.length;
        if (n)
          if (1 === n) this.subscriptions[0](e, t, r);
          else
            for (let o = 0; o < n; o++) {
              let n = this.subscriptions[o];
              n && n(e, t, r);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    let { schedule: lp } = a8(queueMicrotask, !1);
    function lg() {
      o = void 0;
    }
    let lm = {
      now: () => (void 0 === o && lm.set(a7.isProcessing || a6.useManualTiming ? a7.timestamp : performance.now()), o),
      set: (e) => {
        ((o = e), queueMicrotask(lg));
      },
    };
    class lw {
      constructor(e, t = {}) {
        ((this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (e) => {
            let t = lm.now();
            if (
              (this.updatedAt !== t && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(e),
              this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
            )
              for (let e of this.dependents) e.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(e),
          (this.owner = t.owner));
      }
      setCurrent(e) {
        ((this.current = e),
          (this.updatedAt = lm.now()),
          null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current))));
      }
      setPrevFrameValue(e = this.current) {
        ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
      }
      onChange(e) {
        return this.on("change", e);
      }
      on(e, t) {
        this.events[e] || (this.events[e] = new lf());
        let r = this.events[e].add(t);
        return "change" === e
          ? () => {
              (r(),
                a9.read(() => {
                  this.events.change.getSize() || this.stop();
                }));
            }
          : r;
      }
      clearListeners() {
        for (let e in this.events) this.events[e].clear();
      }
      attach(e, t) {
        ((this.passiveEffect = e), (this.stopPassiveEffect = t));
      }
      set(e) {
        this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
      }
      setWithVelocity(e, t, r) {
        (this.set(t), (this.prev = void 0), (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt - r));
      }
      jump(e, t = !0) {
        (this.updateAndNotify(e),
          (this.prev = e),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          t && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
      dirty() {
        this.events.change?.notify(this.current);
      }
      addDependent(e) {
        (this.dependents || (this.dependents = new Set()), this.dependents.add(e));
      }
      removeDependent(e) {
        this.dependents && this.dependents.delete(e);
      }
      get() {
        return (t && t.push(this), this.current);
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        var e;
        let t = lm.now();
        if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
        let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return ((e = parseFloat(this.current) - parseFloat(this.prevFrameValue)), r ? (1e3 / r) * e : 0);
      }
      start(e) {
        return (
          this.stop(),
          new Promise((t) => {
            ((this.hasAnimated = !0),
              (this.animation = e(t)),
              this.events.animationStart && this.events.animationStart.notify());
          }).then(() => {
            (this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation());
          })
        );
      }
      stop() {
        (this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation());
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        delete this.animation;
      }
      destroy() {
        (this.dependents?.clear(),
          this.events.destroy?.notify(),
          this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
    }
    function lv(e, t) {
      return new lw(e, t);
    }
    let lb = [...aT, aa, am],
      ly = { current: null },
      lx = { current: !1 },
      lC = "undefined" != typeof window,
      lk = new WeakMap();
    function lM(e) {
      return null !== e && "object" == typeof e && "function" == typeof e.start;
    }
    function lj(e) {
      return "string" == typeof e || Array.isArray(e);
    }
    let lL = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
      lS = ["initial", ...lL];
    function lV(e) {
      return lM(e.animate) || lS.some((t) => lj(e[t]));
    }
    function lR(e) {
      return !!(lV(e) || e.variants);
    }
    function lH(e) {
      let t = [{}, {}];
      return (
        e?.values.forEach((e, r) => {
          ((t[0][r] = e.get()), (t[1][r] = e.getVelocity()));
        }),
        t
      );
    }
    function l$(e, t, r, n) {
      if ("function" == typeof t) {
        let [o, i] = lH(n);
        t = t(void 0 !== r ? r : e.custom, o, i);
      }
      if (("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t)) {
        let [o, i] = lH(n);
        t = t(void 0 !== r ? r : e.custom, o, i);
      }
      return t;
    }
    let lT = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ],
      lE = {};
    class lB {
      scrapeMotionValuesFromProps(e, t, r) {
        return {};
      }
      constructor(
        {
          parent: e,
          props: t,
          presenceContext: r,
          reducedMotionConfig: n,
          skipAnimations: o,
          blockInitialAnimation: i,
          visualState: s,
        },
        a = {},
      ) {
        ((this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.shouldSkipAnimations = !1),
          (this.values = new Map()),
          (this.KeyframeResolver = la),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
          }),
          (this.renderScheduledAt = 0),
          (this.scheduleRender = () => {
            let e = lm.now();
            this.renderScheduledAt < e && ((this.renderScheduledAt = e), a9.render(this.render, !1, !0));
          }));
        const { latestValues: l, renderState: d } = s;
        ((this.latestValues = l),
          (this.baseTarget = { ...l }),
          (this.initialValues = t.initial ? { ...l } : {}),
          (this.renderState = d),
          (this.parent = e),
          (this.props = t),
          (this.presenceContext = r),
          (this.depth = e ? e.depth + 1 : 0),
          (this.reducedMotionConfig = n),
          (this.skipAnimationsConfig = o),
          (this.options = a),
          (this.blockInitialAnimation = !!i),
          (this.isControllingVariants = lV(t)),
          (this.isVariantNode = lR(t)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = !!(e && e.current)));
        const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
        for (const e in u) {
          const t = u[e];
          void 0 !== l[e] && aR(t) && t.set(l[e]);
        }
      }
      mount(e) {
        ((this.current = e),
          lk.set(e, this),
          this.projection && !this.projection.instance && this.projection.mount(e),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
          "never" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !1)
            : "always" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !0)
              : (lx.current ||
                  (function () {
                    if (((lx.current = !0), lC))
                      if (window.matchMedia) {
                        let e = window.matchMedia("(prefers-reduced-motion)"),
                          t = () => (ly.current = e.matches);
                        (e.addEventListener("change", t), t());
                      } else ly.current = !1;
                  })(),
                (this.shouldReduceMotion = ly.current)),
          (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
          this.parent?.addChild(this),
          this.update(this.props, this.presenceContext));
      }
      unmount() {
        for (let e in (this.projection && this.projection.unmount(),
        a3(this.notifyUpdate),
        a3(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this),
        this.events))
          this.events[e].clear();
        for (let e in this.features) {
          let t = this.features[e];
          t && (t.unmount(), (t.isMounted = !1));
        }
        this.current = null;
      }
      addChild(e) {
        (this.children.add(e),
          this.enteringChildren ?? (this.enteringChildren = new Set()),
          this.enteringChildren.add(e));
      }
      removeChild(e) {
        (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
      }
      bindToMotionValue(e, t) {
        let r;
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        let n = sq.has(e);
        n && this.onBindTransform && this.onBindTransform();
        let o = t.on("change", (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && a9.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        });
        ("undefined" != typeof window && window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, t)),
          this.valueSubscriptions.set(e, () => {
            (o(), r && r(), t.owner && t.stop());
          }));
      }
      sortNodePosition(e) {
        return this.current && this.sortInstanceNodePosition && this.type === e.type
          ? this.sortInstanceNodePosition(this.current, e.current)
          : 0;
      }
      updateFeatures() {
        let e = "animation";
        for (e in lE) {
          let t = lE[e];
          if (!t) continue;
          let { isEnabled: r, Feature: n } = t;
          if ((!this.features[e] && n && r(this.props) && (this.features[e] = new n(this)), this.features[e])) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : aV();
      }
      getStaticValue(e) {
        return this.latestValues[e];
      }
      setStaticValue(e, t) {
        this.latestValues[e] = t;
      }
      update(e, t) {
        ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = e),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = t));
        for (let t = 0; t < lT.length; t++) {
          let r = lT[t];
          this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
          let n = e["on" + r];
          n && (this.propEventSubscriptions[r] = this.on(r, n));
        }
        ((this.prevMotionValues = (function (e, t, r) {
          for (let n in t) {
            let o = t[n],
              i = r[n];
            if (aR(o)) e.addValue(n, o);
            else if (aR(i)) e.addValue(n, lv(o, { owner: e }));
            else if (i !== o)
              if (e.hasValue(n)) {
                let t = e.getValue(n);
                !0 === t.liveStyle ? t.jump(o) : t.hasAnimated || t.set(o);
              } else {
                let t = e.getStaticValue(n);
                e.addValue(n, lv(void 0 !== t ? t : o, { owner: e }));
              }
          }
          for (let n in r) void 0 === t[n] && e.removeValue(n);
          return t;
        })(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues)),
          this.handleChildMotionValue && this.handleChildMotionValue());
      }
      getProps() {
        return this.props;
      }
      getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
      }
      addVariantChild(e) {
        let t = this.getClosestVariantNode();
        if (t) return (t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e));
      }
      addValue(e, t) {
        let r = this.values.get(e);
        t !== r &&
          (r && this.removeValue(e),
          this.bindToMotionValue(e, t),
          this.values.set(e, t),
          (this.latestValues[e] = t.get()));
      }
      removeValue(e) {
        this.values.delete(e);
        let t = this.valueSubscriptions.get(e);
        (t && (t(), this.valueSubscriptions.delete(e)),
          delete this.latestValues[e],
          this.removeValueFromRenderState(e, this.renderState));
      }
      hasValue(e) {
        return this.values.has(e);
      }
      getValue(e, t) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let r = this.values.get(e);
        return (
          void 0 === r && void 0 !== t && ((r = lv(null === t ? void 0 : t, { owner: this })), this.addValue(e, r)),
          r
        );
      }
      readValue(e, t) {
        let r =
          void 0 === this.latestValues[e] && this.current
            ? (this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options))
            : this.latestValues[e];
        if (null != r) {
          let n, o;
          if (
            "string" == typeof r &&
            ((n = r), /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) || ((o = r), /^0[^.\s]+$/u.test(o)))
          )
            r = parseFloat(r);
          else {
            let n;
            ((n = r), !lb.find(a$(n)) && am.test(t) && (r = ll(e, t)));
          }
          this.setBaseTarget(e, aR(r) ? r.get() : r);
        }
        return aR(r) ? r.get() : r;
      }
      setBaseTarget(e, t) {
        this.baseTarget[e] = t;
      }
      getBaseTarget(e) {
        let t,
          { initial: r } = this.props;
        if ("string" == typeof r || "object" == typeof r) {
          let n = l$(this.props, r, this.presenceContext?.custom);
          n && (t = n[e]);
        }
        if (r && void 0 !== t) return t;
        let n = this.getBaseTargetFromProps(this.props, e);
        return void 0 === n || aR(n)
          ? void 0 !== this.initialValues[e] && void 0 === t
            ? void 0
            : this.baseTarget[e]
          : n;
      }
      on(e, t) {
        return (this.events[e] || (this.events[e] = new lf()), this.events[e].add(t));
      }
      notify(e, ...t) {
        this.events[e] && this.events[e].notify(...t);
      }
      scheduleRenderMicrotask() {
        lp.render(this.render);
      }
    }
    class lP extends lB {
      constructor() {
        (super(...arguments), (this.KeyframeResolver = lc));
      }
      sortInstanceNodePosition(e, t) {
        return 2 & e.compareDocumentPosition(t) ? 1 : -1;
      }
      getBaseTargetFromProps(e, t) {
        let r = e.style;
        return r ? r[t] : void 0;
      }
      removeValueFromRenderState(e, { vars: t, style: r }) {
        (delete t[e], delete r[e]);
      }
      handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        let { children: e } = this.props;
        aR(e) &&
          (this.childSubscription = e.on("change", (e) => {
            this.current && (this.current.textContent = `${e}`);
          }));
      }
    }
    function lI(e) {
      return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
    }
    let lA = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
      lW = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
      lz = sX.length;
    function lO(e, t, r) {
      let { style: n, vars: o, transformOrigin: i } = e,
        s = !1,
        a = !1;
      for (let e in t) {
        let r = t[e];
        if (sq.has(e)) {
          s = !0;
          continue;
        }
        if (aA(e)) {
          o[e] = r;
          continue;
        }
        {
          let t = lA(r, aC[e]);
          e.startsWith("origin") ? ((a = !0), (i[e] = t)) : (n[e] = t);
        }
      }
      if (
        (!t.transform &&
          (s || r
            ? (n.transform = (function (e, t, r) {
                let n = "",
                  o = !0;
                for (let i = 0; i < lz; i++) {
                  let s = sX[i],
                    a = e[s];
                  if (void 0 === a) continue;
                  let l = !0;
                  if ("number" == typeof a) l = a === +!!s.startsWith("scale");
                  else {
                    let e = parseFloat(a);
                    l = s.startsWith("scale") ? 1 === e : 0 === e;
                  }
                  if (!l || r) {
                    let e = lA(a, aC[s]);
                    if (!l) {
                      o = !1;
                      let t = lW[s] || s;
                      n += `${t}(${e}) `;
                    }
                    r && (t[s] = e);
                  }
                }
                return ((n = n.trim()), r ? (n = r(t, o ? "" : n)) : o && (n = "none"), n);
              })(t, e.transform, r))
            : n.transform && (n.transform = "none")),
        a)
      ) {
        let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = i;
        n.transformOrigin = `${e} ${t} ${r}`;
      }
    }
    let l_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      lZ = { offset: "strokeDashoffset", array: "strokeDasharray" },
      lD = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
    function lN(
      e,
      { attrX: t, attrY: r, attrScale: n, pathLength: o, pathSpacing: i = 1, pathOffset: s = 0, ...a },
      l,
      d,
      c,
    ) {
      if ((lO(e, a, d), l)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
      }
      ((e.attrs = e.style), (e.style = {}));
      let { attrs: u, style: h } = e;
      for (let e of (u.transform && ((h.transform = u.transform), delete u.transform),
      (h.transform || u.transformOrigin) &&
        ((h.transformOrigin = u.transformOrigin ?? "50% 50%"), delete u.transformOrigin),
      h.transform && ((h.transformBox = c?.transformBox ?? "fill-box"), delete u.transformBox),
      lD))
        void 0 !== u[e] && ((h[e] = u[e]), delete u[e]);
      (void 0 !== t && (u.x = t),
        void 0 !== r && (u.y = r),
        void 0 !== n && (u.scale = n),
        void 0 !== o &&
          (function (e, t, r = 1, n = 0, o = !0) {
            e.pathLength = 1;
            let i = o ? l_ : lZ;
            ((e[i.offset] = `${-n}`), (e[i.array] = `${t} ${r}`));
          })(u, o, i, s, !1));
    }
    let lF = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]),
      lU = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    function lG(e, { style: t, vars: r }, n, o) {
      let i,
        s = e.style;
      for (i in t) s[i] = t[i];
      for (i in (o?.applyProjectionStyles(s, n), r)) s.setProperty(i, r[i]);
    }
    function lY(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    let lX = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e)
            if (!ar.test(e)) return e;
            else e = parseFloat(e);
          let r = lY(e, t.target.x),
            n = lY(e, t.target.y);
          return `${r}% ${n}%`;
        },
      },
      lq = (e, t, r) => e + (t - e) * r,
      lK = {
        borderRadius: {
          ...lX,
          applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
        },
        borderTopLeftRadius: lX,
        borderTopRightRadius: lX,
        borderBottomLeftRadius: lX,
        borderBottomRightRadius: lX,
        boxShadow: {
          correct: (e, { treeScale: t, projectionDelta: r }) => {
            let n = am.parse(e);
            if (n.length > 5) return e;
            let o = am.createTransformer(e),
              i = +("number" != typeof n[0]),
              s = r.x.scale * t.x,
              a = r.y.scale * t.y;
            ((n[0 + i] /= s), (n[1 + i] /= a));
            let l = lq(s, a, 0.5);
            return (
              "number" == typeof n[2 + i] && (n[2 + i] /= l),
              "number" == typeof n[3 + i] && (n[3 + i] /= l),
              o(n)
            );
          },
        },
      };
    function lJ(e, { layout: t, layoutId: r }) {
      return sq.has(e) || e.startsWith("origin") || ((t || void 0 !== r) && (!!lK[e] || "opacity" === e));
    }
    function lQ(e, t, r) {
      let n = e.style,
        o = t?.style,
        i = {};
      if (!n) return i;
      for (let t in n)
        (aR(n[t]) || (o && aR(o[t])) || lJ(t, e) || r?.getValue(t)?.liveStyle !== void 0) && (i[t] = n[t]);
      return i;
    }
    function l1(e, t, r) {
      let n = lQ(e, t, r);
      for (let r in e)
        (aR(e[r]) || aR(t[r])) &&
          (n[-1 !== sX.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
      return n;
    }
    class l0 extends lP {
      constructor() {
        (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = aV));
      }
      getBaseTargetFromProps(e, t) {
        return e[t];
      }
      readValueFromInstance(e, t) {
        if (sq.has(t)) {
          let e = aM(t);
          return (e && e.default) || 0;
        }
        return ((t = lF.has(t) ? t : lI(t)), e.getAttribute(t));
      }
      scrapeMotionValuesFromProps(e, t, r) {
        return l1(e, t, r);
      }
      build(e, t, r) {
        lN(e, t, this.isSVGTag, r.transformTemplate, r.style);
      }
      renderInstance(e, t, r, n) {
        for (let r in (lG(e, t, void 0, n), t.attrs)) e.setAttribute(lF.has(r) ? r : lI(r), t.attrs[r]);
      }
      mount(e) {
        ((this.isSVGTag = lU(e.tagName)), super.mount(e));
      }
    }
    function l5({ top: e, left: t, right: r, bottom: n }) {
      return { x: { min: t, max: r }, y: { min: e, max: n } };
    }
    function l2(e) {
      return void 0 === e || 1 === e;
    }
    function l6({ scale: e, scaleX: t, scaleY: r }) {
      return !l2(e) || !l2(t) || !l2(r);
    }
    function l4(e) {
      return l6(e) || l8(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
    }
    function l8(e) {
      var t, r;
      return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
    }
    function l9(e, t, r, n, o) {
      return (void 0 !== o && (e = n + o * (e - n)), n + r * (e - n) + t);
    }
    function l3(e, t = 0, r = 1, n, o) {
      ((e.min = l9(e.min, t, r, n, o)), (e.max = l9(e.max, t, r, n, o)));
    }
    function l7(e, { x: t, y: r }) {
      (l3(e.x, t.translate, t.scale, t.originPoint), l3(e.y, r.translate, r.scale, r.originPoint));
    }
    function de(e, t) {
      ((e.min = e.min + t), (e.max = e.max + t));
    }
    function dt(e, t, r, n, o = 0.5) {
      let i = lq(e.min, e.max, o);
      l3(e, t, r, i, n);
    }
    function dr(e, t) {
      (dt(e.x, t.x, t.scaleX, t.scale, t.originX), dt(e.y, t.y, t.scaleY, t.scale, t.originY));
    }
    function dn(e, t) {
      return l5(
        (function (e, t) {
          if (!t) return e;
          let r = t({ x: e.left, y: e.top }),
            n = t({ x: e.right, y: e.bottom });
          return { top: r.y, left: r.x, bottom: n.y, right: n.x };
        })(e.getBoundingClientRect(), t),
      );
    }
    class di extends lP {
      constructor() {
        (super(...arguments), (this.type = "html"), (this.renderInstance = lG));
      }
      readValueFromInstance(e, t) {
        if (sq.has(t))
          return this.projection?.isProjecting
            ? aq(t)
            : ((e, t) => {
                let { transform: r = "none" } = getComputedStyle(e);
                return aK(r, t);
              })(e, t);
        {
          let r = window.getComputedStyle(e),
            n = (aA(t) ? r.getPropertyValue(t) : r[t]) || 0;
          return "string" == typeof n ? n.trim() : n;
        }
      }
      measureInstanceViewportBox(e, { transformPagePoint: t }) {
        return dn(e, t);
      }
      build(e, t, r) {
        lO(e, t, r.transformTemplate);
      }
      scrapeMotionValuesFromProps(e, t, r) {
        return lQ(e, t, r);
      }
    }
    let ds = [
      "animate",
      "circle",
      "defs",
      "desc",
      "ellipse",
      "g",
      "image",
      "line",
      "filter",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "rect",
      "stop",
      "switch",
      "symbol",
      "svg",
      "text",
      "tspan",
      "use",
      "view",
    ];
    function da(e) {
      if ("string" != typeof e || e.includes("-"));
      else if (ds.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
      return !1;
    }
    let dl = (0, e2.createContext)({}),
      dd = (0, e2.createContext)({ strict: !1 }),
      dc = (0, e2.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
      du = (0, e2.createContext)({});
    function dh(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    let df = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
    function dp(e, t, r) {
      for (let n in t) aR(t[n]) || lJ(n, r) || (e[n] = t[n]);
    }
    let dg = () => ({ ...df(), attrs: {} }),
      dm = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
    function dw(e) {
      return (
        e.startsWith("while") ||
        (e.startsWith("drag") && "draggable" !== e) ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        dm.has(e)
      );
    }
    let dv = (e) => !dw(e);
    try {
      ((eK = e.r(566963).default), "function" == typeof eK && (dv = (e) => (e.startsWith("on") ? !dw(e) : eK(e))));
    } catch {}
    function db(e) {
      return aR(e) ? e.get() : e;
    }
    let dy = (0, e2.createContext)(null);
    function dx(e) {
      let t = (0, e2.useRef)(null);
      return (null === t.current && (t.current = e()), t.current);
    }
    let dC = (e) => (t, r) => {
        let n = (0, e2.useContext)(du),
          o = (0, e2.useContext)(dy),
          i = () =>
            (function ({ scrapeMotionValuesFromProps: e, createRenderState: t }, r, n, o) {
              return {
                latestValues: (function (e, t, r, n) {
                  let o = {},
                    i = n(e, {});
                  for (let e in i) o[e] = db(i[e]);
                  let { initial: s, animate: a } = e,
                    l = lV(e),
                    d = lR(e);
                  t &&
                    d &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === s && (s = t.initial), void 0 === a && (a = t.animate));
                  let c = !!r && !1 === r.initial,
                    u = (c = c || !1 === s) ? a : s;
                  if (u && "boolean" != typeof u && !lM(u)) {
                    let t = Array.isArray(u) ? u : [u];
                    for (let r = 0; r < t.length; r++) {
                      let n = l$(e, t[r]);
                      if (n) {
                        let { transitionEnd: e, transition: t, ...r } = n;
                        for (let e in r) {
                          let t = r[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (o[e] = t);
                        }
                        for (let t in e) o[t] = e[t];
                      }
                    }
                  }
                  return o;
                })(r, n, o, e),
                renderState: t(),
              };
            })(e, t, n, o);
        return r ? i() : dx(i);
      },
      dk = dC({ scrapeMotionValuesFromProps: lQ, createRenderState: df }),
      dM = dC({ scrapeMotionValuesFromProps: l1, createRenderState: dg }),
      dj = "undefined" != typeof window,
      dL = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      },
      dS = !1;
    function dV() {
      return (
        !(function () {
          if (dS) return;
          let e = {};
          for (let t in dL) e[t] = { isEnabled: (e) => dL[t].some((t) => !!e[t]) };
          ((lE = e), (dS = !0));
        })(),
        lE
      );
    }
    let dR = Symbol.for("motionComponentSymbol"),
      dH = "data-" + lI("framerAppearId"),
      d$ = (0, e2.createContext)({});
    function dT(e) {
      return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current");
    }
    let dE = dj ? e2.useLayoutEffect : e2.useEffect;
    function dB(e, { forwardMotionProps: t = !1, type: r } = {}, n, o) {
      n &&
        (function (e) {
          let t = dV();
          for (let r in e) t[r] = { ...t[r], ...e[r] };
          lE = t;
        })(n);
      let i = r ? "svg" === r : da(e),
        s = i ? dM : dk;
      function a(r, n) {
        var a;
        let l,
          d,
          c,
          u = {
            ...(0, e2.useContext)(dc),
            ...r,
            layoutId: (function ({ layoutId: e }) {
              let t = (0, e2.useContext)(dl).id;
              return t && void 0 !== e ? t + "-" + e : e;
            })(r),
          },
          { isStatic: h } = u,
          f = (function (e) {
            let { initial: t, animate: r } = (function (e, t) {
              if (lV(e)) {
                let { initial: t, animate: r } = e;
                return { initial: !1 === t || lj(t) ? t : void 0, animate: lj(r) ? r : void 0 };
              }
              return !1 !== e.inherit ? t : {};
            })(e, (0, e2.useContext)(du));
            return (0, e2.useMemo)(() => ({ initial: t, animate: r }), [dh(t), dh(r)]);
          })(r),
          p = s(r, h);
        if (!h && dj) {
          (0, e2.useContext)(dd).strict;
          let t = (function (e) {
            let { drag: t, layout: r } = dV();
            if (!t && !r) return {};
            let n = { ...t, ...r };
            return {
              MeasureLayout: t?.isEnabled(e) || r?.isEnabled(e) ? n.MeasureLayout : void 0,
              ProjectionNode: n.ProjectionNode,
            };
          })(u);
          ((l = t.MeasureLayout),
            (f.visualElement = (function (e, t, r, n, o, i) {
              let { visualElement: s } = (0, e2.useContext)(du),
                a = (0, e2.useContext)(dd),
                l = (0, e2.useContext)(dy),
                d = (0, e2.useContext)(dc),
                c = d.reducedMotion,
                u = d.skipAnimations,
                h = (0, e2.useRef)(null),
                f = (0, e2.useRef)(!1);
              ((n = n || a.renderer),
                !h.current &&
                  n &&
                  ((h.current = n(e, {
                    visualState: t,
                    parent: s,
                    props: r,
                    presenceContext: l,
                    blockInitialAnimation: !!l && !1 === l.initial,
                    reducedMotionConfig: c,
                    skipAnimations: u,
                    isSVG: i,
                  })),
                  f.current && h.current && (h.current.manuallyAnimateOnMount = !0)));
              let p = h.current,
                g = (0, e2.useContext)(d$);
              p &&
                !p.projection &&
                o &&
                ("html" === p.type || "svg" === p.type) &&
                (function (e, t, r, n) {
                  let {
                    layoutId: o,
                    layout: i,
                    drag: s,
                    dragConstraints: a,
                    layoutScroll: l,
                    layoutRoot: d,
                    layoutCrossfade: c,
                  } = t;
                  ((e.projection = new r(
                    e.latestValues,
                    t["data-framer-portal-id"]
                      ? void 0
                      : (function e(t) {
                          if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent);
                        })(e.parent),
                  )),
                    e.projection.setOptions({
                      layoutId: o,
                      layout: i,
                      alwaysMeasureLayout: !!s || (a && dT(a)),
                      visualElement: e,
                      animationType: "string" == typeof i ? i : "both",
                      initialPromotionConfig: n,
                      crossfade: c,
                      layoutScroll: l,
                      layoutRoot: d,
                    }));
                })(h.current, r, o, g);
              let m = (0, e2.useRef)(!1);
              (0, e2.useInsertionEffect)(() => {
                p && m.current && p.update(r, l);
              });
              let w = r[dH],
                v = (0, e2.useRef)(
                  !!w && !window.MotionHandoffIsComplete?.(w) && window.MotionHasOptimisedAnimation?.(w),
                );
              return (
                dE(() => {
                  ((f.current = !0),
                    p &&
                      ((m.current = !0),
                      (window.MotionIsMounted = !0),
                      p.updateFeatures(),
                      p.scheduleRenderMicrotask(),
                      v.current && p.animationState && p.animationState.animateChanges()));
                }),
                (0, e2.useEffect)(() => {
                  p &&
                    (!v.current && p.animationState && p.animationState.animateChanges(),
                    v.current &&
                      (queueMicrotask(() => {
                        window.MotionHandoffMarkAsComplete?.(w);
                      }),
                      (v.current = !1)),
                    (p.enteringChildren = void 0));
                }),
                p
              );
            })(e, p, u, o, t.ProjectionNode, i)));
        }
        return (0, e0.jsxs)(du.Provider, {
          value: f,
          children: [
            l && f.visualElement ? (0, e0.jsx)(l, { visualElement: f.visualElement, ...u }) : null,
            (function (e, t, r, { latestValues: n }, o, i = !1, s) {
              let a = (
                  (s ?? da(e))
                    ? function (e, t, r, n) {
                        let o = (0, e2.useMemo)(() => {
                          let r = dg();
                          return (lN(r, t, lU(n), e.transformTemplate, e.style), { ...r.attrs, style: { ...r.style } });
                        }, [t]);
                        if (e.style) {
                          let t = {};
                          (dp(t, e.style, e), (o.style = { ...t, ...o.style }));
                        }
                        return o;
                      }
                    : function (e, t) {
                        let r,
                          n,
                          o = {},
                          i =
                            ((r = e.style || {}),
                            dp((n = {}), r, e),
                            Object.assign(
                              n,
                              (function ({ transformTemplate: e }, t) {
                                return (0, e2.useMemo)(() => {
                                  let r = df();
                                  return (lO(r, t, e), Object.assign({}, r.vars, r.style));
                                }, [t]);
                              })(e, t),
                            ),
                            n);
                        return (
                          e.drag &&
                            !1 !== e.dragListener &&
                            ((o.draggable = !1),
                            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
                            (i.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
                          void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0),
                          (o.style = i),
                          o
                        );
                      }
                )(t, n, o, e),
                l = (function (e, t, r) {
                  let n = {};
                  for (let o in e)
                    ("values" !== o || "object" != typeof e.values) &&
                      (dv(o) || (!0 === r && dw(o)) || (!t && !dw(o)) || (e.draggable && o.startsWith("onDrag"))) &&
                      (n[o] = e[o]);
                  return n;
                })(t, "string" == typeof e, i),
                d = e !== e2.Fragment ? { ...l, ...a, ref: r } : {},
                { children: c } = t,
                u = (0, e2.useMemo)(() => (aR(c) ? c.get() : c), [c]);
              return (0, e2.createElement)(e, { ...d, children: u });
            })(
              e,
              r,
              ((a = f.visualElement),
              (d = (0, e2.useRef)(n)),
              (0, e2.useInsertionEffect)(() => {
                d.current = n;
              }),
              (c = (0, e2.useRef)(null)),
              (0, e2.useCallback)(
                (e) => {
                  (e && p.onMount?.(e), a && (e ? a.mount(e) : a.unmount()));
                  let t = d.current;
                  if ("function" == typeof t)
                    if (e) {
                      let r = t(e);
                      "function" == typeof r && (c.current = r);
                    } else c.current ? (c.current(), (c.current = null)) : t(e);
                  else t && (t.current = e);
                },
                [a],
              )),
              p,
              h,
              t,
              i,
            ),
          ],
        });
      }
      a.displayName = `motion.${"string" == typeof e ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
      let l = (0, e2.forwardRef)(a);
      return ((l[dR] = e), l);
    }
    class dP {
      constructor(e) {
        ((this.isMounted = !1), (this.node = e));
      }
      update() {}
    }
    function dI(e, t, r) {
      let n = e.getProps();
      return l$(n, t, void 0 !== r ? r : n.custom, e);
    }
    function dA(e, t) {
      return e?.[t] ?? e?.default ?? e;
    }
    let dW = (e) => Array.isArray(e);
    function dz(e, t) {
      let r = e.getValue("willChange");
      if (aR(r) && r.add) return r.add(t);
      if (!r && a6.WillChange) {
        let r = new a6.WillChange("auto");
        (e.addValue("willChange", r), r.add(t));
      }
    }
    let dO = (e) => 1e3 * e,
      d_ = (e, t) => (r) => t(e(r)),
      dZ = (...e) => e.reduce(d_),
      dD = { layout: 0, mainThread: 0, waapi: 0 };
    function dN(e, t, r) {
      return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
        ? e + (t - e) * 6 * r
        : r < 0.5
          ? t
          : r < 2 / 3
            ? e + (t - e) * (2 / 3 - r) * 6
            : e;
    }
    function dF(e, t) {
      return (r) => (r > 0 ? t : e);
    }
    let dU = (e, t, r) => {
        let n = e * e,
          o = r * (t * t - n) + n;
        return o < 0 ? 0 : Math.sqrt(o);
      },
      dG = [s3, s9, as];
    function dY(e) {
      let t = dG.find((t) => t.test(e));
      if (
        (aB(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
        !t)
      )
        return !1;
      let r = t.parse(e);
      return (
        t === as &&
          (r = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
            ((e /= 360), (r /= 100));
            let o = 0,
              i = 0,
              s = 0;
            if ((t /= 100)) {
              let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                a = 2 * r - n;
              ((o = dN(a, n, e + 1 / 3)), (i = dN(a, n, e)), (s = dN(a, n, e - 1 / 3)));
            } else o = i = s = r;
            return { red: Math.round(255 * o), green: Math.round(255 * i), blue: Math.round(255 * s), alpha: n };
          })(r)),
        r
      );
    }
    let dX = (e, t) => {
        let r = dY(e),
          n = dY(t);
        if (!r || !n) return dF(e, t);
        let o = { ...r };
        return (e) => (
          (o.red = dU(r.red, n.red, e)),
          (o.green = dU(r.green, n.green, e)),
          (o.blue = dU(r.blue, n.blue, e)),
          (o.alpha = lq(r.alpha, n.alpha, e)),
          s9.transform(o)
        );
      },
      dq = new Set(["none", "hidden"]);
    function dK(e, t) {
      return (r) => lq(e, t, r);
    }
    function dJ(e) {
      return "number" == typeof e
        ? dK
        : "string" == typeof e
          ? az(e)
            ? dF
            : aa.test(e)
              ? dX
              : d0
          : Array.isArray(e)
            ? dQ
            : "object" == typeof e
              ? aa.test(e)
                ? dX
                : d1
              : dF;
    }
    function dQ(e, t) {
      let r = [...e],
        n = r.length,
        o = e.map((e, r) => dJ(e)(e, t[r]));
      return (e) => {
        for (let t = 0; t < n; t++) r[t] = o[t](e);
        return r;
      };
    }
    function d1(e, t) {
      let r = { ...e, ...t },
        n = {};
      for (let o in r) void 0 !== e[o] && void 0 !== t[o] && (n[o] = dJ(e[o])(e[o], t[o]));
      return (e) => {
        for (let t in n) r[t] = n[t](e);
        return r;
      };
    }
    let d0 = (e, t) => {
      let r = am.createTransformer(t),
        n = ah(e),
        o = ah(t);
      if (
        !(
          n.indexes.var.length === o.indexes.var.length &&
          n.indexes.color.length === o.indexes.color.length &&
          n.indexes.number.length >= o.indexes.number.length
        )
      )
        return (
          aB(
            !0,
            `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            "complex-values-different",
          ),
          dF(e, t)
        );
      if ((dq.has(e) && !o.values.length) || (dq.has(t) && !n.values.length))
        return dq.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
      return dZ(
        dQ(
          (function (e, t) {
            let r = [],
              n = { color: 0, var: 0, number: 0 };
            for (let o = 0; o < t.values.length; o++) {
              let i = t.types[o],
                s = e.indexes[i][n[i]],
                a = e.values[s] ?? 0;
              ((r[o] = a), n[i]++);
            }
            return r;
          })(n, o),
          o.values,
        ),
        r,
      );
    };
    function d5(e, t, r) {
      return "number" == typeof e && "number" == typeof t && "number" == typeof r ? lq(e, t, r) : dJ(e)(e, t);
    }
    let d2 = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: (e = !0) => a9.update(t, e),
          stop: () => a3(t),
          now: () => (a7.isProcessing ? a7.timestamp : lm.now()),
        };
      },
      d6 = (e, t, r = 10) => {
        let n = "",
          o = Math.max(Math.round(t / r), 2);
        for (let t = 0; t < o; t++) n += Math.round(1e4 * e(t / (o - 1))) / 1e4 + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
      };
    function d4(e) {
      let t = 0,
        r = e.next(t);
      for (; !r.done && t < 2e4; ) ((t += 50), (r = e.next(t)));
      return t >= 2e4 ? 1 / 0 : t;
    }
    function d8(e, t, r) {
      var n, o;
      let i = Math.max(t - 5, 0);
      return ((n = r - e(i)), (o = t - i) ? (1e3 / o) * n : 0);
    }
    let d9 = 0.01,
      d3 = 2,
      d7 = 0.005,
      ce = 0.5;
    function ct(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    let cr = ["duration", "bounce"],
      cn = ["stiffness", "damping", "mass"];
    function co(e, t) {
      return t.some((t) => void 0 !== e[t]);
    }
    function ci(e = 0.3, t = 0.3) {
      let r,
        n = "object" != typeof e ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e,
        { restSpeed: o, restDelta: i } = n,
        s = n.keyframes[0],
        a = n.keyframes[n.keyframes.length - 1],
        l = { done: !1, value: s },
        {
          stiffness: d,
          damping: c,
          mass: u,
          duration: h,
          velocity: f,
          isResolvedFromDuration: p,
        } = (function (e) {
          let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
          if (!co(e, cn) && co(e, cr))
            if (e.visualDuration) {
              let r = (2 * Math.PI) / (1.2 * e.visualDuration),
                n = r * r,
                o = 2 * sK(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(n);
              t = { ...t, mass: 1, stiffness: n, damping: o };
            } else {
              let r = (function ({ duration: e = 800, bounce: t = 0.3, velocity: r = 0, mass: n = 1 }) {
                let o, i;
                aB(e <= dO(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                let s = 1 - t;
                ((s = sK(0.05, 1, s)),
                  (e = sK(0.01, 10, e / 1e3)),
                  s < 1
                    ? ((o = (t) => {
                        let n = t * s,
                          o = n * e;
                        return 0.001 - ((n - r) / ct(t, s)) * Math.exp(-o);
                      }),
                      (i = (t) => {
                        let n = t * s * e,
                          i = Math.pow(s, 2) * Math.pow(t, 2) * e,
                          a = Math.exp(-n),
                          l = ct(Math.pow(t, 2), s);
                        return ((n * r + r - i) * a * (-o(t) + 0.001 > 0 ? -1 : 1)) / l;
                      }))
                    : ((o = (t) => -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                      (i = (t) => e * e * (r - t) * Math.exp(-t * e))));
                let a = (function (e, t, r) {
                  let n = r;
                  for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                  return n;
                })(o, i, 5 / e);
                if (((e = dO(e)), isNaN(a))) return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(a, 2) * n;
                  return { stiffness: t, damping: 2 * s * Math.sqrt(n * t), duration: e };
                }
              })(e);
              (t = { ...t, ...r, mass: 1 }).isResolvedFromDuration = !0;
            }
          return t;
        })({ ...n, velocity: -((n.velocity || 0) / 1e3) }),
        g = f || 0,
        m = c / (2 * Math.sqrt(d * u)),
        w = a - s,
        v = Math.sqrt(d / u) / 1e3,
        b = 5 > Math.abs(w);
      if ((o || (o = b ? d9 : d3), i || (i = b ? d7 : ce), m < 1)) {
        let e = ct(v, m);
        r = (t) => a - Math.exp(-m * v * t) * (((g + m * v * w) / e) * Math.sin(e * t) + w * Math.cos(e * t));
      } else if (1 === m) r = (e) => a - Math.exp(-v * e) * (w + (g + v * w) * e);
      else {
        let e = v * Math.sqrt(m * m - 1);
        r = (t) => {
          let r = Math.exp(-m * v * t),
            n = Math.min(e * t, 300);
          return a - (r * ((g + m * v * w) * Math.sinh(n) + e * w * Math.cosh(n))) / e;
        };
      }
      let y = {
        calculatedDuration: (p && h) || null,
        next: (e) => {
          let t = r(e);
          if (p) l.done = e >= h;
          else {
            let n = 0 === e ? g : 0;
            m < 1 && (n = 0 === e ? dO(g) : d8(r, e, t));
            let s = Math.abs(a - t) <= i;
            l.done = Math.abs(n) <= o && s;
          }
          return ((l.value = l.done ? a : t), l);
        },
        toString: () => {
          let e = Math.min(d4(y), 2e4),
            t = d6((t) => y.next(e * t).value, e, 30);
          return e + "ms " + t;
        },
        toTransition: () => {},
      };
      return y;
    }
    function cs({
      keyframes: e,
      velocity: t = 0,
      power: r = 0.8,
      timeConstant: n = 325,
      bounceDamping: o = 10,
      bounceStiffness: i = 500,
      modifyTarget: s,
      min: a,
      max: l,
      restDelta: d = 0.5,
      restSpeed: c,
    }) {
      let u,
        h,
        f = e[0],
        p = { done: !1, value: f },
        g = r * t,
        m = f + g,
        w = void 0 === s ? m : s(m);
      w !== m && (g = w - f);
      let v = (e) => -g * Math.exp(-e / n),
        b = (e) => w + v(e),
        y = (e) => {
          let t = v(e),
            r = b(e);
          ((p.done = Math.abs(t) <= d), (p.value = p.done ? w : r));
        },
        x = (e) => {
          let t;
          if (((t = p.value), (void 0 !== a && t < a) || (void 0 !== l && t > l))) {
            var r;
            ((u = e),
              (h = ci({
                keyframes: [
                  p.value,
                  ((r = p.value), void 0 === a ? l : void 0 === l || Math.abs(a - r) < Math.abs(l - r) ? a : l),
                ],
                velocity: d8(b, e, p.value),
                damping: o,
                stiffness: i,
                restDelta: d,
                restSpeed: c,
              })));
          }
        };
      return (
        x(0),
        {
          calculatedDuration: null,
          next: (e) => {
            let t = !1;
            return (h || void 0 !== u || ((t = !0), y(e), x(e)), void 0 !== u && e >= u)
              ? h.next(e - u)
              : (t || y(e), p);
          },
        }
      );
    }
    ci.applyToOptions = (e) => {
      let t = (function (e, t = 100, r) {
        let n = r({ ...e, keyframes: [0, t] }),
          o = Math.min(d4(n), 2e4);
        return { type: "keyframes", ease: (e) => n.next(o * e).value / t, duration: o / 1e3 };
      })(e, 100, ci);
      return ((e.ease = t.ease), (e.duration = dO(t.duration)), (e.type = "keyframes"), e);
    };
    let ca = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
    function cl(e, t, r, n) {
      return e === t && r === n
        ? a2
        : (o) =>
            0 === o || 1 === o
              ? o
              : ca(
                  (function (e, t, r, n, o) {
                    let i,
                      s,
                      a = 0;
                    do (i = ca((s = t + (r - t) / 2), n, o) - e) > 0 ? (r = s) : (t = s);
                    while (Math.abs(i) > 1e-7 && ++a < 12);
                    return s;
                  })(o, 0, 1, e, r),
                  t,
                  n,
                );
    }
    let cd = cl(0.42, 0, 1, 1),
      cc = cl(0, 0, 0.58, 1),
      cu = cl(0.42, 0, 0.58, 1),
      ch = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
      cf = (e) => (t) => 1 - e(1 - t),
      cp = cl(0.33, 1.53, 0.69, 0.99),
      cg = cf(cp),
      cm = ch(cg),
      cw = (e) => ((e *= 2) < 1 ? 0.5 * cg(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
      cv = (e) => 1 - Math.sin(Math.acos(e)),
      cb = cf(cv),
      cy = ch(cv),
      cx = (e) => Array.isArray(e) && "number" == typeof e[0],
      cC = {
        linear: a2,
        easeIn: cd,
        easeInOut: cu,
        easeOut: cc,
        circIn: cv,
        circInOut: cy,
        circOut: cb,
        backIn: cg,
        backInOut: cm,
        backOut: cp,
        anticipate: cw,
      },
      ck = (e) => {
        if (cx(e)) {
          aP(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
          let [t, r, n, o] = e;
          return cl(t, r, n, o);
        }
        return "string" == typeof e
          ? (aP(void 0 !== cC[e], `Invalid easing type '${e}'`, "invalid-easing-type"), cC[e])
          : e;
      },
      cM = (e, t, r) => {
        let n = t - e;
        return 0 === n ? 1 : (r - e) / n;
      };
    function cj({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
      var o;
      let i,
        s = Array.isArray(n) && "number" != typeof n[0] ? n.map(ck) : ck(n),
        a = { done: !1, value: t[0] },
        l = (function (e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
          let i = e.length;
          if ((aP(i === t.length, "Both input and output ranges must be the same length", "range-length"), 1 === i))
            return () => t[0];
          if (2 === i && t[0] === t[1]) return () => t[1];
          let s = e[0] === e[1];
          e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
          let a = (function (e, t, r) {
              let n = [],
                o = r || a6.mix || d5,
                i = e.length - 1;
              for (let r = 0; r < i; r++) {
                let i = o(e[r], e[r + 1]);
                (t && (i = dZ(Array.isArray(t) ? t[r] || a2 : t, i)), n.push(i));
              }
              return n;
            })(t, n, o),
            l = a.length,
            d = (r) => {
              if (s && r < e[0]) return t[0];
              let n = 0;
              if (l > 1) for (; n < e.length - 2 && !(r < e[n + 1]); n++);
              let o = cM(e[n], e[n + 1], r);
              return a[n](o);
            };
          return r ? (t) => d(sK(e[0], e[i - 1], t)) : d;
        })(
          ((o =
            r && r.length === t.length
              ? r
              : (!(function (e, t) {
                  let r = e[e.length - 1];
                  for (let n = 1; n <= t; n++) {
                    let o = cM(0, t, n);
                    e.push(lq(r, 1, o));
                  }
                })((i = [0]), t.length - 1),
                i)),
          o.map((t) => t * e)),
          t,
          { ease: Array.isArray(s) ? s : t.map(() => s || cu).splice(0, t.length - 1) },
        );
      return { calculatedDuration: e, next: (t) => ((a.value = l(t)), (a.done = t >= e), a) };
    }
    let cL = (e) => null !== e;
    function cS(e, { repeat: t, repeatType: r = "loop" }, n, o = 1) {
      let i = e.filter(cL),
        s = o < 0 || (t && "loop" !== r && t % 2 == 1) ? 0 : i.length - 1;
      return s && void 0 !== n ? n : i[s];
    }
    let cV = { decay: cs, inertia: cs, tween: cj, keyframes: cj, spring: ci };
    function cR(e) {
      "string" == typeof e.type && (e.type = cV[e.type]);
    }
    class cH {
      constructor() {
        this.updateFinished();
      }
      get finished() {
        return this._finished;
      }
      updateFinished() {
        this._finished = new Promise((e) => {
          this.resolve = e;
        });
      }
      notifyFinished() {
        this.resolve();
      }
      then(e, t) {
        return this.finished.then(e, t);
      }
    }
    let c$ = (e) => e / 100;
    class cT extends cH {
      constructor(e) {
        (super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.stop = () => {
            let { motionValue: e } = this.options;
            (e && e.updatedAt !== lm.now() && this.tick(lm.now()),
              (this.isStopped = !0),
              "idle" !== this.state && (this.teardown(), this.options.onStop?.()));
          }),
          dD.mainThread++,
          (this.options = e),
          this.initAnimation(),
          this.play(),
          !1 === e.autoplay && this.pause());
      }
      initAnimation() {
        let { options: e } = this;
        cR(e);
        let { type: t = cj, repeat: r = 0, repeatDelay: n = 0, repeatType: o, velocity: i = 0 } = e,
          { keyframes: s } = e,
          a = t || cj;
        a !== cj && "number" != typeof s[0] && ((this.mixKeyframes = dZ(c$, d5(s[0], s[1]))), (s = [0, 100]));
        let l = a({ ...e, keyframes: s });
        ("mirror" === o && (this.mirroredGenerator = a({ ...e, keyframes: [...s].reverse(), velocity: -i })),
          null === l.calculatedDuration && (l.calculatedDuration = d4(l)));
        let { calculatedDuration: d } = l;
        ((this.calculatedDuration = d),
          (this.resolvedDuration = d + n),
          (this.totalDuration = this.resolvedDuration * (r + 1) - n),
          (this.generator = l));
      }
      updateTime(e) {
        let t = Math.round(e - this.startTime) * this.playbackSpeed;
        null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = t);
      }
      tick(e, t = !1) {
        let {
          generator: r,
          totalDuration: n,
          mixKeyframes: o,
          mirroredGenerator: i,
          resolvedDuration: s,
          calculatedDuration: a,
        } = this;
        if (null === this.startTime) return r.next(0);
        let {
          delay: l = 0,
          keyframes: d,
          repeat: c,
          repeatType: u,
          repeatDelay: h,
          type: f,
          onUpdate: p,
          finalKeyframe: g,
        } = this.options;
        (this.speed > 0
          ? (this.startTime = Math.min(this.startTime, e))
          : this.speed < 0 && (this.startTime = Math.min(e - n / this.speed, this.startTime)),
          t ? (this.currentTime = e) : this.updateTime(e));
        let m = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
          w = this.playbackSpeed >= 0 ? m < 0 : m > n;
        ((this.currentTime = Math.max(m, 0)),
          "finished" === this.state && null === this.holdTime && (this.currentTime = n));
        let v = this.currentTime,
          b = r;
        if (c) {
          let e = Math.min(this.currentTime, n) / s,
            t = Math.floor(e),
            r = e % 1;
          (!r && e >= 1 && (r = 1),
            1 === r && t--,
            (t = Math.min(t, c + 1)) % 2 &&
              ("reverse" === u ? ((r = 1 - r), h && (r -= h / s)) : "mirror" === u && (b = i)),
            (v = sK(0, 1, r) * s));
        }
        let y = w ? { done: !1, value: d[0] } : b.next(v);
        o && (y.value = o(y.value));
        let { done: x } = y;
        w || null === a || (x = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
        let C = null === this.holdTime && ("finished" === this.state || ("running" === this.state && x));
        return (
          C && f !== cs && (y.value = cS(d, this.options, g, this.speed)),
          p && p(y.value),
          C && this.finish(),
          y
        );
      }
      then(e, t) {
        return this.finished.then(e, t);
      }
      get duration() {
        return this.calculatedDuration / 1e3;
      }
      get iterationDuration() {
        let { delay: e = 0 } = this.options || {};
        return this.duration + e / 1e3;
      }
      get time() {
        return this.currentTime / 1e3;
      }
      set time(e) {
        ((e = dO(e)),
          (this.currentTime = e),
          null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed
            ? (this.holdTime = e)
            : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
          this.driver?.start(!1));
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(e) {
        this.updateTime(lm.now());
        let t = this.playbackSpeed !== e;
        ((this.playbackSpeed = e), t && (this.time = this.currentTime / 1e3));
      }
      play() {
        if (this.isStopped) return;
        let { driver: e = d2, startTime: t } = this.options;
        (this.driver || (this.driver = e((e) => this.tick(e))), this.options.onPlay?.());
        let r = this.driver.now();
        ("finished" === this.state
          ? (this.updateFinished(), (this.startTime = r))
          : null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime || (this.startTime = t ?? r),
          "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start());
      }
      pause() {
        ((this.state = "paused"), this.updateTime(lm.now()), (this.holdTime = this.currentTime));
      }
      complete() {
        ("running" !== this.state && this.play(), (this.state = "finished"), (this.holdTime = null));
      }
      finish() {
        (this.notifyFinished(), this.teardown(), (this.state = "finished"), this.options.onComplete?.());
      }
      cancel() {
        ((this.holdTime = null), (this.startTime = 0), this.tick(0), this.teardown(), this.options.onCancel?.());
      }
      teardown() {
        ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null), dD.mainThread--);
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(e) {
        return ((this.startTime = 0), this.tick(e, !0));
      }
      attachTimeline(e) {
        return (
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
          this.driver?.stop(),
          e.observe(this)
        );
      }
    }
    function cE(e) {
      let t;
      return () => (void 0 === t && (t = e()), t);
    }
    let cB = cE(() => void 0 !== window.ScrollTimeline),
      cP = {},
      cI =
        ((i = cE(() => {
          try {
            document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (e) {
            return !1;
          }
          return !0;
        })),
        () => cP.linearEasing ?? i()),
      cA = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
      cW = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: cA([0, 0.65, 0.55, 1]),
        circOut: cA([0.55, 0, 1, 0.45]),
        backIn: cA([0.31, 0.01, 0.66, -0.59]),
        backOut: cA([0.33, 1.53, 0.69, 0.99]),
      };
    function cz(e) {
      return "function" == typeof e && "applyToOptions" in e;
    }
    class cO extends cH {
      constructor(e) {
        if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !e)) return;
        const {
          element: t,
          name: r,
          keyframes: n,
          pseudoElement: o,
          allowFlatten: i = !1,
          finalKeyframe: s,
          onComplete: a,
        } = e;
        ((this.isPseudoElement = !!o),
          (this.allowFlatten = i),
          (this.options = e),
          aP("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring"));
        const l = (function ({ type: e, ...t }) {
          return cz(e) && cI()
            ? e.applyToOptions(t)
            : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
        })(e);
        ((this.animation = (function (
          e,
          t,
          r,
          {
            delay: n = 0,
            duration: o = 300,
            repeat: i = 0,
            repeatType: s = "loop",
            ease: a = "easeOut",
            times: l,
          } = {},
          d,
        ) {
          let c = { [t]: r };
          l && (c.offset = l);
          let u = (function e(t, r) {
            if (t)
              return "function" == typeof t
                ? cI()
                  ? d6(t, r)
                  : "ease-out"
                : cx(t)
                  ? cA(t)
                  : Array.isArray(t)
                    ? t.map((t) => e(t, r) || cW.easeOut)
                    : cW[t];
          })(a, o);
          Array.isArray(u) && (c.easing = u);
          let h = {
            delay: n,
            duration: o,
            easing: Array.isArray(u) ? "linear" : u,
            fill: "both",
            iterations: i + 1,
            direction: "reverse" === s ? "alternate" : "normal",
          };
          d && (h.pseudoElement = d);
          let f = e.animate(c, h);
          return f;
        })(t, r, n, l, o)),
          !1 === l.autoplay && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !o)) {
              let e = cS(n, this.options, s, this.speed);
              (this.updateMotionValue
                ? this.updateMotionValue(e)
                : r.startsWith("--")
                  ? t.style.setProperty(r, e)
                  : (t.style[r] = e),
                this.animation.cancel());
            }
            (a?.(), this.notifyFinished());
          }));
      }
      play() {
        this.isStopped ||
          ((this.manualStartTime = null), this.animation.play(), "finished" === this.state && this.updateFinished());
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.finish?.();
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch (e) {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        let { state: e } = this;
        "idle" !== e &&
          "finished" !== e &&
          (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
          this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        let e = this.options?.element;
        !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
      }
      get duration() {
        return Number(this.animation.effect?.getComputedTiming?.().duration || 0) / 1e3;
      }
      get iterationDuration() {
        let { delay: e = 0 } = this.options || {};
        return this.duration + e / 1e3;
      }
      get time() {
        return (Number(this.animation.currentTime) || 0) / 1e3;
      }
      set time(e) {
        ((this.manualStartTime = null), (this.finishedTime = null), (this.animation.currentTime = dO(e)));
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(e) {
        (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
      }
      get state() {
        return null !== this.finishedTime ? "finished" : this.animation.playState;
      }
      get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
      }
      set startTime(e) {
        this.manualStartTime = this.animation.startTime = e;
      }
      attachTimeline({ timeline: e, observe: t }) {
        return (this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
        (this.animation.onfinish = null),
        e && cB())
          ? ((this.animation.timeline = e), a2)
          : t(this);
      }
    }
    let c_ = { anticipate: cw, backInOut: cm, circInOut: cy };
    class cZ extends cO {
      constructor(e) {
        (!(function (e) {
          "string" == typeof e.ease && e.ease in c_ && (e.ease = c_[e.ease]);
        })(e),
          cR(e),
          super(e),
          void 0 !== e.startTime && (this.startTime = e.startTime),
          (this.options = e));
      }
      updateMotionValue(e) {
        let { motionValue: t, onUpdate: r, onComplete: n, element: o, ...i } = this.options;
        if (!t) return;
        if (void 0 !== e) return void t.set(e);
        let s = new cT({ ...i, autoplay: !1 }),
          a = Math.max(10, lm.now() - this.startTime),
          l = sK(0, 10, a - 10);
        (t.setWithVelocity(s.sample(Math.max(0, a - l)).value, s.sample(a).value, l), s.stop());
      }
    }
    let cD = (e, t) =>
      "zIndex" !== t &&
      !!(
        "number" == typeof e ||
        Array.isArray(e) ||
        ("string" == typeof e && (am.test(e) || "0" === e) && !e.startsWith("url("))
      );
    function cN(e) {
      ((e.duration = 0), (e.type = "keyframes"));
    }
    let cF = new Set(["opacity", "clipPath", "filter", "transform"]),
      cU = cE(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class cG extends cH {
      constructor({
        autoplay: e = !0,
        delay: t = 0,
        type: r = "keyframes",
        repeat: n = 0,
        repeatDelay: o = 0,
        repeatType: i = "loop",
        keyframes: s,
        name: a,
        motionValue: l,
        element: d,
        ...c
      }) {
        (super(),
          (this.stop = () => {
            (this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel());
          }),
          (this.createdAt = lm.now()));
        const u = {
            autoplay: e,
            delay: t,
            type: r,
            repeat: n,
            repeatDelay: o,
            repeatType: i,
            name: a,
            motionValue: l,
            element: d,
            ...c,
          },
          h = d?.KeyframeResolver || la;
        ((this.keyframeResolver = new h(s, (e, t, r) => this.onKeyframesResolved(e, t, u, !r), a, l, d)),
          this.keyframeResolver?.scheduleResolve());
      }
      onKeyframesResolved(e, t, r, n) {
        this.keyframeResolver = void 0;
        let { name: o, type: i, velocity: s, delay: a, isHandoff: l, onUpdate: d } = r;
        ((this.resolvedAt = lm.now()),
          !(function (e, t, r, n) {
            let o = e[0];
            if (null === o) return !1;
            if ("display" === t || "visibility" === t) return !0;
            let i = e[e.length - 1],
              s = cD(o, t),
              a = cD(i, t);
            return (
              aB(
                s === a,
                `You are trying to animate ${t} from "${o}" to "${i}". "${s ? i : o}" is not an animatable value.`,
                "value-not-animatable",
              ),
              !!s &&
                !!a &&
                ((function (e) {
                  let t = e[0];
                  if (1 === e.length) return !0;
                  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
                })(e) ||
                  (("spring" === r || cz(r)) && n))
            );
          })(e, o, i, s) &&
            ((a6.instantAnimations || !a) && d?.(cS(e, r, t)), (e[0] = e[e.length - 1]), cN(r), (r.repeat = 0)));
        let c = {
            startTime: n
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : void 0,
            finalKeyframe: t,
            ...r,
            keyframes: e,
          },
          u =
            !l &&
            (function (e) {
              let { motionValue: t, name: r, repeatDelay: n, repeatType: o, damping: i, type: s } = e;
              if (!(t?.owner?.current instanceof HTMLElement)) return !1;
              let { onUpdate: a, transformTemplate: l } = t.owner.getProps();
              return (
                cU() &&
                r &&
                cF.has(r) &&
                ("transform" !== r || !l) &&
                !a &&
                !n &&
                "mirror" !== o &&
                0 !== i &&
                "inertia" !== s
              );
            })(c),
          h = c.motionValue?.owner?.current,
          f = u ? new cZ({ ...c, element: h }) : new cT(c);
        (f.finished
          .then(() => {
            this.notifyFinished();
          })
          .catch(a2),
          this.pendingTimeline &&
            ((this.stopTimeline = f.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)),
          (this._animation = f));
      }
      get finished() {
        return this._animation ? this.animation.finished : this._finished;
      }
      then(e, t) {
        return this.finished.finally(e).then(() => {});
      }
      get animation() {
        return (
          this._animation || (this.keyframeResolver?.resume(), (lo = !0), ls(), li(), (lo = !1)),
          this._animation
        );
      }
      get duration() {
        return this.animation.duration;
      }
      get iterationDuration() {
        return this.animation.iterationDuration;
      }
      get time() {
        return this.animation.time;
      }
      set time(e) {
        this.animation.time = e;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(e) {
        this.animation.speed = e;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(e) {
        return (
          this._animation ? (this.stopTimeline = this.animation.attachTimeline(e)) : (this.pendingTimeline = e),
          () => this.stop()
        );
      }
      play() {
        this.animation.play();
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.complete();
      }
      cancel() {
        (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
      }
    }
    let cY = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      cX = { type: "keyframes", duration: 0.8 },
      cq = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      cK = (e) => null !== e,
      cJ =
        (e, t, r, n = {}, o, i) =>
        (s) => {
          let a = dA(n, e) || {},
            l = a.delay || n.delay || 0,
            { elapsed: d = 0 } = n;
          d -= dO(l);
          let c = {
            keyframes: Array.isArray(r) ? r : [null, r],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...a,
            delay: -d,
            onUpdate: (e) => {
              (t.set(e), a.onUpdate && a.onUpdate(e));
            },
            onComplete: () => {
              (s(), a.onComplete && a.onComplete());
            },
            name: e,
            motionValue: t,
            element: i ? void 0 : o,
          };
          (!(function ({
            when: e,
            delay: t,
            delayChildren: r,
            staggerChildren: n,
            staggerDirection: o,
            repeat: i,
            repeatType: s,
            repeatDelay: a,
            from: l,
            elapsed: d,
            ...c
          }) {
            return !!Object.keys(c).length;
          })(a) &&
            Object.assign(
              c,
              ((e, { keyframes: t }) =>
                t.length > 2
                  ? cX
                  : sq.has(e)
                    ? e.startsWith("scale")
                      ? { type: "spring", stiffness: 550, damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }
                      : cY
                    : cq)(e, c),
            ),
            c.duration && (c.duration = dO(c.duration)),
            c.repeatDelay && (c.repeatDelay = dO(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from));
          let u = !1;
          if (
            ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) || (cN(c), 0 === c.delay && (u = !0)),
            (a6.instantAnimations || a6.skipAnimations || o?.shouldSkipAnimations) && ((u = !0), cN(c), (c.delay = 0)),
            (c.allowFlatten = !a.type && !a.ease),
            u && !i && void 0 !== t.get())
          ) {
            let e = (function (e, { repeat: t, repeatType: r = "loop" }, n) {
              let o = e.filter(cK),
                i = t && "loop" !== r && t % 2 == 1 ? 0 : o.length - 1;
              return o[i];
            })(c.keyframes, a);
            if (void 0 !== e)
              return void a9.update(() => {
                (c.onUpdate(e), c.onComplete());
              });
          }
          return a.isSync ? new cT(c) : new cG(c);
        };
    function cQ(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
      let { transition: i = e.getDefaultTransition(), transitionEnd: s, ...a } = t,
        l = i?.reduceMotion;
      n && (i = n);
      let d = [],
        c = o && e.animationState && e.animationState.getState()[o];
      for (let t in a) {
        let n = e.getValue(t, e.latestValues[t] ?? null),
          o = a[t];
        if (
          void 0 === o ||
          (c &&
            (function ({ protectedKeys: e, needsAnimating: t }, r) {
              let n = e.hasOwnProperty(r) && !0 !== t[r];
              return ((t[r] = !1), n);
            })(c, t))
        )
          continue;
        let s = { delay: r, ...dA(i || {}, t) },
          u = n.get();
        if (void 0 !== u && !n.isAnimating && !Array.isArray(o) && o === u && !s.velocity) continue;
        let h = !1;
        if (window.MotionHandoffAnimation) {
          let r = e.props[dH];
          if (r) {
            let e = window.MotionHandoffAnimation(r, t, a9);
            null !== e && ((s.startTime = e), (h = !0));
          }
        }
        dz(e, t);
        let f = l ?? e.shouldReduceMotion;
        n.start(cJ(t, n, o, f && aH.has(t) ? { type: !1 } : s, e, h));
        let p = n.animation;
        p && d.push(p);
      }
      return (
        s &&
          Promise.all(d).then(() => {
            a9.update(() => {
              s &&
                (function (e, t) {
                  let { transitionEnd: r = {}, transition: n = {}, ...o } = dI(e, t) || {};
                  for (let t in (o = { ...o, ...r })) {
                    var i;
                    let r = dW((i = o[t])) ? i[i.length - 1] || 0 : i;
                    e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, lv(r));
                  }
                })(e, s);
            });
          }),
        d
      );
    }
    function c1(e, t, r, n = 0, o = 1) {
      let i = Array.from(e)
          .sort((e, t) => e.sortNodePosition(t))
          .indexOf(t),
        s = e.size,
        a = (s - 1) * n;
      return "function" == typeof r ? r(i, s) : 1 === o ? i * n : a - i * n;
    }
    function c0(e, t, r = {}) {
      let n = dI(e, t, "exit" === r.type ? e.presenceContext?.custom : void 0),
        { transition: o = e.getDefaultTransition() || {} } = n || {};
      r.transitionOverride && (o = r.transitionOverride);
      let i = n ? () => Promise.all(cQ(e, n, r)) : () => Promise.resolve(),
        s =
          e.variantChildren && e.variantChildren.size
            ? (n = 0) => {
                let { delayChildren: i = 0, staggerChildren: s, staggerDirection: a } = o;
                return (function (e, t, r = 0, n = 0, o = 0, i = 1, s) {
                  let a = [];
                  for (let l of e.variantChildren)
                    (l.notify("AnimationStart", t),
                      a.push(
                        c0(l, t, {
                          ...s,
                          delay: r + ("function" == typeof n ? 0 : n) + c1(e.variantChildren, l, n, o, i),
                        }).then(() => l.notify("AnimationComplete", t)),
                      ));
                  return Promise.all(a);
                })(e, t, n, i, s, a, r);
              }
            : () => Promise.resolve(),
        { when: a } = o;
      if (!a) return Promise.all([i(), s(r.delay)]);
      {
        let [e, t] = "beforeChildren" === a ? [i, s] : [s, i];
        return e().then(() => t());
      }
    }
    let c5 = lS.length;
    function c2(e, t) {
      if (!Array.isArray(t)) return !1;
      let r = t.length;
      if (r !== e.length) return !1;
      for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
      return !0;
    }
    let c6 = [...lL].reverse(),
      c4 = lL.length;
    function c8(e = !1) {
      return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
    }
    function c9() {
      return {
        animate: c8(!0),
        whileInView: c8(),
        whileHover: c8(),
        whileTap: c8(),
        whileDrag: c8(),
        whileFocus: c8(),
        exit: c8(),
      };
    }
    let c3 = 0;
    function c7(e) {
      return [e("x"), e("y")];
    }
    let ue = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
    function ut(e) {
      return ue.has(e.tagName) || !0 === e.isContentEditable;
    }
    function ur(e, t, r, n = { passive: !0 }) {
      return (e.addEventListener(t, r, n), () => e.removeEventListener(t, r));
    }
    let un = { x: !1, y: !1 };
    function uo(e) {
      return e.max - e.min;
    }
    function ui(e, t, r, n = 0.5) {
      ((e.origin = n),
        (e.originPoint = lq(t.min, t.max, e.origin)),
        (e.scale = uo(r) / uo(t)),
        (e.translate = lq(r.min, r.max, e.origin) - e.originPoint),
        ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) && (e.scale = 1),
        ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) && (e.translate = 0));
    }
    function us(e, t, r, n) {
      (ui(e.x, t.x, r.x, n ? n.originX : void 0), ui(e.y, t.y, r.y, n ? n.originY : void 0));
    }
    function ua(e, t, r) {
      ((e.min = r.min + t.min), (e.max = e.min + uo(t)));
    }
    function ul(e, t, r) {
      ((e.min = t.min - r.min), (e.max = e.min + uo(t)));
    }
    function ud(e, t, r) {
      (ul(e.x, t.x, r.x), ul(e.y, t.y, r.y));
    }
    let uc = (e) => ("mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary);
    function uu(e) {
      return { point: { x: e.pageX, y: e.pageY } };
    }
    function uh(e, t, r, n) {
      return ur(e, t, (e) => uc(e) && r(e, uu(e)), n);
    }
    let uf = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
      up = (e, t) => Math.abs(e - t),
      ug = new Set(["auto", "scroll"]);
    class um {
      constructor(
        e,
        t,
        {
          transformPagePoint: r,
          contextWindow: n = window,
          dragSnapToOrigin: o = !1,
          distanceThreshold: i = 3,
          element: s,
        } = {},
      ) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.scrollPositions = new Map()),
          (this.removeScrollListeners = null),
          (this.onElementScroll = (e) => {
            this.handleScroll(e.target);
          }),
          (this.onWindowScroll = () => {
            this.handleScroll(window);
          }),
          (this.updatePoint = () => {
            var e, t;
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            let r = ub(this.lastMoveEventInfo, this.history),
              n = null !== this.startEvent,
              o =
                ((e = r.offset),
                (t = { x: 0, y: 0 }),
                Math.sqrt(up(e.x, t.x) ** 2 + up(e.y, t.y) ** 2) >= this.distanceThreshold);
            if (!n && !o) return;
            let { point: i } = r,
              { timestamp: s } = a7;
            this.history.push({ ...i, timestamp: s });
            let { onStart: a, onMove: l } = this.handlers;
            (n || (a && a(this.lastMoveEvent, r), (this.startEvent = this.lastMoveEvent)),
              l && l(this.lastMoveEvent, r));
          }),
          (this.handlePointerMove = (e, t) => {
            ((this.lastMoveEvent = e),
              (this.lastMoveEventInfo = uw(t, this.transformPagePoint)),
              a9.update(this.updatePoint, !0));
          }),
          (this.handlePointerUp = (e, t) => {
            this.end();
            let { onEnd: r, onSessionEnd: n, resumeAnimation: o } = this.handlers;
            if (
              ((this.dragSnapToOrigin || !this.startEvent) && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo))
            )
              return;
            let i = ub(
              "pointercancel" === e.type ? this.lastMoveEventInfo : uw(t, this.transformPagePoint),
              this.history,
            );
            (this.startEvent && r && r(e, i), n && n(e, i));
          }),
          !uc(e))
        )
          return;
        ((this.dragSnapToOrigin = o),
          (this.handlers = t),
          (this.transformPagePoint = r),
          (this.distanceThreshold = i),
          (this.contextWindow = n || window));
        const a = uw(uu(e), this.transformPagePoint),
          { point: l } = a,
          { timestamp: d } = a7;
        this.history = [{ ...l, timestamp: d }];
        const { onSessionStart: c } = t;
        (c && c(e, ub(a, this.history)),
          (this.removeListeners = dZ(
            uh(this.contextWindow, "pointermove", this.handlePointerMove),
            uh(this.contextWindow, "pointerup", this.handlePointerUp),
            uh(this.contextWindow, "pointercancel", this.handlePointerUp),
          )),
          s && this.startScrollTracking(s));
      }
      startScrollTracking(e) {
        let t = e.parentElement;
        for (; t; ) {
          let e = getComputedStyle(t);
          ((ug.has(e.overflowX) || ug.has(e.overflowY)) &&
            this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
            (t = t.parentElement));
        }
        (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
          window.addEventListener("scroll", this.onElementScroll, { capture: !0, passive: !0 }),
          window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
          (this.removeScrollListeners = () => {
            (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
              window.removeEventListener("scroll", this.onWindowScroll));
          }));
      }
      handleScroll(e) {
        let t = this.scrollPositions.get(e);
        if (!t) return;
        let r = e === window,
          n = r ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
          o = { x: n.x - t.x, y: n.y - t.y };
        (0 !== o.x || 0 !== o.y) &&
          (r
            ? this.lastMoveEventInfo &&
              ((this.lastMoveEventInfo.point.x += o.x), (this.lastMoveEventInfo.point.y += o.y))
            : this.history.length > 0 && ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
          this.scrollPositions.set(e, n),
          a9.update(this.updatePoint, !0));
      }
      updateHandlers(e) {
        this.handlers = e;
      }
      end() {
        (this.removeListeners && this.removeListeners(),
          this.removeScrollListeners && this.removeScrollListeners(),
          this.scrollPositions.clear(),
          a3(this.updatePoint));
      }
    }
    function uw(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function uv(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function ub({ point: e }, t) {
      return {
        point: e,
        delta: uv(e, uy(t)),
        offset: uv(e, t[0]),
        velocity: (function (e, t) {
          if (e.length < 2) return { x: 0, y: 0 };
          let r = e.length - 1,
            n = null,
            o = uy(e);
          for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > dO(0.1))); ) r--;
          if (!n) return { x: 0, y: 0 };
          let i = (o.timestamp - n.timestamp) / 1e3;
          if (0 === i) return { x: 0, y: 0 };
          let s = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
          return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
        })(t, 0.1),
      };
    }
    function uy(e) {
      return e[e.length - 1];
    }
    function ux(e, t, r) {
      return { min: void 0 !== t ? e.min + t : void 0, max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0 };
    }
    function uC(e, t) {
      let r = t.min - e.min,
        n = t.max - e.max;
      return (t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n });
    }
    function uk(e, t, r) {
      return { min: uM(e, t), max: uM(e, r) };
    }
    function uM(e, t) {
      return "number" == typeof e ? e : e[t] || 0;
    }
    let uj = new WeakMap();
    class uL {
      constructor(e) {
        ((this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = aV()),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = e));
      }
      start(e, { snapToCursor: t = !1, distanceThreshold: r } = {}) {
        let { presenceContext: n } = this.visualElement;
        if (n && !1 === n.isPresent) return;
        let o = (e) => {
            t ? (this.stopAnimation(), this.snapToCursor(uu(e).point)) : this.pauseAnimation();
          },
          i = (e, t) => {
            this.stopAnimation();
            let { drag: r, dragPropagation: n, onDragStart: o } = this.getProps();
            if (
              r &&
              !n &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (function (e) {
                if ("x" === e || "y" === e)
                  if (un[e]) return null;
                  else
                    return (
                      (un[e] = !0),
                      () => {
                        un[e] = !1;
                      }
                    );
                return un.x || un.y
                  ? null
                  : ((un.x = un.y = !0),
                    () => {
                      un.x = un.y = !1;
                    });
              })(r)),
              !this.openDragLock)
            )
              return;
            ((this.latestPointerEvent = e),
              (this.latestPanInfo = t),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              c7((e) => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (at.test(t)) {
                  let { projection: r } = this.visualElement;
                  if (r && r.layout) {
                    let n = r.layout.layoutBox[e];
                    n && (t = uo(n) * (parseFloat(t) / 100));
                  }
                }
                this.originPoint[e] = t;
              }),
              o && a9.postRender(() => o(e, t)),
              dz(this.visualElement, "transform"));
            let { animationState: i } = this.visualElement;
            i && i.setActive("whileDrag", !0);
          },
          s = (e, t) => {
            ((this.latestPointerEvent = e), (this.latestPanInfo = t));
            let { dragPropagation: r, dragDirectionLock: n, onDirectionLock: o, onDrag: i } = this.getProps();
            if (!r && !this.openDragLock) return;
            let { offset: s } = t;
            if (n && null === this.currentDirection) {
              ((this.currentDirection = (function (e, t = 10) {
                let r = null;
                return (Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r);
              })(s)),
                null !== this.currentDirection && o && o(this.currentDirection));
              return;
            }
            (this.updateAxis("x", t.point, s),
              this.updateAxis("y", t.point, s),
              this.visualElement.render(),
              i && i(e, t));
          },
          a = (e, t) => {
            ((this.latestPointerEvent = e),
              (this.latestPanInfo = t),
              this.stop(e, t),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null));
          },
          l = () => c7((e) => "paused" === this.getAnimationState(e) && this.getAxisMotionValue(e).animation?.play()),
          { dragSnapToOrigin: d } = this.getProps();
        this.panSession = new um(
          e,
          { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a, resumeAnimation: l },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: d,
            distanceThreshold: r,
            contextWindow: uf(this.visualElement),
            element: this.visualElement.current,
          },
        );
      }
      stop(e, t) {
        let r = e || this.latestPointerEvent,
          n = t || this.latestPanInfo,
          o = this.isDragging;
        if ((this.cancel(), !o || !n || !r)) return;
        let { velocity: i } = n;
        this.startAnimation(i);
        let { onDragEnd: s } = this.getProps();
        s && a9.postRender(() => s(r, n));
      }
      cancel() {
        this.isDragging = !1;
        let { projection: e, animationState: t } = this.visualElement;
        (e && (e.isAnimationBlocked = !1), this.endPanSession());
        let { dragPropagation: r } = this.getProps();
        (!r && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
          t && t.setActive("whileDrag", !1));
      }
      endPanSession() {
        (this.panSession && this.panSession.end(), (this.panSession = void 0));
      }
      updateAxis(e, t, r) {
        let { drag: n } = this.getProps();
        if (!r || !uS(e, n, this.currentDirection)) return;
        let o = this.getAxisMotionValue(e),
          i = this.originPoint[e] + r[e];
        (this.constraints &&
          this.constraints[e] &&
          (i = (function (e, { min: t, max: r }, n) {
            return (
              void 0 !== t && e < t
                ? (e = n ? lq(t, e, n.min) : Math.max(e, t))
                : void 0 !== r && e > r && (e = n ? lq(r, e, n.max) : Math.min(e, r)),
              e
            );
          })(i, this.constraints[e], this.elastic[e])),
          o.set(i));
      }
      resolveConstraints() {
        let { dragConstraints: e, dragElastic: t } = this.getProps(),
          r =
            this.visualElement.projection && !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : this.visualElement.projection?.layout,
          n = this.constraints;
        (e && dT(e)
          ? this.constraints || (this.constraints = this.resolveRefConstraints())
          : e && r
            ? (this.constraints = (function (e, { top: t, left: r, bottom: n, right: o }) {
                return { x: ux(e.x, r, o), y: ux(e.y, t, n) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
          (this.elastic = (function (e = 0.35) {
            return (
              !1 === e ? (e = 0) : !0 === e && (e = 0.35),
              { x: uk(e, "left", "right"), y: uk(e, "top", "bottom") }
            );
          })(t)),
          n !== this.constraints &&
            r &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            c7((e) => {
              var t, n;
              let o;
              !1 !== this.constraints &&
                this.getAxisMotionValue(e) &&
                (this.constraints[e] =
                  ((t = r.layoutBox[e]),
                  (n = this.constraints[e]),
                  (o = {}),
                  void 0 !== n.min && (o.min = n.min - t.min),
                  void 0 !== n.max && (o.max = n.max - t.min),
                  o));
            }));
      }
      resolveRefConstraints() {
        var e;
        let { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
        if (!t || !dT(t)) return !1;
        let n = t.current;
        aP(
          null !== n,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          "drag-constraints-ref",
        );
        let { projection: o } = this.visualElement;
        if (!o || !o.layout) return !1;
        let i = (function (e, t, r) {
            let n = dn(e, r),
              { scroll: o } = t;
            return (o && (de(n.x, o.offset.x), de(n.y, o.offset.y)), n);
          })(n, o.root, this.visualElement.getTransformPagePoint()),
          s = ((e = o.layout.layoutBox), { x: uC(e.x, i.x), y: uC(e.y, i.y) });
        if (r) {
          let e = r(
            (function ({ x: e, y: t }) {
              return { top: t.min, right: e.max, bottom: t.max, left: e.min };
            })(s),
          );
          ((this.hasMutatedConstraints = !!e), e && (s = l5(e)));
        }
        return s;
      }
      startAnimation(e) {
        let {
            drag: t,
            dragMomentum: r,
            dragElastic: n,
            dragTransition: o,
            dragSnapToOrigin: i,
            onDragTransitionEnd: s,
          } = this.getProps(),
          a = this.constraints || {};
        return Promise.all(
          c7((s) => {
            if (!uS(s, t, this.currentDirection)) return;
            let l = (a && a[s]) || {};
            i && (l = { min: 0, max: 0 });
            let d = {
              type: "inertia",
              velocity: r ? e[s] : 0,
              bounceStiffness: n ? 200 : 1e6,
              bounceDamping: n ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...o,
              ...l,
            };
            return this.startAxisValueAnimation(s, d);
          }),
        ).then(s);
      }
      startAxisValueAnimation(e, t) {
        let r = this.getAxisMotionValue(e);
        return (dz(this.visualElement, e), r.start(cJ(e, r, 0, t, this.visualElement, !1)));
      }
      stopAnimation() {
        c7((e) => this.getAxisMotionValue(e).stop());
      }
      pauseAnimation() {
        c7((e) => this.getAxisMotionValue(e).animation?.pause());
      }
      getAnimationState(e) {
        return this.getAxisMotionValue(e).animation?.state;
      }
      getAxisMotionValue(e) {
        let t = `_drag${e.toUpperCase()}`,
          r = this.visualElement.getProps();
        return r[t] || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0);
      }
      snapToCursor(e) {
        c7((t) => {
          let { drag: r } = this.getProps();
          if (!uS(t, r, this.currentDirection)) return;
          let { projection: n } = this.visualElement,
            o = this.getAxisMotionValue(t);
          if (n && n.layout) {
            let { min: r, max: i } = n.layout.layoutBox[t],
              s = o.get() || 0;
            o.set(e[t] - lq(r, i, 0.5) + s);
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let { drag: e, dragConstraints: t } = this.getProps(),
          { projection: r } = this.visualElement;
        if (!dT(t) || !r || !this.constraints) return;
        this.stopAnimation();
        let n = { x: 0, y: 0 };
        c7((e) => {
          let t = this.getAxisMotionValue(e);
          if (t && !1 !== this.constraints) {
            var r, o;
            let i,
              s,
              a,
              l = t.get();
            n[e] =
              ((r = { min: l, max: l }),
              (o = this.constraints[e]),
              (i = 0.5),
              (s = uo(r)),
              (a = uo(o)) > s ? (i = cM(o.min, o.max - s, r.min)) : s > a && (i = cM(r.min, r.max - a, o.min)),
              sK(0, 1, i));
          }
        });
        let { transformTemplate: o } = this.visualElement.getProps();
        ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
          r.root && r.root.updateScroll(),
          r.updateLayout(),
          this.resolveConstraints(),
          c7((t) => {
            if (!uS(t, e, null)) return;
            let r = this.getAxisMotionValue(t),
              { min: o, max: i } = this.constraints[t];
            r.set(lq(o, i, n[t]));
          }));
      }
      addListeners() {
        if (!this.visualElement.current) return;
        uj.set(this.visualElement, this);
        let e = this.visualElement.current,
          t = uh(e, "pointerdown", (t) => {
            let { drag: r, dragListener: n = !0 } = this.getProps(),
              o = t.target,
              i = o !== e && ut(o);
            r && n && !i && this.start(t);
          }),
          r = () => {
            let { dragConstraints: e } = this.getProps();
            dT(e) && e.current && (this.constraints = this.resolveRefConstraints());
          },
          { projection: n } = this.visualElement,
          o = n.addEventListener("measure", r);
        (n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), a9.read(r));
        let i = ur(window, "resize", () => this.scalePositionWithinConstraints()),
          s = n.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (c7((t) => {
                let r = this.getAxisMotionValue(t);
                r && ((this.originPoint[t] += e[t].translate), r.set(r.get() + e[t].translate));
              }),
              this.visualElement.render());
          });
        return () => {
          (i(), t(), o(), s && s());
        };
      }
      getProps() {
        let e = this.visualElement.getProps(),
          {
            drag: t = !1,
            dragDirectionLock: r = !1,
            dragPropagation: n = !1,
            dragConstraints: o = !1,
            dragElastic: i = 0.35,
            dragMomentum: s = !0,
          } = e;
        return {
          ...e,
          drag: t,
          dragDirectionLock: r,
          dragPropagation: n,
          dragConstraints: o,
          dragElastic: i,
          dragMomentum: s,
        };
      }
    }
    function uS(e, t, r) {
      return (!0 === t || t === e) && (null === r || r === e);
    }
    let uV = (e) => (t, r) => {
        e && a9.postRender(() => e(t, r));
      },
      uR = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    var uH = e2;
    function u$(e = !0) {
      let t = (0, e2.useContext)(dy);
      if (null === t) return [!0, null];
      let { isPresent: r, onExitComplete: n, register: o } = t,
        i = (0, e2.useId)();
      (0, e2.useEffect)(() => {
        if (e) return o(i);
      }, [e]);
      let s = (0, e2.useCallback)(() => e && n && n(i), [i, n, e]);
      return !r && n ? [!1, s] : [!0];
    }
    let uT = !1;
    class uE extends uH.Component {
      componentDidMount() {
        let { visualElement: e, layoutGroup: t, switchLayoutGroup: r, layoutId: n } = this.props,
          { projection: o } = e;
        (o &&
          (t.group && t.group.add(o),
          r && r.register && n && r.register(o),
          uT && o.root.didUpdate(),
          o.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          o.setOptions({
            ...o.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove(),
          })),
          (uR.hasEverUpdated = !0));
      }
      getSnapshotBeforeUpdate(e) {
        let { layoutDependency: t, visualElement: r, drag: n, isPresent: o } = this.props,
          { projection: i } = r;
        return (
          i &&
            ((i.isPresent = o),
            e.layoutDependency !== t && i.setOptions({ ...i.options, layoutDependency: t }),
            (uT = !0),
            n || e.layoutDependency !== t || void 0 === t || e.isPresent !== o ? i.willUpdate() : this.safeToRemove(),
            e.isPresent !== o &&
              (o
                ? i.promote()
                : i.relegate() ||
                  a9.postRender(() => {
                    let e = i.getStack();
                    (e && e.members.length) || this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        let { projection: e } = this.props.visualElement;
        e &&
          (e.root.didUpdate(),
          lp.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        let { visualElement: e, layoutGroup: t, switchLayoutGroup: r } = this.props,
          { projection: n } = e;
        ((uT = !0),
          n &&
            (n.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(n), r && r.deregister && r.deregister(n)));
      }
      safeToRemove() {
        let { safeToRemove: e } = this.props;
        e && e();
      }
      render() {
        return null;
      }
    }
    function uB(e) {
      let [t, r] = u$(),
        n = (0, uH.useContext)(dl);
      return (0, e0.jsx)(uE, {
        ...e,
        layoutGroup: n,
        switchLayoutGroup: (0, uH.useContext)(d$),
        isPresent: t,
        safeToRemove: r,
      });
    }
    function uP(e) {
      return "object" == typeof e && null !== e;
    }
    function uI(e) {
      return uP(e) && "ownerSVGElement" in e;
    }
    let uA = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      uW = uA.length,
      uz = (e) => ("string" == typeof e ? parseFloat(e) : e),
      uO = (e) => "number" == typeof e || ar.test(e);
    function u_(e, t) {
      return void 0 !== e[t] ? e[t] : e.borderRadius;
    }
    let uZ = uN(0, 0.5, cb),
      uD = uN(0.5, 0.95, a2);
    function uN(e, t, r) {
      return (n) => (n < e ? 0 : n > t ? 1 : r(cM(e, t, n)));
    }
    function uF(e, t) {
      ((e.min = t.min), (e.max = t.max));
    }
    function uU(e, t) {
      (uF(e.x, t.x), uF(e.y, t.y));
    }
    function uG(e, t) {
      ((e.translate = t.translate), (e.scale = t.scale), (e.originPoint = t.originPoint), (e.origin = t.origin));
    }
    function uY(e, t, r, n, o) {
      return ((e -= t), (e = n + (1 / r) * (e - n)), void 0 !== o && (e = n + (1 / o) * (e - n)), e);
    }
    function uX(e, t, [r, n, o], i, s) {
      !(function (e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
        if ((at.test(t) && ((t = parseFloat(t)), (t = lq(s.min, s.max, t / 100) - s.min)), "number" != typeof t))
          return;
        let a = lq(i.min, i.max, n);
        (e === i && (a -= t), (e.min = uY(e.min, t, r, a, o)), (e.max = uY(e.max, t, r, a, o)));
      })(e, t[r], t[n], t[o], t.scale, i, s);
    }
    let uq = ["x", "scaleX", "originX"],
      uK = ["y", "scaleY", "originY"];
    function uJ(e, t, r, n) {
      (uX(e.x, t, uq, r ? r.x : void 0, n ? n.x : void 0), uX(e.y, t, uK, r ? r.y : void 0, n ? n.y : void 0));
    }
    function uQ(e) {
      return 0 === e.translate && 1 === e.scale;
    }
    function u1(e) {
      return uQ(e.x) && uQ(e.y);
    }
    function u0(e, t) {
      return e.min === t.min && e.max === t.max;
    }
    function u5(e, t) {
      return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
    }
    function u2(e, t) {
      return u5(e.x, t.x) && u5(e.y, t.y);
    }
    function u6(e) {
      return uo(e.x) / uo(e.y);
    }
    function u4(e, t) {
      return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
    }
    class u8 {
      constructor() {
        this.members = [];
      }
      add(e) {
        (lu(this.members, e), e.scheduleRender());
      }
      remove(e) {
        if ((lh(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
          let e = this.members[this.members.length - 1];
          e && this.promote(e);
        }
      }
      relegate(e) {
        let t,
          r = this.members.findIndex((t) => e === t);
        if (0 === r) return !1;
        for (let e = r; e >= 0; e--) {
          let r = this.members[e];
          if (!1 !== r.isPresent) {
            t = r;
            break;
          }
        }
        return !!t && (this.promote(t), !0);
      }
      promote(e, t) {
        let r = this.lead;
        if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
          (r.instance && r.scheduleRender(), e.scheduleRender());
          let n = r.options.layoutDependency,
            o = e.options.layoutDependency;
          (void 0 === n || void 0 === o || n !== o) &&
            ((e.resumeFrom = r),
            t && (e.resumeFrom.preserveOpacity = !0),
            r.snapshot && ((e.snapshot = r.snapshot), (e.snapshot.latestValues = r.animationValues || r.latestValues)),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
          let { crossfade: i } = e.options;
          !1 === i && r.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((e) => {
          let { options: t, resumingFrom: r } = e;
          (t.onExitComplete && t.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete());
        });
      }
      scheduleRender() {
        this.members.forEach((e) => {
          e.instance && e.scheduleRender(!1);
        });
      }
      removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }
    }
    let u9 = (e, t) => e.depth - t.depth;
    class u3 {
      constructor() {
        ((this.children = []), (this.isDirty = !1));
      }
      add(e) {
        (lu(this.children, e), (this.isDirty = !0));
      }
      remove(e) {
        (lh(this.children, e), (this.isDirty = !0));
      }
      forEach(e) {
        (this.isDirty && this.children.sort(u9), (this.isDirty = !1), this.children.forEach(e));
      }
    }
    let u7 = ["", "X", "Y", "Z"],
      he = 0;
    function ht(e, t, r, n) {
      let { latestValues: o } = t;
      o[e] && ((r[e] = o[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
    }
    function hr({
      attachResizeListener: e,
      defaultParent: t,
      measureScroll: r,
      checkIsScrollRoot: n,
      resetTransform: o,
    }) {
      return class {
        constructor(e = {}, r = t?.()) {
          ((this.id = he++),
            (this.animationId = 0),
            (this.animationCommitId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.layoutVersion = 0),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              ((this.projectionUpdateScheduled = !1),
                this.nodes.forEach(hi),
                this.nodes.forEach(hh),
                this.nodes.forEach(hf),
                this.nodes.forEach(hs));
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.linkedParentVersion = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = e),
            (this.root = r ? r.root || r : this),
            (this.path = r ? [...r.path, r] : []),
            (this.parent = r),
            (this.depth = r ? r.depth + 1 : 0));
          for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
          this.root === this && (this.nodes = new u3());
        }
        addEventListener(e, t) {
          return (this.eventHandlers.has(e) || this.eventHandlers.set(e, new lf()), this.eventHandlers.get(e).add(t));
        }
        notifyListeners(e, ...t) {
          let r = this.eventHandlers.get(e);
          r && r.notify(...t);
        }
        hasListeners(e) {
          return this.eventHandlers.has(e);
        }
        mount(t) {
          if (this.instance) return;
          ((this.isSVG = uI(t) && !(uI(t) && "svg" === t.tagName)), (this.instance = t));
          let { layoutId: r, layout: n, visualElement: o } = this.options;
          if (
            (o && !o.current && o.mount(t),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (n || r) && (this.isLayoutDirty = !0),
            e)
          ) {
            let r,
              n = 0,
              o = () => (this.root.updateBlockedByResize = !1);
            (a9.read(() => {
              n = window.innerWidth;
            }),
              e(t, () => {
                let e = window.innerWidth;
                if (e !== n) {
                  let t, i;
                  ((n = e),
                    (this.root.updateBlockedByResize = !0),
                    r && r(),
                    (t = lm.now()),
                    (i = ({ timestamp: e }) => {
                      let r = e - t;
                      r >= 250 && (a3(i), o(r - 250));
                    }),
                    a9.setup(i, !0),
                    (r = () => a3(i)),
                    uR.hasAnimatedSinceResize && ((uR.hasAnimatedSinceResize = !1), this.nodes.forEach(hu)));
                }
              }));
          }
          (r && this.root.registerSharedNode(r, this),
            !1 !== this.options.animate &&
              o &&
              (r || n) &&
              this.addEventListener(
                "didUpdate",
                ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: r, layout: n }) => {
                  if (this.isTreeAnimationBlocked()) {
                    ((this.target = void 0), (this.relativeTarget = void 0));
                    return;
                  }
                  let i = this.options.transition || o.getDefaultTransition() || hb,
                    { onLayoutAnimationStart: s, onLayoutAnimationComplete: a } = o.getProps(),
                    l = !this.targetLayout || !u2(this.targetLayout, n),
                    d = !t && r;
                  if (this.options.layoutRoot || this.resumeFrom || d || (t && (l || !this.currentAnimation))) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0));
                    let t = { ...dA(i, "layout"), onPlay: s, onComplete: a };
                    ((o.shouldReduceMotion || this.options.layoutRoot) && ((t.delay = 0), (t.type = !1)),
                      this.startAnimation(t),
                      this.setAnimationOrigin(e, d));
                  } else (t || hu(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
                  this.targetLayout = n;
                },
              ));
        }
        unmount() {
          (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
          let e = this.getStack();
          (e && e.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            a3(this.updateProjection));
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
        }
        startUpdate() {
          !this.isUpdateBlocked() && ((this.isUpdating = !0), this.nodes && this.nodes.forEach(hp), this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: e } = this.options;
          return e && e.getProps().transformTemplate;
        }
        willUpdate(e = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              (function e(t) {
                if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
                let { visualElement: r } = t.options;
                if (!r) return;
                let n = r.props[dH];
                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                  let { layout: e, layoutId: r } = t.options;
                  window.MotionCancelOptimisedAnimation(n, "transform", a9, !(e || r));
                }
                let { parent: o } = t;
                o && !o.hasCheckedOptimisedAppear && e(o);
              })(this),
            this.root.isUpdating || this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let e = 0; e < this.path.length; e++) {
            let t = this.path[e];
            ((t.shouldResetTransform = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1));
          }
          let { layoutId: t, layout: r } = this.options;
          if (void 0 === t && !r) return;
          let n = this.getTransformTemplate();
          ((this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0),
            this.updateSnapshot(),
            e && this.notifyListeners("willUpdate"));
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hl));
            return;
          }
          if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(hd);
          ((this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1), this.nodes.forEach(hc), this.nodes.forEach(hn), this.nodes.forEach(ho))
              : this.nodes.forEach(hd),
            this.clearAllSnapshots());
          let e = lm.now();
          ((a7.delta = sK(0, 1e3 / 60, e - a7.timestamp)),
            (a7.timestamp = e),
            (a7.isProcessing = !0),
            le.update.process(a7),
            le.preRender.process(a7),
            le.render.process(a7),
            (a7.isProcessing = !1));
        }
        didUpdate() {
          this.updateScheduled || ((this.updateScheduled = !0), lp.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          (this.nodes.forEach(ha), this.sharedNodes.forEach(hg));
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0), a9.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          a9.postRender(() => {
            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot &&
            this.instance &&
            ((this.snapshot = this.measure()),
            !this.snapshot ||
              uo(this.snapshot.measuredBox.x) ||
              uo(this.snapshot.measuredBox.y) ||
              (this.snapshot = void 0));
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
          let e = this.layout;
          ((this.layout = this.measure(!1)),
            this.layoutVersion++,
            (this.layoutCorrected = aV()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox));
          let { visualElement: t } = this.options;
          t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
        }
        updateScroll(e = "measure") {
          let t = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
            t && this.instance)
          ) {
            let t = n(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: t,
              offset: r(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : t,
            };
          }
        }
        resetTransform() {
          if (!o) return;
          let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
            t = this.projectionDelta && !u1(this.projectionDelta),
            r = this.getTransformTemplate(),
            n = r ? r(this.latestValues, "") : void 0,
            i = n !== this.prevTransformTemplateValue;
          e &&
            this.instance &&
            (t || l4(this.latestValues) || i) &&
            (o(this.instance, n), (this.shouldResetTransform = !1), this.scheduleRender());
        }
        measure(e = !0) {
          var t;
          let r = this.measurePageBox(),
            n = this.removeElementScroll(r);
          return (
            e && (n = this.removeTransform(n)),
            hC((t = n).x),
            hC(t.y),
            { animationId: this.root.animationId, measuredBox: r, layoutBox: n, latestValues: {}, source: this.id }
          );
        }
        measurePageBox() {
          let { visualElement: e } = this.options;
          if (!e) return aV();
          let t = e.measureViewportBox();
          if (!(this.scroll?.wasRoot || this.path.some(hM))) {
            let { scroll: e } = this.root;
            e && (de(t.x, e.offset.x), de(t.y, e.offset.y));
          }
          return t;
        }
        removeElementScroll(e) {
          let t = aV();
          if ((uU(t, e), this.scroll?.wasRoot)) return t;
          for (let r = 0; r < this.path.length; r++) {
            let n = this.path[r],
              { scroll: o, options: i } = n;
            n !== this.root && o && i.layoutScroll && (o.wasRoot && uU(t, e), de(t.x, o.offset.x), de(t.y, o.offset.y));
          }
          return t;
        }
        applyTransform(e, t = !1) {
          let r = aV();
          uU(r, e);
          for (let e = 0; e < this.path.length; e++) {
            let n = this.path[e];
            (!t &&
              n.options.layoutScroll &&
              n.scroll &&
              n !== n.root &&
              dr(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
              l4(n.latestValues) && dr(r, n.latestValues));
          }
          return (l4(this.latestValues) && dr(r, this.latestValues), r);
        }
        removeTransform(e) {
          let t = aV();
          uU(t, e);
          for (let e = 0; e < this.path.length; e++) {
            let r = this.path[e];
            if (!r.instance || !l4(r.latestValues)) continue;
            l6(r.latestValues) && r.updateSnapshot();
            let n = aV();
            (uU(n, r.measurePageBox()), uJ(t, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n));
          }
          return (l4(this.latestValues) && uJ(t, this.latestValues), t);
        }
        setTargetDelta(e) {
          ((this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
        }
        setOptions(e) {
          this.options = { ...this.options, ...e, crossfade: void 0 === e.crossfade || e.crossfade };
        }
        clearMeasurements() {
          ((this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1));
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== a7.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(e = !1) {
          let t = this.getLead();
          (this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t.isSharedProjectionDirty));
          let r = !!this.resumingFrom || this !== t;
          if (
            !(
              e ||
              (r && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              this.parent?.isProjectionDirty ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          let { layout: n, layoutId: o } = this.options;
          if (!this.layout || !(n || o)) return;
          this.resolvedRelativeTargetAt = a7.timestamp;
          let i = this.getClosestProjectingParent();
          if (
            (i && this.linkedParentVersion !== i.layoutVersion && !i.options.layoutRoot && this.removeRelativeTarget(),
            this.targetDelta ||
              this.relativeTarget ||
              (i && i.layout
                ? this.createRelativeTarget(i, this.layout.layoutBox, i.layout.layoutBox)
                : this.removeRelativeTarget()),
            this.relativeTarget || this.targetDelta)
          ) {
            if (
              (this.target || ((this.target = aV()), (this.targetWithTransforms = aV())),
              this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target)
            ) {
              var s, a, l;
              (this.forceRelativeParentToResolveTarget(),
                (s = this.target),
                (a = this.relativeTarget),
                (l = this.relativeParent.target),
                ua(s.x, a.x, l.x),
                ua(s.y, a.y, l.y));
            } else
              this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : uU(this.target, this.layout.layoutBox),
                  l7(this.target, this.targetDelta))
                : uU(this.target, this.layout.layoutBox);
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              i &&
              !!i.resumingFrom == !!this.resumingFrom &&
              !i.options.layoutScroll &&
              i.target &&
              1 !== this.animationProgress
                ? this.createRelativeTarget(i, this.target, i.target)
                : (this.relativeParent = this.relativeTarget = void 0));
          }
        }
        getClosestProjectingParent() {
          if (!(!this.parent || l6(this.parent.latestValues) || l8(this.parent.latestValues)))
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        createRelativeTarget(e, t, r) {
          ((this.relativeParent = e),
            (this.linkedParentVersion = e.layoutVersion),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = aV()),
            (this.relativeTargetOrigin = aV()),
            ud(this.relativeTargetOrigin, t, r),
            uU(this.relativeTarget, this.relativeTargetOrigin));
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          let e = this.getLead(),
            t = !!this.resumingFrom || this !== e,
            r = !0;
          if (
            ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (r = !1),
            t && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
            this.resolvedRelativeTargetAt === a7.timestamp && (r = !1),
            r)
          )
            return;
          let { layout: n, layoutId: o } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(n || o))
          )
            return;
          uU(this.layoutCorrected, this.layout.layoutBox);
          let i = this.treeScale.x,
            s = this.treeScale.y;
          (!(function (e, t, r, n = !1) {
            let o,
              i,
              s = r.length;
            if (s) {
              t.x = t.y = 1;
              for (let a = 0; a < s; a++) {
                i = (o = r[a]).projectionDelta;
                let { visualElement: s } = o.options;
                (!s || !s.props.style || "contents" !== s.props.style.display) &&
                  (n &&
                    o.options.layoutScroll &&
                    o.scroll &&
                    o !== o.root &&
                    dr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
                  i && ((t.x *= i.x.scale), (t.y *= i.y.scale), l7(e, i)),
                  n && l4(o.latestValues) && dr(e, o.latestValues));
              }
              (t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1));
            }
          })(this.layoutCorrected, this.treeScale, this.path, t),
            e.layout &&
              !e.target &&
              (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
              ((e.target = e.layout.layoutBox), (e.targetWithTransforms = aV())));
          let { target: a } = e;
          if (!a) {
            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          (this.projectionDelta && this.prevProjectionDelta
            ? (uG(this.prevProjectionDelta.x, this.projectionDelta.x),
              uG(this.prevProjectionDelta.y, this.projectionDelta.y))
            : this.createProjectionDeltas(),
            us(this.projectionDelta, this.layoutCorrected, a, this.latestValues),
            (this.treeScale.x === i &&
              this.treeScale.y === s &&
              u4(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              u4(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", a)));
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(e = !0) {
          if ((this.options.visualElement?.scheduleRender(), e)) {
            let e = this.getStack();
            e && e.scheduleRender();
          }
          this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          ((this.prevProjectionDelta = aL()),
            (this.projectionDelta = aL()),
            (this.projectionDeltaWithTransform = aL()));
        }
        setAnimationOrigin(e, t = !1) {
          let r,
            n = this.snapshot,
            o = n ? n.latestValues : {},
            i = { ...this.latestValues },
            s = aL();
          ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !t));
          let a = aV(),
            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
            d = this.getStack(),
            c = !d || d.members.length <= 1,
            u = !!(l && !c && !0 === this.options.crossfade && !this.path.some(hv));
          ((this.animationProgress = 0),
            (this.mixTargetDelta = (t) => {
              let n = t / 1e3;
              if (
                (hm(s.x, e.x, n),
                hm(s.y, e.y, n),
                this.setTargetDelta(s),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var d, h, f, p, g, m;
                (ud(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                  (f = this.relativeTarget),
                  (p = this.relativeTargetOrigin),
                  (g = a),
                  (m = n),
                  hw(f.x, p.x, g.x, m),
                  hw(f.y, p.y, g.y, m),
                  r &&
                    ((d = this.relativeTarget), (h = r), u0(d.x, h.x) && u0(d.y, h.y)) &&
                    (this.isProjectionDirty = !1),
                  r || (r = aV()),
                  uU(r, this.relativeTarget));
              }
              (l &&
                ((this.animationValues = i),
                (function (e, t, r, n, o, i) {
                  o
                    ? ((e.opacity = lq(0, r.opacity ?? 1, uZ(n))), (e.opacityExit = lq(t.opacity ?? 1, 0, uD(n))))
                    : i && (e.opacity = lq(t.opacity ?? 1, r.opacity ?? 1, n));
                  for (let o = 0; o < uW; o++) {
                    let i = `border${uA[o]}Radius`,
                      s = u_(t, i),
                      a = u_(r, i);
                    (void 0 !== s || void 0 !== a) &&
                      (s || (s = 0),
                      a || (a = 0),
                      0 === s || 0 === a || uO(s) === uO(a)
                        ? ((e[i] = Math.max(lq(uz(s), uz(a), n), 0)), (at.test(a) || at.test(s)) && (e[i] += "%"))
                        : (e[i] = a));
                  }
                  (t.rotate || r.rotate) && (e.rotate = lq(t.rotate || 0, r.rotate || 0, n));
                })(i, o, this.latestValues, n, u, c)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = n));
            }),
            this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
        }
        startAnimation(e) {
          (this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && (a3(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = a9.update(() => {
              var t, r, n;
              let o;
              ((uR.hasAnimatedSinceResize = !0),
                dD.layout++,
                this.motionValue || (this.motionValue = lv(0)),
                (this.currentAnimation =
                  ((t = this.motionValue),
                  (r = [0, 1e3]),
                  (n = {
                    ...e,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (t) => {
                      (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
                    },
                    onStop: () => {
                      dD.layout--;
                    },
                    onComplete: () => {
                      (dD.layout--, e.onComplete && e.onComplete(), this.completeAnimation());
                    },
                  }),
                  (o = aR(t) ? t : lv(t)).start(cJ("", o, r, n)),
                  o.animation)),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0));
            })));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
          let e = this.getStack();
          (e && e.exitAnimationComplete(),
            (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
            this.notifyListeners("animationComplete"));
        }
        finishAnimation() {
          (this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
            this.completeAnimation());
        }
        applyTransformsToTarget() {
          let e = this.getLead(),
            { targetWithTransforms: t, target: r, layout: n, latestValues: o } = e;
          if (t && r && n) {
            if (this !== e && this.layout && n && hk(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
              r = this.target || aV();
              let t = uo(this.layout.layoutBox.x);
              ((r.x.min = e.target.x.min), (r.x.max = r.x.min + t));
              let n = uo(this.layout.layoutBox.y);
              ((r.y.min = e.target.y.min), (r.y.max = r.y.min + n));
            }
            (uU(t, r), dr(t, o), us(this.projectionDeltaWithTransform, this.layoutCorrected, t, o));
          }
        }
        registerSharedNode(e, t) {
          (this.sharedNodes.has(e) || this.sharedNodes.set(e, new u8()), this.sharedNodes.get(e).add(t));
          let r = t.options.initialPromotionConfig;
          t.promote({
            transition: r ? r.transition : void 0,
            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(t) : void 0,
          });
        }
        isLead() {
          let e = this.getStack();
          return !e || e.lead === this;
        }
        getLead() {
          let { layoutId: e } = this.options;
          return (e && this.getStack()?.lead) || this;
        }
        getPrevLead() {
          let { layoutId: e } = this.options;
          return e ? this.getStack()?.prevLead : void 0;
        }
        getStack() {
          let { layoutId: e } = this.options;
          if (e) return this.root.sharedNodes.get(e);
        }
        promote({ needsReset: e, transition: t, preserveFollowOpacity: r } = {}) {
          let n = this.getStack();
          (n && n.promote(this, r),
            e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            t && this.setOptions({ transition: t }));
        }
        relegate() {
          let e = this.getStack();
          return !!e && e.relegate(this);
        }
        resetSkewAndRotation() {
          let { visualElement: e } = this.options;
          if (!e) return;
          let t = !1,
            { latestValues: r } = e;
          if (((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (t = !0), !t)) return;
          let n = {};
          r.z && ht("z", e, n, this.animationValues);
          for (let t = 0; t < u7.length; t++)
            (ht(`rotate${u7[t]}`, e, n, this.animationValues), ht(`skew${u7[t]}`, e, n, this.animationValues));
          for (let t in (e.render(), n))
            (e.setStaticValue(t, n[t]), this.animationValues && (this.animationValues[t] = n[t]));
          e.scheduleRender();
        }
        applyProjectionStyles(e, t) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) {
            e.visibility = "hidden";
            return;
          }
          let r = this.getTransformTemplate();
          if (this.needsReset) {
            ((this.needsReset = !1),
              (e.visibility = ""),
              (e.opacity = ""),
              (e.pointerEvents = db(t?.pointerEvents) || ""),
              (e.transform = r ? r(this.latestValues, "") : "none"));
            return;
          }
          let n = this.getLead();
          if (!this.projectionDelta || !this.layout || !n.target) {
            (this.options.layoutId &&
              ((e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
              (e.pointerEvents = db(t?.pointerEvents) || "")),
              this.hasProjected &&
                !l4(this.latestValues) &&
                ((e.transform = r ? r({}, "") : "none"), (this.hasProjected = !1)));
            return;
          }
          e.visibility = "";
          let o = n.animationValues || n.latestValues;
          this.applyTransformsToTarget();
          let i = (function (e, t, r) {
            let n = "",
              o = e.x.translate / t.x,
              i = e.y.translate / t.y,
              s = r?.z || 0;
            if (
              ((o || i || s) && (n = `translate3d(${o}px, ${i}px, ${s}px) `),
              (1 !== t.x || 1 !== t.y) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
              r)
            ) {
              let { transformPerspective: e, rotate: t, rotateX: o, rotateY: i, skewX: s, skewY: a } = r;
              (e && (n = `perspective(${e}px) ${n}`),
                t && (n += `rotate(${t}deg) `),
                o && (n += `rotateX(${o}deg) `),
                i && (n += `rotateY(${i}deg) `),
                s && (n += `skewX(${s}deg) `),
                a && (n += `skewY(${a}deg) `));
            }
            let a = e.x.scale * t.x,
              l = e.y.scale * t.y;
            return ((1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none");
          })(this.projectionDeltaWithTransform, this.treeScale, o);
          (r && (i = r(o, i)), (e.transform = i));
          let { x: s, y: a } = this.projectionDelta;
          for (let t in ((e.transformOrigin = `${100 * s.origin}% ${100 * a.origin}% 0`),
          n.animationValues
            ? (e.opacity =
                n === this
                  ? (o.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
            : (e.opacity =
                n === this ? (void 0 !== o.opacity ? o.opacity : "") : void 0 !== o.opacityExit ? o.opacityExit : 0),
          lK)) {
            if (void 0 === o[t]) continue;
            let { correct: r, applyTo: s, isCSSVariable: a } = lK[t],
              l = "none" === i ? o[t] : r(o[t], n);
            if (s) {
              let t = s.length;
              for (let r = 0; r < t; r++) e[s[r]] = l;
            } else a ? (this.options.visualElement.renderState.vars[t] = l) : (e[t] = l);
          }
          this.options.layoutId && (e.pointerEvents = n === this ? db(t?.pointerEvents) || "" : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
            this.root.nodes.forEach(hl),
            this.root.sharedNodes.clear());
        }
      };
    }
    function hn(e) {
      e.updateLayout();
    }
    function ho(e) {
      let t = e.resumeFrom?.snapshot || e.snapshot;
      if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        let { layoutBox: r, measuredBox: n } = e.layout,
          { animationType: o } = e.options,
          i = t.source !== e.layout.source;
        "size" === o
          ? c7((e) => {
              let n = i ? t.measuredBox[e] : t.layoutBox[e],
                o = uo(n);
              ((n.min = r[e].min), (n.max = n.min + o));
            })
          : hk(o, t.layoutBox, r) &&
            c7((n) => {
              let o = i ? t.measuredBox[n] : t.layoutBox[n],
                s = uo(r[n]);
              ((o.max = o.min + s),
                e.relativeTarget &&
                  !e.currentAnimation &&
                  ((e.isProjectionDirty = !0), (e.relativeTarget[n].max = e.relativeTarget[n].min + s)));
            });
        let s = aL();
        us(s, r, t.layoutBox);
        let a = aL();
        i ? us(a, e.applyTransform(n, !0), t.measuredBox) : us(a, r, t.layoutBox);
        let l = !u1(s),
          d = !1;
        if (!e.resumeFrom) {
          let n = e.getClosestProjectingParent();
          if (n && !n.resumeFrom) {
            let { snapshot: o, layout: i } = n;
            if (o && i) {
              let s = aV();
              ud(s, t.layoutBox, o.layoutBox);
              let a = aV();
              (ud(a, r, i.layoutBox),
                u2(s, a) || (d = !0),
                n.options.layoutRoot && ((e.relativeTarget = a), (e.relativeTargetOrigin = s), (e.relativeParent = n)));
            }
          }
        }
        e.notifyListeners("didUpdate", {
          layout: r,
          snapshot: t,
          delta: a,
          layoutDelta: s,
          hasLayoutChanged: l,
          hasRelativeLayoutChanged: d,
        });
      } else if (e.isLead()) {
        let { onExitComplete: t } = e.options;
        t && t();
      }
      e.options.transition = void 0;
    }
    function hi(e) {
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = !!(
            e.isProjectionDirty ||
            e.parent.isProjectionDirty ||
            e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function hs(e) {
      e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function ha(e) {
      e.clearSnapshot();
    }
    function hl(e) {
      e.clearMeasurements();
    }
    function hd(e) {
      e.isLayoutDirty = !1;
    }
    function hc(e) {
      let { visualElement: t } = e.options;
      (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform());
    }
    function hu(e) {
      (e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0));
    }
    function hh(e) {
      e.resolveTargetDelta();
    }
    function hf(e) {
      e.calcProjection();
    }
    function hp(e) {
      e.resetSkewAndRotation();
    }
    function hg(e) {
      e.removeLeadSnapshot();
    }
    function hm(e, t, r) {
      ((e.translate = lq(t.translate, 0, r)),
        (e.scale = lq(t.scale, 1, r)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint));
    }
    function hw(e, t, r, n) {
      ((e.min = lq(t.min, r.min, n)), (e.max = lq(t.max, r.max, n)));
    }
    function hv(e) {
      return e.animationValues && void 0 !== e.animationValues.opacityExit;
    }
    let hb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      hy = (e) =>
        "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
      hx = hy("applewebkit/") && !hy("chrome/") ? Math.round : a2;
    function hC(e) {
      ((e.min = hx(e.min)), (e.max = hx(e.max)));
    }
    function hk(e, t, r) {
      return "position" === e || ("preserve-aspect" === e && !(0.2 >= Math.abs(u6(t) - u6(r))));
    }
    function hM(e) {
      return e !== e.root && e.scroll?.wasRoot;
    }
    let hj = hr({
        attachResizeListener: (e, t) => ur(e, "resize", t),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
          y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      }),
      hL = { current: void 0 },
      hS = hr({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!hL.current) {
            let e = new hj({});
            (e.mount(window), e.setOptions({ layoutScroll: !0 }), (hL.current = e));
          }
          return hL.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = void 0 !== t ? t : "none";
        },
        checkIsScrollRoot: (e) => "fixed" === window.getComputedStyle(e).position,
      });
    function hV(e, t) {
      let r = (function (e, t, r) {
          if (null == e) return [];
          if (e instanceof EventTarget) return [e];
          if ("string" == typeof e) {
            let t = document,
              r = void 0 ?? t.querySelectorAll(e);
            return r ? Array.from(r) : [];
          }
          return Array.from(e).filter((e) => null != e);
        })(e),
        n = new AbortController();
      return [r, { passive: !0, ...t, signal: n.signal }, () => n.abort()];
    }
    function hR(e) {
      return !("touch" === e.pointerType || un.x || un.y);
    }
    function hH(e, t, r) {
      let { props: n } = e;
      e.animationState && n.whileHover && e.animationState.setActive("whileHover", "Start" === r);
      let o = n["onHover" + r];
      o && a9.postRender(() => o(t, uu(t)));
    }
    function h$(e) {
      return uP(e) && "offsetHeight" in e;
    }
    let hT = (e, t) => !!t && (e === t || hT(e, t.parentElement)),
      hE = new WeakSet();
    function hB(e) {
      return (t) => {
        "Enter" === t.key && e(t);
      };
    }
    function hP(e, t) {
      e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
    }
    function hI(e) {
      return uc(e) && !(un.x || un.y);
    }
    function hA(e, t, r) {
      let { props: n } = e;
      if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
      e.animationState && n.whileTap && e.animationState.setActive("whileTap", "Start" === r);
      let o = n["onTap" + ("End" === r ? "" : r)];
      o && a9.postRender(() => o(t, uu(t)));
    }
    let hW = new WeakMap(),
      hz = new WeakMap(),
      hO = (e) => {
        let t = hW.get(e.target);
        t && t(e);
      },
      h_ = (e) => {
        e.forEach(hO);
      },
      hZ = { some: 0, all: 1 },
      hD = (function (e, t) {
        if ("undefined" == typeof Proxy) return dB;
        let r = new Map(),
          n = (r, n) => dB(r, n, e, t);
        return new Proxy((e, t) => n(e, t), {
          get: (o, i) => ("create" === i ? n : (r.has(i) || r.set(i, dB(i, void 0, e, t)), r.get(i))),
        });
      })(
        {
          animation: {
            Feature: class extends dP {
              constructor(e) {
                (super(e),
                  e.animationState ||
                    (e.animationState = (function (e) {
                      let t = (t) =>
                          Promise.all(
                            t.map(({ animation: t, options: r }) =>
                              (function (e, t, r = {}) {
                                let n;
                                if ((e.notify("AnimationStart", t), Array.isArray(t)))
                                  n = Promise.all(t.map((t) => c0(e, t, r)));
                                else if ("string" == typeof t) n = c0(e, t, r);
                                else {
                                  let o = "function" == typeof t ? dI(e, t, r.custom) : t;
                                  n = Promise.all(cQ(e, o, r));
                                }
                                return n.then(() => {
                                  e.notify("AnimationComplete", t);
                                });
                              })(e, t, r),
                            ),
                          ),
                        r = c9(),
                        n = !0,
                        o = (t) => (r, n) => {
                          let o = dI(e, n, "exit" === t ? e.presenceContext?.custom : void 0);
                          if (o) {
                            let { transition: e, transitionEnd: t, ...n } = o;
                            r = { ...r, ...n, ...t };
                          }
                          return r;
                        };
                      function i(i) {
                        let { props: s } = e,
                          a =
                            (function e(t) {
                              if (!t) return;
                              if (!t.isControllingVariants) {
                                let r = (t.parent && e(t.parent)) || {};
                                return (void 0 !== t.props.initial && (r.initial = t.props.initial), r);
                              }
                              let r = {};
                              for (let e = 0; e < c5; e++) {
                                let n = lS[e],
                                  o = t.props[n];
                                (lj(o) || !1 === o) && (r[n] = o);
                              }
                              return r;
                            })(e.parent) || {},
                          l = [],
                          d = new Set(),
                          c = {},
                          u = 1 / 0;
                        for (let t = 0; t < c4; t++) {
                          var h, f;
                          let p = c6[t],
                            g = r[p],
                            m = void 0 !== s[p] ? s[p] : a[p],
                            w = lj(m),
                            v = p === i ? g.isActive : null;
                          !1 === v && (u = t);
                          let b = m === a[p] && m !== s[p] && w;
                          if (
                            (b && n && e.manuallyAnimateOnMount && (b = !1),
                            (g.protectedKeys = { ...c }),
                            (!g.isActive && null === v) || (!m && !g.prevProp) || lM(m) || "boolean" == typeof m)
                          )
                            continue;
                          let y =
                              ((h = g.prevProp),
                              "string" == typeof (f = m) ? f !== h : !!Array.isArray(f) && !c2(f, h)),
                            x = y || (p === i && g.isActive && !b && w) || (t > u && w),
                            C = !1,
                            k = Array.isArray(m) ? m : [m],
                            M = k.reduce(o(p), {});
                          !1 === v && (M = {});
                          let { prevResolvedValues: j = {} } = g,
                            L = { ...j, ...M },
                            S = (t) => {
                              ((x = !0), d.has(t) && ((C = !0), d.delete(t)), (g.needsAnimating[t] = !0));
                              let r = e.getValue(t);
                              r && (r.liveStyle = !1);
                            };
                          for (let e in L) {
                            let t = M[e],
                              r = j[e];
                            if (!c.hasOwnProperty(e))
                              (dW(t) && dW(r) ? c2(t, r) : t === r)
                                ? void 0 !== t && d.has(e)
                                  ? S(e)
                                  : (g.protectedKeys[e] = !0)
                                : null != t
                                  ? S(e)
                                  : d.add(e);
                          }
                          ((g.prevProp = m),
                            (g.prevResolvedValues = M),
                            g.isActive && (c = { ...c, ...M }),
                            n && e.blockInitialAnimation && (x = !1));
                          let V = b && y,
                            R = !V || C;
                          x &&
                            R &&
                            l.push(
                              ...k.map((t) => {
                                let r = { type: p };
                                if ("string" == typeof t && n && !V && e.manuallyAnimateOnMount && e.parent) {
                                  let { parent: n } = e,
                                    o = dI(n, t);
                                  if (n.enteringChildren && o) {
                                    let { delayChildren: t } = o.transition || {};
                                    r.delay = c1(n.enteringChildren, e, t);
                                  }
                                }
                                return { animation: t, options: r };
                              }),
                            );
                        }
                        if (d.size) {
                          let t = {};
                          if ("boolean" != typeof s.initial) {
                            let r = dI(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
                            r && r.transition && (t.transition = r.transition);
                          }
                          (d.forEach((r) => {
                            let n = e.getBaseTarget(r),
                              o = e.getValue(r);
                            (o && (o.liveStyle = !0), (t[r] = n ?? null));
                          }),
                            l.push({ animation: t }));
                        }
                        let p = !!l.length;
                        return (
                          n && (!1 === s.initial || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1),
                          (n = !1),
                          p ? t(l) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: i,
                        setActive: function (t, n) {
                          if (r[t].isActive === n) return Promise.resolve();
                          (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, n)), (r[t].isActive = n));
                          let o = i(t);
                          for (let e in r) r[e].protectedKeys = {};
                          return o;
                        },
                        setAnimateFunction: function (r) {
                          t = r(e);
                        },
                        getState: () => r,
                        reset: () => {
                          r = c9();
                        },
                      };
                    })(e)));
              }
              updateAnimationControlsSubscription() {
                let { animate: e } = this.node.getProps();
                lM(e) && (this.unmountControls = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: e } = this.node.getProps(),
                  { animate: t } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {
                (this.node.animationState.reset(), this.unmountControls?.());
              }
            },
          },
          exit: {
            Feature: class extends dP {
              constructor() {
                (super(...arguments), (this.id = c3++));
              }
              update() {
                if (!this.node.presenceContext) return;
                let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
                  { isPresent: r } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === r) return;
                let n = this.node.animationState.setActive("exit", !e);
                t &&
                  !e &&
                  n.then(() => {
                    t(this.id);
                  });
              }
              mount() {
                let { register: e, onExitComplete: t } = this.node.presenceContext || {};
                (t && t(this.id), e && (this.unmount = e(this.id)));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends dP {
              constructor() {
                (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
              }
              startObserver() {
                var e;
                let t;
                this.unmount();
                let { viewport: r = {} } = this.node.getProps(),
                  { root: n, margin: o, amount: i = "some", once: s } = r,
                  a = { root: n ? n.current : void 0, rootMargin: o, threshold: "number" == typeof i ? i : hZ[i] },
                  l = (e) => {
                    let { isIntersecting: t } = e;
                    if (this.isInView === t || ((this.isInView = t), s && !t && this.hasEnteredView)) return;
                    (t && (this.hasEnteredView = !0),
                      this.node.animationState && this.node.animationState.setActive("whileInView", t));
                    let { onViewportEnter: r, onViewportLeave: n } = this.node.getProps(),
                      o = t ? r : n;
                    o && o(e);
                  };
                return (
                  (e = this.node.current),
                  (t = (function ({ root: e, ...t }) {
                    let r = e || document;
                    hz.has(r) || hz.set(r, {});
                    let n = hz.get(r),
                      o = JSON.stringify(t);
                    return (n[o] || (n[o] = new IntersectionObserver(h_, { root: e, ...t })), n[o]);
                  })(a)),
                  hW.set(e, l),
                  t.observe(e),
                  () => {
                    (hW.delete(e), t.unobserve(e));
                  }
                );
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: e, prevProps: t } = this.node;
                ["amount", "margin", "root"].some(
                  (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                    return (r) => e[r] !== t[r];
                  })(e, t),
                ) && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends dP {
              mount() {
                let { current: e } = this.node;
                e &&
                  (this.unmount = (function (e, t, r = {}) {
                    let [n, o, i] = hV(e, r),
                      s = (e) => {
                        let n = e.currentTarget;
                        if (!hI(e)) return;
                        hE.add(n);
                        let i = t(n, e),
                          s = (e, t) => {
                            (window.removeEventListener("pointerup", a),
                              window.removeEventListener("pointercancel", l),
                              hE.has(n) && hE.delete(n),
                              hI(e) && "function" == typeof i && i(e, { success: t }));
                          },
                          a = (e) => {
                            s(e, n === window || n === document || r.useGlobalTarget || hT(n, e.target));
                          },
                          l = (e) => {
                            s(e, !1);
                          };
                        (window.addEventListener("pointerup", a, o), window.addEventListener("pointercancel", l, o));
                      };
                    return (
                      n.forEach((e) => {
                        ((r.useGlobalTarget ? window : e).addEventListener("pointerdown", s, o),
                          h$(e) &&
                            (e.addEventListener("focus", (e) =>
                              ((e, t) => {
                                let r = e.currentTarget;
                                if (!r) return;
                                let n = hB(() => {
                                  if (hE.has(r)) return;
                                  hP(r, "down");
                                  let e = hB(() => {
                                    hP(r, "up");
                                  });
                                  (r.addEventListener("keyup", e, t),
                                    r.addEventListener("blur", () => hP(r, "cancel"), t));
                                });
                                (r.addEventListener("keydown", n, t),
                                  r.addEventListener("blur", () => r.removeEventListener("keydown", n), t));
                              })(e, o),
                            ),
                            ut(e) || e.hasAttribute("tabindex") || (e.tabIndex = 0)));
                      }),
                      i
                    );
                  })(
                    e,
                    (e, t) => (
                      hA(this.node, t, "Start"),
                      (e, { success: t }) => hA(this.node, e, t ? "End" : "Cancel")
                    ),
                    { useGlobalTarget: this.node.props.globalTapTarget },
                  ));
              }
              unmount() {}
            },
          },
          focus: {
            Feature: class extends dP {
              constructor() {
                (super(...arguments), (this.isActive = !1));
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible");
                } catch (t) {
                  e = !0;
                }
                e &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
              }
              mount() {
                this.unmount = dZ(
                  ur(this.node.current, "focus", () => this.onFocus()),
                  ur(this.node.current, "blur", () => this.onBlur()),
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends dP {
              mount() {
                let { current: e } = this.node;
                e &&
                  (this.unmount = (function (e, t, r = {}) {
                    let [n, o, i] = hV(e, r),
                      s = (e) => {
                        if (!hR(e)) return;
                        let { target: r } = e,
                          n = t(r, e);
                        if ("function" != typeof n || !r) return;
                        let i = (e) => {
                          hR(e) && (n(e), r.removeEventListener("pointerleave", i));
                        };
                        r.addEventListener("pointerleave", i, o);
                      };
                    return (
                      n.forEach((e) => {
                        e.addEventListener("pointerenter", s, o);
                      }),
                      i
                    );
                  })(e, (e, t) => (hH(this.node, t, "Start"), (e) => hH(this.node, e, "End"))));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends dP {
              constructor() {
                (super(...arguments), (this.removePointerDownListener = a2));
              }
              onPointerDown(e) {
                this.session = new um(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: uf(this.node),
                });
              }
              createPanHandlers() {
                let { onPanSessionStart: e, onPanStart: t, onPan: r, onPanEnd: n } = this.node.getProps();
                return {
                  onSessionStart: uV(e),
                  onStart: uV(t),
                  onMove: r,
                  onEnd: (e, t) => {
                    (delete this.session, n && a9.postRender(() => n(e, t)));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = uh(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
              }
              update() {
                this.session && this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                (this.removePointerDownListener(), this.session && this.session.end());
              }
            },
          },
          drag: {
            Feature: class extends dP {
              constructor(e) {
                (super(e), (this.removeGroupControls = a2), (this.removeListeners = a2), (this.controls = new uL(e)));
              }
              mount() {
                let { dragControls: e } = this.node.getProps();
                (e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || a2));
              }
              update() {
                let { dragControls: e } = this.node.getProps(),
                  { dragControls: t } = this.node.prevProps || {};
                e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
              }
              unmount() {
                (this.removeGroupControls(),
                  this.removeListeners(),
                  this.controls.isDragging || this.controls.endPanSession());
              }
            },
            ProjectionNode: hS,
            MeasureLayout: uB,
          },
          layout: { ProjectionNode: hS, MeasureLayout: uB },
        },
        (e, t) => ((t.isSVG ?? da(e)) ? new l0(t) : new di(t, { allowProjection: e !== e2.Fragment })),
      );
    e.s(["motion", () => hD], 530576);
    var hN = e2;
    function hF(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class hU extends hN.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
          let e = t.offsetParent,
            r = (h$(e) && e.offsetWidth) || 0,
            n = (h$(e) && e.offsetHeight) || 0,
            o = this.props.sizeRef.current;
          ((o.height = t.offsetHeight || 0),
            (o.width = t.offsetWidth || 0),
            (o.top = t.offsetTop),
            (o.left = t.offsetLeft),
            (o.right = r - o.width - o.left),
            (o.bottom = n - o.height - o.top));
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function hG({ children: e, isPresent: t, anchorX: r, anchorY: n, root: o }) {
      let i = (0, hN.useId)(),
        s = (0, hN.useRef)(null),
        a = (0, hN.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
        { nonce: l } = (0, hN.useContext)(dc),
        d = (function (...e) {
          return e2.useCallback(
            (function (...e) {
              return (t) => {
                let r = !1,
                  n = e.map((e) => {
                    let n = hF(e, t);
                    return (r || "function" != typeof n || (r = !0), n);
                  });
                if (r)
                  return () => {
                    for (let t = 0; t < n.length; t++) {
                      let r = n[t];
                      "function" == typeof r ? r() : hF(e[t], null);
                    }
                  };
              };
            })(...e),
            e,
          );
        })(s, e.props?.ref ?? e?.ref);
      return (
        (0, hN.useInsertionEffect)(() => {
          let { width: e, height: d, top: c, left: u, right: h, bottom: f } = a.current;
          if (t || !s.current || !e || !d) return;
          let p = "left" === r ? `left: ${u}` : `right: ${h}`,
            g = "bottom" === n ? `bottom: ${f}` : `top: ${c}`;
          s.current.dataset.motionPopId = i;
          let m = document.createElement("style");
          l && (m.nonce = l);
          let w = o ?? document.head;
          return (
            w.appendChild(m),
            m.sheet &&
              m.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${d}px !important;
            ${p}px !important;
            ${g}px !important;
          }
        `),
            () => {
              w.contains(m) && w.removeChild(m);
            }
          );
        }, [t]),
        (0, e0.jsx)(hU, { isPresent: t, childRef: s, sizeRef: a, children: hN.cloneElement(e, { ref: d }) })
      );
    }
    let hY = ({
      children: e,
      initial: t,
      isPresent: r,
      onExitComplete: n,
      custom: o,
      presenceAffectsLayout: i,
      mode: s,
      anchorX: a,
      anchorY: l,
      root: d,
    }) => {
      let c = dx(hX),
        u = (0, e2.useId)(),
        h = !0,
        f = (0, e2.useMemo)(
          () => (
            (h = !1),
            {
              id: u,
              initial: t,
              isPresent: r,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (c.set(e, !0), c.values())) if (!t) return;
                n && n();
              },
              register: (e) => (c.set(e, !1), () => c.delete(e)),
            }
          ),
          [r, c, n],
        );
      return (
        i && h && (f = { ...f }),
        (0, e2.useMemo)(() => {
          c.forEach((e, t) => c.set(t, !1));
        }, [r]),
        e2.useEffect(() => {
          r || c.size || !n || n();
        }, [r]),
        "popLayout" === s && (e = (0, e0.jsx)(hG, { isPresent: r, anchorX: a, anchorY: l, root: d, children: e })),
        (0, e0.jsx)(dy.Provider, { value: f, children: e })
      );
    };
    function hX() {
      return new Map();
    }
    let hq = (e) => e.key || "";
    function hK(e) {
      let t = [];
      return (
        e2.Children.forEach(e, (e) => {
          (0, e2.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    let hJ = ({
      children: e,
      custom: t,
      initial: r = !0,
      onExitComplete: n,
      presenceAffectsLayout: o = !0,
      mode: i = "sync",
      propagate: s = !1,
      anchorX: a = "left",
      anchorY: l = "top",
      root: d,
    }) => {
      let [c, u] = u$(s),
        h = (0, e2.useMemo)(() => hK(e), [e]),
        f = s && !c ? [] : h.map(hq),
        p = (0, e2.useRef)(!0),
        g = (0, e2.useRef)(h),
        m = dx(() => new Map()),
        w = (0, e2.useRef)(new Set()),
        [v, b] = (0, e2.useState)(h),
        [y, x] = (0, e2.useState)(h);
      dE(() => {
        ((p.current = !1), (g.current = h));
        for (let e = 0; e < y.length; e++) {
          let t = hq(y[e]);
          f.includes(t) ? (m.delete(t), w.current.delete(t)) : !0 !== m.get(t) && m.set(t, !1);
        }
      }, [y, f.length, f.join("-")]);
      let C = [];
      if (h !== v) {
        let e = [...h];
        for (let t = 0; t < y.length; t++) {
          let r = y[t],
            n = hq(r);
          f.includes(n) || (e.splice(t, 0, r), C.push(r));
        }
        return ("wait" === i && C.length && (e = C), x(hK(e)), b(h), null);
      }
      let { forceRender: k } = (0, e2.useContext)(dl);
      return (0, e0.jsx)(e0.Fragment, {
        children: y.map((e) => {
          let v = hq(e),
            b = (!s || !!c) && (h === y || f.includes(v));
          return (0, e0.jsx)(
            hY,
            {
              isPresent: b,
              initial: (!p.current || !!r) && void 0,
              custom: t,
              presenceAffectsLayout: o,
              mode: i,
              root: d,
              onExitComplete: b
                ? void 0
                : () => {
                    if (w.current.has(v) || (w.current.add(v), !m.has(v))) return;
                    m.set(v, !0);
                    let e = !0;
                    (m.forEach((t) => {
                      t || (e = !1);
                    }),
                      e && (k?.(), x(g.current), s && u?.(), n && n()));
                  },
              anchorX: a,
              anchorY: l,
              children: e,
            },
            v,
          );
        }),
      });
    };
    e.s(["AnimatePresence", () => hJ], 86815);
    var hQ = [],
      h1 = "ResizeObserver loop completed with undelivered notifications.",
      h0 = function () {
        var e;
        ("function" == typeof ErrorEvent
          ? (e = new ErrorEvent("error", { message: h1 }))
          : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = h1)),
          window.dispatchEvent(e));
      };
    (((eJ = eQ || (eQ = {})).BORDER_BOX = "border-box"),
      (eJ.CONTENT_BOX = "content-box"),
      (eJ.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"));
    var h5 = function (e) {
        return Object.freeze(e);
      },
      h2 = function (e, t) {
        ((this.inlineSize = e), (this.blockSize = t), h5(this));
      },
      h6 = (function () {
        function e(e, t, r, n) {
          return (
            (this.x = e),
            (this.y = t),
            (this.width = r),
            (this.height = n),
            (this.top = this.y),
            (this.left = this.x),
            (this.bottom = this.top + this.height),
            (this.right = this.left + this.width),
            h5(this)
          );
        }
        return (
          (e.prototype.toJSON = function () {
            return {
              x: this.x,
              y: this.y,
              top: this.top,
              right: this.right,
              bottom: this.bottom,
              left: this.left,
              width: this.width,
              height: this.height,
            };
          }),
          (e.fromRect = function (t) {
            return new e(t.x, t.y, t.width, t.height);
          }),
          e
        );
      })(),
      h4 = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
      },
      h8 = function (e) {
        if (h4(e)) {
          var t = e.getBBox(),
            r = t.width,
            n = t.height;
          return !r && !n;
        }
        var o = e.offsetWidth,
          i = e.offsetHeight;
        return !(o || i || e.getClientRects().length);
      },
      h9 = function (e) {
        if (e instanceof Element) return !0;
        var t,
          r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
        return !!(r && e instanceof r.Element);
      },
      h3 = function (e) {
        switch (e.tagName) {
          case "INPUT":
            if ("image" !== e.type) break;
          case "VIDEO":
          case "AUDIO":
          case "EMBED":
          case "OBJECT":
          case "CANVAS":
          case "IFRAME":
          case "IMG":
            return !0;
        }
        return !1;
      },
      h7 = "undefined" != typeof window ? window : {},
      fe = new WeakMap(),
      ft = /auto|scroll/,
      fr = /^tb|vertical/,
      fn = /msie|trident/i.test(h7.navigator && h7.navigator.userAgent),
      fo = function (e) {
        return parseFloat(e || "0");
      },
      fi = function (e, t, r) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = 0),
          void 0 === r && (r = !1),
          new h2((r ? t : e) || 0, (r ? e : t) || 0)
        );
      },
      fs = h5({
        devicePixelContentBoxSize: fi(),
        borderBoxSize: fi(),
        contentBoxSize: fi(),
        contentRect: new h6(0, 0, 0, 0),
      }),
      fa = function (e, t) {
        if ((void 0 === t && (t = !1), fe.has(e) && !t)) return fe.get(e);
        if (h8(e)) return (fe.set(e, fs), fs);
        var r = getComputedStyle(e),
          n = h4(e) && e.ownerSVGElement && e.getBBox(),
          o = !fn && "border-box" === r.boxSizing,
          i = fr.test(r.writingMode || ""),
          s = !n && ft.test(r.overflowY || ""),
          a = !n && ft.test(r.overflowX || ""),
          l = n ? 0 : fo(r.paddingTop),
          d = n ? 0 : fo(r.paddingRight),
          c = n ? 0 : fo(r.paddingBottom),
          u = n ? 0 : fo(r.paddingLeft),
          h = n ? 0 : fo(r.borderTopWidth),
          f = n ? 0 : fo(r.borderRightWidth),
          p = n ? 0 : fo(r.borderBottomWidth),
          g = n ? 0 : fo(r.borderLeftWidth),
          m = u + d,
          w = l + c,
          v = g + f,
          b = h + p,
          y = a ? e.offsetHeight - b - e.clientHeight : 0,
          x = s ? e.offsetWidth - v - e.clientWidth : 0,
          C = n ? n.width : fo(r.width) - (o ? m + v : 0) - x,
          k = n ? n.height : fo(r.height) - (o ? w + b : 0) - y,
          M = C + m + x + v,
          j = k + w + y + b,
          L = h5({
            devicePixelContentBoxSize: fi(Math.round(C * devicePixelRatio), Math.round(k * devicePixelRatio), i),
            borderBoxSize: fi(M, j, i),
            contentBoxSize: fi(C, k, i),
            contentRect: new h6(u, l, C, k),
          });
        return (fe.set(e, L), L);
      },
      fl = function (e, t, r) {
        var n = fa(e, r),
          o = n.borderBoxSize,
          i = n.contentBoxSize,
          s = n.devicePixelContentBoxSize;
        switch (t) {
          case eQ.DEVICE_PIXEL_CONTENT_BOX:
            return s;
          case eQ.BORDER_BOX:
            return o;
          default:
            return i;
        }
      },
      fd = function (e) {
        var t = fa(e);
        ((this.target = e),
          (this.contentRect = t.contentRect),
          (this.borderBoxSize = h5([t.borderBoxSize])),
          (this.contentBoxSize = h5([t.contentBoxSize])),
          (this.devicePixelContentBoxSize = h5([t.devicePixelContentBoxSize])));
      },
      fc = function (e) {
        if (h8(e)) return 1 / 0;
        for (var t = 0, r = e.parentNode; r; ) ((t += 1), (r = r.parentNode));
        return t;
      },
      fu = function () {
        var e = 1 / 0,
          t = [];
        hQ.forEach(function (r) {
          if (0 !== r.activeTargets.length) {
            var n = [];
            (r.activeTargets.forEach(function (t) {
              var r = new fd(t.target),
                o = fc(t.target);
              (n.push(r), (t.lastReportedSize = fl(t.target, t.observedBox)), o < e && (e = o));
            }),
              t.push(function () {
                r.callback.call(r.observer, n, r.observer);
              }),
              r.activeTargets.splice(0, r.activeTargets.length));
          }
        });
        for (var r = 0; r < t.length; r++) (0, t[r])();
        return e;
      },
      fh = function (e) {
        hQ.forEach(function (t) {
          (t.activeTargets.splice(0, t.activeTargets.length),
            t.skippedTargets.splice(0, t.skippedTargets.length),
            t.observationTargets.forEach(function (r) {
              r.isActive() && (fc(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
            }));
        });
      },
      ff = function () {
        var e = 0;
        for (
          fh(0);
          hQ.some(function (e) {
            return e.activeTargets.length > 0;
          });
        )
          fh((e = fu()));
        return (
          hQ.some(function (e) {
            return e.skippedTargets.length > 0;
          }) && h0(),
          e > 0
        );
      },
      fp = [],
      fg = function (e) {
        if (!e1) {
          var t = 0,
            r = document.createTextNode("");
          (new MutationObserver(function () {
            return fp.splice(0).forEach(function (e) {
              return e();
            });
          }).observe(r, { characterData: !0 }),
            (e1 = function () {
              r.textContent = "".concat(t ? t-- : t++);
            }));
        }
        (fp.push(e), e1());
      },
      fm = function (e) {
        fg(function () {
          requestAnimationFrame(e);
        });
      },
      fw = 0,
      fv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
      fb = [
        "resize",
        "load",
        "transitionend",
        "animationend",
        "animationstart",
        "animationiteration",
        "keyup",
        "keydown",
        "mouseup",
        "mousedown",
        "mouseover",
        "mouseout",
        "blur",
        "focus",
      ],
      fy = function (e) {
        return (void 0 === e && (e = 0), Date.now() + e);
      },
      fx = !1,
      fC = new ((function () {
        function e() {
          var e = this;
          ((this.stopped = !0),
            (this.listener = function () {
              return e.schedule();
            }));
        }
        return (
          (e.prototype.run = function (e) {
            var t = this;
            if ((void 0 === e && (e = 250), !fx)) {
              fx = !0;
              var r = fy(e);
              fm(function () {
                var n = !1;
                try {
                  n = ff();
                } finally {
                  if (((fx = !1), (e = r - fy()), !fw)) return;
                  n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                }
              });
            }
          }),
          (e.prototype.schedule = function () {
            (this.stop(), this.run());
          }),
          (e.prototype.observe = function () {
            var e = this,
              t = function () {
                return e.observer && e.observer.observe(document.body, fv);
              };
            document.body ? t() : h7.addEventListener("DOMContentLoaded", t);
          }),
          (e.prototype.start = function () {
            var e = this;
            this.stopped &&
              ((this.stopped = !1),
              (this.observer = new MutationObserver(this.listener)),
              this.observe(),
              fb.forEach(function (t) {
                return h7.addEventListener(t, e.listener, !0);
              }));
          }),
          (e.prototype.stop = function () {
            var e = this;
            this.stopped ||
              (this.observer && this.observer.disconnect(),
              fb.forEach(function (t) {
                return h7.removeEventListener(t, e.listener, !0);
              }),
              (this.stopped = !0));
          }),
          e
        );
      })())(),
      fk = function (e) {
        (!fw && e > 0 && fC.start(), (fw += e) || fC.stop());
      },
      fM = (function () {
        function e(e, t) {
          ((this.target = e),
            (this.observedBox = t || eQ.CONTENT_BOX),
            (this.lastReportedSize = { inlineSize: 0, blockSize: 0 }));
        }
        return (
          (e.prototype.isActive = function () {
            var e,
              t = fl(this.target, this.observedBox, !0);
            return (
              h4((e = this.target)) || h3(e) || "inline" !== getComputedStyle(e).display || (this.lastReportedSize = t),
              this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
            );
          }),
          e
        );
      })(),
      fj = function (e, t) {
        ((this.activeTargets = []),
          (this.skippedTargets = []),
          (this.observationTargets = []),
          (this.observer = e),
          (this.callback = t));
      },
      fL = new WeakMap(),
      fS = function (e, t) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
        return -1;
      },
      fV = (function () {
        function e() {}
        return (
          (e.connect = function (e, t) {
            var r = new fj(e, t);
            fL.set(e, r);
          }),
          (e.observe = function (e, t, r) {
            var n = fL.get(e),
              o = 0 === n.observationTargets.length;
            0 > fS(n.observationTargets, t) &&
              (o && hQ.push(n), n.observationTargets.push(new fM(t, r && r.box)), fk(1), fC.schedule());
          }),
          (e.unobserve = function (e, t) {
            var r = fL.get(e),
              n = fS(r.observationTargets, t),
              o = 1 === r.observationTargets.length;
            n >= 0 && (o && hQ.splice(hQ.indexOf(r), 1), r.observationTargets.splice(n, 1), fk(-1));
          }),
          (e.disconnect = function (e) {
            var t = this,
              r = fL.get(e);
            (r.observationTargets.slice().forEach(function (r) {
              return t.unobserve(e, r.target);
            }),
              r.activeTargets.splice(0, r.activeTargets.length));
          }),
          e
        );
      })(),
      fR = (function () {
        function e(e) {
          if (0 == arguments.length)
            throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
          if ("function" != typeof e)
            throw TypeError(
              "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
            );
          fV.connect(this, e);
        }
        return (
          (e.prototype.observe = function (e, t) {
            if (0 == arguments.length)
              throw TypeError(
                "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if (!h9(e))
              throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            fV.observe(this, e, t);
          }),
          (e.prototype.unobserve = function (e) {
            if (0 == arguments.length)
              throw TypeError(
                "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if (!h9(e))
              throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            fV.unobserve(this, e);
          }),
          (e.prototype.disconnect = function () {
            fV.disconnect(this);
          }),
          (e.toString = function () {
            return "function ResizeObserver () { [polyfill code] }";
          }),
          e
        );
      })();
    (e.s(["ResizeObserver", () => fR], 22194), e.s([], 756763));
    var fH = e.i(614840);
    let f$ = e2.default.createContext(!0);
    function fT() {
      throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
    }
    let fE =
      "use" in e2.default
        ? () => {
            try {
              return e2.default.use(f$);
            } catch {
              return !1;
            }
          }
        : () => !1;
    function fB(e) {
      let t = e2.default.useRef(fT);
      return (
        e2.default.useInsertionEffect(() => {
          t.current = e;
        }, [e]),
        (...e) => (fE() && fT(), (0, t.current)(...e))
      );
    }
    e.s(["useEffectEvent", () => fB], 400755);
    let fP = eY(),
      fI = [],
      fA = {},
      fW = {
        initial: { scale: 0.97, willChange: "transform" },
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { when: "beforeChildren", duration: 0.1 } },
        scaleIn: { scale: 1 },
        scaleOut: { scale: 0.97 },
      },
      fz = { hidden: { opacity: 0 }, visible: { opacity: 1 } },
      fO = { type: "spring", visualDuration: 0.2, bounce: 0.25 };
    function f_(e) {
      return fD(e) || fF(e);
    }
    function fZ(e) {
      return e instanceof Node && e.nodeType === Node.ELEMENT_NODE;
    }
    function fD(e) {
      return fZ(e) && "A" === e.nodeName;
    }
    function fN(e) {
      return fZ(e) && "INPUT" === e.nodeName;
    }
    function fF(e) {
      return fZ(e) && "BUTTON" === e.nodeName;
    }
    function fU(e) {
      return fZ(e) && "SELECT" === e.nodeName;
    }
    function fG(e) {
      return fZ(e) && "TEXTAREA" === e.nodeName;
    }
    function fY(e, t) {
      return e.contains(t) || e === t;
    }
    function fX(e) {
      if (!(e instanceof Element)) return !1;
      let t = window.getComputedStyle(e);
      return (
        t.overflowX.includes("auto") ||
        t.overflowX.includes("scroll") ||
        t.overflowY.includes("auto") ||
        t.overflowY.includes("scroll")
      );
    }
    function fq(e, t) {
      return e.reduce((e, r) => ((e[r] = t), e), {});
    }
    function fK(e) {
      return 0 === e ? 0 : `${e / 16}rem`;
    }
    function fJ(e, t, r) {
      return (t?.map(r) || []).map((t, r) => (0 === r ? t : { [`@media screen and (min-width: ${e[r - 1]}px)`]: t }));
    }
    function fQ(e, t) {
      return void 0 === e ? t || fI : Array.isArray(e) ? e : [e];
    }
    function f1(e, t, r = fI) {
      if (!Array.isArray(r)) throw Error("the property must be array of numbers");
      if (0 === r.length) return null;
      let { media: n, space: o } = Y(e);
      return fJ(n, r, (e) => fq(t, fK(o[e])));
    }
    function f0(e, t) {
      let { $size: r, $weight: n } = t,
        { font: o, media: i } = Y(t.theme),
        { family: s, sizes: a, weights: l } = o[e],
        d = (n && l[n]) || l.regular,
        c = a[2],
        u = {
          position: "relative",
          fontFamily: s,
          fontWeight: `${d}`,
          padding: "1px 0",
          margin: 0,
          "&:before": { content: '""', display: "block", height: 0 },
          "&:after": { content: '""', display: "block", height: 0 },
          "& > code, & > span": { display: "block" },
          "&:not([hidden])": { display: "block" },
        };
      return r
        ? [
            u,
            ...fJ(i, r, (e) =>
              (function (e) {
                let {
                    ascenderHeight: t,
                    descenderHeight: r,
                    fontSize: n,
                    iconSize: o,
                    letterSpacing: i,
                    lineHeight: s,
                  } = e,
                  a = t + r,
                  l = s - a,
                  d = 2 * Math.floor((1.125 * n) / 2) + 1;
                return {
                  fontSize: fK(n),
                  lineHeight: `calc(${s} / ${n})`,
                  letterSpacing: fK(i),
                  transform: `translateY(${fK(r)})`,
                  "&:before": { marginTop: `calc(${fK(0 - a)} - 1px)` },
                  "&:after": { marginBottom: "-1px" },
                  "& svg:not([data-sanity-icon])": { fontSize: `calc(${d} / 16 * 1rem)`, margin: fK((l - d) / 2) },
                  "& [data-sanity-icon]": { fontSize: `calc(${o} / 16 * 1rem)`, margin: fK((l - o) / 2) },
                };
              })(a[e] || c),
            ),
          ]
        : (f0.warned ||
            (console.warn("No size specified for responsive font", { fontKey: e, $size: r, props: t, base: u }),
            (f0.warned = !0)),
          [u]);
    }
    function f5(e) {
      return f0("code", e);
    }
    function f2(e) {
      return f0("heading", e);
    }
    function f6(e) {
      return f0("label", e);
    }
    function f4(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$align, (e) => ({ textAlign: e }));
    }
    function f8(e) {
      return f0("text", e);
    }
    let f9 = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof self ? self : e.g;
    function f3(e, t) {
      let r = Symbol.for(e);
      if (typeof document > "u") {
        let r = (0, e2.createContext)(t);
        return ((r.displayName = e), r);
      }
      return ((f9[r] = f9[r] || (0, e2.createContext)(t)), f9[r]);
    }
    let f7 = f3("@sanity/ui/context/theme", null);
    function pe(e) {
      let t,
        r,
        n,
        o,
        i = (0, e5.c)(15),
        s = (0, e2.useContext)(f7),
        { children: a } = e,
        l = e.scheme ?? (s?.scheme || "light"),
        d = e.theme ?? (s?.theme || null),
        c = e.tone ?? (s?.tone || "default");
      e: {
        let e;
        if (!d) {
          t = null;
          break e;
        }
        (i[0] !== d || i[1] !== l || i[2] !== c
          ? ((e = { version: 0, theme: d, scheme: l, tone: c }), (i[0] = d), (i[1] = l), (i[2] = c), (i[3] = e))
          : (e = i[3]),
          (t = e));
      }
      let u = t;
      t: {
        let e;
        if (!d) {
          r = null;
          break t;
        }
        (i[4] !== d || i[5] !== l || i[6] !== c
          ? ((e = eq(d, l, c)), (i[4] = d), (i[5] = l), (i[6] = c), (i[7] = e))
          : (e = i[7]),
          (r = e));
      }
      let h = r;
      if (!h) {
        let e;
        return (
          i[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, e0.jsx)("pre", { children: 'ThemeProvider: no "theme" property provided' })), (i[8] = e))
            : (e = i[8]),
          e
        );
      }
      return (
        i[9] !== a || i[10] !== h
          ? ((n = (0, e0.jsx)(rQ, { theme: h, children: a })), (i[9] = a), (i[10] = h), (i[11] = n))
          : (n = i[11]),
        i[12] !== n || i[13] !== u
          ? ((o = (0, e0.jsx)(f7.Provider, { value: u, children: n })), (i[12] = n), (i[13] = u), (i[14] = o))
          : (o = i[14]),
        o
      );
    }
    function pt() {
      let e = (0, e2.useContext)(f7);
      if (!e) throw Error("useRootTheme(): missing context value");
      return e;
    }
    function pr(e) {
      let t,
        r = (0, e5.c)(5),
        { children: n, scheme: o, tone: i } = e,
        s = pt(),
        a = o || s.scheme;
      return (
        r[0] !== n || r[1] !== s.theme || r[2] !== a || r[3] !== i
          ? ((t = (0, e0.jsx)(pe, { scheme: a, theme: s.theme, tone: i, children: n })),
            (r[0] = n),
            (r[1] = s.theme),
            (r[2] = a),
            (r[3] = i),
            (r[4] = t))
          : (t = r[4]),
        t
      );
    }
    function pn() {
      return rJ();
    }
    function po() {
      let e,
        t = (0, e5.c)(2),
        r = rJ();
      return (t[0] !== r ? ((e = Y(r)), (t[0] = r), (t[1] = e)) : (e = t[1]), e);
    }
    function pi(e) {
      let { card: t, media: r } = Y(e.theme),
        n = `${t.border?.width ?? 1}px solid var(--card-border-color)`;
      return fJ(r, e.$border, (e) => (e ? { "&&": { border: n } } : { "&&": { border: 0 } }));
    }
    function ps(e) {
      let { card: t, media: r } = Y(e.theme),
        n = `${t.border?.width ?? 1}px solid var(--card-border-color)`;
      return fJ(r, e.$borderTop, (e) => (e ? { "&&": { borderTop: n } } : { "&&": { borderTop: 0 } }));
    }
    function pa(e) {
      let { card: t, media: r } = Y(e.theme),
        n = `${t.border?.width ?? 1}px solid var(--card-border-color)`;
      return fJ(r, e.$borderRight, (e) => (e ? { "&&": { borderRight: n } } : { "&&": { borderRight: 0 } }));
    }
    function pl(e) {
      let { card: t, media: r } = Y(e.theme),
        n = `${t.border?.width ?? 1}px solid var(--card-border-color)`;
      return fJ(r, e.$borderBottom, (e) => (e ? { "&&": { borderBottom: n } } : { "&&": { borderBottom: 0 } }));
    }
    function pd(e) {
      let { card: t, media: r } = Y(e.theme),
        n = `${t.border?.width ?? 1}px solid var(--card-border-color)`;
      return fJ(r, e.$borderLeft, (e) => (e ? { "&&": { borderLeft: n } } : { "&&": { borderLeft: 0 } }));
    }
    ((pe.displayName = "ThemeProvider"), (pr.displayName = "ThemeColorProvider"));
    let pc = { '&[data-as="ul"],&[data-as="ol"]': { listStyle: "none" } },
      pu = { content: "content-box", border: "border-box" },
      ph = { stretch: "stretch", fill: "100%" };
    function pf(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$display, (e) => ({ "&:not([hidden])": { display: e } }));
    }
    function pp(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$sizing, (e) => ({ boxSizing: pu[e] }));
    }
    function pg(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$height, (e) => ({ height: ph[e] }));
    }
    function pm(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$overflow, (e) => ({ overflow: e }));
    }
    let pw = { minWidth: 0, minHeight: 0 };
    function pv() {
      return [pw, pb];
    }
    function pb(e) {
      let { media: t } = Y(e.theme);
      return e.$flex ? fJ(t, e.$flex, (e) => ({ flex: `${e}` })) : fI;
    }
    let py = { "&&:not([hidden])": { display: "flex" } };
    function px(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$align, (e) => ({ alignItems: e }));
    }
    function pC(e) {
      let { media: t, space: r } = Y(e.theme);
      return fJ(t, e.$gap, (e) => ({ gap: e ? fK(r[e]) : void 0 }));
    }
    function pk(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$wrap, (e) => ({ flexWrap: e }));
    }
    function pM(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$justify, (e) => ({ justifyContent: e }));
    }
    function pj(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$direction, (e) => ({ flexDirection: e }));
    }
    function pL(e) {
      return `inset 0 0 0 ${e.width}px ${e.color}`;
    }
    function pS(e) {
      let { base: t, border: r, focusRing: n } = e,
        o = n.offset + n.width,
        i = 0 - n.offset,
        s = t ? t.bg : "var(--card-bg-color)";
      return [
        i > 0 && `inset 0 0 0 ${i}px var(--card-focus-ring-color)`,
        r && pL(r),
        i < 0 && `0 0 0 ${0 - i}px ${s}`,
        o > 0 && `0 0 0 ${o}px var(--card-focus-ring-color)`,
      ]
        .filter(Boolean)
        .join(",");
    }
    let pV = { auto: "auto", full: "1 / -1" },
      pR = { auto: "auto", full: "1 / -1" };
    function pH(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$row, (e) => ("number" == typeof e ? { gridRow: `span ${e} / span ${e}` } : { gridRow: pV[e] }));
    }
    function p$(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$rowStart, (e) => ({ gridRowStart: `${e}` }));
    }
    function pT(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$rowEnd, (e) => ({ gridRowEnd: `${e}` }));
    }
    function pE(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$column, (e) =>
        "number" == typeof e ? { gridColumn: `span ${e} / span ${e}` } : { gridColumn: pR[e] },
      );
    }
    function pB(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$columnStart, (e) => ({ gridColumnStart: `${e}` }));
    }
    function pP(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$columnEnd, (e) => ({ gridColumnEnd: `${e}` }));
    }
    let pI = { "&&:not([hidden])": { display: "grid" }, '&[data-as="ul"],&[data-as="ol"]': { listStyle: "none" } },
      pA = { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" },
      pW = { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" };
    function pz(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$autoFlow, (e) => ({ gridAutoFlow: e }));
    }
    function pO(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$autoRows, (e) => ({ gridAutoRows: e && pW[e] }));
    }
    function p_(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$autoCols, (e) => ({ gridAutoColumns: e && pA[e] }));
    }
    function pZ(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$columns, (e) => ({ gridTemplateColumns: e && `repeat(${e},minmax(0,1fr));` }));
    }
    function pD(e) {
      let { media: t } = Y(e.theme);
      return fJ(t, e.$rows, (e) => ({ gridTemplateRows: e && `repeat(${e},minmax(0,1fr));` }));
    }
    function pN(e) {
      let { media: t, space: r } = Y(e.theme);
      return fJ(t, e.$gap, (e) => ({ gridGap: e ? fK(r[e]) : void 0 }));
    }
    function pF(e) {
      let { media: t, space: r } = Y(e.theme);
      return fJ(t, e.$gapX, (e) => ({ columnGap: e ? fK(r[e]) : void 0 }));
    }
    function pU(e) {
      let { media: t, space: r } = Y(e.theme);
      return fJ(t, e.$gapY, (e) => ({ rowGap: e ? fK(r[e]) : void 0 }));
    }
    function pG(e) {
      let { $fontSize: t, $iconLeft: r, $iconRight: n, $padding: o, $space: i } = e,
        { font: s, media: a, space: l } = Y(e.theme),
        d = Math.max(o.length, i.length, t.length),
        c = [],
        u = [],
        h = [];
      for (let e = 0; e < d; e += 1)
        ((h[e] = void 0 === t[e] ? h[e - 1] : t[e]),
          (c[e] = void 0 === o[e] ? c[e - 1] : o[e]),
          (u[e] = void 0 === i[e] ? u[e - 1] : i[e]));
      return fJ(a, c, (e, t) => {
        let o = s.text.sizes[h[t]] || s.text.sizes[2],
          i = o.lineHeight - o.ascenderHeight - o.descenderHeight,
          a = l[c[t]],
          d = l[u[t]],
          f = {
            paddingTop: fK(a - o.ascenderHeight),
            paddingRight: fK(a),
            paddingBottom: fK(a - o.descenderHeight),
            paddingLeft: fK(a),
          };
        return (n && (f.paddingRight = fK(a + i + d)), r && (f.paddingLeft = fK(a + i + d)), f);
      });
    }
    function pY(e) {
      return pG({ ...e, $iconRight: !0 });
    }
    let pX = r6`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;
    function pq() {
      return pX;
    }
    function pK(e) {
      let { $scheme: t, $tone: r, $weight: n } = e,
        { color: o, font: i } = Y(e.theme);
      return r6`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${i.text.family};
    font-weight: ${(n && i.text.weights[n]) || i.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${r}'] {
      --input-fg-color: ${o.input.default.enabled.fg};
      --input-placeholder-color: ${o.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${o.input.default.enabled.fg};
        --input-placeholder-color: ${o.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${o.input.default.disabled.fg};
        --input-placeholder-color: ${o.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${o.input.invalid.enabled.fg};
        --input-placeholder-color: ${o.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${o.input.default.readOnly.fg};
        --input-placeholder-color: ${o.input.default.readOnly.placeholder};
      }
    }
  `;
    }
    function pJ(e) {
      let { font: t, media: r } = Y(e.theme);
      return fJ(r, e.$fontSize, (e) => {
        let r = t.text.sizes[e] || t.text.sizes[2];
        return { fontSize: fK(r.fontSize), lineHeight: `${r.lineHeight / r.fontSize}` };
      });
    }
    function pQ(e) {
      let { $hasPrefix: t, $hasSuffix: r, $scheme: n, $tone: o, $unstableDisableFocusRing: i } = e,
        { color: s, input: a } = Y(e.theme);
      return r6`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t ? 0 : void 0};
    border-bottom-left-radius: ${t ? 0 : void 0};
    border-top-right-radius: ${r ? 0 : void 0};
    border-bottom-right-radius: ${r ? 0 : void 0};

    &[data-scheme='${n}'][data-tone='${o}'] {
      --card-bg-color: ${s.input.default.enabled.bg};
      --card-fg-color: ${s.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${pL({ color: s.input.default.enabled.border, width: a.border.width })};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${s.input.invalid.enabled.bg};
        --card-fg-color: ${s.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${pL({ color: s.input.invalid.enabled.border, width: a.border.width })};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${i ? void 0 : pS({ border: { color: s.input.default.enabled.border, width: a.border.width }, focusRing: a.text.focusRing })};
        }

        &:not([data-border]) {
          --input-box-shadow: ${i ? void 0 : pS({ focusRing: a.text.focusRing })};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${s.input.default.disabled.bg} !important;
        --card-fg-color: ${s.input.default.disabled.fg} !important;
        --card-icon-color: ${s.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${pL({ color: s.input.default.disabled.border, width: a.border.width })};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${s.input.invalid.disabled.bg} !important;
        --card-fg-color: ${s.input.invalid.disabled.fg} !important;
        --card-icon-color: ${s.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${pL({ color: s.input.invalid.disabled.border, width: a.border.width })};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${s.input.default.readOnly.bg} !important;
        --card-fg-color: ${s.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${s.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${s.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${s.input.default.hovered.bg};
          --card-fg-color: ${s.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${s.input.invalid.hovered.bg};
          --card-fg-color: ${s.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${pL({ color: s.input.default.hovered.border, width: a.border.width })};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${pL({ color: s.input.invalid.hovered.border, width: a.border.width })};
        }
      }
    }
  `;
    }
    function p1(e) {
      let { theme: t } = e;
      return [
        f1(t, ["padding"], e.$padding),
        f1(t, ["paddingLeft", "paddingRight"], e.$paddingX),
        f1(t, ["paddingTop", "paddingBottom"], e.$paddingY),
        f1(t, ["paddingTop"], e.$paddingTop),
        f1(t, ["paddingRight"], e.$paddingRight),
        f1(t, ["paddingBottom"], e.$paddingBottom),
        f1(t, ["paddingLeft"], e.$paddingLeft),
      ].filter(Boolean);
    }
    function p0(e) {
      let { media: t, radius: r } = Y(e.theme);
      return fJ(t, e.$radius, (e) => {
        let t = 0;
        return ("number" == typeof e && (t = fK(r[e])), "full" === e && (t = "9999px"), { borderRadius: t });
      });
    }
    function p5(e, t) {
      return `${e.map(fK).join(" ")} ${t}`;
    }
    let p2 = r4.span.withConfig({
        displayName: "SpanWithTextOverflow",
        componentId: "sc-ol2i3b-0",
      })`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,
      p6 = r4.div.withConfig({ displayName: "StyledLabel", componentId: "sc-1luap7z-0" })(f6, f4, function (e) {
        let { $accent: t, $muted: r } = e,
          { font: n } = Y(e.theme);
        return r6`
    text-transform: uppercase;

    ${
      t &&
      r6`
      color: var(--card-accent-fg-color);
    `
    }

    ${
      r &&
      r6`
      color: var(--card-muted-fg-color);
    `
    }

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `;
      }),
      p4 = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f = (0, e5.c)(26);
        f[0] !== e
          ? (({ accent: r, align: n, children: o, muted: s, size: a, textOverflow: l, weight: d, ...i } = e),
            (f[0] = e),
            (f[1] = r),
            (f[2] = n),
            (f[3] = o),
            (f[4] = i),
            (f[5] = s),
            (f[6] = a),
            (f[7] = l),
            (f[8] = d))
          : ((r = f[1]), (n = f[2]), (o = f[3]), (i = f[4]), (s = f[5]), (a = f[6]), (l = f[7]), (d = f[8]));
        let p = void 0 !== s && s,
          g = void 0 === a ? 2 : a,
          m = o;
        if ("ellipsis" === l) {
          let e;
          (f[9] !== m ? ((e = (0, e0.jsx)(p2, { children: m })), (f[9] = m), (f[10] = e)) : (e = f[10]), (m = e));
        } else {
          let e;
          (f[11] !== m ? ((e = (0, e0.jsx)("span", { children: m })), (f[11] = m), (f[12] = e)) : (e = f[12]), (m = e));
        }
        return (
          f[13] !== n ? ((c = fQ(n)), (f[13] = n), (f[14] = c)) : (c = f[14]),
          f[15] !== g ? ((u = fQ(g)), (f[15] = g), (f[16] = u)) : (u = f[16]),
          f[17] !== r ||
          f[18] !== m ||
          f[19] !== p ||
          f[20] !== t ||
          f[21] !== i ||
          f[22] !== c ||
          f[23] !== u ||
          f[24] !== d
            ? ((h = (0, e0.jsx)(p6, {
                "data-ui": "Label",
                ...i,
                $accent: r,
                $align: c,
                $muted: p,
                $size: u,
                $weight: d,
                ref: t,
                children: m,
              })),
              (f[17] = r),
              (f[18] = m),
              (f[19] = p),
              (f[20] = t),
              (f[21] = i),
              (f[22] = c),
              (f[23] = u),
              (f[24] = d),
              (f[25] = h))
            : (h = f[25]),
          h
        );
      });
    p4.displayName = "ForwardRef(Label)";
    let p8 = r4.div.withConfig({ displayName: "StyledAvatar", componentId: "sc-1rj7kl0-0" })(
        function (e) {
          let { avatar: t, media: r } = Y(e.theme);
          return fJ(r, e.$size, (e) => {
            let r = t.sizes[e] || t.sizes[0];
            return {
              width: fK(r.size),
              height: fK(r.size),
              borderRadius: fK(r.size / 2),
              "&>svg": { width: fK(r.size), height: fK(r.size), borderRadius: fK(r.size / 2) },
            };
          });
        },
        function (e) {
          let { $color: t } = e,
            { avatar: r } = Y(e.theme);
          return {
            "--avatar-bg-color": `var(--card-avatar-${t}-bg-color)`,
            "--avatar-fg-color": `var(--card-avatar-${t}-fg-color)`,
            backgroundColor: "var(--avatar-bg-color)",
            position: "relative",
            boxSizing: "border-box",
            userSelect: "none",
            boxShadow: "0 0 0 1px var(--card-bg-color)",
            '&[data-status="inactive"]': { opacity: "0.5" },
            "&>svg": { "&:not([hidden])": { display: "block" } },
            '&[data-as="button"]': {
              WebkitFontSmoothing: "inherit",
              appearance: "none",
              margin: 0,
              padding: 0,
              border: 0,
              font: "inherit",
              color: "inherit",
              outline: "none",
              "&:focus": { boxShadow: pS({ focusRing: r.focusRing }) },
              "&:focus:not(:focus-visible)": { boxShadow: "none" },
            },
          };
        },
      ),
      p9 = r4.div.withConfig({ displayName: "Arrow", componentId: "sc-1rj7kl0-1" })(function () {
        return {
          position: "absolute",
          boxSizing: "border-box",
          zIndex: "0",
          opacity: "0",
          transition: "all 0.2s linear",
          transform: "rotate(-90deg) translate3d(0, 6px, 0)",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          "& > svg": {
            width: "11px",
            height: "7px",
            position: "absolute",
            top: "-5px",
            left: "50%",
            transform: "translateX(-6px)",
            "&:not([hidden])": { display: "block" },
          },
          "[data-arrow-position='inside'] > &": { transform: "rotate(-90deg) translate3d(0, 6px, 0)", opacity: "0" },
          "[data-arrow-position='top'] > &": { opacity: "1", transform: "rotate(0deg)" },
          "[data-arrow-position='bottom'] > &": { opacity: "1", transform: "rotate(-180deg)" },
        };
      }),
      p3 = r4.ellipse.withConfig({ displayName: "BgStroke", componentId: "sc-1rj7kl0-2" })(function () {
        return { strokeWidth: "4px", stroke: "var(--card-bg-color)" };
      }),
      p7 = r4.ellipse.withConfig({ displayName: "Stroke", componentId: "sc-1rj7kl0-3" })(function () {
        return {
          strokeWidth: "2px",
          stroke: "var(--avatar-bg-color)",
          '[data-status="editing"] &': { strokeDasharray: "2 4", strokeLinecap: "round" },
        };
      }),
      ge = r4.div.withConfig({ displayName: "Initials", componentId: "sc-1rj7kl0-4" })(function () {
        return {
          width: "100%",
          height: "100%",
          color: "var(--avatar-fg-color)",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          textAlign: "center",
          borderRadius: "50%",
          "&:not([hidden])": { display: "flex" },
        };
      }),
      gt = r4(p4).withConfig({ displayName: "InitialsLabel", componentId: "sc-1rj7kl0-5" })({ color: "inherit" }),
      gr = r4.svg.withConfig({ displayName: "AvatarImage", componentId: "sc-1rj7kl0-6" })(function () {
        return { position: "relative" };
      }),
      gn = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C = (0, e5.c)(46);
        C[0] !== e
          ? (({
              __unstable_hideInnerStroke: r,
              as: i,
              color: c,
              src: d,
              title: f,
              initials: s,
              onImageLoadError: a,
              arrowPosition: o,
              animateArrowFrom: n,
              status: u,
              size: h,
              ...l
            } = e),
            (C[0] = e),
            (C[1] = r),
            (C[2] = n),
            (C[3] = o),
            (C[4] = i),
            (C[5] = s),
            (C[6] = a),
            (C[7] = l),
            (C[8] = d),
            (C[9] = c),
            (C[10] = u),
            (C[11] = h),
            (C[12] = f))
          : ((r = C[1]),
            (n = C[2]),
            (o = C[3]),
            (i = C[4]),
            (s = C[5]),
            (a = C[6]),
            (l = C[7]),
            (d = C[8]),
            (c = C[9]),
            (u = C[10]),
            (h = C[11]),
            (f = C[12]));
        let k = void 0 === c ? "gray" : c,
          M = void 0 === u ? "online" : u,
          j = void 0 === h ? 1 : h,
          { avatar: L } = po(),
          S = ne.default.isValidElementType(i) ? i : "div",
          V = fQ(j),
          R = (L.sizes[V[0]] || L.sizes[0]).size,
          H = R / 2,
          $ = (0, e2.useId)(),
          [T, E] = (0, e2.useState)(n || o || "inside"),
          [B, P] = (0, e2.useState)(!1),
          I = `avatar-image-${$}`;
        (C[13] !== T || C[14] !== o
          ? ((p = () => {
              if (T === o) return;
              let e = requestAnimationFrame(() => E(o));
              return () => cancelAnimationFrame(e);
            }),
            (g = [T, o]),
            (C[13] = T),
            (C[14] = o),
            (C[15] = p),
            (C[16] = g))
          : ((p = C[15]), (g = C[16])),
          (0, e2.useEffect)(p, g),
          C[17] !== d
            ? ((m = () => {
                d && P(!1);
              }),
              (w = [d]),
              (C[17] = d),
              (C[18] = m),
              (C[19] = w))
            : ((m = C[18]), (w = C[19])),
          (0, e2.useEffect)(m, w),
          C[20] !== a
            ? ((v = () => {
                (P(!0), a && a(Error("Avatar: the image failed to load")));
              }),
              (C[20] = a),
              (C[21] = v))
            : (v = C[21]));
        let A = v,
          W = "string" == typeof S ? S : void 0;
        (C[22] !== k
          ? ((b = (0, e0.jsx)(p9, {
              children: (0, e0.jsx)("svg", {
                width: "11",
                height: "7",
                viewBox: "0 0 11 7",
                fill: "none",
                children: (0, e0.jsx)("path", {
                  d: "M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",
                  fill: k,
                }),
              }),
            })),
            (C[22] = k),
            (C[23] = b))
          : (b = C[23]),
          C[24] !== r || C[25] !== H || C[26] !== R || C[27] !== A || C[28] !== B || C[29] !== I || C[30] !== d
            ? ((y =
                !B &&
                d &&
                (0, e0.jsxs)(gr, {
                  viewBox: `0 0 ${R} ${R}`,
                  fill: "none",
                  children: [
                    (0, e0.jsx)("defs", {
                      children: (0, e0.jsx)("pattern", {
                        id: I,
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1",
                        children: (0, e0.jsx)("image", { href: d, width: "1", height: "1", onError: A }),
                      }),
                    }),
                    (0, e0.jsx)("circle", { cx: H, cy: H, r: H, fill: `url(#${I})` }),
                    !r && (0, e0.jsx)(p3, { cx: H, cy: H, rx: H, ry: H, vectorEffect: "non-scaling-stroke" }),
                    (0, e0.jsx)(p7, { cx: H, cy: H, rx: H, ry: H, vectorEffect: "non-scaling-stroke" }),
                  ],
                })),
              (C[24] = r),
              (C[25] = H),
              (C[26] = R),
              (C[27] = A),
              (C[28] = B),
              (C[29] = I),
              (C[30] = d),
              (C[31] = y))
            : (y = C[31]));
        let z =
          (B || !d) &&
          s &&
          (0, e0.jsx)(e0.Fragment, {
            children: (0, e0.jsx)(ge, {
              children: (0, e0.jsx)(gt, { forwardedAs: "span", size: V.map(go), weight: "medium", children: s }),
            }),
          });
        return (
          C[32] !== p8 ||
          C[33] !== T ||
          C[34] !== S ||
          C[35] !== k ||
          C[36] !== t ||
          C[37] !== l ||
          C[38] !== V ||
          C[39] !== M ||
          C[40] !== b ||
          C[41] !== y ||
          C[42] !== z ||
          C[43] !== W ||
          C[44] !== f
            ? ((x = (0, e0.jsxs)(p8, {
                as: S,
                "data-as": W,
                "data-ui": "Avatar",
                ...l,
                $color: k,
                $size: V,
                "aria-label": f,
                "data-arrow-position": T,
                "data-status": M,
                ref: t,
                title: f,
                children: [b, y, z],
              })),
              (C[32] = p8),
              (C[33] = T),
              (C[34] = S),
              (C[35] = k),
              (C[36] = t),
              (C[37] = l),
              (C[38] = V),
              (C[39] = M),
              (C[40] = b),
              (C[41] = y),
              (C[42] = z),
              (C[43] = W),
              (C[44] = f),
              (C[45] = x))
            : (x = C[45]),
          x
        );
      });
    function go(e) {
      return 1 === e ? 1 : 2 === e ? 3 : 5 * (3 === e);
    }
    gn.displayName = "ForwardRef(Avatar)";
    let gi = r4.div.withConfig({ displayName: "StyledAvatarCounter", componentId: "sc-1ydx86y-0" })(
        function (e) {
          let { avatar: t, media: r } = Y(e.theme);
          return fJ(r, e.$size, (e) => {
            let r = t.sizes[e];
            return r ? { borderRadius: fK(r.size / 2), minWidth: fK(r.size), height: fK(r.size) } : fA;
          });
        },
        function (e) {
          let { space: t } = Y(e.theme);
          return r6`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${fK(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `;
        },
      ),
      gs = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u = (0, e5.c)(20),
          { count: h, size: f } = e,
          p = void 0 === f ? 1 : f;
        if (u[0] !== t || u[1] !== p) {
          let e = fQ(p);
          ((n = gi),
            (s = e),
            (a = "AvatarCounter"),
            (l = t),
            (r = p4),
            (o = "span"),
            (i = e.map(ga)),
            (u[0] = t),
            (u[1] = p),
            (u[2] = r),
            (u[3] = n),
            (u[4] = o),
            (u[5] = i),
            (u[6] = s),
            (u[7] = a),
            (u[8] = l));
        } else ((r = u[2]), (n = u[3]), (o = u[4]), (i = u[5]), (s = u[6]), (a = u[7]), (l = u[8]));
        return (
          u[9] !== r || u[10] !== h || u[11] !== o || u[12] !== i
            ? ((d = (0, e0.jsx)(r, { as: o, size: i, weight: "medium", children: h })),
              (u[9] = r),
              (u[10] = h),
              (u[11] = o),
              (u[12] = i),
              (u[13] = d))
            : (d = u[13]),
          u[14] !== n || u[15] !== s || u[16] !== a || u[17] !== l || u[18] !== d
            ? ((c = (0, e0.jsx)(n, { $size: s, "data-ui": a, ref: l, children: d })),
              (u[14] = n),
              (u[15] = s),
              (u[16] = a),
              (u[17] = l),
              (u[18] = d),
              (u[19] = c))
            : (c = u[19]),
          c
        );
      });
    function ga(e) {
      return 1 === e ? 1 : 2 === e ? 3 : 5 * (3 === e);
    }
    gs.displayName = "ForwardRef(AvatarCounter)";
    let gl = r6`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,
      gd = r4.div.withConfig({ displayName: "StyledAvatarStack", componentId: "sc-cysmbb-0" })(
        function (e) {
          let { avatar: t, media: r } = Y(e.theme);
          return fJ(r, e.$size, (e) => {
            let r = t.sizes[e];
            return r ? { "& > div + div": { marginLeft: fK(r.distance) } } : fA;
          });
        },
        function () {
          return gl;
        },
      ),
      gc = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g = (0, e5.c)(38);
        g[0] !== e
          ? (({ children: r, maxLength: o, size: i, ...n } = e),
            (g[0] = e),
            (g[1] = r),
            (g[2] = n),
            (g[3] = o),
            (g[4] = i))
          : ((r = g[1]), (n = g[2]), (o = g[3]), (i = g[4]));
        let m = void 0 === o ? 4 : o,
          w = void 0 === i ? 1 : i;
        if (g[5] !== r || g[6] !== m || g[7] !== t || g[8] !== n || g[9] !== w) {
          let e,
            o,
            i = e2.Children.toArray(r).filter(e2.isValidElement),
            p = Math.max(m, 0);
          g[18] !== w ? ((e = fQ(w)), (g[18] = w), (g[19] = e)) : (e = g[19]);
          let v = e,
            b = i.length,
            y = b - (p - 1),
            x = y > 1 ? i.slice(y, b) : i;
          ((s = gd),
            (a = "AvatarStack"),
            (l = n),
            (d = t),
            (c = v),
            g[20] !== b || g[21] !== v
              ? ((u = 0 === b && (0, e0.jsx)("div", { children: (0, e0.jsx)(gs, { count: b, size: v }) })),
                (g[20] = b),
                (g[21] = v),
                (g[22] = u))
              : (u = g[22]),
            g[23] !== y || g[24] !== b || g[25] !== v
              ? ((h = 0 !== b && y > 1 && (0, e0.jsx)("div", { children: (0, e0.jsx)(gs, { count: y, size: v }) })),
                (g[23] = y),
                (g[24] = b),
                (g[25] = v),
                (g[26] = h))
              : (h = g[26]),
            g[27] !== v
              ? ((o = (e, t) => (0, e0.jsx)("div", { children: (0, e2.cloneElement)(e, { size: v }) }, String(t))),
                (g[27] = v),
                (g[28] = o))
              : (o = g[28]),
            (f = x.map(o)),
            (g[5] = r),
            (g[6] = m),
            (g[7] = t),
            (g[8] = n),
            (g[9] = w),
            (g[10] = s),
            (g[11] = a),
            (g[12] = l),
            (g[13] = d),
            (g[14] = c),
            (g[15] = u),
            (g[16] = h),
            (g[17] = f));
        } else ((s = g[10]), (a = g[11]), (l = g[12]), (d = g[13]), (c = g[14]), (u = g[15]), (h = g[16]), (f = g[17]));
        return (
          g[29] !== s ||
          g[30] !== a ||
          g[31] !== l ||
          g[32] !== d ||
          g[33] !== c ||
          g[34] !== u ||
          g[35] !== h ||
          g[36] !== f
            ? ((p = (0, e0.jsxs)(s, { "data-ui": a, ...l, ref: d, $size: c, children: [u, h, f] })),
              (g[29] = s),
              (g[30] = a),
              (g[31] = l),
              (g[32] = d),
              (g[33] = c),
              (g[34] = u),
              (g[35] = h),
              (g[36] = f),
              (g[37] = p))
            : (p = g[37]),
          p
        );
      });
    gc.displayName = "ForwardRef(AvatarStack)";
    let gu = r4.div.withConfig({ displayName: "StyledBox", componentId: "sc-1hhky9f-0" })(
        function () {
          return pc;
        },
        pv,
        function () {
          return [pp, pg, pm, pf];
        },
        function () {
          return [pH, p$, pT, pE, pB, pP];
        },
        function (e) {
          let { theme: t } = e;
          return [
            f1(t, ["margin"], e.$margin),
            f1(t, ["marginLeft", "marginRight"], e.$marginX),
            f1(t, ["marginTop", "marginBottom"], e.$marginY),
            f1(t, ["marginTop"], e.$marginTop),
            f1(t, ["marginRight"], e.$marginRight),
            f1(t, ["marginBottom"], e.$marginBottom),
            f1(t, ["marginLeft"], e.$marginLeft),
          ].filter(Boolean);
        },
        p1,
      ),
      gh = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M,
          j,
          L,
          S,
          V,
          R,
          H,
          $,
          T,
          E,
          B,
          P,
          I,
          A,
          W,
          z,
          O,
          _,
          Z,
          D,
          N,
          F,
          U,
          G,
          Y,
          X,
          q,
          K,
          J,
          Q,
          ee,
          et = (0, e5.c)(109);
        et[0] !== e
          ? (({
              as: j,
              column: r,
              columnStart: o,
              columnEnd: n,
              display: L,
              flex: i,
              height: s,
              margin: S,
              marginX: u,
              marginY: h,
              marginTop: c,
              marginRight: d,
              marginBottom: a,
              marginLeft: l,
              overflow: f,
              padding: V,
              paddingX: v,
              paddingY: b,
              paddingTop: w,
              paddingRight: m,
              paddingBottom: p,
              paddingLeft: g,
              row: x,
              rowStart: k,
              rowEnd: C,
              sizing: M,
              ...y
            } = e),
            (et[0] = e),
            (et[1] = r),
            (et[2] = n),
            (et[3] = o),
            (et[4] = i),
            (et[5] = s),
            (et[6] = a),
            (et[7] = l),
            (et[8] = d),
            (et[9] = c),
            (et[10] = u),
            (et[11] = h),
            (et[12] = f),
            (et[13] = p),
            (et[14] = g),
            (et[15] = m),
            (et[16] = w),
            (et[17] = v),
            (et[18] = b),
            (et[19] = y),
            (et[20] = x),
            (et[21] = C),
            (et[22] = k),
            (et[23] = M),
            (et[24] = j),
            (et[25] = L),
            (et[26] = S),
            (et[27] = V))
          : ((r = et[1]),
            (n = et[2]),
            (o = et[3]),
            (i = et[4]),
            (s = et[5]),
            (a = et[6]),
            (l = et[7]),
            (d = et[8]),
            (c = et[9]),
            (u = et[10]),
            (h = et[11]),
            (f = et[12]),
            (p = et[13]),
            (g = et[14]),
            (m = et[15]),
            (w = et[16]),
            (v = et[17]),
            (b = et[18]),
            (y = et[19]),
            (x = et[20]),
            (C = et[21]),
            (k = et[22]),
            (M = et[23]),
            (j = et[24]),
            (L = et[25]),
            (S = et[26]),
            (V = et[27]));
        let er = void 0 === j ? "div" : j,
          en = void 0 === L ? "block" : L,
          eo = void 0 === S ? 0 : S,
          ei = void 0 === V ? 0 : V,
          es = "string" == typeof er ? er : void 0;
        return (
          et[28] !== r ? ((R = fQ(r)), (et[28] = r), (et[29] = R)) : (R = et[29]),
          et[30] !== o ? ((H = fQ(o)), (et[30] = o), (et[31] = H)) : (H = et[31]),
          et[32] !== n ? (($ = fQ(n)), (et[32] = n), (et[33] = $)) : ($ = et[33]),
          et[34] !== en ? ((T = fQ(en)), (et[34] = en), (et[35] = T)) : (T = et[35]),
          et[36] !== i ? ((E = fQ(i)), (et[36] = i), (et[37] = E)) : (E = et[37]),
          et[38] !== s ? ((B = fQ(s)), (et[38] = s), (et[39] = B)) : (B = et[39]),
          et[40] !== eo ? ((P = fQ(eo)), (et[40] = eo), (et[41] = P)) : (P = et[41]),
          et[42] !== u ? ((I = fQ(u)), (et[42] = u), (et[43] = I)) : (I = et[43]),
          et[44] !== h ? ((A = fQ(h)), (et[44] = h), (et[45] = A)) : (A = et[45]),
          et[46] !== c ? ((W = fQ(c)), (et[46] = c), (et[47] = W)) : (W = et[47]),
          et[48] !== d ? ((z = fQ(d)), (et[48] = d), (et[49] = z)) : (z = et[49]),
          et[50] !== a ? ((O = fQ(a)), (et[50] = a), (et[51] = O)) : (O = et[51]),
          et[52] !== l ? ((_ = fQ(l)), (et[52] = l), (et[53] = _)) : (_ = et[53]),
          et[54] !== f ? ((Z = fQ(f)), (et[54] = f), (et[55] = Z)) : (Z = et[55]),
          et[56] !== ei ? ((D = fQ(ei)), (et[56] = ei), (et[57] = D)) : (D = et[57]),
          et[58] !== v ? ((N = fQ(v)), (et[58] = v), (et[59] = N)) : (N = et[59]),
          et[60] !== b ? ((F = fQ(b)), (et[60] = b), (et[61] = F)) : (F = et[61]),
          et[62] !== w ? ((U = fQ(w)), (et[62] = w), (et[63] = U)) : (U = et[63]),
          et[64] !== m ? ((G = fQ(m)), (et[64] = m), (et[65] = G)) : (G = et[65]),
          et[66] !== p ? ((Y = fQ(p)), (et[66] = p), (et[67] = Y)) : (Y = et[67]),
          et[68] !== g ? ((X = fQ(g)), (et[68] = g), (et[69] = X)) : (X = et[69]),
          et[70] !== x ? ((q = fQ(x)), (et[70] = x), (et[71] = q)) : (q = et[71]),
          et[72] !== k ? ((K = fQ(k)), (et[72] = k), (et[73] = K)) : (K = et[73]),
          et[74] !== C ? ((J = fQ(C)), (et[74] = C), (et[75] = J)) : (J = et[75]),
          et[76] !== M ? ((Q = fQ(M)), (et[76] = M), (et[77] = Q)) : (Q = et[77]),
          et[78] !== er ||
          et[79] !== e.children ||
          et[80] !== t ||
          et[81] !== y ||
          et[82] !== B ||
          et[83] !== P ||
          et[84] !== I ||
          et[85] !== A ||
          et[86] !== W ||
          et[87] !== z ||
          et[88] !== O ||
          et[89] !== _ ||
          et[90] !== Z ||
          et[91] !== D ||
          et[92] !== N ||
          et[93] !== F ||
          et[94] !== U ||
          et[95] !== G ||
          et[96] !== Y ||
          et[97] !== X ||
          et[98] !== q ||
          et[99] !== K ||
          et[100] !== J ||
          et[101] !== Q ||
          et[102] !== es ||
          et[103] !== R ||
          et[104] !== H ||
          et[105] !== $ ||
          et[106] !== T ||
          et[107] !== E
            ? ((ee = (0, e0.jsx)(gu, {
                "data-as": es,
                "data-ui": "Box",
                ...y,
                $column: R,
                $columnStart: H,
                $columnEnd: $,
                $display: T,
                $flex: E,
                $height: B,
                $margin: P,
                $marginX: I,
                $marginY: A,
                $marginTop: W,
                $marginRight: z,
                $marginBottom: O,
                $marginLeft: _,
                $overflow: Z,
                $padding: D,
                $paddingX: N,
                $paddingY: F,
                $paddingTop: U,
                $paddingRight: G,
                $paddingBottom: Y,
                $paddingLeft: X,
                $row: q,
                $rowStart: K,
                $rowEnd: J,
                $sizing: Q,
                as: er,
                ref: t,
                children: e.children,
              })),
              (et[78] = er),
              (et[79] = e.children),
              (et[80] = t),
              (et[81] = y),
              (et[82] = B),
              (et[83] = P),
              (et[84] = I),
              (et[85] = A),
              (et[86] = W),
              (et[87] = z),
              (et[88] = O),
              (et[89] = _),
              (et[90] = Z),
              (et[91] = D),
              (et[92] = N),
              (et[93] = F),
              (et[94] = U),
              (et[95] = G),
              (et[96] = Y),
              (et[97] = X),
              (et[98] = q),
              (et[99] = K),
              (et[100] = J),
              (et[101] = Q),
              (et[102] = es),
              (et[103] = R),
              (et[104] = H),
              (et[105] = $),
              (et[106] = T),
              (et[107] = E),
              (et[108] = ee))
            : (ee = et[108]),
          ee
        );
      });
    gh.displayName = "ForwardRef(Box)";
    let gf = r4.div.withConfig({ displayName: "StyledText", componentId: "sc-11ov82j-0" })(f8, f4, function (e) {
        let { $accent: t, $muted: r } = e,
          { font: n } = Y(e.theme);
        return r6`
    color: var(--card-fg-color);

    ${
      t &&
      r6`
      color: var(--card-accent-fg-color);
    `
    }

    ${
      r &&
      r6`
      color: var(--card-muted-fg-color);
    `
    }

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${n.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `;
      }),
      gp = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p = (0, e5.c)(26);
        p[0] !== e
          ? (({ accent: i, align: r, children: n, muted: s, size: a, textOverflow: l, weight: d, ...o } = e),
            (p[0] = e),
            (p[1] = r),
            (p[2] = n),
            (p[3] = o),
            (p[4] = i),
            (p[5] = s),
            (p[6] = a),
            (p[7] = l),
            (p[8] = d))
          : ((r = p[1]), (n = p[2]), (o = p[3]), (i = p[4]), (s = p[5]), (a = p[6]), (l = p[7]), (d = p[8]));
        let g = void 0 !== i && i,
          m = void 0 !== s && s,
          w = void 0 === a ? 2 : a,
          v = n;
        if ("ellipsis" === l) {
          let e;
          (p[9] !== v ? ((e = (0, e0.jsx)(p2, { children: v })), (p[9] = v), (p[10] = e)) : (e = p[10]), (v = e));
        }
        return (
          p[11] !== r ? ((c = fQ(r)), (p[11] = r), (p[12] = c)) : (c = p[12]),
          p[13] !== w ? ((u = fQ(w)), (p[13] = w), (p[14] = u)) : (u = p[14]),
          p[15] !== v ? ((h = (0, e0.jsx)("span", { children: v })), (p[15] = v), (p[16] = h)) : (h = p[16]),
          p[17] !== g ||
          p[18] !== m ||
          p[19] !== t ||
          p[20] !== o ||
          p[21] !== c ||
          p[22] !== u ||
          p[23] !== h ||
          p[24] !== d
            ? ((f = (0, e0.jsx)(gf, {
                "data-ui": "Text",
                ...o,
                $accent: g,
                $align: c,
                $muted: m,
                ref: t,
                $size: u,
                $weight: d,
                children: h,
              })),
              (p[17] = g),
              (p[18] = m),
              (p[19] = t),
              (p[20] = o),
              (p[21] = c),
              (p[22] = u),
              (p[23] = h),
              (p[24] = d),
              (p[25] = f))
            : (f = p[25]),
          f
        );
      });
    gp.displayName = "ForwardRef(Text)";
    let gg = r4(gh).withConfig({ displayName: "StyledBadge", componentId: "sc-5u140l-0" })(p0, function (e) {
        let { $tone: t } = e;
        return {
          "--card-bg-color": `var(--card-badge-${t}-bg-color)`,
          "--card-fg-color": `var(--card-badge-${t}-fg-color)`,
          backgroundColor: "var(--card-bg-color)",
          cursor: "default",
          "&:not([hidden])": { display: "inline-block", verticalAlign: "top" },
        };
      }),
      gm = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h = (0, e5.c)(21);
        if (h[0] !== e) {
          let { children: t, fontSize: l, mode: d, padding: c, radius: u, tone: f, ...p } = e;
          ((r = t),
            (o = l),
            (i = c),
            (s = u),
            (a = f),
            (n = p),
            (h[0] = e),
            (h[1] = r),
            (h[2] = n),
            (h[3] = o),
            (h[4] = i),
            (h[5] = s),
            (h[6] = a));
        } else ((r = h[1]), (n = h[2]), (o = h[3]), (i = h[4]), (s = h[5]), (a = h[6]));
        let f = void 0 === o ? 1 : o,
          p = void 0 === i ? 1 : i,
          g = void 0 === s ? "full" : s,
          m = void 0 === a ? "default" : a;
        return (
          h[7] !== g ? ((l = fQ(g)), (h[7] = g), (h[8] = l)) : (l = h[8]),
          h[9] !== p ? ((d = fQ(p)), (h[9] = p), (h[10] = d)) : (d = h[10]),
          h[11] !== r || h[12] !== f
            ? ((c = (0, e0.jsx)(gp, { size: f, children: r })), (h[11] = r), (h[12] = f), (h[13] = c))
            : (c = h[13]),
          h[14] !== t || h[15] !== n || h[16] !== l || h[17] !== d || h[18] !== c || h[19] !== m
            ? ((u = (0, e0.jsx)(gg, {
                "data-ui": "Badge",
                ...n,
                $tone: m,
                $radius: l,
                padding: d,
                ref: t,
                children: c,
              })),
              (h[14] = t),
              (h[15] = n),
              (h[16] = l),
              (h[17] = d),
              (h[18] = c),
              (h[19] = m),
              (h[20] = u))
            : (u = h[20]),
          u
        );
      });
    gm.displayName = "ForwardRef(Badge)";
    let gw = r4(gh).withConfig({ displayName: "StyledFlex", componentId: "sc-oxesg3-0" })(pv, function () {
        return [py, px, pC, pk, pM, pj];
      }),
      gv = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g = (0, e5.c)(27);
        g[0] !== e
          ? (({ align: r, as: n, direction: a, gap: o, justify: i, wrap: l, ...s } = e),
            (g[0] = e),
            (g[1] = r),
            (g[2] = n),
            (g[3] = o),
            (g[4] = i),
            (g[5] = s),
            (g[6] = a),
            (g[7] = l))
          : ((r = g[1]), (n = g[2]), (o = g[3]), (i = g[4]), (s = g[5]), (a = g[6]), (l = g[7]));
        let m = void 0 === a ? "row" : a;
        return (
          g[8] !== r ? ((d = fQ(r)), (g[8] = r), (g[9] = d)) : (d = g[9]),
          g[10] !== m ? ((c = fQ(m)), (g[10] = m), (g[11] = c)) : (c = g[11]),
          g[12] !== o ? ((u = fQ(o)), (g[12] = o), (g[13] = u)) : (u = g[13]),
          g[14] !== i ? ((h = fQ(i)), (g[14] = i), (g[15] = h)) : (h = g[15]),
          g[16] !== l ? ((f = fQ(l)), (g[16] = l), (g[17] = f)) : (f = g[17]),
          g[18] !== n ||
          g[19] !== t ||
          g[20] !== s ||
          g[21] !== d ||
          g[22] !== c ||
          g[23] !== u ||
          g[24] !== h ||
          g[25] !== f
            ? ((p = (0, e0.jsx)(gw, {
                "data-ui": "Flex",
                ...s,
                $align: d,
                $direction: c,
                $gap: u,
                $justify: h,
                $wrap: f,
                forwardedAs: n,
                ref: t,
              })),
              (g[18] = n),
              (g[19] = t),
              (g[20] = s),
              (g[21] = d),
              (g[22] = c),
              (g[23] = u),
              (g[24] = h),
              (g[25] = f),
              (g[26] = p))
            : (p = g[26]),
          p
        );
      });
    gv.displayName = "ForwardRef(Flex)";
    let gb = r3`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,
      gy = r4(gp).withConfig({
        displayName: "StyledSpinner",
        componentId: "sc-124hnd0-0",
      })`& > span > svg{animation:${gb} 500ms linear infinite;}`,
      gx = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o = (0, e5.c)(4);
        return (
          o[0] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, e0.jsx)(i6, {})), (o[0] = r)) : (r = o[0]),
          o[1] !== e || o[2] !== t
            ? ((n = (0, e0.jsx)(gy, { "data-ui": "Spinner", ...e, ref: t, children: r })),
              (o[1] = e),
              (o[2] = t),
              (o[3] = n))
            : (n = o[3]),
          n
        );
      });
    function gC(e, t, r = !1) {
      return {
        "--card-backdrop-color": e.backdrop,
        "--card-focus-ring-color": e.focusRing,
        "--card-shadow-outline-color": e.shadow.outline,
        "--card-shadow-umbra-color": e.shadow.umbra,
        "--card-shadow-penumbra-color": e.shadow.penumbra,
        "--card-shadow-ambient-color": e.shadow.ambient,
        "--card-accent-fg-color": t.accent.fg,
        "--card-avatar-gray-bg-color": t.avatar.gray.bg,
        "--card-avatar-gray-fg-color": t.avatar.gray.fg,
        "--card-avatar-blue-bg-color": t.avatar.blue.bg,
        "--card-avatar-blue-fg-color": t.avatar.blue.fg,
        "--card-avatar-purple-bg-color": t.avatar.purple.bg,
        "--card-avatar-purple-fg-color": t.avatar.purple.fg,
        "--card-avatar-magenta-bg-color": t.avatar.magenta.bg,
        "--card-avatar-magenta-fg-color": t.avatar.magenta.fg,
        "--card-avatar-red-bg-color": t.avatar.red.bg,
        "--card-avatar-red-fg-color": t.avatar.red.fg,
        "--card-avatar-orange-bg-color": t.avatar.orange.bg,
        "--card-avatar-orange-fg-color": t.avatar.orange.fg,
        "--card-avatar-yellow-bg-color": t.avatar.yellow.bg,
        "--card-avatar-yellow-fg-color": t.avatar.yellow.fg,
        "--card-avatar-green-bg-color": t.avatar.green.bg,
        "--card-avatar-green-fg-color": t.avatar.green.fg,
        "--card-avatar-cyan-bg-color": t.avatar.cyan.bg,
        "--card-avatar-cyan-fg-color": t.avatar.cyan.fg,
        "--card-bg-color": t.bg,
        "--card-bg-image": r ? `repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)` : void 0,
        "--card-border-color": t.border,
        "--card-badge-default-bg-color": t.badge.default.bg,
        "--card-badge-default-dot-color": t.badge.default.dot,
        "--card-badge-default-fg-color": t.badge.default.fg,
        "--card-badge-default-icon-color": t.badge.default.icon,
        "--card-badge-neutral-bg-color": t.badge.neutral?.bg,
        "--card-badge-neutral-dot-color": t.badge.neutral?.dot,
        "--card-badge-neutral-fg-color": t.badge.neutral?.fg,
        "--card-badge-neutral-icon-color": t.badge.neutral?.icon,
        "--card-badge-primary-bg-color": t.badge.primary.bg,
        "--card-badge-primary-dot-color": t.badge.primary.dot,
        "--card-badge-primary-fg-color": t.badge.primary.fg,
        "--card-badge-primary-icon-color": t.badge.primary.icon,
        "--card-badge-suggest-bg-color": t.badge.suggest?.bg,
        "--card-badge-suggest-dot-color": t.badge.suggest?.dot,
        "--card-badge-suggest-fg-color": t.badge.suggest?.fg,
        "--card-badge-suggest-icon-color": t.badge.suggest?.icon,
        "--card-badge-positive-bg-color": t.badge.positive.bg,
        "--card-badge-positive-dot-color": t.badge.positive.dot,
        "--card-badge-positive-fg-color": t.badge.positive.fg,
        "--card-badge-positive-icon-color": t.badge.positive.icon,
        "--card-badge-caution-bg-color": t.badge.caution.bg,
        "--card-badge-caution-dot-color": t.badge.caution.dot,
        "--card-badge-caution-fg-color": t.badge.caution.fg,
        "--card-badge-caution-icon-color": t.badge.caution.icon,
        "--card-badge-critical-bg-color": t.badge.critical.bg,
        "--card-badge-critical-dot-color": t.badge.critical.dot,
        "--card-badge-critical-fg-color": t.badge.critical.fg,
        "--card-badge-critical-icon-color": t.badge.critical.icon,
        "--card-code-bg-color": t.code.bg,
        "--card-code-fg-color": t.code.fg,
        "--card-fg-color": t.fg,
        "--card-icon-color": t.icon,
        "--card-kbd-bg-color": t.kbd.bg,
        "--card-kbd-border-color": t.kbd.border,
        "--card-kbd-fg-color": t.kbd.fg,
        "--card-link-fg-color": t.link.fg,
        "--card-muted-bg-color": t.muted.bg,
        "--card-muted-fg-color": t.muted.fg,
        "--card-skeleton-color-from": t.skeleton.from,
        "--card-skeleton-color-to": t.skeleton.to,
        "--card-bg2-color": t.muted.bg,
        "--card-link-color": t.link.fg,
        "--card-hairline-soft-color": t.border,
        "--card-hairline-hard-color": t.border,
      };
    }
    function gk(...e) {
      return e.filter(Boolean).join(",");
    }
    gx.displayName = "ForwardRef(Spinner)";
    let gM = r4.button.withConfig({ displayName: "StyledButton", componentId: "sc-aaekt4-0" })(
        p0,
        function (e) {
          let { $width: t } = e,
            { style: r } = Y(e.theme);
          return r6`
    ${r?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${
      "fill" === t &&
      r6`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `
    }

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `;
        },
        function (e) {
          let { $mode: t } = e,
            { button: r, color: n, style: o } = Y(e.theme),
            i = "ghost" === e.$mode,
            s = n.button[t] || n.button.default,
            a = s[e.$tone] || s.default,
            l = { width: r.border.width, color: "var(--card-border-color)" },
            d;
          return [
            gC(n, a.enabled),
            {
              backgroundColor: "var(--card-bg-color)",
              color: "var(--card-fg-color)",
              boxShadow: pL(l),
              '&:disabled, &[data-disabled="true"]': gC(n, a.disabled),
              "&:not([data-disabled='true'])": {
                boxShadow: gk(pL(l), i ? d : void 0),
                "&:focus": { boxShadow: pS({ base: n, border: { width: 2, color: n.bg }, focusRing: r.focusRing }) },
                "&:focus:not(:focus-visible)": { boxShadow: gk(pL(l), i ? d : void 0) },
                "@media (hover: hover)": {
                  "&:hover": gC(n, a.hovered),
                  "&:active": gC(n, a.pressed),
                  "&[data-hovered]": gC(n, a.hovered),
                },
                "&[data-selected]": gC(n, a.pressed),
              },
            },
            o?.button?.root,
          ].filter(Boolean);
        },
      ),
      gj = r4.div.withConfig({
        displayName: "LoadingBox",
        componentId: "sc-aaekt4-1",
      })`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,
      gL = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M,
          j,
          L,
          S,
          V,
          R,
          H,
          $,
          T,
          E,
          B,
          P,
          I,
          A,
          W,
          z,
          O,
          _,
          Z,
          D = (0, e5.c)(86);
        D[0] !== e
          ? (({
              children: o,
              disabled: i,
              fontSize: g,
              icon: r,
              iconRight: n,
              justify: m,
              loading: s,
              mode: w,
              padding: v,
              paddingX: u,
              paddingY: h,
              paddingTop: c,
              paddingBottom: a,
              paddingLeft: l,
              paddingRight: d,
              radius: b,
              selected: p,
              space: y,
              text: M,
              textAlign: j,
              textWeight: L,
              tone: x,
              type: C,
              muted: k,
              width: S,
              ...f
            } = e),
            (D[0] = e),
            (D[1] = r),
            (D[2] = n),
            (D[3] = o),
            (D[4] = i),
            (D[5] = s),
            (D[6] = a),
            (D[7] = l),
            (D[8] = d),
            (D[9] = c),
            (D[10] = u),
            (D[11] = h),
            (D[12] = f),
            (D[13] = p),
            (D[14] = g),
            (D[15] = m),
            (D[16] = w),
            (D[17] = v),
            (D[18] = b),
            (D[19] = y),
            (D[20] = x),
            (D[21] = C),
            (D[22] = k),
            (D[23] = M),
            (D[24] = j),
            (D[25] = L),
            (D[26] = S))
          : ((r = D[1]),
            (n = D[2]),
            (o = D[3]),
            (i = D[4]),
            (s = D[5]),
            (a = D[6]),
            (l = D[7]),
            (d = D[8]),
            (c = D[9]),
            (u = D[10]),
            (h = D[11]),
            (f = D[12]),
            (p = D[13]),
            (g = D[14]),
            (m = D[15]),
            (w = D[16]),
            (v = D[17]),
            (b = D[18]),
            (y = D[19]),
            (x = D[20]),
            (C = D[21]),
            (k = D[22]),
            (M = D[23]),
            (j = D[24]),
            (L = D[25]),
            (S = D[26]));
        let N = void 0 === g ? 1 : g,
          F = void 0 === m ? "center" : m,
          U = void 0 === w ? "default" : w,
          G = void 0 === v ? 3 : v,
          Y = void 0 === b ? 2 : b,
          X = void 0 === y ? 3 : y,
          q = void 0 === x ? "default" : x,
          K = void 0 === C ? "button" : C,
          J = void 0 !== k && k,
          { button: Q } = po();
        D[27] !== F ? ((V = fQ(F)), (D[27] = F), (D[28] = V)) : (V = D[28]);
        let ee = V;
        D[29] !== G ? ((R = fQ(G)), (D[29] = G), (D[30] = R)) : (R = D[30]);
        let et = R;
        D[31] !== u ? ((H = fQ(u)), (D[31] = u), (D[32] = H)) : (H = D[32]);
        let er = H;
        D[33] !== h ? (($ = fQ(h)), (D[33] = h), (D[34] = $)) : ($ = D[34]);
        let en = $;
        D[35] !== c ? ((T = fQ(c)), (D[35] = c), (D[36] = T)) : (T = D[36]);
        let eo = T;
        D[37] !== a ? ((E = fQ(a)), (D[37] = a), (D[38] = E)) : (E = D[38]);
        let ei = E;
        D[39] !== l ? ((B = fQ(l)), (D[39] = l), (D[40] = B)) : (B = D[40]);
        let es = B;
        D[41] !== d ? ((P = fQ(d)), (D[41] = d), (D[42] = P)) : (P = D[42]);
        let ea = P;
        D[43] !== Y ? ((I = fQ(Y)), (D[43] = Y), (D[44] = I)) : (I = D[44]);
        let el = I;
        D[45] !== X ? ((A = fQ(X)), (D[45] = X), (D[46] = A)) : (A = D[46]);
        let ed = A;
        D[47] !== et || D[48] !== ei || D[49] !== es || D[50] !== ea || D[51] !== eo || D[52] !== er || D[53] !== en
          ? ((W = {
              padding: et,
              paddingX: er,
              paddingY: en,
              paddingTop: eo,
              paddingBottom: ei,
              paddingLeft: es,
              paddingRight: ea,
            }),
            (D[47] = et),
            (D[48] = ei),
            (D[49] = es),
            (D[50] = ea),
            (D[51] = eo),
            (D[52] = er),
            (D[53] = en),
            (D[54] = W))
          : (W = D[54]);
        let ec = W,
          eu = !!(s || i),
          eh = p ? "" : void 0,
          ef = !!(s || i);
        return (
          D[55] !== s
            ? ((z = !!s && (0, e0.jsx)(gj, { children: (0, e0.jsx)(gx, {}) })), (D[55] = s), (D[56] = z))
            : (z = D[56]),
          D[57] !== r ||
          D[58] !== n ||
          D[59] !== ec ||
          D[60] !== Q ||
          D[61] !== N ||
          D[62] !== ee ||
          D[63] !== J ||
          D[64] !== ed ||
          D[65] !== M ||
          D[66] !== j ||
          D[67] !== L
            ? ((O =
                (r || M || n) &&
                (0, e0.jsx)(gh, {
                  as: "span",
                  ...ec,
                  children: (0, e0.jsxs)(gv, {
                    as: "span",
                    justify: ee,
                    gap: ed,
                    children: [
                      r &&
                        (0, e0.jsxs)(gp, {
                          size: N,
                          children: [
                            (0, e2.isValidElement)(r) && r,
                            (0, ne.isValidElementType)(r) && (0, e0.jsx)(r, {}),
                          ],
                        }),
                      M &&
                        (0, e0.jsx)(gh, {
                          children: (0, e0.jsx)(gp, {
                            muted: J,
                            align: j,
                            size: N,
                            textOverflow: "ellipsis",
                            weight: L ?? Q.textWeight,
                            children: M,
                          }),
                        }),
                      n &&
                        (0, e0.jsxs)(gp, {
                          size: N,
                          children: [
                            (0, e2.isValidElement)(n) && n,
                            (0, ne.isValidElementType)(n) && (0, e0.jsx)(n, {}),
                          ],
                        }),
                    ],
                  }),
                })),
              (D[57] = r),
              (D[58] = n),
              (D[59] = ec),
              (D[60] = Q),
              (D[61] = N),
              (D[62] = ee),
              (D[63] = J),
              (D[64] = ed),
              (D[65] = M),
              (D[66] = j),
              (D[67] = L),
              (D[68] = O))
            : (O = D[68]),
          D[69] !== ec || D[70] !== o
            ? ((_ = o && (0, e0.jsx)(gh, { as: "span", ...ec, children: o })), (D[69] = ec), (D[70] = o), (D[71] = _))
            : (_ = D[71]),
          D[72] !== U ||
          D[73] !== el ||
          D[74] !== t ||
          D[75] !== f ||
          D[76] !== eu ||
          D[77] !== eh ||
          D[78] !== ef ||
          D[79] !== z ||
          D[80] !== O ||
          D[81] !== _ ||
          D[82] !== q ||
          D[83] !== K ||
          D[84] !== S
            ? ((Z = (0, e0.jsxs)(gM, {
                "data-ui": "Button",
                ...f,
                $mode: U,
                $radius: el,
                $tone: q,
                "data-disabled": eu,
                "data-selected": eh,
                disabled: ef,
                ref: t,
                type: K,
                $width: S,
                children: [z, O, _],
              })),
              (D[72] = U),
              (D[73] = el),
              (D[74] = t),
              (D[75] = f),
              (D[76] = eu),
              (D[77] = eh),
              (D[78] = ef),
              (D[79] = z),
              (D[80] = O),
              (D[81] = _),
              (D[82] = q),
              (D[83] = K),
              (D[84] = S),
              (D[85] = Z))
            : (Z = D[85]),
          Z
        );
      });
    gL.displayName = "ForwardRef(Button)";
    let gS = r4(gh).withConfig({ displayName: "StyledCard", componentId: "sc-osnro2-0" })(
        function () {
          return [pi, ps, pa, pl, pd];
        },
        p0,
        function (e) {
          let { card: t, media: r, shadow: n } = Y(e.theme);
          return fJ(r, e.$shadow, (e) =>
            (function (e, t = 1) {
              if (!e) return fA;
              let r = `0 0 0 ${fK(t)} var(--card-shadow-outline-color)`,
                n = p5(e.umbra, "var(--card-shadow-umbra-color)"),
                o = p5(e.penumbra, "var(--card-shadow-penumbra-color)"),
                i = p5(e.ambient, "var(--card-shadow-ambient-color)");
              return { boxShadow: `${r}, ${n}, ${o}, ${i}` };
            })(n[e], t.shadow.outline),
          );
        },
        function (e) {
          return [
            (function (e) {
              let { $checkered: t } = e,
                { space: r } = Y(e.theme);
              return r6`
    ${
      t &&
      r6`
      background-size: ${r[3]}px ${r[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `
    }

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `;
            })(e),
            (function (e) {
              let { $checkered: t, $focusRing: r, $muted: n } = e,
                { card: o, color: i, style: s } = Y(e.theme),
                a = { width: o.border.width, color: "var(--card-border-color)" };
              return r6`
    color-scheme: ${i._dark ? "dark" : "light"};

    ${gC(i, i, t)}

    background-color: ${n ? "var(--card-muted-bg-color)" : "var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${gC(i, i.selectable.default.disabled, t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${gC(i, i.selectable.default.pressed, t)}
        }

        &[data-selected] {
          ${gC(i, i.selectable.default.selected, t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${gC(i, i.selectable.default.hovered, t)}
            }

            &:active {
              ${gC(i, i.selectable.default.pressed, t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r ? pS({ base: i, border: a, focusRing: o.focusRing }) : void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${gC(i, i.selectable.default.disabled, t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${gC(i, i.selectable.default.pressed, t)}
        }

        &[data-selected] {
          ${gC(i, i.selectable.default.selected, t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${gC(i, i.selectable.default.hovered, t)}
            }

            &:active {
              ${gC(i, i.selectable.default.pressed, t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r ? pS({ base: i, border: a, focusRing: o.focusRing }) : void 0};
        }
      }
    }

    ${s?.card?.root}
  `;
            })(e),
          ];
        },
      ),
      gV = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M,
          j,
          L,
          S = (0, e5.c)(56);
        S[0] !== e
          ? (({
              __unstable_checkered: p,
              __unstable_focusRing: g,
              as: r,
              border: n,
              borderTop: a,
              borderRight: s,
              borderBottom: o,
              borderLeft: i,
              muted: l,
              pressed: d,
              radius: m,
              scheme: u,
              selected: h,
              shadow: f,
              tone: w,
              ...c
            } = e),
            (S[0] = e),
            (S[1] = r),
            (S[2] = n),
            (S[3] = o),
            (S[4] = i),
            (S[5] = s),
            (S[6] = a),
            (S[7] = l),
            (S[8] = d),
            (S[9] = c),
            (S[10] = u),
            (S[11] = h),
            (S[12] = f),
            (S[13] = p),
            (S[14] = g),
            (S[15] = m),
            (S[16] = w))
          : ((r = S[1]),
            (n = S[2]),
            (o = S[3]),
            (i = S[4]),
            (s = S[5]),
            (a = S[6]),
            (l = S[7]),
            (d = S[8]),
            (c = S[9]),
            (u = S[10]),
            (h = S[11]),
            (f = S[12]),
            (p = S[13]),
            (g = S[14]),
            (m = S[15]),
            (w = S[16]));
        let V = void 0 !== p && p,
          R = void 0 !== g && g,
          H = void 0 === m ? 0 : m,
          $ = void 0 === w ? "default" : w,
          T = (0, ne.isValidElementType)(r) ? r : "div",
          E = pt(),
          B = "inherit" === $ ? E.tone : $,
          P = "string" == typeof T ? T : void 0,
          I = E.scheme;
        (S[17] !== n ? ((v = fQ(n)), (S[17] = n), (S[18] = v)) : (v = S[18]),
          S[19] !== a ? ((b = fQ(a)), (S[19] = a), (S[20] = b)) : (b = S[20]),
          S[21] !== s ? ((y = fQ(s)), (S[21] = s), (S[22] = y)) : (y = S[22]),
          S[23] !== o ? ((x = fQ(o)), (S[23] = o), (S[24] = x)) : (x = S[24]),
          S[25] !== i ? ((C = fQ(i)), (S[25] = i), (S[26] = C)) : (C = S[26]),
          S[27] !== H ? ((k = fQ(H)), (S[27] = H), (S[28] = k)) : (k = S[28]),
          S[29] !== f ? ((M = fQ(f)), (S[29] = f), (S[30] = M)) : (M = S[30]));
        let A = V ? "" : void 0,
          W = d ? "" : void 0,
          z = h ? "" : void 0;
        return (
          S[31] !== T ||
          S[32] !== V ||
          S[33] !== R ||
          S[34] !== l ||
          S[35] !== t ||
          S[36] !== c ||
          S[37] !== E.scheme ||
          S[38] !== h ||
          S[39] !== C ||
          S[40] !== k ||
          S[41] !== M ||
          S[42] !== A ||
          S[43] !== W ||
          S[44] !== z ||
          S[45] !== P ||
          S[46] !== v ||
          S[47] !== b ||
          S[48] !== y ||
          S[49] !== x ||
          S[50] !== B
            ? ((j = (0, e0.jsx)(gS, {
                "data-as": P,
                "data-scheme": I,
                "data-ui": "Card",
                "data-tone": B,
                ...c,
                $border: v,
                $borderTop: b,
                $borderRight: y,
                $borderBottom: x,
                $borderLeft: C,
                $checkered: V,
                $focusRing: R,
                $muted: l,
                $radius: k,
                $shadow: M,
                $tone: B,
                "data-checkered": A,
                "data-pressed": W,
                "data-selected": z,
                forwardedAs: T,
                ref: t,
                selected: h,
              })),
              (S[31] = T),
              (S[32] = V),
              (S[33] = R),
              (S[34] = l),
              (S[35] = t),
              (S[36] = c),
              (S[37] = E.scheme),
              (S[38] = h),
              (S[39] = C),
              (S[40] = k),
              (S[41] = M),
              (S[42] = A),
              (S[43] = W),
              (S[44] = z),
              (S[45] = P),
              (S[46] = v),
              (S[47] = b),
              (S[48] = y),
              (S[49] = x),
              (S[50] = B),
              (S[51] = j))
            : (j = S[51]),
          S[52] !== u || S[53] !== j || S[54] !== B
            ? ((L = (0, e0.jsx)(pr, { scheme: u, tone: B, children: j })),
              (S[52] = u),
              (S[53] = j),
              (S[54] = B),
              (S[55] = L))
            : (L = S[55]),
          L
        );
      });
    function gR(e, t, r) {
      let n,
        o,
        i,
        s = (0, e5.c)(9),
        a = void 0 === t ? gH : t;
      s[0] !== r || s[1] !== a || s[2] !== e
        ? ((n = (t) => {
            if (!e) return;
            let n = t.target;
            if (!(n instanceof Node)) return;
            let o = r?.();
            if (!o || o.contains(n)) {
              for (let e of a().flat()) if (e && (n === e || e.contains(n))) return;
              e(t);
            }
          }),
          (s[0] = r),
          (s[1] = a),
          (s[2] = e),
          (s[3] = n))
        : (n = s[3]);
      let l = fB(n),
        d = !!e;
      (s[4] !== d || s[5] !== l
        ? ((o = () => {
            if (!d) return;
            let e = (e) => l(e);
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }),
          (s[4] = d),
          (s[5] = l),
          (s[6] = o))
        : (o = s[6]),
        s[7] !== d ? ((i = [d]), (s[7] = d), (s[8] = i)) : (i = s[8]),
        (0, e2.useEffect)(o, i),
        (0, e2.useDebugValue)(e ? "MouseDown On" : "MouseDown Off"));
    }
    function gH() {
      return fI;
    }
    function g$(e, t) {
      let r,
        n,
        o = (0, e5.c)(4);
      (o[0] !== t || o[1] !== e
        ? ((r = () => {
            e.current?.setCustomValidity(t || "");
          }),
          (n = [t, e]),
          (o[0] = t),
          (o[1] = e),
          (o[2] = r),
          (o[3] = n))
        : ((r = o[2]), (n = o[3])),
        (0, e2.useEffect)(r, n));
    }
    gV.displayName = "ForwardRef(Card)";
    let gT = "u" > typeof document && "u" > typeof window && window.ResizeObserver ? window.ResizeObserver : fR,
      gE =
        ((r = new WeakMap()),
        (n = new WeakMap()),
        {
          subscribe(e, t) {
            let o = n.get(e) || [],
              i = r.get(e);
            return (
              n.has(e) ||
                (n.set(e, o),
                (i = {
                  subscribe(e, t) {
                    let r = new gT(([e]) => {
                      t({
                        _contentRect: e.contentRect,
                        border: { width: e.borderBoxSize[0].inlineSize, height: e.borderBoxSize[0].blockSize },
                        content: { width: e.contentRect.width, height: e.contentRect.height },
                      });
                    });
                    return (
                      r.observe(e),
                      () => {
                        (r.unobserve(e), r.disconnect());
                      }
                    );
                  },
                }.subscribe(e, (e) => {
                  for (let t of o) t(e);
                }))),
              o.push(t),
              () => {
                let e = o.indexOf(t);
                (e > -1 && o.splice(e, 1), 0 === o.length && i && i());
              }
            );
          },
        });
    function gB(e) {
      let t,
        r,
        n = (0, e5.c)(3),
        [o, i] = (0, e2.useState)(null);
      return (
        n[0] !== e
          ? ((t = () => {
              if (e) return gE.subscribe(e, i);
            }),
            (r = [e]),
            (n[0] = e),
            (n[1] = t),
            (n[2] = r))
          : ((t = n[1]), (r = n[2])),
        (0, e2.useEffect)(t, r),
        o
      );
    }
    function gP(e, t) {
      let r,
        n,
        o,
        i = (0, e5.c)(7);
      i[0] !== e ? ((r = (t) => e(t)), (i[0] = e), (i[1] = r)) : (r = i[1]);
      let s = fB(r);
      (i[2] !== s || i[3] !== t
        ? ((n = () => {
            let e = (e) => s(e);
            return (window.addEventListener("keydown", e, t), () => window.removeEventListener("keydown", e, t));
          }),
          (i[2] = s),
          (i[3] = t),
          (i[4] = n))
        : (n = i[4]),
        i[5] !== t ? ((o = [t]), (i[5] = t), (i[6] = o)) : (o = i[6]),
        (0, e2.useEffect)(n, o));
    }
    function gI(e, t) {
      let r,
        n,
        o = (0, e5.c)(4);
      return (
        (0, e2.useDebugValue)(e),
        o[0] !== e
          ? ((r = (t) => {
              let r = window.matchMedia(e);
              return (r.addEventListener("change", t), () => r.removeEventListener("change", t));
            }),
            (o[0] = e),
            (o[1] = r))
          : (r = o[1]),
        o[2] !== e ? ((n = () => window.matchMedia(e).matches), (o[2] = e), (o[3] = n)) : (n = o[3]),
        (0, e2.useSyncExternalStore)(r, n, t)
      );
    }
    function gA() {
      return 0;
    }
    function gW() {
      let e,
        t,
        r,
        n,
        o = (0, e5.c)(2),
        { media: i } = po();
      o[0] !== i
        ? ((r = i.length),
          (n = () => {
            if (!t) {
              t = [];
              for (let n = r; n > -1; n -= 1) {
                var e;
                let r =
                  0 === (e = n)
                    ? `screen and (max-width: ${i[e] - 1}px)`
                    : e === i.length
                      ? `screen and (min-width: ${i[e - 1]}px)`
                      : `screen and (min-width: ${i[e - 1]}px) and (max-width: ${i[e] - 1}px)`;
                t.push({ index: n, mq: window.matchMedia(r) });
              }
            }
            return t;
          }),
          (e = {
            getSnapshot: () => {
              for (let { index: e, mq: t } of n()) if (t.matches) return e;
              return 0;
            },
            subscribe: (e) => {
              let t = [];
              for (let { mq: r } of n()) {
                let n = () => {
                  r.matches && e();
                };
                (r.addEventListener("change", n), t.push(() => r.removeEventListener("change", n)));
              }
              return () => {
                for (let e of t) e();
              };
            },
          }),
          (o[0] = i),
          (o[1] = e))
        : (e = o[1]);
      let s = e;
      return (0, e2.useSyncExternalStore)(s.subscribe, s.getSnapshot, gA);
    }
    function gz(e) {
      return gI("(prefers-color-scheme: dark)", void 0 === e ? gO : e);
    }
    function gO() {
      return !1;
    }
    function g_(e) {
      return gI("(prefers-reduced-motion: reduce)", void 0 === e ? gZ : e);
    }
    function gZ() {
      return !1;
    }
    let gD = r4.div.withConfig({ displayName: "StyledCheckbox", componentId: "sc-1l5mt2l-0" })(function () {
        return r6`
    position: relative;
    display: inline-block;
  `;
      }),
      gN = r4.input.withConfig({ displayName: "Input", componentId: "sc-1l5mt2l-1" })(function (e) {
        let { color: t, input: r, radius: n } = Y(e.theme),
          { focusRing: o } = r.checkbox;
        return r6`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${fK(r.checkbox.size)};
      width: ${fK(r.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${pL({ color: t.input.default.enabled.border, width: r.border.width })};
      border-radius: ${fK(n[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${pL({ color: t.input.default.enabled.fg, width: r.border.width })};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${pS({ focusRing: o })};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${pS({ focusRing: { width: 1, offset: 1 } })};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${pL({ width: r.border.width, color: t.input.invalid.enabled.muted.bg })};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${pS({ border: { width: r.border.width, color: t.input.invalid.readOnly.muted.bg }, focusRing: { width: 1, offset: 1 } })};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${pL({ width: r.border.width, color: t.input.default.disabled.border })};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${pL({ width: r.border.width, color: t.input.default.readOnly.border })};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `;
      }),
      gF = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m = (0, e5.c)(25);
        m[0] !== e
          ? (({
              checked: r,
              className: n,
              disabled: i,
              indeterminate: s,
              customValidity: o,
              readOnly: a,
              style: d,
              ...l
            } = e),
            (m[0] = e),
            (m[1] = r),
            (m[2] = n),
            (m[3] = o),
            (m[4] = i),
            (m[5] = s),
            (m[6] = a),
            (m[7] = l),
            (m[8] = d))
          : ((r = m[1]), (n = m[2]), (o = m[3]), (i = m[4]), (s = m[5]), (a = m[6]), (l = m[7]), (d = m[8]));
        let w = (0, e2.useRef)(null);
        (m[9] === Symbol.for("react.memo_cache_sentinel") ? ((c = () => w.current), (m[9] = c)) : (c = m[9]),
          (0, e2.useImperativeHandle)(t, c),
          m[10] !== s
            ? ((u = () => {
                w.current && (w.current.indeterminate = s || !1);
              }),
              (h = [s]),
              (m[10] = s),
              (m[11] = u),
              (m[12] = h))
            : ((u = m[11]), (h = m[12])),
          (0, e2.useEffect)(u, h),
          g$(w, o));
        let v = !i && a ? "" : void 0,
          b = o ? "" : void 0,
          y = i || a;
        return (
          m[13] !== r || m[14] !== a || m[15] !== l || m[16] !== v || m[17] !== b || m[18] !== y
            ? ((f = (0, e0.jsx)(gN, {
                "data-read-only": v,
                "data-error": b,
                ...l,
                checked: r,
                disabled: y,
                type: "checkbox",
                readOnly: a,
                ref: w,
              })),
              (m[13] = r),
              (m[14] = a),
              (m[15] = l),
              (m[16] = v),
              (m[17] = b),
              (m[18] = y),
              (m[19] = f))
            : (f = m[19]),
          m[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, e0.jsxs)("span", { children: [(0, e0.jsx)(nA, {}), (0, e0.jsx)(iD, {})] })), (m[20] = p))
            : (p = m[20]),
          m[21] !== n || m[22] !== d || m[23] !== f
            ? ((g = (0, e0.jsxs)(gD, { className: n, "data-ui": "Checkbox", style: d, children: [f, p] })),
              (m[21] = n),
              (m[22] = d),
              (m[23] = f),
              (m[24] = g))
            : (g = m[24]),
          g
        );
      });
    function gU({ theme: e }) {
      let {
        color: { syntax: t },
      } = Y(e);
      return {
        "&.atrule": { color: t.atrule },
        "&.attr-name": { color: t.attrName },
        "&.attr-value": { color: t.attrValue },
        "&.attribute": { color: t.attribute },
        "&.boolean": { color: t.boolean },
        "&.builtin": { color: t.builtin },
        "&.cdata": { color: t.cdata },
        "&.char": { color: t.char },
        "&.class": { color: t.class },
        "&.class-name": { color: t.className },
        "&.comment": { color: t.comment },
        "&.constant": { color: t.constant },
        "&.deleted": { color: t.deleted },
        "&.doctype": { color: t.doctype },
        "&.entity": { color: t.entity },
        "&.function": { color: t.function },
        "&.hexcode": { color: t.hexcode },
        "&.id": { color: t.id },
        "&.important": { color: t.important },
        "&.inserted": { color: t.inserted },
        "&.keyword": { color: t.keyword },
        "&.number": { color: t.number },
        "&.operator": { color: t.operator },
        "&.prolog": { color: t.prolog },
        "&.property": { color: t.property },
        "&.pseudo-class": { color: t.pseudoClass },
        "&.pseudo-element": { color: t.pseudoElement },
        "&.punctuation": { color: t.punctuation },
        "&.regex": { color: t.regex },
        "&.selector": { color: t.selector },
        "&.string": { color: t.string },
        "&.symbol": { color: t.symbol },
        "&.tag": { color: t.tag },
        "&.unit": { color: t.unit },
        "&.url": { color: t.url },
        "&.variable": { color: t.variable },
      };
    }
    gF.displayName = "ForwardRef(Checkbox)";
    let gG = (0, e2.lazy)(() => e.A(195411)),
      gY = r4.pre.withConfig({ displayName: "StyledCode", componentId: "sc-4dymyn-0" })(function () {
        return r6`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${gU}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `;
      }, f5),
      gX = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h = (0, e5.c)(22);
        h[0] !== e
          ? (({ children: r, language: n, size: i, weight: s, ...o } = e),
            (h[0] = e),
            (h[1] = r),
            (h[2] = n),
            (h[3] = o),
            (h[4] = i),
            (h[5] = s))
          : ((r = h[1]), (n = h[2]), (o = h[3]), (i = h[4]), (s = h[5]));
        let f = void 0 === i ? 2 : i;
        return (
          h[6] !== f ? ((a = fQ(f)), (h[6] = f), (h[7] = a)) : (a = h[7]),
          h[8] !== r ? ((l = (0, e0.jsx)("code", { children: r })), (h[8] = r), (h[9] = l)) : (l = h[9]),
          h[10] !== r || h[11] !== n
            ? ((d = (0, e0.jsx)(gG, { language: n, value: r })), (h[10] = r), (h[11] = n), (h[12] = d))
            : (d = h[12]),
          h[13] !== l || h[14] !== d
            ? ((c = (0, e0.jsx)(e2.Suspense, { fallback: l, children: d })), (h[13] = l), (h[14] = d), (h[15] = c))
            : (c = h[15]),
          h[16] !== t || h[17] !== o || h[18] !== a || h[19] !== c || h[20] !== s
            ? ((u = (0, e0.jsx)(gY, { "data-ui": "Code", ...o, $size: a, $weight: s, ref: t, children: c })),
              (h[16] = t),
              (h[17] = o),
              (h[18] = a),
              (h[19] = c),
              (h[20] = s),
              (h[21] = u))
            : (u = h[21]),
          u
        );
      });
    gX.displayName = "ForwardRef(Code)";
    let gq = { width: "100%", margin: "0 auto" },
      gK = r4(gh).withConfig({ displayName: "StyledContainer", componentId: "sc-wyroop-0" })(
        function () {
          return gq;
        },
        function (e) {
          let { container: t, media: r } = Y(e.theme);
          return fJ(r, e.$width, (e) => ({ maxWidth: "auto" === e ? "none" : fK(t[e]) }));
        },
      ),
      gJ = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a = (0, e5.c)(11);
        a[0] !== e
          ? (({ as: r, width: o, ...n } = e), (a[0] = e), (a[1] = r), (a[2] = n), (a[3] = o))
          : ((r = a[1]), (n = a[2]), (o = a[3]));
        let l = void 0 === o ? 2 : o;
        return (
          a[4] !== l ? ((i = fQ(l)), (a[4] = l), (a[5] = i)) : (i = a[5]),
          a[6] !== r || a[7] !== t || a[8] !== n || a[9] !== i
            ? ((s = (0, e0.jsx)(gK, { "data-ui": "Container", ...n, $width: i, forwardedAs: r, ref: t })),
              (a[6] = r),
              (a[7] = t),
              (a[8] = n),
              (a[9] = i),
              (a[10] = s))
            : (s = a[10]),
          s
        );
      });
    gJ.displayName = "ForwardRef(Container)";
    let gQ = r4(gh).withConfig({ displayName: "StyledGrid", componentId: "sc-v8t8oz-0" })(function () {
        return [pI, pz, pO, p_, pZ, pD, pN, pF, pU];
      }),
      g1 = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C = (0, e5.c)(42);
        C[0] !== e
          ? (({
              as: r,
              autoRows: i,
              autoCols: n,
              autoFlow: o,
              columns: a,
              gap: l,
              gapX: d,
              gapY: c,
              rows: h,
              children: s,
              ...u
            } = e),
            (C[0] = e),
            (C[1] = r),
            (C[2] = n),
            (C[3] = o),
            (C[4] = i),
            (C[5] = s),
            (C[6] = a),
            (C[7] = l),
            (C[8] = d),
            (C[9] = c),
            (C[10] = u),
            (C[11] = h))
          : ((r = C[1]),
            (n = C[2]),
            (o = C[3]),
            (i = C[4]),
            (s = C[5]),
            (a = C[6]),
            (l = C[7]),
            (d = C[8]),
            (c = C[9]),
            (u = C[10]),
            (h = C[11]));
        let k = "string" == typeof r ? r : void 0;
        return (
          C[12] !== i ? ((f = fQ(i)), (C[12] = i), (C[13] = f)) : (f = C[13]),
          C[14] !== n ? ((p = fQ(n)), (C[14] = n), (C[15] = p)) : (p = C[15]),
          C[16] !== o ? ((g = fQ(o)), (C[16] = o), (C[17] = g)) : (g = C[17]),
          C[18] !== a ? ((m = fQ(a)), (C[18] = a), (C[19] = m)) : (m = C[19]),
          C[20] !== l ? ((w = fQ(l)), (C[20] = l), (C[21] = w)) : (w = C[21]),
          C[22] !== d ? ((v = fQ(d)), (C[22] = d), (C[23] = v)) : (v = C[23]),
          C[24] !== c ? ((b = fQ(c)), (C[24] = c), (C[25] = b)) : (b = C[25]),
          C[26] !== h ? ((y = fQ(h)), (C[26] = h), (C[27] = y)) : (y = C[27]),
          C[28] !== r ||
          C[29] !== s ||
          C[30] !== t ||
          C[31] !== u ||
          C[32] !== k ||
          C[33] !== f ||
          C[34] !== p ||
          C[35] !== g ||
          C[36] !== m ||
          C[37] !== w ||
          C[38] !== v ||
          C[39] !== b ||
          C[40] !== y
            ? ((x = (0, e0.jsx)(gQ, {
                "data-as": k,
                "data-ui": "Grid",
                ...u,
                $autoRows: f,
                $autoCols: p,
                $autoFlow: g,
                $columns: m,
                $gap: w,
                $gapX: v,
                $gapY: b,
                $rows: y,
                forwardedAs: r,
                ref: t,
                children: s,
              })),
              (C[28] = r),
              (C[29] = s),
              (C[30] = t),
              (C[31] = u),
              (C[32] = k),
              (C[33] = f),
              (C[34] = p),
              (C[35] = g),
              (C[36] = m),
              (C[37] = w),
              (C[38] = v),
              (C[39] = b),
              (C[40] = y),
              (C[41] = x))
            : (x = C[41]),
          x
        );
      });
    g1.displayName = "ForwardRef(Grid)";
    let g0 = r4.div.withConfig({ displayName: "StyledHeading", componentId: "sc-137lwim-0" })(
        function (e) {
          let { $accent: t, $muted: r } = e,
            { font: n } = Y(e.theme);
          return r6`
    ${
      t &&
      r6`
      color: var(--card-accent-fg-color);
    `
    }

    ${
      r &&
      r6`
      color: var(--card-muted-fg-color);
    `
    }

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${n.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `;
        },
        f4,
        f2,
      ),
      g5 = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p = (0, e5.c)(26);
        p[0] !== e
          ? (({ accent: i, align: r, children: n, muted: s, size: a, textOverflow: l, weight: d, ...o } = e),
            (p[0] = e),
            (p[1] = r),
            (p[2] = n),
            (p[3] = o),
            (p[4] = i),
            (p[5] = s),
            (p[6] = a),
            (p[7] = l),
            (p[8] = d))
          : ((r = p[1]), (n = p[2]), (o = p[3]), (i = p[4]), (s = p[5]), (a = p[6]), (l = p[7]), (d = p[8]));
        let g = void 0 !== i && i,
          m = void 0 !== s && s,
          w = void 0 === a ? 2 : a,
          v = n;
        if ("ellipsis" === l) {
          let e;
          (p[9] !== v ? ((e = (0, e0.jsx)(p2, { children: v })), (p[9] = v), (p[10] = e)) : (e = p[10]), (v = e));
        }
        return (
          p[11] !== r ? ((c = fQ(r)), (p[11] = r), (p[12] = c)) : (c = p[12]),
          p[13] !== w ? ((u = fQ(w)), (p[13] = w), (p[14] = u)) : (u = p[14]),
          p[15] !== v ? ((h = (0, e0.jsx)("span", { children: v })), (p[15] = v), (p[16] = h)) : (h = p[16]),
          p[17] !== g ||
          p[18] !== m ||
          p[19] !== t ||
          p[20] !== o ||
          p[21] !== c ||
          p[22] !== u ||
          p[23] !== h ||
          p[24] !== d
            ? ((f = (0, e0.jsx)(g0, {
                "data-ui": "Heading",
                ...o,
                $accent: g,
                $align: c,
                $muted: m,
                $size: u,
                $weight: d,
                ref: t,
                children: h,
              })),
              (p[17] = g),
              (p[18] = m),
              (p[19] = t),
              (p[20] = o),
              (p[21] = c),
              (p[22] = u),
              (p[23] = h),
              (p[24] = d),
              (p[25] = f))
            : (f = p[25]),
          f
        );
      });
    g5.displayName = "ForwardRef(Heading)";
    let g2 = r4(gh).withConfig({ displayName: "StyledInline", componentId: "sc-1pkiy6j-0" })(
        function () {
          return {
            lineHeight: "0",
            "&&:not([hidden])": { display: "block" },
            "& > div": { display: "inline-block", verticalAlign: "middle" },
          };
        },
        function (e) {
          let { media: t, space: r } = Y(e.theme);
          return fJ(t, e.$space, (e) => {
            let t = fK(0.5 === e ? r[1] / 2 : r[e]);
            return { margin: `-${t} 0 0 -${t}`, "& > div": { padding: `${t} 0 0 ${t}` } };
          });
        },
      ),
      g6 = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d = (0, e5.c)(15);
        (d[0] !== e
          ? (({ as: r, children: n, space: i, ...o } = e), (d[0] = e), (d[1] = r), (d[2] = n), (d[3] = o), (d[4] = i))
          : ((r = d[1]), (n = d[2]), (o = d[3]), (i = d[4])),
          d[5] !== n ? ((s = e2.Children.map(n, g4)), (d[5] = n), (d[6] = s)) : (s = d[6]));
        let c = s;
        return (
          d[7] !== i ? ((a = fQ(i)), (d[7] = i), (d[8] = a)) : (a = d[8]),
          d[9] !== r || d[10] !== c || d[11] !== o || d[12] !== a || d[13] !== t
            ? ((l = (0, e0.jsx)(g2, { "data-ui": "Inline", ...o, $space: a, forwardedAs: r, ref: t, children: c })),
              (d[9] = r),
              (d[10] = c),
              (d[11] = o),
              (d[12] = a),
              (d[13] = t),
              (d[14] = l))
            : (l = d[14]),
          l
        );
      });
    function g4(e) {
      return e && (0, e0.jsx)("div", { children: e });
    }
    g6.displayName = "ForwardRef(Inline)";
    let g8 = r4.kbd.withConfig({ displayName: "StyledKBD", componentId: "sc-1w7yd8w-0" })(p0, function () {
        return r6`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `;
      }),
      g9 = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u = (0, e5.c)(19);
        u[0] !== e
          ? (({ children: r, fontSize: o, padding: i, radius: s, ...n } = e),
            (u[0] = e),
            (u[1] = r),
            (u[2] = n),
            (u[3] = o),
            (u[4] = i),
            (u[5] = s))
          : ((r = u[1]), (n = u[2]), (o = u[3]), (i = u[4]), (s = u[5]));
        let h = void 0 === o ? 0 : o,
          f = void 0 === i ? 1 : i,
          p = void 0 === s ? 2 : s;
        return (
          u[6] !== p ? ((a = fQ(p)), (u[6] = p), (u[7] = a)) : (a = u[7]),
          u[8] !== r || u[9] !== h
            ? ((l = (0, e0.jsx)(gp, { as: "span", size: h, weight: "semibold", children: r })),
              (u[8] = r),
              (u[9] = h),
              (u[10] = l))
            : (l = u[10]),
          u[11] !== f || u[12] !== l
            ? ((d = (0, e0.jsx)(gh, { as: "span", padding: f, children: l })), (u[11] = f), (u[12] = l), (u[13] = d))
            : (d = u[13]),
          u[14] !== t || u[15] !== n || u[16] !== a || u[17] !== d
            ? ((c = (0, e0.jsx)(g8, { "data-ui": "KBD", ...n, $radius: a, ref: t, children: d })),
              (u[14] = t),
              (u[15] = n),
              (u[16] = a),
              (u[17] = d),
              (u[18] = c))
            : (c = u[18]),
          c
        );
      });
    g9.displayName = "ForwardRef(KBD)";
    let g3 = {
      name: "@sanity/ui/origin",
      fn({ middlewareData: e, placement: t, rects: r }) {
        let [n] = t.split("-"),
          o = r.floating.width,
          i = r.floating.height,
          s = e.shift?.x || 0,
          a = e.shift?.y || 0;
        if (o <= 0 || i <= 0) return {};
        let { originX: l, originY: d } = ["bottom", "top"].includes(n)
          ? { originX: g7(0.5 - s / o, 0, 1), originY: +("bottom" !== n) }
          : { originX: +("left" === n), originY: g7(0.5 - a / i, 0, 1) };
        return { data: { originX: l, originY: d } };
      },
    };
    function g7(e, t, r) {
      return Math.min(Math.max(e, t), r);
    }
    function me(e, t, r) {
      let n = t.x - e.x,
        o = t.y - e.y;
      return mt(e, t, Math.min(1, r / Math.sqrt(n * n + o * o)));
    }
    function mt(e, t, r) {
      return { x: e.x + (t.x - e.x) * r, y: e.y + (t.y - e.y) * r };
    }
    let mr = r4.div.withConfig({ displayName: "StyledArrow", componentId: "sc-12vzy6c-0" })(
        ({ $w: e }) => r6`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e / 2}px ${e / 2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `,
      ),
      mn = r4.path.withConfig({
        displayName: "StrokePath",
        componentId: "sc-12vzy6c-1",
      })`stroke:var(--card-shadow-outline-color);`,
      mo = r4.path.withConfig({ displayName: "ShapePath", componentId: "sc-12vzy6c-2" })`fill:var(--card-bg-color);`,
      mi = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h = (0, e5.c)(29);
        h[0] !== e
          ? (({ width: i, height: r, radius: o, ...n } = e), (h[0] = e), (h[1] = r), (h[2] = n), (h[3] = o), (h[4] = i))
          : ((r = h[1]), (n = h[2]), (o = h[3]), (i = h[4]));
        let f = void 0 === o ? 0 : o,
          { card: p } = po(),
          g = p.shadow.outline,
          m = i / 2;
        h[5] !== m || h[6] !== r || h[7] !== f || h[8] !== i
          ? ((s = (function (e) {
              let t = e.length,
                r = [];
              for (let n = 0; n < t; n += 1) {
                let t = e[n],
                  o = e[n - 1],
                  i = e[n + 1];
                if (o && t.radius) {
                  let e = me(t, o, t.radius),
                    n = me(t, i, t.radius),
                    s = mt(e, t, 0.5),
                    a = mt(t, n, 0.5);
                  (r.push({ type: "point", ...e }),
                    r.push({ type: "curve", curveEnd: n, startControl: s, endControl: a }));
                } else r.push({ type: "point", ...t });
              }
              return r;
            })([
              { x: 0, y: 0 },
              { x: f, y: 0, radius: f },
              { x: m, y: r - 1, radius: f },
              { x: i - f, y: 0, radius: f },
              { x: i, y: 0 },
            ])
              .map((e, t) =>
                "point" === e.type
                  ? `${0 === t ? "M" : "L"} ${e.x} ${e.y}`
                  : "curve" === e.type
                    ? `C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`
                    : "",
              )
              .join(" ")),
            (h[5] = m),
            (h[6] = r),
            (h[7] = f),
            (h[8] = i),
            (h[9] = s))
          : (s = h[9]);
        let w = s,
          v = `${w}`,
          b = `${w} M ${i} -1 M 0 -1 Z`,
          y = `0 0 ${i} ${i}`;
        h[10] !== g || h[11] !== i
          ? ((a = (0, e0.jsx)("mask", {
              id: "stroke-mask",
              children: (0, e0.jsx)("rect", { x: 0, y: g, width: i, height: i, fill: "white" }),
            })),
            (h[10] = g),
            (h[11] = i),
            (h[12] = a))
          : (a = h[12]);
        let x = 2 * g;
        return (
          h[13] !== v || h[14] !== x
            ? ((l = (0, e0.jsx)(mn, { d: v, mask: "url(#stroke-mask)", strokeWidth: x })),
              (h[13] = v),
              (h[14] = x),
              (h[15] = l))
            : (l = h[15]),
          h[16] !== b ? ((d = (0, e0.jsx)(mo, { d: b })), (h[16] = b), (h[17] = d)) : (d = h[17]),
          h[18] !== y || h[19] !== a || h[20] !== l || h[21] !== d || h[22] !== i
            ? ((c = (0, e0.jsxs)("svg", { width: i, height: i, viewBox: y, children: [a, l, d] })),
              (h[18] = y),
              (h[19] = a),
              (h[20] = l),
              (h[21] = d),
              (h[22] = i),
              (h[23] = c))
            : (c = h[23]),
          h[24] !== t || h[25] !== n || h[26] !== c || h[27] !== i
            ? ((u = (0, e0.jsx)(mr, { ...n, $w: i, ref: t, children: c })),
              (h[24] = t),
              (h[25] = n),
              (h[26] = c),
              (h[27] = i),
              (h[28] = u))
            : (u = h[28]),
          u
        );
      });
    mi.displayName = "ForwardRef(Arrow)";
    let ms = f3("@sanity/ui/context/boundaryElement", null);
    function ma(e) {
      let t,
        r,
        n = (0, e5.c)(5),
        { children: o, element: i } = e;
      n[0] !== i ? ((t = { version: 0, element: i }), (n[0] = i), (n[1] = t)) : (t = n[1]);
      let s = t;
      return (
        n[2] !== o || n[3] !== s
          ? ((r = (0, e0.jsx)(ms.Provider, { value: s, children: o })), (n[2] = o), (n[3] = s), (n[4] = r))
          : (r = n[4]),
        r
      );
    }
    function ml(e) {
      return !!(e && "object" == typeof e && !Array.isArray(e));
    }
    ma.displayName = "BoundaryElementProvider";
    let md = { version: 0, element: null };
    function mc() {
      let e = (0, e2.useContext)(ms);
      if (e && (!ml(e) || 0 !== e.version)) throw Error("useBoundaryElement(): the context value is not compatible");
      return e || md;
    }
    function mu({ children: e, condition: t, wrapper: r }) {
      return t ? r(e) : e;
    }
    mu.displayName = "ConditionalWrapper";
    let mh = (0, e2.forwardRef)(function (e, t) {
      let r,
        n,
        o,
        i,
        s,
        a,
        l,
        d,
        c = (0, e5.c)(18),
        u = po();
      c[0] !== e
        ? (({ children: n, media: r, ...o } = e), (c[0] = e), (c[1] = r), (c[2] = n), (c[3] = o))
        : ((r = c[1]), (n = c[2]), (o = c[3]));
      let h = r ?? u.media,
        [f, p] = (0, e2.useState)(null),
        g = gB(f)?.border.width ?? window.innerWidth;
      if (c[4] !== h || c[5] !== g) {
        let e = (function (e, t) {
          let r = [];
          for (let n = 0; n < e.length; n += 1) e[n] > t && r.push(n);
          return r;
        })(h, g);
        ((i = e.length ? e.join(" ") : void 0), (c[4] = h), (c[5] = g), (c[6] = i));
      } else i = c[6];
      let m = i;
      if (c[7] !== h || c[8] !== g) {
        let e = (function (e, t) {
          let r = [];
          for (let n = 0; n < e.length; n += 1) e[n] <= t && r.push(n);
          return r;
        })(h, g);
        ((s = e.length ? e.join(" ") : void 0), (c[7] = h), (c[8] = g), (c[9] = s));
      } else s = c[9];
      let w = s;
      return (
        c[10] !== f ? ((a = () => f), (l = [f]), (c[10] = f), (c[11] = a), (c[12] = l)) : ((a = c[11]), (l = c[12])),
        (0, e2.useImperativeHandle)(t, a, l),
        c[13] !== n || c[14] !== m || c[15] !== w || c[16] !== o
          ? ((d = (0, e0.jsx)("div", {
              "data-ui": "ElementQuery",
              ...o,
              "data-eq-max": m,
              "data-eq-min": w,
              ref: p,
              children: n,
            })),
            (c[13] = n),
            (c[14] = m),
            (c[15] = w),
            (c[16] = o),
            (c[17] = d))
          : (d = c[17]),
        d
      );
    });
    function mf(e) {
      if (!ml(e) || 0 !== e.version) throw Error("the context value is not compatible");
      if (!e) throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");
      if (0 === e.version) return e;
      throw Error("could not get layer context");
    }
    mh.displayName = "ForwardRef(ElementQuery)";
    let mp = f3("@sanity/ui/context/layer", null);
    function mg(e) {
      let t,
        r,
        n,
        o,
        i,
        s,
        a,
        l,
        d = (0, e5.c)(21),
        { children: c, zOffset: u } = e,
        h = void 0 === u ? 0 : u,
        f = (0, e2.useContext)(mp);
      d[0] !== f ? ((t = f && mf(f)), (d[0] = f), (d[1] = t)) : (t = d[1]);
      let p = t,
        g = p?.registerChild,
        m = (p?.level ?? 0) + 1;
      d[2] !== h ? ((r = fQ(h)), (d[2] = h), (d[3] = r)) : (r = d[3]);
      let w = r,
        v = w.length - 1,
        b = Math.min(gW(), v),
        y = p ? p.zIndex + w[b] : w[b];
      d[4] === Symbol.for("react.memo_cache_sentinel") ? ((n = {}), (d[4] = n)) : (n = d[4]);
      let [, x] = (0, e2.useState)(n),
        [C, k] = (0, e2.useState)(0),
        M = 0 === C;
      d[5] !== g || d[6] !== x
        ? ((o = (e) => {
            let t = g?.(e);
            return (
              void 0 !== e
                ? x((t) => {
                    let r = t[e] ?? 0,
                      n = { ...t, [e]: r + 1 };
                    return (k(Object.keys(n).length), n);
                  })
                : k(mw),
              () => {
                (void 0 !== e
                  ? x((t) => {
                      let r = { ...t };
                      return (1 === r[e] ? (delete r[e], k(Object.keys(r).length)) : (r[e] = r[e] - 1), r);
                    })
                  : k(mm),
                  t?.());
              }
            );
          }),
          (d[5] = g),
          (d[6] = x),
          (d[7] = o))
        : (o = d[7]);
      let j = o;
      (d[8] !== m || d[9] !== g
        ? ((i = () => g?.(m)), (s = [m, g]), (d[8] = m), (d[9] = g), (d[10] = i), (d[11] = s))
        : ((i = d[10]), (s = d[11])),
        (0, e2.useEffect)(i, s),
        d[12] !== M || d[13] !== m || d[14] !== j || d[15] !== C || d[16] !== y
          ? ((a = { version: 0, isTopLayer: M, level: m, registerChild: j, size: C, zIndex: y }),
            (d[12] = M),
            (d[13] = m),
            (d[14] = j),
            (d[15] = C),
            (d[16] = y),
            (d[17] = a))
          : (a = d[17]));
      let L = a;
      return (
        d[18] !== c || d[19] !== L
          ? ((l = (0, e0.jsx)(mp.Provider, { value: L, children: c })), (d[18] = c), (d[19] = L), (d[20] = l))
          : (l = d[20]),
        l
      );
    }
    function mm(e) {
      return e - 1;
    }
    function mw(e) {
      return e + 1;
    }
    function mv() {
      let e = (0, e5.c)(2),
        t = (0, e2.useContext)(mp);
      if (!t) throw Error("useLayer(): missing context value");
      try {
        let r;
        return (e[0] !== t ? ((r = mf(t)), (e[0] = t), (e[1] = r)) : (r = e[1]), r);
      } catch (e) {
        throw e instanceof Error ? Error(`useLayer(): ${e.message}`) : Error(`useLayer(): ${e}`);
      }
    }
    mg.displayName = "LayerProvider";
    let mb = r4.div.withConfig({ displayName: "StyledLayer", componentId: "sc-16kojrv-0" })({ position: "relative" }),
      my = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f = (0, e5.c)(22);
        f[0] !== e
          ? (({ children: r, onActivate: n, onFocus: o, style: s, ...i } = e),
            (f[0] = e),
            (f[1] = r),
            (f[2] = n),
            (f[3] = o),
            (f[4] = i),
            (f[5] = s))
          : ((r = f[1]), (n = f[2]), (o = f[3]), (i = f[4]), (s = f[5]));
        let p = void 0 === s ? fA : s,
          { zIndex: g, isTopLayer: m } = mv(),
          w = (0, e2.useRef)(null),
          v = (0, e2.useRef)(null),
          b = (0, e2.useRef)(m);
        (f[6] === Symbol.for("react.memo_cache_sentinel") ? ((a = () => v.current), (f[6] = a)) : (a = f[6]),
          (0, e2.useImperativeHandle)(t, a),
          f[7] !== m || f[8] !== n
            ? ((l = () => {
                (b.current !== m && m && n?.({ activeElement: w.current }), (b.current = m));
              }),
              (d = [m, n]),
              (f[7] = m),
              (f[8] = n),
              (f[9] = l),
              (f[10] = d))
            : ((l = f[9]), (d = f[10])),
          (0, e2.useEffect)(l, d),
          f[11] !== m || f[12] !== o
            ? ((c = (e) => {
                o?.(e);
                let t = v.current,
                  r = document.activeElement;
                !m || !t || !r || (fZ(r) && fY(t, r) && (w.current = r));
              }),
              (f[11] = m),
              (f[12] = o),
              (f[13] = c))
            : (c = f[13]));
        let y = c;
        return (
          f[14] !== p || f[15] !== g ? ((u = { ...p, zIndex: g }), (f[14] = p), (f[15] = g), (f[16] = u)) : (u = f[16]),
          f[17] !== r || f[18] !== y || f[19] !== i || f[20] !== u
            ? ((h = (0, e0.jsx)(mb, { ...i, "data-ui": "Layer", onFocus: y, ref: v, style: u, children: r })),
              (f[17] = r),
              (f[18] = y),
              (f[19] = i),
              (f[20] = u),
              (f[21] = h))
            : (h = f[21]),
          h
        );
      }),
      mx = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a = (0, e5.c)(11);
        a[0] !== e
          ? (({ children: r, zOffset: o, ...n } = e), (a[0] = e), (a[1] = r), (a[2] = n), (a[3] = o))
          : ((r = a[1]), (n = a[2]), (o = a[3]));
        let l = void 0 === o ? 1 : o;
        return (
          a[4] !== r || a[5] !== t || a[6] !== n
            ? ((i = (0, e0.jsx)(my, { ...n, ref: t, children: r })), (a[4] = r), (a[5] = t), (a[6] = n), (a[7] = i))
            : (i = a[7]),
          a[8] !== i || a[9] !== l
            ? ((s = (0, e0.jsx)(mg, { zOffset: l, children: i })), (a[8] = i), (a[9] = l), (a[10] = s))
            : (s = a[10]),
          s
        );
      });
    mx.displayName = "ForwardRef(Layer)";
    let mC = "@sanity/ui/context/portal",
      mk = Symbol.for(`${mC}/element`);
    f9[mk] = null;
    let mM = f3(mC, {
      version: 0,
      boundaryElement: null,
      get element() {
        return typeof document > "u"
          ? null
          : (f9[mk] ||
              ((f9[mk] = document.createElement("div")),
              f9[mk].setAttribute("data-portal", ""),
              document.body.appendChild(f9[mk])),
            f9[mk]);
      },
    });
    function mj() {
      let e = (0, e2.useContext)(mM);
      if (!e) throw Error("usePortal(): missing context value");
      if (!ml(e) || 0 !== e.version) throw Error("usePortal(): the context value is not compatible");
      return e;
    }
    function mL(e) {
      let t,
        r = (0, e5.c)(3),
        { children: n, __unstable_name: o } = e,
        i = mj(),
        s = (o ? i.elements && i.elements[o] : i.element) || i.elements?.default;
      return s
        ? (r[0] !== n || r[1] !== s
            ? ((t = (0, fH.createPortal)(n, s)), (r[0] = n), (r[1] = s), (r[2] = t))
            : (t = r[2]),
          t)
        : null;
    }
    function mS(e) {
      let t,
        r,
        n = (0, e5.c)(7),
        { boundaryElement: o, children: i, element: s, __unstable_elements: a } = e,
        l = (0, e2.useSyncExternalStore)(mH, mR, mV),
        d = o || null,
        c = s || l;
      n[0] !== a || n[1] !== d || n[2] !== c
        ? ((t = { version: 0, boundaryElement: d, element: c, elements: a }),
          (n[0] = a),
          (n[1] = d),
          (n[2] = c),
          (n[3] = t))
        : (t = n[3]);
      let u = t;
      return (
        n[4] !== i || n[5] !== u
          ? ((r = (0, e0.jsx)(mM.Provider, { value: u, children: i })), (n[4] = i), (n[5] = u), (n[6] = r))
          : (r = n[6]),
        r
      );
    }
    function mV() {
      return null;
    }
    function mR() {
      return document.body;
    }
    ((mL.displayName = "Portal"), (mS.displayName = "PortalProvider"));
    let mH = () => () => {},
      m$ = r4.div.withConfig({
        displayName: "StyledSrOnly",
        componentId: "sc-mubr0c-0",
      })`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`,
      mT = (0, e2.forwardRef)(function (e, t) {
        let r,
          n = (0, e5.c)(4),
          { as: o, children: i } = e;
        return (
          n[0] !== o || n[1] !== i || n[2] !== t
            ? ((r = (0, e0.jsx)(m$, { "aria-hidden": !0, as: o, "data-ui": "SrOnly", ref: t, children: i })),
              (n[0] = o),
              (n[1] = i),
              (n[2] = t),
              (n[3] = r))
            : (r = n[3]),
          r
        );
      });
    mT.displayName = "ForwardRef(SrOnly)";
    let mE = r4.div.withConfig({ displayName: "StyledVirtualList", componentId: "sc-dlqsj4-0" })`position:relative;`,
      mB = r4.div.withConfig({
        displayName: "ItemWrapper",
        componentId: "sc-dlqsj4-1",
      })`position:absolute;left:0;right:0;`,
      mP = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x = (0, e5.c)(44);
        x[0] !== e
          ? (({ as: s, gap: a, getItemKey: r, items: l, onChange: n, renderItem: o, ...i } = e),
            (x[0] = e),
            (x[1] = r),
            (x[2] = n),
            (x[3] = o),
            (x[4] = i),
            (x[5] = s),
            (x[6] = a),
            (x[7] = l))
          : ((r = x[1]), (n = x[2]), (o = x[3]), (i = x[4]), (s = x[5]), (a = x[6]), (l = x[7]));
        let C = void 0 === s ? "div" : s,
          k = void 0 === a ? 0 : a;
        x[8] !== l ? ((d = void 0 === l ? [] : l), (x[8] = l), (x[9] = d)) : (d = x[9]);
        let M = d,
          { space: j } = po(),
          L = (0, e2.useRef)(null),
          S = (0, e2.useRef)(null),
          [V, R] = (0, e2.useState)(0),
          [H, $] = (0, e2.useState)(0),
          [T, E] = (0, e2.useState)(-1);
        (x[10] === Symbol.for("react.memo_cache_sentinel") ? ((c = () => L.current), (x[10] = c)) : (c = x[10]),
          (0, e2.useImperativeHandle)(t, c),
          x[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = () => {
                if (!S.current) return;
                let e = S.current.firstChild;
                e instanceof HTMLElement && E(e.offsetHeight);
              }),
              (x[11] = u))
            : (u = x[11]),
          x[12] !== o ? ((h = [o]), (x[12] = o), (x[13] = h)) : (h = x[13]),
          (0, e2.useEffect)(u, h),
          x[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = () => {
                if (!L.current) return;
                let e = (function (e) {
                  let t = e;
                  for (; t && !fX(t); ) t = t.parentNode;
                  return t;
                })(L.current.parentNode);
                if (e) {
                  if (!(e instanceof HTMLElement)) return;
                  let t = () => {
                    R(e.scrollTop);
                  };
                  e.addEventListener("scroll", t, { passive: !0 });
                  let r = new gT((e) => {
                    $(e[0].contentRect.height);
                  });
                  return (
                    r.observe(e),
                    t(),
                    () => {
                      (e.removeEventListener("scroll", t), r.unobserve(e), r.disconnect());
                    }
                  );
                }
                let t = () => {
                    R(window.scrollY);
                  },
                  r = () => {
                    $(window.innerHeight);
                  };
                return (
                  window.addEventListener("scroll", t, { passive: !0 }),
                  window.addEventListener("resize", r),
                  $(window.innerHeight),
                  t(),
                  () => {
                    (window.removeEventListener("scroll", t), window.removeEventListener("resize", r));
                  }
                );
              }),
              (p = []),
              (x[14] = f),
              (x[15] = p))
            : ((f = x[14]), (p = x[15])),
          (0, e2.useEffect)(f, p));
        let B = M.length,
          P = T ? B * (T + j[k]) - j[k] : 0,
          I = P ? Math.max(Math.floor((V / P) * B) - 2, 0) : 0,
          A = P ? Math.ceil(((V + H) / P) * B) + 1 : 0;
        (x[16] !== I ||
        x[17] !== k ||
        x[18] !== T ||
        x[19] !== n ||
        x[20] !== H ||
        x[21] !== V ||
        x[22] !== j ||
        x[23] !== A
          ? ((m = () => {
              n && n({ fromIndex: I, gap: j[k], itemHeight: T, scrollHeight: H, scrollTop: V, toIndex: A });
            }),
            (g = [I, k, T, n, H, V, j, A]),
            (x[16] = I),
            (x[17] = k),
            (x[18] = T),
            (x[19] = n),
            (x[20] = H),
            (x[21] = V),
            (x[22] = j),
            (x[23] = A),
            (x[24] = g),
            (x[25] = m))
          : ((g = x[24]), (m = x[25])),
          (0, e2.useEffect)(m, g),
          x[26] !== I ||
          x[27] !== k ||
          x[28] !== r ||
          x[29] !== T ||
          x[30] !== M ||
          x[31] !== o ||
          x[32] !== j ||
          x[33] !== A
            ? ((w = {
                fromIndex: I,
                gap: k,
                itemHeight: T,
                space: j,
                toIndex: A,
                getItemKey: r,
                items: M,
                renderItem: o,
              }),
              (x[26] = I),
              (x[27] = k),
              (x[28] = r),
              (x[29] = T),
              (x[30] = M),
              (x[31] = o),
              (x[32] = j),
              (x[33] = A),
              (x[34] = w))
            : (w = x[34]));
        let W = (function (e) {
          let t,
            r = (0, e5.c)(21),
            { fromIndex: n, gap: o, getItemKey: i, itemHeight: s, items: a, renderItem: l, space: d, toIndex: c } = e;
          if (!l || 0 === a.length) return null;
          if (-1 === s) {
            let e, t;
            return (
              r[0] !== a[0] || r[1] !== l ? ((e = l(a[0])), (r[0] = a[0]), (r[1] = l), (r[2] = e)) : (e = r[2]),
              r[3] !== e ? ((t = [(0, e0.jsx)(mB, { children: e }, 0)]), (r[3] = e), (r[4] = t)) : (t = r[4]),
              t
            );
          }
          if (
            r[5] !== n ||
            r[6] !== o ||
            r[7] !== i ||
            r[8] !== s ||
            r[9] !== a ||
            r[10] !== l ||
            r[11] !== d ||
            r[12] !== c
          ) {
            let e;
            (r[14] !== n || r[15] !== o || r[16] !== i || r[17] !== s || r[18] !== l || r[19] !== d
              ? ((e = (e, t) => {
                  let r = n + t,
                    a = l(e),
                    c = i ? i(e, r) : r;
                  return (0, e0.jsx)(mB, { style: { top: r * (s + d[o]) }, children: a }, c);
                }),
                (r[14] = n),
                (r[15] = o),
                (r[16] = i),
                (r[17] = s),
                (r[18] = l),
                (r[19] = d),
                (r[20] = e))
              : (e = r[20]),
              (t = a.slice(n, c).map(e)),
              (r[5] = n),
              (r[6] = o),
              (r[7] = i),
              (r[8] = s),
              (r[9] = a),
              (r[10] = l),
              (r[11] = d),
              (r[12] = c),
              (r[13] = t));
          } else t = r[13];
          return t;
        })(w);
        return (
          x[35] !== P ? ((v = { height: P }), (x[35] = P), (x[36] = v)) : (v = x[36]),
          x[37] !== W || x[38] !== v
            ? ((b = (0, e0.jsx)("div", { ref: S, style: v, children: W })), (x[37] = W), (x[38] = v), (x[39] = b))
            : (b = x[39]),
          x[40] !== C || x[41] !== i || x[42] !== b
            ? ((y = (0, e0.jsx)(mE, { as: C, "data-ui": "VirtualList", ...i, ref: L, children: b })),
              (x[40] = C),
              (x[41] = i),
              (x[42] = b),
              (x[43] = y))
            : (y = x[43]),
          y
        );
      });
    function mI(e) {
      let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        r = t && "isReactWarning" in t && t.isReactWarning;
      return r
        ? e.ref
        : (r = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning" in t && t.isReactWarning)
          ? e.props.ref
          : e.props.ref || e.ref;
    }
    mP.displayName = "ForwardRef(VirtualList)";
    let mA = [0, 0, 0, 0],
      mW = {
        top: ["bottom", "left", "right"],
        "top-start": ["bottom-start", "left-start", "right-start"],
        "top-end": ["bottom-end", "left-end", "right-end"],
        bottom: ["top", "left", "right"],
        "bottom-start": ["top-start", "left-start", "right-start"],
        "bottom-end": ["top-end", "left-end", "right-end"],
        left: ["right", "top", "bottom"],
        "left-start": ["right-start", "top-start", "bottom-start"],
        "left-end": ["right-end", "top-end", "bottom-end"],
        right: ["left", "top", "bottom"],
        "right-start": ["left-start", "top-start", "bottom-start"],
        "right-end": ["left-end", "top-end", "bottom-end"],
      },
      mz = r4(hD.create(gV)).withConfig({
        displayName: "MotionCard",
        componentId: "sc-ihg31s-0",
      })`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`,
      mO = r4(hD.create(gv)).withConfig({
        displayName: "MotionFlex",
        componentId: "sc-ihg31s-1",
      })`will-change:opacity;`,
      m_ = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M,
          j,
          L,
          S,
          V,
          R,
          H,
          $,
          T,
          E = (0, e5.c)(66);
        E[0] !== e
          ? (({
              __unstable_margins: l,
              animate: r,
              arrow: n,
              arrowRef: o,
              arrowX: i,
              arrowY: s,
              children: a,
              padding: h,
              placement: f,
              originX: d,
              originY: c,
              overflow: u,
              radius: p,
              scheme: m,
              shadow: w,
              strategy: v,
              style: b,
              tone: y,
              width: x,
              x: C,
              y: k,
              ...g
            } = e),
            (E[0] = e),
            (E[1] = r),
            (E[2] = n),
            (E[3] = o),
            (E[4] = i),
            (E[5] = s),
            (E[6] = a),
            (E[7] = l),
            (E[8] = d),
            (E[9] = c),
            (E[10] = u),
            (E[11] = h),
            (E[12] = f),
            (E[13] = p),
            (E[14] = g),
            (E[15] = m),
            (E[16] = w),
            (E[17] = v),
            (E[18] = b),
            (E[19] = y),
            (E[20] = x),
            (E[21] = C),
            (E[22] = k))
          : ((r = E[1]),
            (n = E[2]),
            (o = E[3]),
            (i = E[4]),
            (s = E[5]),
            (a = E[6]),
            (l = E[7]),
            (d = E[8]),
            (c = E[9]),
            (u = E[10]),
            (h = E[11]),
            (f = E[12]),
            (p = E[13]),
            (g = E[14]),
            (m = E[15]),
            (w = E[16]),
            (v = E[17]),
            (b = E[18]),
            (y = E[19]),
            (x = E[20]),
            (C = E[21]),
            (k = E[22]));
        let { zIndex: B } = mv(),
          P = l || mA,
          I = (C ?? 0) + P[3],
          A = (k ?? 0) + P[0],
          W = r ? "transform" : void 0;
        E[23] !== d ||
        E[24] !== c ||
        E[25] !== v ||
        E[26] !== b ||
        E[27] !== W ||
        E[28] !== x ||
        E[29] !== I ||
        E[30] !== A ||
        E[31] !== B
          ? ((M = { left: I, originX: d, originY: c, position: v, top: A, width: x, zIndex: B, willChange: W, ...b }),
            (E[23] = d),
            (E[24] = c),
            (E[25] = v),
            (E[26] = b),
            (E[27] = W),
            (E[28] = x),
            (E[29] = I),
            (E[30] = A),
            (E[31] = B),
            (E[32] = M))
          : (M = E[32]);
        let z = M,
          O = null !== i ? i : void 0,
          _ = null !== s ? s : void 0;
        E[33] !== O || E[34] !== _
          ? ((j = { left: O, top: _, right: void 0, bottom: void 0 }), (E[33] = O), (E[34] = _), (E[35] = j))
          : (j = E[35]);
        let Z = j,
          D = g;
        return (
          E[36] !== r ? ((L = r ? ["hidden", "initial"] : void 0), (E[36] = r), (E[37] = L)) : (L = E[37]),
          E[38] !== r ? ((S = r ? ["visible", "scaleIn"] : void 0), (E[38] = r), (E[39] = S)) : (S = E[39]),
          E[40] !== r ? ((V = r ? ["hidden", "scaleOut"] : void 0), (E[40] = r), (E[41] = V)) : (V = E[41]),
          E[42] !== a || E[43] !== h
            ? ((R = (0, e0.jsx)(gv, { direction: "column", flex: 1, padding: h, children: a })),
              (E[42] = a),
              (E[43] = h),
              (E[44] = R))
            : (R = E[44]),
          E[45] !== u || E[46] !== R
            ? ((H = (0, e0.jsx)(mO, {
                "data-ui": "Popover__wrapper",
                direction: "column",
                flex: 1,
                overflow: u,
                variants: fz,
                transition: fO,
                children: R,
              })),
              (E[45] = u),
              (E[46] = R),
              (E[47] = H))
            : (H = E[47]),
          E[48] !== n || E[49] !== o || E[50] !== Z
            ? (($ = n && (0, e0.jsx)(mi, { ref: o, style: Z, width: 19, height: 8, radius: 2 })),
              (E[48] = n),
              (E[49] = o),
              (E[50] = Z),
              (E[51] = $))
            : ($ = E[51]),
          E[52] !== f ||
          E[53] !== p ||
          E[54] !== t ||
          E[55] !== z ||
          E[56] !== m ||
          E[57] !== w ||
          E[58] !== H ||
          E[59] !== $ ||
          E[60] !== D ||
          E[61] !== L ||
          E[62] !== S ||
          E[63] !== V ||
          E[64] !== y
            ? ((T = (0, e0.jsxs)(mz, {
                "data-ui": "Popover",
                ...D,
                "data-placement": f,
                radius: p,
                ref: t,
                scheme: m,
                shadow: w,
                sizing: "border",
                style: z,
                tone: y,
                variants: fW,
                transition: fO,
                initial: L,
                animate: S,
                exit: V,
                children: [H, $],
              })),
              (E[52] = f),
              (E[53] = p),
              (E[54] = t),
              (E[55] = z),
              (E[56] = m),
              (E[57] = w),
              (E[58] = H),
              (E[59] = $),
              (E[60] = D),
              (E[61] = L),
              (E[62] = S),
              (E[63] = V),
              (E[64] = y),
              (E[65] = T))
            : (T = E[65]),
          T
        );
      });
    m_.displayName = "ForwardRef(PopoverCard)";
    let mZ = () => {
        let e,
          t = (0, e5.c)(2),
          { zIndex: r } = mv();
        return (
          t[0] !== r
            ? ((e = (0, e0.jsx)("div", {
                style: { height: "100vh", inset: 0, position: "fixed", width: "100vw", zIndex: r },
              })),
              (t[0] = r),
              (t[1] = e))
            : (e = t[1]),
          e
        );
      },
      mD = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M,
          j,
          L,
          S,
          V,
          R,
          H,
          $,
          T,
          E,
          B,
          P,
          I,
          A,
          W,
          z,
          O,
          _,
          Z,
          D,
          N,
          F,
          U,
          G,
          Y,
          X,
          q,
          K,
          J,
          Q,
          ee,
          et,
          er,
          en,
          eo,
          ei = (0, e5.c)(126),
          { container: es, layer: ea } = po(),
          el = mc();
        if (ei[0] !== e) {
          let {
            __unstable_margins: t,
            animate: $,
            arrow: T,
            boundaryElement: E,
            children: B,
            constrainSize: P,
            content: I,
            disabled: A,
            fallbackPlacements: W,
            matchReferenceWidth: z,
            floatingBoundary: O,
            modal: _,
            onActivate: Z,
            open: D,
            overflow: N,
            padding: F,
            placement: U,
            placementStrategy: G,
            portal: Y,
            preventOverflow: X,
            radius: q,
            referenceBoundary: K,
            referenceElement: J,
            scheme: Q,
            shadow: ee,
            tone: et,
            width: er,
            zOffset: en,
            updateRef: eo,
            ...es
          } = e;
          ((v = t),
            (b = $),
            (C = T),
            (r = E),
            (a = B),
            (k = P),
            (l = I),
            (d = A),
            (n = W),
            (c = z),
            (o = O),
            (u = _),
            (h = D),
            (M = N),
            (f = F),
            (j = U),
            (L = G),
            (p = Y),
            (S = X),
            (V = q),
            (i = K),
            (g = J),
            (w = Q),
            (R = ee),
            (y = et),
            (x = er),
            (s = en),
            (H = eo),
            (m = es),
            (ei[0] = e),
            (ei[1] = r),
            (ei[2] = n),
            (ei[3] = o),
            (ei[4] = i),
            (ei[5] = s),
            (ei[6] = a),
            (ei[7] = l),
            (ei[8] = d),
            (ei[9] = c),
            (ei[10] = u),
            (ei[11] = h),
            (ei[12] = f),
            (ei[13] = p),
            (ei[14] = g),
            (ei[15] = m),
            (ei[16] = w),
            (ei[17] = v),
            (ei[18] = b),
            (ei[19] = y),
            (ei[20] = x),
            (ei[21] = C),
            (ei[22] = k),
            (ei[23] = M),
            (ei[24] = j),
            (ei[25] = L),
            (ei[26] = S),
            (ei[27] = V),
            (ei[28] = R),
            (ei[29] = H));
        } else
          ((r = ei[1]),
            (n = ei[2]),
            (o = ei[3]),
            (i = ei[4]),
            (s = ei[5]),
            (a = ei[6]),
            (l = ei[7]),
            (d = ei[8]),
            (c = ei[9]),
            (u = ei[10]),
            (h = ei[11]),
            (f = ei[12]),
            (p = ei[13]),
            (g = ei[14]),
            (m = ei[15]),
            (w = ei[16]),
            (v = ei[17]),
            (b = ei[18]),
            (y = ei[19]),
            (x = ei[20]),
            (C = ei[21]),
            (k = ei[22]),
            (M = ei[23]),
            (j = ei[24]),
            (L = ei[25]),
            (S = ei[26]),
            (V = ei[27]),
            (R = ei[28]),
            (H = ei[29]));
        let ed = void 0 === v ? mA : v,
          ec = void 0 !== b && b,
          eu = void 0 !== C && C,
          eh = void 0 !== k && k,
          ef = void 0 === M ? "hidden" : M,
          ep = void 0 === j ? "bottom" : j,
          eg = void 0 === L ? "flip" : L,
          em = void 0 === S || S,
          ew = void 0 === V ? 3 : V,
          ev = void 0 === R ? 3 : R,
          eb = void 0 === y ? "inherit" : y,
          ey = void 0 === x ? "auto" : x,
          ex = r ?? el?.element,
          eC = n ?? mW[e.placement ?? "bottom"],
          ek = o ?? e.boundaryElement ?? el.element,
          eM = i ?? e.boundaryElement ?? el.element,
          ej = s ?? ea.popover.zOffset,
          eL = !g_() && ec,
          eS = gB(ex)?.border;
        ei[30] !== f ? (($ = fQ(f)), (ei[30] = f), (ei[31] = $)) : ($ = ei[31]);
        let eV = $;
        ei[32] !== ew ? ((T = fQ(ew)), (ei[32] = ew), (ei[33] = T)) : (T = ei[33]);
        let eR = T;
        ei[34] !== ev ? ((E = fQ(ev)), (ei[34] = ev), (ei[35] = E)) : (E = ei[35]);
        let eH = E,
          e$ = fQ(ey);
        ei[36] !== ej ? ((B = fQ(ej)), (ei[36] = ej), (ei[37] = B)) : (B = ei[37]);
        let eT = B,
          eE = (0, e2.useRef)(null),
          eB = (0, e2.useRef)(null);
        (ei[38] === Symbol.for("react.memo_cache_sentinel") ? ((P = () => eE.current), (ei[38] = P)) : (P = ei[38]),
          (0, e2.useImperativeHandle)(t, P));
        let eP = gW(),
          eI = eh || em ? eS?.width : void 0,
          eA = (function (e) {
            let { container: t, mediaIndex: r, width: n } = e,
              o = n[r],
              i = void 0 === o ? n[n.length - 1] : o;
            return "number" == typeof i ? t[i] : void 0;
          })({ container: es, mediaIndex: eP, width: e$ }),
          eW = (0, e2.useRef)(eA);
        (ei[39] !== eA
          ? ((I = () => {
              eW.current = eA;
            }),
            (A = [eA]),
            (ei[39] = eA),
            (ei[40] = I),
            (ei[41] = A))
          : ((I = ei[40]), (A = ei[41])),
          (0, e2.useEffect)(I, A),
          ei[42] !== eI || ei[43] !== eA
            ? ((W = (function (e) {
                let { boundaryWidth: t, currentWidth: r } = e;
                if (void 0 !== r || void 0 !== t) return Math.min(r ?? 1 / 0, (t || 1 / 0) - 8);
              })({ boundaryWidth: eI, currentWidth: eA })),
              (ei[42] = eI),
              (ei[43] = eA),
              (ei[44] = W))
            : (W = ei[44]));
        let ez = W,
          eO = (0, e2.useRef)(ez);
        (ei[45] !== ez
          ? ((z = () => {
              eO.current = ez;
            }),
            (O = [ez]),
            (ei[45] = ez),
            (ei[46] = z),
            (ei[47] = O))
          : ((z = ei[46]), (O = ei[47])),
          (0, e2.useEffect)(z, O));
        let e_ = (0, e2.useRef)(void 0);
        (ei[48] !== c || ei[49] !== ez || ei[50] !== h || ei[51] !== eA
          ? ((_ = () => {
              let e = eE.current;
              if (!h || !e) return;
              let t = e_.current;
              (c ? void 0 !== t && (e.style.width = `${t}px`) : void 0 !== eA && (e.style.width = `${eA}px`),
                "number" == typeof ez && (e.style.maxWidth = `${ez}px`));
            }),
            (Z = [eA, c, ez, h]),
            (ei[48] = c),
            (ei[49] = ez),
            (ei[50] = h),
            (ei[51] = eA),
            (ei[52] = _),
            (ei[53] = Z))
          : ((_ = ei[52]), (Z = ei[53])),
          (0, e2.useEffect)(_, Z));
        let [eZ, eD] = (0, e2.useState)(void 0);
        ei[54] !== eL ||
        ei[55] !== eu ||
        ei[56] !== eh ||
        ei[57] !== eC ||
        ei[58] !== ek ||
        ei[59] !== ed ||
        ei[60] !== c ||
        ei[61] !== ep ||
        ei[62] !== eg ||
        ei[63] !== em ||
        ei[64] !== eM
          ? ((D = {
              animate: eL,
              arrowProp: eu,
              arrowRef: eB,
              constrainSize: eh,
              fallbackPlacements: eC,
              floatingBoundary: ek,
              margins: ed,
              matchReferenceWidth: c,
              maxWidthRef: eO,
              placementProp: ep,
              placementStrategy: eg,
              preventOverflow: em,
              referenceBoundary: eM,
              referenceWidthRef: e_,
              rootBoundary: "viewport",
              setReferenceWidth: eD,
              widthRef: eW,
            }),
            (ei[54] = eL),
            (ei[55] = eu),
            (ei[56] = eh),
            (ei[57] = eC),
            (ei[58] = ek),
            (ei[59] = ed),
            (ei[60] = c),
            (ei[61] = ep),
            (ei[62] = eg),
            (ei[63] = em),
            (ei[64] = eM),
            (ei[65] = D))
          : (D = ei[65]);
        let eN = (function (e) {
          let t,
            r = (0, e5.c)(42),
            {
              animate: n,
              arrowProp: o,
              arrowRef: i,
              constrainSize: s,
              fallbackPlacements: a,
              floatingBoundary: l,
              margins: d,
              matchReferenceWidth: c,
              maxWidthRef: u,
              placementProp: h,
              placementStrategy: f,
              preventOverflow: p,
              referenceBoundary: g,
              referenceWidthRef: m,
              rootBoundary: w,
              setReferenceWidth: v,
              widthRef: b,
            } = e;
          if (
            r[0] !== n ||
            r[1] !== o ||
            r[2] !== i ||
            r[3] !== s ||
            r[4] !== a ||
            r[5] !== l ||
            r[6] !== d ||
            r[7] !== c ||
            r[8] !== u ||
            r[9] !== h ||
            r[10] !== f ||
            r[11] !== p ||
            r[12] !== g ||
            r[13] !== m ||
            r[14] !== w ||
            r[15] !== v ||
            r[16] !== b
          ) {
            let e, y;
            if (((t = []), s || p))
              if ("autoPlacement" === f) {
                let e;
                (r[18] !== a || r[19] !== h
                  ? ((e = (0, sY.autoPlacement)({ allowedPlacements: [h].concat(a) })),
                    (r[18] = a),
                    (r[19] = h),
                    (r[20] = e))
                  : (e = r[20]),
                  t.push(e));
              } else {
                let e,
                  n = l || void 0;
                (r[21] !== a || r[22] !== w || r[23] !== n
                  ? ((e = (0, sY.flip)({ boundary: n, fallbackPlacements: a, padding: 4, rootBoundary: w })),
                    (r[21] = a),
                    (r[22] = w),
                    (r[23] = n),
                    (r[24] = e))
                  : (e = r[24]),
                  t.push(e));
              }
            if (
              (r[25] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, sY.offset)({ mainAxis: 4 })), (r[25] = e))
                : (e = r[25]),
              t.push(e),
              s || c)
            ) {
              let e,
                n = l || void 0;
              (r[26] !== s ||
              r[27] !== d ||
              r[28] !== c ||
              r[29] !== u ||
              r[30] !== m ||
              r[31] !== v ||
              r[32] !== n ||
              r[33] !== b
                ? ((e = (function (e) {
                    let {
                      constrainSize: t,
                      margins: r,
                      matchReferenceWidth: n,
                      maxWidthRef: o,
                      padding: i = 0,
                      referenceWidthRef: s,
                      setReferenceWidth: a,
                      widthRef: l,
                    } = e;
                    return {
                      name: "@sanity/ui/size",
                      async fn(d) {
                        let { elements: c, placement: u, platform: h, rects: f } = d,
                          { floating: p, reference: g } = f,
                          m = await (0, sG.detectOverflow)(d, {
                            altBoundary: !0,
                            boundary: e.boundaryElement || void 0,
                            elementContext: "floating",
                            padding: i,
                            rootBoundary: "viewport",
                          }),
                          w = 1 / 0,
                          v = 1 / 0,
                          b = p.width,
                          y = p.height;
                        (u.includes("top") && ((w = b - (m.left + m.right)), (v = y - m.top)),
                          u.includes("right") && ((w = b - m.right), (v = y - (m.top + m.bottom))),
                          u.includes("bottom") && ((w = b - (m.left + m.right)), (v = y - m.bottom)),
                          u.includes("left") && ((w = b - m.left), (v = y - (m.top + m.bottom))));
                        let x = w - r[1] - r[3],
                          C = v - r[0] - r[2],
                          k = g.width - r[1] - r[3];
                        ((s.current = k),
                          a(k),
                          n
                            ? (c.floating.style.width = `${k}px`)
                            : void 0 !== l.current && (c.floating.style.width = `${l.current}px`),
                          t &&
                            ((c.floating.style.maxWidth = `${Math.min(x, o.current ?? 1 / 0)}px`),
                            (c.floating.style.maxHeight = `${C}px`)));
                        let M = await h.getDimensions(c.floating),
                          j = M.height;
                        return b !== M.width || y !== j ? { reset: { rects: !0 } } : {};
                      },
                    };
                  })({
                    boundaryElement: n,
                    constrainSize: s,
                    margins: d,
                    matchReferenceWidth: c,
                    maxWidthRef: u,
                    padding: 4,
                    referenceWidthRef: m,
                    setReferenceWidth: v,
                    widthRef: b,
                  })),
                  (r[26] = s),
                  (r[27] = d),
                  (r[28] = c),
                  (r[29] = u),
                  (r[30] = m),
                  (r[31] = v),
                  (r[32] = n),
                  (r[33] = b),
                  (r[34] = e))
                : (e = r[34]),
                t.push(e));
            }
            if (p) {
              let e,
                n = l || void 0;
              (r[35] !== w || r[36] !== n
                ? ((e = (0, sY.shift)({ boundary: n, rootBoundary: w, padding: 4 })),
                  (r[35] = w),
                  (r[36] = n),
                  (r[37] = e))
                : (e = r[37]),
                t.push(e));
            }
            if (o) {
              let e;
              (r[38] !== i ? ((e = (0, sY.arrow)({ element: i, padding: 4 })), (r[38] = i), (r[39] = e)) : (e = r[39]),
                t.push(e));
            }
            n && t.push(g3);
            let x = g || void 0;
            (r[40] !== x
              ? ((y = (0, sY.hide)({ boundary: x, padding: 4, strategy: "referenceHidden" })), (r[40] = x), (r[41] = y))
              : (y = r[41]),
              t.push(y),
              (r[0] = n),
              (r[1] = o),
              (r[2] = i),
              (r[3] = s),
              (r[4] = a),
              (r[5] = l),
              (r[6] = d),
              (r[7] = c),
              (r[8] = u),
              (r[9] = h),
              (r[10] = f),
              (r[11] = p),
              (r[12] = g),
              (r[13] = m),
              (r[14] = w),
              (r[15] = v),
              (r[16] = b),
              (r[17] = t));
          } else t = r[17];
          return t;
        })(D);
        (ei[66] !== g ? ((N = g ? { reference: g } : void 0), (ei[66] = g), (ei[67] = N)) : (N = ei[67]),
          ei[68] !== eN || ei[69] !== ep || ei[70] !== N
            ? ((F = { middleware: eN, placement: ep, whileElementsMounted: sG.autoUpdate, elements: N }),
              (ei[68] = eN),
              (ei[69] = ep),
              (ei[70] = N),
              (ei[71] = F))
            : (F = ei[71]));
        let {
            x: eF,
            y: eU,
            middlewareData: eG,
            placement: eY,
            refs: eX,
            strategy: eq,
            update: eK,
          } = (0, sY.useFloating)(F),
          eJ = eG.hide?.referenceHidden,
          eQ = eG.arrow?.x,
          e1 = eG.arrow?.y,
          e6 = eG["@sanity/ui/origin"]?.originX,
          e4 = eG["@sanity/ui/origin"]?.originY;
        ei[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (e) => {
              eB.current = e;
            }),
            (ei[72] = U))
          : (U = ei[72]);
        let e8 = U;
        ei[73] !== eX
          ? ((G = (e) => {
              ((eE.current = e), eX.setFloating(e));
            }),
            (ei[73] = eX),
            (ei[74] = G))
          : (G = ei[74]);
        let e9 = G;
        (ei[75] !== a ? ((Y = a ? mI(a) : null), (ei[75] = a), (ei[76] = Y)) : (Y = ei[76]),
          ei[77] !== eX.reference.current
            ? ((X = () => eX.reference.current), (ei[77] = eX.reference.current), (ei[78] = X))
            : (X = ei[78]),
          (0, e2.useImperativeHandle)(Y, X));
        e: {
          let e;
          if (g) {
            q = a;
            break e;
          }
          if (!a) {
            q = null;
            break e;
          }
          (ei[79] !== a || ei[80] !== eX.setReference
            ? ((e = (0, e2.cloneElement)(a, { ref: eX.setReference })),
              (ei[79] = a),
              (ei[80] = eX.setReference),
              (ei[81] = e))
            : (e = ei[81]),
            (q = e));
        }
        let e3 = q;
        if (
          (ei[82] !== eK
            ? ((K = () => eK), (J = [eK]), (ei[82] = eK), (ei[83] = K), (ei[84] = J))
            : ((K = ei[83]), (J = ei[84])),
          (0, e2.useImperativeHandle)(H, K, J),
          d)
        ) {
          let e;
          return (
            ei[85] !== a ? ((e = a || (0, e0.jsx)(e0.Fragment, {})), (ei[85] = a), (ei[86] = e)) : (e = ei[86]),
            e
          );
        }
        ei[87] !== u ? ((Q = u && (0, e0.jsx)(mZ, {})), (ei[87] = u), (ei[88] = Q)) : (Q = ei[88]);
        let e7 = c ? eZ : eA;
        (ei[89] !== eL ||
        ei[90] !== eu ||
        ei[91] !== eQ ||
        ei[92] !== e1 ||
        ei[93] !== l ||
        ei[94] !== ed ||
        ei[95] !== e6 ||
        ei[96] !== e4 ||
        ei[97] !== ef ||
        ei[98] !== eV ||
        ei[99] !== eY ||
        ei[100] !== eR ||
        ei[101] !== eJ ||
        ei[102] !== m ||
        ei[103] !== w ||
        ei[104] !== e9 ||
        ei[105] !== eH ||
        ei[106] !== eq ||
        ei[107] !== e7 ||
        ei[108] !== eb ||
        ei[109] !== eF ||
        ei[110] !== eU
          ? ((ee = (0, e0.jsx)(m_, {
              ...m,
              __unstable_margins: ed,
              animate: eL,
              arrow: eu,
              arrowRef: e8,
              arrowX: eQ,
              arrowY: e1,
              hidden: eJ,
              overflow: ef,
              padding: eV,
              placement: eY,
              radius: eR,
              ref: e9,
              scheme: w,
              shadow: eH,
              originX: e6,
              originY: e4,
              strategy: eq,
              tone: eb,
              width: e7,
              x: eF,
              y: eU,
              children: l,
            })),
            (ei[89] = eL),
            (ei[90] = eu),
            (ei[91] = eQ),
            (ei[92] = e1),
            (ei[93] = l),
            (ei[94] = ed),
            (ei[95] = e6),
            (ei[96] = e4),
            (ei[97] = ef),
            (ei[98] = eV),
            (ei[99] = eY),
            (ei[100] = eR),
            (ei[101] = eJ),
            (ei[102] = m),
            (ei[103] = w),
            (ei[104] = e9),
            (ei[105] = eH),
            (ei[106] = eq),
            (ei[107] = e7),
            (ei[108] = eb),
            (ei[109] = eF),
            (ei[110] = eU),
            (ei[111] = ee))
          : (ee = ei[111]),
          ei[112] !== Q || ei[113] !== ee || ei[114] !== eT
            ? ((et = (0, e0.jsxs)(mg, { zOffset: eT, children: [Q, ee] })),
              (ei[112] = Q),
              (ei[113] = ee),
              (ei[114] = eT),
              (ei[115] = et))
            : (et = ei[115]));
        let te = et;
        ei[116] !== h || ei[117] !== te || ei[118] !== p
          ? ((er =
              h && (p ? (0, e0.jsx)(mL, { __unstable_name: "string" == typeof p ? p : void 0, children: te }) : te)),
            (ei[116] = h),
            (ei[117] = te),
            (ei[118] = p),
            (ei[119] = er))
          : (er = ei[119]);
        let tt = er;
        return (
          ei[120] !== eL || ei[121] !== tt
            ? ((en = eL ? (0, e0.jsx)(hJ, { children: tt }) : tt), (ei[120] = eL), (ei[121] = tt), (ei[122] = en))
            : (en = ei[122]),
          ei[123] !== e3 || ei[124] !== en
            ? ((eo = (0, e0.jsxs)(e0.Fragment, { children: [en, e3] })), (ei[123] = e3), (ei[124] = en), (ei[125] = eo))
            : (eo = ei[125]),
          eo
        );
      });
    mD.displayName = "ForwardRef(Popover)";
    let mN = r4.div.withConfig({ displayName: "StyledRadio", componentId: "sc-ccrwkf-0" })(function () {
        return r6`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `;
      }),
      mF = r4.input.withConfig({ displayName: "Input", componentId: "sc-ccrwkf-1" })(function (e) {
        let { color: t, input: r } = Y(e.theme),
          n = (r.radio.size - r.radio.markSize) / 2;
        return r6`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${fK(r.radio.size / 2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${fK(r.radio.size)};
      width: ${fK(r.radio.size)};
      border-radius: ${fK(r.radio.size / 2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${pL({ color: t.input.default.enabled.border, width: r.border.width })};

      &::after {
        content: '';
        position: absolute;
        top: ${fK(n)};
        left: ${fK(n)};
        height: ${fK(r.radio.markSize)};
        width: ${fK(r.radio.markSize)};
        border-radius: ${fK(r.radio.markSize / 2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${pS({ border: { width: r.border.width, color: t.input.default.enabled.border }, focusRing: r.radio.focusRing })};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${pL({ color: t.input.default.enabled.border, width: r.border.width })};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${pL({ width: r.border.width, color: t.input.invalid.enabled.muted.bg })};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `;
      }),
      mU = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h = (0, e5.c)(19);
        h[0] !== e
          ? (({ className: r, disabled: o, style: a, customValidity: n, readOnly: i, ...s } = e),
            (h[0] = e),
            (h[1] = r),
            (h[2] = n),
            (h[3] = o),
            (h[4] = i),
            (h[5] = s),
            (h[6] = a))
          : ((r = h[1]), (n = h[2]), (o = h[3]), (i = h[4]), (s = h[5]), (a = h[6]));
        let f = (0, e2.useRef)(null);
        (h[7] === Symbol.for("react.memo_cache_sentinel") ? ((l = () => f.current), (h[7] = l)) : (l = h[7]),
          (0, e2.useImperativeHandle)(t, l),
          g$(f, n));
        let p = !o && i ? "" : void 0,
          g = n ? "" : void 0,
          m = o || i;
        return (
          h[8] !== i || h[9] !== s || h[10] !== p || h[11] !== g || h[12] !== m
            ? ((d = (0, e0.jsx)(mF, {
                "data-read-only": p,
                "data-error": g,
                ...s,
                disabled: m,
                readOnly: i,
                ref: f,
                type: "radio",
              })),
              (h[8] = i),
              (h[9] = s),
              (h[10] = p),
              (h[11] = g),
              (h[12] = m),
              (h[13] = d))
            : (d = h[13]),
          h[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, e0.jsx)("span", {})), (h[14] = c))
            : (c = h[14]),
          h[15] !== r || h[16] !== a || h[17] !== d
            ? ((u = (0, e0.jsxs)(mN, { className: r, "data-ui": "Radio", style: a, children: [d, c] })),
              (h[15] = r),
              (h[16] = a),
              (h[17] = d),
              (h[18] = u))
            : (u = h[18]),
          u
        );
      });
    function mG(e) {
      let { font: t } = Y(e.theme);
      return r6`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `;
    }
    function mY(e) {
      let { color: t, input: r } = Y(e.theme);
      return r6`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${pL({ color: t.input.default.enabled.border, width: r.border.width })};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${pL({ color: t.input.default.hovered.border, width: r.border.width })};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${pS({ border: { width: r.border.width, color: t.input.default.enabled.border }, focusRing: r.select.focusRing })};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${pL({ color: t.input.default.readOnly.border, width: r.border.width })};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${pL({ color: t.input.default.disabled.border, width: r.border.width })};
    }
  `;
    }
    function mX(e) {
      let { $fontSize: t } = e,
        { font: r, media: n } = Y(e.theme);
      return fJ(n, t, (e) => {
        var t;
        return { fontSize: fK((t = r.text.sizes[e] || r.text.sizes[2]).fontSize), lineHeight: `${fK(t.lineHeight)}` };
      });
    }
    mU.displayName = "ForwardRef(Radio)";
    let mq = r4.div.withConfig({ displayName: "StyledSelect", componentId: "sc-5mxno7-0" })(function () {
        return r6`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `;
      }),
      mK = r4.select.withConfig({ displayName: "Input", componentId: "sc-5mxno7-1" })(function () {
        return [p0, mG, mY, mX, pY];
      }),
      mJ = r4(gh).withConfig({ displayName: "IconBox", componentId: "sc-5mxno7-2" })(function (e) {
        let { color: t } = Y(e.theme);
        return r6`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `;
      }),
      mQ = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x = (0, e5.c)(37);
        x[0] !== e
          ? (({
              children: r,
              customValidity: n,
              disabled: o,
              fontSize: a,
              padding: l,
              radius: d,
              readOnly: i,
              space: c,
              ...s
            } = e),
            (x[0] = e),
            (x[1] = r),
            (x[2] = n),
            (x[3] = o),
            (x[4] = i),
            (x[5] = s),
            (x[6] = a),
            (x[7] = l),
            (x[8] = d),
            (x[9] = c))
          : ((r = x[1]),
            (n = x[2]),
            (o = x[3]),
            (i = x[4]),
            (s = x[5]),
            (a = x[6]),
            (l = x[7]),
            (d = x[8]),
            (c = x[9]));
        let C = void 0 === a ? 2 : a,
          k = void 0 === l ? 3 : l,
          M = void 0 === d ? 2 : d,
          j = void 0 === c ? 3 : c,
          L = (0, e2.useRef)(null);
        (x[10] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => L.current), (x[10] = u)) : (u = x[10]),
          (0, e2.useImperativeHandle)(t, u),
          g$(L, n));
        let S = !o && i ? "" : void 0;
        (x[11] !== C ? ((h = fQ(C)), (x[11] = C), (x[12] = h)) : (h = x[12]),
          x[13] !== k ? ((f = fQ(k)), (x[13] = k), (x[14] = f)) : (f = x[14]),
          x[15] !== M ? ((p = fQ(M)), (x[15] = M), (x[16] = p)) : (p = x[16]),
          x[17] !== j ? ((g = fQ(j)), (x[17] = j), (x[18] = g)) : (g = x[18]));
        let V = o || i;
        return (
          x[19] !== r ||
          x[20] !== s ||
          x[21] !== V ||
          x[22] !== S ||
          x[23] !== h ||
          x[24] !== f ||
          x[25] !== p ||
          x[26] !== g
            ? ((m = (0, e0.jsx)(mK, {
                "data-read-only": S,
                "data-ui": "Select",
                ...s,
                $fontSize: h,
                $padding: f,
                $radius: p,
                $space: g,
                disabled: V,
                ref: L,
                children: r,
              })),
              (x[19] = r),
              (x[20] = s),
              (x[21] = V),
              (x[22] = S),
              (x[23] = h),
              (x[24] = f),
              (x[25] = p),
              (x[26] = g),
              (x[27] = m))
            : (m = x[27]),
          x[28] === Symbol.for("react.memo_cache_sentinel") ? ((w = (0, e0.jsx)(nW, {})), (x[28] = w)) : (w = x[28]),
          x[29] !== C ? ((v = (0, e0.jsx)(gp, { size: C, children: w })), (x[29] = C), (x[30] = v)) : (v = x[30]),
          x[31] !== k || x[32] !== v
            ? ((b = (0, e0.jsx)(mJ, { padding: k, children: v })), (x[31] = k), (x[32] = v), (x[33] = b))
            : (b = x[33]),
          x[34] !== m || x[35] !== b
            ? ((y = (0, e0.jsxs)(mq, { "data-ui": "Select", children: [m, b] })), (x[34] = m), (x[35] = b), (x[36] = y))
            : (y = x[36]),
          y
        );
      });
    mQ.displayName = "ForwardRef(Select)";
    let m1 = {
        "&&:not([hidden])": { display: "grid" },
        '&[data-as="ul"],&[data-as="ol"]': { listStyle: "none" },
        gridTemplateColumns: "minmax(0, 1fr)",
        gridAutoRows: "min-content",
      },
      m0 = r4(gh).withConfig({ displayName: "StyledStack", componentId: "sc-8dpfq2-0" })(
        function () {
          return m1;
        },
        function (e) {
          let { media: t, space: r } = Y(e.theme);
          return fJ(t, e.$space, (e) => ({ gridGap: fK(r[e]) }));
        },
      ),
      m5 = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a = (0, e5.c)(12);
        a[0] !== e
          ? (({ as: r, space: o, ...n } = e), (a[0] = e), (a[1] = r), (a[2] = n), (a[3] = o))
          : ((r = a[1]), (n = a[2]), (o = a[3]));
        let l = "string" == typeof r ? r : void 0;
        return (
          a[4] !== o ? ((i = fQ(o)), (a[4] = o), (a[5] = i)) : (i = a[5]),
          a[6] !== r || a[7] !== t || a[8] !== n || a[9] !== l || a[10] !== i
            ? ((s = (0, e0.jsx)(m0, { "data-as": l, "data-ui": "Stack", ...n, $space: i, forwardedAs: r, ref: t })),
              (a[6] = r),
              (a[7] = t),
              (a[8] = n),
              (a[9] = l),
              (a[10] = i),
              (a[11] = s))
            : (s = a[11]),
          s
        );
      });
    m5.displayName = "ForwardRef(Stack)";
    let m2 = r4.span.withConfig({ displayName: "StyledSwitch", componentId: "sc-dw1foe-0" })(function () {
        return r6`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `;
      }),
      m6 = r4.input.withConfig({ displayName: "Input", componentId: "sc-dw1foe-1" })(function () {
        return r6`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `;
      }),
      m4 = r4.span.withConfig({ displayName: "Representation", componentId: "sc-dw1foe-2" })(function (e) {
        let { color: t, input: r } = Y(e.theme);
        return r6`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${fK(r.switch.width)};
    height: ${fK(r.switch.height)};
    border-radius: ${fK(r.switch.height / 2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${pS({ focusRing: r.switch.focusRing })};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `;
      }),
      m8 = r4.span.withConfig({ displayName: "Track", componentId: "sc-dw1foe-3" })(function (e) {
        let { input: t } = Y(e.theme);
        return r6`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${fK(t.switch.width)};
    height: ${fK(t.switch.height)};
    border-radius: ${fK(t.switch.height / 2)};
  `;
      }),
      m9 = r4.span.withConfig({ displayName: "Thumb", componentId: "sc-dw1foe-4" })(function (e) {
        let { $indeterminate: t } = e,
          { input: r } = Y(e.theme),
          n = r.switch.width,
          o = r.switch.height,
          i = r.switch.padding,
          s = o - 2 * r.switch.padding,
          a = n - 2 * i - s,
          l = n / 2 - s / 2 - i,
          d = !0 !== t && !0 === e.$checked;
        return r6`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${fK(i)};
    top: ${fK(i)};
    height: ${fK(s)};
    width: ${fK(s)};
    border-radius: ${fK(s / 2)};
    transition-property: transform;
    transition-duration: ${r.switch.transitionDurationMs}ms;
    transition-timing-function: ${r.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${
      d &&
      r6`
      transform: translate3d(${a}px, 0, 0);
    `
    }

    ${
      t &&
      r6`
      transform: translate3d(${l}px, 0, 0);
    `
    }
  `;
      }),
      m3 = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m = (0, e5.c)(26);
        m[0] !== e
          ? (({ checked: r, className: n, disabled: o, indeterminate: i, readOnly: s, style: l, ...a } = e),
            (m[0] = e),
            (m[1] = r),
            (m[2] = n),
            (m[3] = o),
            (m[4] = i),
            (m[5] = s),
            (m[6] = a),
            (m[7] = l))
          : ((r = m[1]), (n = m[2]), (o = m[3]), (i = m[4]), (s = m[5]), (a = m[6]), (l = m[7]));
        let w = (0, e2.useRef)(null);
        (m[8] === Symbol.for("react.memo_cache_sentinel") ? ((d = () => w.current), (m[8] = d)) : (d = m[8]),
          (0, e2.useImperativeHandle)(t, d),
          m[9] !== i
            ? ((c = () => {
                w.current && (w.current.indeterminate = i || !1);
              }),
              (u = [i]),
              (m[9] = i),
              (m[10] = c),
              (m[11] = u))
            : ((c = m[10]), (u = m[11])),
          (0, e2.useEffect)(c, u));
        let v = !o && s ? "" : void 0,
          b = !0 !== i && r,
          y = o || s;
        return (
          m[12] !== a || m[13] !== v || m[14] !== b || m[15] !== y
            ? ((h = (0, e0.jsx)(m6, { "data-read-only": v, ...a, checked: b, disabled: y, type: "checkbox", ref: w })),
              (m[12] = a),
              (m[13] = v),
              (m[14] = b),
              (m[15] = y),
              (m[16] = h))
            : (h = m[16]),
          m[17] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, e0.jsx)(m8, {})), (m[17] = f)) : (f = m[17]),
          m[18] !== r || m[19] !== i
            ? ((p = (0, e0.jsxs)(m4, {
                "aria-hidden": !0,
                "data-name": "representation",
                children: [f, (0, e0.jsx)(m9, { $checked: r, $indeterminate: i })],
              })),
              (m[18] = r),
              (m[19] = i),
              (m[20] = p))
            : (p = m[20]),
          m[21] !== n || m[22] !== l || m[23] !== h || m[24] !== p
            ? ((g = (0, e0.jsxs)(m2, { className: n, "data-ui": "Switch", style: l, children: [h, p] })),
              (m[21] = n),
              (m[22] = l),
              (m[23] = h),
              (m[24] = p),
              (m[25] = g))
            : (g = m[25]),
          g
        );
      });
    m3.displayName = "ForwardRef(Switch)";
    let m7 = r4.span.withConfig({ displayName: "StyledTextArea", componentId: "sc-1d6h1o8-0" })(pq),
      we = r4.span.withConfig({
        displayName: "InputRoot",
        componentId: "sc-1d6h1o8-1",
      })`flex:1;min-width:0;display:block;position:relative;`,
      wt = r4.textarea.withConfig({ displayName: "Input", componentId: "sc-1d6h1o8-2" })(pG, pK, pJ),
      wr = r4.div.withConfig({ displayName: "Presentation", componentId: "sc-1d6h1o8-3" })(p0, pQ),
      wn = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b = (0, e5.c)(35);
        b[0] !== e
          ? (({
              border: i,
              customValidity: n,
              disabled: s,
              fontSize: a,
              padding: l,
              radius: d,
              weight: c,
              __unstable_disableFocusRing: r,
              ...o
            } = e),
            (b[0] = e),
            (b[1] = r),
            (b[2] = n),
            (b[3] = o),
            (b[4] = i),
            (b[5] = s),
            (b[6] = a),
            (b[7] = l),
            (b[8] = d),
            (b[9] = c))
          : ((r = b[1]),
            (n = b[2]),
            (o = b[3]),
            (i = b[4]),
            (s = b[5]),
            (a = b[6]),
            (l = b[7]),
            (d = b[8]),
            (c = b[9]));
        let y = void 0 === i || i,
          x = void 0 !== s && s,
          C = void 0 === a ? 2 : a,
          k = void 0 === l ? 3 : l,
          M = void 0 === d ? 2 : d,
          j = (0, e2.useRef)(null),
          L = pt();
        (b[10] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => j.current), (b[10] = u)) : (u = b[10]),
          (0, e2.useImperativeHandle)(t, u),
          g$(j, n));
        let S = L.scheme,
          V = L.tone;
        (b[11] !== C ? ((h = fQ(C)), (b[11] = C), (b[12] = h)) : (h = b[12]),
          b[13] !== k ? ((f = fQ(k)), (b[13] = k), (b[14] = f)) : (f = b[14]));
        let R = L.scheme;
        (b[15] === Symbol.for("react.memo_cache_sentinel") ? ((p = fQ(0)), (b[15] = p)) : (p = b[15]),
          b[16] !== x ||
          b[17] !== o ||
          b[18] !== L.scheme ||
          b[19] !== L.tone ||
          b[20] !== h ||
          b[21] !== f ||
          b[22] !== c
            ? ((g = (0, e0.jsx)(wt, {
                "data-as": "textarea",
                "data-scheme": S,
                "data-tone": V,
                ...o,
                $fontSize: h,
                $padding: f,
                $scheme: R,
                $space: p,
                $tone: L.tone,
                $weight: c,
                disabled: x,
                ref: j,
              })),
              (b[16] = x),
              (b[17] = o),
              (b[18] = L.scheme),
              (b[19] = L.tone),
              (b[20] = h),
              (b[21] = f),
              (b[22] = c),
              (b[23] = g))
            : (g = b[23]),
          b[24] !== M ? ((m = fQ(M)), (b[24] = M), (b[25] = m)) : (m = b[25]));
        let H = y ? "" : void 0;
        return (
          b[26] !== r || b[27] !== L.scheme || b[28] !== L.tone || b[29] !== m || b[30] !== H
            ? ((w = (0, e0.jsx)(wr, {
                $radius: m,
                $unstableDisableFocusRing: r,
                $scheme: L.scheme,
                $tone: L.tone,
                "data-border": H,
                "data-scheme": L.scheme,
                "data-tone": L.tone,
              })),
              (b[26] = r),
              (b[27] = L.scheme),
              (b[28] = L.tone),
              (b[29] = m),
              (b[30] = H),
              (b[31] = w))
            : (w = b[31]),
          b[32] !== g || b[33] !== w
            ? ((v = (0, e0.jsx)(m7, { "data-ui": "TextArea", children: (0, e0.jsxs)(we, { children: [g, w] }) })),
              (b[32] = g),
              (b[33] = w),
              (b[34] = v))
            : (v = b[34]),
          v
        );
      });
    wn.displayName = "ForwardRef(TextArea)";
    let wo = { zIndex: 2 },
      wi = r4(gV)
        .attrs({ forwardedAs: "span" })
        .withConfig({ displayName: "StyledTextInput", componentId: "sc-h62wco-0" })(pq),
      ws = r4.span.withConfig({
        displayName: "InputRoot",
        componentId: "sc-h62wco-1",
      })`flex:1;min-width:0;display:block;position:relative;`,
      wa = r4(gV)
        .attrs({ forwardedAs: "span" })
        .withConfig({
          displayName: "Prefix",
          componentId: "sc-h62wco-2",
        })`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,
      wl = r4(gV)
        .attrs({ forwardedAs: "span" })
        .withConfig({
          displayName: "Suffix",
          componentId: "sc-h62wco-3",
        })`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,
      wd = r4.input.withConfig({ displayName: "Input", componentId: "sc-h62wco-4" })(pG, pK, pJ),
      wc = r4.span.withConfig({ displayName: "Presentation", componentId: "sc-h62wco-5" })(p0, pQ),
      wu = r4(gh).withConfig({ displayName: "LeftBox", componentId: "sc-h62wco-6" })`position:absolute;top:0;left:0;`,
      wh = r4(gh).withConfig({ displayName: "RightBox", componentId: "sc-h62wco-7" })`position:absolute;top:0;right:0;`,
      wf = r4(gV).withConfig({
        displayName: "RightCard",
        componentId: "sc-h62wco-8",
      })`background-color:transparent;position:absolute;top:0;right:0;`,
      wp = r4(gL).withConfig({ displayName: "TextInputClearButton", componentId: "sc-h62wco-9" })({
        "&:not([hidden])": { display: "block" },
      }),
      wg = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M,
          j,
          L,
          S,
          V,
          R,
          H,
          $,
          T,
          E,
          B,
          P,
          I,
          A = (0, e5.c)(92);
        A[0] !== e
          ? (({
              __unstable_disableFocusRing: o,
              border: h,
              clearButton: i,
              disabled: f,
              fontSize: p,
              icon: r,
              iconRight: n,
              onClear: a,
              padding: g,
              prefix: l,
              radius: m,
              readOnly: d,
              space: w,
              suffix: u,
              customValidity: s,
              type: v,
              weight: b,
              ...c
            } = e),
            (A[0] = e),
            (A[1] = r),
            (A[2] = n),
            (A[3] = o),
            (A[4] = i),
            (A[5] = s),
            (A[6] = a),
            (A[7] = l),
            (A[8] = d),
            (A[9] = c),
            (A[10] = u),
            (A[11] = h),
            (A[12] = f),
            (A[13] = p),
            (A[14] = g),
            (A[15] = m),
            (A[16] = w),
            (A[17] = v),
            (A[18] = b))
          : ((r = A[1]),
            (n = A[2]),
            (o = A[3]),
            (i = A[4]),
            (s = A[5]),
            (a = A[6]),
            (l = A[7]),
            (d = A[8]),
            (c = A[9]),
            (u = A[10]),
            (h = A[11]),
            (f = A[12]),
            (p = A[13]),
            (g = A[14]),
            (m = A[15]),
            (w = A[16]),
            (v = A[17]),
            (b = A[18]));
        let W = void 0 === h || h,
          z = void 0 !== f && f,
          O = void 0 === p ? 2 : p,
          _ = void 0 === g ? 3 : g,
          Z = void 0 === m ? 2 : m,
          D = void 0 === w ? 3 : w,
          N = void 0 === v ? "text" : v,
          F = (0, e2.useRef)(null),
          U = pt();
        A[19] !== O ? ((y = fQ(O)), (A[19] = O), (A[20] = y)) : (y = A[20]);
        let G = y;
        A[21] !== _ ? ((x = fQ(_)), (A[21] = _), (A[22] = x)) : (x = A[22]);
        let Y = x;
        A[23] !== Z ? ((C = fQ(Z)), (A[23] = Z), (A[24] = C)) : (C = A[24]);
        let X = C;
        A[25] !== D ? ((k = fQ(D)), (A[25] = D), (A[26] = k)) : (k = A[26]);
        let q = k,
          K = !!i,
          J = !!r,
          Q = !!n,
          ee = !!u,
          et = !!l;
        (A[27] === Symbol.for("react.memo_cache_sentinel") ? ((M = () => F.current), (A[27] = M)) : (M = A[27]),
          (0, e2.useImperativeHandle)(t, M),
          g$(F, s),
          A[28] !== a
            ? ((j = (e) => {
                (e.preventDefault(), e.stopPropagation(), a && a(), F.current?.focus());
              }),
              (A[28] = a),
              (A[29] = j))
            : (j = A[29]));
        let er = j;
        A[30] !== l || A[31] !== X
          ? ((L =
              l &&
              (0, e0.jsx)(wa, {
                borderTop: !0,
                borderLeft: !0,
                borderBottom: !0,
                radius: X,
                sizing: "border",
                tone: "inherit",
                children: (0, e0.jsx)("span", { children: l }),
              })),
            (A[30] = l),
            (A[31] = X),
            (A[32] = L))
          : (L = A[32]);
        let en = L,
          eo = W ? "" : void 0;
        (A[33] !== r || A[34] !== G || A[35] !== Y
          ? ((S =
              r &&
              (0, e0.jsx)(wu, {
                padding: Y,
                children: (0, e0.jsxs)(gp, {
                  size: G,
                  children: [(0, e2.isValidElement)(r) && r, (0, ne.isValidElementType)(r) && (0, e0.jsx)(r, {})],
                }),
              })),
            (A[33] = r),
            (A[34] = G),
            (A[35] = Y),
            (A[36] = S))
          : (S = A[36]),
          A[37] !== K || A[38] !== n || A[39] !== G || A[40] !== Y
            ? ((V =
                !K &&
                n &&
                (0, e0.jsx)(wh, {
                  padding: Y,
                  children: (0, e0.jsxs)(gp, {
                    size: G,
                    children: [(0, e2.isValidElement)(n) && n, (0, ne.isValidElementType)(n) && (0, e0.jsx)(n, {})],
                  }),
                })),
              (A[37] = K),
              (A[38] = n),
              (A[39] = G),
              (A[40] = Y),
              (A[41] = V))
            : (V = A[41]),
          A[42] !== et ||
          A[43] !== ee ||
          A[44] !== o ||
          A[45] !== X ||
          A[46] !== U.scheme ||
          A[47] !== U.tone ||
          A[48] !== eo ||
          A[49] !== S ||
          A[50] !== V
            ? ((R = (0, e0.jsxs)(wc, {
                $hasPrefix: et,
                $unstableDisableFocusRing: o,
                $hasSuffix: ee,
                $radius: X,
                $scheme: U.scheme,
                $tone: U.tone,
                "data-border": eo,
                "data-scheme": U.scheme,
                "data-tone": U.tone,
                children: [S, V],
              })),
              (A[42] = et),
              (A[43] = ee),
              (A[44] = o),
              (A[45] = X),
              (A[46] = U.scheme),
              (A[47] = U.tone),
              (A[48] = eo),
              (A[49] = S),
              (A[50] = V),
              (A[51] = R))
            : (R = A[51]));
        let ei = R;
        A[52] !== Y ? ((H = Y.map(ww)), (A[52] = Y), (A[53] = H)) : (H = A[53]);
        let es = H;
        A[54] !== Y ? (($ = Y.map(wv)), (A[54] = Y), (A[55] = $)) : ($ = A[55]);
        let ea = $,
          el = "object" == typeof i ? i : fA;
        A[56] !== i ||
        A[57] !== es ||
        A[58] !== ea ||
        A[59] !== el ||
        A[60] !== s ||
        A[61] !== z ||
        A[62] !== G ||
        A[63] !== er ||
        A[64] !== X ||
        A[65] !== d
          ? ((T =
              !z &&
              !d &&
              i &&
              (0, e0.jsx)(wf, {
                forwardedAs: "span",
                padding: es,
                style: wo,
                tone: s ? "critical" : "inherit",
                children: (0, e0.jsx)(wp, {
                  "aria-label": "Clear",
                  "data-qa": "clear-button",
                  fontSize: G,
                  icon: nG,
                  mode: "bleed",
                  padding: ea,
                  radius: X,
                  ...el,
                  onClick: er,
                  onMouseDown: wm,
                }),
              })),
            (A[56] = i),
            (A[57] = es),
            (A[58] = ea),
            (A[59] = el),
            (A[60] = s),
            (A[61] = z),
            (A[62] = G),
            (A[63] = er),
            (A[64] = X),
            (A[65] = d),
            (A[66] = T))
          : (T = A[66]);
        let ed = T;
        A[67] !== X || A[68] !== u
          ? ((E =
              u &&
              (0, e0.jsx)(wl, {
                borderTop: !0,
                borderRight: !0,
                borderBottom: !0,
                radius: X,
                sizing: "border",
                tone: "inherit",
                children: (0, e0.jsx)("span", { children: u }),
              })),
            (A[67] = X),
            (A[68] = u),
            (A[69] = E))
          : (E = A[69]);
        let ec = E,
          eu = Q || K;
        return (
          A[70] !== J ||
          A[71] !== z ||
          A[72] !== G ||
          A[73] !== Y ||
          A[74] !== d ||
          A[75] !== c ||
          A[76] !== U.scheme ||
          A[77] !== U.tone ||
          A[78] !== q ||
          A[79] !== eu ||
          A[80] !== N ||
          A[81] !== b
            ? ((B = (0, e0.jsx)(wd, {
                "data-as": "input",
                "data-scheme": U.scheme,
                "data-tone": U.tone,
                ...c,
                $fontSize: G,
                $iconLeft: J,
                $iconRight: eu,
                $padding: Y,
                $scheme: U.scheme,
                $space: q,
                $tone: U.tone,
                $weight: b,
                disabled: z,
                readOnly: d,
                ref: F,
                type: N,
              })),
              (A[70] = J),
              (A[71] = z),
              (A[72] = G),
              (A[73] = Y),
              (A[74] = d),
              (A[75] = c),
              (A[76] = U.scheme),
              (A[77] = U.tone),
              (A[78] = q),
              (A[79] = eu),
              (A[80] = N),
              (A[81] = b),
              (A[82] = B))
            : (B = A[82]),
          A[83] !== ed || A[84] !== ei || A[85] !== B
            ? ((P = (0, e0.jsxs)(ws, { children: [B, ei, ed] })), (A[83] = ed), (A[84] = ei), (A[85] = B), (A[86] = P))
            : (P = A[86]),
          A[87] !== en || A[88] !== U.tone || A[89] !== ec || A[90] !== P
            ? ((I = (0, e0.jsxs)(wi, { "data-ui": "TextInput", tone: U.tone, children: [en, P, ec] })),
              (A[87] = en),
              (A[88] = U.tone),
              (A[89] = ec),
              (A[90] = P),
              (A[91] = I))
            : (I = A[91]),
          I
        );
      });
    function wm(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    function ww(e) {
      return 0 === e ? 0 : 1 === e || 2 === e ? 1 : e - 2;
    }
    function wv(e) {
      return 0 === e || 1 === e ? 0 : 2 === e ? 1 : e - 1;
    }
    function wb(e) {
      let t,
        r,
        n = (0, e5.c)(3),
        [o, i] = (0, e2.useState)(e),
        s = (0, e2.useRef)(void 0);
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e, t) => {
            let r = () => {
              i(e);
            };
            if ((s.current && (clearTimeout(s.current), (s.current = void 0)), !t)) return r();
            s.current = setTimeout(r, t);
          }),
          (n[0] = t))
        : (t = n[0]);
      let a = t;
      return (n[1] !== o ? ((r = [o, a]), (n[1] = o), (n[2] = r)) : (r = n[2]), r);
    }
    wg.displayName = "ForwardRef(TextInput)";
    let wy = {
        top: ["top-end", "top-start", "bottom", "left", "right"],
        "top-start": ["top", "top-end", "bottom-start", "left-start", "right-start"],
        "top-end": ["top", "top-start", "bottom-end", "left-end", "right-end"],
        bottom: ["bottom-end", "bottom-start", "top", "left", "right"],
        "bottom-start": ["bottom", "bottom-end", "top-start", "left-start", "right-start"],
        "bottom-end": ["bottom", "bottom-start", "top-end", "left-end", "right-end"],
        left: ["left-end", "left-start", "right", "top", "bottom"],
        "left-start": ["left", "left-end", "right-start", "top-start", "bottom-start"],
        "left-end": ["left", "left-start", "right-end", "top-end", "bottom-end"],
        right: ["right-end", "right-start", "left", "top", "bottom"],
        "right-start": ["right", "right-end", "left-start", "top-start", "bottom-start"],
        "right-end": ["right", "right-start", "left-end", "top-end", "bottom-end"],
      },
      wx = r4(hD.create(gV)).withConfig({
        displayName: "MotionCard",
        componentId: "sc-1xn138w-0",
      })`will-change:transform;`,
      wC = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M = (0, e5.c)(48);
        M[0] !== e
          ? (({
              animate: r,
              arrow: n,
              arrowRef: o,
              arrowX: i,
              arrowY: s,
              children: a,
              originX: l,
              originY: d,
              padding: c,
              placement: u,
              radius: h,
              scheme: p,
              shadow: g,
              style: m,
              ...f
            } = e),
            (M[0] = e),
            (M[1] = r),
            (M[2] = n),
            (M[3] = o),
            (M[4] = i),
            (M[5] = s),
            (M[6] = a),
            (M[7] = l),
            (M[8] = d),
            (M[9] = c),
            (M[10] = u),
            (M[11] = h),
            (M[12] = f),
            (M[13] = p),
            (M[14] = g),
            (M[15] = m))
          : ((r = M[1]),
            (n = M[2]),
            (o = M[3]),
            (i = M[4]),
            (s = M[5]),
            (a = M[6]),
            (l = M[7]),
            (d = M[8]),
            (c = M[9]),
            (u = M[10]),
            (h = M[11]),
            (f = M[12]),
            (p = M[13]),
            (g = M[14]),
            (m = M[15]));
        let j = r ? "transform" : void 0;
        M[16] !== l || M[17] !== d || M[18] !== m || M[19] !== j
          ? ((w = { originX: l, originY: d, willChange: j, ...m }),
            (M[16] = l),
            (M[17] = d),
            (M[18] = m),
            (M[19] = j),
            (M[20] = w))
          : (w = M[20]);
        let L = w,
          S = null !== i ? i : void 0,
          V = null !== s ? s : void 0;
        M[21] !== S || M[22] !== V
          ? ((v = { left: S, top: V, right: void 0, bottom: void 0 }), (M[21] = S), (M[22] = V), (M[23] = v))
          : (v = M[23]);
        let R = v,
          H = f;
        return (
          M[24] !== r ? ((b = r ? ["hidden", "initial"] : void 0), (M[24] = r), (M[25] = b)) : (b = M[25]),
          M[26] !== r ? ((y = r ? ["visible", "scaleIn"] : void 0), (M[26] = r), (M[27] = y)) : (y = M[27]),
          M[28] !== r ? ((x = r ? ["hidden", "scaleOut"] : void 0), (M[28] = r), (M[29] = x)) : (x = M[29]),
          M[30] !== n || M[31] !== o || M[32] !== R
            ? ((C = n && (0, e0.jsx)(mi, { ref: o, style: R, width: 15, height: 6, radius: 2 })),
              (M[30] = n),
              (M[31] = o),
              (M[32] = R),
              (M[33] = C))
            : (C = M[33]),
          M[34] !== a ||
          M[35] !== c ||
          M[36] !== u ||
          M[37] !== h ||
          M[38] !== t ||
          M[39] !== L ||
          M[40] !== p ||
          M[41] !== g ||
          M[42] !== H ||
          M[43] !== b ||
          M[44] !== y ||
          M[45] !== x ||
          M[46] !== C
            ? ((k = (0, e0.jsxs)(wx, {
                "data-ui": "Tooltip__card",
                ...H,
                "data-placement": u,
                padding: c,
                radius: h,
                ref: t,
                scheme: p,
                shadow: g,
                style: L,
                variants: fW,
                transition: fO,
                initial: b,
                animate: y,
                exit: x,
                children: [a, C],
              })),
              (M[34] = a),
              (M[35] = c),
              (M[36] = u),
              (M[37] = h),
              (M[38] = t),
              (M[39] = L),
              (M[40] = p),
              (M[41] = g),
              (M[42] = H),
              (M[43] = b),
              (M[44] = y),
              (M[45] = x),
              (M[46] = C),
              (M[47] = k))
            : (k = M[47]),
          k
        );
      });
    wC.displayName = "ForwardRef(TooltipCard)";
    let wk = f3("@sanity/ui/context/tooltipDelayGroup", null);
    function wM(e) {
      let t,
        r,
        n = (0, e5.c)(9),
        { children: o, delay: i } = e,
        [s, a] = wb(!1),
        [l, d] = wb(null),
        c = "number" == typeof i ? i : i?.open || 0,
        u = "number" == typeof i ? i : i?.close || 0,
        h = s ? 1 : c;
      n[0] !== u || n[1] !== l || n[2] !== a || n[3] !== d || n[4] !== h
        ? ((t = { setIsGroupActive: a, openTooltipId: l, setOpenTooltipId: d, openDelay: h, closeDelay: u }),
          (n[0] = u),
          (n[1] = l),
          (n[2] = a),
          (n[3] = d),
          (n[4] = h),
          (n[5] = t))
        : (t = n[5]);
      let f = t;
      return (
        n[6] !== o || n[7] !== f
          ? ((r = (0, e0.jsx)(wk.Provider, { value: f, children: o })), (n[6] = o), (n[7] = f), (n[8] = r))
          : (r = n[8]),
        r
      );
    }
    function wj() {
      return (0, e2.useContext)(wk);
    }
    wM.displayName = "TooltipDelayGroupProvider";
    let wL = r4(mx).withConfig({ displayName: "StyledTooltip", componentId: "sc-13f2zvh-0" })`pointer-events:none;`,
      wS = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M,
          j,
          L,
          S,
          V,
          R,
          H,
          $,
          T,
          E,
          B,
          P,
          I,
          A,
          W,
          z,
          O,
          _,
          Z,
          D,
          N,
          F,
          U,
          G,
          Y,
          X,
          q,
          K,
          J = (0, e5.c)(137),
          Q = mc(),
          { layer: ee } = po();
        J[0] !== e
          ? (({
              animate: h,
              arrow: f,
              boundaryElement: r,
              children: i,
              content: s,
              disabled: l,
              fallbackPlacements: n,
              padding: p,
              placement: g,
              portal: d,
              radius: m,
              scheme: u,
              shadow: w,
              zOffset: o,
              delay: a,
              ...c
            } = e),
            (J[0] = e),
            (J[1] = r),
            (J[2] = n),
            (J[3] = o),
            (J[4] = i),
            (J[5] = s),
            (J[6] = a),
            (J[7] = l),
            (J[8] = d),
            (J[9] = c),
            (J[10] = u),
            (J[11] = h),
            (J[12] = f),
            (J[13] = p),
            (J[14] = g),
            (J[15] = m),
            (J[16] = w))
          : ((r = J[1]),
            (n = J[2]),
            (o = J[3]),
            (i = J[4]),
            (s = J[5]),
            (a = J[6]),
            (l = J[7]),
            (d = J[8]),
            (c = J[9]),
            (u = J[10]),
            (h = J[11]),
            (f = J[12]),
            (p = J[13]),
            (g = J[14]),
            (m = J[15]),
            (w = J[16]));
        let et = void 0 !== h && h,
          er = void 0 !== f && f,
          en = void 0 === p ? 2 : p,
          eo = void 0 === g ? "bottom" : g,
          ei = void 0 === m ? 2 : m,
          es = void 0 === w ? 2 : w,
          ea = r ?? Q?.element,
          el = n ?? wy[e.placement ?? "bottom"],
          ed = o ?? ee.tooltip.zOffset,
          ec = !g_() && et;
        J[17] !== el ? ((v = fQ(el)), (J[17] = el), (J[18] = v)) : (v = J[18]);
        let eu = v,
          eh = (0, e2.useRef)(null),
          [ef, ep] = (0, e2.useState)(null),
          eg = (0, e2.useRef)(null),
          [em, ew] = (0, e2.useState)(0);
        (J[19] === Symbol.for("react.memo_cache_sentinel") ? ((b = () => eh.current), (J[19] = b)) : (b = J[19]),
          (0, e2.useImperativeHandle)(t, b));
        let ev = mj(),
          eb = "string" == typeof d ? ev.elements?.[d] || null : ev.element;
        J[20] !== ec || J[21] !== er || J[22] !== ea || J[23] !== eu
          ? ((y = {
              animate: ec,
              arrowProp: er,
              arrowRef: eg,
              boundaryElement: ea,
              fallbackPlacements: eu,
              rootBoundary: "viewport",
            }),
            (J[20] = ec),
            (J[21] = er),
            (J[22] = ea),
            (J[23] = eu),
            (J[24] = y))
          : (y = J[24]);
        let ey = (function (e) {
          let t,
            r = (0, e5.c)(17),
            { animate: n, arrowProp: o, arrowRef: i, boundaryElement: s, fallbackPlacements: a, rootBoundary: l } = e;
          if (r[0] !== n || r[1] !== o || r[2] !== i || r[3] !== s || r[4] !== a || r[5] !== l) {
            let e, d, c;
            t = [];
            let u = s || void 0;
            (r[7] !== a || r[8] !== l || r[9] !== u
              ? ((e = (0, sY.flip)({ boundary: u, fallbackPlacements: a, padding: 4, rootBoundary: l })),
                (r[7] = a),
                (r[8] = l),
                (r[9] = u),
                (r[10] = e))
              : (e = r[10]),
              t.push(e),
              r[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((d = (0, sY.offset)({ mainAxis: 4 })), (r[11] = d))
                : (d = r[11]),
              t.push(d));
            let h = s || void 0;
            if (
              (r[12] !== l || r[13] !== h
                ? ((c = (0, sY.shift)({ boundary: h, rootBoundary: l, padding: 4 })),
                  (r[12] = l),
                  (r[13] = h),
                  (r[14] = c))
                : (c = r[14]),
              t.push(c),
              o)
            ) {
              let e;
              (r[15] !== i ? ((e = (0, sY.arrow)({ element: i, padding: 4 })), (r[15] = i), (r[16] = e)) : (e = r[16]),
                t.push(e));
            }
            (n && t.push(g3), (r[0] = n), (r[1] = o), (r[2] = i), (r[3] = s), (r[4] = a), (r[5] = l), (r[6] = t));
          } else t = r[6];
          return t;
        })(y);
        (J[25] !== ef ? ((x = { reference: ef }), (J[25] = ef), (J[26] = x)) : (x = J[26]),
          J[27] !== ey || J[28] !== eo || J[29] !== x
            ? ((C = { middleware: ey, placement: eo, whileElementsMounted: sG.autoUpdate, elements: x }),
              (J[27] = ey),
              (J[28] = eo),
              (J[29] = x),
              (J[30] = C))
            : (C = J[30]));
        let { floatingStyles: ex, placement: eC, middlewareData: ek, refs: eM, update: ej } = (0, sY.useFloating)(C),
          eL = ek.arrow?.x,
          eS = ek.arrow?.y,
          eV = ek["@sanity/ui/origin"]?.originX,
          eR = ek["@sanity/ui/origin"]?.originY,
          eH = (0, e2.useId)(),
          [e$, eT] = wb(!1),
          eE = wj();
        J[31] !== eE ? ((k = eE || {}), (J[31] = eE), (J[32] = k)) : (k = J[32]);
        let { setIsGroupActive: eB, setOpenTooltipId: eP } = k,
          eI = e$ || eE?.openTooltipId === eH,
          eA = null !== eE,
          eW = "number" == typeof a ? a : a?.open || 0,
          ez = "number" == typeof a ? a : a?.close || 0,
          eO = eA ? eE.openDelay : eW,
          e_ = eA ? eE.closeDelay : ez;
        J[33] !== e_ || J[34] !== eA || J[35] !== eO || J[36] !== eB || J[37] !== eT || J[38] !== eP || J[39] !== eH
          ? ((M = (e, t) => {
              if (eA)
                if (e) {
                  let r = t ? 0 : eO;
                  (eB?.(e, r), eP?.(eH, r));
                } else {
                  let r = e_ > 200 ? e_ : 200;
                  (eB?.(e, r), eP?.(null, t ? 0 : e_));
                }
              else eT(e, t ? 0 : e ? eO : e_);
            }),
            (J[33] = e_),
            (J[34] = eA),
            (J[35] = eO),
            (J[36] = eB),
            (J[37] = eT),
            (J[38] = eP),
            (J[39] = eH),
            (J[40] = M))
          : (M = J[40]);
        let eZ = M;
        J[41] !== i?.props || J[42] !== eZ
          ? ((j = (e) => {
              (eZ(!1), i?.props?.onBlur?.(e));
            }),
            (J[41] = i?.props),
            (J[42] = eZ),
            (J[43] = j))
          : (j = J[43]);
        let eD = j;
        J[44] !== i?.props || J[45] !== eZ
          ? ((L = (e) => {
              (eZ(!1, !0), i?.props.onClick?.(e));
            }),
            (J[44] = i?.props),
            (J[45] = eZ),
            (J[46] = L))
          : (L = J[46]);
        let eN = L;
        J[47] !== i?.props || J[48] !== eZ
          ? ((S = (e) => {
              (eZ(!1, !0), i?.props.onContextMenu?.(e));
            }),
            (J[47] = i?.props),
            (J[48] = eZ),
            (J[49] = S))
          : (S = J[49]);
        let eF = S;
        J[50] !== i?.props || J[51] !== eZ
          ? ((V = (e) => {
              (eZ(!0), i?.props?.onFocus?.(e));
            }),
            (J[50] = i?.props),
            (J[51] = eZ),
            (J[52] = V))
          : (V = J[52]);
        let eU = V;
        J[53] !== i?.props || J[54] !== eZ
          ? ((R = (e) => {
              (eZ(!0), i?.props?.onMouseEnter?.(e));
            }),
            (J[53] = i?.props),
            (J[54] = eZ),
            (J[55] = R))
          : (R = J[55]);
        let eG = R;
        J[56] !== i?.props || J[57] !== eZ
          ? ((H = (e) => {
              (eZ(!1), i?.props?.onMouseLeave?.(e));
            }),
            (J[56] = i?.props),
            (J[57] = eZ),
            (J[58] = H))
          : (H = J[58]);
        let eY = H;
        (J[59] !== eZ || J[60] !== eA || J[61] !== ef || J[62] !== eI
          ? (($ = { handleIsOpenChange: eZ, referenceElement: ef, showTooltip: eI, isInsideGroup: eA }),
            (J[59] = eZ),
            (J[60] = eA),
            (J[61] = ef),
            (J[62] = eI),
            (J[63] = $))
          : ($ = J[63]),
          (function (e) {
            let t,
              r,
              n,
              o = (0, e5.c)(10),
              { handleIsOpenChange: i, referenceElement: s, showTooltip: a, isInsideGroup: l } = e;
            o[0] !== i || o[1] !== s
              ? ((t = (e, t) => {
                  s && (s === e || (e instanceof Node && s.contains(e)) || (i(!1), t()));
                }),
                (o[0] = i),
                (o[1] = s),
                (o[2] = t))
              : (t = o[2]);
            let d = fB(t);
            (o[3] !== l || o[4] !== d || o[5] !== a
              ? ((r = () => {
                  if (!a || l) return;
                  let e = (t) => {
                    d(t.target, () => window.removeEventListener("mousemove", e));
                  };
                  return (window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e));
                }),
                (o[3] = l),
                (o[4] = d),
                (o[5] = a),
                (o[6] = r))
              : (r = o[6]),
              o[7] !== l || o[8] !== a ? ((n = [l, a]), (o[7] = l), (o[8] = a), (o[9] = n)) : (n = o[9]),
              (0, e2.useEffect)(r, n));
          })($),
          J[64] !== l || J[65] !== eZ || J[66] !== eI
            ? ((T = () => {
                l && eI && eZ(!1);
              }),
              (E = [l, eZ, eI]),
              (J[64] = l),
              (J[65] = eZ),
              (J[66] = eI),
              (J[67] = T),
              (J[68] = E))
            : ((T = J[67]), (E = J[68])),
          (0, e2.useEffect)(T, E),
          J[69] !== s || J[70] !== eZ || J[71] !== eI
            ? ((B = () => {
                !s && eI && eZ(!1);
              }),
              (P = [s, eZ, eI]),
              (J[69] = s),
              (J[70] = eZ),
              (J[71] = eI),
              (J[72] = B),
              (J[73] = P))
            : ((B = J[72]), (P = J[73])),
          (0, e2.useEffect)(B, P),
          J[74] !== eZ || J[75] !== eI
            ? ((I = () => {
                if (!eI) return;
                let e = function (e) {
                  "Escape" === e.key && eZ(!1, !0);
                };
                return (
                  window.addEventListener("keydown", e),
                  () => {
                    window.removeEventListener("keydown", e);
                  }
                );
              }),
              (A = [eZ, eI]),
              (J[74] = eZ),
              (J[75] = eI),
              (J[76] = I),
              (J[77] = A))
            : ((I = J[76]), (A = J[77])),
          (0, e2.useEffect)(I, A),
          J[78] !== ea || J[79] !== eb?.offsetWidth
            ? ((W = () => {
                ew(Math.min(...(ea ? [ea.offsetWidth] : []), eb?.offsetWidth || document.body.offsetWidth) - 8);
              }),
              (J[78] = ea),
              (J[79] = eb?.offsetWidth),
              (J[80] = W))
            : (W = J[80]),
          J[81] !== ea || J[82] !== eb ? ((z = [ea, eb]), (J[81] = ea), (J[82] = eb), (J[83] = z)) : (z = J[83]),
          (0, e2.useLayoutEffect)(W, z),
          J[84] !== ej
            ? ((O = (e) => {
                ((eg.current = e), ej());
              }),
              (J[84] = ej),
              (J[85] = O))
            : (O = J[85]));
        let eX = O;
        J[86] !== eM
          ? ((_ = (e) => {
              ((eh.current = e), eM.setFloating(e));
            }),
            (J[86] = eM),
            (J[87] = _))
          : (_ = J[87]);
        let eq = _;
        e: {
          let e;
          if (!i) {
            Z = null;
            break e;
          }
          (J[88] !== i || J[89] !== eD || J[90] !== eN || J[91] !== eF || J[92] !== eU || J[93] !== eG || J[94] !== eY
            ? ((e = (0, e2.cloneElement)(i, {
                onBlur: eD,
                onFocus: eU,
                onMouseEnter: eG,
                onMouseLeave: eY,
                onClick: eN,
                onContextMenu: eF,
                ref: ep,
              })),
              (J[88] = i),
              (J[89] = eD),
              (J[90] = eN),
              (J[91] = eF),
              (J[92] = eU),
              (J[93] = eG),
              (J[94] = eY),
              (J[95] = e))
            : (e = J[95]),
            (Z = e));
        }
        let eK = Z;
        if (
          (J[96] !== i ? ((D = i ? mI(i) : null), (J[96] = i), (J[97] = D)) : (D = J[97]),
          J[98] !== ef
            ? ((N = () => ef), (F = [ef]), (J[98] = ef), (J[99] = N), (J[100] = F))
            : ((N = J[99]), (F = J[100])),
          (0, e2.useImperativeHandle)(D, N, F),
          !eK)
        ) {
          let e;
          return (
            J[101] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, e0.jsx)(e0.Fragment, {})), (J[101] = e))
              : (e = J[101]),
            e
          );
        }
        if (l) return eK;
        let eJ = em > 0 ? `${em}px` : void 0;
        (J[102] !== ex || J[103] !== eJ
          ? ((U = { ...ex, maxWidth: eJ }), (J[102] = ex), (J[103] = eJ), (J[104] = U))
          : (U = J[104]),
          J[105] !== ec ||
          J[106] !== er ||
          J[107] !== eL ||
          J[108] !== eS ||
          J[109] !== s ||
          J[110] !== eV ||
          J[111] !== eR ||
          J[112] !== en ||
          J[113] !== eC ||
          J[114] !== ei ||
          J[115] !== c ||
          J[116] !== u ||
          J[117] !== eX ||
          J[118] !== eq ||
          J[119] !== es
            ? ((G = (0, e0.jsx)(wC, {
                ...c,
                animate: ec,
                arrow: er,
                arrowRef: eX,
                arrowX: eL,
                arrowY: eS,
                originX: eV,
                originY: eR,
                padding: en,
                placement: eC,
                radius: ei,
                ref: eq,
                scheme: u,
                shadow: es,
                children: s,
              })),
              (J[105] = ec),
              (J[106] = er),
              (J[107] = eL),
              (J[108] = eS),
              (J[109] = s),
              (J[110] = eV),
              (J[111] = eR),
              (J[112] = en),
              (J[113] = eC),
              (J[114] = ei),
              (J[115] = c),
              (J[116] = u),
              (J[117] = eX),
              (J[118] = eq),
              (J[119] = es),
              (J[120] = G))
            : (G = J[120]),
          J[121] !== c || J[122] !== eq || J[123] !== U || J[124] !== G || J[125] !== ed
            ? ((Y = (0, e0.jsx)(wL, { "data-ui": "Tooltip", ...c, ref: eq, style: U, zOffset: ed, children: G })),
              (J[121] = c),
              (J[122] = eq),
              (J[123] = U),
              (J[124] = G),
              (J[125] = ed),
              (J[126] = Y))
            : (Y = J[126]));
        let eQ = Y;
        J[127] !== d || J[128] !== eI || J[129] !== eQ
          ? ((X =
              eI && (d ? (0, e0.jsx)(mL, { __unstable_name: "string" == typeof d ? d : void 0, children: eQ }) : eQ)),
            (J[127] = d),
            (J[128] = eI),
            (J[129] = eQ),
            (J[130] = X))
          : (X = J[130]);
        let e1 = X;
        return (
          J[131] !== ec || J[132] !== e1
            ? ((q = ec ? (0, e0.jsx)(hJ, { children: e1 }) : e1), (J[131] = ec), (J[132] = e1), (J[133] = q))
            : (q = J[133]),
          J[134] !== eK || J[135] !== q
            ? ((K = (0, e0.jsxs)(e0.Fragment, { children: [q, eK] })), (J[134] = eK), (J[135] = q), (J[136] = K))
            : (K = J[136]),
          K
        );
      });
    wS.displayName = "ForwardRef(Tooltip)";
    let wV = r4.kbd.withConfig({
        displayName: "StyledHotkeys",
        componentId: "sc-b37mge-0",
      })`font:inherit;padding:1px;&:not([hidden]){display:block;}`,
      wR = r4(g9).withConfig({ displayName: "Key", componentId: "sc-b37mge-1" })`&:not([hidden]){display:block;}`,
      wH = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h = (0, e5.c)(26);
        h[0] !== e
          ? (({ fontSize: r, keys: n, padding: o, radius: i, space: a, ...s } = e),
            (h[0] = e),
            (h[1] = r),
            (h[2] = n),
            (h[3] = o),
            (h[4] = i),
            (h[5] = s),
            (h[6] = a))
          : ((r = h[1]), (n = h[2]), (o = h[3]), (i = h[4]), (s = h[5]), (a = h[6]));
        let f = void 0 === a ? 0.5 : a;
        h[7] !== f ? ((l = fQ(f)), (h[7] = f), (h[8] = l)) : (l = h[8]);
        let p = l;
        if (!n || 0 === n.length) {
          let e;
          return (
            h[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, e0.jsx)(e0.Fragment, {})), (h[9] = e))
              : (e = h[9]),
            e
          );
        }
        if (h[10] !== r || h[11] !== n || h[12] !== o || h[13] !== i) {
          let e;
          (h[15] !== r || h[16] !== o || h[17] !== i
            ? ((e = (e, t) => (0, e0.jsx)(wR, { fontSize: r, padding: o, radius: i, children: e }, t)),
              (h[15] = r),
              (h[16] = o),
              (h[17] = i),
              (h[18] = e))
            : (e = h[18]),
            (d = n.map(e)),
            (h[10] = r),
            (h[11] = n),
            (h[12] = o),
            (h[13] = i),
            (h[14] = d));
        } else d = h[14];
        return (
          h[19] !== p || h[20] !== d
            ? ((c = (0, e0.jsx)(g6, { as: "span", space: p, children: d })), (h[19] = p), (h[20] = d), (h[21] = c))
            : (c = h[21]),
          h[22] !== t || h[23] !== s || h[24] !== c
            ? ((u = (0, e0.jsx)(wV, { "data-ui": "Hotkeys", ...s, ref: t, children: c })),
              (h[22] = t),
              (h[23] = s),
              (h[24] = c),
              (h[25] = u))
            : (u = h[25]),
          u
        );
      });
    wH.displayName = "ForwardRef(Hotkeys)";
    let w$ = f3("@sanity/ui/context/menu", null);
    function wT(e) {
      return (fD(e) && "true" !== e.getAttribute("data-disabled")) || (fF(e) && !e.disabled);
    }
    function wE(e) {
      return e.filter(wT);
    }
    let wB = [];
    function wP() {}
    let wI = r4(gh).withConfig({ displayName: "StyledMenu", componentId: "sc-xt0tnv-0" })`outline:none;overflow:auto;`,
      wA = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v,
          b,
          y,
          x,
          C,
          k,
          M,
          j = (0, e5.c)(49);
        if (j[0] !== e) {
          let {
            children: t,
            focusFirst: p,
            focusLast: g,
            onClickOutside: m,
            onEscape: w,
            onItemClick: v,
            onItemSelect: b,
            onKeyDown: y,
            originElement: x,
            padding: C,
            registerElement: k,
            shouldFocus: M,
            space: L,
            ...S
          } = e;
          ((n = t),
            (o = m),
            (i = w),
            (s = v),
            (a = b),
            (l = y),
            (d = x),
            (h = C),
            (c = k),
            (r = M),
            (f = L),
            (u = S),
            (j[0] = e),
            (j[1] = r),
            (j[2] = n),
            (j[3] = o),
            (j[4] = i),
            (j[5] = s),
            (j[6] = a),
            (j[7] = l),
            (j[8] = d),
            (j[9] = c),
            (j[10] = u),
            (j[11] = h),
            (j[12] = f));
        } else
          ((r = j[1]),
            (n = j[2]),
            (o = j[3]),
            (i = j[4]),
            (s = j[5]),
            (a = j[6]),
            (l = j[7]),
            (d = j[8]),
            (c = j[9]),
            (u = j[10]),
            (h = j[11]),
            (f = j[12]));
        let L = void 0 === h ? 1 : h,
          S = void 0 === f ? 1 : f,
          V = r ?? ((e.focusFirst && "first") || (e.focusLast && "last") || null),
          R = (0, e2.useRef)(null);
        (j[13] === Symbol.for("react.memo_cache_sentinel") ? ((p = () => R.current), (j[13] = p)) : (p = j[13]),
          (0, e2.useImperativeHandle)(t, p));
        let { isTopLayer: H } = mv();
        j[14] !== l || j[15] !== d || j[16] !== V
          ? ((g = { onKeyDown: l, originElement: d, shouldFocus: V, rootElementRef: R }),
            (j[14] = l),
            (j[15] = d),
            (j[16] = V),
            (j[17] = g))
          : (g = j[17]);
        let {
            activeElement: $,
            activeIndex: T,
            handleItemMouseEnter: E,
            handleItemMouseLeave: B,
            handleKeyDown: P,
            mount: I,
          } = (function (e) {
            let t,
              r,
              n,
              o,
              i,
              s,
              a,
              l,
              d,
              c = (0, e5.c)(21),
              { onKeyDown: u, originElement: h, shouldFocus: f, rootElementRef: p } = e;
            c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (c[0] = t)) : (t = c[0]);
            let g = (0, e2.useRef)(t),
              [m, w] = (0, e2.useState)(-1),
              v = (0, e2.useRef)(m),
              [b, y] = (0, e2.useState)(null);
            c[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (e) => {
                  (w(e), (v.current = e), y(g.current[e] || null));
                }),
                (c[1] = r))
              : (r = c[1]);
            let x = r;
            c[2] !== p
              ? ((n = (e, t) =>
                  e
                    ? (-1 === g.current.indexOf(e) &&
                        (g.current.push(e),
                        (function (e, t) {
                          if (!e) return;
                          let r = new WeakMap();
                          for (let n of t)
                            r.set(
                              n,
                              (function (e, t) {
                                let r = [],
                                  n = t;
                                for (; n !== e; ) {
                                  let t = n.parentElement;
                                  if (!t) break;
                                  let o = Array.from(t.childNodes).indexOf(n);
                                  if ((r.unshift(o), t === e)) break;
                                  n = t;
                                }
                                return r;
                              })(e, n),
                            );
                          t.sort((e, t) => {
                            let n = r.get(e) || wB,
                              o = r.get(t) || wB,
                              i = Math.max(n.length, o.length);
                            for (let e = 0; e < i; e += 1) {
                              let t = n[e] || -1,
                                r = o[e] || -1;
                              if (t !== r) return t - r;
                            }
                            return 0;
                          });
                        })(p.current, g.current)),
                      t && x(g.current.indexOf(e)),
                      () => {
                        let t = g.current.indexOf(e);
                        t > -1 && g.current.splice(t, 1);
                      })
                    : wP),
                (c[2] = p),
                (c[3] = n))
              : (n = c[3]);
            let C = n;
            c[4] !== u || c[5] !== h
              ? ((o = (e) => {
                  if ("Tab" === e.key) {
                    h && h.focus();
                    return;
                  }
                  if ("Home" === e.key) {
                    (e.preventDefault(), e.stopPropagation());
                    let t = wE(g.current)[0];
                    if (!t) return;
                    x(g.current.indexOf(t));
                    return;
                  }
                  if ("End" === e.key) {
                    (e.preventDefault(), e.stopPropagation());
                    let t = wE(g.current),
                      r = t[t.length - 1];
                    if (!r) return;
                    x(g.current.indexOf(r));
                    return;
                  }
                  if ("ArrowUp" === e.key) {
                    (e.preventDefault(), e.stopPropagation());
                    let t = wE(g.current),
                      r = t.length;
                    if (0 === r) return;
                    let n = g.current[v.current],
                      o = t.indexOf(n),
                      i = t[(o = (o - 1 + r) % r)];
                    x(g.current.indexOf(i));
                    return;
                  }
                  if ("ArrowDown" === e.key) {
                    (e.preventDefault(), e.stopPropagation());
                    let t = wE(g.current),
                      r = t.length;
                    if (0 === r) return;
                    let n = g.current[v.current],
                      o = t.indexOf(n),
                      i = t[(o = (o + 1) % r)];
                    x(g.current.indexOf(i));
                    return;
                  }
                  u && u(e);
                }),
                (c[4] = u),
                (c[5] = h),
                (c[6] = o))
              : (o = c[6]);
            let k = o;
            c[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (e) => {
                  let t = e.currentTarget;
                  x(g.current.indexOf(t));
                }),
                (c[7] = i))
              : (i = c[7]);
            let M = i;
            c[8] !== p
              ? ((s = () => {
                  (x(-2), p.current?.focus());
                }),
                (c[8] = p),
                (c[9] = s))
              : (s = c[9]);
            let j = s;
            return (
              c[10] !== m || c[11] !== p || c[12] !== f
                ? ((a = () => {
                    if (!p.current) return;
                    let e = requestAnimationFrame(() => {
                      if (-1 === m) {
                        if ("first" === f) {
                          let e = wE(g.current)[0];
                          e && x(g.current.indexOf(e));
                        }
                        if ("last" === f) {
                          let e = wE(g.current),
                            t = e[e.length - 1];
                          t && x(g.current.indexOf(t));
                        }
                        return;
                      }
                      (g.current[m] || null)?.focus();
                    });
                    return () => cancelAnimationFrame(e);
                  }),
                  (l = [m, p, x, f]),
                  (c[10] = m),
                  (c[11] = p),
                  (c[12] = f),
                  (c[13] = a),
                  (c[14] = l))
                : ((a = c[13]), (l = c[14])),
              (0, e2.useEffect)(a, l),
              c[15] !== b || c[16] !== m || c[17] !== j || c[18] !== k || c[19] !== C
                ? ((d = {
                    activeElement: b,
                    activeIndex: m,
                    handleItemMouseEnter: M,
                    handleItemMouseLeave: j,
                    handleKeyDown: k,
                    mount: C,
                  }),
                  (c[15] = b),
                  (c[16] = m),
                  (c[17] = j),
                  (c[18] = k),
                  (c[19] = C),
                  (c[20] = d))
                : (d = c[20]),
              d
            );
          })(g),
          A = (0, e2.useRef)(null);
        j[18] !== c
          ? ((m = (e) => {
              (A.current && (A.current(), (A.current = null)),
                (R.current = e),
                R.current && c && (A.current = c(R.current)));
            }),
            (j[18] = c),
            (j[19] = m))
          : (m = j[19]);
        let W = m;
        (j[20] !== T || j[21] !== a
          ? ((w = () => {
              a && a(T);
            }),
            (v = [T, a]),
            (j[20] = T),
            (j[21] = a),
            (j[22] = w),
            (j[23] = v))
          : ((w = j[22]), (v = j[23])),
          (0, e2.useEffect)(w, v),
          j[24] === Symbol.for("react.memo_cache_sentinel") ? ((b = () => [R.current]), (j[24] = b)) : (b = j[24]),
          gR(H && o, b),
          j[25] !== H || j[26] !== i
            ? ((y = (e) => {
                H && "Escape" === e.key && (e.stopPropagation(), i && i());
              }),
              (j[25] = H),
              (j[26] = i),
              (j[27] = y))
            : (y = j[27]),
          gP(y),
          j[28] !== $ ||
          j[29] !== E ||
          j[30] !== B ||
          j[31] !== I ||
          j[32] !== o ||
          j[33] !== i ||
          j[34] !== s ||
          j[35] !== c
            ? ((x = {
                version: 2,
                activeElement: $,
                mount: I,
                onClickOutside: o,
                onEscape: i,
                onItemClick: s,
                onItemMouseEnter: E,
                onItemMouseLeave: B,
                registerElement: c,
              }),
              (j[28] = $),
              (j[29] = E),
              (j[30] = B),
              (j[31] = I),
              (j[32] = o),
              (j[33] = i),
              (j[34] = s),
              (j[35] = c),
              (j[36] = x))
            : (x = j[36]));
        let z = x;
        return (
          j[37] !== n || j[38] !== S
            ? ((C = (0, e0.jsx)(m5, { space: S, children: n })), (j[37] = n), (j[38] = S), (j[39] = C))
            : (C = j[39]),
          j[40] !== P || j[41] !== W || j[42] !== L || j[43] !== u || j[44] !== C
            ? ((k = (0, e0.jsx)(wI, {
                "data-ui": "Menu",
                ...u,
                onKeyDown: P,
                padding: L,
                ref: W,
                role: "menu",
                tabIndex: -1,
                children: C,
              })),
              (j[40] = P),
              (j[41] = W),
              (j[42] = L),
              (j[43] = u),
              (j[44] = C),
              (j[45] = k))
            : (k = j[45]),
          j[46] !== k || j[47] !== z
            ? ((M = (0, e0.jsx)(w$.Provider, { value: z, children: k })), (j[46] = k), (j[47] = z), (j[48] = M))
            : (M = j[48]),
          M
        );
      });
    wA.displayName = "ForwardRef(Menu)";
    let wW = r4.hr.withConfig({
      displayName: "MenuDivider",
      componentId: "sc-uhoxwu-0",
    })`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;
    wW.displayName = "MenuDivider";
    let wz = r4(gh).withConfig({ displayName: "Selectable", componentId: "sc-1w01ang-0" })(
      p0,
      function () {
        return r6`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `;
      },
      function (e) {
        let { $tone: t } = e,
          { color: r, style: n } = Y(e.theme),
          o = r.selectable[t];
        return r6`
    ${gC(r, o.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${gC(r, o.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${gC(r, o.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${gC(r, o.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${gC(r, o.hovered)}
            }

            &:active {
              ${gC(r, o.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${gC(r, o.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${gC(r, o.pressed)}
        }

        &[data-selected] {
          ${gC(r, o.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${gC(r, o.hovered)}
            }
            &:active {
              ${gC(r, o.pressed)}
            }
          }
        }
      }
    }

    ${n?.card?.root}
  `;
      },
    );
    function wO() {
      let e = (0, e2.useContext)(w$);
      if (!e) throw Error("useMenu(): missing context value");
      if (!ml(e) || 2 !== e.version) throw Error("useMenu(): the context value is not compatible");
      return e;
    }
    function w_(e) {
      let t,
        r,
        n,
        o,
        i,
        s,
        a,
        l,
        d,
        c,
        u,
        h,
        f,
        p,
        g,
        m,
        w,
        v,
        b,
        y,
        x,
        C,
        k,
        M,
        j,
        L,
        S,
        V,
        R,
        H,
        $,
        T,
        E,
        B,
        P,
        I,
        A = (0, e5.c)(81);
      A[0] !== e
        ? (({
            as: a,
            children: r,
            fontSize: l,
            icon: t,
            menu: n,
            onClick: o,
            padding: d,
            popover: i,
            radius: c,
            space: u,
            text: f,
            tone: h,
            ...s
          } = e),
          (A[0] = e),
          (A[1] = t),
          (A[2] = r),
          (A[3] = n),
          (A[4] = o),
          (A[5] = i),
          (A[6] = s),
          (A[7] = a),
          (A[8] = l),
          (A[9] = d),
          (A[10] = c),
          (A[11] = u),
          (A[12] = h),
          (A[13] = f))
        : ((t = A[1]),
          (r = A[2]),
          (n = A[3]),
          (o = A[4]),
          (i = A[5]),
          (s = A[6]),
          (a = A[7]),
          (l = A[8]),
          (d = A[9]),
          (c = A[10]),
          (u = A[11]),
          (h = A[12]),
          (f = A[13]));
      let W = void 0 === a ? "button" : a,
        z = void 0 === l ? 1 : l,
        O = void 0 === d ? 3 : d,
        _ = void 0 === c ? 2 : c,
        Z = void 0 === u ? 3 : u,
        D = void 0 === h ? "default" : h,
        N = wO(),
        { scheme: F } = pt(),
        {
          activeElement: U,
          mount: G,
          onClickOutside: Y,
          onEscape: X,
          onItemClick: q,
          onItemMouseEnter: K,
          registerElement: J,
        } = N,
        Q = K ?? N.onItemMouseEnter,
        [ee, et] = (0, e2.useState)(null),
        [er, en] = (0, e2.useState)(!1),
        [eo, ei] = (0, e2.useState)(null),
        es = !!U && U === ee,
        [ea, el] = (0, e2.useState)(!1);
      A[14] !== Q
        ? ((p = (e) => {
            (el(!1), Q(e), en(!0));
          }),
          (A[14] = Q),
          (A[15] = p))
        : (p = A[15]);
      let ed = p;
      A[16] !== ee
        ? ((g = (e) => {
            "ArrowLeft" === e.key &&
              (e.stopPropagation(),
              en(!1),
              requestAnimationFrame(() => {
                ee?.focus();
              }));
          }),
          (A[16] = ee),
          (A[17] = g))
        : (g = A[17]);
      let ec = g;
      A[18] !== o
        ? ((m = (e) => {
            (o?.(e), ei("first"), en(!0));
          }),
          (A[18] = o),
          (A[19] = m))
        : (m = A[19]);
      let eu = m;
      A[20] !== q
        ? ((w = () => {
            (en(!1), q?.());
          }),
          (A[20] = q),
          (A[21] = w))
        : (w = A[21]);
      let eh = w;
      A[22] === Symbol.for("react.memo_cache_sentinel") ? ((v = () => el(!0)), (A[22] = v)) : (v = A[22]);
      let ef = v;
      (A[23] !== G || A[24] !== ee
        ? ((b = () => G(ee)), (y = [G, ee]), (A[23] = G), (A[24] = ee), (A[25] = b), (A[26] = y))
        : ((b = A[25]), (y = A[26])),
        (0, e2.useEffect)(b, y),
        A[27] !== es
          ? ((x = () => {
              es || en(!1);
            }),
            (C = [es]),
            (A[27] = es),
            (A[28] = x),
            (A[29] = C))
          : ((x = A[28]), (C = A[29])),
        (0, e2.useEffect)(x, C),
        A[30] !== er
          ? ((k = () => {
              er || el(!1);
            }),
            (M = [er]),
            (A[30] = er),
            (A[31] = k),
            (A[32] = M))
          : ((k = A[31]), (M = A[32])),
        (0, e2.useEffect)(k, M),
        A[33] !== eo
          ? ((j = () => {
              if (!eo) return;
              let e = requestAnimationFrame(() => ei(null));
              return () => cancelAnimationFrame(e);
            }),
            (L = [eo]),
            (A[33] = eo),
            (A[34] = j),
            (A[35] = L))
          : ((j = A[34]), (L = A[35])),
        (0, e2.useEffect)(j, L),
        A[36] !== r ||
        A[37] !== eh ||
        A[38] !== ec ||
        A[39] !== n ||
        A[40] !== Y ||
        A[41] !== X ||
        A[42] !== J ||
        A[43] !== eo
          ? ((S = (0, e0.jsx)(wA, {
              ...n,
              onClickOutside: Y,
              onEscape: X,
              onItemClick: eh,
              onKeyDown: ec,
              onMouseEnter: ef,
              registerElement: J,
              shouldFocus: eo,
              children: r,
            })),
            (A[36] = r),
            (A[37] = eh),
            (A[38] = ec),
            (A[39] = n),
            (A[40] = Y),
            (A[41] = X),
            (A[42] = J),
            (A[43] = eo),
            (A[44] = S))
          : (S = A[44]));
      let ep = S;
      A[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = (e) => {
            let t = e.currentTarget;
            if (document.activeElement === t && "ArrowRight" === e.key) {
              (ei("first"), en(!0), el(!0));
              return;
            }
          }),
          (A[45] = V))
        : (V = A[45]);
      let eg = V,
        em = "button" === W ? ea : void 0,
        ew = "button" !== W ? ea : void 0,
        ev = !ea && es ? "" : void 0;
      A[46] !== _ ? ((R = fQ(_)), (A[46] = _), (A[47] = R)) : (R = A[47]);
      let eb = "button" === W ? "button" : void 0;
      return (
        A[48] !== t || A[49] !== z
          ? ((H =
              t &&
              (0, e0.jsxs)(gp, {
                size: z,
                children: [(0, e2.isValidElement)(t) && t, (0, ne.isValidElementType)(t) && (0, e0.jsx)(t, {})],
              })),
            (A[48] = t),
            (A[49] = z),
            (A[50] = H))
          : (H = A[50]),
        A[51] !== z || A[52] !== f
          ? (($ = (0, e0.jsx)(gh, {
              flex: 1,
              children: (0, e0.jsx)(gp, { size: z, textOverflow: "ellipsis", weight: "medium", children: f }),
            })),
            (A[51] = z),
            (A[52] = f),
            (A[53] = $))
          : ($ = A[53]),
        A[54] === Symbol.for("react.memo_cache_sentinel") ? ((T = (0, e0.jsx)(nO, {})), (A[54] = T)) : (T = A[54]),
        A[55] !== z ? ((E = (0, e0.jsx)(gp, { size: z, children: T })), (A[55] = z), (A[56] = E)) : (E = A[56]),
        A[57] !== O || A[58] !== Z || A[59] !== H || A[60] !== $ || A[61] !== E
          ? ((B = (0, e0.jsxs)(gv, { gap: Z, padding: O, children: [H, $, E] })),
            (A[57] = O),
            (A[58] = Z),
            (A[59] = H),
            (A[60] = $),
            (A[61] = E),
            (A[62] = B))
          : (B = A[62]),
        A[63] !== W ||
        A[64] !== eu ||
        A[65] !== ed ||
        A[66] !== s ||
        A[67] !== F ||
        A[68] !== em ||
        A[69] !== ew ||
        A[70] !== ev ||
        A[71] !== R ||
        A[72] !== eb ||
        A[73] !== B ||
        A[74] !== D
          ? ((P = (0, e0.jsx)(wz, {
              "data-as": W,
              "data-ui": "MenuGroup",
              forwardedAs: W,
              ...s,
              "aria-pressed": em,
              "data-pressed": ew,
              "data-selected": ev,
              $radius: R,
              $tone: D,
              $scheme: F,
              onClick: eu,
              onKeyDown: eg,
              onMouseEnter: ed,
              ref: et,
              tabIndex: -1,
              type: eb,
              children: B,
            })),
            (A[63] = W),
            (A[64] = eu),
            (A[65] = ed),
            (A[66] = s),
            (A[67] = F),
            (A[68] = em),
            (A[69] = ew),
            (A[70] = ev),
            (A[71] = R),
            (A[72] = eb),
            (A[73] = B),
            (A[74] = D),
            (A[75] = P))
          : (P = A[75]),
        A[76] !== ep || A[77] !== er || A[78] !== i || A[79] !== P
          ? ((I = (0, e0.jsx)(mD, { ...i, content: ep, "data-ui": "MenuGroup__popover", open: er, children: P })),
            (A[76] = ep),
            (A[77] = er),
            (A[78] = i),
            (A[79] = P),
            (A[80] = I))
          : (I = A[80]),
        I
      );
    }
    ((wz.displayName = "Selectable"), (w_.displayName = "MenuGroup"));
    let wZ = (0, e2.forwardRef)(function (e, t) {
      let r,
        n,
        o,
        i,
        s,
        a,
        l,
        d,
        c,
        u,
        h,
        f,
        p,
        g,
        m,
        w,
        v,
        b,
        y,
        x,
        C,
        k,
        M,
        j,
        L,
        S,
        V,
        R,
        H,
        $,
        T,
        E,
        B,
        P,
        I = (0, e5.c)(75);
      I[0] !== e
        ? (({
            as: w,
            children: o,
            disabled: i,
            fontSize: v,
            hotkeys: s,
            icon: r,
            iconRight: n,
            onClick: a,
            padding: b,
            paddingX: h,
            paddingY: f,
            paddingTop: u,
            paddingRight: c,
            paddingBottom: l,
            paddingLeft: d,
            pressed: p,
            radius: y,
            selected: m,
            space: x,
            text: k,
            tone: C,
            ...g
          } = e),
          (I[0] = e),
          (I[1] = r),
          (I[2] = n),
          (I[3] = o),
          (I[4] = i),
          (I[5] = s),
          (I[6] = a),
          (I[7] = l),
          (I[8] = d),
          (I[9] = c),
          (I[10] = u),
          (I[11] = h),
          (I[12] = f),
          (I[13] = p),
          (I[14] = g),
          (I[15] = m),
          (I[16] = w),
          (I[17] = v),
          (I[18] = b),
          (I[19] = y),
          (I[20] = x),
          (I[21] = C),
          (I[22] = k))
        : ((r = I[1]),
          (n = I[2]),
          (o = I[3]),
          (i = I[4]),
          (s = I[5]),
          (a = I[6]),
          (l = I[7]),
          (d = I[8]),
          (c = I[9]),
          (u = I[10]),
          (h = I[11]),
          (f = I[12]),
          (p = I[13]),
          (g = I[14]),
          (m = I[15]),
          (w = I[16]),
          (v = I[17]),
          (b = I[18]),
          (y = I[19]),
          (x = I[20]),
          (C = I[21]),
          (k = I[22]));
      let A = void 0 === w ? "button" : w,
        W = void 0 === v ? 1 : v,
        z = void 0 === b ? 3 : b,
        O = void 0 === y ? 2 : y,
        _ = void 0 === x ? 3 : x,
        Z = void 0 === C ? "default" : C,
        { scheme: D } = pt(),
        N = wO(),
        { activeElement: F, mount: U, onItemClick: G, onItemMouseEnter: Y, onItemMouseLeave: X } = N,
        q = Y ?? N.onItemMouseEnter,
        K = X ?? N.onItemMouseLeave,
        [J, Q] = (0, e2.useState)(null),
        ee = !!F && F === J,
        et = (0, e2.useRef)(null);
      (I[23] === Symbol.for("react.memo_cache_sentinel") ? ((M = () => et.current), (I[23] = M)) : (M = I[23]),
        (0, e2.useImperativeHandle)(t, M),
        I[24] !== U || I[25] !== J || I[26] !== m
          ? ((j = () => U(J, m)), (L = [U, J, m]), (I[24] = U), (I[25] = J), (I[26] = m), (I[27] = j), (I[28] = L))
          : ((j = I[27]), (L = I[28])),
        (0, e2.useEffect)(j, L),
        I[29] !== i || I[30] !== a || I[31] !== G
          ? ((S = (e) => {
              i || (a && a(e), G && G());
            }),
            (I[29] = i),
            (I[30] = a),
            (I[31] = G),
            (I[32] = S))
          : (S = I[32]));
      let er = S;
      I[33] !== z || I[34] !== l || I[35] !== d || I[36] !== c || I[37] !== u || I[38] !== h || I[39] !== f
        ? ((V = {
            padding: z,
            paddingX: h,
            paddingY: f,
            paddingTop: u,
            paddingRight: c,
            paddingBottom: l,
            paddingLeft: d,
          }),
          (I[33] = z),
          (I[34] = l),
          (I[35] = d),
          (I[36] = c),
          (I[37] = u),
          (I[38] = h),
          (I[39] = f),
          (I[40] = V))
        : (V = I[40]);
      let en = V;
      I[41] !== W ? ((R = fQ(W).map(wD)), (I[41] = W), (I[42] = R)) : (R = I[42]);
      let eo = R;
      I[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = (e) => {
            ((et.current = e), Q(e));
          }),
          (I[43] = H))
        : (H = I[43]);
      let ei = H,
        es = "button" !== A && p ? "" : void 0,
        ea = ee ? "" : void 0,
        el = i ? "" : void 0;
      (I[44] !== O ? (($ = fQ(O)), (I[44] = O), (I[45] = $)) : ($ = I[45]),
        I[46] === Symbol.for("react.memo_cache_sentinel") ? ((T = fQ(0)), (I[46] = T)) : (T = I[46]));
      let ed = i ? "default" : Z,
        ec = "button" === A ? "button" : void 0;
      return (
        I[47] !== r ||
        I[48] !== n ||
        I[49] !== W ||
        I[50] !== s ||
        I[51] !== eo ||
        I[52] !== en ||
        I[53] !== _ ||
        I[54] !== k
          ? ((E =
              (r || k || n) &&
              (0, e0.jsxs)(gv, {
                as: "span",
                gap: _,
                align: "center",
                ...en,
                children: [
                  r &&
                    (0, e0.jsxs)(gp, {
                      size: W,
                      children: [(0, e2.isValidElement)(r) && r, (0, ne.isValidElementType)(r) && (0, e0.jsx)(r, {})],
                    }),
                  k &&
                    (0, e0.jsx)(gh, {
                      flex: 1,
                      children: (0, e0.jsx)(gp, { size: W, textOverflow: "ellipsis", weight: "medium", children: k }),
                    }),
                  s && (0, e0.jsx)(wH, { fontSize: eo, keys: s, style: { marginTop: -4, marginBottom: -4 } }),
                  n &&
                    (0, e0.jsxs)(gp, {
                      size: W,
                      children: [(0, e2.isValidElement)(n) && n, (0, ne.isValidElementType)(n) && (0, e0.jsx)(n, {})],
                    }),
                ],
              })),
            (I[47] = r),
            (I[48] = n),
            (I[49] = W),
            (I[50] = s),
            (I[51] = eo),
            (I[52] = en),
            (I[53] = _),
            (I[54] = k),
            (I[55] = E))
          : (E = I[55]),
        I[56] !== o || I[57] !== en
          ? ((B = o && (0, e0.jsx)(gh, { as: "span", ...en, children: o })), (I[56] = o), (I[57] = en), (I[58] = B))
          : (B = I[58]),
        I[59] !== A ||
        I[60] !== i ||
        I[61] !== er ||
        I[62] !== q ||
        I[63] !== K ||
        I[64] !== g ||
        I[65] !== D ||
        I[66] !== es ||
        I[67] !== ea ||
        I[68] !== el ||
        I[69] !== $ ||
        I[70] !== ed ||
        I[71] !== ec ||
        I[72] !== E ||
        I[73] !== B
          ? ((P = (0, e0.jsxs)(wz, {
              "data-ui": "MenuItem",
              role: "menuitem",
              ...g,
              "data-pressed": es,
              "data-selected": ea,
              "data-disabled": el,
              forwardedAs: A,
              $radius: $,
              $padding: T,
              $tone: ed,
              $scheme: D,
              disabled: i,
              onClick: er,
              onMouseEnter: q,
              onMouseLeave: K,
              ref: ei,
              tabIndex: -1,
              type: ec,
              children: [E, B],
            })),
            (I[59] = A),
            (I[60] = i),
            (I[61] = er),
            (I[62] = q),
            (I[63] = K),
            (I[64] = g),
            (I[65] = D),
            (I[66] = es),
            (I[67] = ea),
            (I[68] = el),
            (I[69] = $),
            (I[70] = ed),
            (I[71] = ec),
            (I[72] = E),
            (I[73] = B),
            (I[74] = P))
          : (P = I[74]),
        P
      );
    });
    function wD(e) {
      return e - 1;
    }
    wZ.displayName = "ForwardRef(MenuItem)";
    let wN = r4(gL).withConfig({ displayName: "CustomButton", componentId: "sc-1kns779-0" })`max-width:100%;`,
      wF = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a,
          l,
          d,
          c,
          u,
          h,
          f,
          p,
          g,
          m,
          w,
          v = (0, e5.c)(30);
        v[0] !== e
          ? (({
              icon: n,
              id: o,
              focused: r,
              fontSize: c,
              label: i,
              onClick: s,
              onFocus: a,
              padding: u,
              selected: d,
              ...l
            } = e),
            (v[0] = e),
            (v[1] = r),
            (v[2] = n),
            (v[3] = o),
            (v[4] = i),
            (v[5] = s),
            (v[6] = a),
            (v[7] = l),
            (v[8] = d),
            (v[9] = c),
            (v[10] = u))
          : ((r = v[1]),
            (n = v[2]),
            (o = v[3]),
            (i = v[4]),
            (s = v[5]),
            (a = v[6]),
            (l = v[7]),
            (d = v[8]),
            (c = v[9]),
            (u = v[10]));
        let b = void 0 === c ? 1 : c,
          y = void 0 === u ? 2 : u,
          x = (0, e2.useRef)(null),
          C = (0, e2.useRef)(!1);
        (v[11] === Symbol.for("react.memo_cache_sentinel") ? ((h = () => x.current), (v[11] = h)) : (h = v[11]),
          (0, e2.useImperativeHandle)(t, h),
          v[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = () => {
                C.current = !1;
              }),
              (v[12] = f))
            : (f = v[12]));
        let k = f;
        v[13] !== a
          ? ((p = (e) => {
              ((C.current = !0), a && a(e));
            }),
            (v[13] = a),
            (v[14] = p))
          : (p = v[14]);
        let M = p;
        (v[15] !== r
          ? ((g = () => {
              r && !C.current && (x.current && x.current.focus(), (C.current = !0));
            }),
            (m = [r]),
            (v[15] = r),
            (v[16] = g),
            (v[17] = m))
          : ((g = v[16]), (m = v[17])),
          (0, e2.useEffect)(g, m));
        let j = d ? "true" : "false",
          L = d ? 0 : -1;
        return (
          v[18] !== b ||
          v[19] !== M ||
          v[20] !== n ||
          v[21] !== o ||
          v[22] !== i ||
          v[23] !== s ||
          v[24] !== y ||
          v[25] !== l ||
          v[26] !== d ||
          v[27] !== j ||
          v[28] !== L
            ? ((w = (0, e0.jsx)(wN, {
                "data-ui": "Tab",
                ...l,
                "aria-selected": j,
                fontSize: b,
                icon: n,
                id: o,
                mode: "bleed",
                onClick: s,
                onBlur: k,
                onFocus: M,
                padding: y,
                ref: x,
                role: "tab",
                selected: d,
                tabIndex: L,
                text: i,
                type: "button",
              })),
              (v[18] = b),
              (v[19] = M),
              (v[20] = n),
              (v[21] = o),
              (v[22] = i),
              (v[23] = s),
              (v[24] = y),
              (v[25] = l),
              (v[26] = d),
              (v[27] = j),
              (v[28] = L),
              (v[29] = w))
            : (w = v[29]),
          w
        );
      });
    wF.displayName = "ForwardRef(Tab)";
    let wU = r4(g6).withConfig({
        displayName: "CustomInline",
        componentId: "sc-5cm04m-0",
      })`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,
      wG = (0, e2.forwardRef)(function (e, t) {
        let r,
          n,
          o,
          i,
          s,
          a = (0, e5.c)(15);
        a[0] !== e ? (({ children: r, ...n } = e), (a[0] = e), (a[1] = r), (a[2] = n)) : ((r = a[1]), (n = a[2]));
        let [l, d] = (0, e2.useState)(-1);
        if (a[3] !== r || a[4] !== l) {
          let e,
            t = e2.Children.toArray(r).filter(e2.isValidElement);
          (a[6] !== l
            ? ((e = (e, t) => (0, e2.cloneElement)(e, { focused: l === t, key: t, onFocus: () => d(t) })),
              (a[6] = l),
              (a[7] = e))
            : (e = a[7]),
            (o = t.map(e)),
            (a[3] = r),
            (a[4] = l),
            (a[5] = o));
        } else o = a[5];
        let c = o,
          u = c.length;
        a[8] !== u
          ? ((i = (e) => {
              ("ArrowLeft" === e.key && d((e) => (e + u - 1) % u), "ArrowRight" === e.key && d((e) => (e + 1) % u));
            }),
            (a[8] = u),
            (a[9] = i))
          : (i = a[9]);
        let h = i;
        return (
          a[10] !== h || a[11] !== t || a[12] !== n || a[13] !== c
            ? ((s = (0, e0.jsx)(wU, {
                "data-ui": "TabList",
                ...n,
                onKeyDown: h,
                ref: t,
                role: "tablist",
                children: c,
              })),
              (a[10] = h),
              (a[11] = t),
              (a[12] = n),
              (a[13] = c),
              (a[14] = s))
            : (s = a[14]),
          s
        );
      });
    ((wG.displayName = "ForwardRef(TabList)"),
      e.s(
        [
          "Arrow",
          () => mi,
          "Avatar",
          () => gn,
          "AvatarCounter",
          () => gs,
          "AvatarStack",
          () => gc,
          "Badge",
          () => gm,
          "BoundaryElementProvider",
          () => ma,
          "Box",
          () => gh,
          "Button",
          () => gL,
          "Card",
          () => gV,
          "Checkbox",
          () => gF,
          "Code",
          () => gX,
          "ConditionalWrapper",
          () => mu,
          "Container",
          () => gJ,
          "EMPTY_ARRAY",
          () => fI,
          "EMPTY_RECORD",
          () => fA,
          "ElementQuery",
          () => mh,
          "Flex",
          () => gv,
          "Grid",
          () => g1,
          "Heading",
          () => g5,
          "Hotkeys",
          () => wH,
          "Inline",
          () => g6,
          "KBD",
          () => g9,
          "Label",
          () => p4,
          "Layer",
          () => mx,
          "LayerProvider",
          () => mg,
          "Menu",
          () => wA,
          "MenuDivider",
          () => wW,
          "MenuGroup",
          () => w_,
          "MenuItem",
          () => wZ,
          "Popover",
          () => mD,
          "Portal",
          () => mL,
          "PortalProvider",
          () => mS,
          "Radio",
          () => mU,
          "Select",
          () => mQ,
          "Spinner",
          () => gx,
          "SrOnly",
          () => mT,
          "Stack",
          () => m5,
          "Switch",
          () => m3,
          "Tab",
          () => wF,
          "TabList",
          () => wG,
          "Text",
          () => gp,
          "TextArea",
          () => wn,
          "TextInput",
          () => wg,
          "ThemeColorProvider",
          () => pr,
          "ThemeProvider",
          () => pe,
          "Tooltip",
          () => wS,
          "TooltipDelayGroupContext",
          () => wk,
          "TooltipDelayGroupProvider",
          () => wM,
          "VirtualList",
          () => mP,
          "_ResizeObserver",
          () => gT,
          "_cardColorStyle",
          () => gC,
          "_elementSizeObserver",
          () => gE,
          "_fillCSSObject",
          () => fq,
          "_getArrayProp",
          () => fQ,
          "_getResponsiveSpace",
          () => f1,
          "_isEnterToClickElement",
          () => f_,
          "_isScrollable",
          () => fX,
          "_responsive",
          () => fJ,
          "containsOrEqualsElement",
          () => fY,
          "createColorTheme",
          () => L,
          "createGlobalScopedContext",
          () => f3,
          "hexToRgb",
          () => eH,
          "hslToRgb",
          () => eE,
          "isHTMLAnchorElement",
          () => fD,
          "isHTMLButtonElement",
          () => fF,
          "isHTMLElement",
          () => fZ,
          "isHTMLInputElement",
          () => fN,
          "isHTMLSelectElement",
          () => fU,
          "isHTMLTextAreaElement",
          () => fG,
          "isRecord",
          () => ml,
          "multiply",
          () => ej,
          "parseColor",
          () => eP,
          "rem",
          () => fK,
          "responsiveCodeFontStyle",
          () => f5,
          "responsiveHeadingFont",
          () => f2,
          "responsiveLabelFont",
          () => f6,
          "responsivePaddingStyle",
          () => p1,
          "responsiveRadiusStyle",
          () => p0,
          "responsiveTextAlignStyle",
          () => f4,
          "responsiveTextFont",
          () => f8,
          "rgbToHex",
          () => e$,
          "rgbToHsl",
          () => eT,
          "rgba",
          () => eI,
          "screen",
          () => eL,
          "studioTheme",
          () => fP,
          "useBoundaryElement",
          () => mc,
          "useClickOutsideEvent",
          () => gR,
          "useCustomValidity",
          () => g$,
          "useElementSize",
          () => gB,
          "useGlobalKeyDown",
          () => gP,
          "useLayer",
          () => mv,
          "useMatchMedia",
          () => gI,
          "useMediaIndex",
          () => gW,
          "usePortal",
          () => mj,
          "usePrefersDark",
          () => gz,
          "usePrefersReducedMotion",
          () => g_,
          "useRootTheme",
          () => pt,
          "useTheme",
          () => pn,
          "useTheme_v2",
          () => po,
          "useTooltipDelayGroup",
          () => wj,
        ],
        421003,
      ));
  },
]);
