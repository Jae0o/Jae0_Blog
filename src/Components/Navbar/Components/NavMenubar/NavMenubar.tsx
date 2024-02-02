import "./NavMenubar.Styles.css";
import { useContext } from "react";
import { FaTools } from "react-icons/fa";
import MenubarItem from "@/Components/MenubarItem/MenubarItem";
import { ContextPosts } from "@/Context/ContextPosts";

interface NavMenubarProps {
  isToggle: boolean;
}
const NavMenubar = ({ isToggle }: NavMenubarProps) => {
  const { posts } = useContext(ContextPosts);
  return (
    <ul
      className={`nav__menubar ${
        isToggle ? "Active__NavMenu" : "unActive__NavMenu"
      }`}>
      <MenubarItem
        icon={FaTools}
        title={"Blog 작업 기록"}
        category={"BLOG_WORK"}
        postCount={posts.BLOG_WORK && posts.BLOG_WORK.length}
      />
      <MenubarItem
        icon={FaTools}
        title={"Blog 작업 기록"}
        category={"BLOG_WORK"}
        postCount={posts.BLOG_WORK && posts.BLOG_WORK.length}
      />
      <MenubarItem
        icon={FaTools}
        title={"Blog 작업 기록"}
        category={"BLOG_WORK"}
        postCount={posts.BLOG_WORK && posts.BLOG_WORK.length}
      />
    </ul>
  );
};

export default NavMenubar;
