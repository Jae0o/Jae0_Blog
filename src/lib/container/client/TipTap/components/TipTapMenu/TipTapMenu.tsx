"use client";

import { Button } from "@/lib/components/client";

import { TipTapMenuProps } from "./TipTapMenu.type";
import { useHeadingExtension } from "./hooks";

import { twMerge } from "tailwind-merge";

const TipTapMenu = ({ editor }: TipTapMenuProps) => {
  const headings = useHeadingExtension({ editor });
  console.log(headings);

  return (
    <ul className="w-full p-[1rem] flex items-center gap-[1.2rem] flex-wrap bg-gray_500 rounded-[1.2rem]">
      <li className="flex items-center gap-[0.4rem]">
        {headings.map(({ key, icon, run, isActive }) => (
          <Button
            key={key}
            onClick={run}
            className={twMerge(
              "p-[0.6rem] bg-white shadow-lg",
              isActive && "bg-yellow_500",
            )}
          >
            {icon}
          </Button>
        ))}
      </li>
    </ul>
  );
};

export default TipTapMenu;
