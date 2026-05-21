import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { ProviderDetailEditor } from "./ProviderDetailEditor";
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
    candidate: candidate({
      contact: {
        phone: "503-555-0199",
        email: "hello@example.org",
        website: "https://example.org",
      },
    }),
    changedFields: ["phone"],
    reviewReason: "changed",
    diagnostics: {
      sourceUrl: "https://example.org",
      finalUrl: "https://example.org",
      fetchedAt: "2026-05-21T00:00:00.000Z",
      scraperProvider: "playwright",
    },
    ...overrides,
  };
}

const noop = async () => {};

describe("ProviderDetailEditor freshness review UI", () => {
  it("renders stale-check field controls and diagnostics when freshness review is provided", () => {
    const staleReview = review();
    const html = renderToStaticMarkup(
      createElement(ProviderDetailEditor, {
        candidate: staleReview.candidate,
        freshnessReview: staleReview,
        onApprove: noop,
        onDeny: noop,
        onSave: noop,
      }),
    );

    expect(html).toContain("Keep Current");
    expect(html).toContain("Change detected");
    expect(html).toContain("Review Confidence");
    expect(html).toContain("Source Diagnostics");
    expect(html).toContain("503-555-0100");
    expect(html).toContain("503-555-0199");
  });

  it("keeps the standard pipeline editor free of stale-check controls", () => {
    const html = renderToStaticMarkup(
      createElement(ProviderDetailEditor, {
        candidate: candidate(),
        onApprove: noop,
        onDeny: noop,
        onSave: noop,
      }),
    );

    expect(html).not.toContain("Keep Current");
    expect(html).not.toContain("Review Confidence");
    expect(html).not.toContain("Source Diagnostics");
  });
});
