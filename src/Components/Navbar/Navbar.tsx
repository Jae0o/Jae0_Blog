import React from "react";
import "./Navbar.Style.css";
import NavProfile from "./Profile/NavProfile";
import NavMenubar from "./Menubar/NavMenubar";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <NavProfile />
      <NavMenubar />
    </nav>
  );
};

export default Navbar;
