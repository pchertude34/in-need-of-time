export const OPENAI_API_KEY = requireEnv("OPENAI_API_KEY");
export const FIRECRAWL_API_KEY = requireEnv("FIRECRAWL_API_KEY");

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}
