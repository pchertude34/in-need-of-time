module.exports = [
  "[project]/in-need-of-time/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js [app-rsc] (ecmascript, async loader)",
  (__turbopack_context__) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        ["server/chunks/ssr/433da_@sanity_client_dist__chunks-es_stegaEncodeSourceMap_2b748e08.js"].map((chunk) =>
          __turbopack_context__.l(chunk),
        ),
      ).then(() => {
        return parentImport(
          "[project]/in-need-of-time/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js [app-rsc] (ecmascript)",
        );
      });
    });
  },
  "[project]/in-need-of-time/node_modules/@sanity/eventsource/node.js [app-rsc] (ecmascript, async loader)",
  (__turbopack_context__) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        ["server/chunks/ssr/[root-of-the-server]__286d7c0d._.js"].map((chunk) => __turbopack_context__.l(chunk)),
      ).then(() => {
        return parentImport(
          "[project]/in-need-of-time/node_modules/@sanity/eventsource/node.js [app-rsc] (ecmascript)",
        );
      });
    });
  },
];
