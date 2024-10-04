import * as S from "./HomePostList.style";

import { useEffect, useRef } from "react";

import { QUERY_KEY, getAllPostsList } from "@/api";
import { Skeleton } from "@/components";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { HomeListItem } from "./components";

import { useInView } from "framer-motion";

const HomePostList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { data, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: QUERY_KEY.GET_POST_LIST_ALL(),
      queryFn: ({ pageParam }) => getAllPostsList({ cursorId: pageParam }),

      initialPageParam: "",
      getNextPageParam: (prevList, _, prevParam) => {
        if (!prevList) {
          return null;
        }

        const prevId = prevList.at(-1)?.createAt;
        if (prevParam === prevId) {
          return null;
        }

        return prevId;
      },

      staleTime: 1000 * 60 * 55,
      gcTime: 1000 * 60 * 60,
    });

  useEffect(() => {
    if (isInView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching, isInView]);

  return (
    <S.HomePostList>
      {data &&
        data.pages.flat().flatMap(post => (
          <HomeListItem
            key={post.id}
            post={post}
          />
        ))}

      {isFetching && (
        <>
          <Skeleton.SkeletonHomeListItem />
          <Skeleton.SkeletonHomeListItem />
          <Skeleton.SkeletonHomeListItem />
          <Skeleton.SkeletonHomeListItem />
        </>
      )}

      <S.ObserveContainer>
        <S.ObserveTarget ref={ref} />
      </S.ObserveContainer>
    </S.HomePostList>
  );
};

export default HomePostList;
