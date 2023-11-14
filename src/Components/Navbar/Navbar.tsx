import React from "react";
import "../../CSS/Navbar/Navbar.css";
import NavProfileCard from "./ProfileCard/NavProfileCard";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <NavProfileCard />
    </nav>
  );
};

export default Navbar;
