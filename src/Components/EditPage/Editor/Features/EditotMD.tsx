import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { EditorMDProps, EditorMDOnChangeFunc } from "../../../../Types/Components/Edit/EditorTypes";

const EditorMD: React.FC<EditorMDProps> = ({ onTyping, state }) => {
  const [value, setValue] = useState<string>(state);

  const onChangeMD: EditorMDOnChangeFunc = (value) => {
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

export default EditorMD;
