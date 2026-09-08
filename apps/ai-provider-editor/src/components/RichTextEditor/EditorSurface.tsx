import React, { useEffect, useRef } from "react";
import { PortableTextEditable, useEditor } from "@portabletext/editor";
import { cn } from "@in-need-of-time/utils";
import { RichTextEditorToolbar, type RichTextEditorToolbarProps } from "./RichTextEditorToolbar";
import type { PortableTextBlock as EditorBlock } from "@portabletext/editor";
import type { PortableTextBlock } from "@portabletext/types";

type EditorSurfaceProps = {
  value: PortableTextBlock[];
  onChange: (value: PortableTextBlock[]) => void;
  readOnly: boolean;
  toolbar?: RichTextEditorToolbarProps;
};

/**
 * Everything below the provider, which is everything that needs `useEditor` —
 * the toolbar, the editable, and keeping the editor in step with the form.
 *
 * `initialConfig` is only read once, so both `readOnly` and the value have to be
 * pushed in as events afterwards — otherwise an editor that mounts read-only (as
 * it does on the job page, where the form starts disabled until the job's events
 * arrive) stays that way, and a value that lands later never shows up.
 */
export function EditorSurface(props: EditorSurfaceProps) {
  const { value, onChange, readOnly, toolbar } = props;
  const editor = useEditor();
  // What we last handed to the form, so its echo back isn't mistaken for an
  // outside edit and pushed into the editor mid-keystroke.
  const lastEmitted = useRef<PortableTextBlock[] | null>(null);

  useEffect(() => {
    // The editor bundles its own copy of the Portable Text types (its
    // `@portabletext/types` is v4, the repo's is v2), so the block type is
    // structurally the same but nominally different. Casting at this boundary
    // keeps that detail from leaking into the form's types.
    const subscription = editor.on("mutation", (event) => {
      const next = (event.value ?? []) as PortableTextBlock[];
      lastEmitted.current = next;
      onChange(next);
    });

    return () => subscription.unsubscribe();
  }, [editor, onChange]);

  useEffect(() => {
    editor.send({ type: "update readOnly", readOnly });
  }, [editor, readOnly]);

  useEffect(() => {
    if (value === lastEmitted.current) {
      return;
    }

    editor.send({ type: "update value", value: value as EditorBlock[] });
  }, [editor, value]);

  return (
    <>
      <RichTextEditorToolbar {...toolbar} />
      <PortableTextEditable
        className="min-h-32 px-3.5 py-2.5 text-base text-slate-900 focus:outline-none"
        renderDecorator={(decoratorProps) => {
          if (decoratorProps.value === "strong") {
            return <strong>{decoratorProps.children}</strong>;
          }

          if (decoratorProps.value === "em") {
            return <em>{decoratorProps.children}</em>;
          }

          return <>{decoratorProps.children}</>;
        }}
        renderStyle={(styleProps) =>
          styleProps.schemaType.value === "h3" ? (
            <h3 className="text-base font-semibold">{styleProps.children}</h3>
          ) : (
            <>{styleProps.children}</>
          )
        }
        renderListItem={(listProps) => (
          // A bare <li>: the editable is a flat list of blocks, so there's no
          // <ul>/<ol> to nest into. `list-inside` keeps the marker within the
          // editor's padding instead of hanging outside it, and `level` (1-based)
          // is the nesting depth.
          <li
            className={cn("list-inside", listProps.value === "number" ? "list-decimal" : "list-disc")}
            style={{ marginLeft: `${(listProps.level - 1) * 1.25}rem` }}
          >
            {listProps.children}
          </li>
        )}
        // List items sit tighter together than paragraphs do.
        renderBlock={(blockProps) => (
          <div className={cn(blockProps.listItem ? "mb-0.5" : "mb-2", "last:mb-0")}>{blockProps.children}</div>
        )}
      />
    </>
  );
}
