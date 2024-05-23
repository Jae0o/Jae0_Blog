import "./MenubarItem.Style.css";
import React from "react";
import { IconType } from "react-icons";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useHover } from "@/hooks";

export interface MenubarItemProps {
  icon: IconType;
  title: string;
  category: string;
  postCount: number;
}

const MenubarItem = ({
  icon: ICON,
  title,
  category,
  postCount = 0,
}: MenubarItemProps): React.ReactNode => {
  const navigate: NavigateFunction = useNavigate();
  const { isHover, hoverRef } = useHover();

  const onNavigate = () => {
    navigate(`/post/list/${category}`);
  };

  return (
    <li
      className="menubar__item-layout"
      value={category}
      onClick={onNavigate}>
      <div
        className="menubar__item-container"
        ref={hoverRef}>
        <div className="menubar__icon-container">
          <ICON className="menubar__icon" />
          <p className="menubar__listCount">{postCount}</p>
        </div>

        <div className="menubar__title-container">
          <h4 className="menubar__title">{title}</h4>
        </div>
      </div>
      <div
        className="menubar__decoration-line"
        style={{ width: isHover ? "100%" : "0%" }}
      />
    </li>
  );
};

export default MenubarItem;
