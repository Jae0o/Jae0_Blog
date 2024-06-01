import "./PostListItem.style.css";

import React from "react";
import { useNavigate } from "react-router-dom";

import { PostData } from "@/types/original";
import { convertDateFormat } from "@/util";

interface PostListItemProps {
  post: PostData;
}

const PostListItem = ({ post }: PostListItemProps): React.ReactNode => {
  const formattedDate: string = convertDateFormat(JSON.parse(post.createAt));

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/post/detail/${post.id}`);
  };

  return (
    <li
      className="ptlist__ptitem"
      onClick={onNavigate}
    >
      <div className="ptitem__thumbnail-container">
        <img
          className="ptitem__thumbnail"
          src={post.thumbnail}
          alt="post-item-Thumbnail"
        />
        <p className="ptitem__create">{formattedDate}</p>
      </div>

      <div className="ptitem__info-container">
        <h4 className="ptitem__title"> {post.title}</h4>
        <div className="ptitem__category">{post.category}</div>
        <ul className="ptitem__tags">
          {post.tag &&
            post.tag.map(tag => (
              <li
                key={tag}
                className="ptitem__tag-item"
              >
                {tag}
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};

export default PostListItem;
