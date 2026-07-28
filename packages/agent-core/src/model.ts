import { openai } from "@ai-sdk/openai";

// The provider reads OPENAI_API_KEY from the environment at request time
// (the server loads it from .dev.vars on startup).
export const GPT_5 = openai("gpt-5.5");
