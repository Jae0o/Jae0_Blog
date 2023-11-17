import React, { useState } from "react";
import { EditorTextInputProps } from "../../../../Types/Components/Edit/EditorTypes";
import { OnChangeType } from "../../../../Types/EventTypes";

const EditorTextInput: React.FC<EditorTextInputProps> = ({ typeName, onTyping, state }) => {
  const [textValue, setTextValue] = useState<string>(state);

  const onChangeData: OnChangeType = (e) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLInputElement;
    setTextValue(target.value);
    onTyping(typeName, target.value);
  };

  return (
    <div className={`Editor__${typeName}-box`}>
      <input className={`Editor__${typeName}-input`} type="text" value={textValue} onChange={onChangeData} />
    </div>
  );
};

export default EditorTextInput;
