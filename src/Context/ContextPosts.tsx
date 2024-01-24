import React, { createContext, useEffect, useState } from "react";
import { getAllPostsList } from "../API/FirebaseDB";
import { ContextProps, Posts, PostsContext } from "./Context.Types";

export const ContextPosts = createContext<PostsContext>({
  posts: {},
  updatePosts: () => {},
});

export const ContextPostsProvider = ({
  children,
}: ContextProps): React.ReactNode => {
  const [posts, setPosts] = useState<Posts>({});
  const updatePosts = async () => {
    const posts = await getAllPostsList();

    if (!posts) {
      // 경고 모달
      return;
    }

    const WORK_posts = posts.filter(item => item.category === "WORK");
    const DIARY_posts = posts.filter(item => item.category === "DIARY");
    setPosts({
      allPosts: posts,
      WORK: WORK_posts,
      DIARY: DIARY_posts,
    });
  };

  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <ContextPosts.Provider value={{ posts, updatePosts }}>
      {children}
    </ContextPosts.Provider>
  );
};
