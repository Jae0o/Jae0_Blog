import { useTheme } from "styled-components";

import React from "react";

import { QUERY_KEY, getAllPostsList } from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";

import LoadingPage from "../Loading/Loading";
import * as S from "./Home.style";
import { HomePostList } from "./components";

const Home = (): React.ReactNode => {
  const theme = useTheme();
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
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

  if (!data || !data.pages) {
    return <LoadingPage />;
  }

  return (
    <S.HomeLayout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <S.HomeTitleContainer>
        <S.HomeTitle
          whileHover={{
            color: theme.colors.yellow,
          }}
        >
          Jae0's Blog
        </S.HomeTitle>
      </S.HomeTitleContainer>

      <HomePostList
        posts={data.pages.flat()}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </S.HomeLayout>
  );
};

export default Home;
