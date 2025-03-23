"use client";

import { TipTapMenuProps } from "./TipTapMenu.type";
import { useHeadingExtension } from "./hooks";

const TipTapMenu = ({ editor }: TipTapMenuProps) => {
  const headings = useHeadingExtension({ editor });
  console.log(headings);

  return (
    <div className="w-full p-[1rem] border-2 border-red-500">TipTapMenu</div>
  );
};

export default TipTapMenu;
