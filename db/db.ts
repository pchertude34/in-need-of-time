// src/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import { drizzle as drizzlePg } from "drizzle-orm/postgres-js";
import { neon } from "@neondatabase/serverless";
import postgres from "postgres";
import { DATABASE_URL } from "@/server.env";

// config({ path: ".env.local" }); // or .env.local
const isLocal = process.env.NODE_ENV === "development";

let db: any;

// We need to use different clients for local and production Neon databases
// since the local neon database is acts more like a standard Postgres database
// so it requires the postgres connector.
if (isLocal) {
  const queryClient = postgres(DATABASE_URL!);
  db = drizzlePg(queryClient);
} else {
  const sql = neon(DATABASE_URL!);
  db = drizzle({ client: sql });
}

export { db };
