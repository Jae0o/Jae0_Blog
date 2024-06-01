import "./PostBanner.style.css";

interface PostBannerProps {
  thumbnail: string;
  mainText: string;
  subText?: string;
  height?: number;
  objectFit?: "contain" | "cover";
}

const PostBanner = ({
  thumbnail,
  mainText,
  subText,
  height,
  objectFit = "cover",
}: PostBannerProps): React.ReactNode => {
  return (
    <div className="post__banner">
      <div
        className="ptbanner__container"
        style={{
          backgroundImage: `url(${thumbnail})`,
          height: height ? `${height}rem` : "",
          backgroundSize: `${objectFit}`,
        }}
      >
        <div className="ptbanner__advice-container">
          <h5 className="ptbanner__advice">{mainText}</h5>
          {subText && <h6 className="ptbanner__author">{subText}</h6>}
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
