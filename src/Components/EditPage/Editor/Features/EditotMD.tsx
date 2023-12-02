import React, { useState } from "react";
import "../../../../CSS/EditPage/Editor/EditorMD.css";
import MDEditor from "@uiw/react-md-editor";
import {
  EditorMDProps,
  OnChangeEditorMDFunc,
} from "../../../../Types/Components/Edit/EditorTypes";

const EditorMD: React.FC<EditorMDProps> = ({ onTyping, state }) => {
  const [value, setValue] = useState<string>(state);

  const onChangeMD: OnChangeEditorMDFunc = value => {
    setValue(value);
    onTyping("main", value);
  };

  return (
    <div className="editor__MD">
      <div
        className="MD"
        data-color-mode="light">
        <MDEditor
          height={"100%"}
          value={value}
          onChange={newValue => onChangeMD(newValue as string)}
        />
      </div>
    </div>
  );
};

export default EditorMD;
