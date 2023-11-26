import { useState, createContext, useEffect } from "react";
import { getList } from "../API/FirebaseDB";
import { ContextCategoryProps, ContextCategoryType, UpdateCatogoryFunc } from "../Types/Context/ContextCategoryTypes";

export const ContextCategory = createContext<ContextCategoryType>({
  categoryList: [],
  updateCategoryList: () => {},
});

export const ContextCategoryProvider: React.FC<ContextCategoryProps> = ({ children }) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  const updateCategoryList: UpdateCatogoryFunc = () => {
    getList("category") //
      .then((res) => setCategoryList(res))
      .catch((e) => {
        alert("Category List 업데이트중 실패");
        throw new Error("Category List 업데이트중 실패 ", e);
      });
  };

  useEffect(() => {
    updateCategoryList();
  }, []);

  return <ContextCategory.Provider value={{ categoryList, updateCategoryList }}>{children}</ContextCategory.Provider>;
};
