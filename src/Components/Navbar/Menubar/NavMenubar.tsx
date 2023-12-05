import React from "react";
import "../../../CSS/Navbar/Menubar/NavMenubar.css";

import NavMenubarItem from "./NavMenubarItem";
import { SiHtml5 } from "react-icons/si";

const NavMenubar: React.FC = () => {
  return (
    <ul className="nav__menubar">
      <NavMenubarItem
        icon={SiHtml5}
        title={"회고 기록"}
        category={"WORK"}
      />
    </ul>
  );
};

export default NavMenubar;
