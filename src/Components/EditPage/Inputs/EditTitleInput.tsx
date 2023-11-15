import React from "react";
import { EditInputProps } from "../../../Types/EditorTypes";

const EditTitleInput: React.FC<EditInputProps> = ({ typeName }) => {
  return (
    <div className={`Editor__${typeName}-box`}>
      <input className={`Editor__${typeName}-input`} type="text" />
    </div>
  );
};

export default EditTitleInput;
