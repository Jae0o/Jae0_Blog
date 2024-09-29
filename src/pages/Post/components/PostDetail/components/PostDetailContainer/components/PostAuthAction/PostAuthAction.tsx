import * as S from "./PostAuthAction.style";

import { useNavigate } from "react-router-dom";

import { MUTATION_OPTIONS } from "@/api";
import { Button, ConfirmModal } from "@/components";
import { useToggle } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PostAuthActionProps {
  postId: string;
}

const PostAuthAction = ({ postId }: PostAuthActionProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isToggle, handleOnToggle, handleOffToggle } = useToggle();
  const { mutate } = useMutation(MUTATION_OPTIONS.DELETE_POST());

  const toEditPage = () => {
    navigate(`/editor/${postId}`);
  };

  const handleDeletePost = (accept: boolean) => {
    if (!accept) {
      handleOffToggle();
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
        onClick={handleOnToggle}
        shadow
      >
        삭제 하기
      </Button>

      <ConfirmModal
        isShow={isToggle}
        onClose={handleDeletePost}
        message="게시물을 삭제하시겠나요? 🙋‍♂️"
      />
    </S.PostDetailAuthLayout>
  );
};

export default PostAuthAction;
