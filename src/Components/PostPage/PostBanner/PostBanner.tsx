import React from "react";
import "../../../CSS/PostPage/PostBanner/PostBanner.css";
import PostBannerDecotation from "./PostBannerDecoration";

const PostBanner: React.FC = () => {
  return (
    <div className="post__banner">
      <PostBannerDecotation />
    </div>
  );
};

export default PostBanner;
