import { ReactNode } from "react";

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

export type UpdateIsLoadingFunc = (state: boolean) => void;

export interface ContextIsLoadingType {
  isLoading: boolean;
  updateIsLoading: UpdateIsLoadingFunc;
}
