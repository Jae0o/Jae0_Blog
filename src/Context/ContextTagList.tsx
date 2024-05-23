import { createContext, useCallback, useEffect, useState } from "react";
import { getOptions } from "@/API/FirebaseDB";
import { AlertModal } from "@/components";
import { CONTEXT_ERROR } from "@/constants/AlertMessage";
import { useModal } from "@/hooks";
import { ContextProps } from "./Context.Types";

interface TagListContext {
  tagList: string[];
  updateTagList: () => void;
}

export const ContextTagList = createContext<TagListContext>({
  tagList: [],
  updateTagList: () => {},
});

export const ContextTagListProvider = ({
  children,
}: ContextProps): React.ReactNode => {
  const [tagList, setTagList] = useState<string[]>([]);
  const { isShowModal, openModal, closeModal } = useModal();

  const updateTagList = useCallback(async () => {
    const newOptions = await getOptions("tag");

    if (!newOptions) {
      openModal();
      return;
    }

    setTagList(newOptions);
  }, [openModal]);

  useEffect(() => {
    updateTagList();
  }, [updateTagList]);

  const handleCloseAlertModal = useCallback(() => {
    closeModal();
    updateTagList();
  }, [closeModal, updateTagList]);

  return (
    <ContextTagList.Provider value={{ tagList, updateTagList }}>
      <AlertModal
        isShow={isShowModal}
        onClose={handleCloseAlertModal}
        message={CONTEXT_ERROR.CATEGORY_UPDATE_LIST}
      />
      {children}
    </ContextTagList.Provider>
  );
};
