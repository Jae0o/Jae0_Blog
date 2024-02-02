import "./Navbar.Styles.css";
import { useState } from "react";
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
        <NavToggleButton
          isToggle={isToggle}
          onToggle={handleToggle}
        />
      </nav>
    </section>
  );
};

export default Navbar;
