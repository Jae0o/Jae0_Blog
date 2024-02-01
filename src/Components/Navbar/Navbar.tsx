import "./Navbar.Style.css";
import React from "react";
import NavMenubar from "./components/Menubar/NavMenubar";
import NavbarFooter from "./components/NavbarFooter/NavbarFooter";
import NavProfile from "./components/Profile/NavProfile";

const Navbar = (): React.ReactNode => {
  return (
    <nav className="nav">
      <div className="nav_layout">
        <NavProfile />
        <NavMenubar />
      </div>
      <NavbarFooter />
    </nav>
  );
};

export default Navbar;
