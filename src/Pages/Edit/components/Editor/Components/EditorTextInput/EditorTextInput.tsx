import React from "react";
import "./EditorTextInput.Style.css";
import { EditorTextInputProps } from "../../Editor.Types";
import { OnChangeEvent } from "../../../../../../Types/Event.Types";

const EditorTextInput = ({
  typeName,
  onTyping,
  state,
}: EditorTextInputProps): React.ReactNode => {
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
