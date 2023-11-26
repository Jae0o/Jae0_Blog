import React, { useContext, useEffect, useState } from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";
import { PostDataType, UploadPostFunc } from "../../Types/Components/Edit/EditorTypes";
import { setPost } from "../../API/FirebaseDB";
import { OnOptionUpdateFunc } from "../../Types/Components/Edit/EditSubTypes";
import { useNavigate, useParams } from "react-router-dom";
import { newPost } from "../../constants/PostInitialValue";
import UploadPage from "../UploadPage";
import { ContextCategoryList } from "../../Context/ContextCategory";
import { ContextTagList } from "../../Context/ContextTagList";
import { ALERT_EDIT_UPLOAD_SUCCESS } from "../../constants/AlertMessage";

const Edit: React.FC = () => {
  const { categoryList, updateCategoryList } = useContext(ContextCategoryList);
  const { tagList, updateTagList } = useContext(ContextTagList);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postData, setPostData] = useState<PostDataType>(newPost);

  const navigate = useNavigate();
  const { ID: pathId } = useParams();

  useEffect(() => {
    if (pathId === "newPost") return;
    setPostData(newPost);
  }, [pathId]);

  const onOptionUpdate: OnOptionUpdateFunc = (name) => {
    if (name === "category") {
      updateCategoryList();
      return;
    }
    if (name === "tag") {
      updateTagList();
      return;
    }
  };

  const onPostUpload: UploadPostFunc = async (post) => {
    setIsLoading(true);

    await setPost(post) //
      .then(() => {
        alert(ALERT_EDIT_UPLOAD_SUCCESS);
        navigate("/");
      })
      .catch(() => {
        alert(ALERT_EDIT_UPLOAD_SUCCESS);
        setIsLoading(false);
      });
  };

  if (isLoading) return <UploadPage />;

  return (
    <section className="outlet__edit">
      <EditPage
        post={postData}
        categoryList={categoryList}
        tagList={tagList}
        onSubmit={onPostUpload}
      />
      <EditSubPage onUpdate={onOptionUpdate} />
    </section>
  );
};

export default Edit;
