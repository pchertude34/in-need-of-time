import type { ProviderFormValues, ProviderServiceTypeValues, WithConfidence } from "../../types";

// `very_low` is the agent's own marker for "not found", so it's also the right
// starting point for a field nothing has filled in yet.
export const EMPTY_FIELD: WithConfidence<string> = { value: "", confidence: "very_low", sourceUrl: null };

export const EMPTY_SERVICE_TYPE: ProviderServiceTypeValues = {
  _id: "",
  hoursOfOperation: { value: null, confidence: "very_low", sourceUrl: null },
};

export const EMPTY_PROVIDER_FORM_VALUES: ProviderFormValues = {
  name: EMPTY_FIELD,
  description: { value: [], confidence: "very_low", sourceUrl: null },
  address: EMPTY_FIELD,
  location: { value: { latitude: "", longitude: "" }, confidence: "very_low", sourceUrl: null },
  serviceTypes: [],
  hoursOfOperation: { value: null, confidence: "very_low", sourceUrl: null },
  contact: { phone: EMPTY_FIELD, email: EMPTY_FIELD, website: EMPTY_FIELD },
  url: EMPTY_FIELD,
  reason: "",
};
