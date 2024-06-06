import "./EditorMD.style.css";
import "react-quill/dist/quill.snow.css";

import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";

import { OnTypingEditor } from "../../Editor.type";
import * as S from "./EditorMD.style";
import { EDITOR_FORMATS } from "./constants";
import { useUploadPostImage } from "./hooks";

interface EditorMDProps {
  onTyping: OnTypingEditor;
  state: string;
}

const EditorMD = ({ onTyping, state }: EditorMDProps): React.ReactNode => {
  const quillRef = useRef<ReactQuill>(null);
  const { imageInputRef, changeImage } = useUploadPostImage({ quillRef });

  const onChangeMD = (newValue: string) => {
    onTyping("main", newValue);
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
          image: () => {
            const { current } = imageInputRef;
            if (!current) return;

            current.click();
          },
        },
      },
    }),
    [imageInputRef],
  );

  return (
    <>
      <S.EditorLayout>
        <ReactQuill
          className="editor__quill"
          ref={quillRef}
          formats={EDITOR_FORMATS}
          theme="snow"
          value={state}
          onChange={onChangeMD}
          modules={editorModules}
        />

        <S.EditorImageInput
          ref={imageInputRef}
          type="file"
          accept="image/*"
          onChange={changeImage}
        />
      </S.EditorLayout>
    </>
  );
};

export default EditorMD;
