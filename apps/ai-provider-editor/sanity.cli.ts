import tailwindcss from "@tailwindcss/vite";
import { defineCliConfig } from "sanity/cli";

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
