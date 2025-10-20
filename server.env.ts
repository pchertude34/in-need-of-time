export const DATABASE_URL = assertValue(process.env.DATABASE_URL, "Missing environment variable: DATABASE_URL");

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
