import { useInView } from "framer-motion";

import { useEffect, useRef } from "react";

import { QUERY_KEY, getAllPostsList } from "@/api";
// import { PostListItem } from "@/pages/Post/components/PostList/components";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import * as S from "./HomePostList.style";
import { HomeListItem } from "./components";

const HomePostList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
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
    if (isInView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isInView]);

  return (
    <S.HomePostList>
      {data &&
        data.pages.flat().flatMap(post => (
          <HomeListItem
            key={post.id}
            post={post}
          />
        ))}

      <S.ObserveContainer>
        <S.ObserveTarget ref={ref} />
      </S.ObserveContainer>
    </S.HomePostList>
  );
};

export default HomePostList;
