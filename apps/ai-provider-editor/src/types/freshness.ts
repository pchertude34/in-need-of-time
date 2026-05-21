import type { SanityProviderCandidate } from "./pipeline";

export type FreshnessJobStatus =
  | "queued"
  | "running"
  | "ready_for_review"
  | "completed"
  | "approved"
  | "denied"
  | "failed";

export type FreshnessStatus = "current" | "needs_review" | "failed" | "skipped";

export type FreshnessInput = {
  thresholdDays: number;
  limit: number;
};

export type FreshnessDiagnostics = {
  sourceUrl: string;
  finalUrl?: string;
  fetchedAt?: string;
  scraperStatus?: number;
  scraperProvider?: string;
  method?: "agent" | "fallback" | "agent_with_fallback";
  summary?: unknown;
};

export type FreshnessReviewCandidate = {
  providerId: string;
  providerTitle: string;
  original: SanityProviderCandidate;
  candidate: SanityProviderCandidate;
  changedFields: string[];
  reviewReason: "changed" | "uncertain" | "source_redirected";
  diagnostics: FreshnessDiagnostics;
};

export type FreshnessCheckedProvider = {
  providerId: string;
  providerTitle: string;
  status: FreshnessStatus;
  summary: string;
  changedFields: string[];
  diagnostics?: FreshnessDiagnostics;
};

export type FreshnessRunOutput = {
  generated_at: string;
  thresholdDays: number;
  cutoff: string;
  selectedCount: number;
  summary: {
    checked: number;
    current: number;
    needs_review: number;
    failed: number;
    skipped: number;
  };
  checked: FreshnessCheckedProvider[];
  reviewCandidates: FreshnessReviewCandidate[];
};

export type FreshnessJob = {
  id: string;
  status: FreshnessJobStatus;
  createdAt: string;
  updatedAt: string;
  input: FreshnessInput;
  output?: FreshnessRunOutput;
  error?: string;
  failedAt?: string;
  approvedAt?: string;
  deniedAt?: string;
  reviewer?: string;
};
