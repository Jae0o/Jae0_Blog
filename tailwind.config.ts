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
      fontSize: {
        small: "var(--font-size-small)",
        semiSmall: "var(--font-size-semi-small)",

        medium: "var(--font-size-medium)",

        semiLarge: "var(--font-size-semi-large)",
        large: "var(--font-size-large)",

        semiBig: "var(--font-size-semi-big)",
        big: "var(--font-size-big)",
      },

      borderRadius: {
        4: "var(--radius-4)",
        8: "var(--radius-8)",
        12: "var(--radius-12)",
        16: "var(--radius-16)",
        20: "var(--radius-20)",
        circle: "var(--radius-circle)",
      },

      fontWeight: {
        regular: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
        semiBold: "var(--font-weight-semi-bold)",
        bold: "var(--font-weight-bold)",
        semiBolder: "var(--font-weight-semi-bolder)",
        bolder: "var(--font-weight-bolder)",
      },

      zIndex: {
        outlet: "var(--z-index-outlet)",
        aside: "var(--z-index-aside)",
        navBackground: "var(--z-index-nav-background)",
        navMenubar: "var(--z-index-nav-menubar)",
        modal: "var(--z-index-modal)",
      },

      transitionDuration: {
        normal: "var(--transition-normal)",
      },

      opacity: {
        low: "var(--opacity-low)",
        normal: "var(--opacity-normal)",
        high: "var(--opacity-high)",
      },

      boxShadow: {
        medium: "var(--shadow-medium)",
        small: "var(--shadow-small)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
