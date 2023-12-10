import { useState, createContext, useEffect } from "react";
import { getOptions } from "../API/FirebaseDB";
import {
  ContextProps,
  CategoryListContext,
  UpdateContext,
} from "../Types/Context/ContextTypes";
import { ALERT_CONTEXT } from "../constants/AlertMessage";

export const ContextCategoryList = createContext<CategoryListContext>({
  categoryList: [],
  updateCategoryList: () => {},
});

export const ContextCategoryListProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  const updateCategoryList: UpdateContext = () => {
    getOptions("category")
      .then(res => setCategoryList(res))
      .catch(() => {
        throw new Error(ALERT_CONTEXT.CATEGORY);
      });
  };

  useEffect(() => {
    updateCategoryList();
  }, []);

  return (
    <ContextCategoryList.Provider value={{ categoryList, updateCategoryList }}>
      {children}
    </ContextCategoryList.Provider>
  );
};
