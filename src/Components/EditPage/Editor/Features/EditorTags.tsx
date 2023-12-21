import React from "react";
import "../../../../CSS/EditPage/Editor/EditorTags.css";
import { EditorTagsProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeEvent } from "../../../../Types/Components/EventTypes";

const EditorTags: React.FC<EditorTagsProps> = ({
  tags,
  state,
  onSelecting,
}) => {
  const toggleTagHandler: OnChangeEvent = e => {
    const element: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const target: string = element.value;

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
              key={idx}
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
