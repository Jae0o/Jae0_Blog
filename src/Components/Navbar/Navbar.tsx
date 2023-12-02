import React from "react";
import "../../CSS/Navbar/Navbar.css";
import NavProfile from "./ProfileCard/NavProfile";
import Menubar from "./Menubar/Menubar";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <NavProfile />
      <Menubar />
    </nav>
  );
};

export default Navbar;
