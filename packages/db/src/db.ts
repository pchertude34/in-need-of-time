import { drizzle } from "drizzle-orm/neon-http";
import { drizzle as drizzlePg } from "drizzle-orm/postgres-js";
import { neon } from "@neondatabase/serverless";
import postgres from "postgres";

const DATABASE_URL = assertValue(process.env.DATABASE_URL, "Missing environment variable: DATABASE_URL");

const isLocal = process.env.NODE_ENV === "development";

let db: ReturnType<typeof drizzlePg> | ReturnType<typeof drizzle>;

if (isLocal) {
  const queryClient = postgres(DATABASE_URL);
  db = drizzlePg(queryClient);
} else {
  const sql = neon(DATABASE_URL);
  db = drizzle({ client: sql });
}

export { db };

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
