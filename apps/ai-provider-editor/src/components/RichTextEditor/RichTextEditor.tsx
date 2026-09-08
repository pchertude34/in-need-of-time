import React from "react";
import { EditorProvider } from "@portabletext/editor";
import { EditorSurface } from "./EditorSurface";
import { SCHEMA } from "./constants";
import type { RichTextEditorToolbarProps } from "./RichTextEditorToolbar";
import type { PortableTextBlock as EditorBlock } from "@portabletext/editor";
import type { PortableTextBlock } from "@portabletext/types";

type RichTextEditorProps = {
  value: PortableTextBlock[];
  onChange: (value: PortableTextBlock[]) => void;
  /** Matches the surrounding form's disabled fieldset, which can't reach a contenteditable. */
  disabled?: boolean;
  /** Which toolbar controls to offer. Everything is shown unless turned off. */
  toolbar?: RichTextEditorToolbarProps;
};

/**
 * Edits Portable Text in the shape the agent emits and Sanity stores, so nothing
 * is flattened to plain text and converted back. Usable for any rich text field
 * on a form, not just the provider description.
 *
 * Everything that touches the editor lives in `EditorSurface`: `useEditor` reads
 * the context this component creates, so it can't be called here.
 */
export function RichTextEditor(props: RichTextEditorProps) {
  const { value, onChange, disabled = false, toolbar } = props;

  return (
    <div className="focus-within:border-primary-500 focus-within:ring-primary-200 rounded-xl border border-slate-300 bg-white focus-within:ring-2">
      <EditorProvider
        initialConfig={{ schemaDefinition: SCHEMA, initialValue: value as EditorBlock[], readOnly: disabled }}
      >
        <EditorSurface value={value} onChange={onChange} readOnly={disabled} toolbar={toolbar} />
      </EditorProvider>
    </div>
  );
}
