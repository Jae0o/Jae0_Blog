import { useState, createContext, useEffect } from "react";
import { getList } from "../API/FirebaseDB";
import { ContextProps, ContextTagListTyps, UpdateContextFunc } from "../Types/Context/ContextTypes";
import { ALERT_CONTEXT_TAG } from "../constants/AlertMessage";

export const ContextTagList = createContext<ContextTagListTyps>({
  tagList: [],
  updateTagList: () => {},
});

export const ContextTagListProvider: React.FC<ContextProps> = ({ children }) => {
  const [tagList, setTagList] = useState<string[]>([]);

  const updateTagList: UpdateContextFunc = async () => {
    await getList("tag") //
      .then((res) => setTagList(res))
      .catch(() => {
        alert(ALERT_CONTEXT_TAG);
        throw new Error(ALERT_CONTEXT_TAG);
      });
  };

  useEffect(() => {
    updateTagList();
  }, []);

  return (
    <ContextTagList.Provider value={{ tagList, updateTagList }}>{children}</ContextTagList.Provider>
  );
};
