import "./PostDetailTags.Style.css";
import React from "react";

interface PostDetailTagsProps {
  tags: string[];
}

const PostDetailTags = ({ tags }: PostDetailTagsProps): React.ReactNode => {
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
