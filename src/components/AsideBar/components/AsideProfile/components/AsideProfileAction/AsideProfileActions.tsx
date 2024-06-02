import React, { MouseEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import * as S from "./AsideProfileActions.style";

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
    <S.AsideProfileAction
      $type={action}
      href={path}
      onClick={onClickHandle}
      aria-label={`link move ${action}`}
      whileTap={{
        scale: 0.85,
      }}
      whileHover={{
        filter: "brightness(80%)",
      }}
    >
      {IconComponent}
    </S.AsideProfileAction>
  );
};

export default AsideProfileActions;
