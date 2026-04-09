import { createClient } from "next-sanity";

import { SANITY_API_VERSION, SANITY_STUDIO_DATASET, SANITY_STUDIO_PROJECT_ID, useCdn } from "../../env";

export const client = createClient({
  apiVersion: SANITY_API_VERSION,
  dataset: SANITY_STUDIO_DATASET,
  projectId: SANITY_STUDIO_PROJECT_ID,
  useCdn,
});
