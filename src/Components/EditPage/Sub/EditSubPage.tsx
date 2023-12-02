import React, { useState } from "react";
import "../../../CSS/EditPage/EditSubPage/EditSubPage.css";
import EditOptionLists from "./Features/InsertOptionButton";
import { EditSubPageProps } from "../../../Types/Components/Edit/EditSubTypes";
import { OnClickEventType } from "../../../Types/EventTypes";

const EditSubPage: React.FC<EditSubPageProps> = ({ onUpdate }) => {
  const [toggled, setToggled] = useState<boolean>(false);

  const toggleHandler: OnClickEventType = e => {
    e.preventDefault();
    setToggled(!toggled);
  };

  return (
    <aside className="edit__subpage">
      <div className={`subpage__optionbox${toggled ? "-toggle" : ""}`}>
        <EditOptionLists
          onUpdate={onUpdate}
          listType="category"
        />
        <EditOptionLists
          onUpdate={onUpdate}
          listType="tag"
        />
      </div>
      <button
        className="subpage__togglebutton"
        onClick={toggleHandler}>
        <span>Option's</span>
        <span>Toggle</span>
      </button>
    </aside>
  );
};

export default EditSubPage;
