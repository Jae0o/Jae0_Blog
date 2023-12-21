import React, { useState } from "react";
import "./EditorSub.Style.css";
import InsertOptionButton from "./Components/InsertOptionButton";
import { EditorSubPageProps } from "./EditorSub.Types";
import { OnClickEvent } from "../../../Types/EventTypes";

const EditSubPage: React.FC<EditorSubPageProps> = ({ onUpdate }) => {
  const [toggled, setToggled] = useState<boolean>(false);

  const toggleHandler: OnClickEvent = e => {
    e.preventDefault();
    setToggled(!toggled);
  };
  const isToggled: string = toggled ? "-toggle" : "";

  return (
    <aside className="edit__sub">
      <div className={`sub__actions${isToggled}`}>
        <InsertOptionButton
          onUpdate={onUpdate}
          listType="category"
        />
        <InsertOptionButton
          onUpdate={onUpdate}
          listType="tag"
        />
      </div>
      <button
        className="sub__button"
        onClick={toggleHandler}>
        <span>Option's</span>
        <span>Toggle</span>
      </button>
    </aside>
  );
};

export default EditSubPage;
