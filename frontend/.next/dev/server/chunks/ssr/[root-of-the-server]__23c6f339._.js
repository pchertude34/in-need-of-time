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
    (() => {
      const e = new Error("Cannot find module '@/frontend/components/ui/button'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    (() => {
      const e = new Error("Cannot find module '@/frontend/components/Footer'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    (() => {
      const e = new Error("Cannot find module '@/frontend/components/ServiceCategoryCard'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    (() => {
      const e = new Error("Cannot find module '@/frontend/components/ServiceSearchBar'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    (() => {
      const e = new Error("Cannot find module '@/frontend/components/ServiceSearchTriggerButton'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    (() => {
      const e = new Error("Cannot find module '@/frontend/components/ui/drawer'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    (() => {
      const e = new Error("Cannot find module '@/lib/queries/getServiceTypes'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    (() => {
      const e = new Error("Cannot find module '@/lib/queries/getServiceCategories'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    async function Home() {
      const serviceTypes = await queryAllServiceTypes();
      const serviceCategories = await queryAllServiceCategories();
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
                                ServiceSearchBar,
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
                                Drawer,
                                {
                                  shouldScaleBackground: false,
                                  direction: "top",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      DrawerTrigger,
                                      {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          ServiceSearchTriggerButton,
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
                                      DrawerContent,
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
                                                      DrawerClose,
                                                      {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$in$2d$need$2d$of$2d$time$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          Button,
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
                                                ServiceSearchBar,
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
                                ServiceCategoryCard,
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
                                  Button,
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
              Footer,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__23c6f339._.js.map
