import React, { useEffect, useState } from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";
import { PostDataType } from "../../Types/Components/Edit/EditorTypes";
import { getList } from "../../API/FirebaseDB";
import { onUpdateFunc } from "../../Types/Components/Edit/EditSubTypes";

const newPost: PostDataType = {
  title: "제목 없음",
  subtitle: "부제목 없음",
  main: "## 본문 없음",
  isPublic: true,
  category: "",
};
const Edit: React.FC = () => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const category: string[] = await getList("category");
      setCategoryList(category);
    };
    fetchData();
  }, []);

  const onUpdateLists: onUpdateFunc = (name, value) => {
    if (name === "category") {
      setCategoryList([...categoryList, value]);
      return;
    }
  };

  return (
    <section className="outlet__edit">
      <EditPage post={newPost} categoryList={categoryList} />
      <EditSubPage onUpdate={onUpdateLists} />
    </section>
  );
};

export default Edit;
