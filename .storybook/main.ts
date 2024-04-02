import { StorybookConfig } from "@storybook/nextjs";

import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {
    autodocs: "tag",
  },

  staticDirs: ["../public"],
  webpackFinal: async prevConfig => {
    if (!prevConfig.resolve) {
      return prevConfig;
    }

    return {
      ...prevConfig,
      resolve: {
        ...prevConfig.resolve,
        alias: {
          ...prevConfig.resolve.alias,
          "@": path.resolve(__dirname, "../src"),
        },
      },
    };
  },
};
export default config;
