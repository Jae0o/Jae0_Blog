import React, { useState, useEffect } from "react";
import { EditTextInputProps } from "../../../Types/EditorTypes";
import { OnChangeType } from "../../../Types/EventTypes";

const EditTextInput: React.FC<EditTextInputProps> = ({ typeName, onTyping, state }) => {
  const [textValue, setTextValue] = useState<string>(state);

  useEffect(() => {
    onTyping(typeName, textValue);
  }, [textValue]);

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

export default EditTextInput;
