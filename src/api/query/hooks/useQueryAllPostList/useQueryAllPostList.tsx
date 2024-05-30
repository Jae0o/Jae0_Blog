import { useEffect, useMemo } from "react";

import { AlertModal } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import { QUERY_OPTIONS } from "../../queryOptions";

const useQueryAllPostList = () => {
  const { isShowModal, openModal, closeModal } = useModal();

  const { data, isError, refetch } = useQuery(
    QUERY_OPTIONS.GET_POST_LIST_ALL(),
  );

  useEffect(() => {
    if (isError) {
      openModal();
      refetch();
    }
  }, [isError, openModal, refetch]);

  const AllPostListAlertModal = useMemo(
    () => (
      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        message={QUERY_ERROR.POSTS_UPDATE_LIST}
      />
    ),
    [closeModal, isShowModal],
  );

  return {
    posts: data ?? [],
    updatePosts: refetch,
    AllPostListAlertModal,
  };
};

export default useQueryAllPostList;
