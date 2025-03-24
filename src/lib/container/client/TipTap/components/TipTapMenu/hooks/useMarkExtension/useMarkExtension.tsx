import { TipTap_BoldIcon, TipTap_CodeIcon } from "@/lib/components/server";

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

  const code = {
    key: "code",
    Icon: TipTap_CodeIcon,
    run: () => handleToolbar().toggleCode().run(),
    isActive: editor.isActive("code"),
  };

  return [bold, code] as const;
};

export default useMarkExtension;
