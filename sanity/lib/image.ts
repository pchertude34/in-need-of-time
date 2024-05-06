import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_PROJECT_ID } from "@/env";

const imageBuilder = createImageUrlBuilder({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: NEXT_PUBLIC_SANITY_DATASET || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
