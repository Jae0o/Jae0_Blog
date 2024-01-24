import { setImageStorage } from "../../../../../../API/FirebaseStore";
import { EditValue } from "../../Editor.Types";
import "./EditorThumbnail.Styles.css";
import React, { useRef } from "react";

interface EditorThumbnailProps {
  onSelect: (key: EditValue, value: string) => void;
  thumbnail: string;
  postId: string;
}

const EditorThumbnail = ({
  onSelect,
  thumbnail,
  postId,
}: EditorThumbnailProps): React.ReactNode => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onThumbnailUpload = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;
    const { files } = target;

    const newFile = files[0];

    setImageStorage({
      file: newFile,
      path: `thumbnail/${postId}`,
    }).then(newImageUrl => {
      if (!newImageUrl) {
        console.log("업로드 후 새로운 URL 받아오기 실패");
        return;
      }
      onSelect("thumbnail", newImageUrl);
    });
  };
  return (
    <div className="Editor__thumbnail">
      <label
        className="thumbnail__title"
        htmlFor="thumbnail__input-id">
        {"썸네일 : "}
      </label>

      <p> {thumbnail}</p>

      <input
        className="thumbnail__input"
        id="thumbnail__input-id"
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onThumbnailUpload}
      />
    </div>
  );
};

export default EditorThumbnail;
