"use client";

import { useRouter } from "next/navigation";

import { ROUTE_PATH } from "@/lib/constants";

import { MenuItemProps } from "./MenuItem.type";

const MenuItem = ({ Icon, title, category }: MenuItemProps) => {
  const route = useRouter();

  return (
    <li
      className="w-[21rem] h-[4rem] flex items-center rounded-[0.8rem] bg-white_500 cursor-pointer shadow-small hover:scale-[0.96] transition-transform"
      onClick={() => route.push(ROUTE_PATH.POST_LIST(category))}
    >
      <i className="w-[4rem] h-[4rem] flex items-center justify-center rounded-[0.8rem]">
        {Icon}
      </i>

      <h2 className="grow-[1] h-full pl-[1rem] flex items-center text-[1.6rem] font-semiBold">
        {title}
      </h2>
    </li>
  );
};

export default MenuItem;
