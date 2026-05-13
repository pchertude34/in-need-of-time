import { type SanityConfig } from "@sanity/sdk";
import { SanityApp } from "@sanity/sdk-react";
import { useEffect, useState } from "react";

import { AppSidebar } from "./components/AppSidebar";
import { ProviderResultsReview } from "./components/ProviderResultsReview";
import { ProviderSearchForm } from "./components/ProviderSearchForm";
import { getPipelineJob } from "./lib/pipelineApi";
import type { PipelineJob } from "./types/pipeline";
import "./index.css";

export default function App() {
  const [job, setJob] = useState<PipelineJob | null>(null);
  const [error, setError] = useState<string | null>(null);

  const config: SanityConfig[] = [
    {
      projectId: process.env.SANITY_APP_PROJECT_ID,
      dataset: process.env.SANITY_APP_DATASET,
    },
  ];

  useEffect(() => {
    if (!job?.id) return;
    if (!["queued", "running"].includes(job.status)) return;

    const intervalId = window.setInterval(async () => {
      try {
        const updatedJob = await getPipelineJob(job.id);
        setJob(updatedJob);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        window.clearInterval(intervalId);
      }
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [job?.id, job?.status]);

  function handleNewJob() {
    setJob(null);
    setError(null);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white font-['Inter',ui-sans-serif,system-ui,sans-serif]">
      <SanityApp config={config} fallback={<p className="p-8 text-sm text-slate-500">Loading…</p>}>
        <AppSidebar job={job} onNewJob={handleNewJob} />

        <main className="flex-1 overflow-y-auto bg-[#f8fafc]">
          <div className="mx-auto flex max-w-[960px] flex-col gap-8 px-8 py-10">
            {/* Page header */}
            <div className="flex flex-col items-center gap-2 pb-2">
              <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a]">Pipeline Review</h1>
              <p className="text-[14px] text-[#64748b]">Create and review pipeline jobs</p>
            </div>

            {/* Create job / status card */}
            <ProviderSearchForm
              job={job}
              onJobStarted={(nextJob) => {
                setError(null);
                setJob(nextJob);
              }}
              onError={setError}
            />

            {/* Error banner */}
            {error && (
              <div className="rounded-lg border border-[#fecdca] bg-[#fffbfa] px-4 py-3 text-[14px] font-semibold text-[#b42318]">
                {error}
              </div>
            )}

            {/* Review section */}
            {job && <ProviderResultsReview job={job} />}
          </div>
        </main>
      </SanityApp>
    </div>
  );
}
