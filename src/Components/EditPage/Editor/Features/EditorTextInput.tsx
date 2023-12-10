import React from "react";
import { EditorTextInputProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeEvent } from "../../../../Types/EventTypes";
import "../../../../CSS/EditPage/Editor/EditorTextInput.css";

const EditorTextInput: React.FC<EditorTextInputProps> = ({
  typeName,
  onTyping,
  state,
}) => {
  const onChangeData: OnChangeEvent = e => {
    e.preventDefault();

    if (e.currentTarget instanceof HTMLInputElement) {
      const target: HTMLInputElement = e.currentTarget;

      onTyping(typeName, target.value);
    }
  };

  return (
    <div className={`Editor__${typeName}`}>
      <input
        className={`${typeName}__text`}
        type="text"
        value={state}
        onChange={onChangeData}
        placeholder="Text none"
      />
    </div>
  );
};

export default EditorTextInput;
