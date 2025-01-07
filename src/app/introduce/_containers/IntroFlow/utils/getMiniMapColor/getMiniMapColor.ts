import tailwindConfig from "@/../tailwind.config";
import { Node } from "@xyflow/react";

import resolveConfig from "tailwindcss/resolveConfig";

const getMiniMapColor = (node: Node) => {
  const { theme } = resolveConfig(tailwindConfig);

  switch (node.type) {
    case "front_title":
      return theme.colors.yellow_500;

    case "front_stack":
      return theme.colors.yellow_500;

    case "deploy_title":
      return theme.colors.red_500;

    case "deploy_stack":
      return theme.colors.red_500;

    case "back_title":
      return theme.colors.green_500;

    case "back_stack":
      return theme.colors.green_500;

    default:
      return theme.colors.yellow_500;
  }
};

export default getMiniMapColor;
