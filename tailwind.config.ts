import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: {
          50: "#F0FBFB",
          100: "#D8F2F5",
          200: "#B6E6EB",
          300: "#84D3DC",
          400: "#4AB7C6",
          500: "#309FB0",
          600: "#2A7D90",
          700: "#286676",
          800: "#285562",
          900: "#142E38",
        },
        secondary: {
          50: "#FDF4F3",
          100: "#FCE6E4",
          200: "#FAD1CE",
          300: "#F6B0AB",
          400: "#ED766E",
          500: "#E35950",
          600: "#CF3D33",
          700: "#AE3027",
          800: "#902B24",
          900: "#41110E",
        },
        error: {
          50: "#FDF2F4",
          100: "#FCE9EC",
          200: "#F7CAD2",
          300: "#F2ABB8",
          400: "#EB7A8F",
          500: "#DF2A4A",
          600: "#CC1F3E",
          700: "#B61B38",
          800: "#92162D",
          900: "#6F1122",
        },
        warning: {
          50: "#FFF7EB",
          100: "#FFEFD6",
          200: "#FFDEAD",
          300: "#FFC670",
          400: "#FFAD33",
          500: "#F29100",
          600: "#DB8400",
          700: "#BD7100",
          800: "#A36200",
          900: "#754600",
        },
        success: {
          50: "#E3FCF2",
          100: "#BFF8E0",
          200: "#67EFB6",
          300: "#17D888",
          400: "#14B874",
          500: "#0F8A56",
          600: "#0D7C4E",
          700: "#0B6A43",
          800: "#0A5C3A",
          900: "#074028",
        },
        info: {
          50: "#F0F5FE",
          100: "#E7EEFE",
          200: "#C9D9FD",
          300: "#A2BDFB",
          400: "#769DF9",
          500: "#376FF6",
          600: "#1E5FF5",
          700: "#0A4CE5",
          800: "#0942C8",
          900: "#062F8E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-image": "url('/images/hero-image.jpg')",
        "radial-gradient-center": "radial-gradient(circle_at_center,_var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
