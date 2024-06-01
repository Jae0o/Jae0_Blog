import "./PostList.style.css";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { QUERY_OPTIONS } from "@/api";
import { AlertModal, PostBanner, PostBannerDecoration } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useBanner, useModal } from "@/hooks";
import LoadingPage from "@/pages/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

import { PostListItem } from "./components";

const PostList = (): React.ReactNode => {
  const { category = "ALL" } = useParams();
  const { bannerAdvice, bannerThumbnail } = useBanner({ changeKey: category });
  const { isShowModal, openModal, closeModal } = useModal();
  const {
    data: postList,
    isError,
    isLoading,
    refetch,
  } = useQuery(QUERY_OPTIONS.GET_POST_LIST(category));

  useEffect(() => {
    if (isError) {
      refetch();
      openModal();
    }
  }, [isError, openModal, refetch]);

  return (
    <article className="outlet__ptlist">
      <div className="ptlist__banner">
        <PostBannerDecoration />
        <PostBanner
          thumbnail={bannerThumbnail}
          mainText={bannerAdvice.advice}
          subText={`- ${bannerAdvice.author}`}
        />
      </div>

      <ul className="ptlist__list-container">
        {(isError || isLoading || !postList) && <LoadingPage />}

        {postList &&
          postList.map(post => (
            <PostListItem
              post={post}
              key={post.id}
            />
          ))}
      </ul>

      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        message={QUERY_ERROR.GET_POSTS_LIST}
      />
    </article>
  );
};

export default PostList;
