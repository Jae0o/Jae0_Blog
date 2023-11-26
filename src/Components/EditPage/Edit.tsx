import React, { useContext, useEffect, useState } from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";
import { PostDataType, UploadPostFunc } from "../../Types/Components/Edit/EditorTypes";
import { getList, setPost } from "../../API/FirebaseDB";
import { OnOptionUpdateFunc } from "../../Types/Components/Edit/EditSubTypes";
import { useNavigate, useParams } from "react-router-dom";
import { newPost } from "../../constants/PostInitialValue";
import UploadPage from "../UploadPage";
import { ContextCategory } from "../../Context/ContextCategory";

const Edit: React.FC = () => {
  const { categoryList, updateCategoryList } = useContext(ContextCategory);
  const [tagList, setTagList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postData, setPostData] = useState<PostDataType>(newPost);

  const navigate = useNavigate();
  const { ID: pathId } = useParams();

  useEffect(() => {
    if (pathId === "newPost") return;
    setPostData(newPost);
  }, [pathId]);

  useEffect(() => {
    const fetchData = async () => {
      const tag: string[] = await getList("tag");
      updateCategoryList();
      setTagList(tag);
    };
    fetchData();
  }, [updateCategoryList]);

  const onOptionUpdate: OnOptionUpdateFunc = (name, value) => {
    if (name === "category") {
      updateCategoryList();
      return;
    }
    if (name === "tag") {
      setTagList([...tagList, value]);
      return;
    }
  };

  const onPostUpload: UploadPostFunc = async (post) => {
    setIsLoading(true);

    await setPost(post) //
      .then(() => {
        alert("업로드에 성공하였습니다! 👍");
        navigate("/");
      })
      .catch(() => {
        alert("업로드에 실패했습니다.");
        setIsLoading(false);
      });
  };

  if (isLoading) return <UploadPage />;

  return (
    <section className="outlet__edit">
      <EditPage post={postData} categoryList={categoryList} tagList={tagList} onSubmit={onPostUpload} />
      <EditSubPage onUpdate={onOptionUpdate} />
    </section>
  );
};

export default Edit;
