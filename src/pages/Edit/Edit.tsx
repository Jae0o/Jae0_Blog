import "./Edit.style.css";

import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ContextCategoryList } from "@/Context/ContextCategory";
import { ContextIsLoading } from "@/Context/ContextIsLoading";
import { ContextPosts } from "@/Context/ContextPosts";
import { ContextTagList } from "@/Context/ContextTagList";
import { setPost } from "@/api";
import { CheckAdmin } from "@/components";
import { ALERT_EDIT } from "@/constants";
import { PostData } from "@/types/original";

import LoadingPage from "../Loading/Loading";
import { Editor, EditorSub } from "./components";

const Edit = (): React.ReactNode => {
  const { categoryList, updateCategoryList } = useContext(ContextCategoryList);
  const { tagList, updateTagList } = useContext(ContextTagList);
  const { isLoading, updateIsLoading } = useContext(ContextIsLoading);
  const { updatePosts } = useContext(ContextPosts);

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

    await setPost(post)
      .then(() => {
        alert(ALERT_EDIT.UPLOAD_SUCCESS);
        updatePosts();
        navigate("/");
      })
      .catch(() => {
        alert(ALERT_EDIT.UPLOAD_FAIL);
      })
      .finally(() => updateIsLoading(false));
  };

  if (isLoading) return <LoadingPage />;

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
    </section>
  );
};

export default Edit;