import "./Home.style.css";

import React from "react";

import { QUERY_KEY, getAllPostsList } from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";

import LoadingPage from "../Loading/Loading";
import { HomePostList } from "./components";

const Home = (): React.ReactNode => {
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
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

    staleTime: 1000,
    gcTime: 10000,
  });

  if (!posts || !posts.pages) {
    return <LoadingPage />;
  }

  return (
    <section className="outlet__home">
      <article className="home__title-layout">
        <h1 className="home__title">Jae0's Blog</h1>
      </article>

      <HomePostList
        posts={posts.pages.flat()}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </section>
  );
};

export default Home;
