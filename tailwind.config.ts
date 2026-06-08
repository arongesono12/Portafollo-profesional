import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          base:   "rgb(var(--surface-base-rgb) / <alpha-value>)",
          raised: "rgb(var(--surface-raised-rgb) / <alpha-value>)",
          card:   "rgb(var(--surface-card-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
        mono: ["var(--font-roboto)"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        label:   "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
