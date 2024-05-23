import "./NavMenubar.Styles.css";
import { useContext, useEffect, useRef } from "react";
import { ContextPosts } from "@/Context/ContextPosts";
import { MenubarItem } from "@/components";
import { MENUBAR_LIST } from "@/constants/variables";
import { NavMenubarFooter } from "./components";

interface NavMenubarProps {
  isToggle: boolean;
  onToggle: () => void;
}

const NavMenubar = ({ isToggle, onToggle }: NavMenubarProps) => {
  const { posts } = useContext(ContextPosts);
  const menubarRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleAwayClick = ({ currentTarget, target }: MouseEvent) => {
      const { current } = menubarRef;

      if (!current || !isToggle || currentTarget === current) {
        return;
      }

      if (
        target instanceof HTMLElement &&
        target.className === "navbar_dropdown_checkbox"
      ) {
        return;
      }

      onToggle();
    };

    document.addEventListener("mouseup", handleAwayClick);

    return () => {
      document.removeEventListener("mouseup", handleAwayClick);
    };
  }, [isToggle, onToggle]);

  return (
    <ul
      className={`nav__menubar ${
        isToggle ? "Active__NavMenu" : "unActive__NavMenu"
      }`}
      ref={menubarRef}
      style={{ display: `${isToggle ? "flex" : "none"}` }}>
      {MENUBAR_LIST.map(({ category, icon, title }) => (
        <MenubarItem
          key={category}
          title={title}
          icon={icon}
          category={category}
          postCount={posts[category] && posts[category].length}
        />
      ))}

      <NavMenubarFooter />
    </ul>
  );
};

export default NavMenubar;
