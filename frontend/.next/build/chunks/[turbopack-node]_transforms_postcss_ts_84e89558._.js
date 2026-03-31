module.exports = [
  '[turbopack-node]/transforms/postcss.ts { CONFIG => "[project]/in-need-of-time/postcss.config.js_.loader.mjs [postcss] (ecmascript)" } [postcss] (ecmascript, async loader)',
  (__turbopack_context__) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        ["chunks/433da_64bb916a._.js", "chunks/[root-of-the-server]__9b507fe0._.js"].map((chunk) =>
          __turbopack_context__.l(chunk),
        ),
      ).then(() => {
        return parentImport(
          '[turbopack-node]/transforms/postcss.ts { CONFIG => "[project]/in-need-of-time/postcss.config.js_.loader.mjs [postcss] (ecmascript)" } [postcss] (ecmascript)',
        );
      });
    });
  },
];
