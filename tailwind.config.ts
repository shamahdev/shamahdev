import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["var(--primary-font)", ...defaultTheme.fontFamily.sans],
      secondary: ["var(--secondary-font)", ...defaultTheme.fontFamily.serif],
    },
    variants: {
      animation: ["motion-safe", "motion-reduce"],
    },
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-end": "marquee-end 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-end": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
