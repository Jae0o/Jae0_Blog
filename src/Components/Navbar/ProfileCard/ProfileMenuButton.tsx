import React from "react";
import "../../../CSS/Navbar/ProfileCard/ProfileMenuButton.css";
import { FaHome } from "react-icons/fa";
import { LuSearchCheck } from "react-icons/lu";
import { MenuButtonProps } from "../../../Types/NavbarType";
import { TfiWrite } from "react-icons/tfi";

const ProfileMenuButton: React.FC<MenuButtonProps> = ({ emoji }) => {
  let icon: JSX.Element;
  if (emoji === "home") {
    icon = <FaHome className="profile__btn-emoji home-btn" />;
  } else if (emoji === "search") {
    icon = <LuSearchCheck className="profile__btn-emoji search-btn" />;
  } else {
    icon = <TfiWrite className="profile__btn-emoji write-btn" />;
  }

  return (
    <div className="profile__btn__outbox">
      <a className="profile__btn-box" href="/">
        {icon}
      </a>
    </div>
  );
};

export default ProfileMenuButton;
