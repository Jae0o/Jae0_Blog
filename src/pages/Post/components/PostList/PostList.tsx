import "./PostList.style.css";

import React from "react";
import { useParams } from "react-router-dom";

import { useQueryPostList } from "@/api";
import { PostBanner, PostBannerDecoration } from "@/components";
import { useBanner } from "@/hooks";

import { PostListItem } from "./components";

const PostList = (): React.ReactNode => {
  const { category = "ALL" } = useParams();
  const { postList, PostListAlertModal } = useQueryPostList({ category });
  const { bannerAdvice, bannerThumbnail } = useBanner({ changeKey: category });

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
        {postList &&
          postList.map(post => (
            <PostListItem
              post={post}
              key={post.id}
            />
          ))}
      </ul>

      {PostListAlertModal}
    </article>
  );
};

export default PostList;
