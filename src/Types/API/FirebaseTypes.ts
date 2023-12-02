import { PostDataType } from "../Components/Edit/EditorTypes";

export type SetAddListsFunc = (
  listType: string,
  value: string,
) => Promise<void>;

export type GetListFunc = (listType: string) => Promise<string[]>;

export type SetPost = (post: PostDataType) => Promise<void>;

export type GetPostFunc = () => Promise<{
  [key: string]: { [key: string]: PostDataType };
}>;
