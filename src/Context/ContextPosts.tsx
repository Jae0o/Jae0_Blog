import React, { createContext, useCallback, useEffect, useState } from "react";

import { getAllPostsList } from "@/api";
import { AlertModal } from "@/components";
import { CONTEXT_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { PostData } from "@/types/original";

import { ContextProps } from "./Context.Types";

interface Posts {
  [key: string]: PostData[];
}

interface PostsContext {
  posts: Posts;
  updatePosts: () => void;
}

export const ContextPosts = createContext<PostsContext>({
  posts: {},
  updatePosts: () => {},
});

export const ContextPostsProvider = ({
  children,
}: ContextProps): React.ReactNode => {
  const [posts, setPosts] = useState<Posts>({});
  const { isShowModal, openModal, closeModal } = useModal();

  const updatePosts = useCallback(async () => {
    const posts = await getAllPostsList();

    if (!posts) {
      openModal();
      return;
    }

    const newPosts: Posts = {
      allPosts: posts,
      WORK: [],
      YAP: [],
      BLOG: [],
      Frontend: [],
      MASILGASIL: [],
    };

    posts.forEach(post => {
      const { category } = post;
      newPosts[category].push(post);
    });

    setPosts(newPosts);
  }, [openModal]);

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);

  const handleCloseAlertModal = useCallback(() => {
    closeModal();
    updatePosts();
  }, [closeModal, updatePosts]);

  return (
    <ContextPosts.Provider value={{ posts, updatePosts }}>
      <AlertModal
        isShow={isShowModal}
        onClose={handleCloseAlertModal}
        message={CONTEXT_ERROR.POSTS_UPDATE_LIST}
      />
      {children}
    </ContextPosts.Provider>
  );
};
