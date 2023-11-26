import { createContext, useEffect, useState } from "react";
import {
  ContextPostListType,
  ContextProps,
  PostListStateType,
  UpdateContextFunc,
} from "../Types/Context/ContextTypes";
import { getPost } from "../API/FirebaseDB";
import { PostDataType } from "../Types/Components/Edit/EditorTypes";

export const ContextPostList = createContext<ContextPostListType>({
  postList: {},
  htmlList: [],
  workList: [],
  updatePostList: () => {},
});

export const ContextPostListProvider: React.FC<ContextProps> = ({ children }) => {
  const [postList, setPostList] = useState<PostListStateType>({});
  const [workList, setWorkList] = useState<PostDataType[]>([]);
  const [htmlList, setHtmlList] = useState<PostDataType[]>([]);

  const updatePostList: UpdateContextFunc = async () => {
    await getPost() //
      .then((res) => {
        setPostList(res);
        return res;
      })
      .then((res) => {
        setHtmlList(Object.values(res["HTML"]));
        setWorkList(Object.values(res["WORK"]) ?? []);
      }); //
  };

  console.log(workList);

  useEffect(() => {
    updatePostList();
  }, []);
  return (
    <ContextPostList.Provider value={{ postList, htmlList, workList, updatePostList }}>
      {children}
    </ContextPostList.Provider>
  );
};
