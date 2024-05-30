import { useEffect, useMemo } from "react";

import { AlertModal } from "@/components";
import { GET_POST_LIST_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import { QUERY_OPTIONS } from "../../queryOptions";

interface useQueryPostListProps {
  category: string;
}

const useQueryPostList = ({ category }: useQueryPostListProps) => {
  const { isShowModal, openModal, closeModal } = useModal();
  const { data, isError, refetch } = useQuery(
    QUERY_OPTIONS.GET_POST_LIST(category),
  );

  useEffect(() => {
    if (isError) {
      openModal();
      refetch();
    }
  }, [isError, openModal, refetch]);

  const PostListAlertModal = useMemo(
    () => (
      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        message={GET_POST_LIST_ERROR}
      />
    ),
    [closeModal, isShowModal],
  );

  return {
    postList: data,
    PostListAlertModal,
  };
};

export default useQueryPostList;
