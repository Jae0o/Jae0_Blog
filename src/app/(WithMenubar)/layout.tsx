import { PropsWithChildren } from "react";

import { AsideBar, MainFrame, NavBar } from "@/lib/container/server";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AsideBar />
      <NavBar />
      <MainFrame>{children}</MainFrame>
    </>
  );
};

export default layout;
