import { PostDataType } from "../Components/Edit/EditorTypes";

export type SetOptionsFunc = (
  optionsType: string,
  value: string,
) => Promise<void>;

export type GetOptionsFunc = (optionsType: string) => Promise<string[]>;

export type SetPost = (post: PostDataType) => Promise<void>;

export type GetPostsList = (category?: string) => Promise<{
  [key: string]: { [key: string]: PostDataType };
}>;

export type GetPostFunc = (
  category: string,
  postId: string,
) => Promise<{
  [key: string]: { [key: string]: PostDataType };
}>;
