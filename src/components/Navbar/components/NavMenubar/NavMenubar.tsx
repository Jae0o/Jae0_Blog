import { AnimatePresence } from "framer-motion";

import { MenubarItem } from "@/components";
import { MENUBAR_LIST } from "@/constants";

import * as S from "./NavMenubar.style";
import { NavMenubarFooter } from "./components";
import { useCloseNavMenu } from "./hooks";

interface NavMenubarProps {
  isToggle: boolean;
  onClose: () => void;
}

const NavMenubar = ({ isToggle, onClose }: NavMenubarProps) => {
  const ref = useCloseNavMenu({ isToggle, onClose });

  return (
    <AnimatePresence>
      {isToggle && (
        <S.NavMenubar
          ref={ref}
          initial={{
            translateX: "110%",
            opacity: 0,
          }}
          animate={{
            translateX: "0%",
            opacity: 1,
          }}
          exit={{
            translateX: "110%",
            opacity: 0,
          }}
        >
          {MENUBAR_LIST.map(({ category, IconComponent, title }) => (
            <MenubarItem
              key={category}
              title={title}
              IconComponent={IconComponent}
              category={category}
            />
          ))}

          <NavMenubarFooter />
        </S.NavMenubar>
      )}
    </AnimatePresence>
  );
};

export default NavMenubar;
