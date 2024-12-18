import { MENU_LIST } from "@/lib/constants";

import { MenuItem } from "./components";

const MenuList = () => {
  return (
    <ul className="w-[22rem] grow-[1] p-[1rem] my-[3.2rem] flex flex-col items-center gap-[0.6rem] overflow-y-auto scrollbar-hide">
      {MENU_LIST.map(({ category, Icon, title }) => (
        <MenuItem
          key={category}
          category={category}
          title={title}
          Icon={Icon}
        />
      ))}
    </ul>
  );
};

export default MenuList;
