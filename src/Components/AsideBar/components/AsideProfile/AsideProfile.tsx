import "./AsideProfile.Styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { OnClickEvent } from "@/Types/Event.Types";
import { PROFILE } from "@/constants/URL";
import AsideProfileActions from "./components/AsideProfileAction/AsideProfileActions";

const AsideProfile = (): React.ReactNode => {
  const navigate = useNavigate();

  const onClickHandler: OnClickEvent = () => {
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
            icon="pageview"
            path="/"
          />
          <AsideProfileActions
            action="write"
            icon="lock"
            path="/editor/newPost/newPost"
          />
          <AsideProfileActions
            action="home"
            icon="Cottage"
            path="/"
          />
        </div>
      </div>
      <div
        className="profile__title-container"
        onClick={onClickHandler}>
        <h1 className="profile__title">Jae0's Blog</h1>
      </div>
    </div>
  );
};

export default AsideProfile;
