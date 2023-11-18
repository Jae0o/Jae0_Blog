import React from "react";
import "../../../CSS/EditPage/EditSubPage/EditSubPage.css";
import EditOptionLists from "./Features/EditOptionLists";
import { EditSubPageProps } from "../../../Types/Components/Edit/EditSubTypes";

const EditSubPage: React.FC<EditSubPageProps> = ({ onUpdate }) => {
  return (
    <aside className="edit__subpage">
      <div className="subpage__optionbox">
        <EditOptionLists onUpdate={onUpdate} listType="category" />
        <EditOptionLists onUpdate={onUpdate} listType="tag" />
      </div>
      <button className="subpage__togglebutton">
        <span>Option's</span>
        <span>Toggle</span>
      </button>
    </aside>
  );
};

export default EditSubPage;
