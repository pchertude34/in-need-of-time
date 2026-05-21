import { describe, expect, it } from "vitest";

import { buildFreshnessDiffSummary, getFreshnessEditorValue } from "./freshnessDiff";
import type { FreshnessReviewCandidate } from "../types/freshness";
import type { SanityProviderCandidate } from "../types/pipeline";

function candidate(overrides: Partial<SanityProviderCandidate> = {}): SanityProviderCandidate {
  return {
    name: "Example Food Pantry",
    description: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Food pantry serving the community." }],
        markDefs: [],
        style: "normal",
      },
    ],
    address: "123 Main St, Salem, OR",
    location: { latitude: 44.94, longitude: -123.03 },
    serviceTypes: [{ _id: "FOOD_PANTRY" }],
    hoursOfOperation: {
      periods: [],
      weekdayText: ["Monday: 9:00 AM - 5:00 PM"],
    },
    contact: {
      phone: "503-555-0100",
      email: "hello@example.org",
      website: "https://example.org",
    },
    ...overrides,
  };
}

function review(overrides: Partial<FreshnessReviewCandidate> = {}): FreshnessReviewCandidate {
  return {
    providerId: "provider-123",
    providerTitle: "Example Food Pantry",
    original: candidate(),
    candidate: candidate(),
    changedFields: [],
    reviewReason: "changed",
    diagnostics: {
      sourceUrl: "https://example.org",
      finalUrl: "https://example.org",
    },
    ...overrides,
  };
}

describe("buildFreshnessDiffSummary", () => {
  it("returns no changed rows and unchanged category summaries for unchanged providers", () => {
    const diff = buildFreshnessDiffSummary(review());

    expect(diff.rows).toEqual([]);
    expect(diff.categories).toEqual([
      { category: "Identity", changedCount: 0 },
      { category: "Contact", changedCount: 0 },
      { category: "Location", changedCount: 0 },
      { category: "Services", changedCount: 0 },
      { category: "Hours", changedCount: 0 },
    ]);
  });

  it("groups changed phone, email, and website under Contact", () => {
    const diff = buildFreshnessDiffSummary(
      review({
        candidate: candidate({
          contact: {
            phone: "503-555-0199",
            email: "staff@example.org",
            website: "https://example.org/help",
          },
        }),
      }),
    );

    expect(diff.rows.map((row) => [row.category, row.field])).toEqual([
      ["Contact", "Phone"],
      ["Contact", "Email"],
      ["Contact", "Website"],
    ]);
  });

  it("groups changed address and coordinates under Location", () => {
    const diff = buildFreshnessDiffSummary(
      review({
        candidate: candidate({
          address: "456 State St, Salem, OR",
          location: { latitude: 44.95, longitude: -123.04 },
        }),
      }),
    );

    expect(diff.rows.map((row) => [row.category, row.field, row.fieldKey])).toEqual([
      ["Location", "Address", "address"],
      ["Location", "Latitude", "latitude"],
      ["Location", "Longitude", "longitude"],
    ]);
  });

  it("renders service types and hours as readable text", () => {
    const diff = buildFreshnessDiffSummary(
      review({
        candidate: candidate({
          serviceTypes: [{ _id: "FOOD_PANTRY" }, { _id: "MEAL_SITE" }],
          hoursOfOperation: {
            periods: [],
            weekdayText: ["Tuesday: 10:00 AM - 2:00 PM"],
          },
        }),
      }),
    );

    expect(diff.rows).toMatchObject([
      {
        category: "Services",
        field: "Service Types",
        currentValue: "FOOD_PANTRY",
        proposedValue: "FOOD_PANTRY, MEAL_SITE",
      },
      {
        category: "Hours",
        field: "Hours",
        currentValue: "Monday: 9:00 AM - 5:00 PM",
        proposedValue: "Tuesday: 10:00 AM - 2:00 PM",
      },
    ]);
  });

  it("labels missing proposed values distinctly", () => {
    const diff = buildFreshnessDiffSummary(
      review({
        candidate: candidate({
          contact: {
            phone: "",
            email: "hello@example.org",
            website: "https://example.org",
          },
        }),
      }),
    );

    expect(diff.rows).toMatchObject([
      {
        field: "Phone",
        currentValue: "503-555-0100",
        proposedValue: "Not provided",
        status: "missing_proposed",
        confidenceLabel: "Review before approving",
      },
    ]);
  });

  it("labels missing proposed latitude and longitude independently", () => {
    const diff = buildFreshnessDiffSummary(
      review({
        candidate: candidate({
          location: { latitude: null, longitude: null },
        }),
      }),
    );

    expect(diff.rows).toMatchObject([
      {
        field: "Latitude",
        fieldKey: "latitude",
        currentValue: "44.94",
        proposedValue: "Not provided",
        currentEditorValue: "44.94",
        proposedEditorValue: "",
        status: "missing_proposed",
      },
      {
        field: "Longitude",
        fieldKey: "longitude",
        currentValue: "-123.03",
        proposedValue: "Not provided",
        currentEditorValue: "-123.03",
        proposedEditorValue: "",
        status: "missing_proposed",
      },
    ]);
  });

  it("adds a source URL row for redirected sources", () => {
    const diff = buildFreshnessDiffSummary(
      review({
        reviewReason: "source_redirected",
        diagnostics: {
          sourceUrl: "https://old.example.org",
          finalUrl: "https://new.example.org",
        },
      }),
    );

    expect(diff.rows).toContainEqual({
      id: "sourceUrl",
      category: "Contact",
      field: "Source URL",
      fieldKey: "website",
      currentValue: "https://old.example.org",
      proposedValue: "https://new.example.org",
      currentEditorValue: "https://example.org",
      proposedEditorValue: "https://example.org",
      status: "changed",
      confidenceLabel: "Source redirected",
    });
  });

  it("derives confidence labels for changed and uncertain updates", () => {
    expect(
      buildFreshnessDiffSummary(
        review({
          candidate: candidate({ name: "Updated Food Pantry" }),
        }),
      ).rows[0]?.confidenceLabel,
    ).toBe("Change detected");

    expect(
      buildFreshnessDiffSummary(
        review({
          reviewReason: "uncertain",
          candidate: candidate({ name: "Different Provider" }),
        }),
      ).rows[0]?.confidenceLabel,
    ).toBe("Needs verification");
  });

  it("returns editor-ready keep-current values for scalar and grouped fields", () => {
    const original = candidate({
      serviceTypes: [{ _id: "FOOD_PANTRY" }, { _id: "MEAL_SITE" }],
      hoursOfOperation: {
        periods: [],
        weekdayText: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 10:00 AM - 2:00 PM"],
      },
    });

    expect(getFreshnessEditorValue(original, "phone")).toBe("503-555-0100");
    expect(getFreshnessEditorValue(original, "serviceTypes")).toBe("FOOD_PANTRY, MEAL_SITE");
    expect(getFreshnessEditorValue(original, "hours")).toBe("Monday: 9:00 AM - 5:00 PM\nTuesday: 10:00 AM - 2:00 PM");
  });
});
