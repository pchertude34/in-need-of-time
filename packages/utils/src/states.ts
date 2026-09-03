// Values are full state names rather than postal codes: they're submitted to the
// provider agent as `location`, and OpenAI's web search wants a free-text region
// name ("Oregon"), not a code.
export const US_STATES = [
  { value: "California", label: "California" },
  { value: "Oregon", label: "Oregon" },
  { value: "Washington", label: "Washington" },
] as const;
