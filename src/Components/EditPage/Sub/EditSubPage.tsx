import React from "react";
import "../../../CSS/EditPage/EditSubPage/EditSubPage.css";
import EditCategoryList from "./Features/EditCategoryList";
import { EditSubPageProps } from "../../../Types/Components/Edit/EditSubTypes";

const EditSubPage: React.FC<EditSubPageProps> = ({ onUpdate }) => {
  return (
    <aside className="editsubpage">
      <EditCategoryList onUpdate={onUpdate} />
    </aside>
  );
};

export default EditSubPage;
