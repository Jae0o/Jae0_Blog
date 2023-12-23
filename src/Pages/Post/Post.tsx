import React from "react";
import "./Post.Style.css";
import { Outlet } from "react-router-dom";

const Post: React.FC = () => {
  return (
    <section className="outlet__post">
      <div className="post__container">
        <Outlet />
      </div>
    </section>
  );
};

export default Post;
