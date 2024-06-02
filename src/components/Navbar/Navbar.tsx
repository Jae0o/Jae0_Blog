import "./Navbar.style.css";

import { useToggle } from "@/hooks";

import { NavMenubar, NavTitle, NavToggleButton } from "./components";

const Navbar = () => {
  const { isToggle, handleOffToggle, handleToggle } = useToggle();

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
          onClose={handleOffToggle}
        />
      </nav>
    </section>
  );
};

export default Navbar;
