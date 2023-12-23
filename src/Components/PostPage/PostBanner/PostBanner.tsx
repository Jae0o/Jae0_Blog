import "./PostBanner.Style.css";
import PostBannerDecoration from "./Components/PostBannerDecoration";
import { PostBannerProps } from "./PostBanner.Types";

const PostBanner = ({
  thumbnail,
  mainText,
  subText,
}: PostBannerProps): JSX.Element => {
  return (
    <div className="post__banner">
      <PostBannerDecoration />
      <div
        className="ptbanner__container"
        style={{ backgroundImage: `url(${thumbnail})` }}>
        <div className="ptbanner__advice-container">
          <h4 className="ptbanner__advice">{mainText}</h4>
          {subText && <h6 className="ptbanner__author">{subText}</h6>}
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
