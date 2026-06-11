import { BadRequestException, Body, Controller, InternalServerErrorException, Post } from "@nestjs/common";
import { getUrlContent } from "@in-need-of-time/agent-core";

type UrlContentRequest = {
  url?: string;
  userMessage?: string;
};

@Controller("tools")
export class UrlContentController {
  @Post("url-content")
  async getUrlContent(@Body() body: UrlContentRequest) {
    if (!body?.url || typeof body.url !== "string") {
      throw new BadRequestException("The request body must include a valid 'url' string.");
    }

    try {
      const content = await getUrlContent({
        toolArgs: { url: body.url },
        userMessage: body.userMessage ?? "",
      });

      return {
        url: body.url,
        content,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to fetch URL content";
      throw new InternalServerErrorException(message);
    }
  }
}
