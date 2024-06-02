import { AnimatePresence } from "framer-motion";

import { useMediaQuery } from "@/hooks";

import * as S from "./AsideBar.style";
import { AsideFooter, AsideMenubar, AsideProfile } from "./components";

const AsideBar = (): React.ReactNode => {
  const isVisible = useMediaQuery({ media: "tablet" });

  return (
    <AnimatePresence>
      {isVisible && (
        <S.AsideBar
          initial={{
            translateX: "-100%",
            opacity: 0,
            position: "absolute",
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            position: "relative",
          }}
          exit={{
            translateX: "-100%",
            opacity: 0,
            position: "absolute",
          }}
          transition={{ type: "tween" }}
        >
          <S.AsideBarContainer>
            <AsideProfile />
            <AsideMenubar />
          </S.AsideBarContainer>
          <AsideFooter />
        </S.AsideBar>
      )}
    </AnimatePresence>
  );
};

export default AsideBar;
