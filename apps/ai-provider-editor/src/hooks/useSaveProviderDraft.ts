import { useCallback } from "react";
import { createDocument, createDocumentHandle, editDocument } from "@sanity/sdk-react";
import { useApplyDocumentActions } from "@sanity/sdk-react";
import { buildProviderDocumentFields, type ProviderDraftFields } from "../pages/JobDetails/utils";
import type { ProviderFormValues } from "../types";

export type SaveProviderDraftResult = { success: true; documentId: string } | { success: false; message: string };

/**
 * Splits the form's fields into what to write and what to clear. A new document
 * only needs the former, but an override does need the latter: a field the form
 * left empty would otherwise keep the existing provider's old value.
 */
function toPatch(fields: ProviderDraftFields) {
  const entries = Object.entries(fields);

  return {
    set: Object.fromEntries(entries.filter(([, value]) => value !== undefined)),
    unset: entries.filter(([, value]) => value === undefined).map(([key]) => key),
  };
}

/**
 * Saves the form's values as an unpublished provider draft — a brand new
 * document, or, given `overrideDocumentId`, the draft of an existing one.
 */
export function useSaveProviderDraft() {
  const apply = useApplyDocumentActions();

  const saveDraft = useCallback(
    async (values: ProviderFormValues, overrideDocumentId?: string): Promise<SaveProviderDraftResult> => {
      const fields = buildProviderDocumentFields(values);

      try {
        if (overrideDocumentId) {
          // Handles are addressed by published id — the duplicate lookup can hand
          // back a `drafts.` id, and the SDK works out the draft from there.
          const providerHandle = createDocumentHandle({
            documentId: overrideDocumentId.replace(/^drafts\./, ""),
            documentType: "provider",
          });

          // Editing a published document creates its draft, so the live listing
          // stays as it is until the override is reviewed and published in Studio.
          await apply(editDocument(providerHandle, toPatch(fields)));
          return { success: true, documentId: providerHandle.documentId };
        }

        const providerHandle = createDocumentHandle({ documentId: crypto.randomUUID(), documentType: "provider" });

        // Two actions, one transaction: `createDocument` alone would create an
        // empty draft, so the field values ride along as a patch applied in the
        // same call. Neither action publishes it — that stays a manual step in
        // Studio once the draft has been reviewed.
        await apply([createDocument(providerHandle), editDocument(providerHandle, { set: fields })]);
        return { success: true, documentId: providerHandle.documentId };
      } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to save the provider.";
        return { success: false, message };
      }
    },
    [apply],
  );

  return { saveDraft };
}
