import { PostData } from "../../API/FirebaseTypes";

export interface PostListItemProps {
  post: PostData;
}

export type FetchPostsList = () => Promise<void>;
