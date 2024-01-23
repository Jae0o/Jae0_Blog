import React from "react";
import "./Navbar.Style.css";
import NavProfile from "./components/Profile/NavProfile";
import NavMenubar from "./components/Menubar/NavMenubar";

const Navbar = (): React.ReactNode => {
  return (
    <nav className="nav">
      <NavProfile />
      <NavMenubar />
    </nav>
  );
};

export default Navbar;
