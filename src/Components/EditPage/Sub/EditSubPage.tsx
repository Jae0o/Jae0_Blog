import React from "react";
import "../../../CSS/EditPage/EditSubPage/EditSubPage.css";
import EditLists from "./Features/EditLists";
import { EditSubPageProps } from "../../../Types/Components/Edit/EditSubTypes";

const EditSubPage: React.FC<EditSubPageProps> = ({ onUpdate }) => {
  return (
    <aside className="edit__subpage">
      <div className="subpage__optionbox">
        <EditLists onUpdate={onUpdate} listType="category" />
        <EditLists onUpdate={onUpdate} listType="tag" />
      </div>
      <button className="subpage__togglebutton">
        <span>Option's</span>
        <span>Toggle</span>
      </button>
    </aside>
  );
};

export default EditSubPage;
