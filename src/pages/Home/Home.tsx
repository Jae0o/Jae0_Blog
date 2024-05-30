import "./Home.style.css";

import React, { useEffect } from "react";

import { QUERY_OPTIONS } from "@/api";
import { AlertModal } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import LoadingPage from "../Loading/Loading";
import { PostListItem } from "../Post/components/PostList/components";

const Home = (): React.ReactNode => {
  const { isShowModal, openModal, closeModal } = useModal();

  const {
    data: posts,
    isError,
    isLoading,
    refetch,
  } = useQuery(QUERY_OPTIONS.GET_POST_LIST_ALL());

  useEffect(() => {
    if (isError) {
      openModal();
      refetch();
    }
  }, [isError, openModal, refetch]);

  if (isError || isLoading || !posts) {
    return (
      <>
        <LoadingPage />
        <AlertModal
          isShow={isShowModal}
          onClose={closeModal}
          message={QUERY_ERROR.POSTS_UPDATE_LIST}
        />
      </>
    );
  }

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
    </section>
  );
};

export default Home;
