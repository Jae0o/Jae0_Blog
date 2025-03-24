import { useCallback } from "react";

import { TipTapExtensionParams } from "../../../../TipTap.type";

const useToolbarHandler = ({ editor }: TipTapExtensionParams) => {
  const handleToolbar = useCallback(() => editor.chain().focus(), [editor]);

  return {
    handleToolbar,
  };
};

export default useToolbarHandler;
