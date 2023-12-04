import React from "react";
import "../../../CSS/PostPage/PostList/PostList.css";

import { useLocation } from "react-router-dom";
import { PostListLocationType } from "../../../Types/Components/PostPage/PostListTypes";
import PostListItem from "./PostListItem";

const PostList: React.FC = () => {
  const {
    state: { posts },
  }: PostListLocationType = useLocation();

  return (
    <ul className="outlet__postlist">
      {posts.postList &&
        posts.postList.map(post => (
          <PostListItem
            post={post}
            key={post.id}
          />
        ))}
    </ul>
  );
};

export default PostList;
