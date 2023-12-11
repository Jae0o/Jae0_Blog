import React, { createContext, useEffect, useState } from "react";
import { getAllPostsList } from "../API/FirebaseDB";
import {
  ContextProps,
  Posts,
  PostsContext,
} from "../Types/Context/ContextTypes";

export const ContextPosts = createContext<PostsContext>({
  posts: {},
  updatePosts: () => {},
});

export const ContextPostsProvider: React.FC<ContextProps> = ({ children }) => {
  const [posts, setPosts] = useState<Posts>({});
  const updatePosts = async () => {
    const posts = await getAllPostsList();

    const WORK_posts = posts.filter(item => item.category === "WORK");
    const DIARY_posts = posts.filter(item => item.category === "DIARY");
    setPosts({
      allPosts: posts,
      WORK: WORK_posts,
      DIARY: DIARY_posts,
    });
  };

  console.log(posts);
  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <ContextPosts.Provider value={{ posts, updatePosts }}>
      {children}
    </ContextPosts.Provider>
  );
};
