import { RefObject, useRef } from "react";
import ReactQuill from "react-quill";

import { MUTATION_OPTIONS } from "@/api";
import { useMutation } from "@tanstack/react-query";

interface UseUploadPostImageProps {
  quillRef: RefObject<ReactQuill>;
}

const useUploadPostImage = ({ quillRef }: UseUploadPostImageProps) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useMutation(MUTATION_OPTIONS.SET_POST_IMAGE());

  const changeImage = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;

    const file = target.files[0];

    mutate(
      { file, id: Date.now().toString() },
      {
        onSuccess: newImageUrl => {
          const { current } = quillRef;
          if (!current || !(current instanceof ReactQuill)) return;

          const editor = current.getEditor();
          const range = editor.getSelection(true);

          editor.insertEmbed(range.index, "image", newImageUrl);
        },
        onError: () => {
          // 실패에 대한 경고
        },
      },
    );
  };

  return {
    imageInputRef,
    changeImage,
  };
};

export default useUploadPostImage;
