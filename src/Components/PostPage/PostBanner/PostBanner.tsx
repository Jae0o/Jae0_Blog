import React, { useEffect, useState } from "react";
import "./PostBanner.Style.css";
import PostBannerDecoration from "./Components/PostBannerDecoration";
import { ADVICE_DEFAULT, ADVICE_LIST } from "../../../constants/variables";
import { POST_BANNER_THUMBNAILS } from "../../../constants/URL";
import { BannerInfo } from "../PostPageType";

const PostBanner: React.FC = () => {
  const [bannerInfo, setBannerInfo] = useState<BannerInfo>({
    advice: ADVICE_DEFAULT,
    thumbnail: "",
  });

  useEffect(function makeRandomBanner() {
    const randomNum: number = Math.random() * 10;
    const randomIndex: number = Math.floor(randomNum);
    setBannerInfo({
      advice: ADVICE_LIST[randomIndex],
      thumbnail: POST_BANNER_THUMBNAILS[randomIndex],
    });
  }, []);

  return (
    <div className="post__banner">
      <PostBannerDecoration />
      <div
        className="ptbanner__container"
        style={{ backgroundImage: `url(${bannerInfo.thumbnail})` }}>
        <div className="ptbanner__advice-container">
          <h4 className="ptbanner__advice">{bannerInfo.advice.advice}</h4>
          <h6 className="ptbanner__author">{`- ${bannerInfo.advice.author}`}</h6>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
