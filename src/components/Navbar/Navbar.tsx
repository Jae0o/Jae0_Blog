import { AnimatePresence } from "framer-motion";

import { useMediaQuery, useToggle } from "@/hooks";

import * as S from "./Navbar.style";
import { NavMenubar, NavTitle, NavToggleButton } from "./components";

const Navbar = () => {
  const { isToggle, handleOffToggle, handleToggle } = useToggle();
  const isVisible = useMediaQuery({ media: "tablet" });

  return (
    <AnimatePresence>
      {!isVisible && (
        <S.NavbarBackground
          initial={{
            opacity: 0,
            translateY: "-110%",
            position: "absolute",
          }}
          animate={{
            opacity: 1,
            translateY: "0%",
            position: "relative",
          }}
          exit={{
            opacity: 0,
            translateY: "-110%",
            position: "absolute",
          }}
          transition={{ type: "tween" }}
        >
          <S.Navbar>
            <NavTitle />
            <NavToggleButton
              isToggle={isToggle}
              onToggle={handleToggle}
            />

            <NavMenubar
              isToggle={isToggle}
              onClose={handleOffToggle}
            />
          </S.Navbar>
        </S.NavbarBackground>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
