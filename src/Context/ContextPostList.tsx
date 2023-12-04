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
        for (const category in res) {
          newTotalPosts[category] = {
            thumbnail: POST_LIST_THUMBNAIL[category] ?? "",
            postList: Object.values(res[category]) ?? [],
          };
        }
        setTotalPosts(newTotalPosts);
        return newTotalPosts;
      })
      .then(res => {
        if (res["WORK"]) {
          setWorkPosts(res["WORK"]);
        }
      })
      .catch(() => {
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
