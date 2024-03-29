import "./AsideProfileActions.Style.css";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { OnClickEvent } from "@/Types/Event.Types";

interface AsideProfileActionsProps {
  action: "home" | "search" | "write";
  icon: string;
  path: string;
}

const AsideProfileActions = ({
  action,
  path,
  icon,
}: AsideProfileActionsProps): React.ReactNode => {
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

export default AsideProfileActions;
