import React, { useContext, useEffect, useState } from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";
import {
  PostDataType,
  UploadPostFunc,
} from "../../Types/Components/Edit/EditorTypes";
import { setPost } from "../../API/FirebaseDB";
import { OnUpdateOptionFunc } from "../../Types/Components/Edit/EditSubTypes";
import { useNavigate, useParams } from "react-router-dom";
import { newPost } from "../../constants/PostInitialValue";
import UploadPage from "../UploadPage";
import { ALERT_EDIT } from "../../constants/AlertMessage";
import { ContextCategoryList } from "../../Context/ContextCategory";
import { ContextTagList } from "../../Context/ContextTagList";
import { ContextPostList } from "../../Context/ContextPostList";
import { ContextIsLoading } from "../../Context/ContextIsLoading";

const Edit: React.FC = () => {
  const { categoryList, updateCategoryList } = useContext(ContextCategoryList);
  const { tagList, updateTagList } = useContext(ContextTagList);
  const { updatePostList } = useContext(ContextPostList);
  const { isLoading, updateIsLoading } = useContext(ContextIsLoading);
  const [postData, setPostData] = useState<PostDataType>(newPost);

  const navigate = useNavigate();
  const { ID: pathId } = useParams();

  useEffect(() => {
    if (pathId === "newPost") return;
    setPostData(newPost);
  }, [pathId]);

  const onUpdateOption: OnUpdateOptionFunc = name => {
    if (name === "category") {
      updateCategoryList();
      return;
    }
    if (name === "tag") {
      updateTagList();
      return;
    }
  };

  const onUploadPost: UploadPostFunc = async post => {
    updateIsLoading(true);

    await setPost(post)
      .then(() => {
        alert(ALERT_EDIT.UPLOAD_SUCCESS);
        updatePostList();
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
        post={postData}
        categoryList={categoryList}
        tagList={tagList}
        onSubmit={onUploadPost}
      />
      <EditSubPage onUpdate={onUpdateOption} />
    </section>
  );
};

export default Edit;
