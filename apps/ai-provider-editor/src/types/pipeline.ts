export type JobStatus = "queued" | "running" | "ready_for_review" | "approved" | "denied" | "failed";

export type PipelineInput = {
  city: string;
  state: string;
  category: string;
  perQuery?: number;
  maxUrls?: number;
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
