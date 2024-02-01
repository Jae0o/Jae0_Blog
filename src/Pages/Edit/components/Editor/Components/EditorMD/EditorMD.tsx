import { ImageResize } from "quill-image-resize-module-ts";
import "./EditorMD.Style.css";
import "react-quill/dist/quill.snow.css";
import React, { useMemo, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import InputImage from "@/Components/InputImage/InputImage";
import { OnTypingEditor } from "../../Editor.Types";
import { editor_formats } from "./EditorMD.Constants";

interface EditorMDProps {
  onTyping: OnTypingEditor;
  state: string;
}

// 리사이징을 위한 등록
Quill.register("modules/imageResize", ImageResize);

const EditorMD = ({ onTyping, state }: EditorMDProps): React.ReactNode => {
  const quillRef = useRef<ReactQuill>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onChangeMD = (newValue: string) => {
    onTyping("main", newValue);
  };

  const clickImageLabel = () => {
    const { current } = imageInputRef;
    console.log(current);
    if (!current) return;

    current.click();
  };

  const successImageChange = (url: string) => {
    const { current } = quillRef;
    if (!current || !(current instanceof ReactQuill)) return;

    const editor = current.getEditor();
    const range = editor.getSelection(true);

    editor.insertEmbed(range.index, "image", url);
  };

  const editorModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image", "code-block"],
        ],
        handlers: {
          image: clickImageLabel,
        },
      },
      // syntax: {
      //   highlight: (text: string) => hljs.highlightAuto(text).value,
      // },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    }),
    [],
  );

  return (
    <>
      <div className="editor__layout">
        <ReactQuill
          className="editor__quill"
          ref={quillRef}
          formats={editor_formats}
          theme="snow"
          value={state}
          onChange={onChangeMD}
          modules={editorModules}
        />

        <InputImage
          inputRef={imageInputRef}
          onSuccess={successImageChange}
          storagePath={`postImage/${Date.now()}`}
        />
      </div>
    </>
  );
};

export default EditorMD;
