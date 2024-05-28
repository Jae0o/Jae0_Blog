import "./AsideProfile.style.css";

import React from "react";
import { useNavigate } from "react-router-dom";

import { HomeIcon, SearchIcon, WriteIcon } from "@/components/Icons";
import { PROFILE } from "@/constants";

import AsideProfileActions from "./components/AsideProfileAction/AsideProfileActions";

const AsideProfile = (): React.ReactNode => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };
  return (
    <div className="aside__profile">
      <div className="profile__header">
        <div className="profile__thumbnail-container">
          <img
            className="profile__thumbnail"
            src={PROFILE.THUMBNAIL}
            alt="PROFILE-THUMBNAIL"
          />
        </div>
        <div className="profile__actions">
          <AsideProfileActions
            action="search"
            IconComponent={<SearchIcon size="2.4rem" />}
            path="/"
          />
          <AsideProfileActions
            action="write"
            IconComponent={<WriteIcon size="2.4rem" />}
            path="/editor/newPost/newPost"
          />
          <AsideProfileActions
            action="home"
            IconComponent={<HomeIcon size="2.4rem" />}
            path="/"
          />
        </div>
      </div>
      <div
        className="profile__title-container"
        onClick={onClickHandler}
      >
        <h1 className="profile__title">Jae0's Blog</h1>
      </div>
    </div>
  );
};

export default AsideProfile;
