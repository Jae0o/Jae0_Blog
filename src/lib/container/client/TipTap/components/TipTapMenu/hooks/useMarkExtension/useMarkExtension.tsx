import { TipTap_BoldIcon } from "@/lib/components/server";

import { TipTapExtensionParams } from "../../../../TipTap.type";
import useToolbarHandler from "../useToolbarHandler/useToolbarHandler";

const useMarkExtension = ({ editor }: TipTapExtensionParams) => {
  const { handleToolbar } = useToolbarHandler({ editor });

  const bold = {
    key: "bold",
    Icon: TipTap_BoldIcon,
    run: () => handleToolbar().toggleBold().run(),
    isActive: editor.isActive("bold"),
  };

  return [bold] as const;
};

export default useMarkExtension;
