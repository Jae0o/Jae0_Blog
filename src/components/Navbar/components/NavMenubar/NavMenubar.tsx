import { AnimatePresence } from "framer-motion";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { MenubarItem } from "@/components";
import { MENUBAR_LIST } from "@/constants";

import * as S from "./NavMenubar.style";
import { NavMenubarFooter } from "./components";

interface NavMenubarProps {
  isToggle: boolean;
  onClose: () => void;
}

const NavMenubar = ({ isToggle, onClose }: NavMenubarProps) => {
  const menubarRef = useRef<HTMLUListElement>(null);
  const path = useLocation();

  useEffect(() => {
    onClose();
  }, [onClose, path]);

  useEffect(() => {
    const handleAwayClick = ({ currentTarget }: MouseEvent) => {
      const { current } = menubarRef;

      if (!current || !isToggle || currentTarget === current) {
        return;
      }

      onClose();
    };

    document.addEventListener("mouseup", handleAwayClick);

    return () => {
      document.removeEventListener("mouseup", handleAwayClick);
    };
  }, [isToggle, onClose]);

  return (
    <AnimatePresence>
      {isToggle && (
        <S.NavMenubar
          ref={menubarRef}
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
