import React, { useMemo, useRef } from "react";
import "./EditorMD.Style.css";
import { EditorMDProps, OnChangeEditorMD } from "../../Editor.Types";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageResize } from "quill-image-resize-module-ts";

Quill.register("modules/imageResize", ImageResize);
const EditorMD = ({ onTyping, state }: EditorMDProps): React.ReactNode => {
  const quillRef = useRef<ReactQuill>(null);
  const onChangeMD: OnChangeEditorMD = newValue => {
    onTyping("main", newValue);
  };

  const editorModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    }),
    [],
  );

  const handleImage = () => {};

  return (
    <div className="editor__layout">
      <ReactQuill
        className="editor__quill"
        ref={quillRef}
        theme="snow"
        value={state}
        onChange={onChangeMD}
        modules={editorModules}
      />
    </div>
  );
};

export default EditorMD;
