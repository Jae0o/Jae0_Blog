import React from "react";
import "./NavProfileActions.Style.css";
import { NavProfileActionsProps } from "../../Navbar.Types";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { OnClickEvent } from "../../../../Types/EventTypes";

const NavProfileActions: React.FC<NavProfileActionsProps> = ({
  action,
  path,
  icon,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const onClickHandle: OnClickEvent = e => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className={`profile__action-container ${action}-action`}>
      <a
        className={`profile__action ${action}-profile-btn`}
        href={path}
        onClick={onClickHandle}>
        <span className={"material-symbols-outlined"}>{icon}</span>
      </a>
    </div>
  );
};

export default NavProfileActions;
