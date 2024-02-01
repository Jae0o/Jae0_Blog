import "./EditorThumbnail.Styles.css";
import React, { useRef } from "react";
import InputImage from "@/Components/InputImage/InputImage";
import { EditValue } from "../../Editor.Types";

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

  const changeImageInput = () => {
    const { current } = inputRef;
    if (!current) return;

    current.click();
  };

  const successChangeThumbnail = (url: string) => {
    onSelect("thumbnail", url);
  };

  return (
    <div className="Editor__thumbnail">
      <label
        className="thumbnail__title"
        htmlFor="thumbnail__input-id"
        onClick={changeImageInput}>
        {"썸네일 추가"}
      </label>

      <p className="thumbnail__info">
        {thumbnail ? thumbnail : "썸네일을 넣어주세요!"}
      </p>

      <InputImage
        inputRef={inputRef}
        storagePath={`thumbnail/${postId}`}
        onSuccess={successChangeThumbnail}
      />
    </div>
  );
};

export default EditorThumbnail;
