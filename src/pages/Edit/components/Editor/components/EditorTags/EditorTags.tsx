import "./EditorTags.style.css";

import React, { ChangeEvent } from "react";

import { EditValue } from "../../Editor.type";

interface EditorTagsProps {
  tags: string[];
  state: string[];
  onSelecting: (key: EditValue, tag: string[]) => void;
}

const EditorTags = ({
  tags,
  state,
  onSelecting,
}: EditorTagsProps): React.ReactNode => {
  const toggleTagHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const element = e.currentTarget;
    const target = element.value;

    let newSelected: string[];

    if (state.includes(target)) {
      newSelected = state.filter(item => item !== target);
    } else {
      newSelected = [...state, target];
    }

    onSelecting("tag", newSelected);
  };

  return (
    <ul className="Editor__tags">
      <h6 className="tags__title">태그 :</h6>
      {tags &&
        tags.map((item, idx) => {
          const isChecked: boolean = state.includes(item);

          return (
            <li
              key={item}
              className={`tags__item${isChecked ? "-checked" : ""}`}>
              <input
                id={`tagsCheckbox-${idx}`}
                className="tags__input"
                type="checkbox"
                value={item}
                checked={isChecked}
                onChange={toggleTagHandler}></input>
              <label
                className="tags__label"
                htmlFor={`tagsCheckbox-${idx}`}>
                {item}
              </label>
            </li>
          );
        })}
    </ul>
  );
};

export default EditorTags;
