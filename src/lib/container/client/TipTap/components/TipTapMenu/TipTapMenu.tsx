"use client";

import { Button } from "@/lib/components/client";

import { TipTapMenuProps } from "./TipTapMenu.type";
import { useHeadingExtension, useMarkExtension } from "./hooks";

import { twMerge } from "tailwind-merge";

const TipTapMenu = ({ editor }: TipTapMenuProps) => {
  const headings = useHeadingExtension({ editor });
  const { marks, MarksComponents } = useMarkExtension({ editor });

  return (
    <ul className="w-full p-[1rem] flex items-center gap-[1.2rem] flex-wrap bg-gray_500 rounded-[1.2rem]">
      <li className="flex items-center gap-[0.4rem]">
        {headings.map(({ key, Icon, run, isActive }) => (
          <Button
            key={key}
            onClick={run}
            className={twMerge(
              "p-[0.4rem] bg-white shadow-lg",
              isActive && "bg-yellow_500",
            )}
          >
            <Icon size="2.4rem" />
          </Button>
        ))}
      </li>

      <li className="flex items-center gap-[0.4rem]">
        {marks.map(({ key, Icon, run, isActive }) => (
          <Button
            key={key}
            onClick={run}
            className={twMerge(
              "p-[0.4rem] bg-white shadow-lg",
              isActive && "bg-yellow_500",
            )}
          >
            <Icon size="2.4rem" />
          </Button>
        ))}
      </li>

      {MarksComponents}
    </ul>
  );
};

export default TipTapMenu;
