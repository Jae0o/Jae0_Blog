import React, { useState } from "react";
import { EditorCategoryProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeType } from "../../../../Types/EventTypes";

const EditorCategory: React.FC<EditorCategoryProps> = ({ categoryList, onSelecting, state }) => {
  const [selected, setSelected] = useState<string>(state);

  const selectedHandler: OnChangeType = (e) => {
    const target = e.currentTarget as HTMLInputElement;
    setSelected(target.value);
    onSelecting("category", target.value);
  };

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
                onChange={selectedHandler}
                checked={selected === item}
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
