import "./NavMenubar.Styles.css";
import { useContext, useEffect, useRef } from "react";
import { FaTools } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import MenubarItem from "@/Components/MenubarItem/MenubarItem";
import { ContextPosts } from "@/Context/ContextPosts";
import NavMenubarFooter from "./Components/NavMenubarFooter";

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
      ref={menubarRef}>
      <MenubarItem
        icon={FaTools}
        title={"Blog 작업 기록"}
        category={"BLOG"}
        postCount={posts.BLOG && posts.BLOG.length}
      />

      <MenubarItem
        icon={FaBook}
        title={"회고 기록"}
        category={"WORK"}
        postCount={posts.WORK && posts.WORK.length}
      />

      <MenubarItem
        icon={RiReactjsLine}
        title={"Frontend"}
        category={"Frontend"}
        postCount={posts.Frontend && posts.Frontend.length}
      />

      <MenubarItem
        icon={FaRegCalendarCheck}
        title={"I Learn"}
        category={"DIARY"}
        postCount={posts.DIARY && posts.DIARY.length}
      />
      <NavMenubarFooter />
    </ul>
  );
};

export default NavMenubar;
