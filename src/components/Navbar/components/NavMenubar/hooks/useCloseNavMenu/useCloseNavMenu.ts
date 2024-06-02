import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface UseCloseNavMenu {
  isToggle: boolean;
  onClose: () => void;
}

const useCloseNavMenu = ({ isToggle, onClose }: UseCloseNavMenu) => {
  const menubarRef = useRef<HTMLUListElement>(null);
  const path = useLocation();

  useEffect(() => {
    onClose();
  }, [onClose, path]);

  useEffect(() => {
    const handleAwayClick = ({ currentTarget, target }: MouseEvent) => {
      const { current } = menubarRef;

      if (!current || !isToggle || currentTarget === current) {
        return;
      }

      console.log(target);
      if (
        target instanceof HTMLElement &&
        target.className.includes("nav_toggle_box")
      ) {
        return;
      }

      onClose();
    };

    document.addEventListener("mouseup", handleAwayClick);

    return () => {
      document.removeEventListener("mouseup", handleAwayClick);
    };
  }, [isToggle, onClose]);

  return menubarRef;
};

export default useCloseNavMenu;
