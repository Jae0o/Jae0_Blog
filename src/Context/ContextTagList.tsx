import { useState, createContext, useEffect } from "react";
import { getOptions } from "../API/FirebaseDB";
import {
  ContextProps,
  ContextTagListTyps,
  UpdateContextFunc,
} from "../Types/Context/ContextTypes";
import { ALERT_CONTEXT } from "../constants/AlertMessage";

export const ContextTagList = createContext<ContextTagListTyps>({
  tagList: [],
  updateTagList: () => {},
});

export const ContextTagListProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [tagList, setTagList] = useState<string[]>([]);

  const updateTagList: UpdateContextFunc = async () => {
    await getOptions("tag")
      .then(res => setTagList(res))
      .catch(() => {
        throw new Error(ALERT_CONTEXT.TAG);
      });
  };

  useEffect(() => {
    updateTagList();
  }, []);

  return (
    <ContextTagList.Provider value={{ tagList, updateTagList }}>
      {children}
    </ContextTagList.Provider>
  );
};
