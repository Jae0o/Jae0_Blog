"use client";

import {
  TipTap_H1Icon,
  TipTap_H2Icon,
  TipTap_H3Icon,
} from "@/lib/components/server";

import { TipTapExtensionParams } from "../../../../TipTap.type";
import useToolbarHandler from "../useToolbarHandler/useToolbarHandler";

const useHeadingExtension = ({ editor }: TipTapExtensionParams) => {
  const { handleToolbar } = useToolbarHandler({ editor });

  const heading1 = {
    isActive: editor.isActive("heading", { level: 1 }),
    run: () => handleToolbar().toggleHeading({ level: 1 }).run(),
    Icon: TipTap_H1Icon,
    key: "tiptap_heading_1",
  };

  const heading2 = {
    isActive: editor.isActive("heading", { level: 2 }),
    run: () => handleToolbar().toggleHeading({ level: 2 }).run(),
    Icon: TipTap_H2Icon,
    key: "tiptap_heading_2",
  };

  const heading3 = {
    isActive: editor.isActive("heading", { level: 3 }),
    run: () => handleToolbar().toggleHeading({ level: 3 }).run(),
    Icon: TipTap_H3Icon,
    key: "tiptap_heading_3",
  };

  return [heading1, heading2, heading3] as const;
};

export default useHeadingExtension;
