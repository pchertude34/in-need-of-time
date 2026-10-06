import { defineCliConfig } from "sanity/cli";
import tailwindcss from "@tailwindcss/vite";
// import { SANITY_APP_ORGANIZATION_ID } from './env';

export default defineCliConfig({
  app: {
    organizationId: "ogs95D1E1",
    entry: "./src/App.tsx",
  },
  // Off `sanity dev`'s default 3333, which the Studio keeps: the two dev servers
  // have to run side by side, since this app links into the Studio by URL.
  // Dev only — `sanity build` and `sanity deploy` don't read it.
  server: {
    port: 3334,
  },
  vite: (config) => ({
    ...config,
    plugins: [...(config.plugins ?? []), tailwindcss()],
  }),
});
