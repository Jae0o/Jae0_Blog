import { createContext, useEffect, useState } from "react";
import {
  ContextPostListType,
  ContextProps,
  PostsStateType,
  TotalPostsStateType,
  UpdateContextFunc,
} from "../Types/Context/ContextTypes";
import { getPost } from "../API/FirebaseDB";
import { ALERT_CONTEXT } from "../constants/AlertMessage";
import { POST_LIST_THUMBNAIL } from "../constants/URL";

export const ContextPostList = createContext<ContextPostListType>({
  totalPosts: {},
  workPosts: {
    thumbnail: "",
    postList: [],
  },
  updatePostList: () => {},
});

export const ContextPostListProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [totalPosts, setTotalPosts] = useState<TotalPostsStateType>({});
  const [workPosts, setWorkPosts] = useState<PostsStateType>({
    thumbnail: "",
    postList: [],
  });

  const updatePostList: UpdateContextFunc = async () => {
    await getPost()
      .then(res => {
        const newTotalPosts: TotalPostsStateType = {};
        for (const key in res) {
          newTotalPosts[key] = {
            thumbnail: POST_LIST_THUMBNAIL[key],
            postList: Object.values(res[key]),
          };
        }
        setTotalPosts(newTotalPosts);
        return newTotalPosts;
      })
      .then(res => {
        setWorkPosts(res["WORK"]);
      })
      .catch(() => {
        alert(ALERT_CONTEXT.POST);
        throw new Error(ALERT_CONTEXT.POST);
      });
  };

  useEffect(() => {
    updatePostList();
  }, []);

  return (
    <ContextPostList.Provider value={{ totalPosts, workPosts, updatePostList }}>
      {children}
    </ContextPostList.Provider>
  );
};
