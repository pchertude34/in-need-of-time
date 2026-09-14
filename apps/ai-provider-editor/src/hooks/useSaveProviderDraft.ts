import { useCallback } from "react";
import { createDocument, createDocumentHandle, editDocument } from "@sanity/sdk";
import { useApplyDocumentActions } from "@sanity/sdk-react";
import { buildProviderDocumentFields } from "../pages/JobDetails/utils";
import type { ProviderFormValues } from "../types";

export type SaveProviderDraftResult = { success: true; documentId: string } | { success: false; message: string };

/** Creates a new, unpublished provider document from the form's values. */
export function useSaveProviderDraft() {
  const apply = useApplyDocumentActions();

  const saveDraft = useCallback(
    async (values: ProviderFormValues): Promise<SaveProviderDraftResult> => {
      const providerHandle = createDocumentHandle({ documentId: crypto.randomUUID(), documentType: "provider" });

      try {
        // Two actions, one transaction: `createDocument` alone would create an
        // empty draft, so the field values ride along as a patch applied in the
        // same call. Neither action publishes it — that stays a manual step in
        // Studio once the draft has been reviewed.
        await apply([
          createDocument(providerHandle),
          editDocument(providerHandle, { set: buildProviderDocumentFields(values) }),
        ]);
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
