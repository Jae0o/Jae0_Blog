import React, { useCallback } from "react";
import "./EditorPublic.Style.css";
import { EditPublicProps, ChangePublicText } from "../../Editor.Types";
import { OnChangeEvent } from "../../../../../Types/EventTypes";

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
