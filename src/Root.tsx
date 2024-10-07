import "./font/pretendard.css";
import "./styles/Animation.css";
import "./styles/Quill.style.css";

import * as S from "./Root.style";

import React from "react";
import { Outlet } from "react-router-dom";

import { AsideBar, Navbar } from "./components";

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
