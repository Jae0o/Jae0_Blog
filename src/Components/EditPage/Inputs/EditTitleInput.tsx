import React, { useState, useEffect } from "react";
import { EditInputProps } from "../../../Types/EditorTypes";
import { OnChangeType } from "../../../Types/EventTypes";

const EditTitleInput: React.FC<EditInputProps> = ({ typeName, onTyping }) => {
  const [textValue, setTextValue] = useState<string>("");

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

export default EditTitleInput;
