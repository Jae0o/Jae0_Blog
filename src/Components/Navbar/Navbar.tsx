import "./Navbar.Styles.css";
import { useState } from "react";
import NavMenubar from "./Components/NavMenubar/NavMenubar";
import NavTitle from "./Components/NavTitle/NavTitle";
import NavToggleButton from "./Components/NavToggleButton/NavToggleButton";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(isToggle => !isToggle);
  };

  console.log(isToggle);
  return (
    <section className="nav__background">
      <nav className="nav">
        <NavTitle />
        <NavToggleButton
          isToggle={isToggle}
          onToggle={handleToggle}
        />

        <NavMenubar isToggle={isToggle} />
      </nav>
    </section>
  );
};

export default Navbar;
