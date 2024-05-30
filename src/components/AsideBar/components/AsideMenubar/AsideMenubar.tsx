import "./AsideMenubar.style.css";

import { MenubarItem } from "@/components";
import { MENUBAR_LIST } from "@/constants";

const AsideMenubar = (): React.ReactNode => {
  return (
    <ul className="aside__menubar">
      {MENUBAR_LIST.map(({ category, IconComponent, title }) => (
        <MenubarItem
          key={category}
          title={title}
          IconComponent={IconComponent}
          category={category}
        />
      ))}
    </ul>
  );
};

export default AsideMenubar;
