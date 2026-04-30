import { type SanityConfig } from "@sanity/sdk";
import { SanityApp } from "@sanity/sdk-react";
import { useEffect, useState, type CSSProperties } from "react";

import { PipelineProgress } from "./components/PipelineProgress";
import { ProviderResultsReview } from "./components/ProviderResultsReview";
import { ProviderSearchForm } from "./components/ProviderSearchForm";
import { getPipelineJob } from "./lib/pipelineApi";
import type { PipelineJob } from "./types/pipeline";

// import { SANITY_APP_DATASET, SANITY_APP_PROJECT_ID } from '../env';
// console.log('process.env :>> ', process.env);

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  padding: "32px",
  background: "#f7f7f5",
  color: "#171717",
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const contentStyle: CSSProperties = {
  display: "grid",
  gap: "24px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const headerStyle: CSSProperties = {
  display: "grid",
  gap: "6px",
};

const errorStyle: CSSProperties = {
  maxWidth: "720px",
  padding: "14px 16px",
  border: "1px solid #fecdca",
  borderRadius: "8px",
  background: "#fffbfa",
  color: "#b42318",
  fontWeight: 700,
};

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
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        window.clearInterval(intervalId);
      }
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [job?.id, job?.status]);

  return (
    <div style={pageStyle}>
      <SanityApp config={config} fallback={<p>Loading...</p>}>
        <main style={contentStyle}>
          <header style={headerStyle}>
            <h1 style={{ margin: 0 }}>AI Provider Editor</h1>
            <p style={{ margin: 0, color: "#555555" }}>Local pipeline review</p>
          </header>

          <ProviderSearchForm
            onJobStarted={(nextJob) => {
              setError(null);
              setJob(nextJob);
            }}
            onError={setError}
          />

          {error ? <div style={errorStyle}>{error}</div> : null}

          <PipelineProgress job={job} />

          {job ? <ProviderResultsReview job={job} /> : null}
        </main>
      </SanityApp>
    </div>
  );
}
