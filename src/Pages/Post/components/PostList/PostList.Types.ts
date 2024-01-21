import { PostData } from "../../../../API/Firebase.Types";

export interface PostListItemProps {
  post: PostData;
}

export type FetchPostsList = () => Promise<void>;
