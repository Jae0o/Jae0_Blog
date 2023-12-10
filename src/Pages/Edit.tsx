import React, { useContext } from "react";
import "../CSS/EditPage/Edit.css";
import EditPage from "../Components/EditPage/Editor/Editor";
import EditSubPage from "../Components/EditPage/Sub/EditSubPage";
import { UploadPost } from "../Types/Components/Edit/EditorTypes";
// import { PostData } from "../Types/API/FirebaseTypes";
import { setPost } from "../API/FirebaseDB";
import { OnUpdateOption } from "../Types/Components/Edit/EditSubTypes";
import { useNavigate, useParams } from "react-router-dom";
// import { NEW_POST } from "../constants/variables";
import UploadPage from "../Components/UploadPage";
import { ALERT_EDIT } from "../constants/AlertMessage";
import { ContextCategoryList } from "../Context/ContextCategory";
import { ContextTagList } from "../Context/ContextTagList";

import { ContextIsLoading } from "../Context/ContextIsLoading";
// import { FetchPostFunc } from "../Types/Components/PostPage/PostPageType";

const Edit: React.FC = () => {
  const { categoryList, updateCategoryList } = useContext(ContextCategoryList);
  const { tagList, updateTagList } = useContext(ContextTagList);
  const { isLoading, updateIsLoading } = useContext(ContextIsLoading);

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

        navigate("/");
      })
      .catch(() => {
        alert(ALERT_EDIT.UPLOAD_SUCCESS);
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
