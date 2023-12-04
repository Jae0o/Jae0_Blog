import React from "react";
import "../../../CSS/PostPage/PostList/PostListItem.css";
import { PostListItemProps } from "../../../Types/Components/PostPage/PostListTypes";

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  return (
    <li>
      <div> {post.title}</div>
    </li>
  );
};

export default PostListItem;
