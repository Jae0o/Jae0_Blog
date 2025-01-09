import tailwindConfig from "@/../tailwind.config";
import { Node } from "@xyflow/react";

import resolveConfig from "tailwindcss/resolveConfig";

const getMiniMapColor = (node: Node) => {
  const { theme } = resolveConfig(tailwindConfig);

  switch (node.data.type) {
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

export default getMiniMapColor;
