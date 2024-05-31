import "./PostAuthAction.style.css";

import { useNavigate } from "react-router-dom";

import { MUTATION_OPTIONS } from "@/api";
import { ConfirmModal } from "@/components";
import { useModal } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
    <>
      <aside className="ptdetail__auth-layout">
        <button
          className="ptdetail__auth-button"
          onClick={toEditPage}
        >
          수정 하기
        </button>
        <button
          className="ptdetail__auth-button"
          onClick={openModal}
        >
          삭제 하기
        </button>
      </aside>

      <ConfirmModal
        isShow={isShowModal}
        onClose={handleDeletePost}
        message="게시물을 삭제하시겠나요? 🙋‍♂️"
      />
    </>
  );
};

export default PostAuthAction;
