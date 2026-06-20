import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f3efe8",
        surface: "#fbf8f2",
        ink: "#111111",
        charcoal: "#050505",
        paper: "#f8f5ef",
        muted: "#645f58",
        line: "rgba(17, 17, 17, 0.12)",
        lineInverse: "rgba(255, 255, 255, 0.14)",
        accent: "#111111"
      },
      fontFamily: {
        sans: ["Instrument Sans", "system-ui", "sans-serif"],
        display: ["Instrument Sans", "system-ui", "sans-serif"]
      },
      maxWidth: {
        shell: "1380px"
      },
      letterSpacing: {
        display: "-0.045em"
      }
    }
  },
  plugins: []
};

export default config;
