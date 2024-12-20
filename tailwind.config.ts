import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.stories.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.stories.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
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

        React: "var(--color-React)",
        Next: "var(--color-Next)",
        Firebase: "var(--color-Firebase)",
        Typescript: "var(--color-Typescript)",
        StyledComponent: "var(--color-StyledComponent)",
        Storybook: "var(--color-Storybook)",
        Tailwind: "var(--color-Tailwind)",
        KakaoMap: "var(--color-KakaoMap)",
        FramerMotion: "var(--color-FramerMotion)",
        ReactPlayer: "var(--color-ReactPlayer)",

        "text-React": "var(--text-color-React)",
        "text-Next": "var(--text-color-Next)",
        "text-Firebase": "var(--text-color-Firebase)",
        "text-Typescript": "var(--text-color-Typescript)",
        "text-StyledComponent": "var(--text-color-StyledComponent)",
        "text-Storybook": "var(--text-color-Storybook)",
        "text-Tailwind": "var(--text-color-Tailwind)",
        "text-KakaoMap": "var(--text-color-KakaoMap)",
        "text-FramerMotion": "var(--text-color-FramerMotion)",
        "text-ReactPlayer": "var(--text-color-ReactPlayer)",
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

      backgroundImage: {
        skeleton:
          "linear-gradient(120deg, #e6e6e6, #e6e6e6, #f0f0f0, #e6e6e6, #e6e6e6)",
      },

      screens: {
        aside_max_height: { max: "700px" },

        mobile: { max: "480px" },
        tablet: { max: "1050px" },

        home_banner: { max: "800px" },
      },

      keyframes: {
        skeleton: {
          "0%": { transform: "translateX(-100%)" },
          "50%, 100%": { transform: "translateX(100%)" },
        },

        aside_in: {
          "0%": { transform: "translateX(-24rem)", opacity: "0" },
          "40%": { opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
        main_frame_aside_in: {
          "0%": { width: "100%", height: "calc(100% - 6rem)" },
          "100%": { width: "calc(100% - 24rem)", height: "100%" },
        },
        aside_out: {
          "0%": { transform: "translateX(0rem)", opacity: "1" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateX(-24rem)", opacity: "0" },
        },
        main_frame_aside_out: {
          "0%": { width: "calc(100% - 24rem)", height: "100%" },
          "100%": { width: "100%", height: "calc(100% - 6rem)" },
        },
        nav_in: {
          "0%": { transform: "translateY(6rem)", opacity: "0" },
          "40%": { opacity: "0" },
          "100%": { transform: "translateY(0rem)", opacity: "1" },
        },
        nav_out: {
          "0%": { transform: "translateY(0rem)", opacity: "1" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(6rem)", opacity: "0" },
        },
      },

      animation: {
        skeleton: "skeleton 2s infinite linear",

        aside_in: "aside_in 0.6s linear forwards",
        main_frame_aside_in: "main_frame_aside_in 0.6s linear forwards",
        aside_out: "aside_out 0.6s linear forwards",
        main_frame_aside_out: "main_frame_aside_out 0.6s linear forwards",
        nav_in: "nav_in 0.6s linear forwards",
        nav_out: "nav_out 0.6s linear forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
