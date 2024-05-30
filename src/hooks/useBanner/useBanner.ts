import { useCallback, useMemo } from "react";

import { ADVICE_LIST, POST_BANNER_THUMBNAILS } from "@/constants";

interface UseBannerProps {
  changeKey?: string;
}

export const useBanner = ({ changeKey = "" }: UseBannerProps) => {
  const getRandomIndex = useCallback(() => {
    const randomNum: number = Math.random() * 10;
    return Math.floor(randomNum);
  }, []);

  const bannerAdvice = useMemo(
    () => ADVICE_LIST[getRandomIndex()],

    // changeKey 가 변경될때마다 랜덤한 배너를 생성하기 위해 dependency eslint off
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getRandomIndex, changeKey],
  );

  const bannerThumbnail = useMemo(
    () => POST_BANNER_THUMBNAILS[getRandomIndex()],
    // changeKey 가 변경될때마다 랜덤한 배너를 생성하기 위해 dependency eslint off
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getRandomIndex, changeKey],
  );

  return {
    bannerAdvice,
    bannerThumbnail,
  };
};

export default useBanner;
