import * as S from "./PostBanner.style";

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
    <S.PostBannerLayout>
      <S.PostBanner
        $height={height}
        $backgroundSrc={thumbnail}
        $objectFit={objectFit}
      >
        <S.BannerTextContainer>
          <S.BannerMainTitle>{mainText}</S.BannerMainTitle>
          {subText && <S.BannerSubTitle>{subText}</S.BannerSubTitle>}
        </S.BannerTextContainer>
      </S.PostBanner>
    </S.PostBannerLayout>
  );
};

export default PostBanner;
