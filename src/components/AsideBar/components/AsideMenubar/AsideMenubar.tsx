import { MenubarItem } from "@/components";
import { MENUBAR_LIST } from "@/constants";

import * as S from "./AsideMenubar.style";

const AsideMenubar = (): React.ReactNode => {
  return (
    <S.AsideMenubar>
      {MENUBAR_LIST.map(({ category, IconComponent, title }) => (
        <MenubarItem
          key={category}
          title={title}
          IconComponent={IconComponent}
          category={category}
        />
      ))}
    </S.AsideMenubar>
  );
};

export default AsideMenubar;
