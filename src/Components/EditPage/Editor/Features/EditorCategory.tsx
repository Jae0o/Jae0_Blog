import React, { useState } from "react";
import "../../../../CSS/EditPage/Editor/EditorCategory.css";
import { EditorCategoryProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeEvent } from "../../../../Types/EventTypes";

const EditorCategory: React.FC<EditorCategoryProps> = ({
  categoryList,
  onSelecting,
  state,
}) => {
  const [selected, setSelected] = useState<string>(state);

  const selectedHandler: OnChangeEvent = e => {
    const target = e.currentTarget as HTMLInputElement;
    setSelected(target.value);
    onSelecting("category", target.value);
  };

  return (
    <form className="Editor__category">
      <h6 className="category__title">카테고리 :</h6>
      <ul className="category__item-container">
        {categoryList &&
          categoryList.map((item, idx) => {
            const isSelected: boolean = selected === item;

            return (
              <li
                key={idx}
                className={`category__item${isSelected ? "-checked" : ""}`}>
                <input
                  className="category__radio"
                  id={`categoryList-${idx}`}
                  value={item}
                  name="category"
                  type="radio"
                  onChange={selectedHandler}
                  checked={isSelected}
                />
                <label
                  className="category__label"
                  htmlFor={`categoryList-${idx}`}>
                  {item}
                </label>
              </li>
            );
          })}
      </ul>
    </form>
  );
};

export default EditorCategory;
