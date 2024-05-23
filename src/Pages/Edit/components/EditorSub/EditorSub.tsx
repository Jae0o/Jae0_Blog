import "./EditorSub.Style.css";
import React, { MouseEvent, useState } from "react";
import { InsertOptionButton } from "./components";

interface EditorSubPageProps {
  onUpdate: (name: string) => void;
}

const EditSubPage = ({ onUpdate }: EditorSubPageProps): React.ReactNode => {
  const [toggled, setToggled] = useState<boolean>(false);

  const toggleHandler = (e: MouseEvent<HTMLButtonElement>) => {
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
