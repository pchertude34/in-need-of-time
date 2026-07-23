import { config } from "dotenv";
import { PageScrapeAgent } from "./agents";

config({ path: "../../.env.local" });
const result = await PageScrapeAgent.generate({
  prompt: "Hi there my name is Bob",
});

console.log(result.text);
console.log(result.steps);
