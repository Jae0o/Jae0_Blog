import React from "react";
import "../../../CSS/Navbar/ProfileCard/NavProfileCard.css";
import ProfileMenuButton from "./ProfileMenuButton";

const NavProfileCard: React.FC = () => {
  const profileImageURL: string =
    "https://res.cloudinary.com/dalxgxu2o/image/upload/c_scale,h_120,q_100,w_120/v1699980818/IMG_0508_mke9kp.gif";

  return (
    <div className="nav__profile">
      <div className="profile__top">
        <div className="profile__photo-box">
          <img className="profile__photo-img" src={profileImageURL} alt="sampleImage" />
        </div>
        <div className="profile__menu">
          <ProfileMenuButton emoji="search" path="/" />
          <ProfileMenuButton emoji="write" path="/editor" />
          <ProfileMenuButton emoji="home" path="/" />
        </div>
      </div>
      <div className="profile__title-box">
        <h1 className="profile__title-text">Jae0's Blog</h1>
      </div>
    </div>
  );
};

export default NavProfileCard;
