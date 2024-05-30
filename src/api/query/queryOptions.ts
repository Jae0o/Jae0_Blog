import { PostData } from "@/types/original";

import {
  ResponsePostsList,
  getAllPostsList,
  getOptions,
  getPostsList,
} from "../firebase";

export const QUERY_KEY = {
  GET_OPTIONS: (optionName: string) => ["options", "get", optionName],
  GET_POST_LIST_ALL: (category: string) => ["post", "list", "get", category],
  GET_POST_LIST: (category: string) => ["post", "list", "get", category],
};

export const QUERY_OPTIONS = {
  GET_OPTIONS: (optionName: string) => ({
    queryKey: QUERY_KEY.GET_OPTIONS(optionName),
    queryFn: () => getOptions(optionName),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 18,
  }),

  GET_POST_LIST_ALL: () => ({
    queryKey: QUERY_KEY.GET_POST_LIST_ALL("all"),
    queryFn: () => getAllPostsList(),
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    select: (fetchedData: ResponsePostsList) => {
      if (!fetchedData) {
        return [];
      }
      const postsList: PostData[] = [];

      for (const key in fetchedData) {
        const convertedList: PostData[] = Object.values(fetchedData[key]);
        postsList.push(...convertedList);
      }

      return postsList.sort((prevPost, nextPost) => {
        const prevPostDate = new Date(JSON.parse(prevPost.createAt)).getTime();
        const nextPostDate = new Date(JSON.parse(nextPost.createAt)).getTime();

        return nextPostDate - prevPostDate;
      });
    },
  }),

  GET_POST_LIST: (category: string) => ({
    queryKey: QUERY_KEY.GET_POST_LIST(category),
    queryFn: () => getPostsList(category),
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    select: (list: PostData[]) => {
      return list.sort((prevPost, nextPost) => {
        const prevPostDate = new Date(JSON.parse(prevPost.createAt)).getTime();
        const nextPostDate = new Date(JSON.parse(nextPost.createAt)).getTime();

        return nextPostDate - prevPostDate;
      });
    },
  }),
};
