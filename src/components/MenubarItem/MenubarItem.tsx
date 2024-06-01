import "./MenubarItem.style.css";

import { NavigateFunction, useNavigate } from "react-router-dom";

import { useHover } from "@/hooks";

export interface MenubarItemProps {
  IconComponent: React.ReactNode;
  title: string;
  category: string;
}

const MenubarItem = ({
  IconComponent,
  title,
  category,
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
      onClick={onNavigate}
    >
      <div
        className="menubar__item-container"
        ref={hoverRef}
      >
        <div className="menubar__icon-container">{IconComponent}</div>

        <div className="menubar__title-container">
          <h2 className="menubar__title">{title}</h2>
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
