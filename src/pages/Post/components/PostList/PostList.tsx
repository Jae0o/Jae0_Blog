import "./PostList.style.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useQueryPostList } from "@/api";
import { PostBanner, PostBannerDecoration } from "@/components";
import {
  ADVICE_DEFAULT,
  ADVICE_LIST,
  POST_BANNER_THUMBNAILS,
} from "@/constants";

import { BannerInfo } from "./PostList.type";
import { PostListItem } from "./components";

const PostList = (): React.ReactNode => {
  const { category = "ALL" } = useParams();
  const { postList, PostListAlertModal } = useQueryPostList({ category });

  const [bannerInfo, setBannerInfo] = useState<BannerInfo>({
    advice: ADVICE_DEFAULT,
    thumbnail: "",
  });

  useEffect(
    function makeRandomBanner() {
      const randomNum: number = Math.random() * 10;
      const randomIndex: number = Math.floor(randomNum);
      setBannerInfo({
        advice: ADVICE_LIST[randomIndex],
        thumbnail: POST_BANNER_THUMBNAILS[randomIndex],
      });
    },
    [category],
  );

  return (
    <article className="outlet__ptlist">
      <div className="ptlist__banner">
        <PostBannerDecoration />
        <PostBanner
          thumbnail={bannerInfo.thumbnail}
          mainText={bannerInfo.advice.advice}
          subText={`- ${bannerInfo.advice.author}`}
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
