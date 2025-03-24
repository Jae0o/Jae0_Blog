"use client";

import "@/lib/css/tiptap.css";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import TipTapSkeleton from "./TipTap.Skeleton";
import { TipTapMenu } from "./components";

const TipTap = () => {
  const editor = useEditor({
    content: "",
    immediatelyRender: false,
    extensions: [StarterKit],
  });

  if (!editor) return <TipTapSkeleton />;

  return (
    <article className="w-full h-full flex flex-col">
      <TipTapMenu editor={editor} />

      <EditorContent
        editor={editor}
        className="w-full grow-[1] border-2 border-red-600"
      />
    </article>
  );
};

export default TipTap;
