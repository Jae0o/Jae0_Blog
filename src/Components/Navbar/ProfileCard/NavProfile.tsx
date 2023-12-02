import React from "react";
import "../../../CSS/Navbar/ProfileCard/NavProfile.css";
import ProfileMenuButton from "./ProfileMenuButton";
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
          <ProfileMenuButton
            emoji="search"
            path="/"
          />
          <ProfileMenuButton
            emoji="write"
            path="/editor/newPost"
          />
          <ProfileMenuButton
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
