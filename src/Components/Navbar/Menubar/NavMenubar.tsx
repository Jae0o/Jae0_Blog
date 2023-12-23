import React, { useContext } from "react";
import "./NavMenubar.Style.css";
import NavMenubarItem from "./Components/NavMenubarItem";
import { SiHtml5 } from "react-icons/si";
import { ContextPosts } from "../../../Context/ContextPosts";

const NavMenubar: React.FC = () => {
  const { posts } = useContext(ContextPosts);

  return (
    <ul className="nav__menubar">
      <NavMenubarItem
        icon={SiHtml5}
        title={"회고 기록"}
        category={"WORK"}
        postCount={posts.WORK && posts.WORK.length}
      />
      <NavMenubarItem
        icon={SiHtml5}
        title={"WIL MIL"}
        category={"DIARY"}
        postCount={posts.DIARY && posts.DIARY.length}
      />
    </ul>
  );
};

export default NavMenubar;
