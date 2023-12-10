import React, { useState } from "react";
import "../../../CSS/EditPage/EditSubPage/EditSubPage.css";
import InsertOptionButton from "./Features/InsertOptionButton";
import { EditSubPageProps } from "../../../Types/Components/Edit/EditSubTypes";
import { OnClickEvent } from "../../../Types/EventTypes";

const EditSubPage: React.FC<EditSubPageProps> = ({ onUpdate }) => {
  const [toggled, setToggled] = useState<boolean>(false);

  const toggleHandler: OnClickEvent = e => {
    e.preventDefault();
    setToggled(!toggled);
  };
  const isToggled: string = toggled ? "-toggle" : "";

  return (
    <aside className="edit__subpage">
      <div className={`subpage__actions${isToggled}`}>
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
        className="subpage__button"
        onClick={toggleHandler}>
        <span>Option's</span>
        <span>Toggle</span>
      </button>
    </aside>
  );
};

export default EditSubPage;
