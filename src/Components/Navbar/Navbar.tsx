import React from "react";
import "../../CSS/Navbar/Navbar.css";
import NavProfileCard from "./ProfileCard/NavProfileCard";
import Menubar from "./Menubar/Menubar";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <NavProfileCard />
      <Menubar />
    </nav>
  );
};

export default Navbar;
