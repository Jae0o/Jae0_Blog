import "./AsideProfileActions.style.css";

import React, { MouseEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

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

  const onClickHandle = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className={`profile__action-container ${action}-action`}>
      <a
        className={`profile__action ${action}-profile-btn`}
        href={path}
        onClick={onClickHandle}
      >
        <span className={"material-symbols-outlined"}>{icon}</span>
      </a>
    </div>
  );
};

export default AsideProfileActions;
