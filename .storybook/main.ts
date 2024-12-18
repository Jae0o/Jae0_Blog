import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  webpackFinal: async prevConfig => {
    const newConfig = { ...prevConfig };

    if (newConfig.resolve) {
      newConfig.resolve.alias = {
        ...newConfig.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
        // useRoute에 대한 mocking
        "next/navigation": path.resolve(
          __dirname,
          "./mocks/nextNavigationMock.ts",
        ),
      };
    }

    return newConfig;
  },

  staticDirs: ["../public"],
};
export default config;
