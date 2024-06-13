import { PostData } from "@/types/original";

import { getPost, getPostsList } from "../firebase";

export const QUERY_KEY = {
  GET_POST_LIST_ALL: () => ["post", "list", "get", "all"],
  GET_POST_LIST: (category: string) => ["post", "list", "get", category],
  GET_POST: ({ category, id }: { category: string; id: string }) => [
    "post",
    "get",
    category,
    id,
  ],
};

export const QUERY_OPTIONS = {
  GET_POST_LIST: (category: string) => ({
    queryKey: QUERY_KEY.GET_POST_LIST(category),
    queryFn: () => getPostsList({ category }),
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

  GET_POST: ({ postId }: { postId: string }) => ({
    queryKey: ["post", "get", postId],
    queryFn: () => getPost({ postId }),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  }),
};
