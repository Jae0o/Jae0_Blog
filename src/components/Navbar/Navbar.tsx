import "./Navbar.Styles.css";
import { useState } from "react";
import { NavMenubar, NavTitle, NavToggleButton } from "./components";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(isToggle => !isToggle);
  };

  return (
    <section className="nav__background">
      <nav className="nav">
        <NavTitle />
        <NavToggleButton
          isToggle={isToggle}
          onToggle={handleToggle}
        />

        <NavMenubar
          isToggle={isToggle}
          onToggle={handleToggle}
        />
      </nav>
    </section>
  );
};

export default Navbar;
