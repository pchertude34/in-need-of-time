import "./index.css";
import React from "react";
import { AddProviderPage } from "./pages/AddProvider/page";
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
        <AddProviderPage />
      </SanityApp>
    </div>
  );
}
