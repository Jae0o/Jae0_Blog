import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { CloseIcon, ExtendContentIcon, HorizontalRuleIcon } from "@/components";

import * as S from "./PostBannerDecoration.style";

const PostBannerDecoration = (): React.ReactNode => {
  const navigate = useNavigate();

  const toPrevPageHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <S.BannerDecoration>
      <S.BannerDecorationButton
        $backgroundColor="red"
        onClick={toPrevPageHandler}
      >
        <S.BannerDecorationIconBox
          whileHover={{
            opacity: 1,
            filter: "brightness(50%)",
          }}
        >
          <CloseIcon
            size="1.2rem"
            fill="#5f6368"
          />
        </S.BannerDecorationIconBox>
      </S.BannerDecorationButton>

      <S.BannerDecorationButton $backgroundColor="yellow">
        <S.BannerDecorationIconBox
          whileHover={{
            opacity: 1,
            filter: "brightness(50%)",
          }}
        >
          <HorizontalRuleIcon
            size="1.2rem"
            fill="#5f6368"
          />
        </S.BannerDecorationIconBox>
      </S.BannerDecorationButton>

      <S.BannerDecorationButton $backgroundColor="green">
        <S.BannerDecorationIconBox
          whileHover={{
            opacity: 1,
            filter: "brightness(50%)",
            rotate: 90,
          }}
        >
          <ExtendContentIcon
            size="1.2rem"
            fill="#5f6368"
          />
        </S.BannerDecorationIconBox>
      </S.BannerDecorationButton>
    </S.BannerDecoration>
  );
};

export default PostBannerDecoration;
