import React, { useContext } from "react";
import "./Edit.Style.css";
import EditPage from "./components/Editor/Editor";
import EditSubPage from "./components/EditorSub/EditorSub";
import { UploadPost } from "./components/Editor/Editor.Types";
import { setPost } from "../../API/FirebaseDB";
import { OnUpdateOption } from "./components/EditorSub/EditorSub.Types";
import { useNavigate, useParams } from "react-router-dom";
import UploadPage from "../../Components/UploadPage";
import { ALERT_EDIT } from "../../constants/AlertMessage";
import { ContextCategoryList } from "../../Context/ContextCategory";
import { ContextTagList } from "../../Context/ContextTagList";
import { ContextIsLoading } from "../../Context/ContextIsLoading";
import { ContextPosts } from "../../Context/ContextPosts";

const Edit: React.FC = () => {
  const { categoryList, updateCategoryList } = useContext(ContextCategoryList);
  const { tagList, updateTagList } = useContext(ContextTagList);
  const { isLoading, updateIsLoading } = useContext(ContextIsLoading);
  const { updatePosts } = useContext(ContextPosts);

  const navigate = useNavigate();
  const { category = "", id: pathId = "" } = useParams();

  const onUpdateOption: OnUpdateOption = name => {
    if (name === "category") {
      updateCategoryList();
      return;
    }
    if (name === "tag") {
      updateTagList();
      return;
    }
  };

  const onUploadPost: UploadPost = async post => {
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

  if (isLoading) return <UploadPage />;

  return (
    <section className="outlet__edit">
      <EditPage
        category={category}
        id={pathId}
        categoryList={categoryList}
        tagList={tagList}
        onSubmit={onUploadPost}
      />
      <EditSubPage onUpdate={onUpdateOption} />
    </section>
  );
};

export default Edit;
