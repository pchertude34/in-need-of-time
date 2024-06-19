/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { googleMapsInput } from "@sanity/google-maps-input";
import { defaultDocumentNodeResolver, structure } from "./structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {
  NEXT_PUBLIC_SANITY_API_VERSION,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_GOOGLE_API_KEY,
} from "./env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({ structure, defaultDocumentNode: defaultDocumentNodeResolver }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: NEXT_PUBLIC_SANITY_API_VERSION }),
    googleMapsInput({
      apiKey: NEXT_PUBLIC_GOOGLE_API_KEY,
    }),
  ],
});
