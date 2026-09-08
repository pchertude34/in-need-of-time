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

// Placeholder list until the form is wired up to the service types the agent
// resolves through `get_service_types` — the real `_id`s come from Sanity.
export const SERVICE_TYPE_OPTIONS = [
  { _id: "food-bank", name: "Food Bank" },
  { _id: "shelter", name: "Shelter" },
  { _id: "health-clinic", name: "Health Clinic" },
  { _id: "free-clothing", name: "Free Clothing" },
  { _id: "job-assistance", name: "Job Assistance" },
];
