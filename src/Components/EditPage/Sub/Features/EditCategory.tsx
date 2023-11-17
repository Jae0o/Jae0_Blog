import React, { useEffect, useState } from "react";
import { OnClickType } from "../../../../Types/EventTypes";

const EditCategory: React.FC = () => {
  const [newCategory, setNewCategory] = useState<string>();

  useEffect(() => {
    const isAgree: boolean = window.confirm(`${newCategory} 라는 값을 추가하실건가요?`);
    if (isAgree) {
      console.log(newCategory);
    }
  }, [newCategory]);

  const categoryHandler: OnClickType = () => {
    const value: string | null = prompt("새로 추가할 카테고리의 이름을 넣어주세요");
    if (!value) return;
    setNewCategory(value);
  };

  return (
    <div>
      <h6>카테고리 추가</h6>
      <button onClick={categoryHandler}>카테고리 추가</button>
    </div>
  );
};

export default EditCategory;
