import "./Post.Style.css";
import React from "react";
import { Outlet } from "react-router-dom";

const Post = (): React.ReactNode => {
  return (
    <section className="outlet__post">
      <div className="post__container">
        <Outlet />
      </div>
    </section>
  );
};

export default Post;
