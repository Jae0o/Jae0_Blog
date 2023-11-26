import React from "react";
import "../../CSS/Navbar/Navbar.css";
import NavProfileCard from "./ProfileCard/NavProfileCard";
import { getList } from "../../API/FirebaseDB";
import Menubar from "./Menubar/Menubar";

const Navbar: React.FC = () => {
  getList("category").then((res) => console.log(res));

  return (
    <nav className="nav">
      <NavProfileCard />
      <Menubar />
    </nav>
  );
};

export default Navbar;
