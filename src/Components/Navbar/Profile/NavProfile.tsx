import React from "react";
import "../../../CSS/Navbar/ProfileCard/NavProfile.css";
import NavProfileActions from "./NavProfileActions";
import { PROFILE } from "../../../constants/URL";
import { useNavigate } from "react-router-dom";
import { OnClickEvent } from "../../../Types/Components/EventTypes";

const NavProfile: React.FC = () => {
  const navigate = useNavigate();

  const onClickHandler: OnClickEvent = () => {
    navigate("/");
  };
  return (
    <div className="nav__profile">
      <div className="profile__header">
        <div className="profile__thumbnail-container">
          <img
            className="profile__thumbnail"
            src={PROFILE.THUMBNAIL}
            alt="PROFILE-THUMBNAIL"
          />
        </div>
        <div className="profile__actions">
          <NavProfileActions
            action="search"
            icon="pageview"
            path="/"
          />
          <NavProfileActions
            action="write"
            icon="lock"
            path="/editor/newPost/newPost"
          />
          <NavProfileActions
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

export default NavProfile;
