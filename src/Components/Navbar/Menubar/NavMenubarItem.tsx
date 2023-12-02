import React from "react";
import "../../../CSS/Navbar/Menubar/NavMenubarItem.css";
import { NavMenubarItemProps } from "../../../Types/Components/Nav/NavMenubarTypes";
import { NavigateFunction, useNavigate } from "react-router-dom";

const NavMenubarItem: React.FC<NavMenubarItemProps> = ({
  icon: ICON,
  title,
  category,
  list,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const onNavigate = () => {
    navigate(`/category/${category}`, { state: { list } });
  };

  return (
    <li
      className="menubar__item"
      value={category}
      onClick={onNavigate}>
      <div className="menubar__icon-container">
        <ICON className="menubar__icon" />
        <p className="menubaritem__listCount">{list.length}</p>
      </div>

      <div className="menubar__title-container">
        <h4 className="menubar__title">{title}</h4>
      </div>
    </li>
  );
};

export default NavMenubarItem;