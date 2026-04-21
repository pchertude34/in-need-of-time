import { drizzle } from "drizzle-orm/neon-http";
import { drizzle as drizzlePg } from "drizzle-orm/postgres-js";
import { neon } from "@neondatabase/serverless";
import postgres from "postgres";
import { DATABASE_URL, IS_DEVELOPMENT } from "./env";

const isLocal = IS_DEVELOPMENT;

let db: ReturnType<typeof drizzlePg> | ReturnType<typeof drizzle>;

if (isLocal) {
  const queryClient = postgres(DATABASE_URL);
  db = drizzlePg(queryClient);
} else {
  const sql = neon(DATABASE_URL);
  db = drizzle({ client: sql });
}

export { db };
