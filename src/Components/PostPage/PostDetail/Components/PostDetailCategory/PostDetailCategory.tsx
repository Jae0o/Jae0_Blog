import "./PostDetailCategory.Style.css";
import { PostDetailCategoryProps } from "../../PostDetail.Types";

const PostDetailCategory = ({
  category,
}: PostDetailCategoryProps): JSX.Element => {
  return (
    <div className="ptdetail__category-container">
      <h6 className="ptdetail__category-title">카테고리</h6>
      <div className="ptdetail__category">{category}</div>
    </div>
  );
};

export default PostDetailCategory;
