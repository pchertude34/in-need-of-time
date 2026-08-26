import type { Config } from "tailwindcss";
import sharedPreset from "@in-need-of-time/ui/tailwind.preset";

const config = {
  presets: [sharedPreset],
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
} satisfies Config;

export default config;
