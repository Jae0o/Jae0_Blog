import React from "react";
import "../../../CSS/Navbar/ProfileCard/NavProfileActions.css";
import { NavProfileActionsProps } from "../../../Types/Components/Nav/NavbarType";
import { OnClickEventType } from "../../../Types/EventTypes";
import { useNavigate, NavigateFunction } from "react-router-dom";

const NavProfileActions: React.FC<NavProfileActionsProps> = ({
  action,
  path,
  icon,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const onClickHandle: OnClickEventType = e => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className={`profile__action-container ${action}-action`}>
      <a
        className={`profile__action ${action}`}
        href={path}
        onClick={onClickHandle}>
        <span className={"material-symbols-outlined"}>{icon}</span>
      </a>
    </div>
  );
};

export default NavProfileActions;