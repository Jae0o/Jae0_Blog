import { PropsWithChildren } from "react";

import { ScrollProgressBar } from "./components";

import { twMerge } from "tailwind-merge";

const MainFrame = ({ children }: PropsWithChildren) => {
  return (
    <main
      id="main_frame"
      className={twMerge(
        "w-[calc(100% - 24rem)] h-full will-change-[height, width] animate-main_frame_aside_in relative overflow-scroll scrollbar-hide",
        "tablet:w-full tablet:h-[calc(100% - 6rem)] tablet:animate-main_frame_aside_out",
      )}
    >
      <ScrollProgressBar />
      {children}
    </main>
  );
};

export default MainFrame;
