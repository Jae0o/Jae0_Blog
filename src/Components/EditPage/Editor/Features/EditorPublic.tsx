import React, { useCallback } from "react";
import "../../../../CSS/EditPage/Editor/EditorPublic.css";
import { OnChangeEvent } from "../../../../Types/Components/EventTypes";
import {
  EditPublicProps,
  ChangePublicText,
} from "../../../../Types/Components/Edit/EditorTypes";

const EditorPublic: React.FC<EditPublicProps> = ({ state, onToggle }) => {
  const onChangeToggle: OnChangeEvent = () => {
    onToggle("isPublic", !state);
  };

  const changePublicText = useCallback<ChangePublicText>(isPublic => {
    if (isPublic) {
      return "공개 상태";
    }
    return "비공개 상태";
  }, []);

  const onToggleClassName: string = state ? "-onToggled" : "";

  return (
    <div className="Editor__public">
      <input
        className="public__checkbox"
        id="publicToggleBox"
        type="checkbox"
        checked={state}
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
        {changePublicText(state)}
      </label>
    </div>
  );
};

export default EditorPublic;
