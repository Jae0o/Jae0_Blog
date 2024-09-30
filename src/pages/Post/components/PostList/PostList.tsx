import * as S from "./PostList.style";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { QUERY_OPTIONS } from "@/api";
import { AlertModal, PostBanner, PostBannerDecoration } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useBanner, useToggle } from "@/hooks";
import LoadingPage from "@/pages/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

import { PostListItem } from "./components";

const PostList = (): React.ReactNode => {
  const { category = "ALL" } = useParams();
  const { bannerAdvice, bannerThumbnail } = useBanner({ changeKey: category });
  const { isToggle, handleOnToggle, handleOffToggle } = useToggle();
  const {
    data: postList,
    isError,
    isLoading,
    refetch,
  } = useQuery(QUERY_OPTIONS.GET_POST_LIST(category));

  useEffect(() => {
    if (isError) {
      refetch();
      handleOnToggle();
    }
  }, [isError, handleOnToggle, refetch]);

  return (
    <S.PostListLayout>
      <S.PostListBannerContainer>
        <PostBannerDecoration />
        <PostBanner
          thumbnail={bannerThumbnail}
          mainText={bannerAdvice.advice}
          subText={`- ${bannerAdvice.author}`}
        />
      </S.PostListBannerContainer>

      <S.PostListContainer>
        {(isError || isLoading || !postList) && <LoadingPage />}

        {postList &&
          postList.map(post => (
            <PostListItem
              post={post}
              key={post.id}
            />
          ))}
      </S.PostListContainer>

      <AlertModal
        isShow={isToggle}
        onClose={handleOffToggle}
        message={QUERY_ERROR.GET_POSTS_LIST}
      />
    </S.PostListLayout>
  );
};

export default PostList;
