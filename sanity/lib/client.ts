import { createClient } from "next-sanity";

import {
  NEXT_PUBLIC_SANITY_API_VERSION,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn,
} from "@/env";

export const client = createClient({
  apiVersion: NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn,
});
