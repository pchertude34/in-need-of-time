export type AgentCorePackage = {
  name: "@in-need-of-time/agent-core";
};

export const AGENT_CORE_PACKAGE_NAME: AgentCorePackage["name"] = "@in-need-of-time/agent-core";

export { gatherWebsiteLinks } from "./agents/gatherWebsiteLinks";
export type { GatherWebsiteLinksArgs, GatherWebsiteLinksResult } from "./agents/gatherWebsiteLinks";
export { getUrlContent, getUrlContentToolDefinition } from "./tools/getUrlContent";
export type { ToolFn, ToolCall } from "./types";
