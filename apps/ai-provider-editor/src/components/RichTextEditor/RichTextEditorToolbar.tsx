import React from "react";
import { BoldIcon, ItalicIcon, ListBulletIcon, NumberedListIcon } from "@heroicons/react/24/outline";
import { DecoratorButton } from "./DecoratorButton";
import { ListButton } from "./ListButton";
import { StyleButton } from "./StyleButton";

/**
 * Which controls the toolbar offers. Every one is on by default — a field that
 * wants a plainer editor turns off what it doesn't allow, rather than each
 * caller having to opt into the basics.
 */
export type RichTextEditorToolbarProps = {
  bold?: boolean;
  italic?: boolean;
  bulletList?: boolean;
  numberedList?: boolean;
  heading?: boolean;
};

export function RichTextEditorToolbar(props: RichTextEditorToolbarProps) {
  const { bold = true, italic = true, bulletList = true, numberedList = true, heading = true } = props;

  const hasDecorators = bold || italic;
  const hasLists = bulletList || numberedList;

  return (
    <div className="flex items-center gap-1 border-b border-slate-200 px-2 py-1.5">
      {bold && (
        <DecoratorButton decorator="strong" label="Bold">
          <BoldIcon className="h-4 w-4" />
        </DecoratorButton>
      )}
      {italic && (
        <DecoratorButton decorator="em" label="Italic">
          <ItalicIcon className="h-4 w-4" />
        </DecoratorButton>
      )}
      {/* Separators only earn their place between two groups that are both shown. */}
      {hasDecorators && hasLists && <span className="mx-1 h-4 w-px bg-slate-200" />}
      {bulletList && (
        <ListButton listItem="bullet" label="Bulleted list">
          <ListBulletIcon className="h-4 w-4" />
        </ListButton>
      )}
      {numberedList && (
        <ListButton listItem="number" label="Numbered list">
          <NumberedListIcon className="h-4 w-4" />
        </ListButton>
      )}
      {(hasDecorators || hasLists) && heading && <span className="mx-1 h-4 w-px bg-slate-200" />}
      {heading && (
        <StyleButton style="h3" label="Heading">
          H3
        </StyleButton>
      )}
    </div>
  );
}
