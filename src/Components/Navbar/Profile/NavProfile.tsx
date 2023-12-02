import React from "react";
import "../../../CSS/Navbar/ProfileCard/NavProfile.css";
import NavProfileActions from "./NavProfileActions";
import { PROFILE } from "../../../constants/URL";

const NavProfileCard: React.FC = () => {
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
            emoji="search"
            path="/"
          />
          <NavProfileActions
            emoji="write"
            path="/editor/newPost"
          />
          <NavProfileActions
            emoji="home"
            path="/"
          />
        </div>
      </div>
      <div className="profile__title-container">
        <h1 className="profile__title">Jae0's Blog</h1>
      </div>
    </div>
  );
};

export default NavProfileCard;
