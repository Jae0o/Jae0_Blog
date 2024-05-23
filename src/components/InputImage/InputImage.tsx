import "./InputImage.style.css";

import React from "react";

import { setImageStorage } from "@/api";

interface InputImageProps {
  inputRef: React.RefObject<HTMLInputElement>;
  storagePath: string;
  onSuccess: (url: string) => void;
}

const InputImage = ({ inputRef, storagePath, onSuccess }: InputImageProps) => {
  const changeImage = async ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;

    const file = target.files[0];

    const newImageUrl = await setImageStorage({
      file,
      path: storagePath,
    });

    if (!newImageUrl) {
      // 실패에 대한 경고
      return;
    }

    onSuccess(newImageUrl);
  };

  return (
    <input
      className="input__image-hide"
      ref={inputRef}
      type="file"
      accept="image/*"
      onChange={changeImage}
    />
  );
};

export default InputImage;
