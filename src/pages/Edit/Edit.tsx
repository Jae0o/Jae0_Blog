import "./Edit.style.css";

import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ContextIsLoading } from "@/Context/ContextIsLoading";
import { ContextPosts } from "@/Context/ContextPosts";
import { MUTATION_OPTIONS, useGetCategoryList, useGetTagList } from "@/api";
import { CheckAdmin } from "@/components";
import { ALERT_EDIT } from "@/constants";
import { PostData } from "@/types/original";
import { useMutation } from "@tanstack/react-query";

import LoadingPage from "../Loading/Loading";
import { Editor, EditorSub } from "./components";

const Edit = (): React.ReactNode => {
  const { categoryList, updateCategoryList, CategoryListAlertModal } =
    useGetCategoryList();
  const { tagList, updateTagList, TagListAlertModal } = useGetTagList();

  const { isLoading, updateIsLoading } = useContext(ContextIsLoading);
  const { updatePosts } = useContext(ContextPosts);

  const { mutate, isPending } = useMutation(MUTATION_OPTIONS.SET_POST());

  const navigate = useNavigate();
  const { category = "", id: pathId = "" } = useParams();

  const onUpdateOption = (name: string) => {
    if (name === "category") {
      updateCategoryList();
      return;
    }
    if (name === "tag") {
      updateTagList();
      return;
    }
  };

  const onUploadPost = async (post: PostData) => {
    updateIsLoading(true);

    mutate(post, {
      onSuccess: () => {
        navigate("/");
        /*
        TODO 

        추후 해당 부분 개선하기
         */
        updatePosts();
      },
      onError: () => alert(ALERT_EDIT.UPLOAD_FAIL),
    });
  };

  if (isPending) return <LoadingPage />;

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

        <EditorSub onUpdate={onUpdateOption} />
      </CheckAdmin>

      {TagListAlertModal}
      {CategoryListAlertModal}
    </section>
  );
};

export default Edit;
