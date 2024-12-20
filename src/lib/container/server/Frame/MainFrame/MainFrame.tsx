import { PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

const MainFrame = ({ children }: PropsWithChildren) => {
  return (
    <main
      className={twMerge(
        "w-[calc(100% - 24rem)] h-full will-change-[height, width] animate-main_frame_aside_in",
        "tablet:w-full tablet:h-[calc(100% - 6rem)] tablet:animate-main_frame_aside_out",
      )}
    >
      {children}
    </main>
  );
};

export default MainFrame;
