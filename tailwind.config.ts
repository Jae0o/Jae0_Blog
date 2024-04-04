import type { Config } from "tailwindcss";

import theme from "daisyui/src/theming/themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        light: {
          ...theme.light,
          primary: "#ffce54", // yellow
          secondary: "#a0d468", // green
          accent: "#da4453", // red
          neutral: "#ff00ff",
          "base-100": "#ffffff",
        },

        dark: {
          ...theme.dark,
          primary: "#ffce54", // yellow
          secondary: "#a0d468", // green
          accent: "#da4453", // red
          neutral: "#ff00ff",
          "base-100": "#ffffff",
        },
      },
    ],
  },

  plugins: [
    require("tailwind-scrollbar-hide"),
    require("daisyui"),
    require("tailwindcss-animated"),
  ],
};
export default config;
