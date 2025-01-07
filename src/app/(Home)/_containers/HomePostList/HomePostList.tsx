"use client";

import { useEffect, useRef } from "react";

import { useGetAllPostList } from "@/lib/api";

import {
  HomeObserveBox,
  HomePostItem,
  HomePostItemSkeleton,
} from "./components";

import { useInView } from "motion/react";
import { twMerge } from "tailwind-merge";

const HomePostList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { data, hasNextPage, isFetching, fetchNextPage } = useGetAllPostList();

  useEffect(() => {
    if (isInView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching, isInView]);

  return (
    <ul
      className={twMerge(
        "w-full max-w-[90rem] p-[5rem] flex flex-wrap flex-row items-center justify-center gap-[6rem]",
        "mobile:px-0 mobile:py-[5rem]",
      )}
    >
      {data &&
        data.pages.flat().flatMap(post => (
          <HomePostItem
            key={post.id}
            post={post}
          />
        ))}

      {isFetching && (
        <>
          <HomePostItemSkeleton />
          <HomePostItemSkeleton />
          <HomePostItemSkeleton />
          <HomePostItemSkeleton />
        </>
      )}

      <HomeObserveBox ref={ref} />
    </ul>
  );
};

export default HomePostList;
