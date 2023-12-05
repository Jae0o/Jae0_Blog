import { PostDataType } from "../../API/FirebaseTypes";

export interface PostListItemProps {
  post: PostDataType;
}

export type FetchPostsListFunc = () => Promise<void>;
