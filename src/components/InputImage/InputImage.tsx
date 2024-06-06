import React from "react";

import { MUTATION_OPTIONS } from "@/api";
import { useMutation } from "@tanstack/react-query";

import * as S from "./InputImage.style";

interface InputImageProps {
  inputRef: React.RefObject<HTMLInputElement>;
  storagePath: string;
  onSuccess: (url: string) => void;
}

const InputImage = ({ inputRef, storagePath, onSuccess }: InputImageProps) => {
  const { mutate } = useMutation(MUTATION_OPTIONS.SET_IMAGE());
  const changeImage = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;

    const file = target.files[0];

    mutate(
      { file, id: storagePath },
      {
        onSuccess: newImageUrl => {
          onSuccess(newImageUrl);
        },
        onError: () => {
          // 실패에 대한 경고
        },
      },
    );
  };

  return (
    <S.ImageInput
      className="input__image-hide"
      ref={inputRef}
      type="file"
      accept="image/*"
      onChange={changeImage}
    />
  );
};

export default InputImage;
