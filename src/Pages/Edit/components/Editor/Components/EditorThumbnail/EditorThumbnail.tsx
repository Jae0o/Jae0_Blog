import "./EditorThumbnail.Styles.css";
import React, { useRef } from "react";

const EditorThumbnail = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onThumbnailUpload = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;
    const { files } = target;

    const newFile = files[0];
    console.log(newFile);
  };
  return (
    <div className="Editor__thumbnail">
      <label className="thumbnail__title">{"썸네일 : "}</label>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onThumbnailUpload}
      />
    </div>
  );
};

export default EditorThumbnail;
