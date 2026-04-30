import type { PipelineInput, PipelineJob } from "../types/pipeline";

const API_BASE_URL = "http://localhost:3000";

export async function startPipelineJob(input: PipelineInput): Promise<PipelineJob> {
  const response = await fetch(`${API_BASE_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to start pipeline job: ${errorText}`);
  }

  return response.json();
}

export async function getPipelineJob(jobId: string): Promise<PipelineJob> {
  const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch pipeline job: ${errorText}`);
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
    const errorText = await response.text();
    throw new Error(`Failed to approve pipeline job: ${errorText}`);
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
    const errorText = await response.text();
    throw new Error(`Failed to deny pipeline job: ${errorText}`);
  }

  return response.json();
}
