import { createContext, useEffect, useState } from "react";
import {
  ContextPostListType,
  ContextProps,
  PostListStateType,
  UpdateContextFunc,
} from "../Types/Context/ContextTypes";
import { getPost } from "../API/FirebaseDB";

export const ContextPostList = createContext<ContextPostListType>({
  postList: {},
  updatePostList: () => {},
});

export const ContextPostListProvider: React.FC<ContextProps> = ({ children }) => {
  const [postList, setPostList] = useState<PostListStateType>({});

  const updatePostList: UpdateContextFunc = async () => {
    await getPost() //
      .then((res) => {
        setPostList(res);
        return res;
      }); //
  };

  useEffect(() => {
    updatePostList();
  }, []);
  return (
    <ContextPostList.Provider value={{ postList, updatePostList }}>
      {children}
    </ContextPostList.Provider>
  );
};
