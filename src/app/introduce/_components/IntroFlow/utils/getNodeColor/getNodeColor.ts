import tailwindConfig from "@/../tailwind.config";
import { Node } from "@xyflow/react";

import resolveConfig from "tailwindcss/resolveConfig";

const getNodeColor = (node: Node) => {
  const { theme } = resolveConfig(tailwindConfig);
  switch (node.type) {
    case "stack":
      return theme.colors.yellow_500;

    default:
      return theme.colors.yellow_500;
  }
};

export default getNodeColor;
