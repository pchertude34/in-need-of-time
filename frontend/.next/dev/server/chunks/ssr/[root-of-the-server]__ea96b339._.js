module.exports = [
  '[project]/in-need-of-time/frontend/app/favicon.ico.mjs { IMAGE => "[project]/in-need-of-time/frontend/app/favicon.ico (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/in-need-of-time/frontend/app/favicon.ico.mjs { IMAGE => "[project]/in-need-of-time/frontend/app/favicon.ico (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript)',
      ),
    );
  },
  "[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );

    module.exports = mod;
  },
  "[project]/in-need-of-time/frontend/app/(client)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)",
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i("[project]/in-need-of-time/frontend/app/(client)/layout.tsx [app-rsc] (ecmascript)"),
    );
  },
  "[project]/in-need-of-time/frontend/components/ui/button.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["Button", () => Button, "buttonVariants", () => buttonVariants]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/utils.ts [app-rsc] (ecmascript)");
    const buttonVariants = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
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
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ](({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
        const Comp = asChild
          ? __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "Slot"
            ]
          : "button";
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          Comp,
          {
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
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
  "[project]/in-need-of-time/frontend/components/Footer.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["Footer", () => Footer]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/node_modules/next/image.js [app-rsc] (ecmascript)");
    function Footer() {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "container flex flex-col gap-8 px-6 py-8 md:flex-row md:p-16",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "flex flex-1 flex-col space-y-4 text-sm text-slate-900",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className: "w-24",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          href: "/",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              src: "/logo.svg",
                              alt: "In Time of Need",
                              height: 68,
                              width: 96,
                              className: "h-auto",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                              lineNumber: 11,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                          lineNumber: 10,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                      lineNumber: 9,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "p",
                    {
                      children: "© 2024 In Time of Need",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                      lineNumber: 14,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "p",
                    {
                      children: "Privacy Policy / Cookie Policy",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                      lineNumber: 15,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                lineNumber: 8,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "flex flex-1 justify-between md:ml-auto",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "flex flex-col",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "mb-4 text-sm font-bold uppercase text-slate-900",
                            children: "Main Menu",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "flex flex-col space-y-2 text-sm text-slate-500",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: "/",
                                  children: "Home",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                                  lineNumber: 21,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: "/search",
                                  children: "Provider Search",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                                  lineNumber: 22,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: "/about",
                                  children: "About",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                                  lineNumber: 23,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                            lineNumber: 20,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                      lineNumber: 18,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "mb-4 text-sm font-bold uppercase text-slate-900",
                            children: "Contact Us",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: " flex flex-col space-y-2 text-sm text-slate-900",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: "tel:+1234567890",
                                  children: "+1 (123) 456-7890",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                                  lineNumber: 29,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: "mailto:email@domain.com",
                                  children: "email@domain.com",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                                  lineNumber: 30,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                            lineNumber: 28,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                      lineNumber: 26,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
                lineNumber: 17,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/in-need-of-time/frontend/components/Footer.tsx",
          lineNumber: 7,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/in-need-of-time/frontend/components/ServiceCategoryCard.tsx [app-rsc] (client reference proxy) <module evaluation>",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["ServiceCategoryCard", () => ServiceCategoryCard]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)",
      );
    const ServiceCategoryCard = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call ServiceCategoryCard() from the server but ServiceCategoryCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ServiceCategoryCard.tsx <module evaluation>",
      "ServiceCategoryCard",
    );
  },
  "[project]/in-need-of-time/frontend/components/ServiceCategoryCard.tsx [app-rsc] (client reference proxy)",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["ServiceCategoryCard", () => ServiceCategoryCard]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)",
      );
    const ServiceCategoryCard = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call ServiceCategoryCard() from the server but ServiceCategoryCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ServiceCategoryCard.tsx",
      "ServiceCategoryCard",
    );
  },
  "[project]/in-need-of-time/frontend/components/ServiceCategoryCard.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceCategoryCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ServiceCategoryCard.tsx [app-rsc] (client reference proxy) <module evaluation>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceCategoryCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ServiceCategoryCard.tsx [app-rsc] (client reference proxy)",
      );
    __turbopack_context__.n(
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceCategoryCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__,
    );
  },
  "[project]/in-need-of-time/frontend/components/ServiceSearchBar.tsx [app-rsc] (client reference proxy) <module evaluation>",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["ServiceSearchBar", () => ServiceSearchBar]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)",
      );
    const ServiceSearchBar = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call ServiceSearchBar() from the server but ServiceSearchBar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ServiceSearchBar.tsx <module evaluation>",
      "ServiceSearchBar",
    );
  },
  "[project]/in-need-of-time/frontend/components/ServiceSearchBar.tsx [app-rsc] (client reference proxy)",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["ServiceSearchBar", () => ServiceSearchBar]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)",
      );
    const ServiceSearchBar = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call ServiceSearchBar() from the server but ServiceSearchBar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ServiceSearchBar.tsx",
      "ServiceSearchBar",
    );
  },
  "[project]/in-need-of-time/frontend/components/ServiceSearchBar.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceSearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ServiceSearchBar.tsx [app-rsc] (client reference proxy) <module evaluation>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceSearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ServiceSearchBar.tsx [app-rsc] (client reference proxy)",
      );
    __turbopack_context__.n(
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceSearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__,
    );
  },
  "[project]/in-need-of-time/frontend/components/ui/input-group.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "InputGroup",
      () => InputGroup,
      "InputLeftElement",
      () => InputLeftElement,
      "InputRightElement",
      () => InputRightElement,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/utils.ts [app-rsc] (ecmascript)");
    function InputGroup(props) {
      const { children, className } = props;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "cn"
          ])("relative", className),
          children: children,
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/ui/input-group.tsx",
          lineNumber: 12,
          columnNumber: 10,
        },
        this,
      );
    }
    function InputLeftElement(props) {
      const { isButton = false, children, className } = props;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "absolute inset-y-0 left-0 flex items-center pl-3",
            {
              "pointer-events-auto": isButton,
              "pointer-events-none": !isButton,
            },
            className,
          ),
          children: children,
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/ui/input-group.tsx",
          lineNumber: 24,
          columnNumber: 5,
        },
        this,
      );
    }
    function InputRightElement(props) {
      const { isButton = true, children, className } = props;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "absolute inset-y-0 right-0 flex items-center pr-3",
            {
              "pointer-events-auto": isButton,
              "pointer-events-none": !isButton,
            },
            className,
          ),
          children: children,
        },
        void 0,
        false,
        {
          fileName: "[project]/in-need-of-time/frontend/components/ui/input-group.tsx",
          lineNumber: 47,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["ServiceSearchTriggerButton", () => ServiceSearchTriggerButton]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-rsc] (ecmascript) <export default as ArrowRightIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-rsc] (ecmascript) <export default as MagnifyingGlassIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ui/input-group.tsx [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/utils.ts [app-rsc] (ecmascript)");
    function ServiceSearchTriggerButton(props) {
      const { className } = props;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "InputGroup"
        ],
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "cn"
          ])("cursor-pointer", className),
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                "InputLeftElement"
              ],
              {
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__[
                    "MagnifyingGlassIcon"
                  ],
                  {
                    className: "h-5 w-5 text-slate-500 hover:text-slate-600 focus:text-slate-700",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx",
                    lineNumber: 15,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx",
                lineNumber: 14,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "button",
              {
                className: "focus-ring-primary flex w-full items-center rounded-full px-10 py-3 text-slate-500",
                children: "Find a Provider",
              },
              void 0,
              false,
              {
                fileName: "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx",
                lineNumber: 17,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                "InputRightElement"
              ],
              {
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "span",
                  {
                    className: "hover:bg-priamry-600 ml-auto rounded-full bg-primary-500 p-3 focus:bg-primary-700",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__[
                        "ArrowRightIcon"
                      ],
                      {
                        className: "  h-5 w-5 text-white",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx",
                        lineNumber: 22,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx",
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx",
                lineNumber: 20,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx",
          lineNumber: 13,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/in-need-of-time/frontend/components/ui/drawer.tsx [app-rsc] (client reference proxy) <module evaluation>",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
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
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)",
      );
    const Drawer = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call Drawer() from the server but Drawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "Drawer",
    );
    const DrawerClose = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerClose() from the server but DrawerClose is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerClose",
    );
    const DrawerContent = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerContent() from the server but DrawerContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerContent",
    );
    const DrawerDescription = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerDescription() from the server but DrawerDescription is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerDescription",
    );
    const DrawerFooter = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerFooter() from the server but DrawerFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerFooter",
    );
    const DrawerHeader = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerHeader() from the server but DrawerHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerHeader",
    );
    const DrawerOverlay = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerOverlay() from the server but DrawerOverlay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerOverlay",
    );
    const DrawerPortal = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerPortal() from the server but DrawerPortal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerPortal",
    );
    const DrawerTitle = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerTitle() from the server but DrawerTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerTitle",
    );
    const DrawerTrigger = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerTrigger() from the server but DrawerTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx <module evaluation>",
      "DrawerTrigger",
    );
  },
  "[project]/in-need-of-time/frontend/components/ui/drawer.tsx [app-rsc] (client reference proxy)",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
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
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)",
      );
    const Drawer = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call Drawer() from the server but Drawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "Drawer",
    );
    const DrawerClose = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerClose() from the server but DrawerClose is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerClose",
    );
    const DrawerContent = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerContent() from the server but DrawerContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerContent",
    );
    const DrawerDescription = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerDescription() from the server but DrawerDescription is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerDescription",
    );
    const DrawerFooter = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerFooter() from the server but DrawerFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerFooter",
    );
    const DrawerHeader = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerHeader() from the server but DrawerHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerHeader",
    );
    const DrawerOverlay = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerOverlay() from the server but DrawerOverlay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerOverlay",
    );
    const DrawerPortal = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerPortal() from the server but DrawerPortal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerPortal",
    );
    const DrawerTitle = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerTitle() from the server but DrawerTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerTitle",
    );
    const DrawerTrigger = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call DrawerTrigger() from the server but DrawerTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/in-need-of-time/frontend/components/ui/drawer.tsx",
      "DrawerTrigger",
    );
  },
  "[project]/in-need-of-time/frontend/components/ui/drawer.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ui/drawer.tsx [app-rsc] (client reference proxy) <module evaluation>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ui/drawer.tsx [app-rsc] (client reference proxy)",
      );
    __turbopack_context__.n(
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__,
    );
  },
  "[externals]/crypto [external] (crypto, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("crypto", () => require("crypto"));

    module.exports = mod;
  },
  "[project]/in-need-of-time/env.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "NEXT_PUBLIC_GOOGLE_API_KEY",
      () => NEXT_PUBLIC_GOOGLE_API_KEY,
      "NEXT_PUBLIC_GOOGLE_MAPS_ID",
      () => NEXT_PUBLIC_GOOGLE_MAPS_ID,
      "NEXT_PUBLIC_LOCAL_API_KEY",
      () => NEXT_PUBLIC_LOCAL_API_KEY,
      "NEXT_PUBLIC_SANITY_API_VERSION",
      () => NEXT_PUBLIC_SANITY_API_VERSION,
      "NEXT_PUBLIC_SANITY_DATASET",
      () => NEXT_PUBLIC_SANITY_DATASET,
      "NEXT_PUBLIC_SANITY_PROJECT_ID",
      () => NEXT_PUBLIC_SANITY_PROJECT_ID,
      "useCdn",
      () => useCdn,
    ]);
    const NEXT_PUBLIC_SANITY_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-09";
    const NEXT_PUBLIC_SANITY_DATASET = assertValue(
      process.env.NEXT_PUBLIC_SANITY_DATASET,
      "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
    );
    const NEXT_PUBLIC_SANITY_PROJECT_ID = assertValue(
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
    );
    const NEXT_PUBLIC_GOOGLE_API_KEY = assertValue(
      process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      "Missing environment variable: NEXT_PUBLIC_GOOGLE_API_KEY",
    );
    const NEXT_PUBLIC_GOOGLE_MAPS_ID = assertValue(
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
      "Missing environment variable: NEXT_PUBLIC_GOOGLE_MAPS_ID",
    );
    const NEXT_PUBLIC_LOCAL_API_KEY = assertValue(
      process.env.NEXT_PUBLIC_LOCAL_API_KEY,
      "Missing environment variable: NEXT_PUBLIC_LOCAL_API_KEY",
    );
    const useCdn = false;
    function assertValue(v, errorMessage) {
      if (v === undefined) {
        throw new Error(errorMessage);
      }
      return v;
    }
  },
  "[project]/in-need-of-time/sanity/lib/client.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["client", () => client]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/env.ts [app-rsc] (ecmascript)");
    const client = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      "createClient"
    ])({
      apiVersion:
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "NEXT_PUBLIC_SANITY_API_VERSION"
        ],
      dataset:
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "NEXT_PUBLIC_SANITY_DATASET"
        ],
      projectId:
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "NEXT_PUBLIC_SANITY_PROJECT_ID"
        ],
      useCdn:
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "useCdn"
        ],
    });
  },
  "[project]/in-need-of-time/lib/queries/getServiceTypes.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "queryAllServiceTypes",
      () => queryAllServiceTypes,
      "queryAndFilterServiceTypesByCategory",
      () => queryAndFilterServiceTypesByCategory,
      "queryServiceTypesByCategory",
      () => queryServiceTypesByCategory,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/sanity/lib/client.ts [app-rsc] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/groq/lib/groq.js [app-rsc] (ecmascript) <export default as groq>",
      );
    function queryAllServiceTypes() {
      const query = __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__[
        "groq"
      ]`*[_type == "serviceType"] | order(lower(name) asc) {
    name, description, 'slug': slug.current
  }`;
      return __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "client"
      ].fetch(query);
    }
    function queryServiceTypesByCategory({ slug, sortBy = "name", sortDir = "asc" }) {
      const query = __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__[
        "groq"
      ]`*[_type == "serviceType" && $slug in serviceCategory[]->slug.current] | order(lower(${sortBy}) ${sortDir}) {
    name, description, 'slug': slug.current
  }`;
      return __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "client"
      ].fetch(query, {
        slug,
      });
    }
    function queryAndFilterServiceTypesByCategory(params) {
      const { categorySlug, filter: { lat, lng, radius } = {} } = params;
      let query;
      // If location is provided, only get the service types that have providers within the radius
      if (lat && lng && radius) {
        query = __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__[
          "groq"
        ]`*[_type == "serviceType" && $slug in serviceCategory[]->slug.current]{
      "providerCount": count(*[_type == "provider" && references(^._id) && geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng(${lat}, ${lng})) < ${radius} ]),
      name, 
      description, 
      'slug': slug.current
    }[providerCount > 0] | order(lower(name) asc)`;
      } else {
        // Mock provider count if no location is provided for consistency
        query = __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__[
          "groq"
        ]`*[_type == "serviceType" && $slug in serviceCategory[]->slug.current] | order(lower(name) asc) {
      name, 
      description, 
      'slug': slug.current,
      'providerCount': 0
    }`;
      }
      return __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "client"
      ].fetch(query, {
        slug: categorySlug,
      });
    }
  },
  "[project]/in-need-of-time/lib/queries/getServiceCategories.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "queryAllServiceCategories",
      () => queryAllServiceCategories,
      "queryServiceCategoriesBySlug",
      () => queryServiceCategoriesBySlug,
      "queryServiceCategoryBySlug",
      () => queryServiceCategoryBySlug,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/sanity/lib/client.ts [app-rsc] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/groq/lib/groq.js [app-rsc] (ecmascript) <export default as groq>",
      );
    function queryAllServiceCategories() {
      const query = __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__[
        "groq"
      ]`*[_type == "serviceCategory"]{
    title, description, 'imageUrl': icon.asset->url, 'slug': slug.current
  }`;
      return __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "client"
      ].fetch(query);
    }
    function queryServiceCategoriesBySlug(slugs) {
      const query = __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__[
        "groq"
      ]`*[_type == "serviceCategory" && slug.current in $slugs]{
    title, description, 'imageUrl': icon.asset->url, 'slug': slug.current
  }`;
      return __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "client"
      ].fetch(query, {
        slugs,
      });
    }
    function queryServiceCategoryBySlug(slug) {
      const query = __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__[
        "groq"
      ]`*[_type == "serviceCategory" && slug.current == $slug][0]{
    title, description, 'imageUrl': icon.asset->url, 'slug': slug.current
  }`;
      return __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "client"
      ].fetch(query, {
        slug,
      });
    }
  },
  "[project]/in-need-of-time/frontend/app/(client)/page.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Home]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-rsc] (ecmascript) <export default as ArrowRightIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-rsc] (ecmascript) <export default as XMarkIcon>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/frontend/components/ui/button.tsx [app-rsc] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/frontend/components/Footer.tsx [app-rsc] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceCategoryCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ServiceCategoryCard.tsx [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceSearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ServiceSearchBar.tsx [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceSearchTriggerButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/in-need-of-time/frontend/components/ServiceSearchTriggerButton.tsx [app-rsc] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/frontend/components/ui/drawer.tsx [app-rsc] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$queries$2f$getServiceTypes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/queries/getServiceTypes.ts [app-rsc] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$queries$2f$getServiceCategories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/in-need-of-time/lib/queries/getServiceCategories.ts [app-rsc] (ecmascript)");
    async function Home() {
      const serviceTypes = await (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$queries$2f$getServiceTypes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "queryAllServiceTypes"
      ])();
      const serviceCategories = await (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$lib$2f$queries$2f$getServiceCategories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "queryAllServiceCategories"
      ])();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "Fragment"
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "main",
              {
                className: "container",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "before mt-3 overflow-hidden rounded-3xl bg-hero-image bg-cover bg-center",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "h-[410px] w-full bg-primary-500/40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/30 to-black/50 sm:h-[486px]",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "p flex flex-col items-center justify-center pt-16 sm:pt-24 md:px-10 md:pt-32 lg:px-20 xl:px-60",
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className: "px-3 md:px-0",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h1",
                                            {
                                              className:
                                                "text-center text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl",
                                              children: [
                                                "Building a great community by helping each and everyone in service",
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "span",
                                                  {
                                                    className: "text-secondary-400",
                                                    children: ".",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 21,
                                                  },
                                                  this,
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                              lineNumber: 25,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              className: "mt-3 text-center text-white md:text-lg",
                                              children:
                                                "Our mission is to create a cohesive community by addressing the needs of every member through service and support.",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                              lineNumber: 29,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                        lineNumber: 24,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                lineNumber: 22,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                            lineNumber: 21,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "mx-auto w-[95%] -translate-y-[50%] rounded-full bg-white p-2 shadow-xl sm:p-4  lg:w-[85%] lg:p-8 xl:w-[75%]",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceSearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "ServiceSearchBar"
                                ],
                                {
                                  serviceTypes: serviceTypes,
                                  orientation: "horizontal",
                                  className: "hidden md:flex",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                  lineNumber: 40,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "Drawer"
                                ],
                                {
                                  shouldScaleBackground: false,
                                  direction: "top",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                        "DrawerTrigger"
                                      ],
                                      {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceSearchTriggerButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                            "ServiceSearchTriggerButton"
                                          ],
                                          {
                                            className: "block md:hidden",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                        "DrawerContent"
                                      ],
                                      {
                                        variant: "top",
                                        className: "focus-ring-none",
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "px-4 py-5",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className: "mb-6 flex justify-between align-middle",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "h4",
                                                      {
                                                        className: "text-lg font-bold text-slate-900",
                                                        children: "Find a Provider",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 21,
                                                      },
                                                      this,
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                        "DrawerClose"
                                                      ],
                                                      {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                            "Button"
                                                          ],
                                                          {
                                                            variant: "text-dark",
                                                            size: "text",
                                                            children: /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__[
                                                                "XMarkIcon"
                                                              ],
                                                              {
                                                                className: "h-4 w-4",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                                                lineNumber: 53,
                                                                columnNumber: 25,
                                                              },
                                                              this,
                                                            ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 23,
                                                          },
                                                          this,
                                                        ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 21,
                                                      },
                                                      this,
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                                  lineNumber: 49,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceSearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                  "ServiceSearchBar"
                                                ],
                                                {
                                                  serviceTypes: serviceTypes,
                                                  orientation: "vertical",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                                  lineNumber: 57,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                  lineNumber: 42,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                      lineNumber: 20,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "mb-12 text-center",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "h3",
                                {
                                  className: "mb-3 text-2xl font-bold text-slate-900",
                                  children: "Search by Category",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                  lineNumber: 66,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  className: "text-lg text-slate-600 ",
                                  children: "Select a provider type to start your narrowed search.",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                  lineNumber: 67,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "flex flex-wrap justify-center gap-3 md:gap-6",
                            children: serviceCategories.map((category) =>
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ServiceCategoryCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "ServiceCategoryCard"
                                ],
                                {
                                  title: category.title,
                                  description: category.description,
                                  icon: category.imageUrl,
                                  href: `/category/${category.slug}`,
                                },
                                category.slug,
                                false,
                                {
                                  fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                  lineNumber: 71,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                      lineNumber: 64,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "my-16 overflow-hidden rounded-3xl  bg-cta-image bg-[45%] md:my-32 ",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "flex h-[550px] w-full items-end justify-center bg-gradient-to-t from-primary-500/95 from-45% to-primary-500/10 to-100% p-6 md:h-[400px] md:items-center md:justify-start md:bg-gradient-to-r md:from-primary-500/85",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "max-w-[311px] md:ml-8 md:max-w-[346px]",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className: "text-4xl font-bold text-slate-900",
                                    children: [
                                      "Discover ",
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "span",
                                        {
                                          className: "text-white",
                                          children: "800+",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                          lineNumber: 86,
                                          columnNumber: 26,
                                        },
                                        this,
                                      ),
                                      " service providers",
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className: "mt-3 text-lg text-slate-900",
                                    children:
                                      "Search our wide selection of service providers to find the help you need.",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                    "Button"
                                  ],
                                  {
                                    className: "mt-6",
                                    variant: "light",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                        "default"
                                      ],
                                      {
                                        href: "/search",
                                        children: [
                                          "Find a Provider ",
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__[
                                              "ArrowRightIcon"
                                            ],
                                            {
                                              className: "ml-2 h-4 w-4",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                              lineNumber: 93,
                                              columnNumber: 35,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                              lineNumber: 84,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                          lineNumber: 83,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                      lineNumber: 82,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                lineNumber: 18,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$frontend$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                "Footer"
              ],
              {},
              void 0,
              false,
              {
                fileName: "[project]/in-need-of-time/frontend/app/(client)/page.tsx",
                lineNumber: 100,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
      );
    }
  },
  "[project]/in-need-of-time/frontend/app/(client)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)",
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i("[project]/in-need-of-time/frontend/app/(client)/page.tsx [app-rsc] (ecmascript)"),
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ea96b339._.js.map
