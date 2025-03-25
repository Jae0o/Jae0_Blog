import {
  TipTap_BoldIcon,
  TipTap_CodeIcon,
  TipTap_LinkIcon,
} from "@/lib/components/server";

import { useModal } from "@/lib/hooks";

import { TipTapExtensionParams } from "../../../../TipTap.type";
import LinkModal from "../../../LinkModal/LinkModal";
import useToolbarHandler from "../useToolbarHandler/useToolbarHandler";

const useMarkExtension = ({ editor }: TipTapExtensionParams) => {
  const { handleToolbar } = useToolbarHandler({ editor });

  const [isLinkOpen, openLink, closeLink] = useModal();

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

  const link = {
    key: "link",
    Icon: TipTap_LinkIcon,
    run: editor.isActive("link") ? editor.commands.unsetLink : openLink,
    isActive: editor.isActive("link"),
  };

  const marks = [bold, code, link] as const;

  const MarksComponents = (
    <>
      {isLinkOpen && (
        <LinkModal
          isShow={isLinkOpen}
          onClose={closeLink}
          hideCloseIcon
          onConfirm={url => handleToolbar().toggleLink({ href: url }).run()}
        />
      )}
    </>
  );

  return { marks, MarksComponents };
};

export default useMarkExtension;
