import { getAllPosts } from "@/lib/services";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "../../query";

const useGetAllPostList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: QUERY_KEY.POST.LIST_ALL(),
    queryFn: ({ pageParam }) => getAllPosts({ cursor: pageParam }),

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
};

export default useGetAllPostList;
