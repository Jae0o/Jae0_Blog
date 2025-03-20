import { Skeleton } from "@/lib/components/server";

const HomePostItemSkeleton = () => {
  return (
    <div className="w-[32ren] p-[2rem] flex flex-col gap-[1rem]">
      <Skeleton className="w-[28rem] h-[21rem]" />

      <Skeleton className="w-[28rem] h-[3.2rem] rounded-[0.6rem]" />

      <Skeleton className="w-[28rem] h-[6rem] rounded-[0.8rem]" />
    </div>
  );
};

export default HomePostItemSkeleton;
