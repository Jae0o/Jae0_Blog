import React, { useEffect, useState } from "react";
import { OnClickEventType } from "../../../../Types/EventTypes";
import { getCategory, setCategory } from "../../../../API/FirebaseDB";
import { EditCategoryListProps } from "../../../../Types/Components/Edit/EditSubTypes";

const EditCategoryList: React.FC<EditCategoryListProps> = ({ onUpdate }) => {
  const [newCategory, setNewCategory] = useState<string>("");

  useEffect(() => {
    if (!newCategory) return;
    setCategory(newCategory);
    setNewCategory("");
  }, [newCategory]);

  /* SetCategory */
  const categoryHandler: OnClickEventType = () => {
    const value: string | null = prompt("새로 추가할 카테고리의 이름을 넣어주세요");
    if (!value) return;

    const isAgree: boolean = window.confirm(`${value} 라는 값을 추가하실건가요?`);
    if (isAgree) {
      setNewCategory(value);
      onUpdate("category", value);
    }
  };

  /* getCategory 삭제 예정 */
  const getCate: OnClickEventType = () => {
    getCategory().then((res) => console.log(res));
  };

  return (
    <div>
      <h6>카테고리 추가</h6>
      <button onClick={categoryHandler}>카테고리 추가</button>
      <button onClick={getCate}>카테고리 가져오기 임시 테스트</button>
    </div>
  );
};

export default EditCategoryList;
