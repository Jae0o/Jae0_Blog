import React, { useMemo } from "react";
import "./EditorMD.Style.css";
import { EditorMDProps, OnChangeEditorMD } from "../../Editor.Types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorMD = ({ onTyping, state }: EditorMDProps): React.ReactNode => {
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
    }),
    [],
  );

  return (
    <div className="editor__layout">
      <ReactQuill
        className="editor__quill"
        value={state}
        onChange={onChangeMD}
        modules={editorModules}
      />
    </div>
  );
};

export default EditorMD;
