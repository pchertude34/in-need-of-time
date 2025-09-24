import { runAgent } from "@/lib/agent/agent";

export async function POST(request: Request) {
  const { userMessage } = await request.json();
  const token = request.headers.get("x-api-key");

  if (token !== process.env.NEXT_PUBLIC_LOCAL_API_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const response = await runAgent({
      userMessage: userMessage,
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
