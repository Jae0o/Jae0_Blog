import React, { useState } from "react";
import { EditorTextInputProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeEventType } from "../../../../Types/EventTypes";
import "../../../../CSS/EditPage/Editor/EditorTextInput.css";

const EditorTextInput: React.FC<EditorTextInputProps> = ({ typeName, onTyping, state }) => {
  const [textValue, setTextValue] = useState<string>(state);

  const onChangeData: OnChangeEventType = (e) => {
    e.preventDefault();

    if (e.currentTarget instanceof HTMLInputElement) {
      const target: HTMLInputElement = e.currentTarget;

      setTextValue(target.value);
      onTyping(typeName, target.value);
    }
  };

  return (
    <div className={`Editor__${typeName}-box`}>
      <input
        className={`${typeName}__text`}
        type="text"
        value={textValue}
        onChange={onChangeData}
        placeholder="Text none"
      />
    </div>
  );
};

export default EditorTextInput;
