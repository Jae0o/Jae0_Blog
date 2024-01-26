import React from "react";
import "./Root.Style.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./Styles/Quill.Styles.css";

const Root = (): React.ReactNode => {
  return (
    <main className="Root">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
