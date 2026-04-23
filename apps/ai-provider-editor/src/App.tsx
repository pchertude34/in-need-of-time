import React from "react";
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
    <div>
      <SanityApp config={config} fallback={<p>Loading...</p>}>
        <h1>AI Provider Editor</h1>
        <p>This is where you can edit your AI providers.</p>
      </SanityApp>
    </div>
  );
}
