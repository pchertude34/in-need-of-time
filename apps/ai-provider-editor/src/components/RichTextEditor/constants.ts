import { defineSchema } from "@portabletext/editor";

// Kept deliberately close to what the formatting agent emits — plain paragraphs
// with optional emphasis. Widening this means widening `portableTextBlockSchema`
// in providerFormatAgent.ts too, or the agent can't produce what the editor allows.
export const SCHEMA = defineSchema({
  decorators: [{ name: "strong" }, { name: "em" }],
  styles: [{ name: "normal" }, { name: "h3" }],
  lists: [{ name: "bullet" }, { name: "number" }],
  annotations: [],
  blockObjects: [],
  inlineObjects: [],
});

export const TOOLBAR_BUTTON_CLASSES =
  "flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 disabled:opacity-50";

export const TOOLBAR_BUTTON_ACTIVE_CLASSES = "bg-slate-200 text-slate-900";
