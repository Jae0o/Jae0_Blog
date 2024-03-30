import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      black_500: "#323133",
      black_300: "#434a54",

      red_500: "#da4453",
      red_300: " #ed5565",

      yellow_500: "#ffce54",

      green_500: "#a0d468",
      green_700: "#8cc152",

      white_500: "#fafafa",
      white_700: "#e6e9ed",

      grey_500: "#ccd1d9",
      grey_700: "#656d78",

      text_main: "#323133",
      text_sub: "#ffce54",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
