import React from "react";
import "../../../CSS/PostPage/PostBanner/PostBannerDecotation.css";

const PostBannerDecotation: React.FC = () => {
  return (
    <div className="ptbanner__decoration">
      <button className="ptdecoration__button pt-close">
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

export default PostBannerDecotation;
