"use client";

import { useEffect, useRef } from "react";

import { useGetAllPostList } from "@/lib/api";

import { HomeObserveBox, HomePostItem } from "./components";

import { useInView } from "motion/react";

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
    <ul className="w-full max-w-[90rem] p-[5rem] flex flex-wrap flex-row items-center justify-center gap-[6rem]">
      {data &&
        data.pages.flat().flatMap(post => (
          <HomePostItem
            key={post.id}
            post={post}
          />
        ))}

      {isFetching && <div>isFetching</div>}

      <HomeObserveBox ref={ref} />
    </ul>
  );
};

export default HomePostList;
