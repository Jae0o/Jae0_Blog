import React, { useEffect, useState } from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";
import { UploadPostFunc } from "../../Types/Components/Edit/EditorTypes";
import { getList, setPost } from "../../API/FirebaseDB";
import { OnOptionUpdateFunc } from "../../Types/Components/Edit/EditSubTypes";
import { useNavigate /*  useParams */ } from "react-router-dom";
import { newPost } from "../../constants/PostInitialValue";
import UploadPage from "../UploadPage";

const Edit: React.FC = () => {
  // const { ID: pathId } = useParams();

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
      <EditPage post={newPost} categoryList={categoryList} tagList={tagList} onSubmit={onPostUpload} />
      <EditSubPage onUpdate={onOptionUpdate} />
    </section>
  );
};

export default Edit;
