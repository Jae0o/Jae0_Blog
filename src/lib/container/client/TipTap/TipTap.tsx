"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TipTap = () => {
  const editor = useEditor({
    content: "",
    immediatelyRender: false,
    extensions: [StarterKit],
  });

  return (
    <article className="w-full h-full flex flex-col">
      <EditorContent
        editor={editor}
        className="w-full grow-[1] border-2 border-red-600"
      />
    </article>
  );
};

export default TipTap;
