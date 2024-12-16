"use client";

import { twMerge } from "tailwind-merge";

const AsideBar = () => {
  return (
    <aside
      className={twMerge(
        "w-[24rem] h-full absolute left-0 top-0 bottom-0 bg-red-600 opacity-0 animate-aside_in",
        "tablet:animate-aside_out",
      )}
    >
      AsideBar
    </aside>
  );
};

export default AsideBar;
