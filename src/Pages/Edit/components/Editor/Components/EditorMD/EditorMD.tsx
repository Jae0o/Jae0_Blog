import React from "react";
import "./EditorMD.Style.css";
import MDEditor from "@uiw/react-md-editor";
import { EditorMDProps, OnChangeEditorMD } from "../../Editor.Types";

const EditorMD: React.FC<EditorMDProps> = ({ onTyping, state }) => {
  const onChangeMD: OnChangeEditorMD = value => {
    onTyping("main", value);
  };

  return (
    <div className="editor__MD">
      <div
        className="MD"
        data-color-mode="light">
        <MDEditor
          height={"100%"}
          value={state}
          onChange={newValue => onChangeMD(newValue as string)}
        />
      </div>
    </div>
  );
};

export default EditorMD;
