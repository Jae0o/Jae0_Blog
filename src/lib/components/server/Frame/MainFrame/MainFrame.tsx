import { PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

const MainFrame = ({ children }: PropsWithChildren) => {
  return (
    <main
      className={twMerge(
        "w-[calc(100% - 24rem)] h-full animate-main_frame_aside_in",
        "tablet:w-full tablet:h-[calc(100% - 6rem)] tablet:animate-main_frame_aside_out",
        "border-[1rem] border-blue-500 bg-orange-300",
      )}
    >
      {children}
    </main>
  );
};

export default MainFrame;
