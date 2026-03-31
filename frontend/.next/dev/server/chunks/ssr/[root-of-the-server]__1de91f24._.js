module.exports = [
  "[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () =>
      require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"),
    );

    module.exports = mod;
  },
  "[project]/in-need-of-time/frontend/components/Providers.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["Providers", () => Providers]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)",
      );
    ("use client");
    function makeQueryClient() {
      return new __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "QueryClient"
      ]({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      });
    }
    let browserQueryClient = undefined;
    function getQueryClient() {
      if (("TURBOPACK compile-time truthy", 1)) {
        // On the server, we want to create a new client for each request
        return makeQueryClient();
      } //TURBOPACK unreachable
      else;
    }
    function Providers(props) {
      const { children } = props;
      const queryClient = getQueryClient();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "QueryClientProvider"
        ],
        {
          client: queryClient,
          children: children,
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/Providers.tsx",
          lineNumber: 41,
          columnNumber: 10,
        },
        this,
      );
    }
  },
  "[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () =>
      require("next/dist/server/app-render/action-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () =>
      require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () =>
      require("next/dist/server/app-render/work-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[project]/in-need-of-time/lib/utils.ts [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "buildPlaceAddress",
      () => buildPlaceAddress,
      "cn",
      () => cn,
      "convertMetersToMiles",
      () => convertMetersToMiles,
      "convertMilesToMeters",
      () => convertMilesToMeters,
      "formatPhoneNumberForHref",
      () => formatPhoneNumberForHref,
      "generateGoogleLink",
      () => generateGoogleLink,
      "generateGoogleNavigationLink",
      () => generateGoogleNavigationLink,
      "getCurrentDay",
      () => getCurrentDay,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)",
      );
    function cn(...inputs) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "twMerge"
      ])(
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "clsx"
        ])(inputs),
      );
    }
    const METERS_PER_MILE = 1609.34;
    function convertMetersToMiles(meters) {
      const miles = meters / METERS_PER_MILE;
      return Number(miles.toFixed(2));
    }
    function convertMilesToMeters(miles) {
      const meters = Number(miles) * METERS_PER_MILE;
      return Number(meters.toFixed(2));
    }
    function getCurrentDay() {
      let day = new Date().getDay();
      return (day + 6) % 7;
    }
    function formatPhoneNumberForHref(phoneNumber) {
      return `tel:+1${phoneNumber.replace(/\D/g, "")}`;
    }
    function generateGoogleLink(placeId, placeName) {
      let googleLink = "";
      if (placeId) {
        googleLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}&query_place_id=${encodeURIComponent(placeId)}`;
      }
      return googleLink;
    }
    function generateGoogleNavigationLink(placeId, placeName) {
      let navLink;
      navLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeName)}&destination_place_id=${encodeURIComponent(placeId)}`;
      return navLink;
    }
    function buildPlaceAddress(place, options = {}) {
      const {
        includeStreetNumber = true,
        includeRoute = true,
        includeCity = true,
        includeState = true,
        includePostcode = true,
      } = options;
      let address1 = "";
      let city = "";
      let state = "";
      let postcode = "";
      // Exit the function early if the place doesn't have an address
      if (!place.address_components) return "";
      for (const component of place.address_components) {
        const componentType = component.types[0];
        switch (componentType) {
          case "street_number":
            if (includeStreetNumber) address1 = `${component.long_name} ${address1}`;
            break;
          case "route":
            if (includeRoute) address1 += component.short_name;
            break;
          case "postal_code":
            if (includePostcode) postcode = `${component.long_name}${postcode}`;
            break;
          case "postal_code_suffix":
            if (includePostcode) postcode = `${postcode}-${component.long_name}`;
            break;
          case "locality":
            if (includeCity) city = component.long_name;
            break;
          case "administrative_area_level_1":
            if (includeState) state = component.short_name;
        }
      }
      const address = `${address1}, ${city}, ${state} ${postcode}`;
      return address;
    }
  },
  "[project]/in-need-of-time/frontend/components/ui/drawer.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Drawer",
      () => Drawer,
      "DrawerClose",
      () => DrawerClose,
      "DrawerContent",
      () => DrawerContent,
      "DrawerDescription",
      () => DrawerDescription,
      "DrawerFooter",
      () => DrawerFooter,
      "DrawerHeader",
      () => DrawerHeader,
      "DrawerOverlay",
      () => DrawerOverlay,
      "DrawerPortal",
      () => DrawerPortal,
      "DrawerTitle",
      () => DrawerTitle,
      "DrawerTrigger",
      () => DrawerTrigger,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/node_modules/vaul/dist/index.mjs [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/utils.ts [app-ssr] (ecmascript)");
    ("use client");
    const Drawer = ({ shouldScaleBackground = true, ...props }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Drawer"
        ].Root,
        {
          shouldScaleBackground: shouldScaleBackground,
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
          lineNumber: 9,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    Drawer.displayName = "Drawer";
    const DrawerTrigger =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Drawer"
      ].Trigger;
    const DrawerPortal =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Drawer"
      ].Portal;
    const DrawerClose =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Drawer"
      ].Close;
    const DrawerOverlay =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Drawer"
          ].Overlay,
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])("fixed inset-0 z-50 bg-black/80", className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
            lineNumber: 23,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    DrawerOverlay.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Drawer"
      ].Overlay.displayName;
    const drawerVariants = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
      "cva"
    ])(
      "fixed z-50 inset-x-0 flex h-auto flex-col border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950",
      {
        variants: {
          variant: {
            top: "top-0 mb-24 rounded-b-[10px]",
            bottom: "bottom-0 mt-24 rounded-t-[10px]",
          },
        },
        defaultVariants: {
          variant: "top",
        },
      },
    );
    const DrawerContent =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ variant, className, children, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          DrawerPortal,
          {
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                DrawerOverlay,
                {},
                void 0,
                false,
                {
                  fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
                  lineNumber: 48,
                  columnNumber: 7,
                },
                ("TURBOPACK compile-time value", void 0),
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "Drawer"
                ].Content,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "cn"
                  ])(
                    drawerVariants({
                      variant,
                      className,
                    }),
                  ),
                  ...props,
                  children: [
                    variant === "top" && children,
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className: (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "cn"
                        ])("mx-auto h-2 w-[100px] rounded-full bg-slate-100 dark:bg-slate-800", {
                          "mt-4": variant === "bottom",
                          "mb-4": variant === "top",
                        }),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
                        lineNumber: 51,
                        columnNumber: 9,
                      },
                      ("TURBOPACK compile-time value", void 0),
                    ),
                    variant === "bottom" && children,
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
                  lineNumber: 49,
                  columnNumber: 7,
                },
                ("TURBOPACK compile-time value", void 0),
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
            lineNumber: 47,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    DrawerContent.displayName = "DrawerContent";
    const DrawerHeader = ({ className, ...props }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])("grid gap-1.5 p-4 text-center sm:text-left", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
          lineNumber: 65,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    DrawerHeader.displayName = "DrawerHeader";
    const DrawerFooter = ({ className, ...props }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])("mt-auto flex flex-col gap-2 p-4", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
          lineNumber: 70,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    DrawerFooter.displayName = "DrawerFooter";
    const DrawerTitle =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Drawer"
          ].Title,
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])("text-lg font-semibold leading-none tracking-tight", className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
            lineNumber: 78,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    DrawerTitle.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Drawer"
      ].Title.displayName;
    const DrawerDescription =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Drawer"
          ].Description,
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])("text-sm text-slate-500 dark:text-slate-400", className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
            lineNumber: 90,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    DrawerDescription.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Drawer"
      ].Description.displayName;
  },
  "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "NavigationMenu",
      () => NavigationMenu,
      "NavigationMenuContent",
      () => NavigationMenuContent,
      "NavigationMenuIndicator",
      () => NavigationMenuIndicator,
      "NavigationMenuItem",
      () => NavigationMenuItem,
      "NavigationMenuLink",
      () => NavigationMenuLink,
      "NavigationMenuList",
      () => NavigationMenuList,
      "NavigationMenuTrigger",
      () => NavigationMenuTrigger,
      "NavigationMenuViewport",
      () => NavigationMenuViewport,
      "navigationMenuTriggerStyle",
      () => navigationMenuTriggerStyle,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/utils.ts [app-ssr] (ecmascript)");
    const NavigationMenu =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, children, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Root"
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])("relative z-10 flex max-w-max flex-1 items-center justify-center rounded-xl bg-slate-50", className),
            ...props,
            children: [
              children,
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                NavigationMenuViewport,
                {},
                void 0,
                false,
                {
                  fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
                  lineNumber: 18,
                  columnNumber: 5,
                },
                ("TURBOPACK compile-time value", void 0),
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
            lineNumber: 12,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    NavigationMenu.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Root"
      ].displayName;
    const NavigationMenuList =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "List"
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])(
              "group m-1 flex flex-1 list-none items-center justify-center data-[orientation=horizontal]:space-x-1 data-[orientation=vertical]:space-y-1",
              className,
            ),
            ...props,
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
            lineNumber: 27,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    NavigationMenuList.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "List"
      ].displayName;
    const NavigationMenuItem =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Item"
      ];
    const navigationMenuTriggerStyle = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
      "cva"
    ])(
      "group text-slate-700 inline-flex h-10 items-center justify-center rounded-lg bg-transparent px-6 py-3 text-base font-medium transition-colors hover:bg-white hover:shadow-sm hover:text-slate-900 focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-primary-200 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white data-[active]:shadow-sm data-[active]:text-primary-500 data-[active]: data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50",
    );
    const NavigationMenuTrigger =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, children, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Trigger"
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])(navigationMenuTriggerStyle(), "group", className),
            ...props,
            children: [
              children,
              "",
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                  "ChevronDown"
                ],
                {
                  className:
                    "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                  "aria-hidden": "true",
                },
                void 0,
                false,
                {
                  fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
                  lineNumber: 55,
                  columnNumber: 5,
                },
                ("TURBOPACK compile-time value", void 0),
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
            lineNumber: 48,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    NavigationMenuTrigger.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Trigger"
      ].displayName;
    const NavigationMenuContent =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Content"
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])(
              "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
              className,
            ),
            ...props,
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
            lineNumber: 67,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    NavigationMenuContent.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Content"
      ].displayName;
    const NavigationMenuLink =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Link"
      ];
    const NavigationMenuViewport =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])("absolute left-0 top-full flex justify-center"),
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "Viewport"
              ],
              {
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 md:w-[var(--radix-navigation-menu-viewport-width)]",
                  className,
                ),
                ref: ref,
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
                lineNumber: 85,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
            lineNumber: 84,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    NavigationMenuViewport.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Viewport"
      ].displayName;
    const NavigationMenuIndicator =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Indicator"
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])(
              "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
              className,
            ),
            ...props,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800",
              },
              void 0,
              false,
              {
                fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
                lineNumber: 109,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx",
            lineNumber: 101,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    NavigationMenuIndicator.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Indicator"
      ].displayName;
  },
  "[project]/in-need-of-time/frontend/components/ui/button.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["Button", () => Button, "buttonVariants", () => buttonVariants]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/utils.ts [app-ssr] (ecmascript)");
    const buttonVariants = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
      "cva"
    ])(
      "inline-flex items-center justify-center border border-transparent whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 disabled:pointer-events-none disabled:opacity-50",
      {
        variants: {
          variant: {
            primary:
              "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 active:border-primary-300 disabled:bg-primary-300 focus:ring-primary-200",
            dark: "bg-slate-700 text-white hover:bg-slate-800 active:bg-slate-900 active:border-slate-300 disabled:bg-slate-500 focus:ring-slate-200",
            light:
              "text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate:300 active:border-slate-50 disabled:bg-slate-50 disabled:text-slate-500 focus:ring-slate-200",
            "hollow-primary":
              "border-primary-500 text-primary-500 active:border-primary-700 hover:bg-primary-50 active:bg-primary-50 focus-ring-primary",
            "text-dark":
              "text-slate-600 bg-transparent hover:text-800 disabled:text-500 active:text-900 focus:ring-slate-200",
            "text-light": "text-white bg-transparent hover:text-slate-50 disabled:text-slate-100 focus:ring-white",
            "text-primary":
              "text-primary-500 bg-transparent hover:text-primary-600 disabled:text-primary-300 active:text-primary-700 focus:ring-primary-200",
          },
          size: {
            sm: "px-4 py-2 text-sm leading-4 h-7 font-medium",
            default: "px-6 py-3 text-base h-10 font-medium",
            lg: "px-8 py-4 text-lg leading-4 h-12 font-semibold",
            "icon-sm": "p-2 h-8 w-8",
            icon: "p-3 h-10 w-10",
            "icon-lg": "p-4 h-12 w-12",
            "text-sm": "p-0 text-sm font-medium",
            text: "p-0 text-base font-medium",
            "text-lg": "p-0 text-lg font-semibold",
          },
          rounded: {
            full: "rounded-full",
            xl: "rounded-xl",
            lg: "rounded-lg",
            md: "rounded-md",
            sm: "rounded-sm",
          },
        },
        defaultVariants: {
          variant: "primary",
          size: "default",
          rounded: "full",
        },
      },
    );
    const Button =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
        const Comp = asChild
          ? __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "Slot"
            ]
          : "button";
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          Comp,
          {
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])(
              buttonVariants({
                variant,
                size,
                rounded,
                className,
              }),
            ),
            ref: ref,
            ...props,
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/button.tsx",
            lineNumber: 61,
            columnNumber: 12,
          },
          ("TURBOPACK compile-time value", void 0),
        );
      });
    Button.displayName = "Button";
  },
  "[project]/in-need-of-time/frontend/components/Header.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Header, "navigation", () => navigation]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/node_modules/next/navigation.js [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/node_modules/next/image.js [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js [app-ssr] (ecmascript) <export default as Bars3Icon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-ssr] (ecmascript) <export default as XMarkIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-ssr] (ecmascript) <export default as ArrowRightIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/HomeIcon.js [app-ssr] (ecmascript) <export default as HomeIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-ssr] (ecmascript) <export default as MagnifyingGlassIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/BookOpenIcon.js [app-ssr] (ecmascript) <export default as BookOpenIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/frontend/components/ui/drawer.tsx [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ui/navigation-menu.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
    ("use client");
    const navigation = [
      {
        name: "Home",
        href: "/",
      },
    ];
    function Header() {
      const pathname = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "usePathname"
      ])();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Drawer"
        ],
        {
          shouldScaleBackground: false,
          direction: "top",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "Fragment"
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "relative z-20 mx-auto max-w-7xl bg-white px-4 py-5 sm:px-6 lg:p-5",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className: "flex items-center",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "flex-1 flex-shrink-0",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "span",
                                  {
                                    className: "hidden w-[66px] lg:block",
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "default"
                                      ],
                                      {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "default"
                                          ],
                                          {
                                            src: "/logo.svg",
                                            alt: "Logo",
                                            height: 45,
                                            width: 66,
                                            className: " h-12 w-auto",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                            lineNumber: 37,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "span",
                                  {
                                    className: "block w-[59px] lg:hidden",
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "default"
                                      ],
                                      {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "default"
                                          ],
                                          {
                                            src: "/logo.svg",
                                            alt: "Logo",
                                            height: 40,
                                            width: 59,
                                            className: "block h-10 w-auto lg:hidden",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                            lineNumber: 42,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                              lineNumber: 34,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "hidden flex-1 lg:flex",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "NavigationMenu"
                                ],
                                {
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "NavigationMenuList"
                                    ],
                                    {
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "NavigationMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "NavigationMenuLink"
                                              ],
                                              {
                                                asChild: true,
                                                "data-active": pathname === "/" ? true : null,
                                                className: (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "navigationMenuTriggerStyle"
                                                ])(),
                                                children: /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "default"
                                                  ],
                                                  {
                                                    href: "/",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__[
                                                          "HomeIcon"
                                                        ],
                                                        {
                                                          className: "mr-2 h-4 w-4",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                          lineNumber: 57,
                                                          columnNumber: 25,
                                                        },
                                                        this,
                                                      ),
                                                      "Home",
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 23,
                                                  },
                                                  this,
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                lineNumber: 51,
                                                columnNumber: 21,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "NavigationMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "NavigationMenuLink"
                                              ],
                                              {
                                                asChild: true,
                                                "data-active": pathname === "/search" ? true : null,
                                                className: (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "navigationMenuTriggerStyle"
                                                ])(),
                                                children: /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "default"
                                                  ],
                                                  {
                                                    href: "/search",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__[
                                                          "MagnifyingGlassIcon"
                                                        ],
                                                        {
                                                          className: "mr-2 h-4 w-4",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                          lineNumber: 70,
                                                          columnNumber: 25,
                                                        },
                                                        this,
                                                      ),
                                                      "Search",
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 23,
                                                  },
                                                  this,
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "NavigationMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "NavigationMenuLink"
                                              ],
                                              {
                                                asChild: true,
                                                "data-active": pathname === "/about" ? true : null,
                                                className: (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "navigationMenuTriggerStyle"
                                                ])(),
                                                children: /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "default"
                                                  ],
                                                  {
                                                    href: "/about",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__[
                                                          "BookOpenIcon"
                                                        ],
                                                        {
                                                          className: "mr-2 h-4 w-4",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                          lineNumber: 93,
                                                          columnNumber: 25,
                                                        },
                                                        this,
                                                      ),
                                                      "About",
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 23,
                                                  },
                                                  this,
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                lineNumber: 87,
                                                columnNumber: 21,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                      lineNumber: 48,
                                      columnNumber: 17,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                  lineNumber: 47,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                              lineNumber: 46,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "hidden flex-1 items-center justify-end lg:flex",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "Button"
                                ],
                                {
                                  variant: "primary",
                                  asChild: true,
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "default"
                                    ],
                                    {
                                      href: "/search",
                                      children: [
                                        "Find a Provider ",
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__[
                                            "ArrowRightIcon"
                                          ],
                                          {
                                            className: "ml-2 h-3 w-3",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                            lineNumber: 104,
                                            columnNumber: 35,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                      lineNumber: 103,
                                      columnNumber: 17,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                  lineNumber: 102,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                              lineNumber: 101,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "-mr-2 flex items-center lg:hidden",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "DrawerTrigger"
                                ],
                                {
                                  asChild: true,
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "Button"
                                    ],
                                    {
                                      variant: "text-dark",
                                      size: "text",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className: "sr-only",
                                            children: "Open main menu",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__[
                                            "Bars3Icon"
                                          ],
                                          {
                                            className: "block h-6 w-6",
                                            "aria-hidden": "true",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                      lineNumber: 111,
                                      columnNumber: 17,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                  lineNumber: 110,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                              lineNumber: 108,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                    lineNumber: 32,
                    columnNumber: 9,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "DrawerContent"
                  ],
                  {
                    variant: "top",
                    className: "focus-ring-none",
                    "aria-describedby": undefined,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "DrawerTitle"
                        ],
                        {
                          className: "sr-only",
                          children: "Main Menu",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                          lineNumber: 122,
                          columnNumber: 11,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "px-4 pb-5",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "flex items-center justify-between py-5",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "default"
                                    ],
                                    {
                                      href: "/",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          src: "/logo.svg",
                                          alt: "Logo",
                                          height: 40,
                                          width: 59,
                                          className: "h-10 w-auto",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                          lineNumber: 126,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                      lineNumber: 125,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "DrawerClose"
                                    ],
                                    {
                                      asChild: true,
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "Button"
                                        ],
                                        {
                                          variant: "text-dark",
                                          size: "text",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__[
                                              "XMarkIcon"
                                            ],
                                            {
                                              className: "h-6 w-6",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                              lineNumber: 130,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                          lineNumber: 129,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                      lineNumber: 128,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                lineNumber: 124,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "NavigationMenu"
                              ],
                              {
                                orientation: "vertical",
                                className: "max-w-full flex-col items-stretch",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "NavigationMenuList"
                                  ],
                                  {
                                    className: "flex-col items-stretch",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "NavigationMenuItem"
                                        ],
                                        {
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "NavigationMenuLink"
                                            ],
                                            {
                                              asChild: true,
                                              "data-active": pathname === "/" ? true : null,
                                              className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigationMenuTriggerStyle"])()} w-max-w w-full`,
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "default"
                                                ],
                                                {
                                                  href: "/",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__[
                                                        "HomeIcon"
                                                      ],
                                                      {
                                                        className: "mr-2 h-4 w-4",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 23,
                                                      },
                                                      this,
                                                    ),
                                                    "Home",
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                  lineNumber: 143,
                                                  columnNumber: 21,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                              lineNumber: 138,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                          lineNumber: 136,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "NavigationMenuItem"
                                        ],
                                        {
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "NavigationMenuLink"
                                            ],
                                            {
                                              asChild: true,
                                              "data-active": pathname === "/search" ? true : null,
                                              className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigationMenuTriggerStyle"])()} w-max-w w-full`,
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "default"
                                                ],
                                                {
                                                  href: "/search",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__[
                                                        "MagnifyingGlassIcon"
                                                      ],
                                                      {
                                                        className: "mr-2 h-4 w-4",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 23,
                                                      },
                                                      this,
                                                    ),
                                                    "Search",
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                  lineNumber: 156,
                                                  columnNumber: 21,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                              lineNumber: 151,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                          lineNumber: 149,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "NavigationMenuItem"
                                        ],
                                        {
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "NavigationMenuLink"
                                            ],
                                            {
                                              asChild: true,
                                              "data-active": pathname === "/about" ? true : null,
                                              className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigationMenuTriggerStyle"])()} w-max-w w-full`,
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "default"
                                                ],
                                                {
                                                  href: "/about",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__[
                                                        "BookOpenIcon"
                                                      ],
                                                      {
                                                        className: "mr-2 h-4 w-4",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23,
                                                      },
                                                      this,
                                                    ),
                                                    "About",
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                                  lineNumber: 169,
                                                  columnNumber: 21,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                              lineNumber: 164,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                          lineNumber: 162,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                lineNumber: 134,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                variant: "primary",
                                asChild: true,
                                className: "mt-6 w-full",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "default"
                                  ],
                                  {
                                    href: "/search",
                                    children: [
                                      "Find a Provider ",
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__[
                                          "ArrowRightIcon"
                                        ],
                                        {
                                          className: "ml-2 h-3 w-3",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                          lineNumber: 179,
                                          columnNumber: 33,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                                lineNumber: 177,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                          lineNumber: 123,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
                    lineNumber: 121,
                    columnNumber: 9,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/Header.tsx",
          lineNumber: 30,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/in-need-of-time/frontend/components/ui/tooltip.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Tooltip",
      () => Tooltip,
      "TooltipContent",
      () => TooltipContent,
      "TooltipProvider",
      () => TooltipProvider,
      "TooltipTrigger",
      () => TooltipTrigger,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/utils.ts [app-ssr] (ecmascript)");
    ("use client");
    const TooltipProvider =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Provider"
      ];
    const Tooltip =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Root"
      ];
    const TooltipTrigger =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Trigger"
      ];
    const TooltipContent =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, sideOffset = 4, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Content"
          ],
          {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])(
              "z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
              className,
            ),
            ...props,
          },
          void 0,
          false,
          {
            fileName: "[project]/in-need-of-time/frontend/components/ui/tooltip.tsx",
            lineNumber: 18,
            columnNumber: 3,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      );
    TooltipContent.displayName =
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Content"
      ].displayName;
  },
  "[project]/in-need-of-time/frontend/components/ui/sonner.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["Toaster", () => Toaster]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
    ("use client");
    const Toaster = ({ ...props }) => {
      const { theme = "system" } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useTheme"
      ])();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Toaster"
        ],
        {
          theme: theme,
          className: "toaster group",
          toastOptions: {
            classNames: {
              toast:
                "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-50 dark:group-[.toaster]:border-slate-800",
              description: "group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400",
              actionButton:
                "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900",
              cancelButton:
                "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400",
            },
          },
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/ui/sonner.tsx",
          lineNumber: 12,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1de91f24._.js.map
