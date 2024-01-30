import { useState, createContext, useEffect, useCallback } from "react";
import { getOptions } from "../API/FirebaseDB";
import { ContextProps } from "./Context.Types";
import AlertModal from "../Components/Modal/Components/AlertModal/AlertModal";
import useModal from "../Components/Modal/Hooks/useModal";
import { CONTEXT_ERROR } from "../constants/AlertMessage";

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
  const { isShowModal, openModal, closeModal } = useModal();

  const updateCategoryList = useCallback(async () => {
    const newOptions = await getOptions("category");

    if (!newOptions) {
      openModal();
      return;
    }
    setCategoryList(newOptions);
  }, [openModal]);

  useEffect(() => {
    updateCategoryList();
  }, [updateCategoryList]);

  const handleCloseAlertModal = () => {
    closeModal();
    updateCategoryList();
  };

  return (
    <ContextCategoryList.Provider value={{ categoryList, updateCategoryList }}>
      <AlertModal
        isShow={isShowModal}
        onClose={handleCloseAlertModal}
        message={CONTEXT_ERROR.CATEGORY_UPDATE_LIST}
      />
      {children}
    </ContextCategoryList.Provider>
  );
};
