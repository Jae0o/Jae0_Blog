import { PostDetailTagsProps } from "../../PostDetail.Types";
import "./PostDetailTags.Style.css";

const PostDetailTags = ({ tags }: PostDetailTagsProps): JSX.Element => {
  return (
    <div className="ptdetail__tags-container">
      <h6 className="ptdetail__tags-title">태그</h6>
      <ul className="ptdetail__tags-list">
        {tags &&
          tags.map(tag => (
            <li
              key={tag}
              className="ptdetail__tag">
              {tag}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostDetailTags;
