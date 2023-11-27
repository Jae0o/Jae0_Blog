import React, { useContext } from "react";
import "../../../CSS/Navbar/Menubar/Menubar.css";
import { ContextPostList } from "../../../Context/ContextPostList";
import MenubarItem from "./MenubarItem";
import { SiHtml5 } from "react-icons/si";

const Menubar: React.FC = () => {
  const { htmlList } = useContext(ContextPostList);

  return (
    <ul className="nav__menubar">
      <MenubarItem icon={SiHtml5} title={"HTML"} category={"HTML"} list={htmlList} />
    </ul>
  );
};

export default Menubar;
