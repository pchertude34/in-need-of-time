import { describe, expect, it } from "vitest";

import { validatePipelineInput } from "./pipelineInputValidation";

// These cases mirror the current pipeline behavior in:
// - C:\Users\User\Documents\GitHub\IToN_Agents\scripts\server.ts
// - C:\Users\User\Documents\GitHub\IToN_Agents\pipeline\runPipeline.ts
// - C:\Users\User\Documents\GitHub\IToN_Agents\src\agents\searchAgent.ts
describe("validatePipelineInput", () => {
  it("rejects whitespace-only required fields", () => {
    const result = validatePipelineInput({
      city: "   ",
      state: " ",
      category: " ",
      perQuery: "",
      maxUrls: "",
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;

    expect(result.fieldErrors.city).toBe("City is required.");
    expect(result.fieldErrors.state).toBe("State is required.");
    expect(result.fieldErrors.category).toBe("Category is required.");
  });

  it("rejects non-finite numeric values", () => {
    const result = validatePipelineInput({
      city: "Salem",
      state: "OR",
      category: "FOOD_BANK",
      perQuery: "1e999",
      maxUrls: "10",
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;

    expect(result.fieldErrors.perQuery).toBe("perQuery must be a valid number.");
  });

  it("accepts state and category values exactly as the pipeline server does", () => {
    const result = validatePipelineInput({
      city: "Salem",
      state: "Oregon",
      category: "food bank",
      perQuery: "",
      maxUrls: "",
    });

    expect(result.ok).toBe(true);
  });

  it("accepts decimal perQuery values because the search agent floors them", () => {
    const result = validatePipelineInput({
      city: "Salem",
      state: "OR",
      category: "FOOD_BANK",
      perQuery: "1.5",
      maxUrls: "10",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.value.perQuery).toBe(1.5);
  });

  it("treats zero and negative numeric values like the pipeline defaults do", () => {
    const result = validatePipelineInput({
      city: "Salem",
      state: "OR",
      category: "FOOD_BANK",
      perQuery: "0",
      maxUrls: "-4",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.value).toEqual({
      city: "Salem",
      state: "OR",
      category: "FOOD_BANK",
      perQuery: undefined,
      maxUrls: undefined,
    });
  });

  it("accepts a valid minimal payload", () => {
    const result = validatePipelineInput({
      city: "Salem",
      state: "or",
      category: "food_bank",
      perQuery: "",
      maxUrls: "",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.value).toEqual({
      city: "Salem",
      state: "or",
      category: "food_bank",
      perQuery: undefined,
      maxUrls: undefined,
    });
  });

  it("accepts a valid payload with optional limits", () => {
    const result = validatePipelineInput({
      city: "St. Louis",
      state: "MO",
      category: "housing 2",
      perQuery: "3",
      maxUrls: "12.9",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.value).toEqual({
      city: "St. Louis",
      state: "MO",
      category: "housing 2",
      perQuery: 3,
      maxUrls: 12.9,
    });
  });
});
