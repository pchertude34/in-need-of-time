import { Module } from "@nestjs/common";

import { HealthController } from "./health.controller";
import { UrlContentController } from "./url-content.controller";

@Module({
  controllers: [HealthController, UrlContentController],
})
export class AppModule {}
