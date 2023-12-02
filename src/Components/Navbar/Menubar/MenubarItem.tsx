import React from "react";
import "../../../CSS/Navbar/Menubar/MenubarItem.css";
import { MenubarItemProps } from "../../../Types/Components/Nav/MenubarTypes";
import { NavigateFunction, useNavigate } from "react-router-dom";

const MenubarItem: React.FC<MenubarItemProps> = ({ icon: ICON, title, category, list }) => {
  const navigate: NavigateFunction = useNavigate();

  const onNavigate = () => {
    navigate(`/category/${category}`, { state: { list } });
  };

  return (
    <li className="menubar__item" value={category} onClick={onNavigate}>
      <div className="menubar__itemIcon-box">
        <ICON className="menubat__itemIcon-icon" />
        <p className="menubar__listCount">{list.length}</p>
      </div>

      <div className="menubar__title-box">
        <h4 className="menubar__title-text">{title}</h4>
      </div>
    </li>
  );
};

export default MenubarItem;
