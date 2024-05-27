import "./Root.style.css";
import "./font/pretendard.css";
import "./styles/Animation.css";
import "./styles/Quill.style.css";
import "./styles/Responsive400px.css";
import "./styles/Responsive700px.css";
import "./styles/Responsive1000px.css";

import React from "react";
import { Outlet } from "react-router-dom";

const AsideBar = React.lazy(() => import("./components/AsideBar/AsideBar"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));

const Root = (): React.ReactNode => {
  return (
    <main className="Root">
      <AsideBar />
      <Navbar />
      <section className="outlet__layout">
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
