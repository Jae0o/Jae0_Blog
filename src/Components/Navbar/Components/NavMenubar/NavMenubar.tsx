import "./NavMenubar.Styles.css";

interface NavMenubarProps {
  isToggle: boolean;
}
const NavMenubar = ({ isToggle }: NavMenubarProps) => {
  return (
    <article
      className={`nav__menubar ${
        isToggle ? "Active__NavMenu" : "unActive__NavMenu"
      }`}></article>
  );
};

export default NavMenubar;
