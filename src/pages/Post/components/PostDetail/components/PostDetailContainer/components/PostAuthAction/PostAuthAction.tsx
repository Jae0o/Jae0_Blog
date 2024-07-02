import { useNavigate } from "react-router-dom";

import { MUTATION_OPTIONS } from "@/api";
import { Button, ConfirmModal } from "@/components";
import { useModal } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as S from "./PostAuthAction.style";

interface PostAuthActionProps {
  postId: string;
}

const PostAuthAction = ({ postId }: PostAuthActionProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isShowModal, openModal, closeModal } = useModal();
  const { mutate } = useMutation(MUTATION_OPTIONS.DELETE_POST());

  const toEditPage = () => {
    navigate(`/editor/${postId}`);
  };

  const handleDeletePost = (accept: boolean) => {
    if (!accept) {
      closeModal();
      return;
    }

    mutate(
      { postId },
      {
        onSuccess: () => {
          queryClient.refetchQueries();
          navigate("/");
        },
      },
    );
  };

  return (
    <S.PostDetailAuthLayout>
      <Button
        backgroundColor="yellow"
        style={{
          width: "10rem",
        }}
        onClick={toEditPage}
        shadow
      >
        수정 하기
      </Button>

      <Button
        backgroundColor="red"
        style={{
          width: "10rem",
        }}
        onClick={openModal}
        shadow
      >
        삭제 하기
      </Button>

      <ConfirmModal
        isShow={isShowModal}
        onClose={handleDeletePost}
        message="게시물을 삭제하시겠나요? 🙋‍♂️"
      />
    </S.PostDetailAuthLayout>
  );
};

export default PostAuthAction;
