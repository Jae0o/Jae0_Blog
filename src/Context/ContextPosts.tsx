import React, { createContext, useCallback, useEffect, useState } from "react";
import { getAllPostsList } from "../API/FirebaseDB";
import { ContextProps } from "./Context.Types";
import { PostData } from "../API/Firebase.Types";
import useModal from "../Components/Modal/Hooks/useModal";
import AlertModal from "../Components/Modal/Components/AlertModal/AlertModal";
import { CONTEXT_ERROR } from "../constants/AlertMessage";

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

    const WORK_posts = posts.filter(item => item.category === "WORK");
    const DIARY_posts = posts.filter(item => item.category === "DIARY");
    setPosts({
      allPosts: posts,
      WORK: WORK_posts,
      DIARY: DIARY_posts,
    });
  }, [openModal]);

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);

  const handleCloseAlertModal = () => {
    closeModal();
    updatePosts();
  };

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
