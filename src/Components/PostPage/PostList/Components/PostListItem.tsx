import React from "react";
import "./PostListItem.Style.css";
import { PostListItemProps } from "../PostList.Types";
import { convertDateFormat } from "../../../../Util/UtilFunctions";
import { useNavigate } from "react-router-dom";
import { OnClickEvent } from "../../../../Types/Event.Types";

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  const formattedDate: string = convertDateFormat(JSON.parse(post.createAt));

  const navigate = useNavigate();
  9;
  const onNavigate: OnClickEvent = () => {
    navigate(`/post/detail/${post.category}/${post.id}`);
  };

  return (
    <li
      className="ptlist__ptitem"
      onClick={onNavigate}>
      <div className="ptitem__header">
        <img
          className="ptitem__thumbnail"
          src={post.thumbnail}
          alt="post-item-Thumbnail"
        />
        <p className="ptitem__createtime">{formattedDate}</p>
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
      <div className="ptitme__title-container">
        <h3 className="ptitem__title"> {post.title}</h3>
      </div>
    </li>
  );
};

export default PostListItem;
