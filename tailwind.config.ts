import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        black_500: "var(--black)",
        black_300: "var(--light_black)",

        red_500: "var(--red)",
        red_300: "var(--light_red)",

        yellow_500: "var(--yellow)",

        green_500: "var(--green)",
        green_700: "var(--dark_green)",

        gray_500: "var(--gray)",
        gray_700: "var(--dark_gray)",

        white_500: "var(--white)",
        white_300: "var(--light_white)",

        text: "var(--text)",
        text_point: "var(--text_point)",

        transparent_10: "var(--transparent_10)",
        transparent_30: "var(--transparent_30)",
        transparent_50: "var(--transparent_50)",
        transparent_90: "var(--transparent_90)",
      },
    },
  },
  plugins: [],
} satisfies Config;
