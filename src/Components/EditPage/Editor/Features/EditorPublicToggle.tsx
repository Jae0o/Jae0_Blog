import React, { useCallback, useState } from "react";
import "../../../../CSS/EditPage/Editor/EditorPublicToggle.css";
import { OnChangeEventType } from "../../../../Types/EventTypes";
import {
  EditPublicToggleProps,
  ChangePublicTextFunc,
} from "../../../../Types/Components/Edit/EditorTypes";

const EditorPublicToggle: React.FC<EditPublicToggleProps> = ({
  state,
  onToggle,
}) => {
  const [isPublic, setIsPublic] = useState<boolean>(state);

  const onChangeToggle: OnChangeEventType = () => {
    setIsPublic(!isPublic);
    onToggle("isPublic", !isPublic);
  };

  const changePublicText = useCallback<ChangePublicTextFunc>(isPublic => {
    if (isPublic) {
      return "공개 상태";
    }
    return "비공개 상태";
  }, []);

  const onToggleClassName: string = isPublic ? "-onToggled" : "";

  return (
    <div className="Editor__public">
      <input
        className="public__checkbox"
        id="publicToggleBox"
        type="checkbox"
        checked={isPublic}
        onChange={onChangeToggle}
      />
      <label
        htmlFor="publicToggleBox"
        className={`public__slider${onToggleClassName}`}>
        <div className={`public__slider-item${onToggleClassName}`}></div>
      </label>
      <label
        htmlFor="publicToggleBox"
        className="public__text">
        {changePublicText(isPublic)}
      </label>
    </div>
  );
};

export default EditorPublicToggle;
