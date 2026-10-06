/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";
import { SANITY_STUDIO_DATASET, SANITY_STUDIO_PROJECT_ID } from "./env";

export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
  },
  // `sanity dev`'s default, pinned explicitly: the apps in `apps/*` are moved
  // off this port so they can run alongside the Studio, and one of them links
  // back here at exactly this URL in development.
  server: {
    port: 3333,
  },
});
