import "./font/pretendard.css";
import "./styles/Animation.css";
import "./styles/Quill.style.css";
import "./styles/Responsive400px.css";
import "./styles/Responsive700px.css";

import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./Root.style";

const AsideBar = React.lazy(() => import("./components/AsideBar/AsideBar"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));

const Root = (): React.ReactNode => {
  return (
    <S.Root>
      <Navbar />
      <AsideBar />
      <S.OutletLayout>
        <Outlet />
      </S.OutletLayout>
    </S.Root>
  );
};

export default Root;
