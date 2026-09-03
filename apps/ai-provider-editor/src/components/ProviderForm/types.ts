// Mirrors the structured provider shape produced by the provider details agent
// (`providerSchema` in packages/agent-core/src/agents/providerFormatAgent.ts).
//
// Two deliberate differences, both so the shape maps cleanly onto form inputs:
//   - the agent's nullable strings are empty strings here (an input can't hold null)
//   - `description` is plain text rather than Portable Text blocks; converting
//     between the two happens when the form is wired up to real agent output.

export const CONFIDENCE_LEVELS = ["very_low", "low", "medium", "high", "very_high"] as const;

export type ConfidenceLevel = (typeof CONFIDENCE_LEVELS)[number];

/** Pairs a field's value with how much the agent trusts it and where it came from. */
export type WithConfidence<T> = {
  value: T;
  confidence: ConfidenceLevel;
  sourceUrl: string | null;
};

/** Hours in Google Places API shape — `day` is 0 (Sunday) to 6, `time` is 24-hour ("0900"). */
export type HoursOfOperation = {
  periods: {
    open: { day: number; time: string };
    close: { day: number; time: string };
  }[];
  weekdayText: string[];
};

export type ProviderServiceTypeValues = {
  _id: string;
  /** This service's own hours, only when they differ from the provider's overall hours. */
  hoursOfOperation: WithConfidence<HoursOfOperation | null>;
};

export type ProviderFormValues = {
  name: WithConfidence<string>;
  description: WithConfidence<string>;
  address: WithConfidence<string>;
  /** Kept as strings so the inputs can hold a partially typed or empty coordinate. */
  location: WithConfidence<{ latitude: string; longitude: string }>;
  serviceTypes: ProviderServiceTypeValues[];
  hoursOfOperation: WithConfidence<HoursOfOperation | null>;
  contact: {
    phone: WithConfidence<string>;
    email: WithConfidence<string>;
    website: WithConfidence<string>;
  };
  url: WithConfidence<string>;
  reason: string;
};
