import { useNavigate } from "react-router-dom";
import "./PostAuthAction.Styles.css";
import { deletePost } from "../../../../../../API/FirebaseDB";
import { useContext } from "react";
import { ContextPosts } from "../../../../../../Context/ContextPosts";
import ConfirmModal from "../../../../../../Components/Modal/Components/ConfirmModal/ConfirmModal";
import useModal from "../../../../../../Components/Modal/Hooks/useModal";

interface PostAuthActionProps {
  postCategory: string;
  postId: string;
}

const PostAuthAction = ({ postCategory, postId }: PostAuthActionProps) => {
  const navigate = useNavigate();
  const { updatePosts } = useContext(ContextPosts);
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
          onClick={toEditPage}>
          수정 하기
        </button>
        <button
          className="ptdetail__auth-button"
          onClick={openModal}>
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
