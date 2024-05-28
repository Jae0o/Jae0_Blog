import "./PostBannerDecoration.style.css";

import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
        <span className="material-symbols-outlined">close</span>
      </button>
      <button className="ptdecoration__button pt-minimize">
        <span className="material-symbols-outlined">horizontal_rule</span>
      </button>
      <button className="ptdecoration__button pt-maximize">
        <span className="material-symbols-outlined">expand_content</span>
      </button>
    </div>
  );
};

export default PostBannerDecoration;
