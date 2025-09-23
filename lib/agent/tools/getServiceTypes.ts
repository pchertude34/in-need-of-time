import { type ToolFn } from "../types";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { z } from "zod";

type GROQResponse = {
  name: string;
  description: string;
  _id: string;
};

const query = groq`*[_type == "serviceType"] {
    _id,
    name,
    description,
  }`;

export const getServiceTypesToolDefinition = {
  name: "get_service_types",
  parameters: z.object({}),
  description: "Fetches all currently available service types to use to build out provider information.",
};

type Args = z.infer<typeof getServiceTypesToolDefinition.parameters>;

export const getServiceTypes: ToolFn<Args, string> = async ({ toolArgs, userMessage }) => {
  try {
    console.log("running getServiceTypes tool");
    const serviceTypes: GROQResponse[] = await client.fetch(query);
    return JSON.stringify(serviceTypes);
  } catch (err) {
    throw `Failed to fetch service types`;
  }
};
