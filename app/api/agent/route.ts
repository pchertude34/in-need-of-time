import { runAgent } from "@/lib/agent/agent";
import { getUrlContentToolDefinition } from "@/lib/agent/tools/getUrlContent";

export async function POST(request: Request) {
  const { userMessage } = await request.json();

  try {
    const response = await runAgent({
      userMessage: userMessage,
      tools: [getUrlContentToolDefinition],
    });

    return Response.json(JSON.parse(response?.content || "{}"));
  } catch (error: any) {
    const errorMessage = error || "Internal server error";
    return new Response(errorMessage, {
      status: 500,
      statusText: errorMessage,
    });
  }
}
