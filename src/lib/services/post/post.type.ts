import { PostData } from "@/lib/types";

export interface GetAllPostsResponse {
  posts: PostData[];
}

export type GetAllPosts = ({
  cursor,
}: {
  cursor?: string;
}) => Promise<PostData[]>;
