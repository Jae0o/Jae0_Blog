import React from "react";
import "./NavMenubarItem.Style.css";
import { NavMenubarItemProps } from "../../NavMenubar.Types";
import { NavigateFunction, useNavigate } from "react-router-dom";

const NavMenubarItem = ({
  icon: ICON,
  title,
  category,
  postCount = 0,
}: NavMenubarItemProps): React.ReactNode => {
  const navigate: NavigateFunction = useNavigate();

  const onNavigate = () => {
    navigate(`/post/list/${category}`);
  };

  return (
    <li
      className="menubar__item"
      value={category}
      onClick={onNavigate}>
      <div className="menubar__icon-container">
        <ICON className="menubar__icon" />
        <p className="menubar__listCount">{postCount}</p>
      </div>

      <div className="menubar__title-container">
        <h4 className="menubar__title">{title}</h4>
      </div>
    </li>
  );
};

export default NavMenubarItem;
