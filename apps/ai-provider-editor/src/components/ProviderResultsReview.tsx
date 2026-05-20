import { useState } from "react";
import { useClient, useCurrentUser } from "@sanity/sdk-react";

import type { PipelineJob, SanityProviderCandidate } from "../types/pipeline";
import { approvePipelineJob, denyPipelineJob } from "../lib/pipelineApi";
import { validateProviderCandidates, writeApprovedProvidersToSanity } from "../lib/sanityProviderWrite";
import { ProviderListCard } from "./ProviderCandidateCard";
import { ProviderDetailEditor } from "./ProviderDetailEditor";

type ProviderResultsReviewProps = {
  job: PipelineJob;
  onJobUpdated: (job: PipelineJob) => void;
};

function getReviewerName(user: ReturnType<typeof useCurrentUser>): string {
  return user?.email ?? user?.name ?? user?.id ?? "local-staff";
}

function formatSkipReason(reason: string): string {
  return reason.replace(/_/g, " ");
}

export function ProviderResultsReview({ job, onJobUpdated }: ProviderResultsReviewProps) {
  const client = useClient({ apiVersion: "2024-03-09" });
  const user = useCurrentUser();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [completeStatus, setCompleteStatus] = useState<"idle" | "saving" | "error">("idle");

  if (job.status !== "ready_for_review") return null;

  const candidates: SanityProviderCandidate[] = job.output?.sanity ?? [];

  if (!candidates.length) {
    return (
      <section className="py-12 text-center text-[#64748b]">
        <p className="text-[15px]">No provider candidates found for this job.</p>
      </section>
    );
  }

  const selected = candidates[selectedIndex];
  const reviewerName = getReviewerName(user);
  const skippedUrls = job.output?.skipped_urls ?? [];
  const directoryExpansion = job.output?.directory_expansion ?? [];

  async function handleApprove(candidate: SanityProviderCandidate) {
    const validated = validateProviderCandidates([candidate]);
    const writeResults = await writeApprovedProvidersToSanity(client, validated, job);
    onJobUpdated({
      ...job,
      output: job.output ? { ...job.output, sanity: candidates } : job.output,
      sanityDocumentIds: [...(job.sanityDocumentIds ?? []), ...writeResults.map((r) => r.documentId)],
    });
  }

  async function handleDeny(_candidate: SanityProviderCandidate) {
    const deniedJob = await denyPipelineJob(job.id, reviewerName);
    onJobUpdated(deniedJob);
  }

  async function handleSave(candidate: SanityProviderCandidate) {
    const validated = validateProviderCandidates([candidate]);
    await writeApprovedProvidersToSanity(client, validated, job);
  }

  async function handleCompleteReview() {
    setCompleteStatus("saving");
    try {
      const approvedJob = await approvePipelineJob(job.id, reviewerName);
      onJobUpdated({
        ...approvedJob,
        output: approvedJob.output ? { ...approvedJob.output, sanity: candidates } : approvedJob.output,
        sanityDocumentIds: job.sanityDocumentIds,
      });
    } catch {
      setCompleteStatus("error");
    }
  }

  return (
    <section className="flex flex-col gap-6">
      {/* Section title */}
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-[28px] font-bold tracking-tight text-[#0f172a]">Review Job</h2>
          <p className="text-[14px] text-[#64748b]">Readable view of agent output</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <button
            type="button"
            disabled={completeStatus === "saving"}
            onClick={handleCompleteReview}
            className="rounded-lg bg-[#2563eb] px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {completeStatus === "saving" ? "Completing…" : "Complete Review"}
          </button>
          {completeStatus === "error" && (
            <p className="text-[12px] text-[#dc2626]">Failed — check console for details.</p>
          )}
        </div>
      </div>

      {/* Skipped URLs */}
      {skippedUrls.length > 0 && (
        <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
          <h3 className="mb-2 text-[13px] font-semibold text-[#0f172a]">Skipped URLs ({skippedUrls.length})</h3>
          <div className="flex flex-col gap-2">
            {skippedUrls.map((item, index) => (
              <div
                key={`${item.query}-${item.url}-${index}`}
                className="rounded-md border border-[#e2e8f0] bg-white px-3 py-2"
              >
                <p className="break-all text-[12px] font-semibold text-[#0f172a]">{item.url}</p>
                <p className="text-[11px] text-[#64748b]">
                  Query: {item.query} · Reason: {formatSkipReason(item.reason)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Directory expansion */}
      {directoryExpansion.length > 0 && (
        <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
          <h3 className="mb-2 text-[13px] font-semibold text-[#0f172a]">
            Directory Expansion ({directoryExpansion.length})
          </h3>
          <div className="flex flex-col gap-2">
            {directoryExpansion.map((entry, index) => (
              <div
                key={`${entry.listing_url}-${index}`}
                className="rounded-md border border-[#e2e8f0] bg-white px-3 py-2"
              >
                <p className="break-all text-[12px] font-semibold text-[#0f172a]">{entry.listing_url}</p>
                <p className="text-[11px] text-[#64748b]">
                  Discovered {entry.discovered_count} · Selected {entry.selected_count} · Skipped {entry.skipped_count}
                  {entry.truncated ? " · Truncated" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Two-panel layout */}
      <div className="flex items-start gap-4">
        {/* Left: provider list */}
        <div className="w-[277px] shrink-0 overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.03),0px_1px_3px_rgba(0,0,0,0.04)]">
          <div className="px-4 pb-2 pt-4">
            <p className="text-[14px] font-bold text-black">Providers</p>
            <p className="mt-0.5 text-[10px] text-[#94a3b8]">{candidates.length} item(s)</p>
          </div>
          <div className="mx-4 mb-2 h-px bg-[#d9d9d9]" />
          <div className="flex max-h-[560px] flex-col gap-2 overflow-y-auto px-3 pb-3">
            {candidates.map((candidate, i) => (
              <ProviderListCard
                key={i}
                candidate={candidate}
                isSelected={i === selectedIndex}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right: detail editor */}
        {selected && (
          <ProviderDetailEditor
            key={selectedIndex}
            candidate={selected}
            onApprove={handleApprove}
            onDeny={handleDeny}
            onSave={handleSave}
          />
        )}
      </div>
    </section>
  );
}
