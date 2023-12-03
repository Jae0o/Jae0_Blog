import React from "react";
import "../../CSS/PostPage/Post.css";
import PostBanner from "./PostBanner/PostBanner";
import { Outlet } from "react-router-dom";

const Post: React.FC = () => {
  return (
    <section className="outlet__post">
      <div className="post__container">
        <PostBanner />
        <Outlet />
      </div>
    </section>
  );
};

export default Post;
