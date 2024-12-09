import { SkeletonProps } from "./Skeleton.type";

import { twMerge } from "tailwind-merge";

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={twMerge(
        "w-[4rem] h-[4rem] relative overflow-hidden bg-[#e6e6e6] rounded-8",
        "before:contents-[``] before:absolute before:top-0 before:left-0 before:w-[300%] before:h-full before:bg-skeleton before:animate-skeleton",
        className,
      )}
    />
  );
};

export default Skeleton;
