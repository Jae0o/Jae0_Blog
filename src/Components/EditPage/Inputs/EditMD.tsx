import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { OnChangeType } from "../../../Types/EventTypes";
import { EditMDProps } from "../../../Types/EditorTypes";

const EditMD: React.FC<EditMDProps> = ({ onTyping, state }) => {
  const [value, setValue] = useState<string>(state);

  useEffect(() => {
    onTyping("main", value);
  }, [value]);

  return (
    <div className="editor__MD-outbox">
      <div className="editor__MD-box" data-color-mode="light">
        <MDEditor className="editor-MD-input" value={value} onChange={(newValue) => setValue(newValue as string)} />
      </div>
    </div>
  );
};

export default EditMD;
