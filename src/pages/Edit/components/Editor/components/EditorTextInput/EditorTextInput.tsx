import "./EditorTextInput.style.css";

import React, { ChangeEvent } from "react";

import { EditValue, OnTypingEditor } from "../../Editor.type";

interface EditorTextInputProps {
  typeName: EditValue;
  onTyping: OnTypingEditor;
  state: string;
}

const EditorTextInput = ({
  typeName,
  onTyping,
  state,
}: EditorTextInputProps): React.ReactNode => {
  const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    onTyping(typeName, e.currentTarget.value);
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
