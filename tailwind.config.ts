import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      primary: ["var(--primary-font)", ...defaultTheme.fontFamily.sans],
      secondary: ["var(--secondary-font)", ...defaultTheme.fontFamily.serif]
    }
  },
  plugins: [typography]
};

export default config;
