import React, { useMemo, useRef } from "react";
import "./EditorMD.Style.css";
import { EditorMDProps, OnChangeEditorMD } from "../../Editor.Types";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageResize } from "quill-image-resize-module-ts";

import { setImageStorage } from "../../../../../../API/FirebaseStore";

// 리사이징을 위한 등록
Quill.register("modules/imageResize", ImageResize);

const EditorMD = ({ onTyping, state }: EditorMDProps): React.ReactNode => {
  const quillRef = useRef<ReactQuill>(null);
  const onChangeMD: OnChangeEditorMD = newValue => {
    onTyping("main", newValue);
  };

  // firebase 와의 연결
  const handleImage = () => {
    const imageInput = document.createElement("input");
    imageInput.setAttribute("type", "file");
    imageInput.setAttribute("accept", "image/*");
    imageInput.click();

    imageInput.addEventListener("change", async () => {
      const { current } = quillRef;
      if (!current || !(current instanceof ReactQuill)) return;
      if (!imageInput.files) return;

      const editor = current.getEditor();
      const file = imageInput.files[0];
      const range = editor.getSelection(true);

      const newImageUrl = await setImageStorage({
        file,
        path: `postImage/${Date.now()}`,
      });

      if (!newImageUrl) return;

      editor.insertEmbed(range.index, "image", newImageUrl);
    });
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
        handlers: {
          image: handleImage,
        },
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    }),
    [],
  );

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
