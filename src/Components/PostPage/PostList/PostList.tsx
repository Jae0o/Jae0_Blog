import React from "react";
import "../../../CSS/PostPage/PostList/PostList.css";

import { useLocation } from "react-router-dom";
import { PostListLocationType } from "../../../Types/Components/PostPage/PostListTypes";
import PostListItem from "./PostListItem";

const PostList: React.FC = () => {
  const {
    state: { list },
  }: PostListLocationType = useLocation();
  console.log(list);

  return (
    <ul className="outlet__postlist">
      {list && list.map(post => <PostListItem post={post} />)}
    </ul>
  );
};

export default PostList;
