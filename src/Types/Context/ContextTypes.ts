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
