import "./NavTitle.style.css";

import { useNavigate } from "react-router-dom";

const NavTitle = () => {
  const navigate = useNavigate();

  return (
    <div
      className="nav__title-layout"
      onClick={() => navigate("/")}>
      <h1 className="nav__title-text">{"Jae0"}</h1>
      <div className="nav__title-decoration"></div>
    </div>
  );
};

export default NavTitle;
