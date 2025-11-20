import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forest Green
        "forest-dark": "#04110B",
        "forest-light": "#061710",
        // Dark Grey
        "grey-dark": "#101317",
        "grey-light": "#15181D",
        // Mint Accent
        "mint": "#34D399",
        "mint-light": "#6EE7B7",
        // Muted Moss
        "moss": "#3F5C4A",
        "moss-light": "#4B7A5A",
        // Text
        "text-primary": "#F9FAFB",
        "text-secondary": "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
