import { useState } from "react";
import { useClient, useCurrentUser } from "@sanity/sdk-react";

import { approveFreshnessJob, denyFreshnessJob } from "../lib/freshnessApi";
import {
  writeApprovedFreshnessProviderToSanity,
  writeDeniedFreshnessProviderToSanity,
} from "../lib/sanityFreshnessWrite";
import type { FreshnessJob } from "../types/freshness";
import type { SanityProviderCandidate } from "../types/pipeline";
import { ProviderDetailEditor } from "./ProviderDetailEditor";
import { ProviderListCard } from "./ProviderCandidateCard";

type FreshnessResultsReviewProps = {
  job: FreshnessJob;
  onJobUpdated: (job: FreshnessJob) => void;
};

function getReviewerName(user: ReturnType<typeof useCurrentUser>): string {
  return user?.email ?? user?.name ?? user?.id ?? "local-staff";
}

function formatReason(value: string): string {
  return value.replace(/_/g, " ");
}

function RunDiagnostics({ job }: { job: FreshnessJob }) {
  const checked = job.output?.checked ?? [];
  const nonReview = checked.filter((item) => item.status !== "needs_review");
  if (!nonReview.length) return null;

  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
      <h3 className="mb-2 text-[13px] font-semibold text-[#0f172a]">Run Diagnostics ({nonReview.length})</h3>
      <div className="flex max-h-[220px] flex-col gap-2 overflow-y-auto">
        {nonReview.map((item) => (
          <div key={item.providerId} className="rounded-md border border-[#e2e8f0] bg-white px-3 py-2">
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-[12px] font-semibold text-[#0f172a]">{item.providerTitle}</p>
              <span className="shrink-0 rounded-full bg-[#f1f5f9] px-2 py-0.5 text-[11px] capitalize text-[#475569]">
                {formatReason(item.status)}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-[#64748b]">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FreshnessResultsReview({ job, onJobUpdated }: FreshnessResultsReviewProps) {
  const client = useClient({ apiVersion: process.env.SANITY_APP_API_VERSION || "2024-03-09" });
  const user = useCurrentUser();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [actionStatus, setActionStatus] = useState<"idle" | "saving" | "error">("idle");
  const reviews = job.output?.reviewCandidates ?? [];
  const selected = reviews[selectedIndex];
  const reviewerName = getReviewerName(user);

  if (!job.output) return null;

  async function handleApprove(candidate: SanityProviderCandidate) {
    if (!selected) return;
    await writeApprovedFreshnessProviderToSanity(client, selected, candidate, job.id);
    const updatedJob = await approveFreshnessJob(job.id, reviewerName, selected.providerId);
    onJobUpdated(updatedJob);
  }

  async function handleDeny(_candidate: SanityProviderCandidate) {
    if (!selected) return;
    await writeDeniedFreshnessProviderToSanity(client, selected, job.id);
    const updatedJob = await denyFreshnessJob(job.id, reviewerName, selected.providerId);
    onJobUpdated(updatedJob);
  }

  async function handleSave(candidate: SanityProviderCandidate) {
    if (!selected) return;
    await writeApprovedFreshnessProviderToSanity(client, selected, candidate, job.id);
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-[28px] font-bold tracking-tight text-[#0f172a]">Stale Check Results</h2>
          <p className="text-[14px] text-[#64748b]">
            {reviews.length} provider(s) need staff review from {job.output.selectedCount} selected
          </p>
        </div>
      </div>

      <RunDiagnostics job={job} />

      {!reviews.length ? (
        <section className="py-8 text-center text-[#64748b]">
          <p className="text-[15px]">No stale-check review items were created for this run.</p>
        </section>
      ) : (
        <div className="flex flex-col items-start gap-4 xl:flex-row">
          <div className="w-full shrink-0 overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.03),0px_1px_3px_rgba(0,0,0,0.04)] xl:w-[277px]">
            <div className="px-4 pb-2 pt-4">
              <p className="text-[14px] font-bold text-black">Providers</p>
              <p className="mt-0.5 text-[10px] text-[#94a3b8]">{reviews.length} item(s)</p>
            </div>
            <div className="mx-4 mb-2 h-px bg-[#d9d9d9]" />
            <div className="flex max-h-[560px] flex-col gap-2 overflow-y-auto px-3 pb-3">
              {reviews.map((review, i) => (
                <ProviderListCard
                  key={review.providerId}
                  candidate={review.candidate}
                  isSelected={i === selectedIndex}
                  onClick={() => setSelectedIndex(i)}
                />
              ))}
            </div>
          </div>

          {selected && (
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <ProviderDetailEditor
                key={selected.providerId}
                candidate={selected.candidate}
                freshnessReview={selected}
                onApprove={async (candidate) => {
                  setActionStatus("saving");
                  try {
                    await handleApprove(candidate);
                    setActionStatus("idle");
                  } catch {
                    setActionStatus("error");
                  }
                }}
                onDeny={async (candidate) => {
                  setActionStatus("saving");
                  try {
                    await handleDeny(candidate);
                    setActionStatus("idle");
                  } catch {
                    setActionStatus("error");
                  }
                }}
                onSave={handleSave}
              />
              {actionStatus === "error" && (
                <p className="text-[12px] text-[#dc2626]">Freshness review action failed.</p>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
