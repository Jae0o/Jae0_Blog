import React, { useEffect, useState } from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";
import { PostDataType } from "../../Types/Components/Edit/EditorTypes";
import { getList } from "../../API/FirebaseDB";
import { onUpdateFunc } from "../../Types/Components/Edit/EditSubTypes";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    const fetchData = async () => {
      const category: string[] = await getList("category");
      const tag: string[] = await getList("tag");
      setCategoryList(category);
      setTagList(tag);
    };
    fetchData();
  }, []);

  const onUpdateLists: onUpdateFunc = (name, value) => {
    if (name === "category") {
      setCategoryList([...categoryList, value]);
      return;
    }
    if (name === "tag") {
      setTagList([...tagList, value]);
      return;
    }
  };

  return (
    <section className="outlet__edit">
      <EditPage post={newPost} categoryList={categoryList} tagList={tagList} />
      <EditSubPage onUpdate={onUpdateLists} />
    </section>
  );
};

export default Edit;
