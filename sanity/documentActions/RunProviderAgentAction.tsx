import React, { useState } from "react";
import { useDocumentOperation, type DocumentActionProps } from "sanity";
import { Button, TextArea, Stack, Flex, Label, Text } from "@sanity/ui";
import { PlayIcon } from "@sanity/icons";
import { nanoid } from "nanoid";
import type { ProviderAgentResponse } from "@/lib/types";
import type { Provider } from "@/sanity.types";

export function RunProviderAgentAction(props: DocumentActionProps) {
  const { id, type, draft, published } = props;
  // If we are in a draft state, let's proritize using that since it should be the most up-to-date.
  const doc = (draft || published) as Provider;
  // Agent Request is always a string
  const [agentInstructions, setAgentInstructions] = useState<string>(doc?.agentRequest || "");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Loading states for running the agent request
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const { patch } = useDocumentOperation(id, type);

  async function handleRunAgent() {
    try {
      // Reset all loading states prior to running the agent
      setError(null);
      setIsLoading(true);
      setSuccess(false);

      const agentResponse: ProviderAgentResponse = await fetch("/api/agent", {
        method: "POST",
        body: JSON.stringify({ userMessage: agentInstructions }),
      }).then((res) => res.json());

      patch.execute([
        {
          set: {
            agentRequest: agentInstructions,
            // The description field is an array of rich text blocks
            description: agentResponse.description.map((chunk) => ({ ...chunk, _key: nanoid() })) || doc?.description,
            address: agentResponse.address || doc?.address,
            location: agentResponse.location || doc?.location,
            serviceTypes:
              agentResponse.serviceTypes?.map((serviceType) => ({
                _type: "reference",
                _ref: serviceType._id,
                _key: nanoid(),
              })) || doc?.serviceTypes,
            publicContact: agentResponse.contact || doc?.publicContact,
            hoursOfOperation:
              agentResponse.hoursOfOperation.periods.map((period) => ({ ...period, _key: nanoid() })) ||
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
            <Label>Agent Instructions</Label>
            <TextArea
              value={agentInstructions}
              onChange={(e) => setAgentInstructions(e.currentTarget.value)}
              rows={5}
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
