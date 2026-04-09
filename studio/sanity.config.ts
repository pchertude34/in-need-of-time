/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { googleMapsInput } from "@sanity/google-maps-input";
import { defaultDocumentNodeResolver, structure } from "./src/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {
  SANITY_API_VERSION,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_GOOGLE_API_KEY,
} from "./env";
import { schema } from "./schema";
import { RunProviderAgentAction } from "./src/documentActions/RunProviderAgentAction";

export default defineConfig({
  basePath: "/studio",
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({ structure, defaultDocumentNode: defaultDocumentNodeResolver }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: SANITY_API_VERSION }),
    googleMapsInput({ apiKey: SANITY_STUDIO_GOOGLE_API_KEY }),
  ],
  document: {
    // For whatever reason, sanity has an issue with the return of RunProviderAgent action
    // event thought the return schema follows the docs perfectly.
    // https://www.sanity.io/docs/studio/document-actions-api#k037f877ad3f1
    // @ts-ignore
    actions: (prev, context) => {
      return context.schemaType === "provider" ? [...prev, RunProviderAgentAction] : prev;
    },
  },
});
