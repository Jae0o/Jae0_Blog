import React, { useEffect, useState } from "react";
import "../../../CSS/PostPage/PostBanner/PostBanner.css";
import PostBannerDecotation from "./PostBannerDecoration";
import { AdviceType } from "../../../Types/Constants/VariablesType";
import { adviceList, defaultAdvice } from "../../../constants/variables";
import { useParams } from "react-router-dom";
import { POST_BANNER_THUMBNAILS } from "../../../constants/URL";

const PostBanner: React.FC = () => {
  const [advice, setAdvice] = useState<AdviceType>(defaultAdvice);
  const [thumbnail, setThumbnail] = useState<string>("");
  const { category = "" } = useParams<string>();

  useEffect(function makeRandomBanner() {
    const randomNum: number = Math.random() * 10;
    const randomIndex: number = Math.floor(randomNum);
    setAdvice(adviceList[randomIndex]);
    setThumbnail(POST_BANNER_THUMBNAILS[randomIndex]);
  }, []);

  return (
    <div className="post__banner">
      <PostBannerDecotation />
      <div
        className="ptbanner__container"
        style={{ backgroundImage: `url(${thumbnail})` }}>
        <div className="ptbanner__info">
          {category && <h1 className="ptbanner__title">{category}</h1>}
          <div className="ptbanner__advice-container">
            <h4 className="ptbanner__advice">{advice.advice}</h4>
            <h6 className="ptbanner__author">{`- ${advice.author}`}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
