import React from "react";
import "../../CSS/Navbar/Navbar.css";
import NavProfileCard from "./ProfileCard/NavProfileCard";
import { getPost } from "../../API/FirebaseDB";

const Navbar: React.FC = () => {
  getPost().then((res) => console.log(res));
  return (
    <nav className="nav">
      <NavProfileCard />
      <button></button>
    </nav>
  );
};

export default Navbar;
