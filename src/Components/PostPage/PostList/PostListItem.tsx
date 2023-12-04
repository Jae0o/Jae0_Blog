import React from "react";
import "../../../CSS/PostPage/PostList/PostListItem.css";
import { PostListItemProps } from "../../../Types/Components/PostPage/PostListTypes";
import { convertDateFormat } from "../../../Util/UtilFunctions";

const PostListItem: React.FC<PostListItemProps> = ({ post, thumbnail }) => {
  const formatedDate: string = convertDateFormat(JSON.parse(post.createAt));

  return (
    <li className="ptlist__ptitem">
      <div className="ptitem__header">
        <img
          className="ptitem__thumbnail"
          src={thumbnail}
          alt="post-item-Thumbnail"
        />
        <p className="ptitem__createtime">{formatedDate}</p>
      </div>
      <div className="ptitme__title-container">
        <h3 className="ptitem__title"> {post.title}</h3>
        <h6 className="ptitem__subtitle">{post.subtitle}</h6>
      </div>

      <ul className="ptitem__tags">
        {post.tag &&
          post.tag.map((tag, i) => (
            <li
              key={post.id + i}
              className="ptitem__tag-item">
              {tag}
            </li>
          ))}
      </ul>
    </li>
  );
};

export default PostListItem;