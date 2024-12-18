"use client";

import { AsideFooter } from "./components";

import { twMerge } from "tailwind-merge";

const AsideBar = () => {
  return (
    <aside
      className={twMerge(
        "w-[24rem] h-full absolute left-0 top-0 bottom-0 flex items-end opacity-0 animate-aside_in translate-x-[-24rem]",
        "tablet:animate-aside_out translate-x-[0rem]",
        "border-r-2 border-r-red-600",
      )}
    >
      <div className="w-[22rem] h-[calc(100%-8rem)] flex flex-col absolute left-[4rem] top-0  border-2 border-blue-500">
        Aside
      </div>

      <AsideFooter />
    </aside>
  );
};

export default AsideBar;
