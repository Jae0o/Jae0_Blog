import { ReactNode } from "react";

export interface ContextCategoryType {
  categoryList: string[];
  updateCategoryList: UpdateCatogoryFunc;
}

export interface ContextCategoryProps {
  children: ReactNode;
}

export type UpdateCatogoryFunc = () => void;
