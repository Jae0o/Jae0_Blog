"use client";

import { MenuList } from "@/lib/components/server";

import { AsideFooter, AsideProfile } from "./components";

import { twMerge } from "tailwind-merge";

const AsideBar = () => {
  return (
    <aside
      className={twMerge(
        "w-[24rem] h-full absolute left-0 top-0 bottom-0 flex items-end bg-yellow_500 opacity-0 animate-aside_in translate-x-[-24rem]",
        "tablet:animate-aside_out translate-x-[0rem]",
      )}
    >
      <div className="w-[22rem] h-[calc(100%-8rem)] flex flex-col absolute left-[4rem] top-0">
        <AsideProfile />
        <MenuList />
      </div>

      <AsideFooter />
    </aside>
  );
};

export default AsideBar;
