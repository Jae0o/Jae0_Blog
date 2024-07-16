import { NavigateFunction, useNavigate } from "react-router-dom";

import { useHover } from "@/hooks";

import * as S from "./MenubarItem.style";

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
  const { isHover, hoverRef } = useHover();
  const navigate: NavigateFunction = useNavigate();

  const onNavigate = () => {
    setTimeout(() => {
      navigate(`/post/list/${category}`);
    }, 300);
  };

  return (
    <S.MenubarItemLayout
      value={category}
      onClick={onNavigate}
    >
      <S.MenubarItemContent
        ref={hoverRef}
        whileHover={{ filter: "brightness(80%)" }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.3,
        }}
      >
        <S.MenubarItemIconContainer>{IconComponent}</S.MenubarItemIconContainer>

        <S.MenubarItemTitle>{title}</S.MenubarItemTitle>
      </S.MenubarItemContent>

      <S.MenubarItemDecoration>
        <S.MenubarItemDecorationItem
          initial={{
            translateX: "-120%",
          }}
          animate={{ translateX: isHover ? "0%" : "-120%" }}
          transition={{
            duration: 0.3,
          }}
        />
      </S.MenubarItemDecoration>
    </S.MenubarItemLayout>
  );
};

export default MenubarItem;
