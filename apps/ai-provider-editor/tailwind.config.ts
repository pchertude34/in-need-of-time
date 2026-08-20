import type { Config } from "tailwindcss";
import sharedPreset from "@in-need-of-time/ui/tailwind.preset";

const config = {
  presets: [sharedPreset],
  prefix: "",
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
