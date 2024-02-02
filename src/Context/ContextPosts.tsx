import React, { createContext, useCallback, useEffect, useState } from "react";
import { PostData } from "@/API/Firebase.Types";
import { getAllPostsList } from "@/API/FirebaseDB";
import AlertModal from "@/Components/Modal/Components/AlertModal/AlertModal";
import useModal from "@/Components/Modal/Hooks/useModal";
import { CONTEXT_ERROR } from "@/constants/AlertMessage";
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
      DIARY: [],
      BLOG: [],
      Frontend: [],
    };

    posts.forEach(post => {
      const { category } = post;

      if (category === "WORK") {
        newPosts.WORK.push(post);
      }

      if (category === "DIARY") {
        newPosts.DIARY.push(post);
      }

      if (category === "BLOG") {
        newPosts.BLOG.push(post);
      }

      if (category === "Frontend") {
        newPosts.Frontend.push(post);
      }
    });

    setPosts(newPosts);
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
