import { useState, createContext, useEffect } from "react";
import { getOptions } from "../API/FirebaseDB";
import { ContextProps } from "./Context.Types";

interface CategoryListContext {
  categoryList: string[];
  updateCategoryList: () => void;
}

export const ContextCategoryList = createContext<CategoryListContext>({
  categoryList: [],
  updateCategoryList: () => {},
});

export const ContextCategoryListProvider = ({
  children,
}: ContextProps): React.ReactNode => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  const updateCategoryList = async () => {
    const newOptions = await getOptions("category");

    if (!newOptions) {
      // 옵션 실패에 대한 알림
      return;
    }
    setCategoryList(newOptions);
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
