module.exports = [
  881996,
  (a) => {
    "use strict";
    var b,
      c,
      d =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
      e =
        ((b = function (a) {
          return d.test(a) || (111 === a.charCodeAt(0) && 110 === a.charCodeAt(1) && 91 > a.charCodeAt(2));
        }),
        (c = Object.create(null)),
        function (a) {
          return (void 0 === c[a] && (c[a] = b(a)), c[a]);
        });
    a.s(["default", () => e], 881996);
  },
  631035,
  (a, b, c) => {
    b.exports = function (a, b, c, d) {
      var e = c ? c.call(d, a, b) : void 0;
      if (void 0 !== e) return !!e;
      if (a === b) return !0;
      if ("object" != typeof a || !a || "object" != typeof b || !b) return !1;
      var f = Object.keys(a),
        g = Object.keys(b);
      if (f.length !== g.length) return !1;
      for (var h = Object.prototype.hasOwnProperty.bind(b), i = 0; i < f.length; i++) {
        var j = f[i];
        if (!h(j)) return !1;
        var k = a[j],
          l = b[j];
        if (!1 === (e = c ? c.call(d, k, l, j) : void 0) || (void 0 === e && k !== l)) return !1;
      }
      return !0;
    };
  },
  537721,
  (a, b, c) => {
    "use strict";
    var d = Symbol.for("react.transitional.element"),
      e = Symbol.for("react.portal"),
      f = Symbol.for("react.fragment"),
      g = Symbol.for("react.strict_mode"),
      h = Symbol.for("react.profiler"),
      i = Symbol.for("react.consumer"),
      j = Symbol.for("react.context"),
      k = Symbol.for("react.forward_ref"),
      l = Symbol.for("react.suspense"),
      m = Symbol.for("react.suspense_list"),
      n = Symbol.for("react.memo"),
      o = Symbol.for("react.lazy"),
      p = Symbol.for("react.view_transition"),
      q = Symbol.for("react.client.reference");
    function r(a) {
      if ("object" == typeof a && null !== a) {
        var b = a.$$typeof;
        switch (b) {
          case d:
            switch ((a = a.type)) {
              case f:
              case h:
              case g:
              case l:
              case m:
              case p:
                return a;
              default:
                switch ((a = a && a.$$typeof)) {
                  case j:
                  case k:
                  case o:
                  case n:
                  case i:
                    return a;
                  default:
                    return b;
                }
            }
          case e:
            return b;
        }
      }
    }
    ((c.ContextConsumer = i),
      (c.ContextProvider = j),
      (c.Element = d),
      (c.ForwardRef = k),
      (c.Fragment = f),
      (c.Lazy = o),
      (c.Memo = n),
      (c.Portal = e),
      (c.Profiler = h),
      (c.StrictMode = g),
      (c.Suspense = l),
      (c.SuspenseList = m),
      (c.isContextConsumer = function (a) {
        return r(a) === i;
      }),
      (c.isContextProvider = function (a) {
        return r(a) === j;
      }),
      (c.isElement = function (a) {
        return "object" == typeof a && null !== a && a.$$typeof === d;
      }),
      (c.isForwardRef = function (a) {
        return r(a) === k;
      }),
      (c.isFragment = function (a) {
        return r(a) === f;
      }),
      (c.isLazy = function (a) {
        return r(a) === o;
      }),
      (c.isMemo = function (a) {
        return r(a) === n;
      }),
      (c.isPortal = function (a) {
        return r(a) === e;
      }),
      (c.isProfiler = function (a) {
        return r(a) === h;
      }),
      (c.isStrictMode = function (a) {
        return r(a) === g;
      }),
      (c.isSuspense = function (a) {
        return r(a) === l;
      }),
      (c.isSuspenseList = function (a) {
        return r(a) === m;
      }),
      (c.isValidElementType = function (a) {
        return (
          "string" == typeof a ||
          "function" == typeof a ||
          a === f ||
          a === h ||
          a === g ||
          a === l ||
          a === m ||
          ("object" == typeof a &&
            null !== a &&
            (a.$$typeof === o ||
              a.$$typeof === n ||
              a.$$typeof === j ||
              a.$$typeof === i ||
              a.$$typeof === k ||
              a.$$typeof === q ||
              void 0 !== a.getModuleId)) ||
          !1
        );
      }),
      (c.typeOf = r));
  },
  139675,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(537721);
  },
  518805,
  354772,
  428391,
  962061,
  392139,
  496714,
  582632,
  291236,
  821370,
  953845,
  (a) => {
    "use strict";
    let b,
      c,
      d,
      e,
      f,
      g = ["gray", "blue", "purple", "magenta", "red", "orange", "yellow", "green", "cyan"],
      h = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"],
      i = { title: "Black", hex: "#0d0e12" },
      j = { title: "White", hex: "#ffffff" },
      k = {
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
      l = {
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
      m = {
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
      n = {
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
      o = {
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
      p = {
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
      q = {
        gray: k,
        blue: l,
        purple: m,
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
        red: n,
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
        yellow: o,
        green: p,
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
      r = { black: i, white: j, ...q };
    function s(a, b, c, d, e, f) {
      return {
        enabled: a.selectable({ base: b, dark: c, solid: d, muted: e, state: "enabled", tone: f }),
        hovered: a.selectable({ base: b, dark: c, solid: d, muted: e, state: "hovered", tone: f }),
        pressed: a.selectable({ base: b, dark: c, solid: d, muted: e, state: "pressed", tone: f }),
        selected: a.selectable({ base: b, dark: c, solid: d, muted: e, state: "selected", tone: f }),
        disabled: a.selectable({ base: b, dark: c, solid: d, muted: e, state: "disabled", tone: f }),
      };
    }
    function t(a, b, c, d, e, f) {
      return {
        default: a.button({ base: b, dark: c, solid: d.default, muted: e.default, mode: f }),
        primary: a.button({ base: b, dark: c, solid: d.primary, muted: e.primary, mode: f }),
        positive: a.button({ base: b, dark: c, solid: d.positive, muted: e.positive, mode: f }),
        caution: a.button({ base: b, dark: c, solid: d.caution, muted: e.caution, mode: f }),
        critical: a.button({ base: b, dark: c, solid: d.critical, muted: e.critical, mode: f }),
      };
    }
    a.s(
      [
        "COLOR_HUES",
        () => g,
        "COLOR_TINTS",
        () => h,
        "black",
        () => i,
        "blue",
        () => l,
        "color",
        () => r,
        "gray",
        () => k,
        "green",
        () => p,
        "hues",
        () => q,
        "purple",
        () => m,
        "red",
        () => n,
        "white",
        () => j,
        "yellow",
        () => o,
      ],
      354772,
    );
    let u = "hsl(0, 0%, 0%)",
      v = "hsl(0, 0%, 100%)",
      w = {
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
      x = {
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
      y = {
        transparent: {
          bg: [w.transparent.darkest, w.transparent.lightest],
          fg: [w.transparent.lightest, w.transparent.darkest],
          border: [w.transparent.darker, w.transparent.lighter],
          focusRing: [w.transparent.base, w.transparent.base],
        },
        primary: {
          bg: [w.primary.darkest, w.primary.lightest],
          fg: [w.primary.lightest, w.primary.darkest],
          border: [w.primary.darker, w.primary.lighter],
          focusRing: [w.primary.base, w.primary.base],
        },
        positive: {
          bg: [w.positive.darkest, w.positive.lightest],
          fg: [w.positive.lightest, w.positive.darkest],
          border: [w.positive.darker, w.positive.lighter],
          focusRing: [w.positive.base, w.positive.base],
        },
        caution: {
          bg: [w.caution.darkest, w.caution.lightest],
          fg: [w.caution.lightest, w.caution.darkest],
          border: [w.caution.darker, w.caution.lighter],
          focusRing: [w.caution.base, w.caution.base],
        },
        critical: {
          bg: [w.critical.darkest, w.critical.lightest],
          fg: [w.critical.lightest, w.critical.darkest],
          border: [w.critical.darker, w.critical.lighter],
          focusRing: [w.critical.base, w.critical.base],
        },
      },
      z = {
        base: ({ dark: a, name: b }) =>
          "default" === b
            ? {
                bg: a ? u : v,
                fg: a ? v : u,
                border: a ? w.default.darkest : w.default.lightest,
                focusRing: w.primary.base,
                shadow: { outline: u, umbra: u, penumbra: u, ambient: u },
                skeleton: { from: a ? v : u, to: a ? v : u },
              }
            : {
                bg: y[b].bg[+!a],
                fg: y[b].fg[+!a],
                border: y[b].border[+!a],
                focusRing: y[b].focusRing[+!a],
                shadow: { outline: u, umbra: u, penumbra: u, ambient: u },
                skeleton: { from: a ? v : u, to: a ? v : u },
              },
        solid: ({ base: a, dark: b, state: c, tone: d }) => {
          let e = w[d];
          return "hovered" === c
            ? {
                bg: b ? e.light : e.dark,
                bg2: b ? e.light : e.dark,
                border: b ? e.lighter : e.darker,
                fg: b ? e.darkest : e.lightest,
                icon: b ? e.darkest : e.lightest,
                muted: { fg: u },
                accent: { fg: u },
                link: { fg: u },
                code: { bg: u, fg: u },
                skeleton: a.skeleton,
              }
            : {
                bg: e.base,
                bg2: e.base,
                border: b ? e.light : e.dark,
                fg: b ? e.darkest : e.lightest,
                icon: b ? e.darkest : e.lightest,
                muted: { fg: u },
                accent: { fg: u },
                link: { fg: u },
                code: { bg: u, fg: u },
                skeleton: a.skeleton,
              };
        },
        muted: ({ base: a, dark: b, state: c, tone: d }) => {
          let e = w[d];
          return "hovered" === c
            ? {
                bg: b ? e.darker : e.lighter,
                bg2: b ? e.darker : e.lighter,
                border: b ? e.lighter : e.darker,
                fg: b ? e.lightest : e.darkest,
                icon: b ? e.lightest : e.darkest,
                muted: { fg: u },
                accent: { fg: u },
                link: { fg: u },
                code: { bg: u, fg: u },
                skeleton: a.skeleton,
              }
            : {
                bg: b ? e.darkest : e.lightest,
                bg2: b ? e.darkest : e.lightest,
                border: b ? e.darker : e.lighter,
                fg: b ? e.lighter : e.darker,
                icon: b ? e.lighter : e.darker,
                muted: { fg: u },
                accent: { fg: u },
                link: { fg: u },
                code: { bg: u, fg: u },
                skeleton: a.skeleton,
              };
        },
        button: ({ base: a, mode: b, muted: c, solid: d }) =>
          "bleed" === b
            ? {
                ...c,
                enabled: {
                  bg: "transparent",
                  bg2: "transparent",
                  fg: c.enabled.fg,
                  icon: c.enabled.fg,
                  border: "transparent",
                  muted: { fg: u },
                  accent: { fg: u },
                  link: { fg: u },
                  code: { bg: u, fg: u },
                  skeleton: a.skeleton,
                },
                hovered: {
                  bg: c.enabled.bg,
                  bg2: c.enabled.bg,
                  fg: c.hovered.fg,
                  icon: c.hovered.fg,
                  border: "transparent",
                  muted: { fg: u },
                  accent: { fg: u },
                  link: { fg: u },
                  code: { bg: u, fg: u },
                  skeleton: a.skeleton,
                },
              }
            : "ghost" === b
              ? { ...d, enabled: c.enabled }
              : d,
        card: ({ base: a }) => ({
          bg: u,
          bg2: u,
          fg: u,
          icon: u,
          border: u,
          muted: { fg: u },
          accent: { fg: u },
          link: { fg: u },
          code: { bg: u, fg: u },
          skeleton: a.skeleton,
        }),
        input: () => ({ bg: u, bg2: u, fg: u, border: u, placeholder: u }),
        selectable: ({ muted: a, state: b, tone: c }) => a[c][b],
        spot: ({ key: a }) => x[a],
        syntax: () => ({
          atrule: u,
          attrName: u,
          attrValue: u,
          attribute: u,
          boolean: u,
          builtin: u,
          cdata: u,
          char: u,
          class: u,
          className: u,
          comment: u,
          constant: u,
          deleted: u,
          doctype: u,
          entity: u,
          function: u,
          hexcode: u,
          id: u,
          important: u,
          inserted: u,
          keyword: u,
          number: u,
          operator: u,
          prolog: u,
          property: u,
          pseudoClass: u,
          pseudoElement: u,
          punctuation: u,
          regex: u,
          selector: u,
          string: u,
          symbol: u,
          tag: u,
          unit: u,
          url: u,
          variable: u,
        }),
      };
    function A(a = {}) {
      let b = { ...z, ...a };
      return { light: B(b, !1), dark: B(b, !0) };
    }
    function B(a, b) {
      return {
        default: C(a, b, "default"),
        transparent: C(a, b, "transparent"),
        primary: C(a, b, "primary"),
        positive: C(a, b, "positive"),
        caution: C(a, b, "caution"),
        critical: C(a, b, "critical"),
      };
    }
    function C(a, b, c) {
      let d = a.base({ dark: b, name: c }),
        e = {
          default: {
            enabled: a.solid({ base: d, dark: b, tone: "default", name: c, state: "enabled" }),
            disabled: a.solid({ base: d, dark: b, tone: "default", name: c, state: "disabled" }),
            hovered: a.solid({ base: d, dark: b, tone: "default", name: c, state: "hovered" }),
            pressed: a.solid({ base: d, dark: b, tone: "default", name: c, state: "pressed" }),
            selected: a.solid({ base: d, dark: b, tone: "default", name: c, state: "selected" }),
          },
          transparent: {
            enabled: a.solid({ base: d, dark: b, tone: "transparent", name: c, state: "enabled" }),
            disabled: a.solid({ base: d, dark: b, tone: "transparent", name: c, state: "disabled" }),
            hovered: a.solid({ base: d, dark: b, tone: "transparent", name: c, state: "hovered" }),
            pressed: a.solid({ base: d, dark: b, tone: "transparent", name: c, state: "pressed" }),
            selected: a.solid({ base: d, dark: b, tone: "transparent", name: c, state: "selected" }),
          },
          primary: {
            enabled: a.solid({ base: d, dark: b, tone: "primary", name: c, state: "enabled" }),
            disabled: a.solid({ base: d, dark: b, tone: "primary", name: c, state: "disabled" }),
            hovered: a.solid({ base: d, dark: b, tone: "primary", name: c, state: "hovered" }),
            pressed: a.solid({ base: d, dark: b, tone: "primary", name: c, state: "pressed" }),
            selected: a.solid({ base: d, dark: b, tone: "primary", name: c, state: "selected" }),
          },
          positive: {
            enabled: a.solid({ base: d, dark: b, tone: "positive", name: c, state: "enabled" }),
            disabled: a.solid({ base: d, dark: b, tone: "positive", name: c, state: "disabled" }),
            hovered: a.solid({ base: d, dark: b, tone: "positive", name: c, state: "hovered" }),
            pressed: a.solid({ base: d, dark: b, tone: "positive", name: c, state: "pressed" }),
            selected: a.solid({ base: d, dark: b, tone: "positive", name: c, state: "selected" }),
          },
          caution: {
            enabled: a.solid({ base: d, dark: b, tone: "caution", name: c, state: "enabled" }),
            disabled: a.solid({ base: d, dark: b, tone: "caution", name: c, state: "disabled" }),
            hovered: a.solid({ base: d, dark: b, tone: "caution", name: c, state: "hovered" }),
            pressed: a.solid({ base: d, dark: b, tone: "caution", name: c, state: "pressed" }),
            selected: a.solid({ base: d, dark: b, tone: "caution", name: c, state: "selected" }),
          },
          critical: {
            enabled: a.solid({ base: d, dark: b, tone: "critical", name: c, state: "enabled" }),
            disabled: a.solid({ base: d, dark: b, tone: "critical", name: c, state: "disabled" }),
            hovered: a.solid({ base: d, dark: b, tone: "critical", name: c, state: "hovered" }),
            pressed: a.solid({ base: d, dark: b, tone: "critical", name: c, state: "pressed" }),
            selected: a.solid({ base: d, dark: b, tone: "critical", name: c, state: "selected" }),
          },
        },
        f = {
          default: {
            enabled: a.muted({ base: d, dark: b, tone: "default", name: c, state: "enabled" }),
            disabled: a.muted({ base: d, dark: b, tone: "default", name: c, state: "disabled" }),
            hovered: a.muted({ base: d, dark: b, tone: "default", name: c, state: "hovered" }),
            pressed: a.muted({ base: d, dark: b, tone: "default", name: c, state: "pressed" }),
            selected: a.muted({ base: d, dark: b, tone: "default", name: c, state: "selected" }),
          },
          transparent: {
            enabled: a.muted({ base: d, dark: b, tone: "transparent", name: c, state: "enabled" }),
            disabled: a.muted({ base: d, dark: b, tone: "transparent", name: c, state: "disabled" }),
            hovered: a.muted({ base: d, dark: b, tone: "transparent", name: c, state: "hovered" }),
            pressed: a.muted({ base: d, dark: b, tone: "transparent", name: c, state: "pressed" }),
            selected: a.muted({ base: d, dark: b, tone: "transparent", name: c, state: "selected" }),
          },
          primary: {
            enabled: a.muted({ base: d, dark: b, tone: "primary", name: c, state: "enabled" }),
            disabled: a.muted({ base: d, dark: b, tone: "primary", name: c, state: "disabled" }),
            hovered: a.muted({ base: d, dark: b, tone: "primary", name: c, state: "hovered" }),
            pressed: a.muted({ base: d, dark: b, tone: "primary", name: c, state: "pressed" }),
            selected: a.muted({ base: d, dark: b, tone: "primary", name: c, state: "selected" }),
          },
          positive: {
            enabled: a.muted({ base: d, dark: b, tone: "positive", name: c, state: "enabled" }),
            disabled: a.muted({ base: d, dark: b, tone: "positive", name: c, state: "disabled" }),
            hovered: a.muted({ base: d, dark: b, tone: "positive", name: c, state: "hovered" }),
            pressed: a.muted({ base: d, dark: b, tone: "positive", name: c, state: "pressed" }),
            selected: a.muted({ base: d, dark: b, tone: "positive", name: c, state: "selected" }),
          },
          caution: {
            enabled: a.muted({ base: d, dark: b, tone: "caution", name: c, state: "enabled" }),
            disabled: a.muted({ base: d, dark: b, tone: "caution", name: c, state: "disabled" }),
            hovered: a.muted({ base: d, dark: b, tone: "caution", name: c, state: "hovered" }),
            pressed: a.muted({ base: d, dark: b, tone: "caution", name: c, state: "pressed" }),
            selected: a.muted({ base: d, dark: b, tone: "caution", name: c, state: "selected" }),
          },
          critical: {
            enabled: a.muted({ base: d, dark: b, tone: "critical", name: c, state: "enabled" }),
            disabled: a.muted({ base: d, dark: b, tone: "critical", name: c, state: "disabled" }),
            hovered: a.muted({ base: d, dark: b, tone: "critical", name: c, state: "hovered" }),
            pressed: a.muted({ base: d, dark: b, tone: "critical", name: c, state: "pressed" }),
            selected: a.muted({ base: d, dark: b, tone: "critical", name: c, state: "selected" }),
          },
        };
      return {
        base: d,
        button: {
          default: t(a, d, b, e, f, "default"),
          ghost: t(a, d, b, e, f, "ghost"),
          bleed: t(a, d, b, e, f, "bleed"),
        },
        card: {
          enabled: a.card({ base: d, dark: b, name: c, state: "enabled", solid: e, muted: f }),
          disabled: a.card({ base: d, dark: b, name: c, state: "disabled", solid: e, muted: f }),
          hovered: a.card({ base: d, dark: b, name: c, state: "hovered", solid: e, muted: f }),
          pressed: a.card({ base: d, dark: b, name: c, state: "pressed", solid: e, muted: f }),
          selected: a.card({ base: d, dark: b, name: c, state: "selected", solid: e, muted: f }),
        },
        dark: b,
        input: {
          default: {
            enabled: a.input({
              base: d,
              dark: b,
              mode: "default",
              state: "enabled",
              solid: e.default,
              muted: f.default,
            }),
            disabled: a.input({
              base: d,
              dark: b,
              mode: "default",
              state: "disabled",
              solid: e.default,
              muted: f.default,
            }),
            hovered: a.input({
              base: d,
              dark: b,
              mode: "default",
              state: "hovered",
              solid: e.default,
              muted: f.default,
            }),
            readOnly: a.input({
              base: d,
              dark: b,
              mode: "default",
              state: "readOnly",
              solid: e.default,
              muted: f.default,
            }),
          },
          invalid: {
            enabled: a.input({
              base: d,
              dark: b,
              mode: "invalid",
              state: "enabled",
              solid: e.default,
              muted: f.default,
            }),
            disabled: a.input({
              base: d,
              dark: b,
              mode: "invalid",
              state: "disabled",
              solid: e.default,
              muted: f.default,
            }),
            hovered: a.input({
              base: d,
              dark: b,
              mode: "invalid",
              state: "hovered",
              solid: e.default,
              muted: f.default,
            }),
            readOnly: a.input({
              base: d,
              dark: b,
              mode: "invalid",
              state: "readOnly",
              solid: e.default,
              muted: f.default,
            }),
          },
        },
        selectable: {
          default: s(a, d, b, e, f, "default"),
          primary: s(a, d, b, e, f, "primary"),
          positive: s(a, d, b, e, f, "positive"),
          caution: s(a, d, b, e, f, "caution"),
          critical: s(a, d, b, e, f, "critical"),
        },
        spot: {
          gray: a.spot({ base: d, dark: b, key: "gray" }),
          blue: a.spot({ base: d, dark: b, key: "blue" }),
          purple: a.spot({ base: d, dark: b, key: "purple" }),
          magenta: a.spot({ base: d, dark: b, key: "magenta" }),
          red: a.spot({ base: d, dark: b, key: "red" }),
          orange: a.spot({ base: d, dark: b, key: "orange" }),
          yellow: a.spot({ base: d, dark: b, key: "yellow" }),
          green: a.spot({ base: d, dark: b, key: "green" }),
          cyan: a.spot({ base: d, dark: b, key: "cyan" }),
        },
        syntax: a.syntax({ base: d, dark: b }),
        solid: e,
        muted: f,
      };
    }
    let D = {
        sizes: [
          { distance: -4, size: 19 },
          { distance: -4, size: 25 },
          { distance: -8, size: 33 },
          { distance: -12, size: 49 },
        ],
        focusRing: { offset: 1, width: 1 },
      },
      E = { textWeight: "medium", border: { width: 1 }, focusRing: { offset: -1, width: 1 } },
      F = { border: { width: 1 }, focusRing: { offset: -1, width: 1 }, shadow: { outline: 0.5 } },
      G = [320, 640, 960, 1280, 1600, 1920],
      H = [360, 600, 900, 1200, 1800, 2400],
      I = { dialog: { zOffset: 600 }, popover: { zOffset: 400 }, tooltip: { zOffset: 200 } },
      J = [0, 1, 3, 6, 9, 12, 21],
      K = [
        null,
        { umbra: [0, 0, 0, 0], penumbra: [0, 0, 0, 0], ambient: [0, 0, 0, 0] },
        { umbra: [0, 3, 5, -2], penumbra: [0, 6, 10, 0], ambient: [0, 1, 18, 1] },
        { umbra: [0, 7, 8, -4], penumbra: [0, 12, 17, 2], ambient: [0, 5, 22, 4] },
        { umbra: [0, 9, 11, -5], penumbra: [0, 18, 28, 2], ambient: [0, 7, 34, 6] },
        { umbra: [0, 11, 15, -7], penumbra: [0, 24, 38, 3], ambient: [0, 9, 46, 8] },
      ],
      L = [0, 4, 8, 12, 20, 32, 52, 84, 136, 220],
      M = {
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
      N = { button: { root: { transition: "background-color 100ms,border-color 100ms,color 100ms" } } },
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
      P = new WeakMap();
    function Q(a) {
      let b = P.get(a);
      if (b) return b;
      let c = S(a, a.card.enabled),
        d = {
          _blend: a._blend || (a.dark ? "screen" : "multiply"),
          _dark: a.dark,
          accent: c.accent,
          avatar: c.avatar,
          backdrop: a.base.shadow.ambient,
          badge: c.badge,
          bg: a.base.bg,
          border: a.base.border,
          button: { default: R(a, a.button.default), ghost: R(a, a.button.ghost), bleed: R(a, a.button.bleed) },
          code: c.code,
          fg: a.base.fg,
          focusRing: a.base.focusRing,
          icon: c.muted.fg,
          input: { default: T(a.input.default), invalid: T(a.input.invalid) },
          kbd: c.kbd,
          link: c.link,
          muted: { ...c.muted, bg: a.selectable?.default.enabled.bg2 || a.base.bg },
          selectable: R(a, a.selectable || a.muted),
          shadow: a.base.shadow,
          skeleton: { from: a.skeleton?.from || a.base.border, to: a.skeleton?.to || a.base.border },
          syntax: a.syntax,
        };
      return (P.set(a, d), d);
    }
    function R(a, b) {
      return {
        default: {
          enabled: S(a, b.default.enabled),
          hovered: S(a, b.default.hovered),
          pressed: S(a, b.default.pressed),
          selected: S(a, b.default.selected),
          disabled: S(a, b.default.disabled),
        },
        neutral: {
          enabled: S(a, b.default.enabled),
          hovered: S(a, b.default.hovered),
          pressed: S(a, b.default.pressed),
          selected: S(a, b.default.selected),
          disabled: S(a, b.default.disabled),
        },
        primary: {
          enabled: S(a, b.primary.enabled),
          hovered: S(a, b.primary.hovered),
          pressed: S(a, b.primary.pressed),
          selected: S(a, b.primary.selected),
          disabled: S(a, b.primary.disabled),
        },
        suggest: {
          enabled: S(a, b.primary.enabled),
          hovered: S(a, b.primary.hovered),
          pressed: S(a, b.primary.pressed),
          selected: S(a, b.primary.selected),
          disabled: S(a, b.primary.disabled),
        },
        positive: {
          enabled: S(a, b.positive.enabled),
          hovered: S(a, b.positive.hovered),
          pressed: S(a, b.positive.pressed),
          selected: S(a, b.positive.selected),
          disabled: S(a, b.positive.disabled),
        },
        caution: {
          enabled: S(a, b.caution.enabled),
          hovered: S(a, b.caution.hovered),
          pressed: S(a, b.caution.pressed),
          selected: S(a, b.caution.selected),
          disabled: S(a, b.caution.disabled),
        },
        critical: {
          enabled: S(a, b.critical.enabled),
          hovered: S(a, b.critical.hovered),
          pressed: S(a, b.critical.pressed),
          selected: S(a, b.critical.selected),
          disabled: S(a, b.critical.disabled),
        },
      };
    }
    function S(a, b) {
      return {
        ...b,
        avatar: {
          gray: { bg: a.spot.gray, fg: a.base.bg },
          blue: { bg: a.spot.blue, fg: a.base.bg },
          purple: { bg: a.spot.purple, fg: a.base.bg },
          magenta: { bg: a.spot.magenta, fg: a.base.bg },
          red: { bg: a.spot.red, fg: a.base.bg },
          orange: { bg: a.spot.orange, fg: a.base.bg },
          yellow: { bg: a.spot.yellow, fg: a.base.bg },
          green: { bg: a.spot.green, fg: a.base.bg },
          cyan: { bg: a.spot.cyan, fg: a.base.bg },
        },
        badge: {
          default: {
            bg: a.muted.default.enabled.bg,
            fg: a.muted.default.enabled.fg,
            dot: a.muted.default.enabled.muted.fg,
            icon: a.muted.default.enabled.muted.fg,
          },
          neutral: {
            bg: a.muted.transparent.enabled.bg,
            fg: a.muted.transparent.enabled.fg,
            dot: a.muted.transparent.enabled.muted.fg,
            icon: a.muted.transparent.enabled.muted.fg,
          },
          primary: {
            bg: a.muted.primary.enabled.bg,
            fg: a.muted.primary.enabled.fg,
            dot: a.muted.primary.enabled.muted.fg,
            icon: a.muted.primary.enabled.muted.fg,
          },
          suggest: {
            bg: a.muted.primary.enabled.bg,
            fg: a.muted.primary.enabled.fg,
            dot: a.muted.primary.enabled.muted.fg,
            icon: a.muted.primary.enabled.muted.fg,
          },
          positive: {
            bg: a.muted.positive.enabled.bg,
            fg: a.muted.positive.enabled.fg,
            dot: a.muted.positive.enabled.muted.fg,
            icon: a.muted.positive.enabled.muted.fg,
          },
          caution: {
            bg: a.muted.caution.enabled.bg,
            fg: a.muted.caution.enabled.fg,
            dot: a.muted.caution.enabled.muted.fg,
            icon: a.muted.caution.enabled.muted.fg,
          },
          critical: {
            bg: a.muted.critical.enabled.bg,
            fg: a.muted.critical.enabled.fg,
            dot: a.muted.critical.enabled.muted.fg,
            icon: a.muted.critical.enabled.muted.fg,
          },
        },
        kbd: { bg: a.muted.default.enabled.bg, fg: a.muted.default.enabled.fg, border: a.muted.default.enabled.border },
        muted: { ...a.muted.default.enabled.muted, bg: b.bg2 || b.bg },
        skeleton: { from: b.skeleton?.from || b.border, to: b.skeleton?.to || b.border },
      };
    }
    function T(a) {
      return { enabled: U(a.enabled), disabled: U(a.disabled), readOnly: U(a.readOnly), hovered: U(a.hovered) };
    }
    function U(a) {
      return { bg: a.bg, border: a.border, fg: a.fg, muted: { bg: a.bg2 }, placeholder: a.placeholder };
    }
    let V = new WeakMap();
    function W(a) {
      if (a.sanity.v2?._resolved) return a.sanity.v2;
      let b = V.get(a);
      if (b) return b;
      let c = {
        _version: 2,
        _resolved: !0,
        avatar: { ...D, ...a.sanity.avatar },
        button: { ...E, ...a.sanity.button },
        card: F,
        color: Q(a.sanity.color),
        container: a.sanity.container,
        font: a.sanity.fonts,
        input: {
          ...M,
          ...a.sanity.input,
          checkbox: { ...M.checkbox, ...a.sanity.input.checkbox },
          radio: { ...M.radio, ...a.sanity.input.radio },
          switch: { ...M.switch, ...a.sanity.input.switch },
        },
        layer: a.sanity.layer ?? I,
        media: a.sanity.media,
        radius: a.sanity.radius,
        shadow: a.sanity.shadows,
        space: a.sanity.space,
        style: a.sanity.styles,
      };
      return (V.set(a, c), c);
    }
    function X(a) {
      return 2 === a._version;
    }
    let Y = new WeakMap(),
      Z = new WeakMap();
    function $(a) {
      let b = Z.get(a);
      if (b) return b;
      let {
        avatar: c,
        button: d,
        color: e,
        container: f,
        font: g,
        input: h,
        media: i,
        radius: j,
        shadow: k,
        space: l,
        style: m,
      } = a;
      return {
        _version: 0,
        avatar: c,
        button: d,
        container: f,
        color: {
          light: {
            transparent: _(e.light.transparent),
            default: _(e.light.default),
            primary: _(e.light.primary),
            positive: _(e.light.positive),
            caution: _(e.light.caution),
            critical: _(e.light.critical),
          },
          dark: {
            transparent: _(e.dark.transparent),
            default: _(e.dark.default),
            primary: _(e.dark.primary),
            positive: _(e.dark.positive),
            caution: _(e.dark.caution),
            critical: _(e.dark.critical),
          },
        },
        focusRing: h.text.focusRing,
        fonts: g,
        input: h,
        media: i,
        radius: j,
        shadows: k,
        space: l,
        styles: m,
        v2: a,
      };
    }
    function _(a) {
      return {
        base: { bg: a.bg, fg: a.fg, border: a.border, focusRing: a.focusRing, shadow: a.shadow },
        button: a.button,
        card: a.selectable.default,
        dark: a._dark,
        input: { default: aa(a.input.default), invalid: aa(a.input.invalid) },
        muted: { ...a.button.ghost, transparent: a.button.ghost.default },
        solid: { ...a.button.default, transparent: a.button.default.default },
        selectable: a.selectable,
        spot: {
          gray: a.avatar.gray.bg,
          blue: a.avatar.blue.bg,
          purple: a.avatar.purple.bg,
          magenta: a.avatar.magenta.bg,
          red: a.avatar.red.bg,
          orange: a.avatar.orange.bg,
          yellow: a.avatar.yellow.bg,
          green: a.avatar.green.bg,
          cyan: a.avatar.cyan.bg,
        },
        syntax: a.syntax,
      };
    }
    function aa(a) {
      return { enabled: ab(a.enabled), disabled: ab(a.disabled), readOnly: ab(a.readOnly), hovered: ab(a.hovered) };
    }
    function ab(a) {
      return { bg: a.bg, bg2: a.muted.bg, border: a.border, fg: a.fg, placeholder: a.placeholder };
    }
    let ac = ["multiply", "screen"],
      ad = ["transparent", "default", "neutral", "primary", "suggest", "positive", "caution", "critical"],
      ae = ["default", "neutral", "primary", "suggest", "positive", "caution", "critical"],
      af = ["enabled", "hovered", "pressed", "selected", "disabled"],
      ag = ["default", "ghost", "bleed"],
      ah = ["default", "invalid"],
      ai = ["enabled", "hovered", "readOnly", "disabled"];
    function aj(a) {
      return h.includes(a);
    }
    function ak(a) {
      return /^\d+%$/.test(a);
    }
    function al(a) {
      var b;
      let c = a.split("/"),
        d = c.shift() || "",
        [e, f] = d.split(" ");
      if (aj(e)) {
        let a = c.shift() || "";
        return ak(f)
          ? { type: "color", tint: e, mix: Number(f.slice(0, -1)) / 100 }
          : am(a)
            ? { type: "color", tint: e, opacity: Number(a) }
            : { type: "color", tint: e };
      }
      if ("black" === (b = e) || "white" === b) {
        let a = c.shift() || "";
        return ak(f)
          ? { type: "color", key: e, mix: Number(f.slice(0, -1)) / 100 }
          : am(a)
            ? { type: "color", key: e, opacity: Number(a) }
            : { type: "color", key: e };
      }
      if (g.includes(e)) {
        let [a, b] = (d = c.shift() || "").split(" ");
        if (aj(a)) {
          let d = c.shift() || "";
          return ak(b)
            ? { type: "color", hue: e, tint: a, mix: Number(b.slice(0, -1)) / 100 }
            : am(d)
              ? { type: "color", hue: e, tint: a, opacity: Number(d) }
              : { type: "color", hue: e, tint: a };
        }
        return { type: "hue", value: e };
      }
      if (ac.includes(e)) return { type: "blendMode", value: e };
    }
    function am(a) {
      return "0" === a || /^0\.[0-9]+$/.test(a) || "1" === a;
    }
    ([...g], [...ad], [...ae], [...af], [...ah], [...ai]);
    let an = ["500", "500"];
    function ao(a, b = an) {
      var c;
      let d,
        { hue: e, scheme: f } = a,
        g = al(b[+("light" !== f)]);
      if (!g || "color" !== g.type) throw Error(`Invalid color token: ${b[0]}`);
      return (
        (c = { ...g, hue: g.hue || e }),
        (d = ""),
        (d = "black" === c.key || "white" === c.key ? c.key : `${c.hue}/${c.tint}`),
        void 0 !== c.mix ? `${d} ${100 * c.mix}%` : (void 0 !== c.opacity && (d += `/${c.opacity}`), d)
      );
    }
    let ap = {
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
    function aq(a) {
      return !!(a && "object" == typeof a && !Array.isArray(a));
    }
    function ar(...a) {
      let b = a.filter(Boolean);
      return 0 === b.length ? {} : b.reduce(as, {});
    }
    function as(a, b) {
      for (let c of Object.keys(b)) {
        let d = a[c],
          e = b[c];
        aq(d) && aq(e) ? (a[c] = ar(d, e)) : (a[c] = e);
      }
      return a;
    }
    function at(a, b) {
      let { scheme: c } = a,
        d = {};
      for (let a of ad)
        d[a] = (function (a, b) {
          let { scheme: c, tone: d } = a,
            e = b?.color?.base?.[d],
            f = { hue: e?._hue || "gray", scheme: c };
          return {
            _blend: (e?._blend || ["multiply", "screen"])[+("light" !== c)],
            _dark: "dark" === c,
            accent: { fg: ao(f, e?.accent?.fg) },
            avatar: au({ scheme: c }, e),
            backdrop: ao(f, e?.backdrop),
            badge: aw(e?.badge, { scheme: c }, b),
            bg: ao(f, e?.bg),
            border: ao(f, e?.border),
            button: (function (a, b) {
              let { scheme: c, tone: d } = a,
                e = {};
              for (let a of ag)
                e[a] = (function (a, b) {
                  let { cardTone: c, mode: d, scheme: e } = a,
                    f = {};
                  for (let a of ae)
                    f[a] = (function (a, b) {
                      let { cardTone: c, mode: d, scheme: e, tone: f } = a,
                        g = {};
                      for (let a of af)
                        g[a] = (function (a, b) {
                          let { cardTone: c, mode: d, tone: e, scheme: f, state: g } = a,
                            h = b?.color?.base?.[c],
                            i = b?.color?.button?.[d]?.[e]?.[g],
                            j = i?._hue || h?._hue || "gray",
                            k = i?._blend || ["screen", "multiply"],
                            l = { hue: j, scheme: f };
                          return {
                            _blend: k[+("light" !== f)],
                            accent: { fg: ao(l, i?.accent?.fg) },
                            avatar: au({ scheme: f }, i),
                            badge: aw(i?.badge, { scheme: f }, b),
                            bg: ao(l, i?.bg),
                            border: ao(l, i?.border),
                            code: { bg: ao(l, i?.code?.bg), fg: ao(l, i?.code?.fg) },
                            fg: ao(l, i?.fg),
                            icon: ao(l, i?.icon),
                            muted: { bg: ao(l, i?.muted?.bg), fg: ao(l, i?.muted?.fg) },
                            kbd: { bg: ao(l, i?.kbd?.bg), fg: ao(l, i?.kbd?.fg), border: ao(l, i?.kbd?.border) },
                            link: { fg: ao(l, i?.link?.fg) },
                            skeleton: { from: ao(l, i?.skeleton?.from), to: ao(l, i?.skeleton?.to) },
                          };
                        })({ cardTone: c, mode: d, tone: f, scheme: e, state: a }, b);
                      return g;
                    })({ cardTone: c, mode: d, scheme: e, tone: a }, b);
                  return f;
                })({ cardTone: d, scheme: c, mode: a }, b);
              return e;
            })({ scheme: c, tone: d }, b),
            code: { bg: ao(f, e?.code?.bg), fg: ao(f, e?.code?.fg) },
            fg: ao(f, e?.fg),
            focusRing: ao(f, e?.focusRing),
            icon: ao(f, e?.icon),
            input: (function (a, b) {
              let { scheme: c, tone: d } = a;
              return {
                default: ax({ mode: "default", scheme: c, tone: d }, b),
                invalid: ax({ mode: "invalid", scheme: c, tone: d }, b),
              };
            })({ scheme: c, tone: d }, b),
            kbd: { bg: ao(f, e?.kbd?.bg), fg: ao(f, e?.kbd?.fg), border: ao(f, e?.kbd?.border) },
            link: { fg: ao(f, e?.link?.fg) },
            muted: { bg: ao(f, e?.muted?.bg), fg: ao(f, e?.muted?.fg) },
            selectable: (function (a, b) {
              let { scheme: c, tone: d } = a,
                e = {};
              for (let a of ae)
                e[a] = (function (a, b) {
                  let { cardTone: c, scheme: d, tone: e } = a,
                    f = {};
                  for (let a of af)
                    f[a] = (function (a, b) {
                      let { cardTone: c, scheme: d, state: e, tone: f } = a,
                        g = b?.color?.base?.[c],
                        h = b?.color?.selectable?.[f]?.[e],
                        i = h?._hue || g?._hue || "gray",
                        j = h?._blend || ["screen", "multiply"],
                        k = { hue: i, scheme: d };
                      return {
                        _blend: j[+("light" !== d)],
                        accent: { fg: ao(k, h?.accent?.fg) },
                        avatar: au({ scheme: d }, h),
                        badge: aw(h?.badge, { scheme: d }, b),
                        bg: ao(k, h?.bg),
                        border: ao(k, h?.border),
                        code: { bg: ao(k, h?.code?.bg), fg: ao(k, h?.code?.fg) },
                        fg: ao(k, h?.fg),
                        icon: ao(k, h?.icon),
                        muted: { bg: ao(k, h?.muted?.bg), fg: ao(k, h?.muted?.fg) },
                        kbd: { bg: ao(k, h?.kbd?.bg), fg: ao(k, h?.kbd?.fg), border: ao(k, h?.kbd?.border) },
                        link: { fg: ao(k, h?.link?.fg) },
                        skeleton: { from: ao(k, h?.skeleton?.from), to: ao(k, h?.skeleton?.to) },
                      };
                    })({ cardTone: c, tone: e, scheme: d, state: a }, b);
                  return f;
                })({ cardTone: d, scheme: c, tone: a }, b);
              return e;
            })({ scheme: c, tone: d }, b),
            shadow: (function (a, b) {
              let { scheme: c, tone: d } = a,
                e = b?.color?.base?.[d],
                f = { hue: e?._hue || "gray", scheme: c };
              return {
                outline: ao(f, e?.shadow?.outline),
                umbra: ao(f, e?.shadow?.umbra),
                penumbra: ao(f, e?.shadow?.penumbra),
                ambient: ao(f, e?.shadow?.ambient),
              };
            })({ scheme: c, tone: d }, b),
            skeleton: { from: ao(f, e?.skeleton?.from), to: ao(f, e?.skeleton?.to) },
            syntax: (function (a, b) {
              let { scheme: c } = a,
                d = b?.color?.syntax,
                e = { hue: "gray", scheme: c };
              return {
                atrule: ao(e, d?.atrule),
                attrName: ao(e, d?.attrName),
                attrValue: ao(e, d?.attrValue),
                attribute: ao(e, d?.attribute),
                boolean: ao(e, d?.boolean),
                builtin: ao(e, d?.builtin),
                cdata: ao(e, d?.cdata),
                char: ao(e, d?.char),
                class: ao(e, d?.class),
                className: ao(e, d?.className),
                comment: ao(e, d?.comment),
                constant: ao(e, d?.constant),
                deleted: ao(e, d?.deleted),
                doctype: ao(e, d?.doctype),
                entity: ao(e, d?.entity),
                function: ao(e, d?.function),
                hexcode: ao(e, d?.hexcode),
                id: ao(e, d?.id),
                important: ao(e, d?.important),
                inserted: ao(e, d?.inserted),
                keyword: ao(e, d?.keyword),
                number: ao(e, d?.number),
                operator: ao(e, d?.operator),
                prolog: ao(e, d?.prolog),
                property: ao(e, d?.property),
                pseudoClass: ao(e, d?.pseudoClass),
                pseudoElement: ao(e, d?.pseudoElement),
                punctuation: ao(e, d?.punctuation),
                regex: ao(e, d?.regex),
                selector: ao(e, d?.selector),
                string: ao(e, d?.string),
                symbol: ao(e, d?.symbol),
                tag: ao(e, d?.tag),
                unit: ao(e, d?.unit),
                url: ao(e, d?.url),
                variable: ao(e, d?.variable),
              };
            })({ scheme: c }, b),
          };
        })({ scheme: c, tone: a }, b);
      return d;
    }
    function au(a, b) {
      let { scheme: c } = a;
      return {
        gray: av({ color: "gray", scheme: c }, b),
        blue: av({ color: "blue", scheme: c }, b),
        purple: av({ color: "purple", scheme: c }, b),
        magenta: av({ color: "magenta", scheme: c }, b),
        red: av({ color: "red", scheme: c }, b),
        orange: av({ color: "orange", scheme: c }, b),
        yellow: av({ color: "yellow", scheme: c }, b),
        green: av({ color: "green", scheme: c }, b),
        cyan: av({ color: "cyan", scheme: c }, b),
      };
    }
    function av(a, b) {
      let { color: c, scheme: d } = a,
        e = b?.avatar?.[c],
        f = { hue: e?._hue || "gray", scheme: d };
      return { _blend: (e?._blend || ["screen", "multiply"])[+("light" !== d)], bg: ao(f, e?.bg), fg: ao(f, e?.fg) };
    }
    function aw(a, b, c) {
      let { scheme: d } = b,
        e = {};
      for (let b of ae)
        e[b] = (function (a, b, c) {
          let { scheme: d, tone: e } = b,
            f = a?.[e],
            g = { hue: f?._hue || c?.color?.base?.[e]?._hue || "gray", scheme: d };
          return { bg: ao(g, f?.bg), fg: ao(g, f?.fg), dot: ao(g, f?.dot), icon: ao(g, f?.icon) };
        })(a, { scheme: d, tone: b }, c);
      return e;
    }
    function ax(a, b) {
      let { mode: c, scheme: d, tone: e } = a;
      return {
        enabled: ay({ mode: c, scheme: d, state: "enabled", cardTone: e }, b),
        hovered: ay({ mode: c, scheme: d, state: "hovered", cardTone: e }, b),
        readOnly: ay({ mode: c, scheme: d, state: "readOnly", cardTone: e }, b),
        disabled: ay({ mode: c, scheme: d, state: "disabled", cardTone: e }, b),
      };
    }
    function ay(a, b) {
      let { cardTone: c, mode: d, scheme: e, state: f } = a,
        g = b?.color?.base?.[c],
        h = b?.color?.input?.[d]?.[f],
        i = h?._hue || g?._hue || "gray",
        j = h?._blend || ["screen", "multiply"],
        k = { hue: i, scheme: e };
      return {
        _blend: j[+("light" !== e)],
        bg: ao(k, h?.bg),
        border: ao(k, h?.border),
        fg: ao(k, h?.fg),
        muted: { bg: ao(k, h?.muted?.bg) },
        placeholder: ao(k, h?.placeholder),
      };
    }
    function az(a, b) {
      return {
        r: 255 * ((a.r / 255) * (b.r / 255)),
        g: 255 * ((a.g / 255) * (b.g / 255)),
        b: 255 * ((a.b / 255) * (b.b / 255)),
      };
    }
    function aA(a, b) {
      var c, d, e, f, g, h;
      return {
        r: 255 * ((c = a.r / 255) + (d = b.r / 255) - c * d),
        g: 255 * ((e = a.g / 255) + (f = b.g / 255) - e * f),
        b: 255 * ((g = a.b / 255) + (h = b.b / 255) - g * h),
      };
    }
    function aB(a, b = 0, c = 1) {
      return Math.min(c, Math.max(b, a));
    }
    function aC(a, b, c, d, e) {
      var f;
      return c * (1 - (f = aB((e - a) / (b - a)))) + d * f;
    }
    function aD(a) {
      return Math.round(a);
    }
    function aE(a) {
      if (4 === a.length) {
        let b = a.slice(1, 2),
          c = a.slice(2, 3),
          d = a.slice(3, 4);
        return { r: parseInt(b + b, 16), g: parseInt(c + c, 16), b: parseInt(d + d, 16) };
      }
      return { r: parseInt(a.slice(1, 3), 16), g: parseInt(a.slice(3, 5), 16), b: parseInt(a.slice(5, 7), 16) };
    }
    function aF(a) {
      let b = aD(aB(Math.round(a.r), 0, 255)),
        c = aD(aB(Math.round(a.g), 0, 255)),
        d = aD(aB(Math.round(a.b), 0, 255));
      return "a" in a
        ? `rgba(${b},${c},${d},${a.a})`
        : "#" + (0x1000000 + (b << 16) + (c << 8) + d).toString(16).slice(1);
    }
    function aG({ r: a, g: b, b: c }) {
      a /= 255;
      let d = Math.min(a, (b /= 255), (c /= 255)),
        e = Math.max(a, b, c),
        f = e - d,
        g = 0,
        h = 0,
        i = 0;
      return (
        (g = Math.round(
          60 * (g = 0 == f ? 0 : e == a ? ((b - c) / f) % 6 : e == b ? (c - a) / f + 2 : (a - b) / f + 4),
        )) < 0 && (g += 360),
        (i = (e + d) / 2),
        {
          h: g,
          s: (h = +(100 * (h = 0 == f ? 0 : f / (1 - Math.abs(2 * i - 1)))).toFixed(1)),
          l: (i = +(100 * i).toFixed(1)),
        }
      );
    }
    function aH(a) {
      let b = a.s / 100,
        c = a.l / 100,
        d = (1 - Math.abs(2 * c - 1)) * b,
        e = d * (1 - Math.abs(((a.h / 60) % 2) - 1)),
        f = c - d / 2,
        g = 0,
        h = 0,
        i = 0;
      return (
        0 <= a.h && a.h < 60
          ? ((g = d), (h = e), (i = 0))
          : 60 <= a.h && a.h < 120
            ? ((g = e), (h = d), (i = 0))
            : 120 <= a.h && a.h < 180
              ? ((g = 0), (h = d), (i = e))
              : 180 <= a.h && a.h < 240
                ? ((g = 0), (h = e), (i = d))
                : 240 <= a.h && a.h < 300
                  ? ((g = e), (h = 0), (i = d))
                  : 300 <= a.h && a.h < 360 && ((g = d), (h = 0), (i = e)),
        { r: Math.round((g + f) * 255), g: Math.round((h + f) * 255), b: Math.round((i + f) * 255) }
      );
    }
    let aI = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;
    function aJ(a) {
      if (!a) return { r: 0, g: 0, b: 0 };
      if ("string" != typeof a) throw Error("parseColor: expected a string");
      if (
        "#" === a[0] &&
        (4 === a.length || 7 === a.length) &&
        (function (a) {
          for (let b of a) if (-1 === "0123456789ABCDEFabcdef".indexOf(b)) return !1;
          return !0;
        })(a.slice(1))
      )
        return aE(a);
      if (a.startsWith("hsl("))
        return aH(
          (function (a) {
            let b = aI.exec(a);
            if (!b) throw Error(`parseHsl: string is not a HSL color: "${a}"`);
            return { h: parseInt(b[1]), s: parseFloat(b[3]), l: parseFloat(b[5]) };
          })(a),
        );
      if (a.startsWith("rgba(")) {
        let b;
        return {
          r: parseInt((b = a.replace(/rgba\(|\)/g, "").split(","))[0]),
          g: parseInt(b[1]),
          b: parseInt(b[2]),
          a: parseFloat(b[3]),
        };
      }
      throw Error(`parseColor: unexpected color format: "${a}"`);
    }
    function aK(a, b) {
      let c = aJ(a);
      return `rgba(${c.r},${c.g},${c.b},${b})`;
    }
    let aL = [0, 255];
    function aM(a, b) {
      let { bg: c, blendMode: d, colorPalette: e } = b;
      if ("white" === c) throw Error("Cannot blend with white background");
      let f = al(a);
      if (!f || "color" !== f.type) throw Error(`Invalid color token value: ${a}`);
      let g = "";
      if (
        ("black" === f.key && (g = aN(e.black)),
        "white" === f.key && (g = aN(e.white)),
        f.hue && f.tint && (g = aN(e[f.hue][f.tint])),
        !g)
      )
        throw Error(`Invalid color token value: ${a}`);
      let h = g,
        i = { blendMode: d, bg: c, black: aN(e.black), white: aN(e.white) };
      try {
        if (
          ((g = (function (a, b) {
            let { blendMode: c } = b,
              d = aJ(a),
              e = aJ(b.black),
              f = aJ(b.white),
              g = b.bg ? aJ(b.bg) : "multiply" === c ? f : e,
              h = { r: [e.r, f.r], g: [e.g, f.g], b: [e.b, f.b] },
              i = {
                r: aB(aC(...h.r, ...aL, g.r), ...aL),
                g: aB(aC(...h.g, ...aL, g.g), ...aL),
                b: aB(aC(...h.b, ...aL, g.b), ...aL),
              },
              j = {
                r: aB(aC(...h.r, ...aL, d.r), ...aL),
                g: aB(aC(...h.g, ...aL, d.g), ...aL),
                b: aB(aC(...h.b, ...aL, d.b), ...aL),
              },
              k = "multiply" === c ? az(i, j) : aA(i, j);
            return aF({
              r: aB(aC(...aL, ...h.r, k.r), ...h.r),
              g: aB(aC(...aL, ...h.g, k.g), ...h.g),
              b: aB(aC(...aL, ...h.b, k.b), ...h.b),
            });
          })(g, i)),
          c && void 0 !== f.mix)
        ) {
          var j, k, l, m, n, o, p;
          let a = aE(c),
            b = aE(g);
          g = aF(
            ((j = f.mix),
            {
              r: ((k = a.r), (l = b.r), k + (l - k) * j),
              g: ((m = a.g), (n = b.g), m + (n - m) * j),
              b: ((o = a.b), (p = b.b), o + (p - o) * j),
            }),
          );
        }
      } catch (a) {
        throw (console.warn("could not blend", g, i), a);
      }
      return (
        "#aN" === g && (console.warn(`invalid color token value: ${a}`), (g = h)),
        void 0 !== f.opacity && (g = aK(g, f.opacity)),
        g
      );
    }
    function aN(a) {
      return "string" == typeof a ? a : a.hex;
    }
    function aO(a, b) {
      let c = Object.entries(b),
        [, d] = c.find(([a]) => "transparent" === a),
        [, e] = c.find(([a]) => "default" === a),
        f = aP(d, { colorPalette: a }),
        g = aP(e, { colorPalette: a }),
        h = g.bg;
      if ("white" === h) throw Error("Cannot blend with white background");
      return Object.fromEntries([
        ["transparent", f],
        ["default", g],
        ...c
          .filter(([a]) => "default" !== a && "transparent" !== a)
          .map(([b, c]) => [b, aP(c, { bg: h, colorPalette: a })]),
      ]);
    }
    function aP(a, b) {
      var c, d, e, f;
      let { colorPalette: g, bg: h } = b,
        i = a._blend || "multiply",
        j = aM(a.bg, { colorPalette: g, bg: h, blendMode: i }),
        k = { colorPalette: g, bg: j, blendMode: i },
        l =
          ((c = a.button),
          (d = { baseBg: j, blendMode: i, colorPalette: g }),
          { default: aS(c.default, d), ghost: aS(c.ghost, d), bleed: aS(c.bleed, d) }),
        m = (function (a, b) {
          let c = {};
          for (let f of ae) {
            var d, e;
            c[f] =
              ((d = a[f]),
              (e = b),
              {
                enabled: aT(d.enabled, e),
                hovered: aT(d.hovered, e),
                pressed: aT(d.pressed, e),
                selected: aT(d.selected, e),
                disabled: aT(d.disabled, e),
              });
          }
          return c;
        })(a.selectable, { colorPalette: g, baseBg: j, blendMode: i }),
        n = {
          outline: aM(a.shadow.outline, k),
          umbra: aM(a.shadow.umbra, { ...k, bg: void 0, colorPalette: { ...g, black: "#000000" } }),
          penumbra: aM(a.shadow.penumbra, { ...k, bg: void 0, colorPalette: { ...g, black: "#000000" } }),
          ambient: aM(a.shadow.ambient, { ...k, bg: void 0, colorPalette: { ...g, black: "#000000" } }),
        };
      return {
        _blend: i,
        _dark: a._dark,
        accent: { fg: aM(a.accent.fg, k) },
        avatar: aQ(a.avatar, { baseBg: j, colorPalette: g, blendMode: i }),
        backdrop: aM(a.backdrop, k),
        badge: aR(a.badge, { baseBg: j, colorPalette: g, blendMode: i }),
        bg: j,
        border: aM(a.border, k),
        button: l,
        code: { bg: aM(a.code.bg, k), fg: aM(a.code.fg, k) },
        fg: aM(a.fg, k),
        focusRing: aM(a.focusRing, k),
        icon: aM(a.icon, k),
        input:
          ((e = a.input),
          (f = { baseBg: j, colorPalette: g, blendMode: i }),
          { default: aU(e.default, f), invalid: aU(e.invalid, f) }),
        kbd: (function (a, b) {
          let { baseBg: c, blendMode: d, colorPalette: e } = b,
            f = aM(a.bg, { bg: c, blendMode: d, colorPalette: e }),
            g = { bg: f, blendMode: d, colorPalette: e };
          return { bg: f, fg: aM(a.fg, g), border: aM(a.border, g) };
        })(a.kbd, { baseBg: j, colorPalette: g, blendMode: i }),
        link: { fg: aM(a.link.fg, k) },
        muted: { bg: aM(a.muted.bg, k), fg: aM(a.muted.fg, k) },
        shadow: n,
        skeleton: { from: aM(a.skeleton.from, k), to: aM(a.skeleton.to, k) },
        syntax: (function (a, b) {
          let { colorPalette: c, baseBg: d, blendMode: e } = b,
            f = { colorPalette: c, bg: d, blendMode: e };
          return {
            atrule: aM(a.atrule, f),
            attrName: aM(a.attrName, f),
            attrValue: aM(a.attrValue, f),
            attribute: aM(a.attribute, f),
            boolean: aM(a.boolean, f),
            builtin: aM(a.builtin, f),
            cdata: aM(a.cdata, f),
            char: aM(a.char, f),
            class: aM(a.class, f),
            className: aM(a.className, f),
            comment: aM(a.comment, f),
            constant: aM(a.constant, f),
            deleted: aM(a.deleted, f),
            doctype: aM(a.doctype, f),
            entity: aM(a.entity, f),
            function: aM(a.function, f),
            hexcode: aM(a.hexcode, f),
            id: aM(a.id, f),
            important: aM(a.important, f),
            inserted: aM(a.inserted, f),
            keyword: aM(a.keyword, f),
            number: aM(a.number, f),
            operator: aM(a.operator, f),
            prolog: aM(a.prolog, f),
            property: aM(a.property, f),
            pseudoClass: aM(a.pseudoClass, f),
            pseudoElement: aM(a.pseudoElement, f),
            punctuation: aM(a.punctuation, f),
            regex: aM(a.regex, f),
            selector: aM(a.selector, f),
            string: aM(a.string, f),
            symbol: aM(a.symbol, f),
            tag: aM(a.tag, f),
            unit: aM(a.unit, f),
            url: aM(a.url, f),
            variable: aM(a.variable, f),
          };
        })(a.syntax, { baseBg: j, colorPalette: g, blendMode: i }),
        selectable: m,
      };
    }
    function aQ(a, b) {
      let c = {};
      for (let d of g)
        c[d] = (function (a, b) {
          let { baseBg: c, blendMode: d, colorPalette: e } = b,
            f = a._blend || "multiply",
            g = aM(a.bg, { bg: c, blendMode: d, colorPalette: e });
          return { _blend: f, bg: g, fg: aM(a.fg, { bg: g, blendMode: f, colorPalette: e }) };
        })(a[d], b);
      return c;
    }
    function aR(a, b) {
      let c = {};
      for (let d of ae)
        c[d] = (function (a, b) {
          let { baseBg: c, blendMode: d, colorPalette: e } = b,
            f = aM(a.bg, { bg: c, blendMode: d, colorPalette: e }),
            g = { bg: f, blendMode: d, colorPalette: e };
          return { bg: f, dot: aM(a.dot, g), fg: aM(a.fg, g), icon: aM(a.icon, g) };
        })(a[d], b);
      return c;
    }
    function aS(a, b) {
      let c = {};
      for (let f of ae) {
        var d, e;
        c[f] =
          ((d = a[f]),
          (e = b),
          {
            enabled: aT(d.enabled, e),
            hovered: aT(d.hovered, e),
            pressed: aT(d.pressed, e),
            selected: aT(d.selected, e),
            disabled: aT(d.disabled, e),
          });
      }
      return c;
    }
    function aT(a, b) {
      let { baseBg: c, blendMode: d, colorPalette: e } = b,
        f = a._blend || "multiply",
        g = aM(a.bg, { bg: c, blendMode: d, colorPalette: e }),
        h = { bg: g, blendMode: f, colorPalette: e };
      return {
        _blend: f,
        accent: { fg: aM(a.accent.fg, h) },
        avatar: aQ(a.avatar, { baseBg: g, colorPalette: e, blendMode: f }),
        badge: aR(a.badge, { baseBg: g, colorPalette: e, blendMode: f }),
        bg: g,
        border: aM(a.border, h),
        code: { bg: aM(a.code.bg, h), fg: aM(a.code.fg, h) },
        fg: aM(a.fg, h),
        icon: aM(a.icon, h),
        link: { fg: aM(a.link.fg, h) },
        muted: { bg: aM(a.muted.bg, h), fg: aM(a.muted.fg, h) },
        kbd: { bg: aM(a.kbd.bg, h), fg: aM(a.kbd.fg, h), border: aM(a.kbd.border, h) },
        skeleton: { from: aM(a.skeleton?.from, h), to: aM(a.skeleton?.to, h) },
      };
    }
    function aU(a, b) {
      return {
        enabled: aV(a.enabled, b),
        hovered: aV(a.hovered, b),
        readOnly: aV(a.readOnly, b),
        disabled: aV(a.disabled, b),
      };
    }
    function aV(a, b) {
      let { baseBg: c, blendMode: d, colorPalette: e } = b,
        f = a._blend || "multiply",
        g = aM(a.bg, { colorPalette: e, bg: c, blendMode: d }),
        h = { colorPalette: e, bg: g, blendMode: f };
      return {
        _blend: f,
        bg: g,
        border: aM(a.border, h),
        fg: aM(a.fg, h),
        muted: { bg: aM(a.muted.bg, h) },
        placeholder: aM(a.placeholder, h),
      };
    }
    function aW(a) {
      var b;
      let c,
        d,
        e,
        f =
          ((b = a),
          {
            light: at(
              { scheme: "light" },
              (d = {
                color: {
                  base: (function (a) {
                    let b = {};
                    for (let c of ad)
                      b[c] = (function (a, b) {
                        let c = ar(a?.base?.["*"], a?.base?.[b]),
                          d = c._hue || a?.base?.[b]?._hue || "gray";
                        return {
                          ...c,
                          _hue: d,
                          avatar: g.reduce(
                            (a, b) => ({ ...a, [b]: ar({ _hue: b }, c.avatar?.["*"], c.avatar?.[b]) }),
                            {},
                          ),
                          badge: ae.reduce(
                            (b, e) => ({
                              ...b,
                              [e]: { _hue: a?.base?.[e]?._hue || d, ...c.badge?.["*"], ...c.badge?.[e] },
                            }),
                            {},
                          ),
                        };
                      })(a, c);
                    return b;
                  })((c = ar(ap, b?.color))),
                  button: (function (a) {
                    let b = {};
                    for (let c of ag)
                      b[c] = (function (a, b) {
                        let c = {};
                        for (let d of ae)
                          c[d] = (function (a, b, c) {
                            let d = {};
                            for (let e of af)
                              d[e] = (function (a, b, c, d) {
                                let e = ar(
                                    a?.button?.[c]?.["*"]?.["*"],
                                    a?.button?.[c]?.[b]?.["*"],
                                    a?.button?.[c]?.["*"]?.[d],
                                    a?.button?.[c]?.[b]?.[d],
                                  ),
                                  f = e._hue || a?.base?.[b]?._hue;
                                return {
                                  ...e,
                                  _hue: f,
                                  avatar: g.reduce(
                                    (a, b) => ({ ...a, [b]: ar({ _hue: b }, e.avatar?.["*"], e.avatar?.[b]) }),
                                    {},
                                  ),
                                  badge: ae.reduce(
                                    (b, c) => ({
                                      ...b,
                                      [c]: { _hue: a?.base?.[c]?._hue || f, ...e.badge?.["*"], ...e.badge?.[c] },
                                    }),
                                    {},
                                  ),
                                };
                              })(a, c, b, e);
                            return d;
                          })(a, b, d);
                        return c;
                      })(a, c);
                    return b;
                  })(c),
                  input: (function (a) {
                    let b = {};
                    for (let c of ah)
                      b[c] = (function (a, b) {
                        let c = {};
                        for (let d of ai)
                          c[d] = (function (a, b, c) {
                            let d = ar(
                                a?.input?.["*"]?.["*"],
                                a?.input?.[b]?.["*"],
                                a?.input?.["*"]?.[c],
                                a?.input?.[b]?.[c],
                              ),
                              e = d._hue || a?.input?.[b]?._hue;
                            return { ...d, _hue: e };
                          })(a, b, d);
                        return c;
                      })(a, c);
                    return b;
                  })(c),
                  selectable: (function (a) {
                    let b = {};
                    for (let c of ae)
                      b[c] = (function (a, b) {
                        let c = { _hue: a?.selectable?.[b]?._hue || a?.base?.[b]?._hue };
                        for (let d of af)
                          c[d] = (function (a, b, c) {
                            let d = ar(
                                a?.selectable?.["*"]?.["*"],
                                a?.selectable?.[b]?.["*"],
                                a?.selectable?.["*"]?.[c],
                                a?.selectable?.[b]?.[c],
                              ),
                              e = d._hue || a?.base?.[b]?._hue;
                            return {
                              ...d,
                              _hue: e,
                              avatar: g.reduce(
                                (a, b) => ({ ...a, [b]: ar({ _hue: b }, d.avatar?.["*"], d.avatar?.[b]) }),
                                {},
                              ),
                              badge: ae.reduce(
                                (b, c) => ({
                                  ...b,
                                  [c]: { _hue: a?.base?.[c]?._hue || e, ...d.badge?.["*"], ...d.badge?.[c] },
                                }),
                                {},
                              ),
                            };
                          })(a, b, d);
                        return c;
                      })(a, c);
                    return b;
                  })(c),
                  syntax: c.syntax,
                },
              }),
            ),
            dark: at({ scheme: "dark" }, d),
          });
      return $({
        _version: 2,
        avatar: a?.avatar ?? D,
        button: a?.button ?? E,
        card: a?.card ?? F,
        color: { light: aO((e = a?.palette ?? r), f.light), dark: aO(e, f.dark) },
        container: a?.container ?? G,
        font: a?.font ?? O,
        input: a?.input ?? M,
        layer: a?.layer ?? I,
        media: a?.media ?? H,
        radius: a?.radius ?? J,
        shadow: a?.shadow ?? K,
        space: a?.space ?? L,
        style: a?.style ?? N,
      });
    }
    let aX = new Map();
    function aY(a, b, c) {
      var d, e, f, g, h;
      let i,
        j = (function (a, b, c) {
          let d = aX.get(b);
          if (!d) return;
          let e = d.get(c);
          if (e) return e.get(a);
        })(a, b, c);
      if (j) return j;
      let k = X(a) ? $(a) : a,
        l = X(a)
          ? a
          : (function (a) {
              if (a.v2) return a.v2;
              let b = Y.get(a);
              if (b) return b;
              let {
                  avatar: c,
                  button: d,
                  color: e,
                  container: f,
                  fonts: g,
                  input: h,
                  layer: i,
                  media: j,
                  radius: k,
                  shadows: l,
                  space: m,
                  styles: n,
                } = a,
                o = {
                  _version: 2,
                  avatar: { ...D, ...c },
                  button: { ...E, ...d },
                  card: F,
                  color: {
                    light: {
                      transparent: Q(e.light.transparent),
                      default: Q(e.light.default),
                      neutral: Q(e.light.transparent),
                      primary: Q(e.light.primary),
                      suggest: Q(e.light.primary),
                      positive: Q(e.light.positive),
                      caution: Q(e.light.caution),
                      critical: Q(e.light.critical),
                    },
                    dark: {
                      transparent: Q(e.dark.transparent),
                      default: Q(e.dark.default),
                      neutral: Q(e.dark.transparent),
                      primary: Q(e.dark.primary),
                      suggest: Q(e.dark.primary),
                      positive: Q(e.dark.positive),
                      caution: Q(e.dark.caution),
                      critical: Q(e.dark.critical),
                    },
                  },
                  container: f,
                  font: g,
                  input: {
                    ...M,
                    ...h,
                    checkbox: { ...M.checkbox, ...h.checkbox },
                    radio: { ...M.radio, ...h.radio },
                    switch: { ...M.switch, ...h.switch },
                  },
                  layer: i ?? I,
                  media: j,
                  radius: k,
                  shadow: l,
                  space: m,
                  style: n,
                };
              return (Y.set(a, o), o);
            })(a),
        m = k.color[b] || k.color.light,
        n = m[c] || m.default,
        o = k.layer || I,
        p = l.color[b] || l.color.light,
        q =
          "neutral" in (d = p[c] || p.default).badge
            ? d
            : {
                ...d,
                badge: { ...d.badge, neutral: d.badge.default, suggest: d.badge.primary },
                button: {
                  bleed: { ...d.button.bleed, neutral: d.button.bleed.default, suggest: d.button.bleed.primary },
                  default: {
                    ...d.button.default,
                    neutral: d.button.default.default,
                    suggest: d.button.default.primary,
                  },
                  ghost: { ...d.button.ghost, neutral: d.button.ghost.default, suggest: d.button.ghost.primary },
                },
                selectable: { ...d.selectable, neutral: d.selectable.default, suggest: d.selectable.primary },
              },
        r = l.layer || I,
        s = { sanity: { ...k, color: n, layer: o, v2: { ...l, _resolved: !0, color: q, layer: r } } };
      return (
        (e = a),
        (f = b),
        (g = c),
        (h = s),
        aX.has(f) || aX.set(f, new Map()),
        (i = aX.get(f)).has(g) || i.set(g, new WeakMap()),
        i.get(g).set(e, h),
        s
      );
    }
    a.s(
      [
        "buildTheme",
        () => aW,
        "createColorTheme",
        () => A,
        "getScopedTheme",
        () => aY,
        "getTheme_v2",
        () => W,
        "hexToRgb",
        () => aE,
        "hslToRgb",
        () => aH,
        "multiply",
        () => az,
        "parseColor",
        () => aJ,
        "rgbToHex",
        () => aF,
        "rgbToHsl",
        () => aG,
        "rgba",
        () => aK,
        "screen",
        () => aA,
      ],
      428391,
    );
    var aZ,
      a$,
      a_,
      a0,
      a1 = a.i(13795),
      a2 = a.i(813394),
      a3 = a.i(805485),
      a4 = function () {
        return (a4 =
          Object.assign ||
          function (a) {
            for (var b, c = 1, d = arguments.length; c < d; c++)
              for (var e in (b = arguments[c])) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
            return a;
          }).apply(this, arguments);
      };
    function a5(a, b, c) {
      if (c || 2 == arguments.length)
        for (var d, e = 0, f = b.length; e < f; e++)
          (!d && e in b) || (d || (d = Array.prototype.slice.call(b, 0, e)), (d[e] = b[e]));
      return a.concat(d || Array.prototype.slice.call(b));
    }
    ("function" == typeof SuppressedError && SuppressedError, a.i(881996));
    var a6 = a.i(631035),
      a7 = "-ms-",
      a8 = "-moz-",
      a9 = "-webkit-",
      ba = "comm",
      bb = "rule",
      bc = "decl",
      bd = "@keyframes",
      be = Math.abs,
      bf = String.fromCharCode,
      bg = Object.assign;
    function bh(a, b) {
      return (a = b.exec(a)) ? a[0] : a;
    }
    function bi(a, b, c) {
      return a.replace(b, c);
    }
    function bj(a, b, c) {
      return a.indexOf(b, c);
    }
    function bk(a, b) {
      return 0 | a.charCodeAt(b);
    }
    function bl(a, b, c) {
      return a.slice(b, c);
    }
    function bm(a) {
      return a.length;
    }
    function bn(a, b) {
      return (b.push(a), a);
    }
    function bo(a, b) {
      return a.filter(function (a) {
        return !bh(a, b);
      });
    }
    var bp = 1,
      bq = 1,
      br = 0,
      bs = 0,
      bt = 0,
      bu = "";
    function bv(a, b, c, d, e, f, g, h) {
      return {
        value: a,
        root: b,
        parent: c,
        type: d,
        props: e,
        children: f,
        line: bp,
        column: bq,
        length: g,
        return: "",
        siblings: h,
      };
    }
    function bw(a, b) {
      return bg(bv("", null, null, "", null, null, 0, a.siblings), a, { length: -a.length }, b);
    }
    function bx(a) {
      for (; a.root; ) a = bw(a.root, { children: [a] });
      bn(a, a.siblings);
    }
    function by() {
      return ((bt = bs < br ? bk(bu, bs++) : 0), bq++, 10 === bt && ((bq = 1), bp++), bt);
    }
    function bz() {
      return bk(bu, bs);
    }
    function bA(a) {
      switch (a) {
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
    function bB(a) {
      var b, c;
      return ((b = bs - 1),
      (c = (function a(b) {
        for (; by(); )
          switch (bt) {
            case b:
              return bs;
            case 34:
            case 39:
              34 !== b && 39 !== b && a(bt);
              break;
            case 40:
              41 === b && a(b);
              break;
            case 92:
              by();
          }
        return bs;
      })(91 === a ? a + 2 : 40 === a ? a + 1 : a)),
      bl(bu, b, c)).trim();
    }
    function bC(a, b) {
      for (var c = "", d = 0; d < a.length; d++) c += b(a[d], d, a, b) || "";
      return c;
    }
    function bD(a, b, c, d) {
      switch (a.type) {
        case "@layer":
          if (a.children.length) break;
        case "@import":
        case bc:
          return (a.return = a.return || a.value);
        case ba:
          return "";
        case bd:
          return (a.return = a.value + "{" + bC(a.children, d) + "}");
        case bb:
          if (!bm((a.value = a.props.join(",")))) return "";
      }
      return bm((c = bC(a.children, d))) ? (a.return = a.value + "{" + c + "}") : "";
    }
    function bE(a, b, c, d) {
      if (a.length > -1 && !a.return)
        switch (a.type) {
          case bc:
            a.return = (function a(b, c, d) {
              var e;
              switch (
                ((e = c),
                45 ^ bk(b, 0) ? (((((((e << 2) ^ bk(b, 0)) << 2) ^ bk(b, 1)) << 2) ^ bk(b, 2)) << 2) ^ bk(b, 3) : 0)
              ) {
                case 5103:
                  return a9 + "print-" + b + b;
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
                  return a9 + b + b;
                case 4789:
                  return a8 + b + b;
                case 5349:
                case 4246:
                case 4810:
                case 6968:
                case 2756:
                  return a9 + b + a8 + b + a7 + b + b;
                case 5936:
                  switch (bk(b, c + 11)) {
                    case 114:
                      return a9 + b + a7 + bi(b, /[svh]\w+-[tblr]{2}/, "tb") + b;
                    case 108:
                      return a9 + b + a7 + bi(b, /[svh]\w+-[tblr]{2}/, "tb-rl") + b;
                    case 45:
                      return a9 + b + a7 + bi(b, /[svh]\w+-[tblr]{2}/, "lr") + b;
                  }
                case 6828:
                case 4268:
                case 2903:
                  return a9 + b + a7 + b + b;
                case 6165:
                  return a9 + b + a7 + "flex-" + b + b;
                case 5187:
                  return a9 + b + bi(b, /(\w+).+(:[^]+)/, a9 + "box-$1$2" + a7 + "flex-$1$2") + b;
                case 5443:
                  return (
                    a9 +
                    b +
                    a7 +
                    "flex-item-" +
                    bi(b, /flex-|-self/g, "") +
                    (bh(b, /flex-|baseline/) ? "" : a7 + "grid-row-" + bi(b, /flex-|-self/g, "")) +
                    b
                  );
                case 4675:
                  return a9 + b + a7 + "flex-line-pack" + bi(b, /align-content|flex-|-self/g, "") + b;
                case 5548:
                  return a9 + b + a7 + bi(b, "shrink", "negative") + b;
                case 5292:
                  return a9 + b + a7 + bi(b, "basis", "preferred-size") + b;
                case 6060:
                  return a9 + "box-" + bi(b, "-grow", "") + a9 + b + a7 + bi(b, "grow", "positive") + b;
                case 4554:
                  return a9 + bi(b, /([^-])(transform)/g, "$1" + a9 + "$2") + b;
                case 6187:
                  return bi(bi(bi(b, /(zoom-|grab)/, a9 + "$1"), /(image-set)/, a9 + "$1"), b, "") + b;
                case 5495:
                case 3959:
                  return bi(b, /(image-set\([^]*)/, a9 + "$1$`$1");
                case 4968:
                  return (
                    bi(bi(b, /(.+:)(flex-)?(.*)/, a9 + "box-pack:$3" + a7 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") +
                    a9 +
                    b +
                    b
                  );
                case 4200:
                  if (!bh(b, /flex-|baseline/)) return a7 + "grid-column-align" + bl(b, c) + b;
                  break;
                case 2592:
                case 3360:
                  return a7 + bi(b, "template-", "") + b;
                case 4384:
                case 3616:
                  if (
                    d &&
                    d.some(function (a, b) {
                      return ((c = b), bh(a.props, /grid-\w+-end/));
                    })
                  )
                    return ~bj(b + (d = d[c].value), "span", 0)
                      ? b
                      : a7 +
                          bi(b, "-start", "") +
                          b +
                          a7 +
                          "grid-row-span:" +
                          (~bj(d, "span", 0) ? bh(d, /\d+/) : bh(d, /\d+/) - bh(b, /\d+/)) +
                          ";";
                  return a7 + bi(b, "-start", "") + b;
                case 4896:
                case 4128:
                  return d &&
                    d.some(function (a) {
                      return bh(a.props, /grid-\w+-start/);
                    })
                    ? b
                    : a7 + bi(bi(b, "-end", "-span"), "span ", "") + b;
                case 4095:
                case 3583:
                case 4068:
                case 2532:
                  return bi(b, /(.+)-inline(.+)/, a9 + "$1$2") + b;
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
                  if (bm(b) - 1 - c > 6)
                    switch (bk(b, c + 1)) {
                      case 109:
                        if (45 !== bk(b, c + 4)) break;
                      case 102:
                        return (
                          bi(
                            b,
                            /(.+:)(.+)-([^]+)/,
                            "$1" + a9 + "$2-$3$1" + a8 + (108 == bk(b, c + 3) ? "$3" : "$2-$3"),
                          ) + b
                        );
                      case 115:
                        return ~bj(b, "stretch", 0) ? a(bi(b, "stretch", "fill-available"), c, d) + b : b;
                    }
                  break;
                case 5152:
                case 5920:
                  return bi(b, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (a, c, d, e, f, g, h) {
                    return a7 + c + ":" + d + h + (e ? a7 + c + "-span:" + (f ? g : g - d) + h : "") + b;
                  });
                case 4949:
                  if (121 === bk(b, c + 6)) return bi(b, ":", ":" + a9) + b;
                  break;
                case 6444:
                  switch (bk(b, 45 === bk(b, 14) ? 18 : 11)) {
                    case 120:
                      return (
                        bi(
                          b,
                          /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                          "$1" + a9 + (45 === bk(b, 14) ? "inline-" : "") + "box$3$1" + a9 + "$2$3$1" + a7 + "$2box$3",
                        ) + b
                      );
                    case 100:
                      return bi(b, ":", ":" + a7) + b;
                  }
                  break;
                case 5719:
                case 2647:
                case 2135:
                case 3927:
                case 2391:
                  return bi(b, "scroll-", "scroll-snap-") + b;
              }
              return b;
            })(a.value, a.length, c);
            return;
          case bd:
            return bC([bw(a, { value: bi(a.value, "@", "@" + a9) })], d);
          case bb:
            if (a.length) {
              var e, f;
              return (
                (e = c = a.props),
                (f = function (b) {
                  switch (bh(b, (d = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      (bx(bw(a, { props: [bi(b, /:(read-\w+)/, ":" + a8 + "$1")] })),
                        bx(bw(a, { props: [b] })),
                        bg(a, { props: bo(c, d) }));
                      break;
                    case "::placeholder":
                      (bx(bw(a, { props: [bi(b, /:(plac\w+)/, ":" + a9 + "input-$1")] })),
                        bx(bw(a, { props: [bi(b, /:(plac\w+)/, ":" + a8 + "$1")] })),
                        bx(bw(a, { props: [bi(b, /:(plac\w+)/, a7 + "input-$1")] })),
                        bx(bw(a, { props: [b] })),
                        bg(a, { props: bo(c, d) }));
                  }
                  return "";
                }),
                e.map(f).join("")
              );
            }
        }
    }
    function bF(a, b, c, d, e, f, g, h, i, j, k, l) {
      for (var m = e - 1, n = 0 === e ? f : [""], o = n.length, p = 0, q = 0, r = 0; p < d; ++p)
        for (var s = 0, t = bl(a, m + 1, (m = be((q = g[p])))), u = a; s < o; ++s)
          (u = (q > 0 ? n[s] + " " + t : bi(t, /&\f/g, n[s])).trim()) && (i[r++] = u);
      return bv(a, b, c, 0 === e ? bb : h, i, j, k, l);
    }
    function bG(a, b, c, d, e) {
      return bv(a, b, c, bc, bl(a, 0, d), bl(a, d + 1, -1), d, e);
    }
    var bH = {
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
      bI =
        ("undefined" != typeof process &&
          void 0 !== process.env &&
          (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
        "data-styled",
      bJ = "active",
      bK = "data-styled-version",
      bL = "6.1.19",
      bM = "/*!sc*/\n",
      bN = !!("boolean" == typeof SC_DISABLE_SPEEDY
        ? SC_DISABLE_SPEEDY
        : "undefined" != typeof process &&
            void 0 !== process.env &&
            void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
            "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
          ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY
          : "undefined" != typeof process &&
            void 0 !== process.env &&
            void 0 !== process.env.SC_DISABLE_SPEEDY &&
            "" !== process.env.SC_DISABLE_SPEEDY &&
            "false" !== process.env.SC_DISABLE_SPEEDY &&
            process.env.SC_DISABLE_SPEEDY),
      bO = {},
      bP = Object.freeze([]),
      bQ = Object.freeze({});
    function bR(a, b, c) {
      return (void 0 === c && (c = bQ), (a.theme !== c.theme && a.theme) || b || c.theme);
    }
    var bS = new Set([
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
      bT = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
      bU = /(^-|-$)/g;
    function bV(a) {
      return a.replace(bT, "-").replace(bU, "");
    }
    var bW = /(a)(d)/gi,
      bX = function (a) {
        return String.fromCharCode(a + (a > 25 ? 39 : 97));
      };
    function bY(a) {
      var b,
        c = "";
      for (b = Math.abs(a); b > 52; b = (b / 52) | 0) c = bX(b % 52) + c;
      return (bX(b % 52) + c).replace(bW, "$1-$2");
    }
    var bZ,
      b$ = function (a, b) {
        for (var c = b.length; c; ) a = (33 * a) ^ b.charCodeAt(--c);
        return a;
      },
      b_ = function (a) {
        return b$(5381, a);
      };
    function b0(a) {
      return bY(b_(a) >>> 0);
    }
    function b1(a) {
      return "string" == typeof a;
    }
    var b2 = "function" == typeof Symbol && Symbol.for,
      b3 = b2 ? Symbol.for("react.memo") : 60115,
      b4 = b2 ? Symbol.for("react.forward_ref") : 60112,
      b5 = {
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
      b6 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
      b7 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
      b8 =
        (((bZ = {})[b4] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
        (bZ[b3] = b7),
        bZ);
    function b9(a) {
      return ("type" in a && a.type.$$typeof) === b3 ? b7 : "$$typeof" in a ? b8[a.$$typeof] : b5;
    }
    var ca = Object.defineProperty,
      cb = Object.getOwnPropertyNames,
      cc = Object.getOwnPropertySymbols,
      cd = Object.getOwnPropertyDescriptor,
      ce = Object.getPrototypeOf,
      cf = Object.prototype;
    function cg(a) {
      return "function" == typeof a;
    }
    function ch(a) {
      return "object" == typeof a && "styledComponentId" in a;
    }
    function ci(a, b) {
      return a && b ? "".concat(a, " ").concat(b) : a || b || "";
    }
    function cj(a, b) {
      if (0 === a.length) return "";
      for (var c = a[0], d = 1; d < a.length; d++) c += b ? b + a[d] : a[d];
      return c;
    }
    function ck(a) {
      return null !== a && "object" == typeof a && a.constructor.name === Object.name && !("props" in a && a.$$typeof);
    }
    function cl(a, b) {
      Object.defineProperty(a, "toString", { value: b });
    }
    function cm(a) {
      for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
      return Error(
        "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
          .concat(a, " for more information.")
          .concat(b.length > 0 ? " Args: ".concat(b.join(", ")) : ""),
      );
    }
    var cn = (function () {
        function a(a) {
          ((this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = a));
        }
        return (
          (a.prototype.indexOfGroup = function (a) {
            for (var b = 0, c = 0; c < a; c++) b += this.groupSizes[c];
            return b;
          }),
          (a.prototype.insertRules = function (a, b) {
            if (a >= this.groupSizes.length) {
              for (var c = this.groupSizes, d = c.length, e = d; a >= e; )
                if ((e <<= 1) < 0) throw cm(16, "".concat(a));
              ((this.groupSizes = new Uint32Array(e)), this.groupSizes.set(c), (this.length = e));
              for (var f = d; f < e; f++) this.groupSizes[f] = 0;
            }
            for (var g = this.indexOfGroup(a + 1), h = ((f = 0), b.length); f < h; f++)
              this.tag.insertRule(g, b[f]) && (this.groupSizes[a]++, g++);
          }),
          (a.prototype.clearGroup = function (a) {
            if (a < this.length) {
              var b = this.groupSizes[a],
                c = this.indexOfGroup(a),
                d = c + b;
              this.groupSizes[a] = 0;
              for (var e = c; e < d; e++) this.tag.deleteRule(c);
            }
          }),
          (a.prototype.getGroup = function (a) {
            var b = "";
            if (a >= this.length || 0 === this.groupSizes[a]) return b;
            for (var c = this.groupSizes[a], d = this.indexOfGroup(a), e = d + c, f = d; f < e; f++)
              b += "".concat(this.tag.getRule(f)).concat(bM);
            return b;
          }),
          a
        );
      })(),
      co = new Map(),
      cp = new Map(),
      cq = 1,
      cr = function (a) {
        if (co.has(a)) return co.get(a);
        for (; cp.has(cq); ) cq++;
        var b = cq++;
        return (co.set(a, b), cp.set(b, a), b);
      },
      cs = "style[".concat(bI, "][").concat(bK, '="').concat(bL, '"]'),
      ct = new RegExp("^".concat(bI, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
    function cu() {
      return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
    }
    var cv = function (a) {
        var b,
          c = document.head,
          d = a || c,
          e = document.createElement("style"),
          f = (b = Array.from(d.querySelectorAll("style[".concat(bI, "]"))))[b.length - 1],
          g = void 0 !== f ? f.nextSibling : null;
        (e.setAttribute(bI, bJ), e.setAttribute(bK, bL));
        var h = cu();
        return (h && e.setAttribute("nonce", h), d.insertBefore(e, g), e);
      },
      cw = (function () {
        function a(a) {
          ((this.element = cv(a)),
            this.element.appendChild(document.createTextNode("")),
            (this.sheet = (function (a) {
              if (a.sheet) return a.sheet;
              for (var b = document.styleSheets, c = 0, d = b.length; c < d; c++) {
                var e = b[c];
                if (e.ownerNode === a) return e;
              }
              throw cm(17);
            })(this.element)),
            (this.length = 0));
        }
        return (
          (a.prototype.insertRule = function (a, b) {
            try {
              return (this.sheet.insertRule(b, a), this.length++, !0);
            } catch (a) {
              return !1;
            }
          }),
          (a.prototype.deleteRule = function (a) {
            (this.sheet.deleteRule(a), this.length--);
          }),
          (a.prototype.getRule = function (a) {
            var b = this.sheet.cssRules[a];
            return b && b.cssText ? b.cssText : "";
          }),
          a
        );
      })(),
      cx = (function () {
        function a(a) {
          ((this.element = cv(a)), (this.nodes = this.element.childNodes), (this.length = 0));
        }
        return (
          (a.prototype.insertRule = function (a, b) {
            if (a <= this.length && a >= 0) {
              var c = document.createTextNode(b);
              return (this.element.insertBefore(c, this.nodes[a] || null), this.length++, !0);
            }
            return !1;
          }),
          (a.prototype.deleteRule = function (a) {
            (this.element.removeChild(this.nodes[a]), this.length--);
          }),
          (a.prototype.getRule = function (a) {
            return a < this.length ? this.nodes[a].textContent : "";
          }),
          a
        );
      })(),
      cy = (function () {
        function a(a) {
          ((this.rules = []), (this.length = 0));
        }
        return (
          (a.prototype.insertRule = function (a, b) {
            return a <= this.length && (this.rules.splice(a, 0, b), this.length++, !0);
          }),
          (a.prototype.deleteRule = function (a) {
            (this.rules.splice(a, 1), this.length--);
          }),
          (a.prototype.getRule = function (a) {
            return a < this.length ? this.rules[a] : "";
          }),
          a
        );
      })(),
      cz = { isServer: !0, useCSSOMInjection: !bN },
      cA = (function () {
        function a(a, b, c) {
          (void 0 === a && (a = bQ), void 0 === b && (b = {}));
          var d = this;
          ((this.options = a4(a4({}, cz), a)),
            (this.gs = b),
            (this.names = new Map(c)),
            (this.server = !!a.isServer),
            this.server,
            cl(this, function () {
              for (var a = d.getTag(), b = a.length, c = "", e = 0; e < b; e++)
                !(function (b) {
                  var e = cp.get(b);
                  if (void 0 === e) return;
                  var f = d.names.get(e),
                    g = a.getGroup(b);
                  if (void 0 !== f && f.size && 0 !== g.length) {
                    var h = "".concat(bI, ".g").concat(b, '[id="').concat(e, '"]'),
                      i = "";
                    (void 0 !== f &&
                      f.forEach(function (a) {
                        a.length > 0 && (i += "".concat(a, ","));
                      }),
                      (c += "".concat(g).concat(h, '{content:"').concat(i, '"}').concat(bM)));
                  }
                })(e);
              return c;
            }));
        }
        return (
          (a.registerId = function (a) {
            return cr(a);
          }),
          (a.prototype.rehydrate = function () {
            this.server;
          }),
          (a.prototype.reconstructWithOptions = function (b, c) {
            return (void 0 === c && (c = !0), new a(a4(a4({}, this.options), b), this.gs, (c && this.names) || void 0));
          }),
          (a.prototype.allocateGSInstance = function (a) {
            return (this.gs[a] = (this.gs[a] || 0) + 1);
          }),
          (a.prototype.getTag = function () {
            var a, b, c;
            return (
              this.tag ||
              (this.tag =
                ((b = (a = this.options).useCSSOMInjection),
                (c = a.target),
                new cn(a.isServer ? new cy(c) : b ? new cw(c) : new cx(c))))
            );
          }),
          (a.prototype.hasNameForId = function (a, b) {
            return this.names.has(a) && this.names.get(a).has(b);
          }),
          (a.prototype.registerName = function (a, b) {
            if ((cr(a), this.names.has(a))) this.names.get(a).add(b);
            else {
              var c = new Set();
              (c.add(b), this.names.set(a, c));
            }
          }),
          (a.prototype.insertRules = function (a, b, c) {
            (this.registerName(a, b), this.getTag().insertRules(cr(a), c));
          }),
          (a.prototype.clearNames = function (a) {
            this.names.has(a) && this.names.get(a).clear();
          }),
          (a.prototype.clearRules = function (a) {
            (this.getTag().clearGroup(cr(a)), this.clearNames(a));
          }),
          (a.prototype.clearTag = function () {
            this.tag = void 0;
          }),
          a
        );
      })(),
      cB = /&/g,
      cC = /^\s*\/\/.*$/gm;
    function cD(a) {
      var b,
        c,
        d,
        e = void 0 === a ? bQ : a,
        f = e.options,
        g = void 0 === f ? bQ : f,
        h = e.plugins,
        i = void 0 === h ? bP : h,
        j = function (a, d, e) {
          return e.startsWith(c) && e.endsWith(c) && e.replaceAll(c, "").length > 0 ? ".".concat(b) : a;
        },
        k = i.slice();
      (k.push(function (a) {
        a.type === bb && a.value.includes("&") && (a.props[0] = a.props[0].replace(cB, c).replace(d, j));
      }),
        g.prefix && k.push(bE),
        k.push(bD));
      var l = function (a, e, f, h) {
        (void 0 === e && (e = ""),
          void 0 === f && (f = ""),
          void 0 === h && (h = "&"),
          (b = h),
          (c = e),
          (d = RegExp("\\".concat(c, "\\b"), "g")));
        var i,
          j,
          l,
          m,
          n,
          o,
          p = a.replace(cC, ""),
          q =
            ((n = (function a(b, c, d, e, f, g, h, i, j) {
              for (
                var k,
                  l,
                  m,
                  n,
                  o = 0,
                  p = 0,
                  q = h,
                  r = 0,
                  s = 0,
                  t = 0,
                  u = 1,
                  v = 1,
                  w = 1,
                  x = 0,
                  y = "",
                  z = f,
                  A = g,
                  B = e,
                  C = y;
                v;
              )
                switch (((t = x), (x = by()))) {
                  case 40:
                    if (108 != t && 58 == bk(C, q - 1)) {
                      -1 != bj((C += bi(bB(x), "&", "&\f")), "&\f", be(o ? i[o - 1] : 0)) && (w = -1);
                      break;
                    }
                  case 34:
                  case 39:
                  case 91:
                    C += bB(x);
                    break;
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    C += (function (a) {
                      for (; (bt = bz()); )
                        if (bt < 33) by();
                        else break;
                      return bA(a) > 2 || bA(bt) > 3 ? "" : " ";
                    })(t);
                    break;
                  case 92:
                    C += (function (a, b) {
                      for (
                        var c;
                        --b &&
                        by() &&
                        !(bt < 48) &&
                        !(bt > 102) &&
                        (!(bt > 57) || !(bt < 65)) &&
                        (!(bt > 70) || !(bt < 97));
                      );
                      return ((c = bs + (b < 6 && 32 == bz() && 32 == by())), bl(bu, a, c));
                    })(bs - 1, 7);
                    continue;
                  case 47:
                    switch (bz()) {
                      case 42:
                      case 47:
                        bn(
                          ((k = (function (a, b) {
                            for (; by(); )
                              if (a + bt === 57) break;
                              else if (a + bt === 84 && 47 === bz()) break;
                            return "/*" + bl(bu, b, bs - 1) + "*" + bf(47 === a ? a : by());
                          })(by(), bs)),
                          (l = c),
                          (m = d),
                          (n = j),
                          bv(k, l, m, ba, bf(bt), bl(k, 2, -2), 0, n)),
                          j,
                        );
                        break;
                      default:
                        C += "/";
                    }
                    break;
                  case 123 * u:
                    i[o++] = bm(C) * w;
                  case 125 * u:
                  case 59:
                  case 0:
                    switch (x) {
                      case 0:
                      case 125:
                        v = 0;
                      case 59 + p:
                        (-1 == w && (C = bi(C, /\f/g, "")),
                          s > 0 &&
                            bm(C) - q &&
                            bn(s > 32 ? bG(C + ";", e, d, q - 1, j) : bG(bi(C, " ", "") + ";", e, d, q - 2, j), j));
                        break;
                      case 59:
                        C += ";";
                      default:
                        if ((bn((B = bF(C, c, d, o, p, f, i, y, (z = []), (A = []), q, g)), g), 123 === x))
                          if (0 === p) a(C, c, B, B, z, g, q, i, A);
                          else
                            switch (99 === r && 110 === bk(C, 3) ? 100 : r) {
                              case 100:
                              case 108:
                              case 109:
                              case 115:
                                a(
                                  b,
                                  B,
                                  B,
                                  e && bn(bF(b, B, B, 0, 0, f, i, y, f, (z = []), q, A), A),
                                  f,
                                  A,
                                  q,
                                  i,
                                  e ? z : A,
                                );
                                break;
                              default:
                                a(C, B, B, B, [""], A, 0, i, A);
                            }
                    }
                    ((o = p = s = 0), (u = w = 1), (y = C = ""), (q = h));
                    break;
                  case 58:
                    ((q = 1 + bm(C)), (s = t));
                  default:
                    if (u < 1) {
                      if (123 == x) --u;
                      else if (
                        125 == x &&
                        0 == u++ &&
                        125 == ((bt = bs > 0 ? bk(bu, --bs) : 0), bq--, 10 === bt && ((bq = 1), bp--), bt)
                      )
                        continue;
                    }
                    switch (((C += bf(x)), x * u)) {
                      case 38:
                        w = p > 0 ? 1 : ((C += "\f"), -1);
                        break;
                      case 44:
                        ((i[o++] = (bm(C) - 1) * w), (w = 1));
                        break;
                      case 64:
                        (45 === bz() && (C += bB(by())),
                          (r = bz()),
                          (p = q =
                            bm(
                              (y = C +=
                                (function (a) {
                                  for (; !bA(bz()); ) by();
                                  return bl(bu, a, bs);
                                })(bs)),
                            )),
                          x++);
                        break;
                      case 45:
                        45 === t && 2 == bm(C) && (u = 0);
                    }
                }
              return g;
            })(
              "",
              null,
              null,
              null,
              [""],
              ((m = l = f || e ? "".concat(f, " ").concat(e, " { ").concat(p, " }") : p),
              (bp = bq = 1),
              (br = bm((bu = m))),
              (bs = 0),
              (l = [])),
              0,
              [0],
              l,
            )),
            (bu = ""),
            n);
        g.namespace &&
          (q = (function a(b, c) {
            return b.map(function (b) {
              return (
                "rule" === b.type &&
                  ((b.value = "".concat(c, " ").concat(b.value)),
                  (b.value = b.value.replaceAll(",", ",".concat(c, " "))),
                  (b.props = b.props.map(function (a) {
                    return "".concat(c, " ").concat(a);
                  }))),
                Array.isArray(b.children) && "@keyframes" !== b.type && (b.children = a(b.children, c)),
                b
              );
            });
          })(q, g.namespace));
        var r = [];
        return (
          bC(
            q,
            ((j = (i = k.concat(
              ((o = function (a) {
                return r.push(a);
              }),
              function (a) {
                !a.root && (a = a.return) && o(a);
              }),
            )).length),
            function (a, b, c, d) {
              for (var e = "", f = 0; f < j; f++) e += i[f](a, b, c, d) || "";
              return e;
            }),
          ),
          r
        );
      };
      return (
        (l.hash = i.length
          ? i
              .reduce(function (a, b) {
                return (b.name || cm(15), b$(a, b.name));
              }, 5381)
              .toString()
          : ""),
        l
      );
    }
    var cE = new cA(),
      cF = cD(),
      cG = a3.default.createContext({ shouldForwardProp: void 0, styleSheet: cE, stylis: cF }),
      cH = (cG.Consumer, a3.default.createContext(void 0));
    function cI() {
      return (0, a3.useContext)(cG);
    }
    function cJ(a) {
      var b = (0, a3.useState)(a.stylisPlugins),
        c = b[0],
        d = b[1],
        e = cI().styleSheet,
        f = (0, a3.useMemo)(
          function () {
            var b = e;
            return (
              a.sheet ? (b = a.sheet) : a.target && (b = b.reconstructWithOptions({ target: a.target }, !1)),
              a.disableCSSOMInjection && (b = b.reconstructWithOptions({ useCSSOMInjection: !1 })),
              b
            );
          },
          [a.disableCSSOMInjection, a.sheet, a.target, e],
        ),
        g = (0, a3.useMemo)(
          function () {
            return cD({ options: { namespace: a.namespace, prefix: a.enableVendorPrefixes }, plugins: c });
          },
          [a.enableVendorPrefixes, a.namespace, c],
        );
      (0, a3.useEffect)(
        function () {
          (0, a6.default)(c, a.stylisPlugins) || d(a.stylisPlugins);
        },
        [a.stylisPlugins],
      );
      var h = (0, a3.useMemo)(
        function () {
          return { shouldForwardProp: a.shouldForwardProp, styleSheet: f, stylis: g };
        },
        [a.shouldForwardProp, f, g],
      );
      return a3.default.createElement(
        cG.Provider,
        { value: h },
        a3.default.createElement(cH.Provider, { value: g }, a.children),
      );
    }
    var cK = (function () {
      function a(a, b) {
        var c = this;
        ((this.inject = function (a, b) {
          void 0 === b && (b = cF);
          var d = c.name + b.hash;
          a.hasNameForId(c.id, d) || a.insertRules(c.id, d, b(c.rules, d, "@keyframes"));
        }),
          (this.name = a),
          (this.id = "sc-keyframes-".concat(a)),
          (this.rules = b),
          cl(this, function () {
            throw cm(12, String(c.name));
          }));
      }
      return (
        (a.prototype.getName = function (a) {
          return (void 0 === a && (a = cF), this.name + a.hash);
        }),
        a
      );
    })();
    function cL(a) {
      for (var b = "", c = 0; c < a.length; c++) {
        var d = a[c];
        if (1 === c && "-" === d && "-" === a[0]) return a;
        d >= "A" && d <= "Z" ? (b += "-" + d.toLowerCase()) : (b += d);
      }
      return b.startsWith("ms-") ? "-" + b : b;
    }
    var cM = function (a) {
        return null == a || !1 === a || "" === a;
      },
      cN = function (a) {
        var b = [];
        for (var c in a) {
          var d = a[c];
          a.hasOwnProperty(c) &&
            !cM(d) &&
            ((Array.isArray(d) && d.isCss) || cg(d)
              ? b.push("".concat(cL(c), ":"), d, ";")
              : ck(d)
                ? b.push.apply(b, a5(a5(["".concat(c, " {")], cN(d), !1), ["}"], !1))
                : b.push(
                    ""
                      .concat(cL(c), ": ")
                      .concat(
                        null == d || "boolean" == typeof d || "" === d
                          ? ""
                          : "number" != typeof d || 0 === d || c in bH || c.startsWith("--")
                            ? String(d).trim()
                            : "".concat(d, "px"),
                        ";",
                      ),
                  ));
        }
        return b;
      };
    function cO(a, b, c, d) {
      if (cM(a)) return [];
      if (ch(a)) return [".".concat(a.styledComponentId)];
      if (cg(a)) return !cg(a) || (a.prototype && a.prototype.isReactComponent) || !b ? [a] : cO(a(b), b, c, d);
      return a instanceof cK
        ? c
          ? (a.inject(c, d), [a.getName(d)])
          : [a]
        : ck(a)
          ? cN(a)
          : Array.isArray(a)
            ? Array.prototype.concat.apply(
                bP,
                a.map(function (a) {
                  return cO(a, b, c, d);
                }),
              )
            : [a.toString()];
    }
    function cP(a) {
      for (var b = 0; b < a.length; b += 1) {
        var c = a[b];
        if (cg(c) && !ch(c)) return !1;
      }
      return !0;
    }
    var cQ = b_(bL),
      cR = (function () {
        function a(a, b, c) {
          ((this.rules = a),
            (this.staticRulesId = ""),
            (this.isStatic = (void 0 === c || c.isStatic) && cP(a)),
            (this.componentId = b),
            (this.baseHash = b$(cQ, b)),
            (this.baseStyle = c),
            cA.registerId(b));
        }
        return (
          (a.prototype.generateAndInjectStyles = function (a, b, c) {
            var d = this.baseStyle ? this.baseStyle.generateAndInjectStyles(a, b, c) : "";
            if (this.isStatic && !c.hash)
              if (this.staticRulesId && b.hasNameForId(this.componentId, this.staticRulesId))
                d = ci(d, this.staticRulesId);
              else {
                var e = cj(cO(this.rules, a, b, c)),
                  f = bY(b$(this.baseHash, e) >>> 0);
                if (!b.hasNameForId(this.componentId, f)) {
                  var g = c(e, ".".concat(f), void 0, this.componentId);
                  b.insertRules(this.componentId, f, g);
                }
                ((d = ci(d, f)), (this.staticRulesId = f));
              }
            else {
              for (var h = b$(this.baseHash, c.hash), i = "", j = 0; j < this.rules.length; j++) {
                var k = this.rules[j];
                if ("string" == typeof k) i += k;
                else if (k) {
                  var l = cj(cO(k, a, b, c));
                  ((h = b$(h, l + j)), (i += l));
                }
              }
              if (i) {
                var m = bY(h >>> 0);
                (b.hasNameForId(this.componentId, m) ||
                  b.insertRules(this.componentId, m, c(i, ".".concat(m), void 0, this.componentId)),
                  (d = ci(d, m)));
              }
            }
            return d;
          }),
          a
        );
      })(),
      cS = a3.default.createContext(void 0);
    function cT() {
      var a = (0, a3.useContext)(cS);
      if (!a) throw cm(18);
      return a;
    }
    function cU(a) {
      var b = a3.default.useContext(cS),
        c = (0, a3.useMemo)(
          function () {
            var c = a.theme;
            if (!c) throw cm(14);
            if (cg(c)) return c(b);
            if (Array.isArray(c) || "object" != typeof c) throw cm(8);
            return b ? a4(a4({}, b), c) : c;
          },
          [a.theme, b],
        );
      return a.children ? a3.default.createElement(cS.Provider, { value: c }, a.children) : null;
    }
    cS.Consumer;
    var cV = {};
    function cW(a, b, c) {
      var d,
        e,
        f,
        g,
        h = ch(a),
        i = !b1(a),
        j = b.attrs,
        k = void 0 === j ? bP : j,
        l = b.componentId,
        m =
          void 0 === l
            ? ((d = b.displayName),
              (e = b.parentComponentId),
              (cV[(f = "string" != typeof d ? "sc" : bV(d))] = (cV[f] || 0) + 1),
              (g = "".concat(f, "-").concat(b0(bL + f + cV[f]))),
              e ? "".concat(e, "-").concat(g) : g)
            : l,
        n = b.displayName,
        o =
          void 0 === n
            ? b1(a)
              ? "styled.".concat(a)
              : "Styled(".concat(a.displayName || a.name || "Component", ")")
            : n,
        p =
          b.displayName && b.componentId ? "".concat(bV(b.displayName), "-").concat(b.componentId) : b.componentId || m,
        q = h && a.attrs ? a.attrs.concat(k).filter(Boolean) : k,
        r = b.shouldForwardProp;
      if (h && a.shouldForwardProp) {
        var s = a.shouldForwardProp;
        if (b.shouldForwardProp) {
          var t = b.shouldForwardProp;
          r = function (a, b) {
            return s(a, b) && t(a, b);
          };
        } else r = s;
      }
      var u = new cR(c, p, h ? a.componentStyle : void 0);
      function v(a, b) {
        return (function (a, b, c) {
          var d,
            e = a.attrs,
            f = a.componentStyle,
            g = a.defaultProps,
            h = a.foldedComponentIds,
            i = a.styledComponentId,
            j = a.target,
            k = a3.default.useContext(cS),
            l = cI(),
            m = a.shouldForwardProp || l.shouldForwardProp,
            n = bR(b, k, g) || bQ,
            o = (function (a, b, c) {
              for (var d, e = a4(a4({}, b), { className: void 0, theme: c }), f = 0; f < a.length; f += 1) {
                var g = cg((d = a[f])) ? d(e) : d;
                for (var h in g)
                  e[h] = "className" === h ? ci(e[h], g[h]) : "style" === h ? a4(a4({}, e[h]), g[h]) : g[h];
              }
              return (b.className && (e.className = ci(e.className, b.className)), e);
            })(e, b, n),
            p = o.as || j,
            q = {};
          for (var r in o)
            void 0 === o[r] ||
              "$" === r[0] ||
              "as" === r ||
              ("theme" === r && o.theme === n) ||
              ("forwardedAs" === r ? (q.as = o.forwardedAs) : (m && !m(r, p)) || (q[r] = o[r]));
          var s = ((d = cI()), f.generateAndInjectStyles(o, d.styleSheet, d.stylis)),
            t = ci(h, i);
          return (
            s && (t += " " + s),
            o.className && (t += " " + o.className),
            (q[b1(p) && !bS.has(p) ? "class" : "className"] = t),
            c && (q.ref = c),
            (0, a3.createElement)(p, q)
          );
        })(w, a, b);
      }
      v.displayName = o;
      var w = a3.default.forwardRef(v);
      return (
        (w.attrs = q),
        (w.componentStyle = u),
        (w.displayName = o),
        (w.shouldForwardProp = r),
        (w.foldedComponentIds = h ? ci(a.foldedComponentIds, a.styledComponentId) : ""),
        (w.styledComponentId = p),
        (w.target = h ? a.target : a),
        Object.defineProperty(w, "defaultProps", {
          get: function () {
            return this._foldedDefaultProps;
          },
          set: function (b) {
            this._foldedDefaultProps = h
              ? (function (a) {
                  for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                  for (var d = 0; d < b.length; d++)
                    !(function a(b, c, d) {
                      if ((void 0 === d && (d = !1), !d && !ck(b) && !Array.isArray(b))) return c;
                      if (Array.isArray(c)) for (var e = 0; e < c.length; e++) b[e] = a(b[e], c[e]);
                      else if (ck(c)) for (var e in c) b[e] = a(b[e], c[e]);
                      return b;
                    })(a, b[d], !0);
                  return a;
                })({}, a.defaultProps, b)
              : b;
          },
        }),
        cl(w, function () {
          return ".".concat(w.styledComponentId);
        }),
        i &&
          (function a(b, c, d) {
            if ("string" != typeof c) {
              if (cf) {
                var e = ce(c);
                e && e !== cf && a(b, e, d);
              }
              var f = cb(c);
              cc && (f = f.concat(cc(c)));
              for (var g = b9(b), h = b9(c), i = 0; i < f.length; ++i) {
                var j = f[i];
                if (!(j in b6 || (d && d[j]) || (h && j in h) || (g && j in g))) {
                  var k = cd(c, j);
                  try {
                    ca(b, j, k);
                  } catch (a) {}
                }
              }
            }
            return b;
          })(w, a, {
            attrs: !0,
            componentStyle: !0,
            displayName: !0,
            foldedComponentIds: !0,
            shouldForwardProp: !0,
            styledComponentId: !0,
            target: !0,
          }),
        w
      );
    }
    function cX(a, b) {
      for (var c = [a[0]], d = 0, e = b.length; d < e; d += 1) c.push(b[d], a[d + 1]);
      return c;
    }
    var cY = function (a) {
      return Object.assign(a, { isCss: !0 });
    };
    function cZ(a) {
      for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
      return cg(a) || ck(a)
        ? cY(cO(cX(bP, a5([a], b, !0))))
        : 0 === b.length && 1 === a.length && "string" == typeof a[0]
          ? cO(a)
          : cY(cO(cX(a, b)));
    }
    var c$ = function (a) {
      return (function a(b, c, d) {
        if ((void 0 === d && (d = bQ), !c)) throw cm(1, c);
        var e = function (a) {
          for (var e = [], f = 1; f < arguments.length; f++) e[f - 1] = arguments[f];
          return b(c, d, cZ.apply(void 0, a5([a], e, !1)));
        };
        return (
          (e.attrs = function (e) {
            return a(b, c, a4(a4({}, d), { attrs: Array.prototype.concat(d.attrs, e).filter(Boolean) }));
          }),
          (e.withConfig = function (e) {
            return a(b, c, a4(a4({}, d), e));
          }),
          e
        );
      })(cW, a);
    };
    bS.forEach(function (a) {
      c$[a] = c$(a);
    });
    var c_ = (function () {
      function a(a, b) {
        ((this.rules = a), (this.componentId = b), (this.isStatic = cP(a)), cA.registerId(this.componentId + 1));
      }
      return (
        (a.prototype.createStyles = function (a, b, c, d) {
          var e = d(cj(cO(this.rules, b, c, d)), ""),
            f = this.componentId + a;
          c.insertRules(f, f, e);
        }),
        (a.prototype.removeStyles = function (a, b) {
          b.clearRules(this.componentId + a);
        }),
        (a.prototype.renderStyles = function (a, b, c, d) {
          (a > 2 && cA.registerId(this.componentId + a), this.removeStyles(a, c), this.createStyles(a, b, c, d));
        }),
        a
      );
    })();
    function c0(a) {
      for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
      var d = cZ.apply(void 0, a5([a], b, !1)),
        e = "sc-global-".concat(b0(JSON.stringify(d))),
        f = new c_(d, e),
        g = function (a) {
          var b = cI(),
            c = a3.default.useContext(cS),
            d = a3.default.useRef(b.styleSheet.allocateGSInstance(e)).current;
          return (
            b.styleSheet.server &&
              (function (a, b, c, d, e) {
                if (f.isStatic) f.renderStyles(a, bO, c, e);
                else {
                  var h = a4(a4({}, b), { theme: bR(b, d, g.defaultProps) });
                  f.renderStyles(a, h, c, e);
                }
              })(d, a, b.styleSheet, c, b.stylis),
            null
          );
        };
      return a3.default.memo(g);
    }
    function c1(a) {
      for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
      var d = cj(cZ.apply(void 0, a5([a], b, !1)));
      return new cK(b0(d), d);
    }
    var c2 = /^\s*<\/[a-z]/i;
    function c3() {
      var a = this;
      ((this._emitSheetCSS = function () {
        var b = a.instance.toString();
        if (!b) return "";
        var c = cu(),
          d = cj(
            [c && 'nonce="'.concat(c, '"'), "".concat(bI, '="true"'), "".concat(bK, '="').concat(bL, '"')].filter(
              Boolean,
            ),
            " ",
          );
        return "<style ".concat(d, ">").concat(b, "</style>");
      }),
        (this.getStyleTags = function () {
          if (a.sealed) throw cm(2);
          return a._emitSheetCSS();
        }),
        (this.getStyleElement = function () {
          if (a.sealed) throw cm(2);
          var b,
            c = a.instance.toString();
          if (!c) return [];
          var d = (((b = {})[bI] = ""), (b[bK] = bL), (b.dangerouslySetInnerHTML = { __html: c }), b),
            e = cu();
          return (e && (d.nonce = e), [a3.default.createElement("style", a4({}, d, { key: "sc-0-0" }))]);
        }),
        (this.seal = function () {
          a.sealed = !0;
        }),
        (this.instance = new cA({ isServer: !0 })),
        (this.sealed = !1));
    }
    ((c3.prototype.collectStyles = function (a) {
      if (this.sealed) throw cm(2);
      return a3.default.createElement(cJ, { sheet: this.instance }, a);
    }),
      (c3.prototype.interleaveWithNodeStream = function (b) {
        if (this.sealed) throw cm(2);
        this.seal();
        var c = a.r(688947).Transform,
          d = this.instance,
          e = this._emitSheetCSS,
          f = new c({
            transform: function (a, b, c) {
              var f = a.toString(),
                g = e();
              if ((d.clearTag(), c2.test(f))) {
                var h = f.indexOf(">") + 1,
                  i = f.slice(0, h),
                  j = f.slice(h);
                this.push(i + g + j);
              } else this.push(g + f);
              c();
            },
          });
        return (
          b.on("error", function (a) {
            f.emit("error", a);
          }),
          b.pipe(f)
        );
      }),
      a.s(
        [
          "ThemeProvider",
          () => cU,
          "createGlobalStyle",
          () => c0,
          "css",
          () => cZ,
          "keyframes",
          () => c1,
          "styled",
          () => c$,
          "useTheme",
          () => cT,
        ],
        962061,
      ));
    var c4 = a.i(139675);
    let c5 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "access-denied",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M18.1568 6.84315C21.281 9.96734 21.281 15.0327 18.1568 18.1569C15.0326 21.281 9.96733 21.281 6.84313 18.1569C3.71894 15.0327 3.71894 9.96734 6.84313 6.84315C9.96733 3.71895 15.0326 3.71895 18.1568 6.84315ZM18.1568 6.84315L6.844 18.156",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      c6 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "activity",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M21 15H19L15.5 7L11 18L8 12L6 15H4",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      c7 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "add-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8 12.4H17M12.5 8V17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      c8 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "add-comment",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M13 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5H9.5V20.5L13.5 16.5H16.5C17.6046 16.5 18.5 15.6046 18.5 14.5V12M15 6.5H22M18.5 10V3",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      c9 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "add-document",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 4.5H18.5V12M11.5 4.5L6.5 9.5M11.5 4.5V9.5H6.5M6.5 9.5V19.5H11M20 17.5H16.5M16.5 17.5H13M16.5 17.5V14M16.5 17.5V21",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      da = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "add",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 5V20M5 12.5H20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      db = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "add-user",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M7.17857 15.2368C6.10714 15.7632 4.5 16.8158 4.5 20.5H19.5C19.5 16.8158 18.2589 15.943 16.8214 15.2368C15.75 14.7105 13.6071 14.7105 13.6071 13.1316C13.6071 11.5526 14.6786 10.7632 14.6786 8.65789C14.6786 6.55263 13.6071 5.5 12 5.5C10.3929 5.5 9.32142 6.55263 9.32142 8.65789C9.32142 10.7632 10.3929 11.5526 10.3929 13.1316C10.3929 14.7105 8.25 14.7105 7.17857 15.2368Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M20.5 6V13M17 9.5H24",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      dc = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "api",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M5.93047 13.2107L6.66782 10.3728H6.73089L7.45854 13.2107H5.93047ZM8.17164 16H9.66089L7.56041 9H5.93047L3.82999 16H5.20767L5.65396 14.2876H7.73505L8.17164 16Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M10.5389 9V16H11.9166V13.7782H13.0323C14.541 13.7782 15.5015 12.8517 15.5015 11.3964C15.5015 9.92654 14.5701 9 13.1003 9H10.5389ZM11.9166 10.1303H12.751C13.6533 10.1303 14.1044 10.5475 14.1044 11.3867C14.1044 12.2308 13.6533 12.6431 12.751 12.6431H11.9166V10.1303Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M21.1675 16V14.8164H19.717V10.1836H21.1675V9H16.8889V10.1836H18.3393V14.8164H16.8889V16H21.1675Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      dd = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "archive",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.5 10V17M20.5 7.5V20.5H4.5V7.5L7.5 4.5H17.5L20.5 7.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M4.5 7.5H20.5M16 14L12.5 17.5L9 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      de = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "arrow-down",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.5 19.5V5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M18 14L12.5 19.5L7 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      df = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "arrow-left",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M5.5 12.5H20",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M11 18L5.5 12.5L11 7",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      dg = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "arrow-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M19.5 12.5H5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M14 7L19.5 12.5L14 18",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      dh = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "arrow-top-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M16.5 8.5L7 18",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M9 8.5H16.5V16",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      di = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "arrow-up",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M7 11L12.5 5.5L18 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M12.5 5.5V20",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      dj = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "asterisk",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 4V21M16.75 5.13879L8.25 19.8612M19.8612 8.25L5.13878 16.75M4.00002 12.5H21M5.13881 8.25L19.8612 16.75M8.25002 5.13879L16.75 19.8612",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dk = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bar-chart",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5.5 5V19.5H20M8.5 18V13M11.5 18V9M14.5 18V11M17.5 18V7",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dl = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "basket",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8.5 10.5H5L6.5 19.5H18.5L20 10.5H16.5M8.5 10.5L10.2721 5.18377C10.4082 4.77543 10.7903 4.5 11.2208 4.5H13.7792C14.2097 4.5 14.5918 4.77543 14.7279 5.18377L16.5 10.5M8.5 10.5H16.5M8.5 10.5L9.5 19.5M16.5 10.5L15.5 19.5M12.5 10.5V19.5M19.5 13.5H5.5M19 16.5H6",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dm = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bell",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 17.5V18.5C10.5 20 11.5 20.5 12.5 20.5C13.5 20.5 14.5 20 14.5 18.5V17.5M5.5 17.5C6.5 16 6.5 15 6.5 12C6.5 8 8.5 5.5 12.5 5.5C16.5 5.5 18.5 8 18.5 12C18.5 15 18.5 16 19.5 17.5H5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dn = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bill",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M6.50001 5.5C8.50003 5.5 8.50003 8 8.50003 8V9.5M6.50001 5.5C4.5 5.5 4.5 8 4.5 8L4.50001 9.5H8.50003M6.50001 5.5C6.50001 5.5 15.8333 5.5 17.6667 5.5C19.5 5.5 19.5 8.5 19.5 8.5V20L17.6667 19L15.8333 20L14 19L12.1667 20L10.3334 19L8.50003 20V9.5M11 12.5H15M11 9.5H16M11 15.5H16",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dp = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "binary-document",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M9.5 12.5V17.5M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5ZM12.5 12.5V17.5H15.5V12.5H12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinecap: "square",
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      dq = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "block-content",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 7.60002L11 7.60003V6.40003L21 6.40002V7.60002Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 11.2667L12.4833 11.2667V10.0667L21 10.0667V11.2667Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 14.9334H13.9254V13.7334L21 13.7334V14.9334Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 18.6002H4V17.4002H21V18.6002Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M9.86438 15.6H11.2L8.27623 7.60003H6.92377L4 15.6H5.29072L6.0371 13.4767H9.12362L9.86438 15.6ZM7.53546 9.05255H7.63086L8.80374 12.4344H6.35698L7.53546 9.05255Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      dr = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "block-element",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5 19.5H20M5 5.5H20M6.5 8.5H18.5V16.5H6.5V8.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ds = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "blockquote",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10 17.5H19M6 7.5H19M10 12.5H17M6.5 12V18",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dt = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bold",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M13.2087 18C15.5322 18 16.9731 16.793 16.9731 14.8844C16.9731 13.4812 15.9245 12.3949 14.4836 12.2892V12.1534C15.6001 11.9875 16.4526 10.9841 16.4526 9.82991C16.4526 8.14761 15.1927 7.11409 13.0804 7.11409H8.32019V18H13.2087ZM10.5985 8.85674H12.4995C13.5859 8.85674 14.212 9.37727 14.212 10.2448C14.212 11.1199 13.5406 11.6254 12.3109 11.6254H10.5985V8.85674ZM10.5985 16.2574V13.1643H12.575C13.9178 13.1643 14.6496 13.6924 14.6496 14.6882C14.6496 15.7066 13.9404 16.2574 12.6278 16.2574H10.5985Z",
            fill: "currentColor",
          }),
        });
      }),
      du = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bolt",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M18 11.5L9 21L11 13.5H7L16 4L14 11.5H18Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dv = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "book",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M19.5 18V7C19.5 7 18.5 6.5 16.5 6.5C14.5 6.5 12.5 7.5 12.5 7.5M19.5 18V18.5C19.5 18.5 18 18.5 16 18.5C14 18.5 12.5 18.5 12.5 18.5M19.5 18C19.5 18 18.5 17.5 16.5 17.5C14.5 17.5 12.5 18.5 12.5 18.5M5.5 18V7C5.5 7 6.5 6.5 8.5 6.5C10.5 6.5 12.5 7.5 12.5 7.5M5.5 18V18.5C5.5 18.5 7 18.5 9 18.5C11 18.5 12.5 18.5 12.5 18.5M5.5 18C5.5 18 6.5 17.5 8.5 17.5C10.5 17.5 12.5 18.5 12.5 18.5M12.5 18.5V7.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dw = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bookmark-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7.5 6.5V19.5L12.5 14.5L17.5 19.5V6.5C17.5 5.94772 17.0523 5.5 16.5 5.5H8.5C7.94772 5.5 7.5 5.94772 7.5 6.5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dx = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bookmark",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7.5 6.5V19.5L12.5 14.5L17.5 19.5V6.5C17.5 5.94772 17.0523 5.5 16.5 5.5H8.5C7.94772 5.5 7.5 5.94772 7.5 6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dy = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bottle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7.5 17.5L17.5 17.5M17.5 13C17.5 12.087 17.5 11.3518 17.5 11C17.5 8.5 14.5 9 14.5 7.37494L14.5 5.5M17.5 13C17.5 15.1229 17.5 18.7543 17.5 20.5022C17.5 21.0545 17.0523 21.5 16.5 21.5L8.5 21.5C7.94772 21.5 7.5 21.0547 7.5 20.5024C7.5 18.8157 7.5 15.3546 7.5 13M17.5 13L7.5 13M7.5 13C7.5 12.2538 7.5 11.5648 7.5 11C7.5 8.5 10.5 9 10.5 7.37494L10.5 5.5M10.5 5.5L10.5 3.99999C10.5 3.72385 10.7239 3.49999 11 3.49999L14 3.49999C14.2761 3.49999 14.5 3.72385 14.5 3.99999L14.5 5.5M10.5 5.5L14.5 5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dz = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bug",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8.5 9.5V8.9C8.16863 8.9 7.9 9.16863 7.9 9.5H8.5ZM16.5 9.5H17.1C17.1 9.16863 16.8314 8.9 16.5 8.9V9.5ZM8.5 10.1H9.5V8.9H8.5V10.1ZM9.5 10.1H15.5V8.9H9.5V10.1ZM15.5 10.1H16.5V8.9H15.5V10.1ZM15.9 9.5V13.5H17.1V9.5H15.9ZM15.9 13.5C15.9 14.395 15.678 15.0264 15.3758 15.4797C15.0711 15.9367 14.6605 16.2489 14.2317 16.4633C13.8005 16.6789 13.3621 16.7897 13.0264 16.8457C12.8599 16.8734 12.7226 16.887 12.6291 16.8937C12.5825 16.897 12.5472 16.8986 12.5249 16.8994C12.5138 16.8997 12.506 16.8999 12.5018 16.9C12.4997 16.9 12.4984 16.9 12.4981 16.9C12.498 16.9 12.4981 16.9 12.4984 16.9C12.4985 16.9 12.4987 16.9 12.499 16.9C12.4991 16.9 12.4994 16.9 12.4995 16.9C12.4997 16.9 12.5 16.9 12.5 17.5C12.5 18.1 12.5003 18.1 12.5006 18.1C12.5008 18.1 12.5011 18.1 12.5014 18.1C12.5019 18.1 12.5025 18.1 12.5031 18.1C12.5044 18.1 12.5059 18.1 12.5077 18.1C12.5112 18.0999 12.5157 18.0999 12.5212 18.0998C12.532 18.0996 12.5467 18.0993 12.5649 18.0987C12.6013 18.0975 12.6519 18.0951 12.7146 18.0907C12.8399 18.0817 13.0151 18.0641 13.2236 18.0293C13.6379 17.9603 14.1995 17.8211 14.7683 17.5367C15.3395 17.2511 15.9289 16.8133 16.3742 16.1453C16.822 15.4736 17.1 14.605 17.1 13.5H15.9ZM12.5 17.5C12.5 16.9 12.5003 16.9 12.5005 16.9C12.5006 16.9 12.5009 16.9 12.501 16.9C12.5013 16.9 12.5015 16.9 12.5016 16.9C12.5019 16.9 12.502 16.9 12.5019 16.9C12.5016 16.9 12.5003 16.9 12.4982 16.9C12.494 16.8999 12.4862 16.8997 12.4751 16.8994C12.4528 16.8986 12.4175 16.897 12.3709 16.8937C12.2774 16.887 12.1401 16.8734 11.9736 16.8457C11.6379 16.7897 11.1995 16.6789 10.7683 16.4633C10.3395 16.2489 9.92894 15.9367 9.62423 15.4797C9.32203 15.0264 9.1 14.395 9.1 13.5H7.9C7.9 14.605 8.17797 15.4736 8.62577 16.1453C9.07106 16.8133 9.66049 17.2511 10.2317 17.5367C10.8005 17.8211 11.3621 17.9603 11.7764 18.0293C11.9849 18.0641 12.1601 18.0817 12.2854 18.0907C12.3481 18.0951 12.3987 18.0975 12.4351 18.0987C12.4533 18.0993 12.468 18.0996 12.4788 18.0998C12.4843 18.0999 12.4888 18.0999 12.4923 18.1C12.4941 18.1 12.4956 18.1 12.4969 18.1C12.4975 18.1 12.4981 18.1 12.4986 18.1C12.4989 18.1 12.4992 18.1 12.4994 18.1C12.4997 18.1 12.5 18.1 12.5 17.5ZM9.1 13.5V9.5H7.9V13.5H9.1ZM9.5 9.5C10.1 9.5 10.1 9.50028 10.1 9.50055C10.1 9.50063 10.1 9.50089 10.1 9.50104C10.1 9.50134 10.1 9.5016 10.1 9.50182C10.1 9.50225 10.1 9.5025 10.1 9.50259C10.1 9.50276 10.1 9.50224 10.1 9.50107C10.1001 9.49872 10.1002 9.49374 10.1004 9.4863C10.1009 9.4714 10.102 9.44678 10.1043 9.41384C10.1091 9.34776 10.1188 9.24944 10.1387 9.12989C10.179 8.88793 10.2586 8.5745 10.4117 8.26833C10.5636 7.96451 10.782 7.67894 11.0984 7.46798C11.4111 7.25953 11.855 7.1 12.5 7.1V5.9C11.645 5.9 10.9639 6.11547 10.4328 6.46952C9.90549 6.82106 9.56143 7.28549 9.33834 7.73167C9.11643 8.1755 9.00846 8.61207 8.95504 8.93261C8.92809 9.09431 8.91438 9.23036 8.90738 9.32835C8.90388 9.37744 8.90203 9.41727 8.90107 9.44632C8.90058 9.46085 8.90031 9.47272 8.90017 9.48172C8.9001 9.48622 8.90005 9.49001 8.90003 9.49306C8.90002 9.49459 8.90001 9.49593 8.90001 9.49709C8.9 9.49767 8.9 9.4982 8.9 9.49869C8.9 9.49893 8.9 9.49926 8.9 9.49938C8.9 9.4997 8.9 9.5 9.5 9.5ZM12.5 7.1C13.145 7.1 13.5889 7.25953 13.9016 7.46798C14.218 7.67894 14.4364 7.96451 14.5883 8.26833C14.7414 8.5745 14.821 8.88793 14.8613 9.12989C14.8812 9.24944 14.8909 9.34776 14.8957 9.41384C14.898 9.44678 14.8991 9.4714 14.8996 9.4863C14.8998 9.49374 14.8999 9.49872 14.9 9.50107C14.9 9.50224 14.9 9.50276 14.9 9.50259C14.9 9.5025 14.9 9.50225 14.9 9.50182C14.9 9.5016 14.9 9.50134 14.9 9.50104C14.9 9.50089 14.9 9.50063 14.9 9.50055C14.9 9.50028 14.9 9.5 15.5 9.5C16.1 9.5 16.1 9.4997 16.1 9.49938C16.1 9.49926 16.1 9.49893 16.1 9.49869C16.1 9.4982 16.1 9.49767 16.1 9.49709C16.1 9.49593 16.1 9.49459 16.1 9.49306C16.0999 9.49001 16.0999 9.48622 16.0998 9.48172C16.0997 9.47272 16.0994 9.46085 16.0989 9.44632C16.098 9.41727 16.0961 9.37744 16.0926 9.32835C16.0856 9.23036 16.0719 9.09431 16.045 8.93261C15.9915 8.61207 15.8836 8.1755 15.6617 7.73167C15.4386 7.28549 15.0945 6.82106 14.5672 6.46952C14.0361 6.11547 13.355 5.9 12.5 5.9V7.1ZM11.9 9.5V17.5H13.1V9.5H11.9ZM8.5 9.9C7.71525 9.9 7.10887 9.51034 6.67426 9.07574C6.45859 8.86006 6.29547 8.64279 6.18673 8.47968C6.1327 8.39863 6.09302 8.33235 6.06782 8.28825C6.05524 8.26624 6.04634 8.24988 6.04113 8.24011C6.03853 8.23523 6.03685 8.232 6.0361 8.23055C6.03573 8.22983 6.03559 8.22955 6.03568 8.22973C6.03573 8.22982 6.03583 8.23003 6.03599 8.23035C6.03607 8.23051 6.03617 8.2307 6.03628 8.23092C6.03634 8.23103 6.03643 8.23122 6.03646 8.23127C6.03656 8.23147 6.03666 8.23167 5.5 8.5C4.96334 8.76833 4.96345 8.76855 4.96357 8.76877C4.96361 8.76886 4.96372 8.76909 4.96381 8.76926C4.96398 8.7696 4.96417 8.76997 4.96437 8.77038C4.96478 8.77119 4.96525 8.77212 4.96579 8.77317C4.96685 8.77527 4.96818 8.77786 4.96976 8.78092C4.97292 8.78704 4.9771 8.79505 4.98231 8.80481C4.99272 8.82434 5.00726 8.85094 5.02593 8.88362C5.06323 8.9489 5.1173 9.03887 5.18827 9.14532C5.32953 9.35721 5.54141 9.63994 5.82574 9.92426C6.39113 10.4897 7.28475 11.1 8.5 11.1V9.9ZM16.5 11.1C17.7153 11.1 18.6089 10.4897 19.1743 9.92426C19.4586 9.63994 19.6705 9.35721 19.8117 9.14532C19.8827 9.03887 19.9368 8.9489 19.9741 8.88362C19.9927 8.85094 20.0073 8.82434 20.0177 8.80481C20.0229 8.79505 20.0271 8.78704 20.0302 8.78092C20.0318 8.77786 20.0331 8.77527 20.0342 8.77317C20.0347 8.77212 20.0352 8.77119 20.0356 8.77038C20.0358 8.76997 20.036 8.7696 20.0362 8.76926C20.0363 8.76909 20.0364 8.76886 20.0364 8.76877C20.0365 8.76855 20.0367 8.76833 19.5 8.5C18.9633 8.23167 18.9634 8.23147 18.9635 8.23127C18.9636 8.23122 18.9637 8.23103 18.9637 8.23092C18.9638 8.2307 18.9639 8.23051 18.964 8.23035C18.9642 8.23003 18.9643 8.22982 18.9643 8.22973C18.9644 8.22955 18.9643 8.22983 18.9639 8.23055C18.9632 8.232 18.9615 8.23523 18.9589 8.24011C18.9537 8.24988 18.9448 8.26624 18.9322 8.28825C18.907 8.33235 18.8673 8.39863 18.8133 8.47968C18.7045 8.64279 18.5414 8.86006 18.3257 9.07574C17.8911 9.51034 17.2847 9.9 16.5 9.9V11.1ZM16.5 13.1H20V11.9H16.5V13.1ZM16.5 15.1C17.2847 15.1 17.8911 15.4897 18.3257 15.9243C18.5414 16.1399 18.7045 16.3572 18.8133 16.5203C18.8673 16.6014 18.907 16.6676 18.9322 16.7117C18.9448 16.7338 18.9537 16.7501 18.9589 16.7599C18.9615 16.7648 18.9632 16.768 18.9639 16.7694C18.9643 16.7702 18.9644 16.7705 18.9643 16.7703C18.9643 16.7702 18.9642 16.77 18.964 16.7697C18.9639 16.7695 18.9638 16.7693 18.9637 16.7691C18.9637 16.769 18.9636 16.7688 18.9635 16.7687C18.9634 16.7685 18.9633 16.7683 19.5 16.5C20.0367 16.2317 20.0365 16.2315 20.0364 16.2312C20.0364 16.2311 20.0363 16.2309 20.0362 16.2307C20.036 16.2304 20.0358 16.23 20.0356 16.2296C20.0352 16.2288 20.0347 16.2279 20.0342 16.2268C20.0331 16.2247 20.0318 16.2221 20.0302 16.2191C20.0271 16.213 20.0229 16.205 20.0177 16.1952C20.0073 16.1757 19.9927 16.1491 19.9741 16.1164C19.9368 16.0511 19.8827 15.9611 19.8117 15.8547C19.6705 15.6428 19.4586 15.3601 19.1743 15.0757C18.6089 14.5103 17.7153 13.9 16.5 13.9V15.1ZM8.5 13.9C7.28475 13.9 6.39113 14.5103 5.82574 15.0757C5.54141 15.3601 5.32953 15.6428 5.18827 15.8547C5.1173 15.9611 5.06323 16.0511 5.02593 16.1164C5.00726 16.1491 4.99272 16.1757 4.98231 16.1952C4.9771 16.205 4.97292 16.213 4.96976 16.2191C4.96818 16.2221 4.96685 16.2247 4.96579 16.2268C4.96525 16.2279 4.96478 16.2288 4.96437 16.2296C4.96417 16.23 4.96398 16.2304 4.96381 16.2307C4.96372 16.2309 4.96361 16.2311 4.96357 16.2312C4.96345 16.2315 4.96334 16.2317 5.5 16.5C6.03666 16.7683 6.03656 16.7685 6.03646 16.7687C6.03643 16.7688 6.03634 16.769 6.03628 16.7691C6.03617 16.7693 6.03607 16.7695 6.03599 16.7697C6.03583 16.77 6.03573 16.7702 6.03568 16.7703C6.03559 16.7705 6.03573 16.7702 6.0361 16.7694C6.03685 16.768 6.03853 16.7648 6.04113 16.7599C6.04634 16.7501 6.05524 16.7338 6.06782 16.7117C6.09302 16.6676 6.1327 16.6014 6.18673 16.5203C6.29547 16.3572 6.45859 16.1399 6.67426 15.9243C7.10887 15.4897 7.71525 15.1 8.5 15.1V13.9ZM8.5 11.9H5V13.1H8.5V11.9Z",
            fill: "currentColor",
          }),
        });
      }),
      dA = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bulb-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H14V20.5C14 21.0523 13.5523 21.5 13 21.5H12C11.4477 21.5 11 21.0523 11 20.5V19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10C18 11.94 17.3978 12.9767 16.4272 14.3368Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      dB = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "bulb-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 16.5H15.5M11 20V20.5C11 21.0523 11.4477 21.5 12 21.5H13C13.5523 21.5 14 21.0523 14 20.5V20M18 10C18 11.94 17.3978 12.9767 16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      dC = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "calendar",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M5.5 18.5H19.5V6.5H5.5V18.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M16.5 8V4M8.5 8V4M8 12.5H10M8 15.5H10M11.5 12.5H13.5M11.5 15.5H13.5M15 12.5H17M15 15.5H17M12.5 8V4M5.5 9.5H19.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      dD = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "case",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9 8.5122V6C9 5.44772 9.44772 5 10 5H15C15.5523 5 16 5.44772 16 6V8.5122M4.5 12V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H19.5C20.0523 19.5 20.5 19.0523 20.5 18.5V12M4.5 12V9.5122C4.5 8.95991 4.94772 8.5122 5.5 8.5122H19.5C20.0523 8.5122 20.5 8.95991 20.5 9.5122V12M4.5 12L11.7978 14.7367C12.2505 14.9064 12.7495 14.9064 13.2022 14.7367L20.5 12",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dE = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "chart-upward",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5.5 5V19.5H20M7.5 16L11.5 11.5L15.5 14L19.5 8.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dF = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "checkmark-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 12.1316L11.7414 14.5L16 10M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dG = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "checkmark",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5.5 11.5L10.5 16.5L19.5 7.60001",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dH = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "chevron-down",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M17 10L12.5 14.5L8 10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dI = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "chevron-left",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M15 17L10.5 12.5L15 8",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dJ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "chevron-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10 8L14.5 12.5L10 17",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dK = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "chevron-up",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8 15L12.5 10.5L17 15",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dL = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("circle", {
            cx: 12.5,
            cy: 12.5,
            r: 8,
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dM = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "clipboard",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8 5.5H6.5V19.5H18.5V5.5H17M12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dN = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "clipboard-image",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8 5.5H6.5V19.5H10.5M17 5.5H18.5V11.5M10.5 18.5L12.73 15.8983C13.1327 15.4285 13.8613 15.4335 14.2575 15.909L15.299 17.1588C15.6754 17.6105 16.3585 17.6415 16.7743 17.2257L16.9903 17.0097C17.2947 16.7053 17.7597 16.6298 18.1447 16.8223L20.5 18M10.5 11.5H20.5V21.5H10.5V11.5ZM12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dO = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "clock",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 8V12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dP = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "close-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 15.5L12.5 12.5M12.5 12.5L15.5 9.5M12.5 12.5L9.5 9.5M12.5 12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dQ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "close",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M18 7L7 18M7 7L18 18",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dR = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "code-block",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M11 15L8.5 12.5L11 10M14 10L16.5 12.5L14 15M5.5 6.5H19.5V18.5H5.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dS = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "code",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M11 16L7.5 12.5L11 9M14 9L17.5 12.5L14 16",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dT = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "cog",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M14.0666 6.19428L13.719 5.32531C13.5196 4.82685 13.0369 4.5 12.5 4.5C11.9631 4.5 11.4804 4.82685 11.281 5.32531L10.9334 6.19428C10.7984 6.53187 10.5328 6.80068 10.1969 6.93982C9.86098 7.07896 9.48313 7.07666 9.14894 6.93343L8.2887 6.56476C7.79525 6.35328 7.22276 6.46353 6.84315 6.84315C6.46353 7.22276 6.35328 7.79525 6.56476 8.2887L6.93343 9.14894C7.07666 9.48313 7.07896 9.86098 6.93982 10.1969C6.80068 10.5328 6.53187 10.7984 6.19428 10.9334L5.32531 11.281C4.82685 11.4804 4.5 11.9631 4.5 12.5C4.5 13.0369 4.82685 13.5196 5.32531 13.719L6.19428 14.0666C6.53187 14.2016 6.80068 14.4672 6.93982 14.8031C7.07896 15.139 7.07666 15.5169 6.93343 15.8511L6.56476 16.7113C6.35328 17.2048 6.46353 17.7772 6.84315 18.1569C7.22276 18.5365 7.79525 18.6467 8.2887 18.4352L9.14894 18.0666C9.48314 17.9233 9.86099 17.921 10.1969 18.0602C10.5328 18.1993 10.7984 18.4681 10.9334 18.8057L11.281 19.6747C11.4804 20.1732 11.9631 20.5 12.5 20.5C13.0369 20.5 13.5196 20.1731 13.719 19.6747L14.0666 18.8057C14.2016 18.4681 14.4672 18.1993 14.8031 18.0602C15.139 17.921 15.5169 17.9233 15.8511 18.0666L16.7113 18.4352C17.2047 18.6467 17.7772 18.5365 18.1569 18.1569C18.5365 17.7772 18.6467 17.2047 18.4352 16.7113L18.0666 15.8511C17.9233 15.5169 17.921 15.139 18.0602 14.8031C18.1993 14.4672 18.4681 14.2016 18.8057 14.0666L19.6747 13.719C20.1731 13.5196 20.5 13.0369 20.5 12.5C20.5 11.9631 20.1731 11.4804 19.6747 11.281L18.8057 10.9334C18.4681 10.7984 18.1993 10.5328 18.0602 10.1969C17.921 9.86098 17.9233 9.48313 18.0666 9.14894L18.4352 8.2887C18.6467 7.79525 18.5365 7.22276 18.1569 6.84314C17.7772 6.46353 17.2048 6.35328 16.7113 6.56476L15.8511 6.93343C15.5169 7.07666 15.139 7.07896 14.8031 6.93982C14.4672 6.80068 14.2016 6.53187 14.0666 6.19428Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      dU = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "collapse",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M6 14.5L10.5 14.5V19M19 10.5H14.5L14.5 6",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M10.5 14.5L6 19M14.5 10.5L19 6",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      dV = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "color-wheel",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.43853 5.10896L11.1606 9.26642M13.8394 15.7336L15.5615 19.891M15.7336 11.1606L19.891 9.43853M9.26642 13.8394L5.10896 15.5615M5.3139 9.52342L9.23359 11.147M15.7664 13.853L19.6861 15.4766M13.853 9.23359L15.4766 5.3139M9.52342 19.6861L11.147 15.7664M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5ZM16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dW = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "comment",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7.5 16.5H9.5V20.5L13.5 16.5H17.5C18.6046 16.5 19.5 15.6046 19.5 14.5V8.5C19.5 7.39543 18.6046 6.5 17.5 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dX = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "component",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8.5 8.5L12.5 12.5M12.5 12.5L16.5 16.5M12.5 12.5L16.5 8.5M12.5 12.5L8.5 16.5M12.5 4L21 12.5L12.5 21L4 12.5L12.5 4Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dY = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "compose",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M17 6L19 8M14 5.5H5.5V19.5H19.5V11M9 16L9.5 13.5L19 4L21 6L11.5 15.5L9 16Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      dZ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "compose-sparkles",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M11 3.5V5M11 5V6.5M11 5H12.5M11 5H9.5M17 9L9.5 16.5L9 19L11.5 18.5L19 11M17 9L19 7L21 9L19 11M17 9L19 11M4.5 10C4.5 10 5.72308 9.87692 6.3 9.3C6.87692 8.72308 7 7.5 7 7.5C7 7.5 7.12308 8.72308 7.7 9.3C8.27692 9.87692 9.5 10 9.5 10C9.5 10 8.27692 10.1231 7.7 10.7C7.12308 11.2769 7 12.5 7 12.5C7 12.5 6.87692 11.2769 6.3 10.7C5.72308 10.1231 4.5 10 4.5 10Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }),
      d$ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "confetti",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M16.5 6.25C16.9142 6.25 17.25 5.91421 17.25 5.5C17.25 5.08579 16.9142 4.75 16.5 4.75C16.0858 4.75 15.75 5.08579 15.75 5.5C15.75 5.91421 16.0858 6.25 16.5 6.25Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M19.5 16.25C19.9142 16.25 20.25 15.9142 20.25 15.5C20.25 15.0858 19.9142 14.75 19.5 14.75C19.0858 14.75 18.75 15.0858 18.75 15.5C18.75 15.9142 19.0858 16.25 19.5 16.25Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M13 4C11 6 14.5 5.5 12.5 7.5M21 12C19 14 19.5 10.5 17.5 12.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M16.066 16.4904C15.3965 17.1598 13.1126 15.9613 10.9647 13.8135C8.81684 11.6656 7.61835 9.38165 8.28782 8.71218M16.066 16.4904C16.7355 15.8209 15.537 13.537 13.3891 11.3891C11.2412 9.2412 8.95729 8.04271 8.28782 8.71218M16.066 16.4904C15.8661 16.6902 15.6277 16.8474 15.3657 16.952L6.99288 20.296C6.26931 20.5849 5.44878 20.4193 4.9038 19.8744C4.35883 19.3294 4.19324 18.5089 4.48221 17.7853L7.82614 9.41242C7.93077 9.15042 8.08793 8.91208 8.28782 8.71218M20 5C20 14 11.5 5.32688 11.5 14.3269",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      d_ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "controls",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M6.5 5V7.5M6.5 7.5C5.39543 7.5 4.5 8.39543 4.5 9.5C4.5 10.6046 5.39543 11.5 6.5 11.5M6.5 7.5C7.60457 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 7.60457 11.5 6.5 11.5M6.5 11.5V20M12.5 5V13.5M12.5 13.5C11.3954 13.5 10.5 14.3954 10.5 15.5C10.5 16.6046 11.3954 17.5 12.5 17.5M12.5 13.5C13.6046 13.5 14.5 14.3954 14.5 15.5C14.5 16.6046 13.6046 17.5 12.5 17.5M12.5 17.5V20M18.5 5V7.5M18.5 7.5C17.3954 7.5 16.5 8.39543 16.5 9.5C16.5 10.6046 17.3954 11.5 18.5 11.5M18.5 7.5C19.6046 7.5 20.5 8.39543 20.5 9.5C20.5 10.6046 19.6046 11.5 18.5 11.5M18.5 11.5V20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      d0 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "copy",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8.5 8.5H5.5V20.5H16.5V16.5M19.5 4.5H8.5V16.5H19.5V4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      d1 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "credit-card",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M20.5 9.5H4.5V11.5H20.5V9.5Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M7 15.5H14M5.5 18.5H19.5C20.0523 18.5 20.5 18.0523 20.5 17.5V7.5C20.5 6.94772 20.0523 6.5 19.5 6.5H5.5C4.94772 6.5 4.5 6.94772 4.5 7.5V17.5C4.5 18.0523 4.94772 18.5 5.5 18.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      d2 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "crop",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 5V15.5H20M5 9.5H15.5V20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      d3 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "cube",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M12.5 22V13M12.5 13L4.5 8M12.5 13L20.5 8",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      d4 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "dashboard",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M14.5 19.5V12.5M10.5 12.5V5.5M5.5 12.5H19.5M5.5 19.5H19.5V5.5H5.5V19.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      d5 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "database",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M18.5 7V17.5C18.5 19.0594 16.0504 20.5 12.5 20.5C8.9496 20.5 6.5 19.0594 6.5 17.5V7M18.5 7C18.5 8.45543 15.8137 9.5 12.5 9.5C9.18629 9.5 6.5 8.45543 6.5 7C6.5 5.54457 9.18629 4.5 12.5 4.5C15.8137 4.5 18.5 5.54457 18.5 7Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      d6 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "desktop",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M4.5 13.5V15.5C4.5 16.0523 4.94772 16.5 5.5 16.5H12.5M4.5 13.5V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V13.5M4.5 13.5H20.5M20.5 13.5V15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H12.5M12.5 16.5V19.5M12.5 19.5H8M12.5 19.5H17",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      d7 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "diamond",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M21 10.5L12.5 21M21 10.5L18 5.5H11M21 10.5H16M12.5 21L4 10.5M12.5 21L9 10.5M12.5 21L16 10.5M4 10.5L7 5.5H11M4 10.5H9M9 10.5H12.5H16M9 10.5L11 5.5M16 10.5L14.5 5.5H11",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      d8 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "document",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M18.5 20.5H6.5V9.5L11.5 4.5H18.5V20.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      d9 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "document-pdf",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.7127 13.8012L12.7193 13.77C12.8488 13.2366 13.0117 12.5716 12.8845 11.969C12.7997 11.4937 12.4493 11.3084 12.1503 11.295C11.7977 11.2794 11.483 11.4803 11.4049 11.7726C11.2576 12.3082 11.3893 13.0402 11.6303 13.973C11.3268 14.6961 10.8425 15.7472 10.4877 16.3721C9.8271 16.7135 8.94113 17.2402 8.80946 17.9053C8.78268 18.028 8.81392 18.1842 8.88757 18.3248C8.97014 18.481 9.10181 18.6015 9.25579 18.6596C9.32274 18.6841 9.40308 18.7042 9.49681 18.7042C9.88959 18.7042 10.5256 18.3873 11.3736 16.9322C11.5031 16.8898 11.637 16.8452 11.7664 16.8006C12.3734 16.5953 13.0028 16.381 13.5718 16.2851C14.2012 16.622 14.9175 16.8385 15.404 16.8385C15.8861 16.8385 16.0758 16.5529 16.1472 16.381C16.2722 16.0797 16.2119 15.7004 16.0088 15.4973C15.7143 15.2072 14.9979 15.1313 13.882 15.2696C13.3331 14.9349 12.9738 14.4796 12.7127 13.8012ZM10.2645 17.1911C9.95431 17.6419 9.71998 17.8673 9.59278 17.9655C9.7423 17.691 10.0346 17.4009 10.2645 17.1911ZM12.2195 11.9355C12.3355 12.1341 12.3199 12.7345 12.2306 13.038C12.1213 12.5939 12.1056 11.9645 12.1704 11.8909L12.2195 11.9355ZM12.1837 14.6247C12.4225 15.0376 12.7238 15.3924 13.0563 15.6557C12.5743 15.7651 12.1346 15.9458 11.7419 16.1065C11.6481 16.1445 11.5566 16.1824 11.4674 16.2181C11.7642 15.6803 12.0119 15.071 12.1837 14.6247ZM15.6562 16.0864L15.6428 16.1065C15.6428 16.1065 15.4375 16.2315 14.6497 15.9213C15.5558 15.8789 15.6562 16.0864 15.6562 16.0864Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ea = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "document-remove",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M6.5 14V20.5H18.5V14M6.5 11V9.5L11.5 4.5H18.5V11M3 12.5H22",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      eb = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "document-sheet",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M10.4 19V16.4M10.4 16.4L10.4 13.4M10.4 16.4H8M10.4 16.4H14.4M10.4 13.4V11M10.4 13.4H8M10.4 13.4H14.4M14.4 19V16.4M14.4 16.4V13.4M14.4 16.4H17M14.4 13.4V11M14.4 13.4H17M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ec = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "documents",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M10.5 4.5V9.5H5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M16.5 7.5H19.5V21.5H8.5V18.5M10.5 4.5H16.5V18.5H5.5V9.5L10.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ed = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "document-text",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M16 13H9M14 16H9M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ee = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "document-video",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.5 16.5V13.5L14 15L11.5 16.5Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ef = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "document-word",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.4699 13.4588H12.5263L13.6328 17H14.5435L16 12H14.9952L14.0656 15.7214H14.0129L12.929 12H12.0672L10.9984 15.7214H10.9419L10.0124 12H9L10.4565 17H11.371L12.4699 13.4588Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      eg = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "document-zip",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.5 4.5V9.5H6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M15 4.5L13.5 5L15.5 6L13.5 7L15.5 8L13.5 9L15.5 10L13.5 11L14.5 11.5V13M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5ZM13.5 13H15.5L16 17H13L13.5 13Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      eh = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "dot",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("circle", {
            cx: 12.5,
            cy: 12.5,
            r: 2.5,
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      ei = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "double-chevron-down",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M17 7.5C15.6332 8.86683 12.5 12 12.5 12L8 7.5M17 12.5C15.6332 13.8668 12.5 17 12.5 17L8 12.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ej = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "double-chevron-left",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 17L8 12.5L12.5 8M17.5 17L13 12.5L17.5 8",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ek = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "double-chevron-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 8L17 12.5L12.5 17M7.5 8L12 12.5L7.5 17",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      el = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "double-chevron-up",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8 12.5L12.5 8L17 12.5M8 17.5L12.5 13L17 17.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      em = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "download",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M19.5 17V19.5H5.5V17M12.5 16L12.5 5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M17.5 11L12.5 16L7.5 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      en = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "drag-handle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      eo = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "drop",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M18.5 14.5C18.5 18 16 20.5 12.5 20.5C9 20.5 6.5 18 6.5 14.5C6.5 11 9.5 7.50001 12.5 4.5C15.5 7.5 18.5 11 18.5 14.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ep = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "earth-americas",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M7 13L5.5 9L10 5H15V10L14 9H11L9.5 11L10.5 12H12V13L13 14.5H15.5L18.5 17L15.5 19.5L10.5 20V17L12.5 15L9 13L7 10.5V13Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("circle", {
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
      eq = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "earth-globe",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M20.5 12.5H4.5M12.5 20.5C12.5 20.5 9.5 17.5 9.5 12.5C9.5 7.5 12.5 4.5 12.5 4.5C12.5 4.5 15.5 7.5 15.5 12.5C15.5 17.5 12.5 20.5 12.5 20.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      er = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "edit",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M15 7L18 10M6 19L7 15L17 5L20 8L10 18L6 19Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      es = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "ellipsis-horizontal",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5C5 11.6716 5.67157 11 6.5 11Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M12.5 11C13.3284 11 14 11.6716 14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M18.5 11C19.3284 11 20 11.6716 20 12.5C20 13.3284 19.3284 14 18.5 14C17.6716 14 17 13.3284 17 12.5C17 11.6716 17.6716 11 18.5 11Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      et = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "ellipsis-vertical",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M14 6.5C14 7.32843 13.3284 8 12.5 8C11.6716 8 11 7.32843 11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M14 18.5C14 19.3284 13.3284 20 12.5 20C11.6716 20 11 19.3284 11 18.5C11 17.6716 11.6716 17 12.5 17C13.3284 17 14 17.6716 14 18.5Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      eu = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "empty",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 21V19.1111M8.25 19.8614L9.19445 18.2255M5.13878 16.7501L6.77461 15.8057M4 12.5H5.8889M5.13872 8.2499L6.77455 9.19436M8.25004 5.13876L9.19449 6.7746M12.5 5.88891V4M15.8055 6.77465L16.75 5.1388M18.2254 9.19449L19.8612 8.25004M19.1111 12.5001H21M18.2254 15.8056L19.8612 16.7501M15.8056 18.2255L16.75 19.8614",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      ev = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "enter",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M6 14.5H19.5V7",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M10 18.5L6 14.5L10 10.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ew = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "enter-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M19 14.5H5.5V7",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M15 18.5L19 14.5L15 10.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ex = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "envelope",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M20.5 18.5H4.5V6.5H20.5V18.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M20.5 18.5L17.75 15.5L15 12.5M4.5 18.5L10 12.5M20.5 6.5L12.5 15L4.5 6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ey = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "equal",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", { d: "M7.5 4.5H3.5V20.5H7.5", stroke: "currentColor", strokeWidth: 1.2 }),
            (0, a1.jsx)("path", {
              d: "M17.5 20.5L21.5 20.5L21.5 4.5L17.5 4.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
            }),
            (0, a1.jsx)("path", { d: "M9 10.5H16", stroke: "currentColor", strokeWidth: 1.2 }),
            (0, a1.jsx)("path", { d: "M9 14.5H16", stroke: "currentColor", strokeWidth: 1.2 }),
          ],
        });
      }),
      ez = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "error-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5ZM13 14.5V16H12V14.5H13ZM12 9V13H13V9H12Z",
            fill: "currentColor",
          }),
        });
      }),
      eA = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "error-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 16V14.5M12.5 9V13M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eB = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "error-screen",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M10 8.5L15 13.5M15 8.5L10 13.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M12.5 16.5H5.5C4.94772 16.5 4.5 16.0523 4.5 15.5V6.5C4.5 5.94771 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H12.5ZM12.5 16.5V19.5M12.5 19.5H8M12.5 19.5H17",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      eC = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "expand",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M14 6.5H18.5V11M11 18.5H6.5V14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M18.5 6.5L14 11M6.5 18.5L11 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      eD = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "eye-closed",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7 15.5L5.5 17.5M20.5 12.5C19.8612 13.5647 19.041 14.6294 18.0008 15.501M18.0008 15.501C16.5985 16.676 14.7965 17.5 12.5 17.5M18.0008 15.501L18 15.5M18.0008 15.501L19.5 17.5M12.5 17.5C8.5 17.5 6 15 4.5 12.5M12.5 17.5V20M15.5 17L16.5 19.5M9.5 17L8.5 19.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eE = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "eye-open",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.39999 12.5C9.39999 10.7879 10.7879 9.39999 12.5 9.39999C14.2121 9.39999 15.6 10.7879 15.6 12.5C15.6 14.2121 14.2121 15.6 12.5 15.6C10.7879 15.6 9.39999 14.2121 9.39999 12.5Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M12.5 7.5C8.5 7.5 6 10 4.5 12.5C6 15 8.5 17.5 12.5 17.5C16.5 17.5 19 15 20.5 12.5C19 10 16.5 7.5 12.5 7.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      eF = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "face-happy",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 9V12M14.5 9V12M8.5 14C8.5 14 9.50001 16.5 12.5 16.5C15.5 16.5 16.5 14 16.5 14M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eG = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "face-indifferent",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 9V12M14.5 9V12M8.5 15.5C8.5 15.5 9.50001 15.5 12.5 15.5C15.5 15.5 16.5 15.5 16.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eH = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "face-sad",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 9V12M14.5 9V12M8.5 16.5C8.5 16.5 9.50001 14.5 12.5 14.5C15.5 14.5 16.5 16.5 16.5 16.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eI = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "feedback",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", { d: "M10 11.5V12H9.5L9.5 11.5H10Z", fill: "currentColor" }),
            (0, a1.jsx)("path", { d: "M13 11.5V12H12.5V11.5H13Z", fill: "currentColor" }),
            (0, a1.jsx)("path", { d: "M16 11.5V12H15.5V11.5H16Z", fill: "currentColor" }),
            (0, a1.jsx)("path", {
              d: "M10 11.5V12H9.5L9.5 11.5H10Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M13 11.5V12H12.5V11.5H13Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M16 11.5V12H15.5V11.5H16Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M7.5 16.5H9.5V20.5L13.5 16.5H17.5C18.6046 16.5 19.5 15.6046 19.5 14.5V8.5C19.5 7.39543 18.6046 6.5 17.5 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      eJ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "filter",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M6 7.5H19M8 12.5H17M10 17.5H15",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eK = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "folder",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M11.5 8.5H19.5V18.5H5.5V5.5H10.5L11.5 8.5ZM11.5 8.5H5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eL = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "generate",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M9 5.30423C6.33576 6.60253 4.5 9.33688 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5V14.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M16 11L12.5 14.5L9 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      eM = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "github",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.507 4C7.80286 4 4 7.8309 4 12.5702C4 16.3587 6.43663 19.5655 9.81687 20.7005C10.2395 20.7858 10.3943 20.5161 10.3943 20.2892C10.3943 20.0905 10.3804 19.4094 10.3804 18.6999C8.01391 19.2108 7.52112 17.6782 7.52112 17.6782C7.14081 16.685 6.57732 16.4297 6.57732 16.4297C5.80279 15.9047 6.63374 15.9047 6.63374 15.9047C7.49291 15.9615 7.94374 16.7844 7.94374 16.7844C8.70417 18.0897 9.92953 17.7209 10.4225 17.4938C10.4929 16.9404 10.7184 16.5573 10.9578 16.3445C9.07037 16.1459 7.08457 15.4081 7.08457 12.1161C7.08457 11.1796 7.42239 10.4134 7.95767 9.81757C7.87321 9.60478 7.57736 8.72489 8.04229 7.54724C8.04229 7.54724 8.76059 7.32017 10.3802 8.42695C11.0736 8.23935 11.7887 8.14392 12.507 8.14312C13.2253 8.14312 13.9576 8.24255 14.6337 8.42695C16.2535 7.32017 16.9718 7.54724 16.9718 7.54724C17.4367 8.72489 17.1407 9.60478 17.0562 9.81757C17.6056 10.4134 17.9295 11.1796 17.9295 12.1161C17.9295 15.4081 15.9437 16.1316 14.0422 16.3445C14.3521 16.6141 14.6196 17.1248 14.6196 17.9337C14.6196 19.0829 14.6057 20.0053 14.6057 20.289C14.6057 20.5161 14.7606 20.7858 15.1831 20.7006C18.5633 19.5653 21 16.3587 21 12.5702C21.0139 7.8309 17.1971 4 12.507 4Z",
            fill: "currentColor",
          }),
        });
      }),
      eN = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "groq",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", { d: "M13 13H21L13 21L13 13Z", fill: "currentColor" }),
            (0, a1.jsx)("path", { d: "M12 12V4L4 12H12Z", fill: "currentColor" }),
            (0, a1.jsx)("path", { d: "M12 13H4L12 21V13Z", fill: "currentColor" }),
          ],
        });
      }),
      eO = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "hash",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.33894 16.1002H5.44615L5.63077 14.9002H8.52356L9.26202 10.1002H6.36923L6.55384 8.90018H9.44663L9.89281 6H11.1069L10.6608 8.90018H15.4466L15.8928 6H17.1069L16.6608 8.90018H19.5539L19.3693 10.1002H16.4761L15.7377 14.9002H18.6308L18.4462 16.1002H15.5531L15.1069 19H13.8928L14.3389 16.1002H9.55306L9.10693 19H7.89281L8.33894 16.1002ZM10.4761 10.1002L9.73767 14.9002H14.5236L15.262 10.1002H10.4761Z",
            fill: "currentColor",
          }),
        });
      }),
      eP = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "heart-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eQ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "heart",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eR = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "help-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eS = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "highlight",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M17.5311 13.7141L8.02451 8.22547M17.5311 13.7141L20.25 9.00478M17.5311 13.7141L16.5 15.5L13.232 16.134L12 18L11.4142 17.6485M8.02451 8.22547L10.75 3.50479M8.02451 8.22547L6.99999 9.99998L7.99999 13L6.99999 15L7.58576 15.3514M7.58576 15.3514L4.90192 20L10.0566 20L11.4142 17.6485M7.58576 15.3514L11.4142 17.6485M13 20H20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eT = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "home",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M14.5 18.5V12.5H10.5V18.5M5.5 11.5V18.5H19.5V11.5L12.5 5.5L5.5 11.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eU = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "ice-cream",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 13.5L12.5 20.5L15.5 13.5M12.5 8.26389C11.9692 7.78885 11.2684 7.5 10.5 7.5C8.84315 7.5 7.5 8.84315 7.5 10.5C7.5 12.1569 8.84315 13.5 10.5 13.5C11.2684 13.5 11.9692 13.2111 12.5 12.7361M9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5M17.5 10.5C17.5 12.1569 16.1569 13.5 14.5 13.5C12.8431 13.5 11.5 12.1569 11.5 10.5C11.5 8.84315 12.8431 7.5 14.5 7.5C16.1569 7.5 17.5 8.84315 17.5 10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eV = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "image",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5.5 15.5L8.79289 12.2071C9.18342 11.8166 9.81658 11.8166 10.2071 12.2071L12.8867 14.8867C13.2386 15.2386 13.7957 15.2782 14.1938 14.9796L15.1192 14.2856C15.3601 14.1049 15.6696 14.0424 15.9618 14.1154L19.5 15M5.5 6.5H19.5V18.5H5.5V6.5ZM15.5 10.5C15.5 11.0523 15.0523 11.5 14.5 11.5C13.9477 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.9477 9.5 14.5 9.5C15.0523 9.5 15.5 9.94772 15.5 10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eW = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "image-remove",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5.5 11V6.5H19.5V11M5.5 14V18.5H19.5V14M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eX = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "images",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M18.5 7.5H20.5V19.5H6.5V17.5M4.5 14.5L7.79289 11.2071C8.18342 10.8166 8.81658 10.8166 9.20711 11.2071L11.8867 13.8867C12.2386 14.2386 12.7957 14.2782 13.1938 13.9796L14.1192 13.2856C14.3601 13.1049 14.6696 13.0424 14.9618 13.1154L18.5 14M4.5 5.5H18.5V17.5H4.5V5.5ZM14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.9477 8.5 13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eY = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "inbox",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9 8.5H8.17703C7.76813 8.5 7.40042 8.74895 7.24856 9.12861L5.5 13.5M5.5 13.5V17.5C5.5 18.0523 5.94302 18.5 6.4953 18.5C9.00381 18.5 15.5919 18.5 18.504 18.5C19.0563 18.5 19.5 18.0523 19.5 17.5V13.5M5.5 13.5H8.5L10 15.5H15L16.5 13.5H19.5M19.5 13.5L17.7514 9.12861C17.5996 8.74895 17.2319 8.5 16.823 8.5H16M12.5 5V12.5M12.5 12.5L15 10M12.5 12.5L10 10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      eZ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "info-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5ZM12 10.5V9H13V10.5H12ZM13 16V12H12V16H13Z",
            fill: "currentColor",
          }),
        });
      }),
      e$ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "info-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 10.5V9M12.5 12V16M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      e_ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "inline-element",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5.5 5V20M19.5 5V20M8.5 6.5H16.5V18.5H8.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      e0 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "inline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 6.5H19.5V18.5H12.5M12.5 6.5H5.5V18.5H12.5M12.5 6.5V18.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      e1 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "insert-above",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M14.5 10.5556L10.5 10.5556M12.5 12.5L12.5 8.5M18.5 5.5L6.5 5.5M18.5 19.5L6.5 19.5L6.5 15.5L18.5 15.5L18.5 19.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
          }),
        });
      }),
      e2 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "insert-below",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 14.5H14.5M12.5 12.5V16.5M6.5 19.5H18.5M6.5 5.5H18.5V9.5H6.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
          }),
        });
      }),
      e3 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "italic",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.43 18H11.7276L13.4551 9.86763H12.1576L10.43 18ZM13.3042 8.29849C13.8021 8.29849 14.2095 7.89112 14.2095 7.39322C14.2095 6.89532 13.8021 6.48795 13.3042 6.48795C12.8063 6.48795 12.399 6.89532 12.399 7.39322C12.399 7.89112 12.8063 8.29849 13.3042 8.29849Z",
            fill: "currentColor",
          }),
        });
      }),
      e4 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "joystick",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 16V14.5H15.5V16M13.5 10.5V14.5M11.5 10.5V14.5M15.5 7.5C15.5 9.15685 14.1569 10.5 12.5 10.5C10.8431 10.5 9.5 9.15685 9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5ZM18.5 19.5H6.5C5.94772 19.5 5.5 19.0523 5.5 18.5V17.5C5.5 16.9477 5.94772 16.5 6.5 16.5H18.5C19.0523 16.5 19.5 16.9477 19.5 17.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      e5 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "json",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M11 5.5H9.5C8.39543 5.5 7.5 6.39543 7.5 7.5V12.5M7.5 12.5H4M7.5 12.5V17.5C7.5 18.6046 8.39543 19.5 9.5 19.5H11M14 5.5H15.5C16.6046 5.5 17.5 6.39543 17.5 7.5V12.5M17.5 12.5H21M17.5 12.5V17.5C17.5 18.6046 16.6046 19.5 15.5 19.5H14",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      e6 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "launch",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12 7.5H6.5V18.5H17.5V13M19.5 5.5L10.5 14.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M14 5.5H19.5V11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      e7 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "leave",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M14.5 15V18.5H5.5V6.5H14.5V10M9 12.5H21.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M18 9L21.5 12.5L18 16",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      e8 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "lemon",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.6569 10.3431L6.41422 14.5858C7.58579 15.7574 9.12132 16.3431 10.6569 16.3431M10.6569 10.3431L14.8995 6.1005C16.0711 7.27208 16.6569 8.80761 16.6569 10.3431M10.6569 10.3431L10.6569 16.3431M10.6569 10.3431L16.6569 10.3431M10.6569 10.3431L14.8995 14.5858M14.8995 14.5858C13.7279 15.7574 12.1924 16.3431 10.6569 16.3431M14.8995 14.5858C16.0711 13.4142 16.6569 11.8787 16.6569 10.3431M16.3137 4.68629C19.4379 7.81049 19.4379 12.8758 16.3137 16C13.1895 19.1242 8.12419 19.1242 5 16L16.3137 4.68629Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      e9 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "linkedin",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M20.0249 20H16.9137V15.1278C16.9137 13.9659 16.893 12.4704 15.2956 12.4704C13.6753 12.4704 13.4273 13.7362 13.4273 15.0432V19.9997H10.3162V9.98042H13.3028V11.3496H13.3447C13.6436 10.8386 14.0755 10.4182 14.5944 10.1332C15.1134 9.8482 15.6999 9.7092 16.2915 9.7312C19.4448 9.7312 20.0262 11.8054 20.0262 14.5036L20.0249 20ZM6.80572 8.6109C6.44863 8.6109 6.0996 8.50507 5.80265 8.30683C5.50571 8.10848 5.27427 7.82653 5.13757 7.4967C5.00086 7.16677 4.96502 6.80378 5.03463 6.45356C5.10423 6.10334 5.27613 5.78157 5.52858 5.52903C5.78103 5.2765 6.10271 5.10448 6.45293 5.03476C6.80315 4.96502 7.16614 5.00072 7.49607 5.13731C7.826 5.2739 8.10796 5.50526 8.30641 5.80212C8.50486 6.09894 8.6108 6.44798 8.6109 6.80507C8.6109 7.04216 8.56422 7.277 8.47352 7.49606C8.38283 7.71512 8.24995 7.91422 8.0823 8.08187C7.91466 8.24952 7.71567 8.3826 7.4966 8.4733C7.27765 8.5641 7.04281 8.61079 6.80572 8.6109ZM8.36136 20H5.24695V9.98042H8.36136V20Z",
            fill: "currentColor",
          }),
        });
      }),
      fa = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "link",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M11 12.5L12.5 14C13.281 14.781 14.719 14.781 15.5 14L18.5 11C19.281 10.219 19.281 8.78105 18.5 8L18 7.5C17.2189 6.71895 15.781 6.71895 15 7.5L13 9.5M12 15.5L10 17.5C9.21895 18.281 7.78105 18.281 7 17.5L6.5 17C5.71895 16.219 5.71896 14.781 6.5 14L9.50001 11C10.2811 10.219 11.719 10.2189 12.5 11L14 12.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fb = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "link-removed",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M18.5 11C19.281 10.219 19.281 8.78108 18.5 8.00003L18 7.50003C17.2189 6.71898 15.781 6.71898 15 7.50003L13 9.50003M15.5 14C14.7189 14.7811 13.281 14.7811 12.5 14M6.5 14C5.71895 14.7811 5.71894 16.219 6.49999 17L6.99999 17.5C7.78104 18.2811 9.21894 18.2811 9.99999 17.5L12 15.5M12.5 11C11.719 10.219 10.281 10.219 9.5 11M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fc = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "list",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M6 6.5H19M6 14.5H19M6 10.5H19M6 18.5H19",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fd = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "lock",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M15.5 11.5V8.5C15.5 6.5 14 5.5 12.5 5.5C11 5.5 9.5 6.5 9.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fe = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "logo-js",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 5H5V20H20V5ZM12.5254 16.1572C12.5254 17.4189 11.7742 18.1536 10.4792 18.1536C9.24243 18.1536 8.49121 17.4189 8.45801 16.2942V16.261H9.67407V16.2859C9.69897 16.7466 9.9729 17.0703 10.4626 17.0703C10.9939 17.0703 11.272 16.7507 11.272 16.1489V12.011H12.5254V16.1572ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
            fill: "currentColor",
          }),
        });
      }),
      ff = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "logo-ts",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 5H5V20H20V5ZM11.0769 18H9.82349V13.0444H8.02637V12.011H12.874V13.0444H11.0769V18ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
            fill: "currentColor",
          }),
        });
      }),
      fg = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "marker",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 14 15.5 17.5 12.5 20.5C9.5 17.5 6.5 14 6.5 10.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M14 10.5C14 11.3284 13.3284 12 12.5 12C11.6716 12 11 11.3284 11 10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fh = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "marker-removed",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7.39787 14C8.51075 16.2897 10.5054 18.5054 12.5 20.5C14.4946 18.5054 16.4892 16.2897 17.6021 14M6.52009 11C6.50681 10.8334 6.5 10.6667 6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 10.6667 18.4932 10.8334 18.4799 11M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fi = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "master-detail",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 6.5V10.5M9.5 10.5V14.5M9.5 10.5H5.5M9.5 14.5V18.5M9.5 14.5H5.5M5.5 6.5H19.5V18.5H5.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fj = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "menu",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M6 7.5H19M6 17.5H19M6 12.5H19",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fk = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "microphone",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 16.5C15.8137 16.5 18.5 13.8137 18.5 10.5V10M12.5 16.5C9.18629 16.5 6.5 13.8137 6.5 10.5V10M12.5 16.5V20.5M8 20.5H17M15.5 10.5C15.5 12.1569 14.1569 13.5 12.5 13.5C10.8431 13.5 9.5 12.1569 9.5 10.5V7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5V10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
          }),
        });
      }),
      fl = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "microphone-slash",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M17.8162 14.412C18.6231 13.3173 19.1 11.9644 19.1 10.5V10H17.9V10.5C17.9 11.6324 17.5514 12.6834 16.9557 13.5516L17.8162 14.412Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M14.2171 15.6213L15.1446 16.5488C14.5091 16.8271 13.8213 17.0081 13.1 17.0731V19.9H17V21.1H7.99999V19.9H11.9V17.0731C8.53609 16.77 5.89999 13.9429 5.89999 10.5V10H7.09999V10.5C7.09999 13.4824 9.51766 15.9 12.5 15.9C13.1003 15.9 13.6777 15.8021 14.2171 15.6213Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M15.6494 12.2453C15.9365 11.7283 16.1 11.1333 16.1 10.5V7.50002C16.1 5.5118 14.4882 3.90002 12.5 3.90002C11.0945 3.90002 9.87704 4.70551 9.2842 5.88007L10.2038 6.79966C10.5035 5.81583 11.4181 5.10002 12.5 5.10002C13.8255 5.10002 14.9 6.17454 14.9 7.50002V10.5C14.9 10.7968 14.8461 11.0811 14.7476 11.3435L15.6494 12.2453Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M8.89999 10.3042L12.6909 14.0951C12.6277 14.0984 12.564 14.1 12.5 14.1C10.5118 14.1 8.89999 12.4882 8.89999 10.5V10.3042Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", { d: "M19 18L6 5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
          ],
        });
      }),
      fm = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "mobile-device",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M7.5 6.5C7.5 5.39543 8.39543 4.5 9.5 4.5H15.5C16.6046 4.5 17.5 5.39543 17.5 6.5V18.5C17.5 19.6046 16.6046 20.5 15.5 20.5H9.5C8.39543 20.5 7.5 19.6046 7.5 18.5V6.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M13.5 17.5C13.5 18.0523 13.0523 18.5 12.5 18.5C11.9477 18.5 11.5 18.0523 11.5 17.5C11.5 16.9477 11.9477 16.5 12.5 16.5C13.0523 16.5 13.5 16.9477 13.5 17.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fn = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "moon",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fo = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "number",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.0165 17.6336H3.83636V16.4336H21.0165V17.6336Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M7.09808 13.3967V7.508H5.74066L3.83636 8.78241V10.091L5.65277 8.88495H5.74066V13.3967H3.84125V14.5539H8.89984V13.3967H7.09808Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M9.81781 9.63202V9.66132H11.1069V9.62714C11.1069 8.95331 11.5756 8.49432 12.2739 8.49432C12.9575 8.49432 13.4018 8.89471 13.4018 9.50507C13.4018 9.9787 13.1528 10.3498 12.1909 11.3117L9.89594 13.5822V14.5539H14.8618V13.3869H11.7807V13.299L13.1577 11.9855C14.3491 10.843 14.7543 10.1838 14.7543 9.41229C14.7543 8.19159 13.7729 7.36639 12.3178 7.36639C10.8383 7.36639 9.81781 8.28436 9.81781 9.63202Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M17.6694 11.4631H18.5092C19.3198 11.4631 19.8422 11.8683 19.8422 12.4982C19.8422 13.1183 19.3295 13.5139 18.5239 13.5139C17.767 13.5139 17.2592 13.133 17.2104 12.5324H15.9262C15.9897 13.8508 17.0248 14.6955 18.5629 14.6955C20.1401 14.6955 21.2192 13.841 21.2192 12.591C21.2192 11.6584 20.6528 11.0334 19.7006 10.9211V10.8332C20.4721 10.6769 20.9457 10.0666 20.9457 9.23651C20.9457 8.12323 19.9741 7.36639 18.5434 7.36639C17.0541 7.36639 16.1118 8.17694 16.0629 9.50018H17.2983C17.3422 8.88007 17.8061 8.48456 18.4995 8.48456C19.2075 8.48456 19.6567 8.85565 19.6567 9.44159C19.6567 10.0324 19.1977 10.4182 18.4946 10.4182H17.6694V11.4631Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      fp = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "ok-hand",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M15.9957 11.5C14.8197 10.912 11.9957 9 10.4957 9C8.9957 9 5.17825 11.7674 6 13C7 14.5 9.15134 11.7256 10.4957 12C11.8401 12.2744 13 13.5 13 14.5C13 15.5 11.8401 16.939 10.4957 16.5C9.15134 16.061 8.58665 14.3415 7.4957 14C6.21272 13.5984 5.05843 14.6168 5.5 15.5C5.94157 16.3832 7.10688 17.6006 8.4957 19C9.74229 20.2561 11.9957 21.5 14.9957 20C17.9957 18.5 18.5 16.2498 18.5 13C18.5 11.5 13.7332 5.36875 11.9957 4.5C10.9957 4 10 5 10.9957 6.5C11.614 7.43149 13.5 9.27705 14 10.3751M15.5 8C15.5 8 15.3707 7.5 14.9957 6C14.4957 4 15.9957 3.5 16.4957 4.5C17.1281 5.76491 18.2872 10.9147 18.4957 13",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fq = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "olist",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10 7.5H19M10 12.5H19M10 17.5H19M5 18.5H7.5L7 17.5L7.5 16.5H5M5 6.5H6.5V8.5M5 8.5H6.5M6.5 8.5H8M8 13.5H6L7 11.5H5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fr = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "overage",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M18.5 11V6.5H14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M6.5 18.5L9 16L12 13L18.5 6.5M3 13.5H22",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fs = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "package",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ft = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "panel-left",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 6.5H19.5V18.5H10.5M10.5 6.5H5.5V18.5H10.5M10.5 6.5V18.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fu = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "panel-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M14.5 6.5H19.5V18.5H14.5M14.5 6.5H5.5V18.5H14.5M14.5 6.5V18.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fv = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "pause",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", { d: "M10.5 7.5H8.5V17.5H10.5V7.5Z", fill: "currentColor" }),
            (0, a1.jsx)("path", { d: "M16.5 7.5H14.5V17.5H16.5V7.5Z", fill: "currentColor" }),
            (0, a1.jsx)("path", { d: "M10.5 7.5H8.5V17.5H10.5V7.5Z", stroke: "currentColor", strokeWidth: 1.2 }),
            (0, a1.jsx)("path", { d: "M16.5 7.5H14.5V17.5H16.5V7.5Z", stroke: "currentColor", strokeWidth: 1.2 }),
          ],
        });
      }),
      fw = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "pin-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M17 15H8V13.5C8 12 10.5 11 10.5 11V9L8.5 7V6H16.5V7L14.5 9V11C14.5 11 17 12 17 13.5V15Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M12 15L12.5 20L13 15",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fx = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "pin",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12 15L12.5 20L13 15",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M17 15H8V13.5C8 12 10.5 11 10.5 11V9L8.5 7V6H16.5V7L14.5 9V11C14.5 11 17 12 17 13.5V15Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fy = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "pin-removed",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7.39787 14C8.51075 16.2897 10.5054 18.5054 12.5 20.5C14.4946 18.5054 16.4892 16.2897 17.6021 14M6.52009 11C6.50681 10.8334 6.5 10.6667 6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 10.6667 18.4932 10.8334 18.4799 11M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fz = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "play",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7.5 18.5V6.5L17.5 12.5L7.5 18.5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fA = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "plug",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M13.25 8.5L16.75 5M16.25 11.5L19.75 8M9.25 15.5L5.25 19.5M7.75 14L9.75 12C8.25 10 8.75 9 9.75 8C10.15 7.6 11.25 6.5 11.25 6.5L18.25 13.5C18.25 13.5 17.3825 14.3675 16.75 15C15.75 16 14.75 16.5 12.75 15L10.75 17L7.75 14Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fB = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "presentation",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 18H5.5V8.5H19.5V18H14.5M10.5 18L9 22M10.5 18H14.5M14.5 18L16 22M4.5 8.5H20.5V6.5H4.5V8.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fC = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "progress-50",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M17 12.5C17 14.9853 14.9853 17 12.5 17V8C14.9853 8 17 10.0147 17 12.5Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fD = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "progress-75",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.5 17C14.9853 17 17 14.9853 17 12.5C17 10.0147 14.9853 8 12.5 8V12.5H8C8 14.9853 10.0147 17 12.5 17Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fE = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "projects",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M21 17.5H14M17.5 14V21M5.5 14.5H10.5V19.5H5.5V14.5ZM14.5 5.5H19.5V10.5H14.5V5.5ZM5.5 5.5H10.5V10.5H5.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fF = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "publish",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M4.99997 5.50006H20M12.5 9.00005V20",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M7.5 14L12.5 9.00006L17.5 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fG = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "read-only",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M15 7L18 10M10 12L7 15L6 19L10 18L13 15M12 10L17 5L20 8L15 13M19 19L5 5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fH = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "redo",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M19 9.5L10 9.5C7.51472 9.5 5.5 11.5147 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5H19",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M15 13.5L19 9.5L15 5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fI = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "refresh",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M19.5 13.5C19.5 17.366 16.366 20.5 12.5 20.5C8.63401 20.5 5.5 17.366 5.5 13.5C5.5 9.63401 8.63401 6.5 12.5 6.5H15.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 10.5L15.5 6.5L11.5 2.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fJ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "remove-circle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8 12.4H17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fK = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "remove",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5 12.5H20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fL = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "reset",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M7 11L4.56189 13.5L2 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M9.50001 15.5L15.5 9.5M9.5 9.5L15.5 15.5M4.56189 13.5C4.52104 13.1724 4.5 12.8387 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C9.75033 20.5 7.32466 19.1128 5.88468 17",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fM = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "restore",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M5.88468 17C7.32466 19.1128 9.75033 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5V13.5M12.5 8V12.5L15.5 15.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M7 11L4.5 13.5L2 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fN = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "retrieve",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M16 14L12.5 10.5L9 14M5.5 7.5H19.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M12.5 10.5L12.5 17.5M19.5 7.5V19.5H5.5V7.5L7.5 5.5H17.5L19.5 7.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fO = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "retry",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M19 9.5L10 9.5C7.51472 9.5 5.5 11.5147 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5H19",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M15 13.5L19 9.5L15 5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fP = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "revert",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M6 9.5L15 9.5C17.4853 9.5 19.5 11.5147 19.5 14C19.5 16.4853 17.4853 18.5 15 18.5H6",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M10 13.5L6 9.5L10 5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fQ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "robot",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 15.5V17.5M12.5 8.5V6.5M12.5 6.5C13.3284 6.5 14 5.82843 14 5C14 4.17157 13.3284 3.5 12.5 3.5C11.6716 3.5 11 4.17157 11 5C11 5.82843 11.6716 6.5 12.5 6.5ZM20.5 20.5V19.5C20.5 18.3954 19.6046 17.5 18.5 17.5H6.5C5.39543 17.5 4.5 18.3954 4.5 19.5V20.5H20.5ZM11.5 12C11.5 12.5523 11.0523 13 10.5 13C9.94772 13 9.5 12.5523 9.5 12C9.5 11.4477 9.94772 11 10.5 11C11.0523 11 11.5 11.4477 11.5 12ZM15.5 12C15.5 12.5523 15.0523 13 14.5 13C13.9477 13 13.5 12.5523 13.5 12C13.5 11.4477 13.9477 11 14.5 11C15.0523 11 15.5 11.4477 15.5 12ZM8.5 15.5H16.5C17.6046 15.5 18.5 14.6046 18.5 13.5V10.5C18.5 9.39543 17.6046 8.5 16.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5V13.5C6.5 14.6046 7.39543 15.5 8.5 15.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fR = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "rocket",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 20.5L15.5 14M11 9.49999L4.5 12.5M9 14C9 14 7.54688 14.9531 6.5 16C5.5 17 4.5 20.5 4.5 20.5C4.5 20.5 8 19.5 9 18.5C10 17.5 11 16 11 16M9 14C9 14 10.1 9.9 12.5 7.5C15.5 4.5 20.5 4.5 20.5 4.5C20.5 4.5 20.5 9.5 17.5 12.5C15.7492 14.2508 11 16 11 16L9 14ZM16.5 9.99999C16.5 10.8284 15.8284 11.5 15 11.5C14.1716 11.5 13.5 10.8284 13.5 9.99999C13.5 9.17157 14.1716 8.49999 15 8.49999C15.8284 8.49999 16.5 9.17157 16.5 9.99999Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fS = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "schema",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 9.5V12.5M12.5 12.5H8.5V15.5M12.5 12.5H16.5V15.5M10.5 5.5H14.5V9.5H10.5V5.5ZM6.5 15.5H10.5V19.5H6.5V15.5ZM14.5 15.5H18.5V19.5H14.5V15.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fT = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "search",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M15.0355 15.0355L20 20M16.5 11.5C16.5 14.2614 14.2614 16.5 11.5 16.5C8.73858 16.5 6.5 14.2614 6.5 11.5C6.5 8.73858 8.73858 6.5 11.5 6.5C14.2614 6.5 16.5 8.73858 16.5 11.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fU = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "select",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M16 15L12.5 18.5L9 15M9 10L12.5 6.5L16 10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fV = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "share",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M15 10.5H18.5V19.5H6.5L6.5 10.5H10M12.5 16V3.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M9 7L12.5 3.5L16 7",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      fW = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "sort",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8.5 18.5V6M16.5 19V6.5M12 15L8.5 18.5L5 15M13 10L16.5 6.5L20 10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fX = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "sparkle",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 10.5C8.5 12.5 5 12.5 5 12.5C5 12.5 8.5 12.5 10.5 14.5C12.5 16.5 12.5 20 12.5 20C12.5 20 12.5 16.5 14.5 14.5C16.5 12.5 20 12.5 20 12.5C20 12.5 16.5 12.5 14.5 10.5C12.5 8.5 12.5 5 12.5 5C12.5 5 12.5 8.5 10.5 10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      fY = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "sparkles",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M11 3.5V5M11 5V6.5M11 5H12.5M11 5H9.5M9.5 15C9.5 15 12.2308 14.7692 13.5 13.5C14.7692 12.2308 15 9.5 15 9.5C15 9.5 15.2308 12.2308 16.5 13.5C17.7692 14.7692 20.5 15 20.5 15C20.5 15 17.7692 15.2308 16.5 16.5C15.2308 17.7692 15 20.5 15 20.5C15 20.5 14.7692 17.7692 13.5 16.5C12.2308 15.2308 9.5 15 9.5 15ZM4.5 10C4.5 10 5.72308 9.87692 6.3 9.3C6.87692 8.72308 7 7.5 7 7.5C7 7.5 7.12308 8.72308 7.7 9.3C8.27692 9.87692 9.5 10 9.5 10C9.5 10 8.27692 10.1231 7.7 10.7C7.12308 11.2769 7 12.5 7 12.5C7 12.5 6.87692 11.2769 6.3 10.7C5.72308 10.1231 4.5 10 4.5 10Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }),
      fZ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "spinner",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      f$ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "split-horizontal",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M19.5 10.5V20.5H5.5V10.5M19.5 10.5H5.5M19.5 10.5V4.5H5.5V10.5M12.5 13V15.5M12.5 18V15.5M12.5 15.5H15M12.5 15.5H10",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      f_ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "split-vertical",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 5.5V19.5M13 12.5H15.5M18 12.5H15.5M15.5 12.5V15M15.5 12.5V10M4.5 5.5H20.5V19.5H4.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      f0 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "square",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("rect", {
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
      f1 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "stack-compact",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5.5 15.5V18.5H19.5V15.5M5.5 15.5H19.5M5.5 15.5V9.5M19.5 15.5V9.5M5.5 9.5V6.5H19.5V9.5M5.5 9.5H19.5M5.5 12.5H19.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      f2 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "stack",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5.5 12.5H19.5M5.5 18.5H19.5V6.5H5.5V18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      f3 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "star-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 5L14.3956 9.89092L19.6329 10.1824L15.5672 13.4966L16.9084 18.5676L12.5 15.725L8.09161 18.5676L9.43284 13.4966L5.36708 10.1824L10.6044 9.89092L12.5 5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeLinejoin: "round",
          }),
        });
      }),
      f4 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "star",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 5L14.3956 9.89092L19.6329 10.1824L15.5672 13.4966L16.9084 18.5676L12.5 15.725L8.09161 18.5676L9.43284 13.4966L5.36708 10.1824L10.6044 9.89092L12.5 5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      f5 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "stop",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("rect", {
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
      f6 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "strikethrough",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.5656 7.73438C11.0656 7.73438 10.0734 8.48438 10.0734 9.625C10.0734 10.2317 10.3649 10.6613 11.0519 11H8.90358C8.71703 10.6199 8.62813 10.1801 8.62813 9.67188C8.62813 7.75781 10.2297 6.46094 12.6125 6.46094C14.7922 6.46094 16.4172 7.75781 16.5344 9.57812H15.1203C14.925 8.42188 13.9719 7.73438 12.5656 7.73438Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M12.4875 18.2656C10.0969 18.2656 8.44844 17 8.3 15.0547H9.72188C9.89375 16.2344 11.0188 16.9844 12.6203 16.9844C14.1359 16.9844 15.2531 16.1641 15.2531 15.0469C15.2531 14.6375 15.1255 14.292 14.8589 14H16.5912C16.6638 14.266 16.6984 14.5566 16.6984 14.875C16.6984 16.9453 15.0656 18.2656 12.4875 18.2656Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", { d: "M7 13.1H18V11.9H7V13.1Z", fill: "currentColor" }),
          ],
        });
      }),
      f7 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "string",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M11.6748 15.5227H13.1855L9.87842 6.36304H8.34863L5.0415 15.5227H6.50146L7.3457 13.0916H10.8369L11.6748 15.5227ZM9.04053 8.02612H9.14844L10.4751 11.8982H7.70752L9.04053 8.02612Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              d: "M16.8101 14.488C16.0674 14.488 15.5278 14.1262 15.5278 13.5042C15.5278 12.8948 15.9595 12.571 16.9116 12.5076L18.6001 12.3997V12.9773C18.6001 13.8342 17.8384 14.488 16.8101 14.488ZM16.4609 15.637C17.3687 15.637 18.124 15.2434 18.5366 14.5515H18.6445V15.5227H19.9585V10.8C19.9585 9.34009 18.981 8.47681 17.248 8.47681C15.6802 8.47681 14.563 9.23853 14.4233 10.4255H15.7437C15.896 9.93677 16.4229 9.65747 17.1846 9.65747C18.1177 9.65747 18.6001 10.0701 18.6001 10.8V11.3967L16.7275 11.5046C15.0835 11.6062 14.1567 12.3235 14.1567 13.5676C14.1567 14.8308 15.1279 15.637 16.4609 15.637Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19.9585 18.637L5.0415 18.637V17.437L19.9585 17.437V18.637Z",
              fill: "currentColor",
            }),
          ],
        });
      }),
      f8 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "sun",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M19 12.5H22M3 12.5H6M12.5 6V3M12.5 22V19M17.3891 7.61091L19.5104 5.48959M5.48959 19.5104L7.61091 17.3891M7.61091 7.61091L5.48959 5.48959M19.5104 19.5104L17.3891 17.3891M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      f9 = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "sync",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M13.5 4.5H12.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 15.6631 6.33576 18.3975 9 19.6958M11.5 20.5H12.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 9.33688 18.6642 6.60253 16 5.30423",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      ga = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "tablet-device",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M5.5 5.5C5.5 4.94772 5.94772 4.5 6.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V19.5C19.5 20.0523 19.0523 20.5 18.5 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5V5.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M13 18C13 18.2761 12.7761 18.5 12.5 18.5C12.2239 18.5 12 18.2761 12 18C12 17.7239 12.2239 17.5 12.5 17.5C12.7761 17.5 13 17.7239 13 18Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gb = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "tag",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.5 20L5 20L5 12.5L12.5 5L20 12.5L12.5 20Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gc = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "tags",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.1562 7.93179L13.9717 6.11633L20.3553 12.5L13.9717 18.8836L10.6855 18.8836M11.0283 18.8836L17.4119 12.5L11.0283 6.11633L4.64462 12.5L4.64462 18.8836L11.0283 18.8836ZM9.75153 15.0534C9.75153 15.7585 9.17992 16.3302 8.47481 16.3302C7.76969 16.3302 7.19808 15.7585 7.19808 15.0534C7.19808 14.3483 7.76969 13.7767 8.47481 13.7767C9.17992 13.7767 9.75153 14.3483 9.75153 15.0534Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gd = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "target",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 3V10M22 12.5H15M12.5 22V15M3 12.5H10M19 12.5C19 16.0899 16.0899 19 12.5 19C8.91015 19 6 16.0899 6 12.5C6 8.91015 8.91015 6 12.5 6C16.0899 6 19 8.91015 19 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      ge = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "task",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M20.5 10.75V19.75H4.5V10.75M20.5 10.75V5.75H17.5M20.5 10.75H4.5M4.5 10.75V5.75H7.5M7.5 5.75H17.5M7.5 5.75V8.25M7.5 5.75V3.25M17.5 5.75V8.25M17.5 5.75V3.25M9.7002 14.7358L11.7002 16.7358L15.3002 13.1758",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gf = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "terminal",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8.5 9.5L11.5 12.5L8.5 15.5M13 15.5H17M5.5 6.5H19.5V18.5H5.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gg = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "text",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M7.5 9V6.5H17.5V9M12.5 18.5V6.5M10 18.5H15",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gh = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "th-large",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 6.5V12.5M12.5 12.5V18.5M12.5 12.5H19.5M12.5 12.5H5.5M19.5 12.5V6.5H5.5V12.5M19.5 12.5V18.5H5.5V12.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gi = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "th-list",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 6.5V10.5M9.5 10.5V14.5M9.5 10.5H19.5M9.5 10.5H5.5M9.5 14.5V18.5M9.5 14.5H19.5M9.5 14.5H5.5M5.5 6.5H19.5V18.5H5.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gj = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "thumbs-down",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 15C9.5 15 12.5 16.5 12.5 18C12.5 19.5 13.5 19.5 13.5 19.5C13.5 19.5 14.5 19.5 14.5 18C14.5 16.5 14.5 15.5 14.5 15.5H18C18 15.5 18 15.5 18 15.5C18 15.5 19 15.5 19 14.5C19 13.5 19.5 14 19.5 13C19.5 12 19 11.5 19 10.5C19 9.5 18 9.5 18 8.5C18 7.5 17 7.5 16.5 7.5C16 7.5 9.5 7.5 9.5 7.5M9.5 7.5H6.5V15.5H9.5V7.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gk = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "thumbs-up",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 10C9.5 10 12.5 8.5 12.5 7C12.5 5.5 13.5 5.5 13.5 5.5C13.5 5.5 14.5 5.5 14.5 7C14.5 8.5 14.5 9.5 14.5 9.5H18C18 9.5 18 9.5 18 9.5C18 9.5 19 9.5 19 10.5C19 11.5 19.5 11 19.5 12C19.5 13 19 13.5 19 14.5C19 15.5 18 15.5 18 16.5C18 17.5 17 17.5 16.5 17.5C16 17.5 9.5 17.5 9.5 17.5M9.5 17.5H6.5V9.5H9.5V17.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gl = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "tiers",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M16.5 14.5L20.5 16.5L12.5 20.5L4.5 16.5L8.5 14.5M16.5 10.5L20.5 12.5L12.5 16.5L4.5 12.5L8.5 10.5M12.5 12.5L20.5 8.5L12.5 4.5L4.5 8.5L12.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gm = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "timeline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", { d: "M12.5 5V20", stroke: "currentColor", strokeWidth: 1.2 }),
            (0, a1.jsx)("path", {
              d: "M5 8.5H11M7 12.5H11M9 16.5H11M13 16.5H20M13 12.5H18M13 8.5H16",
              stroke: "currentColor",
              strokeWidth: 1.2,
            }),
          ],
        });
      }),
      gn = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "toggle-arrow-right",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M10.5 16V9L16 12.5L10.5 16Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeLinejoin: "round",
          }),
        });
      }),
      go = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "token",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M17.5711 12.5C17.5711 15.2614 15.3325 17.5 12.5711 17.5M7.57107 12.5C7.57107 9.73858 9.80964 7.5 12.5711 7.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gp = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "transfer",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M19.5 16.5H6M5.5 8.5L19 8.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M16 13L19.5 16.5L16 20M9 12L5.5 8.5L9 5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gq = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "translate",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.4 5.4H4V6.6H13.2189C13.1612 6.78478 13.0895 6.99578 13.0025 7.22211C12.7032 8.00031 12.2402 8.91125 11.5757 9.57574L10 11.1515L9.42426 10.5757C8.72102 9.8725 8.25297 9.16987 7.96199 8.64611C7.81668 8.38455 7.71617 8.16874 7.65305 8.02146C7.62151 7.94787 7.59937 7.89154 7.5857 7.85534C7.57886 7.83725 7.57415 7.8242 7.57144 7.81657L7.56886 7.80922C7.56886 7.80922 7.56921 7.81026 7 8C6.43079 8.18974 6.43091 8.19009 6.43091 8.19009L6.43133 8.19135L6.43206 8.19351L6.4341 8.19948L6.44052 8.21786C6.44587 8.23292 6.45336 8.25357 6.46313 8.27942C6.48266 8.33112 6.5113 8.40369 6.55008 8.49416C6.62758 8.67501 6.74582 8.92795 6.91301 9.22889C7.24703 9.83013 7.77898 10.6275 8.57574 11.4243L9.15147 12L4.57964 16.5718L4.57655 16.5749L4.57577 16.5757L5.4243 17.4242L5.42688 17.4216L10.0368 12.8117L12.6159 14.9609L13.3841 14.0391L10.8888 11.9597L12.4243 10.4243C13.2598 9.58875 13.7968 8.49969 14.1225 7.65289C14.2818 7.23863 14.395 6.87072 14.4696 6.6H16V5.4H10.6V4H9.4V5.4ZM17.4405 10L21.553 19.7672H20.2509L19.1279 17.1H14.8721L13.7491 19.7672H12.447L16.5595 10H17.4405ZM15.3773 15.9H18.6227L17 12.0462L15.3773 15.9Z",
            fill: "currentColor",
          }),
        });
      }),
      gr = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "trash",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5 6.5H20M10 6.5V4.5C10 3.94772 10.4477 3.5 11 3.5H14C14.5523 3.5 15 3.94772 15 4.5V6.5M12.5 9V17M15.5 9L15 17M9.5 9L10 17M18.5 6.5L17.571 18.5767C17.5309 19.0977 17.0965 19.5 16.574 19.5H8.42603C7.90349 19.5 7.46905 19.0977 7.42898 18.5767L6.5 6.5H18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gs = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "trend-upward",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M4.5 18.5L11.5 10.5L13.5 14.5L20.5 6.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M20.5 11V6.5H16",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gt = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "triangle-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M20.5 18.5H4.5L12.5 5.5L20.5 18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gu = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "trolley",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8 17.5L5.81763 6.26772C5.71013 5.81757 5.30779 5.5 4.84498 5.5H3M8 17.5H17M8 17.5C8.82843 17.5 9.5 18.1716 9.5 19C9.5 19.8284 8.82843 20.5 8 20.5C7.17157 20.5 6.5 19.8284 6.5 19C6.5 18.1716 7.17157 17.5 8 17.5ZM17 17.5C17.8284 17.5 18.5 18.1716 18.5 19C18.5 19.8284 17.8284 20.5 17 20.5C16.1716 20.5 15.5 19.8284 15.5 19C15.5 18.1716 16.1716 17.5 17 17.5ZM7.78357 14.5H17.5L19 7.5H6",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gv = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "truncate",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M5 12.5H20M8.5 19.5L12.5 15.5L16.5 19.5M16.5 5.5L12.5 9.5L8.5 5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gw = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "twitter",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M18.8738 6.65751C18.1994 5.9447 17.2445 5.5 16.1857 5.5C14.1423 5.5 12.4857 7.15655 12.4857 9.2C12.4857 9.55263 12.535 9.89374 12.6272 10.2168C7.0826 9.56422 4.55703 6.02857 4.55703 6.02857C4.55703 6.02857 4.02846 9.2 6.14274 11.3143C5.08571 11.3143 4.55703 10.7857 4.55703 10.7857C4.55703 10.7857 4.55703 13.4286 7.19989 14.4857C6.67143 15.0143 5.61417 14.4857 5.61417 14.4857C5.97533 15.9303 7.45606 16.8562 8.82133 17.1358C6.67298 19.1676 3.5 18.7143 3.5 18.7143C5.14562 19.771 7.21334 20.3 9.31429 20.3C16.1214 20.3 19.8162 15.6315 19.8848 9.37762C20.8722 8.58943 22 7.08571 22 7.08571C22 7.08571 21.277 7.45458 19.6913 7.98315C21.277 6.92601 21.4714 5.5 21.4714 5.5C21.4714 5.5 20.4135 6.55789 18.8738 6.65751Z",
            fill: "currentColor",
          }),
        });
      }),
      gx = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "ulist",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M7.10153 17.5C7.10153 17.8322 6.83221 18.1016 6.5 18.1016C6.16778 18.1016 5.89847 17.8322 5.89847 17.5C5.89847 17.1678 6.16778 16.8985 6.5 16.8985C6.83221 16.8985 7.10153 17.1678 7.10153 17.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M7.10153 7.49997C7.10153 7.83218 6.83221 8.1015 6.5 8.1015C6.16778 8.1015 5.89847 7.83218 5.89847 7.49997C5.89847 7.16775 6.16778 6.89844 6.5 6.89844C6.83221 6.89844 7.10153 7.16775 7.10153 7.49997Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M7.10153 12.5C7.10153 12.8322 6.83221 13.1015 6.5 13.1015C6.16778 13.1015 5.89847 12.8322 5.89847 12.5C5.89847 12.1678 6.16778 11.8984 6.5 11.8984C6.83221 11.8984 7.10153 12.1678 7.10153 12.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M10 7.5H19M10 17.5H19M10 12.5H19",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gy = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "unarchive",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.5 10.5V18M20.5 7.5V20.5H4.5V7.5L7.5 4.5H17.5L20.5 7.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M4.5 7.5H20.5M16 14L12.5 10.5L9 14",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gz = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "underline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M9.52791 7.11407H8.17V14.2582C8.17 16.5817 9.79195 18.2565 12.4927 18.2565C15.1934 18.2565 16.8154 16.5817 16.8154 14.2582V7.11407H15.4574V14.1677C15.4574 15.8122 14.3787 17.0042 12.4927 17.0042C10.6067 17.0042 9.52791 15.8122 9.52791 14.1677V7.11407Z",
              fill: "currentColor",
            }),
            (0, a1.jsx)("path", { d: "M7 20.5H18", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
          ],
        });
      }),
      gA = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "undo",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M6 9.5L15 9.5C17.4853 9.5 19.5 11.5147 19.5 14C19.5 16.4853 17.4853 18.5 15 18.5H6",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M10 13.5L6 9.5L10 5.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gB = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "unknown",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M5.5 5.5H19.5V19.5H5.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gC = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "unlink",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M15 13.5L17.5 11C18.281 10.219 18.281 8.78105 17.5 8L17 7.5C16.2189 6.71895 14.781 6.71895 14 7.5L11.5 10M10 11.5L7.5 14C6.71896 14.781 6.71895 16.219 7.5 17L8 17.5C8.78105 18.281 10.2189 18.281 11 17.5L13.5 15M9.5 8V5M8 9.5H5M17 15.5H20M15.5 17V20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gD = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "unlock",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M9.5 11.5V8.5C9.5 6.5 8 5.5 6.5 5.5C5 5.5 3.5 6.5 3.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gE = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "unpublish",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M5 19.5H20M12.5 16V5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M17.5 11L12.5 16L7.5 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gF = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "upload",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M12.5 6V15.5M5.5 15.5H19.5V19.5H5.5V15.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M7.5 11L12.5 6L17.5 11",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gG = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "user",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M8 14.5C7 15 5.5 16 5.5 19.5H19.5C19.5 16 18.3416 15.1708 17 14.5C16 14 14 14 14 12.5C14 11 15 10.25 15 8.25C15 6.25 14 5.25 12.5 5.25C11 5.25 10 6.25 10 8.25C10 10.25 11 11 11 12.5C11 14 9 14 8 14.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gH = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "users",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M17.5 18.5H21.5C21.5 15 20.8416 14.1708 19.5 13.5C18.5 13 16.5 12.5 16.5 11C16.5 9.5 17.5 9 17.5 7C17.5 5 16.5 4 15 4C13.6628 4 12.723 4.79472 12.5347 6.38415M4.5 20.5C4.5 17 5.5 16 6.5 15.5C7.5 15 9.5 14.5 9.5 13C9.5 11.5 8.5 11 8.5 9C8.5 7 9.5 6 11 6C12.5 6 13.5 7 13.5 9C13.5 11 12.5 11.5 12.5 13C12.5 14.5 14.5 15 15.5 15.5C16.8416 16.1708 17.5 17 17.5 20.5H4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gI = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "versions",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M10.5 7.5H7.5V17.5H10.5M7.5 9.5H4.5V15.5H7.5",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M20.5 19.5V5.5H10.5V19.5H20.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gJ = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsxs)("svg", {
          "data-sanity-icon": "video",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: [
            (0, a1.jsx)("path", {
              d: "M19.5 18.5H5.5V6.5H19.5V18.5Z",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
            (0, a1.jsx)("path", {
              d: "M11.5 14.5V10.5L14.5 12.5L11.5 14.5Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1.2,
              strokeLinejoin: "round",
            }),
          ],
        });
      }),
      gK = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "warning-filled",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.741 5.12635C13.7357 3.41736 11.2643 3.41736 10.259 5.12635L3.7558 16.1817C2.73624 17.915 3.98595 20.1 5.99683 20.1H19.0032C21.014 20.1 22.2637 17.915 21.2442 16.1817L14.741 5.12635ZM11.9 8.99998V13H13.1V8.99998H11.9ZM13.1 16V14.5H11.9V16H13.1Z",
            fill: "currentColor",
          }),
        });
      }),
      gL = (0, a3.forwardRef)(function (a, b) {
        return (0, a1.jsx)("svg", {
          "data-sanity-icon": "warning-outline",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...a,
          ref: b,
          children: (0, a1.jsx)("path", {
            d: "M12.5 9V13M12.5 16V14.5M14.2239 5.43058L20.727 16.486C21.5113 17.8192 20.55 19.5 19.0032 19.5H5.99683C4.45 19.5 3.48869 17.8192 4.27297 16.486L10.7761 5.43058C11.5494 4.11596 13.4506 4.11596 14.2239 5.43058Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round",
          }),
        });
      }),
      gM = {
        "access-denied": c5,
        activity: c6,
        "add-circle": c7,
        "add-comment": c8,
        "add-document": c9,
        add: da,
        "add-user": db,
        api: dc,
        archive: dd,
        "arrow-down": de,
        "arrow-left": df,
        "arrow-right": dg,
        "arrow-top-right": dh,
        "arrow-up": di,
        asterisk: dj,
        "bar-chart": dk,
        basket: dl,
        bell: dm,
        bill: dn,
        "binary-document": dp,
        "block-content": dq,
        "block-element": dr,
        blockquote: ds,
        bold: dt,
        bolt: du,
        book: dv,
        "bookmark-filled": dw,
        bookmark: dx,
        bottle: dy,
        bug: dz,
        "bulb-filled": dA,
        "bulb-outline": dB,
        calendar: dC,
        case: dD,
        "chart-upward": dE,
        "checkmark-circle": dF,
        checkmark: dG,
        "chevron-down": dH,
        "chevron-left": dI,
        "chevron-right": dJ,
        "chevron-up": dK,
        circle: dL,
        clipboard: dM,
        "clipboard-image": dN,
        clock: dO,
        "close-circle": dP,
        close: dQ,
        "code-block": dR,
        code: dS,
        cog: dT,
        collapse: dU,
        "color-wheel": dV,
        comment: dW,
        component: dX,
        compose: dY,
        "compose-sparkles": dZ,
        confetti: d$,
        controls: d_,
        copy: d0,
        "credit-card": d1,
        crop: d2,
        cube: d3,
        dashboard: d4,
        database: d5,
        desktop: d6,
        diamond: d7,
        document: d8,
        "document-pdf": d9,
        "document-remove": ea,
        "document-sheet": eb,
        "document-text": ed,
        "document-video": ee,
        "document-word": ef,
        "document-zip": eg,
        documents: ec,
        dot: eh,
        "double-chevron-down": ei,
        "double-chevron-left": ej,
        "double-chevron-right": ek,
        "double-chevron-up": el,
        download: em,
        "drag-handle": en,
        drop: eo,
        "earth-americas": ep,
        "earth-globe": eq,
        edit: er,
        "ellipsis-horizontal": es,
        "ellipsis-vertical": et,
        empty: eu,
        enter: ev,
        "enter-right": ew,
        envelope: ex,
        equal: ey,
        "error-filled": ez,
        "error-outline": eA,
        "error-screen": eB,
        expand: eC,
        "eye-closed": eD,
        "eye-open": eE,
        "face-happy": eF,
        "face-indifferent": eG,
        "face-sad": eH,
        feedback: eI,
        filter: eJ,
        folder: eK,
        generate: eL,
        github: eM,
        groq: eN,
        hash: eO,
        "heart-filled": eP,
        heart: eQ,
        "help-circle": eR,
        highlight: eS,
        home: eT,
        "ice-cream": eU,
        image: eV,
        "image-remove": eW,
        images: eX,
        inbox: eY,
        "info-filled": eZ,
        "info-outline": e$,
        "inline-element": e_,
        inline: e0,
        "insert-above": e1,
        "insert-below": e2,
        italic: e3,
        joystick: e4,
        json: e5,
        launch: e6,
        leave: e7,
        lemon: e8,
        link: fa,
        "link-removed": fb,
        linkedin: e9,
        list: fc,
        lock: fd,
        "logo-js": fe,
        "logo-ts": ff,
        marker: fg,
        "marker-removed": fh,
        "master-detail": fi,
        menu: fj,
        microphone: fk,
        "microphone-slash": fl,
        "mobile-device": fm,
        moon: fn,
        number: fo,
        "ok-hand": fp,
        olist: fq,
        overage: fr,
        package: fs,
        "panel-left": ft,
        "panel-right": fu,
        pause: fv,
        "pin-filled": fw,
        pin: fx,
        "pin-removed": fy,
        play: fz,
        plug: fA,
        presentation: fB,
        "progress-50": fC,
        "progress-75": fD,
        projects: fE,
        publish: fF,
        "read-only": fG,
        redo: fH,
        refresh: fI,
        "remove-circle": fJ,
        remove: fK,
        reset: fL,
        restore: fM,
        retrieve: fN,
        retry: fO,
        revert: fP,
        robot: fQ,
        rocket: fR,
        schema: fS,
        search: fT,
        select: fU,
        share: fV,
        sort: fW,
        sparkle: fX,
        sparkles: fY,
        spinner: fZ,
        "split-horizontal": f$,
        "split-vertical": f_,
        square: f0,
        "stack-compact": f1,
        stack: f2,
        "star-filled": f3,
        star: f4,
        stop: f5,
        strikethrough: f6,
        string: f7,
        sun: f8,
        sync: f9,
        "tablet-device": ga,
        tag: gb,
        tags: gc,
        target: gd,
        task: ge,
        terminal: gf,
        text: gg,
        "th-large": gh,
        "th-list": gi,
        "thumbs-down": gj,
        "thumbs-up": gk,
        tiers: gl,
        timeline: gm,
        "toggle-arrow-right": gn,
        token: go,
        transfer: gp,
        translate: gq,
        trash: gr,
        "trend-upward": gs,
        "triangle-outline": gt,
        trolley: gu,
        truncate: gv,
        twitter: gw,
        ulist: gx,
        unarchive: gy,
        underline: gz,
        undo: gA,
        unknown: gB,
        unlink: gC,
        unlock: gD,
        unpublish: gE,
        upload: gF,
        user: gG,
        users: gH,
        versions: gI,
        video: gJ,
        "warning-filled": gK,
        "warning-outline": gL,
        wrench: (0, a3.forwardRef)(function (a, b) {
          return (0, a1.jsx)("svg", {
            "data-sanity-icon": "wrench",
            width: "1em",
            height: "1em",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...a,
            ref: b,
            children: (0, a1.jsx)("path", {
              d: "M17.0407 5.14624L17.4649 5.57051C17.6166 5.41887 17.6758 5.19783 17.6202 4.99071C17.5646 4.78359 17.4027 4.62189 17.1955 4.56656L17.0407 5.14624ZM14.4013 7.7856L13.9771 7.36134C13.8288 7.50959 13.7687 7.72447 13.8185 7.92813L14.4013 7.7856ZM12.8778 6.26211L12.4535 5.83784L12.8778 6.26211ZM11.8309 10.6568L12.2552 11.0811C12.4152 10.9211 12.4716 10.6847 12.401 10.4697L11.8309 10.6568ZM5.63925 16.8485L5.21498 16.4242H5.21498L5.63925 16.8485ZM5.63925 19.935L6.06351 19.5108H6.06351L5.63925 19.935ZM8.72581 19.935L9.15007 20.3593L8.72581 19.935ZM15.1184 13.5425L15.2301 12.953C15.0351 12.916 14.8344 12.9779 14.6941 13.1182L15.1184 13.5425ZM18.9718 12.3561L18.5475 11.9318L18.9718 12.3561ZM20.0877 8.19324L20.6674 8.03843C20.612 7.83124 20.4503 7.66934 20.2432 7.61375C20.0361 7.55816 19.815 7.61734 19.6634 7.76898L20.0877 8.19324ZM17.4483 10.8326L17.3058 11.4154C17.5094 11.4652 17.7243 11.4051 17.8726 11.2569L17.4483 10.8326ZM15 10.2339L14.4172 10.3764C14.4704 10.5938 14.6401 10.7635 14.8575 10.8167L15 10.2339ZM16.6164 4.72198L13.9771 7.36134L14.8256 8.20986L17.4649 5.57051L16.6164 4.72198ZM13.3021 6.68637C14.2723 5.71612 15.6467 5.39501 16.8859 5.72593L17.1955 4.56656C15.5595 4.12966 13.7389 4.55245 12.4535 5.83784L13.3021 6.68637ZM12.401 10.4697C11.9779 9.18109 12.2794 7.70907 13.3021 6.68637L12.4535 5.83784C11.0986 7.19284 10.7021 9.14217 11.2608 10.844L12.401 10.4697ZM11.4066 10.2326L5.21498 16.4242L6.06351 17.2727L12.2552 11.0811L11.4066 10.2326ZM5.21498 16.4242C4.12834 17.5109 4.12834 19.2727 5.21498 20.3593L6.06351 19.5108C5.4455 18.8928 5.4455 17.8908 6.06351 17.2727L5.21498 16.4242ZM5.21498 20.3593C6.30163 21.446 8.06343 21.446 9.15007 20.3593L8.30155 19.5108C7.68353 20.1288 6.68153 20.1288 6.06351 19.5108L5.21498 20.3593ZM9.15007 20.3593L15.5426 13.9668L14.6941 13.1182L8.30155 19.5108L9.15007 20.3593ZM18.5475 11.9318C17.6463 12.8331 16.3968 13.1742 15.2301 12.953L15.0066 14.132C16.5466 14.4239 18.2023 13.9741 19.3961 12.7804L18.5475 11.9318ZM19.508 8.34804C19.8389 9.58721 19.5178 10.9616 18.5475 11.9318L19.3961 12.7804C20.6815 11.495 21.1043 9.67445 20.6674 8.03843L19.508 8.34804ZM17.8726 11.2569L20.5119 8.6175L19.6634 7.76898L17.024 10.4083L17.8726 11.2569ZM14.8575 10.8167L17.3058 11.4154L17.5908 10.2498L15.1426 9.65106L14.8575 10.8167ZM13.8185 7.92813L14.4172 10.3764L15.5829 10.0914L14.9841 7.64307L13.8185 7.92813Z",
              fill: "currentColor",
            }),
          });
        }),
      },
      gN = (0, a3.forwardRef)(function (a, b) {
        let { symbol: c, ...d } = a,
          e = gM[c];
        return e ? (0, a1.jsx)(e, { ...d, ref: b }) : null;
      });
    a.s(
      [
        "AccessDeniedIcon",
        () => c5,
        "AddCircleIcon",
        () => c7,
        "AddCommentIcon",
        () => c8,
        "AddDocumentIcon",
        () => c9,
        "AddIcon",
        () => da,
        "AddUserIcon",
        () => db,
        "ArchiveIcon",
        () => dd,
        "ArrowDownIcon",
        () => de,
        "ArrowLeftIcon",
        () => df,
        "ArrowRightIcon",
        () => dg,
        "ArrowUpIcon",
        () => di,
        "BinaryDocumentIcon",
        () => dp,
        "BlockContentIcon",
        () => dq,
        "BlockElementIcon",
        () => dr,
        "BoldIcon",
        () => dt,
        "BoltIcon",
        () => du,
        "BulbOutlineIcon",
        () => dB,
        "CalendarIcon",
        () => dC,
        "CheckmarkCircleIcon",
        () => dF,
        "CheckmarkIcon",
        () => dG,
        "ChevronDownIcon",
        () => dH,
        "ChevronLeftIcon",
        () => dI,
        "ChevronRightIcon",
        () => dJ,
        "ChevronUpIcon",
        () => dK,
        "CircleIcon",
        () => dL,
        "ClipboardIcon",
        () => dM,
        "ClockIcon",
        () => dO,
        "CloseCircleIcon",
        () => dP,
        "CloseIcon",
        () => dQ,
        "CodeIcon",
        () => dS,
        "CogIcon",
        () => dT,
        "CollapseIcon",
        () => dU,
        "CommentIcon",
        () => dW,
        "ComposeSparklesIcon",
        () => dZ,
        "ControlsIcon",
        () => d_,
        "CopyIcon",
        () => d0,
        "CropIcon",
        () => d2,
        "DesktopIcon",
        () => d6,
        "DocumentIcon",
        () => d8,
        "DocumentsIcon",
        () => ec,
        "DotIcon",
        () => eh,
        "DoubleChevronRightIcon",
        () => ek,
        "DownloadIcon",
        () => em,
        "DragHandleIcon",
        () => en,
        "EarthAmericasIcon",
        () => ep,
        "EarthGlobeIcon",
        () => eq,
        "EditIcon",
        () => er,
        "EllipsisHorizontalIcon",
        () => es,
        "ErrorOutlineIcon",
        () => eA,
        "ExpandIcon",
        () => eC,
        "EyeClosedIcon",
        () => eD,
        "EyeOpenIcon",
        () => eE,
        "GithubIcon",
        () => eM,
        "HelpCircleIcon",
        () => eR,
        "Icon",
        () => gN,
        "ImageIcon",
        () => eV,
        "InfoOutlineIcon",
        () => e$,
        "InlineElementIcon",
        () => e_,
        "InsertAboveIcon",
        () => e1,
        "InsertBelowIcon",
        () => e2,
        "ItalicIcon",
        () => e3,
        "LaunchIcon",
        () => e6,
        "LeaveIcon",
        () => e7,
        "LinkIcon",
        () => fa,
        "LinkRemovedIcon",
        () => fb,
        "LockIcon",
        () => fd,
        "MenuIcon",
        () => fj,
        "MoonIcon",
        () => fn,
        "NumberIcon",
        () => fo,
        "OlistIcon",
        () => fq,
        "PanelLeftIcon",
        () => ft,
        "PinFilledIcon",
        () => fw,
        "PinIcon",
        () => fx,
        "PublishIcon",
        () => fF,
        "ReadOnlyIcon",
        () => fG,
        "RefreshIcon",
        () => fI,
        "RemoveIcon",
        () => fK,
        "ResetIcon",
        () => fL,
        "RestoreIcon",
        () => fM,
        "RevertIcon",
        () => fP,
        "SearchIcon",
        () => fT,
        "SelectIcon",
        () => fU,
        "SortIcon",
        () => fW,
        "SpinnerIcon",
        () => fZ,
        "StackCompactIcon",
        () => f1,
        "StrikethroughIcon",
        () => f6,
        "StringIcon",
        () => f7,
        "SunIcon",
        () => f8,
        "SyncIcon",
        () => f9,
        "TaskIcon",
        () => ge,
        "ThLargeIcon",
        () => gh,
        "TimelineIcon",
        () => gm,
        "ToggleArrowRightIcon",
        () => gn,
        "TrashIcon",
        () => gr,
        "UlistIcon",
        () => gx,
        "UnarchiveIcon",
        () => gy,
        "UnderlineIcon",
        () => gz,
        "UndoIcon",
        () => gA,
        "UnknownIcon",
        () => gB,
        "UnlinkIcon",
        () => gC,
        "UnlockIcon",
        () => gD,
        "UnpublishIcon",
        () => gE,
        "UploadIcon",
        () => gF,
        "UserIcon",
        () => gG,
        "UsersIcon",
        () => gH,
        "WarningOutlineIcon",
        () => gL,
      ],
      392139,
    );
    var gO = a.i(372352),
      gP = a.i(740020);
    let gQ = [
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
      gR = new Set(gQ),
      gS = (a, b, c) => (c > b ? b : c < a ? a : c),
      gT = { test: (a) => "number" == typeof a, parse: parseFloat, transform: (a) => a },
      gU = { ...gT, transform: (a) => gS(0, 1, a) },
      gV = { ...gT, default: 1 },
      gW = (a) => Math.round(1e5 * a) / 1e5,
      gX = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
      gY =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
      gZ = (a, b) => (c) =>
        !!(
          ("string" == typeof c && gY.test(c) && c.startsWith(a)) ||
          (b && null != c && Object.prototype.hasOwnProperty.call(c, b))
        ),
      g$ = (a, b, c) => (d) => {
        if ("string" != typeof d) return d;
        let [e, f, g, h] = d.match(gX);
        return { [a]: parseFloat(e), [b]: parseFloat(f), [c]: parseFloat(g), alpha: void 0 !== h ? parseFloat(h) : 1 };
      },
      g_ = { ...gT, transform: (a) => Math.round(gS(0, 255, a)) },
      g0 = {
        test: gZ("rgb", "red"),
        parse: g$("red", "green", "blue"),
        transform: ({ red: a, green: b, blue: c, alpha: d = 1 }) =>
          "rgba(" +
          g_.transform(a) +
          ", " +
          g_.transform(b) +
          ", " +
          g_.transform(c) +
          ", " +
          gW(gU.transform(d)) +
          ")",
      },
      g1 = {
        test: gZ("#"),
        parse: function (a) {
          let b = "",
            c = "",
            d = "",
            e = "";
          return (
            a.length > 5
              ? ((b = a.substring(1, 3)), (c = a.substring(3, 5)), (d = a.substring(5, 7)), (e = a.substring(7, 9)))
              : ((b = a.substring(1, 2)),
                (c = a.substring(2, 3)),
                (d = a.substring(3, 4)),
                (e = a.substring(4, 5)),
                (b += b),
                (c += c),
                (d += d),
                (e += e)),
            {
              red: parseInt(b, 16),
              green: parseInt(c, 16),
              blue: parseInt(d, 16),
              alpha: e ? parseInt(e, 16) / 255 : 1,
            }
          );
        },
        transform: g0.transform,
      },
      g2 = (a) => ({
        test: (b) => "string" == typeof b && b.endsWith(a) && 1 === b.split(" ").length,
        parse: parseFloat,
        transform: (b) => `${b}${a}`,
      }),
      g3 = g2("deg"),
      g4 = g2("%"),
      g5 = g2("px"),
      g6 = g2("vh"),
      g7 = g2("vw"),
      g8 = { ...g4, parse: (a) => g4.parse(a) / 100, transform: (a) => g4.transform(100 * a) },
      g9 = {
        test: gZ("hsl", "hue"),
        parse: g$("hue", "saturation", "lightness"),
        transform: ({ hue: a, saturation: b, lightness: c, alpha: d = 1 }) =>
          "hsla(" +
          Math.round(a) +
          ", " +
          g4.transform(gW(b)) +
          ", " +
          g4.transform(gW(c)) +
          ", " +
          gW(gU.transform(d)) +
          ")",
      },
      ha = {
        test: (a) => g0.test(a) || g1.test(a) || g9.test(a),
        parse: (a) => (g0.test(a) ? g0.parse(a) : g9.test(a) ? g9.parse(a) : g1.parse(a)),
        transform: (a) => ("string" == typeof a ? a : a.hasOwnProperty("red") ? g0.transform(a) : g9.transform(a)),
        getAnimatableNone: (a) => {
          let b = ha.parse(a);
          return ((b.alpha = 0), ha.transform(b));
        },
      },
      hb =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
      hc = "number",
      hd = "color",
      he =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function hf(a) {
      let b = a.toString(),
        c = [],
        d = { color: [], number: [], var: [] },
        e = [],
        f = 0,
        g = b
          .replace(
            he,
            (a) => (
              ha.test(a)
                ? (d.color.push(f), e.push(hd), c.push(ha.parse(a)))
                : a.startsWith("var(")
                  ? (d.var.push(f), e.push("var"), c.push(a))
                  : (d.number.push(f), e.push(hc), c.push(parseFloat(a))),
              ++f,
              "${}"
            ),
          )
          .split("${}");
      return { values: c, split: g, indexes: d, types: e };
    }
    function hg(a) {
      return hf(a).values;
    }
    function hh(a) {
      let { split: b, types: c } = hf(a),
        d = b.length;
      return (a) => {
        let e = "";
        for (let f = 0; f < d; f++)
          if (((e += b[f]), void 0 !== a[f])) {
            let b = c[f];
            b === hc ? (e += gW(a[f])) : b === hd ? (e += ha.transform(a[f])) : (e += a[f]);
          }
        return e;
      };
    }
    let hi = (a) => ("number" == typeof a ? 0 : ha.test(a) ? ha.getAnimatableNone(a) : a),
      hj = {
        test: function (a) {
          return isNaN(a) && "string" == typeof a && (a.match(gX)?.length || 0) + (a.match(hb)?.length || 0) > 0;
        },
        parse: hg,
        createTransformer: hh,
        getAnimatableNone: function (a) {
          let b = hg(a);
          return hh(a)(b.map(hi));
        },
      },
      hk = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function hl(a) {
      let [b, c] = a.slice(0, -1).split("(");
      if ("drop-shadow" === b) return a;
      let [d] = c.match(gX) || [];
      if (!d) return a;
      let e = c.replace(d, ""),
        f = +!!hk.has(b);
      return (d !== c && (f *= 100), b + "(" + f + e + ")");
    }
    let hm = /\b([a-z-]*)\(.*?\)/gu,
      hn = {
        ...hj,
        getAnimatableNone: (a) => {
          let b = a.match(hm);
          return b ? b.map(hl).join(" ") : a;
        },
      },
      ho = { ...gT, transform: Math.round },
      hp = {
        borderWidth: g5,
        borderTopWidth: g5,
        borderRightWidth: g5,
        borderBottomWidth: g5,
        borderLeftWidth: g5,
        borderRadius: g5,
        borderTopLeftRadius: g5,
        borderTopRightRadius: g5,
        borderBottomRightRadius: g5,
        borderBottomLeftRadius: g5,
        width: g5,
        maxWidth: g5,
        height: g5,
        maxHeight: g5,
        top: g5,
        right: g5,
        bottom: g5,
        left: g5,
        inset: g5,
        insetBlock: g5,
        insetBlockStart: g5,
        insetBlockEnd: g5,
        insetInline: g5,
        insetInlineStart: g5,
        insetInlineEnd: g5,
        padding: g5,
        paddingTop: g5,
        paddingRight: g5,
        paddingBottom: g5,
        paddingLeft: g5,
        paddingBlock: g5,
        paddingBlockStart: g5,
        paddingBlockEnd: g5,
        paddingInline: g5,
        paddingInlineStart: g5,
        paddingInlineEnd: g5,
        margin: g5,
        marginTop: g5,
        marginRight: g5,
        marginBottom: g5,
        marginLeft: g5,
        marginBlock: g5,
        marginBlockStart: g5,
        marginBlockEnd: g5,
        marginInline: g5,
        marginInlineStart: g5,
        marginInlineEnd: g5,
        fontSize: g5,
        backgroundPositionX: g5,
        backgroundPositionY: g5,
        rotate: g3,
        rotateX: g3,
        rotateY: g3,
        rotateZ: g3,
        scale: gV,
        scaleX: gV,
        scaleY: gV,
        scaleZ: gV,
        skew: g3,
        skewX: g3,
        skewY: g3,
        distance: g5,
        translateX: g5,
        translateY: g5,
        translateZ: g5,
        x: g5,
        y: g5,
        z: g5,
        perspective: g5,
        transformPerspective: g5,
        opacity: gU,
        originX: g8,
        originY: g8,
        originZ: g5,
        zIndex: ho,
        fillOpacity: gU,
        strokeOpacity: gU,
        numOctaves: ho,
      },
      hq = {
        ...hp,
        color: ha,
        backgroundColor: ha,
        outlineColor: ha,
        fill: ha,
        stroke: ha,
        borderColor: ha,
        borderTopColor: ha,
        borderRightColor: ha,
        borderBottomColor: ha,
        borderLeftColor: ha,
        filter: hn,
        WebkitFilter: hn,
      },
      hr = (a) => hq[a],
      hs = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
      ht = () => ({ x: hs(), y: hs() }),
      hu = () => ({ min: 0, max: 0 }),
      hv = () => ({ x: hu(), y: hu() }),
      hw = (a) => !!(a && a.getVelocity),
      hx = new Set(["width", "height", "top", "left", "right", "bottom", ...gQ]),
      hy = (a) => (b) => b.test(a),
      hz = [gT, g5, g4, g3, g7, g6, { test: (a) => "auto" === a, parse: (a) => a }],
      hA = (a) => hz.find(hy(a)),
      hB = () => {},
      hC = () => {},
      hD = (a) => (b) => "string" == typeof b && b.startsWith(a),
      hE = hD("--"),
      hF = hD("var(--"),
      hG = (a) => !!hF(a) && hH.test(a.split("/*")[0].trim()),
      hH = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function hI(a) {
      return "string" == typeof a && a.split("/*")[0].includes("var(--");
    }
    let hJ = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
      hK = (a) => (180 * a) / Math.PI,
      hL = (a) => hN(hK(Math.atan2(a[1], a[0]))),
      hM = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
        rotate: hL,
        rotateZ: hL,
        skewX: (a) => hK(Math.atan(a[1])),
        skewY: (a) => hK(Math.atan(a[2])),
        skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
      },
      hN = (a) => ((a %= 360) < 0 && (a += 360), a),
      hO = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
      hP = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
      hQ = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: hO,
        scaleY: hP,
        scale: (a) => (hO(a) + hP(a)) / 2,
        rotateX: (a) => hN(hK(Math.atan2(a[6], a[5]))),
        rotateY: (a) => hN(hK(Math.atan2(-a[2], a[0]))),
        rotateZ: hL,
        rotate: hL,
        skewX: (a) => hK(Math.atan(a[4])),
        skewY: (a) => hK(Math.atan(a[1])),
        skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
      };
    function hR(a) {
      return +!!a.includes("scale");
    }
    function hS(a, b) {
      let c, d;
      if (!a || "none" === a) return hR(b);
      let e = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
      if (e) ((c = hQ), (d = e));
      else {
        let b = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        ((c = hM), (d = b));
      }
      if (!d) return hR(b);
      let f = c[b],
        g = d[1].split(",").map(hT);
      return "function" == typeof f ? f(g) : g[f];
    }
    function hT(a) {
      return parseFloat(a.trim());
    }
    let hU = (a) => a === gT || a === g5,
      hV = new Set(["x", "y", "z"]),
      hW = gQ.filter((a) => !hV.has(a)),
      hX = {
        width: ({ x: a }, { paddingLeft: b = "0", paddingRight: c = "0" }) =>
          a.max - a.min - parseFloat(b) - parseFloat(c),
        height: ({ y: a }, { paddingTop: b = "0", paddingBottom: c = "0" }) =>
          a.max - a.min - parseFloat(b) - parseFloat(c),
        top: (a, { top: b }) => parseFloat(b),
        left: (a, { left: b }) => parseFloat(b),
        bottom: ({ y: a }, { top: b }) => parseFloat(b) + (a.max - a.min),
        right: ({ x: a }, { left: b }) => parseFloat(b) + (a.max - a.min),
        x: (a, { transform: b }) => hS(b, "x"),
        y: (a, { transform: b }) => hS(b, "y"),
      };
    ((hX.translateX = hX.x), (hX.translateY = hX.y));
    let hY = (a) => a,
      hZ = {},
      h$ = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
    function h_(a, b) {
      let c = !1,
        d = !0,
        e = { delta: 0, timestamp: 0, isProcessing: !1 },
        f = () => (c = !0),
        g = h$.reduce(
          (a, c) => (
            (a[c] = (function (a, b) {
              let c = new Set(),
                d = new Set(),
                e = !1,
                f = !1,
                g = new WeakSet(),
                h = { delta: 0, timestamp: 0, isProcessing: !1 },
                i = 0;
              function j(b) {
                (g.has(b) && (k.schedule(b), a()), i++, b(h));
              }
              let k = {
                schedule: (a, b = !1, f = !1) => {
                  let h = f && e ? c : d;
                  return (b && g.add(a), h.has(a) || h.add(a), a);
                },
                cancel: (a) => {
                  (d.delete(a), g.delete(a));
                },
                process: (a) => {
                  if (((h = a), e)) {
                    f = !0;
                    return;
                  }
                  ((e = !0),
                    ([c, d] = [d, c]),
                    c.forEach(j),
                    b,
                    (i = 0),
                    c.clear(),
                    (e = !1),
                    f && ((f = !1), k.process(a)));
                },
              };
              return k;
            })(f, b ? c : void 0)),
            a
          ),
          {},
        ),
        { setup: h, read: i, resolveKeyframes: j, preUpdate: k, update: l, preRender: m, render: n, postRender: o } = g,
        p = () => {
          let f = hZ.useManualTiming ? e.timestamp : performance.now();
          ((c = !1),
            hZ.useManualTiming || (e.delta = d ? 1e3 / 60 : Math.max(Math.min(f - e.timestamp, 40), 1)),
            (e.timestamp = f),
            (e.isProcessing = !0),
            h.process(e),
            i.process(e),
            j.process(e),
            k.process(e),
            l.process(e),
            m.process(e),
            n.process(e),
            o.process(e),
            (e.isProcessing = !1),
            c && b && ((d = !1), a(p)));
        };
      return {
        schedule: h$.reduce((b, f) => {
          let h = g[f];
          return (
            (b[f] = (b, f = !1, g = !1) => (!c && ((c = !0), (d = !0), e.isProcessing || a(p)), h.schedule(b, f, g))),
            b
          );
        }, {}),
        cancel: (a) => {
          for (let b = 0; b < h$.length; b++) g[h$[b]].cancel(a);
        },
        state: e,
        steps: g,
      };
    }
    let {
        schedule: h0,
        cancel: h1,
        state: h2,
        steps: h3,
      } = h_("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : hY, !0),
      h4 = new Set(),
      h5 = !1,
      h6 = !1,
      h7 = !1;
    function h8() {
      if (h6) {
        let a = Array.from(h4).filter((a) => a.needsMeasurement),
          b = new Set(a.map((a) => a.element)),
          c = new Map();
        (b.forEach((a) => {
          let b,
            d =
              ((b = []),
              hW.forEach((c) => {
                let d = a.getValue(c);
                void 0 !== d && (b.push([c, d.get()]), d.set(+!!c.startsWith("scale")));
              }),
              b);
          d.length && (c.set(a, d), a.render());
        }),
          a.forEach((a) => a.measureInitialState()),
          b.forEach((a) => {
            a.render();
            let b = c.get(a);
            b &&
              b.forEach(([b, c]) => {
                a.getValue(b)?.set(c);
              });
          }),
          a.forEach((a) => a.measureEndState()),
          a.forEach((a) => {
            void 0 !== a.suspendedScrollY && window.scrollTo(0, a.suspendedScrollY);
          }));
      }
      ((h6 = !1), (h5 = !1), h4.forEach((a) => a.complete(h7)), h4.clear());
    }
    function h9() {
      h4.forEach((a) => {
        (a.readKeyframes(), a.needsMeasurement && (h6 = !0));
      });
    }
    class ia {
      constructor(a, b, c, d, e, f = !1) {
        ((this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...a]),
          (this.onComplete = b),
          (this.name = c),
          (this.motionValue = d),
          (this.element = e),
          (this.isAsync = f));
      }
      scheduleResolve() {
        ((this.state = "scheduled"),
          this.isAsync
            ? (h4.add(this), h5 || ((h5 = !0), h0.read(h9), h0.resolveKeyframes(h8)))
            : (this.readKeyframes(), this.complete()));
      }
      readKeyframes() {
        let { unresolvedKeyframes: a, name: b, element: c, motionValue: d } = this;
        if (null === a[0]) {
          let e = d?.get(),
            f = a[a.length - 1];
          if (void 0 !== e) a[0] = e;
          else if (c && b) {
            let d = c.readValue(b, f);
            null != d && (a[0] = d);
          }
          (void 0 === a[0] && (a[0] = f), d && void 0 === e && d.set(a[0]));
        }
        for (let b = 1; b < a.length; b++) a[b] ?? (a[b] = a[b - 1]);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete(a = !1) {
        ((this.state = "complete"), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a), h4.delete(this));
      }
      cancel() {
        "scheduled" === this.state && (h4.delete(this), (this.state = "pending"));
      }
      resume() {
        "pending" === this.state && this.scheduleResolve();
      }
    }
    function ib(a, b) {
      let c = hr(a);
      return (c !== hn && (c = hj), c.getAnimatableNone ? c.getAnimatableNone(b) : void 0);
    }
    let ic = new Set(["auto", "none", "0"]);
    class id extends ia {
      constructor(a, b, c, d, e) {
        super(a, b, c, d, e, !0);
      }
      readKeyframes() {
        let { unresolvedKeyframes: a, element: b, name: c } = this;
        if (!b || !b.current) return;
        super.readKeyframes();
        for (let c = 0; c < a.length; c++) {
          let d = a[c];
          if ("string" == typeof d && hG((d = d.trim()))) {
            let e = (function a(b, c, d = 1) {
              hC(
                d <= 4,
                `Max CSS variable fallback depth detected in property "${b}". This may indicate a circular fallback dependency.`,
                "max-css-var-depth",
              );
              let [e, f] = (function (a) {
                let b = hJ.exec(a);
                if (!b) return [,];
                let [, c, d, e] = b;
                return [`--${c ?? d}`, e];
              })(b);
              if (!e) return;
              let g = window.getComputedStyle(c).getPropertyValue(e);
              if (g) {
                let a = g.trim();
                return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a) ? parseFloat(a) : a;
              }
              return hG(f) ? a(f, c, d + 1) : f;
            })(d, b.current);
            (void 0 !== e && (a[c] = e), c === a.length - 1 && (this.finalKeyframe = d));
          }
        }
        if ((this.resolveNoneKeyframes(), !hx.has(c) || 2 !== a.length)) return;
        let [d, e] = a,
          f = hA(d),
          g = hA(e);
        if (hI(d) !== hI(e) && hX[c]) {
          this.needsMeasurement = !0;
          return;
        }
        if (f !== g)
          if (hU(f) && hU(g))
            for (let b = 0; b < a.length; b++) {
              let c = a[b];
              "string" == typeof c && (a[b] = parseFloat(c));
            }
          else hX[c] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        let { unresolvedKeyframes: a, name: b } = this,
          c = [];
        for (let b = 0; b < a.length; b++)
          (null === a[b] ||
            (function (a) {
              if ("number" == typeof a) return 0 === a;
              if (null === a) return !0;
              return "none" === a || "0" === a || /^0[^.\s]+$/u.test(a);
            })(a[b])) &&
            c.push(b);
        c.length &&
          (function (a, b, c) {
            let d,
              e = 0;
            for (; e < a.length && !d; ) {
              let b = a[e];
              ("string" == typeof b && !ic.has(b) && hf(b).values.length && (d = a[e]), e++);
            }
            if (d && c) for (let e of b) a[e] = ib(c, d);
          })(a, c, b);
      }
      measureInitialState() {
        let { element: a, unresolvedKeyframes: b, name: c } = this;
        if (!a || !a.current) return;
        ("height" === c && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = hX[c](a.measureViewportBox(), window.getComputedStyle(a.current))),
          (b[0] = this.measuredOrigin));
        let d = b[b.length - 1];
        void 0 !== d && a.getValue(c, d).jump(d, !1);
      }
      measureEndState() {
        let { element: a, name: b, unresolvedKeyframes: c } = this;
        if (!a || !a.current) return;
        let d = a.getValue(b);
        d && d.jump(this.measuredOrigin, !1);
        let e = c.length - 1,
          f = c[e];
        ((c[e] = hX[b](a.measureViewportBox(), window.getComputedStyle(a.current))),
          null !== f && void 0 === this.finalKeyframe && (this.finalKeyframe = f),
          this.removedTransforms?.length &&
            this.removedTransforms.forEach(([b, c]) => {
              a.getValue(b).set(c);
            }),
          this.resolveNoneKeyframes());
      }
    }
    function ie(a, b) {
      -1 === a.indexOf(b) && a.push(b);
    }
    function ig(a, b) {
      let c = a.indexOf(b);
      c > -1 && a.splice(c, 1);
    }
    class ih {
      constructor() {
        this.subscriptions = [];
      }
      add(a) {
        return (ie(this.subscriptions, a), () => ig(this.subscriptions, a));
      }
      notify(a, b, c) {
        let d = this.subscriptions.length;
        if (d)
          if (1 === d) this.subscriptions[0](a, b, c);
          else
            for (let e = 0; e < d; e++) {
              let d = this.subscriptions[e];
              d && d(a, b, c);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    let { schedule: ii } = h_(queueMicrotask, !1);
    function ij() {
      e = void 0;
    }
    let ik = {
      now: () => (void 0 === e && ik.set(h2.isProcessing || hZ.useManualTiming ? h2.timestamp : performance.now()), e),
      set: (a) => {
        ((e = a), queueMicrotask(ij));
      },
    };
    class il {
      constructor(a, b = {}) {
        ((this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (a) => {
            let b = ik.now();
            if (
              (this.updatedAt !== b && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(a),
              this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
            )
              for (let a of this.dependents) a.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(a),
          (this.owner = b.owner));
      }
      setCurrent(a) {
        ((this.current = a),
          (this.updatedAt = ik.now()),
          null === this.canTrackVelocity && void 0 !== a && (this.canTrackVelocity = !isNaN(parseFloat(this.current))));
      }
      setPrevFrameValue(a = this.current) {
        ((this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt));
      }
      onChange(a) {
        return this.on("change", a);
      }
      on(a, b) {
        this.events[a] || (this.events[a] = new ih());
        let c = this.events[a].add(b);
        return "change" === a
          ? () => {
              (c(),
                h0.read(() => {
                  this.events.change.getSize() || this.stop();
                }));
            }
          : c;
      }
      clearListeners() {
        for (let a in this.events) this.events[a].clear();
      }
      attach(a, b) {
        ((this.passiveEffect = a), (this.stopPassiveEffect = b));
      }
      set(a) {
        this.passiveEffect ? this.passiveEffect(a, this.updateAndNotify) : this.updateAndNotify(a);
      }
      setWithVelocity(a, b, c) {
        (this.set(b), (this.prev = void 0), (this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt - c));
      }
      jump(a, b = !0) {
        (this.updateAndNotify(a),
          (this.prev = a),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          b && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
      dirty() {
        this.events.change?.notify(this.current);
      }
      addDependent(a) {
        (this.dependents || (this.dependents = new Set()), this.dependents.add(a));
      }
      removeDependent(a) {
        this.dependents && this.dependents.delete(a);
      }
      get() {
        return (b && b.push(this), this.current);
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        var a;
        let b = ik.now();
        if (!this.canTrackVelocity || void 0 === this.prevFrameValue || b - this.updatedAt > 30) return 0;
        let c = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return ((a = parseFloat(this.current) - parseFloat(this.prevFrameValue)), c ? (1e3 / c) * a : 0);
      }
      start(a) {
        return (
          this.stop(),
          new Promise((b) => {
            ((this.hasAnimated = !0),
              (this.animation = a(b)),
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
    function im(a, b) {
      return new il(a, b);
    }
    let io = [...hz, ha, hj],
      ip = { current: !1 },
      iq = new WeakMap();
    function ir(a) {
      return null !== a && "object" == typeof a && "function" == typeof a.start;
    }
    function is(a) {
      return "string" == typeof a || Array.isArray(a);
    }
    let it = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
      iu = ["initial", ...it];
    function iv(a) {
      return ir(a.animate) || iu.some((b) => is(a[b]));
    }
    function iw(a) {
      return !!(iv(a) || a.variants);
    }
    function ix(a) {
      let b = [{}, {}];
      return (
        a?.values.forEach((a, c) => {
          ((b[0][c] = a.get()), (b[1][c] = a.getVelocity()));
        }),
        b
      );
    }
    function iy(a, b, c, d) {
      if ("function" == typeof b) {
        let [e, f] = ix(d);
        b = b(void 0 !== c ? c : a.custom, e, f);
      }
      if (("string" == typeof b && (b = a.variants && a.variants[b]), "function" == typeof b)) {
        let [e, f] = ix(d);
        b = b(void 0 !== c ? c : a.custom, e, f);
      }
      return b;
    }
    let iz = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ],
      iA = {};
    class iB {
      scrapeMotionValuesFromProps(a, b, c) {
        return {};
      }
      constructor(
        {
          parent: a,
          props: b,
          presenceContext: c,
          reducedMotionConfig: d,
          skipAnimations: e,
          blockInitialAnimation: f,
          visualState: g,
        },
        h = {},
      ) {
        ((this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.shouldSkipAnimations = !1),
          (this.values = new Map()),
          (this.KeyframeResolver = ia),
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
            let a = ik.now();
            this.renderScheduledAt < a && ((this.renderScheduledAt = a), h0.render(this.render, !1, !0));
          }));
        const { latestValues: i, renderState: j } = g;
        ((this.latestValues = i),
          (this.baseTarget = { ...i }),
          (this.initialValues = b.initial ? { ...i } : {}),
          (this.renderState = j),
          (this.parent = a),
          (this.props = b),
          (this.presenceContext = c),
          (this.depth = a ? a.depth + 1 : 0),
          (this.reducedMotionConfig = d),
          (this.skipAnimationsConfig = e),
          (this.options = h),
          (this.blockInitialAnimation = !!f),
          (this.isControllingVariants = iv(b)),
          (this.isVariantNode = iw(b)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = !!(a && a.current)));
        const { willChange: k, ...l } = this.scrapeMotionValuesFromProps(b, {}, this);
        for (const a in l) {
          const b = l[a];
          void 0 !== i[a] && hw(b) && b.set(i[a]);
        }
      }
      mount(a) {
        ((this.current = a),
          iq.set(a, this),
          this.projection && !this.projection.instance && this.projection.mount(a),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((a, b) => this.bindToMotionValue(b, a)),
          "never" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !1)
            : "always" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !0)
              : (ip.current || (ip.current = !0), (this.shouldReduceMotion = null)),
          (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
          this.parent?.addChild(this),
          this.update(this.props, this.presenceContext));
      }
      unmount() {
        for (let a in (this.projection && this.projection.unmount(),
        h1(this.notifyUpdate),
        h1(this.render),
        this.valueSubscriptions.forEach((a) => a()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this),
        this.events))
          this.events[a].clear();
        for (let a in this.features) {
          let b = this.features[a];
          b && (b.unmount(), (b.isMounted = !1));
        }
        this.current = null;
      }
      addChild(a) {
        (this.children.add(a),
          this.enteringChildren ?? (this.enteringChildren = new Set()),
          this.enteringChildren.add(a));
      }
      removeChild(a) {
        (this.children.delete(a), this.enteringChildren && this.enteringChildren.delete(a));
      }
      bindToMotionValue(a, b) {
        let c;
        this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
        let d = gR.has(a);
        d && this.onBindTransform && this.onBindTransform();
        let e = b.on("change", (b) => {
          ((this.latestValues[a] = b),
            this.props.onUpdate && h0.preRender(this.notifyUpdate),
            d && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        });
        this.valueSubscriptions.set(a, () => {
          (e(), c && c(), b.owner && b.stop());
        });
      }
      sortNodePosition(a) {
        return this.current && this.sortInstanceNodePosition && this.type === a.type
          ? this.sortInstanceNodePosition(this.current, a.current)
          : 0;
      }
      updateFeatures() {
        let a = "animation";
        for (a in iA) {
          let b = iA[a];
          if (!b) continue;
          let { isEnabled: c, Feature: d } = b;
          if ((!this.features[a] && d && c(this.props) && (this.features[a] = new d(this)), this.features[a])) {
            let b = this.features[a];
            b.isMounted ? b.update() : (b.mount(), (b.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : hv();
      }
      getStaticValue(a) {
        return this.latestValues[a];
      }
      setStaticValue(a, b) {
        this.latestValues[a] = b;
      }
      update(a, b) {
        ((a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = a),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = b));
        for (let b = 0; b < iz.length; b++) {
          let c = iz[b];
          this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
          let d = a["on" + c];
          d && (this.propEventSubscriptions[c] = this.on(c, d));
        }
        ((this.prevMotionValues = (function (a, b, c) {
          for (let d in b) {
            let e = b[d],
              f = c[d];
            if (hw(e)) a.addValue(d, e);
            else if (hw(f)) a.addValue(d, im(e, { owner: a }));
            else if (f !== e)
              if (a.hasValue(d)) {
                let b = a.getValue(d);
                !0 === b.liveStyle ? b.jump(e) : b.hasAnimated || b.set(e);
              } else {
                let b = a.getStaticValue(d);
                a.addValue(d, im(void 0 !== b ? b : e, { owner: a }));
              }
          }
          for (let d in c) void 0 === b[d] && a.removeValue(d);
          return b;
        })(this, this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this), this.prevMotionValues)),
          this.handleChildMotionValue && this.handleChildMotionValue());
      }
      getProps() {
        return this.props;
      }
      getVariant(a) {
        return this.props.variants ? this.props.variants[a] : void 0;
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
      addVariantChild(a) {
        let b = this.getClosestVariantNode();
        if (b) return (b.variantChildren && b.variantChildren.add(a), () => b.variantChildren.delete(a));
      }
      addValue(a, b) {
        let c = this.values.get(a);
        b !== c &&
          (c && this.removeValue(a),
          this.bindToMotionValue(a, b),
          this.values.set(a, b),
          (this.latestValues[a] = b.get()));
      }
      removeValue(a) {
        this.values.delete(a);
        let b = this.valueSubscriptions.get(a);
        (b && (b(), this.valueSubscriptions.delete(a)),
          delete this.latestValues[a],
          this.removeValueFromRenderState(a, this.renderState));
      }
      hasValue(a) {
        return this.values.has(a);
      }
      getValue(a, b) {
        if (this.props.values && this.props.values[a]) return this.props.values[a];
        let c = this.values.get(a);
        return (
          void 0 === c && void 0 !== b && ((c = im(null === b ? void 0 : b, { owner: this })), this.addValue(a, c)),
          c
        );
      }
      readValue(a, b) {
        let c =
          void 0 === this.latestValues[a] && this.current
            ? (this.getBaseTargetFromProps(this.props, a) ?? this.readValueFromInstance(this.current, a, this.options))
            : this.latestValues[a];
        if (null != c) {
          let d, e;
          if (
            "string" == typeof c &&
            ((d = c), /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(d) || ((e = c), /^0[^.\s]+$/u.test(e)))
          )
            c = parseFloat(c);
          else {
            let d;
            ((d = c), !io.find(hy(d)) && hj.test(b) && (c = ib(a, b)));
          }
          this.setBaseTarget(a, hw(c) ? c.get() : c);
        }
        return hw(c) ? c.get() : c;
      }
      setBaseTarget(a, b) {
        this.baseTarget[a] = b;
      }
      getBaseTarget(a) {
        let b,
          { initial: c } = this.props;
        if ("string" == typeof c || "object" == typeof c) {
          let d = iy(this.props, c, this.presenceContext?.custom);
          d && (b = d[a]);
        }
        if (c && void 0 !== b) return b;
        let d = this.getBaseTargetFromProps(this.props, a);
        return void 0 === d || hw(d)
          ? void 0 !== this.initialValues[a] && void 0 === b
            ? void 0
            : this.baseTarget[a]
          : d;
      }
      on(a, b) {
        return (this.events[a] || (this.events[a] = new ih()), this.events[a].add(b));
      }
      notify(a, ...b) {
        this.events[a] && this.events[a].notify(...b);
      }
      scheduleRenderMicrotask() {
        ii.render(this.render);
      }
    }
    class iC extends iB {
      constructor() {
        (super(...arguments), (this.KeyframeResolver = id));
      }
      sortInstanceNodePosition(a, b) {
        return 2 & a.compareDocumentPosition(b) ? 1 : -1;
      }
      getBaseTargetFromProps(a, b) {
        let c = a.style;
        return c ? c[b] : void 0;
      }
      removeValueFromRenderState(a, { vars: b, style: c }) {
        (delete b[a], delete c[a]);
      }
      handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        let { children: a } = this.props;
        hw(a) &&
          (this.childSubscription = a.on("change", (a) => {
            this.current && (this.current.textContent = `${a}`);
          }));
      }
    }
    function iD(a) {
      return a.replace(/([A-Z])/g, (a) => `-${a.toLowerCase()}`);
    }
    let iE = (a, b) => (b && "number" == typeof a ? b.transform(a) : a),
      iF = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
      iG = gQ.length;
    function iH(a, b, c) {
      let { style: d, vars: e, transformOrigin: f } = a,
        g = !1,
        h = !1;
      for (let a in b) {
        let c = b[a];
        if (gR.has(a)) {
          g = !0;
          continue;
        }
        if (hE(a)) {
          e[a] = c;
          continue;
        }
        {
          let b = iE(c, hp[a]);
          a.startsWith("origin") ? ((h = !0), (f[a] = b)) : (d[a] = b);
        }
      }
      if (
        (!b.transform &&
          (g || c
            ? (d.transform = (function (a, b, c) {
                let d = "",
                  e = !0;
                for (let f = 0; f < iG; f++) {
                  let g = gQ[f],
                    h = a[g];
                  if (void 0 === h) continue;
                  let i = !0;
                  if ("number" == typeof h) i = h === +!!g.startsWith("scale");
                  else {
                    let a = parseFloat(h);
                    i = g.startsWith("scale") ? 1 === a : 0 === a;
                  }
                  if (!i || c) {
                    let a = iE(h, hp[g]);
                    if (!i) {
                      e = !1;
                      let b = iF[g] || g;
                      d += `${b}(${a}) `;
                    }
                    c && (b[g] = a);
                  }
                }
                return ((d = d.trim()), c ? (d = c(b, e ? "" : d)) : e && (d = "none"), d);
              })(b, a.transform, c))
            : d.transform && (d.transform = "none")),
        h)
      ) {
        let { originX: a = "50%", originY: b = "50%", originZ: c = 0 } = f;
        d.transformOrigin = `${a} ${b} ${c}`;
      }
    }
    let iI = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      iJ = { offset: "strokeDashoffset", array: "strokeDasharray" },
      iK = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
    function iL(
      a,
      { attrX: b, attrY: c, attrScale: d, pathLength: e, pathSpacing: f = 1, pathOffset: g = 0, ...h },
      i,
      j,
      k,
    ) {
      if ((iH(a, h, j), i)) {
        a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
        return;
      }
      ((a.attrs = a.style), (a.style = {}));
      let { attrs: l, style: m } = a;
      for (let a of (l.transform && ((m.transform = l.transform), delete l.transform),
      (m.transform || l.transformOrigin) &&
        ((m.transformOrigin = l.transformOrigin ?? "50% 50%"), delete l.transformOrigin),
      m.transform && ((m.transformBox = k?.transformBox ?? "fill-box"), delete l.transformBox),
      iK))
        void 0 !== l[a] && ((m[a] = l[a]), delete l[a]);
      (void 0 !== b && (l.x = b),
        void 0 !== c && (l.y = c),
        void 0 !== d && (l.scale = d),
        void 0 !== e &&
          (function (a, b, c = 1, d = 0, e = !0) {
            a.pathLength = 1;
            let f = e ? iI : iJ;
            ((a[f.offset] = `${-d}`), (a[f.array] = `${b} ${c}`));
          })(l, e, f, g, !1));
    }
    let iM = new Set([
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
      iN = (a) => "string" == typeof a && "svg" === a.toLowerCase();
    function iO(a, { style: b, vars: c }, d, e) {
      let f,
        g = a.style;
      for (f in b) g[f] = b[f];
      for (f in (e?.applyProjectionStyles(g, d), c)) g.setProperty(f, c[f]);
    }
    function iP(a, b) {
      return b.max === b.min ? 0 : (a / (b.max - b.min)) * 100;
    }
    let iQ = {
        correct: (a, b) => {
          if (!b.target) return a;
          if ("string" == typeof a)
            if (!g5.test(a)) return a;
            else a = parseFloat(a);
          let c = iP(a, b.target.x),
            d = iP(a, b.target.y);
          return `${c}% ${d}%`;
        },
      },
      iR = (a, b, c) => a + (b - a) * c,
      iS = {
        borderRadius: {
          ...iQ,
          applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
        },
        borderTopLeftRadius: iQ,
        borderTopRightRadius: iQ,
        borderBottomLeftRadius: iQ,
        borderBottomRightRadius: iQ,
        boxShadow: {
          correct: (a, { treeScale: b, projectionDelta: c }) => {
            let d = hj.parse(a);
            if (d.length > 5) return a;
            let e = hj.createTransformer(a),
              f = +("number" != typeof d[0]),
              g = c.x.scale * b.x,
              h = c.y.scale * b.y;
            ((d[0 + f] /= g), (d[1 + f] /= h));
            let i = iR(g, h, 0.5);
            return (
              "number" == typeof d[2 + f] && (d[2 + f] /= i),
              "number" == typeof d[3 + f] && (d[3 + f] /= i),
              e(d)
            );
          },
        },
      };
    function iT(a, { layout: b, layoutId: c }) {
      return gR.has(a) || a.startsWith("origin") || ((b || void 0 !== c) && (!!iS[a] || "opacity" === a));
    }
    function iU(a, b, c) {
      let d = a.style,
        e = b?.style,
        f = {};
      if (!d) return f;
      for (let b in d)
        (hw(d[b]) || (e && hw(e[b])) || iT(b, a) || c?.getValue(b)?.liveStyle !== void 0) && (f[b] = d[b]);
      return f;
    }
    function iV(a, b, c) {
      let d = iU(a, b, c);
      for (let c in a)
        (hw(a[c]) || hw(b[c])) &&
          (d[-1 !== gQ.indexOf(c) ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c] = a[c]);
      return d;
    }
    class iW extends iC {
      constructor() {
        (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = hv));
      }
      getBaseTargetFromProps(a, b) {
        return a[b];
      }
      readValueFromInstance(a, b) {
        if (gR.has(b)) {
          let a = hr(b);
          return (a && a.default) || 0;
        }
        return ((b = iM.has(b) ? b : iD(b)), a.getAttribute(b));
      }
      scrapeMotionValuesFromProps(a, b, c) {
        return iV(a, b, c);
      }
      build(a, b, c) {
        iL(a, b, this.isSVGTag, c.transformTemplate, c.style);
      }
      renderInstance(a, b, c, d) {
        for (let c in (iO(a, b, void 0, d), b.attrs)) a.setAttribute(iM.has(c) ? c : iD(c), b.attrs[c]);
      }
      mount(a) {
        ((this.isSVGTag = iN(a.tagName)), super.mount(a));
      }
    }
    function iX({ top: a, left: b, right: c, bottom: d }) {
      return { x: { min: b, max: c }, y: { min: a, max: d } };
    }
    function iY(a) {
      return void 0 === a || 1 === a;
    }
    function iZ({ scale: a, scaleX: b, scaleY: c }) {
      return !iY(a) || !iY(b) || !iY(c);
    }
    function i$(a) {
      return iZ(a) || i_(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY;
    }
    function i_(a) {
      var b, c;
      return ((b = a.x) && "0%" !== b) || ((c = a.y) && "0%" !== c);
    }
    function i0(a, b, c, d, e) {
      return (void 0 !== e && (a = d + e * (a - d)), d + c * (a - d) + b);
    }
    function i1(a, b = 0, c = 1, d, e) {
      ((a.min = i0(a.min, b, c, d, e)), (a.max = i0(a.max, b, c, d, e)));
    }
    function i2(a, { x: b, y: c }) {
      (i1(a.x, b.translate, b.scale, b.originPoint), i1(a.y, c.translate, c.scale, c.originPoint));
    }
    function i3(a, b) {
      ((a.min = a.min + b), (a.max = a.max + b));
    }
    function i4(a, b, c, d, e = 0.5) {
      let f = iR(a.min, a.max, e);
      i1(a, b, c, f, d);
    }
    function i5(a, b) {
      (i4(a.x, b.x, b.scaleX, b.scale, b.originX), i4(a.y, b.y, b.scaleY, b.scale, b.originY));
    }
    function i6(a, b) {
      return iX(
        (function (a, b) {
          if (!b) return a;
          let c = b({ x: a.left, y: a.top }),
            d = b({ x: a.right, y: a.bottom });
          return { top: c.y, left: c.x, bottom: d.y, right: d.x };
        })(a.getBoundingClientRect(), b),
      );
    }
    class i7 extends iC {
      constructor() {
        (super(...arguments), (this.type = "html"), (this.renderInstance = iO));
      }
      readValueFromInstance(a, b) {
        if (gR.has(b))
          return this.projection?.isProjecting
            ? hR(b)
            : ((a, b) => {
                let { transform: c = "none" } = getComputedStyle(a);
                return hS(c, b);
              })(a, b);
        {
          let c = window.getComputedStyle(a),
            d = (hE(b) ? c.getPropertyValue(b) : c[b]) || 0;
          return "string" == typeof d ? d.trim() : d;
        }
      }
      measureInstanceViewportBox(a, { transformPagePoint: b }) {
        return i6(a, b);
      }
      build(a, b, c) {
        iH(a, b, c.transformTemplate);
      }
      scrapeMotionValuesFromProps(a, b, c) {
        return iU(a, b, c);
      }
    }
    let i8 = [
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
    function i9(a) {
      if ("string" != typeof a || a.includes("-"));
      else if (i8.indexOf(a) > -1 || /[A-Z]/u.test(a)) return !0;
      return !1;
    }
    let ja = (0, a3.createContext)({}),
      jb =
        ((0, a3.createContext)({ strict: !1 }),
        (0, a3.createContext)({ transformPagePoint: (a) => a, isStatic: !1, reducedMotion: "never" })),
      jc = (0, a3.createContext)({});
    function jd(a) {
      return Array.isArray(a) ? a.join(" ") : a;
    }
    let je = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
    function jf(a, b, c) {
      for (let d in b) hw(b[d]) || iT(d, c) || (a[d] = b[d]);
    }
    let jg = () => ({ ...je(), attrs: {} }),
      jh = new Set([
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
    function ji(a) {
      return (
        a.startsWith("while") ||
        (a.startsWith("drag") && "draggable" !== a) ||
        a.startsWith("layout") ||
        a.startsWith("onTap") ||
        a.startsWith("onPan") ||
        a.startsWith("onLayout") ||
        jh.has(a)
      );
    }
    let jj = (a) => !ji(a);
    try {
      ((aZ = a.r(881996).default), "function" == typeof aZ && (jj = (a) => (a.startsWith("on") ? !ji(a) : aZ(a))));
    } catch {}
    function jk(a) {
      return hw(a) ? a.get() : a;
    }
    let jl = (0, a3.createContext)(null);
    function jm(a) {
      let b = (0, a3.useRef)(null);
      return (null === b.current && (b.current = a()), b.current);
    }
    let jn = (a) => (b, c) => {
        let d = (0, a3.useContext)(jc),
          e = (0, a3.useContext)(jl),
          f = () =>
            (function ({ scrapeMotionValuesFromProps: a, createRenderState: b }, c, d, e) {
              return {
                latestValues: (function (a, b, c, d) {
                  let e = {},
                    f = d(a, {});
                  for (let a in f) e[a] = jk(f[a]);
                  let { initial: g, animate: h } = a,
                    i = iv(a),
                    j = iw(a);
                  b &&
                    j &&
                    !i &&
                    !1 !== a.inherit &&
                    (void 0 === g && (g = b.initial), void 0 === h && (h = b.animate));
                  let k = !!c && !1 === c.initial,
                    l = (k = k || !1 === g) ? h : g;
                  if (l && "boolean" != typeof l && !ir(l)) {
                    let b = Array.isArray(l) ? l : [l];
                    for (let c = 0; c < b.length; c++) {
                      let d = iy(a, b[c]);
                      if (d) {
                        let { transitionEnd: a, transition: b, ...c } = d;
                        for (let a in c) {
                          let b = c[a];
                          if (Array.isArray(b)) {
                            let a = k ? b.length - 1 : 0;
                            b = b[a];
                          }
                          null !== b && (e[a] = b);
                        }
                        for (let b in a) e[b] = a[b];
                      }
                    }
                  }
                  return e;
                })(c, d, e, a),
                renderState: b(),
              };
            })(a, b, d, e);
        return c ? f() : jm(f);
      },
      jo = jn({ scrapeMotionValuesFromProps: iU, createRenderState: je }),
      jp = jn({ scrapeMotionValuesFromProps: iV, createRenderState: jg }),
      jq = {
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
      jr = !1,
      js = Symbol.for("motionComponentSymbol"),
      jt = "data-" + iD("framerAppearId"),
      ju = (0, a3.createContext)({});
    function jv(a) {
      return a && "object" == typeof a && Object.prototype.hasOwnProperty.call(a, "current");
    }
    let jw = a3.useEffect;
    function jx(a, { forwardMotionProps: b = !1, type: c } = {}, d, e) {
      d &&
        (function (a) {
          let b =
            (!(function () {
              if (jr) return;
              let a = {};
              for (let b in jq) a[b] = { isEnabled: (a) => jq[b].some((b) => !!a[b]) };
              ((iA = a), (jr = !0));
            })(),
            iA);
          for (let c in a) b[c] = { ...b[c], ...a[c] };
          iA = b;
        })(d);
      let f = c ? "svg" === c : i9(a),
        g = f ? jp : jo;
      function h(c, d) {
        var e;
        let h,
          i,
          j,
          k = {
            ...(0, a3.useContext)(jb),
            ...c,
            layoutId: (function ({ layoutId: a }) {
              let b = (0, a3.useContext)(ja).id;
              return b && void 0 !== a ? b + "-" + a : a;
            })(c),
          },
          { isStatic: l } = k,
          m = (function (a) {
            let { initial: b, animate: c } = (function (a, b) {
              if (iv(a)) {
                let { initial: b, animate: c } = a;
                return { initial: !1 === b || is(b) ? b : void 0, animate: is(c) ? c : void 0 };
              }
              return !1 !== a.inherit ? b : {};
            })(a, (0, a3.useContext)(jc));
            return (0, a3.useMemo)(() => ({ initial: b, animate: c }), [jd(b), jd(c)]);
          })(c),
          n = g(c, l);
        return (0, a1.jsxs)(jc.Provider, {
          value: m,
          children: [
            h && m.visualElement ? (0, a1.jsx)(h, { visualElement: m.visualElement, ...k }) : null,
            (function (a, b, c, { latestValues: d }, e, f = !1, g) {
              let h = (
                  (g ?? i9(a))
                    ? function (a, b, c, d) {
                        let e = (0, a3.useMemo)(() => {
                          let c = jg();
                          return (iL(c, b, iN(d), a.transformTemplate, a.style), { ...c.attrs, style: { ...c.style } });
                        }, [b]);
                        if (a.style) {
                          let b = {};
                          (jf(b, a.style, a), (e.style = { ...b, ...e.style }));
                        }
                        return e;
                      }
                    : function (a, b) {
                        let c,
                          d,
                          e = {},
                          f =
                            ((c = a.style || {}),
                            jf((d = {}), c, a),
                            Object.assign(
                              d,
                              (function ({ transformTemplate: a }, b) {
                                return (0, a3.useMemo)(() => {
                                  let c = je();
                                  return (iH(c, b, a), Object.assign({}, c.vars, c.style));
                                }, [b]);
                              })(a, b),
                            ),
                            d);
                        return (
                          a.drag &&
                            !1 !== a.dragListener &&
                            ((e.draggable = !1),
                            (f.userSelect = f.WebkitUserSelect = f.WebkitTouchCallout = "none"),
                            (f.touchAction = !0 === a.drag ? "none" : `pan-${"x" === a.drag ? "y" : "x"}`)),
                          void 0 === a.tabIndex && (a.onTap || a.onTapStart || a.whileTap) && (e.tabIndex = 0),
                          (e.style = f),
                          e
                        );
                      }
                )(b, d, e, a),
                i = (function (a, b, c) {
                  let d = {};
                  for (let e in a)
                    ("values" !== e || "object" != typeof a.values) &&
                      (jj(e) || (!0 === c && ji(e)) || (!b && !ji(e)) || (a.draggable && e.startsWith("onDrag"))) &&
                      (d[e] = a[e]);
                  return d;
                })(b, "string" == typeof a, f),
                j = a !== a3.Fragment ? { ...i, ...h, ref: c } : {},
                { children: k } = b,
                l = (0, a3.useMemo)(() => (hw(k) ? k.get() : k), [k]);
              return (0, a3.createElement)(a, { ...j, children: l });
            })(
              a,
              c,
              ((e = m.visualElement),
              (i = (0, a3.useRef)(d)),
              (0, a3.useInsertionEffect)(() => {
                i.current = d;
              }),
              (j = (0, a3.useRef)(null)),
              (0, a3.useCallback)(
                (a) => {
                  (a && n.onMount?.(a), e && (a ? e.mount(a) : e.unmount()));
                  let b = i.current;
                  if ("function" == typeof b)
                    if (a) {
                      let c = b(a);
                      "function" == typeof c && (j.current = c);
                    } else j.current ? (j.current(), (j.current = null)) : b(a);
                  else b && (b.current = a);
                },
                [e],
              )),
              n,
              l,
              b,
              f,
            ),
          ],
        });
      }
      h.displayName = `motion.${"string" == typeof a ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
      let i = (0, a3.forwardRef)(h);
      return ((i[js] = a), i);
    }
    class jy {
      constructor(a) {
        ((this.isMounted = !1), (this.node = a));
      }
      update() {}
    }
    function jz(a, b, c) {
      let d = a.getProps();
      return iy(d, b, void 0 !== c ? c : d.custom, a);
    }
    function jA(a, b) {
      return a?.[b] ?? a?.default ?? a;
    }
    let jB = (a) => Array.isArray(a);
    function jC(a, b) {
      let c = a.getValue("willChange");
      if (hw(c) && c.add) return c.add(b);
      if (!c && hZ.WillChange) {
        let c = new hZ.WillChange("auto");
        (a.addValue("willChange", c), c.add(b));
      }
    }
    let jD = (a) => 1e3 * a,
      jE = (a, b) => (c) => b(a(c)),
      jF = (...a) => a.reduce(jE),
      jG = { layout: 0, mainThread: 0, waapi: 0 };
    function jH(a, b, c) {
      return (c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6)
        ? a + (b - a) * 6 * c
        : c < 0.5
          ? b
          : c < 2 / 3
            ? a + (b - a) * (2 / 3 - c) * 6
            : a;
    }
    function jI(a, b) {
      return (c) => (c > 0 ? b : a);
    }
    let jJ = (a, b, c) => {
        let d = a * a,
          e = c * (b * b - d) + d;
        return e < 0 ? 0 : Math.sqrt(e);
      },
      jK = [g1, g0, g9];
    function jL(a) {
      let b = jK.find((b) => b.test(a));
      if (
        (hB(!!b, `'${a}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
        !b)
      )
        return !1;
      let c = b.parse(a);
      return (
        b === g9 &&
          (c = (function ({ hue: a, saturation: b, lightness: c, alpha: d }) {
            ((a /= 360), (c /= 100));
            let e = 0,
              f = 0,
              g = 0;
            if ((b /= 100)) {
              let d = c < 0.5 ? c * (1 + b) : c + b - c * b,
                h = 2 * c - d;
              ((e = jH(h, d, a + 1 / 3)), (f = jH(h, d, a)), (g = jH(h, d, a - 1 / 3)));
            } else e = f = g = c;
            return { red: Math.round(255 * e), green: Math.round(255 * f), blue: Math.round(255 * g), alpha: d };
          })(c)),
        c
      );
    }
    let jM = (a, b) => {
        let c = jL(a),
          d = jL(b);
        if (!c || !d) return jI(a, b);
        let e = { ...c };
        return (a) => (
          (e.red = jJ(c.red, d.red, a)),
          (e.green = jJ(c.green, d.green, a)),
          (e.blue = jJ(c.blue, d.blue, a)),
          (e.alpha = iR(c.alpha, d.alpha, a)),
          g0.transform(e)
        );
      },
      jN = new Set(["none", "hidden"]);
    function jO(a, b) {
      return (c) => iR(a, b, c);
    }
    function jP(a) {
      return "number" == typeof a
        ? jO
        : "string" == typeof a
          ? hG(a)
            ? jI
            : ha.test(a)
              ? jM
              : jS
          : Array.isArray(a)
            ? jQ
            : "object" == typeof a
              ? ha.test(a)
                ? jM
                : jR
              : jI;
    }
    function jQ(a, b) {
      let c = [...a],
        d = c.length,
        e = a.map((a, c) => jP(a)(a, b[c]));
      return (a) => {
        for (let b = 0; b < d; b++) c[b] = e[b](a);
        return c;
      };
    }
    function jR(a, b) {
      let c = { ...a, ...b },
        d = {};
      for (let e in c) void 0 !== a[e] && void 0 !== b[e] && (d[e] = jP(a[e])(a[e], b[e]));
      return (a) => {
        for (let b in d) c[b] = d[b](a);
        return c;
      };
    }
    let jS = (a, b) => {
      let c = hj.createTransformer(b),
        d = hf(a),
        e = hf(b);
      if (
        !(
          d.indexes.var.length === e.indexes.var.length &&
          d.indexes.color.length === e.indexes.color.length &&
          d.indexes.number.length >= e.indexes.number.length
        )
      )
        return (
          hB(
            !0,
            `Complex values '${a}' and '${b}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            "complex-values-different",
          ),
          jI(a, b)
        );
      if ((jN.has(a) && !e.values.length) || (jN.has(b) && !d.values.length))
        return jN.has(a) ? (c) => (c <= 0 ? a : b) : (c) => (c >= 1 ? b : a);
      return jF(
        jQ(
          (function (a, b) {
            let c = [],
              d = { color: 0, var: 0, number: 0 };
            for (let e = 0; e < b.values.length; e++) {
              let f = b.types[e],
                g = a.indexes[f][d[f]],
                h = a.values[g] ?? 0;
              ((c[e] = h), d[f]++);
            }
            return c;
          })(d, e),
          e.values,
        ),
        c,
      );
    };
    function jT(a, b, c) {
      return "number" == typeof a && "number" == typeof b && "number" == typeof c ? iR(a, b, c) : jP(a)(a, b);
    }
    let jU = (a) => {
        let b = ({ timestamp: b }) => a(b);
        return {
          start: (a = !0) => h0.update(b, a),
          stop: () => h1(b),
          now: () => (h2.isProcessing ? h2.timestamp : ik.now()),
        };
      },
      jV = (a, b, c = 10) => {
        let d = "",
          e = Math.max(Math.round(b / c), 2);
        for (let b = 0; b < e; b++) d += Math.round(1e4 * a(b / (e - 1))) / 1e4 + ", ";
        return `linear(${d.substring(0, d.length - 2)})`;
      };
    function jW(a) {
      let b = 0,
        c = a.next(b);
      for (; !c.done && b < 2e4; ) ((b += 50), (c = a.next(b)));
      return b >= 2e4 ? 1 / 0 : b;
    }
    function jX(a, b, c) {
      var d, e;
      let f = Math.max(b - 5, 0);
      return ((d = c - a(f)), (e = b - f) ? (1e3 / e) * d : 0);
    }
    let jY = 0.01,
      jZ = 2,
      j$ = 0.005,
      j_ = 0.5;
    function j0(a, b) {
      return a * Math.sqrt(1 - b * b);
    }
    let j1 = ["duration", "bounce"],
      j2 = ["stiffness", "damping", "mass"];
    function j3(a, b) {
      return b.some((b) => void 0 !== a[b]);
    }
    function j4(a = 0.3, b = 0.3) {
      let c,
        d = "object" != typeof a ? { visualDuration: a, keyframes: [0, 1], bounce: b } : a,
        { restSpeed: e, restDelta: f } = d,
        g = d.keyframes[0],
        h = d.keyframes[d.keyframes.length - 1],
        i = { done: !1, value: g },
        {
          stiffness: j,
          damping: k,
          mass: l,
          duration: m,
          velocity: n,
          isResolvedFromDuration: o,
        } = (function (a) {
          let b = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...a };
          if (!j3(a, j2) && j3(a, j1))
            if (a.visualDuration) {
              let c = (2 * Math.PI) / (1.2 * a.visualDuration),
                d = c * c,
                e = 2 * gS(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(d);
              b = { ...b, mass: 1, stiffness: d, damping: e };
            } else {
              let c = (function ({ duration: a = 800, bounce: b = 0.3, velocity: c = 0, mass: d = 1 }) {
                let e, f;
                hB(a <= jD(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                let g = 1 - b;
                ((g = gS(0.05, 1, g)),
                  (a = gS(0.01, 10, a / 1e3)),
                  g < 1
                    ? ((e = (b) => {
                        let d = b * g,
                          e = d * a;
                        return 0.001 - ((d - c) / j0(b, g)) * Math.exp(-e);
                      }),
                      (f = (b) => {
                        let d = b * g * a,
                          f = Math.pow(g, 2) * Math.pow(b, 2) * a,
                          h = Math.exp(-d),
                          i = j0(Math.pow(b, 2), g);
                        return ((d * c + c - f) * h * (-e(b) + 0.001 > 0 ? -1 : 1)) / i;
                      }))
                    : ((e = (b) => -0.001 + Math.exp(-b * a) * ((b - c) * a + 1)),
                      (f = (b) => a * a * (c - b) * Math.exp(-b * a))));
                let h = (function (a, b, c) {
                  let d = c;
                  for (let c = 1; c < 12; c++) d -= a(d) / b(d);
                  return d;
                })(e, f, 5 / a);
                if (((a = jD(a)), isNaN(h))) return { stiffness: 100, damping: 10, duration: a };
                {
                  let b = Math.pow(h, 2) * d;
                  return { stiffness: b, damping: 2 * g * Math.sqrt(d * b), duration: a };
                }
              })(a);
              (b = { ...b, ...c, mass: 1 }).isResolvedFromDuration = !0;
            }
          return b;
        })({ ...d, velocity: -((d.velocity || 0) / 1e3) }),
        p = n || 0,
        q = k / (2 * Math.sqrt(j * l)),
        r = h - g,
        s = Math.sqrt(j / l) / 1e3,
        t = 5 > Math.abs(r);
      if ((e || (e = t ? jY : jZ), f || (f = t ? j$ : j_), q < 1)) {
        let a = j0(s, q);
        c = (b) => h - Math.exp(-q * s * b) * (((p + q * s * r) / a) * Math.sin(a * b) + r * Math.cos(a * b));
      } else if (1 === q) c = (a) => h - Math.exp(-s * a) * (r + (p + s * r) * a);
      else {
        let a = s * Math.sqrt(q * q - 1);
        c = (b) => {
          let c = Math.exp(-q * s * b),
            d = Math.min(a * b, 300);
          return h - (c * ((p + q * s * r) * Math.sinh(d) + a * r * Math.cosh(d))) / a;
        };
      }
      let u = {
        calculatedDuration: (o && m) || null,
        next: (a) => {
          let b = c(a);
          if (o) i.done = a >= m;
          else {
            let d = 0 === a ? p : 0;
            q < 1 && (d = 0 === a ? jD(p) : jX(c, a, b));
            let g = Math.abs(h - b) <= f;
            i.done = Math.abs(d) <= e && g;
          }
          return ((i.value = i.done ? h : b), i);
        },
        toString: () => {
          let a = Math.min(jW(u), 2e4),
            b = jV((b) => u.next(a * b).value, a, 30);
          return a + "ms " + b;
        },
        toTransition: () => {},
      };
      return u;
    }
    function j5({
      keyframes: a,
      velocity: b = 0,
      power: c = 0.8,
      timeConstant: d = 325,
      bounceDamping: e = 10,
      bounceStiffness: f = 500,
      modifyTarget: g,
      min: h,
      max: i,
      restDelta: j = 0.5,
      restSpeed: k,
    }) {
      let l,
        m,
        n = a[0],
        o = { done: !1, value: n },
        p = c * b,
        q = n + p,
        r = void 0 === g ? q : g(q);
      r !== q && (p = r - n);
      let s = (a) => -p * Math.exp(-a / d),
        t = (a) => r + s(a),
        u = (a) => {
          let b = s(a),
            c = t(a);
          ((o.done = Math.abs(b) <= j), (o.value = o.done ? r : c));
        },
        v = (a) => {
          let b;
          if (((b = o.value), (void 0 !== h && b < h) || (void 0 !== i && b > i))) {
            var c;
            ((l = a),
              (m = j4({
                keyframes: [
                  o.value,
                  ((c = o.value), void 0 === h ? i : void 0 === i || Math.abs(h - c) < Math.abs(i - c) ? h : i),
                ],
                velocity: jX(t, a, o.value),
                damping: e,
                stiffness: f,
                restDelta: j,
                restSpeed: k,
              })));
          }
        };
      return (
        v(0),
        {
          calculatedDuration: null,
          next: (a) => {
            let b = !1;
            return (m || void 0 !== l || ((b = !0), u(a), v(a)), void 0 !== l && a >= l)
              ? m.next(a - l)
              : (b || u(a), o);
          },
        }
      );
    }
    j4.applyToOptions = (a) => {
      let b = (function (a, b = 100, c) {
        let d = c({ ...a, keyframes: [0, b] }),
          e = Math.min(jW(d), 2e4);
        return { type: "keyframes", ease: (a) => d.next(e * a).value / b, duration: e / 1e3 };
      })(a, 100, j4);
      return ((a.ease = b.ease), (a.duration = jD(b.duration)), (a.type = "keyframes"), a);
    };
    let j6 = (a, b, c) => (((1 - 3 * c + 3 * b) * a + (3 * c - 6 * b)) * a + 3 * b) * a;
    function j7(a, b, c, d) {
      return a === b && c === d
        ? hY
        : (e) =>
            0 === e || 1 === e
              ? e
              : j6(
                  (function (a, b, c, d, e) {
                    let f,
                      g,
                      h = 0;
                    do (f = j6((g = b + (c - b) / 2), d, e) - a) > 0 ? (c = g) : (b = g);
                    while (Math.abs(f) > 1e-7 && ++h < 12);
                    return g;
                  })(e, 0, 1, a, c),
                  b,
                  d,
                );
    }
    let j8 = j7(0.42, 0, 1, 1),
      j9 = j7(0, 0, 0.58, 1),
      ka = j7(0.42, 0, 0.58, 1),
      kb = (a) => (b) => (b <= 0.5 ? a(2 * b) / 2 : (2 - a(2 * (1 - b))) / 2),
      kc = (a) => (b) => 1 - a(1 - b),
      kd = j7(0.33, 1.53, 0.69, 0.99),
      ke = kc(kd),
      kf = kb(ke),
      kg = (a) => ((a *= 2) < 1 ? 0.5 * ke(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))),
      kh = (a) => 1 - Math.sin(Math.acos(a)),
      ki = kc(kh),
      kj = kb(kh),
      kk = (a) => Array.isArray(a) && "number" == typeof a[0],
      kl = {
        linear: hY,
        easeIn: j8,
        easeInOut: ka,
        easeOut: j9,
        circIn: kh,
        circInOut: kj,
        circOut: ki,
        backIn: ke,
        backInOut: kf,
        backOut: kd,
        anticipate: kg,
      },
      km = (a) => {
        if (kk(a)) {
          hC(4 === a.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
          let [b, c, d, e] = a;
          return j7(b, c, d, e);
        }
        return "string" == typeof a
          ? (hC(void 0 !== kl[a], `Invalid easing type '${a}'`, "invalid-easing-type"), kl[a])
          : a;
      },
      kn = (a, b, c) => {
        let d = b - a;
        return 0 === d ? 1 : (c - a) / d;
      };
    function ko({ duration: a = 300, keyframes: b, times: c, ease: d = "easeInOut" }) {
      var e;
      let f,
        g = Array.isArray(d) && "number" != typeof d[0] ? d.map(km) : km(d),
        h = { done: !1, value: b[0] },
        i = (function (a, b, { clamp: c = !0, ease: d, mixer: e } = {}) {
          let f = a.length;
          if ((hC(f === b.length, "Both input and output ranges must be the same length", "range-length"), 1 === f))
            return () => b[0];
          if (2 === f && b[0] === b[1]) return () => b[1];
          let g = a[0] === a[1];
          a[0] > a[f - 1] && ((a = [...a].reverse()), (b = [...b].reverse()));
          let h = (function (a, b, c) {
              let d = [],
                e = c || hZ.mix || jT,
                f = a.length - 1;
              for (let c = 0; c < f; c++) {
                let f = e(a[c], a[c + 1]);
                (b && (f = jF(Array.isArray(b) ? b[c] || hY : b, f)), d.push(f));
              }
              return d;
            })(b, d, e),
            i = h.length,
            j = (c) => {
              if (g && c < a[0]) return b[0];
              let d = 0;
              if (i > 1) for (; d < a.length - 2 && !(c < a[d + 1]); d++);
              let e = kn(a[d], a[d + 1], c);
              return h[d](e);
            };
          return c ? (b) => j(gS(a[0], a[f - 1], b)) : j;
        })(
          ((e =
            c && c.length === b.length
              ? c
              : (!(function (a, b) {
                  let c = a[a.length - 1];
                  for (let d = 1; d <= b; d++) {
                    let e = kn(0, b, d);
                    a.push(iR(c, 1, e));
                  }
                })((f = [0]), b.length - 1),
                f)),
          e.map((b) => b * a)),
          b,
          { ease: Array.isArray(g) ? g : b.map(() => g || ka).splice(0, b.length - 1) },
        );
      return { calculatedDuration: a, next: (b) => ((h.value = i(b)), (h.done = b >= a), h) };
    }
    let kp = (a) => null !== a;
    function kq(a, { repeat: b, repeatType: c = "loop" }, d, e = 1) {
      let f = a.filter(kp),
        g = e < 0 || (b && "loop" !== c && b % 2 == 1) ? 0 : f.length - 1;
      return g && void 0 !== d ? d : f[g];
    }
    let kr = { decay: j5, inertia: j5, tween: ko, keyframes: ko, spring: j4 };
    function ks(a) {
      "string" == typeof a.type && (a.type = kr[a.type]);
    }
    class kt {
      constructor() {
        this.updateFinished();
      }
      get finished() {
        return this._finished;
      }
      updateFinished() {
        this._finished = new Promise((a) => {
          this.resolve = a;
        });
      }
      notifyFinished() {
        this.resolve();
      }
      then(a, b) {
        return this.finished.then(a, b);
      }
    }
    let ku = (a) => a / 100;
    class kv extends kt {
      constructor(a) {
        (super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.stop = () => {
            let { motionValue: a } = this.options;
            (a && a.updatedAt !== ik.now() && this.tick(ik.now()),
              (this.isStopped = !0),
              "idle" !== this.state && (this.teardown(), this.options.onStop?.()));
          }),
          jG.mainThread++,
          (this.options = a),
          this.initAnimation(),
          this.play(),
          !1 === a.autoplay && this.pause());
      }
      initAnimation() {
        let { options: a } = this;
        ks(a);
        let { type: b = ko, repeat: c = 0, repeatDelay: d = 0, repeatType: e, velocity: f = 0 } = a,
          { keyframes: g } = a,
          h = b || ko;
        h !== ko && "number" != typeof g[0] && ((this.mixKeyframes = jF(ku, jT(g[0], g[1]))), (g = [0, 100]));
        let i = h({ ...a, keyframes: g });
        ("mirror" === e && (this.mirroredGenerator = h({ ...a, keyframes: [...g].reverse(), velocity: -f })),
          null === i.calculatedDuration && (i.calculatedDuration = jW(i)));
        let { calculatedDuration: j } = i;
        ((this.calculatedDuration = j),
          (this.resolvedDuration = j + d),
          (this.totalDuration = this.resolvedDuration * (c + 1) - d),
          (this.generator = i));
      }
      updateTime(a) {
        let b = Math.round(a - this.startTime) * this.playbackSpeed;
        null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = b);
      }
      tick(a, b = !1) {
        let {
          generator: c,
          totalDuration: d,
          mixKeyframes: e,
          mirroredGenerator: f,
          resolvedDuration: g,
          calculatedDuration: h,
        } = this;
        if (null === this.startTime) return c.next(0);
        let {
          delay: i = 0,
          keyframes: j,
          repeat: k,
          repeatType: l,
          repeatDelay: m,
          type: n,
          onUpdate: o,
          finalKeyframe: p,
        } = this.options;
        (this.speed > 0
          ? (this.startTime = Math.min(this.startTime, a))
          : this.speed < 0 && (this.startTime = Math.min(a - d / this.speed, this.startTime)),
          b ? (this.currentTime = a) : this.updateTime(a));
        let q = this.currentTime - i * (this.playbackSpeed >= 0 ? 1 : -1),
          r = this.playbackSpeed >= 0 ? q < 0 : q > d;
        ((this.currentTime = Math.max(q, 0)),
          "finished" === this.state && null === this.holdTime && (this.currentTime = d));
        let s = this.currentTime,
          t = c;
        if (k) {
          let a = Math.min(this.currentTime, d) / g,
            b = Math.floor(a),
            c = a % 1;
          (!c && a >= 1 && (c = 1),
            1 === c && b--,
            (b = Math.min(b, k + 1)) % 2 &&
              ("reverse" === l ? ((c = 1 - c), m && (c -= m / g)) : "mirror" === l && (t = f)),
            (s = gS(0, 1, c) * g));
        }
        let u = r ? { done: !1, value: j[0] } : t.next(s);
        e && (u.value = e(u.value));
        let { done: v } = u;
        r || null === h || (v = this.playbackSpeed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        let w = null === this.holdTime && ("finished" === this.state || ("running" === this.state && v));
        return (
          w && n !== j5 && (u.value = kq(j, this.options, p, this.speed)),
          o && o(u.value),
          w && this.finish(),
          u
        );
      }
      then(a, b) {
        return this.finished.then(a, b);
      }
      get duration() {
        return this.calculatedDuration / 1e3;
      }
      get iterationDuration() {
        let { delay: a = 0 } = this.options || {};
        return this.duration + a / 1e3;
      }
      get time() {
        return this.currentTime / 1e3;
      }
      set time(a) {
        ((a = jD(a)),
          (this.currentTime = a),
          null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed
            ? (this.holdTime = a)
            : this.driver && (this.startTime = this.driver.now() - a / this.playbackSpeed),
          this.driver?.start(!1));
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(a) {
        this.updateTime(ik.now());
        let b = this.playbackSpeed !== a;
        ((this.playbackSpeed = a), b && (this.time = this.currentTime / 1e3));
      }
      play() {
        if (this.isStopped) return;
        let { driver: a = jU, startTime: b } = this.options;
        (this.driver || (this.driver = a((a) => this.tick(a))), this.options.onPlay?.());
        let c = this.driver.now();
        ("finished" === this.state
          ? (this.updateFinished(), (this.startTime = c))
          : null !== this.holdTime
            ? (this.startTime = c - this.holdTime)
            : this.startTime || (this.startTime = b ?? c),
          "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start());
      }
      pause() {
        ((this.state = "paused"), this.updateTime(ik.now()), (this.holdTime = this.currentTime));
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
        ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null), jG.mainThread--);
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(a) {
        return ((this.startTime = 0), this.tick(a, !0));
      }
      attachTimeline(a) {
        return (
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
          this.driver?.stop(),
          a.observe(this)
        );
      }
    }
    function kw(a) {
      let b;
      return () => (void 0 === b && (b = a()), b);
    }
    let kx = kw(() => void 0 !== window.ScrollTimeline),
      ky = {},
      kz =
        ((f = kw(() => {
          try {
            document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (a) {
            return !1;
          }
          return !0;
        })),
        () => ky.linearEasing ?? f()),
      kA = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`,
      kB = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: kA([0, 0.65, 0.55, 1]),
        circOut: kA([0.55, 0, 1, 0.45]),
        backIn: kA([0.31, 0.01, 0.66, -0.59]),
        backOut: kA([0.33, 1.53, 0.69, 0.99]),
      };
    function kC(a) {
      return "function" == typeof a && "applyToOptions" in a;
    }
    class kD extends kt {
      constructor(a) {
        if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !a)) return;
        const {
          element: b,
          name: c,
          keyframes: d,
          pseudoElement: e,
          allowFlatten: f = !1,
          finalKeyframe: g,
          onComplete: h,
        } = a;
        ((this.isPseudoElement = !!e),
          (this.allowFlatten = f),
          (this.options = a),
          hC("string" != typeof a.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring"));
        const i = (function ({ type: a, ...b }) {
          return kC(a) && kz()
            ? a.applyToOptions(b)
            : (b.duration ?? (b.duration = 300), b.ease ?? (b.ease = "easeOut"), b);
        })(a);
        ((this.animation = (function (
          a,
          b,
          c,
          {
            delay: d = 0,
            duration: e = 300,
            repeat: f = 0,
            repeatType: g = "loop",
            ease: h = "easeOut",
            times: i,
          } = {},
          j,
        ) {
          let k = { [b]: c };
          i && (k.offset = i);
          let l = (function a(b, c) {
            if (b)
              return "function" == typeof b
                ? kz()
                  ? jV(b, c)
                  : "ease-out"
                : kk(b)
                  ? kA(b)
                  : Array.isArray(b)
                    ? b.map((b) => a(b, c) || kB.easeOut)
                    : kB[b];
          })(h, e);
          Array.isArray(l) && (k.easing = l);
          let m = {
            delay: d,
            duration: e,
            easing: Array.isArray(l) ? "linear" : l,
            fill: "both",
            iterations: f + 1,
            direction: "reverse" === g ? "alternate" : "normal",
          };
          j && (m.pseudoElement = j);
          let n = a.animate(k, m);
          return n;
        })(b, c, d, i, e)),
          !1 === i.autoplay && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !e)) {
              let a = kq(d, this.options, g, this.speed);
              (this.updateMotionValue
                ? this.updateMotionValue(a)
                : c.startsWith("--")
                  ? b.style.setProperty(c, a)
                  : (b.style[c] = a),
                this.animation.cancel());
            }
            (h?.(), this.notifyFinished());
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
        } catch (a) {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        let { state: a } = this;
        "idle" !== a &&
          "finished" !== a &&
          (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
          this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        let a = this.options?.element;
        !this.isPseudoElement && a?.isConnected && this.animation.commitStyles?.();
      }
      get duration() {
        return Number(this.animation.effect?.getComputedTiming?.().duration || 0) / 1e3;
      }
      get iterationDuration() {
        let { delay: a = 0 } = this.options || {};
        return this.duration + a / 1e3;
      }
      get time() {
        return (Number(this.animation.currentTime) || 0) / 1e3;
      }
      set time(a) {
        ((this.manualStartTime = null), (this.finishedTime = null), (this.animation.currentTime = jD(a)));
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(a) {
        (a < 0 && (this.finishedTime = null), (this.animation.playbackRate = a));
      }
      get state() {
        return null !== this.finishedTime ? "finished" : this.animation.playState;
      }
      get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
      }
      set startTime(a) {
        this.manualStartTime = this.animation.startTime = a;
      }
      attachTimeline({ timeline: a, observe: b }) {
        return (this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
        (this.animation.onfinish = null),
        a && kx())
          ? ((this.animation.timeline = a), hY)
          : b(this);
      }
    }
    let kE = { anticipate: kg, backInOut: kf, circInOut: kj };
    class kF extends kD {
      constructor(a) {
        (!(function (a) {
          "string" == typeof a.ease && a.ease in kE && (a.ease = kE[a.ease]);
        })(a),
          ks(a),
          super(a),
          void 0 !== a.startTime && (this.startTime = a.startTime),
          (this.options = a));
      }
      updateMotionValue(a) {
        let { motionValue: b, onUpdate: c, onComplete: d, element: e, ...f } = this.options;
        if (!b) return;
        if (void 0 !== a) return void b.set(a);
        let g = new kv({ ...f, autoplay: !1 }),
          h = Math.max(10, ik.now() - this.startTime),
          i = gS(0, 10, h - 10);
        (b.setWithVelocity(g.sample(Math.max(0, h - i)).value, g.sample(h).value, i), g.stop());
      }
    }
    let kG = (a, b) =>
      "zIndex" !== b &&
      !!(
        "number" == typeof a ||
        Array.isArray(a) ||
        ("string" == typeof a && (hj.test(a) || "0" === a) && !a.startsWith("url("))
      );
    function kH(a) {
      ((a.duration = 0), (a.type = "keyframes"));
    }
    let kI = new Set(["opacity", "clipPath", "filter", "transform"]),
      kJ = kw(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class kK extends kt {
      constructor({
        autoplay: a = !0,
        delay: b = 0,
        type: c = "keyframes",
        repeat: d = 0,
        repeatDelay: e = 0,
        repeatType: f = "loop",
        keyframes: g,
        name: h,
        motionValue: i,
        element: j,
        ...k
      }) {
        (super(),
          (this.stop = () => {
            (this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel());
          }),
          (this.createdAt = ik.now()));
        const l = {
            autoplay: a,
            delay: b,
            type: c,
            repeat: d,
            repeatDelay: e,
            repeatType: f,
            name: h,
            motionValue: i,
            element: j,
            ...k,
          },
          m = j?.KeyframeResolver || ia;
        ((this.keyframeResolver = new m(g, (a, b, c) => this.onKeyframesResolved(a, b, l, !c), h, i, j)),
          this.keyframeResolver?.scheduleResolve());
      }
      onKeyframesResolved(a, b, c, d) {
        this.keyframeResolver = void 0;
        let { name: e, type: f, velocity: g, delay: h, isHandoff: i, onUpdate: j } = c;
        ((this.resolvedAt = ik.now()),
          !(function (a, b, c, d) {
            let e = a[0];
            if (null === e) return !1;
            if ("display" === b || "visibility" === b) return !0;
            let f = a[a.length - 1],
              g = kG(e, b),
              h = kG(f, b);
            return (
              hB(
                g === h,
                `You are trying to animate ${b} from "${e}" to "${f}". "${g ? f : e}" is not an animatable value.`,
                "value-not-animatable",
              ),
              !!g &&
                !!h &&
                ((function (a) {
                  let b = a[0];
                  if (1 === a.length) return !0;
                  for (let c = 0; c < a.length; c++) if (a[c] !== b) return !0;
                })(a) ||
                  (("spring" === c || kC(c)) && d))
            );
          })(a, e, f, g) &&
            ((hZ.instantAnimations || !h) && j?.(kq(a, c, b)), (a[0] = a[a.length - 1]), kH(c), (c.repeat = 0)));
        let k = {
            startTime: d
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : void 0,
            finalKeyframe: b,
            ...c,
            keyframes: a,
          },
          l =
            !i &&
            (function (a) {
              let { motionValue: b, name: c, repeatDelay: d, repeatType: e, damping: f, type: g } = a;
              if (!(b?.owner?.current instanceof HTMLElement)) return !1;
              let { onUpdate: h, transformTemplate: i } = b.owner.getProps();
              return (
                kJ() &&
                c &&
                kI.has(c) &&
                ("transform" !== c || !i) &&
                !h &&
                !d &&
                "mirror" !== e &&
                0 !== f &&
                "inertia" !== g
              );
            })(k),
          m = k.motionValue?.owner?.current,
          n = l ? new kF({ ...k, element: m }) : new kv(k);
        (n.finished
          .then(() => {
            this.notifyFinished();
          })
          .catch(hY),
          this.pendingTimeline &&
            ((this.stopTimeline = n.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)),
          (this._animation = n));
      }
      get finished() {
        return this._animation ? this.animation.finished : this._finished;
      }
      then(a, b) {
        return this.finished.finally(a).then(() => {});
      }
      get animation() {
        return (
          this._animation || (this.keyframeResolver?.resume(), (h7 = !0), h9(), h8(), (h7 = !1)),
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
      set time(a) {
        this.animation.time = a;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(a) {
        this.animation.speed = a;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(a) {
        return (
          this._animation ? (this.stopTimeline = this.animation.attachTimeline(a)) : (this.pendingTimeline = a),
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
    let kL = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      kM = { type: "keyframes", duration: 0.8 },
      kN = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      kO = (a) => null !== a,
      kP =
        (a, b, c, d = {}, e, f) =>
        (g) => {
          let h = jA(d, a) || {},
            i = h.delay || d.delay || 0,
            { elapsed: j = 0 } = d;
          j -= jD(i);
          let k = {
            keyframes: Array.isArray(c) ? c : [null, c],
            ease: "easeOut",
            velocity: b.getVelocity(),
            ...h,
            delay: -j,
            onUpdate: (a) => {
              (b.set(a), h.onUpdate && h.onUpdate(a));
            },
            onComplete: () => {
              (g(), h.onComplete && h.onComplete());
            },
            name: a,
            motionValue: b,
            element: f ? void 0 : e,
          };
          (!(function ({
            when: a,
            delay: b,
            delayChildren: c,
            staggerChildren: d,
            staggerDirection: e,
            repeat: f,
            repeatType: g,
            repeatDelay: h,
            from: i,
            elapsed: j,
            ...k
          }) {
            return !!Object.keys(k).length;
          })(h) &&
            Object.assign(
              k,
              ((a, { keyframes: b }) =>
                b.length > 2
                  ? kM
                  : gR.has(a)
                    ? a.startsWith("scale")
                      ? { type: "spring", stiffness: 550, damping: 0 === b[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }
                      : kL
                    : kN)(a, k),
            ),
            k.duration && (k.duration = jD(k.duration)),
            k.repeatDelay && (k.repeatDelay = jD(k.repeatDelay)),
            void 0 !== k.from && (k.keyframes[0] = k.from));
          let l = !1;
          if (
            ((!1 !== k.type && (0 !== k.duration || k.repeatDelay)) || (kH(k), 0 === k.delay && (l = !0)),
            (hZ.instantAnimations || hZ.skipAnimations || e?.shouldSkipAnimations) && ((l = !0), kH(k), (k.delay = 0)),
            (k.allowFlatten = !h.type && !h.ease),
            l && !f && void 0 !== b.get())
          ) {
            let a = (function (a, { repeat: b, repeatType: c = "loop" }, d) {
              let e = a.filter(kO),
                f = b && "loop" !== c && b % 2 == 1 ? 0 : e.length - 1;
              return e[f];
            })(k.keyframes, h);
            if (void 0 !== a)
              return void h0.update(() => {
                (k.onUpdate(a), k.onComplete());
              });
          }
          return h.isSync ? new kv(k) : new kK(k);
        };
    function kQ(a, b, { delay: c = 0, transitionOverride: d, type: e } = {}) {
      let { transition: f = a.getDefaultTransition(), transitionEnd: g, ...h } = b,
        i = f?.reduceMotion;
      d && (f = d);
      let j = [],
        k = e && a.animationState && a.animationState.getState()[e];
      for (let b in h) {
        let d = a.getValue(b, a.latestValues[b] ?? null),
          e = h[b];
        if (
          void 0 === e ||
          (k &&
            (function ({ protectedKeys: a, needsAnimating: b }, c) {
              let d = a.hasOwnProperty(c) && !0 !== b[c];
              return ((b[c] = !1), d);
            })(k, b))
        )
          continue;
        let g = { delay: c, ...jA(f || {}, b) },
          l = d.get();
        if (void 0 !== l && !d.isAnimating && !Array.isArray(e) && e === l && !g.velocity) continue;
        let m = !1;
        if (window.MotionHandoffAnimation) {
          let c = a.props[jt];
          if (c) {
            let a = window.MotionHandoffAnimation(c, b, h0);
            null !== a && ((g.startTime = a), (m = !0));
          }
        }
        jC(a, b);
        let n = i ?? a.shouldReduceMotion;
        d.start(kP(b, d, e, n && hx.has(b) ? { type: !1 } : g, a, m));
        let o = d.animation;
        o && j.push(o);
      }
      return (
        g &&
          Promise.all(j).then(() => {
            h0.update(() => {
              g &&
                (function (a, b) {
                  let { transitionEnd: c = {}, transition: d = {}, ...e } = jz(a, b) || {};
                  for (let b in (e = { ...e, ...c })) {
                    var f;
                    let c = jB((f = e[b])) ? f[f.length - 1] || 0 : f;
                    a.hasValue(b) ? a.getValue(b).set(c) : a.addValue(b, im(c));
                  }
                })(a, g);
            });
          }),
        j
      );
    }
    function kR(a, b, c, d = 0, e = 1) {
      let f = Array.from(a)
          .sort((a, b) => a.sortNodePosition(b))
          .indexOf(b),
        g = a.size,
        h = (g - 1) * d;
      return "function" == typeof c ? c(f, g) : 1 === e ? f * d : h - f * d;
    }
    function kS(a, b, c = {}) {
      let d = jz(a, b, "exit" === c.type ? a.presenceContext?.custom : void 0),
        { transition: e = a.getDefaultTransition() || {} } = d || {};
      c.transitionOverride && (e = c.transitionOverride);
      let f = d ? () => Promise.all(kQ(a, d, c)) : () => Promise.resolve(),
        g =
          a.variantChildren && a.variantChildren.size
            ? (d = 0) => {
                let { delayChildren: f = 0, staggerChildren: g, staggerDirection: h } = e;
                return (function (a, b, c = 0, d = 0, e = 0, f = 1, g) {
                  let h = [];
                  for (let i of a.variantChildren)
                    (i.notify("AnimationStart", b),
                      h.push(
                        kS(i, b, {
                          ...g,
                          delay: c + ("function" == typeof d ? 0 : d) + kR(a.variantChildren, i, d, e, f),
                        }).then(() => i.notify("AnimationComplete", b)),
                      ));
                  return Promise.all(h);
                })(a, b, d, f, g, h, c);
              }
            : () => Promise.resolve(),
        { when: h } = e;
      if (!h) return Promise.all([f(), g(c.delay)]);
      {
        let [a, b] = "beforeChildren" === h ? [f, g] : [g, f];
        return a().then(() => b());
      }
    }
    let kT = iu.length;
    function kU(a, b) {
      if (!Array.isArray(b)) return !1;
      let c = b.length;
      if (c !== a.length) return !1;
      for (let d = 0; d < c; d++) if (b[d] !== a[d]) return !1;
      return !0;
    }
    let kV = [...it].reverse(),
      kW = it.length;
    function kX(a = !1) {
      return { isActive: a, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
    }
    function kY() {
      return {
        animate: kX(!0),
        whileInView: kX(),
        whileHover: kX(),
        whileTap: kX(),
        whileDrag: kX(),
        whileFocus: kX(),
        exit: kX(),
      };
    }
    let kZ = 0;
    function k$(a) {
      return [a("x"), a("y")];
    }
    let k_ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
    function k0(a) {
      return k_.has(a.tagName) || !0 === a.isContentEditable;
    }
    function k1(a, b, c, d = { passive: !0 }) {
      return (a.addEventListener(b, c, d), () => a.removeEventListener(b, c));
    }
    let k2 = { x: !1, y: !1 };
    function k3(a) {
      return a.max - a.min;
    }
    function k4(a, b, c, d = 0.5) {
      ((a.origin = d),
        (a.originPoint = iR(b.min, b.max, a.origin)),
        (a.scale = k3(c) / k3(b)),
        (a.translate = iR(c.min, c.max, a.origin) - a.originPoint),
        ((a.scale >= 0.9999 && a.scale <= 1.0001) || isNaN(a.scale)) && (a.scale = 1),
        ((a.translate >= -0.01 && a.translate <= 0.01) || isNaN(a.translate)) && (a.translate = 0));
    }
    function k5(a, b, c, d) {
      (k4(a.x, b.x, c.x, d ? d.originX : void 0), k4(a.y, b.y, c.y, d ? d.originY : void 0));
    }
    function k6(a, b, c) {
      ((a.min = c.min + b.min), (a.max = a.min + k3(b)));
    }
    function k7(a, b, c) {
      ((a.min = b.min - c.min), (a.max = a.min + k3(b)));
    }
    function k8(a, b, c) {
      (k7(a.x, b.x, c.x), k7(a.y, b.y, c.y));
    }
    let k9 = (a) => ("mouse" === a.pointerType ? "number" != typeof a.button || a.button <= 0 : !1 !== a.isPrimary);
    function la(a) {
      return { point: { x: a.pageX, y: a.pageY } };
    }
    function lb(a, b, c, d) {
      return k1(a, b, (a) => k9(a) && c(a, la(a)), d);
    }
    let lc = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
      ld = (a, b) => Math.abs(a - b),
      le = new Set(["auto", "scroll"]);
    class lf {
      constructor(
        a,
        b,
        {
          transformPagePoint: c,
          contextWindow: d = window,
          dragSnapToOrigin: e = !1,
          distanceThreshold: f = 3,
          element: g,
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
          (this.onElementScroll = (a) => {
            this.handleScroll(a.target);
          }),
          (this.onWindowScroll = () => {
            this.handleScroll(window);
          }),
          (this.updatePoint = () => {
            var a, b;
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            let c = li(this.lastMoveEventInfo, this.history),
              d = null !== this.startEvent,
              e =
                ((a = c.offset),
                (b = { x: 0, y: 0 }),
                Math.sqrt(ld(a.x, b.x) ** 2 + ld(a.y, b.y) ** 2) >= this.distanceThreshold);
            if (!d && !e) return;
            let { point: f } = c,
              { timestamp: g } = h2;
            this.history.push({ ...f, timestamp: g });
            let { onStart: h, onMove: i } = this.handlers;
            (d || (h && h(this.lastMoveEvent, c), (this.startEvent = this.lastMoveEvent)),
              i && i(this.lastMoveEvent, c));
          }),
          (this.handlePointerMove = (a, b) => {
            ((this.lastMoveEvent = a),
              (this.lastMoveEventInfo = lg(b, this.transformPagePoint)),
              h0.update(this.updatePoint, !0));
          }),
          (this.handlePointerUp = (a, b) => {
            this.end();
            let { onEnd: c, onSessionEnd: d, resumeAnimation: e } = this.handlers;
            if (
              ((this.dragSnapToOrigin || !this.startEvent) && e && e(), !(this.lastMoveEvent && this.lastMoveEventInfo))
            )
              return;
            let f = li(
              "pointercancel" === a.type ? this.lastMoveEventInfo : lg(b, this.transformPagePoint),
              this.history,
            );
            (this.startEvent && c && c(a, f), d && d(a, f));
          }),
          !k9(a))
        )
          return;
        ((this.dragSnapToOrigin = e),
          (this.handlers = b),
          (this.transformPagePoint = c),
          (this.distanceThreshold = f),
          (this.contextWindow = d || window));
        const h = lg(la(a), this.transformPagePoint),
          { point: i } = h,
          { timestamp: j } = h2;
        this.history = [{ ...i, timestamp: j }];
        const { onSessionStart: k } = b;
        (k && k(a, li(h, this.history)),
          (this.removeListeners = jF(
            lb(this.contextWindow, "pointermove", this.handlePointerMove),
            lb(this.contextWindow, "pointerup", this.handlePointerUp),
            lb(this.contextWindow, "pointercancel", this.handlePointerUp),
          )),
          g && this.startScrollTracking(g));
      }
      startScrollTracking(a) {
        let b = a.parentElement;
        for (; b; ) {
          let a = getComputedStyle(b);
          ((le.has(a.overflowX) || le.has(a.overflowY)) &&
            this.scrollPositions.set(b, { x: b.scrollLeft, y: b.scrollTop }),
            (b = b.parentElement));
        }
        (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
          window.addEventListener("scroll", this.onElementScroll, { capture: !0, passive: !0 }),
          window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
          (this.removeScrollListeners = () => {
            (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
              window.removeEventListener("scroll", this.onWindowScroll));
          }));
      }
      handleScroll(a) {
        let b = this.scrollPositions.get(a);
        if (!b) return;
        let c = a === window,
          d = c ? { x: window.scrollX, y: window.scrollY } : { x: a.scrollLeft, y: a.scrollTop },
          e = { x: d.x - b.x, y: d.y - b.y };
        (0 !== e.x || 0 !== e.y) &&
          (c
            ? this.lastMoveEventInfo &&
              ((this.lastMoveEventInfo.point.x += e.x), (this.lastMoveEventInfo.point.y += e.y))
            : this.history.length > 0 && ((this.history[0].x -= e.x), (this.history[0].y -= e.y)),
          this.scrollPositions.set(a, d),
          h0.update(this.updatePoint, !0));
      }
      updateHandlers(a) {
        this.handlers = a;
      }
      end() {
        (this.removeListeners && this.removeListeners(),
          this.removeScrollListeners && this.removeScrollListeners(),
          this.scrollPositions.clear(),
          h1(this.updatePoint));
      }
    }
    function lg(a, b) {
      return b ? { point: b(a.point) } : a;
    }
    function lh(a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }
    function li({ point: a }, b) {
      return {
        point: a,
        delta: lh(a, lj(b)),
        offset: lh(a, b[0]),
        velocity: (function (a, b) {
          if (a.length < 2) return { x: 0, y: 0 };
          let c = a.length - 1,
            d = null,
            e = lj(a);
          for (; c >= 0 && ((d = a[c]), !(e.timestamp - d.timestamp > jD(0.1))); ) c--;
          if (!d) return { x: 0, y: 0 };
          let f = (e.timestamp - d.timestamp) / 1e3;
          if (0 === f) return { x: 0, y: 0 };
          let g = { x: (e.x - d.x) / f, y: (e.y - d.y) / f };
          return (g.x === 1 / 0 && (g.x = 0), g.y === 1 / 0 && (g.y = 0), g);
        })(b, 0.1),
      };
    }
    function lj(a) {
      return a[a.length - 1];
    }
    function lk(a, b, c) {
      return { min: void 0 !== b ? a.min + b : void 0, max: void 0 !== c ? a.max + c - (a.max - a.min) : void 0 };
    }
    function ll(a, b) {
      let c = b.min - a.min,
        d = b.max - a.max;
      return (b.max - b.min < a.max - a.min && ([c, d] = [d, c]), { min: c, max: d });
    }
    function lm(a, b, c) {
      return { min: ln(a, b), max: ln(a, c) };
    }
    function ln(a, b) {
      return "number" == typeof a ? a : a[b] || 0;
    }
    let lo = new WeakMap();
    class lp {
      constructor(a) {
        ((this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = hv()),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = a));
      }
      start(a, { snapToCursor: b = !1, distanceThreshold: c } = {}) {
        let { presenceContext: d } = this.visualElement;
        if (d && !1 === d.isPresent) return;
        let e = (a) => {
            b ? (this.stopAnimation(), this.snapToCursor(la(a).point)) : this.pauseAnimation();
          },
          f = (a, b) => {
            this.stopAnimation();
            let { drag: c, dragPropagation: d, onDragStart: e } = this.getProps();
            if (
              c &&
              !d &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (function (a) {
                if ("x" === a || "y" === a)
                  if (k2[a]) return null;
                  else
                    return (
                      (k2[a] = !0),
                      () => {
                        k2[a] = !1;
                      }
                    );
                return k2.x || k2.y
                  ? null
                  : ((k2.x = k2.y = !0),
                    () => {
                      k2.x = k2.y = !1;
                    });
              })(c)),
              !this.openDragLock)
            )
              return;
            ((this.latestPointerEvent = a),
              (this.latestPanInfo = b),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              k$((a) => {
                let b = this.getAxisMotionValue(a).get() || 0;
                if (g4.test(b)) {
                  let { projection: c } = this.visualElement;
                  if (c && c.layout) {
                    let d = c.layout.layoutBox[a];
                    d && (b = k3(d) * (parseFloat(b) / 100));
                  }
                }
                this.originPoint[a] = b;
              }),
              e && h0.postRender(() => e(a, b)),
              jC(this.visualElement, "transform"));
            let { animationState: f } = this.visualElement;
            f && f.setActive("whileDrag", !0);
          },
          g = (a, b) => {
            ((this.latestPointerEvent = a), (this.latestPanInfo = b));
            let { dragPropagation: c, dragDirectionLock: d, onDirectionLock: e, onDrag: f } = this.getProps();
            if (!c && !this.openDragLock) return;
            let { offset: g } = b;
            if (d && null === this.currentDirection) {
              ((this.currentDirection = (function (a, b = 10) {
                let c = null;
                return (Math.abs(a.y) > b ? (c = "y") : Math.abs(a.x) > b && (c = "x"), c);
              })(g)),
                null !== this.currentDirection && e && e(this.currentDirection));
              return;
            }
            (this.updateAxis("x", b.point, g),
              this.updateAxis("y", b.point, g),
              this.visualElement.render(),
              f && f(a, b));
          },
          h = (a, b) => {
            ((this.latestPointerEvent = a),
              (this.latestPanInfo = b),
              this.stop(a, b),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null));
          },
          i = () => k$((a) => "paused" === this.getAnimationState(a) && this.getAxisMotionValue(a).animation?.play()),
          { dragSnapToOrigin: j } = this.getProps();
        this.panSession = new lf(
          a,
          { onSessionStart: e, onStart: f, onMove: g, onSessionEnd: h, resumeAnimation: i },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: j,
            distanceThreshold: c,
            contextWindow: lc(this.visualElement),
            element: this.visualElement.current,
          },
        );
      }
      stop(a, b) {
        let c = a || this.latestPointerEvent,
          d = b || this.latestPanInfo,
          e = this.isDragging;
        if ((this.cancel(), !e || !d || !c)) return;
        let { velocity: f } = d;
        this.startAnimation(f);
        let { onDragEnd: g } = this.getProps();
        g && h0.postRender(() => g(c, d));
      }
      cancel() {
        this.isDragging = !1;
        let { projection: a, animationState: b } = this.visualElement;
        (a && (a.isAnimationBlocked = !1), this.endPanSession());
        let { dragPropagation: c } = this.getProps();
        (!c && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
          b && b.setActive("whileDrag", !1));
      }
      endPanSession() {
        (this.panSession && this.panSession.end(), (this.panSession = void 0));
      }
      updateAxis(a, b, c) {
        let { drag: d } = this.getProps();
        if (!c || !lq(a, d, this.currentDirection)) return;
        let e = this.getAxisMotionValue(a),
          f = this.originPoint[a] + c[a];
        (this.constraints &&
          this.constraints[a] &&
          (f = (function (a, { min: b, max: c }, d) {
            return (
              void 0 !== b && a < b
                ? (a = d ? iR(b, a, d.min) : Math.max(a, b))
                : void 0 !== c && a > c && (a = d ? iR(c, a, d.max) : Math.min(a, c)),
              a
            );
          })(f, this.constraints[a], this.elastic[a])),
          e.set(f));
      }
      resolveConstraints() {
        let { dragConstraints: a, dragElastic: b } = this.getProps(),
          c =
            this.visualElement.projection && !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : this.visualElement.projection?.layout,
          d = this.constraints;
        (a && jv(a)
          ? this.constraints || (this.constraints = this.resolveRefConstraints())
          : a && c
            ? (this.constraints = (function (a, { top: b, left: c, bottom: d, right: e }) {
                return { x: lk(a.x, c, e), y: lk(a.y, b, d) };
              })(c.layoutBox, a))
            : (this.constraints = !1),
          (this.elastic = (function (a = 0.35) {
            return (
              !1 === a ? (a = 0) : !0 === a && (a = 0.35),
              { x: lm(a, "left", "right"), y: lm(a, "top", "bottom") }
            );
          })(b)),
          d !== this.constraints &&
            c &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            k$((a) => {
              var b, d;
              let e;
              !1 !== this.constraints &&
                this.getAxisMotionValue(a) &&
                (this.constraints[a] =
                  ((b = c.layoutBox[a]),
                  (d = this.constraints[a]),
                  (e = {}),
                  void 0 !== d.min && (e.min = d.min - b.min),
                  void 0 !== d.max && (e.max = d.max - b.min),
                  e));
            }));
      }
      resolveRefConstraints() {
        var a;
        let { dragConstraints: b, onMeasureDragConstraints: c } = this.getProps();
        if (!b || !jv(b)) return !1;
        let d = b.current;
        hC(
          null !== d,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          "drag-constraints-ref",
        );
        let { projection: e } = this.visualElement;
        if (!e || !e.layout) return !1;
        let f = (function (a, b, c) {
            let d = i6(a, c),
              { scroll: e } = b;
            return (e && (i3(d.x, e.offset.x), i3(d.y, e.offset.y)), d);
          })(d, e.root, this.visualElement.getTransformPagePoint()),
          g = ((a = e.layout.layoutBox), { x: ll(a.x, f.x), y: ll(a.y, f.y) });
        if (c) {
          let a = c(
            (function ({ x: a, y: b }) {
              return { top: b.min, right: a.max, bottom: b.max, left: a.min };
            })(g),
          );
          ((this.hasMutatedConstraints = !!a), a && (g = iX(a)));
        }
        return g;
      }
      startAnimation(a) {
        let {
            drag: b,
            dragMomentum: c,
            dragElastic: d,
            dragTransition: e,
            dragSnapToOrigin: f,
            onDragTransitionEnd: g,
          } = this.getProps(),
          h = this.constraints || {};
        return Promise.all(
          k$((g) => {
            if (!lq(g, b, this.currentDirection)) return;
            let i = (h && h[g]) || {};
            f && (i = { min: 0, max: 0 });
            let j = {
              type: "inertia",
              velocity: c ? a[g] : 0,
              bounceStiffness: d ? 200 : 1e6,
              bounceDamping: d ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...e,
              ...i,
            };
            return this.startAxisValueAnimation(g, j);
          }),
        ).then(g);
      }
      startAxisValueAnimation(a, b) {
        let c = this.getAxisMotionValue(a);
        return (jC(this.visualElement, a), c.start(kP(a, c, 0, b, this.visualElement, !1)));
      }
      stopAnimation() {
        k$((a) => this.getAxisMotionValue(a).stop());
      }
      pauseAnimation() {
        k$((a) => this.getAxisMotionValue(a).animation?.pause());
      }
      getAnimationState(a) {
        return this.getAxisMotionValue(a).animation?.state;
      }
      getAxisMotionValue(a) {
        let b = `_drag${a.toUpperCase()}`,
          c = this.visualElement.getProps();
        return c[b] || this.visualElement.getValue(a, (c.initial ? c.initial[a] : void 0) || 0);
      }
      snapToCursor(a) {
        k$((b) => {
          let { drag: c } = this.getProps();
          if (!lq(b, c, this.currentDirection)) return;
          let { projection: d } = this.visualElement,
            e = this.getAxisMotionValue(b);
          if (d && d.layout) {
            let { min: c, max: f } = d.layout.layoutBox[b],
              g = e.get() || 0;
            e.set(a[b] - iR(c, f, 0.5) + g);
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let { drag: a, dragConstraints: b } = this.getProps(),
          { projection: c } = this.visualElement;
        if (!jv(b) || !c || !this.constraints) return;
        this.stopAnimation();
        let d = { x: 0, y: 0 };
        k$((a) => {
          let b = this.getAxisMotionValue(a);
          if (b && !1 !== this.constraints) {
            var c, e;
            let f,
              g,
              h,
              i = b.get();
            d[a] =
              ((c = { min: i, max: i }),
              (e = this.constraints[a]),
              (f = 0.5),
              (g = k3(c)),
              (h = k3(e)) > g ? (f = kn(e.min, e.max - g, c.min)) : g > h && (f = kn(c.min, c.max - h, e.min)),
              gS(0, 1, f));
          }
        });
        let { transformTemplate: e } = this.visualElement.getProps();
        ((this.visualElement.current.style.transform = e ? e({}, "") : "none"),
          c.root && c.root.updateScroll(),
          c.updateLayout(),
          this.resolveConstraints(),
          k$((b) => {
            if (!lq(b, a, null)) return;
            let c = this.getAxisMotionValue(b),
              { min: e, max: f } = this.constraints[b];
            c.set(iR(e, f, d[b]));
          }));
      }
      addListeners() {
        if (!this.visualElement.current) return;
        lo.set(this.visualElement, this);
        let a = this.visualElement.current,
          b = lb(a, "pointerdown", (b) => {
            let { drag: c, dragListener: d = !0 } = this.getProps(),
              e = b.target,
              f = e !== a && k0(e);
            c && d && !f && this.start(b);
          }),
          c = () => {
            let { dragConstraints: a } = this.getProps();
            jv(a) && a.current && (this.constraints = this.resolveRefConstraints());
          },
          { projection: d } = this.visualElement,
          e = d.addEventListener("measure", c);
        (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), h0.read(c));
        let f = k1(window, "resize", () => this.scalePositionWithinConstraints()),
          g = d.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: b }) => {
            this.isDragging &&
              b &&
              (k$((b) => {
                let c = this.getAxisMotionValue(b);
                c && ((this.originPoint[b] += a[b].translate), c.set(c.get() + a[b].translate));
              }),
              this.visualElement.render());
          });
        return () => {
          (f(), b(), e(), g && g());
        };
      }
      getProps() {
        let a = this.visualElement.getProps(),
          {
            drag: b = !1,
            dragDirectionLock: c = !1,
            dragPropagation: d = !1,
            dragConstraints: e = !1,
            dragElastic: f = 0.35,
            dragMomentum: g = !0,
          } = a;
        return {
          ...a,
          drag: b,
          dragDirectionLock: c,
          dragPropagation: d,
          dragConstraints: e,
          dragElastic: f,
          dragMomentum: g,
        };
      }
    }
    function lq(a, b, c) {
      return (!0 === b || b === a) && (null === c || c === a);
    }
    let lr = (a) => (b, c) => {
        a && h0.postRender(() => a(b, c));
      },
      ls = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    var lt = a3;
    function lu(a = !0) {
      let b = (0, a3.useContext)(jl);
      if (null === b) return [!0, null];
      let { isPresent: c, onExitComplete: d, register: e } = b,
        f = (0, a3.useId)();
      (0, a3.useEffect)(() => {
        if (a) return e(f);
      }, [a]);
      let g = (0, a3.useCallback)(() => a && d && d(f), [f, d, a]);
      return !c && d ? [!1, g] : [!0];
    }
    let lv = !1;
    class lw extends lt.Component {
      componentDidMount() {
        let { visualElement: a, layoutGroup: b, switchLayoutGroup: c, layoutId: d } = this.props,
          { projection: e } = a;
        (e &&
          (b.group && b.group.add(e),
          c && c.register && d && c.register(e),
          lv && e.root.didUpdate(),
          e.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          e.setOptions({
            ...e.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove(),
          })),
          (ls.hasEverUpdated = !0));
      }
      getSnapshotBeforeUpdate(a) {
        let { layoutDependency: b, visualElement: c, drag: d, isPresent: e } = this.props,
          { projection: f } = c;
        return (
          f &&
            ((f.isPresent = e),
            a.layoutDependency !== b && f.setOptions({ ...f.options, layoutDependency: b }),
            (lv = !0),
            d || a.layoutDependency !== b || void 0 === b || a.isPresent !== e ? f.willUpdate() : this.safeToRemove(),
            a.isPresent !== e &&
              (e
                ? f.promote()
                : f.relegate() ||
                  h0.postRender(() => {
                    let a = f.getStack();
                    (a && a.members.length) || this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        let { projection: a } = this.props.visualElement;
        a &&
          (a.root.didUpdate(),
          ii.postRender(() => {
            !a.currentAnimation && a.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        let { visualElement: a, layoutGroup: b, switchLayoutGroup: c } = this.props,
          { projection: d } = a;
        ((lv = !0),
          d &&
            (d.scheduleCheckAfterUnmount(), b && b.group && b.group.remove(d), c && c.deregister && c.deregister(d)));
      }
      safeToRemove() {
        let { safeToRemove: a } = this.props;
        a && a();
      }
      render() {
        return null;
      }
    }
    function lx(a) {
      let [b, c] = lu(),
        d = (0, lt.useContext)(ja);
      return (0, a1.jsx)(lw, {
        ...a,
        layoutGroup: d,
        switchLayoutGroup: (0, lt.useContext)(ju),
        isPresent: b,
        safeToRemove: c,
      });
    }
    function ly(a) {
      return "object" == typeof a && null !== a;
    }
    function lz(a) {
      return ly(a) && "ownerSVGElement" in a;
    }
    let lA = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      lB = lA.length,
      lC = (a) => ("string" == typeof a ? parseFloat(a) : a),
      lD = (a) => "number" == typeof a || g5.test(a);
    function lE(a, b) {
      return void 0 !== a[b] ? a[b] : a.borderRadius;
    }
    let lF = lH(0, 0.5, ki),
      lG = lH(0.5, 0.95, hY);
    function lH(a, b, c) {
      return (d) => (d < a ? 0 : d > b ? 1 : c(kn(a, b, d)));
    }
    function lI(a, b) {
      ((a.min = b.min), (a.max = b.max));
    }
    function lJ(a, b) {
      (lI(a.x, b.x), lI(a.y, b.y));
    }
    function lK(a, b) {
      ((a.translate = b.translate), (a.scale = b.scale), (a.originPoint = b.originPoint), (a.origin = b.origin));
    }
    function lL(a, b, c, d, e) {
      return ((a -= b), (a = d + (1 / c) * (a - d)), void 0 !== e && (a = d + (1 / e) * (a - d)), a);
    }
    function lM(a, b, [c, d, e], f, g) {
      !(function (a, b = 0, c = 1, d = 0.5, e, f = a, g = a) {
        if ((g4.test(b) && ((b = parseFloat(b)), (b = iR(g.min, g.max, b / 100) - g.min)), "number" != typeof b))
          return;
        let h = iR(f.min, f.max, d);
        (a === f && (h -= b), (a.min = lL(a.min, b, c, h, e)), (a.max = lL(a.max, b, c, h, e)));
      })(a, b[c], b[d], b[e], b.scale, f, g);
    }
    let lN = ["x", "scaleX", "originX"],
      lO = ["y", "scaleY", "originY"];
    function lP(a, b, c, d) {
      (lM(a.x, b, lN, c ? c.x : void 0, d ? d.x : void 0), lM(a.y, b, lO, c ? c.y : void 0, d ? d.y : void 0));
    }
    function lQ(a) {
      return 0 === a.translate && 1 === a.scale;
    }
    function lR(a) {
      return lQ(a.x) && lQ(a.y);
    }
    function lS(a, b) {
      return a.min === b.min && a.max === b.max;
    }
    function lT(a, b) {
      return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
    }
    function lU(a, b) {
      return lT(a.x, b.x) && lT(a.y, b.y);
    }
    function lV(a) {
      return k3(a.x) / k3(a.y);
    }
    function lW(a, b) {
      return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
    }
    class lX {
      constructor() {
        this.members = [];
      }
      add(a) {
        (ie(this.members, a), a.scheduleRender());
      }
      remove(a) {
        if ((ig(this.members, a), a === this.prevLead && (this.prevLead = void 0), a === this.lead)) {
          let a = this.members[this.members.length - 1];
          a && this.promote(a);
        }
      }
      relegate(a) {
        let b,
          c = this.members.findIndex((b) => a === b);
        if (0 === c) return !1;
        for (let a = c; a >= 0; a--) {
          let c = this.members[a];
          if (!1 !== c.isPresent) {
            b = c;
            break;
          }
        }
        return !!b && (this.promote(b), !0);
      }
      promote(a, b) {
        let c = this.lead;
        if (a !== c && ((this.prevLead = c), (this.lead = a), a.show(), c)) {
          (c.instance && c.scheduleRender(), a.scheduleRender());
          let d = c.options.layoutDependency,
            e = a.options.layoutDependency;
          (void 0 === d || void 0 === e || d !== e) &&
            ((a.resumeFrom = c),
            b && (a.resumeFrom.preserveOpacity = !0),
            c.snapshot && ((a.snapshot = c.snapshot), (a.snapshot.latestValues = c.animationValues || c.latestValues)),
            a.root && a.root.isUpdating && (a.isLayoutDirty = !0));
          let { crossfade: f } = a.options;
          !1 === f && c.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((a) => {
          let { options: b, resumingFrom: c } = a;
          (b.onExitComplete && b.onExitComplete(), c && c.options.onExitComplete && c.options.onExitComplete());
        });
      }
      scheduleRender() {
        this.members.forEach((a) => {
          a.instance && a.scheduleRender(!1);
        });
      }
      removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }
    }
    let lY = (a, b) => a.depth - b.depth;
    class lZ {
      constructor() {
        ((this.children = []), (this.isDirty = !1));
      }
      add(a) {
        (ie(this.children, a), (this.isDirty = !0));
      }
      remove(a) {
        (ig(this.children, a), (this.isDirty = !0));
      }
      forEach(a) {
        (this.isDirty && this.children.sort(lY), (this.isDirty = !1), this.children.forEach(a));
      }
    }
    let l$ = ["", "X", "Y", "Z"],
      l_ = 0;
    function l0(a, b, c, d) {
      let { latestValues: e } = b;
      e[a] && ((c[a] = e[a]), b.setStaticValue(a, 0), d && (d[a] = 0));
    }
    function l1({
      attachResizeListener: a,
      defaultParent: b,
      measureScroll: c,
      checkIsScrollRoot: d,
      resetTransform: e,
    }) {
      return class {
        constructor(a = {}, c = b?.()) {
          ((this.id = l_++),
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
                this.nodes.forEach(l4),
                this.nodes.forEach(mb),
                this.nodes.forEach(mc),
                this.nodes.forEach(l5));
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.linkedParentVersion = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = a),
            (this.root = c ? c.root || c : this),
            (this.path = c ? [...c.path, c] : []),
            (this.parent = c),
            (this.depth = c ? c.depth + 1 : 0));
          for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
          this.root === this && (this.nodes = new lZ());
        }
        addEventListener(a, b) {
          return (this.eventHandlers.has(a) || this.eventHandlers.set(a, new ih()), this.eventHandlers.get(a).add(b));
        }
        notifyListeners(a, ...b) {
          let c = this.eventHandlers.get(a);
          c && c.notify(...b);
        }
        hasListeners(a) {
          return this.eventHandlers.has(a);
        }
        mount(b) {
          if (this.instance) return;
          ((this.isSVG = lz(b) && !(lz(b) && "svg" === b.tagName)), (this.instance = b));
          let { layoutId: c, layout: d, visualElement: e } = this.options;
          if (
            (e && !e.current && e.mount(b),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (d || c) && (this.isLayoutDirty = !0),
            a)
          ) {
            let c,
              d = 0,
              e = () => (this.root.updateBlockedByResize = !1);
            (h0.read(() => {
              d = window.innerWidth;
            }),
              a(b, () => {
                let a = window.innerWidth;
                if (a !== d) {
                  let b, f;
                  ((d = a),
                    (this.root.updateBlockedByResize = !0),
                    c && c(),
                    (b = ik.now()),
                    (f = ({ timestamp: a }) => {
                      let c = a - b;
                      c >= 250 && (h1(f), e(c - 250));
                    }),
                    h0.setup(f, !0),
                    (c = () => h1(f)),
                    ls.hasAnimatedSinceResize && ((ls.hasAnimatedSinceResize = !1), this.nodes.forEach(ma)));
                }
              }));
          }
          (c && this.root.registerSharedNode(c, this),
            !1 !== this.options.animate &&
              e &&
              (c || d) &&
              this.addEventListener(
                "didUpdate",
                ({ delta: a, hasLayoutChanged: b, hasRelativeLayoutChanged: c, layout: d }) => {
                  if (this.isTreeAnimationBlocked()) {
                    ((this.target = void 0), (this.relativeTarget = void 0));
                    return;
                  }
                  let f = this.options.transition || e.getDefaultTransition() || mi,
                    { onLayoutAnimationStart: g, onLayoutAnimationComplete: h } = e.getProps(),
                    i = !this.targetLayout || !lU(this.targetLayout, d),
                    j = !b && c;
                  if (this.options.layoutRoot || this.resumeFrom || j || (b && (i || !this.currentAnimation))) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0));
                    let b = { ...jA(f, "layout"), onPlay: g, onComplete: h };
                    ((e.shouldReduceMotion || this.options.layoutRoot) && ((b.delay = 0), (b.type = !1)),
                      this.startAnimation(b),
                      this.setAnimationOrigin(a, j));
                  } else (b || ma(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
                  this.targetLayout = d;
                },
              ));
        }
        unmount() {
          (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
          let a = this.getStack();
          (a && a.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            h1(this.updateProjection));
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
          !this.isUpdateBlocked() && ((this.isUpdating = !0), this.nodes && this.nodes.forEach(md), this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: a } = this.options;
          return a && a.getProps().transformTemplate;
        }
        willUpdate(a = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              (function a(b) {
                if (((b.hasCheckedOptimisedAppear = !0), b.root === b)) return;
                let { visualElement: c } = b.options;
                if (!c) return;
                let d = c.props[jt];
                if (window.MotionHasOptimisedAnimation(d, "transform")) {
                  let { layout: a, layoutId: c } = b.options;
                  window.MotionCancelOptimisedAnimation(d, "transform", h0, !(a || c));
                }
                let { parent: e } = b;
                e && !e.hasCheckedOptimisedAppear && a(e);
              })(this),
            this.root.isUpdating || this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let a = 0; a < this.path.length; a++) {
            let b = this.path[a];
            ((b.shouldResetTransform = !0), b.updateScroll("snapshot"), b.options.layoutRoot && b.willUpdate(!1));
          }
          let { layoutId: b, layout: c } = this.options;
          if (void 0 === b && !c) return;
          let d = this.getTransformTemplate();
          ((this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0),
            this.updateSnapshot(),
            a && this.notifyListeners("willUpdate"));
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(l7));
            return;
          }
          if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(l8);
          ((this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1), this.nodes.forEach(l9), this.nodes.forEach(l2), this.nodes.forEach(l3))
              : this.nodes.forEach(l8),
            this.clearAllSnapshots());
          let a = ik.now();
          ((h2.delta = gS(0, 1e3 / 60, a - h2.timestamp)),
            (h2.timestamp = a),
            (h2.isProcessing = !0),
            h3.update.process(h2),
            h3.preRender.process(h2),
            h3.render.process(h2),
            (h2.isProcessing = !1));
        }
        didUpdate() {
          this.updateScheduled || ((this.updateScheduled = !0), ii.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          (this.nodes.forEach(l6), this.sharedNodes.forEach(me));
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0), h0.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          h0.postRender(() => {
            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot &&
            this.instance &&
            ((this.snapshot = this.measure()),
            !this.snapshot ||
              k3(this.snapshot.measuredBox.x) ||
              k3(this.snapshot.measuredBox.y) ||
              (this.snapshot = void 0));
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
          let a = this.layout;
          ((this.layout = this.measure(!1)),
            this.layoutVersion++,
            (this.layoutCorrected = hv()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox));
          let { visualElement: b } = this.options;
          b && b.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
        }
        updateScroll(a = "measure") {
          let b = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (b = !1),
            b && this.instance)
          ) {
            let b = d(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: a,
              isRoot: b,
              offset: c(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : b,
            };
          }
        }
        resetTransform() {
          if (!e) return;
          let a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
            b = this.projectionDelta && !lR(this.projectionDelta),
            c = this.getTransformTemplate(),
            d = c ? c(this.latestValues, "") : void 0,
            f = d !== this.prevTransformTemplateValue;
          a &&
            this.instance &&
            (b || i$(this.latestValues) || f) &&
            (e(this.instance, d), (this.shouldResetTransform = !1), this.scheduleRender());
        }
        measure(a = !0) {
          var b;
          let c = this.measurePageBox(),
            d = this.removeElementScroll(c);
          return (
            a && (d = this.removeTransform(d)),
            ml((b = d).x),
            ml(b.y),
            { animationId: this.root.animationId, measuredBox: c, layoutBox: d, latestValues: {}, source: this.id }
          );
        }
        measurePageBox() {
          let { visualElement: a } = this.options;
          if (!a) return hv();
          let b = a.measureViewportBox();
          if (!(this.scroll?.wasRoot || this.path.some(mn))) {
            let { scroll: a } = this.root;
            a && (i3(b.x, a.offset.x), i3(b.y, a.offset.y));
          }
          return b;
        }
        removeElementScroll(a) {
          let b = hv();
          if ((lJ(b, a), this.scroll?.wasRoot)) return b;
          for (let c = 0; c < this.path.length; c++) {
            let d = this.path[c],
              { scroll: e, options: f } = d;
            d !== this.root && e && f.layoutScroll && (e.wasRoot && lJ(b, a), i3(b.x, e.offset.x), i3(b.y, e.offset.y));
          }
          return b;
        }
        applyTransform(a, b = !1) {
          let c = hv();
          lJ(c, a);
          for (let a = 0; a < this.path.length; a++) {
            let d = this.path[a];
            (!b &&
              d.options.layoutScroll &&
              d.scroll &&
              d !== d.root &&
              i5(c, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
              i$(d.latestValues) && i5(c, d.latestValues));
          }
          return (i$(this.latestValues) && i5(c, this.latestValues), c);
        }
        removeTransform(a) {
          let b = hv();
          lJ(b, a);
          for (let a = 0; a < this.path.length; a++) {
            let c = this.path[a];
            if (!c.instance || !i$(c.latestValues)) continue;
            iZ(c.latestValues) && c.updateSnapshot();
            let d = hv();
            (lJ(d, c.measurePageBox()), lP(b, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d));
          }
          return (i$(this.latestValues) && lP(b, this.latestValues), b);
        }
        setTargetDelta(a) {
          ((this.targetDelta = a), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
        }
        setOptions(a) {
          this.options = { ...this.options, ...a, crossfade: void 0 === a.crossfade || a.crossfade };
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
            this.relativeParent.resolvedRelativeTargetAt !== h2.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(a = !1) {
          let b = this.getLead();
          (this.isProjectionDirty || (this.isProjectionDirty = b.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = b.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = b.isSharedProjectionDirty));
          let c = !!this.resumingFrom || this !== b;
          if (
            !(
              a ||
              (c && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              this.parent?.isProjectionDirty ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          let { layout: d, layoutId: e } = this.options;
          if (!this.layout || !(d || e)) return;
          this.resolvedRelativeTargetAt = h2.timestamp;
          let f = this.getClosestProjectingParent();
          if (
            (f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            this.targetDelta ||
              this.relativeTarget ||
              (f && f.layout
                ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox)
                : this.removeRelativeTarget()),
            this.relativeTarget || this.targetDelta)
          ) {
            if (
              (this.target || ((this.target = hv()), (this.targetWithTransforms = hv())),
              this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target)
            ) {
              var g, h, i;
              (this.forceRelativeParentToResolveTarget(),
                (g = this.target),
                (h = this.relativeTarget),
                (i = this.relativeParent.target),
                k6(g.x, h.x, i.x),
                k6(g.y, h.y, i.y));
            } else
              this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : lJ(this.target, this.layout.layoutBox),
                  i2(this.target, this.targetDelta))
                : lJ(this.target, this.layout.layoutBox);
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              f &&
              !!f.resumingFrom == !!this.resumingFrom &&
              !f.options.layoutScroll &&
              f.target &&
              1 !== this.animationProgress
                ? this.createRelativeTarget(f, this.target, f.target)
                : (this.relativeParent = this.relativeTarget = void 0));
          }
        }
        getClosestProjectingParent() {
          if (!(!this.parent || iZ(this.parent.latestValues) || i_(this.parent.latestValues)))
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        createRelativeTarget(a, b, c) {
          ((this.relativeParent = a),
            (this.linkedParentVersion = a.layoutVersion),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = hv()),
            (this.relativeTargetOrigin = hv()),
            k8(this.relativeTargetOrigin, b, c),
            lJ(this.relativeTarget, this.relativeTargetOrigin));
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          let a = this.getLead(),
            b = !!this.resumingFrom || this !== a,
            c = !0;
          if (
            ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1),
            b && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === h2.timestamp && (c = !1),
            c)
          )
            return;
          let { layout: d, layoutId: e } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || e))
          )
            return;
          lJ(this.layoutCorrected, this.layout.layoutBox);
          let f = this.treeScale.x,
            g = this.treeScale.y;
          (!(function (a, b, c, d = !1) {
            let e,
              f,
              g = c.length;
            if (g) {
              b.x = b.y = 1;
              for (let h = 0; h < g; h++) {
                f = (e = c[h]).projectionDelta;
                let { visualElement: g } = e.options;
                (!g || !g.props.style || "contents" !== g.props.style.display) &&
                  (d &&
                    e.options.layoutScroll &&
                    e.scroll &&
                    e !== e.root &&
                    i5(a, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }),
                  f && ((b.x *= f.x.scale), (b.y *= f.y.scale), i2(a, f)),
                  d && i$(e.latestValues) && i5(a, e.latestValues));
              }
              (b.x < 1.0000000000001 && b.x > 0.999999999999 && (b.x = 1),
                b.y < 1.0000000000001 && b.y > 0.999999999999 && (b.y = 1));
            }
          })(this.layoutCorrected, this.treeScale, this.path, b),
            a.layout &&
              !a.target &&
              (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
              ((a.target = a.layout.layoutBox), (a.targetWithTransforms = hv())));
          let { target: h } = a;
          if (!h) {
            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          (this.projectionDelta && this.prevProjectionDelta
            ? (lK(this.prevProjectionDelta.x, this.projectionDelta.x),
              lK(this.prevProjectionDelta.y, this.projectionDelta.y))
            : this.createProjectionDeltas(),
            k5(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x === f &&
              this.treeScale.y === g &&
              lW(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              lW(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", h)));
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(a = !0) {
          if ((this.options.visualElement?.scheduleRender(), a)) {
            let a = this.getStack();
            a && a.scheduleRender();
          }
          this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          ((this.prevProjectionDelta = ht()),
            (this.projectionDelta = ht()),
            (this.projectionDeltaWithTransform = ht()));
        }
        setAnimationOrigin(a, b = !1) {
          let c,
            d = this.snapshot,
            e = d ? d.latestValues : {},
            f = { ...this.latestValues },
            g = ht();
          ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !b));
          let h = hv(),
            i = (d ? d.source : void 0) !== (this.layout ? this.layout.source : void 0),
            j = this.getStack(),
            k = !j || j.members.length <= 1,
            l = !!(i && !k && !0 === this.options.crossfade && !this.path.some(mh));
          ((this.animationProgress = 0),
            (this.mixTargetDelta = (b) => {
              let d = b / 1e3;
              if (
                (mf(g.x, a.x, d),
                mf(g.y, a.y, d),
                this.setTargetDelta(g),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var j, m, n, o, p, q;
                (k8(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                  (n = this.relativeTarget),
                  (o = this.relativeTargetOrigin),
                  (p = h),
                  (q = d),
                  mg(n.x, o.x, p.x, q),
                  mg(n.y, o.y, p.y, q),
                  c &&
                    ((j = this.relativeTarget), (m = c), lS(j.x, m.x) && lS(j.y, m.y)) &&
                    (this.isProjectionDirty = !1),
                  c || (c = hv()),
                  lJ(c, this.relativeTarget));
              }
              (i &&
                ((this.animationValues = f),
                (function (a, b, c, d, e, f) {
                  e
                    ? ((a.opacity = iR(0, c.opacity ?? 1, lF(d))), (a.opacityExit = iR(b.opacity ?? 1, 0, lG(d))))
                    : f && (a.opacity = iR(b.opacity ?? 1, c.opacity ?? 1, d));
                  for (let e = 0; e < lB; e++) {
                    let f = `border${lA[e]}Radius`,
                      g = lE(b, f),
                      h = lE(c, f);
                    (void 0 !== g || void 0 !== h) &&
                      (g || (g = 0),
                      h || (h = 0),
                      0 === g || 0 === h || lD(g) === lD(h)
                        ? ((a[f] = Math.max(iR(lC(g), lC(h), d), 0)), (g4.test(h) || g4.test(g)) && (a[f] += "%"))
                        : (a[f] = h));
                  }
                  (b.rotate || c.rotate) && (a.rotate = iR(b.rotate || 0, c.rotate || 0, d));
                })(f, e, this.latestValues, d, l, k)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = d));
            }),
            this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
        }
        startAnimation(a) {
          (this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && (h1(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = h0.update(() => {
              var b, c, d;
              let e;
              ((ls.hasAnimatedSinceResize = !0),
                jG.layout++,
                this.motionValue || (this.motionValue = im(0)),
                (this.currentAnimation =
                  ((b = this.motionValue),
                  (c = [0, 1e3]),
                  (d = {
                    ...a,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (b) => {
                      (this.mixTargetDelta(b), a.onUpdate && a.onUpdate(b));
                    },
                    onStop: () => {
                      jG.layout--;
                    },
                    onComplete: () => {
                      (jG.layout--, a.onComplete && a.onComplete(), this.completeAnimation());
                    },
                  }),
                  (e = hw(b) ? b : im(b)).start(kP("", e, c, d)),
                  e.animation)),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0));
            })));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
          let a = this.getStack();
          (a && a.exitAnimationComplete(),
            (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
            this.notifyListeners("animationComplete"));
        }
        finishAnimation() {
          (this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
            this.completeAnimation());
        }
        applyTransformsToTarget() {
          let a = this.getLead(),
            { targetWithTransforms: b, target: c, layout: d, latestValues: e } = a;
          if (b && c && d) {
            if (this !== a && this.layout && d && mm(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
              c = this.target || hv();
              let b = k3(this.layout.layoutBox.x);
              ((c.x.min = a.target.x.min), (c.x.max = c.x.min + b));
              let d = k3(this.layout.layoutBox.y);
              ((c.y.min = a.target.y.min), (c.y.max = c.y.min + d));
            }
            (lJ(b, c), i5(b, e), k5(this.projectionDeltaWithTransform, this.layoutCorrected, b, e));
          }
        }
        registerSharedNode(a, b) {
          (this.sharedNodes.has(a) || this.sharedNodes.set(a, new lX()), this.sharedNodes.get(a).add(b));
          let c = b.options.initialPromotionConfig;
          b.promote({
            transition: c ? c.transition : void 0,
            preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(b) : void 0,
          });
        }
        isLead() {
          let a = this.getStack();
          return !a || a.lead === this;
        }
        getLead() {
          let { layoutId: a } = this.options;
          return (a && this.getStack()?.lead) || this;
        }
        getPrevLead() {
          let { layoutId: a } = this.options;
          return a ? this.getStack()?.prevLead : void 0;
        }
        getStack() {
          let { layoutId: a } = this.options;
          if (a) return this.root.sharedNodes.get(a);
        }
        promote({ needsReset: a, transition: b, preserveFollowOpacity: c } = {}) {
          let d = this.getStack();
          (d && d.promote(this, c),
            a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            b && this.setOptions({ transition: b }));
        }
        relegate() {
          let a = this.getStack();
          return !!a && a.relegate(this);
        }
        resetSkewAndRotation() {
          let { visualElement: a } = this.options;
          if (!a) return;
          let b = !1,
            { latestValues: c } = a;
          if (((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (b = !0), !b)) return;
          let d = {};
          c.z && l0("z", a, d, this.animationValues);
          for (let b = 0; b < l$.length; b++)
            (l0(`rotate${l$[b]}`, a, d, this.animationValues), l0(`skew${l$[b]}`, a, d, this.animationValues));
          for (let b in (a.render(), d))
            (a.setStaticValue(b, d[b]), this.animationValues && (this.animationValues[b] = d[b]));
          a.scheduleRender();
        }
        applyProjectionStyles(a, b) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) {
            a.visibility = "hidden";
            return;
          }
          let c = this.getTransformTemplate();
          if (this.needsReset) {
            ((this.needsReset = !1),
              (a.visibility = ""),
              (a.opacity = ""),
              (a.pointerEvents = jk(b?.pointerEvents) || ""),
              (a.transform = c ? c(this.latestValues, "") : "none"));
            return;
          }
          let d = this.getLead();
          if (!this.projectionDelta || !this.layout || !d.target) {
            (this.options.layoutId &&
              ((a.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
              (a.pointerEvents = jk(b?.pointerEvents) || "")),
              this.hasProjected &&
                !i$(this.latestValues) &&
                ((a.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)));
            return;
          }
          a.visibility = "";
          let e = d.animationValues || d.latestValues;
          this.applyTransformsToTarget();
          let f = (function (a, b, c) {
            let d = "",
              e = a.x.translate / b.x,
              f = a.y.translate / b.y,
              g = c?.z || 0;
            if (
              ((e || f || g) && (d = `translate3d(${e}px, ${f}px, ${g}px) `),
              (1 !== b.x || 1 !== b.y) && (d += `scale(${1 / b.x}, ${1 / b.y}) `),
              c)
            ) {
              let { transformPerspective: a, rotate: b, rotateX: e, rotateY: f, skewX: g, skewY: h } = c;
              (a && (d = `perspective(${a}px) ${d}`),
                b && (d += `rotate(${b}deg) `),
                e && (d += `rotateX(${e}deg) `),
                f && (d += `rotateY(${f}deg) `),
                g && (d += `skewX(${g}deg) `),
                h && (d += `skewY(${h}deg) `));
            }
            let h = a.x.scale * b.x,
              i = a.y.scale * b.y;
            return ((1 !== h || 1 !== i) && (d += `scale(${h}, ${i})`), d || "none");
          })(this.projectionDeltaWithTransform, this.treeScale, e);
          (c && (f = c(e, f)), (a.transform = f));
          let { x: g, y: h } = this.projectionDelta;
          for (let b in ((a.transformOrigin = `${100 * g.origin}% ${100 * h.origin}% 0`),
          d.animationValues
            ? (a.opacity =
                d === this
                  ? (e.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : e.opacityExit)
            : (a.opacity =
                d === this ? (void 0 !== e.opacity ? e.opacity : "") : void 0 !== e.opacityExit ? e.opacityExit : 0),
          iS)) {
            if (void 0 === e[b]) continue;
            let { correct: c, applyTo: g, isCSSVariable: h } = iS[b],
              i = "none" === f ? e[b] : c(e[b], d);
            if (g) {
              let b = g.length;
              for (let c = 0; c < b; c++) a[g[c]] = i;
            } else h ? (this.options.visualElement.renderState.vars[b] = i) : (a[b] = i);
          }
          this.options.layoutId && (a.pointerEvents = d === this ? jk(b?.pointerEvents) || "" : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          (this.root.nodes.forEach((a) => a.currentAnimation?.stop()),
            this.root.nodes.forEach(l7),
            this.root.sharedNodes.clear());
        }
      };
    }
    function l2(a) {
      a.updateLayout();
    }
    function l3(a) {
      let b = a.resumeFrom?.snapshot || a.snapshot;
      if (a.isLead() && a.layout && b && a.hasListeners("didUpdate")) {
        let { layoutBox: c, measuredBox: d } = a.layout,
          { animationType: e } = a.options,
          f = b.source !== a.layout.source;
        "size" === e
          ? k$((a) => {
              let d = f ? b.measuredBox[a] : b.layoutBox[a],
                e = k3(d);
              ((d.min = c[a].min), (d.max = d.min + e));
            })
          : mm(e, b.layoutBox, c) &&
            k$((d) => {
              let e = f ? b.measuredBox[d] : b.layoutBox[d],
                g = k3(c[d]);
              ((e.max = e.min + g),
                a.relativeTarget &&
                  !a.currentAnimation &&
                  ((a.isProjectionDirty = !0), (a.relativeTarget[d].max = a.relativeTarget[d].min + g)));
            });
        let g = ht();
        k5(g, c, b.layoutBox);
        let h = ht();
        f ? k5(h, a.applyTransform(d, !0), b.measuredBox) : k5(h, c, b.layoutBox);
        let i = !lR(g),
          j = !1;
        if (!a.resumeFrom) {
          let d = a.getClosestProjectingParent();
          if (d && !d.resumeFrom) {
            let { snapshot: e, layout: f } = d;
            if (e && f) {
              let g = hv();
              k8(g, b.layoutBox, e.layoutBox);
              let h = hv();
              (k8(h, c, f.layoutBox),
                lU(g, h) || (j = !0),
                d.options.layoutRoot && ((a.relativeTarget = h), (a.relativeTargetOrigin = g), (a.relativeParent = d)));
            }
          }
        }
        a.notifyListeners("didUpdate", {
          layout: c,
          snapshot: b,
          delta: h,
          layoutDelta: g,
          hasLayoutChanged: i,
          hasRelativeLayoutChanged: j,
        });
      } else if (a.isLead()) {
        let { onExitComplete: b } = a.options;
        b && b();
      }
      a.options.transition = void 0;
    }
    function l4(a) {
      a.parent &&
        (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
        a.isSharedProjectionDirty ||
          (a.isSharedProjectionDirty = !!(
            a.isProjectionDirty ||
            a.parent.isProjectionDirty ||
            a.parent.isSharedProjectionDirty
          )),
        a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
    }
    function l5(a) {
      a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
    }
    function l6(a) {
      a.clearSnapshot();
    }
    function l7(a) {
      a.clearMeasurements();
    }
    function l8(a) {
      a.isLayoutDirty = !1;
    }
    function l9(a) {
      let { visualElement: b } = a.options;
      (b && b.getProps().onBeforeLayoutMeasure && b.notify("BeforeLayoutMeasure"), a.resetTransform());
    }
    function ma(a) {
      (a.finishAnimation(), (a.targetDelta = a.relativeTarget = a.target = void 0), (a.isProjectionDirty = !0));
    }
    function mb(a) {
      a.resolveTargetDelta();
    }
    function mc(a) {
      a.calcProjection();
    }
    function md(a) {
      a.resetSkewAndRotation();
    }
    function me(a) {
      a.removeLeadSnapshot();
    }
    function mf(a, b, c) {
      ((a.translate = iR(b.translate, 0, c)),
        (a.scale = iR(b.scale, 1, c)),
        (a.origin = b.origin),
        (a.originPoint = b.originPoint));
    }
    function mg(a, b, c, d) {
      ((a.min = iR(b.min, c.min, d)), (a.max = iR(b.max, c.max, d)));
    }
    function mh(a) {
      return a.animationValues && void 0 !== a.animationValues.opacityExit;
    }
    let mi = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      mj = (a) =>
        "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a),
      mk = mj("applewebkit/") && !mj("chrome/") ? Math.round : hY;
    function ml(a) {
      ((a.min = mk(a.min)), (a.max = mk(a.max)));
    }
    function mm(a, b, c) {
      return "position" === a || ("preserve-aspect" === a && !(0.2 >= Math.abs(lV(b) - lV(c))));
    }
    function mn(a) {
      return a !== a.root && a.scroll?.wasRoot;
    }
    let mo = l1({
        attachResizeListener: (a, b) => k1(a, "resize", b),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
          y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      }),
      mp = { current: void 0 },
      mq = l1({
        measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
        defaultParent: () => {
          if (!mp.current) {
            let a = new mo({});
            (a.mount(window), a.setOptions({ layoutScroll: !0 }), (mp.current = a));
          }
          return mp.current;
        },
        resetTransform: (a, b) => {
          a.style.transform = void 0 !== b ? b : "none";
        },
        checkIsScrollRoot: (a) => "fixed" === window.getComputedStyle(a).position,
      });
    function mr(a, b) {
      let c = (function (a, b, c) {
          if (null == a) return [];
          if (a instanceof EventTarget) return [a];
          if ("string" == typeof a) {
            let b = document,
              c = void 0 ?? b.querySelectorAll(a);
            return c ? Array.from(c) : [];
          }
          return Array.from(a).filter((a) => null != a);
        })(a),
        d = new AbortController();
      return [c, { passive: !0, ...b, signal: d.signal }, () => d.abort()];
    }
    function ms(a) {
      return !("touch" === a.pointerType || k2.x || k2.y);
    }
    function mt(a, b, c) {
      let { props: d } = a;
      a.animationState && d.whileHover && a.animationState.setActive("whileHover", "Start" === c);
      let e = d["onHover" + c];
      e && h0.postRender(() => e(b, la(b)));
    }
    function mu(a) {
      return ly(a) && "offsetHeight" in a;
    }
    let mv = (a, b) => !!b && (a === b || mv(a, b.parentElement)),
      mw = new WeakSet();
    function mx(a) {
      return (b) => {
        "Enter" === b.key && a(b);
      };
    }
    function my(a, b) {
      a.dispatchEvent(new PointerEvent("pointer" + b, { isPrimary: !0, bubbles: !0 }));
    }
    function mz(a) {
      return k9(a) && !(k2.x || k2.y);
    }
    function mA(a, b, c) {
      let { props: d } = a;
      if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
      a.animationState && d.whileTap && a.animationState.setActive("whileTap", "Start" === c);
      let e = d["onTap" + ("End" === c ? "" : c)];
      e && h0.postRender(() => e(b, la(b)));
    }
    let mB = new WeakMap(),
      mC = new WeakMap(),
      mD = (a) => {
        let b = mB.get(a.target);
        b && b(a);
      },
      mE = (a) => {
        a.forEach(mD);
      },
      mF = { some: 0, all: 1 },
      mG = (function (a, b) {
        if ("undefined" == typeof Proxy) return jx;
        let c = new Map(),
          d = (c, d) => jx(c, d, a, b);
        return new Proxy((a, b) => d(a, b), {
          get: (e, f) => ("create" === f ? d : (c.has(f) || c.set(f, jx(f, void 0, a, b)), c.get(f))),
        });
      })(
        {
          animation: {
            Feature: class extends jy {
              constructor(a) {
                (super(a),
                  a.animationState ||
                    (a.animationState = (function (a) {
                      let b = (b) =>
                          Promise.all(
                            b.map(({ animation: b, options: c }) =>
                              (function (a, b, c = {}) {
                                let d;
                                if ((a.notify("AnimationStart", b), Array.isArray(b)))
                                  d = Promise.all(b.map((b) => kS(a, b, c)));
                                else if ("string" == typeof b) d = kS(a, b, c);
                                else {
                                  let e = "function" == typeof b ? jz(a, b, c.custom) : b;
                                  d = Promise.all(kQ(a, e, c));
                                }
                                return d.then(() => {
                                  a.notify("AnimationComplete", b);
                                });
                              })(a, b, c),
                            ),
                          ),
                        c = kY(),
                        d = !0,
                        e = (b) => (c, d) => {
                          let e = jz(a, d, "exit" === b ? a.presenceContext?.custom : void 0);
                          if (e) {
                            let { transition: a, transitionEnd: b, ...d } = e;
                            c = { ...c, ...d, ...b };
                          }
                          return c;
                        };
                      function f(f) {
                        let { props: g } = a,
                          h =
                            (function a(b) {
                              if (!b) return;
                              if (!b.isControllingVariants) {
                                let c = (b.parent && a(b.parent)) || {};
                                return (void 0 !== b.props.initial && (c.initial = b.props.initial), c);
                              }
                              let c = {};
                              for (let a = 0; a < kT; a++) {
                                let d = iu[a],
                                  e = b.props[d];
                                (is(e) || !1 === e) && (c[d] = e);
                              }
                              return c;
                            })(a.parent) || {},
                          i = [],
                          j = new Set(),
                          k = {},
                          l = 1 / 0;
                        for (let b = 0; b < kW; b++) {
                          var m, n;
                          let o = kV[b],
                            p = c[o],
                            q = void 0 !== g[o] ? g[o] : h[o],
                            r = is(q),
                            s = o === f ? p.isActive : null;
                          !1 === s && (l = b);
                          let t = q === h[o] && q !== g[o] && r;
                          if (
                            (t && d && a.manuallyAnimateOnMount && (t = !1),
                            (p.protectedKeys = { ...k }),
                            (!p.isActive && null === s) || (!q && !p.prevProp) || ir(q) || "boolean" == typeof q)
                          )
                            continue;
                          let u =
                              ((m = p.prevProp),
                              "string" == typeof (n = q) ? n !== m : !!Array.isArray(n) && !kU(n, m)),
                            v = u || (o === f && p.isActive && !t && r) || (b > l && r),
                            w = !1,
                            x = Array.isArray(q) ? q : [q],
                            y = x.reduce(e(o), {});
                          !1 === s && (y = {});
                          let { prevResolvedValues: z = {} } = p,
                            A = { ...z, ...y },
                            B = (b) => {
                              ((v = !0), j.has(b) && ((w = !0), j.delete(b)), (p.needsAnimating[b] = !0));
                              let c = a.getValue(b);
                              c && (c.liveStyle = !1);
                            };
                          for (let a in A) {
                            let b = y[a],
                              c = z[a];
                            if (!k.hasOwnProperty(a))
                              (jB(b) && jB(c) ? kU(b, c) : b === c)
                                ? void 0 !== b && j.has(a)
                                  ? B(a)
                                  : (p.protectedKeys[a] = !0)
                                : null != b
                                  ? B(a)
                                  : j.add(a);
                          }
                          ((p.prevProp = q),
                            (p.prevResolvedValues = y),
                            p.isActive && (k = { ...k, ...y }),
                            d && a.blockInitialAnimation && (v = !1));
                          let C = t && u,
                            D = !C || w;
                          v &&
                            D &&
                            i.push(
                              ...x.map((b) => {
                                let c = { type: o };
                                if ("string" == typeof b && d && !C && a.manuallyAnimateOnMount && a.parent) {
                                  let { parent: d } = a,
                                    e = jz(d, b);
                                  if (d.enteringChildren && e) {
                                    let { delayChildren: b } = e.transition || {};
                                    c.delay = kR(d.enteringChildren, a, b);
                                  }
                                }
                                return { animation: b, options: c };
                              }),
                            );
                        }
                        if (j.size) {
                          let b = {};
                          if ("boolean" != typeof g.initial) {
                            let c = jz(a, Array.isArray(g.initial) ? g.initial[0] : g.initial);
                            c && c.transition && (b.transition = c.transition);
                          }
                          (j.forEach((c) => {
                            let d = a.getBaseTarget(c),
                              e = a.getValue(c);
                            (e && (e.liveStyle = !0), (b[c] = d ?? null));
                          }),
                            i.push({ animation: b }));
                        }
                        let o = !!i.length;
                        return (
                          d && (!1 === g.initial || g.initial === g.animate) && !a.manuallyAnimateOnMount && (o = !1),
                          (d = !1),
                          o ? b(i) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: f,
                        setActive: function (b, d) {
                          if (c[b].isActive === d) return Promise.resolve();
                          (a.variantChildren?.forEach((a) => a.animationState?.setActive(b, d)), (c[b].isActive = d));
                          let e = f(b);
                          for (let a in c) c[a].protectedKeys = {};
                          return e;
                        },
                        setAnimateFunction: function (c) {
                          b = c(a);
                        },
                        getState: () => c,
                        reset: () => {
                          c = kY();
                        },
                      };
                    })(a)));
              }
              updateAnimationControlsSubscription() {
                let { animate: a } = this.node.getProps();
                ir(a) && (this.unmountControls = a.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: a } = this.node.getProps(),
                  { animate: b } = this.node.prevProps || {};
                a !== b && this.updateAnimationControlsSubscription();
              }
              unmount() {
                (this.node.animationState.reset(), this.unmountControls?.());
              }
            },
          },
          exit: {
            Feature: class extends jy {
              constructor() {
                (super(...arguments), (this.id = kZ++));
              }
              update() {
                if (!this.node.presenceContext) return;
                let { isPresent: a, onExitComplete: b } = this.node.presenceContext,
                  { isPresent: c } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || a === c) return;
                let d = this.node.animationState.setActive("exit", !a);
                b &&
                  !a &&
                  d.then(() => {
                    b(this.id);
                  });
              }
              mount() {
                let { register: a, onExitComplete: b } = this.node.presenceContext || {};
                (b && b(this.id), a && (this.unmount = a(this.id)));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends jy {
              constructor() {
                (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
              }
              startObserver() {
                var a;
                let b;
                this.unmount();
                let { viewport: c = {} } = this.node.getProps(),
                  { root: d, margin: e, amount: f = "some", once: g } = c,
                  h = { root: d ? d.current : void 0, rootMargin: e, threshold: "number" == typeof f ? f : mF[f] },
                  i = (a) => {
                    let { isIntersecting: b } = a;
                    if (this.isInView === b || ((this.isInView = b), g && !b && this.hasEnteredView)) return;
                    (b && (this.hasEnteredView = !0),
                      this.node.animationState && this.node.animationState.setActive("whileInView", b));
                    let { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
                      e = b ? c : d;
                    e && e(a);
                  };
                return (
                  (a = this.node.current),
                  (b = (function ({ root: a, ...b }) {
                    let c = a || document;
                    mC.has(c) || mC.set(c, {});
                    let d = mC.get(c),
                      e = JSON.stringify(b);
                    return (d[e] || (d[e] = new IntersectionObserver(mE, { root: a, ...b })), d[e]);
                  })(h)),
                  mB.set(a, i),
                  b.observe(a),
                  () => {
                    (mB.delete(a), b.unobserve(a));
                  }
                );
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: a, prevProps: b } = this.node;
                ["amount", "margin", "root"].some(
                  (function ({ viewport: a = {} }, { viewport: b = {} } = {}) {
                    return (c) => a[c] !== b[c];
                  })(a, b),
                ) && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends jy {
              mount() {
                let { current: a } = this.node;
                a &&
                  (this.unmount = (function (a, b, c = {}) {
                    let [d, e, f] = mr(a, c),
                      g = (a) => {
                        let d = a.currentTarget;
                        if (!mz(a)) return;
                        mw.add(d);
                        let f = b(d, a),
                          g = (a, b) => {
                            (window.removeEventListener("pointerup", h),
                              window.removeEventListener("pointercancel", i),
                              mw.has(d) && mw.delete(d),
                              mz(a) && "function" == typeof f && f(a, { success: b }));
                          },
                          h = (a) => {
                            g(a, d === window || d === document || c.useGlobalTarget || mv(d, a.target));
                          },
                          i = (a) => {
                            g(a, !1);
                          };
                        (window.addEventListener("pointerup", h, e), window.addEventListener("pointercancel", i, e));
                      };
                    return (
                      d.forEach((a) => {
                        ((c.useGlobalTarget ? window : a).addEventListener("pointerdown", g, e),
                          mu(a) &&
                            (a.addEventListener("focus", (a) =>
                              ((a, b) => {
                                let c = a.currentTarget;
                                if (!c) return;
                                let d = mx(() => {
                                  if (mw.has(c)) return;
                                  my(c, "down");
                                  let a = mx(() => {
                                    my(c, "up");
                                  });
                                  (c.addEventListener("keyup", a, b),
                                    c.addEventListener("blur", () => my(c, "cancel"), b));
                                });
                                (c.addEventListener("keydown", d, b),
                                  c.addEventListener("blur", () => c.removeEventListener("keydown", d), b));
                              })(a, e),
                            ),
                            k0(a) || a.hasAttribute("tabindex") || (a.tabIndex = 0)));
                      }),
                      f
                    );
                  })(
                    a,
                    (a, b) => (
                      mA(this.node, b, "Start"),
                      (a, { success: b }) => mA(this.node, a, b ? "End" : "Cancel")
                    ),
                    { useGlobalTarget: this.node.props.globalTapTarget },
                  ));
              }
              unmount() {}
            },
          },
          focus: {
            Feature: class extends jy {
              constructor() {
                (super(...arguments), (this.isActive = !1));
              }
              onFocus() {
                let a = !1;
                try {
                  a = this.node.current.matches(":focus-visible");
                } catch (b) {
                  a = !0;
                }
                a &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
              }
              mount() {
                this.unmount = jF(
                  k1(this.node.current, "focus", () => this.onFocus()),
                  k1(this.node.current, "blur", () => this.onBlur()),
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends jy {
              mount() {
                let { current: a } = this.node;
                a &&
                  (this.unmount = (function (a, b, c = {}) {
                    let [d, e, f] = mr(a, c),
                      g = (a) => {
                        if (!ms(a)) return;
                        let { target: c } = a,
                          d = b(c, a);
                        if ("function" != typeof d || !c) return;
                        let f = (a) => {
                          ms(a) && (d(a), c.removeEventListener("pointerleave", f));
                        };
                        c.addEventListener("pointerleave", f, e);
                      };
                    return (
                      d.forEach((a) => {
                        a.addEventListener("pointerenter", g, e);
                      }),
                      f
                    );
                  })(a, (a, b) => (mt(this.node, b, "Start"), (a) => mt(this.node, a, "End"))));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends jy {
              constructor() {
                (super(...arguments), (this.removePointerDownListener = hY));
              }
              onPointerDown(a) {
                this.session = new lf(a, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: lc(this.node),
                });
              }
              createPanHandlers() {
                let { onPanSessionStart: a, onPanStart: b, onPan: c, onPanEnd: d } = this.node.getProps();
                return {
                  onSessionStart: lr(a),
                  onStart: lr(b),
                  onMove: c,
                  onEnd: (a, b) => {
                    (delete this.session, d && h0.postRender(() => d(a, b)));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = lb(this.node.current, "pointerdown", (a) => this.onPointerDown(a));
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
            Feature: class extends jy {
              constructor(a) {
                (super(a), (this.removeGroupControls = hY), (this.removeListeners = hY), (this.controls = new lp(a)));
              }
              mount() {
                let { dragControls: a } = this.node.getProps();
                (a && (this.removeGroupControls = a.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || hY));
              }
              update() {
                let { dragControls: a } = this.node.getProps(),
                  { dragControls: b } = this.node.prevProps || {};
                a !== b && (this.removeGroupControls(), a && (this.removeGroupControls = a.subscribe(this.controls)));
              }
              unmount() {
                (this.removeGroupControls(),
                  this.removeListeners(),
                  this.controls.isDragging || this.controls.endPanSession());
              }
            },
            ProjectionNode: mq,
            MeasureLayout: lx,
          },
          layout: { ProjectionNode: mq, MeasureLayout: lx },
        },
        (a, b) => ((b.isSVG ?? i9(a)) ? new iW(b) : new i7(b, { allowProjection: a !== a3.Fragment })),
      );
    a.s(["motion", () => mG], 496714);
    var mH = a3;
    function mI(a, b) {
      if ("function" == typeof a) return a(b);
      null != a && (a.current = b);
    }
    class mJ extends mH.Component {
      getSnapshotBeforeUpdate(a) {
        let b = this.props.childRef.current;
        if (b && a.isPresent && !this.props.isPresent) {
          let a = b.offsetParent,
            c = (mu(a) && a.offsetWidth) || 0,
            d = (mu(a) && a.offsetHeight) || 0,
            e = this.props.sizeRef.current;
          ((e.height = b.offsetHeight || 0),
            (e.width = b.offsetWidth || 0),
            (e.top = b.offsetTop),
            (e.left = b.offsetLeft),
            (e.right = c - e.width - e.left),
            (e.bottom = d - e.height - e.top));
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function mK({ children: a, isPresent: b, anchorX: c, anchorY: d, root: e }) {
      let f = (0, mH.useId)(),
        g = (0, mH.useRef)(null),
        h = (0, mH.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
        { nonce: i } = (0, mH.useContext)(jb),
        j = (function (...a) {
          return a3.useCallback(
            (function (...a) {
              return (b) => {
                let c = !1,
                  d = a.map((a) => {
                    let d = mI(a, b);
                    return (c || "function" != typeof d || (c = !0), d);
                  });
                if (c)
                  return () => {
                    for (let b = 0; b < d.length; b++) {
                      let c = d[b];
                      "function" == typeof c ? c() : mI(a[b], null);
                    }
                  };
              };
            })(...a),
            a,
          );
        })(g, a.props?.ref ?? a?.ref);
      return (
        (0, mH.useInsertionEffect)(() => {
          let { width: a, height: j, top: k, left: l, right: m, bottom: n } = h.current;
          if (b || !g.current || !a || !j) return;
          let o = "left" === c ? `left: ${l}` : `right: ${m}`,
            p = "bottom" === d ? `bottom: ${n}` : `top: ${k}`;
          g.current.dataset.motionPopId = f;
          let q = document.createElement("style");
          i && (q.nonce = i);
          let r = e ?? document.head;
          return (
            r.appendChild(q),
            q.sheet &&
              q.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${j}px !important;
            ${o}px !important;
            ${p}px !important;
          }
        `),
            () => {
              r.contains(q) && r.removeChild(q);
            }
          );
        }, [b]),
        (0, a1.jsx)(mJ, { isPresent: b, childRef: g, sizeRef: h, children: mH.cloneElement(a, { ref: j }) })
      );
    }
    let mL = ({
      children: a,
      initial: b,
      isPresent: c,
      onExitComplete: d,
      custom: e,
      presenceAffectsLayout: f,
      mode: g,
      anchorX: h,
      anchorY: i,
      root: j,
    }) => {
      let k = jm(mM),
        l = (0, a3.useId)(),
        m = !0,
        n = (0, a3.useMemo)(
          () => (
            (m = !1),
            {
              id: l,
              initial: b,
              isPresent: c,
              custom: e,
              onExitComplete: (a) => {
                for (let b of (k.set(a, !0), k.values())) if (!b) return;
                d && d();
              },
              register: (a) => (k.set(a, !1), () => k.delete(a)),
            }
          ),
          [c, k, d],
        );
      return (
        f && m && (n = { ...n }),
        (0, a3.useMemo)(() => {
          k.forEach((a, b) => k.set(b, !1));
        }, [c]),
        a3.useEffect(() => {
          c || k.size || !d || d();
        }, [c]),
        "popLayout" === g && (a = (0, a1.jsx)(mK, { isPresent: c, anchorX: h, anchorY: i, root: j, children: a })),
        (0, a1.jsx)(jl.Provider, { value: n, children: a })
      );
    };
    function mM() {
      return new Map();
    }
    let mN = (a) => a.key || "";
    function mO(a) {
      let b = [];
      return (
        a3.Children.forEach(a, (a) => {
          (0, a3.isValidElement)(a) && b.push(a);
        }),
        b
      );
    }
    let mP = ({
      children: a,
      custom: b,
      initial: c = !0,
      onExitComplete: d,
      presenceAffectsLayout: e = !0,
      mode: f = "sync",
      propagate: g = !1,
      anchorX: h = "left",
      anchorY: i = "top",
      root: j,
    }) => {
      let [k, l] = lu(g),
        m = (0, a3.useMemo)(() => mO(a), [a]),
        n = g && !k ? [] : m.map(mN),
        o = (0, a3.useRef)(!0),
        p = (0, a3.useRef)(m),
        q = jm(() => new Map()),
        r = (0, a3.useRef)(new Set()),
        [s, t] = (0, a3.useState)(m),
        [u, v] = (0, a3.useState)(m);
      jw(() => {
        ((o.current = !1), (p.current = m));
        for (let a = 0; a < u.length; a++) {
          let b = mN(u[a]);
          n.includes(b) ? (q.delete(b), r.current.delete(b)) : !0 !== q.get(b) && q.set(b, !1);
        }
      }, [u, n.length, n.join("-")]);
      let w = [];
      if (m !== s) {
        let a = [...m];
        for (let b = 0; b < u.length; b++) {
          let c = u[b],
            d = mN(c);
          n.includes(d) || (a.splice(b, 0, c), w.push(c));
        }
        return ("wait" === f && w.length && (a = w), v(mO(a)), t(m), null);
      }
      let { forceRender: x } = (0, a3.useContext)(ja);
      return (0, a1.jsx)(a1.Fragment, {
        children: u.map((a) => {
          let s = mN(a),
            t = (!g || !!k) && (m === u || n.includes(s));
          return (0, a1.jsx)(
            mL,
            {
              isPresent: t,
              initial: (!o.current || !!c) && void 0,
              custom: b,
              presenceAffectsLayout: e,
              mode: f,
              root: j,
              onExitComplete: t
                ? void 0
                : () => {
                    if (r.current.has(s) || (r.current.add(s), !q.has(s))) return;
                    q.set(s, !0);
                    let a = !0;
                    (q.forEach((b) => {
                      b || (a = !1);
                    }),
                      a && (x?.(), v(p.current), g && l?.(), d && d()));
                  },
              anchorX: h,
              anchorY: i,
              children: a,
            },
            s,
          );
        }),
      });
    };
    a.s(["AnimatePresence", () => mP], 582632);
    var mQ = [],
      mR = "ResizeObserver loop completed with undelivered notifications.",
      mS = function () {
        var a;
        ("function" == typeof ErrorEvent
          ? (a = new ErrorEvent("error", { message: mR }))
          : ((a = document.createEvent("Event")).initEvent("error", !1, !1), (a.message = mR)),
          window.dispatchEvent(a));
      };
    (((a$ = a_ || (a_ = {})).BORDER_BOX = "border-box"),
      (a$.CONTENT_BOX = "content-box"),
      (a$.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"));
    var mT = function (a) {
        return Object.freeze(a);
      },
      mU = function (a, b) {
        ((this.inlineSize = a), (this.blockSize = b), mT(this));
      },
      mV = (function () {
        function a(a, b, c, d) {
          return (
            (this.x = a),
            (this.y = b),
            (this.width = c),
            (this.height = d),
            (this.top = this.y),
            (this.left = this.x),
            (this.bottom = this.top + this.height),
            (this.right = this.left + this.width),
            mT(this)
          );
        }
        return (
          (a.prototype.toJSON = function () {
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
          (a.fromRect = function (b) {
            return new a(b.x, b.y, b.width, b.height);
          }),
          a
        );
      })(),
      mW = function (a) {
        return a instanceof SVGElement && "getBBox" in a;
      },
      mX = function (a) {
        if (mW(a)) {
          var b = a.getBBox(),
            c = b.width,
            d = b.height;
          return !c && !d;
        }
        var e = a.offsetWidth,
          f = a.offsetHeight;
        return !(e || f || a.getClientRects().length);
      },
      mY = function (a) {
        if (a instanceof Element) return !0;
        var b,
          c = null == (b = null == a ? void 0 : a.ownerDocument) ? void 0 : b.defaultView;
        return !!(c && a instanceof c.Element);
      },
      mZ = function (a) {
        switch (a.tagName) {
          case "INPUT":
            if ("image" !== a.type) break;
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
      m$ = {},
      m_ = new WeakMap(),
      m0 = /auto|scroll/,
      m1 = /^tb|vertical/,
      m2 = /msie|trident/i.test(m$.navigator && m$.navigator.userAgent),
      m3 = function (a) {
        return parseFloat(a || "0");
      },
      m4 = function (a, b, c) {
        return (
          void 0 === a && (a = 0),
          void 0 === b && (b = 0),
          void 0 === c && (c = !1),
          new mU((c ? b : a) || 0, (c ? a : b) || 0)
        );
      },
      m5 = mT({
        devicePixelContentBoxSize: m4(),
        borderBoxSize: m4(),
        contentBoxSize: m4(),
        contentRect: new mV(0, 0, 0, 0),
      }),
      m6 = function (a, b) {
        if ((void 0 === b && (b = !1), m_.has(a) && !b)) return m_.get(a);
        if (mX(a)) return (m_.set(a, m5), m5);
        var c = getComputedStyle(a),
          d = mW(a) && a.ownerSVGElement && a.getBBox(),
          e = !m2 && "border-box" === c.boxSizing,
          f = m1.test(c.writingMode || ""),
          g = !d && m0.test(c.overflowY || ""),
          h = !d && m0.test(c.overflowX || ""),
          i = d ? 0 : m3(c.paddingTop),
          j = d ? 0 : m3(c.paddingRight),
          k = d ? 0 : m3(c.paddingBottom),
          l = d ? 0 : m3(c.paddingLeft),
          m = d ? 0 : m3(c.borderTopWidth),
          n = d ? 0 : m3(c.borderRightWidth),
          o = d ? 0 : m3(c.borderBottomWidth),
          p = d ? 0 : m3(c.borderLeftWidth),
          q = l + j,
          r = i + k,
          s = p + n,
          t = m + o,
          u = h ? a.offsetHeight - t - a.clientHeight : 0,
          v = g ? a.offsetWidth - s - a.clientWidth : 0,
          w = d ? d.width : m3(c.width) - (e ? q + s : 0) - v,
          x = d ? d.height : m3(c.height) - (e ? r + t : 0) - u,
          y = w + q + v + s,
          z = x + r + u + t,
          A = mT({
            devicePixelContentBoxSize: m4(Math.round(w * devicePixelRatio), Math.round(x * devicePixelRatio), f),
            borderBoxSize: m4(y, z, f),
            contentBoxSize: m4(w, x, f),
            contentRect: new mV(l, i, w, x),
          });
        return (m_.set(a, A), A);
      },
      m7 = function (a, b, c) {
        var d = m6(a, c),
          e = d.borderBoxSize,
          f = d.contentBoxSize,
          g = d.devicePixelContentBoxSize;
        switch (b) {
          case a_.DEVICE_PIXEL_CONTENT_BOX:
            return g;
          case a_.BORDER_BOX:
            return e;
          default:
            return f;
        }
      },
      m8 = function (a) {
        var b = m6(a);
        ((this.target = a),
          (this.contentRect = b.contentRect),
          (this.borderBoxSize = mT([b.borderBoxSize])),
          (this.contentBoxSize = mT([b.contentBoxSize])),
          (this.devicePixelContentBoxSize = mT([b.devicePixelContentBoxSize])));
      },
      m9 = function (a) {
        if (mX(a)) return 1 / 0;
        for (var b = 0, c = a.parentNode; c; ) ((b += 1), (c = c.parentNode));
        return b;
      },
      na = function () {
        var a = 1 / 0,
          b = [];
        mQ.forEach(function (c) {
          if (0 !== c.activeTargets.length) {
            var d = [];
            (c.activeTargets.forEach(function (b) {
              var c = new m8(b.target),
                e = m9(b.target);
              (d.push(c), (b.lastReportedSize = m7(b.target, b.observedBox)), e < a && (a = e));
            }),
              b.push(function () {
                c.callback.call(c.observer, d, c.observer);
              }),
              c.activeTargets.splice(0, c.activeTargets.length));
          }
        });
        for (var c = 0; c < b.length; c++) (0, b[c])();
        return a;
      },
      nb = function (a) {
        mQ.forEach(function (b) {
          (b.activeTargets.splice(0, b.activeTargets.length),
            b.skippedTargets.splice(0, b.skippedTargets.length),
            b.observationTargets.forEach(function (c) {
              c.isActive() && (m9(c.target) > a ? b.activeTargets.push(c) : b.skippedTargets.push(c));
            }));
        });
      },
      nc = function () {
        var a = 0;
        for (
          nb(0);
          mQ.some(function (a) {
            return a.activeTargets.length > 0;
          });
        )
          nb((a = na()));
        return (
          mQ.some(function (a) {
            return a.skippedTargets.length > 0;
          }) && mS(),
          a > 0
        );
      },
      nd = [],
      ne = function (a) {
        if (!a0) {
          var b = 0,
            c = document.createTextNode("");
          (new MutationObserver(function () {
            return nd.splice(0).forEach(function (a) {
              return a();
            });
          }).observe(c, { characterData: !0 }),
            (a0 = function () {
              c.textContent = "".concat(b ? b-- : b++);
            }));
        }
        (nd.push(a), a0());
      },
      nf = function (a) {
        ne(function () {
          requestAnimationFrame(a);
        });
      },
      ng = 0,
      nh = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
      ni = [
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
      nj = function (a) {
        return (void 0 === a && (a = 0), Date.now() + a);
      },
      nk = !1,
      nl = new ((function () {
        function a() {
          var a = this;
          ((this.stopped = !0),
            (this.listener = function () {
              return a.schedule();
            }));
        }
        return (
          (a.prototype.run = function (a) {
            var b = this;
            if ((void 0 === a && (a = 250), !nk)) {
              nk = !0;
              var c = nj(a);
              nf(function () {
                var d = !1;
                try {
                  d = nc();
                } finally {
                  if (((nk = !1), (a = c - nj()), !ng)) return;
                  d ? b.run(1e3) : a > 0 ? b.run(a) : b.start();
                }
              });
            }
          }),
          (a.prototype.schedule = function () {
            (this.stop(), this.run());
          }),
          (a.prototype.observe = function () {
            var a = this,
              b = function () {
                return a.observer && a.observer.observe(document.body, nh);
              };
            document.body ? b() : m$.addEventListener("DOMContentLoaded", b);
          }),
          (a.prototype.start = function () {
            var a = this;
            this.stopped &&
              ((this.stopped = !1),
              (this.observer = new MutationObserver(this.listener)),
              this.observe(),
              ni.forEach(function (b) {
                return m$.addEventListener(b, a.listener, !0);
              }));
          }),
          (a.prototype.stop = function () {
            var a = this;
            this.stopped ||
              (this.observer && this.observer.disconnect(),
              ni.forEach(function (b) {
                return m$.removeEventListener(b, a.listener, !0);
              }),
              (this.stopped = !0));
          }),
          a
        );
      })())(),
      nm = function (a) {
        (!ng && a > 0 && nl.start(), (ng += a) || nl.stop());
      },
      nn = (function () {
        function a(a, b) {
          ((this.target = a),
            (this.observedBox = b || a_.CONTENT_BOX),
            (this.lastReportedSize = { inlineSize: 0, blockSize: 0 }));
        }
        return (
          (a.prototype.isActive = function () {
            var a,
              b = m7(this.target, this.observedBox, !0);
            return (
              mW((a = this.target)) || mZ(a) || "inline" !== getComputedStyle(a).display || (this.lastReportedSize = b),
              this.lastReportedSize.inlineSize !== b.inlineSize || this.lastReportedSize.blockSize !== b.blockSize
            );
          }),
          a
        );
      })(),
      no = function (a, b) {
        ((this.activeTargets = []),
          (this.skippedTargets = []),
          (this.observationTargets = []),
          (this.observer = a),
          (this.callback = b));
      },
      np = new WeakMap(),
      nq = function (a, b) {
        for (var c = 0; c < a.length; c += 1) if (a[c].target === b) return c;
        return -1;
      },
      nr = (function () {
        function a() {}
        return (
          (a.connect = function (a, b) {
            var c = new no(a, b);
            np.set(a, c);
          }),
          (a.observe = function (a, b, c) {
            var d = np.get(a),
              e = 0 === d.observationTargets.length;
            0 > nq(d.observationTargets, b) &&
              (e && mQ.push(d), d.observationTargets.push(new nn(b, c && c.box)), nm(1), nl.schedule());
          }),
          (a.unobserve = function (a, b) {
            var c = np.get(a),
              d = nq(c.observationTargets, b),
              e = 1 === c.observationTargets.length;
            d >= 0 && (e && mQ.splice(mQ.indexOf(c), 1), c.observationTargets.splice(d, 1), nm(-1));
          }),
          (a.disconnect = function (a) {
            var b = this,
              c = np.get(a);
            (c.observationTargets.slice().forEach(function (c) {
              return b.unobserve(a, c.target);
            }),
              c.activeTargets.splice(0, c.activeTargets.length));
          }),
          a
        );
      })(),
      ns = (function () {
        function a(a) {
          if (0 == arguments.length)
            throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
          if ("function" != typeof a)
            throw TypeError(
              "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
            );
          nr.connect(this, a);
        }
        return (
          (a.prototype.observe = function (a, b) {
            if (0 == arguments.length)
              throw TypeError(
                "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if (!mY(a))
              throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            nr.observe(this, a, b);
          }),
          (a.prototype.unobserve = function (a) {
            if (0 == arguments.length)
              throw TypeError(
                "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if (!mY(a))
              throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            nr.unobserve(this, a);
          }),
          (a.prototype.disconnect = function () {
            nr.disconnect(this);
          }),
          (a.toString = function () {
            return "function ResizeObserver () { [polyfill code] }";
          }),
          a
        );
      })();
    (a.s(["ResizeObserver", () => ns], 291236), a.s([], 821370));
    var nt = a.i(496297);
    let nu = a3.default.createContext(!0);
    function nv() {
      throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
    }
    let nw =
      "use" in a3.default
        ? () => {
            try {
              return a3.default.use(nu);
            } catch {
              return !1;
            }
          }
        : () => !1;
    function nx(a) {
      let b = a3.default.useRef(nv);
      return (
        a3.default.useInsertionEffect(() => {
          b.current = a;
        }, [a]),
        (...a) => (nw() && nv(), (0, b.current)(...a))
      );
    }
    a.s(["useEffectEvent", () => nx], 953845);
    let ny = aW(),
      nz = [],
      nA = {},
      nB = {
        initial: { scale: 0.97, willChange: "transform" },
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { when: "beforeChildren", duration: 0.1 } },
        scaleIn: { scale: 1 },
        scaleOut: { scale: 0.97 },
      },
      nC = { hidden: { opacity: 0 }, visible: { opacity: 1 } },
      nD = { type: "spring", visualDuration: 0.2, bounce: 0.25 };
    function nE(a) {
      return nG(a) || nI(a);
    }
    function nF(a) {
      return a instanceof Node && a.nodeType === Node.ELEMENT_NODE;
    }
    function nG(a) {
      return nF(a) && "A" === a.nodeName;
    }
    function nH(a) {
      return nF(a) && "INPUT" === a.nodeName;
    }
    function nI(a) {
      return nF(a) && "BUTTON" === a.nodeName;
    }
    function nJ(a) {
      return nF(a) && "SELECT" === a.nodeName;
    }
    function nK(a) {
      return nF(a) && "TEXTAREA" === a.nodeName;
    }
    function nL(a, b) {
      return a.contains(b) || a === b;
    }
    function nM(a) {
      if (!(a instanceof Element)) return !1;
      let b = window.getComputedStyle(a);
      return (
        b.overflowX.includes("auto") ||
        b.overflowX.includes("scroll") ||
        b.overflowY.includes("auto") ||
        b.overflowY.includes("scroll")
      );
    }
    function nN(a, b) {
      return a.reduce((a, c) => ((a[c] = b), a), {});
    }
    function nO(a) {
      return 0 === a ? 0 : `${a / 16}rem`;
    }
    function nP(a, b, c) {
      return (b?.map(c) || []).map((b, c) => (0 === c ? b : { [`@media screen and (min-width: ${a[c - 1]}px)`]: b }));
    }
    function nQ(a, b) {
      return void 0 === a ? b || nz : Array.isArray(a) ? a : [a];
    }
    function nR(a, b, c = nz) {
      if (!Array.isArray(c)) throw Error("the property must be array of numbers");
      if (0 === c.length) return null;
      let { media: d, space: e } = W(a);
      return nP(d, c, (a) => nN(b, nO(e[a])));
    }
    function nS(a, b) {
      let { $size: c, $weight: d } = b,
        { font: e, media: f } = W(b.theme),
        { family: g, sizes: h, weights: i } = e[a],
        j = (d && i[d]) || i.regular,
        k = h[2],
        l = {
          position: "relative",
          fontFamily: g,
          fontWeight: `${j}`,
          padding: "1px 0",
          margin: 0,
          "&:before": { content: '""', display: "block", height: 0 },
          "&:after": { content: '""', display: "block", height: 0 },
          "& > code, & > span": { display: "block" },
          "&:not([hidden])": { display: "block" },
        };
      return c
        ? [
            l,
            ...nP(f, c, (a) =>
              (function (a) {
                let {
                    ascenderHeight: b,
                    descenderHeight: c,
                    fontSize: d,
                    iconSize: e,
                    letterSpacing: f,
                    lineHeight: g,
                  } = a,
                  h = b + c,
                  i = g - h,
                  j = 2 * Math.floor((1.125 * d) / 2) + 1;
                return {
                  fontSize: nO(d),
                  lineHeight: `calc(${g} / ${d})`,
                  letterSpacing: nO(f),
                  transform: `translateY(${nO(c)})`,
                  "&:before": { marginTop: `calc(${nO(0 - h)} - 1px)` },
                  "&:after": { marginBottom: "-1px" },
                  "& svg:not([data-sanity-icon])": { fontSize: `calc(${j} / 16 * 1rem)`, margin: nO((i - j) / 2) },
                  "& [data-sanity-icon]": { fontSize: `calc(${e} / 16 * 1rem)`, margin: nO((i - e) / 2) },
                };
              })(h[a] || k),
            ),
          ]
        : (nS.warned ||
            (console.warn("No size specified for responsive font", { fontKey: a, $size: c, props: b, base: l }),
            (nS.warned = !0)),
          [l]);
    }
    function nT(a) {
      return nS("code", a);
    }
    function nU(a) {
      return nS("heading", a);
    }
    function nV(a) {
      return nS("label", a);
    }
    function nW(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$align, (a) => ({ textAlign: a }));
    }
    function nX(a) {
      return nS("text", a);
    }
    let nY = "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : a.g;
    function nZ(a, b) {
      let c = Symbol.for(a);
      if (typeof document > "u") {
        let c = (0, a3.createContext)(b);
        return ((c.displayName = a), c);
      }
      return ((nY[c] = nY[c] || (0, a3.createContext)(b)), nY[c]);
    }
    let n$ = nZ("@sanity/ui/context/theme", null);
    function n_(a) {
      let b,
        c,
        d,
        e,
        f = (0, a2.c)(15),
        g = (0, a3.useContext)(n$),
        { children: h } = a,
        i = a.scheme ?? (g?.scheme || "light"),
        j = a.theme ?? (g?.theme || null),
        k = a.tone ?? (g?.tone || "default");
      a: {
        let a;
        if (!j) {
          b = null;
          break a;
        }
        (f[0] !== j || f[1] !== i || f[2] !== k
          ? ((a = { version: 0, theme: j, scheme: i, tone: k }), (f[0] = j), (f[1] = i), (f[2] = k), (f[3] = a))
          : (a = f[3]),
          (b = a));
      }
      let l = b;
      b: {
        let a;
        if (!j) {
          c = null;
          break b;
        }
        (f[4] !== j || f[5] !== i || f[6] !== k
          ? ((a = aY(j, i, k)), (f[4] = j), (f[5] = i), (f[6] = k), (f[7] = a))
          : (a = f[7]),
          (c = a));
      }
      let m = c;
      if (!m) {
        let a;
        return (
          f[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, a1.jsx)("pre", { children: 'ThemeProvider: no "theme" property provided' })), (f[8] = a))
            : (a = f[8]),
          a
        );
      }
      return (
        f[9] !== h || f[10] !== m
          ? ((d = (0, a1.jsx)(cU, { theme: m, children: h })), (f[9] = h), (f[10] = m), (f[11] = d))
          : (d = f[11]),
        f[12] !== d || f[13] !== l
          ? ((e = (0, a1.jsx)(n$.Provider, { value: l, children: d })), (f[12] = d), (f[13] = l), (f[14] = e))
          : (e = f[14]),
        e
      );
    }
    function n0() {
      let a = (0, a3.useContext)(n$);
      if (!a) throw Error("useRootTheme(): missing context value");
      return a;
    }
    function n1(a) {
      let b,
        c = (0, a2.c)(5),
        { children: d, scheme: e, tone: f } = a,
        g = n0(),
        h = e || g.scheme;
      return (
        c[0] !== d || c[1] !== g.theme || c[2] !== h || c[3] !== f
          ? ((b = (0, a1.jsx)(n_, { scheme: h, theme: g.theme, tone: f, children: d })),
            (c[0] = d),
            (c[1] = g.theme),
            (c[2] = h),
            (c[3] = f),
            (c[4] = b))
          : (b = c[4]),
        b
      );
    }
    function n2() {
      return cT();
    }
    function n3() {
      let a,
        b = (0, a2.c)(2),
        c = cT();
      return (b[0] !== c ? ((a = W(c)), (b[0] = c), (b[1] = a)) : (a = b[1]), a);
    }
    function n4(a) {
      let { card: b, media: c } = W(a.theme),
        d = `${b.border?.width ?? 1}px solid var(--card-border-color)`;
      return nP(c, a.$border, (a) => (a ? { "&&": { border: d } } : { "&&": { border: 0 } }));
    }
    function n5(a) {
      let { card: b, media: c } = W(a.theme),
        d = `${b.border?.width ?? 1}px solid var(--card-border-color)`;
      return nP(c, a.$borderTop, (a) => (a ? { "&&": { borderTop: d } } : { "&&": { borderTop: 0 } }));
    }
    function n6(a) {
      let { card: b, media: c } = W(a.theme),
        d = `${b.border?.width ?? 1}px solid var(--card-border-color)`;
      return nP(c, a.$borderRight, (a) => (a ? { "&&": { borderRight: d } } : { "&&": { borderRight: 0 } }));
    }
    function n7(a) {
      let { card: b, media: c } = W(a.theme),
        d = `${b.border?.width ?? 1}px solid var(--card-border-color)`;
      return nP(c, a.$borderBottom, (a) => (a ? { "&&": { borderBottom: d } } : { "&&": { borderBottom: 0 } }));
    }
    function n8(a) {
      let { card: b, media: c } = W(a.theme),
        d = `${b.border?.width ?? 1}px solid var(--card-border-color)`;
      return nP(c, a.$borderLeft, (a) => (a ? { "&&": { borderLeft: d } } : { "&&": { borderLeft: 0 } }));
    }
    ((n_.displayName = "ThemeProvider"), (n1.displayName = "ThemeColorProvider"));
    let n9 = { '&[data-as="ul"],&[data-as="ol"]': { listStyle: "none" } },
      oa = { content: "content-box", border: "border-box" },
      ob = { stretch: "stretch", fill: "100%" };
    function oc(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$display, (a) => ({ "&:not([hidden])": { display: a } }));
    }
    function od(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$sizing, (a) => ({ boxSizing: oa[a] }));
    }
    function oe(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$height, (a) => ({ height: ob[a] }));
    }
    function of(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$overflow, (a) => ({ overflow: a }));
    }
    let og = { minWidth: 0, minHeight: 0 };
    function oh() {
      return [og, oi];
    }
    function oi(a) {
      let { media: b } = W(a.theme);
      return a.$flex ? nP(b, a.$flex, (a) => ({ flex: `${a}` })) : nz;
    }
    let oj = { "&&:not([hidden])": { display: "flex" } };
    function ok(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$align, (a) => ({ alignItems: a }));
    }
    function ol(a) {
      let { media: b, space: c } = W(a.theme);
      return nP(b, a.$gap, (a) => ({ gap: a ? nO(c[a]) : void 0 }));
    }
    function om(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$wrap, (a) => ({ flexWrap: a }));
    }
    function on(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$justify, (a) => ({ justifyContent: a }));
    }
    function oo(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$direction, (a) => ({ flexDirection: a }));
    }
    function op(a) {
      return `inset 0 0 0 ${a.width}px ${a.color}`;
    }
    function oq(a) {
      let { base: b, border: c, focusRing: d } = a,
        e = d.offset + d.width,
        f = 0 - d.offset,
        g = b ? b.bg : "var(--card-bg-color)";
      return [
        f > 0 && `inset 0 0 0 ${f}px var(--card-focus-ring-color)`,
        c && op(c),
        f < 0 && `0 0 0 ${0 - f}px ${g}`,
        e > 0 && `0 0 0 ${e}px var(--card-focus-ring-color)`,
      ]
        .filter(Boolean)
        .join(",");
    }
    let or = { auto: "auto", full: "1 / -1" },
      os = { auto: "auto", full: "1 / -1" };
    function ot(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$row, (a) => ("number" == typeof a ? { gridRow: `span ${a} / span ${a}` } : { gridRow: or[a] }));
    }
    function ou(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$rowStart, (a) => ({ gridRowStart: `${a}` }));
    }
    function ov(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$rowEnd, (a) => ({ gridRowEnd: `${a}` }));
    }
    function ow(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$column, (a) =>
        "number" == typeof a ? { gridColumn: `span ${a} / span ${a}` } : { gridColumn: os[a] },
      );
    }
    function ox(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$columnStart, (a) => ({ gridColumnStart: `${a}` }));
    }
    function oy(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$columnEnd, (a) => ({ gridColumnEnd: `${a}` }));
    }
    let oz = { "&&:not([hidden])": { display: "grid" }, '&[data-as="ul"],&[data-as="ol"]': { listStyle: "none" } },
      oA = { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" },
      oB = { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" };
    function oC(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$autoFlow, (a) => ({ gridAutoFlow: a }));
    }
    function oD(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$autoRows, (a) => ({ gridAutoRows: a && oB[a] }));
    }
    function oE(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$autoCols, (a) => ({ gridAutoColumns: a && oA[a] }));
    }
    function oF(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$columns, (a) => ({ gridTemplateColumns: a && `repeat(${a},minmax(0,1fr));` }));
    }
    function oG(a) {
      let { media: b } = W(a.theme);
      return nP(b, a.$rows, (a) => ({ gridTemplateRows: a && `repeat(${a},minmax(0,1fr));` }));
    }
    function oH(a) {
      let { media: b, space: c } = W(a.theme);
      return nP(b, a.$gap, (a) => ({ gridGap: a ? nO(c[a]) : void 0 }));
    }
    function oI(a) {
      let { media: b, space: c } = W(a.theme);
      return nP(b, a.$gapX, (a) => ({ columnGap: a ? nO(c[a]) : void 0 }));
    }
    function oJ(a) {
      let { media: b, space: c } = W(a.theme);
      return nP(b, a.$gapY, (a) => ({ rowGap: a ? nO(c[a]) : void 0 }));
    }
    function oK(a) {
      let { $fontSize: b, $iconLeft: c, $iconRight: d, $padding: e, $space: f } = a,
        { font: g, media: h, space: i } = W(a.theme),
        j = Math.max(e.length, f.length, b.length),
        k = [],
        l = [],
        m = [];
      for (let a = 0; a < j; a += 1)
        ((m[a] = void 0 === b[a] ? m[a - 1] : b[a]),
          (k[a] = void 0 === e[a] ? k[a - 1] : e[a]),
          (l[a] = void 0 === f[a] ? l[a - 1] : f[a]));
      return nP(h, k, (a, b) => {
        let e = g.text.sizes[m[b]] || g.text.sizes[2],
          f = e.lineHeight - e.ascenderHeight - e.descenderHeight,
          h = i[k[b]],
          j = i[l[b]],
          n = {
            paddingTop: nO(h - e.ascenderHeight),
            paddingRight: nO(h),
            paddingBottom: nO(h - e.descenderHeight),
            paddingLeft: nO(h),
          };
        return (d && (n.paddingRight = nO(h + f + j)), c && (n.paddingLeft = nO(h + f + j)), n);
      });
    }
    function oL(a) {
      return oK({ ...a, $iconRight: !0 });
    }
    let oM = cZ`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;
    function oN() {
      return oM;
    }
    function oO(a) {
      let { $scheme: b, $tone: c, $weight: d } = a,
        { color: e, font: f } = W(a.theme);
      return cZ`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${f.text.family};
    font-weight: ${(d && f.text.weights[d]) || f.text.weights.regular};
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

    &[data-scheme='${b}'][data-tone='${c}'] {
      --input-fg-color: ${e.input.default.enabled.fg};
      --input-placeholder-color: ${e.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${e.input.default.enabled.fg};
        --input-placeholder-color: ${e.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${e.input.default.disabled.fg};
        --input-placeholder-color: ${e.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${e.input.invalid.enabled.fg};
        --input-placeholder-color: ${e.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${e.input.default.readOnly.fg};
        --input-placeholder-color: ${e.input.default.readOnly.placeholder};
      }
    }
  `;
    }
    function oP(a) {
      let { font: b, media: c } = W(a.theme);
      return nP(c, a.$fontSize, (a) => {
        let c = b.text.sizes[a] || b.text.sizes[2];
        return { fontSize: nO(c.fontSize), lineHeight: `${c.lineHeight / c.fontSize}` };
      });
    }
    function oQ(a) {
      let { $hasPrefix: b, $hasSuffix: c, $scheme: d, $tone: e, $unstableDisableFocusRing: f } = a,
        { color: g, input: h } = W(a.theme);
      return cZ`
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

    border-top-left-radius: ${b ? 0 : void 0};
    border-bottom-left-radius: ${b ? 0 : void 0};
    border-top-right-radius: ${c ? 0 : void 0};
    border-bottom-right-radius: ${c ? 0 : void 0};

    &[data-scheme='${d}'][data-tone='${e}'] {
      --card-bg-color: ${g.input.default.enabled.bg};
      --card-fg-color: ${g.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${op({ color: g.input.default.enabled.border, width: h.border.width })};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${g.input.invalid.enabled.bg};
        --card-fg-color: ${g.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${op({ color: g.input.invalid.enabled.border, width: h.border.width })};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${f ? void 0 : oq({ border: { color: g.input.default.enabled.border, width: h.border.width }, focusRing: h.text.focusRing })};
        }

        &:not([data-border]) {
          --input-box-shadow: ${f ? void 0 : oq({ focusRing: h.text.focusRing })};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${g.input.default.disabled.bg} !important;
        --card-fg-color: ${g.input.default.disabled.fg} !important;
        --card-icon-color: ${g.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${op({ color: g.input.default.disabled.border, width: h.border.width })};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${g.input.invalid.disabled.bg} !important;
        --card-fg-color: ${g.input.invalid.disabled.fg} !important;
        --card-icon-color: ${g.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${op({ color: g.input.invalid.disabled.border, width: h.border.width })};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${g.input.default.readOnly.bg} !important;
        --card-fg-color: ${g.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${g.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${g.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${g.input.default.hovered.bg};
          --card-fg-color: ${g.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${g.input.invalid.hovered.bg};
          --card-fg-color: ${g.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${op({ color: g.input.default.hovered.border, width: h.border.width })};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${op({ color: g.input.invalid.hovered.border, width: h.border.width })};
        }
      }
    }
  `;
    }
    function oR(a) {
      let { theme: b } = a;
      return [
        nR(b, ["padding"], a.$padding),
        nR(b, ["paddingLeft", "paddingRight"], a.$paddingX),
        nR(b, ["paddingTop", "paddingBottom"], a.$paddingY),
        nR(b, ["paddingTop"], a.$paddingTop),
        nR(b, ["paddingRight"], a.$paddingRight),
        nR(b, ["paddingBottom"], a.$paddingBottom),
        nR(b, ["paddingLeft"], a.$paddingLeft),
      ].filter(Boolean);
    }
    function oS(a) {
      let { media: b, radius: c } = W(a.theme);
      return nP(b, a.$radius, (a) => {
        let b = 0;
        return ("number" == typeof a && (b = nO(c[a])), "full" === a && (b = "9999px"), { borderRadius: b });
      });
    }
    function oT(a, b) {
      return `${a.map(nO).join(" ")} ${b}`;
    }
    let oU = c$.span.withConfig({
        displayName: "SpanWithTextOverflow",
        componentId: "sc-ol2i3b-0",
      })`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,
      oV = c$.div.withConfig({ displayName: "StyledLabel", componentId: "sc-1luap7z-0" })(nV, nW, function (a) {
        let { $accent: b, $muted: c } = a,
          { font: d } = W(a.theme);
        return cZ`
    text-transform: uppercase;

    ${
      b &&
      cZ`
      color: var(--card-accent-fg-color);
    `
    }

    ${
      c &&
      cZ`
      color: var(--card-muted-fg-color);
    `
    }

    & code {
      font-family: ${d.code.family};
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
      oW = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n = (0, a2.c)(26);
        n[0] !== a
          ? (({ accent: c, align: d, children: e, muted: g, size: h, textOverflow: i, weight: j, ...f } = a),
            (n[0] = a),
            (n[1] = c),
            (n[2] = d),
            (n[3] = e),
            (n[4] = f),
            (n[5] = g),
            (n[6] = h),
            (n[7] = i),
            (n[8] = j))
          : ((c = n[1]), (d = n[2]), (e = n[3]), (f = n[4]), (g = n[5]), (h = n[6]), (i = n[7]), (j = n[8]));
        let o = void 0 !== g && g,
          p = void 0 === h ? 2 : h,
          q = e;
        if ("ellipsis" === i) {
          let a;
          (n[9] !== q ? ((a = (0, a1.jsx)(oU, { children: q })), (n[9] = q), (n[10] = a)) : (a = n[10]), (q = a));
        } else {
          let a;
          (n[11] !== q ? ((a = (0, a1.jsx)("span", { children: q })), (n[11] = q), (n[12] = a)) : (a = n[12]), (q = a));
        }
        return (
          n[13] !== d ? ((k = nQ(d)), (n[13] = d), (n[14] = k)) : (k = n[14]),
          n[15] !== p ? ((l = nQ(p)), (n[15] = p), (n[16] = l)) : (l = n[16]),
          n[17] !== c ||
          n[18] !== q ||
          n[19] !== o ||
          n[20] !== b ||
          n[21] !== f ||
          n[22] !== k ||
          n[23] !== l ||
          n[24] !== j
            ? ((m = (0, a1.jsx)(oV, {
                "data-ui": "Label",
                ...f,
                $accent: c,
                $align: k,
                $muted: o,
                $size: l,
                $weight: j,
                ref: b,
                children: q,
              })),
              (n[17] = c),
              (n[18] = q),
              (n[19] = o),
              (n[20] = b),
              (n[21] = f),
              (n[22] = k),
              (n[23] = l),
              (n[24] = j),
              (n[25] = m))
            : (m = n[25]),
          m
        );
      });
    oW.displayName = "ForwardRef(Label)";
    let oX = c$.div.withConfig({ displayName: "StyledAvatar", componentId: "sc-1rj7kl0-0" })(
        function (a) {
          let { avatar: b, media: c } = W(a.theme);
          return nP(c, a.$size, (a) => {
            let c = b.sizes[a] || b.sizes[0];
            return {
              width: nO(c.size),
              height: nO(c.size),
              borderRadius: nO(c.size / 2),
              "&>svg": { width: nO(c.size), height: nO(c.size), borderRadius: nO(c.size / 2) },
            };
          });
        },
        function (a) {
          let { $color: b } = a,
            { avatar: c } = W(a.theme);
          return {
            "--avatar-bg-color": `var(--card-avatar-${b}-bg-color)`,
            "--avatar-fg-color": `var(--card-avatar-${b}-fg-color)`,
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
              "&:focus": { boxShadow: oq({ focusRing: c.focusRing }) },
              "&:focus:not(:focus-visible)": { boxShadow: "none" },
            },
          };
        },
      ),
      oY = c$.div.withConfig({ displayName: "Arrow", componentId: "sc-1rj7kl0-1" })(function () {
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
      oZ = c$.ellipse.withConfig({ displayName: "BgStroke", componentId: "sc-1rj7kl0-2" })(function () {
        return { strokeWidth: "4px", stroke: "var(--card-bg-color)" };
      }),
      o$ = c$.ellipse.withConfig({ displayName: "Stroke", componentId: "sc-1rj7kl0-3" })(function () {
        return {
          strokeWidth: "2px",
          stroke: "var(--avatar-bg-color)",
          '[data-status="editing"] &': { strokeDasharray: "2 4", strokeLinecap: "round" },
        };
      }),
      o_ = c$.div.withConfig({ displayName: "Initials", componentId: "sc-1rj7kl0-4" })(function () {
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
      o0 = c$(oW).withConfig({ displayName: "InitialsLabel", componentId: "sc-1rj7kl0-5" })({ color: "inherit" }),
      o1 = c$.svg.withConfig({ displayName: "AvatarImage", componentId: "sc-1rj7kl0-6" })(function () {
        return { position: "relative" };
      }),
      o2 = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w = (0, a2.c)(46);
        w[0] !== a
          ? (({
              __unstable_hideInnerStroke: c,
              as: f,
              color: k,
              src: j,
              title: n,
              initials: g,
              onImageLoadError: h,
              arrowPosition: e,
              animateArrowFrom: d,
              status: l,
              size: m,
              ...i
            } = a),
            (w[0] = a),
            (w[1] = c),
            (w[2] = d),
            (w[3] = e),
            (w[4] = f),
            (w[5] = g),
            (w[6] = h),
            (w[7] = i),
            (w[8] = j),
            (w[9] = k),
            (w[10] = l),
            (w[11] = m),
            (w[12] = n))
          : ((c = w[1]),
            (d = w[2]),
            (e = w[3]),
            (f = w[4]),
            (g = w[5]),
            (h = w[6]),
            (i = w[7]),
            (j = w[8]),
            (k = w[9]),
            (l = w[10]),
            (m = w[11]),
            (n = w[12]));
        let x = void 0 === k ? "gray" : k,
          y = void 0 === l ? "online" : l,
          z = void 0 === m ? 1 : m,
          { avatar: A } = n3(),
          B = c4.default.isValidElementType(f) ? f : "div",
          C = nQ(z),
          D = (A.sizes[C[0]] || A.sizes[0]).size,
          E = D / 2,
          F = (0, a3.useId)(),
          [G, H] = (0, a3.useState)(d || e || "inside"),
          [I, J] = (0, a3.useState)(!1),
          K = `avatar-image-${F}`;
        (w[13] !== G || w[14] !== e
          ? ((o = () => {
              if (G === e) return;
              let a = requestAnimationFrame(() => H(e));
              return () => cancelAnimationFrame(a);
            }),
            (p = [G, e]),
            (w[13] = G),
            (w[14] = e),
            (w[15] = o),
            (w[16] = p))
          : ((o = w[15]), (p = w[16])),
          (0, a3.useEffect)(o, p),
          w[17] !== j
            ? ((q = () => {
                j && J(!1);
              }),
              (r = [j]),
              (w[17] = j),
              (w[18] = q),
              (w[19] = r))
            : ((q = w[18]), (r = w[19])),
          (0, a3.useEffect)(q, r),
          w[20] !== h
            ? ((s = () => {
                (J(!0), h && h(Error("Avatar: the image failed to load")));
              }),
              (w[20] = h),
              (w[21] = s))
            : (s = w[21]));
        let L = s,
          M = "string" == typeof B ? B : void 0;
        (w[22] !== x
          ? ((t = (0, a1.jsx)(oY, {
              children: (0, a1.jsx)("svg", {
                width: "11",
                height: "7",
                viewBox: "0 0 11 7",
                fill: "none",
                children: (0, a1.jsx)("path", {
                  d: "M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",
                  fill: x,
                }),
              }),
            })),
            (w[22] = x),
            (w[23] = t))
          : (t = w[23]),
          w[24] !== c || w[25] !== E || w[26] !== D || w[27] !== L || w[28] !== I || w[29] !== K || w[30] !== j
            ? ((u =
                !I &&
                j &&
                (0, a1.jsxs)(o1, {
                  viewBox: `0 0 ${D} ${D}`,
                  fill: "none",
                  children: [
                    (0, a1.jsx)("defs", {
                      children: (0, a1.jsx)("pattern", {
                        id: K,
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1",
                        children: (0, a1.jsx)("image", { href: j, width: "1", height: "1", onError: L }),
                      }),
                    }),
                    (0, a1.jsx)("circle", { cx: E, cy: E, r: E, fill: `url(#${K})` }),
                    !c && (0, a1.jsx)(oZ, { cx: E, cy: E, rx: E, ry: E, vectorEffect: "non-scaling-stroke" }),
                    (0, a1.jsx)(o$, { cx: E, cy: E, rx: E, ry: E, vectorEffect: "non-scaling-stroke" }),
                  ],
                })),
              (w[24] = c),
              (w[25] = E),
              (w[26] = D),
              (w[27] = L),
              (w[28] = I),
              (w[29] = K),
              (w[30] = j),
              (w[31] = u))
            : (u = w[31]));
        let N =
          (I || !j) &&
          g &&
          (0, a1.jsx)(a1.Fragment, {
            children: (0, a1.jsx)(o_, {
              children: (0, a1.jsx)(o0, { forwardedAs: "span", size: C.map(o3), weight: "medium", children: g }),
            }),
          });
        return (
          w[32] !== oX ||
          w[33] !== G ||
          w[34] !== B ||
          w[35] !== x ||
          w[36] !== b ||
          w[37] !== i ||
          w[38] !== C ||
          w[39] !== y ||
          w[40] !== t ||
          w[41] !== u ||
          w[42] !== N ||
          w[43] !== M ||
          w[44] !== n
            ? ((v = (0, a1.jsxs)(oX, {
                as: B,
                "data-as": M,
                "data-ui": "Avatar",
                ...i,
                $color: x,
                $size: C,
                "aria-label": n,
                "data-arrow-position": G,
                "data-status": y,
                ref: b,
                title: n,
                children: [t, u, N],
              })),
              (w[32] = oX),
              (w[33] = G),
              (w[34] = B),
              (w[35] = x),
              (w[36] = b),
              (w[37] = i),
              (w[38] = C),
              (w[39] = y),
              (w[40] = t),
              (w[41] = u),
              (w[42] = N),
              (w[43] = M),
              (w[44] = n),
              (w[45] = v))
            : (v = w[45]),
          v
        );
      });
    function o3(a) {
      return 1 === a ? 1 : 2 === a ? 3 : 5 * (3 === a);
    }
    o2.displayName = "ForwardRef(Avatar)";
    let o4 = c$.div.withConfig({ displayName: "StyledAvatarCounter", componentId: "sc-1ydx86y-0" })(
        function (a) {
          let { avatar: b, media: c } = W(a.theme);
          return nP(c, a.$size, (a) => {
            let c = b.sizes[a];
            return c ? { borderRadius: nO(c.size / 2), minWidth: nO(c.size), height: nO(c.size) } : nA;
          });
        },
        function (a) {
          let { space: b } = W(a.theme);
          return cZ`
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
    padding: 0 ${nO(b[2])};

    &:not([hidden]) {
      display: flex;
    }
  `;
        },
      ),
      o5 = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = (0, a2.c)(20),
          { count: m, size: n } = a,
          o = void 0 === n ? 1 : n;
        if (l[0] !== b || l[1] !== o) {
          let a = nQ(o);
          ((d = o4),
            (g = a),
            (h = "AvatarCounter"),
            (i = b),
            (c = oW),
            (e = "span"),
            (f = a.map(o6)),
            (l[0] = b),
            (l[1] = o),
            (l[2] = c),
            (l[3] = d),
            (l[4] = e),
            (l[5] = f),
            (l[6] = g),
            (l[7] = h),
            (l[8] = i));
        } else ((c = l[2]), (d = l[3]), (e = l[4]), (f = l[5]), (g = l[6]), (h = l[7]), (i = l[8]));
        return (
          l[9] !== c || l[10] !== m || l[11] !== e || l[12] !== f
            ? ((j = (0, a1.jsx)(c, { as: e, size: f, weight: "medium", children: m })),
              (l[9] = c),
              (l[10] = m),
              (l[11] = e),
              (l[12] = f),
              (l[13] = j))
            : (j = l[13]),
          l[14] !== d || l[15] !== g || l[16] !== h || l[17] !== i || l[18] !== j
            ? ((k = (0, a1.jsx)(d, { $size: g, "data-ui": h, ref: i, children: j })),
              (l[14] = d),
              (l[15] = g),
              (l[16] = h),
              (l[17] = i),
              (l[18] = j),
              (l[19] = k))
            : (k = l[19]),
          k
        );
      });
    function o6(a) {
      return 1 === a ? 1 : 2 === a ? 3 : 5 * (3 === a);
    }
    o5.displayName = "ForwardRef(AvatarCounter)";
    let o7 = cZ`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,
      o8 = c$.div.withConfig({ displayName: "StyledAvatarStack", componentId: "sc-cysmbb-0" })(
        function (a) {
          let { avatar: b, media: c } = W(a.theme);
          return nP(c, a.$size, (a) => {
            let c = b.sizes[a];
            return c ? { "& > div + div": { marginLeft: nO(c.distance) } } : nA;
          });
        },
        function () {
          return o7;
        },
      ),
      o9 = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = (0, a2.c)(38);
        p[0] !== a
          ? (({ children: c, maxLength: e, size: f, ...d } = a),
            (p[0] = a),
            (p[1] = c),
            (p[2] = d),
            (p[3] = e),
            (p[4] = f))
          : ((c = p[1]), (d = p[2]), (e = p[3]), (f = p[4]));
        let q = void 0 === e ? 4 : e,
          r = void 0 === f ? 1 : f;
        if (p[5] !== c || p[6] !== q || p[7] !== b || p[8] !== d || p[9] !== r) {
          let a,
            e,
            f = a3.Children.toArray(c).filter(a3.isValidElement),
            o = Math.max(q, 0);
          p[18] !== r ? ((a = nQ(r)), (p[18] = r), (p[19] = a)) : (a = p[19]);
          let s = a,
            t = f.length,
            u = t - (o - 1),
            v = u > 1 ? f.slice(u, t) : f;
          ((g = o8),
            (h = "AvatarStack"),
            (i = d),
            (j = b),
            (k = s),
            p[20] !== t || p[21] !== s
              ? ((l = 0 === t && (0, a1.jsx)("div", { children: (0, a1.jsx)(o5, { count: t, size: s }) })),
                (p[20] = t),
                (p[21] = s),
                (p[22] = l))
              : (l = p[22]),
            p[23] !== u || p[24] !== t || p[25] !== s
              ? ((m = 0 !== t && u > 1 && (0, a1.jsx)("div", { children: (0, a1.jsx)(o5, { count: u, size: s }) })),
                (p[23] = u),
                (p[24] = t),
                (p[25] = s),
                (p[26] = m))
              : (m = p[26]),
            p[27] !== s
              ? ((e = (a, b) => (0, a1.jsx)("div", { children: (0, a3.cloneElement)(a, { size: s }) }, String(b))),
                (p[27] = s),
                (p[28] = e))
              : (e = p[28]),
            (n = v.map(e)),
            (p[5] = c),
            (p[6] = q),
            (p[7] = b),
            (p[8] = d),
            (p[9] = r),
            (p[10] = g),
            (p[11] = h),
            (p[12] = i),
            (p[13] = j),
            (p[14] = k),
            (p[15] = l),
            (p[16] = m),
            (p[17] = n));
        } else ((g = p[10]), (h = p[11]), (i = p[12]), (j = p[13]), (k = p[14]), (l = p[15]), (m = p[16]), (n = p[17]));
        return (
          p[29] !== g ||
          p[30] !== h ||
          p[31] !== i ||
          p[32] !== j ||
          p[33] !== k ||
          p[34] !== l ||
          p[35] !== m ||
          p[36] !== n
            ? ((o = (0, a1.jsxs)(g, { "data-ui": h, ...i, ref: j, $size: k, children: [l, m, n] })),
              (p[29] = g),
              (p[30] = h),
              (p[31] = i),
              (p[32] = j),
              (p[33] = k),
              (p[34] = l),
              (p[35] = m),
              (p[36] = n),
              (p[37] = o))
            : (o = p[37]),
          o
        );
      });
    o9.displayName = "ForwardRef(AvatarStack)";
    let pa = c$.div.withConfig({ displayName: "StyledBox", componentId: "sc-1hhky9f-0" })(
        function () {
          return n9;
        },
        oh,
        function () {
          return [od, oe, of, oc];
        },
        function () {
          return [ot, ou, ov, ow, ox, oy];
        },
        function (a) {
          let { theme: b } = a;
          return [
            nR(b, ["margin"], a.$margin),
            nR(b, ["marginLeft", "marginRight"], a.$marginX),
            nR(b, ["marginTop", "marginBottom"], a.$marginY),
            nR(b, ["marginTop"], a.$marginTop),
            nR(b, ["marginRight"], a.$marginRight),
            nR(b, ["marginBottom"], a.$marginBottom),
            nR(b, ["marginLeft"], a.$marginLeft),
          ].filter(Boolean);
        },
        oR,
      ),
      pb = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M,
          N,
          O,
          P,
          Q,
          R,
          S,
          T,
          U,
          V,
          W,
          X,
          Y,
          Z,
          $,
          _,
          aa,
          ab = (0, a2.c)(109);
        ab[0] !== a
          ? (({
              as: z,
              column: c,
              columnStart: e,
              columnEnd: d,
              display: A,
              flex: f,
              height: g,
              margin: B,
              marginX: l,
              marginY: m,
              marginTop: k,
              marginRight: j,
              marginBottom: h,
              marginLeft: i,
              overflow: n,
              padding: C,
              paddingX: s,
              paddingY: t,
              paddingTop: r,
              paddingRight: q,
              paddingBottom: o,
              paddingLeft: p,
              row: v,
              rowStart: x,
              rowEnd: w,
              sizing: y,
              ...u
            } = a),
            (ab[0] = a),
            (ab[1] = c),
            (ab[2] = d),
            (ab[3] = e),
            (ab[4] = f),
            (ab[5] = g),
            (ab[6] = h),
            (ab[7] = i),
            (ab[8] = j),
            (ab[9] = k),
            (ab[10] = l),
            (ab[11] = m),
            (ab[12] = n),
            (ab[13] = o),
            (ab[14] = p),
            (ab[15] = q),
            (ab[16] = r),
            (ab[17] = s),
            (ab[18] = t),
            (ab[19] = u),
            (ab[20] = v),
            (ab[21] = w),
            (ab[22] = x),
            (ab[23] = y),
            (ab[24] = z),
            (ab[25] = A),
            (ab[26] = B),
            (ab[27] = C))
          : ((c = ab[1]),
            (d = ab[2]),
            (e = ab[3]),
            (f = ab[4]),
            (g = ab[5]),
            (h = ab[6]),
            (i = ab[7]),
            (j = ab[8]),
            (k = ab[9]),
            (l = ab[10]),
            (m = ab[11]),
            (n = ab[12]),
            (o = ab[13]),
            (p = ab[14]),
            (q = ab[15]),
            (r = ab[16]),
            (s = ab[17]),
            (t = ab[18]),
            (u = ab[19]),
            (v = ab[20]),
            (w = ab[21]),
            (x = ab[22]),
            (y = ab[23]),
            (z = ab[24]),
            (A = ab[25]),
            (B = ab[26]),
            (C = ab[27]));
        let ac = void 0 === z ? "div" : z,
          ad = void 0 === A ? "block" : A,
          ae = void 0 === B ? 0 : B,
          af = void 0 === C ? 0 : C,
          ag = "string" == typeof ac ? ac : void 0;
        return (
          ab[28] !== c ? ((D = nQ(c)), (ab[28] = c), (ab[29] = D)) : (D = ab[29]),
          ab[30] !== e ? ((E = nQ(e)), (ab[30] = e), (ab[31] = E)) : (E = ab[31]),
          ab[32] !== d ? ((F = nQ(d)), (ab[32] = d), (ab[33] = F)) : (F = ab[33]),
          ab[34] !== ad ? ((G = nQ(ad)), (ab[34] = ad), (ab[35] = G)) : (G = ab[35]),
          ab[36] !== f ? ((H = nQ(f)), (ab[36] = f), (ab[37] = H)) : (H = ab[37]),
          ab[38] !== g ? ((I = nQ(g)), (ab[38] = g), (ab[39] = I)) : (I = ab[39]),
          ab[40] !== ae ? ((J = nQ(ae)), (ab[40] = ae), (ab[41] = J)) : (J = ab[41]),
          ab[42] !== l ? ((K = nQ(l)), (ab[42] = l), (ab[43] = K)) : (K = ab[43]),
          ab[44] !== m ? ((L = nQ(m)), (ab[44] = m), (ab[45] = L)) : (L = ab[45]),
          ab[46] !== k ? ((M = nQ(k)), (ab[46] = k), (ab[47] = M)) : (M = ab[47]),
          ab[48] !== j ? ((N = nQ(j)), (ab[48] = j), (ab[49] = N)) : (N = ab[49]),
          ab[50] !== h ? ((O = nQ(h)), (ab[50] = h), (ab[51] = O)) : (O = ab[51]),
          ab[52] !== i ? ((P = nQ(i)), (ab[52] = i), (ab[53] = P)) : (P = ab[53]),
          ab[54] !== n ? ((Q = nQ(n)), (ab[54] = n), (ab[55] = Q)) : (Q = ab[55]),
          ab[56] !== af ? ((R = nQ(af)), (ab[56] = af), (ab[57] = R)) : (R = ab[57]),
          ab[58] !== s ? ((S = nQ(s)), (ab[58] = s), (ab[59] = S)) : (S = ab[59]),
          ab[60] !== t ? ((T = nQ(t)), (ab[60] = t), (ab[61] = T)) : (T = ab[61]),
          ab[62] !== r ? ((U = nQ(r)), (ab[62] = r), (ab[63] = U)) : (U = ab[63]),
          ab[64] !== q ? ((V = nQ(q)), (ab[64] = q), (ab[65] = V)) : (V = ab[65]),
          ab[66] !== o ? ((W = nQ(o)), (ab[66] = o), (ab[67] = W)) : (W = ab[67]),
          ab[68] !== p ? ((X = nQ(p)), (ab[68] = p), (ab[69] = X)) : (X = ab[69]),
          ab[70] !== v ? ((Y = nQ(v)), (ab[70] = v), (ab[71] = Y)) : (Y = ab[71]),
          ab[72] !== x ? ((Z = nQ(x)), (ab[72] = x), (ab[73] = Z)) : (Z = ab[73]),
          ab[74] !== w ? (($ = nQ(w)), (ab[74] = w), (ab[75] = $)) : ($ = ab[75]),
          ab[76] !== y ? ((_ = nQ(y)), (ab[76] = y), (ab[77] = _)) : (_ = ab[77]),
          ab[78] !== ac ||
          ab[79] !== a.children ||
          ab[80] !== b ||
          ab[81] !== u ||
          ab[82] !== I ||
          ab[83] !== J ||
          ab[84] !== K ||
          ab[85] !== L ||
          ab[86] !== M ||
          ab[87] !== N ||
          ab[88] !== O ||
          ab[89] !== P ||
          ab[90] !== Q ||
          ab[91] !== R ||
          ab[92] !== S ||
          ab[93] !== T ||
          ab[94] !== U ||
          ab[95] !== V ||
          ab[96] !== W ||
          ab[97] !== X ||
          ab[98] !== Y ||
          ab[99] !== Z ||
          ab[100] !== $ ||
          ab[101] !== _ ||
          ab[102] !== ag ||
          ab[103] !== D ||
          ab[104] !== E ||
          ab[105] !== F ||
          ab[106] !== G ||
          ab[107] !== H
            ? ((aa = (0, a1.jsx)(pa, {
                "data-as": ag,
                "data-ui": "Box",
                ...u,
                $column: D,
                $columnStart: E,
                $columnEnd: F,
                $display: G,
                $flex: H,
                $height: I,
                $margin: J,
                $marginX: K,
                $marginY: L,
                $marginTop: M,
                $marginRight: N,
                $marginBottom: O,
                $marginLeft: P,
                $overflow: Q,
                $padding: R,
                $paddingX: S,
                $paddingY: T,
                $paddingTop: U,
                $paddingRight: V,
                $paddingBottom: W,
                $paddingLeft: X,
                $row: Y,
                $rowStart: Z,
                $rowEnd: $,
                $sizing: _,
                as: ac,
                ref: b,
                children: a.children,
              })),
              (ab[78] = ac),
              (ab[79] = a.children),
              (ab[80] = b),
              (ab[81] = u),
              (ab[82] = I),
              (ab[83] = J),
              (ab[84] = K),
              (ab[85] = L),
              (ab[86] = M),
              (ab[87] = N),
              (ab[88] = O),
              (ab[89] = P),
              (ab[90] = Q),
              (ab[91] = R),
              (ab[92] = S),
              (ab[93] = T),
              (ab[94] = U),
              (ab[95] = V),
              (ab[96] = W),
              (ab[97] = X),
              (ab[98] = Y),
              (ab[99] = Z),
              (ab[100] = $),
              (ab[101] = _),
              (ab[102] = ag),
              (ab[103] = D),
              (ab[104] = E),
              (ab[105] = F),
              (ab[106] = G),
              (ab[107] = H),
              (ab[108] = aa))
            : (aa = ab[108]),
          aa
        );
      });
    pb.displayName = "ForwardRef(Box)";
    let pc = c$.div.withConfig({ displayName: "StyledText", componentId: "sc-11ov82j-0" })(nX, nW, function (a) {
        let { $accent: b, $muted: c } = a,
          { font: d } = W(a.theme);
        return cZ`
    color: var(--card-fg-color);

    ${
      b &&
      cZ`
      color: var(--card-accent-fg-color);
    `
    }

    ${
      c &&
      cZ`
      color: var(--card-muted-fg-color);
    `
    }

    & code {
      font-family: ${d.code.family};
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
      font-weight: ${d.text.weights.bold};
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
      pd = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = (0, a2.c)(26);
        o[0] !== a
          ? (({ accent: f, align: c, children: d, muted: g, size: h, textOverflow: i, weight: j, ...e } = a),
            (o[0] = a),
            (o[1] = c),
            (o[2] = d),
            (o[3] = e),
            (o[4] = f),
            (o[5] = g),
            (o[6] = h),
            (o[7] = i),
            (o[8] = j))
          : ((c = o[1]), (d = o[2]), (e = o[3]), (f = o[4]), (g = o[5]), (h = o[6]), (i = o[7]), (j = o[8]));
        let p = void 0 !== f && f,
          q = void 0 !== g && g,
          r = void 0 === h ? 2 : h,
          s = d;
        if ("ellipsis" === i) {
          let a;
          (o[9] !== s ? ((a = (0, a1.jsx)(oU, { children: s })), (o[9] = s), (o[10] = a)) : (a = o[10]), (s = a));
        }
        return (
          o[11] !== c ? ((k = nQ(c)), (o[11] = c), (o[12] = k)) : (k = o[12]),
          o[13] !== r ? ((l = nQ(r)), (o[13] = r), (o[14] = l)) : (l = o[14]),
          o[15] !== s ? ((m = (0, a1.jsx)("span", { children: s })), (o[15] = s), (o[16] = m)) : (m = o[16]),
          o[17] !== p ||
          o[18] !== q ||
          o[19] !== b ||
          o[20] !== e ||
          o[21] !== k ||
          o[22] !== l ||
          o[23] !== m ||
          o[24] !== j
            ? ((n = (0, a1.jsx)(pc, {
                "data-ui": "Text",
                ...e,
                $accent: p,
                $align: k,
                $muted: q,
                ref: b,
                $size: l,
                $weight: j,
                children: m,
              })),
              (o[17] = p),
              (o[18] = q),
              (o[19] = b),
              (o[20] = e),
              (o[21] = k),
              (o[22] = l),
              (o[23] = m),
              (o[24] = j),
              (o[25] = n))
            : (n = o[25]),
          n
        );
      });
    pd.displayName = "ForwardRef(Text)";
    let pe = c$(pb).withConfig({ displayName: "StyledBadge", componentId: "sc-5u140l-0" })(oS, function (a) {
        let { $tone: b } = a;
        return {
          "--card-bg-color": `var(--card-badge-${b}-bg-color)`,
          "--card-fg-color": `var(--card-badge-${b}-fg-color)`,
          backgroundColor: "var(--card-bg-color)",
          cursor: "default",
          "&:not([hidden])": { display: "inline-block", verticalAlign: "top" },
        };
      }),
      pf = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = (0, a2.c)(21);
        if (m[0] !== a) {
          let { children: b, fontSize: i, mode: j, padding: k, radius: l, tone: n, ...o } = a;
          ((c = b),
            (e = i),
            (f = k),
            (g = l),
            (h = n),
            (d = o),
            (m[0] = a),
            (m[1] = c),
            (m[2] = d),
            (m[3] = e),
            (m[4] = f),
            (m[5] = g),
            (m[6] = h));
        } else ((c = m[1]), (d = m[2]), (e = m[3]), (f = m[4]), (g = m[5]), (h = m[6]));
        let n = void 0 === e ? 1 : e,
          o = void 0 === f ? 1 : f,
          p = void 0 === g ? "full" : g,
          q = void 0 === h ? "default" : h;
        return (
          m[7] !== p ? ((i = nQ(p)), (m[7] = p), (m[8] = i)) : (i = m[8]),
          m[9] !== o ? ((j = nQ(o)), (m[9] = o), (m[10] = j)) : (j = m[10]),
          m[11] !== c || m[12] !== n
            ? ((k = (0, a1.jsx)(pd, { size: n, children: c })), (m[11] = c), (m[12] = n), (m[13] = k))
            : (k = m[13]),
          m[14] !== b || m[15] !== d || m[16] !== i || m[17] !== j || m[18] !== k || m[19] !== q
            ? ((l = (0, a1.jsx)(pe, {
                "data-ui": "Badge",
                ...d,
                $tone: q,
                $radius: i,
                padding: j,
                ref: b,
                children: k,
              })),
              (m[14] = b),
              (m[15] = d),
              (m[16] = i),
              (m[17] = j),
              (m[18] = k),
              (m[19] = q),
              (m[20] = l))
            : (l = m[20]),
          l
        );
      });
    pf.displayName = "ForwardRef(Badge)";
    let pg = c$(pb).withConfig({ displayName: "StyledFlex", componentId: "sc-oxesg3-0" })(oh, function () {
        return [oj, ok, ol, om, on, oo];
      }),
      ph = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = (0, a2.c)(27);
        p[0] !== a
          ? (({ align: c, as: d, direction: h, gap: e, justify: f, wrap: i, ...g } = a),
            (p[0] = a),
            (p[1] = c),
            (p[2] = d),
            (p[3] = e),
            (p[4] = f),
            (p[5] = g),
            (p[6] = h),
            (p[7] = i))
          : ((c = p[1]), (d = p[2]), (e = p[3]), (f = p[4]), (g = p[5]), (h = p[6]), (i = p[7]));
        let q = void 0 === h ? "row" : h;
        return (
          p[8] !== c ? ((j = nQ(c)), (p[8] = c), (p[9] = j)) : (j = p[9]),
          p[10] !== q ? ((k = nQ(q)), (p[10] = q), (p[11] = k)) : (k = p[11]),
          p[12] !== e ? ((l = nQ(e)), (p[12] = e), (p[13] = l)) : (l = p[13]),
          p[14] !== f ? ((m = nQ(f)), (p[14] = f), (p[15] = m)) : (m = p[15]),
          p[16] !== i ? ((n = nQ(i)), (p[16] = i), (p[17] = n)) : (n = p[17]),
          p[18] !== d ||
          p[19] !== b ||
          p[20] !== g ||
          p[21] !== j ||
          p[22] !== k ||
          p[23] !== l ||
          p[24] !== m ||
          p[25] !== n
            ? ((o = (0, a1.jsx)(pg, {
                "data-ui": "Flex",
                ...g,
                $align: j,
                $direction: k,
                $gap: l,
                $justify: m,
                $wrap: n,
                forwardedAs: d,
                ref: b,
              })),
              (p[18] = d),
              (p[19] = b),
              (p[20] = g),
              (p[21] = j),
              (p[22] = k),
              (p[23] = l),
              (p[24] = m),
              (p[25] = n),
              (p[26] = o))
            : (o = p[26]),
          o
        );
      });
    ph.displayName = "ForwardRef(Flex)";
    let pi = c1`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,
      pj = c$(pd).withConfig({
        displayName: "StyledSpinner",
        componentId: "sc-124hnd0-0",
      })`& > span > svg{animation:${pi} 500ms linear infinite;}`,
      pk = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e = (0, a2.c)(4);
        return (
          e[0] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, a1.jsx)(fZ, {})), (e[0] = c)) : (c = e[0]),
          e[1] !== a || e[2] !== b
            ? ((d = (0, a1.jsx)(pj, { "data-ui": "Spinner", ...a, ref: b, children: c })),
              (e[1] = a),
              (e[2] = b),
              (e[3] = d))
            : (d = e[3]),
          d
        );
      });
    function pl(a, b, c = !1) {
      return {
        "--card-backdrop-color": a.backdrop,
        "--card-focus-ring-color": a.focusRing,
        "--card-shadow-outline-color": a.shadow.outline,
        "--card-shadow-umbra-color": a.shadow.umbra,
        "--card-shadow-penumbra-color": a.shadow.penumbra,
        "--card-shadow-ambient-color": a.shadow.ambient,
        "--card-accent-fg-color": b.accent.fg,
        "--card-avatar-gray-bg-color": b.avatar.gray.bg,
        "--card-avatar-gray-fg-color": b.avatar.gray.fg,
        "--card-avatar-blue-bg-color": b.avatar.blue.bg,
        "--card-avatar-blue-fg-color": b.avatar.blue.fg,
        "--card-avatar-purple-bg-color": b.avatar.purple.bg,
        "--card-avatar-purple-fg-color": b.avatar.purple.fg,
        "--card-avatar-magenta-bg-color": b.avatar.magenta.bg,
        "--card-avatar-magenta-fg-color": b.avatar.magenta.fg,
        "--card-avatar-red-bg-color": b.avatar.red.bg,
        "--card-avatar-red-fg-color": b.avatar.red.fg,
        "--card-avatar-orange-bg-color": b.avatar.orange.bg,
        "--card-avatar-orange-fg-color": b.avatar.orange.fg,
        "--card-avatar-yellow-bg-color": b.avatar.yellow.bg,
        "--card-avatar-yellow-fg-color": b.avatar.yellow.fg,
        "--card-avatar-green-bg-color": b.avatar.green.bg,
        "--card-avatar-green-fg-color": b.avatar.green.fg,
        "--card-avatar-cyan-bg-color": b.avatar.cyan.bg,
        "--card-avatar-cyan-fg-color": b.avatar.cyan.fg,
        "--card-bg-color": b.bg,
        "--card-bg-image": c ? `repeating-conic-gradient(${b.bg} 0% 25%, ${b.muted.bg} 0% 50%)` : void 0,
        "--card-border-color": b.border,
        "--card-badge-default-bg-color": b.badge.default.bg,
        "--card-badge-default-dot-color": b.badge.default.dot,
        "--card-badge-default-fg-color": b.badge.default.fg,
        "--card-badge-default-icon-color": b.badge.default.icon,
        "--card-badge-neutral-bg-color": b.badge.neutral?.bg,
        "--card-badge-neutral-dot-color": b.badge.neutral?.dot,
        "--card-badge-neutral-fg-color": b.badge.neutral?.fg,
        "--card-badge-neutral-icon-color": b.badge.neutral?.icon,
        "--card-badge-primary-bg-color": b.badge.primary.bg,
        "--card-badge-primary-dot-color": b.badge.primary.dot,
        "--card-badge-primary-fg-color": b.badge.primary.fg,
        "--card-badge-primary-icon-color": b.badge.primary.icon,
        "--card-badge-suggest-bg-color": b.badge.suggest?.bg,
        "--card-badge-suggest-dot-color": b.badge.suggest?.dot,
        "--card-badge-suggest-fg-color": b.badge.suggest?.fg,
        "--card-badge-suggest-icon-color": b.badge.suggest?.icon,
        "--card-badge-positive-bg-color": b.badge.positive.bg,
        "--card-badge-positive-dot-color": b.badge.positive.dot,
        "--card-badge-positive-fg-color": b.badge.positive.fg,
        "--card-badge-positive-icon-color": b.badge.positive.icon,
        "--card-badge-caution-bg-color": b.badge.caution.bg,
        "--card-badge-caution-dot-color": b.badge.caution.dot,
        "--card-badge-caution-fg-color": b.badge.caution.fg,
        "--card-badge-caution-icon-color": b.badge.caution.icon,
        "--card-badge-critical-bg-color": b.badge.critical.bg,
        "--card-badge-critical-dot-color": b.badge.critical.dot,
        "--card-badge-critical-fg-color": b.badge.critical.fg,
        "--card-badge-critical-icon-color": b.badge.critical.icon,
        "--card-code-bg-color": b.code.bg,
        "--card-code-fg-color": b.code.fg,
        "--card-fg-color": b.fg,
        "--card-icon-color": b.icon,
        "--card-kbd-bg-color": b.kbd.bg,
        "--card-kbd-border-color": b.kbd.border,
        "--card-kbd-fg-color": b.kbd.fg,
        "--card-link-fg-color": b.link.fg,
        "--card-muted-bg-color": b.muted.bg,
        "--card-muted-fg-color": b.muted.fg,
        "--card-skeleton-color-from": b.skeleton.from,
        "--card-skeleton-color-to": b.skeleton.to,
        "--card-bg2-color": b.muted.bg,
        "--card-link-color": b.link.fg,
        "--card-hairline-soft-color": b.border,
        "--card-hairline-hard-color": b.border,
      };
    }
    function pm(...a) {
      return a.filter(Boolean).join(",");
    }
    pk.displayName = "ForwardRef(Spinner)";
    let pn = c$.button.withConfig({ displayName: "StyledButton", componentId: "sc-aaekt4-0" })(
        oS,
        function (a) {
          let { $width: b } = a,
            { style: c } = W(a.theme);
          return cZ`
    ${c?.button};

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
      "fill" === b &&
      cZ`
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
        function (a) {
          let { $mode: b } = a,
            { button: c, color: d, style: e } = W(a.theme),
            f = "ghost" === a.$mode,
            g = d.button[b] || d.button.default,
            h = g[a.$tone] || g.default,
            i = { width: c.border.width, color: "var(--card-border-color)" },
            j;
          return [
            pl(d, h.enabled),
            {
              backgroundColor: "var(--card-bg-color)",
              color: "var(--card-fg-color)",
              boxShadow: op(i),
              '&:disabled, &[data-disabled="true"]': pl(d, h.disabled),
              "&:not([data-disabled='true'])": {
                boxShadow: pm(op(i), f ? j : void 0),
                "&:focus": { boxShadow: oq({ base: d, border: { width: 2, color: d.bg }, focusRing: c.focusRing }) },
                "&:focus:not(:focus-visible)": { boxShadow: pm(op(i), f ? j : void 0) },
                "@media (hover: hover)": {
                  "&:hover": pl(d, h.hovered),
                  "&:active": pl(d, h.pressed),
                  "&[data-hovered]": pl(d, h.hovered),
                },
                "&[data-selected]": pl(d, h.pressed),
              },
            },
            e?.button?.root,
          ].filter(Boolean);
        },
      ),
      po = c$.div.withConfig({
        displayName: "LoadingBox",
        componentId: "sc-aaekt4-1",
      })`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,
      pp = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M,
          N,
          O,
          P,
          Q,
          R = (0, a2.c)(86);
        R[0] !== a
          ? (({
              children: e,
              disabled: f,
              fontSize: p,
              icon: c,
              iconRight: d,
              justify: q,
              loading: g,
              mode: r,
              padding: s,
              paddingX: l,
              paddingY: m,
              paddingTop: k,
              paddingBottom: h,
              paddingLeft: i,
              paddingRight: j,
              radius: t,
              selected: o,
              space: u,
              text: y,
              textAlign: z,
              textWeight: A,
              tone: v,
              type: w,
              muted: x,
              width: B,
              ...n
            } = a),
            (R[0] = a),
            (R[1] = c),
            (R[2] = d),
            (R[3] = e),
            (R[4] = f),
            (R[5] = g),
            (R[6] = h),
            (R[7] = i),
            (R[8] = j),
            (R[9] = k),
            (R[10] = l),
            (R[11] = m),
            (R[12] = n),
            (R[13] = o),
            (R[14] = p),
            (R[15] = q),
            (R[16] = r),
            (R[17] = s),
            (R[18] = t),
            (R[19] = u),
            (R[20] = v),
            (R[21] = w),
            (R[22] = x),
            (R[23] = y),
            (R[24] = z),
            (R[25] = A),
            (R[26] = B))
          : ((c = R[1]),
            (d = R[2]),
            (e = R[3]),
            (f = R[4]),
            (g = R[5]),
            (h = R[6]),
            (i = R[7]),
            (j = R[8]),
            (k = R[9]),
            (l = R[10]),
            (m = R[11]),
            (n = R[12]),
            (o = R[13]),
            (p = R[14]),
            (q = R[15]),
            (r = R[16]),
            (s = R[17]),
            (t = R[18]),
            (u = R[19]),
            (v = R[20]),
            (w = R[21]),
            (x = R[22]),
            (y = R[23]),
            (z = R[24]),
            (A = R[25]),
            (B = R[26]));
        let S = void 0 === p ? 1 : p,
          T = void 0 === q ? "center" : q,
          U = void 0 === r ? "default" : r,
          V = void 0 === s ? 3 : s,
          W = void 0 === t ? 2 : t,
          X = void 0 === u ? 3 : u,
          Y = void 0 === v ? "default" : v,
          Z = void 0 === w ? "button" : w,
          $ = void 0 !== x && x,
          { button: _ } = n3();
        R[27] !== T ? ((C = nQ(T)), (R[27] = T), (R[28] = C)) : (C = R[28]);
        let aa = C;
        R[29] !== V ? ((D = nQ(V)), (R[29] = V), (R[30] = D)) : (D = R[30]);
        let ab = D;
        R[31] !== l ? ((E = nQ(l)), (R[31] = l), (R[32] = E)) : (E = R[32]);
        let ac = E;
        R[33] !== m ? ((F = nQ(m)), (R[33] = m), (R[34] = F)) : (F = R[34]);
        let ad = F;
        R[35] !== k ? ((G = nQ(k)), (R[35] = k), (R[36] = G)) : (G = R[36]);
        let ae = G;
        R[37] !== h ? ((H = nQ(h)), (R[37] = h), (R[38] = H)) : (H = R[38]);
        let af = H;
        R[39] !== i ? ((I = nQ(i)), (R[39] = i), (R[40] = I)) : (I = R[40]);
        let ag = I;
        R[41] !== j ? ((J = nQ(j)), (R[41] = j), (R[42] = J)) : (J = R[42]);
        let ah = J;
        R[43] !== W ? ((K = nQ(W)), (R[43] = W), (R[44] = K)) : (K = R[44]);
        let ai = K;
        R[45] !== X ? ((L = nQ(X)), (R[45] = X), (R[46] = L)) : (L = R[46]);
        let aj = L;
        R[47] !== ab || R[48] !== af || R[49] !== ag || R[50] !== ah || R[51] !== ae || R[52] !== ac || R[53] !== ad
          ? ((M = {
              padding: ab,
              paddingX: ac,
              paddingY: ad,
              paddingTop: ae,
              paddingBottom: af,
              paddingLeft: ag,
              paddingRight: ah,
            }),
            (R[47] = ab),
            (R[48] = af),
            (R[49] = ag),
            (R[50] = ah),
            (R[51] = ae),
            (R[52] = ac),
            (R[53] = ad),
            (R[54] = M))
          : (M = R[54]);
        let ak = M,
          al = !!(g || f),
          am = o ? "" : void 0,
          an = !!(g || f);
        return (
          R[55] !== g
            ? ((N = !!g && (0, a1.jsx)(po, { children: (0, a1.jsx)(pk, {}) })), (R[55] = g), (R[56] = N))
            : (N = R[56]),
          R[57] !== c ||
          R[58] !== d ||
          R[59] !== ak ||
          R[60] !== _ ||
          R[61] !== S ||
          R[62] !== aa ||
          R[63] !== $ ||
          R[64] !== aj ||
          R[65] !== y ||
          R[66] !== z ||
          R[67] !== A
            ? ((O =
                (c || y || d) &&
                (0, a1.jsx)(pb, {
                  as: "span",
                  ...ak,
                  children: (0, a1.jsxs)(ph, {
                    as: "span",
                    justify: aa,
                    gap: aj,
                    children: [
                      c &&
                        (0, a1.jsxs)(pd, {
                          size: S,
                          children: [
                            (0, a3.isValidElement)(c) && c,
                            (0, c4.isValidElementType)(c) && (0, a1.jsx)(c, {}),
                          ],
                        }),
                      y &&
                        (0, a1.jsx)(pb, {
                          children: (0, a1.jsx)(pd, {
                            muted: $,
                            align: z,
                            size: S,
                            textOverflow: "ellipsis",
                            weight: A ?? _.textWeight,
                            children: y,
                          }),
                        }),
                      d &&
                        (0, a1.jsxs)(pd, {
                          size: S,
                          children: [
                            (0, a3.isValidElement)(d) && d,
                            (0, c4.isValidElementType)(d) && (0, a1.jsx)(d, {}),
                          ],
                        }),
                    ],
                  }),
                })),
              (R[57] = c),
              (R[58] = d),
              (R[59] = ak),
              (R[60] = _),
              (R[61] = S),
              (R[62] = aa),
              (R[63] = $),
              (R[64] = aj),
              (R[65] = y),
              (R[66] = z),
              (R[67] = A),
              (R[68] = O))
            : (O = R[68]),
          R[69] !== ak || R[70] !== e
            ? ((P = e && (0, a1.jsx)(pb, { as: "span", ...ak, children: e })), (R[69] = ak), (R[70] = e), (R[71] = P))
            : (P = R[71]),
          R[72] !== U ||
          R[73] !== ai ||
          R[74] !== b ||
          R[75] !== n ||
          R[76] !== al ||
          R[77] !== am ||
          R[78] !== an ||
          R[79] !== N ||
          R[80] !== O ||
          R[81] !== P ||
          R[82] !== Y ||
          R[83] !== Z ||
          R[84] !== B
            ? ((Q = (0, a1.jsxs)(pn, {
                "data-ui": "Button",
                ...n,
                $mode: U,
                $radius: ai,
                $tone: Y,
                "data-disabled": al,
                "data-selected": am,
                disabled: an,
                ref: b,
                type: Z,
                $width: B,
                children: [N, O, P],
              })),
              (R[72] = U),
              (R[73] = ai),
              (R[74] = b),
              (R[75] = n),
              (R[76] = al),
              (R[77] = am),
              (R[78] = an),
              (R[79] = N),
              (R[80] = O),
              (R[81] = P),
              (R[82] = Y),
              (R[83] = Z),
              (R[84] = B),
              (R[85] = Q))
            : (Q = R[85]),
          Q
        );
      });
    pp.displayName = "ForwardRef(Button)";
    let pq = c$(pb).withConfig({ displayName: "StyledCard", componentId: "sc-osnro2-0" })(
        function () {
          return [n4, n5, n6, n7, n8];
        },
        oS,
        function (a) {
          let { card: b, media: c, shadow: d } = W(a.theme);
          return nP(c, a.$shadow, (a) =>
            (function (a, b = 1) {
              if (!a) return nA;
              let c = `0 0 0 ${nO(b)} var(--card-shadow-outline-color)`,
                d = oT(a.umbra, "var(--card-shadow-umbra-color)"),
                e = oT(a.penumbra, "var(--card-shadow-penumbra-color)"),
                f = oT(a.ambient, "var(--card-shadow-ambient-color)");
              return { boxShadow: `${c}, ${d}, ${e}, ${f}` };
            })(d[a], b.shadow.outline),
          );
        },
        function (a) {
          return [
            (function (a) {
              let { $checkered: b } = a,
                { space: c } = W(a.theme);
              return cZ`
    ${
      b &&
      cZ`
      background-size: ${c[3]}px ${c[3]}px;
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
            })(a),
            (function (a) {
              let { $checkered: b, $focusRing: c, $muted: d } = a,
                { card: e, color: f, style: g } = W(a.theme),
                h = { width: e.border.width, color: "var(--card-border-color)" };
              return cZ`
    color-scheme: ${f._dark ? "dark" : "light"};

    ${pl(f, f, b)}

    background-color: ${d ? "var(--card-muted-bg-color)" : "var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${pl(f, f.selectable.default.disabled, b)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${pl(f, f.selectable.default.pressed, b)}
        }

        &[data-selected] {
          ${pl(f, f.selectable.default.selected, b)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${pl(f, f.selectable.default.hovered, b)}
            }

            &:active {
              ${pl(f, f.selectable.default.pressed, b)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${c ? oq({ base: f, border: h, focusRing: e.focusRing }) : void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${pl(f, f.selectable.default.disabled, b)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${pl(f, f.selectable.default.pressed, b)}
        }

        &[data-selected] {
          ${pl(f, f.selectable.default.selected, b)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${pl(f, f.selectable.default.hovered, b)}
            }

            &:active {
              ${pl(f, f.selectable.default.pressed, b)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${c ? oq({ base: f, border: h, focusRing: e.focusRing }) : void 0};
        }
      }
    }

    ${g?.card?.root}
  `;
            })(a),
          ];
        },
      ),
      pr = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B = (0, a2.c)(56);
        B[0] !== a
          ? (({
              __unstable_checkered: o,
              __unstable_focusRing: p,
              as: c,
              border: d,
              borderTop: h,
              borderRight: g,
              borderBottom: e,
              borderLeft: f,
              muted: i,
              pressed: j,
              radius: q,
              scheme: l,
              selected: m,
              shadow: n,
              tone: r,
              ...k
            } = a),
            (B[0] = a),
            (B[1] = c),
            (B[2] = d),
            (B[3] = e),
            (B[4] = f),
            (B[5] = g),
            (B[6] = h),
            (B[7] = i),
            (B[8] = j),
            (B[9] = k),
            (B[10] = l),
            (B[11] = m),
            (B[12] = n),
            (B[13] = o),
            (B[14] = p),
            (B[15] = q),
            (B[16] = r))
          : ((c = B[1]),
            (d = B[2]),
            (e = B[3]),
            (f = B[4]),
            (g = B[5]),
            (h = B[6]),
            (i = B[7]),
            (j = B[8]),
            (k = B[9]),
            (l = B[10]),
            (m = B[11]),
            (n = B[12]),
            (o = B[13]),
            (p = B[14]),
            (q = B[15]),
            (r = B[16]));
        let C = void 0 !== o && o,
          D = void 0 !== p && p,
          E = void 0 === q ? 0 : q,
          F = void 0 === r ? "default" : r,
          G = (0, c4.isValidElementType)(c) ? c : "div",
          H = n0(),
          I = "inherit" === F ? H.tone : F,
          J = "string" == typeof G ? G : void 0,
          K = H.scheme;
        (B[17] !== d ? ((s = nQ(d)), (B[17] = d), (B[18] = s)) : (s = B[18]),
          B[19] !== h ? ((t = nQ(h)), (B[19] = h), (B[20] = t)) : (t = B[20]),
          B[21] !== g ? ((u = nQ(g)), (B[21] = g), (B[22] = u)) : (u = B[22]),
          B[23] !== e ? ((v = nQ(e)), (B[23] = e), (B[24] = v)) : (v = B[24]),
          B[25] !== f ? ((w = nQ(f)), (B[25] = f), (B[26] = w)) : (w = B[26]),
          B[27] !== E ? ((x = nQ(E)), (B[27] = E), (B[28] = x)) : (x = B[28]),
          B[29] !== n ? ((y = nQ(n)), (B[29] = n), (B[30] = y)) : (y = B[30]));
        let L = C ? "" : void 0,
          M = j ? "" : void 0,
          N = m ? "" : void 0;
        return (
          B[31] !== G ||
          B[32] !== C ||
          B[33] !== D ||
          B[34] !== i ||
          B[35] !== b ||
          B[36] !== k ||
          B[37] !== H.scheme ||
          B[38] !== m ||
          B[39] !== w ||
          B[40] !== x ||
          B[41] !== y ||
          B[42] !== L ||
          B[43] !== M ||
          B[44] !== N ||
          B[45] !== J ||
          B[46] !== s ||
          B[47] !== t ||
          B[48] !== u ||
          B[49] !== v ||
          B[50] !== I
            ? ((z = (0, a1.jsx)(pq, {
                "data-as": J,
                "data-scheme": K,
                "data-ui": "Card",
                "data-tone": I,
                ...k,
                $border: s,
                $borderTop: t,
                $borderRight: u,
                $borderBottom: v,
                $borderLeft: w,
                $checkered: C,
                $focusRing: D,
                $muted: i,
                $radius: x,
                $shadow: y,
                $tone: I,
                "data-checkered": L,
                "data-pressed": M,
                "data-selected": N,
                forwardedAs: G,
                ref: b,
                selected: m,
              })),
              (B[31] = G),
              (B[32] = C),
              (B[33] = D),
              (B[34] = i),
              (B[35] = b),
              (B[36] = k),
              (B[37] = H.scheme),
              (B[38] = m),
              (B[39] = w),
              (B[40] = x),
              (B[41] = y),
              (B[42] = L),
              (B[43] = M),
              (B[44] = N),
              (B[45] = J),
              (B[46] = s),
              (B[47] = t),
              (B[48] = u),
              (B[49] = v),
              (B[50] = I),
              (B[51] = z))
            : (z = B[51]),
          B[52] !== l || B[53] !== z || B[54] !== I
            ? ((A = (0, a1.jsx)(n1, { scheme: l, tone: I, children: z })),
              (B[52] = l),
              (B[53] = z),
              (B[54] = I),
              (B[55] = A))
            : (A = B[55]),
          A
        );
      });
    function ps(a, b, c) {
      let d,
        e,
        f,
        g = (0, a2.c)(9),
        h = void 0 === b ? pt : b;
      g[0] !== c || g[1] !== h || g[2] !== a
        ? ((d = (b) => {
            if (!a) return;
            let d = b.target;
            if (!(d instanceof Node)) return;
            let e = c?.();
            if (!e || e.contains(d)) {
              for (let a of h().flat()) if (a && (d === a || a.contains(d))) return;
              a(b);
            }
          }),
          (g[0] = c),
          (g[1] = h),
          (g[2] = a),
          (g[3] = d))
        : (d = g[3]);
      let i = nx(d),
        j = !!a;
      (g[4] !== j || g[5] !== i
        ? ((e = () => {
            if (!j) return;
            let a = (a) => i(a);
            return (
              document.addEventListener("mousedown", a),
              () => {
                document.removeEventListener("mousedown", a);
              }
            );
          }),
          (g[4] = j),
          (g[5] = i),
          (g[6] = e))
        : (e = g[6]),
        g[7] !== j ? ((f = [j]), (g[7] = j), (g[8] = f)) : (f = g[8]),
        (0, a3.useEffect)(e, f),
        (0, a3.useDebugValue)(a ? "MouseDown On" : "MouseDown Off"));
    }
    function pt() {
      return nz;
    }
    function pu(a, b) {
      let c,
        d,
        e = (0, a2.c)(4);
      (e[0] !== b || e[1] !== a
        ? ((c = () => {
            a.current?.setCustomValidity(b || "");
          }),
          (d = [b, a]),
          (e[0] = b),
          (e[1] = a),
          (e[2] = c),
          (e[3] = d))
        : ((c = e[2]), (d = e[3])),
        (0, a3.useEffect)(c, d));
    }
    pr.displayName = "ForwardRef(Card)";
    let pv =
      ((c = new WeakMap()),
      (d = new WeakMap()),
      {
        subscribe(a, b) {
          let e = d.get(a) || [],
            f = c.get(a);
          return (
            d.has(a) ||
              (d.set(a, e),
              (f = {
                subscribe(a, b) {
                  let c = new ns(([a]) => {
                    b({
                      _contentRect: a.contentRect,
                      border: { width: a.borderBoxSize[0].inlineSize, height: a.borderBoxSize[0].blockSize },
                      content: { width: a.contentRect.width, height: a.contentRect.height },
                    });
                  });
                  return (
                    c.observe(a),
                    () => {
                      (c.unobserve(a), c.disconnect());
                    }
                  );
                },
              }.subscribe(a, (a) => {
                for (let b of e) b(a);
              }))),
            e.push(b),
            () => {
              let a = e.indexOf(b);
              (a > -1 && e.splice(a, 1), 0 === e.length && f && f());
            }
          );
        },
      });
    function pw(a) {
      let b,
        c,
        d = (0, a2.c)(3),
        [e, f] = (0, a3.useState)(null);
      return (
        d[0] !== a
          ? ((b = () => {
              if (a) return pv.subscribe(a, f);
            }),
            (c = [a]),
            (d[0] = a),
            (d[1] = b),
            (d[2] = c))
          : ((b = d[1]), (c = d[2])),
        (0, a3.useEffect)(b, c),
        e
      );
    }
    function px(a, b) {
      let c,
        d,
        e,
        f = (0, a2.c)(7);
      f[0] !== a ? ((c = (b) => a(b)), (f[0] = a), (f[1] = c)) : (c = f[1]);
      let g = nx(c);
      (f[2] !== g || f[3] !== b
        ? ((d = () => {
            let a = (a) => g(a);
            return (window.addEventListener("keydown", a, b), () => window.removeEventListener("keydown", a, b));
          }),
          (f[2] = g),
          (f[3] = b),
          (f[4] = d))
        : (d = f[4]),
        f[5] !== b ? ((e = [b]), (f[5] = b), (f[6] = e)) : (e = f[6]),
        (0, a3.useEffect)(d, e));
    }
    function py(a, b) {
      let c,
        d,
        e = (0, a2.c)(4);
      return (
        (0, a3.useDebugValue)(a),
        e[0] !== a
          ? ((c = (b) => {
              let c = window.matchMedia(a);
              return (c.addEventListener("change", b), () => c.removeEventListener("change", b));
            }),
            (e[0] = a),
            (e[1] = c))
          : (c = e[1]),
        e[2] !== a ? ((d = () => window.matchMedia(a).matches), (e[2] = a), (e[3] = d)) : (d = e[3]),
        (0, a3.useSyncExternalStore)(c, d, b)
      );
    }
    function pz() {
      return 0;
    }
    function pA() {
      let a,
        b,
        c,
        d,
        e = (0, a2.c)(2),
        { media: f } = n3();
      e[0] !== f
        ? ((c = f.length),
          (d = () => {
            if (!b) {
              b = [];
              for (let d = c; d > -1; d -= 1) {
                var a;
                let c =
                  0 === (a = d)
                    ? `screen and (max-width: ${f[a] - 1}px)`
                    : a === f.length
                      ? `screen and (min-width: ${f[a - 1]}px)`
                      : `screen and (min-width: ${f[a - 1]}px) and (max-width: ${f[a] - 1}px)`;
                b.push({ index: d, mq: window.matchMedia(c) });
              }
            }
            return b;
          }),
          (a = {
            getSnapshot: () => {
              for (let { index: a, mq: b } of d()) if (b.matches) return a;
              return 0;
            },
            subscribe: (a) => {
              let b = [];
              for (let { mq: c } of d()) {
                let d = () => {
                  c.matches && a();
                };
                (c.addEventListener("change", d), b.push(() => c.removeEventListener("change", d)));
              }
              return () => {
                for (let a of b) a();
              };
            },
          }),
          (e[0] = f),
          (e[1] = a))
        : (a = e[1]);
      let g = a;
      return (0, a3.useSyncExternalStore)(g.subscribe, g.getSnapshot, pz);
    }
    function pB(a) {
      return py("(prefers-color-scheme: dark)", void 0 === a ? pC : a);
    }
    function pC() {
      return !1;
    }
    function pD(a) {
      return py("(prefers-reduced-motion: reduce)", void 0 === a ? pE : a);
    }
    function pE() {
      return !1;
    }
    let pF = c$.div.withConfig({ displayName: "StyledCheckbox", componentId: "sc-1l5mt2l-0" })(function () {
        return cZ`
    position: relative;
    display: inline-block;
  `;
      }),
      pG = c$.input.withConfig({ displayName: "Input", componentId: "sc-1l5mt2l-1" })(function (a) {
        let { color: b, input: c, radius: d } = W(a.theme),
          { focusRing: e } = c.checkbox;
        return cZ`
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
      height: ${nO(c.checkbox.size)};
      width: ${nO(c.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${op({ color: b.input.default.enabled.border, width: c.border.width })};
      border-radius: ${nO(d[2])};
      line-height: 1;
      background-color: ${b.input.default.enabled.bg};

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
      background: ${b.input.default.enabled.fg};
      box-shadow: ${op({ color: b.input.default.enabled.fg, width: c.border.width })};
      color: ${b.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${oq({ focusRing: e })};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${oq({ focusRing: { width: 1, offset: 1 } })};
    }

    &[data-error] + span {
      background-color: ${b.input.invalid.enabled.border};
      box-shadow: ${op({ width: c.border.width, color: b.input.invalid.enabled.muted.bg })};
      color: ${b.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${b.input.invalid.enabled.muted.bg};
      color: ${b.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${oq({ border: { width: c.border.width, color: b.input.invalid.readOnly.muted.bg }, focusRing: { width: 1, offset: 1 } })};
    }

    &:disabled + span {
      background-color: ${b.input.default.disabled.bg};
      box-shadow: ${op({ width: c.border.width, color: b.input.default.disabled.border })};
      color: ${b.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${b.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${b.input.default.readOnly.bg};
      box-shadow: ${op({ width: c.border.width, color: b.input.default.readOnly.border })};
      color: ${b.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${b.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `;
      }),
      pH = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = (0, a2.c)(25);
        q[0] !== a
          ? (({
              checked: c,
              className: d,
              disabled: f,
              indeterminate: g,
              customValidity: e,
              readOnly: h,
              style: j,
              ...i
            } = a),
            (q[0] = a),
            (q[1] = c),
            (q[2] = d),
            (q[3] = e),
            (q[4] = f),
            (q[5] = g),
            (q[6] = h),
            (q[7] = i),
            (q[8] = j))
          : ((c = q[1]), (d = q[2]), (e = q[3]), (f = q[4]), (g = q[5]), (h = q[6]), (i = q[7]), (j = q[8]));
        let r = (0, a3.useRef)(null);
        (q[9] === Symbol.for("react.memo_cache_sentinel") ? ((k = () => r.current), (q[9] = k)) : (k = q[9]),
          (0, a3.useImperativeHandle)(b, k),
          q[10] !== g
            ? ((l = () => {
                r.current && (r.current.indeterminate = g || !1);
              }),
              (m = [g]),
              (q[10] = g),
              (q[11] = l),
              (q[12] = m))
            : ((l = q[11]), (m = q[12])),
          (0, a3.useEffect)(l, m),
          pu(r, e));
        let s = !f && h ? "" : void 0,
          t = e ? "" : void 0,
          u = f || h;
        return (
          q[13] !== c || q[14] !== h || q[15] !== i || q[16] !== s || q[17] !== t || q[18] !== u
            ? ((n = (0, a1.jsx)(pG, {
                "data-read-only": s,
                "data-error": t,
                ...i,
                checked: c,
                disabled: u,
                type: "checkbox",
                readOnly: h,
                ref: r,
              })),
              (q[13] = c),
              (q[14] = h),
              (q[15] = i),
              (q[16] = s),
              (q[17] = t),
              (q[18] = u),
              (q[19] = n))
            : (n = q[19]),
          q[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a1.jsxs)("span", { children: [(0, a1.jsx)(dG, {}), (0, a1.jsx)(fK, {})] })), (q[20] = o))
            : (o = q[20]),
          q[21] !== d || q[22] !== j || q[23] !== n
            ? ((p = (0, a1.jsxs)(pF, { className: d, "data-ui": "Checkbox", style: j, children: [n, o] })),
              (q[21] = d),
              (q[22] = j),
              (q[23] = n),
              (q[24] = p))
            : (p = q[24]),
          p
        );
      });
    function pI({ theme: a }) {
      let {
        color: { syntax: b },
      } = W(a);
      return {
        "&.atrule": { color: b.atrule },
        "&.attr-name": { color: b.attrName },
        "&.attr-value": { color: b.attrValue },
        "&.attribute": { color: b.attribute },
        "&.boolean": { color: b.boolean },
        "&.builtin": { color: b.builtin },
        "&.cdata": { color: b.cdata },
        "&.char": { color: b.char },
        "&.class": { color: b.class },
        "&.class-name": { color: b.className },
        "&.comment": { color: b.comment },
        "&.constant": { color: b.constant },
        "&.deleted": { color: b.deleted },
        "&.doctype": { color: b.doctype },
        "&.entity": { color: b.entity },
        "&.function": { color: b.function },
        "&.hexcode": { color: b.hexcode },
        "&.id": { color: b.id },
        "&.important": { color: b.important },
        "&.inserted": { color: b.inserted },
        "&.keyword": { color: b.keyword },
        "&.number": { color: b.number },
        "&.operator": { color: b.operator },
        "&.prolog": { color: b.prolog },
        "&.property": { color: b.property },
        "&.pseudo-class": { color: b.pseudoClass },
        "&.pseudo-element": { color: b.pseudoElement },
        "&.punctuation": { color: b.punctuation },
        "&.regex": { color: b.regex },
        "&.selector": { color: b.selector },
        "&.string": { color: b.string },
        "&.symbol": { color: b.symbol },
        "&.tag": { color: b.tag },
        "&.unit": { color: b.unit },
        "&.url": { color: b.url },
        "&.variable": { color: b.variable },
      };
    }
    pH.displayName = "ForwardRef(Checkbox)";
    let pJ = (0, a3.lazy)(() => a.A(570367)),
      pK = c$.pre.withConfig({ displayName: "StyledCode", componentId: "sc-4dymyn-0" })(function () {
        return cZ`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${pI}
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
      }, nT),
      pL = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = (0, a2.c)(22);
        m[0] !== a
          ? (({ children: c, language: d, size: f, weight: g, ...e } = a),
            (m[0] = a),
            (m[1] = c),
            (m[2] = d),
            (m[3] = e),
            (m[4] = f),
            (m[5] = g))
          : ((c = m[1]), (d = m[2]), (e = m[3]), (f = m[4]), (g = m[5]));
        let n = void 0 === f ? 2 : f;
        return (
          m[6] !== n ? ((h = nQ(n)), (m[6] = n), (m[7] = h)) : (h = m[7]),
          m[8] !== c ? ((i = (0, a1.jsx)("code", { children: c })), (m[8] = c), (m[9] = i)) : (i = m[9]),
          m[10] !== c || m[11] !== d
            ? ((j = (0, a1.jsx)(pJ, { language: d, value: c })), (m[10] = c), (m[11] = d), (m[12] = j))
            : (j = m[12]),
          m[13] !== i || m[14] !== j
            ? ((k = (0, a1.jsx)(a3.Suspense, { fallback: i, children: j })), (m[13] = i), (m[14] = j), (m[15] = k))
            : (k = m[15]),
          m[16] !== b || m[17] !== e || m[18] !== h || m[19] !== k || m[20] !== g
            ? ((l = (0, a1.jsx)(pK, { "data-ui": "Code", ...e, $size: h, $weight: g, ref: b, children: k })),
              (m[16] = b),
              (m[17] = e),
              (m[18] = h),
              (m[19] = k),
              (m[20] = g),
              (m[21] = l))
            : (l = m[21]),
          l
        );
      });
    pL.displayName = "ForwardRef(Code)";
    let pM = { width: "100%", margin: "0 auto" },
      pN = c$(pb).withConfig({ displayName: "StyledContainer", componentId: "sc-wyroop-0" })(
        function () {
          return pM;
        },
        function (a) {
          let { container: b, media: c } = W(a.theme);
          return nP(c, a.$width, (a) => ({ maxWidth: "auto" === a ? "none" : nO(b[a]) }));
        },
      ),
      pO = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h = (0, a2.c)(11);
        h[0] !== a
          ? (({ as: c, width: e, ...d } = a), (h[0] = a), (h[1] = c), (h[2] = d), (h[3] = e))
          : ((c = h[1]), (d = h[2]), (e = h[3]));
        let i = void 0 === e ? 2 : e;
        return (
          h[4] !== i ? ((f = nQ(i)), (h[4] = i), (h[5] = f)) : (f = h[5]),
          h[6] !== c || h[7] !== b || h[8] !== d || h[9] !== f
            ? ((g = (0, a1.jsx)(pN, { "data-ui": "Container", ...d, $width: f, forwardedAs: c, ref: b })),
              (h[6] = c),
              (h[7] = b),
              (h[8] = d),
              (h[9] = f),
              (h[10] = g))
            : (g = h[10]),
          g
        );
      });
    pO.displayName = "ForwardRef(Container)";
    let pP = c$(pb).withConfig({ displayName: "StyledGrid", componentId: "sc-v8t8oz-0" })(function () {
        return [oz, oC, oD, oE, oF, oG, oH, oI, oJ];
      }),
      pQ = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w = (0, a2.c)(42);
        w[0] !== a
          ? (({
              as: c,
              autoRows: f,
              autoCols: d,
              autoFlow: e,
              columns: h,
              gap: i,
              gapX: j,
              gapY: k,
              rows: m,
              children: g,
              ...l
            } = a),
            (w[0] = a),
            (w[1] = c),
            (w[2] = d),
            (w[3] = e),
            (w[4] = f),
            (w[5] = g),
            (w[6] = h),
            (w[7] = i),
            (w[8] = j),
            (w[9] = k),
            (w[10] = l),
            (w[11] = m))
          : ((c = w[1]),
            (d = w[2]),
            (e = w[3]),
            (f = w[4]),
            (g = w[5]),
            (h = w[6]),
            (i = w[7]),
            (j = w[8]),
            (k = w[9]),
            (l = w[10]),
            (m = w[11]));
        let x = "string" == typeof c ? c : void 0;
        return (
          w[12] !== f ? ((n = nQ(f)), (w[12] = f), (w[13] = n)) : (n = w[13]),
          w[14] !== d ? ((o = nQ(d)), (w[14] = d), (w[15] = o)) : (o = w[15]),
          w[16] !== e ? ((p = nQ(e)), (w[16] = e), (w[17] = p)) : (p = w[17]),
          w[18] !== h ? ((q = nQ(h)), (w[18] = h), (w[19] = q)) : (q = w[19]),
          w[20] !== i ? ((r = nQ(i)), (w[20] = i), (w[21] = r)) : (r = w[21]),
          w[22] !== j ? ((s = nQ(j)), (w[22] = j), (w[23] = s)) : (s = w[23]),
          w[24] !== k ? ((t = nQ(k)), (w[24] = k), (w[25] = t)) : (t = w[25]),
          w[26] !== m ? ((u = nQ(m)), (w[26] = m), (w[27] = u)) : (u = w[27]),
          w[28] !== c ||
          w[29] !== g ||
          w[30] !== b ||
          w[31] !== l ||
          w[32] !== x ||
          w[33] !== n ||
          w[34] !== o ||
          w[35] !== p ||
          w[36] !== q ||
          w[37] !== r ||
          w[38] !== s ||
          w[39] !== t ||
          w[40] !== u
            ? ((v = (0, a1.jsx)(pP, {
                "data-as": x,
                "data-ui": "Grid",
                ...l,
                $autoRows: n,
                $autoCols: o,
                $autoFlow: p,
                $columns: q,
                $gap: r,
                $gapX: s,
                $gapY: t,
                $rows: u,
                forwardedAs: c,
                ref: b,
                children: g,
              })),
              (w[28] = c),
              (w[29] = g),
              (w[30] = b),
              (w[31] = l),
              (w[32] = x),
              (w[33] = n),
              (w[34] = o),
              (w[35] = p),
              (w[36] = q),
              (w[37] = r),
              (w[38] = s),
              (w[39] = t),
              (w[40] = u),
              (w[41] = v))
            : (v = w[41]),
          v
        );
      });
    pQ.displayName = "ForwardRef(Grid)";
    let pR = c$.div.withConfig({ displayName: "StyledHeading", componentId: "sc-137lwim-0" })(
        function (a) {
          let { $accent: b, $muted: c } = a,
            { font: d } = W(a.theme);
          return cZ`
    ${
      b &&
      cZ`
      color: var(--card-accent-fg-color);
    `
    }

    ${
      c &&
      cZ`
      color: var(--card-muted-fg-color);
    `
    }

    & code {
      font-family: ${d.code.family};
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
      font-weight: ${d.heading.weights.bold};
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
        nW,
        nU,
      ),
      pS = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = (0, a2.c)(26);
        o[0] !== a
          ? (({ accent: f, align: c, children: d, muted: g, size: h, textOverflow: i, weight: j, ...e } = a),
            (o[0] = a),
            (o[1] = c),
            (o[2] = d),
            (o[3] = e),
            (o[4] = f),
            (o[5] = g),
            (o[6] = h),
            (o[7] = i),
            (o[8] = j))
          : ((c = o[1]), (d = o[2]), (e = o[3]), (f = o[4]), (g = o[5]), (h = o[6]), (i = o[7]), (j = o[8]));
        let p = void 0 !== f && f,
          q = void 0 !== g && g,
          r = void 0 === h ? 2 : h,
          s = d;
        if ("ellipsis" === i) {
          let a;
          (o[9] !== s ? ((a = (0, a1.jsx)(oU, { children: s })), (o[9] = s), (o[10] = a)) : (a = o[10]), (s = a));
        }
        return (
          o[11] !== c ? ((k = nQ(c)), (o[11] = c), (o[12] = k)) : (k = o[12]),
          o[13] !== r ? ((l = nQ(r)), (o[13] = r), (o[14] = l)) : (l = o[14]),
          o[15] !== s ? ((m = (0, a1.jsx)("span", { children: s })), (o[15] = s), (o[16] = m)) : (m = o[16]),
          o[17] !== p ||
          o[18] !== q ||
          o[19] !== b ||
          o[20] !== e ||
          o[21] !== k ||
          o[22] !== l ||
          o[23] !== m ||
          o[24] !== j
            ? ((n = (0, a1.jsx)(pR, {
                "data-ui": "Heading",
                ...e,
                $accent: p,
                $align: k,
                $muted: q,
                $size: l,
                $weight: j,
                ref: b,
                children: m,
              })),
              (o[17] = p),
              (o[18] = q),
              (o[19] = b),
              (o[20] = e),
              (o[21] = k),
              (o[22] = l),
              (o[23] = m),
              (o[24] = j),
              (o[25] = n))
            : (n = o[25]),
          n
        );
      });
    pS.displayName = "ForwardRef(Heading)";
    let pT = c$(pb).withConfig({ displayName: "StyledInline", componentId: "sc-1pkiy6j-0" })(
        function () {
          return {
            lineHeight: "0",
            "&&:not([hidden])": { display: "block" },
            "& > div": { display: "inline-block", verticalAlign: "middle" },
          };
        },
        function (a) {
          let { media: b, space: c } = W(a.theme);
          return nP(b, a.$space, (a) => {
            let b = nO(0.5 === a ? c[1] / 2 : c[a]);
            return { margin: `-${b} 0 0 -${b}`, "& > div": { padding: `${b} 0 0 ${b}` } };
          });
        },
      ),
      pU = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j = (0, a2.c)(15);
        (j[0] !== a
          ? (({ as: c, children: d, space: f, ...e } = a), (j[0] = a), (j[1] = c), (j[2] = d), (j[3] = e), (j[4] = f))
          : ((c = j[1]), (d = j[2]), (e = j[3]), (f = j[4])),
          j[5] !== d ? ((g = a3.Children.map(d, pV)), (j[5] = d), (j[6] = g)) : (g = j[6]));
        let k = g;
        return (
          j[7] !== f ? ((h = nQ(f)), (j[7] = f), (j[8] = h)) : (h = j[8]),
          j[9] !== c || j[10] !== k || j[11] !== e || j[12] !== h || j[13] !== b
            ? ((i = (0, a1.jsx)(pT, { "data-ui": "Inline", ...e, $space: h, forwardedAs: c, ref: b, children: k })),
              (j[9] = c),
              (j[10] = k),
              (j[11] = e),
              (j[12] = h),
              (j[13] = b),
              (j[14] = i))
            : (i = j[14]),
          i
        );
      });
    function pV(a) {
      return a && (0, a1.jsx)("div", { children: a });
    }
    pU.displayName = "ForwardRef(Inline)";
    let pW = c$.kbd.withConfig({ displayName: "StyledKBD", componentId: "sc-1w7yd8w-0" })(oS, function () {
        return cZ`
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
      pX = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = (0, a2.c)(19);
        l[0] !== a
          ? (({ children: c, fontSize: e, padding: f, radius: g, ...d } = a),
            (l[0] = a),
            (l[1] = c),
            (l[2] = d),
            (l[3] = e),
            (l[4] = f),
            (l[5] = g))
          : ((c = l[1]), (d = l[2]), (e = l[3]), (f = l[4]), (g = l[5]));
        let m = void 0 === e ? 0 : e,
          n = void 0 === f ? 1 : f,
          o = void 0 === g ? 2 : g;
        return (
          l[6] !== o ? ((h = nQ(o)), (l[6] = o), (l[7] = h)) : (h = l[7]),
          l[8] !== c || l[9] !== m
            ? ((i = (0, a1.jsx)(pd, { as: "span", size: m, weight: "semibold", children: c })),
              (l[8] = c),
              (l[9] = m),
              (l[10] = i))
            : (i = l[10]),
          l[11] !== n || l[12] !== i
            ? ((j = (0, a1.jsx)(pb, { as: "span", padding: n, children: i })), (l[11] = n), (l[12] = i), (l[13] = j))
            : (j = l[13]),
          l[14] !== b || l[15] !== d || l[16] !== h || l[17] !== j
            ? ((k = (0, a1.jsx)(pW, { "data-ui": "KBD", ...d, $radius: h, ref: b, children: j })),
              (l[14] = b),
              (l[15] = d),
              (l[16] = h),
              (l[17] = j),
              (l[18] = k))
            : (k = l[18]),
          k
        );
      });
    pX.displayName = "ForwardRef(KBD)";
    let pY = {
      name: "@sanity/ui/origin",
      fn({ middlewareData: a, placement: b, rects: c }) {
        let [d] = b.split("-"),
          e = c.floating.width,
          f = c.floating.height,
          g = a.shift?.x || 0,
          h = a.shift?.y || 0;
        if (e <= 0 || f <= 0) return {};
        let { originX: i, originY: j } = ["bottom", "top"].includes(d)
          ? { originX: pZ(0.5 - g / e, 0, 1), originY: +("bottom" !== d) }
          : { originX: +("left" === d), originY: pZ(0.5 - h / f, 0, 1) };
        return { data: { originX: i, originY: j } };
      },
    };
    function pZ(a, b, c) {
      return Math.min(Math.max(a, b), c);
    }
    function p$(a, b, c) {
      let d = b.x - a.x,
        e = b.y - a.y;
      return p_(a, b, Math.min(1, c / Math.sqrt(d * d + e * e)));
    }
    function p_(a, b, c) {
      return { x: a.x + (b.x - a.x) * c, y: a.y + (b.y - a.y) * c };
    }
    let p0 = c$.div.withConfig({ displayName: "StyledArrow", componentId: "sc-12vzy6c-0" })(
        ({ $w: a }) => cZ`
    position: absolute;
    width: ${a}px;
    height: ${a}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${a / 2}px ${a / 2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${a}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${a}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${a}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${a}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `,
      ),
      p1 = c$.path.withConfig({
        displayName: "StrokePath",
        componentId: "sc-12vzy6c-1",
      })`stroke:var(--card-shadow-outline-color);`,
      p2 = c$.path.withConfig({ displayName: "ShapePath", componentId: "sc-12vzy6c-2" })`fill:var(--card-bg-color);`,
      p3 = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = (0, a2.c)(29);
        m[0] !== a
          ? (({ width: f, height: c, radius: e, ...d } = a), (m[0] = a), (m[1] = c), (m[2] = d), (m[3] = e), (m[4] = f))
          : ((c = m[1]), (d = m[2]), (e = m[3]), (f = m[4]));
        let n = void 0 === e ? 0 : e,
          { card: o } = n3(),
          p = o.shadow.outline,
          q = f / 2;
        m[5] !== q || m[6] !== c || m[7] !== n || m[8] !== f
          ? ((g = (function (a) {
              let b = a.length,
                c = [];
              for (let d = 0; d < b; d += 1) {
                let b = a[d],
                  e = a[d - 1],
                  f = a[d + 1];
                if (e && b.radius) {
                  let a = p$(b, e, b.radius),
                    d = p$(b, f, b.radius),
                    g = p_(a, b, 0.5),
                    h = p_(b, d, 0.5);
                  (c.push({ type: "point", ...a }),
                    c.push({ type: "curve", curveEnd: d, startControl: g, endControl: h }));
                } else c.push({ type: "point", ...b });
              }
              return c;
            })([
              { x: 0, y: 0 },
              { x: n, y: 0, radius: n },
              { x: q, y: c - 1, radius: n },
              { x: f - n, y: 0, radius: n },
              { x: f, y: 0 },
            ])
              .map((a, b) =>
                "point" === a.type
                  ? `${0 === b ? "M" : "L"} ${a.x} ${a.y}`
                  : "curve" === a.type
                    ? `C ${a.startControl.x} ${a.startControl.y} ${a.endControl.x} ${a.endControl.y} ${a.curveEnd.x} ${a.curveEnd.y}`
                    : "",
              )
              .join(" ")),
            (m[5] = q),
            (m[6] = c),
            (m[7] = n),
            (m[8] = f),
            (m[9] = g))
          : (g = m[9]);
        let r = g,
          s = `${r}`,
          t = `${r} M ${f} -1 M 0 -1 Z`,
          u = `0 0 ${f} ${f}`;
        m[10] !== p || m[11] !== f
          ? ((h = (0, a1.jsx)("mask", {
              id: "stroke-mask",
              children: (0, a1.jsx)("rect", { x: 0, y: p, width: f, height: f, fill: "white" }),
            })),
            (m[10] = p),
            (m[11] = f),
            (m[12] = h))
          : (h = m[12]);
        let v = 2 * p;
        return (
          m[13] !== s || m[14] !== v
            ? ((i = (0, a1.jsx)(p1, { d: s, mask: "url(#stroke-mask)", strokeWidth: v })),
              (m[13] = s),
              (m[14] = v),
              (m[15] = i))
            : (i = m[15]),
          m[16] !== t ? ((j = (0, a1.jsx)(p2, { d: t })), (m[16] = t), (m[17] = j)) : (j = m[17]),
          m[18] !== u || m[19] !== h || m[20] !== i || m[21] !== j || m[22] !== f
            ? ((k = (0, a1.jsxs)("svg", { width: f, height: f, viewBox: u, children: [h, i, j] })),
              (m[18] = u),
              (m[19] = h),
              (m[20] = i),
              (m[21] = j),
              (m[22] = f),
              (m[23] = k))
            : (k = m[23]),
          m[24] !== b || m[25] !== d || m[26] !== k || m[27] !== f
            ? ((l = (0, a1.jsx)(p0, { ...d, $w: f, ref: b, children: k })),
              (m[24] = b),
              (m[25] = d),
              (m[26] = k),
              (m[27] = f),
              (m[28] = l))
            : (l = m[28]),
          l
        );
      });
    p3.displayName = "ForwardRef(Arrow)";
    let p4 = nZ("@sanity/ui/context/boundaryElement", null);
    function p5(a) {
      let b,
        c,
        d = (0, a2.c)(5),
        { children: e, element: f } = a;
      d[0] !== f ? ((b = { version: 0, element: f }), (d[0] = f), (d[1] = b)) : (b = d[1]);
      let g = b;
      return (
        d[2] !== e || d[3] !== g
          ? ((c = (0, a1.jsx)(p4.Provider, { value: g, children: e })), (d[2] = e), (d[3] = g), (d[4] = c))
          : (c = d[4]),
        c
      );
    }
    function p6(a) {
      return !!(a && "object" == typeof a && !Array.isArray(a));
    }
    p5.displayName = "BoundaryElementProvider";
    let p7 = { version: 0, element: null };
    function p8() {
      let a = (0, a3.useContext)(p4);
      if (a && (!p6(a) || 0 !== a.version)) throw Error("useBoundaryElement(): the context value is not compatible");
      return a || p7;
    }
    function p9({ children: a, condition: b, wrapper: c }) {
      return b ? c(a) : a;
    }
    p9.displayName = "ConditionalWrapper";
    let qa = (0, a3.forwardRef)(function (a, b) {
      let c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = (0, a2.c)(18),
        l = n3();
      k[0] !== a
        ? (({ children: d, media: c, ...e } = a), (k[0] = a), (k[1] = c), (k[2] = d), (k[3] = e))
        : ((c = k[1]), (d = k[2]), (e = k[3]));
      let m = c ?? l.media,
        [n, o] = (0, a3.useState)(null),
        p = pw(n)?.border.width ?? window.innerWidth;
      if (k[4] !== m || k[5] !== p) {
        let a = (function (a, b) {
          let c = [];
          for (let d = 0; d < a.length; d += 1) a[d] > b && c.push(d);
          return c;
        })(m, p);
        ((f = a.length ? a.join(" ") : void 0), (k[4] = m), (k[5] = p), (k[6] = f));
      } else f = k[6];
      let q = f;
      if (k[7] !== m || k[8] !== p) {
        let a = (function (a, b) {
          let c = [];
          for (let d = 0; d < a.length; d += 1) a[d] <= b && c.push(d);
          return c;
        })(m, p);
        ((g = a.length ? a.join(" ") : void 0), (k[7] = m), (k[8] = p), (k[9] = g));
      } else g = k[9];
      let r = g;
      return (
        k[10] !== n ? ((h = () => n), (i = [n]), (k[10] = n), (k[11] = h), (k[12] = i)) : ((h = k[11]), (i = k[12])),
        (0, a3.useImperativeHandle)(b, h, i),
        k[13] !== d || k[14] !== q || k[15] !== r || k[16] !== e
          ? ((j = (0, a1.jsx)("div", {
              "data-ui": "ElementQuery",
              ...e,
              "data-eq-max": q,
              "data-eq-min": r,
              ref: o,
              children: d,
            })),
            (k[13] = d),
            (k[14] = q),
            (k[15] = r),
            (k[16] = e),
            (k[17] = j))
          : (j = k[17]),
        j
      );
    });
    function qb(a) {
      if (!p6(a) || 0 !== a.version) throw Error("the context value is not compatible");
      if (!a) throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");
      if (0 === a.version) return a;
      throw Error("could not get layer context");
    }
    qa.displayName = "ForwardRef(ElementQuery)";
    let qc = nZ("@sanity/ui/context/layer", null);
    function qd(a) {
      let b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = (0, a2.c)(21),
        { children: k, zOffset: l } = a,
        m = void 0 === l ? 0 : l,
        n = (0, a3.useContext)(qc);
      j[0] !== n ? ((b = n && qb(n)), (j[0] = n), (j[1] = b)) : (b = j[1]);
      let o = b,
        p = o?.registerChild,
        q = (o?.level ?? 0) + 1;
      j[2] !== m ? ((c = nQ(m)), (j[2] = m), (j[3] = c)) : (c = j[3]);
      let r = c,
        s = r.length - 1,
        t = Math.min(pA(), s),
        u = o ? o.zIndex + r[t] : r[t];
      j[4] === Symbol.for("react.memo_cache_sentinel") ? ((d = {}), (j[4] = d)) : (d = j[4]);
      let [, v] = (0, a3.useState)(d),
        [w, x] = (0, a3.useState)(0),
        y = 0 === w;
      j[5] !== p || j[6] !== v
        ? ((e = (a) => {
            let b = p?.(a);
            return (
              void 0 !== a
                ? v((b) => {
                    let c = b[a] ?? 0,
                      d = { ...b, [a]: c + 1 };
                    return (x(Object.keys(d).length), d);
                  })
                : x(qf),
              () => {
                (void 0 !== a
                  ? v((b) => {
                      let c = { ...b };
                      return (1 === c[a] ? (delete c[a], x(Object.keys(c).length)) : (c[a] = c[a] - 1), c);
                    })
                  : x(qe),
                  b?.());
              }
            );
          }),
          (j[5] = p),
          (j[6] = v),
          (j[7] = e))
        : (e = j[7]);
      let z = e;
      (j[8] !== q || j[9] !== p
        ? ((f = () => p?.(q)), (g = [q, p]), (j[8] = q), (j[9] = p), (j[10] = f), (j[11] = g))
        : ((f = j[10]), (g = j[11])),
        (0, a3.useEffect)(f, g),
        j[12] !== y || j[13] !== q || j[14] !== z || j[15] !== w || j[16] !== u
          ? ((h = { version: 0, isTopLayer: y, level: q, registerChild: z, size: w, zIndex: u }),
            (j[12] = y),
            (j[13] = q),
            (j[14] = z),
            (j[15] = w),
            (j[16] = u),
            (j[17] = h))
          : (h = j[17]));
      let A = h;
      return (
        j[18] !== k || j[19] !== A
          ? ((i = (0, a1.jsx)(qc.Provider, { value: A, children: k })), (j[18] = k), (j[19] = A), (j[20] = i))
          : (i = j[20]),
        i
      );
    }
    function qe(a) {
      return a - 1;
    }
    function qf(a) {
      return a + 1;
    }
    function qg() {
      let a = (0, a2.c)(2),
        b = (0, a3.useContext)(qc);
      if (!b) throw Error("useLayer(): missing context value");
      try {
        let c;
        return (a[0] !== b ? ((c = qb(b)), (a[0] = b), (a[1] = c)) : (c = a[1]), c);
      } catch (a) {
        throw a instanceof Error ? Error(`useLayer(): ${a.message}`) : Error(`useLayer(): ${a}`);
      }
    }
    qd.displayName = "LayerProvider";
    let qh = c$.div.withConfig({ displayName: "StyledLayer", componentId: "sc-16kojrv-0" })({ position: "relative" }),
      qi = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n = (0, a2.c)(22);
        n[0] !== a
          ? (({ children: c, onActivate: d, onFocus: e, style: g, ...f } = a),
            (n[0] = a),
            (n[1] = c),
            (n[2] = d),
            (n[3] = e),
            (n[4] = f),
            (n[5] = g))
          : ((c = n[1]), (d = n[2]), (e = n[3]), (f = n[4]), (g = n[5]));
        let o = void 0 === g ? nA : g,
          { zIndex: p, isTopLayer: q } = qg(),
          r = (0, a3.useRef)(null),
          s = (0, a3.useRef)(null),
          t = (0, a3.useRef)(q);
        (n[6] === Symbol.for("react.memo_cache_sentinel") ? ((h = () => s.current), (n[6] = h)) : (h = n[6]),
          (0, a3.useImperativeHandle)(b, h),
          n[7] !== q || n[8] !== d
            ? ((i = () => {
                (t.current !== q && q && d?.({ activeElement: r.current }), (t.current = q));
              }),
              (j = [q, d]),
              (n[7] = q),
              (n[8] = d),
              (n[9] = i),
              (n[10] = j))
            : ((i = n[9]), (j = n[10])),
          (0, a3.useEffect)(i, j),
          n[11] !== q || n[12] !== e
            ? ((k = (a) => {
                e?.(a);
                let b = s.current,
                  c = document.activeElement;
                !q || !b || !c || (nF(c) && nL(b, c) && (r.current = c));
              }),
              (n[11] = q),
              (n[12] = e),
              (n[13] = k))
            : (k = n[13]));
        let u = k;
        return (
          n[14] !== o || n[15] !== p ? ((l = { ...o, zIndex: p }), (n[14] = o), (n[15] = p), (n[16] = l)) : (l = n[16]),
          n[17] !== c || n[18] !== u || n[19] !== f || n[20] !== l
            ? ((m = (0, a1.jsx)(qh, { ...f, "data-ui": "Layer", onFocus: u, ref: s, style: l, children: c })),
              (n[17] = c),
              (n[18] = u),
              (n[19] = f),
              (n[20] = l),
              (n[21] = m))
            : (m = n[21]),
          m
        );
      }),
      qj = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h = (0, a2.c)(11);
        h[0] !== a
          ? (({ children: c, zOffset: e, ...d } = a), (h[0] = a), (h[1] = c), (h[2] = d), (h[3] = e))
          : ((c = h[1]), (d = h[2]), (e = h[3]));
        let i = void 0 === e ? 1 : e;
        return (
          h[4] !== c || h[5] !== b || h[6] !== d
            ? ((f = (0, a1.jsx)(qi, { ...d, ref: b, children: c })), (h[4] = c), (h[5] = b), (h[6] = d), (h[7] = f))
            : (f = h[7]),
          h[8] !== f || h[9] !== i
            ? ((g = (0, a1.jsx)(qd, { zOffset: i, children: f })), (h[8] = f), (h[9] = i), (h[10] = g))
            : (g = h[10]),
          g
        );
      });
    qj.displayName = "ForwardRef(Layer)";
    let qk = "@sanity/ui/context/portal",
      ql = Symbol.for(`${qk}/element`);
    nY[ql] = null;
    let qm = nZ(qk, {
      version: 0,
      boundaryElement: null,
      get element() {
        return typeof document > "u"
          ? null
          : (nY[ql] ||
              ((nY[ql] = document.createElement("div")),
              nY[ql].setAttribute("data-portal", ""),
              document.body.appendChild(nY[ql])),
            nY[ql]);
      },
    });
    function qn() {
      let a = (0, a3.useContext)(qm);
      if (!a) throw Error("usePortal(): missing context value");
      if (!p6(a) || 0 !== a.version) throw Error("usePortal(): the context value is not compatible");
      return a;
    }
    function qo(a) {
      let b,
        c = (0, a2.c)(3),
        { children: d, __unstable_name: e } = a,
        f = qn(),
        g = (e ? f.elements && f.elements[e] : f.element) || f.elements?.default;
      return g
        ? (c[0] !== d || c[1] !== g
            ? ((b = (0, nt.createPortal)(d, g)), (c[0] = d), (c[1] = g), (c[2] = b))
            : (b = c[2]),
          b)
        : null;
    }
    function qp(a) {
      let b,
        c,
        d = (0, a2.c)(7),
        { boundaryElement: e, children: f, element: g, __unstable_elements: h } = a,
        i = (0, a3.useSyncExternalStore)(qs, qr, qq),
        j = e || null,
        k = g || i;
      d[0] !== h || d[1] !== j || d[2] !== k
        ? ((b = { version: 0, boundaryElement: j, element: k, elements: h }),
          (d[0] = h),
          (d[1] = j),
          (d[2] = k),
          (d[3] = b))
        : (b = d[3]);
      let l = b;
      return (
        d[4] !== f || d[5] !== l
          ? ((c = (0, a1.jsx)(qm.Provider, { value: l, children: f })), (d[4] = f), (d[5] = l), (d[6] = c))
          : (c = d[6]),
        c
      );
    }
    function qq() {
      return null;
    }
    function qr() {
      return document.body;
    }
    ((qo.displayName = "Portal"), (qp.displayName = "PortalProvider"));
    let qs = () => () => {},
      qt = c$.div.withConfig({
        displayName: "StyledSrOnly",
        componentId: "sc-mubr0c-0",
      })`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`,
      qu = (0, a3.forwardRef)(function (a, b) {
        let c,
          d = (0, a2.c)(4),
          { as: e, children: f } = a;
        return (
          d[0] !== e || d[1] !== f || d[2] !== b
            ? ((c = (0, a1.jsx)(qt, { "aria-hidden": !0, as: e, "data-ui": "SrOnly", ref: b, children: f })),
              (d[0] = e),
              (d[1] = f),
              (d[2] = b),
              (d[3] = c))
            : (c = d[3]),
          c
        );
      });
    qu.displayName = "ForwardRef(SrOnly)";
    let qv = c$.div.withConfig({ displayName: "StyledVirtualList", componentId: "sc-dlqsj4-0" })`position:relative;`,
      qw = c$.div.withConfig({
        displayName: "ItemWrapper",
        componentId: "sc-dlqsj4-1",
      })`position:absolute;left:0;right:0;`,
      qx = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v = (0, a2.c)(44);
        v[0] !== a
          ? (({ as: g, gap: h, getItemKey: c, items: i, onChange: d, renderItem: e, ...f } = a),
            (v[0] = a),
            (v[1] = c),
            (v[2] = d),
            (v[3] = e),
            (v[4] = f),
            (v[5] = g),
            (v[6] = h),
            (v[7] = i))
          : ((c = v[1]), (d = v[2]), (e = v[3]), (f = v[4]), (g = v[5]), (h = v[6]), (i = v[7]));
        let w = void 0 === g ? "div" : g,
          x = void 0 === h ? 0 : h;
        v[8] !== i ? ((j = void 0 === i ? [] : i), (v[8] = i), (v[9] = j)) : (j = v[9]);
        let y = j,
          { space: z } = n3(),
          A = (0, a3.useRef)(null),
          B = (0, a3.useRef)(null),
          [C, D] = (0, a3.useState)(0),
          [E, F] = (0, a3.useState)(0),
          [G, H] = (0, a3.useState)(-1);
        (v[10] === Symbol.for("react.memo_cache_sentinel") ? ((k = () => A.current), (v[10] = k)) : (k = v[10]),
          (0, a3.useImperativeHandle)(b, k),
          v[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = () => {
                if (!B.current) return;
                let a = B.current.firstChild;
                a instanceof HTMLElement && H(a.offsetHeight);
              }),
              (v[11] = l))
            : (l = v[11]),
          v[12] !== e ? ((m = [e]), (v[12] = e), (v[13] = m)) : (m = v[13]),
          (0, a3.useEffect)(l, m),
          v[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = () => {
                if (!A.current) return;
                let a = (function (a) {
                  let b = a;
                  for (; b && !nM(b); ) b = b.parentNode;
                  return b;
                })(A.current.parentNode);
                if (a) {
                  if (!(a instanceof HTMLElement)) return;
                  let b = () => {
                    D(a.scrollTop);
                  };
                  a.addEventListener("scroll", b, { passive: !0 });
                  let c = new ns((a) => {
                    F(a[0].contentRect.height);
                  });
                  return (
                    c.observe(a),
                    b(),
                    () => {
                      (a.removeEventListener("scroll", b), c.unobserve(a), c.disconnect());
                    }
                  );
                }
                let b = () => {
                    D(window.scrollY);
                  },
                  c = () => {
                    F(window.innerHeight);
                  };
                return (
                  window.addEventListener("scroll", b, { passive: !0 }),
                  window.addEventListener("resize", c),
                  F(window.innerHeight),
                  b(),
                  () => {
                    (window.removeEventListener("scroll", b), window.removeEventListener("resize", c));
                  }
                );
              }),
              (o = []),
              (v[14] = n),
              (v[15] = o))
            : ((n = v[14]), (o = v[15])),
          (0, a3.useEffect)(n, o));
        let I = y.length,
          J = G ? I * (G + z[x]) - z[x] : 0,
          K = J ? Math.max(Math.floor((C / J) * I) - 2, 0) : 0,
          L = J ? Math.ceil(((C + E) / J) * I) + 1 : 0;
        (v[16] !== K ||
        v[17] !== x ||
        v[18] !== G ||
        v[19] !== d ||
        v[20] !== E ||
        v[21] !== C ||
        v[22] !== z ||
        v[23] !== L
          ? ((q = () => {
              d && d({ fromIndex: K, gap: z[x], itemHeight: G, scrollHeight: E, scrollTop: C, toIndex: L });
            }),
            (p = [K, x, G, d, E, C, z, L]),
            (v[16] = K),
            (v[17] = x),
            (v[18] = G),
            (v[19] = d),
            (v[20] = E),
            (v[21] = C),
            (v[22] = z),
            (v[23] = L),
            (v[24] = p),
            (v[25] = q))
          : ((p = v[24]), (q = v[25])),
          (0, a3.useEffect)(q, p),
          v[26] !== K ||
          v[27] !== x ||
          v[28] !== c ||
          v[29] !== G ||
          v[30] !== y ||
          v[31] !== e ||
          v[32] !== z ||
          v[33] !== L
            ? ((r = {
                fromIndex: K,
                gap: x,
                itemHeight: G,
                space: z,
                toIndex: L,
                getItemKey: c,
                items: y,
                renderItem: e,
              }),
              (v[26] = K),
              (v[27] = x),
              (v[28] = c),
              (v[29] = G),
              (v[30] = y),
              (v[31] = e),
              (v[32] = z),
              (v[33] = L),
              (v[34] = r))
            : (r = v[34]));
        let M = (function (a) {
          let b,
            c = (0, a2.c)(21),
            { fromIndex: d, gap: e, getItemKey: f, itemHeight: g, items: h, renderItem: i, space: j, toIndex: k } = a;
          if (!i || 0 === h.length) return null;
          if (-1 === g) {
            let a, b;
            return (
              c[0] !== h[0] || c[1] !== i ? ((a = i(h[0])), (c[0] = h[0]), (c[1] = i), (c[2] = a)) : (a = c[2]),
              c[3] !== a ? ((b = [(0, a1.jsx)(qw, { children: a }, 0)]), (c[3] = a), (c[4] = b)) : (b = c[4]),
              b
            );
          }
          if (
            c[5] !== d ||
            c[6] !== e ||
            c[7] !== f ||
            c[8] !== g ||
            c[9] !== h ||
            c[10] !== i ||
            c[11] !== j ||
            c[12] !== k
          ) {
            let a;
            (c[14] !== d || c[15] !== e || c[16] !== f || c[17] !== g || c[18] !== i || c[19] !== j
              ? ((a = (a, b) => {
                  let c = d + b,
                    h = i(a),
                    k = f ? f(a, c) : c;
                  return (0, a1.jsx)(qw, { style: { top: c * (g + j[e]) }, children: h }, k);
                }),
                (c[14] = d),
                (c[15] = e),
                (c[16] = f),
                (c[17] = g),
                (c[18] = i),
                (c[19] = j),
                (c[20] = a))
              : (a = c[20]),
              (b = h.slice(d, k).map(a)),
              (c[5] = d),
              (c[6] = e),
              (c[7] = f),
              (c[8] = g),
              (c[9] = h),
              (c[10] = i),
              (c[11] = j),
              (c[12] = k),
              (c[13] = b));
          } else b = c[13];
          return b;
        })(r);
        return (
          v[35] !== J ? ((s = { height: J }), (v[35] = J), (v[36] = s)) : (s = v[36]),
          v[37] !== M || v[38] !== s
            ? ((t = (0, a1.jsx)("div", { ref: B, style: s, children: M })), (v[37] = M), (v[38] = s), (v[39] = t))
            : (t = v[39]),
          v[40] !== w || v[41] !== f || v[42] !== t
            ? ((u = (0, a1.jsx)(qv, { as: w, "data-ui": "VirtualList", ...f, ref: A, children: t })),
              (v[40] = w),
              (v[41] = f),
              (v[42] = t),
              (v[43] = u))
            : (u = v[43]),
          u
        );
      });
    function qy(a) {
      let b = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
        c = b && "isReactWarning" in b && b.isReactWarning;
      return c
        ? a.ref
        : (c = (b = Object.getOwnPropertyDescriptor(a, "ref")?.get) && "isReactWarning" in b && b.isReactWarning)
          ? a.props.ref
          : a.props.ref || a.ref;
    }
    qx.displayName = "ForwardRef(VirtualList)";
    let qz = [0, 0, 0, 0],
      qA = {
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
      qB = c$(mG.create(pr)).withConfig({
        displayName: "MotionCard",
        componentId: "sc-ihg31s-0",
      })`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`,
      qC = c$(mG.create(ph)).withConfig({
        displayName: "MotionFlex",
        componentId: "sc-ihg31s-1",
      })`will-change:opacity;`,
      qD = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H = (0, a2.c)(66);
        H[0] !== a
          ? (({
              __unstable_margins: i,
              animate: c,
              arrow: d,
              arrowRef: e,
              arrowX: f,
              arrowY: g,
              children: h,
              padding: m,
              placement: n,
              originX: j,
              originY: k,
              overflow: l,
              radius: o,
              scheme: q,
              shadow: r,
              strategy: s,
              style: t,
              tone: u,
              width: v,
              x: w,
              y: x,
              ...p
            } = a),
            (H[0] = a),
            (H[1] = c),
            (H[2] = d),
            (H[3] = e),
            (H[4] = f),
            (H[5] = g),
            (H[6] = h),
            (H[7] = i),
            (H[8] = j),
            (H[9] = k),
            (H[10] = l),
            (H[11] = m),
            (H[12] = n),
            (H[13] = o),
            (H[14] = p),
            (H[15] = q),
            (H[16] = r),
            (H[17] = s),
            (H[18] = t),
            (H[19] = u),
            (H[20] = v),
            (H[21] = w),
            (H[22] = x))
          : ((c = H[1]),
            (d = H[2]),
            (e = H[3]),
            (f = H[4]),
            (g = H[5]),
            (h = H[6]),
            (i = H[7]),
            (j = H[8]),
            (k = H[9]),
            (l = H[10]),
            (m = H[11]),
            (n = H[12]),
            (o = H[13]),
            (p = H[14]),
            (q = H[15]),
            (r = H[16]),
            (s = H[17]),
            (t = H[18]),
            (u = H[19]),
            (v = H[20]),
            (w = H[21]),
            (x = H[22]));
        let { zIndex: I } = qg(),
          J = i || qz,
          K = (w ?? 0) + J[3],
          L = (x ?? 0) + J[0],
          M = c ? "transform" : void 0;
        H[23] !== j ||
        H[24] !== k ||
        H[25] !== s ||
        H[26] !== t ||
        H[27] !== M ||
        H[28] !== v ||
        H[29] !== K ||
        H[30] !== L ||
        H[31] !== I
          ? ((y = { left: K, originX: j, originY: k, position: s, top: L, width: v, zIndex: I, willChange: M, ...t }),
            (H[23] = j),
            (H[24] = k),
            (H[25] = s),
            (H[26] = t),
            (H[27] = M),
            (H[28] = v),
            (H[29] = K),
            (H[30] = L),
            (H[31] = I),
            (H[32] = y))
          : (y = H[32]);
        let N = y,
          O = null !== f ? f : void 0,
          P = null !== g ? g : void 0;
        H[33] !== O || H[34] !== P
          ? ((z = { left: O, top: P, right: void 0, bottom: void 0 }), (H[33] = O), (H[34] = P), (H[35] = z))
          : (z = H[35]);
        let Q = z,
          R = p;
        return (
          H[36] !== c ? ((A = c ? ["hidden", "initial"] : void 0), (H[36] = c), (H[37] = A)) : (A = H[37]),
          H[38] !== c ? ((B = c ? ["visible", "scaleIn"] : void 0), (H[38] = c), (H[39] = B)) : (B = H[39]),
          H[40] !== c ? ((C = c ? ["hidden", "scaleOut"] : void 0), (H[40] = c), (H[41] = C)) : (C = H[41]),
          H[42] !== h || H[43] !== m
            ? ((D = (0, a1.jsx)(ph, { direction: "column", flex: 1, padding: m, children: h })),
              (H[42] = h),
              (H[43] = m),
              (H[44] = D))
            : (D = H[44]),
          H[45] !== l || H[46] !== D
            ? ((E = (0, a1.jsx)(qC, {
                "data-ui": "Popover__wrapper",
                direction: "column",
                flex: 1,
                overflow: l,
                variants: nC,
                transition: nD,
                children: D,
              })),
              (H[45] = l),
              (H[46] = D),
              (H[47] = E))
            : (E = H[47]),
          H[48] !== d || H[49] !== e || H[50] !== Q
            ? ((F = d && (0, a1.jsx)(p3, { ref: e, style: Q, width: 19, height: 8, radius: 2 })),
              (H[48] = d),
              (H[49] = e),
              (H[50] = Q),
              (H[51] = F))
            : (F = H[51]),
          H[52] !== n ||
          H[53] !== o ||
          H[54] !== b ||
          H[55] !== N ||
          H[56] !== q ||
          H[57] !== r ||
          H[58] !== E ||
          H[59] !== F ||
          H[60] !== R ||
          H[61] !== A ||
          H[62] !== B ||
          H[63] !== C ||
          H[64] !== u
            ? ((G = (0, a1.jsxs)(qB, {
                "data-ui": "Popover",
                ...R,
                "data-placement": n,
                radius: o,
                ref: b,
                scheme: q,
                shadow: r,
                sizing: "border",
                style: N,
                tone: u,
                variants: nB,
                transition: nD,
                initial: A,
                animate: B,
                exit: C,
                children: [E, F],
              })),
              (H[52] = n),
              (H[53] = o),
              (H[54] = b),
              (H[55] = N),
              (H[56] = q),
              (H[57] = r),
              (H[58] = E),
              (H[59] = F),
              (H[60] = R),
              (H[61] = A),
              (H[62] = B),
              (H[63] = C),
              (H[64] = u),
              (H[65] = G))
            : (G = H[65]),
          G
        );
      });
    qD.displayName = "ForwardRef(PopoverCard)";
    let qE = () => {
        let a,
          b = (0, a2.c)(2),
          { zIndex: c } = qg();
        return (
          b[0] !== c
            ? ((a = (0, a1.jsx)("div", {
                style: { height: "100vh", inset: 0, position: "fixed", width: "100vw", zIndex: c },
              })),
              (b[0] = c),
              (b[1] = a))
            : (a = b[1]),
          a
        );
      },
      qF = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M,
          N,
          O,
          P,
          Q,
          R,
          S,
          T,
          U,
          V,
          W,
          X,
          Y,
          Z,
          $,
          _,
          aa,
          ab,
          ac,
          ad,
          ae,
          af = (0, a2.c)(126),
          { container: ag, layer: ah } = n3(),
          ai = p8();
        if (af[0] !== a) {
          let {
            __unstable_margins: b,
            animate: F,
            arrow: G,
            boundaryElement: H,
            children: I,
            constrainSize: J,
            content: K,
            disabled: L,
            fallbackPlacements: M,
            matchReferenceWidth: N,
            floatingBoundary: O,
            modal: P,
            onActivate: Q,
            open: R,
            overflow: S,
            padding: T,
            placement: U,
            placementStrategy: V,
            portal: W,
            preventOverflow: X,
            radius: Y,
            referenceBoundary: Z,
            referenceElement: $,
            scheme: _,
            shadow: aa,
            tone: ab,
            width: ac,
            zOffset: ad,
            updateRef: ae,
            ...ag
          } = a;
          ((s = b),
            (t = F),
            (w = G),
            (c = H),
            (h = I),
            (x = J),
            (i = K),
            (j = L),
            (d = M),
            (k = N),
            (e = O),
            (l = P),
            (m = R),
            (y = S),
            (n = T),
            (z = U),
            (A = V),
            (o = W),
            (B = X),
            (C = Y),
            (f = Z),
            (p = $),
            (r = _),
            (D = aa),
            (u = ab),
            (v = ac),
            (g = ad),
            (E = ae),
            (q = ag),
            (af[0] = a),
            (af[1] = c),
            (af[2] = d),
            (af[3] = e),
            (af[4] = f),
            (af[5] = g),
            (af[6] = h),
            (af[7] = i),
            (af[8] = j),
            (af[9] = k),
            (af[10] = l),
            (af[11] = m),
            (af[12] = n),
            (af[13] = o),
            (af[14] = p),
            (af[15] = q),
            (af[16] = r),
            (af[17] = s),
            (af[18] = t),
            (af[19] = u),
            (af[20] = v),
            (af[21] = w),
            (af[22] = x),
            (af[23] = y),
            (af[24] = z),
            (af[25] = A),
            (af[26] = B),
            (af[27] = C),
            (af[28] = D),
            (af[29] = E));
        } else
          ((c = af[1]),
            (d = af[2]),
            (e = af[3]),
            (f = af[4]),
            (g = af[5]),
            (h = af[6]),
            (i = af[7]),
            (j = af[8]),
            (k = af[9]),
            (l = af[10]),
            (m = af[11]),
            (n = af[12]),
            (o = af[13]),
            (p = af[14]),
            (q = af[15]),
            (r = af[16]),
            (s = af[17]),
            (t = af[18]),
            (u = af[19]),
            (v = af[20]),
            (w = af[21]),
            (x = af[22]),
            (y = af[23]),
            (z = af[24]),
            (A = af[25]),
            (B = af[26]),
            (C = af[27]),
            (D = af[28]),
            (E = af[29]));
        let aj = void 0 === s ? qz : s,
          ak = void 0 !== t && t,
          al = void 0 !== w && w,
          am = void 0 !== x && x,
          an = void 0 === y ? "hidden" : y,
          ao = void 0 === z ? "bottom" : z,
          ap = void 0 === A ? "flip" : A,
          aq = void 0 === B || B,
          ar = void 0 === C ? 3 : C,
          as = void 0 === D ? 3 : D,
          at = void 0 === u ? "inherit" : u,
          au = void 0 === v ? "auto" : v,
          av = c ?? ai?.element,
          aw = d ?? qA[a.placement ?? "bottom"],
          ax = e ?? a.boundaryElement ?? ai.element,
          ay = f ?? a.boundaryElement ?? ai.element,
          az = g ?? ah.popover.zOffset,
          aA = !pD() && ak,
          aB = pw(av)?.border;
        af[30] !== n ? ((F = nQ(n)), (af[30] = n), (af[31] = F)) : (F = af[31]);
        let aC = F;
        af[32] !== ar ? ((G = nQ(ar)), (af[32] = ar), (af[33] = G)) : (G = af[33]);
        let aD = G;
        af[34] !== as ? ((H = nQ(as)), (af[34] = as), (af[35] = H)) : (H = af[35]);
        let aE = H,
          aF = nQ(au);
        af[36] !== az ? ((I = nQ(az)), (af[36] = az), (af[37] = I)) : (I = af[37]);
        let aG = I,
          aH = (0, a3.useRef)(null),
          aI = (0, a3.useRef)(null);
        (af[38] === Symbol.for("react.memo_cache_sentinel") ? ((J = () => aH.current), (af[38] = J)) : (J = af[38]),
          (0, a3.useImperativeHandle)(b, J));
        let aJ = pA(),
          aK = am || aq ? aB?.width : void 0,
          aL = (function (a) {
            let { container: b, mediaIndex: c, width: d } = a,
              e = d[c],
              f = void 0 === e ? d[d.length - 1] : e;
            return "number" == typeof f ? b[f] : void 0;
          })({ container: ag, mediaIndex: aJ, width: aF }),
          aM = (0, a3.useRef)(aL);
        (af[39] !== aL
          ? ((K = () => {
              aM.current = aL;
            }),
            (L = [aL]),
            (af[39] = aL),
            (af[40] = K),
            (af[41] = L))
          : ((K = af[40]), (L = af[41])),
          (0, a3.useEffect)(K, L),
          af[42] !== aK || af[43] !== aL
            ? ((M = (function (a) {
                let { boundaryWidth: b, currentWidth: c } = a;
                if (void 0 !== c || void 0 !== b) return Math.min(c ?? 1 / 0, (b || 1 / 0) - 8);
              })({ boundaryWidth: aK, currentWidth: aL })),
              (af[42] = aK),
              (af[43] = aL),
              (af[44] = M))
            : (M = af[44]));
        let aN = M,
          aO = (0, a3.useRef)(aN);
        (af[45] !== aN
          ? ((N = () => {
              aO.current = aN;
            }),
            (O = [aN]),
            (af[45] = aN),
            (af[46] = N),
            (af[47] = O))
          : ((N = af[46]), (O = af[47])),
          (0, a3.useEffect)(N, O));
        let aP = (0, a3.useRef)(void 0);
        (af[48] !== k || af[49] !== aN || af[50] !== m || af[51] !== aL
          ? ((P = () => {
              let a = aH.current;
              if (!m || !a) return;
              let b = aP.current;
              (k ? void 0 !== b && (a.style.width = `${b}px`) : void 0 !== aL && (a.style.width = `${aL}px`),
                "number" == typeof aN && (a.style.maxWidth = `${aN}px`));
            }),
            (Q = [aL, k, aN, m]),
            (af[48] = k),
            (af[49] = aN),
            (af[50] = m),
            (af[51] = aL),
            (af[52] = P),
            (af[53] = Q))
          : ((P = af[52]), (Q = af[53])),
          (0, a3.useEffect)(P, Q));
        let [aQ, aR] = (0, a3.useState)(void 0);
        af[54] !== aA ||
        af[55] !== al ||
        af[56] !== am ||
        af[57] !== aw ||
        af[58] !== ax ||
        af[59] !== aj ||
        af[60] !== k ||
        af[61] !== ao ||
        af[62] !== ap ||
        af[63] !== aq ||
        af[64] !== ay
          ? ((R = {
              animate: aA,
              arrowProp: al,
              arrowRef: aI,
              constrainSize: am,
              fallbackPlacements: aw,
              floatingBoundary: ax,
              margins: aj,
              matchReferenceWidth: k,
              maxWidthRef: aO,
              placementProp: ao,
              placementStrategy: ap,
              preventOverflow: aq,
              referenceBoundary: ay,
              referenceWidthRef: aP,
              rootBoundary: "viewport",
              setReferenceWidth: aR,
              widthRef: aM,
            }),
            (af[54] = aA),
            (af[55] = al),
            (af[56] = am),
            (af[57] = aw),
            (af[58] = ax),
            (af[59] = aj),
            (af[60] = k),
            (af[61] = ao),
            (af[62] = ap),
            (af[63] = aq),
            (af[64] = ay),
            (af[65] = R))
          : (R = af[65]);
        let aS = (function (a) {
          let b,
            c = (0, a2.c)(42),
            {
              animate: d,
              arrowProp: e,
              arrowRef: f,
              constrainSize: g,
              fallbackPlacements: h,
              floatingBoundary: i,
              margins: j,
              matchReferenceWidth: k,
              maxWidthRef: l,
              placementProp: m,
              placementStrategy: n,
              preventOverflow: o,
              referenceBoundary: p,
              referenceWidthRef: q,
              rootBoundary: r,
              setReferenceWidth: s,
              widthRef: t,
            } = a;
          if (
            c[0] !== d ||
            c[1] !== e ||
            c[2] !== f ||
            c[3] !== g ||
            c[4] !== h ||
            c[5] !== i ||
            c[6] !== j ||
            c[7] !== k ||
            c[8] !== l ||
            c[9] !== m ||
            c[10] !== n ||
            c[11] !== o ||
            c[12] !== p ||
            c[13] !== q ||
            c[14] !== r ||
            c[15] !== s ||
            c[16] !== t
          ) {
            let a, u;
            if (((b = []), g || o))
              if ("autoPlacement" === n) {
                let a;
                (c[18] !== h || c[19] !== m
                  ? ((a = (0, gP.autoPlacement)({ allowedPlacements: [m].concat(h) })),
                    (c[18] = h),
                    (c[19] = m),
                    (c[20] = a))
                  : (a = c[20]),
                  b.push(a));
              } else {
                let a,
                  d = i || void 0;
                (c[21] !== h || c[22] !== r || c[23] !== d
                  ? ((a = (0, gP.flip)({ boundary: d, fallbackPlacements: h, padding: 4, rootBoundary: r })),
                    (c[21] = h),
                    (c[22] = r),
                    (c[23] = d),
                    (c[24] = a))
                  : (a = c[24]),
                  b.push(a));
              }
            if (
              (c[25] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, gP.offset)({ mainAxis: 4 })), (c[25] = a))
                : (a = c[25]),
              b.push(a),
              g || k)
            ) {
              let a,
                d = i || void 0;
              (c[26] !== g ||
              c[27] !== j ||
              c[28] !== k ||
              c[29] !== l ||
              c[30] !== q ||
              c[31] !== s ||
              c[32] !== d ||
              c[33] !== t
                ? ((a = (function (a) {
                    let {
                      constrainSize: b,
                      margins: c,
                      matchReferenceWidth: d,
                      maxWidthRef: e,
                      padding: f = 0,
                      referenceWidthRef: g,
                      setReferenceWidth: h,
                      widthRef: i,
                    } = a;
                    return {
                      name: "@sanity/ui/size",
                      async fn(j) {
                        let { elements: k, placement: l, platform: m, rects: n } = j,
                          { floating: o, reference: p } = n,
                          q = await (0, gO.detectOverflow)(j, {
                            altBoundary: !0,
                            boundary: a.boundaryElement || void 0,
                            elementContext: "floating",
                            padding: f,
                            rootBoundary: "viewport",
                          }),
                          r = 1 / 0,
                          s = 1 / 0,
                          t = o.width,
                          u = o.height;
                        (l.includes("top") && ((r = t - (q.left + q.right)), (s = u - q.top)),
                          l.includes("right") && ((r = t - q.right), (s = u - (q.top + q.bottom))),
                          l.includes("bottom") && ((r = t - (q.left + q.right)), (s = u - q.bottom)),
                          l.includes("left") && ((r = t - q.left), (s = u - (q.top + q.bottom))));
                        let v = r - c[1] - c[3],
                          w = s - c[0] - c[2],
                          x = p.width - c[1] - c[3];
                        ((g.current = x),
                          h(x),
                          d
                            ? (k.floating.style.width = `${x}px`)
                            : void 0 !== i.current && (k.floating.style.width = `${i.current}px`),
                          b &&
                            ((k.floating.style.maxWidth = `${Math.min(v, e.current ?? 1 / 0)}px`),
                            (k.floating.style.maxHeight = `${w}px`)));
                        let y = await m.getDimensions(k.floating),
                          z = y.height;
                        return t !== y.width || u !== z ? { reset: { rects: !0 } } : {};
                      },
                    };
                  })({
                    boundaryElement: d,
                    constrainSize: g,
                    margins: j,
                    matchReferenceWidth: k,
                    maxWidthRef: l,
                    padding: 4,
                    referenceWidthRef: q,
                    setReferenceWidth: s,
                    widthRef: t,
                  })),
                  (c[26] = g),
                  (c[27] = j),
                  (c[28] = k),
                  (c[29] = l),
                  (c[30] = q),
                  (c[31] = s),
                  (c[32] = d),
                  (c[33] = t),
                  (c[34] = a))
                : (a = c[34]),
                b.push(a));
            }
            if (o) {
              let a,
                d = i || void 0;
              (c[35] !== r || c[36] !== d
                ? ((a = (0, gP.shift)({ boundary: d, rootBoundary: r, padding: 4 })),
                  (c[35] = r),
                  (c[36] = d),
                  (c[37] = a))
                : (a = c[37]),
                b.push(a));
            }
            if (e) {
              let a;
              (c[38] !== f ? ((a = (0, gP.arrow)({ element: f, padding: 4 })), (c[38] = f), (c[39] = a)) : (a = c[39]),
                b.push(a));
            }
            d && b.push(pY);
            let v = p || void 0;
            (c[40] !== v
              ? ((u = (0, gP.hide)({ boundary: v, padding: 4, strategy: "referenceHidden" })), (c[40] = v), (c[41] = u))
              : (u = c[41]),
              b.push(u),
              (c[0] = d),
              (c[1] = e),
              (c[2] = f),
              (c[3] = g),
              (c[4] = h),
              (c[5] = i),
              (c[6] = j),
              (c[7] = k),
              (c[8] = l),
              (c[9] = m),
              (c[10] = n),
              (c[11] = o),
              (c[12] = p),
              (c[13] = q),
              (c[14] = r),
              (c[15] = s),
              (c[16] = t),
              (c[17] = b));
          } else b = c[17];
          return b;
        })(R);
        (af[66] !== p ? ((S = p ? { reference: p } : void 0), (af[66] = p), (af[67] = S)) : (S = af[67]),
          af[68] !== aS || af[69] !== ao || af[70] !== S
            ? ((T = { middleware: aS, placement: ao, whileElementsMounted: gO.autoUpdate, elements: S }),
              (af[68] = aS),
              (af[69] = ao),
              (af[70] = S),
              (af[71] = T))
            : (T = af[71]));
        let {
            x: aT,
            y: aU,
            middlewareData: aV,
            placement: aW,
            refs: aX,
            strategy: aY,
            update: aZ,
          } = (0, gP.useFloating)(T),
          a$ = aV.hide?.referenceHidden,
          a_ = aV.arrow?.x,
          a0 = aV.arrow?.y,
          a4 = aV["@sanity/ui/origin"]?.originX,
          a5 = aV["@sanity/ui/origin"]?.originY;
        af[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (a) => {
              aI.current = a;
            }),
            (af[72] = U))
          : (U = af[72]);
        let a6 = U;
        af[73] !== aX
          ? ((V = (a) => {
              ((aH.current = a), aX.setFloating(a));
            }),
            (af[73] = aX),
            (af[74] = V))
          : (V = af[74]);
        let a7 = V;
        (af[75] !== h ? ((W = h ? qy(h) : null), (af[75] = h), (af[76] = W)) : (W = af[76]),
          af[77] !== aX.reference.current
            ? ((X = () => aX.reference.current), (af[77] = aX.reference.current), (af[78] = X))
            : (X = af[78]),
          (0, a3.useImperativeHandle)(W, X));
        a: {
          let a;
          if (p) {
            Y = h;
            break a;
          }
          if (!h) {
            Y = null;
            break a;
          }
          (af[79] !== h || af[80] !== aX.setReference
            ? ((a = (0, a3.cloneElement)(h, { ref: aX.setReference })),
              (af[79] = h),
              (af[80] = aX.setReference),
              (af[81] = a))
            : (a = af[81]),
            (Y = a));
        }
        let a8 = Y;
        if (
          (af[82] !== aZ
            ? ((Z = () => aZ), ($ = [aZ]), (af[82] = aZ), (af[83] = Z), (af[84] = $))
            : ((Z = af[83]), ($ = af[84])),
          (0, a3.useImperativeHandle)(E, Z, $),
          j)
        ) {
          let a;
          return (
            af[85] !== h ? ((a = h || (0, a1.jsx)(a1.Fragment, {})), (af[85] = h), (af[86] = a)) : (a = af[86]),
            a
          );
        }
        af[87] !== l ? ((_ = l && (0, a1.jsx)(qE, {})), (af[87] = l), (af[88] = _)) : (_ = af[88]);
        let a9 = k ? aQ : aL;
        (af[89] !== aA ||
        af[90] !== al ||
        af[91] !== a_ ||
        af[92] !== a0 ||
        af[93] !== i ||
        af[94] !== aj ||
        af[95] !== a4 ||
        af[96] !== a5 ||
        af[97] !== an ||
        af[98] !== aC ||
        af[99] !== aW ||
        af[100] !== aD ||
        af[101] !== a$ ||
        af[102] !== q ||
        af[103] !== r ||
        af[104] !== a7 ||
        af[105] !== aE ||
        af[106] !== aY ||
        af[107] !== a9 ||
        af[108] !== at ||
        af[109] !== aT ||
        af[110] !== aU
          ? ((aa = (0, a1.jsx)(qD, {
              ...q,
              __unstable_margins: aj,
              animate: aA,
              arrow: al,
              arrowRef: a6,
              arrowX: a_,
              arrowY: a0,
              hidden: a$,
              overflow: an,
              padding: aC,
              placement: aW,
              radius: aD,
              ref: a7,
              scheme: r,
              shadow: aE,
              originX: a4,
              originY: a5,
              strategy: aY,
              tone: at,
              width: a9,
              x: aT,
              y: aU,
              children: i,
            })),
            (af[89] = aA),
            (af[90] = al),
            (af[91] = a_),
            (af[92] = a0),
            (af[93] = i),
            (af[94] = aj),
            (af[95] = a4),
            (af[96] = a5),
            (af[97] = an),
            (af[98] = aC),
            (af[99] = aW),
            (af[100] = aD),
            (af[101] = a$),
            (af[102] = q),
            (af[103] = r),
            (af[104] = a7),
            (af[105] = aE),
            (af[106] = aY),
            (af[107] = a9),
            (af[108] = at),
            (af[109] = aT),
            (af[110] = aU),
            (af[111] = aa))
          : (aa = af[111]),
          af[112] !== _ || af[113] !== aa || af[114] !== aG
            ? ((ab = (0, a1.jsxs)(qd, { zOffset: aG, children: [_, aa] })),
              (af[112] = _),
              (af[113] = aa),
              (af[114] = aG),
              (af[115] = ab))
            : (ab = af[115]));
        let ba = ab;
        af[116] !== m || af[117] !== ba || af[118] !== o
          ? ((ac =
              m && (o ? (0, a1.jsx)(qo, { __unstable_name: "string" == typeof o ? o : void 0, children: ba }) : ba)),
            (af[116] = m),
            (af[117] = ba),
            (af[118] = o),
            (af[119] = ac))
          : (ac = af[119]);
        let bb = ac;
        return (
          af[120] !== aA || af[121] !== bb
            ? ((ad = aA ? (0, a1.jsx)(mP, { children: bb }) : bb), (af[120] = aA), (af[121] = bb), (af[122] = ad))
            : (ad = af[122]),
          af[123] !== a8 || af[124] !== ad
            ? ((ae = (0, a1.jsxs)(a1.Fragment, { children: [ad, a8] })), (af[123] = a8), (af[124] = ad), (af[125] = ae))
            : (ae = af[125]),
          ae
        );
      });
    qF.displayName = "ForwardRef(Popover)";
    let qG = c$.div.withConfig({ displayName: "StyledRadio", componentId: "sc-ccrwkf-0" })(function () {
        return cZ`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `;
      }),
      qH = c$.input.withConfig({ displayName: "Input", componentId: "sc-ccrwkf-1" })(function (a) {
        let { color: b, input: c } = W(a.theme),
          d = (c.radio.size - c.radio.markSize) / 2;
        return cZ`
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
    border-radius: ${nO(c.radio.size / 2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${nO(c.radio.size)};
      width: ${nO(c.radio.size)};
      border-radius: ${nO(c.radio.size / 2)};
      background: ${b.input.default.enabled.bg};
      box-shadow: ${op({ color: b.input.default.enabled.border, width: c.border.width })};

      &::after {
        content: '';
        position: absolute;
        top: ${nO(d)};
        left: ${nO(d)};
        height: ${nO(c.radio.markSize)};
        width: ${nO(c.radio.markSize)};
        border-radius: ${nO(c.radio.markSize / 2)};
        background: ${b.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${oq({ border: { width: c.border.width, color: b.input.default.enabled.border }, focusRing: c.radio.focusRing })};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${op({ color: b.input.default.enabled.border, width: c.border.width })};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${b.input.invalid.enabled.border};
      box-shadow: ${op({ width: c.border.width, color: b.input.invalid.enabled.muted.bg })};
      &::after {
        background: ${b.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${b.input.default.readOnly.border};
      background: ${b.input.default.readOnly.bg};

      &::after {
        background: ${b.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${b.input.default.disabled.border};
      background: ${b.input.default.disabled.bg};

      &::after {
        background: ${b.input.default.disabled.border};
      }
    }
  `;
      }),
      qI = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = (0, a2.c)(19);
        m[0] !== a
          ? (({ className: c, disabled: e, style: h, customValidity: d, readOnly: f, ...g } = a),
            (m[0] = a),
            (m[1] = c),
            (m[2] = d),
            (m[3] = e),
            (m[4] = f),
            (m[5] = g),
            (m[6] = h))
          : ((c = m[1]), (d = m[2]), (e = m[3]), (f = m[4]), (g = m[5]), (h = m[6]));
        let n = (0, a3.useRef)(null);
        (m[7] === Symbol.for("react.memo_cache_sentinel") ? ((i = () => n.current), (m[7] = i)) : (i = m[7]),
          (0, a3.useImperativeHandle)(b, i),
          pu(n, d));
        let o = !e && f ? "" : void 0,
          p = d ? "" : void 0,
          q = e || f;
        return (
          m[8] !== f || m[9] !== g || m[10] !== o || m[11] !== p || m[12] !== q
            ? ((j = (0, a1.jsx)(qH, {
                "data-read-only": o,
                "data-error": p,
                ...g,
                disabled: q,
                readOnly: f,
                ref: n,
                type: "radio",
              })),
              (m[8] = f),
              (m[9] = g),
              (m[10] = o),
              (m[11] = p),
              (m[12] = q),
              (m[13] = j))
            : (j = m[13]),
          m[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = (0, a1.jsx)("span", {})), (m[14] = k))
            : (k = m[14]),
          m[15] !== c || m[16] !== h || m[17] !== j
            ? ((l = (0, a1.jsxs)(qG, { className: c, "data-ui": "Radio", style: h, children: [j, k] })),
              (m[15] = c),
              (m[16] = h),
              (m[17] = j),
              (m[18] = l))
            : (l = m[18]),
          l
        );
      });
    function qJ(a) {
      let { font: b } = W(a.theme);
      return cZ`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${b.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `;
    }
    function qK(a) {
      let { color: b, input: c } = W(a.theme);
      return cZ`
    /* enabled */
    background-color: ${b.input.default.enabled.bg};
    color: ${b.input.default.enabled.fg};
    box-shadow: ${op({ color: b.input.default.enabled.border, width: c.border.width })};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${b.input.default.hovered.bg};
        color: ${b.input.default.hovered.fg};
        box-shadow: ${op({ color: b.input.default.hovered.border, width: c.border.width })};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${oq({ border: { width: c.border.width, color: b.input.default.enabled.border }, focusRing: c.select.focusRing })};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${b.input.default.readOnly.bg};
      color: ${b.input.default.readOnly.fg};
      box-shadow: ${op({ color: b.input.default.readOnly.border, width: c.border.width })};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${b.input.default.disabled.bg};
      color: ${b.input.default.disabled.fg};
      box-shadow: ${op({ color: b.input.default.disabled.border, width: c.border.width })};
    }
  `;
    }
    function qL(a) {
      let { $fontSize: b } = a,
        { font: c, media: d } = W(a.theme);
      return nP(d, b, (a) => {
        var b;
        return { fontSize: nO((b = c.text.sizes[a] || c.text.sizes[2]).fontSize), lineHeight: `${nO(b.lineHeight)}` };
      });
    }
    qI.displayName = "ForwardRef(Radio)";
    let qM = c$.div.withConfig({ displayName: "StyledSelect", componentId: "sc-5mxno7-0" })(function () {
        return cZ`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `;
      }),
      qN = c$.select.withConfig({ displayName: "Input", componentId: "sc-5mxno7-1" })(function () {
        return [oS, qJ, qK, qL, oL];
      }),
      qO = c$(pb).withConfig({ displayName: "IconBox", componentId: "sc-5mxno7-2" })(function (a) {
        let { color: b } = W(a.theme);
        return cZ`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${b.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${b.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${b.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${b.input.default.readOnly.fg};
    }
  `;
      }),
      qP = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v = (0, a2.c)(37);
        v[0] !== a
          ? (({
              children: c,
              customValidity: d,
              disabled: e,
              fontSize: h,
              padding: i,
              radius: j,
              readOnly: f,
              space: k,
              ...g
            } = a),
            (v[0] = a),
            (v[1] = c),
            (v[2] = d),
            (v[3] = e),
            (v[4] = f),
            (v[5] = g),
            (v[6] = h),
            (v[7] = i),
            (v[8] = j),
            (v[9] = k))
          : ((c = v[1]),
            (d = v[2]),
            (e = v[3]),
            (f = v[4]),
            (g = v[5]),
            (h = v[6]),
            (i = v[7]),
            (j = v[8]),
            (k = v[9]));
        let w = void 0 === h ? 2 : h,
          x = void 0 === i ? 3 : i,
          y = void 0 === j ? 2 : j,
          z = void 0 === k ? 3 : k,
          A = (0, a3.useRef)(null);
        (v[10] === Symbol.for("react.memo_cache_sentinel") ? ((l = () => A.current), (v[10] = l)) : (l = v[10]),
          (0, a3.useImperativeHandle)(b, l),
          pu(A, d));
        let B = !e && f ? "" : void 0;
        (v[11] !== w ? ((m = nQ(w)), (v[11] = w), (v[12] = m)) : (m = v[12]),
          v[13] !== x ? ((n = nQ(x)), (v[13] = x), (v[14] = n)) : (n = v[14]),
          v[15] !== y ? ((o = nQ(y)), (v[15] = y), (v[16] = o)) : (o = v[16]),
          v[17] !== z ? ((p = nQ(z)), (v[17] = z), (v[18] = p)) : (p = v[18]));
        let C = e || f;
        return (
          v[19] !== c ||
          v[20] !== g ||
          v[21] !== C ||
          v[22] !== B ||
          v[23] !== m ||
          v[24] !== n ||
          v[25] !== o ||
          v[26] !== p
            ? ((q = (0, a1.jsx)(qN, {
                "data-read-only": B,
                "data-ui": "Select",
                ...g,
                $fontSize: m,
                $padding: n,
                $radius: o,
                $space: p,
                disabled: C,
                ref: A,
                children: c,
              })),
              (v[19] = c),
              (v[20] = g),
              (v[21] = C),
              (v[22] = B),
              (v[23] = m),
              (v[24] = n),
              (v[25] = o),
              (v[26] = p),
              (v[27] = q))
            : (q = v[27]),
          v[28] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, a1.jsx)(dH, {})), (v[28] = r)) : (r = v[28]),
          v[29] !== w ? ((s = (0, a1.jsx)(pd, { size: w, children: r })), (v[29] = w), (v[30] = s)) : (s = v[30]),
          v[31] !== x || v[32] !== s
            ? ((t = (0, a1.jsx)(qO, { padding: x, children: s })), (v[31] = x), (v[32] = s), (v[33] = t))
            : (t = v[33]),
          v[34] !== q || v[35] !== t
            ? ((u = (0, a1.jsxs)(qM, { "data-ui": "Select", children: [q, t] })), (v[34] = q), (v[35] = t), (v[36] = u))
            : (u = v[36]),
          u
        );
      });
    qP.displayName = "ForwardRef(Select)";
    let qQ = {
        "&&:not([hidden])": { display: "grid" },
        '&[data-as="ul"],&[data-as="ol"]': { listStyle: "none" },
        gridTemplateColumns: "minmax(0, 1fr)",
        gridAutoRows: "min-content",
      },
      qR = c$(pb).withConfig({ displayName: "StyledStack", componentId: "sc-8dpfq2-0" })(
        function () {
          return qQ;
        },
        function (a) {
          let { media: b, space: c } = W(a.theme);
          return nP(b, a.$space, (a) => ({ gridGap: nO(c[a]) }));
        },
      ),
      qS = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h = (0, a2.c)(12);
        h[0] !== a
          ? (({ as: c, space: e, ...d } = a), (h[0] = a), (h[1] = c), (h[2] = d), (h[3] = e))
          : ((c = h[1]), (d = h[2]), (e = h[3]));
        let i = "string" == typeof c ? c : void 0;
        return (
          h[4] !== e ? ((f = nQ(e)), (h[4] = e), (h[5] = f)) : (f = h[5]),
          h[6] !== c || h[7] !== b || h[8] !== d || h[9] !== i || h[10] !== f
            ? ((g = (0, a1.jsx)(qR, { "data-as": i, "data-ui": "Stack", ...d, $space: f, forwardedAs: c, ref: b })),
              (h[6] = c),
              (h[7] = b),
              (h[8] = d),
              (h[9] = i),
              (h[10] = f),
              (h[11] = g))
            : (g = h[11]),
          g
        );
      });
    qS.displayName = "ForwardRef(Stack)";
    let qT = c$.span.withConfig({ displayName: "StyledSwitch", componentId: "sc-dw1foe-0" })(function () {
        return cZ`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `;
      }),
      qU = c$.input.withConfig({ displayName: "Input", componentId: "sc-dw1foe-1" })(function () {
        return cZ`
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
      qV = c$.span.withConfig({ displayName: "Representation", componentId: "sc-dw1foe-2" })(function (a) {
        let { color: b, input: c } = W(a.theme);
        return cZ`
    --switch-bg-color: ${b.input.default.enabled.border};
    --switch-fg-color: ${b.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${nO(c.switch.width)};
    height: ${nO(c.switch.height)};
    border-radius: ${nO(c.switch.height / 2)};

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
      --switch-box-shadow: ${oq({ focusRing: c.switch.focusRing })};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${b.input.default.enabled.fg};
      --switch-fg-color: ${b.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${b.input.default.hovered.border};
        --switch-fg-color: ${b.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${b.input.default.enabled.fg};
        --switch-fg-color: ${b.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${b.input.default.disabled.border};
      --switch-fg-color: ${b.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${b.input.default.readOnly.border};
      --switch-fg-color: ${b.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${b.input.default.readOnly.fg};
      --switch-fg-color: ${b.input.default.readOnly.bg};
    }
  `;
      }),
      qW = c$.span.withConfig({ displayName: "Track", componentId: "sc-dw1foe-3" })(function (a) {
        let { input: b } = W(a.theme);
        return cZ`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${nO(b.switch.width)};
    height: ${nO(b.switch.height)};
    border-radius: ${nO(b.switch.height / 2)};
  `;
      }),
      qX = c$.span.withConfig({ displayName: "Thumb", componentId: "sc-dw1foe-4" })(function (a) {
        let { $indeterminate: b } = a,
          { input: c } = W(a.theme),
          d = c.switch.width,
          e = c.switch.height,
          f = c.switch.padding,
          g = e - 2 * c.switch.padding,
          h = d - 2 * f - g,
          i = d / 2 - g / 2 - f,
          j = !0 !== b && !0 === a.$checked;
        return cZ`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${nO(f)};
    top: ${nO(f)};
    height: ${nO(g)};
    width: ${nO(g)};
    border-radius: ${nO(g / 2)};
    transition-property: transform;
    transition-duration: ${c.switch.transitionDurationMs}ms;
    transition-timing-function: ${c.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${
      j &&
      cZ`
      transform: translate3d(${h}px, 0, 0);
    `
    }

    ${
      b &&
      cZ`
      transform: translate3d(${i}px, 0, 0);
    `
    }
  `;
      }),
      qY = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = (0, a2.c)(26);
        q[0] !== a
          ? (({ checked: c, className: d, disabled: e, indeterminate: f, readOnly: g, style: i, ...h } = a),
            (q[0] = a),
            (q[1] = c),
            (q[2] = d),
            (q[3] = e),
            (q[4] = f),
            (q[5] = g),
            (q[6] = h),
            (q[7] = i))
          : ((c = q[1]), (d = q[2]), (e = q[3]), (f = q[4]), (g = q[5]), (h = q[6]), (i = q[7]));
        let r = (0, a3.useRef)(null);
        (q[8] === Symbol.for("react.memo_cache_sentinel") ? ((j = () => r.current), (q[8] = j)) : (j = q[8]),
          (0, a3.useImperativeHandle)(b, j),
          q[9] !== f
            ? ((k = () => {
                r.current && (r.current.indeterminate = f || !1);
              }),
              (l = [f]),
              (q[9] = f),
              (q[10] = k),
              (q[11] = l))
            : ((k = q[10]), (l = q[11])),
          (0, a3.useEffect)(k, l));
        let s = !e && g ? "" : void 0,
          t = !0 !== f && c,
          u = e || g;
        return (
          q[12] !== h || q[13] !== s || q[14] !== t || q[15] !== u
            ? ((m = (0, a1.jsx)(qU, { "data-read-only": s, ...h, checked: t, disabled: u, type: "checkbox", ref: r })),
              (q[12] = h),
              (q[13] = s),
              (q[14] = t),
              (q[15] = u),
              (q[16] = m))
            : (m = q[16]),
          q[17] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, a1.jsx)(qW, {})), (q[17] = n)) : (n = q[17]),
          q[18] !== c || q[19] !== f
            ? ((o = (0, a1.jsxs)(qV, {
                "aria-hidden": !0,
                "data-name": "representation",
                children: [n, (0, a1.jsx)(qX, { $checked: c, $indeterminate: f })],
              })),
              (q[18] = c),
              (q[19] = f),
              (q[20] = o))
            : (o = q[20]),
          q[21] !== d || q[22] !== i || q[23] !== m || q[24] !== o
            ? ((p = (0, a1.jsxs)(qT, { className: d, "data-ui": "Switch", style: i, children: [m, o] })),
              (q[21] = d),
              (q[22] = i),
              (q[23] = m),
              (q[24] = o),
              (q[25] = p))
            : (p = q[25]),
          p
        );
      });
    qY.displayName = "ForwardRef(Switch)";
    let qZ = c$.span.withConfig({ displayName: "StyledTextArea", componentId: "sc-1d6h1o8-0" })(oN),
      q$ = c$.span.withConfig({
        displayName: "InputRoot",
        componentId: "sc-1d6h1o8-1",
      })`flex:1;min-width:0;display:block;position:relative;`,
      q_ = c$.textarea.withConfig({ displayName: "Input", componentId: "sc-1d6h1o8-2" })(oK, oO, oP),
      q0 = c$.div.withConfig({ displayName: "Presentation", componentId: "sc-1d6h1o8-3" })(oS, oQ),
      q1 = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t = (0, a2.c)(35);
        t[0] !== a
          ? (({
              border: f,
              customValidity: d,
              disabled: g,
              fontSize: h,
              padding: i,
              radius: j,
              weight: k,
              __unstable_disableFocusRing: c,
              ...e
            } = a),
            (t[0] = a),
            (t[1] = c),
            (t[2] = d),
            (t[3] = e),
            (t[4] = f),
            (t[5] = g),
            (t[6] = h),
            (t[7] = i),
            (t[8] = j),
            (t[9] = k))
          : ((c = t[1]),
            (d = t[2]),
            (e = t[3]),
            (f = t[4]),
            (g = t[5]),
            (h = t[6]),
            (i = t[7]),
            (j = t[8]),
            (k = t[9]));
        let u = void 0 === f || f,
          v = void 0 !== g && g,
          w = void 0 === h ? 2 : h,
          x = void 0 === i ? 3 : i,
          y = void 0 === j ? 2 : j,
          z = (0, a3.useRef)(null),
          A = n0();
        (t[10] === Symbol.for("react.memo_cache_sentinel") ? ((l = () => z.current), (t[10] = l)) : (l = t[10]),
          (0, a3.useImperativeHandle)(b, l),
          pu(z, d));
        let B = A.scheme,
          C = A.tone;
        (t[11] !== w ? ((m = nQ(w)), (t[11] = w), (t[12] = m)) : (m = t[12]),
          t[13] !== x ? ((n = nQ(x)), (t[13] = x), (t[14] = n)) : (n = t[14]));
        let D = A.scheme;
        (t[15] === Symbol.for("react.memo_cache_sentinel") ? ((o = nQ(0)), (t[15] = o)) : (o = t[15]),
          t[16] !== v ||
          t[17] !== e ||
          t[18] !== A.scheme ||
          t[19] !== A.tone ||
          t[20] !== m ||
          t[21] !== n ||
          t[22] !== k
            ? ((p = (0, a1.jsx)(q_, {
                "data-as": "textarea",
                "data-scheme": B,
                "data-tone": C,
                ...e,
                $fontSize: m,
                $padding: n,
                $scheme: D,
                $space: o,
                $tone: A.tone,
                $weight: k,
                disabled: v,
                ref: z,
              })),
              (t[16] = v),
              (t[17] = e),
              (t[18] = A.scheme),
              (t[19] = A.tone),
              (t[20] = m),
              (t[21] = n),
              (t[22] = k),
              (t[23] = p))
            : (p = t[23]),
          t[24] !== y ? ((q = nQ(y)), (t[24] = y), (t[25] = q)) : (q = t[25]));
        let E = u ? "" : void 0;
        return (
          t[26] !== c || t[27] !== A.scheme || t[28] !== A.tone || t[29] !== q || t[30] !== E
            ? ((r = (0, a1.jsx)(q0, {
                $radius: q,
                $unstableDisableFocusRing: c,
                $scheme: A.scheme,
                $tone: A.tone,
                "data-border": E,
                "data-scheme": A.scheme,
                "data-tone": A.tone,
              })),
              (t[26] = c),
              (t[27] = A.scheme),
              (t[28] = A.tone),
              (t[29] = q),
              (t[30] = E),
              (t[31] = r))
            : (r = t[31]),
          t[32] !== p || t[33] !== r
            ? ((s = (0, a1.jsx)(qZ, { "data-ui": "TextArea", children: (0, a1.jsxs)(q$, { children: [p, r] }) })),
              (t[32] = p),
              (t[33] = r),
              (t[34] = s))
            : (s = t[34]),
          s
        );
      });
    q1.displayName = "ForwardRef(TextArea)";
    let q2 = { zIndex: 2 },
      q3 = c$(pr)
        .attrs({ forwardedAs: "span" })
        .withConfig({ displayName: "StyledTextInput", componentId: "sc-h62wco-0" })(oN),
      q4 = c$.span.withConfig({
        displayName: "InputRoot",
        componentId: "sc-h62wco-1",
      })`flex:1;min-width:0;display:block;position:relative;`,
      q5 = c$(pr)
        .attrs({ forwardedAs: "span" })
        .withConfig({
          displayName: "Prefix",
          componentId: "sc-h62wco-2",
        })`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,
      q6 = c$(pr)
        .attrs({ forwardedAs: "span" })
        .withConfig({
          displayName: "Suffix",
          componentId: "sc-h62wco-3",
        })`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,
      q7 = c$.input.withConfig({ displayName: "Input", componentId: "sc-h62wco-4" })(oK, oO, oP),
      q8 = c$.span.withConfig({ displayName: "Presentation", componentId: "sc-h62wco-5" })(oS, oQ),
      q9 = c$(pb).withConfig({ displayName: "LeftBox", componentId: "sc-h62wco-6" })`position:absolute;top:0;left:0;`,
      ra = c$(pb).withConfig({ displayName: "RightBox", componentId: "sc-h62wco-7" })`position:absolute;top:0;right:0;`,
      rb = c$(pr).withConfig({
        displayName: "RightCard",
        componentId: "sc-h62wco-8",
      })`background-color:transparent;position:absolute;top:0;right:0;`,
      rc = c$(pp).withConfig({ displayName: "TextInputClearButton", componentId: "sc-h62wco-9" })({
        "&:not([hidden])": { display: "block" },
      }),
      rd = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L = (0, a2.c)(92);
        L[0] !== a
          ? (({
              __unstable_disableFocusRing: e,
              border: m,
              clearButton: f,
              disabled: n,
              fontSize: o,
              icon: c,
              iconRight: d,
              onClear: h,
              padding: p,
              prefix: i,
              radius: q,
              readOnly: j,
              space: r,
              suffix: l,
              customValidity: g,
              type: s,
              weight: t,
              ...k
            } = a),
            (L[0] = a),
            (L[1] = c),
            (L[2] = d),
            (L[3] = e),
            (L[4] = f),
            (L[5] = g),
            (L[6] = h),
            (L[7] = i),
            (L[8] = j),
            (L[9] = k),
            (L[10] = l),
            (L[11] = m),
            (L[12] = n),
            (L[13] = o),
            (L[14] = p),
            (L[15] = q),
            (L[16] = r),
            (L[17] = s),
            (L[18] = t))
          : ((c = L[1]),
            (d = L[2]),
            (e = L[3]),
            (f = L[4]),
            (g = L[5]),
            (h = L[6]),
            (i = L[7]),
            (j = L[8]),
            (k = L[9]),
            (l = L[10]),
            (m = L[11]),
            (n = L[12]),
            (o = L[13]),
            (p = L[14]),
            (q = L[15]),
            (r = L[16]),
            (s = L[17]),
            (t = L[18]));
        let M = void 0 === m || m,
          N = void 0 !== n && n,
          O = void 0 === o ? 2 : o,
          P = void 0 === p ? 3 : p,
          Q = void 0 === q ? 2 : q,
          R = void 0 === r ? 3 : r,
          S = void 0 === s ? "text" : s,
          T = (0, a3.useRef)(null),
          U = n0();
        L[19] !== O ? ((u = nQ(O)), (L[19] = O), (L[20] = u)) : (u = L[20]);
        let V = u;
        L[21] !== P ? ((v = nQ(P)), (L[21] = P), (L[22] = v)) : (v = L[22]);
        let W = v;
        L[23] !== Q ? ((w = nQ(Q)), (L[23] = Q), (L[24] = w)) : (w = L[24]);
        let X = w;
        L[25] !== R ? ((x = nQ(R)), (L[25] = R), (L[26] = x)) : (x = L[26]);
        let Y = x,
          Z = !!f,
          $ = !!c,
          _ = !!d,
          aa = !!l,
          ab = !!i;
        (L[27] === Symbol.for("react.memo_cache_sentinel") ? ((y = () => T.current), (L[27] = y)) : (y = L[27]),
          (0, a3.useImperativeHandle)(b, y),
          pu(T, g),
          L[28] !== h
            ? ((z = (a) => {
                (a.preventDefault(), a.stopPropagation(), h && h(), T.current?.focus());
              }),
              (L[28] = h),
              (L[29] = z))
            : (z = L[29]));
        let ac = z;
        L[30] !== i || L[31] !== X
          ? ((A =
              i &&
              (0, a1.jsx)(q5, {
                borderTop: !0,
                borderLeft: !0,
                borderBottom: !0,
                radius: X,
                sizing: "border",
                tone: "inherit",
                children: (0, a1.jsx)("span", { children: i }),
              })),
            (L[30] = i),
            (L[31] = X),
            (L[32] = A))
          : (A = L[32]);
        let ad = A,
          ae = M ? "" : void 0;
        (L[33] !== c || L[34] !== V || L[35] !== W
          ? ((B =
              c &&
              (0, a1.jsx)(q9, {
                padding: W,
                children: (0, a1.jsxs)(pd, {
                  size: V,
                  children: [(0, a3.isValidElement)(c) && c, (0, c4.isValidElementType)(c) && (0, a1.jsx)(c, {})],
                }),
              })),
            (L[33] = c),
            (L[34] = V),
            (L[35] = W),
            (L[36] = B))
          : (B = L[36]),
          L[37] !== Z || L[38] !== d || L[39] !== V || L[40] !== W
            ? ((C =
                !Z &&
                d &&
                (0, a1.jsx)(ra, {
                  padding: W,
                  children: (0, a1.jsxs)(pd, {
                    size: V,
                    children: [(0, a3.isValidElement)(d) && d, (0, c4.isValidElementType)(d) && (0, a1.jsx)(d, {})],
                  }),
                })),
              (L[37] = Z),
              (L[38] = d),
              (L[39] = V),
              (L[40] = W),
              (L[41] = C))
            : (C = L[41]),
          L[42] !== ab ||
          L[43] !== aa ||
          L[44] !== e ||
          L[45] !== X ||
          L[46] !== U.scheme ||
          L[47] !== U.tone ||
          L[48] !== ae ||
          L[49] !== B ||
          L[50] !== C
            ? ((D = (0, a1.jsxs)(q8, {
                $hasPrefix: ab,
                $unstableDisableFocusRing: e,
                $hasSuffix: aa,
                $radius: X,
                $scheme: U.scheme,
                $tone: U.tone,
                "data-border": ae,
                "data-scheme": U.scheme,
                "data-tone": U.tone,
                children: [B, C],
              })),
              (L[42] = ab),
              (L[43] = aa),
              (L[44] = e),
              (L[45] = X),
              (L[46] = U.scheme),
              (L[47] = U.tone),
              (L[48] = ae),
              (L[49] = B),
              (L[50] = C),
              (L[51] = D))
            : (D = L[51]));
        let af = D;
        L[52] !== W ? ((E = W.map(rf)), (L[52] = W), (L[53] = E)) : (E = L[53]);
        let ag = E;
        L[54] !== W ? ((F = W.map(rg)), (L[54] = W), (L[55] = F)) : (F = L[55]);
        let ah = F,
          ai = "object" == typeof f ? f : nA;
        L[56] !== f ||
        L[57] !== ag ||
        L[58] !== ah ||
        L[59] !== ai ||
        L[60] !== g ||
        L[61] !== N ||
        L[62] !== V ||
        L[63] !== ac ||
        L[64] !== X ||
        L[65] !== j
          ? ((G =
              !N &&
              !j &&
              f &&
              (0, a1.jsx)(rb, {
                forwardedAs: "span",
                padding: ag,
                style: q2,
                tone: g ? "critical" : "inherit",
                children: (0, a1.jsx)(rc, {
                  "aria-label": "Clear",
                  "data-qa": "clear-button",
                  fontSize: V,
                  icon: dQ,
                  mode: "bleed",
                  padding: ah,
                  radius: X,
                  ...ai,
                  onClick: ac,
                  onMouseDown: re,
                }),
              })),
            (L[56] = f),
            (L[57] = ag),
            (L[58] = ah),
            (L[59] = ai),
            (L[60] = g),
            (L[61] = N),
            (L[62] = V),
            (L[63] = ac),
            (L[64] = X),
            (L[65] = j),
            (L[66] = G))
          : (G = L[66]);
        let aj = G;
        L[67] !== X || L[68] !== l
          ? ((H =
              l &&
              (0, a1.jsx)(q6, {
                borderTop: !0,
                borderRight: !0,
                borderBottom: !0,
                radius: X,
                sizing: "border",
                tone: "inherit",
                children: (0, a1.jsx)("span", { children: l }),
              })),
            (L[67] = X),
            (L[68] = l),
            (L[69] = H))
          : (H = L[69]);
        let ak = H,
          al = _ || Z;
        return (
          L[70] !== $ ||
          L[71] !== N ||
          L[72] !== V ||
          L[73] !== W ||
          L[74] !== j ||
          L[75] !== k ||
          L[76] !== U.scheme ||
          L[77] !== U.tone ||
          L[78] !== Y ||
          L[79] !== al ||
          L[80] !== S ||
          L[81] !== t
            ? ((I = (0, a1.jsx)(q7, {
                "data-as": "input",
                "data-scheme": U.scheme,
                "data-tone": U.tone,
                ...k,
                $fontSize: V,
                $iconLeft: $,
                $iconRight: al,
                $padding: W,
                $scheme: U.scheme,
                $space: Y,
                $tone: U.tone,
                $weight: t,
                disabled: N,
                readOnly: j,
                ref: T,
                type: S,
              })),
              (L[70] = $),
              (L[71] = N),
              (L[72] = V),
              (L[73] = W),
              (L[74] = j),
              (L[75] = k),
              (L[76] = U.scheme),
              (L[77] = U.tone),
              (L[78] = Y),
              (L[79] = al),
              (L[80] = S),
              (L[81] = t),
              (L[82] = I))
            : (I = L[82]),
          L[83] !== aj || L[84] !== af || L[85] !== I
            ? ((J = (0, a1.jsxs)(q4, { children: [I, af, aj] })), (L[83] = aj), (L[84] = af), (L[85] = I), (L[86] = J))
            : (J = L[86]),
          L[87] !== ad || L[88] !== U.tone || L[89] !== ak || L[90] !== J
            ? ((K = (0, a1.jsxs)(q3, { "data-ui": "TextInput", tone: U.tone, children: [ad, J, ak] })),
              (L[87] = ad),
              (L[88] = U.tone),
              (L[89] = ak),
              (L[90] = J),
              (L[91] = K))
            : (K = L[91]),
          K
        );
      });
    function re(a) {
      (a.preventDefault(), a.stopPropagation());
    }
    function rf(a) {
      return 0 === a ? 0 : 1 === a || 2 === a ? 1 : a - 2;
    }
    function rg(a) {
      return 0 === a || 1 === a ? 0 : 2 === a ? 1 : a - 1;
    }
    function rh(a) {
      let b,
        c,
        d = (0, a2.c)(3),
        [e, f] = (0, a3.useState)(a),
        g = (0, a3.useRef)(void 0);
      d[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (a, b) => {
            let c = () => {
              f(a);
            };
            if ((g.current && (clearTimeout(g.current), (g.current = void 0)), !b)) return c();
            g.current = setTimeout(c, b);
          }),
          (d[0] = b))
        : (b = d[0]);
      let h = b;
      return (d[1] !== e ? ((c = [e, h]), (d[1] = e), (d[2] = c)) : (c = d[2]), c);
    }
    rd.displayName = "ForwardRef(TextInput)";
    let ri = {
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
      rj = c$(mG.create(pr)).withConfig({
        displayName: "MotionCard",
        componentId: "sc-1xn138w-0",
      })`will-change:transform;`,
      rk = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y = (0, a2.c)(48);
        y[0] !== a
          ? (({
              animate: c,
              arrow: d,
              arrowRef: e,
              arrowX: f,
              arrowY: g,
              children: h,
              originX: i,
              originY: j,
              padding: k,
              placement: l,
              radius: m,
              scheme: o,
              shadow: p,
              style: q,
              ...n
            } = a),
            (y[0] = a),
            (y[1] = c),
            (y[2] = d),
            (y[3] = e),
            (y[4] = f),
            (y[5] = g),
            (y[6] = h),
            (y[7] = i),
            (y[8] = j),
            (y[9] = k),
            (y[10] = l),
            (y[11] = m),
            (y[12] = n),
            (y[13] = o),
            (y[14] = p),
            (y[15] = q))
          : ((c = y[1]),
            (d = y[2]),
            (e = y[3]),
            (f = y[4]),
            (g = y[5]),
            (h = y[6]),
            (i = y[7]),
            (j = y[8]),
            (k = y[9]),
            (l = y[10]),
            (m = y[11]),
            (n = y[12]),
            (o = y[13]),
            (p = y[14]),
            (q = y[15]));
        let z = c ? "transform" : void 0;
        y[16] !== i || y[17] !== j || y[18] !== q || y[19] !== z
          ? ((r = { originX: i, originY: j, willChange: z, ...q }),
            (y[16] = i),
            (y[17] = j),
            (y[18] = q),
            (y[19] = z),
            (y[20] = r))
          : (r = y[20]);
        let A = r,
          B = null !== f ? f : void 0,
          C = null !== g ? g : void 0;
        y[21] !== B || y[22] !== C
          ? ((s = { left: B, top: C, right: void 0, bottom: void 0 }), (y[21] = B), (y[22] = C), (y[23] = s))
          : (s = y[23]);
        let D = s,
          E = n;
        return (
          y[24] !== c ? ((t = c ? ["hidden", "initial"] : void 0), (y[24] = c), (y[25] = t)) : (t = y[25]),
          y[26] !== c ? ((u = c ? ["visible", "scaleIn"] : void 0), (y[26] = c), (y[27] = u)) : (u = y[27]),
          y[28] !== c ? ((v = c ? ["hidden", "scaleOut"] : void 0), (y[28] = c), (y[29] = v)) : (v = y[29]),
          y[30] !== d || y[31] !== e || y[32] !== D
            ? ((w = d && (0, a1.jsx)(p3, { ref: e, style: D, width: 15, height: 6, radius: 2 })),
              (y[30] = d),
              (y[31] = e),
              (y[32] = D),
              (y[33] = w))
            : (w = y[33]),
          y[34] !== h ||
          y[35] !== k ||
          y[36] !== l ||
          y[37] !== m ||
          y[38] !== b ||
          y[39] !== A ||
          y[40] !== o ||
          y[41] !== p ||
          y[42] !== E ||
          y[43] !== t ||
          y[44] !== u ||
          y[45] !== v ||
          y[46] !== w
            ? ((x = (0, a1.jsxs)(rj, {
                "data-ui": "Tooltip__card",
                ...E,
                "data-placement": l,
                padding: k,
                radius: m,
                ref: b,
                scheme: o,
                shadow: p,
                style: A,
                variants: nB,
                transition: nD,
                initial: t,
                animate: u,
                exit: v,
                children: [h, w],
              })),
              (y[34] = h),
              (y[35] = k),
              (y[36] = l),
              (y[37] = m),
              (y[38] = b),
              (y[39] = A),
              (y[40] = o),
              (y[41] = p),
              (y[42] = E),
              (y[43] = t),
              (y[44] = u),
              (y[45] = v),
              (y[46] = w),
              (y[47] = x))
            : (x = y[47]),
          x
        );
      });
    rk.displayName = "ForwardRef(TooltipCard)";
    let rl = nZ("@sanity/ui/context/tooltipDelayGroup", null);
    function rm(a) {
      let b,
        c,
        d = (0, a2.c)(9),
        { children: e, delay: f } = a,
        [g, h] = rh(!1),
        [i, j] = rh(null),
        k = "number" == typeof f ? f : f?.open || 0,
        l = "number" == typeof f ? f : f?.close || 0,
        m = g ? 1 : k;
      d[0] !== l || d[1] !== i || d[2] !== h || d[3] !== j || d[4] !== m
        ? ((b = { setIsGroupActive: h, openTooltipId: i, setOpenTooltipId: j, openDelay: m, closeDelay: l }),
          (d[0] = l),
          (d[1] = i),
          (d[2] = h),
          (d[3] = j),
          (d[4] = m),
          (d[5] = b))
        : (b = d[5]);
      let n = b;
      return (
        d[6] !== e || d[7] !== n
          ? ((c = (0, a1.jsx)(rl.Provider, { value: n, children: e })), (d[6] = e), (d[7] = n), (d[8] = c))
          : (c = d[8]),
        c
      );
    }
    function rn() {
      return (0, a3.useContext)(rl);
    }
    rm.displayName = "TooltipDelayGroupProvider";
    let ro = c$(qj).withConfig({ displayName: "StyledTooltip", componentId: "sc-13f2zvh-0" })`pointer-events:none;`,
      rp = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M,
          N,
          O,
          P,
          Q,
          R,
          S,
          T,
          U,
          V,
          W,
          X,
          Y,
          Z,
          $ = (0, a2.c)(137),
          _ = p8(),
          { layer: aa } = n3();
        $[0] !== a
          ? (({
              animate: m,
              arrow: n,
              boundaryElement: c,
              children: f,
              content: g,
              disabled: i,
              fallbackPlacements: d,
              padding: o,
              placement: p,
              portal: j,
              radius: q,
              scheme: l,
              shadow: r,
              zOffset: e,
              delay: h,
              ...k
            } = a),
            ($[0] = a),
            ($[1] = c),
            ($[2] = d),
            ($[3] = e),
            ($[4] = f),
            ($[5] = g),
            ($[6] = h),
            ($[7] = i),
            ($[8] = j),
            ($[9] = k),
            ($[10] = l),
            ($[11] = m),
            ($[12] = n),
            ($[13] = o),
            ($[14] = p),
            ($[15] = q),
            ($[16] = r))
          : ((c = $[1]),
            (d = $[2]),
            (e = $[3]),
            (f = $[4]),
            (g = $[5]),
            (h = $[6]),
            (i = $[7]),
            (j = $[8]),
            (k = $[9]),
            (l = $[10]),
            (m = $[11]),
            (n = $[12]),
            (o = $[13]),
            (p = $[14]),
            (q = $[15]),
            (r = $[16]));
        let ab = void 0 !== m && m,
          ac = void 0 !== n && n,
          ad = void 0 === o ? 2 : o,
          ae = void 0 === p ? "bottom" : p,
          af = void 0 === q ? 2 : q,
          ag = void 0 === r ? 2 : r,
          ah = c ?? _?.element,
          ai = d ?? ri[a.placement ?? "bottom"],
          aj = e ?? aa.tooltip.zOffset,
          ak = !pD() && ab;
        $[17] !== ai ? ((s = nQ(ai)), ($[17] = ai), ($[18] = s)) : (s = $[18]);
        let al = s,
          am = (0, a3.useRef)(null),
          [an, ao] = (0, a3.useState)(null),
          ap = (0, a3.useRef)(null),
          [aq, ar] = (0, a3.useState)(0);
        ($[19] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => am.current), ($[19] = t)) : (t = $[19]),
          (0, a3.useImperativeHandle)(b, t));
        let as = qn(),
          at = "string" == typeof j ? as.elements?.[j] || null : as.element;
        $[20] !== ak || $[21] !== ac || $[22] !== ah || $[23] !== al
          ? ((u = {
              animate: ak,
              arrowProp: ac,
              arrowRef: ap,
              boundaryElement: ah,
              fallbackPlacements: al,
              rootBoundary: "viewport",
            }),
            ($[20] = ak),
            ($[21] = ac),
            ($[22] = ah),
            ($[23] = al),
            ($[24] = u))
          : (u = $[24]);
        let au = (function (a) {
          let b,
            c = (0, a2.c)(17),
            { animate: d, arrowProp: e, arrowRef: f, boundaryElement: g, fallbackPlacements: h, rootBoundary: i } = a;
          if (c[0] !== d || c[1] !== e || c[2] !== f || c[3] !== g || c[4] !== h || c[5] !== i) {
            let a, j, k;
            b = [];
            let l = g || void 0;
            (c[7] !== h || c[8] !== i || c[9] !== l
              ? ((a = (0, gP.flip)({ boundary: l, fallbackPlacements: h, padding: 4, rootBoundary: i })),
                (c[7] = h),
                (c[8] = i),
                (c[9] = l),
                (c[10] = a))
              : (a = c[10]),
              b.push(a),
              c[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((j = (0, gP.offset)({ mainAxis: 4 })), (c[11] = j))
                : (j = c[11]),
              b.push(j));
            let m = g || void 0;
            if (
              (c[12] !== i || c[13] !== m
                ? ((k = (0, gP.shift)({ boundary: m, rootBoundary: i, padding: 4 })),
                  (c[12] = i),
                  (c[13] = m),
                  (c[14] = k))
                : (k = c[14]),
              b.push(k),
              e)
            ) {
              let a;
              (c[15] !== f ? ((a = (0, gP.arrow)({ element: f, padding: 4 })), (c[15] = f), (c[16] = a)) : (a = c[16]),
                b.push(a));
            }
            (d && b.push(pY), (c[0] = d), (c[1] = e), (c[2] = f), (c[3] = g), (c[4] = h), (c[5] = i), (c[6] = b));
          } else b = c[6];
          return b;
        })(u);
        ($[25] !== an ? ((v = { reference: an }), ($[25] = an), ($[26] = v)) : (v = $[26]),
          $[27] !== au || $[28] !== ae || $[29] !== v
            ? ((w = { middleware: au, placement: ae, whileElementsMounted: gO.autoUpdate, elements: v }),
              ($[27] = au),
              ($[28] = ae),
              ($[29] = v),
              ($[30] = w))
            : (w = $[30]));
        let { floatingStyles: av, placement: aw, middlewareData: ax, refs: ay, update: az } = (0, gP.useFloating)(w),
          aA = ax.arrow?.x,
          aB = ax.arrow?.y,
          aC = ax["@sanity/ui/origin"]?.originX,
          aD = ax["@sanity/ui/origin"]?.originY,
          aE = (0, a3.useId)(),
          [aF, aG] = rh(!1),
          aH = rn();
        $[31] !== aH ? ((x = aH || {}), ($[31] = aH), ($[32] = x)) : (x = $[32]);
        let { setIsGroupActive: aI, setOpenTooltipId: aJ } = x,
          aK = aF || aH?.openTooltipId === aE,
          aL = null !== aH,
          aM = "number" == typeof h ? h : h?.open || 0,
          aN = "number" == typeof h ? h : h?.close || 0,
          aO = aL ? aH.openDelay : aM,
          aP = aL ? aH.closeDelay : aN;
        $[33] !== aP || $[34] !== aL || $[35] !== aO || $[36] !== aI || $[37] !== aG || $[38] !== aJ || $[39] !== aE
          ? ((y = (a, b) => {
              if (aL)
                if (a) {
                  let c = b ? 0 : aO;
                  (aI?.(a, c), aJ?.(aE, c));
                } else {
                  let c = aP > 200 ? aP : 200;
                  (aI?.(a, c), aJ?.(null, b ? 0 : aP));
                }
              else aG(a, b ? 0 : a ? aO : aP);
            }),
            ($[33] = aP),
            ($[34] = aL),
            ($[35] = aO),
            ($[36] = aI),
            ($[37] = aG),
            ($[38] = aJ),
            ($[39] = aE),
            ($[40] = y))
          : (y = $[40]);
        let aQ = y;
        $[41] !== f?.props || $[42] !== aQ
          ? ((z = (a) => {
              (aQ(!1), f?.props?.onBlur?.(a));
            }),
            ($[41] = f?.props),
            ($[42] = aQ),
            ($[43] = z))
          : (z = $[43]);
        let aR = z;
        $[44] !== f?.props || $[45] !== aQ
          ? ((A = (a) => {
              (aQ(!1, !0), f?.props.onClick?.(a));
            }),
            ($[44] = f?.props),
            ($[45] = aQ),
            ($[46] = A))
          : (A = $[46]);
        let aS = A;
        $[47] !== f?.props || $[48] !== aQ
          ? ((B = (a) => {
              (aQ(!1, !0), f?.props.onContextMenu?.(a));
            }),
            ($[47] = f?.props),
            ($[48] = aQ),
            ($[49] = B))
          : (B = $[49]);
        let aT = B;
        $[50] !== f?.props || $[51] !== aQ
          ? ((C = (a) => {
              (aQ(!0), f?.props?.onFocus?.(a));
            }),
            ($[50] = f?.props),
            ($[51] = aQ),
            ($[52] = C))
          : (C = $[52]);
        let aU = C;
        $[53] !== f?.props || $[54] !== aQ
          ? ((D = (a) => {
              (aQ(!0), f?.props?.onMouseEnter?.(a));
            }),
            ($[53] = f?.props),
            ($[54] = aQ),
            ($[55] = D))
          : (D = $[55]);
        let aV = D;
        $[56] !== f?.props || $[57] !== aQ
          ? ((E = (a) => {
              (aQ(!1), f?.props?.onMouseLeave?.(a));
            }),
            ($[56] = f?.props),
            ($[57] = aQ),
            ($[58] = E))
          : (E = $[58]);
        let aW = E;
        ($[59] !== aQ || $[60] !== aL || $[61] !== an || $[62] !== aK
          ? ((F = { handleIsOpenChange: aQ, referenceElement: an, showTooltip: aK, isInsideGroup: aL }),
            ($[59] = aQ),
            ($[60] = aL),
            ($[61] = an),
            ($[62] = aK),
            ($[63] = F))
          : (F = $[63]),
          (function (a) {
            let b,
              c,
              d,
              e = (0, a2.c)(10),
              { handleIsOpenChange: f, referenceElement: g, showTooltip: h, isInsideGroup: i } = a;
            e[0] !== f || e[1] !== g
              ? ((b = (a, b) => {
                  g && (g === a || (a instanceof Node && g.contains(a)) || (f(!1), b()));
                }),
                (e[0] = f),
                (e[1] = g),
                (e[2] = b))
              : (b = e[2]);
            let j = nx(b);
            (e[3] !== i || e[4] !== j || e[5] !== h
              ? ((c = () => {
                  if (!h || i) return;
                  let a = (b) => {
                    j(b.target, () => window.removeEventListener("mousemove", a));
                  };
                  return (window.addEventListener("mousemove", a), () => window.removeEventListener("mousemove", a));
                }),
                (e[3] = i),
                (e[4] = j),
                (e[5] = h),
                (e[6] = c))
              : (c = e[6]),
              e[7] !== i || e[8] !== h ? ((d = [i, h]), (e[7] = i), (e[8] = h), (e[9] = d)) : (d = e[9]),
              (0, a3.useEffect)(c, d));
          })(F),
          $[64] !== i || $[65] !== aQ || $[66] !== aK
            ? ((G = () => {
                i && aK && aQ(!1);
              }),
              (H = [i, aQ, aK]),
              ($[64] = i),
              ($[65] = aQ),
              ($[66] = aK),
              ($[67] = G),
              ($[68] = H))
            : ((G = $[67]), (H = $[68])),
          (0, a3.useEffect)(G, H),
          $[69] !== g || $[70] !== aQ || $[71] !== aK
            ? ((I = () => {
                !g && aK && aQ(!1);
              }),
              (J = [g, aQ, aK]),
              ($[69] = g),
              ($[70] = aQ),
              ($[71] = aK),
              ($[72] = I),
              ($[73] = J))
            : ((I = $[72]), (J = $[73])),
          (0, a3.useEffect)(I, J),
          $[74] !== aQ || $[75] !== aK
            ? ((K = () => {
                if (!aK) return;
                let a = function (a) {
                  "Escape" === a.key && aQ(!1, !0);
                };
                return (
                  window.addEventListener("keydown", a),
                  () => {
                    window.removeEventListener("keydown", a);
                  }
                );
              }),
              (L = [aQ, aK]),
              ($[74] = aQ),
              ($[75] = aK),
              ($[76] = K),
              ($[77] = L))
            : ((K = $[76]), (L = $[77])),
          (0, a3.useEffect)(K, L),
          $[78] !== ah || $[79] !== at?.offsetWidth
            ? ((M = () => {
                ar(Math.min(...(ah ? [ah.offsetWidth] : []), at?.offsetWidth || document.body.offsetWidth) - 8);
              }),
              ($[78] = ah),
              ($[79] = at?.offsetWidth),
              ($[80] = M))
            : (M = $[80]),
          $[81] !== ah || $[82] !== at ? ((N = [ah, at]), ($[81] = ah), ($[82] = at), ($[83] = N)) : (N = $[83]),
          (0, a3.useLayoutEffect)(M, N),
          $[84] !== az
            ? ((O = (a) => {
                ((ap.current = a), az());
              }),
              ($[84] = az),
              ($[85] = O))
            : (O = $[85]));
        let aX = O;
        $[86] !== ay
          ? ((P = (a) => {
              ((am.current = a), ay.setFloating(a));
            }),
            ($[86] = ay),
            ($[87] = P))
          : (P = $[87]);
        let aY = P;
        a: {
          let a;
          if (!f) {
            Q = null;
            break a;
          }
          ($[88] !== f || $[89] !== aR || $[90] !== aS || $[91] !== aT || $[92] !== aU || $[93] !== aV || $[94] !== aW
            ? ((a = (0, a3.cloneElement)(f, {
                onBlur: aR,
                onFocus: aU,
                onMouseEnter: aV,
                onMouseLeave: aW,
                onClick: aS,
                onContextMenu: aT,
                ref: ao,
              })),
              ($[88] = f),
              ($[89] = aR),
              ($[90] = aS),
              ($[91] = aT),
              ($[92] = aU),
              ($[93] = aV),
              ($[94] = aW),
              ($[95] = a))
            : (a = $[95]),
            (Q = a));
        }
        let aZ = Q;
        if (
          ($[96] !== f ? ((R = f ? qy(f) : null), ($[96] = f), ($[97] = R)) : (R = $[97]),
          $[98] !== an
            ? ((S = () => an), (T = [an]), ($[98] = an), ($[99] = S), ($[100] = T))
            : ((S = $[99]), (T = $[100])),
          (0, a3.useImperativeHandle)(R, S, T),
          !aZ)
        ) {
          let a;
          return (
            $[101] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, a1.jsx)(a1.Fragment, {})), ($[101] = a))
              : (a = $[101]),
            a
          );
        }
        if (i) return aZ;
        let a$ = aq > 0 ? `${aq}px` : void 0;
        ($[102] !== av || $[103] !== a$
          ? ((U = { ...av, maxWidth: a$ }), ($[102] = av), ($[103] = a$), ($[104] = U))
          : (U = $[104]),
          $[105] !== ak ||
          $[106] !== ac ||
          $[107] !== aA ||
          $[108] !== aB ||
          $[109] !== g ||
          $[110] !== aC ||
          $[111] !== aD ||
          $[112] !== ad ||
          $[113] !== aw ||
          $[114] !== af ||
          $[115] !== k ||
          $[116] !== l ||
          $[117] !== aX ||
          $[118] !== aY ||
          $[119] !== ag
            ? ((V = (0, a1.jsx)(rk, {
                ...k,
                animate: ak,
                arrow: ac,
                arrowRef: aX,
                arrowX: aA,
                arrowY: aB,
                originX: aC,
                originY: aD,
                padding: ad,
                placement: aw,
                radius: af,
                ref: aY,
                scheme: l,
                shadow: ag,
                children: g,
              })),
              ($[105] = ak),
              ($[106] = ac),
              ($[107] = aA),
              ($[108] = aB),
              ($[109] = g),
              ($[110] = aC),
              ($[111] = aD),
              ($[112] = ad),
              ($[113] = aw),
              ($[114] = af),
              ($[115] = k),
              ($[116] = l),
              ($[117] = aX),
              ($[118] = aY),
              ($[119] = ag),
              ($[120] = V))
            : (V = $[120]),
          $[121] !== k || $[122] !== aY || $[123] !== U || $[124] !== V || $[125] !== aj
            ? ((W = (0, a1.jsx)(ro, { "data-ui": "Tooltip", ...k, ref: aY, style: U, zOffset: aj, children: V })),
              ($[121] = k),
              ($[122] = aY),
              ($[123] = U),
              ($[124] = V),
              ($[125] = aj),
              ($[126] = W))
            : (W = $[126]));
        let a_ = W;
        $[127] !== j || $[128] !== aK || $[129] !== a_
          ? ((X =
              aK && (j ? (0, a1.jsx)(qo, { __unstable_name: "string" == typeof j ? j : void 0, children: a_ }) : a_)),
            ($[127] = j),
            ($[128] = aK),
            ($[129] = a_),
            ($[130] = X))
          : (X = $[130]);
        let a0 = X;
        return (
          $[131] !== ak || $[132] !== a0
            ? ((Y = ak ? (0, a1.jsx)(mP, { children: a0 }) : a0), ($[131] = ak), ($[132] = a0), ($[133] = Y))
            : (Y = $[133]),
          $[134] !== aZ || $[135] !== Y
            ? ((Z = (0, a1.jsxs)(a1.Fragment, { children: [Y, aZ] })), ($[134] = aZ), ($[135] = Y), ($[136] = Z))
            : (Z = $[136]),
          Z
        );
      });
    rp.displayName = "ForwardRef(Tooltip)";
    let rq = c$.kbd.withConfig({
        displayName: "StyledHotkeys",
        componentId: "sc-b37mge-0",
      })`font:inherit;padding:1px;&:not([hidden]){display:block;}`,
      rr = c$(pX).withConfig({ displayName: "Key", componentId: "sc-b37mge-1" })`&:not([hidden]){display:block;}`,
      rs = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = (0, a2.c)(26);
        m[0] !== a
          ? (({ fontSize: c, keys: d, padding: e, radius: f, space: h, ...g } = a),
            (m[0] = a),
            (m[1] = c),
            (m[2] = d),
            (m[3] = e),
            (m[4] = f),
            (m[5] = g),
            (m[6] = h))
          : ((c = m[1]), (d = m[2]), (e = m[3]), (f = m[4]), (g = m[5]), (h = m[6]));
        let n = void 0 === h ? 0.5 : h;
        m[7] !== n ? ((i = nQ(n)), (m[7] = n), (m[8] = i)) : (i = m[8]);
        let o = i;
        if (!d || 0 === d.length) {
          let a;
          return (
            m[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, a1.jsx)(a1.Fragment, {})), (m[9] = a))
              : (a = m[9]),
            a
          );
        }
        if (m[10] !== c || m[11] !== d || m[12] !== e || m[13] !== f) {
          let a;
          (m[15] !== c || m[16] !== e || m[17] !== f
            ? ((a = (a, b) => (0, a1.jsx)(rr, { fontSize: c, padding: e, radius: f, children: a }, b)),
              (m[15] = c),
              (m[16] = e),
              (m[17] = f),
              (m[18] = a))
            : (a = m[18]),
            (j = d.map(a)),
            (m[10] = c),
            (m[11] = d),
            (m[12] = e),
            (m[13] = f),
            (m[14] = j));
        } else j = m[14];
        return (
          m[19] !== o || m[20] !== j
            ? ((k = (0, a1.jsx)(pU, { as: "span", space: o, children: j })), (m[19] = o), (m[20] = j), (m[21] = k))
            : (k = m[21]),
          m[22] !== b || m[23] !== g || m[24] !== k
            ? ((l = (0, a1.jsx)(rq, { "data-ui": "Hotkeys", ...g, ref: b, children: k })),
              (m[22] = b),
              (m[23] = g),
              (m[24] = k),
              (m[25] = l))
            : (l = m[25]),
          l
        );
      });
    rs.displayName = "ForwardRef(Hotkeys)";
    let rt = nZ("@sanity/ui/context/menu", null);
    function ru(a) {
      return (nG(a) && "true" !== a.getAttribute("data-disabled")) || (nI(a) && !a.disabled);
    }
    function rv(a) {
      return a.filter(ru);
    }
    let rw = [];
    function rx() {}
    let ry = c$(pb).withConfig({ displayName: "StyledMenu", componentId: "sc-xt0tnv-0" })`outline:none;overflow:auto;`,
      rz = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z = (0, a2.c)(49);
        if (z[0] !== a) {
          let {
            children: b,
            focusFirst: o,
            focusLast: p,
            onClickOutside: q,
            onEscape: r,
            onItemClick: s,
            onItemSelect: t,
            onKeyDown: u,
            originElement: v,
            padding: w,
            registerElement: x,
            shouldFocus: y,
            space: A,
            ...B
          } = a;
          ((d = b),
            (e = q),
            (f = r),
            (g = s),
            (h = t),
            (i = u),
            (j = v),
            (m = w),
            (k = x),
            (c = y),
            (n = A),
            (l = B),
            (z[0] = a),
            (z[1] = c),
            (z[2] = d),
            (z[3] = e),
            (z[4] = f),
            (z[5] = g),
            (z[6] = h),
            (z[7] = i),
            (z[8] = j),
            (z[9] = k),
            (z[10] = l),
            (z[11] = m),
            (z[12] = n));
        } else
          ((c = z[1]),
            (d = z[2]),
            (e = z[3]),
            (f = z[4]),
            (g = z[5]),
            (h = z[6]),
            (i = z[7]),
            (j = z[8]),
            (k = z[9]),
            (l = z[10]),
            (m = z[11]),
            (n = z[12]));
        let A = void 0 === m ? 1 : m,
          B = void 0 === n ? 1 : n,
          C = c ?? ((a.focusFirst && "first") || (a.focusLast && "last") || null),
          D = (0, a3.useRef)(null);
        (z[13] === Symbol.for("react.memo_cache_sentinel") ? ((o = () => D.current), (z[13] = o)) : (o = z[13]),
          (0, a3.useImperativeHandle)(b, o));
        let { isTopLayer: E } = qg();
        z[14] !== i || z[15] !== j || z[16] !== C
          ? ((p = { onKeyDown: i, originElement: j, shouldFocus: C, rootElementRef: D }),
            (z[14] = i),
            (z[15] = j),
            (z[16] = C),
            (z[17] = p))
          : (p = z[17]);
        let {
            activeElement: F,
            activeIndex: G,
            handleItemMouseEnter: H,
            handleItemMouseLeave: I,
            handleKeyDown: J,
            mount: K,
          } = (function (a) {
            let b,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k = (0, a2.c)(21),
              { onKeyDown: l, originElement: m, shouldFocus: n, rootElementRef: o } = a;
            k[0] === Symbol.for("react.memo_cache_sentinel") ? ((b = []), (k[0] = b)) : (b = k[0]);
            let p = (0, a3.useRef)(b),
              [q, r] = (0, a3.useState)(-1),
              s = (0, a3.useRef)(q),
              [t, u] = (0, a3.useState)(null);
            k[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (a) => {
                  (r(a), (s.current = a), u(p.current[a] || null));
                }),
                (k[1] = c))
              : (c = k[1]);
            let v = c;
            k[2] !== o
              ? ((d = (a, b) =>
                  a
                    ? (-1 === p.current.indexOf(a) &&
                        (p.current.push(a),
                        (function (a, b) {
                          if (!a) return;
                          let c = new WeakMap();
                          for (let d of b)
                            c.set(
                              d,
                              (function (a, b) {
                                let c = [],
                                  d = b;
                                for (; d !== a; ) {
                                  let b = d.parentElement;
                                  if (!b) break;
                                  let e = Array.from(b.childNodes).indexOf(d);
                                  if ((c.unshift(e), b === a)) break;
                                  d = b;
                                }
                                return c;
                              })(a, d),
                            );
                          b.sort((a, b) => {
                            let d = c.get(a) || rw,
                              e = c.get(b) || rw,
                              f = Math.max(d.length, e.length);
                            for (let a = 0; a < f; a += 1) {
                              let b = d[a] || -1,
                                c = e[a] || -1;
                              if (b !== c) return b - c;
                            }
                            return 0;
                          });
                        })(o.current, p.current)),
                      b && v(p.current.indexOf(a)),
                      () => {
                        let b = p.current.indexOf(a);
                        b > -1 && p.current.splice(b, 1);
                      })
                    : rx),
                (k[2] = o),
                (k[3] = d))
              : (d = k[3]);
            let w = d;
            k[4] !== l || k[5] !== m
              ? ((e = (a) => {
                  if ("Tab" === a.key) {
                    m && m.focus();
                    return;
                  }
                  if ("Home" === a.key) {
                    (a.preventDefault(), a.stopPropagation());
                    let b = rv(p.current)[0];
                    if (!b) return;
                    v(p.current.indexOf(b));
                    return;
                  }
                  if ("End" === a.key) {
                    (a.preventDefault(), a.stopPropagation());
                    let b = rv(p.current),
                      c = b[b.length - 1];
                    if (!c) return;
                    v(p.current.indexOf(c));
                    return;
                  }
                  if ("ArrowUp" === a.key) {
                    (a.preventDefault(), a.stopPropagation());
                    let b = rv(p.current),
                      c = b.length;
                    if (0 === c) return;
                    let d = p.current[s.current],
                      e = b.indexOf(d),
                      f = b[(e = (e - 1 + c) % c)];
                    v(p.current.indexOf(f));
                    return;
                  }
                  if ("ArrowDown" === a.key) {
                    (a.preventDefault(), a.stopPropagation());
                    let b = rv(p.current),
                      c = b.length;
                    if (0 === c) return;
                    let d = p.current[s.current],
                      e = b.indexOf(d),
                      f = b[(e = (e + 1) % c)];
                    v(p.current.indexOf(f));
                    return;
                  }
                  l && l(a);
                }),
                (k[4] = l),
                (k[5] = m),
                (k[6] = e))
              : (e = k[6]);
            let x = e;
            k[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (a) => {
                  let b = a.currentTarget;
                  v(p.current.indexOf(b));
                }),
                (k[7] = f))
              : (f = k[7]);
            let y = f;
            k[8] !== o
              ? ((g = () => {
                  (v(-2), o.current?.focus());
                }),
                (k[8] = o),
                (k[9] = g))
              : (g = k[9]);
            let z = g;
            return (
              k[10] !== q || k[11] !== o || k[12] !== n
                ? ((h = () => {
                    if (!o.current) return;
                    let a = requestAnimationFrame(() => {
                      if (-1 === q) {
                        if ("first" === n) {
                          let a = rv(p.current)[0];
                          a && v(p.current.indexOf(a));
                        }
                        if ("last" === n) {
                          let a = rv(p.current),
                            b = a[a.length - 1];
                          b && v(p.current.indexOf(b));
                        }
                        return;
                      }
                      (p.current[q] || null)?.focus();
                    });
                    return () => cancelAnimationFrame(a);
                  }),
                  (i = [q, o, v, n]),
                  (k[10] = q),
                  (k[11] = o),
                  (k[12] = n),
                  (k[13] = h),
                  (k[14] = i))
                : ((h = k[13]), (i = k[14])),
              (0, a3.useEffect)(h, i),
              k[15] !== t || k[16] !== q || k[17] !== z || k[18] !== x || k[19] !== w
                ? ((j = {
                    activeElement: t,
                    activeIndex: q,
                    handleItemMouseEnter: y,
                    handleItemMouseLeave: z,
                    handleKeyDown: x,
                    mount: w,
                  }),
                  (k[15] = t),
                  (k[16] = q),
                  (k[17] = z),
                  (k[18] = x),
                  (k[19] = w),
                  (k[20] = j))
                : (j = k[20]),
              j
            );
          })(p),
          L = (0, a3.useRef)(null);
        z[18] !== k
          ? ((q = (a) => {
              (L.current && (L.current(), (L.current = null)),
                (D.current = a),
                D.current && k && (L.current = k(D.current)));
            }),
            (z[18] = k),
            (z[19] = q))
          : (q = z[19]);
        let M = q;
        (z[20] !== G || z[21] !== h
          ? ((r = () => {
              h && h(G);
            }),
            (s = [G, h]),
            (z[20] = G),
            (z[21] = h),
            (z[22] = r),
            (z[23] = s))
          : ((r = z[22]), (s = z[23])),
          (0, a3.useEffect)(r, s),
          z[24] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => [D.current]), (z[24] = t)) : (t = z[24]),
          ps(E && e, t),
          z[25] !== E || z[26] !== f
            ? ((u = (a) => {
                E && "Escape" === a.key && (a.stopPropagation(), f && f());
              }),
              (z[25] = E),
              (z[26] = f),
              (z[27] = u))
            : (u = z[27]),
          px(u),
          z[28] !== F ||
          z[29] !== H ||
          z[30] !== I ||
          z[31] !== K ||
          z[32] !== e ||
          z[33] !== f ||
          z[34] !== g ||
          z[35] !== k
            ? ((v = {
                version: 2,
                activeElement: F,
                mount: K,
                onClickOutside: e,
                onEscape: f,
                onItemClick: g,
                onItemMouseEnter: H,
                onItemMouseLeave: I,
                registerElement: k,
              }),
              (z[28] = F),
              (z[29] = H),
              (z[30] = I),
              (z[31] = K),
              (z[32] = e),
              (z[33] = f),
              (z[34] = g),
              (z[35] = k),
              (z[36] = v))
            : (v = z[36]));
        let N = v;
        return (
          z[37] !== d || z[38] !== B
            ? ((w = (0, a1.jsx)(qS, { space: B, children: d })), (z[37] = d), (z[38] = B), (z[39] = w))
            : (w = z[39]),
          z[40] !== J || z[41] !== M || z[42] !== A || z[43] !== l || z[44] !== w
            ? ((x = (0, a1.jsx)(ry, {
                "data-ui": "Menu",
                ...l,
                onKeyDown: J,
                padding: A,
                ref: M,
                role: "menu",
                tabIndex: -1,
                children: w,
              })),
              (z[40] = J),
              (z[41] = M),
              (z[42] = A),
              (z[43] = l),
              (z[44] = w),
              (z[45] = x))
            : (x = z[45]),
          z[46] !== x || z[47] !== N
            ? ((y = (0, a1.jsx)(rt.Provider, { value: N, children: x })), (z[46] = x), (z[47] = N), (z[48] = y))
            : (y = z[48]),
          y
        );
      });
    rz.displayName = "ForwardRef(Menu)";
    let rA = c$.hr.withConfig({
      displayName: "MenuDivider",
      componentId: "sc-uhoxwu-0",
    })`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;
    rA.displayName = "MenuDivider";
    let rB = c$(pb).withConfig({ displayName: "Selectable", componentId: "sc-1w01ang-0" })(
      oS,
      function () {
        return cZ`
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
      function (a) {
        let { $tone: b } = a,
          { color: c, style: d } = W(a.theme),
          e = c.selectable[b];
        return cZ`
    ${pl(c, e.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${pl(c, e.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${pl(c, e.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${pl(c, e.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${pl(c, e.hovered)}
            }

            &:active {
              ${pl(c, e.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${pl(c, e.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${pl(c, e.pressed)}
        }

        &[data-selected] {
          ${pl(c, e.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${pl(c, e.hovered)}
            }
            &:active {
              ${pl(c, e.pressed)}
            }
          }
        }
      }
    }

    ${d?.card?.root}
  `;
      },
    );
    function rC() {
      let a = (0, a3.useContext)(rt);
      if (!a) throw Error("useMenu(): missing context value");
      if (!p6(a) || 2 !== a.version) throw Error("useMenu(): the context value is not compatible");
      return a;
    }
    function rD(a) {
      let b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L = (0, a2.c)(81);
      L[0] !== a
        ? (({
            as: h,
            children: c,
            fontSize: i,
            icon: b,
            menu: d,
            onClick: e,
            padding: j,
            popover: f,
            radius: k,
            space: l,
            text: n,
            tone: m,
            ...g
          } = a),
          (L[0] = a),
          (L[1] = b),
          (L[2] = c),
          (L[3] = d),
          (L[4] = e),
          (L[5] = f),
          (L[6] = g),
          (L[7] = h),
          (L[8] = i),
          (L[9] = j),
          (L[10] = k),
          (L[11] = l),
          (L[12] = m),
          (L[13] = n))
        : ((b = L[1]),
          (c = L[2]),
          (d = L[3]),
          (e = L[4]),
          (f = L[5]),
          (g = L[6]),
          (h = L[7]),
          (i = L[8]),
          (j = L[9]),
          (k = L[10]),
          (l = L[11]),
          (m = L[12]),
          (n = L[13]));
      let M = void 0 === h ? "button" : h,
        N = void 0 === i ? 1 : i,
        O = void 0 === j ? 3 : j,
        P = void 0 === k ? 2 : k,
        Q = void 0 === l ? 3 : l,
        R = void 0 === m ? "default" : m,
        S = rC(),
        { scheme: T } = n0(),
        {
          activeElement: U,
          mount: V,
          onClickOutside: W,
          onEscape: X,
          onItemClick: Y,
          onItemMouseEnter: Z,
          registerElement: $,
        } = S,
        _ = Z ?? S.onItemMouseEnter,
        [aa, ab] = (0, a3.useState)(null),
        [ac, ad] = (0, a3.useState)(!1),
        [ae, af] = (0, a3.useState)(null),
        ag = !!U && U === aa,
        [ah, ai] = (0, a3.useState)(!1);
      L[14] !== _
        ? ((o = (a) => {
            (ai(!1), _(a), ad(!0));
          }),
          (L[14] = _),
          (L[15] = o))
        : (o = L[15]);
      let aj = o;
      L[16] !== aa
        ? ((p = (a) => {
            "ArrowLeft" === a.key &&
              (a.stopPropagation(),
              ad(!1),
              requestAnimationFrame(() => {
                aa?.focus();
              }));
          }),
          (L[16] = aa),
          (L[17] = p))
        : (p = L[17]);
      let ak = p;
      L[18] !== e
        ? ((q = (a) => {
            (e?.(a), af("first"), ad(!0));
          }),
          (L[18] = e),
          (L[19] = q))
        : (q = L[19]);
      let al = q;
      L[20] !== Y
        ? ((r = () => {
            (ad(!1), Y?.());
          }),
          (L[20] = Y),
          (L[21] = r))
        : (r = L[21]);
      let am = r;
      L[22] === Symbol.for("react.memo_cache_sentinel") ? ((s = () => ai(!0)), (L[22] = s)) : (s = L[22]);
      let an = s;
      (L[23] !== V || L[24] !== aa
        ? ((t = () => V(aa)), (u = [V, aa]), (L[23] = V), (L[24] = aa), (L[25] = t), (L[26] = u))
        : ((t = L[25]), (u = L[26])),
        (0, a3.useEffect)(t, u),
        L[27] !== ag
          ? ((v = () => {
              ag || ad(!1);
            }),
            (w = [ag]),
            (L[27] = ag),
            (L[28] = v),
            (L[29] = w))
          : ((v = L[28]), (w = L[29])),
        (0, a3.useEffect)(v, w),
        L[30] !== ac
          ? ((x = () => {
              ac || ai(!1);
            }),
            (y = [ac]),
            (L[30] = ac),
            (L[31] = x),
            (L[32] = y))
          : ((x = L[31]), (y = L[32])),
        (0, a3.useEffect)(x, y),
        L[33] !== ae
          ? ((z = () => {
              if (!ae) return;
              let a = requestAnimationFrame(() => af(null));
              return () => cancelAnimationFrame(a);
            }),
            (A = [ae]),
            (L[33] = ae),
            (L[34] = z),
            (L[35] = A))
          : ((z = L[34]), (A = L[35])),
        (0, a3.useEffect)(z, A),
        L[36] !== c ||
        L[37] !== am ||
        L[38] !== ak ||
        L[39] !== d ||
        L[40] !== W ||
        L[41] !== X ||
        L[42] !== $ ||
        L[43] !== ae
          ? ((B = (0, a1.jsx)(rz, {
              ...d,
              onClickOutside: W,
              onEscape: X,
              onItemClick: am,
              onKeyDown: ak,
              onMouseEnter: an,
              registerElement: $,
              shouldFocus: ae,
              children: c,
            })),
            (L[36] = c),
            (L[37] = am),
            (L[38] = ak),
            (L[39] = d),
            (L[40] = W),
            (L[41] = X),
            (L[42] = $),
            (L[43] = ae),
            (L[44] = B))
          : (B = L[44]));
      let ao = B;
      L[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (a) => {
            let b = a.currentTarget;
            if (document.activeElement === b && "ArrowRight" === a.key) {
              (af("first"), ad(!0), ai(!0));
              return;
            }
          }),
          (L[45] = C))
        : (C = L[45]);
      let ap = C,
        aq = "button" === M ? ah : void 0,
        ar = "button" !== M ? ah : void 0,
        as = !ah && ag ? "" : void 0;
      L[46] !== P ? ((D = nQ(P)), (L[46] = P), (L[47] = D)) : (D = L[47]);
      let at = "button" === M ? "button" : void 0;
      return (
        L[48] !== b || L[49] !== N
          ? ((E =
              b &&
              (0, a1.jsxs)(pd, {
                size: N,
                children: [(0, a3.isValidElement)(b) && b, (0, c4.isValidElementType)(b) && (0, a1.jsx)(b, {})],
              })),
            (L[48] = b),
            (L[49] = N),
            (L[50] = E))
          : (E = L[50]),
        L[51] !== N || L[52] !== n
          ? ((F = (0, a1.jsx)(pb, {
              flex: 1,
              children: (0, a1.jsx)(pd, { size: N, textOverflow: "ellipsis", weight: "medium", children: n }),
            })),
            (L[51] = N),
            (L[52] = n),
            (L[53] = F))
          : (F = L[53]),
        L[54] === Symbol.for("react.memo_cache_sentinel") ? ((G = (0, a1.jsx)(dJ, {})), (L[54] = G)) : (G = L[54]),
        L[55] !== N ? ((H = (0, a1.jsx)(pd, { size: N, children: G })), (L[55] = N), (L[56] = H)) : (H = L[56]),
        L[57] !== O || L[58] !== Q || L[59] !== E || L[60] !== F || L[61] !== H
          ? ((I = (0, a1.jsxs)(ph, { gap: Q, padding: O, children: [E, F, H] })),
            (L[57] = O),
            (L[58] = Q),
            (L[59] = E),
            (L[60] = F),
            (L[61] = H),
            (L[62] = I))
          : (I = L[62]),
        L[63] !== M ||
        L[64] !== al ||
        L[65] !== aj ||
        L[66] !== g ||
        L[67] !== T ||
        L[68] !== aq ||
        L[69] !== ar ||
        L[70] !== as ||
        L[71] !== D ||
        L[72] !== at ||
        L[73] !== I ||
        L[74] !== R
          ? ((J = (0, a1.jsx)(rB, {
              "data-as": M,
              "data-ui": "MenuGroup",
              forwardedAs: M,
              ...g,
              "aria-pressed": aq,
              "data-pressed": ar,
              "data-selected": as,
              $radius: D,
              $tone: R,
              $scheme: T,
              onClick: al,
              onKeyDown: ap,
              onMouseEnter: aj,
              ref: ab,
              tabIndex: -1,
              type: at,
              children: I,
            })),
            (L[63] = M),
            (L[64] = al),
            (L[65] = aj),
            (L[66] = g),
            (L[67] = T),
            (L[68] = aq),
            (L[69] = ar),
            (L[70] = as),
            (L[71] = D),
            (L[72] = at),
            (L[73] = I),
            (L[74] = R),
            (L[75] = J))
          : (J = L[75]),
        L[76] !== ao || L[77] !== ac || L[78] !== f || L[79] !== J
          ? ((K = (0, a1.jsx)(qF, { ...f, content: ao, "data-ui": "MenuGroup__popover", open: ac, children: J })),
            (L[76] = ao),
            (L[77] = ac),
            (L[78] = f),
            (L[79] = J),
            (L[80] = K))
          : (K = L[80]),
        K
      );
    }
    ((rB.displayName = "Selectable"), (rD.displayName = "MenuGroup"));
    let rE = (0, a3.forwardRef)(function (a, b) {
      let c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K = (0, a2.c)(75);
      K[0] !== a
        ? (({
            as: r,
            children: e,
            disabled: f,
            fontSize: s,
            hotkeys: g,
            icon: c,
            iconRight: d,
            onClick: h,
            padding: t,
            paddingX: m,
            paddingY: n,
            paddingTop: l,
            paddingRight: k,
            paddingBottom: i,
            paddingLeft: j,
            pressed: o,
            radius: u,
            selected: q,
            space: v,
            text: x,
            tone: w,
            ...p
          } = a),
          (K[0] = a),
          (K[1] = c),
          (K[2] = d),
          (K[3] = e),
          (K[4] = f),
          (K[5] = g),
          (K[6] = h),
          (K[7] = i),
          (K[8] = j),
          (K[9] = k),
          (K[10] = l),
          (K[11] = m),
          (K[12] = n),
          (K[13] = o),
          (K[14] = p),
          (K[15] = q),
          (K[16] = r),
          (K[17] = s),
          (K[18] = t),
          (K[19] = u),
          (K[20] = v),
          (K[21] = w),
          (K[22] = x))
        : ((c = K[1]),
          (d = K[2]),
          (e = K[3]),
          (f = K[4]),
          (g = K[5]),
          (h = K[6]),
          (i = K[7]),
          (j = K[8]),
          (k = K[9]),
          (l = K[10]),
          (m = K[11]),
          (n = K[12]),
          (o = K[13]),
          (p = K[14]),
          (q = K[15]),
          (r = K[16]),
          (s = K[17]),
          (t = K[18]),
          (u = K[19]),
          (v = K[20]),
          (w = K[21]),
          (x = K[22]));
      let L = void 0 === r ? "button" : r,
        M = void 0 === s ? 1 : s,
        N = void 0 === t ? 3 : t,
        O = void 0 === u ? 2 : u,
        P = void 0 === v ? 3 : v,
        Q = void 0 === w ? "default" : w,
        { scheme: R } = n0(),
        S = rC(),
        { activeElement: T, mount: U, onItemClick: V, onItemMouseEnter: W, onItemMouseLeave: X } = S,
        Y = W ?? S.onItemMouseEnter,
        Z = X ?? S.onItemMouseLeave,
        [$, _] = (0, a3.useState)(null),
        aa = !!T && T === $,
        ab = (0, a3.useRef)(null);
      (K[23] === Symbol.for("react.memo_cache_sentinel") ? ((y = () => ab.current), (K[23] = y)) : (y = K[23]),
        (0, a3.useImperativeHandle)(b, y),
        K[24] !== U || K[25] !== $ || K[26] !== q
          ? ((z = () => U($, q)), (A = [U, $, q]), (K[24] = U), (K[25] = $), (K[26] = q), (K[27] = z), (K[28] = A))
          : ((z = K[27]), (A = K[28])),
        (0, a3.useEffect)(z, A),
        K[29] !== f || K[30] !== h || K[31] !== V
          ? ((B = (a) => {
              f || (h && h(a), V && V());
            }),
            (K[29] = f),
            (K[30] = h),
            (K[31] = V),
            (K[32] = B))
          : (B = K[32]));
      let ac = B;
      K[33] !== N || K[34] !== i || K[35] !== j || K[36] !== k || K[37] !== l || K[38] !== m || K[39] !== n
        ? ((C = {
            padding: N,
            paddingX: m,
            paddingY: n,
            paddingTop: l,
            paddingRight: k,
            paddingBottom: i,
            paddingLeft: j,
          }),
          (K[33] = N),
          (K[34] = i),
          (K[35] = j),
          (K[36] = k),
          (K[37] = l),
          (K[38] = m),
          (K[39] = n),
          (K[40] = C))
        : (C = K[40]);
      let ad = C;
      K[41] !== M ? ((D = nQ(M).map(rF)), (K[41] = M), (K[42] = D)) : (D = K[42]);
      let ae = D;
      K[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (a) => {
            ((ab.current = a), _(a));
          }),
          (K[43] = E))
        : (E = K[43]);
      let af = E,
        ag = "button" !== L && o ? "" : void 0,
        ah = aa ? "" : void 0,
        ai = f ? "" : void 0;
      (K[44] !== O ? ((F = nQ(O)), (K[44] = O), (K[45] = F)) : (F = K[45]),
        K[46] === Symbol.for("react.memo_cache_sentinel") ? ((G = nQ(0)), (K[46] = G)) : (G = K[46]));
      let aj = f ? "default" : Q,
        ak = "button" === L ? "button" : void 0;
      return (
        K[47] !== c ||
        K[48] !== d ||
        K[49] !== M ||
        K[50] !== g ||
        K[51] !== ae ||
        K[52] !== ad ||
        K[53] !== P ||
        K[54] !== x
          ? ((H =
              (c || x || d) &&
              (0, a1.jsxs)(ph, {
                as: "span",
                gap: P,
                align: "center",
                ...ad,
                children: [
                  c &&
                    (0, a1.jsxs)(pd, {
                      size: M,
                      children: [(0, a3.isValidElement)(c) && c, (0, c4.isValidElementType)(c) && (0, a1.jsx)(c, {})],
                    }),
                  x &&
                    (0, a1.jsx)(pb, {
                      flex: 1,
                      children: (0, a1.jsx)(pd, { size: M, textOverflow: "ellipsis", weight: "medium", children: x }),
                    }),
                  g && (0, a1.jsx)(rs, { fontSize: ae, keys: g, style: { marginTop: -4, marginBottom: -4 } }),
                  d &&
                    (0, a1.jsxs)(pd, {
                      size: M,
                      children: [(0, a3.isValidElement)(d) && d, (0, c4.isValidElementType)(d) && (0, a1.jsx)(d, {})],
                    }),
                ],
              })),
            (K[47] = c),
            (K[48] = d),
            (K[49] = M),
            (K[50] = g),
            (K[51] = ae),
            (K[52] = ad),
            (K[53] = P),
            (K[54] = x),
            (K[55] = H))
          : (H = K[55]),
        K[56] !== e || K[57] !== ad
          ? ((I = e && (0, a1.jsx)(pb, { as: "span", ...ad, children: e })), (K[56] = e), (K[57] = ad), (K[58] = I))
          : (I = K[58]),
        K[59] !== L ||
        K[60] !== f ||
        K[61] !== ac ||
        K[62] !== Y ||
        K[63] !== Z ||
        K[64] !== p ||
        K[65] !== R ||
        K[66] !== ag ||
        K[67] !== ah ||
        K[68] !== ai ||
        K[69] !== F ||
        K[70] !== aj ||
        K[71] !== ak ||
        K[72] !== H ||
        K[73] !== I
          ? ((J = (0, a1.jsxs)(rB, {
              "data-ui": "MenuItem",
              role: "menuitem",
              ...p,
              "data-pressed": ag,
              "data-selected": ah,
              "data-disabled": ai,
              forwardedAs: L,
              $radius: F,
              $padding: G,
              $tone: aj,
              $scheme: R,
              disabled: f,
              onClick: ac,
              onMouseEnter: Y,
              onMouseLeave: Z,
              ref: af,
              tabIndex: -1,
              type: ak,
              children: [H, I],
            })),
            (K[59] = L),
            (K[60] = f),
            (K[61] = ac),
            (K[62] = Y),
            (K[63] = Z),
            (K[64] = p),
            (K[65] = R),
            (K[66] = ag),
            (K[67] = ah),
            (K[68] = ai),
            (K[69] = F),
            (K[70] = aj),
            (K[71] = ak),
            (K[72] = H),
            (K[73] = I),
            (K[74] = J))
          : (J = K[74]),
        J
      );
    });
    function rF(a) {
      return a - 1;
    }
    rE.displayName = "ForwardRef(MenuItem)";
    let rG = c$(pp).withConfig({ displayName: "CustomButton", componentId: "sc-1kns779-0" })`max-width:100%;`,
      rH = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s = (0, a2.c)(30);
        s[0] !== a
          ? (({
              icon: d,
              id: e,
              focused: c,
              fontSize: k,
              label: f,
              onClick: g,
              onFocus: h,
              padding: l,
              selected: j,
              ...i
            } = a),
            (s[0] = a),
            (s[1] = c),
            (s[2] = d),
            (s[3] = e),
            (s[4] = f),
            (s[5] = g),
            (s[6] = h),
            (s[7] = i),
            (s[8] = j),
            (s[9] = k),
            (s[10] = l))
          : ((c = s[1]),
            (d = s[2]),
            (e = s[3]),
            (f = s[4]),
            (g = s[5]),
            (h = s[6]),
            (i = s[7]),
            (j = s[8]),
            (k = s[9]),
            (l = s[10]));
        let t = void 0 === k ? 1 : k,
          u = void 0 === l ? 2 : l,
          v = (0, a3.useRef)(null),
          w = (0, a3.useRef)(!1);
        (s[11] === Symbol.for("react.memo_cache_sentinel") ? ((m = () => v.current), (s[11] = m)) : (m = s[11]),
          (0, a3.useImperativeHandle)(b, m),
          s[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = () => {
                w.current = !1;
              }),
              (s[12] = n))
            : (n = s[12]));
        let x = n;
        s[13] !== h
          ? ((o = (a) => {
              ((w.current = !0), h && h(a));
            }),
            (s[13] = h),
            (s[14] = o))
          : (o = s[14]);
        let y = o;
        (s[15] !== c
          ? ((p = () => {
              c && !w.current && (v.current && v.current.focus(), (w.current = !0));
            }),
            (q = [c]),
            (s[15] = c),
            (s[16] = p),
            (s[17] = q))
          : ((p = s[16]), (q = s[17])),
          (0, a3.useEffect)(p, q));
        let z = j ? "true" : "false",
          A = j ? 0 : -1;
        return (
          s[18] !== t ||
          s[19] !== y ||
          s[20] !== d ||
          s[21] !== e ||
          s[22] !== f ||
          s[23] !== g ||
          s[24] !== u ||
          s[25] !== i ||
          s[26] !== j ||
          s[27] !== z ||
          s[28] !== A
            ? ((r = (0, a1.jsx)(rG, {
                "data-ui": "Tab",
                ...i,
                "aria-selected": z,
                fontSize: t,
                icon: d,
                id: e,
                mode: "bleed",
                onClick: g,
                onBlur: x,
                onFocus: y,
                padding: u,
                ref: v,
                role: "tab",
                selected: j,
                tabIndex: A,
                text: f,
                type: "button",
              })),
              (s[18] = t),
              (s[19] = y),
              (s[20] = d),
              (s[21] = e),
              (s[22] = f),
              (s[23] = g),
              (s[24] = u),
              (s[25] = i),
              (s[26] = j),
              (s[27] = z),
              (s[28] = A),
              (s[29] = r))
            : (r = s[29]),
          r
        );
      });
    rH.displayName = "ForwardRef(Tab)";
    let rI = c$(pU).withConfig({
        displayName: "CustomInline",
        componentId: "sc-5cm04m-0",
      })`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,
      rJ = (0, a3.forwardRef)(function (a, b) {
        let c,
          d,
          e,
          f,
          g,
          h = (0, a2.c)(15);
        h[0] !== a ? (({ children: c, ...d } = a), (h[0] = a), (h[1] = c), (h[2] = d)) : ((c = h[1]), (d = h[2]));
        let [i, j] = (0, a3.useState)(-1);
        if (h[3] !== c || h[4] !== i) {
          let a,
            b = a3.Children.toArray(c).filter(a3.isValidElement);
          (h[6] !== i
            ? ((a = (a, b) => (0, a3.cloneElement)(a, { focused: i === b, key: b, onFocus: () => j(b) })),
              (h[6] = i),
              (h[7] = a))
            : (a = h[7]),
            (e = b.map(a)),
            (h[3] = c),
            (h[4] = i),
            (h[5] = e));
        } else e = h[5];
        let k = e,
          l = k.length;
        h[8] !== l
          ? ((f = (a) => {
              ("ArrowLeft" === a.key && j((a) => (a + l - 1) % l), "ArrowRight" === a.key && j((a) => (a + 1) % l));
            }),
            (h[8] = l),
            (h[9] = f))
          : (f = h[9]);
        let m = f;
        return (
          h[10] !== m || h[11] !== b || h[12] !== d || h[13] !== k
            ? ((g = (0, a1.jsx)(rI, {
                "data-ui": "TabList",
                ...d,
                onKeyDown: m,
                ref: b,
                role: "tablist",
                children: k,
              })),
              (h[10] = m),
              (h[11] = b),
              (h[12] = d),
              (h[13] = k),
              (h[14] = g))
            : (g = h[14]),
          g
        );
      });
    ((rJ.displayName = "ForwardRef(TabList)"),
      a.s(
        [
          "Arrow",
          () => p3,
          "Avatar",
          () => o2,
          "AvatarCounter",
          () => o5,
          "AvatarStack",
          () => o9,
          "Badge",
          () => pf,
          "BoundaryElementProvider",
          () => p5,
          "Box",
          () => pb,
          "Button",
          () => pp,
          "Card",
          () => pr,
          "Checkbox",
          () => pH,
          "Code",
          () => pL,
          "ConditionalWrapper",
          () => p9,
          "Container",
          () => pO,
          "EMPTY_ARRAY",
          () => nz,
          "EMPTY_RECORD",
          () => nA,
          "ElementQuery",
          () => qa,
          "Flex",
          () => ph,
          "Grid",
          () => pQ,
          "Heading",
          () => pS,
          "Hotkeys",
          () => rs,
          "Inline",
          () => pU,
          "KBD",
          () => pX,
          "Label",
          () => oW,
          "Layer",
          () => qj,
          "LayerProvider",
          () => qd,
          "Menu",
          () => rz,
          "MenuDivider",
          () => rA,
          "MenuGroup",
          () => rD,
          "MenuItem",
          () => rE,
          "Popover",
          () => qF,
          "Portal",
          () => qo,
          "PortalProvider",
          () => qp,
          "Radio",
          () => qI,
          "Select",
          () => qP,
          "Spinner",
          () => pk,
          "SrOnly",
          () => qu,
          "Stack",
          () => qS,
          "Switch",
          () => qY,
          "Tab",
          () => rH,
          "TabList",
          () => rJ,
          "Text",
          () => pd,
          "TextArea",
          () => q1,
          "TextInput",
          () => rd,
          "ThemeColorProvider",
          () => n1,
          "ThemeProvider",
          () => n_,
          "Tooltip",
          () => rp,
          "TooltipDelayGroupContext",
          () => rl,
          "TooltipDelayGroupProvider",
          () => rm,
          "VirtualList",
          () => qx,
          "_ResizeObserver",
          () => ns,
          "_cardColorStyle",
          () => pl,
          "_elementSizeObserver",
          () => pv,
          "_fillCSSObject",
          () => nN,
          "_getArrayProp",
          () => nQ,
          "_getResponsiveSpace",
          () => nR,
          "_isEnterToClickElement",
          () => nE,
          "_isScrollable",
          () => nM,
          "_responsive",
          () => nP,
          "containsOrEqualsElement",
          () => nL,
          "createColorTheme",
          () => A,
          "createGlobalScopedContext",
          () => nZ,
          "hexToRgb",
          () => aE,
          "hslToRgb",
          () => aH,
          "isHTMLAnchorElement",
          () => nG,
          "isHTMLButtonElement",
          () => nI,
          "isHTMLElement",
          () => nF,
          "isHTMLInputElement",
          () => nH,
          "isHTMLSelectElement",
          () => nJ,
          "isHTMLTextAreaElement",
          () => nK,
          "isRecord",
          () => p6,
          "multiply",
          () => az,
          "parseColor",
          () => aJ,
          "rem",
          () => nO,
          "responsiveCodeFontStyle",
          () => nT,
          "responsiveHeadingFont",
          () => nU,
          "responsiveLabelFont",
          () => nV,
          "responsivePaddingStyle",
          () => oR,
          "responsiveRadiusStyle",
          () => oS,
          "responsiveTextAlignStyle",
          () => nW,
          "responsiveTextFont",
          () => nX,
          "rgbToHex",
          () => aF,
          "rgbToHsl",
          () => aG,
          "rgba",
          () => aK,
          "screen",
          () => aA,
          "studioTheme",
          () => ny,
          "useBoundaryElement",
          () => p8,
          "useClickOutsideEvent",
          () => ps,
          "useCustomValidity",
          () => pu,
          "useElementSize",
          () => pw,
          "useGlobalKeyDown",
          () => px,
          "useLayer",
          () => qg,
          "useMatchMedia",
          () => py,
          "useMediaIndex",
          () => pA,
          "usePortal",
          () => qn,
          "usePrefersDark",
          () => pB,
          "usePrefersReducedMotion",
          () => pD,
          "useRootTheme",
          () => n0,
          "useTheme",
          () => n2,
          "useTheme_v2",
          () => n3,
          "useTooltipDelayGroup",
          () => rn,
        ],
        518805,
      ));
  },
];

//# sourceMappingURL=433da_f1101542._.js.map
