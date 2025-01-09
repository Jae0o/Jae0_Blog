import "@/lib/css/tiptap.css";

import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { EditorToolbar } from "./components";

import { Markdown } from "tiptap-markdown";

const Editor = () => {
  const editor = useEditor({
    content: "fdsfds",
    extensions: [
      StarterKit,
      Link.extend({ inclusive: false }).configure({
        openOnClick: false,
      }),
      Markdown,
    ],
    immediatelyRender: false,
  });

  return (
    <article className="w-full h-full flex flex-col border-2 border-blue-400 ">
      {editor && <EditorToolbar editor={editor} />}
      <EditorContent
        editor={editor}
        className="w-full grow-[1] border-2 border-red-400"
      />
    </article>
  );
};

export default Editor;
