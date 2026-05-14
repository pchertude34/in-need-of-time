export type JobStatus = "queued" | "running" | "ready_for_review" | "approved" | "denied" | "failed";

export type PipelineInput = {
  city: string;
  state: string;
  category: string;
  perQuery?: number;
  maxUrls?: number;
  existingProviders?: Array<{
    website?: string;
    placeId?: string;
    name?: string;
    address?: string;
  }>;
};

export type DuplicateSkipReason =
  | "existing_sanity_provider"
  | "previous_job_running"
  | "previous_job_ready_for_review"
  | "previous_job_approved"
  | "previous_job_denied"
  | "duplicate_within_job"
  | "invalid_url";

export type SkippedUrlRecord = {
  query: string;
  url: string;
  normalized_url: string | null;
  reason: DuplicateSkipReason;
  source:
    | {
        type: "sanity_provider";
        provider: {
          website?: string;
          placeId?: string;
          name?: string;
          address?: string;
        };
      }
    | {
        type: "previous_job";
        jobId: string;
        jobStatus: "running" | "ready_for_review" | "approved" | "denied";
        matchedUrl: string;
      }
    | {
        type: "current_run";
        matchedQuery: string;
        matchedUrl: string;
      }
    | {
        type: "validation";
      };
};

export type SanityBlock = {
  _type: "block";
  _key?: string;
  children: Array<{
    _type: "span";
    _key?: string;
    text: string;
    marks?: string[];
  }>;
  markDefs: Array<Record<string, unknown>>;
  style: "normal";
};

export type HoursPeriod = {
  open: {
    day: number;
    time: string;
  };
  close: {
    day: number;
    time: string;
  };
};

export type HoursOfOperation = {
  periods: HoursPeriod[];
  weekdayText: string[];
};

export type SanityProviderCandidate = {
  name: string;
  description: SanityBlock[];
  address: string;
  location: {
    latitude: number | null;
    longitude: number | null;
  };
  serviceTypes: Array<{
    _id: string;
  }>;
  hoursOfOperation: HoursOfOperation;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
};

export type PipelineOutput = {
  city: string;
  state: string;
  category: string;
  generated_at: string;
  query_file: string;
  queries: string[];
  search: Array<{
    query: string;
    urls: string[];
  }>;
  urls: string[];
  scraped: Array<{
    url: string;
    result: unknown;
  }>;
  skipped_urls: SkippedUrlRecord[];
  duplicate_summary: Record<DuplicateSkipReason, number>;
  directory_expansion: Array<{
    listing_url: string;
    discovered_count: number;
    selected_count: number;
    skipped_count: number;
    truncated: boolean;
    truncation_reason: string;
  }>;
  sanity: SanityProviderCandidate[];
  sanity_file: string;
  extracted: Array<{
    url: string;
    result: SanityProviderCandidate;
    method: "agent" | "fallback";
  }>;
};

export type PipelineJob = {
  id: string;
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
  input: PipelineInput;
  output?: PipelineOutput;
  outputFile?: string;
  sanityFile?: string;
  error?: string;
  approvedAt?: string;
  deniedAt?: string;
  reviewer?: string;
  sanityDocumentIds?: string[];
};
