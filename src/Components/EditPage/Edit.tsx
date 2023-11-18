import React, { useEffect, useState } from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";
import { PostDataType, UploadPostFunc } from "../../Types/Components/Edit/EditorTypes";
import { getList, setPost } from "../../API/FirebaseDB";
import { OnOptionUpdateFunc } from "../../Types/Components/Edit/EditSubTypes";
import { useNavigate, useParams } from "react-router-dom";

const newPost: PostDataType = {
  id: "newPost",
  createAt: "newPost",
  updateAt: "newPost",
  title: "제목 없음",
  subtitle: "부제목 없음",
  main: "## 본문 없음",
  isPublic: true,
  category: "",
  tag: [],
};

const Edit: React.FC = () => {
  const pathId = useParams();
  console.log(pathId);

  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const category: string[] = await getList("category");
      const tag: string[] = await getList("tag");
      setCategoryList(category);
      setTagList(tag);
    };
    fetchData();
  }, []);

  // 이른 변경 onOptionListsUpdate
  const onOptionUpdate: OnOptionUpdateFunc = (name, value) => {
    if (name === "category") {
      setCategoryList([...categoryList, value]);
      return;
    }
    if (name === "tag") {
      setTagList([...tagList, value]);
      return;
    }
  };

  const navigate = useNavigate();
  const onPostUpload: UploadPostFunc = async (post) => {
    setIsLoading(true);

    await setPost(post) //
      .then(() => navigate("/"))
      .catch(() => {
        alert("업로드에 실패했습니다.");
        setIsLoading(false);
      });
  };

  return (
    <section className="outlet__edit">
      <EditPage post={newPost} categoryList={categoryList} tagList={tagList} onSubmit={onPostUpload} />
      <EditSubPage onUpdate={onOptionUpdate} />
    </section>
  );
};

export default Edit;
