import React, { useState } from "react";
import "../../../../CSS/EditPage/Editor/EditorCategory.css";
import { EditorCategoryProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeEventType } from "../../../../Types/EventTypes";

const EditorCategory: React.FC<EditorCategoryProps> = ({ categoryList, onSelecting, state }) => {
  const [selected, setSelected] = useState<string>(state);

  const selectedHandler: OnChangeEventType = (e) => {
    const target = e.currentTarget as HTMLInputElement;
    setSelected(target.value);
    onSelecting("category", target.value);
  };

  return (
    <form className="Editor__category-form">
      <h6 className="category__title">카테고리 :</h6>
      <ul className="category__itembox">
        {categoryList &&
          categoryList.map((item, idx) => (
            <li key={idx} className="category__item">
              <input
                className="category__item-radio"
                id={`categoryList-${idx}`}
                value={item}
                name="category"
                type="radio"
                onChange={selectedHandler}
                checked={selected === item}
              />
              <label className="category__label" htmlFor={`categoryList-${idx}`}>
                {item}
              </label>
            </li>
          ))}
      </ul>
    </form>
  );
};

export default EditorCategory;
