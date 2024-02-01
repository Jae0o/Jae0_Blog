import "./Root.Style.css";
import "./Styles/Quill.Styles.css";
import "./Styles/Responsive400px.css";
import "./Styles/Responsive700px.css";
import "./Styles/Responsive1000px.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

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
