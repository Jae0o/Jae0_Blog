import "./EditorSub.style.css";

import { MouseEvent, useState } from "react";

import { InsertOptionButton } from "./components";

const EditorSub = () => {
  const [toggled, setToggled] = useState<boolean>(false);

  const toggleHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggled(!toggled);
  };
  const isToggled: string = toggled ? "-toggle" : "";

  return (
    <aside className="edit__sub">
      <div className={`sub__actions${isToggled}`}>
        <InsertOptionButton optionName="category" />
        <InsertOptionButton optionName="tag" />
      </div>
      <button
        className="sub__button"
        onClick={toggleHandler}
      >
        <span>Option's</span>
        <span>Toggle</span>
      </button>
    </aside>
  );
};

export default EditorSub;
