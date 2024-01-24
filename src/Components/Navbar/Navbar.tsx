import React from "react";
import "./Navbar.Style.css";
import NavProfile from "./components/Profile/NavProfile";
import NavMenubar from "./components/Menubar/NavMenubar";
import NavbarFooter from "./components/NavbarFooter/NavbarFooter";

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
