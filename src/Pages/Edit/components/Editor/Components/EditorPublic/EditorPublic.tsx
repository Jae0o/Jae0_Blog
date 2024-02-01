import "./EditorPublic.Style.css";
import React, { useCallback } from "react";
import { OnChangeEvent } from "@/Types/Event.Types";
import { EditValue } from "../../Editor.Types";

interface EditPublicProps {
  state: boolean;
  onToggle: (key: EditValue, state: boolean) => void;
}

const EditorPublic = ({
  state,
  onToggle,
}: EditPublicProps): React.ReactNode => {
  const onChangeToggle: OnChangeEvent = () => {
    onToggle("isPublic", !state);
  };

  const changePublicText = useCallback((isPublic: boolean) => {
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
