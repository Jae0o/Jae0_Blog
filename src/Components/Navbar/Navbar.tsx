import React from "react";
import "./Navbar.Style.css";
import NavProfile from "./components/Profile/NavProfile";
import NavMenubar from "./components/Menubar/NavMenubar";
import NavbarFooter from "./components/NavbarFooter/NavbarFooter";

const Navbar = (): React.ReactNode => {
  return (
    <nav className="nav">
      <NavProfile />
      <NavMenubar />
      <NavbarFooter />
    </nav>
  );
};

export default Navbar;
