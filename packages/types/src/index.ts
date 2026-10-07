import type { PortableTextBlock } from "@portabletext/types";

export type Location = {
  lat: number;
  lng: number;
};

////////////////////////////////////////
// GROQ responses
////////////////////////////////////////
export type ServiceCategory = {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
};
export type ServiceType = {
  name: string;
  slug: string;
  description: string;
};

export type Provider = {
  _id: string;
  title: string;
  address: string;
  // Required in the schema, but a few agent-created providers predate that and
  // have none — they can't match a geo search, but can still be opened by id.
  location?: Location;
  description: PortableTextBlock[];
  phone?: string;
  email?: string;
  website?: string;
  serviceTypes: ServiceType[];
};

export type ConfidenceLevel = "very_low" | "low" | "medium" | "high" | "very_high";

/** Pairs a value the agent extracted with how much it trusts it and where it came from. */
export type WithConfidence<T> = {
  value: T;
  confidence: ConfidenceLevel;
  sourceUrl: string | null;
};

/** Hours in Google Places shape — `day` is 0 (Sunday) to 6, `time` is 24-hour ("0900"). */
export type HoursOfOperation = {
  periods: {
    open: { day: number; time: string };
    close: { day: number; time: string };
  }[];
  weekdayText: string[];
};

/**
 * The structured provider the agent pipeline produces, mirroring `providerSchema`
 * in packages/agent-core/src/agents/providerFormatAgent.ts. The zod schema there
 * stays the source of truth — keep this in step when it changes.
 *
 * Every field is optional because this describes model output parsed off the
 * event stream, not something the compiler can guarantee arrived intact.
 */
export type AgentProviderResult = {
  name?: WithConfidence<string | null>;
  description?: WithConfidence<PortableTextBlock[] | null>;
  address?: WithConfidence<string | null>;
  location?: WithConfidence<{ latitude: number; longitude: number } | null>;
  serviceTypes?: { _id: string; hoursOfOperation?: WithConfidence<HoursOfOperation | null> }[];
  hoursOfOperation?: WithConfidence<HoursOfOperation | null>;
  contact?: {
    phone?: WithConfidence<string | null>;
    email?: WithConfidence<string | null>;
    website?: WithConfidence<string | null>;
  };
  url?: WithConfidence<string | null>;
  reason?: string;
};
