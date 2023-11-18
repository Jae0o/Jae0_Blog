import React, { useState } from "react";
import "../../../../CSS/EditPage/Editor/EditorTags.css";
import { EditorTagsProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeEventType } from "../../../../Types/EventTypes";

const EditorTags: React.FC<EditorTagsProps> = ({ tags, state, onSelecting }) => {
  const [selected, setSelected] = useState<string[]>(state);

  const toggleTagHandler: OnChangeEventType = (e) => {
    const element: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const target: string = element.value;

    let newSelected: string[];
    if (selected.includes(target)) {
      newSelected = selected.filter((item) => item !== target);
    } else {
      newSelected = [...selected, target];
    }

    setSelected(newSelected);
    onSelecting("tag", newSelected);
  };

  return (
    <ul className="Editor__tag-box">
      <h6 className="tags__title">태그 :</h6>
      {tags &&
        tags.map((item, idx) => {
          const isChecked: boolean = selected.includes(item);

          return (
            <li key={idx} className={`tags__item${isChecked ? "-checked" : ""}`}>
              <input
                id={`tagsCheckbox-${idx}`}
                className="tags__input"
                type="checkbox"
                value={item}
                checked={isChecked}
                onChange={toggleTagHandler}
              ></input>
              <label className="tags__label" htmlFor={`tagsCheckbox-${idx}`}>
                {item}
              </label>
            </li>
          );
        })}
    </ul>
  );
};

export default EditorTags;
