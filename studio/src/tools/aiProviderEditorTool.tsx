import type { Tool } from "sanity";
import { Button, Card, Flex, Stack, Text } from "@sanity/ui";
import { LaunchIcon, RobotIcon } from "@sanity/icons";

/**
 * A Studio navbar entry that opens the AI Provider Editor (`apps/ai-provider-editor`).
 *
 * App SDK apps live in the Sanity Dashboard, not inside a Studio, so this is a
 * link out rather than an embedded view — the app runs in its own tab.
 */
export function aiProviderEditorTool(url: string): Tool {
  return {
    name: "ai-provider-editor",
    title: "AI Provider Editor",
    icon: RobotIcon,
    component: () => <AiProviderEditorLauncher url={url} />,
  };
}

function AiProviderEditorLauncher({ url }: { url: string }) {
  return (
    <Flex align="center" justify="center" height="fill" padding={4}>
      <Card padding={5} radius={3} shadow={1} style={{ maxWidth: 480 }}>
        <Stack space={4}>
          <Text size={3} weight="semibold">
            AI Provider Editor
          </Text>
          <Text muted>The editor is a separate Sanity app, so it opens in a new tab.</Text>
          <Button
            as="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            icon={LaunchIcon}
            text="Open editor"
            tone="primary"
          />
        </Stack>
      </Card>
    </Flex>
  );
}
