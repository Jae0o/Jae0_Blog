import "./EditorSub.Style.css";
import React, { useState } from "react";
import { OnClickEvent } from "@/Types/Event.Types";
import InsertOptionButton from "./Components/InsertOptionButton";

interface EditorSubPageProps {
  onUpdate: (name: string) => void;
}

const EditSubPage = ({ onUpdate }: EditorSubPageProps): React.ReactNode => {
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
