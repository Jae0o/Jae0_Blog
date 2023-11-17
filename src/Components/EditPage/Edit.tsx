import React, { useEffect, useState } from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";
import { PostDataType } from "../../Types/Components/Edit/EditorTypes";
import { getCategory } from "../../API/FirebaseDB";

const newPost: PostDataType = {
  title: "제목 없음",
  subtitle: "부제목 없음",
  main: "## 본문 없음",
  isPublic: true,
};
const Edit: React.FC = () => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategory();
      setCategoryList(res);
    };
    fetchData();
  }, []);

  return (
    <section className="outlet__edit">
      <EditPage post={newPost} categoryList={categoryList} />
      <EditSubPage />
    </section>
  );
};

export default Edit;
