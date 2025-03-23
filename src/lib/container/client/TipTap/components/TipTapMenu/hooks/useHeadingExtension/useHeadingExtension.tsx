"use client";

import { useCallback } from "react";

import {
  TipTap_H1Icon,
  TipTap_H2Icon,
  TipTap_H3Icon,
} from "@/lib/components/server";

import { TipTapExtensionParams } from "../../../../TipTap.type";

const useHeadingExtension = ({ editor }: TipTapExtensionParams) => {
  const handleToolbar = useCallback(() => editor.chain().focus(), [editor]);

  const heading1 = {
    isActive: editor.isActive("heading", { level: 1 }),
    run: () => handleToolbar().toggleHeading({ level: 1 }).run(),
    icon: <TipTap_H1Icon size="2.4rem" />,
    key: "tiptap_heading_1",
  };

  const heading2 = {
    isActive: editor.isActive("heading", { level: 2 }),
    run: () => handleToolbar().toggleHeading({ level: 2 }).run(),
    icon: <TipTap_H2Icon size="2.4rem" />,
    key: "tiptap_heading_2",
  };

  const heading3 = {
    isActive: editor.isActive("heading", { level: 3 }),
    run: () => handleToolbar().toggleHeading({ level: 3 }).run(),
    icon: <TipTap_H3Icon size="2.4rem" />,
    key: "tiptap_heading_3",
  };

  return [heading1, heading2, heading3] as const;
};

export default useHeadingExtension;
