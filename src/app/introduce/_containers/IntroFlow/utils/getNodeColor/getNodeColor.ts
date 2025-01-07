import tailwindConfig from "@/../tailwind.config";

import { NodeType } from "../../types";

import resolveConfig from "tailwindcss/resolveConfig";

const getNodeColor = (type: NodeType) => {
  const { theme } = resolveConfig(tailwindConfig);

  switch (type) {
    case "front":
      return theme.colors.yellow_500;

    case "deploy":
      return theme.colors.red_500;

    case "back":
      return theme.colors.green_500;

    default:
      return theme.colors.yellow_500;
  }
};

export default getNodeColor;
