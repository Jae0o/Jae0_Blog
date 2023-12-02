import { ReactNode } from "react";
import { PostDataType } from "../Components/Edit/EditorTypes";

export type UpdateContextFunc = () => void;

export interface ContextProps {
  children: ReactNode;
}

export interface ContextCategoryListType {
  categoryList: string[];
  updateCategoryList: UpdateContextFunc;
}

export interface ContextTagListTyps {
  tagList: string[];
  updateTagList: UpdateContextFunc;
}

export interface PostListStateType {
  [key: string]: { [key: string]: PostDataType };
}

export interface ContextPostListType {
  postList: PostListStateType;
  htmlList: PostDataType[];
  workList: PostDataType[];
  updatePostList: UpdateContextFunc;
}

export type UpdateIsLoadingFunc = (state: boolean) => void;

export interface ContextIsLoadingType {
  isLoading: boolean;
  updateIsLoading: UpdateIsLoadingFunc;
}
