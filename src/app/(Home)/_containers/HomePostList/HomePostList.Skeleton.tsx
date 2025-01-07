import { HomePostItemSkeleton } from "./components";

import { twMerge } from "tailwind-merge";

const HomePostListSkeleton = () => {
  return (
    <div
      className={twMerge(
        "w-full max-w-[90rem] p-[5rem] flex flex-wrap flex-row items-center justify-center gap-[6rem]",
        "mobile:px-0 mobile:py-[5rem]",
      )}
    >
      <HomePostItemSkeleton />
      <HomePostItemSkeleton />
      <HomePostItemSkeleton />
      <HomePostItemSkeleton />
    </div>
  );
};

export default HomePostListSkeleton;
