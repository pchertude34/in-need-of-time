import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddProviderPage } from "./pages/AddProvider/page";
import { AgentRunsPage } from "./pages/AgentRuns/page";
import { JobDetailsPage } from "./pages/JobDetails/page";
import { SanityApp } from "@sanity/sdk-react";
import { type SanityConfig } from "@sanity/sdk";
// import { SANITY_APP_DATASET, SANITY_APP_PROJECT_ID } from '../env';
// console.log('process.env :>> ', process.env);
export default function App() {
  const config: SanityConfig[] = [
    {
      projectId: process.env.SANITY_APP_PROJECT_ID,
      dataset: process.env.SANITY_APP_DATASET,
    },
  ];
  return (
    <SanityApp config={config} fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <Navbar />
        <main className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<AddProviderPage />} />
            <Route path="/runs" element={<AgentRunsPage />} />
            <Route path="/job/:jobId" element={<JobDetailsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </SanityApp>
  );
}
