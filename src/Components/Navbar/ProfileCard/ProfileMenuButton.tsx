import React from "react";
import "../../../CSS/Navbar/ProfileCard/ProfileMenuButton.css";
import { MenuButtonProps } from "../../../Types/Components/Nav/NavbarType";
import { OnClickEventType } from "../../../Types/EventTypes";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";

const ProfileMenuButton: React.FC<MenuButtonProps> = ({ emoji, path }) => {
  let icon: JSX.Element;
  if (emoji === "home") {
    icon = <FaHome className="profile__btn-emoji home-btn" />;
  } else if (emoji === "search") {
    icon = <FaSearch className="profile__btn-emoji search-btn" />;
  } else {
    icon = <MdEditDocument className="profile__btn-emoji write-btn" />;
  }

  const navigate: NavigateFunction = useNavigate();

  const onClickHandle: OnClickEventType = (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="profile__btn__outbox">
      <a className="profile__btn-box" href={path} onClick={onClickHandle}>
        {icon}
      </a>
    </div>
  );
};

export default ProfileMenuButton;
