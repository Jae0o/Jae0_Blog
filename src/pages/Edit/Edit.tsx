import "./Edit.Style.css";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextCategoryList } from "@/Context/ContextCategory";
import { ContextIsLoading } from "@/Context/ContextIsLoading";
import { ContextPosts } from "@/Context/ContextPosts";
import { ContextTagList } from "@/Context/ContextTagList";
import { setPost } from "@/api";
import { CheckAdmin, LoadingSpinner } from "@/components";
import { ALERT_EDIT } from "@/constants";
import { PostData } from "@/types/original";
import EditPage from "./components/Editor/Editor";
import EditSubPage from "./components/EditorSub/EditorSub";

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

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="outlet__edit">
      <CheckAdmin>
        <EditPage
          category={category}
          id={pathId}
          categoryList={categoryList}
          tagList={tagList}
          onSubmit={onUploadPost}
        />

        <EditSubPage onUpdate={onUpdateOption} />
      </CheckAdmin>
    </section>
  );
};

export default Edit;
