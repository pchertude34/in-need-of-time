import { SANITY_APP_STUDIO_URL } from "../env";

// A trailing slash in the configured URL would otherwise double up against the
// intent path below.
const STUDIO_BASE_URL = SANITY_APP_STUDIO_URL.replace(/\/+$/, "");

/**
 * A link to a provider's edit view in Sanity Studio.
 *
 * Opened by intent rather than a structure path, so the link survives a change
 * to how providers are organised in the Studio's desk structure.
 *
 * Drafts are addressed by their published id: `drafts.`-prefixed ids are what
 * this app's token-authenticated queries see, but the edit intent resolves a
 * document by published id and opens the draft from there on its own.
 */
export function getStudioProviderUrl(documentId: string): string {
  const publishedId = documentId.replace(/^drafts\./, "");

  return `${STUDIO_BASE_URL}/intent/edit/id=${encodeURIComponent(publishedId)};type=provider`;
}
