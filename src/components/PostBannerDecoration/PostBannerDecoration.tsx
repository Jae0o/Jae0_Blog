import "./PostBannerDecoration.style.css";

import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { CloseIcon, ExtendContentIcon, HorizontalRuleIcon } from "@/components";

const PostBannerDecoration = (): React.ReactNode => {
  const navigate = useNavigate();

  const toPrevPageHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className="ptbanner__decoration">
      <button
        className="ptdecoration__button pt-close"
        onClick={toPrevPageHandler}
      >
        <CloseIcon
          size="1.2rem"
          className="ptdecoration__icon"
          fill="#5f6368"
        />
      </button>
      <button className="ptdecoration__button pt-minimize">
        <HorizontalRuleIcon
          size="1.2rem"
          className="ptdecoration__icon"
          fill="#5f6368"
        />
      </button>
      <button className="ptdecoration__button pt-maximize">
        <ExtendContentIcon
          size="1.2rem"
          className="ptdecoration__icon"
          fill="#5f6368"
        />
      </button>
    </div>
  );
};

export default PostBannerDecoration;
