import OpenAI from "openai";
import { OPENAI_API_KEY } from "@/env";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
