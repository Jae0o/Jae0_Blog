import React from "react";
import "./PostListItem.Style.css";
import { PostListItemProps } from "../PostList.Types";
import { convertDateFormat } from "../../../../../Util/UtilFunctions";
import { useNavigate } from "react-router-dom";
import { OnClickEvent } from "../../../../../Types/Event.Types";

const PostListItem = ({ post }: PostListItemProps): React.ReactNode => {
  const formattedDate: string = convertDateFormat(JSON.parse(post.createAt));

  const navigate = useNavigate();

  const onNavigate: OnClickEvent = () => {
    navigate(`/post/detail/${post.category}/${post.id}`);
  };

  return (
    <li
      className="ptlist__ptitem"
      onClick={onNavigate}>
      <div className="ptitem__thumbnail-container">
        <img
          className="ptitem__thumbnail"
          src={post.thumbnail}
          alt="post-item-Thumbnail"
        />
        <p className="ptitem__create">{formattedDate}</p>
      </div>

      <div className="ptitem__info-container">
        <h3 className="ptitem__title"> {post.title}</h3>
        <div className="ptitem__category">{post.category}</div>
        <ul className="ptitem__tags">
          {post.tag &&
            post.tag.map(tag => (
              <li
                key={tag}
                className="ptitem__tag-item">
                {tag}
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};

export default PostListItem;
