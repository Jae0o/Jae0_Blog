import React, { useState } from "react";
import { EditorTagsProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeEventType } from "../../../../Types/EventTypes";

const EditorTags: React.FC<EditorTagsProps> = ({ tags, state }) => {
  const [selected, setSelected] = useState<string[]>(state);

  const toggleTagHandler: OnChangeEventType = (e) => {
    const element: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const target: string = element.value;

    if (selected.includes(target)) {
      const newSelected = selected.filter((item) => item !== target);
      setSelected(newSelected);
      return;
    }
    setSelected([...selected, target]);
  };

  return (
    <ul className="Editor__tag-box">
      {tags &&
        tags.map((item, idx) => (
          <li key={idx} className="Editor__tag-item">
            <input
              id={`tagsCheckbox-${idx}`}
              className="Editor__tag-input"
              type="checkbox"
              value={item}
              checked={selected.includes(item)}
              onChange={toggleTagHandler}
            ></input>
            <label className="Editor__tag-label" htmlFor={`tagsCheckbox-${idx}`}>
              {item}
            </label>
          </li>
        ))}
    </ul>
  );
};

export default EditorTags;
