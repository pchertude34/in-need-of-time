import { useCallback, useState } from "react";
import { createDocument, createDocumentHandle, editDocument } from "@sanity/sdk";
import { useApplyDocumentActions } from "@sanity/sdk-react";
import { buildProviderDocumentFields } from "../pages/JobDetails/utils";
import type { ProviderFormValues } from "../types";

export type SaveProviderDraftState =
  | { status: "idle" }
  | { status: "saving" }
  | { status: "saved"; documentId: string }
  | { status: "error"; message: string };

/** Creates a new, unpublished provider document from the form's values. */
export function useSaveProviderDraft() {
  const apply = useApplyDocumentActions();
  const [state, setState] = useState<SaveProviderDraftState>({ status: "idle" });

  // Returns whether the save succeeded, so a caller that needs to chain work
  // after saving (e.g. deleting the job the draft came from) doesn't have to
  // infer it back out of `state`.
  const saveDraft = useCallback(
    async (values: ProviderFormValues): Promise<boolean> => {
      setState({ status: "saving" });

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
        setState({ status: "saved", documentId: providerHandle.documentId });
        return true;
      } catch (error) {
        setState({ status: "error", message: error instanceof Error ? error.message : "Failed to save the provider." });
        return false;
      }
    },
    [apply],
  );

  return { saveDraft, state };
}
