import React, { useContext } from "react";
import "../../../CSS/Navbar/Menubar/NavMenubar.css";
import { ContextPostList } from "../../../Context/ContextPostList";
import NavMenubarItem from "./NavMenubarItem";
import { SiHtml5 } from "react-icons/si";

const NavMenubar: React.FC = () => {
  const { htmlList } = useContext(ContextPostList);

  return (
    <ul className="nav__menubar">
      <NavMenubarItem
        icon={SiHtml5}
        title={"HTML"}
        category={"HTML"}
        list={htmlList}
      />
    </ul>
  );
};

export default NavMenubar;
