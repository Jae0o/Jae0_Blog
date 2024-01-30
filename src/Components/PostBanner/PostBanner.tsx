import "./PostBanner.Style.css";

interface PostBannerProps {
  thumbnail: string;
  mainText: string;
  subText?: string;
  height?: number;
}

const PostBanner = ({
  thumbnail,
  mainText,
  subText,
  height,
}: PostBannerProps): React.ReactNode => {
  return (
    <div className="post__banner">
      <div
        className="ptbanner__container"
        style={{
          backgroundImage: `url(${thumbnail})`,
          height: height ? `${height}rem` : "",
        }}>
        <div className="ptbanner__advice-container">
          <h4 className="ptbanner__advice">{mainText}</h4>
          {subText && <h6 className="ptbanner__author">{subText}</h6>}
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
