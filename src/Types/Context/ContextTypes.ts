import { ReactNode } from "react";
import { PostData } from "../API/FirebaseTypes";

export type UpdateContext = () => void;

export interface ContextProps {
  children: ReactNode;
}

export interface CategoryListContext {
  categoryList: string[];
  updateCategoryList: UpdateContext;
}

export interface TagListContext {
  tagList: string[];
  updateTagList: UpdateContext;
}

export type UpdateIsLoading = (state: boolean) => void;

export interface IsLoadingContext {
  isLoading: boolean;
  updateIsLoading: UpdateIsLoading;
}

export interface Posts {
  [key: string]: PostData[];
}
export interface PostsContext {
  posts: Posts;
  updatePosts: UpdateContext;
}
