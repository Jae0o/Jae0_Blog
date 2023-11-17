import React from "react";
import { EditorCategoryProps } from "../../../../Types/Components/Edit/EditorTypes";

const EditorCategory: React.FC<EditorCategoryProps> = ({ categoryList }) => {
  return (
    <form className="Editor__category-form">
      <ul className="Editor__category-box">
        {categoryList &&
          categoryList.map((item, idx) => (
            <li key={idx} className="Editor__category-item">
              <input
                className="Editor__category-input"
                id={`categoryList-${idx}`}
                value={item}
                name="category"
                type="radio"
              />
              <label className="Editor__category-label" htmlFor={`categoryList-${idx}`}>
                {item}
              </label>
            </li>
          ))}
      </ul>
    </form>
  );
};

export default EditorCategory;
