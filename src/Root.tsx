import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./Root.Style.css";
import "./Styles/Quill.Styles.css";

const Root = (): React.ReactNode => {
  return (
    <main className="Root">
      <Navbar />
      <section className="outlet__layout">
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
