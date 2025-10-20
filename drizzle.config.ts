import { defineConfig } from "drizzle-kit";
import { resolve } from "path";
import dotenv from "dotenv";

const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  dotenv.config({ path: resolve(__dirname, ".env.local") });
  console.log("Loaded .env.local for development");
} else {
  dotenv.config({ path: resolve(__dirname, ".env") });
  console.log("Loaded .env for production");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
