import "./AsideBar.style.css";

import { AsideFooter, AsideMenubar, AsideProfile } from "./components";

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
