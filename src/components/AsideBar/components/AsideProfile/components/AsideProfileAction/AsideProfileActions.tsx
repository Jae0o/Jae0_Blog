import "./AsideProfileActions.style.css";

import React, { MouseEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface AsideProfileActionsProps {
  action: "home" | "search" | "write";
  IconComponent: React.ReactNode;
  path: string;
}

const AsideProfileActions = ({
  action,
  path,
  IconComponent,
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
        aria-label={`link move ${action}`}
      >
        {IconComponent}
      </a>
    </div>
  );
};

export default AsideProfileActions;
