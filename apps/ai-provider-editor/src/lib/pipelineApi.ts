import type { PipelineInput, PipelineJob } from "../types/pipeline";

const API_BASE_URL = "http://localhost:3000";

export type PipelineApiFieldErrors = Partial<Record<"city" | "state" | "category" | "perQuery" | "maxUrls", string>>;

export class PipelineApiError extends Error {
  fieldErrors?: PipelineApiFieldErrors;

  constructor(message: string, fieldErrors?: PipelineApiFieldErrors) {
    super(message);
    this.name = "PipelineApiError";
    this.fieldErrors = fieldErrors;
  }
}

async function readPipelineError(response: Response, fallbackMessage: string): Promise<never> {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const payload = (await response.json()) as {
      message?: string;
      error?: string;
      fieldErrors?: PipelineApiFieldErrors;
    };

    throw new PipelineApiError(payload.message || payload.error || fallbackMessage, payload.fieldErrors);
  }

  const errorText = await response.text();
  throw new PipelineApiError(errorText || fallbackMessage);
}

export async function startPipelineJob(input: PipelineInput): Promise<PipelineJob> {
  const response = await fetch(`${API_BASE_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    await readPipelineError(response, "Failed to start pipeline job.");
  }

  return response.json();
}

export async function getPipelineJob(jobId: string): Promise<PipelineJob> {
  const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`);

  if (!response.ok) {
    await readPipelineError(response, "Failed to fetch pipeline job.");
  }

  return response.json();
}

export async function approvePipelineJob(jobId: string, reviewer: string): Promise<PipelineJob> {
  const response = await fetch(`${API_BASE_URL}/jobs/${jobId}/approve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reviewer }),
  });

  if (!response.ok) {
    await readPipelineError(response, "Failed to approve pipeline job.");
  }

  return response.json();
}

export async function denyPipelineJob(jobId: string, reviewer: string): Promise<PipelineJob> {
  const response = await fetch(`${API_BASE_URL}/jobs/${jobId}/deny`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reviewer }),
  });

  if (!response.ok) {
    await readPipelineError(response, "Failed to deny pipeline job.");
  }

  return response.json();
}
