import { defineCliConfig } from "sanity/cli";
import tailwindcss from "@tailwindcss/vite";
// import { SANITY_APP_ORGANIZATION_ID } from './env';

export default defineCliConfig({
  app: {
    organizationId: "ogs95D1E1",
    entry: "./src/App.tsx",
  },
  vite: (config) => ({
    ...config,
    plugins: [...(config.plugins ?? []), tailwindcss()],
  }),
});
