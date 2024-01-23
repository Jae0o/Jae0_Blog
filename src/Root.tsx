import React from "react";
import "./Root.Style.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const Root: React.FC = () => {
  return (
    <main className="Root">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
