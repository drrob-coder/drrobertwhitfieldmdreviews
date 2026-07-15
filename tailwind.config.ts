import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",        // near-black background
        surface: "#141414",    // dark card surface
        surfaceAlt: "#1a1a1a", // slightly lighter surface
        brand: "#C9A84C",      // gold accent (matches drrobertwhitfield.com)
        brandDark: "#A8893D",  // darker gold
        gold: "#C9A84C",       // star / rating gold
        mist: "#f5f5f5",       // light text
        line: "#2a2a2a",       // border color on dark
        textPrimary: "#ffffff",
        textSecondary: "#a3a3a3"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"]
      },
      maxWidth: {
        content: "1120px"
      }
    }
  },
  plugins: []
};

export default config;
