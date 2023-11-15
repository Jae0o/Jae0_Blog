import React from "react";
import "../../../CSS/Navbar/ProfileCard/ProfileMenuButton.css";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MenuButtonProps } from "../../../Types/NavbarType";
import { MdEditDocument } from "react-icons/md";

const ProfileMenuButton: React.FC<MenuButtonProps> = ({ emoji }) => {
  let icon: JSX.Element;
  if (emoji === "home") {
    icon = <FaHome className="profile__btn-emoji home-btn" />;
  } else if (emoji === "search") {
    icon = <FaSearch className="profile__btn-emoji search-btn" />;
  } else {
    icon = <MdEditDocument className="profile__btn-emoji write-btn" />;
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
