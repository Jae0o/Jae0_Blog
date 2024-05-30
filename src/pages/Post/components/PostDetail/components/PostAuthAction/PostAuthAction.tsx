import "./PostAuthAction.style.css";

import { useNavigate } from "react-router-dom";

import { deletePost, useQueryAllPostList } from "@/api";
import { ConfirmModal } from "@/components";
import { useModal } from "@/hooks";

interface PostAuthActionProps {
  postCategory: string;
  postId: string;
}

const PostAuthAction = ({ postCategory, postId }: PostAuthActionProps) => {
  const navigate = useNavigate();
  const { updatePosts } = useQueryAllPostList();
  const { isShowModal, openModal, closeModal } = useModal();

  const toEditPage = () => {
    navigate(`/editor/${postCategory}/${postId}`);
  };

  const handleDeletePost = (accept: boolean) => {
    if (!accept) {
      closeModal();
      return;
    }

    deletePost({
      postCategory,
      postId,
    });
    updatePosts();
    navigate("/");
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
