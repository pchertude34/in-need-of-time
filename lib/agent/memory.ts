import { JSONFilePreset } from "lowdb/node";
import type { AIMessage } from "./types";
import { v4 as uuidv4 } from "uuid";

export type MessageWithMetadata = AIMessage & {
  id: string;
  createdAt: string;
};

type Data = {
  messages: MessageWithMetadata[];
  summary: string;
};

export const addMetadata = (message: AIMessage) => {
  return {
    ...message,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };
};

export const removeMetadata = (message: MessageWithMetadata) => {
  const { id, createdAt, ...rest } = message;
  return rest;
};

const defaultData: Data = {
  messages: [],
  summary: "",
};

export const getDb = async () => {
  const db = await JSONFilePreset<Data>("db.json", defaultData);
  return db;
};

export const addMessages = async (messages: AIMessage[]) => {
  const db = await getDb();
  db.data.messages.push(...messages.map(addMetadata));

  await db.write();
};

export const getMessages = async () => {
  const db = await getDb();
  const messages = await db.data.messages.map(removeMetadata);
  const last5 = messages.slice(-5);

  if (last5[0]?.role === "tool") {
    const sixthMessage = messages[messages.length - 6];
    if (sixthMessage) {
      return [...[sixthMessage], ...last5];
    }
  }

  return last5;
};

export const saveToolResponse = async (toolCallId: string, toolResponse: string) => {
  return addMessages([
    {
      role: "tool",
      content: toolResponse,
      tool_call_id: toolCallId,
    },
  ]);
};
