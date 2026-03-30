import { createClient } from "next-sanity";

import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID, useCdn } from "../env";

export const client = createClient({
  apiVersion: SANITY_API_VERSION,
  dataset: SANITY_DATASET,
  projectId: SANITY_PROJECT_ID,
  useCdn,
});
