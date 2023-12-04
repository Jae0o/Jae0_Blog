import React, { useContext } from "react";
import "../../../CSS/Navbar/Menubar/NavMenubar.css";
import { ContextPostList } from "../../../Context/ContextPostList";
import NavMenubarItem from "./NavMenubarItem";
import { SiHtml5 } from "react-icons/si";

const NavMenubar: React.FC = () => {
  const { workPosts } = useContext(ContextPostList);

  return (
    <ul className="nav__menubar">
      <NavMenubarItem
        icon={SiHtml5}
        title={"회고 기록"}
        category={"WORK"}
        posts={workPosts}
      />
    </ul>
  );
};

export default NavMenubar;
