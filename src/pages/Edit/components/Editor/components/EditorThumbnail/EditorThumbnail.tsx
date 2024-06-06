import React, { useRef } from "react";

import { Button } from "@/components";

import { EditValue } from "../../Editor.type";
import * as S from "./EditorThumbnail.style";

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
    <S.EditorThumbnailLayout>
      <Button
        style={{
          width: "14rem",
        }}
        onClick={changeImageInput}
      >
        썸네일 추가
      </Button>

      <S.EditorThumbnailContent>
        {thumbnail ? thumbnail : "썸네일을 넣어주세요!"}
      </S.EditorThumbnailContent>

      {/* <InputImage
        inputRef={inputRef}
        storagePath={`thumbnail/${postId}`}
        onSuccess={successChangeThumbnail}
      /> */}

      <S.EditorThumbnailImageInput
        className="input__image-hide"
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={() => {}}
      />
    </S.EditorThumbnailLayout>
  );
};

export default EditorThumbnail;
