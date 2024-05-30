import "./Edit.style.css";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MUTATION_OPTIONS, QUERY_OPTIONS } from "@/api";
import { AlertModal, CheckAdmin } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { PostData } from "@/types/original";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import LoadingPage from "../Loading/Loading";
import { Editor, EditorSub } from "./components";

const Edit = () => {
  const {
    isShowModal: isShowTagModal,
    openModal: openTagModal,
    closeModal: closeTagModal,
  } = useModal();
  const {
    isShowModal: isShowCategoryModal,
    openModal: openCategoryModal,
    closeModal: closeCategoryModal,
  } = useModal();

  const {
    data: tagList,
    refetch: tagListRefetch,
    isLoading: isTagListLoading,
    isError: isTagListError,
  } = useQuery(QUERY_OPTIONS.GET_OPTIONS("tag"));
  const {
    data: categoryList,
    refetch: categoryListRefetch,
    isLoading: isCategoryListLoading,
    isError: isCategoryListError,
  } = useQuery(QUERY_OPTIONS.GET_OPTIONS("category"));

  useEffect(() => {
    if (isTagListError) {
      openTagModal();
      tagListRefetch();
    }

    if (isCategoryListError) {
      openCategoryModal();
      categoryListRefetch();
    }
  }, [
    categoryListRefetch,
    isCategoryListError,
    isTagListError,
    openCategoryModal,
    openTagModal,
    tagListRefetch,
  ]);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation(MUTATION_OPTIONS.SET_POST());
  const navigate = useNavigate();
  const { category = "", id: pathId = "" } = useParams();

  const onUploadPost = async (post: PostData) => {
    mutate(post, {
      onSuccess: () => {
        navigate("/");
        queryClient.refetchQueries();
      },
      onError: () => alert(QUERY_ERROR.SET_POST),
    });
  };

  if (isPending || isTagListError || isTagListLoading || !tagList) {
    return <LoadingPage />;
  }

  if (isCategoryListError || isCategoryListLoading || !categoryList) {
    return <LoadingPage />;
  }

  return (
    <section className="outlet__edit">
      <CheckAdmin>
        <Editor
          category={category}
          id={pathId}
          categoryList={categoryList}
          tagList={tagList}
          onSubmit={onUploadPost}
        />

        <EditorSub />
      </CheckAdmin>

      <AlertModal
        isShow={isShowTagModal}
        onClose={closeTagModal}
        message={QUERY_ERROR.TAG_UPDATE_LIST}
      />
      <AlertModal
        isShow={isShowCategoryModal}
        onClose={closeCategoryModal}
        message={QUERY_ERROR.CATEGORY_UPDATE_LIST}
      />
    </section>
  );
};

export default Edit;
