import { type SanityConfig } from "@sanity/sdk";
import { SanityApp } from "@sanity/sdk-react";
import { useEffect, useState } from "react";

import { AppSidebar, type AppMode } from "./components/AppSidebar";
import { FreshnessCheckForm } from "./components/FreshnessCheckForm";
import { FreshnessResultsReview } from "./components/FreshnessResultsReview";
import { ProviderResultsReview } from "./components/ProviderResultsReview";
import { ProviderSearchForm } from "./components/ProviderSearchForm";
import { getFreshnessJob } from "./lib/freshnessApi";
import { getPipelineJob } from "./lib/pipelineApi";
import type { FreshnessJob } from "./types/freshness";
import type { PipelineJob } from "./types/pipeline";
import "./index.css";

export default function App() {
  const [mode, setMode] = useState<AppMode>("pipeline");
  const [job, setJob] = useState<PipelineJob | null>(null);
  const [freshnessJob, setFreshnessJob] = useState<FreshnessJob | null>(null);
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

  useEffect(() => {
    if (!freshnessJob?.id) return;
    if (!["queued", "running"].includes(freshnessJob.status)) return;

    const intervalId = window.setInterval(async () => {
      try {
        const updatedJob = await getFreshnessJob(freshnessJob.id);
        setFreshnessJob(updatedJob);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        window.clearInterval(intervalId);
      }
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [freshnessJob?.id, freshnessJob?.status]);

  function handleNewJob() {
    if (mode === "pipeline") {
      setJob(null);
    } else {
      setFreshnessJob(null);
    }
    setError(null);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white font-['Inter',ui-sans-serif,system-ui,sans-serif]">
      <SanityApp config={config} fallback={<p className="p-8 text-sm text-slate-500">Loading…</p>}>
        <AppSidebar
          mode={mode}
          job={job}
          freshnessJob={freshnessJob}
          onNewJob={handleNewJob}
          onModeChange={(nextMode) => {
            setMode(nextMode);
            setError(null);
          }}
        />

        <main className="flex-1 overflow-y-auto bg-[#f8fafc]">
          <div className="mx-auto flex max-w-[960px] flex-col gap-8 px-8 py-10">
            {/* Page header */}
            <div className="flex flex-col items-center gap-2 pb-2">
              <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a]">
                {mode === "pipeline" ? "Pipeline Review" : "Stale Provider Checks"}
              </h1>
              <p className="text-[14px] text-[#64748b]">
                {mode === "pipeline" ? "Create and review pipeline jobs" : "Find and review stale provider data"}
              </p>
            </div>

            {/* Create job / status card */}
            {mode === "pipeline" ? (
              <ProviderSearchForm
                job={job}
                onJobStarted={(nextJob) => {
                  setError(null);
                  setJob(nextJob);
                }}
                onError={setError}
              />
            ) : (
              <FreshnessCheckForm
                job={freshnessJob}
                onJobStarted={(nextJob) => {
                  setError(null);
                  setFreshnessJob(nextJob);
                }}
                onError={setError}
              />
            )}

            {/* Error banner */}
            {error && (
              <div className="rounded-lg border border-[#fecdca] bg-[#fffbfa] px-4 py-3 text-[14px] font-semibold text-[#b42318]">
                {error}
              </div>
            )}

            {/* Review section */}
            {mode === "pipeline" && job && <ProviderResultsReview job={job} onJobUpdated={setJob} />}
            {mode === "freshness" && freshnessJob && (
              <FreshnessResultsReview job={freshnessJob} onJobUpdated={setFreshnessJob} />
            )}
          </div>
        </main>
      </SanityApp>
    </div>
  );
}
