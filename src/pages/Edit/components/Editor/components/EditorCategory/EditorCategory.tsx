import "./EditorCategory.style.css";

import React, { ChangeEvent } from "react";

import { EditValue } from "../../Editor.type";

interface EditorCategoryProps {
  categoryList: string[];
  state: string;
  onSelecting: (key: EditValue, state: string) => void;
}

const EditorCategory = ({
  categoryList,
  onSelecting,
  state,
}: EditorCategoryProps): React.ReactNode => {
  const selectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    onSelecting("category", target.value);
  };

  return (
    <form className="Editor__category">
      <h6 className="category__title">카테고리 :</h6>
      <ul className="category__item-container">
        {categoryList &&
          categoryList.map((item, idx) => {
            const isSelected: boolean = state === item;

            return (
              <li
                key={item}
                className={`category__item${isSelected ? "-checked" : ""}`}
              >
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
                  htmlFor={`categoryList-${idx}`}
                >
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
