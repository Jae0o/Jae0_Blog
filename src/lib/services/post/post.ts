import { fetchApi } from "@/lib/api";

import { GetAllPosts, GetAllPostsResponse } from "./post.type";

export const getAllPosts: GetAllPosts = async ({
  cursor,
}: {
  cursor?: string;
}) => {
  const res = await fetchApi(`/post/all?cursor=${cursor ?? ""}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const result: GetAllPostsResponse = await res.json();

  return result.posts;
};
