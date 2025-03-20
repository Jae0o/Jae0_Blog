import { useCallback } from "react";

import { Editor } from "@tiptap/react";

import { twMerge } from "tailwind-merge";

interface EditorToolbarProps {
  editor: Editor;
}

interface ToolbarButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

const ToolbarButton = ({ children, onClick, isActive }: ToolbarButtonProps) => {
  return (
    <button
      className={twMerge(
        "w-[2.4rem] h-[2.4rem] bg-red-100",
        isActive && "opacity-50",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const handleToolbar = useCallback(() => editor.chain().focus(), [editor]);

  return (
    <ul className="w-full h-[3.2rem] px-[1rem] flex items-center gap-[2rem]">
      {/* ------ Heading Tool -------- */}
      <li className="flex items-center gap-[0.6rem]">
        <ToolbarButton
          isActive={editor.isActive("heading", { level: 1 })}
          onClick={() => handleToolbar().toggleHeading({ level: 1 }).run()}
        >
          h1
        </ToolbarButton>

        <ToolbarButton
          isActive={editor.isActive("heading", { level: 2 })}
          onClick={() => handleToolbar().toggleHeading({ level: 2 }).run()}
        >
          h2
        </ToolbarButton>

        <ToolbarButton
          isActive={editor.isActive("heading", { level: 3 })}
          onClick={() => handleToolbar().toggleHeading({ level: 3 }).run()}
        >
          h3
        </ToolbarButton>
      </li>

      {/* ------ Text Tool -------- */}
      <li className="flex items-center gap-[0.6rem]">
        <ToolbarButton
          isActive={editor.isActive("blockquote")}
          onClick={() => handleToolbar().toggleBlockquote().run()}
        >
          Block
        </ToolbarButton>

        <ToolbarButton
          isActive={editor.isActive("bulletList")}
          onClick={() => handleToolbar().toggleBulletList().run()}
        >
          bullet
        </ToolbarButton>
      </li>
    </ul>
  );
};

export default EditorToolbar;
