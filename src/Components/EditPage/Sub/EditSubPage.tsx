import React from "react";
import "../../../CSS/EditPage/EditSubPage/EditSubPage.css";
import EditLists from "./Features/EditLists";
import { EditSubPageProps } from "../../../Types/Components/Edit/EditSubTypes";

const EditSubPage: React.FC<EditSubPageProps> = ({ onUpdate }) => {
  return (
    <aside className="editsubpage">
      <EditLists onUpdate={onUpdate} listType="category" />
      <EditLists onUpdate={onUpdate} listType="tag" />
    </aside>
  );
};

export default EditSubPage;
