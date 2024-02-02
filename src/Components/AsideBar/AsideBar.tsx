import "./AsideBar.Styles.css";
import React from "react";
import NavMenubar from "./components/Menubar/NavMenubar";
import NavbarFooter from "./components/NavbarFooter/NavbarFooter";
import NavProfile from "./components/Profile/NavProfile";

const AsideBar = (): React.ReactNode => {
  return (
    <aside className="aside">
      <div className="aside_layout">
        <NavProfile />
        <NavMenubar />
      </div>
      <NavbarFooter />
    </aside>
  );
};

export default AsideBar;
