import { describe, expect, it, vi } from "vitest";

import { writeApprovedProvidersToSanity } from "./sanityProviderWrite";
import type { PipelineJob, SanityProviderCandidate } from "../types/pipeline";

function candidate(): SanityProviderCandidate {
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
      weekdayText: [],
    },
    contact: {
      phone: "503-555-0100",
      email: "hello@example.org",
      website: "https://example.org",
    },
  };
}

function job(): PipelineJob {
  return {
    id: "pipeline-job-1",
    status: "ready_for_review",
    createdAt: "2026-05-21T00:00:00.000Z",
    updatedAt: "2026-05-21T00:00:00.000Z",
    input: {
      city: "Salem",
      state: "OR",
      category: "FOOD_BANK",
    },
  };
}

describe("sanity provider writes", () => {
  it("initializes freshness metadata when creating providers from approved pipeline output", async () => {
    const createdDocuments: Array<Record<string, unknown>> = [];
    const client = {
      fetch: vi
        .fn()
        .mockResolvedValueOnce(null)
        .mockResolvedValueOnce([
          {
            _id: "serviceType.foodPantry",
            name: "Food Pantry",
            slug: "food-pantry",
          },
        ]),
      patch: () => {
        throw new Error("patch should not be used for this test");
      },
      create: async <TDocument extends Record<string, unknown>>(document: TDocument) => {
        createdDocuments.push(document);
        return document;
      },
    };

    await writeApprovedProvidersToSanity(client, [candidate()], job());

    expect(createdDocuments).toHaveLength(1);
    expect(createdDocuments[0]?.freshness).toMatchObject({
      sourceUrl: "https://example.org",
      status: "current",
      lastCheckSummary: "Initialized from approved pipeline job pipeline-job-1.",
      lastDiffFields: [],
      lastRunId: "pipeline-job-1",
    });
    expect(typeof (createdDocuments[0]?.freshness as { lastCheckedAt?: unknown }).lastCheckedAt).toBe("string");
  });
});
