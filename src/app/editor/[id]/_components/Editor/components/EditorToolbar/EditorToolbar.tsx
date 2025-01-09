import { useCallback } from "react";

import { Editor } from "@tiptap/react";

import { twMerge } from "tailwind-merge";

interface EditorToolbarProps {
  editor: Editor;
}

const buttonStyle = "w-[2.4rem] h-[2.4rem] bg-red-100";

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const handleToolbar = useCallback(() => editor.chain().focus(), [editor]);

  return (
    <ul className="w-full h-[3.2rem] px-[1rem] flex items-center">
      {/* ------ Heading Tool -------- */}
      <li className="flex items-center gap-[0.6rem]">
        <button
          className={twMerge(
            buttonStyle,
            editor.isActive("heading", { level: 1 }) && "opacity-50",
          )}
          onClick={() => handleToolbar().toggleHeading({ level: 1 }).run()}
        >
          h1
        </button>

        <button
          className={twMerge(
            buttonStyle,
            editor.isActive("heading", { level: 2 }) && "opacity-50",
          )}
          onClick={() => handleToolbar().toggleHeading({ level: 2 }).run()}
        >
          h2
        </button>

        <button
          className={twMerge(
            buttonStyle,
            editor.isActive("heading", { level: 3 }) && "opacity-50",
          )}
          onClick={() => handleToolbar().toggleHeading({ level: 3 }).run()}
        >
          h3
        </button>
      </li>

      {/* ------ Text Tool -------- */}
      <li className="flex items-center gap-[0.6rem]">
        <button
          className={twMerge(
            buttonStyle,
            editor.isActive("blockquote") && "opacity-50",
          )}
          onClick={() => handleToolbar().toggleBlockquote().run()}
        >
          Block
        </button>

        <button
          className={buttonStyle}
          onClick={() => handleToolbar().toggleHeading({ level: 2 }).run()}
        >
          h2
        </button>

        <button
          className={buttonStyle}
          onClick={() => handleToolbar().toggleHeading({ level: 3 }).run()}
        >
          h3
        </button>
      </li>
    </ul>
  );
};

export default EditorToolbar;
