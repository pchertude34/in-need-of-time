export const OPENAI_API_KEY = assertValue(process.env.OPENAI_API_KEY, "Missing environment variable: OPENAI_API_KEY");

export const FIRECRAWL_API_KEY = assertValue(
  process.env.FIRECRAWL_API_KEY,
  "Missing environment variable: FIRECRAWL_API_KEY",
);

export const AGENT_API_KEY = assertValue(
  process.env.NEXT_PUBLIC_LOCAL_API_KEY,
  "Missing environment variable: NEXT_PUBLIC_LOCAL_API_KEY",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
