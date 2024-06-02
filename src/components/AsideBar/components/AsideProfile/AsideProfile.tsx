import "./AsideProfile.style.css";

import React from "react";
import { useNavigate } from "react-router-dom";

import { HomeIcon, SearchIcon, WriteIcon } from "@/components";
import { PROFILE } from "@/constants";

import * as S from "./AsideProfile.style";
import AsideProfileActions from "./components/AsideProfileAction/AsideProfileActions";

const AsideProfile = (): React.ReactNode => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };
  return (
    <S.AsideProfile>
      <S.AsideHeader>
        <S.AsideThumbnailContainer>
          <S.AsideThumbnail
            src={PROFILE.THUMBNAIL}
            alt="PROFILE-THUMBNAIL"
          />
        </S.AsideThumbnailContainer>

        <S.AsideHeaderActions>
          <AsideProfileActions
            action="search"
            IconComponent={<SearchIcon size="2.4rem" />}
            path="/"
          />
          <AsideProfileActions
            action="write"
            IconComponent={<WriteIcon size="2.4rem" />}
            path="/editor/newPost"
          />
          <AsideProfileActions
            action="home"
            IconComponent={<HomeIcon size="2.4rem" />}
            path="/"
          />
        </S.AsideHeaderActions>
      </S.AsideHeader>

      <S.AsideTitleLayout>
        <S.AsideTitle
          onClick={onClickHandler}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          Jae0's Blog
        </S.AsideTitle>
      </S.AsideTitleLayout>
    </S.AsideProfile>
  );
};

export default AsideProfile;
