import React from "react";
import "../../CSS/PostPage/Post.css";
import PostBanner from "./PostBanner";
import { Outlet } from "react-router-dom";

const Post: React.FC = () => {
  return (
    <section>
      <PostBanner />
      <Outlet />
    </section>
  );
};

export default Post;
