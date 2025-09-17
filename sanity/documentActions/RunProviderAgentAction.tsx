import React, { useEffect, useState } from "react";
import { useDocumentOperation, type DocumentActionProps } from "sanity";
import { Button, TextArea, Stack, Flex, Label, TextInput, Text } from "@sanity/ui";
import { PlayIcon } from "@sanity/icons";
import { nanoid } from "nanoid";
import { z } from "zod";
import FirecrawlApp from "@mendable/firecrawl-js";
import type { ProviderAgentResponse } from "@/lib/types";
import providerSchema from "../schemas/provider/provider";
import { Provider } from "@/sanity.types";
import { systemPrompt } from "@/lib/agent/systemPrompt";

const app = new FirecrawlApp({
  apiKey: "fc-de60073bc9ff46fbaf4982fc716c806d",
});

const schema = z.object({
  name: z.string(),
  description: z.array(
    z.object({
      _type: z.literal("block"),
      children: z.array(
        z.object({
          _type: z.literal("span"),
          text: z.string(),
        }),
      ),
      markDefs: z.array(z.any()),
      style: z.string(),
    }),
  ),
  address: z.string().optional(),
  location: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .optional(),
  hoursOfOperation: z
    .object({
      periods: z.array(
        z.object({
          open: z.object({
            day: z.number(),
            time: z.string(),
          }),
          close: z.object({
            day: z.number(),
            time: z.string(),
          }),
        }),
      ),
      weekdayText: z.array(z.string()),
    })
    .optional(),
  contact: z
    .object({
      phone: z.string().optional(),
      email: z.string().optional(),
      website: z.string().optional(),
    })
    .optional(),
});

export function RunProviderAgentAction(props: DocumentActionProps) {
  const { id, type, draft, published } = props;
  // If we are in a draft state, let's proritize using that since it should be the most up-to-date.
  const doc = (draft || published) as Provider;
  // Agent Request is always a string
  const [agentUrl, setAgentUrl] = useState<string>(doc?.agentRequest?.url || "");
  const [agentInstructions, setAgentInstructions] = useState<string>(doc?.agentRequest?.instructions || "");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Loading states for running the agent request
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const { patch } = useDocumentOperation(id, type);

  useEffect(() => {
    console.log("mounting");
  }, []);

  async function handleRunAgent() {
    try {
      // Reset all loading states prior to running the agent
      setError(null);
      setIsLoading(true);
      setSuccess(false);

      // const agentResponse: ProviderAgentResponse = await fetch("/api/agent", {
      //   method: "POST",
      //   body: JSON.stringify({ userMessage: agentInstructions }),
      // }).then((res) => res.json());

      const agentResponse = await app
        .scrape(agentUrl, {
          onlyMainContent: true,

          formats: [
            {
              type: "json",
              prompt: systemPrompt,
              schema,
            },
          ],
        })
        .then((res) => res.json);

      if (!agentResponse) {
        throw new Error("No response from agent");
      }
      patch.execute([
        {
          set: {
            agentRequest: { url: agentUrl, instructions: agentInstructions },
            // The description field is an array of rich text blocks
            description: agentResponse.description.map((chunk) => ({ ...chunk, _key: nanoid() })) || doc?.description,
            address: agentResponse.address || doc?.address,
            location: agentResponse.location || doc?.location,
            publicContact: agentResponse.contact || doc?.publicContact,
            hoursOfOperation:
              agentResponse.hoursOfOperation?.periods.map((period) => ({ ...period, _key: nanoid() })) ||
              doc?.hoursOfOperation,
          },
        },
      ]);

      setSuccess(true);
    } catch (error) {
      setError("Failed to run agent. Please try again later.");
      setSuccess(false);
    }
    setIsLoading(false);
  }

  return {
    label: "Run Provider Agent",
    icon: PlayIcon,
    onHandle: () => {
      setIsDialogOpen(true);
    },
    dialog: isDialogOpen && {
      type: "dialog",
      onClose: () => {
        setIsDialogOpen(false);
      },
      header: "Run Provider Agent",
      content: (
        <Stack space={4}>
          <Stack space={2}>
            <Label>Agent URL</Label>
            <TextInput value={agentUrl} onChange={(e) => setAgentUrl(e.currentTarget.value)}></TextInput>
          </Stack>
          <Stack space={2}>
            <Label>Agent Instructions</Label>
            <TextArea
              value={agentInstructions}
              onChange={(e) => setAgentInstructions(e.currentTarget.value)}
            ></TextArea>
            {error && (
              <Text size={1} style={{ color: "red" }}>
                {error}
              </Text>
            )}
            {success && (
              <Text size={1} color="gray">
                Agent successfully ran and updated the provider fields. Please close the dialog to verify and publish
                the changes.
              </Text>
            )}
          </Stack>
          <Flex justify={"flex-end"} gap={2}>
            <Button
              text={isLoading ? "Running..." : "Run Agent"}
              disabled={isLoading}
              onClick={handleRunAgent}
              tone="primary"
            />
            <Button text="Cancel" onClick={() => setIsDialogOpen(false)} mode="ghost" />
          </Flex>
        </Stack>
      ),
    },
  };
}
