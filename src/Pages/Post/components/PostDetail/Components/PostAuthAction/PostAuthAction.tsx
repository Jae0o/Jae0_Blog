import { useNavigate } from "react-router-dom";
import "./PostAuthAction.Styles.css";

interface PostAuthActionProps {
  postCategory: string;
  postId: string;
}

const PostAuthAction = ({ postCategory, postId }: PostAuthActionProps) => {
  const navigate = useNavigate();

  const toEditPage = () => {
    navigate(`/editor/${postCategory}/${postId}`);
  };

  return (
    <aside className="ptdetail__auth-layout">
      <button
        className="ptdetail__auth-button"
        onClick={toEditPage}>
        수정 하기
      </button>
      <button className="ptdetail__auth-button">삭제 하기</button>
    </aside>
  );
};

export default PostAuthAction;
