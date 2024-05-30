import { useEffect, useMemo } from "react";

import { AlertModal } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import { QUERY_OPTIONS } from "../../queryOptions";

const useQueryTagList = () => {
  const { isShowModal, openModal, closeModal } = useModal();
  const { data, refetch, isError } = useQuery(QUERY_OPTIONS.GET_OPTIONS("tag"));

  useEffect(() => {
    if (!isError) {
      return;
    }

    openModal();
    refetch();
  }, [isError, openModal, refetch]);

  const TagListAlertModal = useMemo(
    () => (
      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        message={QUERY_ERROR.CATEGORY_UPDATE_LIST}
      />
    ),
    [closeModal, isShowModal],
  );

  return { tagList: data ?? [], updateTagList: refetch, TagListAlertModal };
};

export default useQueryTagList;
