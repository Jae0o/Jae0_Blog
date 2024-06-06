import { MUTATION_OPTIONS } from "@/api";
import { useMutation } from "@tanstack/react-query";

import { EditValue } from "../../../../Editor.type";

interface UseUploadThumbnailProps {
  postId: string;
  onSelect: (key: EditValue, value: string) => void;
}

const useUploadThumbnail = ({ postId, onSelect }: UseUploadThumbnailProps) => {
  const { mutate } = useMutation(MUTATION_OPTIONS.SET_IMAGE());
  const changeImage = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;

    const file = target.files[0];

    mutate(
      { file, id: postId },
      {
        onSuccess: ({ mainImage, miniImage }) => {
          onSelect("thumbnail", mainImage);
          onSelect("miniThumbnail", miniImage);
        },
        onError: () => {
          // 실패에 대한 경고
        },
      },
    );
  };

  return {
    changeImage,
  };
};

export default useUploadThumbnail;
