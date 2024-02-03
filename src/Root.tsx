import "./Font/pretendard-subset.css";
import "./Root.Style.css";
// import "./Styles/Quill.Styles.css";
// import "./Styles/Responsive400px.css";
// import "./Styles/Responsive700px.css";
// import "./Styles/Responsive1000px.css";
import React from "react";
import { Outlet } from "react-router-dom";
import AsideBar from "./Components/AsideBar/AsideBar";
import Navbar from "./Components/Navbar/Navbar";

const Root = (): React.ReactNode => {
  return (
    <main className="Root">
      <AsideBar />
      {/* <Navbar /> */}
      <section className="outlet__layout">
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
