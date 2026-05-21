import { describe, expect, it, vi } from "vitest";

import { writeApprovedFreshnessProviderToSanity, writeDeniedFreshnessProviderToSanity } from "./sanityFreshnessWrite";
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
      weekdayText: [],
    },
    contact: {
      phone: "503-555-0100",
      email: "hello@example.org",
      website: "https://example.org",
    },
    ...overrides,
  };
}

function review(): FreshnessReviewCandidate {
  return {
    providerId: "provider-123",
    providerTitle: "Example Food Pantry",
    original: candidate(),
    candidate: candidate(),
    changedFields: ["phone"],
    reviewReason: "changed",
    diagnostics: {
      sourceUrl: "https://example.org",
      finalUrl: "https://example.org",
      fetchedAt: "2026-05-21T00:00:00.000Z",
    },
  };
}

function fakeClient() {
  const commits: Array<{ id: string; set: Record<string, unknown> }> = [];
  const fetch = vi
    .fn()
    .mockResolvedValueOnce({
      place: {
        placeId: "existing-place-id",
        type: "google",
      },
    })
    .mockResolvedValueOnce([{ _id: "serviceType.foodPantry", name: "Food Pantry", slug: "food-pantry" }]);

  return {
    commits,
    client: {
      fetch,
      patch: (id: string) => ({
        set: (attributes: Record<string, unknown>) => ({
          commit: async <TResult>() => {
            commits.push({ id, set: attributes });
            return { _id: id } as TResult;
          },
        }),
      }),
    },
  };
}

describe("sanity freshness writes", () => {
  it("approves by patching the exact provider and not creating a provider", async () => {
    const { client, commits } = fakeClient();

    await writeApprovedFreshnessProviderToSanity(
      client,
      review(),
      candidate({ contact: { ...candidate().contact, phone: "503-555-0111" } }),
      "job-1",
    );

    expect(commits).toHaveLength(1);
    expect(commits[0]?.id).toBe("provider-123");
    expect(commits[0]?.set).toMatchObject({
      title: "Example Food Pantry",
      publicContact: { phone: "503-555-0111", email: "hello@example.org", website: "https://example.org" },
      freshness: {
        sourceUrl: "https://example.org",
        status: "current",
        lastCheckSummary: "Approved stale-check result.",
        lastDiffFields: ["phone"],
        lastRunId: "job-1",
      },
    });
  });

  it("denies by patching freshness metadata only", async () => {
    const { client, commits } = fakeClient();

    await writeDeniedFreshnessProviderToSanity(client, review(), "job-1");

    expect(commits).toHaveLength(1);
    expect(commits[0]?.id).toBe("provider-123");
    expect(Object.keys(commits[0]?.set ?? {})).toEqual(["freshness"]);
    expect(commits[0]?.set.freshness).toMatchObject({
      status: "current",
      lastCheckSummary: "Denied as false positive.",
      lastRunId: "job-1",
    });
  });
});
