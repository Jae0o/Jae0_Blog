import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { EditMDProps, OnChangeMDType } from "../../../Types/EditorTypes";

const EditMD: React.FC<EditMDProps> = ({ onTyping, state }) => {
  const [value, setValue] = useState<string>(state);

  const onChangeMD: OnChangeMDType = (value) => {
    setValue(value);
    onTyping("main", value);
  };

  return (
    <div className="editor__MD-outbox">
      <div className="editor__MD-box" data-color-mode="light">
        <MDEditor className="editor-MD-input" value={value} onChange={(newValue) => onChangeMD(newValue as string)} />
      </div>
    </div>
  );
};

export default EditMD;
