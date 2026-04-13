import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "./src/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
