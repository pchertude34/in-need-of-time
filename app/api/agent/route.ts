import { runAgent } from "@/lib/agent/agent";
import { db } from "@/db/db";
import { agentAuditLogTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const { userMessage, userId } = await request.json();
  const token = request.headers.get("x-api-key");

  if (token !== process.env.NEXT_PUBLIC_LOCAL_API_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // Create the initial agent audit log entry with PENDING status
    const agentLog = await db
      .insert(agentAuditLogTable)
      .values({
        user_id: userId,
        input: userMessage,
        status: "PENDING",
      })
      .returning();

    const { response, messages, error } = await runAgent({
      userMessage: userMessage,
    });

    // Update the agent audit log entry with the final status and output
    await db
      .update(agentAuditLogTable)
      .set({
        output: response,
        agent_messages: messages,
        status: error ? "FAILED" : "COMPLETED",
        error: error,
      })
      .where(eq(agentAuditLogTable.id, agentLog[0].id));

    // If the agent errors, we want the response to be a 500
    if (error) {
      return new Response(error, { status: 500 });
    }

    return Response.json(JSON.parse(response || "{}"));
  } catch (error: any) {
    const errorMessage = error || "Internal server error";
    return new Response(errorMessage, {
      status: 500,
      statusText: errorMessage,
    });
  }
}
