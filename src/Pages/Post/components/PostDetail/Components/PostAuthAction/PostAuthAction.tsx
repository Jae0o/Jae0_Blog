import { useNavigate } from "react-router-dom";
import "./PostAuthAction.Styles.css";
import { deletePost } from "../../../../../../API/FirebaseDB";
import { useContext } from "react";
import { ContextPosts } from "../../../../../../Context/ContextPosts";

interface PostAuthActionProps {
  postCategory: string;
  postId: string;
}

const PostAuthAction = ({ postCategory, postId }: PostAuthActionProps) => {
  const navigate = useNavigate();
  const { updatePosts } = useContext(ContextPosts);

  const toEditPage = () => {
    navigate(`/editor/${postCategory}/${postId}`);
  };

  const handleDeletePost = () => {
    deletePost({
      postCategory,
      postId,
    });
    updatePosts();
    navigate("/");
  };

  return (
    <aside className="ptdetail__auth-layout">
      <button
        className="ptdetail__auth-button"
        onClick={toEditPage}>
        수정 하기
      </button>
      <button
        className="ptdetail__auth-button"
        onClick={handleDeletePost}>
        삭제 하기
      </button>
    </aside>
  );
};

export default PostAuthAction;
