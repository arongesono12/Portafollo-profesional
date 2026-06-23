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
          overlay: "rgb(var(--surface-overlay-rgb) / 0.05)",
          solid: "var(--surface-solid)",
        },
        primary:   "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted:     "var(--text-muted)",
        inverse:   "var(--text-inverse)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-hover": "rgb(var(--accent-hover-rgb) / <alpha-value>)",
        border: {
          subtle:  "var(--border-subtle)",
          DEFAULT: "var(--border-default)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-roboto)", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "sans-serif"],
        tech: ["var(--font-ibm-plex)", "var(--font-inter)", "sans-serif"],
        document: ["var(--font-roboto)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex)", "monospace"],
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
