import "./Home.style.css";

import React from "react";

import { useQueryAllPostList } from "@/api";

import { PostListItem } from "../Post/components/PostList/components";

const Home = (): React.ReactNode => {
  const { posts, AllPostListAlertModal } = useQueryAllPostList();

  return (
    <section className="outlet__home">
      <article className="home__title-layout">
        <h1 className="home__title">Jae0's Blog!!</h1>
      </article>

      <ul className="temporary__ptlist">
        {posts.map(post => (
          <PostListItem
            key={post.id}
            post={post}
          />
        ))}
      </ul>

      {AllPostListAlertModal}
    </section>
  );
};

export default Home;
