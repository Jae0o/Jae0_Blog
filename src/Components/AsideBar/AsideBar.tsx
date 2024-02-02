import "./AsideBar.Styles.css";
import React from "react";
import AsideFooter from "./components/AsideFooter/AsideFooter";
import AsideMenubar from "./components/AsideMenubar/AsideMenubar";
import AsideProfile from "./components/Profile/AsideProfile";

const AsideBar = (): React.ReactNode => {
  return (
    <aside className="aside">
      <div className="aside_layout">
        <AsideProfile />
        <AsideMenubar />
      </div>
      <AsideFooter />
    </aside>
  );
};

export default AsideBar;
