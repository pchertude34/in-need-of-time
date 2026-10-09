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
