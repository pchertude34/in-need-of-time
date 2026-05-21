import type { FreshnessInput, FreshnessJob } from "../types/freshness";

const FRESHNESS_API_BASE_URL = (process.env.SANITY_APP_FRESHNESS_API_BASE_URL || "http://localhost:3001").replace(
  /\/$/,
  "",
);

export type FreshnessApiFieldErrors = Partial<Record<"thresholdDays" | "limit", string>>;

export class FreshnessApiError extends Error {
  fieldErrors?: FreshnessApiFieldErrors;

  constructor(message: string, fieldErrors?: FreshnessApiFieldErrors) {
    super(message);
    this.name = "FreshnessApiError";
    this.fieldErrors = fieldErrors;
  }
}

async function readFreshnessError(response: Response, fallbackMessage: string): Promise<never> {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const payload = (await response.json()) as {
      message?: string;
      error?: string;
      fieldErrors?: FreshnessApiFieldErrors;
    };

    throw new FreshnessApiError(payload.message || payload.error || fallbackMessage, payload.fieldErrors);
  }

  const errorText = await response.text();
  throw new FreshnessApiError(errorText || fallbackMessage);
}

export async function startFreshnessJob(input: FreshnessInput): Promise<FreshnessJob> {
  const response = await fetch(`${FRESHNESS_API_BASE_URL}/freshness/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    await readFreshnessError(response, "Failed to start freshness job.");
  }

  return response.json();
}

export async function getFreshnessJob(jobId: string): Promise<FreshnessJob> {
  const response = await fetch(`${FRESHNESS_API_BASE_URL}/freshness/jobs/${jobId}`);

  if (!response.ok) {
    await readFreshnessError(response, "Failed to fetch freshness job.");
  }

  return response.json();
}

export async function approveFreshnessJob(jobId: string, reviewer: string, providerId: string): Promise<FreshnessJob> {
  const response = await fetch(`${FRESHNESS_API_BASE_URL}/freshness/jobs/${jobId}/approve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reviewer, providerId }),
  });

  if (!response.ok) {
    await readFreshnessError(response, "Failed to approve freshness job.");
  }

  return response.json();
}

export async function denyFreshnessJob(jobId: string, reviewer: string, providerId: string): Promise<FreshnessJob> {
  const response = await fetch(`${FRESHNESS_API_BASE_URL}/freshness/jobs/${jobId}/deny`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reviewer, providerId }),
  });

  if (!response.ok) {
    await readFreshnessError(response, "Failed to deny freshness job.");
  }

  return response.json();
}
