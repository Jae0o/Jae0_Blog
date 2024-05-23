import "./Root.style.css";
import "./font/pretendard-subset.css";
import "./styles/Animation.css";
import "./styles/Quill.styles.css";
import "./styles/Responsive400px.css";
import "./styles/Responsive700px.css";
import "./styles/Responsive1000px.css";

import React from "react";
import { Outlet } from "react-router-dom";

import { AsideBar, Navbar } from "./components";

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
