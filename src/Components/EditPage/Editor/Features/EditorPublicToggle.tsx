import React, { useState } from "react";
import "../../../../CSS/EditPage/Editor/EditorPublicToggle.css";
import { OnChangeEventType } from "../../../../Types/EventTypes";
import {
  EditPublicToggleProps,
  ChangToggleEditorTextFunc,
} from "../../../../Types/Components/Edit/EditorTypes";

const EditorPublicToggle: React.FC<EditPublicToggleProps> = ({ state, onToggle }) => {
  const [isPublic, setIsPublic] = useState<boolean>(state);

  const onChangeToggle: OnChangeEventType = (e) => {
    setIsPublic(!isPublic);
    onToggle("isPublic", !isPublic);
  };

  return (
    <div className="Editor__public-box">
      <input
        className="public__checkbox"
        id="publicToggleBox"
        type="checkbox"
        checked={isPublic}
        onChange={onChangeToggle}
      />
      <label
        htmlFor="publicToggleBox"
        className={`public__action-bar${isPublic ? "-onToggled" : ""}`}>
        <div className={`public__action-item${isPublic ? "-onToggled" : ""}`}></div>
      </label>
      <label htmlFor="publicToggleBox" className="public__text">
        {changeToggleText(isPublic)}
      </label>
    </div>
  );
};

export default EditorPublicToggle;

const changeToggleText: ChangToggleEditorTextFunc = (isPublic) => {
  if (isPublic) {
    return "공개 상태";
  }
  return "비공개 상태";
};
